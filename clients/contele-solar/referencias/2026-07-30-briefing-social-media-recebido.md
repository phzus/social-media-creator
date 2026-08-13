# Referência — Briefing de social media recebido de PH

**Recebido:** 2026-07-30, via PH · **Fonte:** "contele-brief-ia-social.md" — documento de handoff da própria Lone (versão 1, julho/2026), escrito para uma IA de social media assumir a operação do perfil.

> Transcrição de limpeza (o arquivo original chegou com problema de codificação/acentuação — conteúdo idêntico, só corrigido caractere a caractere). Serve de material-fonte para [BRIEFING.md](../BRIEFING.md), [context.md](../context.md) e [PADROES.md](../PADROES.md). Pra citação literal, usar este arquivo.
>
> Contém: contexto do cliente, diagnóstico do perfil atual, direção de marca aprovada, sistema visual, especificação dos 3 pilares de post, guia de voz, ritmo de publicação e instruções operacionais.

---

## 1. Contexto do cliente

- **Empresa:** Contele — Energia Solar
- **Perfil:** [@contelesolarenergy](https://www.instagram.com/contelesolarenergy/)
- **Região de atuação:** Região dos Lagos (RJ) — Araruama (sede), Cabo Frio, Búzios, São Pedro da Aldeia, Iguaba, Arraial.
- **Ticket médio de projeto:** R$ 25–40 mil (residencial).
- **Diferencial competitivo real:** empresa **local**, com equipe própria que faz visita técnica, projeto, homologação junto à Enel e instalação. Não é revenda de kit.
- **Números que a marca pode reivindicar:** +700 sistemas instalados; atuação consolidada na região.
- **Estado atual do perfil:** 4.254 seguidores · 810 seguindo · Linktree na bio · 7 destaques (Eventos, Instalações, Informações, Dicas, Sobre nós, Clientes, Funcionamento).

---

## 2. Diagnóstico do perfil atual (o que estamos corrigindo)

| # | Problema | Consequência |
|---|---|---|
| 1 | Ruído visual excessivo (4–5 camadas por arte: manchete gigante + subtítulo + ilustração + print de conta + 2 tarjas de rodapé) | Post não é lido em 1s de scroll |
| 2 | Ausência de sistema visual — posts educativos e Reels parecem dois perfis diferentes | Feed olhado inteiro desorganiza |
| 3 | Copy sempre em CAPS + números gigantes + exclamações + emojis coloridos | Fadiga; leitor filtra como panfleto |
| 4 | Prints reais de conta de luz colados com carimbo ANTES/DEPOIS | Aparência amadora, tipo colagem de PowerPoint |
| 5 | Faixa de telefone + cidade em rodapé de toda arte | Rouba espaço nobre; a informação já está na bio |
| 6 | Reels subutilizados (só 2 nos primeiros 12 posts) | Perde alcance orgânico, que hoje vive nos Reels |
| 7 | Bio genérica ("Reduza sua conta de energia") sem CTA claro nem marcador local forte | Sem gancho de conversão |
| 8 | Grid sem padrão de 3 em 3 | Feed não tem ritmo visual |

---

## 3. Direção de marca aprovada

**Tese:** *Menos grito. Mais litoral.*

A Contele é a empresa de solar **da Região dos Lagos** — esse é o ativo. O feed atual não conta essa história, parece panfleto de qualquer cidade. A nova direção troca ruído por uma linguagem editorial calma, com a luz e a paleta da costa. O laranja continua — como **sol**, não como grito. O azul continua — como **mar**, não como fundo genérico.

**Objetivo prático:** um feed que uma pessoa em Araruama olha e reconhece como daqui, e que dá confiança suficiente para assinar um projeto de R$ 30 mil.

---

## 4. Sistema visual

### 4.1 Paleta (tokens, usar sempre por nome)

| Token | Hex | Uso |
|---|---|---|
| **Ink** | `#0E1E33` | Azul-marinho profundo (mar). Fundo dos posts de prova; texto principal sobre areia. |
| **Sand** | `#F5EEE0` | Off-white quente (areia de Araruama ao meio-dia). Fundo padrão de posts claros. |
| **Sun** | `#E8A233` | Ocre-âmbar. **Único acento vivo.** Números-chave, kickers, destaque tipográfico. |
| **Sun deep** | `#C57E1D` | Sol mais escuro para textos-acento sobre areia. |
| **Sea** | `#6D96B0` | Azul dessaturado. Labels e metadata sobre fundo Ink. |
| **Coral** | `#B85C3A` | **Só** para o valor "antes" nas provas de economia. Nunca decorativo. |

**Regra:** cada post usa no máximo 3 cores (fundo + texto + 1 acento). Zero degradê laranja-vermelho.

### 4.2 Tipografia

- **Display (manchetes e números):** serif itálico, ex. `Iowan Old Style`, `Palatino`, `Georgia`. É a personalidade da marca.
- **Corpo (legendas, informação):** sans humanista, ex. `Inter`, `Helvetica Neue`, `system-ui`. Sem CAPS gratuito.
- **Utilitário (localidade, ficha técnica, data):** mono, ex. `SF Mono`, `Menlo`. Letter-spacing 0.06–0.14em, uppercase.

### 4.3 Regras rígidas de composição

- **Uma ideia por post.** Se cabem duas, viram carrossel.
- **Safe area de 80 px** em todos os lados do 1080×1080.
- **Zero tarja de telefone ou cidade** dentro da arte. Vai para bio + primeiro comentário fixado.
- **Números tabulares** (font-variant-numeric: tabular-nums) sempre que houver comparação de valores.
- **Foto real de instalação > ilustração** de casinha com painel.

---

## 5. Os 3 pilares de post (obrigatório alternar)

Todo conteúdo se encaixa em um destes três. Publicar sempre em rotação equilibrada.

### PILAR 1 — Educativo

**Objetivo:** posicionar como autoridade e atrair salvamentos.
**Formato visual:** fundo Sand, número grande em serif itálico Ink, kicker Sun deep em uppercase, uma frase de contexto em serif regular, rodapé mono discreto.
**Estrutura fixa:**
- Kicker: `DICA · CONTA DE LUZ` (ou tema)
- Número/estatística: uma coisa só, gigante
- Frase de amarração: 1 linha, até 22 palavras
- Rodapé: `@contelesolarenergy` + `01/03`

**Exemplos de gancho:**
- "95% é o quanto uma casa média na Região dos Lagos deixa de pagar depois de instalar o sistema."
- "7 anos é o tempo médio para o sistema se pagar em Araruama."
- "0 é o número de vezes que a Enel pode te cortar depois da homologação."

### PILAR 2 — Prova social

**Objetivo:** converter. Substituir os prints de conta atuais.
**Formato visual:** fundo Ink, comparação tipográfica Antes/Depois em serif, "Antes" em Coral com strike-through, "Depois" em Sun itálico, ficha técnica pequena em mono/Sea.
**Estrutura fixa:**
- Kicker: `CLIENTE · [MÊS]`
- Antes: `R$ X.XXX,XX` (coral, strike)
- Depois: `R$ XXX,XX` (sun, itálico)
- Meta em serif itálico: "Residência da família X, [contexto]"
- Ficha técnica em mono: `BAIRRO · CIDADE · X kWp · X módulos`
- Rodapé com % de redução

### PILAR 3 — Institucional / local

**Objetivo:** construir confiança de "é gente da região".
**Formato visual:** foto real da equipe ou instalação (tratada, não bruta) OU composição gráfica editorial (sol + telhado + palmeira). Bloco de citação em serif itálico. Atribuição em mono uppercase com cidade.
**Estrutura fixa:**
- Cena/foto na metade superior
- Kicker: `SOBRE NÓS · QUEM INSTALA`
- Citação em serif itálico, até 25 palavras, tom coloquial
- Atribuição: `Nome — Contele` + `Cidade · RJ`

**Exemplos de citação:**
- "Cada telhado é diferente. A gente vem, mede, e desenha o sistema pra sua casa — não vendemos kit de prateleira."
- "Homologação pela Enel a gente resolve. O cliente não fala com a distribuidora."
- "A visita técnica é de graça. Se não fizer sentido pra sua casa, a gente fala."

---

## 6. Ritmo semanal

- **3 posts estáticos/semana** — 1 de cada pilar, alternando.
- **2 Reels/semana** — dobrar o volume atual. Formatos que funcionam:
  - Dica curta de 20s (equipe explicando um mito)
  - Bastidor de instalação (time-lapse ou POV)
  - Cliente contando em 30s o antes/depois
  - Tour em telhado recém-entregue
- **Stories diários** — instalações em andamento, respostas a dúvidas, contagem regressiva de homologação.
- **Grid** deve alternar os pilares por linha (linha 1: Educ · Prova · Local · linha 2: Local · Reel · Educ · etc). Preview em artifact externo (ver §10).

---

## 7. Guia de voz

### Sim
- Uma frase de gancho concreta, seguida de dado.
  → *"A conta da família Marques caiu de R$ 3.262 para R$ 105. Fizemos o projeto em três semanas."*
- Nomes de bairros, praias, ruas. → *Praia Seca, São Pedro, Iguabinha, Búzios.*
- Ficha técnica pequena no rodapé da legenda. → *Sistema · 6,4 kWp · 12 módulos · inversor Growatt.*
- CTA único e explícito no fim. → *Quer simular pra sua casa? Manda "SOL" no direct.*
- Legendas em estrutura curta AIDA: hook (linha 1) → dor → solução → CTA.

### Não
- CAPS + exclamações + emojis coloridos empilhados. → *"QUE TAL ECONOMIZAR 95%?! 🔥🔥⚡️⚡"*
- Print de conta de luz recortado com carimbo ANTES/DEPOIS colado por cima.
- Telefone e cidade em tarja no rodapé de toda arte.
- Genérico sem endereço. → *"Energia solar é o futuro"* não vende em Araruama.
- Mais de 2 emojis por legenda. Nunca coloridos.

---

## 8. Bio nova (aprovada)

```
Contele Solar ⚡ Araruama · Região dos Lagos
+700 sistemas instalados · Reduza até 95% da sua conta
[emoji] Simule grátis em 2min
```
*(O emoji da 3ª linha veio ilegível no arquivo original — confirmar com PH antes de publicar.)*
Link do Linktree segue como está.

---

## 9. Destaques (a redesenhar no mesmo sistema)

Fundir/reduzir de 7 → 5:
- **Como funciona** (funde Informações + Funcionamento + Dicas)
- **Instalações**
- **Depoimentos** (renomear Clientes)
- **Bastidores** (renomear Eventos + Sobre nós)
- **Simule**

Capas: fundo Ink, ícone linear branco, anel externo Sun (mantém a coesão que já existia).

---

## 10. Referências visuais para a IA se inspirar

- **Benchmarks BR:** @belenergy_, @viaenergiasolar, @portal_solar, @energybrasiloficial.
- **Behance:** Solar Panel Social Media, Energia Solar Instagram, Solar Energy Instagram Template — Artur Bartnik.
- **Pinterest:** Renewable Energy Branding.
- **Prancha da direção aprovada (com mockups clicáveis):** artifact externo em claude.ai/code (link no arquivo original — confirmar acesso com PH, pode ter expirado ou ser de outra sessão).

---

## 11. Instruções operacionais (do documento original)

1. Antes de gerar qualquer arte, escolher o pilar (1/2/3) e seguir a estrutura fixa da seção 5.
2. Nunca misturar cores fora da paleta da seção 4.1. Coral é exclusivo do "antes" em prova social.
3. Nunca usar CAPS em manchete. Serif itálico já dá o peso.
4. Toda legenda tem CTA único — nunca dois. Rotacionar: manda SOL no direct / salva pra depois / marca alguém que paga muito de luz.
5. Localidade em toda peça — nome de bairro/cidade em algum canto. Se não tem, o post não sai.
6. Antes de aprovar um post, olhar ele no meio de 8 outros do feed (mockup mental do grid 3×3): se destoa, volta.
7. Reels: primeira frase precisa fisgar em 2s ("A conta da Rafaela caiu de 3 mil pra 100 reais" > "Você sabia que a energia solar…").
8. Stories: rotina fixa — segunda anuncia semana, terça mostra instalação, quarta responde dúvida, quinta cliente falando, sexta bastidor, sábado dica, domingo pausa ou repost.
9. Métricas para reportar mensalmente: seguidores, alcance, salvamentos por post (proxy de valor educativo), DMs iniciadas por CTA, cliques no Linktree.
10. Quando em dúvida sobre voz: reler seção 7. Quando em dúvida sobre arte: reler seção 4.3.

---

*Fim do briefing original. Versão 1 · julho 2026.*
