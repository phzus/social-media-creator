# qualify-leads

Task de qualificacao de leads pelo SDR. Usa framework BANT para pontuar e classificar leads antes de passar para o closer.

```yaml
task:
  name: qualify-leads
  description: "Qualificar leads usando BANT e preparar passagem para closer"
  agent: danilo
  support: andreza, salazar
  priority: high

dependencies:
  requires:
    - define-funnel (funil definido — High Ticket ou Evento)
    - structure-offer (oferta definida)
  templates:
    - PASSAGEM-LEAD.md
    - AVATAR.md

inputs:
  - oferta (produto, ticket, formato)
  - avatar (perfil do publico)
  - leads captados (lista de contatos)

outputs:
  - Leads qualificados com score BANT
  - Passagens de lead preenchidas (SDR → Closer)

elicit: false
```

---

## Workflow

### Fase 1: Configurar Cadencia de Contato

**Cadencia padrao SDR (7 toques em 14 dias):**

| Dia | Canal | Acao | Objetivo |
|-----|-------|------|----------|
| D+0 | WhatsApp | Mensagem de apresentacao | Abrir conversa |
| D+1 | Email | Email de valor (conteudo relevante) | Gerar interesse |
| D+2 | WhatsApp | Follow-up + pergunta qualificadora | Iniciar BANT |
| D+4 | Telefone | Ligacao (se numero disponivel) | Qualificar |
| D+7 | WhatsApp | Conteudo + case de sucesso | Prova social |
| D+10 | Email | Urgencia (vagas limitadas) | Criar FOMO |
| D+14 | WhatsApp | Ultimo contato (porta aberta) | Ultima chance |

**Regras:**
- Maximo 7 tentativas de contato
- Se nao responder apos 7 toques → mover para nurture
- Se responder e qualificado → agendar call imediata
- Se responder e nao qualificado → devolver para nurture com tag

### Fase 2: Qualificacao BANT

Para cada lead que responder, aplicar BANT:

#### B — Budget (Orcamento)
| Score | Criterio |
|-------|----------|
| 5 | Tem orcamento disponivel e confirmado |
| 4 | Tem orcamento mas precisa de aprovacao |
| 3 | Pode investir mas precisa se organizar |
| 2 | Orcamento apertado, precisaria parcelar muito |
| 1 | Sem orcamento no momento |

**Perguntas:**
- "Voce ja investiu em {tipo de produto} antes? Quanto?"
- "Qual faixa de investimento voce esta considerando?"
- "Ja separou orcamento para isso?"

#### A — Authority (Autoridade)
| Score | Criterio |
|-------|----------|
| 5 | E o unico decisor |
| 4 | Decisor principal, consulta parceiro/socio |
| 3 | Precisa consultar alguem mas tem influencia |
| 2 | Nao e o decisor, e influenciador |
| 1 | Sem poder de decisao |

**Perguntas:**
- "Essa decisao depende so de voce?"
- "Mais alguem precisa participar dessa conversa?"

#### N — Need (Necessidade)
| Score | Criterio |
|-------|----------|
| 5 | Dor urgente e clara, ja tentou resolver |
| 4 | Tem necessidade real e reconhece |
| 3 | Sabe que precisa mas nao e urgente |
| 2 | Tem interesse mas nao e necessidade |
| 1 | Curiosidade apenas |

**Perguntas:**
- "Qual o maior desafio que voce enfrenta hoje em {area}?"
- "O que ja tentou fazer para resolver?"
- "Quanto isso esta te custando (tempo/dinheiro/oportunidade)?"

#### T — Timeline (Urgencia)
| Score | Criterio |
|-------|----------|
| 5 | Precisa resolver agora (essa semana) |
| 4 | Quer resolver este mes |
| 3 | Nos proximos 2-3 meses |
| 2 | Algum momento este ano |
| 1 | Sem prazo definido |

**Perguntas:**
- "Em quanto tempo voce gostaria de ver resultados?"
- "Tem alguma data ou evento que torna isso urgente?"

### Fase 3: Classificar o Lead

| Score Total | Classificacao | Acao |
|-------------|---------------|------|
| 16-20 | **HOT** | Passar para @andreza IMEDIATO. Agendar call em ate 24h |
| 10-15 | **WARM** | Passar para @andreza em ate 48h. Continuar nutrindo |
| 6-9 | **COLD** | Devolver para nurture. Reavaliar em 30 dias |
| 1-5 | **DISQUALIFIED** | Nao e perfil. Remover da cadencia ativa |

### Fase 4: Preparar Passagem de Lead

Para leads HOT e WARM, preencher o template PASSAGEM-LEAD.md:

1. Dados do lead (nome, telefone, email, origem)
2. Score BANT detalhado (4 criterios com justificativa)
3. Classificacao (HOT/WARM)
4. Historico de contato (todos os toques realizados)
5. Informacoes estrategicas para o closer:
   - Dor principal (nas palavras do lead)
   - Desejo principal
   - Objecao identificada
   - Gatilho emocional
   - O que ja tentou antes
   - Momento de vida
6. Produto de interesse e formato da call
7. Notas pessoais do SDR

### Fase 5: Agendar Call

1. Confirmar disponibilidade do closer (@andreza)
2. Propor horarios ao lead (2-3 opcoes)
3. Confirmar agendamento
4. Enviar lembrete D-1 (email + WhatsApp)
5. Enviar lembrete D-0 (30 min antes)

### Fase 6: Handoff

Entregar a passagem para @andreza com:
```
☐ BANT score >= 10?
☐ Lead informado sobre proxima etapa (call)?
☐ Call agendada com data/hora?
☐ Historico completo preenchido?
☐ Informacoes estrategicas preenchidas?
☐ Lead confirmou presenca na call?
```

---

## Scripts SDR

### Abertura (WhatsApp)
```
Ola {nome}! Aqui e o {nome SDR}, da equipe do {expert}.
Vi que voce {acao do lead — se inscreveu / baixou / etc}.
Queria entender um pouco mais sobre o seu momento pra ver se
faz sentido a gente conversar. Posso te fazer umas perguntas rapidas?
```

### Qualificacao (conversa)
```
Legal! Me conta: {pergunta BANT contextualizada}
```

### Agendamento
```
{nome}, pelo que voce me contou, acho que uma conversa com {expert/closer}
pode te ajudar bastante. Temos horarios {dia/hora} e {dia/hora}.
Qual funciona melhor pra voce?
```

### Follow-up (nao respondeu)
```
{nome}, tudo bem? Ainda faz sentido a gente conversar sobre {tema}?
Se o momento nao e agora, sem problema — so me avisa.
```

---
*Task: qualify-leads — Marketing Squad Extremo v1.0*
