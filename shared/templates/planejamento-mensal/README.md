# Gerador do planejamento mensal

Primeiro modelo: `clients/mestre-da-obra-araruama/apresentacoes/2026-12-planejamento/`. Ainda não é genérico: no segundo cliente, copiar a pasta e trocar o que está abaixo. Se servir bem, vira gerador único com configuração por cliente.

| Arquivo | O que faz | O que trocar |
|---|---|---|
| `artes.mjs` | Protótipos 1080×1440 e `artes/feed.jpg` | `PECAS`, cores, fontes, telefone, o hexágono (é da Mestre), caminhos de foto e logo |
| `textos.mjs` | Legendas, objetivos, slides, tema de vídeo, semanas | Tudo |
| `doc.mjs` | HTML e PDF do cliente | Títulos, regras visuais, lista do que precisamos, nome do arquivo |
| `lote-md.mjs` | Lote em `.md` pro repositório | Cabeçalho e tabela de fontes |

**Ordem:** `node artes.mjs`, `node lote-md.mjs`, `node doc.mjs`. Precisa de `clients/<slug>/identidade/` com logo (SVG), fotos e fonte.

**Conferir:** o `artes.mjs` avisa headline larga demais. Depois olhar `feed.jpg` e o PDF página a página. O sistema visual é de cada cliente: não repetir o da Mestre em outro.
