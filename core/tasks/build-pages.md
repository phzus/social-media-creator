# build-pages

Task de criacao de landing pages, paginas de vendas, captura, obrigado e checkout. Combina design (@pixel) e implementacao (@nerd).

```yaml
task:
  name: build-pages
  description: "Criar landing pages de alta conversao"
  agent: pixel
  support: nerd, claudinho
  priority: high

dependencies:
  requires:
    - write-copy (copy da pagina pronta)
    - create-creatives (elementos visuais prontos)
    - structure-offer (oferta definida — para pagina de vendas)
  templates:
    - COMUNICACAO.md (identidade visual)
    - TAXONOMIA.md

inputs:
  - copy aprovada da pagina
  - identidade visual
  - elementos graficos (mockups, fotos, icones)
  - oferta completa (para pagina de vendas)

outputs:
  - Briefing completo de cada pagina
  - Nomenclatura: "{PROJ}_{FASE}_PGN_{DESCRICAO}_V1.md"

elicit: false
```

---

## Workflow

### Fase 1: Mapear Paginas Necessarias

Por tipo de funil:

| Funil | Paginas | Prioridade |
|-------|---------|------------|
| PLF Pago | Captura, Obrigado, Vendas, Checkout | Todas alta |
| PLF Gratuito | Captura, Obrigado, Vendas | Todas alta |
| Desafio | Inscricao, Obrigado, Vendas | Todas alta |
| Webinar | Registro, Confirmacao, Replay, Vendas | Todas alta |
| Low Ticket | Captura, Order Form, Upsell, Downsell, Obrigado | Todas alta |
| High Ticket | Aplicacao, Obrigado, Vendas (opcional) | Alta |
| Perpetuo | Captura, Vendas, Checkout | Todas alta |
| Evento Presencial | Inscricao, Confirmacao, Vendas | Todas alta |

### Fase 2: Briefing de Cada Pagina

#### Pagina de Captura (Lead)

```markdown
## Briefing: Pagina de Captura

### Objetivo
Converter visitante em lead (email + nome)

### Estrutura (above the fold)
1. Headline principal (promessa clara)
2. Subheadline (qualificacao + beneficio)
3. Imagem/video hero (expert ou mockup)
4. Formulario (nome + email + CTA)
5. Prova social minima (X alunos, selo, logo)

### Estrutura (below the fold — opcional)
6. 3 bullets de beneficio
7. Mini bio do expert
8. FAQ (2-3 perguntas)
9. Segundo CTA

### Metricas-alvo
- Taxa de conversao: 25-45% (trafego frio)
- Taxa de conversao: 40-60% (trafego quente)
- Tempo de carregamento: < 3 segundos

### Especificacoes tecnicas
- Mobile-first (70%+ do trafego)
- Sem menu/navegacao (zero distracao)
- Formulario acima da dobra
- Pixel de rastreamento instalado
- Integracao: {ferramenta de email}
```

#### Pagina de Vendas (Sales Page)

```markdown
## Briefing: Pagina de Vendas

### Objetivo
Converter lead em comprador

### Estrutura (long-form)
1. **Pre-headline** (qualificacao: "Para engenheiros que...")
2. **Headline** (promessa principal)
3. **Video de vendas / VSL** (opcional mas recomendado)
4. **Lead** (abertura que prende — historia, dado chocante, pergunta)
5. **Problema** (agitacao da dor, consequencias)
6. **Mecanismo Unico** (por que a solucao funciona)
7. **Apresentacao do Expert** (autoridade + historia)
8. **Oferta** (o que esta incluido)
9. **Value Stack** (lista detalhada com valores)
10. **Bonus** (cada um resolvendo uma objecao)
11. **Preco + Ancoragem** (comparacao de valor)
12. **Garantia** (remocao de risco)
13. **Depoimentos** (prova social — video e texto)
14. **FAQ** (objecoes disfarçadas de perguntas)
15. **CTA Final** (urgencia + escassez)
16. **PS** (ultimo argumento emocional)

### Metricas-alvo
- Taxa de conversao: 1-3% (trafego frio)
- Taxa de conversao: 3-8% (trafego quente/lista)
- Scroll depth: > 60%
- Tempo na pagina: > 3 minutos

### Especificacoes tecnicas
- Mobile-first
- Sem menu (single purpose)
- CTAs repetidos a cada 2-3 secoes
- Checkout integrado ou link direto
- Timer de escassez (se real)
- Pixel de conversao no checkout
```

#### Pagina de Obrigado (Thank You)

```markdown
## Briefing: Pagina de Obrigado

### Objetivo
Confirmar acao + direcionar proximo passo

### Estrutura
1. Confirmacao ("Inscricao confirmada!")
2. Proximo passo claro (checar email, entrar no grupo, etc.)
3. Video do expert (opcional — aumenta conexao)
4. Compartilhamento social (opcional)
5. Oferta complementar (tripwire — opcional)

### Especificacoes
- Simples e direta
- 1 CTA claro (proximo passo)
- Pixel de conversao (evento de lead)
```

#### Order Form 2-Step (Low Ticket)

```markdown
## Briefing: Order Form

### Objetivo
Converter lead em comprador (low ticket)

### Estrutura (2-step)
Step 1: Informacoes de contato (email, nome)
Step 2: Informacoes de pagamento

### Elementos
- Resumo do produto
- Order bump (checkbox com oferta adicional)
- Garantia visivel
- Selos de seguranca
- Depoimento curto

### Metricas-alvo
- Conversao step 1→2: 60-80%
- Conversao geral: 8-15%
- Order bump take rate: 20-40%
```

### Fase 3: Design e UX

Para cada pagina:

**Principios de conversao:**
- Hierarquia visual clara (F-pattern ou Z-pattern)
- Contraste no CTA (cor diferente de tudo)
- Espacamento generoso (breathing room)
- Tipografia legivel (16px+ corpo)
- Imagens que reforcam a mensagem (nao decorativas)
- Velocidade de carregamento (< 3s)

**Mobile-first checklist:**
```
☐ Headline legivel sem zoom?
☐ CTA acessivel com polegar?
☐ Formulario facil de preencher no celular?
☐ Imagens otimizadas (WebP, lazy loading)?
☐ Nenhum scroll horizontal?
☐ Fonte >= 16px no corpo?
```

### Fase 4: Implementacao Tecnica (@nerd)

**Se Lovable (@pixel):**
- Design diretamente na plataforma
- Otimizacao de tokens
- Export do codigo final

**Se codigo customizado (@nerd):**
- HTML/CSS responsivo
- Integracao com plataforma de email
- Pixel de rastreamento (Meta, Google)
- Evento de conversao
- Formulario funcional
- Checkout integrado

### Fase 5: Revisao e QA

```
☐ Pagina carrega em < 3 segundos?
☐ Formulario funciona e envia dados?
☐ Pixel esta disparando eventos corretos?
☐ Responsiva em todos os devices?
☐ Copy esta identica a aprovada?
☐ Links de CTA estao corretos?
☐ Pagina de obrigado esta configurada?
☐ Integracao com email/CRM funciona?
☐ SSL ativo (https)?
☐ Favicon e meta tags configurados?
```

---
*Task: build-pages — Marketing Squad Extremo v1.0*
