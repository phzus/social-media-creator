# close-sales

Task de fechamento de vendas por call (closer). Script completo de venda, quebra de objecoes e tecnicas de fechamento.

```yaml
task:
  name: close-sales
  description: "Conduzir call de vendas e fechar negocio"
  agent: andreza
  support: danilo, theboss
  priority: high

dependencies:
  requires:
    - qualify-leads (lead qualificado e passado)
    - structure-offer (oferta completa)
  templates:
    - PASSAGEM-LEAD.md (recebido do SDR)

inputs:
  - passagem de lead (BANT + historico)
  - oferta completa (value stack, preco, garantia)
  - objecoes mapeadas (do briefing de copy)

outputs:
  - Script de venda
  - Nomenclatura: "{PROJ}_VND_SCV_{DESCRICAO}_V1.md"

elicit: false
```

---

## Workflow

### Fase 1: Preparacao Pre-Call

**15 minutos antes da call:**

1. Reler a passagem de lead do @danilo:
   - Dor principal e desejo
   - Objecao identificada
   - Gatilho emocional
   - O que ja tentou antes
   - Score BANT

2. Preparar abordagem personalizada:
   - Qual historia/case mais se conecta com esse lead?
   - Qual objecao provavelmente vai surgir?
   - Qual o melhor angulo de entrada?

3. Verificar:
   ```
   ☐ Link da call funcionando?
   ☐ Camera e microfone testados?
   ☐ Passagem de lead relida?
   ☐ Oferta e condicoes atualizadas?
   ☐ CRM aberto para anotacoes?
   ```

### Fase 2: Script de Venda (60-90 min)

#### Bloco 1: Rapport (5-10 min)
```
Objetivo: Criar conexao genuina e definir o tom

- "Oi {nome}, tudo bem? Que bom te ver aqui!"
- Comentar algo pessoal (se tem info do SDR)
- "Antes de comecar, quero te contar como funciona essa conversa..."
- Definir expectativas: "Vamos conversar por uns 45-60 minutos.
  Primeiro quero entender seu momento, depois vou te mostrar como
  podemos te ajudar. No final, se fizer sentido pra voce,
  a gente ve os proximos passos. Combinado?"
```

#### Bloco 2: Descoberta (15-20 min)
```
Objetivo: Entender a situacao atual e amplificar a dor

Perguntas de situacao:
- "Me conta, como ta sua situacao hoje em {area}?"
- "Quanto tempo voce ta nessa situacao?"
- "O que voce ja tentou fazer pra resolver?"

Perguntas de dor (aprofundar):
- "E como isso te afeta no dia a dia?"
- "Se nada mudar nos proximos 12 meses, onde voce vai estar?"
- "Quanto isso ta te custando? Nao so em dinheiro, mas em tempo,
  energia, oportunidades..."

Perguntas de desejo:
- "Se pudesse desenhar o cenario ideal, como seria?"
- "O que muda na sua vida quando voce resolver isso?"
- "Qual e o numero/resultado que voce quer atingir?"

IMPORTANTE: Ouvir mais, falar menos. Proporcao 70/30 (lead/closer).
```

#### Bloco 3: Transicao (2-3 min)
```
Objetivo: Resumir e pedir permissao pra apresentar

- "Entao, se eu entendi bem, voce ta em {situacao}, ja tentou
  {tentativas}, e o que voce quer e {desejo}. E isso?"
- (Esperar confirmacao)
- "Legal, eu posso te mostrar como o {produto} pode te ajudar
  com isso? Posso te explicar como funciona?"
```

#### Bloco 4: Apresentacao (15-20 min)
```
Objetivo: Apresentar a oferta conectando com as dores/desejos do lead

1. Contar a historia do expert (breve — autoridade)
2. Apresentar o mecanismo unico
   "A diferenca do que o {expert} faz e {mecanismo unico}..."
3. Mostrar resultados de alunos similares
   "O {case similar} estava na mesma situacao que voce..."
4. Apresentar a oferta (value stack):
   - Produto principal: {o que e, o que entrega}
   - Bonus 1: {resolve objecao X}
   - Bonus 2: {resolve objecao Y}
   - Bonus 3: {resolve objecao Z}
5. Ancoragem de preco:
   "Se voce fosse pagar por tudo isso separado, seriam R${valor alto}.
   Mas o investimento pra essa turma e de apenas R${preco}."
6. Garantia:
   "E pra voce ter total seguranca, o {expert} oferece {garantia}."
```

#### Bloco 5: Fechamento (10-15 min)
```
Objetivo: Pedir a decisao

Fechamento assumido:
- "Entao, faz sentido pra voce? Vamos garantir sua vaga?"
- "Pra gente comecar, eu preciso de {proximos passos}."

Fechamento por opcao:
- "Voce prefere fazer a vista com desconto ou parcelado em 12x?"

Fechamento por urgencia (se real):
- "So temos {X} vagas pra essa turma, e {Y} ja foram preenchidas."
```

#### Bloco 6: Quebra de Objecoes

| Objecao | Resposta |
|---------|----------|
| **"Ta caro"** | "Entendo. Mas me diz: quanto ta te custando NAO resolver isso? Se em 12 meses voce continuar na mesma situacao, quanto vai ter perdido? O investimento de R${preco} e {fracao} do que voce vai ganhar/economizar." |
| **"Preciso pensar"** | "Claro, e importante refletir. Mas me ajuda a entender: o que exatamente voce precisa pensar? E sobre o produto, sobre o investimento, ou sobre outra coisa? Porque muitas vezes 'preciso pensar' na verdade e uma duvida que a gente pode resolver agora." |
| **"Preciso falar com meu conjuge/socio"** | "Total. Mas me diz: se dependesse so de voce, voce entraria? (Se sim:) Que tal a gente agendar uma conversa rapida com {conjuge/socio} pra eu tirar as duvidas dele(a) tambem?" |
| **"Nao e o momento"** | "Entendo. E se eu te perguntar: quando vai ser o momento certo? Porque normalmente o melhor momento e quando a gente sente que precisa, e voce ja demonstrou isso. O risco de esperar e {consequencia}." |
| **"Ja tentei algo parecido"** | "Faz sentido. E por isso que e diferente: {mecanismo unico}. O que voce tentou antes provavelmente nao tinha {diferencial}. O {case} tambem ja tinha tentado e {resultado}." |
| **"Vou pesquisar mais"** | "Claro, pesquisa e importante. O que exatamente voce quer comparar? Porque posso te ajudar a entender as diferencas agora e economizar seu tempo." |

### Fase 3: Pos-Call

**Se FECHOU:**
1. Enviar link de pagamento imediatamente
2. Acompanhar ate o pagamento ser confirmado
3. Enviar mensagem de boas-vindas
4. Registrar no CRM: GANHO + motivo + ticket
5. Notificar @carla para onboarding

**Se NAO FECHOU:**
1. Registrar no CRM: motivo da nao-compra
2. Agendar follow-up (se faz sentido)
3. Avaliar se pode ser recuperado
4. Se objecao real → follow-up em 48h
5. Se desqualificado → devolver para nurture

**Follow-up pos-call (nao fechou):**
| Dia | Acao | Canal |
|-----|------|-------|
| D+1 | Mensagem pessoal + case de sucesso | WhatsApp |
| D+3 | Email com conteudo de valor | Email |
| D+5 | Mensagem final "porta aberta" | WhatsApp |

---

## Metricas do Closer

| Metrica | Meta | Alerta |
|---------|------|--------|
| Taxa de conversao (call → venda) | 30-50% | < 20% |
| Show rate (agendou → apareceu) | 80%+ | < 60% |
| Ticket medio | R$ {valor} | Abaixo da meta |
| Tempo medio de call | 45-60 min | > 90 min ou < 20 min |
| Follow-up close rate | 15-25% | < 10% |

---
*Task: close-sales — Marketing Squad Extremo v1.0*
