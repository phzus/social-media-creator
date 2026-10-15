// Coleta pública de um perfil do Instagram, sem login: cabeçalho do perfil, print da grade
// e, por post, curtidas/comentários/legenda que o Instagram expõe na página pública do post.
// Uso: node scripts/instagram/coletar-perfil.mjs <usuario> <pasta-de-saida> [qtd-posts=12]
import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';
import path from 'node:path';

const [usuario, saida, qtd = '12'] = process.argv.slice(2);
if (!usuario || !saida) {
  console.error('Uso: node scripts/instagram/coletar-perfil.mjs <usuario> <pasta-de-saida> [qtd-posts]');
  process.exit(1);
}
await fs.mkdir(saida, { recursive: true });
const pausa = ms => new Promise(r => setTimeout(r, ms + Math.random() * ms));

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1280, height: 1800 }, locale: 'pt-BR' });

async function fecharPopup() {
  await page.locator('svg[aria-label="Fechar"], svg[aria-label="Close"]').first().click({ timeout: 4000 }).catch(() => {});
}
const meta = async nome => page.locator(`meta[property="${nome}"]`).first().getAttribute('content').catch(() => null);

await page.goto(`https://www.instagram.com/${usuario}/`, { waitUntil: 'domcontentloaded' });
await pausa(2500);
await fecharPopup();

const cabecalho = {
  titulo: await meta('og:title'),
  descricao: await meta('og:description'),
  bio: await page.locator('header section').first().innerText({ timeout: 5000 }).catch(() => null),
};

// Rola um pouco pra grade carregar o número de posts pedido.
const links = new Set();
for (let i = 0; i < 6 && links.size < Number(qtd); i++) {
  const hrefs = await page.locator('a[href*="/p/"], a[href*="/reel/"]').evaluateAll(as => as.map(a => a.getAttribute('href')));
  for (const href of hrefs) {
    // Normaliza "/usuario/p/XYZ/" e "/p/XYZ/" pro mesmo formato.
    const m = href.match(/\/(p|reel)\/[^/]+\//);
    if (m) links.add(m[0]);
  }
  await page.mouse.wheel(0, 1200);
  await pausa(1200);
  await fecharPopup();
}
await page.evaluate(() => window.scrollTo(0, 0));
await pausa(800);
await fecharPopup();
await page.screenshot({ path: path.join(saida, `${usuario}-grade.png`), fullPage: true });

const posts = [];
for (const [i, link] of [...links].slice(0, Number(qtd)).entries()) {
  await pausa(2000);
  await page.goto(`https://www.instagram.com${link}`, { waitUntil: 'domcontentloaded' });
  await pausa(1500);
  await fecharPopup();
  const descricao = await meta('og:description');
  const imagem = await meta('og:image');
  // Formato visto em 15/10/2026: "29 likes, 0 comments - usuario no June 12, 2025: "legenda""
  // (o Instagram mistura idiomas; o autor pode ser um parceiro de collab, não o dono do perfil).
  const m = descricao?.match(/^(.+?)\s+(?:curtidas?|likes?),\s*(.+?)\s+(?:comentários?|comments?)\s*-\s*\S+\s+(?:em|on|no)\s+([^:]+):\s*([\s\S]*)$/i);
  const post = {
    link: `https://www.instagram.com${link}`,
    tipo: link.startsWith('/reel/') ? 'reels' : 'post',
    curtidas: m?.[1]?.trim() ?? null,
    comentarios: m?.[2]?.trim() ?? null,
    data: m?.[3]?.trim() ?? null,
    legenda: m?.[4]?.replace(/^["“]|["”]\.?$/g, '').trim() ?? null,
  };
  if (!m) post.descricao_bruta = descricao;
  if (imagem) {
    const img = await page.request.get(imagem).catch(() => null);
    if (img?.ok()) {
      post.arquivo = `${usuario}-post-${String(i + 1).padStart(2, '0')}.jpg`;
      await fs.writeFile(path.join(saida, post.arquivo), await img.body());
    }
  }
  posts.push(post);
}

const perfil = { usuario, coletado_em: new Date().toISOString(), ...cabecalho, posts };
await fs.writeFile(path.join(saida, `${usuario}.json`), JSON.stringify(perfil, null, 2));
console.log(JSON.stringify({ usuario, descricao: cabecalho.descricao, posts: posts.length, com_metricas: posts.filter(p => p.curtidas).length }));
await browser.close();
