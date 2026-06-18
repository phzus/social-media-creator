# structure-offer

Task de estruturacao da oferta usando o framework Grand Slam Offers de Alex Hormozi. Transforma o produto do expert numa oferta irresistivel.

```yaml
task:
  name: structure-offer
  description: "Estruturar oferta irresistivel usando framework Hormozi"
  agent: theboss
  support: claudinho
  priority: high

dependencies:
  requires:
    - onboarding-expert (briefing aprovado)
    - define-funnel (funil definido)
  templates:
    - OFERTA.md
  frameworks:
    - hormozi-offer.md
    - hormozi-leads.md

inputs:
  - briefing-estrategico (aprovado)
  - briefing-copy (se disponivel)
  - pesquisa-de-mercado (se disponivel)

outputs:
  - "{PROJ}_DOC_OFERTA_V1.md"

elicit: true
```

---

## Workflow

### Fase 1: Entender o Produto Atual

Extrair do briefing:
- O que o expert vende hoje?
- Qual o formato? (curso, mentoria, consultoria, comunidade, SaaS)
- Qual o preco atual?
- Qual o resultado prometido?
- Quanto tempo leva para o cliente ter resultado?
- Qual o esforco necessario do cliente?

### Fase 2: Aplicar a Equacao de Valor (Hormozi)

```
              Resultado Desejado × Probabilidade Percebida
VALOR = ────────────────────────────────────────────────────
              Tempo ate Resultado × Esforco/Sacrificio
```

Para cada alavanca, definir como MAXIMIZAR (numerador) ou MINIMIZAR (denominador):

**Alavanca 1 — Resultado Desejado (MAXIMIZAR)**
- Qual o resultado dos sonhos do avatar?
- Como tornar esse resultado mais tangivel e especifico?
- Qual o resultado *alem* do resultado? (meta-resultado)

**Alavanca 2 — Probabilidade Percebida (MAXIMIZAR)**
- Quais provas sociais existem? (depoimentos, cases, numeros)
- Que garantias podemos oferecer?
- Qual a credibilidade do expert no nicho?
- Que mecanismo unico torna o resultado mais provavel?

**Alavanca 3 — Tempo ate Resultado (MINIMIZAR)**
- Em quanto tempo o cliente ve o primeiro resultado?
- Como acelerar a entrega de valor?
- Quick wins: o que pode ser entregue imediatamente?

**Alavanca 4 — Esforco/Sacrificio (MINIMIZAR)**
- O que o cliente precisa fazer?
- Como reduzir a friccao?
- O que pode ser feito PARA ele (em vez de por ele)?
- Que ferramentas/templates facilitam?

### Fase 3: Montar os 9 Elementos da Oferta

#### 1. Resultado Desejado
```
O que o cliente vai conquistar: {resultado especifico e mensuravel}
Em quanto tempo: {prazo realista}
Prova: {depoimento/case/dado}
```

#### 2. Veiculo (Como)
```
Formato de entrega: {curso / mentoria / comunidade / consultoria}
Diferenciais do formato: {por que esse formato e melhor}
```

#### 3. Mecanismo Unico
```
Nome do mecanismo: {nome proprietario do metodo}
Por que funciona: {explicacao simples}
Por que e diferente: {vs. concorrentes}
Referencia: Todd Brown Unique Mechanism framework
```

#### 4. Value Stack (Pilha de Valor)

| # | Componente | Valor Percebido | Resolve qual problema |
|---|-----------|-----------------|----------------------|
| 1 | {produto principal} | R$ {valor} | {problema} |
| 2 | {bonus 1} | R$ {valor} | {problema} |
| 3 | {bonus 2} | R$ {valor} | {problema} |
| 4 | {bonus 3} | R$ {valor} | {problema} |
| 5 | {bonus 4} | R$ {valor} | {problema} |
| | **TOTAL** | **R$ {soma}** | |
| | **Preco real** | **R$ {preco}** | |

**Regra dos bonus:** Cada bonus deve resolver uma objecao especifica ou eliminar uma barreira.

#### 5. Preco + Ancoragem
```
Valor total da pilha: R$ {valor alto}
Preco de lancaramento: R$ {preco real}
Economia: {X}% de desconto
Parcelamento: {12x de R$ XX}
Custo por dia: R$ {valor/365}
Comparacao: "Menos que {referencia cotidiana}"
```

#### 6. Garantia
Escolher o tipo mais forte possivel:

```
☐ Incondicional (30/60/90 dias, sem perguntas)
☐ Condicional (faca X, se nao funcionar, devolvemos)
☐ Performance (se nao atingir Y resultado, devolvemos)
☐ Garantia reversa ("Se nao funcionar, eu pago voce")
☐ Anti-garantia ("Sem garantia — e serio demais para quem nao se compromete")
```

#### 7. Bonus (mapeados por objecao)

| Objecao | Bonus que resolve | Formato |
|---------|-------------------|---------|
| "Nao tenho tempo" | {bonus de atalho} | {template/ferramenta} |
| "Nao sei se funciona pra mim" | {bonus de case} | {video/depoimento} |
| "E caro demais" | {bonus de ROI} | {calculadora/planilha} |
| "Nao sei por onde comecar" | {bonus quick start} | {guia/checklist} |

#### 8. Urgencia e Escassez (REAIS)
```
☐ Deadline de inscricao: {data}
☐ Vagas limitadas: {numero} (justificativa: {motivo real})
☐ Bonus exclusivo: {bonus} valido ate {data}
☐ Preco especial: valido ate {data/condicao}

REGRA: Toda escassez DEVE ser REAL. Nunca fabricar urgencia falsa.
```

#### 9. Nome da Oferta
```
Nome: {nome memoravel e descritivo}
Tagline: {frase curta que resume o beneficio}
```

### Fase 4: Validar a Oferta

Teste de validacao — a oferta deve passar em TODOS:

```
☐ O resultado e claro e mensuravel?
☐ A probabilidade percebida e alta? (provas suficientes)
☐ O tempo ate resultado e aceitavel?
☐ O esforco do cliente e minimo?
☐ O preco parece uma pechincha comparado ao valor?
☐ A garantia remove o risco?
☐ Os bonus sao relevantes (nao enchimento)?
☐ A urgencia e real?
☐ O mecanismo unico esta claro?
☐ Um desconhecido entenderia a oferta em 30 segundos?
```

### Fase 5: Gerar Documento de Oferta

Preencher o template OFERTA.md com todos os 9 elementos.

Salvar como: `projects/{expert}/{PROJ}_DOC_OFERTA_V1.md`

### Fase 6: Apresentar para Aprovacao

Resumo executivo para o Anthony:
- Resultado prometido
- Preco e ancoragem
- Value stack completa
- Garantia escolhida
- Mecanismo unico
- Bonus e o que cada um resolve

---

## Checklist de Validacao

```
☐ Equacao de valor foi aplicada nas 4 alavancas?
☐ Os 9 elementos estao preenchidos?
☐ Value stack tem pelo menos 4 componentes?
☐ Bonus resolvem objecoes reais?
☐ Garantia e a mais forte possivel para o caso?
☐ Urgencia/escassez sao reais?
☐ Mecanismo unico esta nomeado e explicado?
☐ Teste de validacao passou em todos os itens?
☐ Documento OFERTA.md esta completo?
```

---
*Task: structure-offer — Marketing Squad Extremo v1.0*
