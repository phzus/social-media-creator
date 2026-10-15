# Análise de Instagram — @bodyskin.araruama × @espacolaser (2026-10-15)

**Origem:** primeira coleta automática com Playwright ([scripts/instagram/coletar-perfil.mjs](../../../scripts/instagram/coletar-perfil.mjs)), sem login, nos 12 posts mais recentes da grade de cada perfil. Dados brutos, artes e print da grade em [instagram/2026-10-15/](instagram/2026-10-15/).

**Limites da coleta (ler antes de usar os números):**
- Curtidas e comentários são os que o Instagram mostra **publicamente**. Alcance, salvamentos, compartilhamentos e visualizações de Reels **não vêm** sem a API da Meta.
- Os comentários são **só a contagem**, sem o texto.
- Amostra de 12 posts. Na BodySkin, os 2 primeiros são **fixados de junho/2025** e ficam fora das médias abaixo (que usam os 10 posts de 28/08 a 05/10).
- A Espaço Laser é **marca nacional**, com 1M de seguidores e verba de marca. Serve de referência de **formato e linguagem**, não de meta de número ([referência de 17/09](2026-09-17-referencias-visuais-espacolaser-e-bodyskin.md)).

---

## 1. Números

| | @bodyskin.araruama | @espacolaser |
|---|---|---|
| Seguidores | 5.744 | ~1M (o perfil arredonda) |
| Seguindo | **6.986** (mais que os seguidores) | 631 |
| Posts no perfil | 323 | 843 |
| Ritmo recente | 10 posts em 39 dias (28/08 a 05/10), **~1,8 por semana** | 12 posts em 21 dias (25/09 a 15/10), **~4 por semana** |
| Reels entre os recentes | 3 de 10 | 8 de 12 |
| Média de curtidas | **4,1** | ~140 |
| Média de comentários | **0** (nenhum post com comentário) | ~27 |
| Último post | **05/10** (10 dias sem post de feed na data da coleta) | 15/10 |

### O que os números dizem da BodySkin

- 🔴 **O Reels tem 10 vezes a curtida do estático.** Os 3 Reels (28/09, 25/09 e 23/09) tiveram 12, 12 e 9 curtidas. Os 7 estáticos tiveram 0 a 2 (média 1,1). A amostra é pequena, mas a diferença é grande demais pra ser acaso. Todos os 3 Reels têm **gente da equipe falando pra câmera ou a fachada da clínica**.
- 🔴 **Seguir 6.986 perfis com 5.744 seguidores** é sinal de crescimento por "seguir pra ser seguido". Esse público não é de quem quer fazer laser em Araruama, e explica parte do engajamento quase zero: o post chega pra quem não liga pro assunto. A métrica de seguidores **não serve** como prova de resultado pra cliente.
- 🔴 **Zero comentários em 10 posts.** Nem a peça de "marca a amiga" aparece na grade (ver §3).
- Na Espaço Laser, os posts que mais puxaram comentário são: a **collab com a ItSophie** (109), o lançamento do **Outubro OFF** (59), o **"só hoje, 80%" do 10/10** (29) e o **meme de signos com "marca aquela amiga"** (18). Comentário vem de **oferta com prazo**, **collab** e **pedido explícito pra marcar alguém**.
- Mesmo a Espaço Laser engaja pouco em proporção (~0,02% de curtida por seguidor). Perfil grande de rede não é régua de engajamento. A régua da BodySkin é ela mesma, mês a mês.

---

## 2. Estética

**BodySkin:** a grade não tem um sistema visual. Convivem quatro linguagens: Reels com a equipe (laranja e preto, legenda queimada em tarja turquesa), arte de serviço com logo em card branco, a peça "Florescer" com foto lifestyle e serifa grande, e **close de rosto de modelo com cara de banco de imagem ou IA** (posts de 11/09, 14/09, 31/08 e 28/08). Os closes de rosto são justamente os posts com 0 a 2 curtidas. A paleta oficial (laranja + turquesa + branco + preto, [PADROES §9](../PADROES.md)) aparece nos Reels e quase some nos estáticos.

**Espaço Laser:** um conceito de campanha por mês (**"Outubro Momento OFF"**), com tipografia e cor que se repetem em todas as peças da campanha (magenta + azul-marinho, condensada em caixa alta). Por cima disso, peças editoriais com serifa itálica ("Provas de que você é 10/10", "5 programas pra aproveitar"). Quase toda peça tem **gente real**: especialista, funcionária, pessoa na rua. O lifestyle aparece em **colagem e moldura** (polaroides, card com abas), não em foto solta.

**O que serve pra BodySkin (formato, não cópia):**
- **Um nome e um visual por campanha do mês** que se repete em todas as peças. A BodySkin já tem "Outubro OFF" da cliente, mas cada peça sai com uma cara.
- **Gente da casa no lugar de modelo de banco de imagem.** É o que já funciona nos próprios Reels da conta.
- **Vídeo de especialista respondendo dúvida** ("Dói? Clareia a pele? Quando os pelos caem?"). Tem o mesmo esqueleto da série "Dúvida que mais chega aqui" da Lone, só que em vídeo, com a Cintia ou a RT respondendo.
- **Vídeo de rua com cartaz** ("término necessário: você e a lâmina"): é humor leve sem duplo sentido, e cabe na voz acolhedora se o texto for da casa.

**O que não serve:** o humor de duplo sentido (regra de 17/09 segue valendo), a "universidade própria" (a BodySkin não tem algo equivalente confirmado) e o "até 80% OFF" sem preço cheio real ([PADROES §7](../PADROES.md)).

---

## 3. Copy

**BodySkin:** as legendas recentes abrem quase sempre com emoji + pergunta ou frase genérica: "✨ Quer uma pele radiante e livre de pelos indesejados?", "Desfrute de...", "A toxina botulínica é a solução perfeita para você!", "O SINAL QUE VOCÊ ESPERAVA... CHEGOU!". É o vício que o [voice-quality-checklist](../../../shared/voice-quality-checklist.md) barra. O texto que aparece **nas artes** é curto e funciona melhor ("Chega de se depilar toda semana", tarjas dos Reels).

**Espaço Laser:** legenda curta, coloquial e com um gancho por post ("Seus pelos não esperam e você também não deveria", "É só hoje, hein???"). A CTA é sempre a mesma ("link da bio"), e **toda oferta leva rodapé de validade e "sujeito a avaliação"**. A Lone já adota esse rodapé nas peças da BodySkin.

---

## 4. ⚠️ A grade não bate com o calendário da Lone

Comparando os posts no ar com as peças em [conteudo/](../conteudo/):

- **Saíram como a Lone produziu (pelo tema da legenda):** 28/08 (ATA), 31/08 (peguei sol), 05/10 (Florescer).
- **Não aparecem na grade:** as peças de 01/10, 02/10 ("marca a amiga"), 05/10 (avaliação sem fechar pacote), 09/10 (área pequena) e 12/10 (Dia das Crianças), além de 21/09, 25/09 e 26/09.
- **No ar com tema diferente do da Lone na mesma data:** 11/09 (toxina no ar; a Lone fez virilha), 14/09 ("o sinal que você esperava"; a Lone fez "terminei as dez sessões") e 23/09 (Reels de Peeling de ATA; a Lone fez o roteiro dos quatro lasers).

Não dá pra saber pela coleta se essas peças foram recusadas, adiadas, postadas e apagadas, ou se a cliente trocou a legenda e a arte. Mas a consequência é direta: **o resultado que a cliente cobra está sendo medido em cima de um feed que a Lone não controla.** Isso entra na reunião antes de qualquer discussão de lead ruim.

---

## 5. Pra próxima coleta

- Com a API da Meta autorizada: alcance, salvamentos, compartilhamentos e views dos Reels da BodySkin, que é o que prova (ou não) que o vídeo puxa alcance.
- Repetir esta coleta em ~15/11 com os mesmos dois perfis, pra comparar.
- Incluir **@bodylaser.brasil** (a outra referência que a Cintia citou em 17/09).
