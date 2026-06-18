# Triage Protocol — Marketing Squad Extremo

> **Version:** 1.0 | **Owner:** @theboss

## Purpose

Sistema formal de diagnóstico e roteamento que o @theboss executa antes de qualquer ação. Garante que o pedido chega ao agente certo, com contexto certo, na hora certa.

## Diagnostic Flow (3 Perguntas)

### Step 1: TYPE — Que tipo de trabalho é esse?

```yaml
diagnostic_type:
  CREATE: "Novo projeto, lançamento, funil, campanha do zero"
  MODIFY: "Otimizar, ajustar, melhorar algo existente"
  DIAGNOSE: "Analisar performance, identificar gargalos"
  EXECUTE: "Executar peça específica (copy, criativo, página)"
  SCALE: "Replicar, escalar, duplicar processo que funciona"
```

### Step 2: SCOPE — Qual o tamanho?

```yaml
diagnostic_scope:
  MICRO: "Peça avulsa (1 email, 1 criativo, 1 página)"
  PHASE: "Uma fase isolada do funil (captação, vendas)"
  CAMPAIGN: "Campanha completa (todas as fases)"
  MULTI: "Vários projetos ou campanhas simultâneas"
```

### Step 3: ROUTE — Quem executa?

Baseado em TYPE + SCOPE, rotear para agente(s) e workflow:

```yaml
routing_matrix:
  CREATE + CAMPAIGN:
    workflow: "{funil selecionado}"
    lead: theboss
    squad: "conforme workflow"

  CREATE + MICRO:
    workflow: null
    lead: "{agente do domínio}"
    context: "briefing mínimo obrigatório"

  MODIFY + CAMPAIGN:
    workflow: diagnose-funnel → plano de otimização
    lead: theboss + metrics

  MODIFY + MICRO:
    lead: "{agente do domínio}"
    context: "dados atuais + objetivo"

  DIAGNOSE + any:
    lead: theboss + metrics + analyzer
    output: "relatório com recomendações"

  EXECUTE + MICRO:
    lead: "{agente do domínio}"
    pre_condition: "briefing ou contexto existente"

  SCALE + any:
    lead: theboss + rafa
    pre_condition: "dados de performance do original"
```

## Routing Triggers (Keywords → Agents)

| Keywords | Agente | Confiança |
|----------|--------|-----------|
| copy, texto, headline, email, whatsapp, script, vsl, cpl | @claudinho | Alta |
| criativo, imagem, brandbook, moodboard, slide, arte, identidade | @picasso | Alta |
| página, landing page, LP, lovable, UI, captura, checkout | @pixel | Alta |
| tráfego, anúncio, ad, meta ads, google ads, campanha paga | @cadu | Alta |
| automação, fluxo, n8n, make, manychat, chatbot, integração | @salazar | Alta |
| pesquisa, concorrência, mercado, avatar, benchmark | @analyzer | Alta |
| métrica, dashboard, relatório, KPI, performance, analytics | @metrics | Alta |
| venda, call, fechamento, objeção, proposta, negociação | @andreza | Alta |
| qualificação, SDR, BANT, lead, agendamento, pré-venda | @danilo | Alta |
| pós-venda, onboarding, NPS, retenção, churn, upsell | @carla | Alta |
| cronograma, timeline, SOP, processo, logística, gestão | @rafa | Alta |
| código, pixel, tracking, API, implementação técnica | @nerd | Alta |
| vídeo, motion, animação, remotion, reels | @milagroso | Alta |
| estratégia, funil, lançamento, oferta, diagnóstico | @theboss | Alta |

## Ambiguity Resolution

Quando o pedido é ambíguo (pode ir pra 2+ agentes):

1. **Perguntar** — Max 1 pergunta de clarificação
2. **Defaultar para @theboss** — Na dúvida, @theboss faz triage completo
3. **Nunca assumir** — Melhor perguntar do que rotear errado

## Existing Project Check (DH-001)

Antes de criar qualquer coisa nova:

```
1. Verificar projects/ — existe projeto para este expert?
2. Se SIM → verificar fase atual → continuar de onde parou
3. Se NÃO → iniciar onboarding-expert flow
```

## Delegation Context (obrigatório)

Toda delegação do @theboss inclui:

```yaml
delegacao:
  quem: "{agente}"
  o_que: "{task referência em core/tasks/}"
  por_que: "{contexto estratégico}"
  com_o_que: "{inputs obrigatórios — briefings, docs}"
  quando: "{prazo}"
  como: "{instruções específicas, tom, restrições}"
  entrega: "{formato, nomenclatura, pasta destino}"
```

---

*Triage Protocol — MSE v1.0*
