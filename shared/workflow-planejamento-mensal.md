# Workflow · Planejamento mensal de conteúdo (Lone Mídia)

**O que é:** receita repetível pra fechar planejamento de 1 mês de conteúdo pra qualquer cliente da Lone. Cada fase tem entradas, saídas e quando invocar subagent.

**Quando usar:** todo início de mês (idealmente entre dias 22-25 do mês anterior, conforme [§3 do playbook](playbook-lone-midia.md) — briefing mensal).

**Padrão de entregas:** plano contratado da Lone = 12 posts/mês (segunda · quarta · sexta). Quarta = Reels obrigatório.

---

## Visão macro · 6 fases

```
1. CONTEXTO    →   2. PESQUISA    →   3. FUNIL    →   4. PRODUÇÃO    →   5. VALIDAÇÃO    →   6. ENTREGA
   (briefing,        (datas + ref          (mapeamento     (copy + brief        (anti-IA +           (HTML +
    análise IG,       Pinterest +          + pilar         de design)           compliance +         estratégia
    padrões do        padrão setor)         mensal)                              padrões cliente)     mensal)
    cliente)
```

Cada fase é detalhada abaixo. Idealmente o ciclo todo leva 2-3 dias úteis.

---

## Fase 1 · Contexto

**Objetivo:** garantir que o que vou criar bate com o cliente.

**Entradas:**
- `clients/<slug>/BRIEFING.md` (briefing histórico)
- `clients/<slug>/context.md` (contexto vivo)
- `clients/<slug>/PADROES.md` (se existir — específico do cliente)
- `clients/<slug>/PROGRESSO.md` (últimas decisões)
- Briefing mensal do cliente (resposta do cliente entre dias 22-25 do mês anterior)

**Saídas:**
- Análise do perfil Instagram atual (se faltar) → salvar em `clients/<slug>/referencias/YYYY-MM-DD-analise-perfil-instagram.md`
- Frases-âncora do feed coletadas (pra herdar tom)
- Foco estratégico do mês (deduzido do briefing)

**Quando invocar subagent:**
- 🤖 **[analista-perfil-ig](../.claude/agents/analista-perfil-ig.md)** se o perfil ainda não foi analisado ou a última análise tem mais de 30 dias

**Checklist:**
- [ ] BRIEFING e context.md lidos
- [ ] PADROES.md específico do cliente lido (se existir)
- [ ] Frases-âncora do feed identificadas
- [ ] Foco estratégico do mês claro

---

## Fase 2 · Pesquisa

**Objetivo:** ancorar o planejamento em datas reais + referências validadas + padrão do setor.

**Entradas:**
- Mês + ano alvo
- Nicho do cliente (saúde, gastronomia, construção, etc.)

**Saídas:**
- Lista de datas comemorativas relevantes do mês (filtradas pelo que conecta com o negócio)
- 2-3 referências Pinterest pra cada peça do plano
- Padrão do setor pesquisado quando houver afirmação técnica

**Quando invocar subagent:**
- 🤖 **[pesquisador-datas](../.claude/agents/pesquisador-datas.md)** — recebe mês + nicho, retorna datas filtradas
- WebSearch direta quando precisar validar afirmação técnica específica (ex: padrão de farmácia magistral veterinária)

**Critérios pra incluir uma data:**
- ✅ Data tem conexão clara com o negócio (não inventar)
- ✅ Existe ângulo positivo, não só "lembrar da data"
- ✅ Cliente tem oferta/serviço alinhado
- ❌ Causa social desconectada (ex: Junho Laranja pra farmácia magistral — não cabe)
- ❌ Data muito nichada que público não reconhece

**Checklist:**
- [ ] Datas do mês pesquisadas
- [ ] Datas irrelevantes filtradas (com justificativa)
- [ ] Banco de referências Pinterest consultado
- [ ] Padrão do setor pesquisado quando aplicável

---

## Fase 3 · Funil

**Objetivo:** organizar as 12 peças do mês num funil lógico (não 12 posts soltos).

**Entradas:**
- Datas comemorativas filtradas (Fase 2)
- Foco estratégico do mês (Fase 1)
- Distribuição-alvo: ~35-40% TOFU / ~35-40% MOFU / ~20-25% BOFU
- Framework: [shared/funil-conteudo-organico.md](funil-conteudo-organico.md)

**Saídas:**
- Calendário mensal mapeado: data + tema + fase do funil + nível Schwartz + função
- 1 pilar mensal definido (1 peça forte que vira 4-6 derivativos)
- Distribuição validada (se desbalanceada, ajustar antes de seguir)

**Quando invocar subagent:**
- 🤖 **[mapeador-funil](../.claude/agents/mapeador-funil.md)** — recebe lista de peças, classifica cada uma + valida distribuição + sugere ajustes

**Padrão semanal Lone (seg / qua / sex):**
- Segunda: TOFU (post estático educativo/contraintuitivo)
- Quarta: MOFU (Reels — bastidores, processo, autoridade)
- Sexta: BOFU (venda ou prova social)

**Checklist:**
- [ ] 12 peças mapeadas (data + tema + funil + awareness)
- [ ] Distribuição dentro do target
- [ ] Pilar mensal definido
- [ ] Datas comemorativas encaixadas onde fizer sentido

---

## Fase 4 · Produção

**Objetivo:** escrever copy + brief de cada peça.

**Entradas:**
- Calendário mapeado (Fase 3)
- PADROES.md do cliente (Fase 1)
- Referências Pinterest (Fase 2)

**Saídas:**
- Por peça: hook + legenda + CTA + hashtags (post estático/carrossel) OU timeline com timestamps (Reels)
- Por peça: brief de design com referência Pinterest específica

**Princípios de produção:**
- **Hook:** variar entre os 9 padrões do `hook-writer-sms` na mesma campanha
- **Estrutura:** clássica OU "convite por identificação" — escolher conscientemente
- **Pilar mensal:** identificar peça pilar + planejar 4-6 derivativos como bônus
- **Bloco "Pendência (validar)"** quando peça contém afirmação não confirmada
- **Voz do cliente:** herdar do PADROES.md + frases-âncora
- **Fluência de venda em roteiro** ([voice-checklist § 4.5](voice-quality-checklist.md)):
  - Dor concreta SEMPRE antes da sigla/nome técnico (não anunciar lista de mecanismos antes da pessoa se conectar)
  - Apresentação do produto com verbo de contextualização ("Lançamos", "Conheça", "Chegou") — nunca palavra solta + ponto
  - Marca + endereço vão no CTA final, não no meio do roteiro ("Por isso a [marca] chegou com..." mata o feeling)
- **Estrutura validada de Reels de venda direta:** Hook + promessa → Produto direto → Benefícios (cada um com dor antes) → Diferencial → Identificação → CTA com marca no fim ([playbook § 6.1](playbook-lone-midia.md))

**Quando invocar subagent:**
- (produção é feita pelo Claude principal — agents validam depois)

**Checklist:**
- [ ] Toda peça com hook + copy + CTA + hashtags
- [ ] Reels com roteiro timeline
- [ ] Referência Pinterest anotada por peça
- [ ] Pendências pra cliente listadas em blocos visíveis
- [ ] Pilar mensal com derivativos sugeridos

---

## Fase 5 · Validação

**Objetivo:** filtrar a copy contra vícios antes de entregar.

**Entradas:**
- Copy completa (Fase 4)
- [shared/voice-quality-checklist.md](voice-quality-checklist.md) (regras gerais)
- `clients/<slug>/PADROES.md` (regras específicas do cliente)
- Setor regulado? → checklist de compliance

**Saídas:**
- Copy validada peça por peça
- Lista de correções aplicadas (se houver)
- Pendências pra cliente que ainda travam alguma peça

**Quando invocar subagent:**
- 🤖 **[validador-copy](../.claude/agents/validador-copy.md)** — recebe copy + cliente, roda voice-checklist + padrões + compliance, retorna lista de correções

**O que filtra:**
- Antropomorfização, jargão publicitário, save-bait com julgamento, jargão técnico, analogia forçada
- Padrões anti-IA (12 pecados do MSE)
- Padrões específicos do cliente (PADROES.md)
- Compliance regulatório (Anvisa/CFF pra saúde, CRECI pra imobiliária, etc.)

**Checklist:**
- [ ] Validador rodou em todas as peças
- [ ] Correções aplicadas
- [ ] Pendências bloqueantes resolvidas OU peça marcada com "Pendência (validar)"

---

## Fase 6 · Entrega

**Objetivo:** materializar o plano em HTML/PDF + estratégia mensal documentada.

**Entradas:**
- Copy validada (Fase 5)
- Calendário mapeado (Fase 3)

**Saídas:**
- `clients/<slug>/apresentacoes/YYYY-MM-DD-plano-de-conteudo-MM-YYYY.html` (HTML do plano · 1 cover + 1 página por peça)
- `clients/<slug>/estrategia/YYYY-MM.md` (estratégia mensal com mapeamento de funil incorporado)
- `clients/<slug>/referencias/YYYY-MM-DD-mapeamento-funil.md` (rastreabilidade do funil)
- Atualização do `PROGRESSO.md` com entrada datada

**Formato do plano HTML:**
- Cover: janela + total de peças + Reels + reservadas
- Página por peça: kicker · h1 · meta · Copy + Roteiro (sem "Brief de arte" e sem "Estratégia" — decisão padrão Lone)
- Page-nums sequenciais (cover sem · 02/N a N/N)

**Como exportar PDF:** abrir HTML no navegador → Ctrl+P → Salvar como PDF → marcar "Gráficos de plano de fundo".

**Checklist:**
- [ ] HTML do plano completo
- [ ] Estratégia mensal documentada
- [ ] Mapeamento de funil em referencias/
- [ ] PROGRESSO.md atualizado
- [ ] Pendências de cliente listadas em OPEN-QUESTIONS.md

---

## Comunicação com supervisora/cliente · após entrega

**Padrão:**
1. PH manda HTML/PDF do plano via WhatsApp pra supervisora
2. Lista das pendências bloqueantes que precisam de retorno antes de produzir
3. Aguarda aprovação

**Tipos de pendência mais comuns:**
- Produto-foco específico de peças de linha própria
- Informação técnica de lançamentos (PROGO, novos ativos)
- Validação de claims regulatórios
- Material visual (fotos do cliente)
- Datas exatas de promoções

---

## Quando o ciclo termina

**Próximo ciclo (próximo mês):**
1. PH atualiza `PROGRESSO.md` com o que rolou (taxa de aprovação, peças que mudaram, métricas se houver)
2. Pede briefing mensal do próximo mês (entre dias 22-25)
3. Volta pra Fase 1

**Aprendizados acumulam:**
- Novos vícios apontados pelo cliente → `clients/<slug>/PADROES.md` (§ Vícios)
- Novos padrões validados → mesmo doc (§ Padrões validados)
- Mudanças no workflow → este doc (linkado de [CLAUDE.md](../CLAUDE.md))

---

## Histórico do workflow

- **2026-05-15** — Workflow criado a partir da consolidação do projeto Arte em Manipulação (~15 rodadas de revisão entre 06/05 e 15/05). Subagents do Claude Code mapeados pra automatizar partes (Fase 1: analista-perfil-ig · Fase 2: pesquisador-datas · Fase 3: mapeador-funil · Fase 5: validador-copy).
