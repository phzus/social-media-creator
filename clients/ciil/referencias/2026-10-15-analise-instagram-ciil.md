# Análise de Instagram — @ciilagos, @ciil.sg e @imunovidavacinas (2026-10-15)

**Origem:** coleta com Playwright sem login ([scripts/instagram/coletar-perfil.mjs](../../../scripts/instagram/coletar-perfil.mjs)), 12 posts mais recentes da grade de cada perfil, feita na manhã da reunião de 15/10. Dados, artes e prints em [instagram/2026-10-15/](instagram/2026-10-15/).

**Limites:** só curtida e contagem de comentário (sem alcance, salvamento, texto de comentário). Nos dois perfis da CIIL, os 3 primeiros posts são **fixados de junho** e ficam fora das médias (que usam 11/09 a 09/10). O recorte da arte que o Instagram expõe é quadrado, então selo e rodapé podem ter ficado de fora.

---

## 1. Números

| | @ciilagos (Araruama) | @ciil.sg (São Gonçalo) | @imunovidavacinas (referência, Uberlândia) |
|---|---|---|---|
| Seguidores | 1.640 (1.555 em 22/06) | 398 (388 em 22/06) | 13 mil |
| Média de curtidas | ~4,7 | ~2,4 | Reels ~39 · estático ~7 |
| Comentários | 0 em 9 posts | 0 em 9 posts | 0 a 5 por post |
| Reels entre os recentes | **0** | **0** | 5 de 9 |
| Último post | 09/10 | 09/10 | 12/10 |

- **Crescimento quase parado:** +85 seguidores em Araruama e +10 em São Gonçalo em quase 4 meses.
- **Nenhum Reels nos dois perfis desde setembro.** Na Imunovida, o Reels tem ~5 vezes a curtida do estático. Na BodySkin (coleta do mesmo dia) foi 10 vezes. O padrão se repete entre clientes.
- **São Gonçalo recebe exatamente o mesmo post de Araruama** e engaja metade. Não tem nada local na grade.
- **Os fixados são de junho** (onde fica, horário, feedbacks), herança da @vivamidia. Quem cai no perfil hoje não vê a série nem o tratamento.

## 2. 🔴 O que está no ar não é o que a Lone escreveu

Comparando a grade com [conteudo/posts/](../conteudo/posts/):

- **As datas batem** (11/09, 14/09, 18/09, 21/09, 25/09, 28/09, 02/10, 05/10, 09/10). O calendário da Lone está sendo seguido.
- **As legendas no ar foram reescritas.** Exemplos:
  - Psoríase (14/09): a Lone escreveu "Antes de vestir uma peça escura, você confere o ombro. De novo." e no ar está "🩺 A PELE MELHORA, MAS AS LESÕES TEIMAM EM VOLTAR? 🩺".
  - Dermatite (05/10): "Volta sempre no mesmo lugar: a dobra do braço..." virou "Coceira que não vai embora... 😣".
  - Outubro Rosa (02/10): "Outubro começa e o laço rosa aparece em tudo..." virou "🔍 Já está cuidando de uma condição crônica?".
  - Lúpus (28/09) e gatilhos (09/10) saíram parafraseados.
- **O texto das artes também mudou** em pelo menos 2 peças (Lúpus e Psoríase).
- 🔴 **Na @ciil.sg, a legenda de 09/10 foi publicada com `**dermatite atópica**`**, com os asteriscos aparecendo. É marca de texto colado de ferramenta de IA. A versão de Araruama do mesmo post não tem os asteriscos, então alguém editou uma e não a outra.
- **Não aparecem na grade:** a peça de Dia das Crianças (12/10) e a 06 da série (Espondilite), que nem foi produzida. Logo, **a peça de 19/10 (Retocolite) tem que sair como `06 de 10`**, não `07`.
- **As peças 01 a 05 e a de gatilhos estão no ar** apesar de constarem como "retidas até o OK do RT" nos docs da Lone. Ou o RT aprovou sem a Lone saber, ou foram publicadas sem o OK.

Antes de levar isso pro cliente, **PH confere internamente quem sobe os posts da CIIL** (alguém da Lone, a cliente ou a @vivamidia). O tom e os emojis das legendas reescritas são os vícios que o [voice-quality-checklist](../../../shared/voice-quality-checklist.md) barra, e o texto com asterisco é um erro público.

## 3. Estética

A grade tem identidade consistente: azul da marca, logo em card branco e foto de banco de imagem. O problema é a uniformidade: tudo é estático com o mesmo esqueleto, e nada na grade mostra que existe uma **série** (nos recortes, o selo "Isso Tem Nome · NN de 10" não aparece). Não tem gente da casa, a clínica ou a equipe em nenhum dos 12 posts.

## 4. Da Imunovida pra CIIL (formato, não cópia)

- **Reels com bebê, família e equipe** puxam o engajamento da conta. Isso confirma a lacuna de vídeo que o [context.md](../context.md) já apontava em junho.
- **Post de 03/09: "quem convive com doenças crônicas... pode apresentar..."** é **vacina pra quem tem doença crônica ou imunidade afetada**. Pra CIIL, é a ponte natural entre as duas frentes da clínica (tratamento com imunobiológico + vacinação), e traz de volta a vacinação, que sumiu do feed desde setembro. Depende do RT: quais vacinas a CIIL recomenda e aplica pra quem usa imunobiológico.
- **Prêmio/reconhecimento** ("Top 100") é o post de maior comentário deles. A CIIL tem as avaliações do Doctoralia paradas no gate de depoimento.

## 5. @imunovitta (3,4 mil seguidores, referência de vídeo que explica doença)

- **Os 12 posts recentes são todos Reels.**
- **Os 4 mais curtidos (78 a 94 curtidas, 3 a 9 comentários) são de doença imunomediada ou do paciente que trata uma:**
  - médico contando o caso de um paciente com 40 anos de sintoma sem diagnóstico
  - "quando uma mulher começa a sentir dores nas articulações, quase sempre ouve 'é a idade'"
  - lúpus explicado pelo sistema imune que ataca o próprio corpo
  - **alerta de vacina contra sarampo pra paciente reumatológico em uso de imunossupressor**
- Os Reels de vacina genérica (caderneta, calendário vacinal, viagem) ficam em 4 a 12 curtidas.
- **Leitura:** é exatamente o território da série "Isso Tem Nome", só que em vídeo e com médico falando. E a ponte vacina + imunobiológico (pergunta 6 da PAUTA) é o post de vacina que mais engaja lá.

## 6. Pendente

- Com a API da Meta: alcance e salvamentos, pra saber se a série educa (salva) mesmo sem curtida.
