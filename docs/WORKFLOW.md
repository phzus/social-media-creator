# Workflow — do briefing à publicação

Fluxo padrão de criação de conteúdo para qualquer cliente da Lone Mídia.

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

## Convenções de nome

- Arquivos de conteúdo: `YYYY-MM-DD-descricao-kebab.md` (data = data planejada de publicação).
- Estratégia mensal: `YYYY-MM.md` (ex.: `2026-05.md`).
- Slug do cliente: nome em kebab-case, sem acento, sem espaço. Ex.: `arte-em-manipulacao`, `padaria-do-zezinho`.
