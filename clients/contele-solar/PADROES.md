# Padrões consolidados — Contele Solar

Regras específicas deste cliente, herdadas **na íntegra** do documento de handoff aprovado que PH recebeu ([referência](referencias/2026-07-30-briefing-social-media-recebido.md)). Vale junto com o [voice-quality-checklist](../../shared/voice-quality-checklist.md), o [anti-ai-protocol](../../.claude/rules/anti-ai-protocol.md) e os anti-padrões do [context.md](context.md). **Toda peça passa por aqui antes de ir pro designer — aqui a direção já é aprovada, não proposta.**

---

## 1. Paleta — 6 tokens, usar sempre por nome

| Token | Hex | Uso | Regra |
|---|---|---|---|
| **Ink** | `#0E1E33` | Azul-marinho profundo (mar). Fundo de posts de prova; texto principal sobre areia. | |
| **Sand** | `#F5EEE0` | Off-white quente (areia). Fundo padrão de posts claros. | |
| **Sun** | `#E8A233` | Ocre-âmbar. | **Único acento vivo** — números-chave, kickers, destaque tipográfico. |
| **Sun deep** | `#C57E1D` | Sol mais escuro. | Textos-acento sobre fundo Sand. |
| **Sea** | `#6D96B0` | Azul dessaturado. | Labels e metadata sobre fundo Ink. |
| **Coral** | `#B85C3A` | | **Só** o valor "antes" nas provas de economia — nunca decorativo, nunca em outro contexto. |

⛔ **Zero degradê laranja-vermelho.** Cada post usa no máximo 3 cores (fundo + texto + 1 acento).

## 2. Tipografia

| Papel | Estilo | Exemplos | Regra |
|---|---|---|---|
| Display (manchetes, números) | Serif itálico | Iowan Old Style, Palatino, Georgia | É a personalidade da marca — **nunca CAPS**, o itálico já dá o peso. |
| Corpo (legendas, informação) | Sans humanista | Inter, Helvetica Neue, system-ui | Sem CAPS gratuito. |
| Utilitário (localidade, ficha técnica, data) | Mono | SF Mono, Menlo | Letter-spacing 0.06–0.14em, uppercase. |

## 3. Composição — regras rígidas

- **Uma ideia por post.** Cabem duas → vira carrossel.
- **Safe area de 80px** em todos os lados do 1080×1080.
- ⛔ **Zero tarja de telefone/cidade dentro da arte** — vai pra bio + primeiro comentário fixado.
- **Números tabulares** sempre que houver comparação de valores.
- **Foto real de instalação > ilustração** de casinha com painel.
- Antes de aprovar uma peça, mockup mental do grid 3×3 (a peça no meio de 8 outras) — se destoa, volta.

## 4. Estrutura fixa por pilar (obrigatório alternar)

### Pilar 1 — Educativo
Fundo Sand · número grande serif itálico Ink · kicker Sun deep uppercase · frase de contexto serif regular · rodapé mono discreto.
- Kicker: `DICA · [TEMA]`
- Número/estatística: uma coisa só, gigante
- Frase de amarração: 1 linha, até 22 palavras
- Rodapé: `@contelesolarenergy` + numeração (ex. `01/03`)

### Pilar 2 — Prova social
Fundo Ink · comparação Antes/Depois em serif · "Antes" em Coral com strike-through · "Depois" em Sun itálico · ficha técnica em mono/Sea.
- Kicker: `CLIENTE · [MÊS]`
- Antes: `R$ X.XXX,XX` (coral, strike) · Depois: `R$ XXX,XX` (sun, itálico)
- Meta serif itálico: "Residência da família X, [contexto]"
- Ficha técnica mono: `BAIRRO · CIDADE · X kWp · X módulos`
- Rodapé com % de redução
- ⛔ **Precisa de caso real confirmado** — nome, valores e ficha técnica do cliente de verdade. Nunca usar os exemplos do guia de voz (família Marques, Rafaela) como copy literal (ver [BRIEFING §6](BRIEFING.md)).

### Pilar 3 — Institucional/local
Foto real de equipe/instalação (tratada) ou composição editorial (sol + telhado + palmeira) · citação serif itálico · atribuição mono uppercase com cidade.
- Kicker: `SOBRE NÓS · QUEM INSTALA`
- Citação: até 25 palavras, tom coloquial
- Atribuição: `Nome — Contele` + `Cidade · RJ`

## 5. Voz — sim / não

**Sim:**
- Gancho concreto + dado real, na mesma frase.
- Nome de bairro/praia/rua em algum canto de toda peça — "se não tem, o post não sai".
- Ficha técnica pequena no rodapé da legenda quando houver caso real.
- CTA único e explícito, rotacionando entre: "manda SOL no direct" / "salva pra depois" / "marca alguém que paga muito de luz".
- Legenda em AIDA curto: hook (linha 1) → dor → solução → CTA.

**Não:**
- CAPS + exclamação + emoji colorido empilhado.
- Print de conta de luz colado com carimbo "ANTES/DEPOIS".
- Telefone/cidade em tarja na arte.
- Copy genérica sem endereço/local.
- Mais de 2 emojis por legenda, ou emoji colorido. Mais de um CTA por legenda.
- ⛔ **Zero menção a "queima combustível"/"sem fumaça"/"sem combustão"**, mesmo só pra descrever o painel solar — a frase implica contraste com algo que queima combustível, e a matriz elétrica brasileira é majoritariamente **hidrelétrica** (usa água de rio, não combustão), então a comparação embutida é factualmente imprecisa. Falar apenas que a energia solar **é uma fonte sustentável/limpa**, sem entrar em "não queima X" ou qualquer comparação (explícita ou implícita) contra a energia da rede. (PH, 2026-08-13, corrigindo o post de 14/08.)

## 6. Ritmo semanal e stories

- **3 estáticos/semana** (1 por pilar, alternando) + **2 Reels/semana**.
- Reels: primeira frase fisga em 2s com dado real (ex. "a conta da Rafaela caiu de 3 mil pra 100 reais" > pergunta genérica).
- **Stories — rotina fixa:** segunda anuncia a semana · terça mostra instalação · quarta responde dúvida · quinta cliente falando · sexta bastidor · sábado dica · domingo pausa ou repost.
- **Grid:** alternar pilares por linha (Educ · Prova · Local · Local · Reel · Educ...).

## 7. Métricas mensais a reportar

Seguidores, alcance, salvamentos por post (proxy de valor educativo), DMs iniciadas por CTA, cliques no Linktree.

## 8. Fatos operacionais — fonte única (não completar de cabeça)

| Fato | Valor confirmado | Fonte |
|---|---|---|
| Handle | @contelesolarenergy | Perfil |
| Sede | Araruama/RJ | Briefing |
| Área de atuação | Cabo Frio, Búzios, São Pedro da Aldeia, Iguaba, Arraial | Briefing |
| Ticket médio | R$ 25–40 mil (residencial) | Briefing |
| Prova numérica | +700 sistemas instalados | Briefing |
| CTA de conversão | DM do Instagram ("manda SOL no direct") | Briefing — ⚠️ confirmar se não há WhatsApp oficial ([OPEN-QUESTIONS](OPEN-QUESTIONS.md)) |
| Link | Linktree na bio (mantido como está) | Briefing |
| WhatsApp/telefone/CNPJ/endereço físico/horário | **Não informado no documento** | — |

**O que falta não trava a execução dentro do sistema visual/de voz** (isso já está fechado) — trava especificamente peças de Prova Social (precisam de caso real) e qualquer peça que dependa de canal de contato além do DM/Linktree.

---

## Histórico

- **2026-08-13** — PH adicionou regra em §5: zero menção a "queima combustível"/"sem fumaça" pra falar do painel solar, mesmo sem comparar explicitamente com a rede — a matriz brasileira é majoritariamente hidrelétrica (rio, não combustão), então a comparação embutida é imprecisa. Falar só que é fonte sustentável. Aplicado retroativamente no post de 14/08 ([conteudo/posts/2026-08-14-dia-de-combate-a-poluicao.md](conteudo/posts/2026-08-14-dia-de-combate-a-poluicao.md)).
- **2026-07-30** — criado no onboarding, transcrevendo na íntegra as regras do documento de handoff aprovado que PH recebeu. Nenhuma regra aqui é proposta da Lone — são as regras já definidas para o cliente.
