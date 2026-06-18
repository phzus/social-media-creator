# Visual Reference Checklist — protocolo de referência visual e análise de perfil

**Quando usar:** **antes de qualquer ciclo de produção de conteúdo** pra um cliente — em especial antes de fechar estratégia mensal e antes de mandar brief pra designer. Vale para todos os clientes da Lone.

**Princípio mãe:** copy bom + arte ruim = post fraco. **Não dá pra criar arte sem ver como o cliente já se posiciona** e sem ter referência visual real do que funciona em marcas de mercado. Sem isso, a entrega vira "cara de IA" — texto demais, layout genérico, fora do padrão visual do nicho.

---

## Parte 1 — Análise do perfil atual do cliente (pré-estratégia)

**Antes de fechar a estratégia mensal de qualquer cliente**, olhar o feed atual do Instagram dele e registrar análise em `clients/<slug>/referencias/YYYY-MM-DD-analise-perfil-instagram.md`.

### O que extrair da grade

**1. Mix de formatos observado**
- % aproximada de Reels vs estáticos vs carrosséis
- Frequência real de publicação (consegue inferir pelas datas)
- Stories — se vier print, anotar; se não, marcar como "não observado"

**2. Padrão visual**
- Paleta dominante e secundária
- Tipografia (serif / sans-serif / mix — em quais usos)
- Templates recorrentes (capa de série, post de produto, post emocional, etc.)
- Uso de pessoas reais? Equipe, cliente, influenciador?

**3. Tipos de conteúdo já em rotação**
- Linha própria com identidade visual (nomes próprios, produtos com cara de marca)
- Educativo
- Emocional / posicionamento
- Vendas / promoções / sorteios
- Sazonalidades já aproveitadas
- Bastidores

**4. Tom e mensagens**
- Listar 5-10 frases-âncora reais que apareceram em capas / títulos
- Identificar **padrão de tom** (provocativo, caloroso, técnico, irreverente?)
- Marcar mensagens que claramente performam (se PH puder indicar)

**5. Implicações pra estratégia**
- O que continuar / aproveitar
- O que evitar (se houver tom da estratégia que vá destoar)
- Riscos (custos com influenciador, sazonalidades já saturadas, etc.)

**6. Perguntas decorrentes**
- O que a análise levanta que precisa ser confirmado com PH ou cliente.

### Periodicidade

- **1ª análise:** quando o cliente entra no projeto.
- **Atualização:** mensalmente, antes de fechar a estratégia do mês — pegar print novo do feed, comparar com o anterior, atualizar a análise.

---

## Parte 2 — Pinterest pra referência visual (pré-brief de design)

**Antes de mandar qualquer brief pra designer**, buscar referências visuais reais no Pinterest. Não pra copiar — pra alinhar padrão visual, hierarquia tipográfica e composição com o que funciona em marcas de mercado do mesmo nicho ou nível de qualidade.

### Por que Pinterest e não outras plataformas

- Pinterest indexa por **estética e composição** — não por engagement de algoritmo.
- Permite ver **como marcas referência aplicam copy em posts** — pouco texto, hierarquia clara, espaço em branco.
- Evita o "padrão IA" (textão central, tipografia plana, layout simétrico forçado).

### O que buscar

Termos de busca úteis (adaptar pelo nicho):
- "Instagram post design [nicho]" (ex.: "Instagram post design pharmacy", "Instagram post design wellness brand")
- "Skincare brand Instagram", "wellness Instagram feed"
- "Minimal Instagram template [tema]"
- "[Nome da marca referência] Instagram" (ex.: Glossier, Sallve, Aesop)

### O que extrair de cada referência

- **Composição** (hierarquia visual: o que pesa mais — imagem, título, produto?)
- **Tipografia** (serif x sans, peso do título vs corpo, contraste)
- **Paleta complementar** (se a referência usa paleta similar à do cliente, anotar quais cores se combinam)
- **Espaço em branco** (quanta respiração visual o post tem)
- **Quantidade de texto** (regra geral: pouca — 5-10 palavras na arte; resto na legenda)

### Como usar no brief

- Anexar **2-3 referências Pinterest** ao brief de design.
- Indicar o que da referência se aproveita ("hierarquia de título igual a essa", "espaço em branco igual", "tipografia parecida com X").
- Não pedir "igual a essa" — pedir "no espírito disso".

### Pasta de referências curada

PH mantém banco de referências Pinterest curadas em **[shared/referencias-pinterest/](referencias-pinterest/)**. Categorias atuais (atualizar [INDEX.md](referencias-pinterest/INDEX.md) ao adicionar):

- `farmacia/` — templates de farmácia digital
- `educativo-saude/` — posts educativos de médico/nutri com hook
- `produto-editorial/` — apresentação de produto isolado / linha
- `skincare-premium/` — referências de marca skincare premium
- `wellness-marca/` — wellness com pessoa real + produto + benefício
- `hooks-fortes/` — capas com hook contraintuitivo
- `anti-padroes/` — exemplos do que **não** fazer

**Antes de cada brief**, abrir o INDEX, escolher a categoria mais próxima, pegar 2-3 referências e anexar ao brief.

**Quando PH adicionar referência nova**, criar pasta de categoria se não existir, renomear pra `NN-descricao-curta.jpg` e adicionar linha no INDEX.

---

## Parte 3 — Sinais de "cara de IA" pra evitar no design

Em paralelo aos vícios de copy ([voice-quality-checklist.md](voice-quality-checklist.md)), o design tem vícios próprios que entregam que o conteúdo é gerado / não pensado:

❌ **Textão central** — frase enorme ocupando o post inteiro. Marca real usa pouco texto.
❌ **Layout simétrico forçado** — tudo centralizado vertical e horizontalmente sem hierarquia.
❌ **Tipografia plana sem hierarquia** — título e corpo no mesmo peso visual.
❌ **Cores genéricas / sem identidade** — usar a paleta exata do cliente, não tons aleatórios.
❌ **Composição sem espaço em branco** — todos os elementos com o mesmo peso, post abafado.
❌ **Stock photo óbvio** — fotos genéricas de banco. Preferir fotos reais do cliente quando possível.
❌ **Emoji excessivo** — emoji é tempero, não receita.

✅ **Hierarquia clara** — 1 elemento principal (título OU imagem OU produto), outros suportam.
✅ **Tipografia com contraste** — peso, tamanho, cor diferenciam título de corpo.
✅ **Espaço em branco / respiração visual**.
✅ **Paleta consistente** com o cliente.
✅ **Foto real do cliente** ou da equipe ou do produto.
✅ **Texto curto na arte** (5-10 palavras), texto longo só na legenda.

---

## Parte 4 — Fluxo de aplicação

Ordem recomendada antes de cada ciclo de produção:

1. **Análise do perfil** (`clients/<slug>/referencias/YYYY-MM-DD-analise-perfil-instagram.md`) — atualizar mensalmente.
2. **Briefing mensal** com supervisora (entre dias 22-25 do mês anterior — playbook §3.1).
3. **Estratégia mensal** (`clients/<slug>/estrategia/YYYY-MM.md`) — usa análise + briefing.
4. **Pra cada peça** que vai pro designer:
   - Buscar 2-3 referências Pinterest do nicho.
   - Montar brief com paleta + hierarquia + referência + texto curto.
   - **Passar a copy pelo [voice-quality-checklist.md](voice-quality-checklist.md) antes**.

---

## Histórico de calibração

- **2026-05-07** — Documento criado a partir da observação de PH em 2026-05-07. PH usa Pinterest como fonte de referência visual há tempo, mas eu (Claude) não estava considerando isso na hora de gerar briefs. Também não tinha analisado o perfil real do cliente antes de fechar estratégia, o que é uma falha estrutural. Documento criado pra forçar protocolo automático.
