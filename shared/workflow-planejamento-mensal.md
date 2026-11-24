# Planejamento mensal da Lone — processo padrão (v2)

**Status: em desenvolvimento** (PH, 24/11/2026: "vamos adaptando e registrando"). Mudanças no [histórico](#histórico).

**Desde 24/11/2026 (PH):** padrão pra todos os clientes, tirado do [piloto da Mestre da Obra](../clients/mestre-da-obra-araruama/apresentacoes/2026-11-24-planejamento-dezembro.pdf). Substitui a v1 de 15/05/2026 (no git). As 6 fases e os subagents continuam. Mudaram os portões, a ordem e o documento final.

**Resumo:** material antes da direção, direção antes da copy, copy antes da arte. **PH aprova em três portões.** Nada vai pro cliente sem o terceiro.

> 🛑 **Só começa quando PH pede, cliente por cliente** (PH, 24/11/2026). Claude não inicia, não escolhe cliente e não adianta fase, nem quando o calendário abaixo diz que está na hora. No máximo lembra.

```
1 MATERIAL → 2 PESQUISA → 3 DIREÇÃO ▣ → 4 COPY E ROTEIROS ▣ → 5 CONFERÊNCIA → 6 DOCUMENTO ▣ → cliente → designer
                              portão 1          portão 2                          portão 3
```

## Calendário (referência, depois que PH pediu)

| Quando | O quê |
|---|---|
| 22 a 25 | Briefing do mês com as 5 perguntas do [playbook §3.1](playbook-lone-midia.md), mais material e horário especial |
| até 25 | Fases 1 a 3, portão 1 |
| até 26 | **Roteiros com o cliente**, porque ele precisa de tempo pra gravar |
| até 27 | Copy conferida, portão 2 |
| até 28 | Documento revisado por PH, portão 3, e envio |
| fim do mês | Aprovação, correções e artes finais da 1ª semana |

## Fase 1 · Material e fatos

Ler, nesta ordem: [fila](../docs/FILA-DE-CRIACAO.md), último resumo de reunião, `PADROES`, `context`, `BRIEFING`, `OPEN-QUESTIONS`, briefing do mês.

Material: `~/Downloads`, **Google Drive da Lone (pasta do cliente)**, catálogo ou site oficial (foto recortada e logo em vetor) e os vídeos já editados. Só depois disso dizer que falta foto.

**Saída:** a ficha do mês, no começo da [direção](templates/planejamento-mensal/direcao-do-mes.md): o que mais sai, ofertas reais com condição, o que o dono quer e não quer (com a fala dele), o que não está confirmado, quem grava e quantos vídeos, fotos que existem.

## Fase 2 · Pesquisa

- **Momento e sazonalidade do cliente (PH, 24/11):** definir o peso do mês no negócio antes de montar.

  | Peso | Como entra | Exemplo |
  |---|---|---|
  | **Alto** | A data manda no mês: semanas e temas inteiros | Celmapel no Natal e Réveillon |
  | **Médio** | A data dá contexto a algumas peças | Faxina pro Natal na Mestre |
  | **Baixo** | Só a homenagem, quando couber | Nicho em que a data não muda a compra |

  Perguntar também o momento da loja (lançamento, alta ou baixa, obra, troca de ponto).
- **Datas:** 🤖 `pesquisador-datas`. Cada data é usada ou descartada com motivo.
- **Raio-x do Instagram do cliente (obrigatório, PH 24/11):** antes da direção, salvo em `referencias/YYYY-MM-DD-raio-x-instagram.md`. Coleta com `scripts/instagram/coletar-perfil.mjs` e `ja-postado.sh`, checklist em [visual-reference §1](visual-reference-checklist.md).

  | Olhar | Pra decidir |
  |---|---|
  | Conteúdos que deram certo | O que repetir ou evoluir. Com Insights, por alcance, salvamento e conversa. Sem Insights, é sinal, não prova: conferir curtida por view, comentário de cliente e se parece pago |
  | Temas já abordados | O que não volta, ou volta com ângulo novo |
  | Perfil | Bio, link, destaques, fixados, erro no ar |
  | Identidade visual | O que manter da marca, o que está solto e o que muda |

- **Identidade nova do feed:** levar o que funcionou na Mestre (regra de cor por dia, posições fixas, produto real em destaque, último trecho da headline destacado, grid pensado como conjunto) **com a cara de cada cliente**. O sistema se repete; cor, fonte, elemento e foto não. Cuidado com Bruno × Araruama Tintas (não podem parecer) e com VR e WT (layout Benestar). Vai pra PH no portão 1 em palavras e no portão 3 desenhada.
- **Tendência do nicho:** 🤖 `analista-tendencias`, quando fizer sentido.
- **Concorrente:** um só, e quando PH pedir. Traduzir em arte, oferta e argumento. View não é prova ([regras de leitura](../clients/mestre-da-obra-araruama/PADROES.md)).
- **Referência visual de PH:** comparar com a paleta do concorrente antes de adotar. Aproveita-se o sistema, com a cor da marca.

## Fase 3 · Direção, sem copy e sem arte ▣ portão 1

Uma página de [direção](templates/planejamento-mensal/direcao-do-mes.md) pra debater com PH:

1. **Foco do mês** e o que mais vende.
2. **Público por peça**, contado (profissional × consumidor, ou o corte do cliente). Se pender, decidir de propósito.
3. **Composição:** quantos carrosséis, vídeos e artes, e em que dia. **Carrossel não tem número fixo:** propor a quantidade com o motivo e perguntar a PH. Serve quando o cliente tem muito serviço, produto que ninguém conhece ou assunto que precisa de passos. Ex. de PH: Atlas, um por carro-chefe (auto, residencial, vida e empresarial). Somar com os outros clientes do mês, porque o designer é um só.
4. **Tema de cada semana**, ligado ao produto.
5. **Argumento de cada peça:** dor, descoberta, oferta, "sem precisar comprar".
6. **Peso sazonal** e quais peças são da data.
7. **Identidade do feed:** o que fica, o que muda.
8. **O que fica fora** e por quê.

**Composição padrão** (ajustada por cliente):

| Dia | Função | Formato |
|---|---|---|
| Segunda | **Descobre:** entra por uma dor e revela o produto | Carrossel ou arte |
| Quarta | **Vê funcionando** | Vídeo. **Sem vídeo, não tem post, em todos os clientes** (PH, 24/11) |
| Sexta | **Fecha:** oferta ou diferencial | Arte única |

- Explicar sempre com venda: mostra o produto e termina em ação.
- Nem tudo vira anúncio. Anúncio é decisão do time e **não entra no documento**.
- Semana em uma linha de produto, função variando por dia.
- Feriado não empurra post pra terça.

🤖 `mapeador-funil` é opcional. A meta de 35/40/25 da v1 não reprova mês de conversão.

## Fase 4 · Copy e roteiros ▣ portão 2

**Só começa com a composição fechada.** No piloto, a copy veio na lista antiga e precisou ser remapeada.

1. Gerar o [contexto de copy](templates/planejamento-mensal/contexto-para-copy.md) a partir da direção: fatos, quer, não quer, limites do layout, peças e formato da resposta.
2. **Claude escreve a copy e entrega junto o briefing do plugin** (o contexto acima, já preenchido). PH passa no plugin e revisa (PH, 24/11). **No mesmo pacote:** artes, legendas, slides de carrossel e roteiros.
3. O que voltar de PH é a versão final. Guardar o texto como veio em `referencias/YYYY-MM-DD-copies-<mes>-versao-ph.md`.

O [Guia de Copywriting](guia-copywriting-lone.md) está em teste e não é filtro.

## Fase 5 · Conferência

Sem puxar o estilo. Em texto de PH, só se mexe no que fere fato ou pedido do dono, **avisando o que mudou**. O resto é sugestão.

- [ ] Fato e oferta com fonte, condição presente na arte e na legenda
- [ ] Nada que o dono vetou (pergunta, preço, tema)
- [ ] Caracteres por linha, apoio e CTA (conferir por script)
- [ ] Todo campo da copy chegou na arte (apoio, CTA, aviso)
- [ ] Data, formato e produto batem com a composição
- [ ] Argumento que PH pediu aparece
- [ ] Aberturas, fechos e frases repetidas no lote
- [ ] Sem "hoje" em peça que pode virar anúncio
- [ ] 🤖 `validador-copy` no lote, sem confiar na autochecagem. Setor regulado: gate do PADROES

## Fase 6 · Protótipos e documento ▣ portão 3

**Sistema visual do cliente:** posições fixas, uma regra de cor por dia, produto real em destaque e um elemento da marca. Uma quarta sem vídeo não pode estragar o grid.

**Documento do cliente** (PDF A4 deitado, que é o que vai pro cliente; link online só se PH pedir), nesta ordem:
1. Capa com foto real: mês e quantidade de cada formato
2. Como o mês funciona e calendário com miniaturas
3. **Prévia do feed**
4. Peças, 2 por página: arte, formato, objetivo, slides ou tema do vídeo, legenda
5. O que precisamos de vocês (só o que está em aberto)

**Não entra:** anúncio, verba, funil, hipótese, concorrente, métrica interna, pedido de material que já temos, aviso repetido. O nome do dono só onde ajuda.

**Gerador:** copiar `clients/mestre-da-obra-araruama/apresentacoes/2026-12-planejamento/` e seguir o [passo a passo](templates/planejamento-mensal/README.md).

**Antes de mostrar a PH:** olhar o PDF renderizado, procurar texto cortado e conferir se a página fechou.

## Depois da aprovação

1. Peças aprovadas viram brief pro designer (mínimo de 1 dia útil), com foto final.
2. Atualizar FILA, PROGRESSO (cliente e geral), OPEN-QUESTIONS, PAUTA e `estrategia/YYYY-MM.md`.
3. Commit do lote.
4. No fim do mês: o que foi postado, o que o cliente mudou e os números que chegarem. Entra na Fase 1 do mês seguinte.

## O que o piloto ensinou

| Aconteceu na Mestre da Obra | Por quê | Onde o processo evita |
|---|---|---|
| v1 só com estático, sem descoberta | Copy e arte antes da composição | Portão 1 |
| 10 de 12 peças como anúncio | Não perguntei verba nem vídeo | Fase 1, ficha do mês |
| Fotos "faltando" que estavam no Drive | Só olhei a Downloads | Fase 1 |
| Copy de PH na lista antiga | O contexto mudou no meio | Fase 4 só com composição fechada |
| 7 de 11 peças pro consumidor, sem querer | Público não foi contado | Portão 1, item 2 |
| Apoios sumiram das capas de vídeo | Formato mudou sem conferir campos | Fase 5 |
| Verba, anúncio e aviso repetido no documento | Bastidor no texto do cliente | Fase 6, "não entra" |
| Roteiro em cima da data | Roteiro ficou por último | Calendário: até dia 26 |
| Paleta da referência igual à do concorrente | | Fase 2 |

## Clientes em que o padrão muda

O **processo** vale pra todos. A **composição** muda aqui:

| Cliente | Diferença |
|---|---|
| Lagos Padrão | Posta quando precisa, mix 100% venda. Sem grade mensal |
| CIIL | Séries próprias por doença e gate de compliance |
| BodySkin | Toda peça com preço, menos injetável, que passa pela RT |
| Veterinária Regional e WT | Layout Benestar; pauta por sazonalidade de doença |
| Max Contabilidade | Só tributário, regras do CFC |
| Veneza | 2 perfis: estático igual, vídeo por unidade |
| Bazar Ribeiro | 2 lojas, encartes semanais e cota WD-40 |
| Celmapel | **Sazonal forte:** a data manda no mês. Plano bimestral e stories diários já existem. **Entra no padrão mais pra frente** (PH, 24/11) |
| Atlas | Calendário trimestral, gate do corretor. **Carrossel: um por carro-chefe** (auto, residencial, vida, empresarial), ideia de PH em 24/11, sem passar do que o designer aguenta. **Entra no padrão mais pra frente** (PH, 24/11) |
| Casa das Telhas | Vídeo de humor com a equipe é o ativo: não cortar |
| Bruno × Araruama Tintas | Concorrentes: direções feitas em separado, sem cruzar ângulo |

## Em aberto, PH decide

- **Cliente que não grava:** motion conta como vídeo na quarta, ou fica sem post? A regra vale pra planejamento novo; peça de quarta já pronta não mudou.

## Histórico

- **24/11/2026 (3):** carrossel por cliente, com motivo e pergunta; raio-x do Instagram obrigatório; identidade nova do feed; peso sazonal. Pedidos de PH.
- **24/11/2026 (2):** só começa a pedido de PH; quarta sem vídeo não tem post, em todos; Claude escreve e manda o briefing do plugin junto; Celmapel e Atlas entram mais pra frente.
- **24/11/2026 (1):** v2, a partir do piloto da Mestre da Obra.
- **15/05/2026:** v1.
