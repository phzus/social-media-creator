# © 2026 7D/SECRETS LTDA — Anthony Nichols & André Cia
# Marketing Squad Extremo — Uso exclusivo da Mentoria Funnel Labs I.A.
# Propriedade intelectual protegida. Redistribuição proibida.

# Skill: pitch-architect

**Agente:** @pitchinho
**Versão:** 1.0
**Propósito:** Arquitetar um pitch ao vivo de alta conversão com script completo, seeding estratégico, quebra de objeções e CTA de fechamento casual.

---

## BRIEFING OBRIGATÓRIO (antes de executar)

Antes de iniciar, coletar as informações abaixo. Sem elas, a skill não executa.

```yaml
inputs_obrigatorios:
  produto:
    nome: "Nome do produto/mentoria/programa"
    entrega: "O que o aluno/cliente recebe"
    beneficios_principais: "3-7 benefícios reais (não módulos)"
    resultado_promessa: "O resultado concreto que o cliente alcança"

  oferta:
    preco: "Preço de investimento"
    bonus:
      - nome: "Nome do bônus"
        valor_individual: "Quanto valeria se vendido separado"
    garantia: "Tipo e prazo (se houver)"
    urgencia: "Escassez real (vagas, prazo, bônus limitado)"

  publico:
    avatar: "Quem está na sala/assistindo"
    dor_principal: "Maior dor/frustração atual"
    tentativas_anteriores: "O que já tentaram e não funcionou"
    objecoes_top: "3-5 principais objeções esperadas"

  evento:
    tipo: "Imersão presencial / Webinar / CPL ao vivo"
    duracao_pitch: "Tempo disponível para o pitch"
    momento_no_evento: "Em que momento do evento o pitch acontece"

  prova_social:
    depoimento_principal: "Melhor depoimento (resultado mais impactante)"
    outros_depoimentos: "2-3 depoimentos adicionais para usar no stack"
    resultados_proprios: "Resultados do próprio expert"
```

---

## FRAMEWORK: Opening → Problem → Story → Solution → Stack → Anchor → Close

### ETAPA 1 — OPENING: Gancho Emocional (5-8 min)

**Objetivo:** Quebrar o estado atual da audiência e criar abertura emocional para receber a oferta.

```yaml
estrutura:
  passo_1_depoimento_ao_vivo:
    acao: "Apresentar o melhor depoimento disponível"
    formato: "Pessoa real, resultado específico, antes/depois"
    regra: "NUNCA inventar. Depoimento real ou não usa."
    exemplo: |
      "Antes de eu apresentar o que preparei pra vocês hoje,
      eu preciso mostrar algo. [Nome], você pode falar por 2 minutos?"

  passo_2_storytelling:
    acao: "Conectar o depoimento com a realidade da audiência"
    estrutura: "Eu vi [pessoa X] chegar sem [resultado] → hoje ela tem [resultado]"
    regra: "Específico, não genérico. Números reais quando possível."

  passo_3_permissao:
    acao: "Pedir permissão para apresentar a oportunidade"
    script_base: |
      "Com base no que vocês viram agora, e no que trabalhamos hoje,
      eu quero compartilhar algo com vocês. Posso?"
    regra: "Permissão cria reciprocidade. NUNCA pular essa etapa."
```

---

### ETAPA 2 — PROBLEM: Amplificação da Dor (5-10 min)

**Objetivo:** Fazer a audiência sentir o custo de não resolver o problema agora.

```yaml
estrutura:
  passo_1_situacao_atual:
    acao: "Descrever a realidade atual da audiência com precisão cirúrgica"
    regra: "Quanto mais específico, mais a pessoa pensa 'ele está falando de mim'"
    exemplo: |
      "Você sabe exatamente o que precisaria fazer para [resultado].
      O problema não é falta de informação. É [razão real]."

  passo_2_tentativas_que_nao_funcionam:
    acao: "Listar as tentativas anteriores (cursos, métodos, hacks)"
    regra: "Validar que a audiência já tentou e não é culpa dela"
    estrutura: "Você já tentou [X], [Y], [Z]. E mesmo assim [problema continua]."

  passo_3_custo_da_inacao:
    acao: "Calcular o custo real (tempo, dinheiro, oportunidade)"
    regra: "Dados concretos > dramatização vaga"
    exemplo: |
      "Cada mês sem resolver isso custa [X reais / X horas / X clientes]."
```

---

### ETAPA 3 — STORY: Jornada de Transformação (8-12 min)

**Objetivo:** Mostrar que a transformação é possível através da história do expert ou de um aluno.

```yaml
estrutura:
  passo_1_antes:
    acao: "Ponto de partida — onde o expert (ou aluno) estava antes"
    regra: "Específico e honesto. Vulnerabilidade cria conexão."
    elementos: ["Situação financeira", "Frustração", "Tentativas anteriores", "Momento de virada"]

  passo_2_virada:
    acao: "O momento exato em que algo mudou"
    regra: "A virada deve se conectar com a solução que será apresentada"
    estrutura: "Foi quando [descoberta/método/decisão] que tudo mudou."

  passo_3_depois:
    acao: "Resultado concreto após a virada"
    regra: "Números reais, timeline real, resultado mensurável"
    exemplo: "Em [X meses], [resultado específico e mensurável]."

  passo_4_conexao:
    acao: "Conectar a história com a audiência"
    script_base: "E o que eu descobri funciona para qualquer [avatar] que [condição mínima]."
```

---

### ETAPA 4 — SOLUTION: Mecanismo Único (10-15 min)

**Objetivo:** Mostrar por que essa solução funciona quando as outras falharam.

```yaml
estrutura:
  passo_1_mecanismo:
    acao: "Nomear e explicar o mecanismo único da solução"
    regra: "Não é 'meu método'. É o mecanismo que faz funcionar."
    estrutura: "A razão pela qual [solução] funciona é [mecanismo único]."

  passo_2_por_que_outros_falham:
    acao: "Explicar por que as abordagens anteriores não funcionam"
    regra: "Sem atacar concorrentes. Atacar o mecanismo errado."
    exemplo: "A maioria das pessoas falha porque tenta [abordagem errada]. O mecanismo está errado."

  passo_3_prova_do_mecanismo:
    acao: "Mostrar evidências de que o mecanismo funciona"
    formatos:
      - "Resultado próprio com dados"
      - "Resultado de alunos com dados"
      - "Lógica irrefutável (se A então B)"

  passo_4_seeding:
    acao: "Plantar a oferta sem anunciar o pitch"
    script_base: |
      "Isso é exatamente o que está dentro do [produto].
      Mas antes de falar sobre ele, deixa eu te mostrar [próximo bloco]."
```

---

### ETAPA 5 — STACK: Empilhamento de Valor (10-15 min)

**Objetivo:** Elevar o valor percebido da oferta muito acima do preço.

```yaml
estrutura:
  regra_geral: "CADA ITEM É VENDIDO, NÃO LISTADO. Cada benefício/bônus tem seu momento."

  passo_1_beneficio_principal:
    acao: "Apresentar o benefício principal com prova social"
    estrutura: |
      "Dentro do [produto], você vai [benefício 1 — resultado concreto].
      O [Nome do aluno] fez isso e [resultado específico]."
    regra: "BENEFÍCIO, não módulo. 'Você vai aprender X' < 'Você vai conseguir Y'."

  passo_2_beneficios_adicionais:
    acao: "Empilhar cada benefício com depoimento ou prova"
    estrutura: "Além disso, você também vai [benefício 2]. [Depoimento curto]."
    regra: "Variar o formato dos depoimentos: texto, vídeo, print, ao vivo."

  passo_3_bonus:
    acao: "Apresentar cada bônus como um produto completo, não um 'brinde'"
    estrutura: |
      "E como bônus, você vai receber [bônus]. Isso sozinho valeria [valor].
      Por quê? Porque [razão de valor]. [Prova do valor]."
    regra: "VENDER o bônus antes de revelar que é bônus. Nunca citar sem valor."

  calculo_de_valor:
    acao: "Somar os valores para criar âncora"
    estrutura: "Se você fosse adquirir tudo isso separado, seriam [soma dos valores]."
```

---

### ETAPA 6 — ANCHOR: Ancoragem de Preço (5-8 min)

**Objetivo:** Fazer o preço real parecer uma barganha comparado ao valor percebido.

```yaml
estrutura:
  passo_1_valor_total:
    acao: "Revelar a soma dos valores empilhados"
    script_base: "Então, tudo isso junto — [lista rápida] — representa [valor total]."

  passo_2_ancoragem_alternativa:
    acao: "Comparar com o custo da inação ou de alternativas"
    formatos:
      - "Quanto custaria contratar alguém para fazer isso por você?"
      - "Quanto você já gastou tentando resolver isso sozinho?"
      - "Quanto custa cada mês que passa sem resolver?"

  passo_3_revelacao_do_preco:
    acao: "Revelar o preço de investimento"
    estrutura: "Não vou cobrar [valor total]. Nem [valor intermediário]. O investimento é [preço real]."
    regra: "Dizer o preço apenas uma vez, com convicção. Nunca hesitar."

  passo_4_parcelamento:
    acao: "Facilitar a decisão com parcelamento (se aplicável)"
    estrutura: "Ou em [X]x de [parcela] — menos de [valor diário/mensal comparável]."

  passo_5_garantia:
    acao: "Apresentar a garantia (se houver)"
    regra: "A garantia remove o risco da decisão. Apresentar com convicção, não como obrigação."
```

---

### ETAPA 7 — CLOSE: Fechamento Casual (3-5 min)

**Objetivo:** Criar urgência real e sair do palco de forma que a sala se movimente.

```yaml
estrutura:
  passo_1_urgencia_real:
    acao: "Comunicar a escassez real (vagas, prazo, bônus com limite)"
    regra: "Urgência REAL apenas. Nunca fabricar escassez falsa."
    exemplos:
      - "Temos [X] vagas para garantir acompanhamento de qualidade."
      - "Esse preço é válido até [data/momento específico]."
      - "O bônus [X] vai até [número de pessoas]."

  passo_2_proximo_passo:
    acao: "Dar instrução clara e simples do que fazer agora"
    estrutura: "Para garantir sua vaga, [ação clara: acessar link / chamar no WhatsApp / pagar aqui]."
    regra: "Uma instrução, não cinco. Clareza elimina paralisia."

  passo_3_fechamento_casual:
    acao: "Sair do palco de forma que a decisão fique com a sala"
    script_base: |
      "Vou tomar uma água enquanto vocês tomam essa decisão.
      Quem for garantir, [instrução]. A equipe está aqui para ajudar."
    regra: "NUNCA pressionar ao vivo. O 'fechamento casual' funciona porque tira a pressão."

  passo_4_prova_social_ao_vivo:
    acao: "Celebrar as primeiras compras publicamente"
    estrutura: "[Nome] acabou de garantir. Parabéns, [Nome]!"
    regra: "Prova social ao vivo cria efeito manada. Celebrar cada compra."

  passo_5_repeat:
    acao: "Fazer um segundo pitch mais curto após o melhor conteúdo do evento"
    estrutura: "Mencionar novamente o link/vagas antes de fechar o evento."
    regra: "O melhor conteúdo vem DEPOIS do pitch. O repeat vem no final do evento."
```

---

## OUTPUT ESPERADO

A execução desta skill produz o seguinte documento:

```yaml
entrega:
  formato: "Markdown (pitch-architect.md)"
  estrutura_do_documento:
    - "Seção 1: Resumo do pitch (produto, oferta, avatar, tempo)"
    - "Seção 2: Script completo por etapa com tempo estimado"
    - "Seção 3: Depoimentos mapeados por momento de uso"
    - "Seção 4: Objeções e quebras por antecipação"
    - "Seção 5: Checklist pré-pitch"
    - "Seção 6: CTA e instruções de fechamento"

  checklist_pre_pitch:
    - "[ ] Melhor depoimento selecionado e pessoa avisada"
    - "[ ] Stack de valor calculado e soma conferida"
    - "[ ] Preço e parcelamento definidos"
    - "[ ] Urgência real definida (vagas, prazo ou bônus limitado)"
    - "[ ] Link de pagamento/cadastro funcionando"
    - "[ ] Equipe de vendas briefada e posicionada"
    - "[ ] Instrução de CTA clara e testada"
    - "[ ] Script impresso ou em teleprompter se necessário"
```

---

## CHECKLIST ANTI-IA DA SKILL

```yaml
antes_de_entregar:
  - "[ ] Script em tom humano, direto, sem cara de IA"
  - "[ ] Zero fragmentação de frases (ideias completas)"
  - "[ ] Zero expressões da blacklist (ver anti-ia-blacklist.yaml)"
  - "[ ] Depoimentos reais — nenhum inventado"
  - "[ ] Urgência real — nenhuma fabricada"
  - "[ ] Valores do stack justificados, não arbitrários"
  - "[ ] Tom do expert respeitado (COMUNICACAO.md)"
  - "[ ] Acentuação 100% correta em português"
```

---

*Skill: pitch-architect v1.0 — Marketing Squad Extremo*
*Anthony Nichols & André Cia — © 2026 7D/SECRETS LTDA*
