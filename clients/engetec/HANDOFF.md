# Handoff — Engetec (continuação do onboarding)

**Última sessão:** 2026-05-11
**Status do cliente:** 🟡 Em onboarding — context.md v0.1 (esqueleto), aguardando respostas críticas do PH pra fechar v1.0 e partir pra estratégia + produção.

> Esse arquivo existe pra próxima conversa pegar o contexto inteiro sem PH precisar repetir nada. Quando o onboarding fechar (context.md v1.0 + primeira estratégia entregue), apagar este arquivo — vira ruído.

---

## 1. O que esse projeto é

Onboarding de um cliente novo da **Lone Mídia** (agência em Araruama, RJ): **Engetec — Engetec Soluções em Eletricidade**. Empresa de instalações elétricas + sistema solar + materiais elétricos e hidráulicos em Araruama / Paracatu.

O objetivo da próxima conversa é **fechar o onboarding** (context.md em v1.0) pra poder começar a produção de conteúdo. PH disse explicitamente nesta primeira sessão: *"temos uma solicitação de conteúdo específico, então não formule o conteúdo em si agora — primeiro alinhar o máximo sobre o cliente, depois partir pra produção."*

**Sequência completa esperada (não toda nesta conversa):**

1. ✅ Estrutura de pasta criada · briefing inicial + pesquisa de mercado (esta sessão).
2. ⏳ **PH responde as 6 perguntas críticas 🔴 do [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md)** + manda mais prints da grade do Instagram (prometeu mas só veio 1).
3. ⏳ **Análise de perfil do Instagram** (protocolo de [shared/visual-reference-checklist.md](../../shared/visual-reference-checklist.md)) → vai pra `referencias/YYYY-MM-DD-analise-perfil-instagram.md`.
4. ⏳ Atualizar [context.md](context.md) pra **v1.0** (hipóteses viram fatos confirmados, pilares ficam definidos).
5. ⏳ Fechar **plano contratado** (quantos posts/mês, designer responsável, canal de aprovação).
6. ⏳ Produzir **primeira estratégia mensal** em `estrategia/YYYY-MM.md` (provavelmente junho/2026 se o ciclo começar agora).
7. ⏳ Atender a "solicitação de conteúdo específico" que PH mencionou mas ainda não detalhou.

---

## 2. O que PH já me deu nesta sessão

Material recebido no chat:

- **Texto institucional "Quem Somos"** do site engetecrj.com.br (PH colou na conversa). Arquivado em [referencias/2026-05-11-site-engetecrj-quem-somos.md](referencias/2026-05-11-site-engetecrj-quem-somos.md).
- **1 print da bio do Instagram** @engetec_projetos. Descrito em [referencias/2026-05-11-bio-instagram-engetec-projetos.md](referencias/2026-05-11-bio-instagram-engetec-projetos.md).
- **Links:** site + Instagram.
- **Aviso de continuação:** PH disse "vou soltar aqui alguns prints" (plural). Só 1 print chegou. Pedir os outros logo no início da próxima conversa — provavelmente são posts da grade que viram base pra análise de perfil.

---

## 3. O que eu fiz nesta sessão

### Pesquisa complementar (web)

- Site Engetec: páginas /sobre-nos/ e /contato-2/ raspadas. Achados: 5 anos de mercado, 100+ clientes, sem fundadores nomeados, sem certificações listadas, partes do site em **Lorem Ipsum** (não é fonte completa).
- Concorrentes Região dos Lagos (linha solar): Krasner (Araruama, desde 2014), Sollagos, SolarOn, Terra Verde Solar, Aster (Iguaba), Paraná Solar, Costa do Sol Solar, Eng3/Ollem.
- Concorrentes elétrica geral na região: **nenhum forte em conteúdo digital encontrado**. Oportunidade rara — Engetec pode pegar a posição "elétrica que aparece" sem disputa direta.
- Referências de conteúdo nacional do nicho (formato/voz): @engehalleletrica (479K), @saladaeletrica (222K), @eletrica.academy (210K), @kveletrica (78K), @nteletrica, @elgin.eletrica.
- Tudo consolidado em [referencias/2026-05-11-pesquisa-concorrentes-referencias.md](referencias/2026-05-11-pesquisa-concorrentes-referencias.md).
- Notei concorrente sósia (**Engetec Engenharia** — engeteceng.com.br) sem relação aparente com a nossa. Risco de SEO/branding cruzado — entrou no OPEN-QUESTIONS.

### Estrutura padrão do cliente criada

```
clients/engetec/
├── BRIEFING.md                      🟡 parcial
├── context.md                       v0.1 esqueleto
├── OPEN-QUESTIONS.md                6 críticas + 15 importantes + 9 boas-de-saber
├── PROGRESSO.md                     log datado deste cliente
├── HANDOFF.md                       (este arquivo)
├── apresentacoes/                   (vazia)
├── conteudo/{posts,roteiros,stories}/   (vazias)
├── estrategia/                      (vazia)
├── identidade/                      (vazia)
└── referencias/
    ├── 2026-05-11-site-engetecrj-quem-somos.md
    ├── 2026-05-11-bio-instagram-engetec-projetos.md
    └── 2026-05-11-pesquisa-concorrentes-referencias.md
```

### Documentos globais atualizados

- [docs/CLIENTES-INDEX.md](../../docs/CLIENTES-INDEX.md): Engetec adicionada como 🟡 em onboarding.
- [docs/PROGRESSO.md](../../docs/PROGRESSO.md): entrada de 2026-05-11 com resumo do bloco.

---

## 4. 3 achados-chave que vão guiar a continuação

Estes três pontos saíram da pesquisa e mudam o ângulo da estratégia. Vale relembrar logo no início da próxima sessão.

### Achado 1 — Site desatualizado vs bio do Instagram

O **site** só fala de "instalações elétricas" (genérico institucional). A **bio do Instagram** lista 4 linhas: projetos elétricos + instalações elétricas + **sistema solar** + **materiais elétricos e hidráulicos**.

Implicação: o posicionamento real é mais amplo do que o site sugere, e inclui pelo menos uma linha de produto (material) que pode ser um ponto físico de venda. Sem confirmar isso com PH, qualquer estratégia fica chutada.

### Achado 2 — Material elétrico/hidráulico pode ser pilar B2B

Se o ponto físico em Paracatu tem balcão de venda de material e atende **eletricista parceiro**, isso abre um pilar B2B inédito comparado aos outros clientes da Lone (Arte em Manipulação e Tindaro são B2C puros). Pode mudar o mix do calendário inteiro.

### Achado 3 — Nicho de elétrica geral está vazio digitalmente na região

Saturado: solar (8+ concorrentes regionais identificados). Vazio: elétrica residencial/comercial geral. **Posicionar a Engetec como "a elétrica que aparece" da região é nicho aberto** — diferencial competitivo real, não só linguagem.

---

## 5. Bloqueios pra próxima sessão

### 🔴 6 críticas — sem resposta não fecha context v1.0 nem estratégia

(extraídas do [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md), versão resumida)

1. **Carro-chefe hoje** — qual linha dá mais receita? Qual o cliente quer crescer mais nos próximos 90 dias?
2. **Linha de material** — é ponto físico ativo de venda? Atende eletricista autônomo / consumidor final / só estoque interno?
3. **Diferencial concreto** — site diz "qualidade, segurança, inovação" (genérico). Qual o diferencial real? (Garantia? Velocidade? Especialização? Pós-venda?)
4. **Persona dominante real** — quem já é maioria dos clientes fechados? (Residencial 1ª casa? Veranista? Comércio? Empresa? Produtor rural? Eletricista revendedor?)
5. **Ticket médio** — faixa de obra residencial vs comercial vs solar. (Não vai pro conteúdo, calibra ofertas.)
6. **Objeção #1** — "muito caro" / "vou pesquisar" / "preciso financiar" / "não confio em empresa fora do centro"? Saber o peso ajuda a produzir conteúdo de objeção.

### 🟡 Importantes (não bloqueiam abrir estratégia, bloqueiam algum eixo de produção)

Listadas no [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md) seção 🟡. Resumo:
- Kit visual oficial (logo SVG, paleta hex, fontes).
- Plano contratado + designer responsável + canal de aprovação.
- Engenheiro/técnico responsável (CREA/CFT) — pode aparecer em conteúdo?
- Equipe topa gravar Reels? (Define se vira "Cliente que Grava Vídeos" §4.2 ou "Tradicional" §4.1 do [playbook](../../shared/playbook-lone-midia.md).)
- Banco de fotos / vídeos brutos / depoimentos existentes.
- Conta de luz antes/depois de cliente solar fechado.
- Raio de atendimento real.
- Posts antigos que mais funcionaram + posts que cliente rejeita.

### 🟢 Boas de saber

Listadas no OPEN-QUESTIONS.md seção 🟢. Inclui pergunta sobre o sósia **Engetec Engenharia** (engeteceng.com.br) — verificar se há disputa de marca / risco de SEO cruzado.

---

## 6. Pendência específica que PH mencionou mas não detalhou

Citação literal do PH na primeira mensagem:

> "Temos uma solicitação de conteúdo específico, então não formule o conteúdo em si agora, nesse primeiro momento vamos buscar alinhar o máximo sobre o cliente para depois partirmos pra produção."

Não sei ainda **qual é a solicitação de conteúdo específico**. Pode ser:
- Um post de lançamento / abertura da nova fase com a Lone.
- Uma promoção pontual.
- Um Reels que o cliente quer gravar agora.
- Outra coisa.

→ **Perguntar no início da próxima sessão.** Anotar a resposta em PROGRESSO.md + abrir o entregável onde for cabível.

---

## 7. Como continuar — script sugerido pra abrir a próxima conversa

Quando PH abrir a próxima conversa, o roteiro natural é:

1. **Ler este HANDOFF.md + [context.md](context.md) + [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md).** Já dá contexto completo.
2. **Pedir a PH:**
   - Resposta das 6 perguntas críticas 🔴.
   - Os prints da grade do Instagram que ele prometeu (pra rodar análise de perfil).
   - Detalhe da "solicitação de conteúdo específico" que ele mencionou.
   - Confirmação do plano contratado + designer responsável.
3. **Com as 6 críticas respondidas:** promover [context.md](context.md) de v0.1 → v1.0, marcar lacunas resolvidas no [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md), atualizar [docs/CLIENTES-INDEX.md](../../docs/CLIENTES-INDEX.md) (mudar 🟡 em onboarding → 🟡 pronto pra estratégia).
4. **Com os prints + análise:** salvar `referencias/YYYY-MM-DD-analise-perfil-instagram.md` seguindo [shared/visual-reference-checklist.md](../../shared/visual-reference-checklist.md).
5. **Com tudo acima:** abrir [estrategia/YYYY-MM.md](estrategia/) com o calendário mensal (3/sem, padrão Lone seg simples · qua Reels · sex carrossel/venda).
6. **Atender a solicitação específica de conteúdo** (depois que ela for descrita).
7. **Apagar este HANDOFF.md** quando o context.md fechar em v1.0 + a primeira estratégia estiver entregue.

---

## 8. Lembretes operacionais (regras do projeto que não mudam)

- Toda comunicação com PH em **PT-BR informal**. Conteúdo gerado segue voz do cliente (que ainda não tá fechada), não voz da agência.
- **Auto-save de contexto** é regra principal do projeto — toda info nova que PH soltar deve ir pro arquivo certo antes ou junto da resposta. Não esperar PH pedir pra salvar.
- **Antes de criar conteúdo:** garantir que [context.md](context.md) tá fechado (v1.0). Hoje está em v0.1 (esqueleto). Não produzir peça final ainda — só material de discovery / pré-produção.
- **Estrutura oficial Lone:** seg = post simples · qua = Reels · sex = carrossel/venda. Mix obrigatório: venda + posicionamento + emocional + educativo + prova social + remarketing.
- **Filtros de copy:** [shared/voice-quality-checklist.md](../../shared/voice-quality-checklist.md) é o último filtro antes de entregar qualquer peça.
- **Pré-produção visual:** análise de perfil + busca Pinterest do nicho antes de mandar brief pra designer. Protocolo em [shared/visual-reference-checklist.md](../../shared/visual-reference-checklist.md).
- **Compliance setor elétrico:** atenção a CREA/CFT (ART/TRT), NR-10 (não mostrar prática insegura em vídeo), ANEEL (sem prometer % fixo de redução em solar).
