// Gera o lote em .md pro repositório a partir de textos.mjs e artes.mjs. Uso: node lote-md.mjs
import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url'; import { PECAS } from './artes.mjs'; import { T,SEM,SLIDES,VIDEO,ARTE } from './textos.mjs';
const AQUI=path.dirname(fileURLToPath(import.meta.url));
const FT={arte:'arte única',carrossel:'carrossel',video:'vídeo (Reels)'};
let s=`# Lote de dezembro/2026 — Contele Solar · 3 carrosséis, 4 vídeos e 5 artes

**Cliente:** contele-solar · **Formato:** 3:4 (1080×1440) e vídeo 9:16 · **Status:** v1 · copy de PH (plugin, 26/11, [original](../../referencias/2026-11-26-copies-dezembro-versao-ph.md)) com 3 ajustes, \`validador-copy\` rodado, documento do cliente montado e aguardando PH (portão 3)
**Estratégia:** [2026-12](../../estrategia/2026-12.md) · **Documento:** [PDF](../../apresentacoes/2026-11-26-planejamento-dezembro.pdf) · **Protótipos:** [feed](../../apresentacoes/2026-12-planejamento/artes/feed.jpg) · **Fonte dos textos:** \`apresentacoes/2026-12-planejamento/textos.mjs\` (este arquivo é gerado por \`lote-md.mjs\`, editar lá)

**Vale pra todas:** sistema do PADROES (Sand, Ink e Sun, serif itálico sem caixa alta, kicker mono com o assunto e a data, @contelesolarenergy no rodapé). Segunda Sand, quarta capa de vídeo com foto real e faixa Ink, sexta Ink. Sem telefone na arte: o WhatsApp vai na legenda. Quarta sem gravação sai em motion com foto real da Contele (PH, 25/11). EcoFlow e BLUETTI sempre juntas, no mesmo peso.

## Ajustes feitos na copy de PH

1. **WhatsApp no fim de toda legenda** (\`WhatsApp (22) 98806-0342 · Araruama/RJ\`). Nenhuma legenda dizia por onde chamar, e o PADROES §5 pede CTA explícito. O número não vai na arte (§3).
2. **Ressalva da estação nas peças 09 e 10** (PADROES §8, obrigatório): "A estação segura o essencial. Chuveiro elétrico e ar-condicionado ficam de fora." Na 10, também como texto na tela na cena 4.
3. **Plano B em motion em cada vídeo** (decisão de PH, 25/11).
4. Fora da peça: "canal oficial de atendimento" saiu da lista do que precisamos (já temos). Hashtags com as cidades no fim das legendas.

## Sugestões do validador (não aplicadas, PH decide)

- **Cidade ou bairro:** quase tudo diz só "Região dos Lagos". O PADROES §5 pede local em toda peça. Dá pra pôr a cidade nas legendas de 04, 05, 06, 09 e 10, e nas fotos de 03 e 12 quando vierem.
- **Aberturas repetidas:** 6 das 12 peças abrem com pergunta (01, 02, 04, 06, 09, 10). Trocar duas por cena ou fato. Na 01, a cena da direção: o vizinho perguntando "e aí, compensa?".
- **Fechos repetidos:** "Fale com a Contele" (01, 10) e "Converse com nossa equipe" (04). Variar o verbo e dizer o que mandar.
- **Fórmulas prontas:** 05 ("Não a burocracia" e "Precisa escolher bem quem vai cuidar dele"), 12 ("Cada casa... Cada telhado... Cada instalação..."), 10 cena 2 (frases picadas). A 08 ("A conta de luz, não.") tem tensão e fica.
- **Repetição entre peças:** "Mais de 700" em 03 e 12; "feita por gente daqui" (04) e "feita por quem conhece a região" (12) são o mesmo slogan. Escolher uma peça pra cada.
- **Legendas genéricas:** 11 ("Que neste Natal não faltem...").

## Travas de publicação

- **03 e 12:** só saem com cidade, potência, valores e autorização confirmados pela Contele. Valor "antes" em Coral (PADROES §1).
- **01:** regra da comissão (valor, quando paga, quem atende). **02, 07 e 08:** sem prazo de instalação confirmado, nada de "fica pronto antes do verão"; na 02, a linha pra quem já tem placa só entra se a Contele fizer ampliação. **05:** etapas da homologação com o Vinicius. **06:** checklist da visita. **08:** resposta pra quem orçou antes do aumento. **09 e 10:** quais modelos seguram câmera, roteador e luz.

`;
for(const p of PECAS){const t=T[p.n];s+=`---

## ${p.d} (${t.dia}) · ${t.eq} · ${t.papel}

**Semana:** ${SEM[t.sem][0]} · **Objetivo:** ${t.obj}
**Formato:** ${FT[p.tipo]} · **Foto final:** ${t.foto}

**Arte (protótipo):**
> ${p.k} · ${p.d}
> **${p.h} ${p.a}**
${p.ap?`> ${p.ap}\n`:''}${p.cta?`> ${p.cta}\n`:''}
${ARTE[p.n]&&ARTE[p.n][0]!==`${p.h} ${p.a}`?`**Texto da arte (PH):** ${ARTE[p.n].join(' / ')}\n\n`:''}${SLIDES[p.n]?`**Slides:**\n${SLIDES[p.n].map((x,i)=>`${i+1}. ${x}`).join('\n')}\n\n`:''}${VIDEO[p.n]?`**Roteiro:**\n${VIDEO[p.n].rot.map(x=>`- ${x}`).join('\n')}\n\n**Plano B:** ${VIDEO[p.n].motion}\n\n`:''}**Legenda:**
${t.leg.split('\n').map(l=>'> '+l).join('\n')}
>
> ${t.tags}

`}
s+=`---

## Fatos e fontes

| Afirmação | Fonte |
|---|---|
| WhatsApp (22) 98806-0342, Araruama/RJ | PADROES, contato confirmado por PH em 01/09 |
| Mais de 700 sistemas instalados | Briefing e bio do perfil |
| Projeto, homologação na Enel e instalação com equipe própria | PADROES §5 e §8 (o kit vem de fornecedor parceiro e não é citado) |
| Comissão em dinheiro por projeto fechado | Arte de PH de 16/11 (PADROES §8). Sem valor nem prazo |
| EcoFlow e BLUETTI, juntas e sem comparação | PADROES §8 |
| Estação segura o essencial, sem chuveiro nem ar | Reunião de 08/09 (PADROES §8) |

**Não afirmado:** preço, condição, estoque, prazo de instalação, valor de economia, autonomia da estação, garantia.
`;
fs.writeFileSync(path.join(AQUI,'../../conteudo/posts/2026-12-02-lote-dezembro-12-pecas.md'),s);
