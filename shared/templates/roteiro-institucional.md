# Roteiro institucional — padrão da casa

**Padrão definido por PH em 2026-10-29**, a partir dos roteiros entregues à CIIL (26/10, imunobiológicos e consultas) e à Celmapel Festas (15/10, apresentação, venda PJ e venda consumidor). Quando PH pede "roteiro" ou "vídeo institucional" pra cliente, é este formato. Ele vale mais que roteiro de texto na tela e mais que montagem "etapa por etapa": PH reprovou uma montagem desse tipo pra WT em 29/10 e pediu este formato no lugar.

Entrega ao cliente: PDF a partir de [roteiro-video-entrega-cliente.html](roteiro-video-entrega-cliente.html). Trabalho interno (checagem, compliance, legenda, notas de produção): `.md` em `clients/<slug>/conteudo/roteiros/`, a partir de [roteiro-video.md](roteiro-video.md).

---

## 1. O que é

- Vídeo **falado**: apresentador, atendente, dono ou locução, por cima de imagem real do cliente (B-roll da loja ou da clínica, equipe, produto).
- **Uma fala por cena.** Cada cena é uma frase (ou duas curtas) que se diz num fôlego só, com até ~25 palavras.
- **4 a 6 cenas, 25 a 45s** no institucional. **Roteiro de venda: 6 a 8 cenas, até ~45s** ([§2B](#2b-roteiro-de-venda-padrão-de-ph-2026-11-18-vale-pra-todos-os-clientes)).
- **PDF do cliente, padrão de 2026-11-17** (base: o PDF da Veneza Black que PH entregou em 13/11). Capa escura e, em cada cena, duas linhas:
  - **CENA**: o que acontece, numa frase curta ("Gabriela caminhando pela fábrica", "O patrão no meio da loja, anunciando aos gritos"). É a ação e o lugar, nunca ângulo, plano ou enquadramento, que continuam com a equipe de produção.
  - **FALA**: o que a pessoa diz. Em diálogo, o nome de quem fala vem antes ("Patrão:", "Vendedor:").
  - Opcionais: o box "Na edição" (tarja legal, selo de preço, contato no fecho) e a página "Como gravar", quando quem grava é o próprio cliente.
  - Fica fora: legenda, hashtags, checagem e notas internas, que ficam no `.md`.
  - **Como gerar:** spec JSON → `python3 shared/templates/gerar-roteiro-pdf.py spec.json saida.html saida.pdf`. O CSS sai do [template HTML](roteiro-video-entrega-cliente.html).
  - A página é A4 fixa. Com 7 cenas, o box "Na edição" pode não caber. Se não couber, ele sai do PDF e fica só no `.md`.
  - Nome na Downloads: "Roteiro - Lone Midia x <Cliente> (<tema>).pdf".

## 2. Estrutura (5 movimentos)

É o Gancho → Dor → Solução → Benefícios → CTA do [playbook §6](../playbook-lone-midia.md), na forma que a casa já validou.

| # | Movimento | Molde | Exemplos já entregues |
|---|---|---|---|
| 1 | **Gancho de identificação** | Chamar quem tem a necessidade. Pergunta direta, com a cidade sempre que couber: "Você de [cidade] tá precisando…?" / "Você [situação] e ainda não sabe [dor]?" | "Você de Araruama ou de São Gonçalo tá precisando marcar uma consulta médica?" · "Você recebeu uma indicação médica para fazer um tratamento com imunobiológicos e ainda não sabe onde realizar?" · "Você de Araruama que trabalha com confeitaria, decoração ou eventos: quanto tempo você perde procurando embalagem, doce e material em vários lugares?" |
| 2 | **Situação concreta** | 2 a 4 situações do dia a dia, nas palavras do cliente (queixa, não diagnóstico; cena, não categoria). Pode ser a continuação da pergunta. | "Uma mancha que volta, uma dor nas juntas que não passa, ou aquela dificuldade de encontrar um horário com o pediatra?" |
| 3 | **"Aqui na [empresa]…"** | A empresa entra como resposta, dizendo **o que tem**: serviços ou produtos nomeados. A ressalva de compliance vai dentro da frase, sem cara de rodapé. | "Aqui na CIIL, temos uma estrutura especializada para a administração de terapias imunobiológicas…" · "Recebemos pacientes com condições como artrite reumatoide, psoríase e doença de Crohn, **sempre conforme a prescrição e a avaliação médica**." · "Tem balões, doces, confeitaria, embalagens, descartáveis…" |
| 4 | **"E o melhor: …"** | Tira a objeção que impede a pessoa de agir: não precisa chegar sabendo, fica perto, a equipe ajuda a escolher, tem faixa de preço pra cada bolso. | "E não precisa chegar com um diagnóstico pronto: o médico avalia o que você está sentindo." · "E o melhor: você encontra esse atendimento em nossas unidades de Araruama e São Gonçalo." · "E o melhor: você não precisa chegar sabendo exatamente o que comprar. Nossa equipe te ajuda a montar o que faz sentido para você." |
| 5 | **CTA com canal e ação** | O canal concreto e o que a pessoa faz nele. Assinatura de marca opcional numa cena curta no fim. | "Clique no WhatsApp da CIIL e converse com nossa equipe sobre agendamento e condições de atendimento." · "Chama no WhatsApp, manda sua lista e consulte as opções disponíveis." · "Celmapel Festas. Aqui sua festa acontece." |

Dá pra quebrar um movimento em duas cenas (a Celmapel PJ separa "fala com a Celmapel" de "chama no WhatsApp, manda sua lista") ou juntar dois numa cena. A ordem não muda.

## 2B. Roteiro de venda: padrão de PH (2026-11-18), vale pra todos os clientes

**Origem:** PH reprovou os dois roteiros de Black que a Lone escreveu pra Veneza ("não achei interessantes e efetivos") e reescreveu a estrutura de copy e o esqueleto. A versão dele ([PDF final](../../clients/veneza-estofados/referencias/2026-11-18-roteiros-black-friday-versao-final-ph.pdf)) é o padrão de **roteiro de venda** pra qualquer cliente da Lone: campanha, Black, oferta com preço. A §2 continua valendo pro institucional sem oferta (apresentação, serviço, saúde).

### O que mudou em relação ao que a Lone vinha escrevendo

| A Lone escrevia | PH escreveu |
|---|---|
| Um produto e um preço por vídeo | **Várias ofertas no mesmo vídeo**, uma por cena, cada uma com preço |
| Tom medido, ponto final, quase sem exclamação | **Energia de anúncio:** "!" no fim de quase toda cena, "apenas", "caiu de… pra…", "olha esse preço" |
| Fórmula "E o melhor: [objeção]" | **Ponte pela necessidade do cliente** entre uma oferta e outra: "E não é só ele, não!" · "Quer renovar o quarto também?" · "E pra quem quer mais espaço…" |
| Objeção dita com a palavra negativa ("e não porque é ruim") | A causa do preço é dita **em positivo**: "ela fabrica", "sem nenhum intermediário", "é por isso que o nosso preço é tão barato assim" |
| 4 a 6 cenas | **6 a 8 cenas**, uma ação + uma fala cada |
| Benefício só falado | **Benefício mostrado na mão:** a Gabriela levanta o assento e mostra o baú enquanto fala |
| CTA com um canal | **CTA duplo:** WhatsApp **ou** loja com referência curta que o público reconhece ("a loja do KM 90 da Amaral Peixoto"), com verbo de posse ("garante sua oferta") |
| Fechava na oferta | Antes do CTA, **abre o catálogo:** "E essas são só algumas das ofertas! … tem muito mais esperando por você!" |

### Esqueleto A — Ofertas em sequência (Veneza Roteiro 02)

| # | Movimento | Molde de PH |
|---|---|---|
| 1 | **Gancho de ação** com o produto-âncora e a campanha | "Gente, olha onde eu vim parar! Esse é o [produto], de [medida], e ele tá na Black da [empresa]!" |
| 2 | **Benefício mostrado** | Ação física com o produto + o uso no dia a dia ("pra guardar cobertas e travesseiros sem ocupar o seu armário!") |
| 3 | **Preço do âncora** | "E olha esse preço: de R$ X por apenas R$ Y à vista na Black Friday!" |
| 4–6 | **Mais ofertas**, uma por cena, cada uma aberta por uma ponte de necessidade | "E não é só ele, não! O [produto] caiu de R$ X pra R$ Y à vista!" · "Quer renovar o quarto também? Tem [produto], com [composição], por R$ Y à vista!" · "E pra quem quer mais espaço, tem [produto] por R$ Y à vista!" |
| 7 | **Abre o catálogo** | "E essas são só algumas das ofertas! Na Black da [empresa] tem muito mais esperando por você!" |
| 8 | **CTA duplo** | "Chama a [empresa] no WhatsApp e garante sua oferta, ou vem direto na loja [referência curta]!" |

### Esqueleto B — Causa do preço (Veneza Roteiro 01)

| # | Movimento | Molde de PH |
|---|---|---|
| 1 | **Gancho-pergunta com promessa de resposta**, hiperlocal | "Você de [cidade] quer saber por que a Black da [empresa] tá tão barata? A resposta tá aqui dentro." |
| 2 | **O lugar + o diferencial** | "Essa é a [fábrica/estrutura] da [empresa], aqui em [bairro]. A [empresa] não [o que o concorrente faz], ela [o que ela faz]." |
| 3 | **Prova** do que sai dali, nomeado | "Daqui sai o [produto], o [produto]…" |
| 4 | **Consequência no preço** | "E vai tudo direto pra loja, sem nenhum intermediário. É por isso que o nosso preço é tão barato assim." |
| 5 | **Virada pra campanha** | "Então aproveita as promoções da Black [empresa]! É a oportunidade de [ganho] e economizar de verdade!" |
| 6 | **CTA duplo** | "Chama a [empresa] no WhatsApp, ou vem na loja [referência curta]." |

### Regras do roteiro de venda

- **Linha CENA:** quem faz o quê, onde ("Gabriela sai de dentro do sofá baú Grécia", "Gabriela caminhando pela loja"). Nunca ângulo ou plano.
- **Metadados no PDF:** Cenas · Formato (ex.: "Reels · Meta Ads") · Tema · CTA ("WhatsApp / loja").
- Preço falado sempre com a condição ("à vista"). Parcelado que soma mais que o "de" fica fora da fala e entra só na tela.
- O nome da campanha na fala pode ser o coloquial ("Black da Veneza"), mesmo que a arte use o nome oficial.
- A exclamação de anúncio é o padrão do roteiro de venda ([checklist §2.8](../voice-quality-checklist.md), estilo Lone). O limite de "!" do anti-IA vale pra legenda e texto longo, não pra fala de oferta.
- O gate do cliente continua valendo por cima do esqueleto: "tudo que você encontra na loja" não passa em cliente com item de revenda, prazo não entra em cliente com reputação de atraso, etc.
- **Premissa nova a cada vídeo** do mesmo cliente (o esqueleto se repete, a ideia de abertura não): sair de dentro do produto, o porquê do preço, tour por cômodo, soma "Quanto custa".

## 3. Regras de copy

**Como soa:**
- Fala de gente, não texto lido: "tá", "pra", "você", "aquele aniversário em casa". Conectivos falados ligam as cenas ("Então", "Porque aqui", "E o melhor", "Então antes de…").
- Frase completa em toda cena, sem fatiar ideia em micro-frases.
- Lista falada com vírgula é permitida nas cenas 2 e 3, porque é fala e não texto de tela. A regra de bullet do [anti-ai-protocol](../../.claude/rules/anti-ai-protocol.md) vale pra legenda e arte, não pra fala.

**O que fica de fora:**
- Número, estatística, preço ou prazo que o cliente não deu. Se faltar dado comercial, a copy fica genérica ("condições de atendimento", "opções disponíveis"), sem travar a entrega.
- Promessa de resultado.
- Diagnóstico. Em saúde, o ato clínico é sempre do profissional ("o médico avalia", "conforme a prescrição").

**Variação:**
- "E o melhor:" é marca da casa. O que muda de peça pra peça é a objeção que ele quebra. Não repetir a mesma quebra em peças seguidas do mesmo cliente.
- Gancho hiperlocal é o default ("Você de [local] tá [dor]?"). PH prefere esse molde a gancho elaborado.

## 4. Variações já usadas

| Variação | Cliente / data | O que muda |
|---|---|---|
| Serviço (saúde) | CIIL 01 e 02, 26/10 | Ressalva clínica dentro da frase · CTA de agendamento (WhatsApp / Doctoralia) |
| Apresentação (quebrar percepção) | Celmapel 01, 15/10 | Gancho ataca a percepção ("se você acha que a Celmapel é só…") · CTA é visita |
| Venda PJ | Celmapel 02, 15/10 | Gancho pela perda de tempo do profissional · CTA "manda sua lista" |
| Venda consumidor | Celmapel 03, 15/10 | Gancho pela ocasião (aniversário, confraternização) · fecha com assinatura |
| Oferta com data, gravada pelo cliente | Atlas Servidor Público, 22/10 | Mais energia, caixa alta e "!" · cena de urgência · box "Como gravar" no PDF |
| Evento na loja | Dijana Café da Manhã, 06/10 | Data absoluta numa cena própria ("É quarta-feira, 7 de outubro.") · "Vem pra Dijana." |
| Black com causa do preço | Veneza 01, versão final de PH (18/11) | Esqueleto B da §2B. O porquê do preço baixo é o fio do vídeo (fábrica, sem intermediário), dito em positivo. 🚫 "O preço é o mesmo o ano todo" |
| Black com ofertas de/por | Veneza 02, versão final de PH (18/11) · Araruama Tintas (17/11) | Esqueleto A da §2B. Um produto por cena com "de X por apenas Y à vista" falado e ponte de necessidade entre as ofertas. "De/por" só em conta que mandou o preço cheio |
| Tour por cômodo + soma | Veneza Nova Iguaçu, 18/11 | Esqueleto A com premissa de tour (sala → quarto) e uma cena de soma ("Quanto custa") antes da causa do preço e do CTA |
| Black por forma de pagamento | Bruno das Tintas, 17/11 | Uma fala por condição (à vista, crédito, parcelado) e data no futuro enquanto o período não vier |
| Esquete de humor com oferta | Maicom 25/09 e 17/11 | Diálogo com nome de quem fala, um preço só e CTA na boca do personagem. A cada peça, a situação muda ([PADROES §6 da Maicom](../../clients/maicom-minerais-unamar/PADROES.md)) |
| Indique e ganhe | Contele, 17/11 | O ganho fica em slot azul no PDF até o cliente definir, e existe uma versão sem a cena do ganho |

## 5. Checklist antes do PDF

- [ ] Cada cena se fala num fôlego (até ~25 palavras).
- [ ] O gancho chama quem tem a necessidade, com cidade quando couber.
- [ ] A empresa entra na cena 3 com o que tem, nomeado.
- [ ] O "E o melhor" quebra uma objeção real e não repete a da última peça do cliente.
- [ ] O CTA tem canal e ação.
- [ ] Os fatos operacionais (serviço, unidade, canal, telefone) estão no BRIEFING/context do cliente.
- [ ] O gate do PADROES do cliente passou.
- [ ] O validador-copy rodou.
- [ ] O PDF tem CENA + FALA por cena (padrão de 17/11). A legenda vai no `.md` e só entra no PDF se PH pedir.
- [ ] Lote com duas contas concorrentes (Bruno × Araruama Tintas): gancho e frase-conceito conferidos lado a lado.
