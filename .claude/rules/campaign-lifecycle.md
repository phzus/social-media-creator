# Campaign Lifecycle — Marketing Squad Extremo

## Ciclo de Vida de uma Campanha

Toda campanha/projeto no MSE segue um ciclo de vida padronizado com gates obrigatórios entre fases.

## Fases

```
PESQUISA -> INSTILACAO -> BRIEFING -> PLANEJAMENTO -> BRANDBOOK -> MONTAGEM -> PRODUCAO -> REVISAO -> APROVACAO -> EXECUCAO -> MONITORAMENTO -> ENCERRAMENTO
```

### 0. PESQUISA DE MERCADO
- **Status:** `researching`
- **Responsavel:** @analyzer (com squad de pesquisa paralela)
- **Entradas:** Nicho, sub-nicho, nomes de concorrentes, mercado-alvo
- **Saidas:** Relatorio de Pesquisa de Mercado completo (HTML visual) — 8 frentes: mercado, concorrencia, conteudo, avatar, objecoes, benchmarks, gaps, tendencias
- **Gate:** @theboss revisou + Anthony aprovou pesquisa

### 0.5. INSTILACAO DE TOM DE VOZ
- **Status:** `voice_instillation`
- **Responsavel:** @analyzer
- **Entradas:** Materiais do expert (YouTube, Instagram, blog, podcasts, lives, emails, WhatsApp, livros)
- **Saidas:** COMUNICACAO.md completo (HTML visual) — tom de voz, vocabulario, girias, jargoes, estilo de escrita, analogias, exemplos reais, guia de aplicacao, anti-patterns
- **Gate:** @theboss revisou + Anthony aprovou COMUNICACAO.md
- **Protocolo:** `core/protocols/voice-instillation-protocol.md`

### 1. BRIEFING
- **Status:** `draft`
- **Responsavel:** @theboss
- **Entradas:** Expert, produto, publico-alvo + **Pesquisa de Mercado aprovada + COMUNICACAO.md aprovado**
- **Saidas:** QUESTIONARIO-EXPERT preenchido (agora INFORMADO pela pesquisa)
- **Gate:** Expert respondeu todas as 21 perguntas

### 2. PLANEJAMENTO
- **Status:** `planning`
- **Responsavel:** @theboss
- **Entradas:** Questionario preenchido + Pesquisa de Mercado + COMUNICACAO.md
- **Saidas:** BRIEFING-ESTRATEGICO + BRIEFING-COPY + OFERTA.md + FUNIL.md
- **Gate:** Anthony APROVOU briefing estrategico

### 2.5. BRANDBOOK
- **Status:** `branding`
- **Responsavel:** @picasso
- **Entradas:** Briefing aprovado, COMUNICACAO.md, referencias visuais do expert
- **Saidas:** Brandbook completo (HTML visual) com 4 opcoes de logo, tipografia, cores, elementos graficos, guia de aplicacao
- **Gate:** Anthony ESCOLHEU 1 logo + APROVOU Brandbook completo (QG-002.5)

### 3. MONTAGEM
- **Status:** `assembling`
- **Responsável:** @theboss
- **Entradas:** Briefing aprovado, tipo de funil
- **Saídas:** SQUAD.md + estrutura de pastas + CRONOGRAMA.md
- **Gate:** Checklist squad-formation 100% marcado

### 4. PRODUÇÃO
- **Status:** `in_production`
- **Responsável:** Squad designado
- **Entradas:** Briefings + templates + delegações
- **Saídas:** Todas as peças (copy, criativos, páginas, automações)
- **Gate:** Cada entrega revisada por @theboss (copy-review checklist)

### 5. REVISÃO
- **Status:** `in_review`
- **Responsável:** @theboss
- **Entradas:** Todas as peças produzidas
- **Saídas:** Peças aprovadas ou com feedback de correção
- **Gate:** Score de qualidade >= 75% em todas as peças

### 6. APROVAÇÃO
- **Status:** `awaiting_approval`
- **Responsável:** Anthony
- **Entradas:** Peças revisadas + relatório de @theboss
- **Saídas:** GO / NO-GO
- **Gate:** Anthony deu GO explícito

### 7. EXECUÇÃO
- **Status:** `live`
- **Responsável:** Squad (conforme workflow do funil)
- **Entradas:** Peças aprovadas
- **Saídas:** Campanha no ar
- **Gate:** Checklist campaign-launch 100% marcado

### 8. MONITORAMENTO
- **Status:** `monitoring`
- **Responsável:** @metrics + @cadu
- **Entradas:** Campanha ativa
- **Saídas:** Relatórios diários/semanais, otimizações
- **Gate:** Métricas dentro dos benchmarks ou ação corretiva tomada

### 9. ENCERRAMENTO
- **Status:** `completed`
- **Responsável:** @metrics + @theboss
- **Entradas:** Campanha finalizada + dados consolidados
- **Saídas:** campaign-report completo + lessons learned
- **Gate:** Relatório final entregue e revisado

## Transições de Status

```
researching → voice_instillation → draft → planning → branding → assembling → in_production → in_review
→ awaiting_approval → live → monitoring → completed
```

### Transições Especiais
- `in_review` → `in_production` (se peça reprovada — volta para correção)
- `awaiting_approval` → `planning` (se Anthony reprovou — replanejar)
- `live` → `paused` (se problema crítico detectado)
- `paused` → `live` (após correção)

## Regras

1. **Nenhuma fase pode ser pulada** — todas são obrigatórias
2. **Gates são bloqueantes** — não avança sem cumprir
3. **Status deve ser atualizado** em tempo real no SQUAD.md do projeto
4. **Anthony tem poder de veto** em qualquer fase
5. **@theboss monitora** todas as transições

---
*Campaign Lifecycle — Marketing Squad Extremo v1.0*
