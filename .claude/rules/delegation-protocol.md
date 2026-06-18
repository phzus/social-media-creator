# Delegation Protocol — Marketing Squad Extremo

## Protocolo de Delegação com Contexto

Toda delegação de task no MSE segue um protocolo padronizado para garantir que o agente executor tenha TODAS as informações necessárias.

## Formato de Delegação

Quando @theboss delega uma task, deve usar o template DELEGACAO.md com:

```
1. QUEM: Agente responsável
2. O QUÊ: Task específica (referência ao arquivo em core/tasks/)
3. POR QUÊ: Contexto estratégico (por que esta task agora)
4. COM O QUÊ: Inputs obrigatórios (documentos, briefings, referências)
5. QUANDO: Prazo de entrega
6. COMO: Instruções específicas, tom, restrições
7. ENTREGA: Formato esperado, nomenclatura, pasta de destino
```

## Regras de Delegação

### Quem Pode Delegar

| De | Para | Condição |
|----|------|----------|
| Anthony | @theboss | Sempre (dono) |
| @theboss | Qualquer agente | Dentro da autoridade do agente |
| @theboss | @danilo → @andreza | Passagem de lead (protocolo específico) |
| Agente | Agente | NUNCA direto — sempre via @theboss |

### Regras Invioláveis

1. **Nenhum agente delega para outro** sem passar por @theboss
2. **Toda delegação inclui inputs** — nunca delegar "no vazio"
3. **Prazo é obrigatório** — sem prazo, task não inicia
4. **Formato de entrega é obrigatório** — agente deve saber como nomear e onde salvar
5. **Contexto estratégico é obrigatório** — agente precisa saber o PORQUÊ

## Inputs Obrigatórios por Task

| Task | Inputs Mínimos |
|------|----------------|
| **create-brandbook** | **BRIEFING-ESTRATEGICO + COMUNICACAO.md + referencias visuais do expert** |
| write-copy | BRIEFING-COPY + COMUNICACAO.md + AVATAR.md + **BRANDBOOK** + fase do funil |
| create-creatives | COMUNICACAO.md + **BRANDBOOK** + copy aprovada + formatos/canais |
| plan-traffic | FUNIL.md + orcamento + publico-alvo + objetivos |
| build-pages | Copy aprovada + **BRANDBOOK** + wireframe/referencias + metricas-alvo |
| convert-to-html | .md aprovado + **BRANDBOOK** + direcao criativa do @picasso |
| setup-automations | Mapa de fluxo + ferramentas + triggers/acoes |
| qualify-leads | PASSAGEM-LEAD template + criterios BANT + CRM access |
| close-sales | Script de vendas + PASSAGEM-LEAD preenchida + oferta |
| onboard-client | Dados do cliente + produto adquirido + acessos |
| analyze-metrics | Acesso aos dados + periodo + metricas-alvo |
| criar-pitch | BRIEFING-COPY + COMUNICACAO.md + produto + preço + bônus + depoimentos |
| criar-script-evento | BRIEFING-COPY + COMUNICACAO.md + oferta + horários + blocos de conteúdo |
| criar-seeding | Produto + quantidade de CPLs + temas por CPL + depoimentos |
| criar-engenharia-reversa | Produto completo + pesquisa de alunos + resultados + promessa |

**REGRA: Qualquer task que envolva producao visual (copy, criativos, paginas, HTMLs) EXIGE Brandbook aprovado como input. Sem Brandbook = task bloqueada.**

## Protocolo de Passagem SDR → Closer

Caso especial com protocolo próprio:

```
1. @danilo preenche PASSAGEM-LEAD.md com score BANT
2. @danilo classifica: HOT (16-20) / WARM (10-15) / COLD (6-9)
3. Apenas HOT e WARM vão para @andreza
4. @andreza recebe PASSAGEM-LEAD + agenda call
5. COLD volta para nurture automático (@salazar)
6. DISQUALIFIED (1-5) é descartado
```

## Feedback e Revisão

Após entrega de qualquer task:

```
1. Agente entrega peça na pasta correta com nomenclatura correta
2. @theboss revisa usando checklist correspondente
3. Se APROVADO: peça vai para próxima fase
4. Se AJUSTES: @theboss devolve com feedback específico
5. Se REFAZER: @theboss devolve com justificativa detalhada
6. Máximo 3 ciclos de revisão — no 3º, @theboss assume a correção
```

## Prioridades

Quando há conflito de prioridades entre delegações:

| Prioridade | Critério |
|-----------|----------|
| P0 — Urgente | Campanha ao vivo com problema |
| P1 — Alta | Deadline de lançamento em < 48h |
| P2 — Normal | Produção dentro do cronograma |
| P3 — Baixa | Otimizações e melhorias |

---
*Delegation Protocol — Marketing Squad Extremo v1.0*
