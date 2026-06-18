# Delegation Protocol — Marketing Squad Extremo

> **Version:** 2.0 | **Owner:** @theboss

## Formato de Delegação

Toda delegação de task segue o template DELEGACAO.md com 7 campos obrigatórios:

```yaml
delegacao:
  quem: "{agente responsável}"
  o_que: "{task específica — referência ao arquivo em core/tasks/}"
  por_que: "{contexto estratégico — por que esta task agora}"
  com_o_que: "{inputs obrigatórios — briefings, docs, referências}"
  quando: "{prazo de entrega}"
  como: "{instruções específicas, tom, restrições}"
  entrega: "{formato esperado, nomenclatura, pasta destino}"
```

## Quem Pode Delegar

| De | Para | Condição |
|----|------|----------|
| Anthony | @theboss | Sempre (dono) |
| @theboss | Qualquer agente | Dentro da autoridade do agente |
| @danilo → @andreza | Passagem de lead | Via PASSAGEM-LEAD template |
| Agente → Agente | NUNCA direto | Sempre via @theboss |

## Inputs Obrigatórios por Task

| Task | Inputs Mínimos |
|------|----------------|
| write-copy | BRIEFING-COPY + COMUNICACAO.md + AVATAR.md + fase do funil |
| create-creatives | COMUNICACAO.md + copy aprovada + formatos/canais |
| plan-traffic | FUNIL.md + orçamento + público-alvo + objetivos |
| build-pages | Copy aprovada + wireframe/referências + métricas-alvo |
| setup-automations | Mapa de fluxo + ferramentas + triggers/ações |
| qualify-leads | PASSAGEM-LEAD template + critérios BANT + CRM access |
| close-sales | Script de vendas + PASSAGEM-LEAD preenchida + oferta |
| onboard-client | Dados do cliente + produto adquirido + acessos |
| analyze-metrics | Acesso aos dados + período + métricas-alvo |

## Protocolo de Passagem SDR → Closer

```
1. @danilo preenche PASSAGEM-LEAD.md com score BANT
2. @danilo classifica: HOT (16-20) / WARM (10-15) / COLD (6-9)
3. Apenas HOT e WARM vão para @andreza
4. @andreza recebe PASSAGEM-LEAD + agenda call
5. COLD volta para nurture automático (@salazar)
6. DISQUALIFIED (1-5) é descartado com registro
```

## Feedback e Revisão

```
1. Agente entrega peça na pasta correta com nomenclatura correta
2. @theboss revisa usando checklist correspondente
3. APROVADO (≥75%) → peça vai para próxima fase
4. AJUSTES (50-74%) → @theboss devolve com feedback específico e acionável
5. REFAZER (<50%) → @theboss devolve com justificativa detalhada
6. Máximo 3 ciclos — no 3º, @theboss escala para Anthony
```

## Prioridades

| Prioridade | Critério | Response Time |
|-----------|----------|---------------|
| P0 — Urgente | Campanha ao vivo com problema | Imediato |
| P1 — Alta | Deadline de lançamento em < 48h | < 2h |
| P2 — Normal | Produção dentro do cronograma | < 24h |
| P3 — Baixa | Otimizações e melhorias | < 72h |

---

*Delegation Protocol — MSE v2.0*
