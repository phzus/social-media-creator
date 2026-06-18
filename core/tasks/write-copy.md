# write-copy

Task de producao de copy para todas as pecas do funil. Cobre emails, mensagens, paginas, anuncios, scripts e CPLs.

```yaml
task:
  name: write-copy
  description: "Produzir copy para todas as pecas do funil"
  agent: claudinho
  support: theboss
  priority: high

dependencies:
  requires:
    - onboarding-expert (briefing aprovado)
    - create-briefing-copy (briefing de copy preenchido)
    - define-funnel (funil definido)
    - structure-offer (oferta estruturada)
  templates:
    - BRIEFING-COPY.md
    - COMUNICACAO.md
    - AVATAR.md
    - TAXONOMIA.md
  frameworks:
    - walker-plf.md (se PLF)
    - brunson-perfect-webinar.md (se webinar)
    - brunson-low-ticket.md (se low ticket)
    - adao-challenge.md (se desafio)
    - kennedy-direct-response.md (sempre)
    - todd-brown-mechanism.md (sempre)

inputs:
  - briefing-copy (5 partes)
  - comunicacao (tom de voz)
  - avatar (publico-alvo)
  - oferta (value stack)
  - funil (fases e canais)

outputs:
  - Pecas de copy por fase (emails, mensagens, paginas, scripts, ads)
  - Nomenclatura: "{PROJ}_{FASE}_{TIPO}_{CANAL}_{DESCRICAO}_V1.md"

elicit: false
```

---

## Workflow

### Fase 1: Preparacao

1. Ler TODOS os documentos de input:
   - Briefing de Copy (5 partes: Big Idea, Posicionamento, Funil, Avatar, Objecoes)
   - Comunicacao (tom de voz, expressoes, palavras proibidas)
   - Avatar (dores, desejos, nivel de consciencia, ponto de ruptura)
   - Oferta (resultado, mecanismo unico, value stack, garantia)
   - Funil (tipo, fases ativas, canais)

2. Extrair elementos-chave de copy:
   - Big Idea (premissa unica da campanha)
   - Linha da Promessa (promessa central)
   - Narrativa (historia que conecta)
   - Mecanismo Unico (por que funciona)
   - Inimigo em Comum (contra quem lutamos)
   - Ponto de Ruptura (momento "chega!" do avatar)

3. Mapear as pecas necessarias por fase do funil

### Fase 2: Producao por Fase

#### CAPTACAO (CAP)

**Emails:**
- Convite base (inscricao/registro)
- Lembrete de inscricao
- Confirmacao + boas-vindas

**Mensagens (WhatsApp/Telegram):**
- Convite para inscricao
- Lembrete pra quem nao se inscreveu

**Paginas (briefing para @pixel):**
- Copy da pagina de captura (headline, subheadline, bullets, CTA)
- Copy da pagina obrigado (proximo passo)

**Anuncios (copy para @cadu):**
- 3-5 variacoes de copy (dor, desejo, prova social, curiosidade, urgencia)
- Headlines e textos para cada formato (feed, stories, reels)

---

#### ANTECIPACAO (ANT)

**Emails:**
- Sequencia de aquecimento (3-7 emails)
- Cada email com um objetivo: conexao, autoridade, expectativa, prova

**Mensagens:**
- Conteudos de valor para grupo
- Pesquisas e enquetes de engajamento
- Lembretes de evento/aula

---

#### EVENTO (EVT)

**CPLs (se PLF):**
- CPL 1: Oportunidade — mostrar que existe uma oportunidade
- CPL 2: Transformacao — mostrar que a transformacao e possivel
- CPL 3: Ownership — mostrar que ELES podem ter essa transformacao
- Cada CPL: estrutura + pontos-chave + transicao para o proximo

**Scripts (se Webinar/Desafio/Live):**
- Script completo do webinar (Perfect Webinar framework)
- Scripts diarios do desafio (missoes)
- Roteiro de lives

**Emails de suporte ao evento:**
- Email de lembrete pre-evento
- Email pos-cada-aula (resumo + gancho pro proximo)

---

#### VENDAS (VND)

**Emails de carrinho:**
- Abertura de carrinho (anuncio + link)
- Logica (racional, ROI, comparacao)
- Emocao (historia, transformacao, depoimentos)
- Urgencia (prazo, escassez real)
- Ultima chance (countdown, FOMO real)

**Paginas:**
- Copy completa da pagina de vendas (VSL ou long-form)
  - Headline magnetica
  - Lead (abertura)
  - Problema (agitacao)
  - Mecanismo unico (solucao)
  - Value stack (oferta)
  - Prova social (depoimentos)
  - Garantia
  - CTA
  - FAQ
- Copy da pagina de checkout

**Mensagens:**
- Sequencia de vendas WhatsApp (3-5 mensagens)
- Mensagens de urgencia

**Scripts de venda (briefing para @andreza):**
- Pontos-chave para call de vendas
- Objecoes e respostas

---

#### DOWNSELL (DWS)

**Emails:**
- Oferta alternativa (produto menor/parcelamento)
- Ultimo chance com condicao especial

---

#### POS-VENDA (PVD)

**Emails:**
- Boas-vindas ao comprador
- Primeiros passos (quick win)
- Onboarding (sequencia)

---

### Fase 3: Revisao de Copy

Para CADA peca produzida, verificar:

```
☐ Tom de voz do expert esta preservado?
☐ Big Idea esta presente ou referenciada?
☐ Mecanismo Unico esta claro?
☐ Nivel de consciencia do avatar esta correto para a fase?
☐ CTA e claro e unico (uma acao por peca)?
☐ Principios de Kennedy estao aplicados?
   ☐ Mensuravel? (CTA rastreavel)
   ☐ Direto? (pede acao especifica)
   ☐ Segmentado? (fala com o avatar certo)
☐ Nenhum dado foi inventado? (Constitution Art. IV)
☐ Nomenclatura segue a taxonomia?
☐ Salvo na pasta correta?
```

### Fase 4: Organizacao e Entrega

1. Nomear cada arquivo seguindo a taxonomia
2. Salvar na pasta correta da estrutura do projeto
3. Criar indice das pecas produzidas por fase

**Exemplo de organizacao:**
```
projects/{expert}/lancamento-pago/
├── captacao/
│   ├── emails/
│   │   └── {PROJ}_CAP_EML_CONVITE-BASE_V1.md
│   └── mensagens/
│       └── {PROJ}_CAP_MSG-API_CONVITE-INSCRICAO_V1.md
├── vendas/
│   ├── emails/
│   │   ├── {PROJ}_VND_EML_ABERTURA-CARRINHO_V1.md
│   │   ├── {PROJ}_VND_EML_LOGICA_V1.md
│   │   ├── {PROJ}_VND_EML_EMOCAO_V1.md
│   │   ├── {PROJ}_VND_EML_URGENCIA_V1.md
│   │   └── {PROJ}_VND_EML_ULTIMA-CHANCE_V1.md
│   └── paginas/
│       └── {PROJ}_VND_PGN_PAGINA-DE-VENDAS_V1.md
```

---

## Regras de Copy (obrigatorias)

1. **NUNCA inventar depoimentos, metricas ou resultados** — usar apenas dados reais do briefing
2. **SEMPRE no tom do expert** — consultar COMUNICACAO.md antes de cada peca
3. **SEMPRE seguir o nivel de consciencia** — Unaware→Problem→Solution→Product→Most Aware
4. **UM CTA por peca** — nao confundir o leitor com multiplas acoes
5. **Headline e a peca mais importante** — investir 50% do tempo nela
6. **Lead (abertura) decide se o resto sera lido** — gancho nos primeiros 3 segundos
7. **Bullets vendem** — cada bullet e uma mini-promessa
8. **Objecao nao respondida = venda perdida** — mapear e responder todas

---
*Task: write-copy — Marketing Squad Extremo v1.0*
