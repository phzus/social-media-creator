# Marketing Squad Extremo (MSE) v1.5

Sistema de orquestração de **18 agentes de IA** especializados em marketing digital de alta conversão — 6 tiers, 20 tipos de funil, 11 quality gates bloqueantes, protocolo anti-IA v2.0.

## Visão Geral

O MSE é um squad de agentes de IA orquestrados pelo **@theboss** (Estrategista-Chefe), cada um com autoridade exclusiva no seu domínio. O sistema cobre todo o ciclo de uma campanha — da pesquisa de mercado ao pós-venda, incluindo produto digital.

**Design Squad** e **Content Distillery** foram absorvidos como DNA nos agentes v3.0 (Neumeier, Draplin, McKinnon, Galloway, Gary Vee, Dan Koe, Nicolas Cole, Justin Welsh).

## Squad Irmão — Time de Vendas IA

O **Squad Time de Vendas IA** (`02-squads/squad-time-vendas/`) é um squad **operacional autônomo** de vendas 24/7 que opera dentro do Full Funnel (GHL). É irmão do MSE — não substitui. Reutiliza:

- **Personas:** `@danilo` (SDR) e `@andreza` (Closer) — derivadas deste MSE com overlay operacional para execução autônoma no runtime.
- **Protocolo Anti-IA v2.0** (`.claude/rules/anti-ai-protocol.md`).
- **Protocolo de Delegação** (`.claude/rules/delegation-protocol.md`).
- **Templates:** `BRIEFING-ESTRATEGICO.md`, `PASSAGEM-LEAD.md`, `COMUNICACAO.md`.

**O que NÃO compartilha:**
- `@laurinha` permanece **exclusivamente no MSE** como Social Media (estrategista de conteúdo) — não atua em vendas. O Squad Time de Vendas tem persona própria chamada **`@seller`** para Social Seller (vendedora via Instagram DM).

**Quando usar cada squad:**
- Estratégia de campanha, copy, criativos, tráfego, conteúdo, brand, pitch → **MSE**
- Execução autônoma 24/7 de SDR/Closer/Social Seller no Full Funnel → **Squad Time de Vendas IA**

## Tier Architecture (18 Agentes)

```
                          USER (Dono)
                              │
              ┌─ TIER 0 ────────┤ COMANDO & ESTRATÉGIA
              │   @theboss       │ Estrategista-Chefe & Orquestrador
              │                  │
              ├─ TIER 1 ────────┤ INTELIGÊNCIA & PESQUISA
              │   @analyzer      │ Pesquisa de Mercado
              │   @metrics       │ Analytics & KPIs
              │   @luluzinha     │ Product Experience Manager
              │                  │
              ├─ TIER 2 ────────┤ CRIAÇÃO & PRODUÇÃO
              │   @claudinho     │ Copywriter Senior
              │   @picasso       │ Diretor Criativo & Brand Strategist
              │   @pixel         │ Web Designer (LOVABLE/GHL)
              │   @nerd          │ Desenvolvedor Full-Stack
              │   @milagroso     │ Video Editor & Visual Producer
              │   @laurinha      │ Social Media & Content Producer
              │   @pitchinho     │ Pitch ao Vivo & Engenharia de Eventos ⭐ v2.0
              │   @slides-creator│ Slides, Decks & Apresentações ⭐ NEW
              │                  │
              ├─ TIER 3 ────────┤ CRESCIMENTO & DISTRIBUIÇÃO
              │   @cadu          │ Tráfego Pago Senior
              │   @salazar       │ Automações & I.A
              │                  │
              ├─ TIER 4 ────────┤ RECEITA & RETENÇÃO
              │   @andreza       │ Closer de Vendas
              │   @danilo        │ SDR & Qualificação
              │   @carla         │ Customer Success
              │                  │
              └─ TIER 5 ────────┤ OPERAÇÕES & GESTÃO
                  @rafa          │ Gestora de Projetos
```

## 20 Tipos de Funil

### Captação e Entrada
| Funil | Ticket | Timeline |
|-------|--------|----------|
| Isca Gratuita | Gratuito | Contínuo |
| Quiz | Qualquer | Contínuo |
| Low Ticket (Tripwire/SLO) | R$7-197 | Contínuo |

### Lançamento
| Funil | Ticket | Timeline |
|-------|--------|----------|
| PLF Pago (Clássico) | R$497-5K | 4-8 semanas |
| PLF Gratuito | R$497-5K | 2-3 semanas |
| Seed Launch | R$200-2K | 3-7 semanas |
| Meteórico (WhatsApp) | R$200-2K | 3-7 dias |

### Eventos e Experiências
| Funil | Ticket | Timeline |
|-------|--------|----------|
| Webinar | R$297-5K | 1-2 semanas |
| Workshop | R$97-997 | 1-2 semanas |
| Desafio Pago | R$47-497 | 2-3 semanas |
| Imersão Paga | R$297-10K | 2-5 dias |
| Evento Presencial | R$1K-50K+ | 6-8 semanas |

### Automatizado e Perpétuo
| Funil | Ticket | Timeline |
|-------|--------|----------|
| Perpétuo (Evergreen) | R$47-2K | Contínuo |
| Venda Interna | Qualquer | Contínuo |
| Campanha Rápida | R$200-2K | 1-3 dias |

### High Ticket e Premium
| Funil | Ticket | Timeline |
|-------|--------|----------|
| Aplicação | R$3K-100K+ | 1-2 semanas |
| Sessão Estratégica | R$2K-30K+ | 1-2 semanas |
| Sala Secreta | R$2K-50K+ | 1-2 semanas |
| High Ticket (Genérico) | R$3K-50K+ | 1-2 semanas |

### Serviços
| Funil | Ticket | Timeline |
|-------|--------|----------|
| Serviços (Freelancer/Agência) | R$500-20K+ | 1-3 semanas |

## Protocolo Anti-IA v2.0

Tolerância zero para conteúdo com cara de IA — aplica-se a copy, design e web.

- **12 Pecados Capitais da Escrita de IA** — fragmentação de frases, listas com vírgula, regra do três obsessiva, expressões acadêmicas, adjetivos genéricos, hipérboles, aberturas clichê, conclusões resumo, fórmulas binárias, simetria perfeita, falsa empatia, transições mecânicas
- **10 Pecados Capitais do Design de IA** — gradientes clichê, fontes genéricas, layout template, emojis/ícones, simetria previsível, ilustrações 3D, backgrounds chapados, bordas uniformes, fotos de banco, paleta sem contraste
- **6 Perguntas Bloqueantes** antes de qualquer entrega
- **Blacklist v2.0** com 150+ marcadores (PT-BR e EN)

## Quality Gates (11 — todos BLOCK)

| Gate | Nome | Checker |
|------|------|---------|
| QG-000 | Pesquisa de Mercado | @theboss + User |
| QG-000.5 | Instilação Tom de Voz | @theboss + User |
| QG-001 | Briefing Completo | @theboss |
| QG-002 | Estratégia Aprovada | User |
| QG-002.5 | Brandbook Aprovado | User |
| QG-003 | Squad Montado | @theboss |
| QG-004 | Copy Revisada (>=75%) | @theboss |
| QG-004.5 | Anti-IA Compliance | @theboss |
| QG-004.7 | HTML Visual Delivery | @theboss |
| QG-005 | Pré-Lançamento | @theboss + @rafa |
| QG-006 | Aprovação Final | User |

## Constituição do Marketing (8 Artigos)

| # | Princípio | Severidade |
|---|-----------|------------|
| I | Briefing First | NON-NEGOTIABLE |
| II | Agent Authority | NON-NEGOTIABLE |
| III | Campaign-Driven | MUST |
| IV | No Invention | MUST |
| V | Quality First | MUST |
| VI | Expert Voice | MUST |
| VII | Handoff Protocol | SHOULD |
| VIII | Data-Driven Decisions | SHOULD |

## Workflow Padrão

```
0. PESQUISA    → @analyzer pesquisa mercado em 8 frentes (HTML)
1. INSTILAÇÃO  → @analyzer coleta materiais do expert, gera COMUNICAÇÃO.md
2. BRIEFING    → @theboss questionário 21 perguntas
3. PLANEJAMENTO → BRIEFING-ESTRATÉGICO + BRIEFING-COPY + OFERTA + FUNIL
4. BRANDBOOK   → @picasso cria Brandbook (4 opções de logo, identidade visual)
5. MONTAGEM    → Squad conforme tipo de funil
6. EXECUÇÃO    → Workflow do funil selecionado (20 opções)
7. REVISÃO     → @theboss revisa (anti-IA + score >=75%)
8. HTML        → @picasso + @pixel convertem entregas em HTML visual
9. APROVAÇÃO   → User aprova (GO/NO-GO)
```

## 10 Frameworks de Elite

- **Hormozi** — Grand Slam Offers + $100M Leads
- **Brunson** — Value Ladder + Perfect Webinar + Low Ticket
- **Walker** — Product Launch Formula (PLF)
- **Pedro Adão** — Challenge Secrets
- **Kennedy** — Direct Response Marketing
- **Todd Brown** — Unique Mechanism & E5
- **Schwartz** — 5 Níveis de Consciência + Sofisticação de Mercado
- **Cialdini** — 6 Princípios de Persuasão
- **Sugarman** — Slippery Slide
- **Ogilvy** — Research-Driven Advertising

## Como Começar

1. Ative o TheBoss: `@theboss`
2. Execute o onboarding: `*task onboarding-expert`
3. O sistema guiará você por todo o ciclo de campanha
4. Após o briefing aprovado, monte o squad: `*task create-squad`

## Estrutura do Projeto

```
marketing-squad-extremo/
├── core/
│   ├── agents/          # 18 agentes (6 tiers)
│   ├── tasks/           # 17+ tasks executáveis
│   ├── workflows/       # 20 workflows (um por funil)
│   ├── templates/       # Templates de briefing, avatar, oferta
│   ├── checklists/      # Checklists de qualidade
│   ├── frameworks/      # 10 frameworks de marketing
│   ├── data/            # KBs, blacklists, heurísticas
│   ├── protocols/       # Triage, handoff, voice instillation
│   ├── config.yaml      # Configuração central
│   └── constitution.md  # Constituição do Marketing (8 artigos)
├── projects/            # Projetos ativos (entregas por expert)
├── docs/                # Documentação e guias
├── scripts/             # Auditoria e utilidades
└── .claude/             # Regras e configuração Claude Code
    └── rules/           # anti-ai-protocol, quality-gates, etc.
```

## Auditoria Estrutural

```bash
npm run audit          # Validação padrão
npm run audit:strict   # Warnings também falham
```

## Licença

Projeto privado. Todos os direitos reservados.

---

*Marketing Squad Extremo v1.5.1 — Mentoria Funnel Labs I.A.*
