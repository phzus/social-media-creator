# onboarding-expert

> Onboarding completo do expert em 4 fases: Coleta, Briefing Duplo, Montagem de Squad e Personalização de documentos derivados.

```yaml
task:
  name: onboarding-expert
  description: "Onboarding completo do expert com questionário, briefings, montagem de squad e personalização de documentos derivados"
  agent: theboss
  inputs:
    - informações do expert
    - informações do produto/serviço
  outputs:
    - BRIEFING-ESTRATEGICO preenchido
    - BRIEFING-COPY preenchido
    - SQUAD.md montado
    - documentos derivados (COMUNICACAO, AVATAR, OFERTA, FUNIL)
  dependencies:
    tasks: []
    templates: [QUESTIONARIO-EXPERT, BRIEFING-ESTRATEGICO, BRIEFING-COPY, COMUNICACAO, AVATAR, OFERTA, FUNIL, SQUAD]
  execution:
    mode: interactive
    elicit: true
```

## Objetivo

Conduzir o onboarding completo de um novo expert, coletando todas as informações necessárias para alimentar o sistema de marketing e gerar todos os documentos estratégicos do projeto.

## Pré-condições

- [ ] Expert disponível para responder o questionário completo
- [ ] Templates base carregados no sistema
- [ ] Informações mínimas do produto/serviço disponíveis

## Passos

### Fase 1 — Coleta
1. Aplicar QUESTIONARIO-EXPERT (21 perguntas) de forma conversacional
2. Validar respostas e pedir complementos quando necessário
3. Registrar todas as respostas no formato estruturado

### Fase 2 — Briefing Duplo
4. Preencher BRIEFING-ESTRATEGICO com dados coletados
5. Preencher BRIEFING-COPY (5 partes) com dados coletados
6. Submeter ambos para aprovação do expert

### Fase 3 — Montagem de Squad
7. Analisar tipo de funil e necessidades do projeto
8. Montar SQUAD.md com agentes adequados
9. Criar estrutura de pastas do projeto

### Fase 4 — Personalização
10. Gerar COMUNICACAO a partir do briefing
11. Gerar AVATAR detalhado
12. Gerar OFERTA estruturada
13. Gerar FUNIL com fases e peças

## Entrega

Pacote completo de onboarding com todos os documentos gerados, squad montado e estrutura de projeto pronta para execução.

## Checklist

- [ ] Questionário com 21 perguntas respondidas
- [ ] BRIEFING-ESTRATEGICO preenchido e aprovado
- [ ] BRIEFING-COPY preenchido (5 partes)
- [ ] SQUAD.md montado com agentes designados
- [ ] Estrutura de pastas criada
- [ ] COMUNICACAO gerada
- [ ] AVATAR definido
- [ ] OFERTA estruturada
- [ ] FUNIL mapeado
