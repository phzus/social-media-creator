# Motion flyer — "Passamos laser nos preços" (Novembro Black)

**Cliente:** bodyskin-araruama · **Data sugerida:** quarta 11/11/2026 · **Plataforma:** Instagram, Reels 9:16 + stories · **Formato:** motion flyer (arte animada, sem rosto e sem locução, 19s) · **Funil:** BOFU · **Pilar:** P5 Oferta
**Pedido de PH (04/11):** arte "a Black Friday da BodySkin já começou" + motion flyer, no molde dos vídeos que a conta já tem.
**Par estático:** [2026-11-09-novembro-black-ja-comecou.md](../posts/2026-11-09-novembro-black-ja-comecou.md)
**Condição:** [PADROES §7](../../PADROES.md), tabela de novembro · [registro literal](../../referencias/2026-11-03-novembro-black-tabela-completa-cliente.md)
**Status:** 🟡 v1.1 validada (validador-copy, 04/11). PH aprovou a frase da cena 2 em 06/11: "Passamos laser nos preços" fica.
⚠️ **Visual a alinhar (06/11):** a cliente mandou o [selo da campanha](../../referencias/2026-11-06-selo-novembro-black-cliente.png), com letreiro turquesa e prata. Antes de montar, seguir a direção visual do [motion de anúncio](2026-11-13-motion-anuncio-novembro-black-laser.md), que substitui a paleta e o fundo descritos abaixo.

---

## A ideia

**Um feixe de laser atravessa a tela preta, passa em cima do preço cheio e o risca. O preço do Novembro Black aparece logo depois.**

A frase que amarra é **"PASSAMOS LASER NOS PREÇOS"**. O feixe é o que fecha a peça: se tapar a logo, a ideia ainda é de clínica de laser, e não de Black Friday de qualquer loja ([PADROES §1](../../PADROES.md)).

**Por que não repetir o que já existe:**

| Motion da conta | Mecânica | Por que não serve aqui |
|---|---|---|
| Roleta de outubro | Sorteia desconto e para no 80% | Foi construída sobre o percentual e sobre o tema Outubro OFF |
| "Acabei de sair da sessão" | Conversa de chat que revela antes e depois | Antes e depois segue travado pela RT (§2) |
| Veneza Black (outro cliente) | Palco com holofotes + selo 3D + card de produto | É linguagem de varejo de móveis, e a BodySkin não tem produto pra mostrar em foto |

**Por que para de rolar:** a tela preta com um feixe de luz escrevendo não parece anúncio nos 2 primeiros segundos. **Por que assiste até o fim:** cada corte traz outra área do corpo, e a pessoa espera a dela. **O que faz depois:** marca a avaliação gratuita pelo link do perfil.

---

## Roteiro (texto na tela, cena a cena) · 19s

| Tempo | Tela |
|---|---|
| 0-3s | **NOVEMBRO BLACK / NA BODYSKIN** (o feixe escreve) |
| 3-5s | **PASSAMOS LASER / NOS PREÇOS** |
| 5-8s | **COXAS** · 10 sessões · De R$ 6.999 (o feixe risca) · **por R$ 1.104** · ou 12x de R$ 92,00 |
| 8-11s | **MEIA PERNA + JOELHOS** · 10 sessões · **R$ 799** · ou 10x de R$ 79,90 |
| 11-14s | **VIRILHA TOTAL** · 10 sessões · **R$ 699** · ou 10x de R$ 69,90 |
| 14-15,5s | **VOUCHERS LIMITADOS!** |
| 15,5-19s | Logo · **MARQUE SUA AVALIAÇÃO GRATUITA PELO LINK DO PERFIL!** · 4 tecnologias de laser, para todos os tons de pele · rodapé legal |

**Rodapé legal (cena final):** *Ofertas válidas durante o Novembro Black 2026, enquanto houver vouchers disponíveis. Cartão de crédito normal, dinheiro, Pix ou débito. Crédito recorrente fora da promoção. Condição sujeita a avaliação profissional prévia.*

**Se PH preferir sem o trocadilho na cena 2:** **DEPILAÇÃO A LASER / EM 10 SESSÕES**. O feixe continua igual, e a legenda abre em "Novembro Black na BodySkin Araruama, com depilação a laser em 10 sessões." O validador leu a frase como duplo sentido, vetado pelo §9. A minha leitura é que o veto mira o humor malicioso da Espaço Laser, e esta frase não tem nada disso, então mantive e deixei a decisão com PH.

### Por que só as coxas são riscadas

O "de" tem que aguentar comparação com o que a conta já mostrou:

| Área | Novembro Black | Histórico nas peças | Tratamento |
|---|---|---|---|
| Coxas | De R$ 6.999 por R$ 1.104 | Sem preço avulso nas peças | ✅ Risca |
| Meia perna + joelhos | De R$ 5.999 por R$ 799 | 9.9: 10x R$ 79,90 (R$ 799), o mesmo valor | Sem "de": o feixe só revela |
| Virilha total | De R$ 5.500 por R$ 699 | Set/2026: "de R$ 3.999" | Sem "de": o feixe só revela (§7) |
| Pernas completas | De R$ 8.999 por R$ 1.299 | 9.9: pernas inteiras a 12x R$ 99 (R$ 1.188), **mais barato que a Black** | Fora do vídeo, até a Cintia confirmar |

Se a Cintia confirmar os preços cheios, meia perna e virilha ganham o risco e o vídeo fica mais forte. Não precisa regravar nada: é só mudar o `content.ts`.

**Sem som:** tudo está escrito na tela.

---

## Legenda

> Novembro Black na BodySkin Araruama: a gente passou laser nos preços.
>
> Coxas, meia perna + joelhos e virilha total estão no vídeo. Tem também glúteos, rosto, braços e pernas completas. E, pra eles, tórax + abdômen, costas + lombar, cabeça masculina e barba completa + nuca.
>
> Os vouchers são limitados. Escolha a sua área e marque a avaliação gratuita pelo link do perfil.
>
> #NovembroBlack #LaserAraruama #Araruama #BodySkinAraruama

---

## Direção visual pro Remotion (feita com IA)

### Especificação técnica

| Item | Valor |
|---|---|
| Canvas | 1080×1920, 30fps, 570 frames (19s) |
| Projeto | `Criador de vídeos/motion-flyer`, pasta nova `src/reel/bodyskin/novembro-black/`, no molde de `src/reel/bodyskin/roleta/` (`content.ts` + `montagem.json` + componente) |
| Área segura | Texto essencial entre **y 250 e y 1500** e **x 80 e x 960** |
| Dados | Textos e preços todos em `content.ts`, com quebras de linha explícitas. Cada área tem um campo `precoCheio` (string ou `null`): com valor, o feixe risca; com `null`, o feixe só revela. Tempos todos em `montagem.json` |
| Determinismo | Proibido `Math.random()` e `Date.now()`. Tudo depende de `useCurrentFrame()` |

### Paleta (de `src/reel/bodyskin/theme.ts`, sem cor nova)

- **Fundo:** `preto` `#111111`. Pode levar a palavra BLACK repetida em branco a 3-4% de opacidade, no mesmo mecanismo do fundo "OFF" da roleta.
- **Feixe:** núcleo `branco`, halo `turquesa` `#00A8CB`.
- **Preço novo:** letreiro laranja da campanha (`laranja`, `laranjaBrilho`, `laranjaSombra`), o mesmo do "80%" da roleta.
- **Nome da área:** branco. **"De R$ X":** branco. **Risco:** `turquesa`.
- 🚫 Verde ou holofote de palco (é a Veneza), dourado ou vermelho de Black genérica, gradiente roxo, neon rosa.

### Tipografia

Montserrat 800/900 (`src/reel/bodyskin/fonts.ts`), a mesma da roleta. Nome da área a 72px ou mais, "De R$ X" a 56px ou mais, preço novo a 150px ou mais, parcela a 48px ou mais, rodapé legal a 28px ou mais.

### Movimento

| Elemento | Como entra |
|---|---|
| Logo | Fixo no topo da peça toda (`Logo.tsx` + `public/bodyskin/logo.png`), branco |
| Cena 1 | O feixe varre da esquerda pra direita, linha por linha, e o texto aparece atrás dele (máscara de revelação, não letra por letra). ~22 frames por linha |
| Cena 2 | Corte seco, texto já inteiro. O feixe cruza a tela uma vez, em diagonal, e some |
| Cena 3 (com "de") | Nome da área e "De R$ X" entram primeiro. No frame ~30 da cena, o feixe cruza "De R$ X" na horizontal em 8 frames. O risco fica, e o "de" desce pra 50% de opacidade, **ainda legível** (o "de/por" precisa ser lido). O preço novo entra com `spring` de `damping` 200 ou mais, sem quique, e a parcela vem 8 frames depois |
| Cenas 4 e 5 (sem "de") | O feixe só atravessa de cima a baixo, e o preço aparece atrás dele |
| Cena 6 | Corte seco, texto em laranja |
| Fecho | Parado por no mínimo 2s. Sem feixe, pra não disputar com o rodapé legal |

- **Tempo de leitura manda:** se a cena comprimir, aumenta o vídeo. Melhor 20s do que preço ilegível.
- **Som (opcional):** `impacto` em cada passada do feixe e `pop` no CTA, que já existem no `montagem.json` da roleta.
- 🚫 Corpo, silhueta de corpo, aparelho desenhado, foto, emoji, ícone. O único elemento gráfico é o feixe.

### Como conduzir a IA

1. **Still primeiro:** layout parado do fim de cada cena (frames ~85, ~145, ~235, ~325, ~415, ~460, ~560), conferindo a área segura.
2. **Conferir nos stills:** "MEIA PERNA + JOELHOS" é a linha mais comprida e não pode encostar na borda.
3. **Animar depois** e renderizar stills no meio do risco (frame ~180), pra ver se o "de" continua legível.
4. **Render:** se o compositor abortar, render em PNG (`--sequence --image-format=png`) e montagem com o ffmpeg de `node_modules/ffmpeg-static`.
5. **Stories:** composição separada que reaproveita as cenas, sem "pelo link do perfil" (entra o sticker de link).

### Prompt pra colar

> Crie no projeto Remotion em `motion-flyer/` uma composição `BodyskinNovembroBlack` (1080×1920, 30fps, 570 frames) em `src/reel/bodyskin/novembro-black/`, no molde de `src/reel/bodyskin/roleta/`: todos os textos e preços em `content.ts`, todos os tempos em `montagem.json`, e o componente só lê os dois. Use a paleta de `src/reel/bodyskin/theme.ts` e a fonte de `src/reel/bodyskin/fonts.ts`, sem cor ou fonte nova. Fundo preto. O único elemento gráfico é um feixe de laser (núcleo branco, halo turquesa). Cada área tem um campo `precoCheio`: com valor, o feixe risca o "De R$ X", que continua legível a 50% de opacidade; com `null`, o feixe só revela o preço. Siga o roteiro cena a cena e a tabela de movimento deste arquivo. Texto essencial entre y 250 e y 1500 e entre x 80 e x 960. Quebras de linha explícitas, spring só com damping 200 ou mais, nada de `Math.random()`. Não use corpo, foto, emoji nem ícone. Entregue primeiro os stills do fim de cada cena, antes de animar.

---

## Validação (validador-copy, 04/11) → v1.1

1 bloqueante e 4 importantes. Os preços e as sessões bateram com a tabela da cliente.

- 🔴 "Passamos laser nos preços" foi lido como duplo sentido (§9). **Não aplicado, decisão de PH**, com alternativa pronta acima.
- 🟡 Pernas e meia perna eram riscadas, mas o "de" conflita com o 9.9. Saíram do risco, e o vídeo agora abre nas coxas.
- 🟡 "Já começou" ficou só no estático, pra não repetir na mesma semana.
- 🟡 A legenda tinha a lista masculina ambígua e repetia os preços do estático.
- 🟢 As exclamações ficaram só em "VOUCHERS LIMITADOS!" e no CTA, e as hashtags mudaram.

---

## Travas

- 🔴 **Aprovação da Cintia (§9):** seg e sex, com 1 semana de antecedência. Pra 11/11 o envio já fica fora do prazo, então pede OK excepcional por escrito, ou a peça vai pra quarta 18/11.
- 🔴 **Harmonização fora:** itens 13 a 17 da tabela seguem no gate da RT (§2), e a peça só fala de laser.
- 🟡 **Preços cheios:** a Cintia confirma se R$ 8.999, R$ 5.999 e R$ 5.500 são os preços de tabela? Até lá, só as coxas levam risco.
- 🟡 **Nome:** a peça diz "Novembro Black", como a cliente escreveu, e não "Black Friday" (§7).
- 🟡 **11/11:** a peça não cita o 11.11 (§7 e regra 5 do §8). Cai no dia só porque é a quarta de vídeo.
- 🟡 **RT (anexar ao envio):** preços e sessões das 3 áreas · "4 tecnologias de laser, para todos os tons de pele" · "condição sujeita a avaliação profissional prévia".
- 🟢 **"Sem prender o limite" e "sem juros" não entram:** a condição é no crédito normal, e o recorrente fica fora.
