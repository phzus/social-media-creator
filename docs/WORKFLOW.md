# Workflow — do briefing à publicação

Fluxo padrão de criação de conteúdo para qualquer cliente da Lone Mídia.

## 0. Dois tipos de documento de entrada — não confundir (PH, 2026-09-16)

A Lone trabalha com dois tipos de documento distintos, e a diferença importa pra saber o peso que cada informação tem:

| Tipo | O que é | Peso da informação |
|---|---|---|
| **Briefing Estratégico** | **Análise isolada do time da Lone + IA** — diagnóstico de perfil público, benchmark, recomendação de posicionamento/pilares/plano. **Não é reunião com o cliente.** | Hipótese/recomendação da agência. Nada nele foi confirmado pelo cliente — trata como ponto de partida, não como fato fechado. |
| **Resumo de Reunião** | Registro de uma reunião **real**, com o cliente presente (arquivo `clients/<slug>/reuniao-mensal/resumos/YYYY-MM-DD-resumo-reuniao.md`). | Fonte confirmada — o que está lá foi dito/validado pelo cliente. |

**Regra:** antes de criar qualquer peça pra um cliente, **ler o material mais recente daquele cliente** — Briefing Estratégico em `clients/<slug>/referencias/` e Resumo de Reunião em `clients/<slug>/reuniao-mensal/resumos/` (desde 18/09/2026 os resumos vivem lá, não mais em `referencias/`), e checar qual dos dois tipos é. Se só existe Briefing Estratégico, nenhuma afirmação comercial específica (preço, prazo, margem, entrega, autorização de imagem) vira peça sem antes ser confirmada com o cliente — ver gate correspondente no `PADROES.md` de cada conta.

**Onde o material entra:**
- Documento recebido (de qualquer um dos dois tipos) → `clients/<slug>/referencias/YYYY-MM-DD-descricao.md` (transcrição estruturada, já que o PDF em si não é versionado).
- Síntese factual → `BRIEFING.md` (se for o primeiro documento do cliente) ou adendo datado (se já existir).
- O bloco **"Plano de X dias"** de um Briefing Estratégico vira uma tabela de **ações recomendadas pela análise** em `OPEN-QUESTIONS.md` (seção "📋 Ações recomendadas pela análise — a confirmar com o cliente"), nunca chamada de "compromisso assumido" enquanto não vier de reunião real ou de confirmação explícita do cliente. Isso é o que vira lembrete de CS (ver §7 abaixo) — mas o lembrete também deixa claro que é recomendação, não confirmação.
- Mudanças de voz/pilar/público → `context.md`. Regras novas de compliance/formato → `PADROES.md`.

**Cliente sem pasta ainda:** se PH trouxer um Briefing Estratégico ou um Resumo de Reunião de um cliente que ainda não tem pasta no repositório, isso é onboarding — seguir a Fase 1-2 abaixo a partir desse documento em vez de aguardar outro briefing.

## 1. Briefing inicial (apenas para cliente novo)

- Cliente envia material: pode ser texto, áudio, conversa, deck, planilha, etc.
- PH salva o material recebido em `clients/<slug>/referencias/` (formato original ou transcrição quando for áudio).
- Síntese estruturada vai para `clients/<slug>/BRIEFING.md` — esse arquivo é **registro histórico** e não muda depois.

## 2. Setup de contexto

- Rodar a skill `social-media-context-sms` (em [.claude/skills/](../.claude/skills/)).
- Output: `clients/<slug>/context.md` — fonte de verdade da identidade, voz, público, pilares, plataformas, anti-padrões.
- Esse arquivo é vivo: atualizar sempre que algo mudar (novo pilar, mudança de voz, plataforma adicionada).

## 3. Estratégia mensal

- Rodar `content-strategy-sms` para revisar/ajustar pilares e ângulos do mês.
- Rodar `content-calendar-sms` para definir cadência, temas e datas (incluindo datas comemorativas relevantes ao nicho).
- Output: `clients/<slug>/estrategia/YYYY-MM.md` com:
  - Objetivos do mês.
  - Distribuição de pilares (ex.: 40% educativo, 30% bastidores, 20% conversão, 10% comunidade).
  - Calendário com data, plataforma, formato, pilar, tema, status.
  - Datas comemorativas/sazonais aproveitáveis.

## 4. Criação de conteúdo

Para cada item do calendário:

- **Roteiro de vídeo** (Reels/TikTok/Shorts) → `clients/<slug>/conteudo/roteiros/YYYY-MM-DD-tema.md`. Estrutura: gancho (3s), desenvolvimento, CTA, descrição/legenda, hashtags, sugestão de trilha.
- **Post de feed** (estático ou carrossel) → `clients/<slug>/conteudo/posts/YYYY-MM-DD-tema.md`. Estrutura: brief para designer (referências visuais, tom, hierarquia), copy de cada slide, legenda, CTA, hashtags.
- **Stories** → `clients/<slug>/conteudo/stories/YYYY-MM-DD-tema.md`. Estrutura: sequência slide-a-slide com elementos interativos (enquete, caixa de pergunta, etc.).

Skills úteis na criação:
- `post-writer-sms`, `caption-writer-sms`, `carousel-writer-sms` para posts.
- `hook-writer-sms` para reforçar ganchos quando precisar.
- `content-repurposer-sms` para reaproveitar peças entre formatos.

## 5. Entrega ao designer

Os arquivos em `clients/<slug>/conteudo/posts/` já são formulados como brief de design. PH passa o arquivo (ou o conteúdo) ao designer da agência.

## 6. Pós-publicação — análise

- Quando o cliente envia métricas, PH traz os números.
- Rodar `performance-analyzer-sms` para extrair insights.
- `content-pattern-analyzer-sms` para identificar padrões (o que performa melhor).
- `optimization-advisor-sms` para recomendações.
- Insights relevantes voltam para `clients/<slug>/context.md` (atualizar pilares/voz se necessário) e influenciam a estratégia do mês seguinte.

## 7. Papel de CS — lembrar PH das ações/obrigações pendentes do cliente (PH, 2026-09-16)

Toda vez que uma peça for entregue pra um cliente que tem itens abertos em `OPEN-QUESTIONS.md` (seção "📋 Ações recomendadas pela análise" ou "📋 Compromissos assumidos com o cliente" — a segunda só existe quando o item veio de reunião real ou confirmação explícita, não de Briefing Estratégico sozinho), a resposta que entrega a peça termina com um lembrete curto, no formato:

```
FALTA FAZER NO CLIENTE:
- [ação pendente 1]
- [ação pendente 2]
```

**Regra:** só lembrar do que está de fato pendente (status ⏳ na tabela), nunca repetir o que já foi marcado como feito. Isso não bloqueia a entrega da peça — a peça sai normalmente, o lembrete vem junto, no papel de CS da conta (bio, destaques, remarketing, medição, prazos que o cliente pediu), não só de quem escreve copy. **Cuidado de linguagem:** se o item vem de um Briefing Estratégico (análise interna, não confirmada), o lembrete deixa isso explícito ("recomendado, ainda não alinhado com o cliente"), pra PH não tratar como se o cliente já tivesse concordado.

## 8. Reunião de alinhamento mensal (PH, 2026-09-18)

> **Versão completa do processo.** O CLAUDE.md e o template da PAUTA só apontam pra cá: mudança no processo se faz aqui.

Cada cliente tem `clients/<slug>/reuniao-mensal/`. É onde vive tudo que PH precisa pra conduzir a reunião, sem garimpar em outro arquivo:

- **`PAUTA.md`** — documento vivo e **curado**, com 6 blocos fixos: perguntar nesta reunião (com o *porquê* de cada item) · insights e oportunidades que a Lone observou · riscos e alertas · falta fazer do nosso lado · o que levar de resultado · histórico de reuniões.
- **`resumos/YYYY-MM-DD-resumo-reuniao.md`** — um arquivo por reunião realizada. Nome fixo, sem nome do cliente ou da pessoa (o cliente já está no caminho).

| | `OPEN-QUESTIONS.md` | `reuniao-mensal/PAUTA.md` |
|---|---|---|
| O que é | Log completo e técnico de toda pendência | Curadoria do que vale ocupar a reunião |
| Tamanho | Cresce indefinidamente | Máximo ~8 perguntas — se tudo é prioridade, nada é |
| Quem lê | Claude, ao produzir peça | PH, minutos antes da reunião |

**Ciclo:**

1. **Durante o mês:** Claude mantém a PAUTA viva — pendência, risco ou insight que valha a reunião entra lá (não só no `OPEN-QUESTIONS.md`).
2. **Antes da reunião:** Claude atualiza a PAUTA com o que mudou desde a última. Isso vale como bloco de trabalho e entra no `PROGRESSO.md`.
3. **PH conduz a reunião** lendo só a PAUTA.
4. **Depois da reunião:** PH traz o que foi discutido → Claude escreve o resumo em `resumos/`, **fecha as perguntas respondidas** (na PAUTA **e** no `OPEN-QUESTIONS.md`), propaga as respostas pros docs vivos (`context.md`, `BRIEFING.md`, `PADROES.md`) e recarrega a PAUTA com o que sobrou.

Resumo de reunião é **fonte confirmada**, diferente de Briefing Estratégico, que é hipótese da Lone (§0).

Template: [../shared/templates/pauta-reuniao-mensal.md](../shared/templates/pauta-reuniao-mensal.md).

## Convenções de nome

- Arquivos de conteúdo: `YYYY-MM-DD-descricao-kebab.md` (data = data planejada de publicação).
- Estratégia mensal: `YYYY-MM.md` (ex.: `2026-05.md`).
- Slug do cliente: nome em kebab-case, sem acento, sem espaço. Ex.: `veneza-estofados`, `padaria-do-zezinho`.
