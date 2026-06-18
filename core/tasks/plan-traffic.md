# plan-traffic

Task de planejamento de trafego pago. Definicao de canais, orcamento, publicos, campanhas e metricas.

```yaml
task:
  name: plan-traffic
  description: "Criar plano de midia e estrategia de trafego pago"
  agent: cadu
  support: theboss, metrics
  priority: high

dependencies:
  requires:
    - define-funnel (funil definido)
    - structure-offer (oferta definida)
    - write-copy (copy pronta)
    - create-creatives (criativos prontos ou em producao)
  templates:
    - AVATAR.md (publico-alvo)
    - FUNIL.md (fases e canais)

inputs:
  - funil (tipo e fases ativas)
  - avatar (demograficos, interesses, comportamento digital)
  - oferta (ticket, margem)
  - budget disponivel
  - criativos (briefings prontos)

outputs:
  - Plano de midia completo
  - Estrutura de campanhas por plataforma

elicit: true
```

---

## Workflow

### Fase 1: Diagnostico de Trafego

| Pergunta | Resposta |
|----------|----------|
| Budget total disponivel | R$ {valor} |
| Periodo da campanha | {X} dias/semanas |
| Budget diario | R$ {valor} |
| Plataformas liberadas | Meta / Google / TikTok / YouTube |
| Pixel/tracking instalado? | Sim / Nao |
| Conta de anuncio ativa? | Sim / Nao |
| Historico de campanhas? | Sim (CPL medio: R$__) / Nao |

### Fase 2: Definir Canais e Distribuicao de Budget

| Canal | % do Budget | Budget | Objetivo |
|-------|------------|--------|----------|
| Meta Ads (Instagram + Facebook) | {%} | R$ {valor} | {leads / vendas / awareness} |
| Google Ads (Search + YouTube) | {%} | R$ {valor} | {leads / vendas} |
| TikTok Ads | {%} | R$ {valor} | {awareness / leads} |
| Reserva/Teste | 10-15% | R$ {valor} | Testes e otimizacao |

### Fase 3: Estrutura de Campanhas

#### Meta Ads (estrutura recomendada)

**Campanha 1: Captacao (TOFU)**
```
Campanha: [CAP] {Projeto} — Captacao
├── Conjunto 1: Interesse {interesse}
│   ├── Criativo 1: Video dor
│   ├── Criativo 2: Imagem depoimento
│   └── Criativo 3: Carrossel beneficios
├── Conjunto 2: Lookalike 1% (se disponivel)
│   ├── Criativo 1: Video dor
│   ├── Criativo 2: Imagem depoimento
│   └── Criativo 3: Carrossel beneficios
└── Conjunto 3: Broad (aberto)
    ├── Criativo 1: Video dor
    └── Criativo 2: Carrossel beneficios
```

**Campanha 2: Remarketing (MOFU/BOFU)**
```
Campanha: [RMK] {Projeto} — Remarketing
├── Conjunto 1: Visitou pagina (nao converteu)
│   ├── Criativo 1: Prova social
│   └── Criativo 2: Urgencia
├── Conjunto 2: Engajou conteudo (nao inscreveu)
│   └── Criativo 1: Video expert
└── Conjunto 3: Carrinho aberto (nao comprou)
    ├── Criativo 1: Depoimento forte
    └── Criativo 2: Ultimo dia
```

**Campanha 3: Vendas (se carrinho aberto)**
```
Campanha: [VND] {Projeto} — Vendas Diretas
├── Conjunto 1: Lista quente (leads do evento)
│   ├── Criativo 1: Oferta completa
│   └── Criativo 2: Garantia + escassez
└── Conjunto 2: Remarketing compradores potenciais
    └── Criativo 1: Ultima chance
```

### Fase 4: Definir Publicos

| Tipo | Descricao | Tamanho Estimado |
|------|-----------|-----------------|
| **Interesse** | {interesses baseados no avatar} | — |
| **Lookalike 1%** | Baseado em {lista/pixel/engajamento} | — |
| **Lookalike 3-5%** | Baseado em {fonte} | — |
| **Custom Audience** | Lista de emails ({X} contatos) | {X} |
| **Remarketing Site** | Visitantes ultimos {X} dias | — |
| **Remarketing Video** | Assistiu {X}% dos videos | — |
| **Remarketing Engajamento** | Interagiu com perfil {X} dias | — |

### Fase 5: Metricas e KPIs

| Metrica | Meta | Alerta |
|---------|------|--------|
| CPL (Custo por Lead) | R$ {valor} | > R$ {valor} |
| CPC (Custo por Clique) | R$ {valor} | > R$ {valor} |
| CTR (Click-Through Rate) | {X}% | < {X}% |
| CPM (Custo por Mil) | R$ {valor} | > R$ {valor} |
| Taxa de conversao LP | {X}% | < {X}% |
| ROAS | {X}x | < {X}x |
| CPA (Custo por Aquisicao) | R$ {valor} | > R$ {valor} |
| Frequencia | < {X} | > {X} |

### Fase 6: Cronograma de Trafego

| Fase do Funil | Inicio | Fim | Budget Diario | Objetivo |
|---------------|--------|-----|---------------|----------|
| Captacao | D-{X} | D-{Y} | R$ {valor} | {X} leads |
| Remarketing | D-{X} | D-{Y} | R$ {valor} | Nutrir leads |
| Vendas | D-{X} | D-{Y} | R$ {valor} | Conversao |
| Escassez | D-{X} | D-{Y} | R$ {valor} | Urgencia |

### Fase 7: Plano de Otimizacao

**Rotina diaria:**
- Verificar CPL, CTR e frequencia
- Pausar criativos com CTR < {X}%
- Escalar conjuntos com CPL < meta

**Rotina semanal:**
- Analisar desempenho por publico
- Testar novos criativos (2-3 por semana)
- Ajustar budget entre conjuntos

**Triggers de acao:**
- CPL > 2x meta → Pausar conjunto, revisar criativo
- CTR < 0.5% → Trocar criativo
- Frequencia > 3 → Expandir publico ou trocar criativo
- ROAS < 1x → Revisar pagina de destino + oferta

---

## Checklist de Validacao

```
☐ Budget total e diario definidos?
☐ Canais selecionados com justificativa?
☐ Estrutura de campanhas montada?
☐ Publicos definidos (interesse, lookalike, remarketing)?
☐ Metricas e KPIs com metas claras?
☐ Cronograma de trafego alinhado com funil?
☐ Plano de otimizacao com triggers?
☐ Pixel/tracking configurado?
☐ Criativos prontos ou em producao?
```

---
*Task: plan-traffic — Marketing Squad Extremo v1.0*
