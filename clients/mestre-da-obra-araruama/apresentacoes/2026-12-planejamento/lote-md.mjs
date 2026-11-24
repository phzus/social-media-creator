import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url'; import { PECAS } from './artes.mjs'; import { T,SEM,SLIDES,VIDEO } from './textos.mjs';
const AQUI=path.dirname(fileURLToPath(import.meta.url)); const V=process.argv[2]||'v2 · composição e visual aprovados por PH (24/11) · copy de PH (24/11, [original](../../referencias/2026-11-24-copies-dezembro-versao-ph.md)) aplicada com 3 ajustes; faltam slides e roteiros';
let s=`# Lote de dezembro/2026 — 3 carrosséis, 4 vídeos e 5 artes

**Cliente:** mestre-da-obra-araruama · **Formato:** 3:4 (1080×1440) e vídeo 9:16. O que vai pra anúncio é decisão da equipe · **Status:** ${V}
**Estratégia:** [2026-12](../../estrategia/2026-12.md) · **Protótipos:** [feed](../../apresentacoes/2026-12-planejamento/artes/feed.jpg) · **Fonte dos textos:** \`apresentacoes/2026-12-planejamento/textos.mjs\` e \`artes.mjs\` (este arquivo é gerado por \`lote-md.mjs\`, editar lá)

**Vale pra todas:** logo no topo à esquerda, headline em caixa alta com a última linha em laranja, máquina real em primeiro plano sobre o hexágono da marca, CTA com seta e WhatsApp no rodapé. Segunda clara, quarta vídeo com foto real da loja, sexta azul. Quarta sem vídeo não tem post. Sem pergunta, sem preço, sem personagem 3D, sem IA. Texto longe das bordas.

`;
for(const p of PECAS){const t=T[p.n];s+=`---

## ${p.d} (${t.dia}) · ${t.eq} · ${t.papel}

**Semana:** ${SEM[t.sem][0]} · **Objetivo:** ${t.obj}
**Formato:** ${{arte:'arte única',carrossel:'carrossel, 5 slides',video:'vídeo da Ingrid'}[p.tipo]} · **Foto final:** ${t.foto}

**Arte:**
> **${[...p.h,p.a].join(' / ')}**
${p.dias?'> Faixa: SEX retira · SÁB usa · DOM usa · SEG devolve\n':''}${p.ap?`> ${p.ap}\n`:''}> **${p.cta||'(capa de vídeo)'}**${p.n==='11'||p.tipo!=='arte'?'':' · (22) 99768-8956'}
${p.nota?`> *${p.nota}*\n`:''}
${SLIDES[p.n]?`**Slides (função, sem copy):**\n${SLIDES[p.n].map((x,i)=>`${i+1}. ${x}`).join('\n')}\n\n`:''}${VIDEO[p.n]?`**Vídeo (tema, roteiro à parte):** ${VIDEO[p.n]}\n\n`:''}**Legenda:**
${t.leg.split('\n').map(l=>'> '+l).join('\n')}
>
> ${t.tags}

`}
s+=`---

## Fatos e fontes

| Afirmação | Fonte |
|---|---|
| Equipamentos, betoneira 400 L, marteletes 5,7 a 29,5 kg | [Catálogo local](../../BRIEFING.md#catálogo-local-0511), conferido de novo em 24/11 (fotos baixadas de lá) |
| Sexta → segunda, uma diária | [Reunião 06/11 §3](../../reuniao-mensal/resumos/2026-11-06-resumo-reuniao.md). Equipamentos participantes e duas datas: OQ |
| Cobrimos orçamento, real e de concorrente local | [Reunião 06/11 §3](../../reuniao-mensal/resumos/2026-11-06-resumo-reuniao.md), OQ #23 |
| 18/12 é a última sexta antes do Natal | Calendário (25/12/2026 cai na sexta) |
| Uso do sapinho, da lavadora, da enceradeira e da extratora | Uso comum do equipamento, sem número nem promessa. A loja confere na aprovação |
| Horário de 23/12 em diante | Não confirmado: a peça manda consultar |

**Não afirmado:** preço, prazo e área de entrega, montagem, revisão, orientação de uso, disponibilidade imediata, tempo ganho, resultado de limpeza.
`;
fs.writeFileSync(path.join(AQUI,'../../conteudo/posts/2026-12-02-lote-dezembro-12-pecas.md'),s);
