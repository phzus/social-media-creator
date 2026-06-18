# analyze-metrics

Task de analise de metricas e performance do funil. Diagnostico, relatorios e recomendacoes de otimizacao.

```yaml
task:
  name: analyze-metrics
  description: "Analisar metricas de performance e gerar insights acionaveis"
  agent: metrics
  support: cadu, theboss
  priority: medium

dependencies:
  requires:
    - define-funnel (funil definido — para saber o que medir)
  optional:
    - plan-traffic (para metricas de trafego)
    - setup-automations (para metricas de automacao)
  templates:
    - FUNIL.md (metricas-alvo)
    - TAXONOMIA.md

inputs:
  - dados de trafego (Meta Ads, Google Ads, etc.)
  - dados de conversao (leads, vendas, upsells)
  - dados de email (open rate, click rate)
  - dados financeiros (faturamento, custos, margem)

outputs:
  - Relatorio de performance
  - Nomenclatura: "{PROJ}_REL_{DESCRICAO}_V1.md"

elicit: false
```

---

## Workflow

### Fase 1: Coletar Dados

Fontes de dados por area:

| Area | Fonte | Metricas |
|------|-------|----------|
| Trafego pago | Meta Ads Manager, Google Ads | Impressoes, cliques, CTR, CPC, CPM, CPL, ROAS |
| Paginas | Google Analytics, Hotjar | Pageviews, conversao, bounce rate, scroll depth |
| Email | ActiveCampaign, Mailchimp | Open rate, click rate, unsubscribe |
| WhatsApp | Z-API, Evolution API | Entrega, leitura, resposta |
| Vendas | Hotmart, Kiwify, CRM | Vendas, ticket medio, refund rate |
| CS | CRM, NPS tool | NPS, churn, retention |

### Fase 2: Dashboard de Metricas

#### Metricas de Topo de Funil (Captacao)

| Metrica | Atual | Meta | Status |
|---------|-------|------|--------|
| Impressoes | {num} | {meta} | 🟢/🟡/🔴 |
| Cliques | {num} | {meta} | 🟢/🟡/🔴 |
| CTR | {%} | > 1.5% | 🟢/🟡/🔴 |
| CPC | R$ {val} | < R$ {meta} | 🟢/🟡/🔴 |
| CPL | R$ {val} | < R$ {meta} | 🟢/🟡/🔴 |
| Leads captados | {num} | {meta} | 🟢/🟡/🔴 |
| Taxa conversao LP | {%} | > 25% | 🟢/🟡/🔴 |

#### Metricas de Meio de Funil (Engajamento)

| Metrica | Atual | Meta | Status |
|---------|-------|------|--------|
| Open rate emails | {%} | > 25% | 🟢/🟡/🔴 |
| Click rate emails | {%} | > 3% | 🟢/🟡/🔴 |
| Taxa presenca evento | {%} | > 30% | 🟢/🟡/🔴 |
| Engajamento grupo | {%} | > 40% | 🟢/🟡/🔴 |
| Scroll depth PV | {%} | > 60% | 🟢/🟡/🔴 |

#### Metricas de Fundo de Funil (Conversao)

| Metrica | Atual | Meta | Status |
|---------|-------|------|--------|
| Vendas totais | {num} | {meta} | 🟢/🟡/🔴 |
| Taxa conversao | {%} | {meta}% | 🟢/🟡/🔴 |
| Ticket medio | R$ {val} | R$ {meta} | 🟢/🟡/🔴 |
| Faturamento bruto | R$ {val} | R$ {meta} | 🟢/🟡/🔴 |
| ROAS | {X}x | > {meta}x | 🟢/🟡/🔴 |
| CPA | R$ {val} | < R$ {meta} | 🟢/🟡/🔴 |

#### Metricas Financeiras

| Metrica | Valor |
|---------|-------|
| Faturamento bruto | R$ {val} |
| Custos de trafego | R$ {val} |
| Custos operacionais | R$ {val} |
| Comissoes/afiliados | R$ {val} |
| Refunds | R$ {val} ({%}) |
| **Faturamento liquido** | **R$ {val}** |
| **Margem** | **{%}** |
| **ROAS geral** | **{X}x** |

### Fase 3: Analise de Funil (Waterfall)

```
Impressoes:     {num}  ████████████████████████████ 100%
Cliques:        {num}  ██████████████               {%}
Leads:          {num}  ████████████                 {%}
Presentes:      {num}  ████████                     {%}
Engajados:      {num}  ██████                       {%}
Pg. Vendas:     {num}  ████                         {%}
Checkout:       {num}  ███                          {%}
Compradores:    {num}  ██                           {%}
```

**Identificar gargalos:**
- Onde a maior queda acontece?
- Qual etapa esta abaixo do benchmark?
- O que pode ser otimizado primeiro?

### Fase 4: Diagnostico

Para cada gargalo identificado, diagnosticar:

| Gargalo | Possivel Causa | Acao Recomendada | Responsavel |
|---------|---------------|-----------------|-------------|
| CTR baixo | Criativo fraco ou publico errado | Testar novos criativos | @picasso + @cadu |
| CPL alto | LP com baixa conversao | Revisar headline e CTA | @claudinho + @pixel |
| Presenca baixa | Falta de aquecimento | Mais emails/mensagens | @claudinho |
| Conversao baixa | Oferta fraca ou copy | Revisar pagina de vendas | @claudinho |
| ROAS negativo | CPA > ticket | Otimizar trafego ou subir ticket | @cadu + @theboss |
| Churn alto | Onboarding fraco | Melhorar sequencia | @carla |

### Fase 5: Recomendacoes

Gerar lista priorizada de acoes:

| # | Acao | Impacto Esperado | Esforco | Prioridade |
|---|------|-----------------|---------|------------|
| 1 | {acao mais impactante} | {resultado esperado} | Baixo/Medio/Alto | URGENTE |
| 2 | {segunda acao} | {resultado} | {esforco} | Alta |
| 3 | {terceira acao} | {resultado} | {esforco} | Media |

**Regra ICE (Impact × Confidence × Ease):**
- Priorizar acoes de alto impacto e baixo esforco
- Quick wins primeiro, depois projetos maiores

### Fase 6: Gerar Relatorio

Formatos de relatorio:

**Relatorio diario (durante lancamento):**
- Leads hoje / acumulado
- Vendas hoje / acumulado
- CPL e ROAS do dia
- Alertas (se alguma metrica fora da meta)

**Relatorio semanal:**
- Performance por canal
- Comparativo semanal
- Top criativos
- Recomendacoes da semana

**Relatorio de campanha (pos-lancamento):**
- Resultados gerais vs. metas
- Analise de funil completa
- ROI e financeiro
- Licoes aprendidas
- Recomendacoes para proximo lancamento

Salvar como: `projects/{expert}/{PROJ}_REL_{DESCRICAO}_V1.md`

---

## Benchmarks por Tipo de Funil

| Funil | CPL Medio | Conversao | ROAS Medio |
|-------|-----------|-----------|-----------|
| PLF Pago | R$3-15 | 1-3% lista | 3-10x |
| PLF Gratuito | — | 2-5% lista | — (sem custo ads) |
| Desafio | R$2-10 | 3-10% participantes | 3-8x |
| Webinar | R$5-20 | 4-15% presentes | 3-8x |
| Low Ticket | R$1-5 | 2-5% trafego | 1-3x (front) |
| High Ticket | R$20-80 | 30-50% calls | 5-20x |
| Perpetuo | R$3-15 | 1-3% continuo | 2-5x |

---
*Task: analyze-metrics — Marketing Squad Extremo v1.0*
