# create-squad

Task de montagem de squad por projeto. Cria a equipe, define responsabilidades e gera automaticamente a estrutura de pastas de entregas.

```yaml
task:
  name: create-squad
  description: "Montar squad de agentes e criar estrutura de pastas do projeto"
  agent: theboss
  priority: high

dependencies:
  requires:
    - onboarding-expert (briefing aprovado)
    - define-funnel (tipo de funil definido)
  templates:
    - SQUAD.md
    - ESTRUTURA-PROJETO.md
  frameworks:
    - funnel-decision-table.md

inputs:
  - briefing-estrategico (aprovado)
  - tipo-de-funil (definido)
  - codigo-do-projeto (ex: BIZU)

outputs:
  - "{PROJ}_DOC_SQUAD_V1.md"
  - "Estrutura de pastas criada em projects/{expert}/"

elicit: true
```

---

## Workflow

### Fase 1: Analise do Projeto

1. Ler o Briefing Estrategico aprovado
2. Identificar:
   - Tipo de funil escolhido
   - Ticket do produto
   - Complexidade do lancamento
   - Canais de aquisicao
   - Orcamento disponivel
3. Mapear necessidades por area:
   - Copy? → @claudinho
   - Criativos? → @picasso
   - Paginas? → @pixel + @nerd
   - Trafego? → @cadu
   - Automacoes? → @salazar
   - Vendas diretas? → @andreza + @danilo
   - Pos-venda? → @carla
   - Metricas? → @metrics
   - Gestao? → @rafa

### Fase 2: Selecao de Agentes

Usar a tabela de referencia por tipo de funil:

| Funil | Squad Core | Squad Suporte |
|-------|-----------|---------------|
| PLF Pago | @claudinho @picasso @cadu @pixel | @nerd @salazar @metrics @rafa |
| PLF Gratuito | @claudinho @picasso | @salazar @metrics @rafa |
| Seed Launch | @claudinho @salazar | @metrics |
| Meteorico | @claudinho @salazar | @metrics |
| Desafio | @claudinho @picasso @cadu @salazar | @pixel @metrics @rafa |
| Webinar | @claudinho @picasso @cadu @pixel | @salazar @metrics @rafa |
| Low Ticket | @claudinho @pixel @cadu @nerd | @salazar @metrics |
| Perpetuo | @claudinho @pixel @cadu @salazar | @metrics |
| High Ticket | @danilo @andreza @cadu @pixel | @claudinho @salazar @metrics |
| Evento Presencial | Squad completo | — |
| Sala Secreta | @claudinho @salazar @andreza | @metrics |
| Campanha Rapida | @claudinho @picasso @cadu | @metrics |

**Regras de selecao:**
- @theboss SEMPRE participa (orquestrador)
- @rafa participa em projetos com 5+ agentes
- @metrics participa em projetos com trafego pago
- @carla participa quando ha pos-venda estruturada

### Fase 3: Definir Responsabilidades

Para cada agente selecionado, definir:

| Agente | Entregaveis | Prazo | Prioridade |
|--------|-------------|-------|------------|
| @{agente} | {lista de entregas} | {prazo} | Alta/Media |

### Fase 4: Mapear Dependencias

Diagrama de dependencias entre agentes:

```
@analyzer (pesquisa) ──→ @theboss (estrategia)
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
        @claudinho       @picasso         @cadu
        (copy)           (criativos)      (trafego)
              │               │               │
              ▼               ▼               │
         @pixel/@nerd    @cadu (ads)         │
         (paginas)            │               │
              │               │               │
              └───────────────┼───────────────┘
                              ▼
                     @salazar (automacoes)
                              │
                              ▼
                     @metrics (analise)
```

### Fase 5: Criar Estrutura de Pastas

Baseado no tipo de funil, criar a estrutura completa em `projects/{expert}/`:

1. Consultar o template ESTRUTURA-PROJETO.md
2. Identificar qual tipo de funil foi escolhido
3. Criar TODAS as pastas do template correspondente
4. Adicionar `.gitkeep` em cada pasta vazia

**Exemplo para Lancamento Pago:**
```
projects/{expert}/lancamento-pago/
├── captacao/
│   ├── emails/
│   ├── criativos/
│   ├── mensagens/
│   ├── anuncios/
│   ├── paginas/
│   └── pesquisas/
├── antecipacao/
│   ├── emails/
│   ├── criativos/
│   └── mensagens/
├── evento/
│   ├── cpls/
│   ├── emails/
│   └── mensagens/
├── vendas/
│   ├── emails/
│   ├── criativos/
│   ├── mensagens/
│   └── paginas/
├── downsell/
│   ├── emails/
│   └── mensagens/
└── pos-venda/
    ├── emails/
    └── automacoes/
```

### Fase 6: Gerar Documento de Squad

Preencher o template SQUAD.md com:
- Todos os agentes selecionados
- Responsabilidades detalhadas
- Dependencias mapeadas
- Regras do squad
- Status tracker

Salvar como: `projects/{expert}/{PROJ}_DOC_SQUAD_V1.md`

### Fase 7: Comunicar Squad

Gerar resumo para o Anthony:
- Quais agentes foram alocados
- Primeiras tarefas de cada um
- Cronograma resumido
- Proximos passos

---

## Checklist de Validacao

```
☐ Briefing estrategico foi lido e entendido?
☐ Tipo de funil esta definido?
☐ Todos os agentes necessarios foram selecionados?
☐ Responsabilidades estao claras e sem sobreposicao?
☐ Dependencias estao mapeadas?
☐ Estrutura de pastas foi criada corretamente?
☐ Documento SQUAD.md foi preenchido por completo?
☐ Nomenclatura segue a taxonomia?
```

---
*Task: create-squad — Marketing Squad Extremo v1.0*
