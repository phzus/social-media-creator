# campaign-report

Task de geracao de relatorio completo de campanha pos-lancamento. Consolida resultados, analisa performance e documenta licoes aprendidas.

```yaml
task:
  name: campaign-report
  description: "Gerar relatorio completo de campanha pos-lancamento"
  agent: metrics
  support: theboss, cadu
  priority: medium

dependencies:
  requires:
    - (campanha finalizada com dados completos)
  optional:
    - analyze-metrics (dados parciais ja coletados)

inputs:
  - dados completos de trafego
  - dados completos de conversao
  - dados financeiros finais
  - timeline da campanha
  - metas originais (do briefing)

outputs:
  - Relatorio completo de campanha
  - Nomenclatura: "{PROJ}_REL_CAMPANHA-{PERIODO}_V1.md"

elicit: false
```

---

## Workflow

### Fase 1: Consolidar Dados Finais

Aguardar periodo de fechamento (7-14 dias apos fim do carrinho) para incluir:
- Vendas por boleto (prazo de vencimento)
- Refunds (prazo de garantia)
- Upsells pos-compra
- Chargebacks

### Fase 2: Gerar Relatorio

```markdown
# RELATORIO DE CAMPANHA — {PROJETO}

**Periodo:** {data inicio} a {data fim}
**Tipo de funil:** {tipo}
**Produto:** {nome}
**Ticket:** R$ {valor}
**Responsavel:** @metrics
**Data do relatorio:** {data}

---

## 1. Resumo Executivo

| Indicador | Meta | Resultado | Status |
|-----------|------|-----------|--------|
| Faturamento bruto | R$ {meta} | R$ {resultado} | ✅/❌ |
| Vendas | {meta} | {resultado} | ✅/❌ |
| Leads captados | {meta} | {resultado} | ✅/❌ |
| ROAS | {meta}x | {resultado}x | ✅/❌ |
| Conversao geral | {meta}% | {resultado}% | ✅/❌ |

**Veredicto:** META BATIDA / META NAO BATIDA ({X}% do objetivo)

---

## 2. Performance por Fase

### Captacao
| Metrica | Resultado |
|---------|-----------|
| Investimento em trafego | R$ {val} |
| Impressoes | {num} |
| Cliques | {num} |
| CTR | {%} |
| CPC | R$ {val} |
| Leads captados | {num} |
| CPL | R$ {val} |
| Conversao LP | {%} |

### Antecipacao/Evento
| Metrica | Resultado |
|---------|-----------|
| Open rate medio | {%} |
| Click rate medio | {%} |
| Taxa presenca | {%} |
| Engajamento | {qualitativo} |

### Vendas
| Metrica | Resultado |
|---------|-----------|
| Visitas pagina vendas | {num} |
| Checkouts iniciados | {num} |
| Vendas realizadas | {num} |
| Conversao | {%} |
| Ticket medio | R$ {val} |
| Upsells | {num} (R$ {val}) |
| Downsells | {num} (R$ {val}) |

---

## 3. Financeiro Detalhado

| Item | Valor |
|------|-------|
| **RECEITA** | |
| Vendas produto principal | R$ {val} |
| Upsells | R$ {val} |
| Downsells | R$ {val} |
| Order bumps | R$ {val} |
| **Total bruto** | **R$ {val}** |
| | |
| **CUSTOS** | |
| Trafego pago | R$ {val} |
| Ferramentas (email, automacao) | R$ {val} |
| Comissoes/afiliados | R$ {val} |
| Equipe/freelancers | R$ {val} |
| Plataforma (Hotmart, Kiwify) | R$ {val} |
| **Total custos** | **R$ {val}** |
| | |
| **RESULTADO** | |
| Faturamento liquido | **R$ {val}** |
| Margem | **{%}** |
| ROAS | **{X}x** |
| Refunds | R$ {val} ({%}) |
| Chargebacks | R$ {val} ({%}) |

---

## 4. Analise de Funil (Waterfall)

```
Impressoes      {num}  ████████████████████████ 100%
Cliques         {num}  ████████████████         {%}
Leads           {num}  ████████████             {%}
Presentes       {num}  ████████                 {%}
Pg. Vendas      {num}  ██████                   {%}
Checkout        {num}  ████                     {%}
Compradores     {num}  ██                       {%}
```

---

## 5. Top Performers

### Melhores criativos
| Criativo | CTR | CPC | CPL | Investimento |
|----------|-----|-----|-----|-------------|
| {criativo 1} | {%} | R$ {val} | R$ {val} | R$ {val} |
| {criativo 2} | {%} | R$ {val} | R$ {val} | R$ {val} |

### Melhores publicos
| Publico | CPL | Conversao | ROAS |
|---------|-----|-----------|------|
| {publico 1} | R$ {val} | {%} | {X}x |
| {publico 2} | R$ {val} | {%} | {X}x |

### Melhores emails
| Email | Open Rate | Click Rate | Conversoes |
|-------|-----------|------------|-----------|
| {email 1} | {%} | {%} | {num} |
| {email 2} | {%} | {%} | {num} |

---

## 6. O que Funcionou

1. {ponto forte 1 — com dados}
2. {ponto forte 2 — com dados}
3. {ponto forte 3 — com dados}

## 7. O que Nao Funcionou

1. {ponto fraco 1 — com dados e analise}
2. {ponto fraco 2 — com dados e analise}
3. {ponto fraco 3 — com dados e analise}

## 8. Licoes Aprendidas

1. {licao 1 — insight acionavel para proximo lancamento}
2. {licao 2}
3. {licao 3}

## 9. Recomendacoes para Proximo Lancamento

| # | Recomendacao | Area | Impacto Esperado |
|---|-------------|------|-----------------|
| 1 | {recomendacao} | {trafego/copy/oferta/etc} | {impacto} |
| 2 | {recomendacao} | {area} | {impacto} |
| 3 | {recomendacao} | {area} | {impacto} |

---

## 10. Comparativo com Lancamentos Anteriores (se houver)

| Metrica | Lancamento Anterior | Este Lancamento | Variacao |
|---------|-------------------|-----------------|----------|
| Faturamento | R$ {val} | R$ {val} | {+/-}% |
| Leads | {num} | {num} | {+/-}% |
| Conversao | {%} | {%} | {+/-}pp |
| ROAS | {X}x | {X}x | {+/-}x |
| CPL | R$ {val} | R$ {val} | {+/-}% |
```

Salvar como: `projects/{expert}/{PROJ}_REL_CAMPANHA-{PERIODO}_V1.md`

---

## Checklist de Validacao

```
☐ Periodo de fechamento respeitado (refunds, boletos)?
☐ Todos os dados estao consolidados?
☐ Financeiro bate (receita - custos = liquido)?
☐ Waterfall completo de ponta a ponta?
☐ Top performers identificados?
☐ Licoes aprendidas sao acionaveis?
☐ Recomendacoes sao especificas?
☐ Relatorio revisado pelo @theboss?
☐ Anthony recebeu o relatorio?
```

---
*Task: campaign-report — Marketing Squad Extremo v1.0*
