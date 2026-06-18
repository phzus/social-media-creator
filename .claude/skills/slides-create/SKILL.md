# © 2026 7D/SECRETS LTDA — Anthony Nichols & André Cia
# Marketing Squad Extremo — Uso exclusivo da Mentoria Funnel Labs I.A.
# Propriedade intelectual protegida. Redistribuição proibida.

# Skill: slides-create

**Agente:** @slides-creator
**Versão:** 1.0
**Propósito:** Criar outline completo de slides de alto impacto — slide a slide, com headline, descrição do visual e notas do apresentador. Cobre webinar, CPL, evento presencial, pitch deck e material de imersão.

---

## BRIEFING OBRIGATÓRIO (antes de executar)

```yaml
inputs_obrigatorios:
  tipo_apresentacao:
    opcoes: ["webinar", "cpl", "evento_presencial", "pitch_deck", "imersao", "aula"]
    campo: "Qual o tipo?"

  objetivo:
    campo: "Qual o objetivo da apresentação? (converter, ensinar, semear, apresentar oferta)"

  publico:
    campo: "Quem vai assistir? Avatar e nível de consciência."

  oferta:
    campo: "O que será vendido (se aplicável)? Produto, preço, bônus."

  script_ou_conteudo:
    campo: "Existe script do @pitchinho ou conteúdo já definido? (se sim, usar como base)"

  brandbook:
    campo: "Brandbook aprovado? Cores, tipografia e direção visual disponíveis?"
    regra: "Sem brandbook = usar paleta neutra premium (escuro) com aviso"

  tempo_disponivel:
    campo: "Quanto tempo dura a apresentação?"
```

---

## REGRAS DE DESIGN INEGOCIÁVEIS

```yaml
regras_absolutas:
  - regra: "1 IDEIA POR SLIDE"
    severity: "NON-NEGOTIABLE"
    detalhe: "Se o slide tem 2 ideias, divide em 2 slides. Sem discussão."

  - regra: "MÁXIMO 7 PALAVRAS NO HEADLINE"
    severity: "NON-NEGOTIABLE"
    detalhe: |
      O headline é o que a audiência lê enquanto ouve o apresentador.
      Deve reforçar o argumento, não contar a história inteira.
      Headline longo = audiência para de ouvir para ler.

  - regra: "FONTE MÍNIMA 40PT"
    severity: "NON-NEGOTIABLE"
    detalhe: |
      Fundos de sala leem slides. Texto pequeno = slide ignorado.
      Aplica-se a todos os elementos textuais do slide.
      Subtextos e legendas: mínimo 28pt.

  - regra: "FUNDO ESCURO PREFERIDO"
    severity: "STRONG"
    detalhe: |
      Fundo escuro direciona atenção para o conteúdo.
      Reduz fadiga visual em apresentações longas.
      Aparência premium vs. fundo branco corporativo.
      Exceção: brandbook do cliente define fundo claro com justificativa.

  - regra: "TIPOGRAFIA BOLD COM HIERARQUIA REAL"
    severity: "NON-NEGOTIABLE"
    detalhe: |
      Headline: fonte bold/black, tamanho máximo possível.
      Subtexto: fonte regular, tamanho visivelmente menor.
      NUNCA: todos os elementos no mesmo peso visual.

  - regra: "BULLET POINTS: MÁXIMO 3, SEMPRE COM VISUAL"
    severity: "STRONG"
    detalhe: |
      Se precisa de mais de 3 bullets, são slides separados.
      Bullet nunca sozinho — sempre com elemento visual de apoio.
      Bullet é exceção, não padrão.

  - regra: "FOTOS REAIS > ILUSTRAÇÕES > ÍCONES"
    severity: "STRONG"
    detalhe: |
      Depoimento com foto real da pessoa tem 3x mais impacto.
      Fotos do expert e dos alunos têm prioridade absoluta.
      Ícones genéricos e vetores básicos são proibidos.

  - regra: "LOGO APENAS NO PRIMEIRO E ÚLTIMO SLIDE"
    severity: "STRONG"
    detalhe: "Logo em todo slide = template corporativo chato. Menos = mais premium."

  - regra: "SLIDE DE OFERTA: STACK VISUAL, NUNCA LISTA"
    severity: "NON-NEGOTIABLE"
    detalhe: |
      Cada item da oferta aparece em seu próprio slide.
      Com valor individual antes do preço total.
      Preço só aparece depois de todo o stack empilhado.
```

---

## ESTRUTURA POR TIPO DE APRESENTAÇÃO

### TIPO 1 — WEBINAR DE VENDAS

```yaml
webinar:
  objetivo: "Converter audiência fria/morna em compradores ao vivo"
  slides_estimados: "40-60 slides"
  tempo: "60-90 min"

  blocos:
    bloco_abertura:
      slides: "5-8"
      conteudo:
        - "S01: Headline de impacto + credencial visual (foto do expert + número)"
        - "S02: Promessa do webinar (o que vão aprender)"
        - "S03: Quem sou (credencial em linha do tempo visual)"
        - "S04: Para quem é (avatar específico)"
        - "S05: Agenda visual do webinar"

    bloco_conteudo:
      slides: "20-30"
      conteudo:
        - "3-5 blocos de ensino com 1 slide por ponto-chave"
        - "Depoimentos intercalados a cada bloco"
        - "Seeding estratégico após cada bloco de valor"

    bloco_transicao:
      slides: "3-5"
      conteudo:
        - "Recapitulação visual do que aprenderam"
        - "O que falta / o que vem a seguir"
        - "Slide de permissão (pedir para apresentar a oferta)"

    bloco_oferta:
      slides: "10-15"
      conteudo:
        - "1 slide por benefício principal (com depoimento)"
        - "1 slide por bônus (com valor individual)"
        - "1 slide de ancoragem (soma dos valores)"
        - "1 slide de revelação de preço"
        - "1 slide de garantia"
        - "1 slide de CTA (link, QR, instrução clara)"
        - "1 slide de urgência (vagas / prazo)"

    bloco_qa:
      slides: "2-3"
      conteudo:
        - "Slide de Q&A visual"
        - "Repeat do CTA ao final"
```

---

### TIPO 2 — CPL (Content Pre-Launch)

```yaml
cpl:
  objetivo: "Semear a oferta, gerar desejo, elevar consciência"
  slides_estimados: "20-35 slides"
  tempo: "20-40 min"

  blocos:
    bloco_abertura:
      slides: "3-5"
      conteudo:
        - "S01: Promessa específica do CPL (o que vão aprender HOJE)"
        - "S02: Credencial rápida (1 slide)"
        - "S03: Depoimento de resultado (aquece antes do conteúdo)"

    bloco_conteudo:
      slides: "15-22"
      conteudo:
        - "1 slide por ponto-chave ensinado (valor real, sem retenção)"
        - "Exercícios/reflexões visuais quando aplicável"
        - "Resultados de alunos intercalados"

    bloco_seeding:
      slides: "3-5"
      conteudo:
        - "Slide de 'isso é só o começo'"
        - "Prévia do que vem no próximo CPL ou na oferta"
        - "CTA do próximo passo (próximo CPL, grupo, lista)"

    regras_cpl:
      - "Ensinar de verdade — CPL fraco não aquece audiência"
      - "Seeding deve parecer natural, não forçado"
      - "NUNCA revelar a oferta completa no CPL — gerar antecipação"
```

---

### TIPO 3 — EVENTO PRESENCIAL

```yaml
evento_presencial:
  objetivo: "Ensinar ao vivo + converter no palco"
  slides_estimados: "60-120 slides"
  tempo: "6-8 horas"

  blocos:
    bloco_abertura:
      slides: "5-8"
      conteudo:
        - "Slide de boas-vindas (visual impactante)"
        - "Agenda do dia (visual com horários)"
        - "Promessa do evento (o que vão alcançar)"
        - "Regras do evento (engajamento, fotos, grupos)"

    blocos_conteudo:
      quantidade: "3-4 blocos"
      slides_por_bloco: "15-25"
      estrutura_por_bloco:
        - "Título do bloco (1 slide)"
        - "Pontos-chave (1 slide por ponto)"
        - "Exercício prático (1-2 slides)"
        - "Depoimento de resultado (1 slide)"
        - "Seeding ao final (1 slide)"

    bloco_pitch:
      slides: "20-30"
      timing: "Após o penúltimo bloco de conteúdo"
      estrutura: "Ver TIPO 5 — PITCH DECK"

    bloco_melhor_conteudo:
      slides: "10-20"
      timing: "APÓS o pitch"
      regra: "Melhor conteúdo SEMPRE depois do pitch — não antes"
      conteudo:
        - "Conteúdo mais valioso do evento"
        - "Resultado/transformação mais impactante"
        - "Fechamento emocional do evento"
        - "Repeat do CTA (slide final)"
```

---

### TIPO 4 — MATERIAL DE IMERSÃO

```yaml
imersao:
  objetivo: "Suporte visual para imersão intensiva (1-3 dias)"
  slides_estimados: "80-150 slides"
  tempo: "1-3 dias"

  estrutura:
    - "Deck por dia/bloco de conteúdo"
    - "Slides de exercícios práticos (com espaço para anotação)"
    - "Slides de referência (frameworks, templates visuais)"
    - "Slides de transição entre módulos"
    - "Deck separado para o pitch (ver TIPO 5)"

  regras_especificas:
    - "Slides de exercício: mais espaço em branco, instruções claras"
    - "Slides de framework: visual hierárquico, não texto corrido"
    - "1 slide de objetivo por módulo (o que vão entregar ao final)"
```

---

### TIPO 5 — PITCH DECK

```yaml
pitch_deck:
  objetivo: "Apresentar a oferta e converter no palco/tela"
  slides_estimados: "20-30 slides"
  tempo: "15-30 min"
  base: "Usar script do @pitchinho quando disponível"

  blocos:
    pre_pitch:
      slides: "2-3"
      conteudo:
        - "Depoimento visual (foto + resultado em destaque)"
        - "Headline de transição para oferta"

    problema:
      slides: "3-5"
      conteudo:
        - "A situação atual (visual empático)"
        - "O que já tentaram (lista visual)"
        - "O custo da inação (número concreto)"

    solucao:
      slides: "3-5"
      conteudo:
        - "O mecanismo único (visual do framework)"
        - "Por que funciona quando outros falham"
        - "Prova do mecanismo (resultado concreto)"

    stack:
      slides: "1 por item da oferta"
      estrutura_por_slide:
        headline: "Nome do benefício/bônus (máx 7 palavras)"
        visual: "Mockup ou foto do item + valor individual"
        regra: "NUNCA somar antes de apresentar todos"

    ancoragem:
      slides: "2-3"
      conteudo:
        - "Soma de todos os valores (visual empilhado)"
        - "Preço real de investimento (com riscado do valor total)"
        - "Parcelamento (se aplicável)"

    garantia:
      slides: "1"
      conteudo: "Tipo + prazo + o que cobre (visual de segurança)"

    cta:
      slides: "2-3"
      conteudo:
        - "Instrução de ação (link, QR, passo a passo)"
        - "Urgência real (vagas / prazo)"
        - "Fechamento casual visual"
```

---

## TEMPLATE DE OUTLINE (formato de entrega)

Para cada slide do deck, entregar neste formato:

```
S[número] | [BLOCO] | [TIMING ESTIMADO]
Headline: "[headline do slide — máx 7 palavras]"
Visual: [descrição do elemento visual principal]
Subtexto: "[texto secundário se necessário — máx 20 palavras]"
Nota: [instrução para o apresentador — o que dizer neste slide]
```

**Exemplo:**

```
S07 | CONTEÚDO — Bloco 1 | 00:12:00
Headline: "O erro que custa R$3.000 por mês"
Visual: Gráfico de linha descendente em fundo escuro (vermelho)
Subtexto: "97% dos negócios digitais cometem isso nos primeiros 6 meses"
Nota: "Pausar aqui. Perguntar: quantos reconhecem esse erro? Colher respostas."

S14 | SEEDING — Transição | 00:28:00
Headline: "Isso resolve tudo que vimos até agora"
Visual: Mockup do produto com brilho/glow no fundo escuro
Subtexto: "Mas antes, deixa eu te mostrar mais um ponto crítico."
Nota: "Seeding suave. NÃO revelar nome do produto ainda. Criar antecipação."

S22 | OFERTA — Stack Item 2 | 00:55:00
Headline: "Acesso a todos os templates prontos"
Visual: Grid de mockups dos templates (screenshot real)
Subtexto: "Valor individual: R$997"
Nota: "Descrever cada template. Mostrar quanto tempo economiza. Depois revelar o valor."
```

---

## CHECKLIST PRÉ-APRESENTAÇÃO

```yaml
checklist_pre_apresentacao:
  design:
    - "[ ] Todas as fontes acima de 40pt"
    - "[ ] 1 ideia por slide verificado em todos os slides"
    - "[ ] Headlines com máximo 7 palavras"
    - "[ ] Cores do brandbook aplicadas"
    - "[ ] Logo apenas no S01 e slide final"
    - "[ ] Fotos reais de depoimentos incluídas"
    - "[ ] Slide de oferta com stack visual (1 item/slide)"
    - "[ ] Preço só aparece após todo o stack"

  conteudo:
    - "[ ] Depoimento real no slide de pré-pitch"
    - "[ ] Valores do stack justificados e reais"
    - "[ ] Urgência real definida (vagas, prazo ou bônus limitado)"
    - "[ ] CTA visual com instrução clara (1 ação)"
    - "[ ] Notas do apresentador em todos os slides críticos"

  tecnico:
    - "[ ] Deck testado na resolução do projetor/tela"
    - "[ ] Fontes incorporadas (não dependem do computador)"
    - "[ ] Backup em PDF além do arquivo editável"
    - "[ ] Links/QR codes testados e funcionando"
    - "[ ] Slide de fallback caso a internet caia"

  anti_ia:
    - "[ ] Zero bullet points genéricos sem hierarquia"
    - "[ ] Headlines em linguagem do expert (COMUNICACAO.md)"
    - "[ ] Zero cara de template PowerPoint corporativo"
    - "[ ] Acentuação 100% correta em português"
```

---

## CHECKLIST ANTI-IA DA SKILL

```yaml
antes_de_entregar:
  - "[ ] Outline em tom humano, direto, sem cara de IA"
  - "[ ] Headlines no vocabulário do expert (COMUNICACAO.md)"
  - "[ ] Zero bullet points genéricos listados em sequência"
  - "[ ] Zero templates Canva visíveis na estrutura"
  - "[ ] Depoimentos reais — nenhum inventado"
  - "[ ] Valores do stack justificados, não arbitrários"
  - "[ ] Acentuação 100% correta em português"
```

---

## OUTPUT ESPERADO

```yaml
entrega:
  formato: "Markdown (slides-outline.md)"
  estrutura_do_documento:
    - "Cabeçalho: tipo, objetivo, total de slides, tempo estimado"
    - "Outline completo slide a slide (formato S[N] | BLOCO | TIMING)"
    - "Checklist pré-apresentação preenchido"
    - "Notas de direção visual (cores, tipografia, referências)"
    - "Instruções de handoff para @picasso / @pixel"
```

---

*Skill: slides-create v1.0 — Marketing Squad Extremo*
*Anthony Nichols & André Cia — © 2026 7D/SECRETS LTDA*
