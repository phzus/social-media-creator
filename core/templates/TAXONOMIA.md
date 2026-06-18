# TAXONOMIA — Guia de Nomenclatura de Arquivos

> Sistema padronizado de codigos para nomear TODOS os arquivos do projeto
> Referencia obrigatoria para todos os agentes

---

## Formato Padrao

```
{PROJETO}_{FASE}_{TIPO}_{CANAL}_{DESCRICAO}_V{N}.md
```

**Exemplos:**
```
BIZU_CAP_EML_CONVITE-BASE_V1.md
BIZU_VND_MSG-API_ABERTURA-CARRINHO_V1.md
BIZU_EVT_CPL_CPL1-OPORTUNIDADE_V1.md
BIZU_CAP_CRT-IG_FEED-DOR-PRINCIPAL_V1.md
BIZU_VND_PGN_PAGINA-DE-VENDAS_V2.md
BIZU_ANT_ADS-META_CARROSSEL-DEPOIMENTOS_V1.md
```

---

## Nivel 1: Projeto (Codigo do Expert/Produto)

Codigo curto de 3-5 caracteres, definido no onboarding.

| Codigo | Projeto |
|--------|---------|
| `BIZU` | Bizu do Engenheiro |
| `CEE` | Comunidade Engenheiro de Elite |
| `IP` | Intensivao Petrobras |
| *(definido por projeto)* | *(novo expert)* |

---

## Nivel 2: Fase do Funil (`{FASE}`)

| Codigo | Fase | Descricao |
|--------|------|-----------|
| `CAP` | Captacao | Geracao de leads, inscricao, lead magnet |
| `ANT` | Antecipacao | Aquecimento, expectativa, pre-evento |
| `EVT` | Evento | CPLs, lives, aulas, desafio, webinar |
| `VND` | Vendas | Carrinho aberto, oferta, fechamento |
| `UPS` | Upsell | Oferta de upgrade pos-compra |
| `DWS` | Downsell | Oferta alternativa, recuperacao |
| `PVD` | Pos-venda | Onboarding, CS, depoimentos, upsell |
| `QUA` | Qualificacao | Triagem, BANT, aplicacao |
| `PRE` | Pre-evento | Logistica, confirmacao |
| `PRP` | Perpetuo | Pecas de funil evergreen (sem fase) |

---

## Nivel 3: Tipo de Material (`{TIPO}`)

| Codigo | Tipo | Agente |
|--------|------|--------|
| `EML` | E-mail | @claudinho |
| `MSG` | Mensagem (WhatsApp/Telegram) | @claudinho |
| `CRT` | Criativo (imagem/video) | @picasso |
| `ADS` | Anuncio (copy + estrutura) | @claudinho + @cadu |
| `CPL` | Conteudo de Pre-lancamento | @claudinho |
| `PGN` | Pagina (landing, vendas, captura) | @pixel + @nerd |
| `SCR` | Script (VSL, aula, live) | @claudinho |
| `SCV` | Script de Venda (call/closer) | @andreza |
| `SDR` | Script de SDR (qualificacao) | @danilo |
| `PSQ` | Pesquisa (mercado, avatar) | @analyzer |
| `REL` | Relatorio (metricas, diagnostico) | @metrics |
| `AUT` | Automacao (fluxo, chatbot) | @salazar |
| `CLN` | Clone (audio/video I.A) | @salazar |
| `DOC` | Documento (briefing, SOP) | @rafa |
| `CKL` | Checklist | @rafa |
| `ONB` | Onboarding (pos-venda) | @carla |

---

## Nivel 4: Canal (`{CANAL}`) — Opcional

Usado quando o tipo de material tem variacoes por canal.

| Codigo | Canal |
|--------|-------|
| `API` | WhatsApp API Oficial |
| `GRP` | WhatsApp Grupo |
| `TLG` | Telegram |
| `IG` | Instagram |
| `FB` | Facebook |
| `META` | Meta Ads (Facebook + Instagram) |
| `GG` | Google Ads |
| `TT` | TikTok |
| `YT` | YouTube |
| `LNK` | LinkedIn |
| `BLOG` | Blog/SEO |
| `LOV` | Lovable (plataforma) |

**Quando usar canal:**
- Mensagens: `MSG-API`, `MSG-GRP`, `MSG-TLG`
- Criativos: `CRT-IG`, `CRT-TT`, `CRT-FB`
- Anuncios: `ADS-META`, `ADS-GG`, `ADS-TT`

**Quando NAO usar:**
- E-mails, Paginas, Scripts, Pesquisas, Relatorios (canal implicito)

---

## Nivel 5: Descricao (`{DESCRICAO}`)

Nome descritivo em kebab-case. Maximo 5 palavras. Auto-explicativo.

**Boas descricoes:**
- `CONVITE-BASE` / `LEMBRETE-INSCRICAO` / `ABERTURA-CARRINHO`
- `CPL1-OPORTUNIDADE` / `CPL2-TRANSFORMACAO` / `CPL3-OWNERSHIP`
- `FEED-DOR-PRINCIPAL` / `STORIES-DEPOIMENTO` / `CARROSSEL-BENEFICIOS`
- `PAGINA-DE-VENDAS` / `PAGINA-CAPTURA` / `PAGINA-OBRIGADO`

**Descricoes ruins (evitar):**
- `FINAL` / `NOVO` / `TESTE` / `V2-CORRIGIDO` (use versionamento)
- `COPY-EMAIL-PARA-BASE-DOS-LEADS-ANTIGOS` (muito longo)

---

## Nivel 6: Versao (`V{N}`)

- `V1` = primeira versao
- `V2` = segunda versao (apos revisao)
- `V3` = terceira versao
- Nunca deletar versao anterior — manter historico

---

## Documentos Internos (nao-entregaveis)

```
{PROJ}_DOC_BRIEFING-ESTRATEGICO_V1.md
{PROJ}_DOC_BRIEFING-COPY_V1.md
{PROJ}_DOC_COMUNICACAO_V1.md
{PROJ}_DOC_AVATAR_V1.md
{PROJ}_DOC_OFERTA_V1.md
{PROJ}_DOC_FUNIL_V1.md
{PROJ}_PSQ_MERCADO-CONCORRENCIA_V1.md
{PROJ}_REL_DIAGNOSTICO-FUNIL_V1.md
{PROJ}_CKL_PRE-LANCAMENTO_V1.md
```

---

## Regras (obrigatorias)

1. **SEMPRE MAIUSCULO** para codigos de taxonomia, kebab-case para descricao
2. **Underline `_`** separa niveis da taxonomia
3. **Hifen `-`** separa palavras dentro de um nivel
4. **Canal e opcional** — so usar quando ha variacao real por canal
5. **Versao e obrigatoria** — todo arquivo nasce como V1
6. **Extensao `.md`** para texto, `.json` para automacoes, `.sql` para schemas
7. **Codigo do projeto definido no onboarding** — registrado no BRIEFING-ESTRATEGICO
8. **Maximo 60 caracteres** no nome total do arquivo (sem extensao)

---
*Guia de Taxonomia — Marketing Squad Extremo v1.0*
