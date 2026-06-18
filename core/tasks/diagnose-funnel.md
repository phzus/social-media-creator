# diagnose-funnel

Task de diagnostico completo de um funil existente. Identifica gargalos, problemas e oportunidades de otimizacao.

```yaml
task:
  name: diagnose-funnel
  description: "Diagnosticar funil existente e identificar pontos de melhoria"
  agent: metrics
  support: theboss, cadu, claudinho
  priority: medium

dependencies:
  requires:
    - (funil ativo com dados — nao precisa de tasks anteriores)
  frameworks:
    - funnel-decision-table.md
    - kennedy-direct-response.md

inputs:
  - dados de performance do funil (metricas reais)
  - paginas ativas (URLs)
  - sequencias de email (copy atual)
  - campanhas de trafego (configuracao atual)
  - oferta atual

outputs:
  - Diagnostico completo com recomendacoes
  - Nomenclatura: "{PROJ}_REL_DIAGNOSTICO-FUNIL_V1.md"

elicit: true
```

---

## Workflow

### Fase 1: Coleta de Informacoes

Coletar dados de todas as camadas do funil:

#### Camada 1: Trafego
| Dado | Valor | Fonte |
|------|-------|-------|
| Investimento total (ultimos 30 dias) | R$ {val} | Ads Manager |
| Impressoes | {num} | Ads Manager |
| Cliques | {num} | Ads Manager |
| CTR | {%} | Ads Manager |
| CPC | R$ {val} | Ads Manager |
| CPM | R$ {val} | Ads Manager |
| Frequencia media | {num} | Ads Manager |
| Publicos ativos | {lista} | Ads Manager |

#### Camada 2: Captacao
| Dado | Valor | Fonte |
|------|-------|-------|
| Visitas na LP | {num} | Analytics |
| Leads captados | {num} | Email tool |
| Taxa conversao LP | {%} | Calculado |
| CPL | R$ {val} | Calculado |
| Bounce rate LP | {%} | Analytics |
| Tempo na pagina | {seg} | Analytics |

#### Camada 3: Engajamento
| Dado | Valor | Fonte |
|------|-------|-------|
| Open rate emails | {%} | Email tool |
| Click rate emails | {%} | Email tool |
| Unsubscribe rate | {%} | Email tool |
| Taxa presenca evento | {%} | Plataforma |
| Engajamento grupo | {%} | Observacao |

#### Camada 4: Conversao
| Dado | Valor | Fonte |
|------|-------|-------|
| Visitas pagina vendas | {num} | Analytics |
| Checkouts iniciados | {num} | Checkout |
| Vendas realizadas | {num} | Checkout |
| Taxa conversao vendas | {%} | Calculado |
| Ticket medio | R$ {val} | Checkout |
| Refund rate | {%} | Checkout |

#### Camada 5: Financeiro
| Dado | Valor |
|------|-------|
| Faturamento bruto | R$ {val} |
| Custos totais | R$ {val} |
| Margem liquida | R$ {val} ({%}) |
| ROAS | {X}x |
| LTV (se disponivel) | R$ {val} |

### Fase 2: Analise de Funil (Waterfall)

Montar o funil completo com taxas de conversao entre etapas:

```
ETAPA               VOLUME    TAXA     STATUS
─────────────────────────────────────────────
Impressoes           {num}     —        —
  → Cliques          {num}    {%}    🟢/🟡/🔴
    → Leads          {num}    {%}    🟢/🟡/🔴
      → Presentes    {num}    {%}    🟢/🟡/🔴
        → Pg Vendas  {num}    {%}    🟢/🟡/🔴
          → Checkout {num}    {%}    🟢/🟡/🔴
            → Venda  {num}    {%}    🟢/🟡/🔴
```

**Criterios de status:**
- 🟢 Acima do benchmark
- 🟡 Na media (aceitavel)
- 🔴 Abaixo do benchmark (gargalo)

### Fase 3: Identificar Gargalos

Para cada etapa 🔴, diagnosticar causa raiz:

| Gargalo | Benchmark | Atual | Gap | Possiveis Causas |
|---------|-----------|-------|-----|-----------------|
| CTR baixo | > 1.5% | {%} | -{%} | Criativo fraco, publico errado, fadiga |
| Conversao LP baixa | > 25% | {%} | -{%} | Headline fraca, LP lenta, formulario ruim |
| Open rate baixo | > 25% | {%} | -{%} | Subject line fraco, horario errado, deliverability |
| Presenca baixa | > 30% | {%} | -{%} | Falta de aquecimento, muito tempo entre inscricao e evento |
| Conversao vendas baixa | > 2% | {%} | -{%} | Copy fraca, oferta fraca, preco inadequado |
| Checkout abandonado | > 60% | {%} | -{%} | Checkout complexo, falta de confianca, preco |

### Fase 4: Auditoria de Ativos

#### Auditoria de Paginas
```
☐ Pagina carrega em < 3 segundos?
☐ Mobile-friendly (Google Mobile Test)?
☐ Headline e clara e atraente?
☐ CTA e visivel e unico?
☐ Formulario e simples (poucos campos)?
☐ Prova social presente?
☐ Sem links de saida (menu, footer)?
☐ Pixel instalado e disparando?
```

#### Auditoria de Emails
```
☐ Subject lines com < 50 caracteres?
☐ Preview text configurado?
☐ CTA claro e unico?
☐ Sem excesso de imagens (deliverability)?
☐ Segmentacao adequada?
☐ Frequencia adequada (nao esta spammando)?
☐ Unsubscribe rate < 0.5%?
```

#### Auditoria de Trafego
```
☐ Publicos sao relevantes para o avatar?
☐ Criativos tem < 30 dias (fadiga)?
☐ Frequencia < 3 (mesmo publico)?
☐ Orçamento distribuido corretamente?
☐ Exclusoes configuradas (compradores, leads)?
☐ Eventos de pixel configurados?
☐ A/B test ativo?
```

#### Auditoria de Oferta
```
☐ Resultado e claro e desejavel?
☐ Mecanismo unico esta articulado?
☐ Value stack com pelo menos 3 itens?
☐ Garantia presente e forte?
☐ Preco com ancoragem?
☐ Urgencia/escassez real?
☐ FAQ responde objecoes principais?
```

### Fase 5: Priorizacao de Acoes (ICE)

| # | Acao | Impact (1-10) | Confidence (1-10) | Ease (1-10) | ICE Score | Prioridade |
|---|------|--------------|-------------------|-------------|-----------|------------|
| 1 | {acao} | {I} | {C} | {E} | {score} | {1-N} |
| 2 | {acao} | {I} | {C} | {E} | {score} | {1-N} |
| 3 | {acao} | {I} | {C} | {E} | {score} | {1-N} |

**ICE Score = Impact × Confidence × Ease / 10**

### Fase 6: Gerar Relatorio de Diagnostico

Estrutura do relatorio:

```markdown
# Diagnostico de Funil — {Projeto}

## Resumo Executivo
- Estado geral: 🟢 Saudavel / 🟡 Precisa atencao / 🔴 Critico
- Principal gargalo: {etapa}
- Oportunidade #1: {acao de maior impacto}
- Impacto estimado: +{X}% em {metrica}

## Dados Coletados
{tabelas da Fase 1}

## Analise de Funil
{waterfall da Fase 2}

## Gargalos Identificados
{diagnosticos da Fase 3}

## Auditorias
{resultados da Fase 4}

## Plano de Acao (priorizado)
{tabela ICE da Fase 5}

## Proximos Passos
1. {acao imediata — esta semana}
2. {acao curto prazo — proximas 2 semanas}
3. {acao medio prazo — proximo mes}
```

Salvar como: `projects/{expert}/{PROJ}_REL_DIAGNOSTICO-FUNIL_V1.md`

---
*Task: diagnose-funnel — Marketing Squad Extremo v1.0*
