# Post de feed — "Quanto dura cada EcoFlow?" (os modelos lado a lado)

**Cliente:** contele-solar · **Data:** 2026-10-19 (segunda) · **Plataforma:** Instagram (feed 1080×1080) · **Pilar:** 1 — Educativo ([PADROES §4](../../PADROES.md)) · **Formato:** Estático
**Mecanismo:** comparativo lado a lado com número. A mesma carga de referência (100 W) em todos os modelos, e o leitor acha o dele pela coluna.
**Funil:** MOFU — responde a objeção "isso aguenta o quê?" com número e leva pro direct.

> **Origem:** PH, 2026-10-16, reprovando a v1 desta segunda ([peça que ensinava a conta](2026-10-19-quanto-tempo-a-ecoflow-aguenta.md)): *"vamos falar sobre quanto cada ecoflow dura em média e a gente faz uma arte deles lado à lado"*.
>
> **O que mudou em relação à v1:** a v1 evitava qualquer número de autonomia e ensinava a pessoa a fazer a conta. Isso era cautela nossa, não regra do cliente nem da EcoFlow. PH quer o número. A saída honesta é **fixar uma carga de referência e escrevê-la na arte**: o tempo vale pra aquela carga, e o leitor entende que com mais aparelho ligado dura menos.

---

## A conta (fonte dos números)

**Carga de referência:** 100 W ligados ao mesmo tempo, por exemplo roteador, duas ou três lâmpadas LED, uma TV pequena e o celular carregando.
**Aproveitamento:** cerca de 85% da capacidade (perda normal na conversão da bateria pra tomada). Tempo = Wh × 0,85 ÷ 100, arredondado pra baixo.

| Modelo | Capacidade | Segura ligado ao mesmo tempo | Com 100 W | Na arte | Fonte |
|---|---|---|---|---|---|
| RIVER 3 | 245 Wh | 300 W | 2,1 h | **cerca de 2 horas** | Página do produto na loja EcoFlow BR ([referência 28/08](../../referencias/2026-08-28-parceria-ecoflow-powersafe.md)) |
| RIVER 3 Max 🟡 | 572 Wh | 600 W | 4,9 h | **quase 5 horas** | Revendas internacionais (RIVER 3 Plus 286 Wh + bateria extra 286 Wh). **Não aparece no catálogo do site EcoFlow BR** |
| DELTA 3 | 1.024 Wh | 1.800 W | 8,7 h | **mais de 8 horas** | Site EcoFlow BR (1 kWh, 1.800 W) |
| DELTA Pro | 3.600 Wh | 3.600 W | 30,6 h | **mais de um dia inteiro (cerca de 30 horas)** | Site EcoFlow BR (3,6 kWh, 3.600 W) |

🟡 **RIVER 3 Max:** se a Contele não vender esse modelo, a arte sai com **três colunas** (RIVER 3 · DELTA 3 · DELTA Pro). A peça funciona igual.

---

## Brief para designer

**Template base:** Pilar 1 — Educativo, fundo **Sand `#F5EEE0`**. Três cores: Sand + Ink `#0E1E33` + Sun deep `#C57E1D` (Coral é proibido, exclusivo do "antes" de prova social).

**Layout (1080×1080, safe area 80px; conteúdo crítico entre x 135–945 por causa do corte 3:4 da miniatura):**
- **Topo:** kicker mono uppercase em Sun deep, depois headline serif itálico em Ink, alinhada à esquerda, sem CAPS.
- **Miolo:** as **4 estações lado a lado**, alinhadas pela base, **em escala real entre si** (o RIVER 3 menor, o DELTA Pro maior; o tamanho já conta a história). Embaixo de cada uma, em coluna:
  1. nome do modelo em mono uppercase;
  2. **o tempo em serif grande**, o elemento mais forte de cada coluna;
  3. linha pequena em mono: capacidade em Wh.
- **Faixa de premissa**, logo abaixo das colunas, separada por filete de 1px Sun deep, em mono pequeno: a carga de referência. Ela é obrigatória, porque sem ela o número vira promessa.
- **Rodapé** mono discreto: `@contelesolarenergy` · `ARARUAMA · REGIÃO DOS LAGOS`.

**Imagem das estações:** **só do kit de marca oficial da EcoFlow** (foto recortada de cada modelo), nunca printada do site nem recriada à mão ([PADROES §8](../../PADROES.md)). ⚠️ O kit está pendente desde 31/08. **Sem o kit, a peça não fica de pé com foto:** ou PH consegue as fotos oficiais com a Powersafe/EcoFlow até segunda de manhã, ou as colunas rodam só tipográficas (nome + tempo + Wh), com o mesmo grid.

🚫 Ícone de bateria, raio ou tomada · barra de carga desenhada · aparelho ilustrado · tabela com bordas de planilha · preço · selo de oferta · CAPS na headline · exclamação · emoji na arte · qualquer estação da BLUETTI nesta arte (seria comparação entre marcas).

---

## Copy da arte

**Kicker:** ECOFLOW · QUANTO DURA

**Headline:** *Quanto tempo cada EcoFlow segura a casa ligada?*

**Colunas:**

| | | | |
|---|---|---|---|
| **RIVER 3** | **RIVER 3 MAX** | **DELTA 3** | **DELTA PRO** |
| cerca de 2 horas | quase 5 horas | mais de 8 horas | mais de um dia inteiro |
| 245 Wh | 572 Wh | 1.024 Wh | 3.600 Wh |

**Faixa de premissa:** COM 100 W LIGADOS AO MESMO TEMPO: ROTEADOR, LÂMPADAS LED, TV PEQUENA E CELULAR CARREGANDO. MAIS APARELHO LIGADO, MENOS TEMPO.

**Rodapé:** @contelesolarenergy · Araruama · Região dos Lagos

---

## Legenda

Faltou luz e ficaram ligados o roteador, as lâmpadas da sala, uma TV pequena e o celular carregando. Isso dá uns 100 W, e é com essa conta que a gente montou a arte:

• RIVER 3 (245 Wh): cerca de 2 horas
• RIVER 3 Max (572 Wh): quase 5 horas
• DELTA 3 (1.024 Wh): mais de 8 horas
• DELTA Pro (3.600 Wh): mais de um dia inteiro, perto de 30 horas

O número que importa é o Wh, que é quanta energia a estação guarda. Quanto mais aparelho você liga junto, mais rápido ele acaba, e a conta é proporcional: com 200 W ligados, cada tempo cai pela metade.

A geladeira muda a conta, porque o motor puxa bem mais na hora de ligar, e nenhuma estação segura chuveiro elétrico nem ar-condicionado. Se a sua lista tem geladeira, a gente faz a conta com a sua.

Aqui em Araruama e na Região dos Lagos a Contele trabalha com EcoFlow e BLUETTI. Manda **ENERGIA** no direct com o que você quer manter ligado que a gente diz qual tamanho resolve.

📍 Araruama · Região dos Lagos

#ecoflow #bluetti #estacaodeenergia #faltadeluz #araruama #regiaodoslagos

---

## Checagem

| Afirmação | Base |
|---|---|
| Capacidades e potências | Tabela "A conta" acima, com fonte por modelo |
| Tempo por modelo | Wh × 0,85 ÷ 100, arredondado pra baixo ("cerca de", "quase", "mais de") |
| "Com 200 W cada tempo cai pela metade" | Proporção direta da mesma conta |
| Geladeira puxa mais na partida | Pico de partida do compressor (mesma ressalva da v1, Inmetro/PBE) |
| Não segura chuveiro nem ar-condicionado | Regra de expectativa da reunião de 08/09 ([PADROES §8](../../PADROES.md)), obrigatória em toda peça de estação |
| Contele trabalha com EcoFlow e BLUETTI | [PADROES §8](../../PADROES.md) |

- ⛔ **Sem preço, estoque, prazo ou garantia** ([PADROES §8](../../PADROES.md)).
- ⛔ **EcoFlow não é comparada com BLUETTI.** A comparação é entre modelos da mesma marca, e a BLUETTI aparece na legenda só como catálogo da Contele, pra não sugerir exclusividade.
- **"Estação", nunca "gerador"** · **um CTA só** (ENERGIA no direct).
- **Anti-IA:** lista de 4 com bullets (não 3) · zero "não é X, é Y" · zero exclamação · pergunta da headline respondida na própria arte · fecha em CTA.

## Travas

- 🟡 **A Contele vende o RIVER 3 Max?** Se não, sai a coluna e a arte fica com três ([OPEN-QUESTIONS #27](../../OPEN-QUESTIONS.md)).
- 🟡 **Fotos oficiais dos modelos** (kit de marca EcoFlow, pendente desde 31/08). Sem elas, as colunas rodam tipográficas.
- 🟡 **O Vinicius (comercial) concorda com os tempos?** São estimativa com premissa escrita, mas é ele quem responde o direct depois.
- ⏰ O brief vai ao designer hoje (sexta 16/10) com menos de 1 dia útil. Copy pro cliente até 15h, arte segunda de manhã.

## Histórico

- **2026-10-16 v1:** escrita a pedido de PH, substituindo a peça "Quanto tempo uma EcoFlow aguenta?" (reprovada). Capacidades conferidas no site EcoFlow BR (DELTA 3, DELTA Pro), na página do produto já registrada (RIVER 3) e em revendas internacionais (RIVER 3 Max, ausente do catálogo BR).
