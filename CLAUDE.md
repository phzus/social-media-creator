# Social Media Creator — Lone Mídia

Repositório de criação de conteúdo de social media para os clientes da **Lone Mídia** (agência em Araruama). Operado pelo Pedro Henrique (PH), social media da agência. Usa as skills `*-sms` do `blacktwist/social-media-skills` instaladas em [.claude/skills/](.claude/skills/).

## Idioma e tom (com PH)

- Toda comunicação com PH é em **português brasileiro informal**.
- Conteúdo gerado para clientes segue a voz definida em [clients/<slug>/context.md](clients/) — nunca a voz da agência.
- Termos do trabalho: "estratégia mensal", "roteiro", "pauta", "briefing", "post de feed", "carrossel", "stories", "reels". Não traduzir nem inventar substitutos.

## Docs vivos — regra principal (auto-save de contexto)

**Claude atualiza os documentos de estado AUTOMATICAMENTE em CADA prompt em que PH compartilhar informação relevante. PH não precisa pedir.**

Esta é a regra mais importante do projeto. Se PH menciona qualquer fato, decisão, restrição, oferta, contato, briefing, correção, preferência ou contexto novo — Claude **registra no arquivo correto** antes ou junto da resposta. Não "lembrar de salvar depois". É fluxo padrão.

### Onde cada tipo de informação vai

| Tipo de informação | Arquivo |
|---|---|
| Bloco de trabalho concluído (estratégia, lote de roteiros, análise) | Topo de [docs/PROGRESSO.md](docs/PROGRESSO.md) **e** `clients/<slug>/PROGRESSO.md` (entrada datada YYYY-MM-DD) |
| Novo cliente / mudança de status | [docs/CLIENTES-INDEX.md](docs/CLIENTES-INDEX.md) |
| Pergunta sem resposta (geral) | [docs/OPEN-QUESTIONS.md](docs/OPEN-QUESTIONS.md) |
| Pergunta sem resposta (de cliente) | `clients/<slug>/OPEN-QUESTIONS.md` |
| Pilar / voz / público / anti-padrão / posicionamento de cliente | `clients/<slug>/context.md` |
| **Padrões consolidados de cliente** (vícios a banir, formatos validados, regras específicas) | `clients/<slug>/PADROES.md` (criar se ainda não existir) |
| Briefing histórico imutável | `clients/<slug>/BRIEFING.md` |
| Material recebido do cliente (print, áudio transcrito, doc) | `clients/<slug>/referencias/YYYY-MM-DD-descricao.md` |
| Mudança no fluxo da agência | [docs/WORKFLOW.md](docs/WORKFLOW.md) |
| Regra global da Lone (do playbook) | [shared/playbook-lone-midia.md](shared/playbook-lone-midia.md) |
| Padrão que vale entre conversas (preferência, restrição, padrão de copy) | Memória persistente em `~/.claude/projects/.../memory/` (ver MEMORY.md) |

### Heurística para decidir se vale registrar

PH compartilhou algo. Antes de responder, perguntar:

1. **Será útil em conversa futura?** → memória persistente.
2. **Afeta a forma como o cliente é atendido?** → `clients/<slug>/context.md` ou `BRIEFING.md`.
3. **É decisão pendente?** → `OPEN-QUESTIONS.md` apropriado.
4. **É material recebido (print, doc, áudio)?** → `referencias/`.
5. **É um bloco de trabalho que acabei de fazer?** → `PROGRESSO.md`.
6. **É correção de algo que estava errado em arquivo?** → editar o arquivo certo + registrar a correção em PROGRESSO.

**Se a informação cair em mais de uma categoria, salvar nas duas.** Redundância controlada é melhor que perder contexto entre sessões.

### Bug check

Se Claude concluir um prompt sem ter atualizado nenhum doc apesar de PH ter compartilhado info nova — é bug. Sempre vale uma checagem mental "o que precisa ser salvo dessa conversa?".

## Multi-cliente — como funciona

Cada cliente tem sua pasta isolada em [clients/&lt;slug&gt;/](clients/). O slug é o nome da empresa em kebab-case (ex.: `arte-em-manipulacao`).

Estrutura padrão por cliente:

```
clients/<slug>/
├── BRIEFING.md          # Briefing inicial recebido (não editar, é o registro)
├── context.md           # Contexto vivo do cliente (voz, público, pilares, anti-padrões)
├── PROGRESSO.md         # Log datado YYYY-MM-DD do trabalho desse cliente
├── OPEN-QUESTIONS.md    # Dúvidas/pendências específicas do cliente
├── estrategia/          # Estratégias mensais (YYYY-MM.md)
├── conteudo/
│   ├── posts/           # Posts de feed e carrosséis (formulação para designer)
│   ├── roteiros/        # Roteiros de vídeo (Reels, TikTok, YouTube Shorts)
│   └── stories/         # Sequências de stories
└── referencias/         # Material recebido do cliente: prints, briefings, áudios transcritos
```

### Cliente ativo na conversa

PH normalmente menciona o cliente no início do pedido ("para Arte em Manipulação...", "no cliente X..."). Quando não mencionar e for ambíguo, **perguntar antes de criar qualquer conteúdo** — não chutar.

### Adaptação das skills `*-sms` para multi-cliente

As skills do `blacktwist/social-media-skills` foram desenhadas para um único usuário. Elas referenciam `.agents/social-media-context-sms.md` como fonte de contexto. **No nosso projeto, esse caminho é redirecionado para [clients/&lt;slug&gt;/context.md](clients/) do cliente ativo.**

Regras quando uma skill `*-sms` for invocada:
1. Identificar o cliente ativo (do pedido do PH, ou perguntar).
2. Onde a skill diz "leia `.agents/social-media-context-sms.md`" → ler `clients/<slug>/context.md`.
3. Onde a skill diz "escreva em `.agents/social-media-context-sms.md`" → escrever em `clients/<slug>/context.md`.
4. Conteúdo gerado vai para `clients/<slug>/conteudo/<tipo>/` com nome `YYYY-MM-DD-descricao-curta.md`.
5. Estratégias mensais vão para `clients/<slug>/estrategia/YYYY-MM.md`.

## Playbook da Lone Mídia (regra global)

**Fonte da verdade operacional para todos os clientes:** [shared/playbook-lone-midia.md](shared/playbook-lone-midia.md). Cada cliente herda essas regras a menos que o `context.md` específico declare exceção.

Pontos críticos que se aplicam a TODO cliente da Lone (até prova em contrário no `context.md` do cliente):

### Estrutura oficial de postagens (não alterar sem alinhamento de gestão)
- **Segunda-feira:** post estratégico simples (leve/educativo)
- **Quarta-feira:** vídeo (Reels)
- **Sexta-feira:** carrossel ou conteúdo focado em venda
- Stories: só se necessário, depende do conteúdo. Default = sem stories.

### Mix obrigatório de tipos de conteúdo (na estratégia mensal)
Toda estratégia precisa equilibrar: **venda + posicionamento + emocional + educativo + prova social + remarketing**. Não pode virar "só promoção".

### Estrutura padrão de roteiro de vídeo
**Gancho forte (0-3s) → Problema/Dor → Solução → Benefícios → CTA.** Sempre nessa ordem. Detalhes em [shared/playbook-lone-midia.md § 6](shared/playbook-lone-midia.md).

### Briefing mensal
Entre dias **22-25 do mês anterior**, solicitar briefing ao cliente com 5 perguntas obrigatórias (produto a vender mais, promoções, sazonalidade, meta de vendas, lançamentos). Detalhes na [§ 3 do playbook](shared/playbook-lone-midia.md).

### Fluxo com designer
Mínimo **1 dia útil** de antecedência. Padrão de pedido: produto + preço + benefícios + objetivo + referência visual. Envio para cliente preferencialmente **até 15h**, evitar após 17h/18h.

### Validação antes de enviar (último filtro)
Ortografia, clareza, preços, produtos, CTAs — sempre conferir antes de mandar pro cliente. Não repassar arte sem análise crítica.

### Erros inaceitáveis
- Postar sem estratégia
- Postar sem entender o cliente
- Só promoção, sem mix
- Conteúdo genérico
- Sem CTA claro
- Atrasar briefings
- Pedir arte/vídeo em cima da hora

---

## Subagents do Claude Code (.claude/agents/)

Subagents especializados que automatizam partes do workflow. Cada um vive em `.claude/agents/<nome>.md` com frontmatter (nome, descrição, tools, modelo) + prompt. Eu (Claude principal) invoco via Agent tool quando a tarefa bate com a descrição.

| Agent | Quando usar | Fase do workflow |
|---|---|---|
| [pesquisador-datas](.claude/agents/pesquisador-datas.md) | Pesquisar datas comemorativas relevantes do mês filtrando pelo negócio do cliente | Fase 2 (Pesquisa) |
| [mapeador-funil](.claude/agents/mapeador-funil.md) | Classificar peças em TOFU/MOFU/BOFU + Awareness Schwartz + validar distribuição | Fase 3 (Funil) |
| [validador-copy](.claude/agents/validador-copy.md) | Validar copy contra voice-quality-checklist + PADROES.md do cliente + compliance | Fase 5 (Validação) |
| [analista-perfil-ig](.claude/agents/analista-perfil-ig.md) | Analisar perfil Instagram do cliente (grade, tom, pilares) | Fase 1 (Contexto) — onboarding ou revisão mensal |

**Quando invocar:** ver [shared/workflow-planejamento-mensal.md](shared/workflow-planejamento-mensal.md) — workflow de planejamento mensal com 6 fases e subagents mapeados em cada fase.

## Skills disponíveis

Catálogo completo em [.claude/skills/](.claude/skills/). Resumo:

**Fundação**
- `social-media-context-sms` — captura/atualiza contexto do cliente (identidade, voz, público, pilares, plataformas, anti-padrões). **Sempre rodar primeiro para um cliente novo.**

**Estratégia**
- `content-strategy-sms` — define pilares, posicionamento, voz consistente.
- `content-calendar-sms` — planeja cadência, temas, agenda mensal.
- `platform-strategy-sms` — adapta abordagem por plataforma.

**Criação**
- `post-writer-sms` — post único otimizado por plataforma.
- `thread-writer-sms` — threads multi-post (X/Twitter, Threads, Bluesky).
- `carousel-writer-sms` — carrosséis slide-a-slide.
- `caption-writer-sms` — legendas para Instagram, Facebook, TikTok, Pinterest.
- `content-repurposer-sms` — reaproveita conteúdo entre formatos/plataformas.
- `hook-writer-sms` — ganchos de abertura.

**Análise**
- `performance-analyzer-sms` — interpreta métricas e tira insights acionáveis.
- `audience-growth-tracker-sms` — tendências de seguidores e drivers de crescimento.
- `content-pattern-analyzer-sms` — quais tipos/temas/formatos performam melhor.
- `optimization-advisor-sms` — recomendações específicas de melhoria.

## Antes de criar conteúdo

- **Antes de escrever roteiro/post para um cliente novo**, garantir que `clients/<slug>/context.md` existe e está completo. Se faltar, rodar a skill `social-media-context-sms` primeiro.
- **Antes de fazer suposição sobre o cliente** (público, ofertas, preços, restrições legais, sazonalidade), checar `BRIEFING.md` e `context.md`. Se a info não estiver lá, perguntar a PH e registrar a resposta no lugar certo.
- **Conteúdo para Arte em Manipulação (farmácia artesanal)**: atenção a regulamentação Anvisa/CFF — não fazer promessas terapêuticas, não substituir orientação médica, evitar copy hype de "cura". Confirmar restrições com PH na fase de briefing.
- **Erros recorrentes a evitar**: copy genérico ("transforme sua vida"), promessas absolutas, jargão sem tradução, CTAs vagos ("saiba mais"), datas relativas ("amanhã", "essa semana") sem âncora absoluta.

## Workflow geral

**Planejamento mensal estruturado em 6 fases:** [shared/workflow-planejamento-mensal.md](shared/workflow-planejamento-mensal.md) — receita repetível com subagents mapeados em cada fase (pesquisador-datas · mapeador-funil · validador-copy · analista-perfil-ig).

**Fluxo geral do projeto** detalhado em [docs/WORKFLOW.md](docs/WORKFLOW.md). Resumo:
1. **Briefing** recebido do cliente → salvo em `clients/<slug>/referencias/` e síntese vai para `BRIEFING.md`.
2. **Setup de contexto** → `social-media-context-sms` cria/atualiza `context.md`.
3. **Estratégia mensal** → `content-strategy-sms` + `content-calendar-sms` → arquivo em `estrategia/YYYY-MM.md`.
4. **Criação** → roteiros e posts em `conteudo/<tipo>/`.
5. **Entrega ao designer** → posts formulados como brief de design.
6. **Análise pós-publicação** → `performance-analyzer-sms` quando PH trouxer métricas.

## Templates compartilhados

[shared/templates/](shared/templates/) tem templates reusáveis (briefing, roteiro de vídeo, post de feed, carrossel). Editar livremente — qualquer melhoria de template aproveita a próxima criação.

## Análise visual e referências (pré-produção)

**Antes de fechar estratégia mensal e antes de mandar brief pra designer**, consultar [shared/visual-reference-checklist.md](shared/visual-reference-checklist.md). Cobre dois protocolos:

1. **Análise do perfil atual do cliente** — antes de fechar a estratégia, olhar a grade do Instagram e registrar análise em `clients/<slug>/referencias/YYYY-MM-DD-analise-perfil-instagram.md`. Atualizar mensalmente. Sem isso, a estratégia fica desconectada de como o cliente já se posiciona.
2. **Pinterest como fonte de referência visual** — antes de mandar brief pra designer, buscar 2-3 referências de Pinterest do nicho. Anexar ao brief. Evita "cara de IA" (textão, layout simétrico forçado, tipografia plana). PH mantém pasta com referências Pinterest curadas — pedir antes de cada ciclo novo.

Se PH apontar vício novo de design durante o projeto, atualizar o checklist visual.

## Filtros de qualidade de copy

**A ordem importa: estratégia ANTES de forma.**

1. **Estratégia primeiro** — passar pelo [shared/copy-strategy-guia.md](shared/copy-strategy-guia.md). Pergunta-mestre: *"por que essa pessoa vai parar de rolar o feed, ler até o fim e fazer algo depois?"* Se a copy não cria desejo, curiosidade ou motivo de ação, refazer do zero — independentemente de estar "bem escrita". Cliente no centro, não a marca/processo. Hook = tensão / contraste social / quebra de expectativa, não declaração institucional.
2. **Forma depois** — passar pelo [shared/voice-quality-checklist.md](shared/voice-quality-checklist.md) (anti-IA grammatical da Lone) + [.claude/rules/anti-ai-protocol.md](.claude/rules/anti-ai-protocol.md) (12 pecados do MSE) + PADROES.md do cliente. **Importante:** essas regras são guardrails contra IA preguiçosa, NÃO dogmas. Quando uma estrutura "proibida" (fórmula binária curta, paralelismo de 3, bullet com check) serve a um propósito de conversão claro, ela passa. Decisão sempre cai pra estratégia.

Vale para output gerado por skill `*-sms` também — skill é frame de partida, esses checklists são filtro final.

Resumo do que o checklist filtra:
- Antropomorfização (coisas fazendo ação humana — "marcas que insistem")
- Construções literárias forçadas ("do que devia", "como se")
- Jargão publicitário ("aspecto cansado", "uniformizar")
- Save/share-bait com julgamento ("decidir cuidar de verdade")
- Jargão técnico que consumidor não usa
- Analogias forçadas (pele virou carro)
- Repetição de estrutura entre peças da mesma campanha

Se algum item falhar, refazer antes de mandar. **Se PH apontar um vício novo durante o projeto, atualizar o checklist** — ele é vivo.

## Identidade visual da Lone (asset compartilhado)

[shared/identidade-lone/](shared/identidade-lone/) é o lugar canônico de logos, paleta e identidade da agência. Reutilizado em **todos os entregáveis** (HTMLs pra PDF, apresentações, briefs internos). Não duplicar dentro de pastas de cliente — sempre referenciar a versão compartilhada. Se precisar de variação que não existe lá (logo em outra cor, formato, etc.), pedir a PH em vez de recriar.

Identidade visual **de cada cliente** vai em `clients/<slug>/identidade/` (separado de `apresentacoes/` que é pra entregáveis em formato de apresentação).

## Stakeholders

| Pessoa | Papel |
|--------|-------|
| Pedro Henrique (PH) | Social media da Lone Mídia — operador deste projeto |
| Designer da Lone | Recebe os posts formulados e produz a arte |
| Cliente | Aprova estratégia mensal e fornece briefing/material |

---

# Marketing Squad Extremo (MSE) — Funnel Labs (instalado neste projeto)

> Sistema de orquestração de **18 agentes de marketing de alta conversão** (Funnel Labs / 7D Secrets) instalado dentro deste projeto. É a **artilharia pesada** pra campanhas, funis, lançamentos, ofertas, pitch ao vivo, landing pages e decks. Não substitui o fluxo de social media do dia a dia — convive com ele.

## Quando usar o MSE vs. o fluxo Lone padrão

| Situação | Usar |
|---|---|
| Post/carrossel/reel/legenda/stories do calendário mensal de um cliente | **Skills `*-sms` + workflow Lone** (default) |
| Estratégia mensal de cliente | **`content-strategy-sms` + `content-calendar-sms`** (workflow Lone) |
| Campanha de venda estruturada, funil, lançamento, oferta (Hormozi/Brunson), copy de página/email, pitch ao vivo, deck de apresentação, landing page | **MSE** (agentes + frameworks + workflows) |
| Pesquisa de mercado/concorrência profunda, instilação de tom de voz formal | **MSE** (`@analyzer`) |

Na dúvida entre os dois mundos, o critério é: **rotina de feed do cliente → Lone; máquina de conversão (funil/campanha/lançamento) → MSE.** Os dois compartilham a mesma exigência anti-IA e o mesmo cuidado com a voz do cliente.

## Mapeamento de papéis (MSE → realidade da Lone)

O MSE foi escrito pra uma operação chamada Funnel Labs (dono "Anthony"/"André Cia"). Neste projeto:

- **"Anthony" / "o dono" / "User" (aprovador final) = PH.** Toda aprovação GO/NO-GO e escolha de logo/estratégia é do PH.
- **O "expert"/"cliente" do MSE = o cliente da Lone** (Dumar, Arte em Manipulação, Engetec, Tindaro Solar). O `context.md` / `BRIEFING.md` do cliente em `clients/<slug>/` faz o papel do `COMUNICACAO.md` (tom de voz) + briefing do MSE.
- **`@theboss`** orquestra; os demais agentes têm autoridade exclusiva no seu domínio (ver [.claude/rules/agent-authority.md](.claude/rules/agent-authority.md)).

## Como ativar os agentes

Cada agente é um slash command: **`/MSE:agents:<nome>`** (ex.: `/MSE:agents:theboss`, `/MSE:agents:claudinho`, `/MSE:agents:picasso`). O comando carrega a persona completa de `core/agents/<nome>.md`. Dentro da persona, comandos com prefixo `*`: `*help`, `*task`, `*exit`.

Entry point recomendado: **`/MSE:agents:theboss`** → ele faz triage (TYPE/SCOPE/ROUTE) e delega.

### Os 18 agentes (autoridade exclusiva)

`@theboss` (estratégia/orquestração) · `@analyzer` (pesquisa) · `@metrics` (analytics) · `@luluzinha` (produto digital) · `@claudinho` (copy) · `@picasso` (brand/criativo/logo) · `@pixel` (landing/web) · `@nerd` (dev/tracking) · `@milagroso` (vídeo) · `@laurinha` (social media/conteúdo) · `@pitchinho` (pitch ao vivo/evento) · `@slides-creator` (slides/decks) · `@cadu` (tráfego pago) · `@salazar` (automações/IA) · `@andreza` (closer) · `@danilo` (SDR) · `@carla` (customer success) · `@rafa` (gestão).

## Regras do MSE (em `.claude/rules/`)

Carregar sob demanda quando operar em modo MSE:

| Regra | Arquivo |
|---|---|
| Autoridade de cada agente / matriz de delegação | [.claude/rules/agent-authority.md](.claude/rules/agent-authority.md) |
| **Protocolo Anti-IA v2.0** (12 pecados da escrita, 10 do design, blacklist) | [.claude/rules/anti-ai-protocol.md](.claude/rules/anti-ai-protocol.md) |
| Ciclo de vida da campanha (fases + status) | [.claude/rules/campaign-lifecycle.md](.claude/rules/campaign-lifecycle.md) |
| Protocolo de delegação (contexto obrigatório por task) | [.claude/rules/delegation-protocol.md](.claude/rules/delegation-protocol.md) |
| Padrões de entrega (HTML visual) | [.claude/rules/delivery-standards.md](.claude/rules/delivery-standards.md) |
| Quality gates (11 bloqueantes) | [.claude/rules/quality-gates.md](.claude/rules/quality-gates.md) |

**Anti-IA:** o [protocolo do MSE](.claude/rules/anti-ai-protocol.md) é mais extenso e **complementa** o [voice-quality-checklist da Lone](shared/voice-quality-checklist.md). Em peça de cliente Lone, os dois valem. A regra de acentuação correta em PT-BR é inegociável.

**Exceção ao "tudo em HTML":** a regra `delivery-standards.md` do MSE exige converter toda entrega em HTML visual — isso vale pra entregáveis MSE (decks, páginas, relatórios, propostas). **Não** se aplica à formulação de post/brief de design do dia a dia da Lone, que segue o formato `.md` do workflow Lone.

## Base de conhecimento MSE (em `core/`)

| Recurso | Path |
|---|---|
| Personas dos 18 agentes | [core/agents/](core/agents/) |
| Tasks executáveis (write-copy, criar-pitch, define-funnel, etc.) | [core/tasks/](core/tasks/) |
| 20 workflows de funil (um YAML por tipo) | [core/workflows/](core/workflows/) |
| 10 frameworks de elite (Hormozi, Brunson, Walker, Kennedy, Todd Brown…) | [core/frameworks/](core/frameworks/) |
| Templates (avatar, oferta, briefing, funil…) | [core/templates/](core/templates/) |
| Checklists de qualidade | [core/checklists/](core/checklists/) |
| KBs e dados (copy-frameworks, blacklist anti-IA, hooks, objeções…) | [core/data/](core/data/) |
| Protocolos (triage, handoff, voice instillation) | [core/protocols/](core/protocols/) |
| Constituição (8 artigos) — somente leitura | [core/constitution.md](core/constitution.md) |
| Config central — somente leitura | [core/config.yaml](core/config.yaml) |
| Squad config | [squad.yaml](squad.yaml) |
| Estado / projetos ativos MSE | [.mse/state.json](.mse/state.json) · [projects/](projects/) |

## Skills do MSE (em `.claude/skills/`)

- **`pitch-architect`** (@pitchinho) — pitch ao vivo de alta conversão (Opening → Stack → Anchor → Close).
- **`slides-create`** (@slides-creator) — outline slide a slide (webinar, CPL, evento, pitch deck).
- **`ui-ux-pro-max`** (@nerd/@pixel) — UI/UX avançado pra páginas e componentes (67 estilos, 96 paletas, 13 stacks).

## Workflow MSE resumido

`PESQUISA → INSTILAÇÃO → BRIEFING → PLANEJAMENTO → BRANDBOOK → MONTAGEM → PRODUÇÃO → REVISÃO → APROVAÇÃO (PH) → EXECUÇÃO → MONITORAMENTO`. Gates são bloqueantes. Regra de ouro do MSE: **nunca inventar métricas/depoimentos/resultados** — dados reais ou nada.
