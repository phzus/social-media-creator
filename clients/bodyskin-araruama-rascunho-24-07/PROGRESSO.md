# Progresso — BodySkin Araruama

Log datado do trabalho desse cliente. **Entradas mais recentes no topo.**

---

## 2026-07-24 — Onboarding + 1º post (carrossel de estreia)

PH trouxe o Briefing Estratégico + Consultoria completo da BodySkin Araruama (13 páginas, já preparado pela própria Lone com pesquisa de mercado, concorrência, personas, pilares, frameworks de copy e banco de ideias) e pediu clonagem pra pasta do cliente + um post pra hoje.

**Onboarding feito:**
- Estrutura de pastas criada em `clients/bodyskin-araruama/`.
- Material bruto transcrito em [referencias/2026-07-24-briefing-estrategico-bodyskin.md](referencias/2026-07-24-briefing-estrategico-bodyskin.md).
- Síntese histórica em [BRIEFING.md](BRIEFING.md).
- Contexto vivo em [context.md](context.md) — voz, 4 personas, 5 pilares (com % de partida), anti-padrões, constraints.
- Pendências (endereço, WhatsApp, preços, oferta ativa, nome da profissional, avaliações Google etc.) registradas em [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md).
- Cliente registrado em [docs/CLIENTES-INDEX.md](../../docs/CLIENTES-INDEX.md) com status 🟡 Em onboarding.

**1º post:** hoje é sexta (24/07/2026) → estrutura oficial da Lone pede carrossel. Como nenhum dado operacional/comercial está confirmado ainda (sem oferta, preço ou nº de sessões), escolhi uma peça 100% educativa que não depende de nenhuma pendência: carrossel "por que o pelo volta depois do laser" (ciclo do pelo), que também cumpre a recomendação do próprio briefing de 1 post quebra-objeção por semana (objeção nº 1 do setor: "fiz e o pelo voltou"). Framework PAS, hook do banco do briefing, diferencial "protocolo por fototipo/todas as peles" reforçado. Post em [conteudo/posts/2026-07-24-ciclo-do-pelo-quebra-objecao.md](conteudo/posts/2026-07-24-ciclo-do-pelo-quebra-objecao.md).

Rodei `validador-copy` na peça (primeira do cliente, sem PADROES.md próprio ainda — validei contra o checklist geral da Lone + context.md). 2 correções pequenas aplicadas: CTA duplicado na legenda removido, nome da marca inserido no fechamento pra reforçar associação de marca na peça de estreia. 1 ajuste estilístico no slide 2 (personificação leve removida). Zero correção crítica.

**Pendente pra próximos ciclos:** validar com o cliente os dados do checklist 1.6 do briefing (endereço/WhatsApp/preços/oferta/profissional/avaliações), rodar `analista-perfil-ig` quando tiver acesso ao perfil (bloqueia scraping automatizado), e só então fechar a primeira estratégia mensal completa.

---

## 2026-07-24 (2) — Campanha de Julho (artes reais) chega e vira o post do dia

Ainda no mesmo dia, PH mandou 11 artes já finalizadas pelo designer (tema "arraiá"/festa junina em quase todas) com os preços e combos reais da Campanha de Julho — e pediu urgência: **sem carrossel hoje**, melhor aproveitar uma arte pronta.

Isso resolveu de cara boa parte das pendências do onboarding: endereço (Av. John Kennedy, 300 - Loja 3, Centro - Araruama/RJ), 2 telefones/WhatsApp, tabela de preços real (combos de depilação R$999-R$1.599, toxina botulínica R$699-R$799, toxina+preenchimento labial 12x R$141, peeling R$660, promoção universal R$199/10 sessões, limpeza de pele de terça R$180) e a validade da campanha ("durante julho ou enquanto durarem os vouchers promocionais"). **Também corrigi a paleta da marca** — o PDF original dizia laranja+roxo, mas as artes reais são laranja+teal, sem roxo nenhum. Tudo registrado em [context.md](context.md) e [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md); transcrição completa das 11 artes em [referencias/2026-07-24-artes-campanha-julho-arraia.md](referencias/2026-07-24-artes-campanha-julho-arraia.md).

Como eram 9 ofertas diferentes possíveis pra usar hoje (a 10ª, limpeza de pele, é fixa de terça — guardada pra outro dia), perguntei a PH qual encaixar no slot de sexta em vez de chutar uma oferta real ao público. PH escolheu a **harmonização facial (toxina botulínica 50UI + preenchimento labial 1ml)** — a única das 11 artes com validade explícita escrita na própria peça, o que dá urgência real de fim de mês (faltam ~7 dias). Legenda em [conteudo/posts/2026-07-24-campanha-julho-arraia.md](conteudo/posts/2026-07-24-campanha-julho-arraia.md). O carrossel educativo produzido mais cedo (ciclo do pelo) ficou parqueado pra um próximo slot — não foi descartado, só adiado.

**Nota:** toxina botulínica e preenchimento labial não estavam no portfólio original do PDF (que só citava limpeza/revitalização/manchas em estética facial) — é serviço real confirmado agora pelas artes, registrado em context.md.
