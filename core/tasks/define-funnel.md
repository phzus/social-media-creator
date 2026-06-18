# define-funnel

Task de definicao do tipo de funil ideal para o projeto. Usa a tabela de decisao e os dados do briefing para recomendar o melhor funil.

```yaml
task:
  name: define-funnel
  description: "Definir o tipo de funil ideal baseado no cenario do projeto"
  agent: theboss
  support: analyzer
  priority: high

dependencies:
  requires:
    - onboarding-expert (briefing aprovado)
  templates:
    - FUNIL.md
  frameworks:
    - funnel-decision-table.md
    - hormozi-offer.md
    - brunson-value-ladder.md

inputs:
  - briefing-estrategico (aprovado)
  - pesquisa-de-mercado (se disponivel)

outputs:
  - "{PROJ}_DOC_FUNIL_V1.md"

elicit: true
```

---

## Workflow

### Fase 1: Coleta de Dados do Cenario

Extrair do briefing estrategico as 8 variaveis de decisao:

| Variavel | Pergunta | Resposta |
|----------|----------|----------|
| **Ticket** | Qual o preco do produto? | R$ _____ |
| **Lista** | Tem lista de emails? Quantos? | _____ contatos |
| **Produto** | Produto ja existe ou precisa criar? | Existe / Criar |
| **Budget** | Tem orcamento para trafego pago? | R$ _____ / Sem budget |
| **Timeline** | Quanto tempo ate o lancamento? | _____ semanas |
| **Autoridade** | Expert ja tem audiencia/autoridade? | Sim / Em construcao |
| **Equipe** | Tem equipe de vendas (SDR/closer)? | Sim / Nao |
| **Objetivo** | Qual o objetivo principal? | Validar / Vender / Escalar |

### Fase 2: Consultar Tabela de Decisao

Cruzar as variaveis com a tabela de decisao (funnel-decision-table.md):

**Por cenario:**

| Cenario | Funil Recomendado | Alternativa |
|---------|-------------------|-------------|
| Sem lista, sem produto | Seed Launch | Desafio gratuito |
| Lista pequena (500-2K), sem ads | PLF Gratuito | Webinar ao vivo |
| Lista grande (5K+), com budget | PLF Pago | Webinar automatizado |
| Produto digital R$27-197 | Low Ticket (Tripwire) | Perpetuo |
| Curso/mentoria R$500-2K | PLF Pago ou Desafio | Webinar |
| Mentoria/consultoria R$3K+ | High Ticket | Evento Presencial |
| Validar ideia nova | Seed Launch | Desafio gratuito |
| Velocidade maxima (1-3 dias) | Campanha Rapida | Meteorico |
| Comunidade engajada WhatsApp | Meteorico | Desafio |
| Construir autoridade + vender | Webinar | Desafio |
| Ticket altissimo (R$10K+) | Evento Presencial | High Ticket |
| Escalar sem esforco continuo | Perpetuo | Webinar automatizado |

**Por ticket:**

| Faixa de Ticket | Funis Indicados |
|-----------------|-----------------|
| R$7-97 | Low Ticket, Campanha Rapida |
| R$97-500 | Meteorico, Perpetuo, Desafio |
| R$500-2K | PLF, Webinar, Desafio |
| R$2K-5K | PLF Pago, Webinar, High Ticket |
| R$5K-20K | High Ticket, Evento Presencial |
| R$20K+ | Evento Presencial, Sala Secreta |

### Fase 3: Analise de Viabilidade

Para o funil recomendado, validar:

```
☐ Expert tem os assets necessarios? (lista, audiencia, conteudo)
☐ Budget e suficiente para o tipo de funil?
☐ Timeline e compativel? (ex: PLF precisa 4-6 semanas, campanha rapida 1-3 dias)
☐ Equipe necessaria esta disponivel?
☐ Produto esta no estagio certo? (existente vs. a criar)
```

Se algum item falhar → considerar funil alternativo.

### Fase 4: Definir Fases Ativas

Com o funil escolhido, marcar quais fases serao utilizadas:

| Fase | Ativa? | Justificativa |
|------|--------|---------------|
| Captacao | ☐ Sim / ☐ Nao | {motivo} |
| Antecipacao | ☐ Sim / ☐ Nao | {motivo} |
| Evento | ☐ Sim / ☐ Nao | {motivo} |
| Vendas | ☐ Sim / ☐ Nao | {motivo} |
| Upsell | ☐ Sim / ☐ Nao | {motivo} |
| Downsell | ☐ Sim / ☐ Nao | {motivo} |
| Pos-venda | ☐ Sim / ☐ Nao | {motivo} |
| Qualificacao | ☐ Sim / ☐ Nao | {motivo} |

### Fase 5: Mapear Canais por Fase

| Fase | Canais | Agente |
|------|--------|--------|
| Captacao | {Meta Ads, Google, Organico...} | @cadu |
| Antecipacao | {Email, WhatsApp, Instagram...} | @claudinho |
| Evento | {Live, Grupo WhatsApp, Zoom...} | @claudinho + @salazar |
| Vendas | {Email, WhatsApp, Pagina...} | @claudinho |

### Fase 6: Projetar Metricas-Alvo

| Metrica | Meta | Referencia |
|---------|------|-----------|
| Leads captados | {numero} | Benchmark do nicho |
| Taxa de presenca (evento) | {%} | Media do tipo de funil |
| Taxa de conversao | {%} | Referencia framework |
| Ticket medio | R$ {valor} | Definido na oferta |
| Faturamento projetado | R$ {valor} | Leads x conversao x ticket |
| ROAS minimo | {X}x | Break-even + margem |
| CPL maximo | R$ {valor} | Budget / leads alvo |

### Fase 7: Gerar Documento de Funil

Preencher o template FUNIL.md com todas as definicoes.

Salvar como: `projects/{expert}/{PROJ}_DOC_FUNIL_V1.md`

### Fase 8: Apresentar para Aprovacao

Gerar resumo executivo para o Anthony:
- Funil escolhido e por que
- Fases ativas
- Canais principais
- Metricas-alvo
- Squad necessario
- Timeline estimada

**Aguardar aprovacao antes de prosseguir para create-squad.**

---

## Checklist de Validacao

```
☐ Todas as 8 variaveis de decisao foram coletadas?
☐ Tabela de decisao foi consultada?
☐ Funil recomendado faz sentido para o cenario?
☐ Analise de viabilidade passou?
☐ Fases ativas estao definidas?
☐ Canais por fase estao mapeados?
☐ Metricas-alvo sao realistas?
☐ Documento FUNIL.md esta completo?
☐ Anthony aprovou a escolha?
```

---
*Task: define-funnel — Marketing Squad Extremo v1.0*
