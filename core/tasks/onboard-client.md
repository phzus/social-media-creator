# onboard-client

Task de onboarding pos-venda. Recepcao do novo cliente, acesso, primeiros passos e acompanhamento inicial.

```yaml
task:
  name: onboard-client
  description: "Executar onboarding pos-venda do novo cliente"
  agent: carla
  support: salazar, claudinho
  priority: medium

dependencies:
  requires:
    - close-sales (venda realizada)
  optional:
    - setup-automations (fluxo de onboarding automatizado)
  templates:
    - TAXONOMIA.md

inputs:
  - dados do cliente (nome, email, produto comprado)
  - produto/area de membros (acessos)
  - sequencia de onboarding (emails)

outputs:
  - Cliente ativo e engajado
  - Nomenclatura: "{PROJ}_PVD_ONB_{DESCRICAO}_V1.md"

elicit: false
```

---

## Workflow

### Fase 1: Boas-Vindas Imediatas (D+0)

**Dentro de 1 hora apos a compra:**

1. Mensagem de boas-vindas personalizada (WhatsApp)
```
{nome}, parabens pela decisao! Voce acaba de entrar para {produto}.

Meu nome e {nome CS}, e vou ser sua guia nessa jornada.

Seus acessos ja estao liberados: {link}

Qualquer duvida, e so me chamar aqui. Estou com voce!
```

2. Email de boas-vindas (automatizado via @salazar)
   - Confirmacao da compra
   - Dados de acesso
   - Primeiros passos claros
   - Contato de suporte

3. Liberar acessos:
   - Area de membros
   - Grupo exclusivo (WhatsApp/Telegram)
   - Materiais complementares
   - Bonus (se houver)

### Fase 2: Primeiros Passos (D+1 a D+3)

**Objetivo: Primeiro quick win em ate 72 horas**

| Dia | Acao | Canal | Objetivo |
|-----|------|-------|----------|
| D+1 | "Voce ja acessou? Comece por aqui" | WhatsApp | Guiar primeiro acesso |
| D+1 | Email com guia de primeiros passos | Email | Passo a passo claro |
| D+2 | "Como esta indo? Alguma duvida?" | WhatsApp | Verificar progresso |
| D+3 | Conteudo de quick win | Email | Garantir primeira vitoria |

**Quick Win = A acao mais simples que gera resultado rapido.**

Exemplos por tipo de produto:
| Produto | Quick Win |
|---------|-----------|
| Curso online | Completar primeira aula + exercicio |
| Mentoria | Preencher formulario de diagnostico |
| Comunidade | Se apresentar no grupo + primeira interacao |
| Ferramenta/SaaS | Configurar conta + primeira acao |
| Consultoria | Call de kickoff + plano de acao |

### Fase 3: Acompanhamento Semanal (D+7 a D+30)

| Semana | Acao | Objetivo |
|--------|------|----------|
| Semana 1 | Check-in: "Como foi sua primeira semana?" | Medir engajamento |
| Semana 2 | Conteudo de valor extra | Manter motivacao |
| Semana 3 | Pesquisa rapida (1 pergunta) | Identificar problemas |
| Semana 4 | NPS + pedido de depoimento (se NPS >= 8) | Medir satisfacao |

### Fase 4: NPS e Satisfacao (D+30)

**Pesquisa NPS:**
```
{nome}, em uma escala de 0 a 10, o quanto voce recomendaria
{produto} para um amigo ou colega?

0 ─────────────────────── 10
```

| Score | Classificacao | Acao |
|-------|---------------|------|
| 9-10 | **Promotor** | Pedir depoimento + indicacao |
| 7-8 | **Neutro** | Identificar o que falta para ser 9-10 |
| 0-6 | **Detrator** | Contato urgente, entender problema, resolver |

**Para promotores (9-10):**
```
Que incrivel, {nome}! Fico muito feliz!

Voce toparia gravar um depoimento rapido (30 segundos) contando
como {produto} te ajudou? Isso ajuda muito outras pessoas como voce.

{link para envio ou instrucoes}
```

**Para detratores (0-6):**
```
{nome}, obrigada pela sinceridade. Quero muito entender o que
aconteceu pra gente melhorar. Posso te ligar rapidinho?
Nao vai levar 5 minutos.
```

### Fase 5: Retencao e Reativacao

**Sinais de alerta (churn risk):**
| Sinal | Acao |
|-------|------|
| Nao acessou em 7 dias | WhatsApp: "Senti sua falta! Tudo bem?" |
| Nao completou modulo 1 em 14 dias | Email: conteudo motivacional + guia |
| Nao abriu emails em 30 dias | WhatsApp direto: check-in pessoal |
| Pediu reembolso | Call de retencao (entender motivo) |

**Sequencia de reativacao:**
1. D+0: WhatsApp pessoal ("Senti sua falta")
2. D+2: Email com conteudo de alto valor
3. D+5: WhatsApp com case de aluno similar
4. D+7: Oferta de suporte extra (call 1:1, materiais)
5. D+14: Se nao respondeu → mover para base fria

### Fase 6: Coleta de Depoimentos

**Formatos de depoimento:**
| Formato | Como coletar | Onde usar |
|---------|-------------|----------|
| Video (ideal) | Enviar roteiro + link pra gravar | Pagina vendas, ads |
| Texto | Formulario + screenshot WhatsApp | Pagina vendas, email |
| Audio | Mensagem de voz WhatsApp | Ads, landing page |
| Print | Screenshot de conversa/resultado | Stories, ads |

**Roteiro sugerido para depoimento em video:**
```
1. Seu nome e o que voce faz (5 seg)
2. Como era sua situacao ANTES (10 seg)
3. O que mudou DEPOIS de {produto} (15 seg)
4. Resultado especifico que voce conquistou (10 seg)
5. Recomendacao final (5 seg)
```

### Fase 7: Upsell/Cross-sell (D+30 a D+90)

**Quando oferecer:**
- Cliente completou 50%+ do conteudo
- NPS >= 8
- Demonstrou resultados
- Perguntou sobre produto complementar

**Como oferecer:**
```
{nome}, parabens pelos resultados que voce ta tendo!

Tenho uma sugestao pra voce: {produto complementar}.
E o proximo passo natural pra quem {resultado atual}.

Como voce ja e aluno(a), tenho uma condicao especial: {oferta VIP}.

Quer saber mais?
```

---

## Metricas de CS

| Metrica | Meta | Alerta |
|---------|------|--------|
| NPS | >= 8.0 | < 7.0 |
| Taxa de onboarding (acessou em 48h) | 80%+ | < 60% |
| Taxa de conclusao (modulo 1) | 60%+ | < 40% |
| Churn rate (mensal) | < 5% | > 10% |
| Taxa de depoimento | 15%+ | < 5% |
| Taxa de upsell | 10-20% | < 5% |

---
*Task: onboard-client — Marketing Squad Extremo v1.0*
