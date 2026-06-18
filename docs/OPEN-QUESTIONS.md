# Open Questions — projeto geral

Dúvidas e decisões pendentes que afetam o projeto **inteiro** (não específicas de um cliente). Para perguntas de cliente específico, usar `clients/<slug>/OPEN-QUESTIONS.md`.

Formato: `### Tópico\n- Pergunta\n- Status: aberta / respondida em YYYY-MM-DD / fechada\n- Decisão (se respondida)`.

---

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
