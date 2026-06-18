# create-creatives

Task de criacao de criativos (imagens e videos) para todas as fases do funil. Briefing visual + direcao de arte.

```yaml
task:
  name: create-creatives
  description: "Criar criativos visuais para campanhas e conteudo"
  agent: picasso
  support: claudinho, cadu
  priority: medium

dependencies:
  requires:
    - write-copy (copy das pecas pronta)
    - define-funnel (funil definido)
  optional:
    - create-briefing-copy (para tom visual)
  templates:
    - COMUNICACAO.md (identidade visual)
    - TAXONOMIA.md

inputs:
  - copy aprovada (por fase)
  - identidade visual do expert (cores, fontes, logo)
  - briefing de comunicacao (tom visual)

outputs:
  - Briefings visuais detalhados por peca
  - Nomenclatura: "{PROJ}_{FASE}_CRT-{CANAL}_{DESCRICAO}_V1.md"

elicit: false
```

---

## Workflow

### Fase 1: Definir Identidade Visual

Extrair ou definir:

| Elemento | Valor |
|----------|-------|
| Cores primarias | {hex codes} |
| Cores secundarias | {hex codes} |
| Fonte titulos | {nome da fonte} |
| Fonte corpo | {nome da fonte} |
| Logo | {link/path} |
| Estilo fotografico | {clean / dark / vibrante / minimalista} |
| Referencias visuais | {marcas/perfis de referencia} |

### Fase 2: Mapear Criativos Necessarios

Por fase do funil e canal:

#### Captacao
| Peca | Canal | Formato | Quantidade |
|------|-------|---------|-----------|
| Anuncio feed | Instagram/Facebook | 1080x1080 | 3-5 variacoes |
| Anuncio stories | Instagram | 1080x1920 | 3-5 variacoes |
| Anuncio reels | Instagram/TikTok | 1080x1920 (video) | 2-3 variacoes |
| Carrossel | Instagram | 1080x1080 (multi) | 1-2 |
| Banner pagina | Web | 1920x1080 | 1 |

#### Antecipacao
| Peca | Canal | Formato | Quantidade |
|------|-------|---------|-----------|
| Posts de conteudo | Instagram | 1080x1080 | 5-10 |
| Stories sequencia | Instagram | 1080x1920 | 3-5 sets |
| Thumbnail | YouTube | 1280x720 | por video |
| Banner email | Email | 600xauto | 1-2 |

#### Evento
| Peca | Canal | Formato | Quantidade |
|------|-------|---------|-----------|
| Slides CPL/Webinar | Apresentacao | 1920x1080 | por aula |
| Thumb live | YouTube/IG | variavel | por live |
| Card de missao | Grupo WhatsApp | 1080x1080 | por dia (desafio) |

#### Vendas
| Peca | Canal | Formato | Quantidade |
|------|-------|---------|-----------|
| Banner pagina vendas | Web | variavel | 2-3 |
| Mockup produto | Web/Ads | variavel | 1-2 |
| Depoimento visual | Ads/Pagina | 1080x1080 | 3-5 |
| Countdown | Stories/Email | variavel | 1 set |

### Fase 3: Criar Briefings Visuais

Para cada criativo, gerar briefing detalhado:

```markdown
## Briefing Criativo

- **Peca:** {nome}
- **Objetivo:** {awareness / clique / conversao}
- **Formato:** {dimensoes}
- **Canal:** {onde sera veiculado}

### Texto (copy)
- Headline: "{texto}"
- Corpo: "{texto}"
- CTA: "{texto}"

### Direcao Visual
- Estilo: {descritivo / aspiracional / urgente}
- Elementos obrigatorios: {logo, foto expert, icones}
- Cores dominantes: {quais cores usar}
- Mood: {inspiracao visual}

### Referencia
- {link ou descricao de referencia visual}

### Especificacoes Tecnicas
- Resolucao: {72dpi web / 300dpi print}
- Formato arquivo: {PNG / JPG / MP4}
- Safe zone: {area segura para texto}
```

### Fase 4: Direcao de Video (se aplicavel)

Para criativos em video:

```markdown
## Briefing de Video

- **Duracao:** {15s / 30s / 60s / 90s}
- **Formato:** {vertical 9:16 / quadrado 1:1 / horizontal 16:9}
- **Estilo:** {talking head / animacao / B-roll / UGC / depoimento}

### Roteiro Visual
| Tempo | Visual | Audio/Texto | Acao |
|-------|--------|-------------|------|
| 0-3s | {hook visual} | {hook texto} | Prender atencao |
| 3-15s | {desenvolvimento} | {corpo} | Desenvolver |
| 15-Xs | {CTA visual} | {CTA texto} | Converter |

### Elementos
- Musica: {estilo / referencia}
- Legendas: {sim — estilo}
- Transicoes: {tipo}
```

### Fase 5: Revisao e Organizacao

```
☐ Identidade visual consistente em todas as pecas?
☐ Copy esta legivel nos formatos menores (stories, feed)?
☐ Contraste texto/fundo e adequado?
☐ Logo esta presente (sem poluir)?
☐ CTA esta visivel e claro?
☐ Safe zones respeitadas (texto nao cortado)?
☐ Variacoes suficientes para teste A/B?
☐ Nomenclatura segue taxonomia?
☐ Arquivos salvos na pasta correta (criativos/)?
```

---

## Formatos por Canal

| Canal | Formatos Aceitos | Peso Maximo |
|-------|-----------------|-------------|
| Meta Ads (Feed) | 1080x1080, 1200x628 | 30MB imagem, 4GB video |
| Meta Ads (Stories) | 1080x1920 | 30MB imagem, 4GB video |
| Google Ads (Display) | Multiplos (responsive) | 150KB |
| Google Ads (YouTube) | 1920x1080 (video) | — |
| TikTok Ads | 1080x1920 (video) | 500MB |
| Email | 600px largura | 200KB |
| Landing Page | Responsivo | Otimizado |

---
*Task: create-creatives — Marketing Squad Extremo v1.0*
