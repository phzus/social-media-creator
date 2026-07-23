# Progresso — CIIL

Log datado do trabalho feito pra CIIL. Topo = mais recente. Entrada por bloco de trabalho.

---

## 2026-07-21 — Roteiro institucional publicitário pras duas unidades (Araruama + São Gonçalo)

PH pediu um roteiro pra hoje: vídeo **publicitário, parecido com os que a CIIL já gravou**, **só pras duas unidades**, deixando claro que tem unidade em **Araruama E São Gonçalo**. Pediu pra (1) olhar a biblioteca de anúncios do Facebook e adaptar o que performa, e (2) pegar **só a copy** dos vídeos gravados (nome com "(ciil)") como inspiração — **sem reusar frames/imagens**.

**Copy dos vídeos gravados.** Os 3 institucionais estão em `~/Downloads` (`ciil araruama corrigido.mp4`, `ciil 2.mp4`, `ciil sao goncalo.mp4`). Sem ffmpeg no ambiente — extraí frames via AVFoundation/Swift e li as **legendas queimadas** pra reconstruir a copy. Salvo em [referencias/2026-07-21-copy-videos-institucionais-gravados.md](referencias/2026-07-21-copy-videos-institucionais-gravados.md). Formato destilado e registrado em [PADROES.md](PADROES.md) (apresentador de scrub + B-roll real + legenda queimada + logo bug + tagline "se sentir bem"; arco "Você sabia que... → dor → day clinic → conforto/menos burocracia + leva a vacina → fale com a gente").

**Biblioteca de anúncios do FB — não deu.** A Meta Ad Library **não expõe métricas de performance** (impressões/gasto) pra anúncios comerciais — só pra políticos; e a página não abre por WebFetch (JS/bloqueio, socket hang up). Então ancorei o roteiro na **copy validada dos próprios vídeos** + estrutura DR do playbook (Gancho→Dor→Solução→Benefícios→CTA). Registrar isso pra não reprometer "buscar performáticos na Ad Library" — a fonte pública não entrega esse dado.

**Entregue (v1, depois revisto):** roteiro institucional pras duas unidades, eixo geográfico nas duas cidades com o mesmo peso (não só "Região dos Lagos"; SG nunca como filial menor), dor = viajar longe / se internar (não trânsito, respeitando o vício do PADROES). **Institucional = fala da modalidade sem nomear doença → fora do gate por doença** (mesma lógica do post de 06/07); passa pelo RT. Telefones conferidos na fonte: Araruama (22) 98800-6164, SG (21) 97297-7998. Horário não cravado (não confirmado).

**Revisão de PH (mesmo dia):** (1) o vídeo **ocupa o slot de Qua 22/07** (no lugar do Reel de autoridade "Frio e quem trata com biológico", que fica parkeado); (2) **não pode ser idêntico nem repetir palavras/frases dos vídeos gravados** — PH quer **variação** do validado. Reescrevi a copy trocando de propósito todas as assinaturas: "Você sabia que..." → abertura direta pra quem usa biológico; "conforto e menos burocracia" → "hora marcada e sem papelada sem fim"; "a gente também leva a vacina" → "quando o assunto é vacina, a gente também resolve — na clínica ou na sua casa"; "fale com a gente" → "manda uma mensagem no WhatsApp"; "clínica especializada em tratamento imunológico" → "centro de infusão em imunologia". Tagline "se sentir bem" fica só como visual da parede-logo, não como frase. Arquivo renomeado pro slot: [conteudo/roteiros/2026-07-22-institucional-duas-unidades.md](conteudo/roteiros/2026-07-22-institucional-duas-unidades.md). Estratégia atualizada (troca do slot 22/07). Falta o OK do RT.

> **Padrão pra próximos vídeos institucionais:** PH quer o formato validado **como frame de partida, não como molde a copiar palavra por palavra**. Cada novo institucional varia hook/benefícios/CTA — a copy dos vídeos gravados é referência de tom e estrutura, não script a repetir.

---

## 2026-07-16 — Peça extra de venda: vacina domiciliar, variação "cuidador de idoso"

PH pediu um post da CIIL "focado em venda totalmente", vacina domiciliar, já chamando pro WhatsApp — o mesmo serviço da peça de [10/07](conteudo/posts/2026-07-10-vacina-domiciliar.md). Como já existia peça quase idêntica, perguntei antes de produzir: **(1)** se entrava no lugar do slot de sexta 17/07 (hoje reservado pra "As vacinas do inverno") — PH confirmou que **não**, é peça extra, fora do calendário; **(2)** qual formato — ofereci Reels (maior lacuna da conta) como recomendação, mas PH escolheu **carrossel novo, variando o ângulo do de 10/07** pra não repetir.

Entregue: [conteudo/posts/2026-07-16-vacina-domiciliar-cuidador-idoso.md](conteudo/posts/2026-07-16-vacina-domiciliar-cuidador-idoso.md) — mesmo serviço (BOFU/Most-Aware, WhatsApp), mas gancho e corte diferentes: cena específica de quem cuida de um idoso (não a lista de 4 públicos da peça de 10/07). **Sem slot fixo no calendário** — PH decide onde entra (Stories, buffer 29/07 ou 31/07, ou data futura).

`validador-copy` rodado: pegou o ponto certo — a variação só funcionava no slide 1, dali em diante a peça recaía na estrutura da de 10/07 (reabria a lista de públicos, cobertura e CTA quase idênticos). Reescrito mantendo o corte único no cuidador do início ao fim: cortei a enumeração de públicos, reduzi de 4 → 3 slides (alinha com a referência @imunovidavacinas do PADROES), reformulei frase de cobertura + CTA final, e diversifiquei as hashtags (mantendo só marca/localização em comum, esperado repetir).

**Correção de PH (mesmo dia):** a copy usava "trânsito" (capa) e "achar vaga na rua" (legenda) como obstáculo — PH apontou que **Araruama não tem trânsito** (cidade pequena; a peça é idêntica pras 2 unidades, então precisa funcionar pra Araruama e São Gonçalo ao mesmo tempo). Troquei pelo obstáculo universal — o trabalho físico de tirar um idoso de casa (vestir, levar, esperar, voltar) — e registrei o vício em [PADROES.md](PADROES.md) pra não repetir em peças futuras. Mesmo princípio já visto no Complexo Vida: dor de copy só funciona se existir de verdade no lugar onde o cliente atende.

**Correção de PH (2ª rodada, mesmo dia) — fato inventado:** ao reescrever a flexibilidade de horário, escrevi "de manhã, no fim da tarde ou no sábado" sem base nenhuma. PH perguntou de onde vinha isso — não vinha de lugar nenhum. Conferido [BRIEFING.md](BRIEFING.md): o único horário documentado é "Seg-Sex, 08h-18h", sem sábado. Removido "no sábado" dos dois lugares (slide 2 + legenda). **Ponto de atenção pra mim mesmo:** essa invenção passou pelo `validador-copy` sem ser pega — o agente valida tom/estrutura/compliance geral, mas não necessariamente cruza cada detalhe factual novo contra o BRIEFING. Checar fatos operacionais (horário, dias, cobertura) contra a fonte antes de escrever, não só depois.

**Peça fechada, pronta pro designer** — falta só o OK do RT (padrão em toda peça de saúde) e PH definir o slot de publicação.

---

## 2026-07-13 — Slot de segunda: gate da Dermatite LIBERADO → série "Isso Tem Nome" volta ao ar

PH confirmou que o **RT liberou o escopo da Dermatite Atópica** — a CIIL conduz a infusão do imunobiológico pra dermatite atópica nas 2 unidades. Com isso, a **3ª peça da série "Isso Tem Nome"** ([conteudo/posts/2026-07-13-isso-tem-nome-dermatite-atopica.md](conteudo/posts/2026-07-13-isso-tem-nome-dermatite-atopica.md)), que estava travada desde 06/07, **destrava e ocupa o slot educativo de segunda 13/07**. A série que o cliente pediu volta a andar.

A copy já estava pronta e validada (rodadas de 07-01/07-02). Nesta entrega: (1) troquei o aviso de gate no arquivo de BLOQUEANTE → ✅ liberado (PH 2026-07-13); (2) rodei o **`validador-copy`** como filtro final (peça de saúde indo pro ar) — voltou **aprovado com ajustes**; apliquei os 2: a legenda repetia o esqueleto da peça de Psoríase ("você já trocou de X, testou hidratante, e nada resolve") → reescrevi a abertura com estrutura diferente ("Tem gente que passa anos coçando à noite e ouvindo que é só pele seca..."); e removi a hashtag duplicada (#DermatiteAtopica sem/com acento) deixando só a acentuada.

**Gate é por doença — só a Dermatite foi liberada.** Psoríase, Artrite Reumatoide e Crohn seguem gated até confirmação individual do RT (ver [OPEN-QUESTIONS #5](OPEN-QUESTIONS.md), atualizada). Vale rodar a confirmação das restantes de uma vez pra destravar a série inteira. **Ação de PH/RT ainda pendente nesta peça:** OK final de claims clínicos (nomenclatura, corte "casos mais intensos", protocolo day clinic — lista no arquivo). Reconciliei o [calendário de julho](estrategia/2026-07.md): 13/07 = Dermatite; a pauta de férias/vacinação infantil cede o slot e fica parkeada (candidata a Stories na janela de férias ou buffer 29/07).

---

## 2026-07-10 — Slot de sexta: carrossel de venda "Vacina sem sair de casa"

Produzido o post do dia (Sex 10/07), conforme o slot do calendário de julho: **carrossel de venda de vacinação domiciliar** ([conteudo/posts/2026-07-10-vacina-domiciliar.md](conteudo/posts/2026-07-10-vacina-domiciliar.md)). BOFU / Most-Aware — o serviço de maior conversão pelo feed, ataca direto a dor de deslocamento de idoso e família e joga pro WhatsApp.

Formato **carrossel curto (4 slides)** seguindo o padrão validado em [PADROES.md](PADROES.md) (ref. @imunovidavacinas). Capa em contraste dor→alívio, slide de como funciona, slide "pra quem serve" (4 bullets, quebra o tricolon), slide de cobertura + CTA. Cobertura "toda a Região dos Lagos e São Gonçalo" confirmada no briefing §1. Idêntico nas 2 unidades, só muda o rodapé.

**Nota de data:** PH pediu como "post de hoje dia 10/06", mas o dia de hoje é **10/07** (sexta) — tratei como 10/07, que é o slot de venda no calendário. Se era mesmo outra data, PH avisa que eu reancoro.

---

## 2026-07-06 — Slot de segunda: AR retida no gate → produzido Julho Amarelo (Hep B) no lugar

PH informou que o **RT ainda não confirmou** o escopo de infusão pra Artrite Reumatoide ("ainda não"). Sem esse OK, a peça de AR ([2026-07-06-isso-tem-nome-artrite-reumatoide.md](conteudo/posts/2026-07-06-isso-tem-nome-artrite-reumatoide.md)) **não pode publicar** — e o mesmo gate trava toda a série "Isso Tem Nome" (Psoríase, AR, Crohn, Dermatite), porque todas associam a marca a tratar uma doença autoimune específica.

Pra não deixar o slot educativo de segunda vazio, produzi uma pauta **sem gate de escopo**: **Julho Amarelo / vacina Hep B** ([conteudo/posts/2026-07-06-julho-amarelo-hepatite-b.md](conteudo/posts/2026-07-06-julho-amarelo-hepatite-b.md)). Vantagens: fala de **vacina** (serviço-núcleo confirmado da CIIL, não depende de confirmar infusão), está ancorada na sazonalidade real (Julho Amarelo + 28/07) e já estava prevista no mês — tinha sido deslocada de 03/07 pela série. Ângulo só em vacina (sem teste/sorologia, alinhado ao que PH sinalizou em 22/06). Estático enxuto, mesmo esqueleto de arte da série, sem o selo "ISSO TEM NOME".

**Copy reancorada (mesma conversa, decisão PH):** a 1ª versão prometia "a gente confere sua carteira e orienta o que falta" — serviço que **não está documentado** no briefing (a lista de serviços tem vacinação/imunobiológico/consultas/USG/PPD/administração de medicamentos, mas não conferência de carteira). PH pediu pra reancorar só no que é confirmado. Reescrevi apoiando o CTA em **vacina** (briefing §2: "Calendário Nacional completo" → Hep B incluída) + **atendimento domiciliar** (briefing §1, confirmado), com CTA de agendamento no WhatsApp. Fica publicável sem depender de novo OK operacional. **Ressalva registrada na peça:** a disponibilidade da Hep B vem da auditoria Cowork AI (🟡) — vale um OK de PH/cliente por ser peça pública.

**Virada de direção (mesma conversa, PH):** PH sinalizou que o feed vinha pesado em vacina e pediu pra falar de **tratamento de doença autoimune** (o carro-chefe). Como as peças que cravam doença específica são justo as travadas no gate, produzi um post da **modalidade** — terapia imunobiológica / day clinic como categoria, sem nomear doença: [conteudo/posts/2026-07-06-tratamento-imunobiologico-day-clinic.md](conteudo/posts/2026-07-06-tratamento-imunobiologico-day-clinic.md). Ângulo: infusão em day clinic, mesmo dia, sem internação, perto de casa, com cobertura de convênios — tudo documentado (briefing §2/§3). Não cai no gate porque não faz a promessa "a CIIL trata a SUA [doença X]". **Este vira o post de segunda 06/07**; o de Julho Amarelo/Hep B fica parkeado como asset do mês (28/07 é o Dia Mundial das Hepatites). Continua passando pelo RT como toda peça clínica, mas sem o bloqueio de escopo por doença.

**AR não morreu** — volta pro drip semanal assim que o RT liberar o escopo. **Ação pendente com PH/RT:** rodar a confirmação de escopo **por doença** (faz infusão? qual especialidade encaminha?) pra destravar a série inteira de uma vez — é a [OPEN-QUESTION #5](OPEN-QUESTIONS.md), ainda 🔴.

---

## 2026-07-02 — Correção de formato e copy da série "Isso Tem Nome" (feedback de PH)

PH revisou o PDF e trouxe 3 ajustes, todos aplicados nas 3 peças + no PDF + registrados em [PADROES.md](PADROES.md) (novo arquivo):

1. **Carrossel liberado** — não é só estático. Máx. **2-3 slides**, referência **@imunovidavacinas** (acesso ao IG bloqueado por login wall, mesmo problema já conhecido — pedir prints a PH se quiser análise visual). Registrado em [context.md](context.md) References.
2. **Título repetitivo corrigido** — as 3 peças saíram todas com o esqueleto "[sintoma] pode não ser [explicação banal]". PH aprovou manter esse padrão só na peça de abertura (Psoríase); reescrevi os títulos de AR ("Já foi em três médicos e ninguém deu nome pra essa dor nas mãos?") e Dermatite ("Aquela coceira que rouba o sono todo santo dia tem nome.") com ganchos diferentes.
3. **Copy do estático simplificada** — trocada a estrutura antiga (headline + subtexto + micro-lista de 4 itens + assinatura) por 3 blocos enxutos: **Título → Desenvolvimento** (tópicos ou frase, varia por peça) **→ Fechamento** (menciona a CIIL e que há tratamento — "muita gente não sabe que dá pra tratar por aqui"). Legendas também enxugadas (de 5-6 parágrafos pra 3-4), mantendo os pontos de compliance essenciais.

**Arquivos atualizados:** as 3 peças em `conteudo/posts/`, [PADROES.md](PADROES.md) (novo), [estrategia/linha-editorial-isso-tem-nome.md](estrategia/linha-editorial-isso-tem-nome.md), [context.md](context.md), e o PDF/HTML em `apresentacoes/2026-07-01-serie-isso-tem-nome.*` (regenerado).

---

## 2026-07-01 — PDF de apresentação da série "Isso Tem Nome" (3 posts)

Gerado PDF com as 3 peças estáticas prontas do drip semanal (Psoríase 03/07, Artrite Reumatoide 06/07, Dermatite Atópica 13/07), a pedido de PH. Identidade visual própria da CIIL (azul institucional #1A7FBD/#0D5A8C + ciano #2EAEE8), logo Lone Mídia no cabeçalho — mesmo padrão de "plano de conteúdo" usado com outros clientes (Dumar, Complexo Vida).

**Arquivos:** [apresentacoes/2026-07-01-serie-isso-tem-nome.html](apresentacoes/2026-07-01-serie-isso-tem-nome.html) (fonte, editável) + [apresentacoes/2026-07-01-serie-isso-tem-nome.pdf](apresentacoes/2026-07-01-serie-isso-tem-nome.pdf) (PDF exportado via Chrome headless — 6 páginas: capa, visão geral, 1 página por peça, fechamento com pendências).

**Não inclui:** o roteiro de Reel da Doença de Crohn (peça de vídeo opcional, fora do drip estático) — fica de fora pra manter o PDF focado no que vai pro ar nas próximas 3 semanas. Cada página traz o aviso de gate de escopo (compliance bloqueante) resumido.

---

## 2026-07-01 — Série "Isso Tem Nome" · 4 peças (Jul 3/6/8/10) a partir do feedback do cliente

> **Atualização (mesmo dia):** PH aprovou o **nome da série = "Isso Tem Nome"** (era "Você conhece a [doença]?"). Nome/selo/títulos/arquivos atualizados em tudo (slug `isso-tem-nome`). PH também **confirmou:** cadência de **1 post/semana** · **slot de segunda** · **formato estático** (modelo da peça de AR — mais rápido pro designer). Largada nesta **sexta 03/07** (demanda rápida) e depois **toda segunda**. Linha editorial recorrente em [estrategia/linha-editorial-isso-tem-nome.md](estrategia/linha-editorial-isso-tem-nome.md). **Conflito de calendário resolvido** — com 1/semana a série não atropela mais Julho Amarelo/Alergia/domiciliar.
>
> **Conversões feitas (2026-07-01):** Psoríase e Dermatite Atópica reescritas de carrossel → **estático** (as versões carrossel ficam no histórico do git). AR já era estático. Crohn (Reel) fica como **peça de vídeo opcional** (estilo @imunovitta), postável numa quarta quando PH quiser vídeo — fora do drip estático semanal.

Produzida a **1ª leva da série educativa de doenças autoimunes** pedida pelo cliente (feedback literal em [referencias/2026-07-01-feedback-cliente-serie-doencas.md](referencias/2026-07-01-feedback-cliente-serie-doencas.md)). **Conteúdo idêntico pras 2 unidades** (só muda o rodapé fixo de design). Drip semanal (estático, sexta de largada + segundas):

| Data | Dia | Formato | Doença | Arquivo |
|---|---|---|---|---|
| 03/07 | Sex | Estático | **Psoríase** | [conteudo/posts/2026-07-03-isso-tem-nome-psoriase.md](conteudo/posts/2026-07-03-isso-tem-nome-psoriase.md) |
| 06/07 | Seg | Estático | **Artrite Reumatoide** | [conteudo/posts/2026-07-06-isso-tem-nome-artrite-reumatoide.md](conteudo/posts/2026-07-06-isso-tem-nome-artrite-reumatoide.md) |
| 13/07 | Seg | Estático | **Dermatite Atópica** | [conteudo/posts/2026-07-13-isso-tem-nome-dermatite-atopica.md](conteudo/posts/2026-07-13-isso-tem-nome-dermatite-atopica.md) |
| _opcional_ | Qua | Reel (vídeo) | **Doença de Crohn** | [conteudo/roteiros/2026-07-08-isso-tem-nome-doenca-de-crohn.md](conteudo/roteiros/2026-07-08-isso-tem-nome-doenca-de-crohn.md) |

**Ângulo do cliente atendido em todas:** a pessoa tem a doença e (a) não sabe que existe tratamento, (b) não encontra médico que identifique/trate → cada peça ajuda a **reconhecer sinais** + afirma que **há tratamento que controla** (imunobiológico — nunca "cura"; são doenças crônicas) + convida a **buscar avaliação**. Nunca induz autodiagnóstico. CIIL posicionada na etapa de tratamento/infusão + imunologia, não como quem "diagnostica tudo".

**Referência de estilo (@imunovitta, pedida por PH):** autoridade médica explicando a doença de forma clara e acolhedora. O slot de quarta (Reel, Crohn) é a peça-âncora nesse estilo — especialista da CIIL em câmera. Briefs dos carrosséis pedem foto autoral da equipe nos slides de "existe tratamento"/CTA.

**Variação de hook entre as peças (regra anti-IA de série):** Psoríase abre por cena de rotina ("troca de xampu"); AR pela cena da manhã (rigidez ao acordar); Crohn pela fala direta do especialista quebrando o tabu de intestino; Dermatite pela noite/coceira que rouba o sono. Nenhuma repete a abertura da outra.

### Método de produção
Workflow multi-agente (21 agentes): pesquisa clínica compliance-safe → redação no formato da casa → **auditoria adversarial dupla** (compliance CFM + anti-IA/voz) → fix → **checagem de consistência da série** (as 4 juntas).

### Correções de consistência aplicadas pós-síntese (PH: é o que salva a série de "cara de IA")
A checagem de série reprovou 1 item BLOCK + menores. Corrigido por mim (editor):
- **BLOCK — CTAs de carrossel clonados.** Psoríase (S7) e Dermatite (S8) fechavam quase palavra por palavra igual — o vício que a regra de série manda evitar. Reescritos ancorando cada um no próprio fio: Psoríase puxa a ponte pele→articulações ("não espere as juntas entrarem na conversa"); Dermatite puxa o sono ("coceira não devia custar as suas noites").
- **Gate de escopo uniformizado nas 4.** Crohn já tinha trava de publicação exemplar; AR e Dermatite tinham o mesmo risco enterrado na lista. Agora as 4 abrem com o mesmo aviso ⚠️ **"não publicar até PH/RT confirmarem que a CIIL faz a infusão pra AQUELA doença nas duas unidades + qual especialidade encaminha"**.
- **Selo de série padronizado** pra uma redação fixa: **"ISSO TEM NOME"** (estavam 3 variações diferentes). Nome da doença abaixo, em display, é o único campo variável.
- **Bloco "day clinic" variado** entre as peças (estava quase literal nas 4); **CTA de legenda da Psoríase** virou específico; **CTA do Crohn** variado pra não ecoar o da AR.
- **Filename da Psoríase** padronizado pro padrão da série.

### Compliance (BLOQUEANTE — saúde/CFM)
Nada publica sem o **OK do responsável técnico médico da CIIL**. Cada peça leva anexada a lista de `claims_to_validate` (9 a 13 itens conforme a doença). Zero número epidemiológico inventado, zero promessa de cura, zero autodiagnóstico, zero "antes e depois", zero superioridade, zero conduta individual. Destaques que dependem de terceiros:
- **Gate de escopo (o principal):** confirmar que a CIIL conduz a infusão do imunobiológico pra cada doença (Psoríase, AR, Crohn, Dermatite) nas duas unidades — ligado à OPEN-QUESTION de especialidades. Crohn tem trava explícita porque falta confirmar gastro-DII.
- **Item de dieta na Crohn:** removida a afirmação "não é culpa do que você comeu" (papel da dieta é nuançado) — RT decide se/como reintroduz.
- **"Referência na região":** retirado da copy pública (autoqualificação sob CFM) — retomar só com lastro.
- **Reel de quarta:** definir quem da equipe grava (decisão de PH).
- **Referências de Pinterest:** PH curar 2-3 por peça antes do designer produzir.

### ⚠️ Impacto no calendário de julho (decisão de PH)
Essas 4 peças **ocupam slots já planejados** na [estratégia de julho](estrategia/2026-07.md):
- **Jul 6 (AR):** já era "Série Entenda: Artrite Reumatoide" — **sem conflito**, só ganhou o nome da série.
- **Jul 3:** deslocou o carrossel de **Julho Amarelo (Hep B)** — data sazonal real (mês de combate às hepatites).
- **Jul 8:** deslocou o Reel de **Dia Mundial da Alergia (08/07)**.
- **Jul 10:** deslocou o carrossel de **venda — vacinação domiciliar** (era a peça BOFU/conversão da 1ª quinzena).
- **Efeito no mix/funil:** a série é toda Educativo/Autoridade (TOFU-MOFU). Julho perde a peça de conversão (domiciliar) da 1ª quinzena e 2 datas sazonais. **Recomendação:** remanejar Julho Amarelo e domiciliar pros slots-buffer livres (Qua 29/07, Sex 31/07) ou pra quartas/sextas seguintes, e checar se o Dia Mundial das Hepatites (27/07) segura o Julho Amarelo sozinho. Pendente de aval de PH antes de eu atualizar a estratégia.

### Próximas entradas naturais da série ("e assim vai")
- **Espondilite Anquilosante** — dor lombar que **melhora com movimento e piora em repouso/de madrugada** (o inverso da dor mecânica), público jovem que trata como "má postura/hérnia" por anos. Reumatologista nomeável.
- **Artrite Psoriática** — fecha o arco da ponte pele→juntas já plantada na peça de Psoríase ("a psoríase que passou pras juntas", dedo "em salsicha").

---

## 2026-06-22 — Onboarding (cliente novo entra no fluxo)

Cliente novo: **CIIL — Centro de Imunobiológicos e Imunização Lagos** (clínica de infusão/day clinic · imunobiológicos pra doenças autoimunes + vacinas · 2 unidades: Araruama e São Gonçalo/RJ).

**Material de entrada:** PDF de 15 páginas — auditoria digital + análise de marca + estratégia editorial — elaborado pela **Cowork AI** (terceiro, não a Lone). Riquíssimo: identidade, serviços, convênios, análise dos 2 perfis IG (@ciilagos 1.555 seg. / @ciil.sg 388 seg.), análise de 6 concorrentes, posicionamento, 5 pilares, calendário-exemplo de 1 semana e diretrizes visuais.

**Criado:**
- Estrutura padrão em [clients/ciil/](.) (BRIEFING, context, PROGRESSO, OPEN-QUESTIONS + pastas de conteúdo/estratégia/referências).
- [referencias/2026-06-22-briefing-auditoria-cowork-ai.md](referencias/2026-06-22-briefing-auditoria-cowork-ai.md) — transcrição fiel do PDF.
- [BRIEFING.md](BRIEFING.md) — síntese decisional + seção de compliance médico.
- [context.md](context.md) v1.0 — voz, públicos (3 recortes + geográfico), 5 pilares, anti-padrões, compliance CFM.
- [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md) — 5 pendências bloqueantes (plano contratado, divisão com @vivamidia, escopo das 2 unidades, decisor, compliance).

**Observações estratégicas:**
- Direção de marca (posicionamento, pilares, tom) foi **herdada da auditoria da Cowork AI** — marcada como "a validar" com PH/cliente antes da 1ª estratégia.
- Maior lacuna e oportunidade do negócio: **Reels/vídeo quase inexistente**.
- @ciil.sg está defasada e espelha Araruama — precisa de pauta **local própria** se estiver no escopo.

**Decisões de PH (mesmo dia):** plano **padrão Lone — 12 posts/mês (Seg/Qua/Sex)** · **as duas unidades** no escopo (com pauta local própria pra SG) · **Lone assume toda a gestão** (a @vivamidia sai do conteúdo). Registrado no context (Operational Notes) e OPEN-QUESTIONS. Restam bloqueantes: 12/mês por unidade ou total, decisor/responsável técnico, compliance, handoff de acessos.

**Conteúdo entre unidades (decisão PH):** os posts são **os mesmos** pras duas unidades; muda só o específico de cada cidade (feriado municipal, evento local). Há **responsável técnico médico** que valida claims. **@vivamidia saiu** — Lone cuida de 100%.

**Análise dos perfis (subagent `analista-perfil-ig`, mesmo dia):** Instagram bloqueou acesso direto (login wall) — análise feita sobre a auditoria + site, salva em [referencias/2026-06-22-analise-perfis-instagram.md](referencias/2026-06-22-analise-perfis-instagram.md). Confirmou: grade 100% estática/stock, **Reels quase zero**, humanização (~4%) e engajamento local (~3%) dormindo, @ciil.sg espelho defasado. Achados novos: bio precisa tirar "por @vivamidia"; convênio **Care Plus** novo no site; telefone do @ciil.sg em conflito. Correções urgentes e pendências registradas na OPEN-QUESTIONS.

**Confirmação visual da grade (prints @ciil.sg, PH):** validou a leitura e corrigiu 3 pontos — telefone certo é (21) 97297-7998 (a **bio** do @ciil.sg é que está errada); **Care Plus** já está no rodapé (não é novo, "válido só Araruama"); tipografia tem **display com personalidade** (serif itálico, bold de impacto), melhor do que a auditoria sugeria. Registrado na análise.

**Foto autoral (PH):** ✅ **existe** material autoral de equipe e clínica → **Humanização e Reels destravados** pra Julho. PH vai apontar a pasta do material.

**Pesquisa de datas de Julho/2026 (subagent `pesquisador-datas`):** salva em [referencias/2026-06-22-datas-comemorativas-julho.md](referencias/2026-06-22-datas-comemorativas-julho.md). Destaques: **Julho Amarelo** (hepatites — Hep B tem vacina) + **28/07** (Dia Mundial das Hepatites) + **férias escolares 13–25/07** (vacinação infantil) + **inverno** (vacinas por público, incl. autoimune imunossuprimido) + **vacinação corporativa**. Sem feriado municipal em julho nas duas praças. 3 itens a confirmar com o cliente: escopo de alergia (08/07), se faz teste de hepatite, se aplica BCG.

**Confirmações de PH sobre as datas:** CIIL **oferece consulta de alergia** (08/07 vira serviço/autoridade — registrado no context como serviço) · provavelmente **não faz teste de hepatite** (Julho Amarelo = só vacina Hep B) · provavelmente **não aplica BCG** (01/07 sai; vira Reel inaugural de humanização).

**Estratégia de Julho montada:** [estrategia/2026-07.md](estrategia/2026-07.md) — 12 posts Seg/Qua/Sex, **4 Reels nas quartas** (ataca a maior lacuna), pilares Educativo 4 / Autoridade 3 / Venda 2 / Humanização 2 / Engajamento 1 + Stories. Ancorada em Julho Amarelo (Hep B), férias escolares (vacinação infantil), inverno (vacinas por público, incl. imunossuprimido) e vacinação corporativa. Estreia rosto real da equipe (Reel 01/07) e série de doenças autoimunes (público de maior ticket).

**Funil validado** (`mapeador-funil`): TOFU 33% / MOFU 42% / BOFU 25% — saudável pra 1º mês. Dois ajustes aplicados: gancho do Reel 01/07 vira TOFU contraintuitivo; quiz 20/07 vira quebra de objeção do paciente crônico (Product-Aware).

**Próximo passo:** PH aprovar a estratégia → produzir as peças (roteiros dos Reels + copy dos carrosséis/posts) → validação de copy (`validador-copy` + compliance médico). Pendências que ainda afetam: confirmar teste de hepatite, apontar pasta do material autoral + agenda de gravação, correções de bio/telefone nos perfis.
