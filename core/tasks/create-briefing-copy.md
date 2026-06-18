# create-briefing-copy

> Criacao do briefing de copy completo em 5 partes usando o template BRIEFING-COPY.
> Este documento e a BASE de toda producao de copy do projeto.

```yaml
task:
  name: create-briefing-copy
  description: "Preencher briefing de copy em 5 partes a partir do questionario e briefing estrategico aprovado"
  agent: theboss
  agents:
    primary: theboss
    secondary: claudinho
  inputs:
    required:
      - QUESTIONARIO-EXPERT preenchido (21 respostas)
      - BRIEFING-ESTRATEGICO aprovado pelo Anthony
    optional:
      - Dados de pesquisa do @analyzer (mercado, concorrencia)
      - Materiais existentes do expert (videos, posts, depoimentos)
  outputs:
    - "{PROJ}_DOC_BRIEFING-COPY_V1.md"
  dependencies:
    tasks: [onboarding-expert]
    templates: [BRIEFING-COPY, COMUNICACAO, AVATAR, OFERTA]
    frameworks: [hormozi-offer, todd-brown-mechanism, kennedy-direct-response]
  execution:
    mode: interactive
    elicit: true
    estimated_duration: "2-4 horas"
```

## Objetivo

Gerar o briefing de copy completo que servira de base para TODA a comunicacao escrita do projeto. Dividido em 5 partes estrategicas, este documento alimenta diretamente o @claudinho e qualquer agente que produza copy.

**Sem BRIEFING-COPY preenchido, NENHUMA peca de copy e produzida.** (Constitution Art. I — Briefing First)

## Pre-condicoes

- [ ] QUESTIONARIO-EXPERT preenchido com todas as 21 respostas
- [ ] BRIEFING-ESTRATEGICO aprovado pelo Anthony
- [ ] Template BRIEFING-COPY.md disponivel
- [ ] @theboss revisou respostas do questionario e identificou pontos-chave

## Fluxo de Execucao

```
QUESTIONARIO-EXPERT (coleta narrativa — ja preenchido)
    |
    v
@theboss extrai dados-chave das 21 respostas
    |
    v
@theboss + @claudinho preenchem BRIEFING-COPY (5 partes)
    |
    v
@theboss revisa e aprova
    |
    v
Documentos derivados: COMUNICACAO.md, AVATAR.md (se nao existem)
    |
    v
BRIEFING-COPY pronto para uso pelo squad
```

## Passos Detalhados

### Parte 1 — Estrategia de Campanha

**Responsavel:** @theboss (com input do @claudinho)

1. **Big Idea** — A ideia central que move toda a campanha
   - Qual e a grande promessa que diferencia este expert/produto?
   - Extrair da resposta do questionario: "Como voce apresentaria o produto pra alguem com pressa no elevador?"
   - Deve ser UNICA — se o concorrente pode dizer o mesmo, nao e Big Idea

2. **Mecanismo Unico** — COMO a solucao funciona (Todd Brown)
   - Mecanismo do Problema: por que as solucoes tradicionais falham?
   - Mecanismo da Solucao: o que torna ESTA abordagem diferente?
   - Nao e feature — e o PRINCIPIO por tras do resultado
   - Ref: `core/frameworks/todd-brown-mechanism.md`

3. **Narrativa Central** — A historia que conecta expert ao avatar
   - Jornada do expert (de onde saiu, o que enfrentou, o que descobriu)
   - Momento de virada (epifania)
   - Como isso gera a solucao que oferece hoje

4. **Linha da Promessa** — Sequencia promessa → prova → oferta
   - Promessa principal (resultado tangivel)
   - Provas que sustentam (dados, cases, depoimentos)
   - Transicao natural para a oferta

### Parte 2 — Posicionamento & Causa

**Responsavel:** @theboss

5. **Inimigos em Comum** — Contra quem/o que lutamos?
   - Inimigos do avatar (crencas limitantes, sistema, concorrentes genericos)
   - Posicionar o expert CONTRA algo gera pertencimento
   - Exemplos: "contra o ensino tradicional", "contra coaches rasos"

6. **Consequencias** — O que acontece se NAO agir?
   - Consequencias de curto prazo (imediatas)
   - Consequencias de longo prazo (projecao do futuro sem acao)
   - Criar urgencia real baseada em realidade, nao manipulacao

7. **Movimento/Causa** — Bandeira que o expert levanta
   - Qual causa maior o expert representa?
   - O avatar se junta a uma TRIBO, nao compra um produto
   - Ref: Expert Secrets (Russell Brunson) — Mass Movement

### Parte 3 — Funil & Conteudo

**Responsavel:** @theboss (com input do @claudinho)

8. **Funil Invisivel** — Conteudo por nivel de consciencia (Schwartz)
   - **Topo:** Conteudo para Unaware/Problem Aware (educa sobre o problema)
   - **Meio:** Conteudo para Solution Aware (mostra o mecanismo)
   - **Fundo:** Conteudo para Product Aware (apresenta a oferta)
   - Mapear pecas de copy por nivel

9. **Objetivos por Fase** — O que cada peca deve conquistar
   - Captacao: registrar lead + gerar expectativa
   - Antecipacao: aquecer + criar antecipacao + construir autoridade
   - Evento: entregar valor + revelar mecanismo + criar desejo
   - Vendas: converter + quebrar objecoes + urgencia real
   - Pos-venda: confirmar decisao + reter + pedir depoimento

### Parte 4 — Avatar & Psicologia Profunda

**Responsavel:** @claudinho (com validacao do @theboss)

10. **Avatar Detalhado** — Perfil completo do comprador ideal
    - Demografico: idade, genero, profissao, renda, localizacao
    - Psicografico: valores, medos, aspiracoes, frustracao principal
    - Comportamento: onde consome conteudo, quem segue, que linguagem usa

11. **Dores** — Problemas que o avatar SABE que tem
    - Listar 5-10 dores conscientes (verbalizadas)

12. **Dores Profundas** — O que REALMENTE dói (mas nao verbaliza)
    - Medo subjacente (ex: "medo de ser visto como fracassado")
    - Vergonha (ex: "nao ter resultados pra mostrar")
    - Frustacao interna (ex: "ja tentou tudo e nada funcionou")

13. **Desejos** — O que o avatar DIZ que quer
    - Listar 5-10 desejos explícitos

14. **Desejos Profundos** — O que REALMENTE quer (mas nao admite)
    - Status, reconhecimento, liberdade, pertencimento
    - O desejo emocional por tras do desejo racional

15. **Ponto de Ruptura** — O momento em que o avatar DECIDE agir
    - Qual e o gatilho que faz passar de "pensando" para "comprando"?
    - Evento especifico, deadline, frustracao acumulada
    - Copy deve ATIVAR esse ponto de ruptura

### Parte 5 — Objecoes & Contra-argumentos

**Responsavel:** @claudinho

16. **Objecoes Explícitas** — O que o avatar DIZ como desculpa
    - "E caro" → Reframe de investimento vs custo
    - "Nao tenho tempo" → Formato acessivel + resultado rapido
    - "Ja tentei e nao deu" → Mecanismo unico = abordagem diferente
    - "Preciso pensar" → Escassez real + consequencia de nao agir

17. **Objecoes Ocultas** — O que o avatar PENSA mas nao diz
    - "Sera que funciona pra MIM?" → Cases similares
    - "E se eu nao conseguir?" → Garantia + suporte
    - "Meu marido/esposa nao vai concordar" → ROI claro

18. **Provas & Evidencias** — Arsenal de credibilidade
    - Depoimentos (video > texto > print)
    - Numeros e dados concretos
    - Cases de sucesso com detalhes (antes/depois)
    - Certificacoes, premios, tempo de mercado
    - Midia espontanea, publicacoes, participacoes

## Validacao de Qualidade

Antes de considerar o BRIEFING-COPY pronto, verificar:

| Criterio | Check |
|----------|-------|
| Big Idea e UNICA (concorrente nao pode copiar)? | [ ] |
| Mecanismo Unico tem 3 partes (problema + solucao + principio)? | [ ] |
| Narrativa tem arco completo (problema → virada → solucao)? | [ ] |
| Avatar tem dores PROFUNDAS (nao so superficiais)? | [ ] |
| Ponto de Ruptura esta identificado? | [ ] |
| Pelo menos 5 objecoes com contra-argumentos? | [ ] |
| Provas de suporte sao REAIS (nao inventadas)? | [ ] |
| Tom de voz do expert esta capturado? | [ ] |

## Entrega

Arquivo salvo como `{PROJ}_DOC_BRIEFING-COPY_V1.md` na raiz do projeto, contendo:

- 5 partes completas com todos os campos preenchidos
- Pronto para uso pelo @claudinho na criacao de todas as pecas de copy
- Revisado e aprovado pelo @theboss
- Referenciado por TODOS os agentes que produzem comunicacao

## Documentos Derivados

Apos preencher o BRIEFING-COPY, gerar/atualizar:
- `{PROJ}_DOC_COMUNICACAO_V1.md` — Extraido das partes 1 e 2
- `{PROJ}_DOC_AVATAR_V1.md` — Extraido da parte 4

## Gate

**BLOCK: Nenhuma peca de copy e produzida sem BRIEFING-COPY preenchido e aprovado.**

---
*Task: create-briefing-copy — Marketing Squad Extremo v1.1*
