# Briefing — ROP Para-brisas

**Registro de entrada:** 2026-11-16. Não editar como doc vivo: o que mudar depois vai pro [context.md](context.md) e pro [PADROES.md](PADROES.md).

**De onde veio:** dois documentos de outro setor da Lone, repassados por PH em 16/11:
- [Benchmark Estratégico, edição base de 13/11](referencias/2026-11-13-benchmark-edicao-base.pdf) (30 páginas): perfil, concorrência e estratégia.
- [Briefing Estratégico para a IA Social Media, v1.0 de 16/11](referencias/2026-11-16-briefing-estrategico.pdf) (28 páginas): o benchmark em forma de regras.

Os dois são **hipótese** até a reunião com o cliente (regra da casa: o resumo de reunião confirma, e o Briefing Estratégico propõe).

---

## Fatos e status

| Dado | Valor | Fonte | Status |
|---|---|---|---|
| Ramo | Para-brisas e vidros automotivos, nacionais e importados | Respostas do cliente (benchmark p. 3) | Informado |
| Produto prioritário | Para-brisa: maior venda e maior margem | Respostas do cliente | Informado |
| Diferencial | Disponibilidade e atendimento móvel | Respostas do cliente | Informado, sem regras (cidades, raio, taxa, agenda) |
| Tempo de mercado | 22 anos | Respostas do cliente | 🟡 O perfil ainda diz 21. Confirmar ([OQ #1](OPEN-QUESTIONS.md)) |
| Unidades | 3: Rio das Ostras, Macaé e Campos | Perfil e site oficial | Endereços achados no site (abaixo). Horário não encontrado ([OQ #19](OPEN-QUESTIONS.md)) |
| Abrangência | Macaé, Rio das Ostras, Campos e vizinhas | Respostas do cliente | Informado, sem limite definido |
| Veículos | Leves, pesados, máquinas e guindastes | Perfil e respostas | Observado. Escopo a confirmar ([OQ #6](OPEN-QUESTIONS.md)) |
| Acervo visual | Sem fotos profissionais nem banco organizado | Respostas do cliente | Informado |
| Objetivo | Atrair mais clientes e expor o atendimento móvel | Respostas do cliente | Informado |
| Telefone de Campos | Dois celulares: (22) 99945-4082 (página da loja no site) × (22) 99745-7568 (página de contatos) | Benchmark p. 2 + site | 🔴 Conflito ([OQ #2](OPEN-QUESTIONS.md)) |
| Nome | Rio das Ostras Parabrisas, sigla ROP. O Facebook se chama "Rio Das Ostras Parabrisas - ROP" e o site é riodasostrasparabrisas.com | Facebook + site + título do Instagram, 16/11 | ✅ Sigla confirmada em fonte pública. Grafia oficial ("Para-brisas" ou "Parabrisas") a confirmar ([OQ #9](OPEN-QUESTIONS.md)) |

## Perfil em 13/11 (fotografia do benchmark)

- **@ro_parabrisas:** 176 posts, 1.410 seguidores, 967 seguindo, 9 destaques.
- **Destaques:** Unidade Macaé, Unidade Campos, Rio das Ostras, Dia do amor, clientes, máquinas Macaé, serviço móvel, localização, Produtos.
- **Fixados:** três fachadas reais.
- **Conversão:** Linktree e contatos por cidade.
- **Feed:** serviços reais misturados com artes de pessoas e carros gerados por IA, além de cards de data comemorativa.
- **Reels:** mediana de 605 views nos 12 visíveis, e pico de 3.464 ("vidro quebrado + remoção + instalação"). Depois vêm 1.355 (remoção + higienização + instalação), 977 (serviço real) e 734 (mito/pergunta).
  - ⚠️ Os números de curtida não vieram. Antes de usar como prova, conferir curtida por view ([PADROES §8](PADROES.md)).

## Concorrência citada

| Marca | Onde | Leitura do benchmark |
|---|---|---|
| Ruan Para-brisas (@ruanparabrisas) | Rio das Ostras | Concorrente direto. 811 seguidores, mediana de 463. Fala de seguradoras, insulfilm, som e acessórios |
| Zuum Vidro Car | Região | 34 anos, conteúdo técnico, avaliações e cultura automotiva |
| Campos Acessórios | Campos | Centro automotivo, B2B com locadoras e seguradoras |
| Shop Auto Vidros | Macaé | Tradição local |
| VR Glass | Região | Nicho de reparo/recuperação |
| Autoglass e Carglass | Nacional | Referência de mecanismo, não de número |

**Carteira da Lone:** sem conflito. Nenhum outro cliente é de vidro automotivo nem de auto center (a GK Pneus saiu em 16/11).

## Busca pública (16/11)

**Primeira busca:** pelo nome "ROP Para-brisas", sem resultado. **Segunda busca:** pelo nome do perfil, "Rio das Ostras Parabrisas", que achou o site oficial e três CNPJs, um por cidade (Econodata).

### Site oficial: riodasostrasparabrisas.com

O site é antigo:
- ainda cita "Radio ID" (Nextel, serviço encerrado);
- tem links de spam de réplica de relógio injetados no rodapé, sinal de invasão (OQ #18);
- o HTTPS está com o certificado vencido.

Os dados abaixo são **achado, não confirmado**.

| Loja | Endereço | Fixo | Celular / WhatsApp | E-mail |
|---|---|---|---|---|
| Rio das Ostras | Rua Jorge Ulrick, 239, Costazul, CEP 28.895-262 | (22) 2771-9044 | (22) 99996-8991 (WhatsApp) | ropostras@riodasostrasparabrisas.com |
| Macaé | Rua José de Aguiar Franco, 2026, Costa do Sol, CEP 27.923-320 | (22) 2770-5205 | (22) 99945-1806 | ropmacae@riodasostrasparabrisas.com |
| Campos | Rua Rocha Leão, 207, Caju, CEP 28.051-170 | (22) 2732-2453 | (22) 99945-4082 (página da loja) × (22) 99745-7568 (contatos) | ropcampos@riodasostrasparabrisas.com |

**Campos:** um guia público dá o bairro Parque Leopoldina para a mesma rua. O cadastro de CNPJ de uma das empresas de Campos dá a Av. 15 de Novembro, 209.

**Serviços listados no site:**
- troca de para-brisa;
- restauração de para-brisa;
- troca de lanternas;
- troca de retrovisor;
- conserto de elevadores (de vidro);
- insulfilm.

**Seguradoras listadas no site:** Itaú, Mapfre, Bradesco, BB, Zurich, Caixa, Porto Seguro e Alfa. Não usar sem confirmação (OQ #7).

**Horário:** não aparece no site, no perfil nem nos guias.
