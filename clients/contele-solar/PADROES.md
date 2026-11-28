# Padrões consolidados — Contele Solar

Regras específicas deste cliente, herdadas **na íntegra** do documento de handoff aprovado que PH recebeu ([referência](referencias/2026-07-30-briefing-social-media-recebido.md)). Vale junto com o [voice-quality-checklist](../../shared/voice-quality-checklist.md), o [anti-ai-protocol](../../.claude/rules/anti-ai-protocol.md) e os anti-padrões do [context.md](context.md). **Toda peça passa por aqui antes de ir pro designer — aqui a direção já é aprovada, não proposta.**

---

> ✅ **Contato confirmado (PH, 2026-09-01):** WhatsApp **(22) 98806-0342** · R. Oscár Clark, 1320 — Parque Mataruna, Araruama/RJ. PH liberou **"chamar no WhatsApp"** como CTA. ⚠️ A mecânica de palavra-chave no direct ("manda SOL/ECOFLOW") continua valendo até PH decidir se o WhatsApp substitui ou convive — ver [OPEN-QUESTIONS](OPEN-QUESTIONS.md).

## 0. Sistema visual v2 — azul de ponta a ponta (✅ aprovado por PH em 26/11)

> **PH, 2026-11-26:** o sistema de julho (Sand, Ink, Sun, serif itálico) **sai**. Ficou parecido com a Mestre e longe do que a Contele usa hoje (azul, laranja e branco). A identidade muda, mas dentro das cores que já estão no ar. PH aprovou a v2 no mesmo dia ("gostei, ficou legal"). As seções §1, §2 e §4 abaixo ficam só como histórico. Continuam valendo de §3: uma ideia por post, safe area, foto real acima de ilustração e o teste do grid 3×3.

**Por que a v1 parecia a Mestre:** Ink `#0E1E33` + Sun `#E8A233` + Sand é quase o par da Mestre (`#16245C`/`#284093` + `#FAA227`, com fundo bege), e a alternância claro/escuro por dia era a mesma. O azul da Contele é outro (elétrico, puxado pro violeta) e o laranja também (vivo, puxado pro vermelho).

| Token | Hex | Uso |
|---|---|---|
| **Azul Contele** | `#2B37D4` | Fundo de todo post (com luz suave saindo do canto de cima, como já é no ar) |
| **Azul claro** | `#3C4BF0` | Só no brilho do fundo |
| **Índigo** | `#15127A` | Bordas do fundo, sombra sobre foto, fundo da etiqueta |
| **Laranja** | `#FC6C00` | Único acento: fim da manchete, seta do CTA, play, sol, fio do arco |
| **Branco** | `#FFFFFF` | Texto. Fundo branco só em comunicado (horário, aviso de canal oficial), como já acontece hoje |

Cores amostradas da grade da Contele (print de PH, 26/11).

- **Organização pela cor, variação pelo layout (v2.1, PH 26/11: "tá repetitivo, cadê os sublinhados, coisas menos padrão que passam profissionalismo de marketing").** Todo post no mesmo azul, mas 3 layouts em xadrez no feed:
  - **V, vídeo (quarta):** foto grande, arco com fio laranja e play. Fica sempre na coluna da direita do grid.
  - **T, tarja:** foto em faixa embaixo do logo, cortada reta com fio laranja, e manchete em **marca-texto** (primeira parte em barra branca com texto índigo, final em barra laranja com texto branco), como as artes antigas da Contele que PH mandou de referência ([referencias/2026-11-26-artes-ia-dezembro/](referencias/2026-11-26-artes-ia-dezembro/)).
  - **R, recorte:** manchete no topo com o final **sublinhado por traço de pincel laranja** e foto num quadro que sangra pra direita, com moldura laranja deslocada.
  - T e R se alternam nas duas colunas da esquerda, sem repetir o vizinho. Mapa em `LAYOUT` do `artes-v2.mjs`.
- **Elemento próprio:** o arco do horizonte (curva que corta a foto, com fio laranja) e o sol, os dois tirados do logo, mais o marca-texto e o sublinhado laranja. Nada de hexágono (é da Mestre).
- **Tipografia:** Plus Jakarta Sans 800 na manchete, **sem caixa alta**, e 500/700 no resto. Fonte em [identidade/fontes/](identidade/fontes/plus-jakarta-sans.css). Barlow Condensed é da Mestre.
- **Posições fixas:** logo branco em cima à esquerda, etiqueta do tema em cima à direita, CTA com seta laranja embaixo à esquerda, WhatsApp pequeno embaixo à direita (texto, não tarja).
- **CTA da arte (PH, 26/11):** círculo laranja com seta branca, sem pílula, sem contorno, sem ícone do WhatsApp e sem ponto final. Seta pra direita é o padrão. **Seta pra baixo + "na legenda"** quando o assunto precisa de explicação (ex.: homologação, "Veja as etapas na legenda"). Nesse caso a legenda tem que entregar o que a arte promete (lista das etapas, não texto genérico) e fechar com o CTA de WhatsApp.
- **Documento do cliente (PH, 26/11):** vídeo aparece como **briefing** (formato, quem aparece, o que mostra, como fecha), não como roteiro. O roteiro completo fica no lote .md interno.
- **Peça sem foto da Contele:** a imagem é **gerada por IA pelo designer** (PH, 26/11). O plano descreve a cena. Limites: sem painel em close (o modelo tem que bater com o real, §8), sem logo de terceiros (Enel) e sem produto de marca parceira inventado. EcoFlow e BLUETTI entram com a foto oficial do kit de cada marca, nunca gerada.
- **Logo:** símbolo oficial enviado por PH em 26/11 em [identidade/logo-simbolo.png](identidade/logo-simbolo.png) (recortado; original em `logo-simbolo-original.png`). O nome "CONTELE / solar energy" nos protótipos é texto em Plus Jakarta Sans. Falta o logo completo em vetor, e o designer usa o arquivo oficial.
- **Protótipos:** [artes-v2/feed.jpg](apresentacoes/2026-12-planejamento/artes-v2/feed.jpg), gerados por `apresentacoes/2026-12-planejamento/artes-v2.mjs`. 

## 1. Paleta — 6 tokens, usar sempre por nome (sistema de julho, substituído — ver §0)

| Token | Hex | Uso | Regra |
|---|---|---|---|
| **Ink** | `#0E1E33` | Azul-marinho profundo (mar). Fundo de posts de prova; texto principal sobre areia. | |
| **Sand** | `#F5EEE0` | Off-white quente (areia). Fundo padrão de posts claros. | |
| **Sun** | `#E8A233` | Ocre-âmbar. | **Único acento vivo** — números-chave, kickers, destaque tipográfico. |
| **Sun deep** | `#C57E1D` | Sol mais escuro. | Textos-acento sobre fundo Sand. |
| **Sea** | `#6D96B0` | Azul dessaturado. | Labels e metadata sobre fundo Ink. |
| **Coral** | `#B85C3A` | | **Só** o valor "antes" nas provas de economia — nunca decorativo, nunca em outro contexto. |

⛔ **Zero degradê laranja-vermelho.** Cada post usa no máximo 3 cores (fundo + texto + 1 acento).

## 2. Tipografia

| Papel | Estilo | Exemplos | Regra |
|---|---|---|---|
| Display (manchetes, números) | Serif itálico | Iowan Old Style, Palatino, Georgia | É a personalidade da marca — **nunca CAPS**, o itálico já dá o peso. |
| Corpo (legendas, informação) | Sans humanista | Inter, Helvetica Neue, system-ui | Sem CAPS gratuito. |
| Utilitário (localidade, ficha técnica, data) | Mono | SF Mono, Menlo | Letter-spacing 0.06–0.14em, uppercase. |

## 3. Composição — regras rígidas

- **Uma ideia por post.** Cabem duas → vira carrossel.
- **Safe area de 80px** em todos os lados do 1080×1080.
- ⛔ **Zero tarja de telefone/cidade dentro da arte** — vai pra bio + primeiro comentário fixado.
- **Números tabulares** sempre que houver comparação de valores.
- **Foto real de instalação > ilustração** de casinha com painel.
- Antes de aprovar uma peça, mockup mental do grid 3×3 (a peça no meio de 8 outras) — se destoa, volta.

## 4. Estrutura fixa por pilar (obrigatório alternar)

### Pilar 1 — Educativo
Fundo Sand · número grande serif itálico Ink · kicker Sun deep uppercase · frase de contexto serif regular · rodapé mono discreto.
- Kicker: `DICA · [TEMA]`
- Número/estatística: uma coisa só, gigante
- Frase de amarração: 1 linha, até 22 palavras
- Rodapé: `@contelesolarenergy` + numeração (ex. `01/03`)

### Pilar 2 — Prova social
Fundo Ink · comparação Antes/Depois em serif · "Antes" em Coral com strike-through · "Depois" em Sun itálico · ficha técnica em mono/Sea.
- Kicker: `CLIENTE · [MÊS]`
- Antes: `R$ X.XXX,XX` (coral, strike) · Depois: `R$ XXX,XX` (sun, itálico)
- Meta serif itálico: "Residência da família X, [contexto]"
- Ficha técnica mono: `BAIRRO · CIDADE · X kWp · X módulos`
- Rodapé com % de redução
- ⛔ **Precisa de caso real confirmado** — nome, valores e ficha técnica do cliente de verdade. Nunca usar os exemplos do guia de voz (família Marques, Rafaela) como copy literal (ver [BRIEFING §6](BRIEFING.md)).

### Pilar 3 — Institucional/local
Foto real de equipe/instalação (tratada) ou composição editorial (sol + telhado + palmeira) · citação serif itálico · atribuição mono uppercase com cidade.
- Kicker: `SOBRE NÓS · QUEM INSTALA`
- Citação: até 25 palavras, tom coloquial
- Atribuição: `Nome — Contele` + `Cidade · RJ`

## 5. Voz — sim / não

**Sim:**
- Gancho concreto + dado real, na mesma frase.
- Nome de bairro/praia/rua em algum canto de toda peça — "se não tem, o post não sai".
- Ficha técnica pequena no rodapé da legenda quando houver caso real.
- ⛔ **CTA que pede comentário não entra** (PH, 26/11: "comentário nunca dá certo"). O CTA chama pra ação de compra ou conversa: "Garanta a sua com a Contele", "Chame no WhatsApp". Em estação de energia, nada de "agora" ou "pronta-entrega" no CTA, porque estoque e prazo seguem sem confirmação (§8).
- CTA único e explícito, rotacionando entre: "manda SOL no direct" / "salva pra depois" / "marca alguém que paga muito de luz".
- Legenda em AIDA curto: hook (linha 1) → dor → solução → CTA.

**Não:**
- CAPS + exclamação + emoji colorido empilhado.
- Print de conta de luz colado com carimbo "ANTES/DEPOIS".
- Telefone/cidade em tarja na arte.
- Copy genérica sem endereço/local.
- Mais de 2 emojis por legenda, ou emoji colorido. Mais de um CTA por legenda.
- ⛔ **Zero menção a "queima combustível"/"sem fumaça"/"sem combustão"**, mesmo só pra descrever o painel solar — a frase implica contraste com algo que queima combustível, e a matriz elétrica brasileira é majoritariamente **hidrelétrica** (usa água de rio, não combustão), então a comparação embutida é factualmente imprecisa. Falar apenas que a energia solar **é uma fonte sustentável/limpa**, sem entrar em "não queima X" ou qualquer comparação (explícita ou implícita) contra a energia da rede. (PH, 2026-08-13, corrigindo o post de 14/08.)
- ⛔ **Zero menção a "não é revenda de kit" / "sem intermediário de kit de fora"** (dando a entender que o kit também é próprio) — claim corrigido em 2026-08-20: o kit vem de fornecedor parceiro. ✅ **Continua podendo usar:** "quem cuida do projeto, da homologação Enel e da instalação é a equipe própria da Contele" — isso não mudou, só o kit em si. Já saiu na versão antiga (plena) em 5 peças (03/08, 07/08, 12/08, 14/08 publicadas + 21/08) — revisar pra versão corrigida antes de publicar qualquer uma pendente.

## 5.1 Regra de coerência — apagão, EcoFlow e sistema híbrido

A peça de 31/08 afirma que **o sistema no telhado desliga quando falta luz na rua**. Isso é verdadeiro e vale pro sistema **on-grid**, que é o que a esmagadora maioria da base tem instalado — a norma de segurança obriga o sistema a parar pra não energizar uma rede em que a equipe da concessionária pode estar trabalhando.

⚠️ **Mas a Contele também tem solução híbrida no portfólio** (PH, 2026-08-28), e sistema híbrido com bateria **mantém a casa ligada no apagão**. Ou seja: existem dois caminhos pra não ficar no escuro, e eles não podem se contradizer no feed.

**Como não se enrolar quando o híbrido virar pauta:**
- Nunca escrever "energia solar não funciona na falta de luz" como verdade geral. A frase correta é sobre o **sistema conectado à rede**, e é assim que ela está redigida na peça de 31/08.
- Quando o híbrido entrar, ele é apresentado como **o caminho embutido no sistema** (decidido na hora do projeto) e a EcoFlow como **o caminho avulso** (chega pronto, não depende de obra, e vai junto pra fora de casa). Duas respostas pro mesmo medo, em momentos diferentes da vida do cliente.
- ⛔ Nunca posicionar um como substituto do outro nem deixar implícito que quem comprou EcoFlow comprou o remendo do que o híbrido resolveria.

---

## 6. Ritmo semanal e stories

- **3 estáticos/semana** (1 por pilar, alternando) + **2 Reels/semana**.
- Reels: primeira frase fisga em 2s com dado real (ex. "a conta da Rafaela caiu de 3 mil pra 100 reais" > pergunta genérica).
- **Stories — rotina fixa:** segunda anuncia a semana · terça mostra instalação · quarta responde dúvida · quinta cliente falando · sexta bastidor · sábado dica · domingo pausa ou repost.
- **Grid:** alternar pilares por linha (Educ · Prova · Local · Local · Reel · Educ...).
- **Quarta sem gravação vira motion flyer** (PH, 25/11/2026). O designer faz com foto real da Contele (obra, equipe, estação) e texto animado no sistema do feed, nunca com imagem de banco. Corte proposto: se o bruto não chegar até a sexta anterior, entra o motion. Toda quarta do plano mensal já sai com o plano B em motion escrito.

## 7. Métricas mensais a reportar

Seguidores, alcance, salvamentos por post (proxy de valor educativo), DMs iniciadas por CTA, cliques no Linktree.

## 8. Fatos operacionais — fonte única (não completar de cabeça)

| Fato | Valor confirmado | Fonte |
|---|---|---|
| Handle | @contelesolarenergy | Perfil |
| Sede | Araruama/RJ | Briefing |
| Área de atuação | Cabo Frio, Búzios, São Pedro da Aldeia, Iguaba, Arraial | Briefing |
| Ticket médio | R$ 25–40 mil (residencial). ⚠️ A reconferir depois do aumento no preço dos kits (reunião de 04/11/2026) | Briefing |
| Aumento no preço dos kits | "Aumento expressivo" citado em 04/11/2026, sem valor e sem dizer se atinge as estações de energia. ⛔ **Nenhuma peça usa "o preço vai subir" ou "compre antes do aumento"** até o Vinicius confirmar o que subiu, quanto e até quando vale o preço atual. | Cristiane Damartini, reunião 2026-11-04 |
| Prova numérica | +700 sistemas instalados | Briefing |
| CTA de conversão | DM do Instagram ("manda SOL no direct") | Briefing — ⚠️ confirmar se não há WhatsApp oficial ([OPEN-QUESTIONS](OPEN-QUESTIONS.md)) |
| Link | Linktree na bio (mantido como está) | Briefing |
| WhatsApp/telefone/CNPJ/endereço físico/horário | **Não informado no documento** | — |
| Parceria EcoFlow | **Revenda** — a Contele vende produtos EcoFlow pros clientes dela, **catálogo inteiro** (RIVER, DELTA, painéis portáteis, acessórios). Marca que aparece na peça é **EcoFlow**; **Powersafe** é a distribuidora oficial por trás da loja, só entra se o cliente pedir. ⚠️ Preços da loja EcoFlow **não são** preços da Contele — condição da Contele ainda não informada. Estoque local × encomenda também em aberto. | PH, 2026-08-28 (confirmado no mesmo dia) |
| Faixa de preço EcoFlow | ⚠️ **Atualizada em 2026-09-08 (reunião Lone×Contele): R$ 2.800 a R$ 54.000**, conforme a necessidade — substitui a faixa aproximada de ~R$3–50 mil usada até aqui. Ainda é amplitude de catálogo, **não preço de modelo**. **A CONFIRMAR** (citada em reunião, não em documento escrito). | Vinicius Melo (comercial, Contele), reunião 2026-09-08 |
| Preço de revenda / combos EcoFlow | Vinicius é **revendedor EcoFlow** — preço de revenda dele é abaixo do varejo (ex. citado: unidade de ~R$8.000 no varejo sai por ~R$5.000 pra ele). Ideia de **combo kit solar + EcoFlow com desconto** (ex.: EcoFlow de R$8.000 por ~R$6.500 no combo). ⛔ **Nenhum desses valores vai pra peça ainda** — são exemplos internos, Vinicius vai mandar os preços reais por escrito. **A CONFIRMAR.** ⚠️ Em 04/11/2026, o combo seguia sem fechar por causa do aumento no preço dos kits, e esses exemplos são de antes dele. | Vinicius Melo, reunião 2026-09-08; reunião 2026-11-04 |
| Garantia / vida útil EcoFlow | Garantia estendida de **5 anos**, vida útil de bateria em torno de **10 anos**. **A CONFIRMAR** (citado em reunião, não em documento). Ainda não resolve o [OQ #11](OPEN-QUESTIONS.md) (garantia do **sistema fotovoltaico** — painel/inversor —, que é uma pergunta diferente e segue sem resposta). | Reunião Lone×Contele, 2026-09-08 |
| Limite do backup EcoFlow — não confundir com sistema inteiro | ⛔ **Regra de expectativa, vale em toda peça de EcoFlow:** o backup **não mantém a casa inteira** — sem chuveiro elétrico, sem ar-condicionado. Argumento de venda é continuidade de essencial (iluminação, roteador, notebook, geladeira), nunca "sua casa nunca mais fica sem energia" sem essa ressalva. | Reunião Lone×Contele, 2026-09-08 |
| Disponibilidade / prazo de entrega EcoFlow | **NINGUÉM SABE — nem o dono.** ⛔ Regra dura: **nenhuma peça cita estoque, pronta-entrega, prazo ou disponibilidade**, nem na arte nem na legenda. | PH, 2026-08-28 |
| Painéis/sistemas híbridos | A Contele **tem** essa solução no portfólio. ⏸️ **Não é pauta agora** — PH marcou pra momento futuro. Ver §9 antes de escrever qualquer coisa que toque no assunto. | PH, 2026-08-28 |
| Modelo de kit | Kit (painel/inversor) vem de **fornecedor parceiro** — SUPERSEDE o Briefing original ("não revende kit"). Projeto, homologação Enel e instalação **continuam com equipe própria da Contele** (isso não mudou). | PH, 2026-08-20 |
| Placas usadas em arte anterior não batiam com a real | Cliente apontou (reunião 2026-09-08) que artes anteriores usaram imagem de placa/painel diferente da que a Contele realmente instala — causa raiz é banco de imagens por falta de material próprio. Corrigido após a observação. **Nunca usar imagem genérica de painel sem checar se bate com o modelo real** — pedir foto real quando em dúvida. | Reunião Lone×Contele, 2026-09-08 |
| Indique e Ganhe | Quem indica ganha **"uma comissão em dinheiro pelo projeto fechado"**. Vale quando o projeto fecha. ⛔ Sem valor, percentual ou prazo de pagamento até a Contele informar. | Arte montada por PH em 16/11/2026 (Downloads, "Indique e Ganhe com Energia Solar.png"). Não há mensagem do cliente registrada |
| Parceria BLUETTI | **Confirmada (PH, 2026-09-15).** Segunda marca de estação de energia no catálogo, ao lado da EcoFlow. ⛔ **Chamar sempre de "estação de energia", nunca "gerador"** — tecnicamente não produz energia por combustão (mesma lógica da regra anti-combustão do §5). ⛔ **Nenhum modelo, preço, parcelamento, garantia ou estoque confirmado ainda** — estudo enviado por PH usa Elite 10 Mini e Elite 300 como exemplo de arquitetura, não como catálogo real. ⛔ **Nunca comparar BLUETTI e EcoFlow, nem posicionar uma como equivalente/concorrente da outra** — sem tabela, sem ranking, sem "X é melhor que Y", sem sobreposição de público na mesma frase. A Contele é curadora: quem escolhe o tamanho é a necessidade do cliente. ✅ **Esclarecido por PH em 2026-09-29: as duas marcas podem dividir a mesma peça, e é o certo que dividam** — a Contele trabalha com as duas, e peça que cita só uma dá a entender exclusividade que não existe. O [anúncio de 15/09](conteudo/posts/2026-09-15-parceria-bluetti.md) já as põe lado a lado, com tratamento visual idêntico. O que se proíbe é a comparação, não a coexistência. Em peça de categoria (o que uma estação de energia resolve), o vocabulário de base é **"estação de energia"**, e as marcas entram como catálogo da Contele — nunca uma como protagonista e a outra como alternativa. Regra de logo de marca parceira do EcoFlow (kit oficial, nunca recriado à mão) vale igual aqui. Estudo completo em [referencias/2026-09-15](referencias/2026-09-15-parceria-bluetti-estudo-mercado-e-posicionamento.md). | PH, 2026-09-15 |

| Casos publicados pela própria Contele | Reels e anúncios da Contele citam: Casa do Dragão (21 painéis, "mais de R$ 1.500 por mês", 05/05/2025), Ocean Park (8 painéis com microinversor, "mais de R$ 800 por mês", 11/09/2026), Búzios ("cerca de 700 kWh", 08/07/2026), Top Fitness ("R$ 96.000 por ano", 03/12/2025), Bendita Pizzaria (06/12/2025), "de R$ 1.300 para R$ 270" (01/04/2026). ⛔ **Publicado pela Contele não é confirmado pela Lone.** Nenhum valor vai pra peça sem a Contele confirmar valor (realizado ou estimado), bairro, kWp e autorização. O fixado de 29/10/2025 mostra R$ 3.262,83 → R$ 105,29, os mesmos números do exemplo "família Marques" do guia: o exemplo pode ter vindo de conta real, mas continua sem confirmação. | Raio-x do Instagram, 25/11/2026 |
| Anúncios ativos da página | ~9 anúncios ativos (6 criativos, todos vídeo) em 25/11/2026, operador desconhecido. Textos com "economia garantida", "promoções especiais", "mais de 5 anos no mercado" e "sistema de 700 kWh". ⛔ Nada disso vira fato pra peça. | [Raio-x](referencias/2026-11-25-raio-x-instagram.md) |
| Segundo número | Comunicado de 05/11/2026 traz "Responsável técnico (21) 96931-7776" ao lado do WhatsApp oficial. ⛔ Não usar em peça até saber de quem é. O CTA continua sendo só (22) 98806-0342. | Grade, 25/11/2026 |
| "Simule grátis em 2min" | Está na bio aprovada, mas gratuidade e tempo nunca foram confirmados na operação. Até confirmar: "peça sua simulação pelo WhatsApp", sem prazo. | Auditoria do Codex, 25/11/2026 |
| Exemplos do briefing sem fonte | "95% é o quanto uma casa média deixa de pagar", "7 anos de payback em Araruama" e "0 vezes que a Enel pode te cortar" são exemplos de gancho do briefing, não dados. ⛔ Não usar como fato. "Até 95%" (bio) segue como teto, nunca média. | Auditoria do Codex, 25/11/2026 |

**O que falta não trava a execução dentro do sistema visual/de voz** (isso já está fechado) — trava especificamente peças de Prova Social (precisam de caso real) e qualquer peça que dependa de canal de contato além do DM/Linktree.

---

## Histórico

- **2026-11-26 (5)** — §0 v2.1: layout deixa de ser um molde só. 3 layouts em xadrez (V vídeo com arco, T tarja em marca-texto, R recorte com sublinhado de pincel), a pedido de PH ("repetitivo, cadê os sublinhados"). Documento do cliente mostra briefing do vídeo, não roteiro.
- **2026-11-26 (4)** — §0: CTA da arte é sempre círculo laranja com seta (PH preferiu a seta à pílula com ícone do WhatsApp que a IA gerou). Seta pra baixo + "na legenda" pra assunto que precisa de explicação. A 11/12 virou "Veja as etapas na legenda" e a legenda ganhou a lista das 4 etapas confirmadas (visita técnica, projeto, homologação Enel, instalação).
- **2026-11-26 (3)** — §5: CTA que pede comentário saiu (PH). A peça de 21/12 trocou "Conte o que precisa ficar ligado" por "Garanta a sua com a Contele", sem o "agora" que PH sugeriu, pela trava de estoque da §8.
- **2026-11-26 (2)** — PH aprovou a v2. Peça sem foto da Contele leva imagem por IA feita pelo designer. Símbolo do logo entrou em `identidade/`.
- **2026-11-26** — PH tirou o sistema de julho (parecido com a Mestre e longe do azul, laranja e branco do perfil). Entrou a §0 com a proposta v2, ainda sem aprovação. Também de PH: nem todo cliente precisa alternar claro e escuro no feed, e um feed de uma cor só passa organização.

- **2026-11-25 (2)** — §6: quarta sem gravação vira motion flyer (decisão de PH).

- **2026-11-25** — Auditoria do Instagram e dos anúncios ([auditoria](referencias/2026-11-25-auditoria-instagram-e-anuncios.md)). Entraram em §8: casos publicados pela própria Contele (a confirmar), anúncios ativos de operador desconhecido, o segundo número do comunicado de 05/11, a trava do "Simule grátis em 2min" e os exemplos do briefing sem fonte. Achado principal: o sistema visual deste PADROES não aparece nos 12 posts e 28 Reels vistos em 25/11; PH decide se vale ou se o PADROES muda (OQ 25/11 #1).

- **2026-11-04** — Reunião Carlos × Cristiane: aumento expressivo no preço dos kits entrou em §8, com trava contra usar "o preço vai subir" sem confirmação, e o ticket médio ficou a reconferir. Detalhe em [reuniao-mensal/resumos/2026-11-04-resumo-reuniao.md](reuniao-mensal/resumos/2026-11-04-resumo-reuniao.md).

- **2026-10-16** — PH liberou **tempo de autonomia por modelo** em peça de EcoFlow, desde que venha com **carga de referência escrita na arte** (ex.: "com 100 W ligados: roteador, lâmpadas LED, TV pequena e celular") e palavra de aproximação ("cerca de", "mais de"). Até aqui a Lone evitava qualquer número de autonomia por cautela própria, e isso não era regra do cliente. Continua valendo: sem preço, estoque ou prazo, ressalva de chuveiro e ar-condicionado, e nada de comparar EcoFlow com BLUETTI. Peça: [2026-10-19](conteudo/posts/2026-10-19-quanto-dura-cada-ecoflow.md).

- **2026-09-29** — PH reforçou que **a Contele trabalha com BLUETTI e EcoFlow**, corrigindo a peça de 02/10, que tinha saído só com EcoFlow. A causa foi leitura errada da regra de §8: ela proíbe **comparar** as duas na mesma peça, não as duas aparecerem juntas. Regra reescrita pra não deixar margem, e a peça refeita pra falar de **estação de energia** como categoria, com as duas marcas no mesmo peso. Peça: [conteudo/posts/2026-10-02-energia-onde-nao-tem-tomada.md](conteudo/posts/2026-10-02-energia-onde-nao-tem-tomada.md).
- **2026-09-15** — PH informou nova parceria: **BLUETTI**, segunda marca de estação de energia no catálogo (a primeira é a EcoFlow). Entrou em §8 com as mesmas travas duras já aplicadas à EcoFlow (zero preço/modelo/estoque sem confirmação, zero "gerador", zero comparação direta com a EcoFlow). Estudo de mercado/posicionamento enviado por PH salvo em [referencias/2026-09-15](referencias/2026-09-15-parceria-bluetti-estudo-mercado-e-posicionamento.md). Primeira peça (anúncio) em [conteudo/posts/2026-09-15-parceria-bluetti.md](conteudo/posts/2026-09-15-parceria-bluetti.md).
- **2026-09-08** — Reunião Lone×Contele (Carlos + equipe · Natal Tuão, sócio · Vinicius Melo, comercial) trouxe correção de faixa de preço EcoFlow (R$2.800–54.000, substitui R$3–50 mil), dados de garantia/vida útil (A CONFIRMAR), regra dura de expectativa sobre o backup (não segura casa inteira) e o apontamento do cliente de que artes anteriores usaram imagem de placa que não bate com a real. Detalhe completo em [reuniao-mensal/resumos/2026-09-08-resumo-reuniao.md](reuniao-mensal/resumos/2026-09-08-resumo-reuniao.md).
- **2026-08-28** — PH informou a **parceria com a EcoFlow** e confirmou no mesmo dia que é **revenda do catálogo inteiro**. Três fatos entraram em §8 na sequência: faixa de preço R$ 3–50 mil, **disponibilidade que ninguém sabe** (vira regra dura de nunca citar prazo/estoque) e a existência de **solução híbrida** no portfólio, que fica em espera. Daí saiu a §5.1, regra de coerência entre a mensagem de apagão, a EcoFlow e o híbrido. Regra nova que sai daí e vale pra carteira toda: **logo e foto de produto de marca parceira vêm do kit de marca do parceiro** — nunca recriados à mão nem printados do site.
- **2026-08-20** — PH corrigiu fato em §8: o **kit vem de fornecedor parceiro** agora (Briefing original dizia "não revende kit"). Confirmado no mesmo dia: **projeto, homologação Enel e instalação continuam com equipe própria da Contele** — só o kit em si mudou de origem. Regra de banimento (versão restrita) adicionada em §5. Claim já tinha saído na versão plena em 5 peças (03/08, 07/08, 12/08, 14/08 publicadas + 21/08) — PH optou por não agir sobre as já publicadas, só corrigir daqui pra frente.
- **2026-08-13** — PH adicionou regra em §5: zero menção a "queima combustível"/"sem fumaça" pra falar do painel solar, mesmo sem comparar explicitamente com a rede — a matriz brasileira é majoritariamente hidrelétrica (rio, não combustão), então a comparação embutida é imprecisa. Falar só que é fonte sustentável. Aplicado retroativamente no post de 14/08 (conteudo/posts/2026-08-14-dia-de-combate-a-poluicao.md (peça removida na limpeza de 2026-08-24)).
- **2026-07-30** — criado no onboarding, transcrevendo na íntegra as regras do documento de handoff aprovado que PH recebeu. Nenhuma regra aqui é proposta da Lone — são as regras já definidas para o cliente.
