# Progresso — Social Media Creator

Log datado dos blocos de trabalho significativos. **Entradas mais recentes no topo.** Formato: `## YYYY-MM-DD — Título curto`.

---

## 2026-06-10 — Arte em Manipulação: 2 roteiros de Namorados (Kit Arte Brisa)

Gerente mandou o **Kit completo de Skincare da linha Arte Brisa** (sabonete de pepino + séruns clareadores dia/noite) como produto-foco de Dia dos Namorados — linha própria **nova**, adicionada ao context/PADROES. Pesquisa de benefícios feita pra fundamentar sem inventar ativo. Escritos **2 roteiros de Reels** alinhados às ideias do PDF da gerente: gancho de presente (~30s) + produto específico do kit (~40s). Compliance Anvisa aplicado nos claims "clareador". Aguardando validação supervisora/farmacêutica + infos (nome/preço/desconto). Detalhes em [clients/arte-em-manipulacao/PROGRESSO.md](../clients/arte-em-manipulacao/PROGRESSO.md).

---

## 2026-05-28 — MSE Funnel Labs instalado + força-tarefa de reforma (Dumar)

**Setup:** instalado o **Marketing Squad Extremo (MSE) Funnel Labs** (18 agentes, 20 funis, 10 frameworks, protocolo anti-IA v2.0) dentro do projeto. Sobreposto na raiz pra todas as referências internas `core/...` e `.claude/...` resolverem sem edição. Skills (`pitch-architect`, `slides-create`, `ui-ux-pro-max`) em [.claude/skills/](../.claude/skills/), rules em [.claude/rules/](../.claude/rules/), comandos `/MSE:agents:*` em [.claude/commands/MSE/](../.claude/commands/MSE/), base de conhecimento em [core/](../core/). CLAUDE.md do MSE **mesclado** no [CLAUDE.md](../CLAUDE.md) do projeto (seção MSE com mapeamento "Anthony" → PH e regra de quando usar MSE vs. fluxo Lone). `.claude/settings.json` criado mesclando guardrails do MSE + paths do Lone (clients/docs/shared liberados). Wrapper `shared/mse-funnel-labs/` removido.

**Dumar:** entregue campanha-ponte de continuidade da reforma a pedido do Ducler — ver [clients/dumar/PROGRESSO.md](../clients/dumar/PROGRESSO.md). Gravações efetivas adiadas ~10–15 dias (reforma da comunicação visual interna da loja em andamento).

---

## 2026-05-20 — Dumar entra no fluxo (onboarding completo)

Cliente novo: **Dumar Comércio e Serviços Ltda** (ferramentaria multimarca · Araruama/RJ · 35+ anos · 2º maior parceiro Makita do Brasil). Estrutura padrão criada em [clients/dumar/](../clients/dumar/) e adicionado em [CLIENTES-INDEX.md](CLIENTES-INDEX.md) como 🟡 pronto pra estratégia.

Material de entrada: **briefing estratégico v1.0** preparado pela própria Lone Mídia em abril/2026 (PDF de 15 páginas — já vinha pronto e rico, raro entre os onboardings) + **feedback crítico do Ducler** sobre estilo da grade antiga (insatisfação com arte genérica de agência — não humanizada, não expõe a empresa) + **referência @homedepot** apontada pelo cliente + **print da grade antiga** (8 peças que são anti-padrão oficial) + **banco de mídia** (~44 fotos HEIC + ~44 vídeos MOV).

Achados principais que estruturaram o onboarding:

- **Pivotagem B2B → B2C em curso** é a decisão estratégica central. Toda comunicação a partir daqui materializa esse reposicionamento.
- **Reforma do prédio (3 andares)** é âncora editorial dos próximos 60 dias — série "Construindo a Nova Dumar" → reinauguração.
- **5 pilares já definidos no briefing** (Na Dumar Tem · Ferramenta Certa · Invisível da Internet · Bastidores Dumar · Dumar Pro) com distribuição 4/3/2/2/1 em 12 posts/mês. Cadência herdada do padrão Lone Seg/Qua/Sex bate exatamente — alinhamento limpo, sem necessidade de ajustar.
- **Estilo visual sobrescrito** pelo feedback do Ducler: foto real domina, identidade gráfica em segundo plano, texto curto, sem confete/balão/slogan publicitário/stock photo. Norte = Home Depot adaptado pra regional brasileiro.
- **Concorrente principal não é local — é a internet** (ML, Amazon, Shopee). Vantagem competitiva da Dumar = serviço/relacionamento, não preço.
- **Datas comemorativas em junho/2026:** PH decidiu que única que entra é Dia dos Namorados (12/06, sexta). Resto ignorado.

Arquivos entregues: [BRIEFING.md](../clients/dumar/BRIEFING.md), [context.md](../clients/dumar/context.md), [PADROES.md](../clients/dumar/PADROES.md) (incluindo regra-mãe "mostrar a empresa, não falar sobre a empresa"), [OPEN-QUESTIONS.md](../clients/dumar/OPEN-QUESTIONS.md) (3 bloqueios pra estratégia de junho + 8 importantes + 6 longo prazo), [PROGRESSO.md](../clients/dumar/PROGRESSO.md) do cliente, 3 arquivos de referência: PDF transcrito, feedback Ducler, grade antiga como anti-padrão.

Próximo turno: PH responde os 3 bloqueios (janela, 6 roteiros, conversão dos HEIC) + decisões finais antes de fechar estratégia de junho.

## 2026-05-11 — Engetec entra no fluxo (onboarding inicial)

Cliente novo: **Engetec** (instalações elétricas + sistema solar + materiais elétricos e hidráulicos · Araruama / Paracatu / RJ). Estrutura padrão criada em [clients/engetec/](../clients/engetec/) e adicionado em [CLIENTES-INDEX.md](CLIENTES-INDEX.md) como 🟡 em onboarding.

Material de entrada: texto institucional "Quem Somos" do site (engetecrj.com.br) + 1 print da bio do Instagram @engetec_projetos. PH mencionou que mandaria mais prints — só 1 chegou; pedir os demais. Pesquisa complementar de mercado feita por Claude: concorrentes locais (linha solar) mapeados (Krasner, Sollagos, SolarOn, Terra Verde, Aster, Paraná Solar, Eng3) e **nenhum concorrente forte em conteúdo digital de elétrica geral encontrado na região** — espaço pra Engetec ser pioneira local. Referências nacionais de conteúdo do nicho registradas (Engehall, Sala da Elétrica, KV Elétrica).

Achados principais que viraram pergunta crítica no OPEN-QUESTIONS:
- Bio do Instagram lista 3-4 linhas (projeto + instalação elétrica + solar + material elétrico/hidráulico) — site só fala de "instalações elétricas". Posicionamento real precisa ser confirmado.
- "Materiais elétricos e hidráulicos" sugere ponto físico de venda — potencial pilar B2B (eletricista parceiro), inédito comparado aos outros clientes da Lone.
- Posicionamento institucional do site é genérico ("qualidade, segurança, inovação") — diferencial concreto está faltando.
- 122 posts em ~5 anos, cadência média ~2/mês. Espaço enorme pra acelerar.

Arquivos entregues: [BRIEFING.md](../clients/engetec/BRIEFING.md) (🟡 parcial), [context.md](../clients/engetec/context.md) (v0.1 esqueleto, com hipóteses claramente marcadas), [OPEN-QUESTIONS.md](../clients/engetec/OPEN-QUESTIONS.md) (6 perguntas críticas 🔴 que bloqueiam v1.0 + ~15 importantes + ~9 boas de saber), [PROGRESSO.md](../clients/engetec/PROGRESSO.md) do cliente, 3 arquivos de referência. Próximo turno: PH responde críticas + manda prints da grade pra análise de perfil.

## 2026-05-11 — Tindaro Solar entra no fluxo + roteiro de bastidor (seu Oscar)

Cliente novo: **Tindaro Solar** (energia solar fotovoltaica · Sul Fluminense). Estrutura padrão de cliente criada em [clients/tindaro-solar/](../clients/tindaro-solar/) e adicionado em [CLIENTES-INDEX.md](CLIENTES-INDEX.md) como 🟡 em onboarding.

Material de entrada: briefing PDF de março/2026 (transcrito em `referencias/`) + áudio da cliente pedindo roteiro pra gravar **hoje** durante a instalação na fazenda do seu Oscar (produtor rural). Briefing virou `BRIEFING.md`; áudio virou `referencias/2026-05-11-audio-pedido-video-instalacao.md`. `context.md` ficou em v0.1 (esqueleto) — PH planeja refinar via análise do Facebook + anúncios + concorrentes antes de fechar estratégia mensal.

Entregável principal: [conteudo/roteiros/2026-05-11-instalacao-fazenda-seu-oscar.md](../clients/tindaro-solar/conteudo/roteiros/2026-05-11-instalacao-fazenda-seu-oscar.md) — Reels de bastidor 30-45s, estrutura clássica Lone (gancho → dor → solução → benefício → CTA), com Plano A (operadora em câmera) + Plano B (narração over) + bônus de depoimento do seu Oscar como peça futura quando a conta nova chegar. Inclui instruções de filmagem práticas (equipamento, horário/luz, lista de B-roll, dicas de fala) porque a cliente vai gravar ela mesma com o celular.

Decisão de voz documentada: briefing original do cliente diz "redução de até 75%" mas o roteiro usa "valor mínimo da concessionária" e "tende a cair" — preserva claim técnico sem cravar percentual fixo. Alinhado com o próprio posicionamento "entrega resultado, não promessa".

PDF/HTML pra cliente também produzido em [clients/tindaro-solar/apresentacoes/2026-05-11-roteiro-bastidor-seu-oscar.html](../clients/tindaro-solar/apresentacoes/2026-05-11-roteiro-bastidor-seu-oscar.html) — 3 páginas padrão visual Lone (timeline · guia de gravação · legenda+hashtags+bônus depoimento). Reaproveita o template do PROGO v2 com adaptações pro contexto de cliente que vai gravar: introduz grid B-roll 2 colunas, blocos de check-list pra equipamento/luz/fala, alert pra compliance, info-box pra bônus do depoimento.

Lacunas registradas em [clients/tindaro-solar/OPEN-QUESTIONS.md](../clients/tindaro-solar/OPEN-QUESTIONS.md): plano contratado, handle Instagram, kit visual, persona dominante real, designer responsável, materiais que faltam.

## 2026-05-11 — PROGO v2.2 fechado + spec atualizada (3 memórias novas + voice-checklist + template)

Fechado o roteiro PROGO v2.2 do lado da Lone (aguardando supervisora aprovar). Detalhes específicos do cliente em [clients/arte-em-manipulacao/PROGRESSO.md](../clients/arte-em-manipulacao/PROGRESSO.md). Aqui ficam os aprendizados que viraram **spec do projeto** — aplicam-se a todos os clientes da Lone.

**Aprendizados extraídos desta rodada:**

1. **Vício novo no voice-checklist (§ 1.7):** "Transformar claim de produto em persona de público". Bug que cometi pegando "podendo ser usado pra potencializar canetas" (função do produto, da supervisora) e virando "quem já usa caneta e quer reforço" (persona de público, na dor). Muda eixo da peça e pressupõe uso de medicamento sob prescrição (pesa pra Anvisa/CFF).

2. **Padrão estrutural alternativo (§ 2.7):** "Convite por identificação no fechamento". Variação do playbook clássico onde a dor desce pro fim como gatilho de identificação encadeada no CTA. Funciona quando o gancho já carrega a dor + o benefício é forte o suficiente pra chegar logo. PH escolheu pro PROGO v2.2.

3. **Princípio estrutural (§ 3.6):** "Validar linha-a-linha pós-feedback do cliente". Antes era implícito; virou rotina explícita. Quando o cliente devolve feedback (especialmente em áudio), abrir roteiro novo lado a lado com material bruto em `referencias/` antes de fechar a versão. Pega assertividade, pressuposição e inferências indevidas.

4. **Separação PDF/.md:** PDF que vai pro cliente é peça clean (timeline + legenda + hashtags). Observações de gravação, compliance, pendências, tensão de voz, histórico — tudo fica só no .md interno. Vira ruído se for pro PDF + abre convite pra cliente negociar pontos internos.

**Arquivos atualizados:**
- [shared/voice-quality-checklist.md](../shared/voice-quality-checklist.md) — § 1.7, § 2.7, § 3.6 novos + 2 itens no checklist § 4 + histórico de calibração registrado.
- [shared/templates/roteiro-video.md](../shared/templates/roteiro-video.md) — campo "Tipo de lançamento", escolha consciente de estrutura no topo, seções "Tensão de voz" / "Histórico de revisões" / "Validação pós-feedback" + nota de que obs ficam só no .md.
- Memórias persistentes novas: `feedback_validar_linha_a_linha_pos_feedback.md`, `feedback_estrutura_convite_por_identificacao.md`, `feedback_pdf_cliente_clean_obs_no_md.md`. Index `MEMORY.md` atualizado.

**Status do projeto:** PROGO v2.2 entregue, aguardando supervisora. GHK-Cu e COLAGENEW bloqueados aguardando infos da supervisora. Mensagem WhatsApp redigida pra PH mandar.

## 2026-05-11 — Roteiro PROGO v2 + nomenclatura ATIVO vs FÓRMULA (Arte em Manipulação)

- Supervisora da Arte avaliou o PDF do roteiro PROGO v1 e retornou com 4 áudios + 1 texto técnico via WhatsApp.
- **Correção estrutural:** PROGO é **ATIVO**, não fórmula combinada — v1 tinha posicionado errado. Reescrita gira em torno do ativo + 3 mecanismos de ação (saciedade, controle da glicose, absorção).
- **Combinado de nomenclatura novo** com a supervisora (vale daqui pra frente em todo lançamento da Arte):
  - **Lançamento de ATIVO** = ativo único sozinho (PROGO)
  - **Lançamento de FÓRMULA** = junção de vários ativos (ex.: Hair Power)
  - **Ativo principal dentro de fórmula** = campanha em cima do ativo principal
- **Tensão de voz resolvida:** voice-checklist proíbe siglas técnicas (GLP-1/GIP/GLP-2); supervisora pediu foco nelas. Solução: no áudio falado entram traduções (saciedade real, controle da glicose, absorção dos nutrientes do pouco que come). Siglas podem aparecer só em texto de tela como complemento, sempre com tradução ao lado. Decisão documentada no roteiro.
- **Claim "único no mercado com GLP-2"** incorporado como diferencial principal — validado pela supervisora.
- **Ângulo novo** — "sozinho ou potencializa caneta emagrecedora" abre 2 públicos.
- **GHK-Cu marcado pra reclassificação** — pela lógica nova ele também é ATIVO (peptídeo de cobre sozinho), não fórmula. Pendência aberta no OPEN-QUESTIONS do cliente pra alinhar com supervisora.
- **Memória persistente nova:** `feedback_lone_lancamento_ativo_vs_formula.md` — regra de nomenclatura aplicável a todos os clientes da Lone (ativo vs fórmula é jargão da farmácia de manipulação, mas o princípio "campanha gira em torno do que está sendo realmente vendido, não do conceito genérico" vale como heurística geral).

Material bruto preservado em [clients/arte-em-manipulacao/referencias/2026-05-11-feedback-supervisora-progo.md](../clients/arte-em-manipulacao/referencias/2026-05-11-feedback-supervisora-progo.md). Próximo passo: PH manda v2 pra supervisora → após aprovação, gerar HTML e exportar PDF.

## 2026-05-06 — Correção de atribuição de produtos + revisão de estratégia + 3 roteiros reescritos

- **Correção crítica:** PH pesquisou e corrigiu a atribuição dos 3 lançamentos da Arte em Manipulação:
  - **PROGO** = emagrecimento (peptídeo bioativo de salmão, GLP-1/GIP/GLP-2, dose 1,5g/dia)
  - **GHK-CU** = colágeno/regeneração tópica (peptídeo de cobre, sérum/creme — uso tópico apenas no Brasil)
  - **COLAGENEW** = skin care (sem info pública — supervisora preenche)
- **Reels de lançamento são esporádicos** — não ocupam mais as quartas do calendário regular. Saem na semana em que cada produto for liberado pelo cliente. Estratégia de maio reescrita.
- **Carrosséis em baixa frequência** — preferência por post estático focado em venda nas sextas. No mês de maio: 1 carrossel apenas (sex 29/05 — prova social com prints).
- **Estrutura nova de roteiro de lançamento** (definida por PH): apresentação → dor direta → benefício em branco (supervisora preenche) → CTA. Os 3 roteiros foram reescritos seguindo essa estrutura.
- **Auto-save de contexto** — regra reforçada explicitamente no CLAUDE.md como "regra principal" do projeto. Memória persistente criada para garantir aplicação em conversas futuras.
- 3 memórias adicionais salvas: Reels de lançamento esporádicos, carrosséis baixa frequência, auto-save de contexto.
- Roteiros agora em `clients/arte-em-manipulacao/conteudo/roteiros/` com nome sem data (`lancamento-<produto>.md`) — vão receber data no momento da publicação.

## 2026-05-06 — Playbook Lone integrado + Estratégia maio + 3 roteiros entregues

- PH enviou o **Playbook Social Media da Lone Mídia** (PDF). Documento virou regra mãe do projeto.
- Salvo em [shared/playbook-lone-midia.md](../shared/playbook-lone-midia.md).
- [CLAUDE.md](../CLAUDE.md) atualizado com seção do playbook (estrutura seg/qua/sex, mix de conteúdo, estrutura de roteiro, fluxo designer, validação, erros inaceitáveis).
- 4 memórias de feedback adicionadas (estrutura postagens, filosofia/validação, estrutura roteiro vídeo, fluxo designer).
- Template `shared/templates/roteiro-video.md` atualizado para estrutura oficial Lone (gancho → dor → solução → benefícios → CTA).
- Print da Isabella (cliente) com 3 lançamentos (GHK-CU, COLAGENEW, PROGO) salvo em referencias do cliente.
- **Estratégia maio 2026 entregue** em [clients/arte-em-manipulacao/estrategia/2026-05.md](../clients/arte-em-manipulacao/estrategia/2026-05.md) — calendário dia-a-dia com 12 posts, mix de conteúdo balanceado e encaixe dos 3 lançamentos nas quartas restantes.
- **3 roteiros de Reels entregues** em `clients/arte-em-manipulacao/conteudo/roteiros/` para 13/05, 20/05 e 27/05 — esqueleto narrativo completo, com placeholders nos campos técnicos que precisam de validação da farmacêutica.
- ⚠️ **GHK-CU** flagado como crítico — peptídeo de cobre não é classicamente emagrecimento; precisa confirmação de composição antes de gravar.

## 2026-05-06 — Arte em Manipulação: discovery fechado, pronto para estratégia

- 2ª rodada de respostas de PH fechou as 3 perguntas críticas + as importantes.
- Decisões consolidadas: **plano = 12 posts/mês com quarta sempre Reels**, plataforma única Instagram, persona misto 20-50 (maioria mulher), Dia das Mães entra, aprovação por supervisora via WhatsApp.
- Restrição **Viva Mídia removida** — era a agência anterior, período encerrado.
- Nova regra: **não citar tempo de atendimento** em peças (vetado por PH).
- context.md promovido a **versão 1.0** (pronto para gerar estratégia).
- Pendências residuais não bloqueantes em [clients/arte-em-manipulacao/OPEN-QUESTIONS.md](../clients/arte-em-manipulacao/OPEN-QUESTIONS.md) (ex.: posts já entregues vs faltam, pauta dos vídeos da sexta, dias da semana além da quarta).

## 2026-05-07 — Protocolo visual: análise de perfil + Pinterest como referência

PH apontou 2 gaps estruturais na primeira rodada de planejamento da Arte: análise do perfil real do cliente foi pulada (resultou em tratar ArteVet como "estreia" quando já estava no feed há tempo) e Pinterest não estava sendo usado como fonte de referência visual (resultou em risco de "cara de IA" no design).

Ambos viraram protocolo automático:
- Criado `shared/visual-reference-checklist.md` — análise mensal do perfil do cliente (registro em `clients/<slug>/referencias/YYYY-MM-DD-analise-perfil-instagram.md`) + Pinterest como busca obrigatória pré-brief de design.
- Gatilho no CLAUDE.md aponta pro checklist visual antes de fechar estratégia ou mandar brief.
- Memória persistente `feedback_analise_perfil_e_pinterest.md` codifica o protocolo pra valer em todos os clientes.

Aplicação imediata na Arte: análise registrada em `clients/arte-em-manipulacao/referencias/2026-05-07-analise-perfil-instagram.md` (mix de formatos, paleta, tipografia serif, ArteVet já em rotação, linha própria com identidade nomeada, frases-âncora memoráveis). Calendário de maio/junho ajustado: ArteVet vira continuidade (25/05 + 05/06), Namorados vira tarefa a validar com supervisora.

## 2026-05-07 — Planejamento Arte estendido pra 12/06 + template de briefing mensal

- Calendário de Arte em Manipulação fechado pra janela 8/05 → 12/06 (16 posts).
- Mini-campanha de Dia dos Namorados estruturada (3 peças, 08-12/06) com 2 Reels — 1 com gancho de dúvida ("em dúvida do que dar pra sua namorada?") + 1 de venda direta com urgência.
- ArteVet estreia oficialmente em 05/06 como pilar adicional na pauta.
- Template de briefing mensal criado em `clients/arte-em-manipulacao/referencias/briefing-mensal-template.md` — primeiro envio à supervisora entre 22-25/05 conforme playbook §3.1. Padrão replicável pra outros clientes.
- Decisão Lone confirmada: removidas datas comemorativas que não fazem sentido pro perfil do cliente (Hipertensão, Família) — só usar sazonalidade quando bate com público real.

## 2026-05-07 — Meta-padrão de aprendizado + voice-quality-checklist canônico

PH propôs (e validei a abordagem) um **meta-padrão estrutural** pro projeto: sempre que aparecer alinhamento ou aprendizado novo que vai se aplicar repetidamente, transformar em **arquivo dedicado + gatilho curto no CLAUDE.md**. Não acumular regras estruturais em CLAUDE.md (vira lixo) nem em memória solta (não muda comportamento de skills).

Aplicado pela primeira vez agora:
- Criado `shared/voice-quality-checklist.md` consolidando 4 partes: vícios a banir (antropomorfização, construções literárias, jargão publicitário, save/share-bait com julgamento, jargão técnico, analogias forçadas) · padrões que funcionam (validados por PH) · princípios estruturais (variar estrutura, usar skills `*-sms`, hook entre 9 padrões, CTA único) · checklist de revisão pré-entrega.
- Adicionada seção curta no CLAUDE.md ("Filtros de qualidade de copy") apontando pro arquivo + resumo de 7 itens-tópico.
- Memória persistente nova `feedback_consolidar_aprendizados_em_arquivos.md` codifica o meta-padrão pra valer em iterações futuras (com tabela de roteamento: shared/ vs clients/ vs memória).
- Memória `feedback_linguagem_comum_sem_analogia.md` re-apontada pra ser índice do checklist canônico (em vez de duplicar conteúdo).

Razão de existir: skills `*-sms` foram desenhadas em inglês com premissas culturais distintas — output da skill já vem viciado e só o filtro em PT-BR brasileiro corrige. Documento canônico + gatilho no CLAUDE.md força leitura automática antes de toda entrega de copy.

## 2026-05-06 — Discovery Arte em Manipulação (parcial) + banco histórico Lone

- PH enviou: 2 prints Google Maps das unidades, 4 posts atuais (identidade visual), transcrição da reunião de diagnóstico (Briefing.md), anotações pós-reunião e o banco consolidado de **29 briefings** da Lone Mídia.
- Material arquivado:
  - [clients/arte-em-manipulacao/referencias/2026-05-06-reuniao-diagnostico.md](../clients/arte-em-manipulacao/referencias/2026-05-06-reuniao-diagnostico.md)
  - [clients/arte-em-manipulacao/referencias/2026-05-06-google-maps-unidades.md](../clients/arte-em-manipulacao/referencias/2026-05-06-google-maps-unidades.md)
  - [shared/historico-briefings-lone.md](../shared/historico-briefings-lone.md) — padrões da Lone + lista dos 29 clientes
- BRIEFING.md de Arte em Manipulação preenchido com tudo extraído. Status: 🟡 parcialmente consolidado.
- context.md v0.5 estruturado com identidade, audiência (4 sub-personas), 5 pilares de conteúdo propostos, anti-padrões e compliance Anvisa/CFF.
- Memórias persistentes salvas: padrão de copy Lone, bloqueio Viva Mídia até 26/06, dados operacionais Arte (unidades/convênios/CRM), referência ao histórico Lone.

## 2026-05-06 — Setup inicial do projeto

- Estrutura base criada: [CLAUDE.md](../CLAUDE.md), [docs/](.), [clients/](../clients/), [shared/templates/](../shared/templates/), [.claude/skills/](../.claude/skills/).
- 14 skills do `blacktwist/social-media-skills` instaladas em `.claude/skills/` (cobre fundação, estratégia, criação e análise).
- Regra de redirecionamento documentada: skills `*-sms` leem/escrevem em `clients/<slug>/context.md` em vez de `.agents/social-media-context-sms.md`, para isolar contexto por cliente.
- Cliente inicial: **Arte em Manipulação** (farmácia artesanal). Pasta criada em `clients/arte-em-manipulacao/`. Briefing e contexto pendentes — discovery em andamento com PH.
