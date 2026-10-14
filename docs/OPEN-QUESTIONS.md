# Open Questions — projeto geral

Dúvidas e decisões pendentes que afetam o projeto **inteiro** (não específicas de um cliente). Para perguntas de cliente específico, usar `clients/<slug>/OPEN-QUESTIONS.md`.

Formato: `### Tópico\n- Pergunta\n- Status: aberta / respondida em YYYY-MM-DD / fechada\n- Decisão (se respondida)`.

---

### CRM próprio da Lone — vale pra carteira toda ou só Contele?

- Reunião Lone×Contele (08/09/2026) revelou que a Lone desenvolveu um **CRM próprio**, gratuito pros clientes, com previsão de liberação em ~7 dias (a partir de 08/09) — integração com Facebook/Meta (rastreio de venda por anúncio), WhatsApp+Instagram unificados, funil, métricas, automações e IA de oportunidades travadas. Detalhe em [clients/contele-solar/reuniao-mensal/resumos/2026-09-08-resumo-reuniao.md](../clients/contele-solar/reuniao-mensal/resumos/2026-09-08-resumo-reuniao.md).
- Não ficou claro se é piloto só com a Contele ou se vai rodar pra outros clientes da carteira. Se for pra todos, isso muda o fluxo de métricas/CTA (ex. `performance-analyzer-sms`) e vale documentar em `shared/`.
- Status: aberta (levantada em reunião 08/09/2026, repassada por PH)
- Decisão: —

### mse-funnel-labs instalada no lugar errado

- Framework MSE (`shared/mse-funnel-labs/`) tem 18 agentes, workflows, templates — mas não tá em `.claude/skills/` e não tem `SKILL.md` com frontmatter `name:` e `description:`. Resultado: Claude Code não enxerga como skill funcional, não é invocável via comando.
- Opções: (A) **Mover** a pasta inteira pra `.claude/skills/mse-funnel-labs/` + criar SKILL.md de entrada; (B) **Manter framework em `shared/`** e criar `.claude/skills/mse-funnel-labs/SKILL.md` que aponta pro framework (skill = porta de entrada, framework = asset compartilhado).
- Recomendação: B — mais limpo, evita duplicação.
- Status: aberta (levantada por PH em 2026-05-25)
- Decisão: —

### Integração BlackTwist (MCP)

- As skills `*-sms` mencionam o BlackTwist MCP para publicação/agendamento/analytics. Vamos integrar ou ficar em modo advisory (apenas geração de conteúdo)?
- Status: aberta
- Decisão: —

### Aprovação do cliente

- Como o cliente aprova roteiros e posts antes da produção? (WhatsApp, Trello, Notion, ClickUp?) Isso vira parte do workflow ou fica off-doc?
- Status: aberta
- Decisão: —

### Datas comemorativas

- Vale a pena ter um `shared/calendario-datas-br.md` com as datas comemorativas brasileiras + nichos típicos (saúde, alimentação, etc.) para acelerar a estratégia mensal de qualquer cliente?
- Status: aberta
- Decisão: —

### Linha temática única por semana (direção do chefe do PH)

- O chefe do PH pediu pra testar, a partir de **17/08/2026**, cada cliente postando a semana inteira em cima de **uma única linha/categoria de produto** (exemplo dado: Bazar Ribeiro só hidráulica na semana). PH confirmou que também vale pra "perfis de serviço como a Atlas", mas o "e etc" ficou em aberto — falta fechar a lista completa de quais clientes entram nesse teste.
- Pontos levantados: (1) lista final de clientes participantes do teste — **aberto**; (2) qual categoria cada um usa na semana de estreia (17-21/08) — **superado** (a semana de estreia passou; cada cliente que entrar define a categoria na própria estreia); (3) como convive com o mix obrigatório da Lone — **resolvido na prática** (ver Atlas abaixo); (4) se vale só pra segunda/quarta/sexta ou também stories — **aberto**.
- Nesta rodada (calendário de 10-14/08/2026), a diretriz **não foi aplicada** — confirmado por PH, entra em prática só a partir de 17/08. Nota registrada também em `clients/bazar-ribeiro/OPEN-QUESTIONS.md` e `clients/veterinaria-regional/OPEN-QUESTIONS.md`.
- **Atlas Corretora (2026-08-20):** PH confirmou e pediu formalização. A semana de 17-21/08 tinha saído inteira em auto por coincidência (calendário original de 27/07, anterior ao teste); a partir de **24-28/08** o teste passa a ser deliberado, fechando a semana em **Seguro de Vida**. Ver [clients/atlas-corretora/estrategia/2026-08.md, Aposta 4](../clients/atlas-corretora/estrategia/2026-08.md).
- **(3) resolvido na prática pela Atlas — modelo replicável:** produto fixo, função variável. Dentro da semana temática, cada peça cobre um pilar/função diferente do mix obrigatório (posicionamento/prova → educativo/emocional → venda) — só o produto/categoria se repete. Linha única não vira "um pilar só" se for desenhada assim.
- Status: aberta — itens (1) e (4). Atlas é o primeiro caso executado.
- Decisão: Atlas confirmado e em execução a partir de 24/08; demais clientes seguem pendentes.
