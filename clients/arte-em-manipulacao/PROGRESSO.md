# Progresso — Arte em Manipulação

Log datado do trabalho específico desse cliente. Mais recente no topo.

---

## 2026-06-10 — 2 roteiros de Dia dos Namorados (Kit Arte Brisa) + linha própria nova

A gerente respondeu o pedido de "separar um produto pensado pra Namorados" mandando o **Kit completo de Skincare da linha Arte Brisa** (linha própria **nova** — não estava no inventário): sabonete facial de pepino + sérum clareador diurno + sérum clareador noturno. Adicionada em context.md + PADROES § 2.

Pesquisei os benefícios pra fundamentar a copy sem inventar ativo (sabonete de pepino = limpa/refresca/controla brilho/antioxidante; séruns clareadores dia+noite = uniformizam tom + viço + renovação, dia pede protetor solar). Registro + fontes em [referencias/2026-06-10-kit-arte-brisa-namorados.md](referencias/2026-06-10-kit-arte-brisa-namorados.md).

Escritos **2 roteiros de Reels**, alinhados às 2 ideias do PDF da gerente (presente genérico → presente pensado, uso diário, CTA até 12/06):

1. **[Presente pensado pra ela](conteudo/roteiros/2026-06-10-namorados-presente-pensado.md)** — gancho de presente/emocional (~30s). Slot sugerido: 10/06 (qua).
2. **[Kit Arte Brisa](conteudo/roteiros/2026-06-10-namorados-kit-arte-brisa.md)** — produto específico, 3 itens detalhados um por vez (~40s). Slot sugerido: 11/06 (dia extra) ou 12/06.

Aplicado: PADROES (nome completo, "Arte em Manipulação Boutique", "nós", verbo de apresentação § 4.16, marca no final § 4.17, comemorativa direta § 6.1/6.10) + compliance Anvisa (séruns "clareadores" recuados pra "uniformizar tom/viço/renovação", sem prazo/antes-depois). **Aguardando validação da supervisora + farmacêutica** + infos pendentes (nome/preço/desconto/uso) — em [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md).

---

## 2026-05-19 — Versão executiva do plano Mai+Jun em HTML + 7 rodadas de ajuste vindas da supervisora Isabella

PH compartilhou PDF de referência (versão executiva resumida do plano Mai+Jun com 14 páginas, formato bem mais bonito que a versão detalhada de 20 páginas em HTML). Pediu pra reconstruir o source HTML que gera EXATAMENTE esse PDF. Construído em [apresentacoes/2026-05-19-plano-de-conteudo-maio-junho-executivo.html](apresentacoes/2026-05-19-plano-de-conteudo-maio-junho-executivo.html) (~1500 linhas, A4 vertical, Inter sans-serif, paleta #0d1b3d + #1A2DD9 + selos coloridos TOFU/MOFU/BOFU/RESERV.).

Diferença pra versão de 20 páginas: cover dark · 2 peças/página · selo lateral colorido com label vertical · cards de Funil + calendário com células coloridas por tipo. Logo real da Lone (M azul + texto preto) puxada de [shared/identidade-lone/lone-midia-logo-azul-preto.png](../../shared/identidade-lone/lone-midia-logo-azul-preto.png) e versão branca pra cover dark.

**Pra abrir o PDF:** abrir o HTML no navegador → Ctrl+P → destino "Salvar como PDF" → margens "Nenhuma" → desmarcar cabeçalho/rodapé do navegador → tamanho A4.

---

### 7 rodadas de ajuste · supervisora Isabella (áudio + prints WhatsApp)

**1. Nome correto da Boutique — ordem invertida**
- ❌ "Boutique Arte em Manipulação"
- ✅ **"Arte em Manipulação Boutique"** (nessa ordem)
- Aplicado em todas as ocorrências do HTML + atualizado PADROES.md § 1 com nota da supervisora.

**2. Voz: trocar "a gente" por "nós" / conjugação verbal direta**
Supervisora prefere 1ª pessoa do plural sóbria. Aplicado:
- "a gente faz" → "fazemos"
- "a gente cuida" → "cuidamos"
- "a gente trabalha" → "trabalhamos"
- "a gente avalia" → "avaliamos"
- "a gente garante" → "garantimos"
- "a gente acomoda" → "acomodamos"
- "a gente monta" → "montamos"

Casos especiais:
- "A gente fica aqui." (título 22/05) → reformulado pra **"Estamos aqui."** (limpa, direta)
- "A pergunta que a gente mais ouve." (título 24/06) → **"A pergunta que mais ouvimos."**
- "A gente confere a fórmula." (slide 3 de 01/06) → reformulado dentro da nova versão de 6 passos

PADROES.md § 3 atualizado com regra explícita de voz. "A gente" só vale internamente entre PH e Claude — em copy publicada, não aparece.

**3. 25/05 ArteVet — lista correta de animais + tirar "farmacêutica veterinária"**
- ❌ "Cachorro, gato, ou os bichinhos menos comuns"
- ✅ **"Cachorro, gato, animais de grande porte ou não convencionais"** (forma exata pedida)
- ❌ "Manda a receita no WhatsApp que a farmacêutica veterinária te orienta"
- ✅ "Manda a foto da receita no WhatsApp da ArteVet ou passa na unidade pra conversar"

Legenda também robustecida: adicionado bloco "Cada manipulação é avaliada caso a caso, conforme prescrição, com a atenção que o seu animal merece." entre os 2 blocos originais.

PADROES.md § 4.4 atualizado com a nova lista validada + "bichinhos menos comuns" marcado como ❌.

**4. 29/05 — NÃO usar 4,8★ + virar post de feedback**

Motivo da supervisora: concorrentes locais têm 5★, comparativo visual fica desfavorável mesmo com 4,8★ sendo prova social legítima. **Resolução:** trocar nota por **prints/citações reais de avaliações do Google**.

Peça reformulada:
- **Título:** "Quem veio, conta." (era "4,8 ★")
- **Funil:** mantém MOFU
- **Arte:** 2-3 depoimentos reais com aspas grandes + nome abreviado + data + sem ícone de estrelas em massa
- **Pendência (PH):** selecionar depoimentos representativos e validar permissão de uso com a supervisora antes de produzir.
- **Legenda:** robustecida — 3 parágrafos sobre clientes que vêm, voltam, e o porquê de a Arte continuar do jeito que é (atendimento próximo + manipulação cuidadosa).

PADROES.md § 6.7 atualizado: nota de estrelas em destaque agora é ❌. Depoimentos qualitativos passaram a ser o padrão.

Calendário Maio atualizado: "4,8★ Prova social" → "Quem veio, conta".

**5. 01/06 — expandir Como funciona pra 6 passos (lista real da supervisora)**

Versão antiga: 4 slides (capa + 3 passos genéricos).
Versão nova: **7 slides** (capa + 6 passos reais da Arte), texto literal validado pela Isabella no WhatsApp:

| Slide | Conteúdo |
|---|---|
| Capa | "Primeira vez na farmácia de manipulação? Veja como funciona, do começo ao frasco." |
| 2 · Passo 1 | Você chega com a receita |
| 3 · Passo 2 | Pedido fechado no balcão, com atendimento da farmacêutica |
| 4 · Passo 3 | Conferência farmacêutica — ativo por ativo, fórmula por fórmula, dentro do padrão e da dose certa |
| 5 · Passo 4 | Processo de manipulação na bancada |
| 6 · Passo 5 | Rotulagem + nova conferência antes de fechar |
| 7 · Passo 6 (CTA) | Entrega no balcão ou em casa — chama no WhatsApp pra começar |

Legenda também reescrita: foco em "cada fórmula passa por seis etapas, com conferência em cada passo" + convite pra quem nunca manipulou. Mais robusta que a versão anterior.

**6. 24/06 "A pergunta que mais ouvimos" — adaptar falas conforme áudio**

Áudio da supervisora pediu:
- Trocar pergunta de "manipulado faz a mesma coisa" pra **"manipulado tem a mesma ação e eficácia"**
- Manter trocadilho "faz uma ação diferente — não 'melhor', diferente"
- Adicionar dois benefícios concretos: **dose certa pra cada paciente (deficiência específica)** + **praticidade (uma fórmula no lugar de três medicamentos)**

Estrutura nova de 25s:
- 3-8s: "Manipulado tem a mesma ação e eficácia do de prateleira?"
- 8-22s: "Faz uma ação diferente — não 'melhor', diferente. O de prateleira é fórmula pensada pra todo mundo. O manipulado tem a dose certa pra cada paciente, pra deficiência específica que a pessoa tem. E ainda traz praticidade — numa única fórmula dá pra colocar o que normalmente seriam três medicamentos."
- 22-25s: "Avaliamos cada caso. Manda a receita no WhatsApp."

Título da peça também atualizado: "A pergunta que a gente mais ouve." → "A pergunta que mais ouvimos."

**7. 26/06 Mito ou Verdade — tirar "3" da legenda + nova legenda alinhada com padrão robusto**

Versão antiga:
> "3 confusões que a gente ouve toda semana no balcão. Junta tudo num post só pra você não precisar perguntar."
> "Se sobrou dúvida, manda no WhatsApp que a farmacêutica responde."

Versão nova:
> "Algumas confusões aparecem direto no balcão — junta tudo aqui pra você não precisar perguntar."
> "Manipulação é processo cuidadoso: cada fórmula é conferida ativo por ativo, na dose certa pro seu caso. Receita médica depende do produto. Dia a dia ou caso específico — tem fórmula pra ajustar."
> "Se sobrou dúvida, manda no WhatsApp que a farmacêutica responde com atenção."
> "📲 (22) 98871-1426 · Arte em Manipulação Boutique"

Tirou "3" (que numerava as confusões), tirou "a gente", adicionou bloco intermediário que amplia o post além de só repetir o conteúdo dos slides.

---

### Legendas robustecidas (regra nova · PADROES § 5.16)

Supervisora reclamou de legenda rasa em posts estáticos — peças sem voice over precisam carregar mensagem completa na legenda. Robustecidas:

| Peça | Antes | Agora |
|---|---|---|
| 15/05 Pele que reflete cuidado | 1 linha + WhatsApp | 4 blocos: contexto + benefícios concretos + CTA + endereço |
| 18/05 Não precisa de + cápsula | 2 linhas + WhatsApp | 4 blocos: por quê três suplementos não acelera + o que muda + CTA específico |
| 22/05 Estamos aqui | 2 linhas + endereço | 5 blocos: localização + leque de produtos + convite + endereço completo |
| 15/06 Não está na quantidade | 2 linhas + WhatsApp | 4 blocos: dor concreta + frase âncora "não é tomar mais, é tomar o que cabe" + CTA |
| 22/06 Pele no inverno | 2 linhas + WhatsApp | 4 blocos: sintomas concretos da pele no inverno em Araruama + linha + CTA |

PADROES.md § 5.16 adicionado: estrutura mínima de legenda de post estático (contexto/promessa + mecanismo/benefício + CTA firme).

---

### Resumo de arquivos atualizados nessa rodada

- [apresentacoes/2026-05-19-plano-de-conteudo-maio-junho-executivo.html](apresentacoes/2026-05-19-plano-de-conteudo-maio-junho-executivo.html) — HTML novo gerado, depois 7 rodadas de ajuste aplicadas
- [PADROES.md](PADROES.md) — atualizado § 1 (nome correto), § 3 (voz "nós"), § 4.4 (animais), § 6.7 (prova social sem estrelas), § 5.16 (legenda robusta nova)
- [shared/identidade-lone/lone-midia-logo-azul-preto.png](../../shared/identidade-lone/lone-midia-logo-azul-preto.png) — copiado do Drive
- [shared/identidade-lone/lone-midia-logo-branco-azul.png](../../shared/identidade-lone/lone-midia-logo-branco-azul.png) — copiado do Drive (versão cover dark)

**Pendências pra PH:**
- 29/05 "Quem veio, conta" — selecionar 2-3 prints reais de avaliações do Google e validar permissão de uso com a supervisora.
- Toda peça reescrita precisa passar pelo crivo final da Isabella antes de virar arte.

---



## 2026-05-14 — MSE-Funnel-Labs instalado como referência · mapeamento de funil da Arte · anti-IA integrado

PH compartilhou framework `mse-funnel-labs-V2.zip` (Marketing Squad Extremo — 176 arquivos, 18 agents, 21 funis, frameworks Hormozi/Brunson/Walker/Schwartz). Pediu instalação + overview + aplicação no plano da Arte.

**Decisão de instalação:** copiado como **referência** em [shared/mse-funnel-labs/](../../shared/mse-funnel-labs/), NÃO como skill ativa do Claude Code. Motivos:
- CLAUDE.md do MSE conflita com CLAUDE.md da Lone (regras de auto-save, multi-cliente, playbook).
- Framework foi feito pra **infoproduto/lançamento** (PLF, webinar, mentoria). Arte é negócio físico local de balcão — overkill aplicar workflow completo.
- 176 arquivos poluiriam o workspace.

**O que extraí e integrei na Lone:**

1. **Anti-IA Protocol → voice-quality-checklist.md** — adicionada **Parte 5** com os 12 Pecados Capitais da escrita de IA (fragmentação de frases, regra do três obsessiva, expressões acadêmicas, adjetivos genéricos, falsa empatia, fórmulas binárias, simetria perfeita, transições mecânicas etc.) + checklist rápido. Complementa a Parte 1 (vícios específicos de copy de saúde). Vale pra todos os clientes da Lone.

2. **Framework de funil de conteúdo orgânico → [shared/funil-conteudo-organico.md](../../shared/funil-conteudo-organico.md)** — doc novo combinando TOFU/MOFU/BOFU + 5 Níveis de Consciência (Schwartz) + filosofia @laurinha (Gary Vee, Dan Koe, Nicolas Cole, Justin Welsh). Inclui distribuição-alvo (35/35/25-ish), padrão semanal Lone (seg=TOFU / qua=MOFU / sex=BOFU), conceito de conteúdo pilar mensal com 4-6 derivativos.

**Mapeamento aplicado à Arte:** [referencias/2026-05-14-mapeamento-funil-conteudo.md](referencias/2026-05-14-mapeamento-funil-conteudo.md). Análise das 12 peças não-reservadas:
- **TOFU:** 4 peças (33%) — 18/05, 01/06, 05/06, 15/06
- **MOFU:** 5 peças (42%) — 15/05, 20/05, 25/05, 27/05, 03/06
- **BOFU:** 3 peças (25%) — 22/05, 29/05, 17/06

Distribuição saudável. Funil tem progressão lógica. **Não recomendo refazer o plano agora** — está OK depois das várias rodadas de ajuste.

**3 observações pra próximos ciclos:**
1. Falta peça **Product-Aware** (ponte entre Solution-Aware e Most-Aware) — inserir em junho 19+ ou julho.
2. Os 3 Reels orgânicos estão todos em MOFU — Reels é o formato com maior alcance, subaproveita potencial TOFU. Sugestão de ajuste cirúrgico opcional: transformar 27/05 (Saúde da Mulher) em hook TOFU mais provocativo.
3. **Conteúdo pilar mensal duplo já existe:** Reels 20/05 + carrossel 01/06 ("Como sai um frasco da Arte"). Próximo ciclo, planejar derivativos (Stories, post estático isolado, Reels curto recortando pesagem, quote post, carrossel de dúvidas).

**Arquivos criados/atualizados:**
- [shared/mse-funnel-labs/](../../shared/mse-funnel-labs/) — framework completo como referência (176 arquivos)
- [shared/funil-conteudo-organico.md](../../shared/funil-conteudo-organico.md) — framework adaptado pra Lone
- [shared/voice-quality-checklist.md](../../shared/voice-quality-checklist.md) — Parte 5 adicionada com 12 Pecados anti-IA
- [referencias/2026-05-14-mapeamento-funil-conteudo.md](referencias/2026-05-14-mapeamento-funil-conteudo.md) — aplicação à Arte

**Ajuste cirúrgico aplicado no 27/05 (2026-05-14):** Reels Saúde da Mulher saiu de MOFU genérico pra **TOFU com hook contraintuitivo** — "TPM forte não é normal." Cenas reorientadas pra cotidiano de desregulação hormonal. Data Dia da Saúde da Mulher desceu pro CTA.

## 2026-05-14 — 05/06 recuado · 11/06 inserida (produto casal · dia extra) · 22/06 reformulada (cuidado + tópicos)

3 mudanças nesta rodada:

**1. 05/06 ArteVet — recuado pra versão padrão de farmácia magistral veterinária**
PH apontou que minhas afirmações específicas (tamanho/sabor/dose) eram inferência. Pesquisei conteúdo padrão do setor (Gral Animal, Vet Fórmula, Fórmula Animal, Farmabichos etc.) — confirma: peça institucional + "manipula sob prescrição do veterinário" + CTA pra orçamento. Reformulada:
- **Hook (Question):** "Seu pet tem receita do veterinário?"
- **Legenda:** "A ArteVet manipula medicamento veterinário conforme a prescrição do veterinário do seu pet. A farmacêutica responsável avalia cada caso, conversa com você e prepara. Manda a foto da receita no WhatsApp ou passa na nossa unidade."
- Sem afirmar tamanho/sabor/dose — fica genérico mas seguro
- Reclassificação: TOFU → **BOFU venda direta institucional**

**2. 11/06 IDEIA produto pra casal — movida pra dentro da semana de Namorados**
PH pediu pra encaixar na semana de Namorados como dia extra (fora do calendário regular Lone seg/qua/sex). Escolha: **11/06 quinta**, véspera do Dia dos Namorados (12/06). Peça extra fora das 12 contratadas. Continua white label com pendências pra supervisora (nome, indicação, tom, formato, compliance Anvisa).

**3. 22/06 — reformulada pra "cuidado" + tópicos de benefícios + fundo de produtos**
PH pediu pra ampliar de "hidratação" pra "cuidado" e adicionar tópicos de benefícios sobre fundo com produtos da linha. Aplicado:
- **Título:** "Pele no inverno pede cuidado." (era "Pele no inverno tem que se manter hidratada.")
- **Subtítulo:** "Linha de cuidado da pele · Arte em Manipulação."
- **Tópicos:** "Hidrata e segura água por mais tempo · Devolve brilho na pele que ficou opaca · Apoia o cuidado com manchas e acne · Adapta a rotina pra cada tipo de pele"
- **Composição da arte:** foto editorial com produtos da linha dispostos + tipografia serif no topo + tópicos alinhados na metade inferior
- Bloco "Composição da arte" novo na peça pra orientar designer
- Bloco "Tópicos" novo na peça (PH pode trocar/ajustar com supervisora)

**Inconveniente operacional:** Durante a edição, um regex meu apagou indevidamente o final do HTML (peças 12/06, 15/06, 17/06, 22/06, 24/06, 26/06). Reconstruí todas com conteúdo equivalente ao anterior, mantendo decisões anteriores intactas. Page-nums renumerados (cover + 19 peças = 20 páginas).

**Arquivos atualizados:**
- HTML do plano — 05/06 recuado, 11/06 inserida entre 10/06 e 12/06, 22/06 reformulada, page-nums renumerados
- [estrategia/2026-06.md](estrategia/2026-06.md) — linha 11/06 adicionada, 22/06 atualizada
- [referencias/2026-05-14-mapeamento-funil-conteudo.md](referencias/2026-05-14-mapeamento-funil-conteudo.md) — entradas 11/06 e 22/06 atualizadas

**Pendências pra supervisora:**
- 11/06: nome do produto, indicação, tom, formato, compliance Anvisa
- 22/06: confirmar quais benefícios cobrir (hidrata/brilho/manchas/acne) e se há claim específico de algum produto

## 2026-05-14 — 17/06 reformulado: identificação por perfil → Reels de venda direta + captação local

PH não gostou da peça 17/06 ("Tem quem chega aqui..." com 3 perfis). Pediu pra trocar por **Reels de venda direta** com hook bem direto pro público local — listando categorias de produto + WhatsApp/endereço pra capturar atenção.

**Versão nova:**
- **Título:** "Em Araruama, pra cada parte do seu cuidado."
- **Reels 20s** (era 25s)
- **0-3s Hook:** "Em Araruama, você encontra fórmula sob medida pra cada parte do seu cuidado." (fachada da Boutique no fundo, voice over da farmacêutica)
- **3-12s Categorias:** "Pele. Cabelo. Treino. Sono. Hormônio. Saúde do dia a dia." (cortes rápidos da linha própria + bancada, texto na tela rotativo, ritmo crescente)
- **12-17s Apresentação + CTA:** "Tudo aqui na Arte em Manipulação. Chama no WhatsApp ou vem na Boutique do Trade Center."
- **17-20s Tela final:** endereço completo + WhatsApp + selo "Araruama"
- Legenda + hashtags com foco em local

**Reclassificação no funil:** BOFU (identificação) → **BOFU venda direta** (Most-Aware) — agora é peça de captação local sem rodeio.

**Distribuição não mudou** (continua 4 TOFU / 7 MOFU / 4 BOFU).

**Padrão consolidado:**
- ✅ Reels de venda direta com captação local funciona bem na quarta-feira (formato com maior alcance) — combina autoridade (linha de categorias) + endereço explícito
- ✅ Hook com cidade ("Em Araruama") ancora retenção local — pega quem vê o feed sem saber que existe farmácia de manipulação ali

**Arquivos atualizados:**
- HTML do plano — peça 17/06 reformulada inteira
- [estrategia/2026-06.md](estrategia/2026-06.md) — linha 17/06 atualizada
- [referencias/2026-05-14-mapeamento-funil-conteudo.md](referencias/2026-05-14-mapeamento-funil-conteudo.md) — entrada 17/06 atualizada

## 2026-05-14 — Rodada de ajustes: 05/06 recuado · peça casal · 10/06 urgência · 19/06 descartada · 22/06 título · 26/06 Mito vs Verdade

Rodada de revisão crítica do plano. PH apontou múltiplos pontos. Aplicado:

**1. 05/06 ArteVet — recuado pra versão genérica**
PH questionou "isso é algo que de fato a ArteVet faz? da onde tirou essa informação? pode estar errado dms". Reconheci que eu havia inferido "tamanho/sabor/dose certa pra pet" sem confirmação. Recuei a legenda pra versão genérica que só fala "tem solução, manda a receita no WhatsApp". Adicionei bloco "Pendência" na peça pra supervisora confirmar o COMO específico antes de gravar.

**2. Nova peça: 💡 IDEIA em aberto · Produto pra casal**
PH mencionou que a supervisora comentou que fazem produto pra casal (gel/uso íntimo). Criada peça #21 white label com placeholders pra supervisora preencher: nome do produto, indicação, tom desejado, formato, encaixe (campanha Namorados ou avulsa), tratamento Anvisa. Recomendação inicial: encaixar em 10/06 ou 12/06 (dentro de Namorados). Marcada como ideia em aberto separada das peças contratadas.

**3. 10/06 Reels Namorados · Gancho — CTA com urgência + prazo**
PH criticou "Chama no WhatsApp pra gente montar junto" — ficou fraco. Trocado pra **"Vem garantir o presente dela. Campanha até 12 de junho."** Bloco PRODUTO virou PRODUTO+OFERTA (placeholder pra supervisora incluir oferta da campanha com prazo). Cena final ganhou selo "Até 12/06" em destaque.

**4. 19/06 Junho Laranja — descartado**
PH disse "remova isso de junho laranja, não nos interessa". Peça apagada inteira. Junho ficou com 11 peças contratadas (era 12). Déficit de 1 — pode ser preenchido pela ideia em aberto (produto casal) ou peça nova em 29/06.

**5. 22/06 Hidratação inverno — título mais direto**
"Pele de inverno pede mais que água." → **"Pele no inverno tem que se manter hidratada."** Direto, sem hook contraintuitivo forçado.

**6. 26/06 — reformulado de "3 dúvidas" pra "Mito vs Verdade"**
Mesmo objetivo (quebra de objeção operacional) mas formato Mito ✘ / Verdade ✔ mais didático e compartilhável. 3 mitos cobertos: prazo de manipulação (1-2 dias úteis), necessidade de receita médica, escopo (rotina vs caso exótico). Adicionado bloco "Pendência" pra supervisora validar o prazo e a categoria.

**Cover atualizado:** 18 peças planejadas (era 19) + 1 ideia em aberto · 7 Reels · 3 reservadas. Total páginas: 20 (cover + 18 peças + 1 ideia). Page-nums renumerados.

**Distribuição final maio+junho (15 peças mapeadas + 1 ideia):**
- TOFU: 4 (27%) ⚠️ abaixo do target (perdeu 19/06)
- MOFU: 7 (47%) ⚠️ acima do target
- BOFU: 4 (27%) ✅
- Plano ficou MOFU-pesado. Compensar no próximo ciclo com TOFU conectado ao dia-a-dia da Arte (sem nicho TPM, sem datada Junho Laranja).

**Padrões consolidados (vão pro voice-checklist):**
- ❌ Inferir o COMO específico do cliente sem confirmação (lição 05/06)
- ❌ Hook contraintuitivo de dor nichada (que a marca não resolve na rotina principal) em peça comemorativa
- ❌ Peça datada de causa social que não conecta com o negócio do cliente (Junho Laranja era inferência minha)
- ❌ "Apelido" da empresa (Arte sozinho · Boutique do Trade Center) — usar nome completo
- ✅ Campanha datada (Namorados) com CTA de urgência + prazo explícito
- ✅ Mito vs Verdade como formato de quebra de objeção (mais compartilhável que Q&A)
- ✅ Bloco "Pendência (validar)" na peça antes de gravar quando tem afirmação não verificada

**Arquivos atualizados:**
- HTML do plano — todas as 6 mudanças aplicadas + page-nums renumerados + cover atualizado
- [estrategia/2026-06.md](estrategia/2026-06.md) — 19/06 marcada descartada, distribuição refeita (11 peças)
- [referencias/2026-05-14-mapeamento-funil-conteudo.md](referencias/2026-05-14-mapeamento-funil-conteudo.md) — tabela e análise atualizadas (15 peças + 1 ideia)

**Pendências pra supervisora:**
- 05/06 ArteVet: confirmar "tamanho/sabor/dose" + se "cospe comprimido" é a dor mais comum
- 10/06 Namorados: definir oferta específica com prazo
- 21 (ideia casal): nome, indicação, tom, formato, encaixe, compliance Anvisa
- 26/06 Mito vs Verdade: validar prazo "1-2 dias úteis" + categoria de fórmulas que dispensam receita

## 2026-05-14 — 27/05 reformulada: TPM contraintuitivo → homenagem direta + posicionamento de marca

PH apontou problema na peça 27/05 (Reels "TPM forte não é normal"): hook contraintuitivo nichado **desconectou da marca**. TPM forte não é dor central que a Arte em Manipulação resolve no dia-a-dia — é caso específico. Pra peça de data comemorativa, peça de captação por dor nichada cria expectativa que a marca não cumpre na rotina.

**Direção do PH:** comemorativas devem ser **diretas sobre a data**, com tom **simples sobre cuidado + individualidade** — clichê que conecta com a marca em vez de inventar dor pra atrair.

**Reformulada:**
- **Título h1:** "Cuidar de você como se fosse única. Porque é." (frase do PH na conversa)
- **Conceito:** Reels editorial silencioso de 25s · cenas leves de mulheres reais em autocuidado (café, hidratante, espelho, balcão, sacola da Boutique) — sem dramatização, sem dor inventada
- **Virada (texto na tela 15-22s):** "Cuidar de você como se você fosse única. Porque é."
- **Legenda:** "Hoje é Dia Internacional da Saúde da Mulher. A gente trabalha pra que cuidar de você seja simples — do jeito que faz sentido pra você. Porque você é única, e a forma como cada uma cuida da própria saúde também é. Parabéns por estar aqui. Pelo que você é."

**Reclassificação no funil:** TOFU contraintuitivo → **MOFU emocional/posicionamento de marca** (Solution-Aware/Most-Aware). Conecta com o tom existente da Arte ("Vem cá, seu corpo é único", "Autocuidado não é excesso", "A felicidade começa quando você decide cuidar de si").

**Distribuição maio+junho atualizada (16 peças mapeadas):**
- TOFU: 5 (31%) — ↓ 1 vs versão TPM
- MOFU: 7 (44%) — ↑ 1
- BOFU: 4 (25%) — igual

⚠️ **Nenhum Reels TOFU agora.** Reels (formato de maior alcance) ficou todo em MOFU/BOFU. Sinalizado pra próximo ciclo considerar 1 Reels TOFU contraintuitivo — mas conectado ao que a Arte resolve no dia-a-dia (ortopedia/wellness/pré-treino), não nichado.

**Padrão consolidado:**
- ❌ Peça de data comemorativa com hook contraintuitivo de dor nichada (desconecta a marca)
- ✅ Peça comemorativa = direta sobre a data + tom de marca (autocuidado, individualidade) — clichê que conecta vale mais que provocação que afasta

**Arquivos atualizados:**
- HTML do plano — 27/05 reformulada inteira (título + conceito + roteiro + legenda + hashtags)
- [estrategia/2026-05.md](estrategia/2026-05.md) — linha 27/05 atualizada + pendência de gravação reformulada · distribuição maio refeita (1/4/2)
- [referencias/2026-05-14-mapeamento-funil-conteudo.md](referencias/2026-05-14-mapeamento-funil-conteudo.md) — entrada 27/05 + análise dos Reels (todos MOFU/BOFU agora)

## 2026-05-14 — Correções de nome da marca + reformulação 20/05 ("Receita especial")

PH apontou 3 correções:

1. **Nome da empresa não tem apelido** — todas as ocorrências de "Arte" sozinha viraram "Arte em Manipulação". 9 ocorrências corrigidas globalmente via regex (peças e CENAs). Casos: "frasco da Arte", "bancada da Arte", "logo Arte", "Aqui na Arte a gente", "Linha de hidratação da Arte".

2. **"Boutique do Trade Center" é o LOCAL, não o nome** — todas as 12 ocorrências viraram "Boutique Arte em Manipulação". Trade Center continua no endereço completo quando aplicável (Av. John Kennedy, 82 · Loja 13 · Trade Center) — aí faz sentido como referência de localização.

3. **Peça 20/05 reformulada — virou "Receita especial para a @[cliente]"** (PH mandou direção). Conceito novo:
   - Reels highlight curto (~15s, era 30s silencioso longo)
   - Texto na tela: "Receita especial para a @[nome ou @ do cliente]"
   - Highlight da preparação real (não mais sequência didática completa) — cortes rápidos dos melhores frames de pesagem/mistura/etiqueta com nome
   - O Reels é o próprio video de entrega — pode virar **formato recorrente** (toda quarta, uma "receita especial" diferente)
   - Awareness sobe pra **Product-Aware/Most-Aware** (era Solution-Aware) — pega quem já conhece a marca e mostra prova de personalização real
   - Fase do funil: **MOFU/BOFU** (era MOFU puro)
   - **Pendência crítica:** autorização escrita do cliente pra usar nome/@ na peça (LGPD)

**Arquivos atualizados:**
- HTML do plano — peça 20/05 reformulada + substituições globais de nome
- [estrategia/2026-05.md](estrategia/2026-05.md) — linha do 20/05 atualizada + pendência LGPD adicionada
- [referencias/2026-05-14-mapeamento-funil-conteudo.md](referencias/2026-05-14-mapeamento-funil-conteudo.md) — entrada 20/05 atualizada

**Padrões consolidados (vão pro voice-checklist):**
- ❌ Apelidar "Arte em Manipulação" como só "Arte"
- ❌ Confundir local ("Trade Center") com nome do estabelecimento ("Boutique Arte em Manipulação")
- ✅ Reels de bastidores pode ser highlight curto (15s) com nome do cliente, em vez de sequência didática longa

## 2026-05-14 — Replanejamento completo maio+junho com framework de funil aplicado · 19 peças

PH pediu: aplicar o framework de funil em **maio + junho inteiros** com decisões já validadas (sem vícios de "personalização", "média da prateleira", "tudo é manipulado", "pet como objeto"; com refs Pinterest ancoradas; cobrindo prateleira + linha própria + manipulação).

**Resultado:** 19 peças completas, janela 15/05 → 26/06.

**4 peças novas adicionadas pra fechar junho:**

| Data | Tema | Hook | Fase | Awareness |
|---|---|---|---|---|
| **19/06 sex** | Junho Laranja / anemia | "Cansaço que não passa não é só falta de sono." | TOFU | Problem-Aware |
| **22/06 seg** | Hidratação inverno (Linha própria) | "Pele de inverno pede mais que água." | MOFU | Solution-Aware |
| **24/06 qua · Reels** | Farmacêutica responde dúvida | "Manipulado faz a mesma coisa que o de prateleira?" | MOFU | **Product-Aware ⭐** |
| **26/06 sex · Carrossel** | 3 dúvidas comuns | "3 dúvidas que a gente mais ouve." | BOFU | **Product-Aware ⭐** |

**Por que essas 4:**
- 19/06 — gancho contraintuitivo + data sazonal (Junho Laranja) = atração forte de quem não pensava em manipulação
- 22/06 — junho é inverno, pele resseca = momento natural pra linha própria (sem cair em "SUA fórmula")
- 24/06 — fecha o gap de Product-Aware apontado no mapeamento (era zero, agora tem 2 peças). Quebra objeção mais comum ("manipulado é diferente?") sem desmerecer prateleira
- 26/06 — 3 dúvidas operacionais que travam quem hesita: hora de começar, receita, prazo

**Distribuição final maio+junho (16 peças mapeadas, 3 Namorados reservados):**
- TOFU: 6 (37%) ✅
- MOFU: 6 (37%) ✅
- BOFU: 4 (25%) ✅
- Product-Aware ganhou 2 peças = gap fechado

**Arquivos atualizados:**
- [estrategia/2026-05.md](estrategia/2026-05.md) — 7 peças viáveis maio (15-29/05) com mapeamento de funil incorporado
- [estrategia/2026-06.md](estrategia/2026-06.md) — 12 peças junho completas (1-26/06), incluindo 4 novas + 3 Namorados reservados + 2 remanejadas de maio
- [apresentacoes/2026-05-07-plano-de-conteudo-maio-junho.html](apresentacoes/2026-05-07-plano-de-conteudo-maio-junho.html) — cover atualizado (19 peças · 6 Reels · 3 reservadas · janela 15/05→26/06) · 4 peças novas adicionadas no fim · todos os 19 page-nums renumerados pra "/ 20"
- [referencias/2026-05-14-mapeamento-funil-conteudo.md](referencias/2026-05-14-mapeamento-funil-conteudo.md) — tabela expandida pra 16 peças · análise por Awareness Level · análise dos 6 Reels distribuídos pelo funil
- PROGRESSO (este)

**Pendências pra produção (juntas as 4 novas):**
- 22/06 — supervisora indicar produto-foco da linha de hidratação
- 24/06 — agendar gravação Reels com farmacêutica (se ela não topar câmera, alternativa: narração em off + texto na tela)
- Compliance Anvisa/CFF em 19/06 (anemia) e 27/05 (TPM) — formato "pode ser" + indicação de avaliação profissional, sem diagnóstico/cura

## 2026-05-14 — MSE-Funnel-Labs instalado como referência · mapeamento de funil da Arte · anti-IA integrado

## 2026-05-14 — Correção: copy não pode excluir prateleira/linha própria pronta

PH apontou vício novo no plano refeito: várias peças davam a entender que **TUDO** na Arte é manipulação personalizada. A farmácia vende três coisas:
- **Fórmulas manipuladas** (personalizadas com receita)
- **Linha própria** (Cacau Beauty, Plant Protein, Lip Tinted, Melatonina, Creme Hidratante — produtos consolidados da casa)
- **Fórmulas consolidadas no mercado** (genéricos, alopáticos, fitoterápicos prontos)

A copy estava negando a prateleira/pronto (ex.: "não sai de prateleira", "Manipulação é o oposto"). Mentira.

**Direção PH:** não precisa explicitar a lista dos 3 tipos. Comunicação simples e direta que **abraça** os 3, sem listar e sem excluir.

**6 correções aplicadas:**

| Peça | Antes | Depois |
|---|---|---|
| 01/06 carrossel slide 3 | "Cada ingrediente é pesado, ajustado e manipulado na bancada — **não sai de prateleira**." | "**Quando precisa manipular**, cada ingrediente é pesado e ajustado na bancada antes de virar o seu frasco." |
| 22/05 Boutique legenda | "Aqui a gente manipula remédio pra família e pra pet." | "Tem o que sua família e seu pet precisam — passa pra conhecer ou chama no WhatsApp." |
| 25/05 ArteVet legenda | "A gente faz fórmula no porte, no sabor e na dose que cabe pro seu pet" | "A gente cuida da receita que o veterinário passou." |
| 18/05 Pré-treino legenda | "Pré-treino que funciona tem **dose calibrada pro seu peso e pro tipo de treino**" | "O que muda é tomar o pré-treino certo, na dose certa pra você." |
| 27/05 Reels (13-20s) | "Pra cada uma, **uma fórmula**." | "Pra cada momento, **o cuidado certo**." |
| 15/06 Manipulado≠Industrializado | "**Manipulação é o oposto** — uma fórmula só, ajustada." | "Às vezes, uma fórmula manipulada — pensada pro seu caso — resolve o que três da prateleira não resolveram." |

**Padrão consolidado (vai pro voice-checklist):**
- ❌ Frases que NEGAM prateleira/pronto ("não sai de prateleira", "Manipulação é o oposto", "Aqui a gente manipula" como se fosse só isso)
- ❌ Frases que dão a entender que TODO produto é manipulado/personalizado
- ✅ Abraçar o leque sem listar — "tem o que você precisa" / "cuida da receita" / "às vezes manipulado resolve"
- ✅ Quando a peça é especificamente sobre manipulação, falar dela sem desmerecer o resto

## 2026-05-14 — Plano de conteúdo refeito · vícios "textão + personalização" eliminados · referências Pinterest aplicadas literalmente

PH apontou 4 problemas no plano de conteúdo de maio/junho:

1. **Brief de arte sobrava** em todas as 15 páginas → tirado de todas via regex global.
2. **22/05 Boutique** com hook "Você passa todo dia em frente à Câmara dos Vereadores?" pressupõe rotina específica. Quem não passa fica de fora.
3. **01/06** com título "Vai assim" ficou estranho/raso.
4. **05/06 ArteVet** com "Pet bom é pet com receita certa" tratava bicho como objeto/carro — desumano. (Crítica forte do PH: "ninguém fala 'meu pet tá bom'".)

E uma direção maior: muitas peças caíam em **"textão + se vendendo + personalização repetitiva"** ("SUA pele · SUA fórmula", "fórmula sai diferente pra cada um", "média da prateleira"). PH pediu pra usar as **referências Pinterest validadas** como ponto de partida — adaptar literalmente o layout/estrutura e só trocar a copy.

**3 ajustes diretos:**
- **22/05 Boutique** → "A gente fica aqui." Layout estilo template farmácia digital (VidaMed/SmartCare). Foto da fachada + endereço grande, sem hook que pressupõe rotina.
- **01/06 Primeira vez** → reformulado pra carrossel 4 slides com capa "Primeira vez na farmácia de manipulação? Veja como funciona." Inspirado em educativo-saude/04-eduarda-dendena (capa de arrasta).
- **05/06 ArteVet** → "Toda vez ele cospe o comprimido." Tom afetivo, dor concreta (comprimido grande, sabor ruim), oferece saída sem tratar pet como categoria.

**9 peças reescritas com referência Pinterest ancorada:**

| Peça | Hook/título antes | Reescrita ancorada em |
|---|---|---|
| 15/05 Dermocosmético | "SUA pele · SUA fórmula" + "A pele de toda mulher é diferente" | **skincare-premium/01-sorae** → "Pele que reflete cuidado." + "Sem moda, sem promessa. Só resultado." |
| 18/05 Pré-treino | "Pré-treino genérico não foi feito pra você" | **hooks-fortes/01-amanda-mil-suplementos** → "Você não precisa de mais cápsula. / Talvez precise da dose certa." |
| 20/05 Reels Farmacêutica | "Como uma fórmula sai diferente pra cada pessoa?" + "É processo, não fábrica" | Reels silencioso de processo (sem voice over moralizando) — receita/balança/equipamento/etiqueta. Imagem leva a mensagem. |
| 25/05 ArteVet apresentação | "Seu pet também é único" + "remédio é o mesmo de todo bicho" | **produto-editorial/05-vitaforce-aesthetic** → "ArteVet. / Remédio manipulado pro seu bichinho." Lifestyle simples, sem moralizar. |
| 27/05 Reels Saúde da Mulher | "O corpo de mulher precisa de coisa que o corpo médio não precisa" + lista textão de fases | **wellness-marca/02-hers-thicker-fuller-hair** → editorial silencioso de 4 cenas + corte no produto. Trilha emocional, sem voice over explicando. |
| 29/05 Prova social Google | "193 avaliações. 4,8 estrelas. E quase nenhum manipulado é igual." | **skincare-premium/02-versed-purist-prova-social** → "4,8 ★" gigante + "193 avaliações no Google" + 1-2 prints reais. Tipografia limpa, sem moralizar. |
| 03/06 Reels Bastidores | "Esse processo virou rotina nossa. Pra você, vira resultado." | Refocado no **humano** (farmacêutica trabalhando, troca de olhar com cliente) pra diferenciar do Reels 20/05 (focado no processo do frasco). Sem "pra você vira resultado". |
| 15/06 Manipulado ≠ Industrializado | "Manipulado e industrializado não são a mesma coisa. E a diferença muda o resultado" + "dose ajustada pra você" | **produto-editorial/06-amanda-segredo-quantidade-potes** → "O segredo não está na quantidade. / Está em qual cabe pra você." Hook contraintuitivo validado. |
| 17/06 Reels Quem entra aqui | "Cada um tem uma história. E a fórmula sai diferente pra cada um." + "É por isso que existe farmácia de manipulação." | 3 perfis concretos sem narrar "fórmula sai diferente". A imagem (3 frascos com 3 nomes diferentes saindo da bancada) leva. |

**Padrões consolidados nesta rodada (vão pro voice-checklist na próxima atualização):**
- ❌ "SUA pele / SUA fórmula" — repetir personalização vira clichê
- ❌ "média da prateleira" / "corpo médio" — frio, moralizante
- ❌ "fórmula sai diferente pra cada um" — vício de venda
- ❌ Tratar pet como categoria/objeto ("pet bom", "todo bicho") — pet é família
- ❌ Hook que pressupõe rotina específica do leitor ("Você passa todo dia...")
- ✅ Adaptar referência Pinterest literalmente — pegar o que já é validado e só trocar copy
- ✅ Reels silencioso quando a imagem leva a mensagem (sem voice over explicando)
- ✅ Dor concreta (cena específica) > diagnóstico genérico ("personalização")

**Arquivos atualizados:**
- [apresentacoes/2026-05-07-plano-de-conteudo-maio-junho.html](apresentacoes/2026-05-07-plano-de-conteudo-maio-junho.html) — 12 das 15 peças reescritas (sobram só 3 Namorados reservados + 0). Brief de arte removido.

## 2026-05-14 — Plano de conteúdo replanejado · 3 peças removidas/remanejadas de maio

PH informou que **nenhuma peça planejada do PDF foi produzida até hoje**. Replanejamento aplicado ao HTML/PDF do plano de conteúdo + estratégias mensais:

**3 peças que estavam antes de 14/05:**
- ❌ **08/05 (Dia das Mães)** — descartada. Data passou (Mães foi 10/05) e o ângulo não cabe remanejamento. Apagada do PDF.
- 🔄 **11/05 (Manipulado ≠ Industrializado)** — remanejada pra **15/06 (segunda)**. Mantém formato (post estático Mon).
- 🔄 **13/05 (Reels Quem entra aqui)** — remanejada pra **17/06 (quarta)**. Mantém formato (Reels Wed).

**Mudanças no HTML/PDF [apresentacoes/2026-05-07-plano-de-conteudo-maio-junho.html](apresentacoes/2026-05-07-plano-de-conteudo-maio-junho.html):**
- Capa: título "Maio + Junho 2026" agora em branco (estava preto, regredia no fundo gradient escuro).
- Capa: subtítulo agora "Janela 15/05 → 17/06 · 15 peças" + número grande "15" (era 16).
- 3 seções de peças deletadas/movidas. PDF passou de 17 pra 16 páginas. Todos os page-nums no rodapé renumerados.

**Mudanças em [estrategia/2026-05.md](estrategia/2026-05.md):**
- Status do mês revisado pra 🔴 — calendário agora mostra 1 publicado + 1 atrasado + 3 descartadas/remanejadas + 7 viáveis = **9 posts efetivos de 12 contratados**. Sinalizado pro PH alinhar com gestão se aceita o déficit ou tenta compactar produção.
- Mix de maio enfraqueceu (perdeu peça emocional de Mães + os educativos/posicionamento foram pra junho).

**Mudanças em [estrategia/2026-06.md](estrategia/2026-06.md):**
- Janela parcial estendida pra 1-17/06 (era 1-12/06). 8 posts planejados (era 6).
- Mix melhorou com as 2 remanejadas (+1 educativo, +1 posicionamento, +1 prova social).
- Calendário restante reduzido de 7 pra 5 peças (19/06 em diante).

**Pra exportar PDF novo:** abrir o HTML no navegador → Ctrl+P → Salvar como PDF → orientação Retrato → marcar "Gráficos de plano de fundo".

## 2026-05-14 — Roteiro PROGO v3 · Take 3 reescrito pela supervisora · Variante B ativada

**Status do PROGO:** 🟡 v3 fechado do lado da Lone. Aguardando 2 aprovações antes de gravar: (1) supervisora valida o roteiro v3 + duração estendida e (2) farmacêutica responsável valida os 3 claims novos de compliance.

**O que aconteceu:**

A supervisora avaliou o PDF v2.2 (que tinha as 3 funções **traduzidas** pro consumidor — saciedade real / controle da glicose / absorção do pouco que come, sem siglas) e mandou via WhatsApp o texto que ela quer pro **Take 3 (Tripla Ação)**, agora com as siglas explícitas e descrições mais técnicas:

- **GIP** — atua no metabolismo, auxiliando na queima de calorias e no controle glicêmico
- **GLP-1** — aumenta a saciedade e reduz a fome, agindo direto nos receptores que liberam sinais de saciedade, **similar às "canetinhas emagrecedoras"**
- **GLP-2** — melhora a absorção de nutrientes e atua na saúde intestinal, **combatendo a inflamação de dentro pra fora**

Material bruto preservado em [referencias/2026-05-14-feedback-supervisora-progo-take3.md](referencias/2026-05-14-feedback-supervisora-progo-take3.md).

**Decisão estratégica — Variante B ativada:**

A v2 do roteiro já tinha previsto esse cenário: *"Se a supervisora insistir nas siglas faladas no áudio, alinhar com PH antes de gravar — pode pedir variante com siglas como opção B."* Como ela escreveu o texto técnico, a Variante B foi acionada. **Siglas entram no áudio falado nesta peça específica (PROGO).** Vale só pro PROGO — regra geral da Lone (sem jargão) continua válida pros outros roteiros.

**O que entreguei (v3):**

1. **Roteiro .md atualizado** ([conteudo/roteiros/lancamento-progo.md](conteudo/roteiros/lancamento-progo.md)) — Take 3 totalmente reescrito com texto da supervisora preservado fielmente (pequenas adaptações pra ficar speakable). Tempos recalculados (Take 3 vai de 11s pra 25s · Reels passa de 30s pra ~45s). Nova seção "Validação pós-feedback" listando os 3 claims pra revisar com a farmacêutica. Seção "Tensão de voz" atualizada documentando o histórico das 3 rodadas e a ativação da Variante B.

2. **HTML novo** ([apresentacoes/2026-05-14-roteiro-progo-v3.html](apresentacoes/2026-05-14-roteiro-progo-v3.html)) — peça pra PDF, 2 páginas. Cards de tripla ação agora horizontais (sigla à esquerda + descrição à direita, mais espaço por card). Página 2 ganhou **caixa de alerta amarela** prominente com os 3 itens de compliance pra validar antes de gravar + checagem de duração estendida. Legenda atualizada. O HTML v2.2 fica preservado como arquivo histórico (foi o que a supervisora avaliou).

3. **Legenda do post** refeita pra mirar o áudio — agora também cita as siglas com a função ao lado. Hashtag #Saciedade trocada por #GLP1.

**3 claims pra validar com a farmacêutica/RT antes de gravar:**

- "Auxiliando na **queima de calorias**" (GIP) — termo mais agressivo que "controle de peso".
- "**Similar às canetinhas emagrecedoras**" (GLP-1) — comparação direta com medicação injetável (semaglutida/tirzepatida). Pode ser lida como equivalência terapêutica.
- "**Combatendo a inflamação** de dentro pra fora" (GLP-2) — claim de ação anti-inflamatória.

Se algum desses pedir adaptação, fechamos versão alternativa documentada no roteiro antes de gravar.

**Próximos passos:**

- PH manda mensagem WhatsApp + PDF v3 pra supervisora (aprovação do roteiro completo + ok pra duração estendida).
- PH valida os 3 claims com a farmacêutica responsável.
- Se passar nas 2 validações → gravar.
- Se algum claim cair, ajustar o texto desse mecanismo específico e republicar PDF.

## 2026-05-11 — Roteiro PROGO v2.2 fechado + HTML/PDF entregue · aguardando supervisora

**Status do PROGO:** 🟢 Fechado v2.2 do lado da Lone. Aguardando aprovação final da supervisora pra liberar gravação.

**O que aconteceu nesta sessão (rodada de revisão pós-feedback):**

1. **v2 → v2.1:** PH refinou a fala da dor — passou pra 2ª pessoa ("Você sente..."), tornou explícito "caneta emagrecedora" e fechou com frase mais positiva ("também é o seu corpo trabalhar pra alcançar esse objetivo").

2. **v2.1 → v2.2 (mudança estrutural):** PH reorganizou a ordem dos blocos:
   - **Dor desceu pro fim** como "Identificação" e encadeia direto no CTA: *"Se você sente X, Y, Z... O PROGO pode ser pra você! Chama a gente no WhatsApp..."*
   - **Tripla ação subiu** pra logo depois da apresentação (8-19s).
   - **CTA reescrito:** "O PROGO pode ser pra você! Chama a gente no WhatsApp agora ou vem na Boutique do Trade Center."
   - Inverte o padrão clássico do playbook (gancho→dor→solução→benefícios→CTA → gancho→solução→benefícios→identificação→CTA). Funciona como **"convite por identificação"** no fechamento. Decisão consciente, registrada no roteiro.

3. **Ajustes finais:** tirado o "ainda" da identificação ("come pouco e não vê resultado") + removida a seção "Observações de gravação" do HTML/PDF (continua só no .md interno).

**Entregáveis:**
- [conteudo/roteiros/lancamento-progo.md](conteudo/roteiros/lancamento-progo.md) — v2.2 com estrutura nova + histórico de revisões completo.
- `apresentacoes/2026-05-11-roteiro-progo-v2.html` — peça final clean da v2.2 (2 páginas: timeline + legenda/hashtags). **Apagado em 2026-05-14** após ser substituído pelo v3.
- Mensagem WhatsApp pra mandar pra supervisora (já redigida) cobrindo as 2 pendências: GHK-Cu (confirmar ATIVO + benefício) e COLAGENEW (o que é + benefício).

**Análise do processo — o que aprendi nesta rodada:**

Detalhei na resposta ao PH e propaguei pros arquivos certos:

- **Voice-quality-checklist atualizado** com 3 itens novos (vício § 1.7 "claim virou persona", padrão alternativo § 2.7 "convite por identificação", princípio § 3.6 "validar linha-a-linha pós-feedback") + 2 itens no checklist de revisão. Histórico de calibração registrado.
- **Template `shared/templates/roteiro-video.md` atualizado** com: campo "Tipo de lançamento" no header, escolha consciente de estrutura (clássica vs alternativa) no topo, seções "Tensão de voz", "Histórico de revisões", "Validação pós-feedback do cliente" + nota explícita de que "Observações para gravação" fica só no .md.
- **3 memórias persistentes criadas:** `feedback_validar_linha_a_linha_pos_feedback.md`, `feedback_estrutura_convite_por_identificacao.md`, `feedback_pdf_cliente_clean_obs_no_md.md`. Index atualizado.

**Próximos passos (esperando feedback):**
- PH manda mensagem WhatsApp + PDF v2.2 pra supervisora.
- Supervisora retorna: aprovação do PROGO + infos pra GHK-Cu e COLAGENEW.
- Reescrita do GHK-Cu (reclassificar pra ATIVO) e do COLAGENEW (preencher bloco em branco).
- Mesma rotina de validação linha-a-linha + escolha consciente de estrutura.

## 2026-05-11 — Roteiro PROGO v2 + nomenclatura ATIVO vs FÓRMULA validada pela supervisora

Supervisora avaliou o PDF do roteiro PROGO (v1) e retornou via WhatsApp com 4 áudios + 1 texto técnico. Material bruto preservado em [referencias/2026-05-11-feedback-supervisora-progo.md](referencias/2026-05-11-feedback-supervisora-progo.md).

**O que ela corrigiu:**
1. **PROGO é ATIVO, não fórmula** — a v1 tinha posicionado como "fórmula manipulada que funciona pra você". Errado. Campanha precisa girar em torno do ativo sozinho.
2. **Foco nos 3 mecanismos** — GIP (controle da glicose), GLP-1 (saciedade), GLP-2 (absorção de nutrientes). Único tripeptídeo do mercado com GLP-2 = claim forte de diferencial.
3. **Pode ser usado sozinho OU pra potencializar caneta emagrecedora** — abre 2 ângulos de público.
4. **Origem natural** — peptídeo de salmão.
5. **Combinado de nomenclatura novo** (vale daqui pra frente):
   - **Lançamento de ATIVO** = ativo único sozinho (PROGO)
   - **Lançamento de FÓRMULA** = junção de vários ativos (ex.: Hair Power)
   - **Ativo principal dentro de fórmula** = campanha vai em cima do ativo

**O que entreguei (v2 do roteiro):**
- Cabeçalho marcando "Lançamento de ATIVO" explicitamente.
- Apresentação reescrita ("ativo natural, extraído do salmão, com ação tripla").
- Dor reescrita pra ângulo de emagrecimento real (fome que volta, pouco aproveitamento, caneta que precisa de reforço).
- Bloco de benefício preenchido com as 3 funções **traduzidas pro consumidor** (saciedade real / controle da glicose / absorção do pouco que come) — sem citar GLP-1/GIP/GLP-2 no áudio falado.
- Claim "único no mercado" incorporado como destaque do GLP-2.
- Ângulo "sozinho ou potencializa caneta" incluído no fim do bloco e na legenda.
- Legenda refeita seguindo a mesma estrutura.
- Hashtags ajustadas (adicionou #Saciedade, retirou #SaudeEBemEstar genérico).
- Histórico de revisões registrado no fim do arquivo.

**Tensão de voz resolvida e documentada:** voice-checklist § 1.5 + memória persistente proíbem siglas técnicas (GLP-1/GIP/GLP-2/DPP-4/tripeptídeo). Supervisora pediu foco nelas. Resolução: siglas NÃO entram no áudio falado, traduções no lugar. Se ela insistir, alinhamos opção B. Decisão registrada no roteiro e em [referencias/2026-05-11-feedback-supervisora-progo.md](referencias/2026-05-11-feedback-supervisora-progo.md).

**Arquivos atualizados:**
- [conteudo/roteiros/lancamento-progo.md](conteudo/roteiros/lancamento-progo.md) — v2 completo.
- [context.md](context.md) — nova seção "Nomenclatura — ATIVO vs FÓRMULA".
- [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md) — pendências do PROGO v2 listadas + GHK-Cu marcado pra reclassificação (também é peptídeo único = ATIVO pela lógica nova).
- [referencias/2026-05-11-feedback-supervisora-progo.md](referencias/2026-05-11-feedback-supervisora-progo.md) — material bruto + síntese + tensão de voz documentada.

**Próximo passo:** PH manda o .md aprovado pra supervisora. Após aprovação dela → gerar HTML e exportar PDF.

## 2026-05-07 — Plano de Conteúdo completo (16 peças + estratégia + copy + brief) em HTML 9:16

Entregue: [apresentacoes/2026-05-07-plano-de-conteudo-maio-junho.html](apresentacoes/2026-05-07-plano-de-conteudo-maio-junho.html). 17 páginas (capa + 16 peças). Cada página tem: estratégia da peça · copy completa (hook, legenda, CTA, hashtags) · brief de arte (composição + referências Pinterest específicas do banco curado).

Toda copy passou pelo voice-quality-checklist:
- Sem antropomorfização (verifiquei "pele responde", "objetivo pede", "tratamento pede" — todos reescritos).
- Sem jargão publicitário ("aspecto cansado", "tecnologia avançada" — banidos).
- Sem save-bait com julgamento ("decidir cuidar de verdade" — fora).
- Sem analogia forçada.
- Estrutura variada entre peças (hooks distribuídos pelos 9 padrões do hook-writer-sms).

Aplicação prática:
- Frases-âncora do feed real ("a SUA pele é única", "Autocuidado não é excesso", "Mentiras que o seu corpo conta") herdadas no tom das peças novas.
- Linha própria nomeada (Cacau Beauty, Plant Protein, Lip Tinted, Melatonina, Creme Hidratante) referenciada onde cabe — Creme Hidratante destacado em 15/05.
- Cada peça aponta 2-3 referências do banco Pinterest curado pra orientar o brief de design.
- Reels (5 no total — 13/05, 20/05, 27/05, 03/06 + 2 reservados de Namorados) com timeline completa (hook → desenvolvimento → CTA).
- 3 peças de Namorados (08, 10, 12/06) marcadas como **🟡 Reservado · A validar** com supervisora — copy proposta entregue mas oferta/produto-foco precisa vir do alinhamento.

Como gerar PDF: abrir HTML → Ctrl+P → Salvar como PDF → orientação Retrato → marcar "Gráficos de plano de fundo" pras cores aparecerem.

## 2026-05-07 — Banco de 21 referências Pinterest organizado e indexado

PH compartilhou pasta com 21 referências Pinterest curadas. Movidas pra `shared/referencias-pinterest/` e organizadas em 7 categorias:

| Categoria | Qtd | Foco |
|---|---|---|
| `farmacia/` | 2 | Templates farmácia digital (SmartCare, VidaMed) |
| `educativo-saude/` | 7 | Posts médicos/nutri com hook contraintuitivo |
| `produto-editorial/` | 6 | Apresentação editorial de produto/linha |
| `skincare-premium/` | 2 | Marca skincare premium (Soraé, Versed) |
| `wellness-marca/` | 2 | Wellness com pessoa real + produto (Hers) |
| `hooks-fortes/` | 1 | Capa com hook contraintuitivo |
| `anti-padroes/` | 1 | Prostastream — exemplo do que NÃO fazer |

Criado `shared/referencias-pinterest/INDEX.md` com hook de cada referência, padrão visual e aplicação sugerida no calendário da Arte. Princípios visuais extraídos do banco consolidados no fim do INDEX (paletas, tipografia serif, hook contraintuitivo, espaço em branco, etc.). Visual-reference-checklist atualizado pra apontar pro banco e listar as categorias.

Aplicação imediata na Arte:
- 11/05 (manipulado vs prateleira) → educativo-saude/01, 03, 04 + produto-editorial/06.
- 13/05 (Reels prova social atendimento) → farmacia/01, 02.
- 18/05 (pré-treino) → educativo-saude/04 (carrossel) + produto-editorial/06.
- 20/05 (como farmacêutica monta a fórmula) → educativo-saude/01, 05, 06.
- 22/05 (Boutique) → farmacia/01, 02 (templates de localização).
- 25/05 (ArteVet) → mistura farmacia + produto-editorial.
- 27/05 (Saúde da Mulher) → wellness-marca/01, 02 + skincare-premium/01.
- 29/05 (avaliações) → skincare-premium/02 (prova social com %).

## 2026-05-07 — Análise do perfil + ArteVet já existe + Namorados a validar + protocolo visual

Rodada de correção depois que PH apontou 2 gaps estruturais: **eu não tinha analisado o perfil real do cliente no Instagram** e **não estava considerando Pinterest como fonte de referência visual**. Ambos viraram protocolos automáticos.

**Correções aplicadas:**

- **ArteVet não é estreia** — análise do perfil mostrou Pomeranian em pelo menos 2 posts ("Remédios manipulados para Pets"). ArteVet já está na pauta há tempo. Tratado como continuidade. **2 peças de ArteVet na janela 8/05-12/06**: 25/05 (segunda) + 05/06 (sexta).
- **Linha própria do cliente já tem identidade visual:** Cacau Beauty, Plant Protein, Lip Tinted, Melatonina, Creme Hidratante. Não inventar nome — usar os existentes quando peça pedir destaque.
- **Tom existente catalogado:** "Mentiras que o seu corpo conta", "De repente 30", "Autocuidado não é excesso", "A felicidade começa quando você decide cuidar de si", "Vem cá, seu corpo é único", "A SUA DUPLA pra o treino render hoje". Continuar nesse padrão.
- **Dia dos Namorados marcado como "🟡 RESERVADO — a validar com supervisora"** (PH precisa alinhar antes de fechar copy/produção). Alternativas listadas pra cada um dos 3 dias caso não feche.
- **Briefing mensal junho** — passou da data (22-25/05). Decidido seguir com o que temos sem retroceder. Template fica pronto pro próximo ciclo (briefing julho).
- **29/05 = post estático** com avaliações reais (PH decidiu).

**Novos protocolos persistentes:**

- Criado `clients/arte-em-manipulacao/referencias/2026-05-07-analise-perfil-instagram.md` — análise estruturada da grade atual. Atualizar mensalmente.
- Criado `shared/visual-reference-checklist.md` — protocolo de análise de perfil + Pinterest como fonte de referência visual. Vale pra todos os clientes da Lone.
- CLAUDE.md ganhou seção "Análise visual e referências" apontando pro checklist visual.
- Memória persistente nova: `feedback_analise_perfil_e_pinterest.md` codifica o protocolo.
- 2 erros de find-replace no voice-quality-checklist corrigidos ("tô com cara de cansada", "característica Y").

**Pendentes:**

- PH vai criar/compartilhar pasta com referências Pinterest curadas (lembrar de pedir).

## 2026-05-07 — Planejamento estendido até 12/06 + mini-campanha Namorados + template briefing

- Calendário de maio revisado: removidas Hipertensão (20/05) e Dia da Família (15/05) por decisão de PH (irrelevantes pro perfil). Novos temas: 15/05 vira venda de dermocosméticos próprios; 20/05 vira Reels educativo "como a farmacêutica monta a fórmula".
- 06/05 confirmado como publicado (Reels da visita à farmácia).
- ArteVet entra oficialmente na pauta em **05/06** (primeira peça do pilar pet) — decisão de PH.
- **Mini-campanha Dia dos Namorados (12/06)** estruturada com 3 peças: 08/06 antecipação · 10/06 Reels #1 (gancho "em dúvida do que dar?") · 12/06 Reels #2 venda direta com urgência. Sexta excepcionalmente vira Reels — autorizado por PH pra fechar a campanha com força.
- Criado [estrategia/2026-06.md](estrategia/2026-06.md) com janela parcial 1-12/06 (6 posts). Restante do mês (15-30/06) fica pra planejar após briefing mensal de junho.
- Criado [referencias/briefing-mensal-template.md](referencias/briefing-mensal-template.md) — mensagem-modelo que PH envia à supervisora **entre 22-25/05** (regra do playbook §3.1) com 5 perguntas obrigatórias + 10 específicas pra Arte (linha própria, ArteVet, convênios, datas, material visual).
- OPEN-QUESTIONS atualizadas: hipertensão e família resolvidas como "não fazer", briefing junho como pendente, decisão de formato 29/05 (post vs carrossel) como aberta.

## 2026-05-07 — Caça aos vícios de "copy de IA" nos 3 roteiros

PH apontou "Marcas que insistem em ficar" (GHK-Cu) como antropomorfização — coisa não insiste, pessoa insiste. Varri os 3 roteiros + HTML e identifiquei 6 pontos do mesmo padrão. PH revisou e aprovou as substituições:

- **GHK-Cu Dor:** "Cabelo caindo mais do que devia. Marcas que insistem em ficar." → "Cabelo que você vê na escova, no travesseiro, no chão do banheiro. Aquela mancha no rosto que não some."
- **COLAGENEW Dor:** "Aspecto cansado, perda de brilho, marcas que aparecem." → "Rosto cansado mesmo dormindo bem, perda de brilho, manchas no rosto."
- **PROGO Dor:** "muito suplemento de prateleira foi feito pra um corpo médio que não existe — e o seu não responde igual." → "muito suplemento da prateleira é fórmula padrão — e o que funciona pra uma pessoa nem sempre funciona pra você."
- **PROGO + COLAGENEW legendas:** removido save-bait com julgamento implícito ("pra quando decidir começar / cuidar de verdade") — sobrou só share-bait leve.

Aplicado em 4 lugares: 3 roteiros .md + HTML do kit. Memória `feedback_linguagem_comum_sem_analogia.md` atualizada e expandida com 4 categorias de vício a banir (antropomorfização, construções literárias, jargão publicitário, save/share-bait com julgamento) + lista de padrões que funcionam (validados por PH).

## 2026-05-07 — Kit em 9:16 + título limpo + timeline empilhada

- Formato corrigido: 9:16 vertical (167mm × 297mm) em vez de 16:9 horizontal — alinhado com o formato final do Reels.
- Layout reorganizado: em vez de 2 colunas (Roteiro | Cenas), agora é uma **timeline vertical única** onde cada bloco tem timestamp + label + frase + cena empilhados. Faz mais sentido no formato vertical e mantém a leitura sequencial do roteiro.
- Títulos limpos: removidos kicker ("Reels de Lançamento"), categoria do produto ("· Emagrecimento", "· Pele e Cabelo", "· Skin Care") e subtitle ("Linha própria · Esportiva / Wellness · 30 segundos"). Sobra só o nome do produto em cada página.

## 2026-05-07 — Logo real Lone + remoção de "Texto na tela" + organização de assets

- PH subiu a logo real (`Lone Midia - Branco + Azul (Sem Fundo).png`) em `apresentacoes/`. Movida pra pasta canônica nova `shared/identidade-lone/lone-midia-logo-azul-branco.png` — assets de identidade da agência são transversais a todos os clientes, não pertencem a uma pasta de cliente.
- HTML do kit de lançamentos atualizado: SVG inline (tentativa de recriação) substituído pela `<img>` da logo real. Header preto adicionado pra dar contraste à logo "branco + azul" (que não funciona em fundo branco). Badge invertido pra branco.
- Removido "Texto na tela" tanto do HTML quanto dos 3 roteiros .md (PH apontou que não faz sentido — não usam esse recurso).
- CLAUDE.md ganhou seção sobre `shared/identidade-lone/`. Memória persistente nova: **identidade visual da Lone — assets compartilhados**.

## 2026-05-07 — Kit de lançamentos em HTML (16:9) pra exportar PDF

- Pasta nova `apresentacoes/` criada no cliente para guardar entregáveis em formato de apresentação (HTML→PDF, slides).
- HTML montado: `apresentacoes/2026-05-07-kit-lancamentos.html` — 3 páginas 16:9 (uma por roteiro: PROGO, GHK-Cu, COLAGENEW).
- Layout por página: header com logo+badge cliente, título do roteiro, 2 colunas (Roteiro: frases / Cenas: direção visual), footer com paginação.
- Identidade Lone aplicada: paleta preto + azul (#1A2DD9) + branco · SVG do "M" em azul · tipografia bold · cantos limpos.
- Bloco de "Benefício" exibido como placeholder amarelo destacado ("Supervisora preenche") — fica visível no PDF que esse é o gap a fechar antes da gravação.
- Como gerar o PDF: abrir o HTML no navegador → Ctrl+P → "Salvar como PDF" → orientação Paisagem → margens "Sem margens" → tamanho de papel personalizado se quiser 16:9 exato (já está embutido no `@page`).

## 2026-05-06 — Limpeza de variantes + variação de estrutura

- Tabelas de hooks dos 3 roteiros enxugadas — só o hook escolhido fica registrado, sem reserva A/B (PH não quer manter variantes).
- COLAGENEW teve a apresentação trocada de "Por isso lançamos o COLAGENEW..." para "Conheça o COLAGENEW..." porque PROGO já usa "Por isso lançamos" — variação pedida por PH para os 3 roteiros não saírem com a mesma fórmula. GHK-Cu já tinha apresentação diferente (junta hook + apresentação numa frase só).
- Memória persistente nova: **variar estrutura entre peças da mesma campanha** — vale pra qualquer cliente da Lone.

## 2026-05-06 — v2 dos roteiros (PROGO aprovado, GHK-Cu/COLAGENEW refeitos com hooks do PH)

- **PROGO ✅:** hook 1 (Empathy) **aprovado por PH**. Roteiro fica como está.
- **GHK-Cu:** PH apontou 2 problemas — hook "cinco cremes" não pegou, e a dor com "pele que dá uma trava" foi rejeitada (analogia forçada — pele não é carro). Refeito: hook conforme texto enviado por PH ("Acaba de ficar disponível o GHK-Cu, a nova fórmula manipulada para melhorar sua pele e seu cabelo"). Dor reescrita em tríade direta: "perda de firmeza, cabelo caindo, marcas que insistem em ficar" + frase "produto comum trata toda pele igual — e a SUA pele é única". Termo "uso tópico" removido do copy (mostra no visual).
- **COLAGENEW:** PH propôs hook contrarian forte ("Você não deve usar qualquer produto pra melhorar sua produção de colágeno"). Apresentação ajustada para "feito sob medida pra você" (proximidade pedida sem ser extensa). Dor refeita com "perda de brilho", "marcas que aparecem" e a frase "produto comum trata toda pele da mesma forma — e a SUA pele é única" (palavras de PH).
- Histórico de revisões dentro de cada roteiro pra manter trilha de decisões.
- Memória persistente nova: **linguagem comum e direta, sem analogia forçada em copy de saúde** — vale para todos os clientes da Lone.

## 2026-05-06 — Roteiros refeitos com skills (sem jargão + ganchos por padrão)

- PH apontou problemas nos 3 roteiros: meti "peptídeo bioativo" só porque vi em print (consumidor não liga), criei inconsistência (presente em 2 produtos, ausente em 1) e ganchos caíram em clichê.
- Skills consultadas e aplicadas: `hook-writer-sms` (9 padrões — usei Empathy / Story Opener / Question pra os 3 produtos, com variantes alternativas labeladas) e `caption-writer-sms` (anatomia hook + payoff + CTA, hashtags 3-10, save/share-bait).
- Roteiros reescritos: PROGO (Empathy ★), GHK-Cu (Story Opener ★ — cena dos "cinco cremes na bolsa"), COLAGENEW (Question ★ — pergunta direta provocativa). Cada roteiro agora vem com 3 variantes de gancho labeladas pelo padrão + recomendação justificada.
- Texto na tela ≤6 palavras adicionado em cada variante (formato Reels do caption-writer).
- Jargão removido — só "manipulado", "uso tópico" e "fórmula personalizada" sobreviveram (consumidor de farmácia de manipulação entende).
- 2 memórias persistentes adicionadas: "sem jargão técnico" + "usar skills *-sms antes de escrever copy".

## 2026-05-06 — Renomear referência: lancamentos-isabella → lancamentos-linha-propria

- PH apontou que o arquivo estava nomeado por pessoa (Isabella é a supervisora, não parte do conteúdo). Convenção corrigida: arquivos de `referencias/` nomeiam o **conteúdo**, não o emissor.
- Renomeado: `2026-05-06-lancamentos-isabella.md` → `2026-05-06-lancamentos-linha-propria.md`.

## 2026-05-06 — Atribuição corrigida + roteiros reescritos como lançamento esporádico

- PROGO = emagrecimento, GHK-CU = colágeno tópico, COLAGENEW = skin care (atribuição corrigida por PH).
- Reels de lançamento saem das quartas do calendário regular — viram peças esporádicas que saem na semana de liberação de cada produto.
- 3 roteiros reescritos com estrutura nova (apresentação → dor direta → benefício em branco → CTA). Salvos em `conteudo/roteiros/lancamento-{progo,ghk-cu,colagenew}.md`.
- Estratégia de maio revista — quartas 13, 20, 27 agora têm temas próprios (educativo técnico, esportiva, atendimento acolhedor). Carrosséis reduzidos para 1 no mês.
- Mensagem para a supervisora (cliente) formulada e entregue a PH no chat para envio.

## 2026-05-06 — Estratégia de maio + 3 roteiros entregues

- Playbook Lone integrado ao projeto (estrutura seg/qua/sex confirmada como regra global).
- context.md atualizado: tipo de cliente = "que grava vídeos" (cat. 4.2 do playbook); status maio (atraso seg 04/05, vídeo pronto qua 06/05).
- **Estratégia maio 2026** em [estrategia/2026-05.md](estrategia/2026-05.md) — 12 posts mapeados dia-a-dia.
- **3 roteiros de Reels** em `conteudo/roteiros/` para os lançamentos: GHK-CU (13/05), COLAGENEW (20/05), PROGO (27/05). Estrutura narrativa pronta; campos técnicos com placeholder esperando validação da farmacêutica.
- Print do cliente com lista dos lançamentos da linha própria arquivado em `referencias/2026-05-06-lancamentos-linha-propria.md`.
- Próximo passo: PH validar composição/claims dos 3 produtos com Isabella/farmacêutica + alinhar tema do vídeo de hoje.

## 2026-05-06 — Discovery fechado, contexto v1.0

- 2ª rodada de PH fechou todas as perguntas críticas. Plano: 12 posts/mês, quarta = Reels, IG only, misto 20-50.
- Viva Mídia descartada (era agência anterior).
- Nova restrição registrada: não citar tempo de atendimento em peças.
- context.md promovido a v1.0 — pronto para gerar a estratégia mensal de maio.
- Próximo passo: estratégia maio em `estrategia/2026-05.md` quando PH responder posts já publicados + pauta dos vídeos da sexta.

## 2026-05-06 — Briefing parcialmente consolidado

- Material recebido de PH: prints Google Maps das 2 unidades + 4 posts atuais (identidade visual) + transcrição reunião + anotações pós-reunião.
- Arquivos de referência: `referencias/2026-05-06-reuniao-diagnostico.md`, `referencias/2026-05-06-google-maps-unidades.md`.
- BRIEFING.md preenchido com: 2 unidades em Araruama (Boutique no Trade Center + ArteVet na R. Ary Barroso), 6 linhas de produto, carro-chefe (balcão+ortopedia+emagrecimento), linha estratégica (esportiva), comportamento de compra (vem com receita), convênios (Unimed/Brasseg/Cartão de Todos), atendimento (2 atendentes + API + CRM).
- context.md v0.5 com 4 sub-personas, 5 pilares de conteúdo propostos, voz preliminar e compliance Anvisa.
- Identidade visual extraída: paleta azul-petróleo/turquesa + branco, logo caligráfico + pilão.
- **Pendentes registrados em `OPEN-QUESTIONS.md`** — perguntas focadas para PH responder antes de criar a estratégia de maio.

## 2026-05-06 — Onboarding iniciado

- Pasta criada em `clients/arte-em-manipulacao/`.
- Estrutura: `BRIEFING.md`, `context.md` (vazio), `estrategia/`, `conteudo/{posts,roteiros,stories}/`, `referencias/`.
- Discovery em andamento — PH respondendo perguntas iniciais para preencher BRIEFING e gerar primeiro `context.md`.
- **Pendente urgente:** estratégia do mês de maio + primeiros roteiros (cliente está com conteúdo atrasado).
