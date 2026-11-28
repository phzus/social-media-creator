# Gerador do planejamento mensal

Primeiro modelo: `clients/mestre-da-obra-araruama/apresentacoes/2026-12-planejamento/`. Ainda não é genérico: no segundo cliente, copiar a pasta e trocar o que está abaixo. Se servir bem, vira gerador único com configuração por cliente.

| Arquivo | O que faz | O que trocar |
|---|---|---|
| `artes.mjs` | Protótipos 1080×1440 e `artes/feed.jpg` | `PECAS`, cores, fontes, telefone, o hexágono (é da Mestre), caminhos de foto e logo |
| `textos.mjs` | Legendas, objetivos, slides, tema de vídeo, semanas | Tudo |
| `doc.mjs` | HTML e PDF do cliente | Títulos, regras visuais, lista do que precisamos, nome do arquivo |
| `lote-md.mjs` | Lote em `.md` pro repositório | Cabeçalho e tabela de fontes |

**Ordem:** `node artes.mjs`, `node lote-md.mjs`, `node doc.mjs`. Precisa de `clients/<slug>/identidade/` com logo (SVG), fotos e fonte.

**Segundo modelo:** `clients/contele-solar/apresentacoes/2026-12-planejamento/` (26/11), com sistema visual próprio (serif itálico, sem caixa alta), fotos por recorte (`recorte()` em `artes.mjs`), roteiro e plano B em motion nos cards de vídeo, e prazo por item na lista do que precisamos.

**Armadilha do PDF:** a regra de celular tem que ser `@media screen and (max-width:820px)`. Sem o `screen`, ela vale na hora de gerar o PDF e desloca o que estiver posicionado (na Contele, a foto da capa foi pra esquerda, apagada). A tela em modo impressão não mostra o erro: conferir o PDF no leitor do Chrome.

**Conferir:** o `artes.mjs` avisa headline larga demais. Depois olhar `feed.jpg` e o PDF página a página. O sistema visual é de cada cliente: não repetir o da Mestre em outro (nem a paleta, nem a alternância claro/escuro por dia, que não é obrigatória). Contele v2: `artes-v2.mjs`, feed de uma cor só.
