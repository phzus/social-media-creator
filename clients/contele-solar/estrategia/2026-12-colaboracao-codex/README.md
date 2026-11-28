# Colaboração Claude × Codex — Contele, dezembro/2026

Primeiro teste real da integração (25/11/2026, pedido de PH). Claude coordena e escreve as entregas; o Codex recebe tarefas fechadas pelo plugin oficial `codex@openai-codex` 1.0.6 (Codex CLI 0.172.0, login ChatGPT) e grava o resultado nesta pasta.

**Como foi chamado:** `node ~/.claude/plugins/cache/openai-codex/codex/1.0.6/scripts/codex-companion.mjs task --write "<pedido>"`, que é o runtime que o subagente `codex:codex-rescue` usa. O subagente em si só aparece depois de `/reload-plugins` (o plugin foi instalado com a sessão aberta).

| # | Pedido | O que voltou | Duração | Como Claude usou |
|---|---|---|---|---|
| 00 | [Briefing do pacote](00-briefing-para-codex.md) | — | — | Contexto comum: objetivo, arquivos, decisões, regras |
| 01 | [Ficha do mês e inventário](01-pedido-ficha-e-inventario.md) | [01-ficha-e-inventario.md](01-ficha-e-inventario.md): ficha de dezembro com fonte por item, inventário dos 39 arquivos (36 posts, 3 roteiros), temas saturados com contagem, 9 ângulos pouco explorados, 6 pendências que travam o mês | ~8 min | Base da ficha da [direção](../2026-12.md) e da §3 da auditoria. Achou sozinho a diferença entre artes publicadas e copies da pasta e que o "jantar sem luz" já tinha ido ao ar |
| 02 | [Auditoria independente](02-pedido-auditoria-independente.md) (sem ver as conclusões do Claude) | [02-auditoria-codex.md](02-auditoria-codex.md): 8 achados, caminho até o WhatsApp, hipóteses de Meta Ads, correções por anúncio, riscos e discordâncias com o briefing | ~6 min | Convergiu em quase tudo. Correções aceitas: "Simule grátis em 2min" sem validação, "700 kWh" pode ser geração mensal, "busca um kit" não contradiz o fato, exemplos do briefing sem fonte. Registrado na [§8 da auditoria](../../referencias/2026-11-25-auditoria-instagram-e-anuncios.md) |
| 03 | [Revisão crítica da direção v1](03-pedido-revisao-da-direcao.md) | [03-revisao-codex-da-direcao.md](03-revisao-codex-da-direcao.md): 4 bloqueantes, 7 repetições, 7 peças fracas, dependências por peça. Veredito: pronto pro portão 1 com ajustes | ~5 min | Gerou a v1.1: semana de 21/12 numa linha só, 18/12 sem superlativo, 11/12 e 14/12 sem repetir agosto e setembro, afirmações delimitadas |

**O que o Codex não fez:** não abriu o Instagram nem a Biblioteca de Anúncios (a coleta foi do Claude, via navegador) e não editou nada fora desta pasta.
**O que filtrar nele:** tende a abrir gancho com pergunta e voltou ao ar-condicionado nas mensagens de anúncio.
