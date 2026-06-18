# Handoff Protocol — Marketing Squad Extremo

> **Version:** 1.0 | **Constitution:** Artigo VII

## Purpose

Preservar contexto ao trocar de agente ativo, compactando o estado do agente anterior em um artifact leve (~300 tokens) em vez de carregar todo o perfil (~3-5K tokens).

## When This Applies

Este protocolo ativa quando:
1. O usuário invoca um novo agente via `@agent-name`
2. A sessão já tem um agente diferente ativo
3. Há contexto de projeto em andamento

## Handoff Artifact Format

### On Agent Switch (outgoing agent)

O agente que está saindo gera mentalmente:

```yaml
handoff:
  from_agent: "{agent_id}"
  to_agent: "{new_agent_id}"
  timestamp: "{ISO-8601}"
  project_context:
    project: "{project_id}"
    expert: "{expert_name}"
    funnel_type: "{tipo_funil}"
    phase: "{fase_atual}"
    campaign_status: "{status}"
    current_task: "{task_em_andamento}"
  decisions:
    - "{decisão chave 1}"
    - "{decisão chave 2}"
  deliverables_ready:
    - "{entrega 1 pronta}"
    - "{entrega 2 em andamento}"
  blockers:
    - "{bloqueio ativo}"
  next_action: "{o que o agente entrante deve fazer}"
  briefing_refs:
    - "{path do briefing principal}"
    - "{path do COMUNICACAO.md}"
```

### On Agent Switch (incoming agent)

O agente entrante recebe:
1. Seu **perfil completo** (persona, commands, dependencies)
2. O **handoff artifact** do agente anterior (~300 tokens)
3. **NÃO** o perfil completo do agente anterior

## Compaction Limits

| Limite | Valor |
|--------|-------|
| Max tamanho do artifact | 500 tokens |
| Max handoffs retidos | 3 (mais antigo descartado no 4º switch) |
| Max decisões no artifact | 5 |
| Max deliverables listados | 10 |
| Max blockers | 3 |

## What to Preserve (ALWAYS)

- Project ID e expert name
- Tipo de funil e fase atual
- Task em andamento
- Decisões estratégicas tomadas
- Entregas prontas ou em andamento
- Bloqueios ativos
- Referência ao briefing

## What to Discard (NEVER carry forward)

- Perfil completo do agente anterior
- Lista de commands do agente anterior
- Dependencies do agente anterior
- Regras operacionais internas
- Templates e checklists referenciados

## Token Savings

| Cenário | Sem Handoff | Com Handoff | Economia |
|---------|-------------|-------------|----------|
| 1 switch | ~8K tokens | ~5.3K | 33% |
| 2 switches | ~12K tokens | ~5.6K | 53% |
| 3 switches | ~16K tokens | ~5.9K | 63% |

## Example Flow

```
@theboss (estratégia) → @claudinho (copy) → @pixel (página)

Switch 1: @theboss → @claudinho
- @theboss handoff: projeto=bizu, funil=PLF, fase=captação, decisão="oferta R$497 com 3 bônus"
- @claudinho loads: full profile + handoff artifact
- Total: ~5.3K vs ~8K

Switch 2: @claudinho → @pixel
- @claudinho handoff: task=copy-captacao-pronta, entrega=LP-CAPTURA_V1.md, next="montar LP com esta copy"
- @pixel loads: full profile + handoff @claudinho + handoff @theboss
- Total: ~5.6K vs ~12K
```

---

*Handoff Protocol — MSE v1.0*
