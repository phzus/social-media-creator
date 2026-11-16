# Motion flyer — Super Feirão de Ponta de Estoque, sábado 28/11

**Cliente:** maicom-minerais-unamar · **Data:** quarta 18/11/2026 (Reels) · **Formato:** motion flyer, 1080×1920, ~19s, sem rosto e sem locução obrigatória · **Funil:** BOFU
**Campanha:** [plano do feirão](../../estrategia/2026-11-feirao-ponta-de-estoque.md) · **Fonte:** [áudio do cliente, 16/11](../../referencias/2026-11-16-audio-feirao-28-11.md)
**Variantes da mesma montagem:** v2 na qua 25/11 ("FALTAM 3 DIAS.") e v3 nos stories da sex 27/11 ("É AMANHÃ."). Só a cena 1 muda.
**Status:** 🟢 v1.1, validado em 16/11

---

## 1. Por que assim

- **Vídeo aguenta o "porra louca" que o estático não aguenta** (PADROES §6). Aqui o barulho é ritmo: corte seco, texto batendo na tela, troca de cor de fundo a cada cena.
- **O gancho é a frase do cliente:** "ESQUECE O MUNDO." No primeiro segundo entra emoção, e a informação chega depois que a pessoa parou.
- **Ordem de valor (Hormozi):** o gancho para a pessoa, depois vêm o evento, o preço (resultado), o bônus (esforço ↓), a hora e "quem chega cedo escolhe primeiro" (urgência e escassez reais). O fecho fica parado com o endereço.
- **Funciona no mudo.** Todo o conteúdo está no texto da tela.

## 2. Roteiro (texto na tela, cena a cena)

| # | Tempo | Texto na tela (quebras de linha exatas) | Fundo |
|---|---|---|---|
| 1 | 0–1,5s | **ESQUECE O MUNDO.** | vermelho |
| 2 | 1,5–4,5s | **SÁBADO, 28/11,** / **É SUPER FEIRÃO** / **DE PONTA DE ESTOQUE!** | amarelo |
| 3 | 4,5–8,5s | PISOS A PARTIR DE / **R$ 1,00** | vermelho |
| 4 | 8,5–12s | **CHOPE** / **REFRIGERANTE** / **CHURRASCO** / LIBERADOS! (uma palavra por batida) | amarelo |
| 5 | 12–14,5s | **COMEÇA ÀS 9H.** / QUEM CHEGA CEDO / ESCOLHE PRIMEIRO. | vermelho |
| 6 | 14,5–19s | Fecho parado: mascote · **MAICOM MINERAIS** · SÁBADO · 28/11 · 9H · Rod. Amaral Peixoto, KM 131 — Unamar | amarelo |

**Tarja de rodapé, da cena 4 até o fim:** *Chope só para maiores de 18 anos. Se beber, não dirija. Enquanto durar o estoque.* Ela entra junto com o CHOPE porque, no mudo, muita gente sai antes do fecho.

**Gancho "Rei do 1 Real": descartado pelo validador.** Somado ao R$ 1,00 sem unidade, aumentava o risco de a pessoa entender "tudo na loja a 1 real".

**Variantes:**
- v2 (qua 25/11): a cena 1 vira **FALTAM 3 DIAS.**
- v3 (stories sex 27/11): a cena 1 vira **É AMANHÃ.**

A cena 2 sempre ancora a data (sábado, 28/11), então o relativo nunca fica solto.

## 3. Legenda do Reels

> Esquece o mundo: sábado, 28/11, tem Super Feirão de Ponta de Estoque na Maicom, com pisos a partir de R$ 1,00 e chope, refrigerante e churrasco liberados. Começa às 9h, e quem chega cedo escolhe primeiro, porque é ponta de estoque e acaba.
>
> 📍 Rod. Amaral Peixoto, KM 131 — Unamar, Cabo Frio · 📲 (22) 99872-4568
>
> Chope só para maiores de 18 anos. Se beber, não dirija.
>
> #MaicomMinerais #Unamar #Tamoios #CaboFrio #RegiãoDosLagos #FeirãoDePiso

---

## 4. Direção visual pro Remotion (feita com IA)

Esta seção é pra colar no agente. Quanto mais decisão já vier tomada, menos a IA inventa, e o que ela inventa sozinha é o que dá cara de IA.

### 4.1 O conceito em uma frase

**Cada informação bate na tela como carimbo de feirão.** O fundo alterna entre amarelo e vermelho em corte seco, na mesma família da arte do churrasco de 1 ano.

### 4.2 Especificação técnica

| Item | Valor |
|---|---|
| Canvas | 1080×1920, 30fps, 570 frames (19s) |
| Projeto | `Criador de vídeos/motion-flyer`, pasta nova `src/reel/maicom/feirao/`, no molde de `src/reel/veneza-black/` (`content.ts` com os textos, `roteiro.json` com os tempos em frames, componente que só lê os dois) |
| Variantes | `content.ts` com `variante: "anuncio" \| "faltam3" \| "amanha"`. Só o texto da cena 1 muda |
| Área segura | Texto essencial entre **y 250 e y 1500** e **x 80 e x 960** |
| Determinismo | Proibido `Math.random()`, `Date.now()` ou fetch. Tudo sai de `useCurrentFrame()` |

### 4.3 Paleta (criar `src/reel/maicom/theme.ts`, sem inventar fora disto)

Os valores são aproximados, amostrados da arte do churrasco de 1 ano e do Black Supreme, porque a Maicom ainda não mandou os hex oficiais (OQ #7).

| Token | Hex | Uso |
|---|---|---|
| `amarelo` | `#FFD400` | fundo das cenas 2, 4 e 6 |
| `vermelho` | `#E3141B` | fundo das cenas 1, 3 e 5, faixas |
| `vermelhoEscuro` | `#B30E14` | ondas da textura sobre o vermelho |
| `preto` | `#111111` | texto sobre amarelo |
| `branco` | `#FFFFFF` | texto sobre vermelho |

- O **R$ 1,00** vai em amarelo sobre vermelho, igual ao "35,00" do Black Supreme.
- **Textura:** a faixa ondulada da arte do churrasco, linhas `vermelhoEscuro` em SVG, desenhadas no código e com movimento lento.
- 🚫 Gradiente, neon, glow, verde, azul, qualquer cor fora da tabela. 🚫 Fundo chapado sem a textura.

### 4.4 Tipografia

- **Display:** Archivo Black (`@remotion/google-fonts/ArchivoBlack`), a mesma do selo do feirão da Veneza. Caixa alta.
- **Apoio e rodapé:** Montserrat 700/800. Rodapé com no mínimo 28px.
- **Quebras de linha explícitas** em todo texto (arrays em `content.ts`). Texto que reflui durante a animação é o erro mais comum de IA no Remotion.
- R$ 1,00 com "R$" a ~45% do tamanho do número e ",00" sobrescrito, como no Black Supreme.

### 4.5 Imagens

- **Mascote:** o PNG oficial da loja, recortado da arte que o cliente já usa (`public/maicom/mascote.png`). 🚫 Desenhar, redesenhar ou gerar o mascote. Se não houver PNG limpo, o fecho sai sem mascote, só com o nome.
- **Piso:** na cena 3, uma faixa inferior com 2 ou 3 fotos reais de produto da loja (`~/Downloads/(Maicom piso avulso)…`), em ângulo, como na base da arte do churrasco. 🚫 Piso gerado por IA ou de banco.
- 🚫 Copo, garrafa, chope ou ícone de churrasco. O bônus é só tipografia.

### 4.6 Movimento

| Elemento | Como entra |
|---|---|
| Troca de cena | **Corte seco** com a virada da cor do fundo. Sem wipe, sem zoom, sem fade |
| Texto de cena | Bate de 1,15× pra 1× em 6 frames, com spring `damping ≥ 200` (sem quique). Linhas escalonadas a cada 4 frames |
| R$ 1,00 | Bate em 6 frames e treme 8 frames (`translateX` ±6px por `Math.sin(frame)`, determinístico). 🚫 Contagem de um preço maior descendo até R$ 1,00, porque isso vira "de/por" que não existe |
| Cena 4 | Uma palavra por batida, a cada 18 frames: CHOPE, REFRIGERANTE, CHURRASCO, LIBERADOS! As palavras empilham e não se substituem |
| Textura ondulada | Desliza devagar (~1px/frame) durante toda a peça |
| Tarja de rodapé | Faixa fina `vermelho` com texto `branco` (Montserrat 700, mínimo 28px), fixa da cena 4 (frame 255) até o fim, dentro da área segura. Entra sem animação |
| Fecho | Parado por no mínimo 3s. Só a textura se mexe |

- **Tempo de leitura:** nenhuma frase fica menos de ~1s a cada 4 palavras. Se apertar, o vídeo cresce, mas nunca vira texto ilegível.
- **Som (opcional):** uma batida seca por carimbo. Sem trilha com letra.

### 4.7 Como conduzir a IA

1. **Still primeiro.** Pedir o frame final de cada cena parado (`npx remotion still MaicomFeirao --frame=250 out/c3.png`) e conferir antes de animar.
2. **Nos stills, conferir:**
   - tudo dentro da área segura;
   - "DE PONTA DE ESTOQUE!" sem quebrar fora do lugar;
   - o rodapé de bebida legível.
3. **Animar depois** e tirar stills no meio do movimento (frames ~80, ~300, ~430).
4. **Render:** se o compositor abortar, usar o caminho dos outros motions, que é PNG em sequência (`--sequence --image-format=png`) + `node_modules/ffmpeg-static`.
5. **Variantes:** renderizar as 3 trocando só `variante`.

### 4.8 Prompt pra colar

> Crie no projeto Remotion em `motion-flyer/` uma composição `MaicomFeirao` (1080×1920, 30fps, 570 frames) em `src/reel/maicom/feirao/`, seguindo o molde de `src/reel/veneza-black/` (content.ts com todos os textos, roteiro.json com todos os tempos em frames, componente que só lê os dois). Crie `src/reel/maicom/theme.ts` com exatamente as cores da tabela 4.3, e nenhuma outra. O roteiro e a direção visual estão nos itens 2 e 4 de `social-media-creator/clients/maicom-minerais-unamar/conteudo/roteiros/2026-11-18-motion-flyer-feirao-28-11.md`. Leia o arquivo inteiro antes de começar e siga as tabelas ao pé da letra, incluindo quebras de linha explícitas, corte seco entre cenas, spring sem quique, textura ondulada em SVG desenhada no código e o mascote só a partir de `public/maicom/mascote.png` (nunca desenhado ou gerado). Exponha `variante` ("anuncio" | "faltam3" | "amanha") como prop. Comece gerando um still do frame final de cada cena pra eu aprovar, e só depois anime.

---

## 5. Travas

- Fim do evento não informado. Nenhuma tela diz até que horas vai.
- Sem "m²" e sem "peça" no R$ 1,00, porque o cliente pediu assim. Sem "de/por" e sem contagem regressiva de preço.
- Sem "porcelanato" e sem "Black Friday". O nome é MAICOM, com M.
- A tarja de bebida e estoque aparece da cena 4 até o fim, em todas as variantes.
- Se for impulsionado, segmentar 18+.
- Nas legendas do v2 e do v3, variar o miolo (contagem / "é amanhã, vem cedo"). A oferta fica igual.

## 6. Validação (validador-copy, 16/11) → v1.1

0 bloqueantes no gancho A. O gancho "Rei do 1 Real" foi descartado. Entrou a tarja de bebida e estoque da cena 4 em diante, o fecho ficou mais enxuto (~14 palavras em 4,5s) e a cena 1 passou a durar 1,5s. A legenda ganhou "porque é ponta de estoque e acaba".
