# Progresso — ROP Para-brisas

Log datado, mais recente no topo.

---

## 2026-11-23 — Conferência dos fixados e do feed

- **No perfil:** os 3 fixados seguem os antigos (fachadas). Nenhum dos novos subiu. Um Reels da Lone saiu em 18/11 ("Precisa trocar o para-brisa em Rio das Ostras?").
- **Prontos pra usar na quarta:** 3 vídeos em `~/Downloads/(ROP) Vídeos` (25 a 32 s), com legenda e logo. Um apresenta a ROP, um fala de vidro elétrico e um de equipe. Um deles pode ser o já publicado em 18/11.
- **Pista pra OQ #2:** legenda pública da própria ROP (23/09/2026) lista Campos como (22) 99945-4082, um dos dois números em conflito. Confirmar em uma mensagem.
- **Pista pra OQ #5:** o fixado de Campos (2024) dá Av. XV de Novembro, 209, Centro, endereço diferente do site (Rua Rocha Leão, 207).
- **O que dá pra subir:** o fixado 1 (venda) com a confirmação do WhatsApp. O 2 depende do endereço de Campos, e o 3, do horário.

## 2026-11-16 (2) — Fixados refeitos como estáticos únicos (PH) + dados do site oficial

PH: *"Não sou fã dos fixados da ROP como carrossel, além de dar trabalho ninguém lê. Vamos fazer únicos: horário, localização e venda."* A regra ficou registrada na memória (feedback-fixados-sao-estaticos-unicos).

**Fixados novos (v1.1, validados):**

| # | Peça | Trava |
|---|---|---|
| 1 | [Venda: "PARA-BRISA TRINCADO? A ROP TROCA!"](conteudo/posts/2026-11-16-fixado-1-venda.md) | WhatsApp de Campos (vai no rodapé com os outros dois) |
| 2 | [Localização: "A ROP TEM LOJA EM 3 CIDADES!"](conteudo/posts/2026-11-16-fixado-2-localizacao.md), três cards com fachada, endereço e WhatsApp | Endereço e WhatsApp de Campos. RO e Macaé, confirmar |
| 3 | [Horário](conteudo/posts/2026-11-16-fixado-3-horario.md) | Sem dado em lugar nenhum (OQ #19) |

**O que saiu da primeira versão:**
- o carrossel foi apagado;
- o Reels do móvel virou [ROP Vai Até Você #01](conteudo/roteiros/reels-rop-vai-ate-voce-01-atendimento-movel.md);
- o estático de orçamento virou [reserva de sexta](conteudo/posts/reserva-como-pedir-orcamento.md).

**Validador:** os bloqueantes foram:
- rodapé "link da bio", que obrigava a sair da arte. Os números entraram na arte;
- [22] como slot na arte, que saiu;
- bairro de Campos em conflito, que saiu.

**Site oficial achado** (busca por "Rio das Ostras Parabrisas"; a busca por "ROP" não achava nada). Dados no [BRIEFING](BRIEFING.md#site-oficial-riodasostrasparabrisascom):
- endereços e WhatsApp das 3 lojas;
- 8 seguradoras listadas;
- os dois celulares de Campos (é a divergência que o benchmark tinha visto);
- ROP = Rio das Ostras Parabrisas.

O site está com spam injetado e dados da época da Nextel, o que virou a OQ #18 (avisar o cliente).

---

## 2026-11-16 — Onboarding: pasta do cliente + 3 fixados

**Origem:** PH repassou dois documentos de outro setor da Lone: o [Benchmark Estratégico de 13/11](referencias/2026-11-13-benchmark-edicao-base.pdf) e o [Briefing Estratégico para a IA de 16/11](referencias/2026-11-16-briefing-estrategico.pdf). Pedido: *"já vamos pensando nos fixados e onboarding"*.

**Criado:**
- [BRIEFING.md](BRIEFING.md), com o status de cada fato;
- [context.md](context.md);
- [PADROES.md](PADROES.md) v1.0, com 11 regras;
- [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md), com 17 perguntas;
- [PAUTA](reuniao-mensal/PAUTA.md), com 8 perguntas;
- [plano de onboarding do perfil](estrategia/2026-11-onboarding-perfil.md): fixados, bio, destaques de 9 pra 4 e link da bio.

**Fixados (v1.1, validados):**

| # | Peça | Trava |
|---|---|---|
| 1 | [A ROP vai até você](conteudo/roteiros/2026-11-16-fixado-1-rop-vai-ate-voce.md), Reels falado | Captação de atendimento móvel real (OQ #11) e regras do móvel (OQ #4) |
| 2 | [Para-brisa trincado ou quebrado? A ROP troca](conteudo/posts/2026-11-16-fixado-2-quem-e-a-rop.md), carrossel de 5 slides | Nenhuma de produção, porque usa fotos do feed. [22] e endereços em slot |
| 3 | [Pra orçar seu para-brisa, manda isso](conteudo/posts/2026-11-16-fixado-3-como-pedir-orcamento.md), estático | WhatsApp central × por loja (OQ #3) |

**Validador-copy:** 4 bloqueantes, todos do móvel prometido sem a condição na frase, e 8 importantes. Todos aplicados. Os principais:
- "conforme cidade e agenda" passou a ficar na própria frase;
- a sequência de etapas da instalação saiu, porque não tem fonte;
- caminhão e guindaste saíram até o escopo confirmar;
- a lista de orçamento ficou só no fixado 3.

**Busca pública (16/11):** nada de endereço, telefone ou CNPJ. O nome de exibição do perfil é "RIO DAS OSTRAS PARABRISAS!".
