// Documento do cliente: gera HTML (tela + impressão) e PDF. Uso: node doc.mjs
import { createRequire } from 'module'; import fs from 'fs'; import path from 'path'; import os from 'os'; import { execFileSync } from 'child_process'; import { fileURLToPath } from 'url';
import { PECAS } from './artes.mjs'; import { T,SEM } from './textos.mjs';
const AQUI=path.dirname(fileURLToPath(import.meta.url)), ID=path.join(AQUI,'../../identidade'), SAIDA=path.join(AQUI,'..');
const require=createRequire(path.join(AQUI,'../../../../package.json')); const { chromium }=require('@playwright/test');
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'mo-'));
const b64=(f,t)=>`data:${t};base64,`+fs.readFileSync(f).toString('base64');
const mini=(src,w,q=78)=>{const o=path.join(tmp,path.basename(src)+w+'.jpg');execFileSync('sips',['-s','format','jpeg','-s','formatOptions',String(q),'--resampleWidth',String(w),src,'--out',o],{stdio:'ignore'});return b64(o,'image/jpeg')};
const A=Object.fromEntries(PECAS.map(p=>[p.n,mini(`${AQUI}/artes/${p.n}.jpg`,640)]));
const fach=mini(`${ID}/loja/fachada.jpg`,1500,74), logoB=b64(`${ID}/logo-horizontal-branco.svg`,'image/svg+xml'), logoA=b64(`${ID}/logo-horizontal-azul.svg`,'image/svg+xml');
const lone=b64(path.join(AQUI,'../../../../shared/identidade-lone/lone-midia-logo-branco-azul.png'),'image/png');
const fontes=fs.readFileSync(`${ID}/fontes/barlow.css`,'utf8');
const P=Object.fromEntries(PECAS.map(p=>[p.n,p]));
const ol=p=>[...p.h,p.a].join(' ');
// imagens uma vez só, como variável CSS
const vars=Object.entries(A).map(([n,u])=>`--i${n}:url(${u})`).join(';');
const art=(n,c='')=>`<div class="art ${c}" role="img" aria-label="Arte de ${P[n].d}: ${ol(P[n])}" style="background-image:var(--i${n})"></div>`;
const ad={chamar:'Também anúncio · chamar',mostrar:'Também anúncio · mostrar',fechar:'Também anúncio · fechar'};
const linhas=[1,2,3,4,5].map(s=>{const ps=PECAS.filter(p=>T[p.n].sem===s);const cel=d=>{const p=ps.find(p=>T[p.n].dia===d);return p?`<div class="cel">${art(p.n)}<div><b>${p.d}</b><span>${T[p.n].eq}</span></div></div>`:'<div class="cel vazio"></div>'};return `<div class="sem"><div class="semt"><b>${SEM[s][0]}</b><span>${SEM[s][1]}</span></div>${cel('seg')}${cel('qua')}${cel('sex')}</div>`}).join('');
const cards=PECAS.map(p=>{const t=T[p.n];return `<article class="card">${art(p.n)}<div class="ct"><div class="cab"><b>${p.d}</b><span>${{seg:'segunda',qua:'quarta',sex:'sexta'}[t.dia]}</span>${t.ad?`<em>${ad[t.ad]}</em>`:''}</div><h3>${t.eq}</h3><p class="obj">${t.obj}</p><div class="leg">${t.leg.split('\n\n').map(x=>`<p>${x.replace(/\n/g,'<br>')}</p>`).join('')}</div></div></article>`}).join('');
const por=k=>PECAS.filter(p=>T[p.n].ad===k).map(p=>art(p.n)).join('');
const html=`<title>Dezembro da Mestre da Obra</title>
<meta name="claude:viewport-fit-sides" content="cover">
<style>
${fontes}
/* capa com a fachada, depois blocos claros; no papel vira A4 deitado */
:root{--azul:#284093;--noite:#16245c;--laranja:#FAA227;--papel:#f6f7fb;--branco:#fff;--tinta:#1b2340;--cinza:#5a6384;--linha:#d8ddec;${vars}}
*{box-sizing:border-box}body{background:var(--papel);color:var(--tinta);font:400 16px/1.5 'Barlow',Arial,sans-serif;margin:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}
h1,h2,h3,p{margin:0}h1,h2{font-family:'Barlow Condensed','Arial Narrow',sans-serif;font-weight:800;line-height:1;text-wrap:balance}
.in{max-width:1120px;margin:0 auto;padding-left:max(20px,env(safe-area-inset-left,0px));padding-right:max(20px,env(safe-area-inset-right,0px))}
.capa{background:linear-gradient(100deg,rgba(22,36,92,.97) 8%,rgba(40,64,147,.86) 48%,rgba(40,64,147,.2) 100%),url(${fach}) 70% 50%/cover;color:#fff}
.capa .in{padding-block:48px 44px;display:grid;gap:26px}.capa .lg{height:86px;margin-left:-14px;justify-self:start}
.capa h1{font-size:clamp(50px,8.6vw,104px);max-width:8.5em}.capa h1 span{color:var(--laranja)}.capa p{font-size:20px;max-width:31em}
.capa .lone{height:30px;justify-self:start;margin-top:22px}
section{padding-block:56px}section+section{border-top:1px solid var(--linha)}
h2{font-size:clamp(34px,4.6vw,52px);color:var(--azul);margin-bottom:10px}.sub{font-size:18px;color:var(--cinza);max-width:42em;margin-bottom:28px}
.tres{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:30px}.tres h3{font:800 30px/1 'Barlow Condensed';color:var(--azul);margin-bottom:8px}.tres h3 i{font-style:normal;background:var(--laranja);color:var(--noite);padding:1px 9px 4px}
.art{aspect-ratio:3/4;background-size:cover;background-position:center;width:100%;max-width:100%}
.prev{display:grid;grid-template-columns:minmax(0,470px) minmax(0,1fr);gap:56px;align-items:start}
.fone{background:#fff;border:1px solid var(--linha);border-radius:26px;overflow:hidden;box-shadow:0 18px 50px rgba(22,36,92,.16)}
.ig{display:grid;grid-template-columns:84px 1fr;gap:18px;padding:22px 20px 16px;align-items:center}.av{width:84px;height:84px;border-radius:50%;background:var(--azul);display:grid;place-items:center}.av img{width:96px}
.ig b{display:block;font-size:17px}.ig span{display:block;font-size:14px;color:var(--cinza);line-height:1.35}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px}
.regras{display:grid;gap:20px}.regras b{display:block;color:var(--azul);font-size:19px}.regras p{color:var(--cinza);max-width:32em}
.sem{display:grid;grid-template-columns:1.25fr 1fr 1fr 1fr;gap:16px;align-items:center;padding-block:14px;border-top:1px solid var(--linha)}.sem.th{border:0;padding-block:0 8px;font-weight:700;color:var(--azul)}
.semt b{display:block;font:800 26px/1.05 'Barlow Condensed';color:var(--azul)}.semt span{color:var(--cinza);font-size:15px}
.cel{display:grid;grid-template-columns:64px minmax(0,1fr);gap:12px;align-items:center;font-size:14px;line-height:1.3}.cel b{display:block;font-size:16px}.cel span{color:var(--cinza)}
.cards{display:grid;gap:40px}.card{display:grid;grid-template-columns:minmax(0,330px) minmax(0,1fr);gap:34px;align-items:start}
.cab{display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center;margin-bottom:8px}.cab b{font:800 30px/1 'Barlow Condensed';color:var(--azul)}.cab span{color:var(--cinza)}.cab em{font-style:normal;font-weight:600;font-size:14px;background:#fdeccd;color:#6b4200;padding:3px 10px}
.card h3{font-size:21px;line-height:1.2;margin-bottom:4px}.obj{color:var(--cinza);margin-bottom:16px}.leg{border-top:1px solid var(--linha);padding-top:14px;display:grid;gap:9px;max-width:38em}
.etapa .mini{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:14px;max-width:270px}.med{margin-top:30px;max-width:46em}
.lista{display:grid;gap:14px;padding:0;margin:0;list-style:none;max-width:50em}.lista li{display:grid;grid-template-columns:26px 1fr;gap:12px}.lista li:before{content:"";width:20px;height:20px;border:2px solid var(--laranja);margin-top:3px}
.nota{color:var(--cinza);font-size:14px;margin-top:22px}
@media(max-width:820px){.prev{grid-template-columns:1fr;gap:32px}.card{grid-template-columns:1fr;gap:16px}.card .art{max-width:360px}.sem{grid-template-columns:1fr}.sem.th{display:none}.cel.vazio{display:none}}
@page{size:A4 landscape;margin:0}
@media print{:root{padding:0!important}body{background:#fff;font-size:10.6pt}.in{max-width:none;padding:0 14mm!important}
 section,.capa{break-before:page;page-break-before:always;break-inside:avoid;border:0!important;padding-block:11mm 0}.capa{min-height:209.5mm;break-before:auto;page-break-before:auto;display:grid;align-items:center}
 .capa .in{width:100%}h2{font-size:30pt;margin-bottom:2mm}.sub{font-size:12pt;margin-bottom:5mm}
 .prev{grid-template-columns:97mm 1fr;gap:18mm}.fone{box-shadow:none}.ig{padding:3mm 5mm 2.5mm;grid-template-columns:14mm 1fr}.av{width:14mm;height:14mm}.av img{width:16mm}.ig span{font-size:8.5pt}
 .regras{gap:3.4mm}.sem{grid-template-columns:1.25fr 1fr 1fr 1fr;padding-block:1.7mm}.tres{gap:8mm}.semt b{font-size:17pt}.cel{font-size:9.5pt}.sem .cel .art{width:15mm}.sem.th{display:grid}.cel{grid-template-columns:15mm 1fr}.cel.vazio{display:block}
 .pecas{overflow:visible;min-height:0;break-inside:auto;page-break-inside:auto;padding-block:12mm 0}.cards{display:block}.card{grid-template-columns:62mm 1fr;gap:9mm;height:88mm;break-inside:avoid;page-break-inside:avoid;margin:0 0 6mm}.card .art{height:82.6mm;width:62mm}.leg{gap:1.6mm;padding-top:2.4mm;max-width:none;font-size:11.6pt;line-height:1.42}.obj{margin-bottom:2.4mm}
 .card:nth-child(2n){break-after:page;page-break-after:always;margin-bottom:0}.card:last-child{break-after:auto;page-break-after:auto}.card:nth-child(2n+1):not(:first-child){margin-top:12mm}.pecas .sub{margin-bottom:4mm}
 .pecas .head{display:none}.etapa .mini{max-width:62mm;gap:2.5mm}.med{margin-top:6mm}.lista{font-size:14pt;gap:5mm;max-width:none}.lista li{grid-template-columns:10mm 1fr}.nota{font-size:11pt}.regras b{font-size:15pt}.regras p{font-size:12pt}}
</style>
<div class="capa"><div class="in"><img class="lg" src="${logoB}" alt="Mestre da Obra"><h1>Planejamento de <span>dezembro</span></h1><p>12 artes pra loja de Araruama, feitas pra gerar pedido de orçamento no WhatsApp. Dez delas servem de post e também de anúncio.</p><img class="lone" src="${lone}" alt="Lone Mídia"></div></div>
<section><div class="in"><h2>Como o mês funciona</h2><p class="sub">O objetivo é conversa no WhatsApp com pedido de orçamento. Toda semana anda em três passos.</p>
<div class="tres"><div><h3>Segunda: <i>a situação</i></h3><p>A cena que o pedreiro, o empreiteiro ou o dono da casa reconhece, e a máquina que resolve aquilo.</p></div><div><h3>Quarta: <i>a máquina</i></h3><p>Um equipamento da loja em destaque, com o que ele faz e como pedir.</p></div><div><h3>Sexta: <i>a oferta</i></h3><p>O motivo pra fechar com vocês: a locação de fim de semana e o “cobrimos orçamento”.</p></div></div>
<div style="margin-top:34px"><div class="sem th"><div>Tema da semana</div><div>Segunda</div><div>Quarta</div><div>Sexta</div></div>${linhas}</div></div></section>
<section><div class="in"><div class="prev"><div class="fone"><div class="ig"><div class="av"><img src="${logoB}" alt=""></div><div><b>mestredaobraararuama</b><span>Mestre da Obra Araruama<br>Locação de máquinas e equipamentos para construção civil</span></div></div><div class="grid">${[...PECAS].reverse().map(p=>art(p.n)).join('')}</div></div>
<div><h2>Prévia do feed</h2><p class="sub">Assim fica o perfil no fim do mês, do mais novo pro mais antigo.</p><div class="regras">
<div><b>Claro e azul, um de cada vez</b><p>As cores da franquia se alternam a cada post e o perfil ganha unidade.</p></div>
<div><b>A máquina de verdade em primeiro plano</b><p>Equipamentos do catálogo da unidade e fotos da loja. Nada de personagem ou imagem inventada.</p></div>
<div><b>Frase curta, com a última linha em laranja</b><p>Dá pra entender passando o dedo no celular. Sempre em afirmação.</p></div>
<div><b>Mesmo lugar pra tudo</b><p>Logo em cima, equipamento no meio, botão e WhatsApp embaixo.</p></div>
<div><b>O hexágono da marca</b><p>O desenho da logo vira a moldura do equipamento.</p></div></div>
<p class="nota">As imagens são protótipos pra aprovação. O designer finaliza cada arte, com as fotos da loja quando chegarem.</p></div></div></div></section>
<section class="pecas"><div class="in"><div class="head"><h2>As 12 peças</h2><p class="sub">Arte, objetivo e legenda de cada post.</p></div><div class="cards">${cards}</div></div></section>
<section><div class="in"><h2>As mesmas artes como anúncio</h2><p class="sub" style="max-width:56em">Todo anúncio abre o WhatsApp da loja com a mensagem já escrita, por exemplo “Oi! Quero orçamento de betoneira”. Quem atende sabe de onde veio o pedido.</p>
<div class="tres etapa"><div><h3><i>Chamar</i></h3><p>Pra quem é da região e ainda não falou com a loja.</p><div class="mini">${por('chamar')}</div></div><div><h3><i>Mostrar</i></h3><p>Pra quem já tem um serviço e precisa de um equipamento.</p><div class="mini">${por('mostrar')}</div></div><div><h3><i>Fechar</i></h3><p>Pra quem já viu os posts, visitou o perfil ou mandou mensagem.</p><div class="mini">${por('fechar')}</div></div></div>
<div class="med"><h3 style="font-size:20px;color:var(--azul);margin-bottom:6px">Como vamos medir</h3><p>Conversas por equipamento e quanto custou cada uma, pelo gerenciador. Orçamentos e locações fechadas, pela planilha do balcão. A arte que traz mais locação ganha mais espaço.</p></div></div></section>
<section><div class="in"><h2>O que precisamos de vocês</h2><p class="sub">Com isso, dezembro começa no dia 2.</p><ul class="lista">
<li><span>Aprovação do padrão visual e dos textos.</span></li>
<li><span>Fotos no celular, na vertical e de dia: andaime montado, sapinho, lavadora, extratora e os quatro marteletes juntos. Se a planilha do balcão com as fotos estiver pronta, já ajuda.</span></li>
<li><span>Quais equipamentos entram na locação de sexta a segunda.</span></li>
<li><span>Se o “cobrimos orçamento” vale o mês inteiro, inclusive quando a outra loja está em promoção, e se tem algum limite.</span></li>
<li><span>Horário da loja de 24/12 a 02/01.</span></li>
<li><span>Até onde vocês entregam, pra definir a região dos anúncios.</span></li>
<li><span>Verba dos anúncios em dezembro e forma de pagamento cadastrada na conta.</span></li></ul>
<p class="nota">Nos stories: 11/12 (Dia do Engenheiro), 13/12 (Dia do Pedreiro) e 30/12 (horário da virada).</p></div></section>`;
const base='2026-11-24-planejamento-dezembro';
fs.writeFileSync(`${SAIDA}/${base}.html`,html);
const b=await chromium.launch({channel:'chrome'}); const pg=await b.newPage({viewport:{width:1200,height:850}});
const doc=`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>${html}</body></html>`;
fs.writeFileSync(`${SAIDA}/${base}.html`,doc.replace('<!doctype html>','<!doctype html>')); fs.writeFileSync(path.join(process.env.ART_OUT||tmp,'artifact.html'),html);
await pg.setContent(doc,{waitUntil:'load'}); await pg.evaluate(()=>document.fonts.ready); await pg.waitForTimeout(600);
if(process.env.ART_OUT) await pg.screenshot({path:`${process.env.ART_OUT}/tela.jpg`,type:'jpeg',quality:60,fullPage:true});
await pg.pdf({path:`${SAIDA}/${base}.pdf`,preferCSSPageSize:true,printBackground:true}); await b.close();
