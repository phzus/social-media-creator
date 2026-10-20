# Material recebido — Curva ABC de produtos (preços do Bazar Ribeiro)

**Recebido por:** PH, 2026-10-19 · **Origem:** relatório "Curva ABC de Produtos" do sistema Alterdata da loja (PDF "Itens post Bazar Ribeiro", 38 páginas) · **Período:** 19/09/2026 a 19/10/2026
**Tabela:** [2026-10-19-precos-produtos-curva-abc.csv](2026-10-19-precos-produtos-curva-abc.csv), com 1.431 produtos.

## Pra que serve

PH: *"Guarda e, quando eu te pedir, você me dá um produto e o preço dele, tipo 'assento primafer – R$ 69,90'. Só no chat."* Quando ele pedir, responde em uma linha (`produto – R$ X`), sem criar documento.

## Como ler

- **Colunas:** `codigo;produto;qtde_vendida;valor_vendido;preco_medio_unitario;ranking_abc`.
- O relatório **não traz preço de etiqueta**, só o que foi vendido no período. O preço está calculado como **valor vendido ÷ quantidade**, ou seja, a média do que saiu no caixa. Se houve desconto em alguma venda, a média fica alguns centavos abaixo da etiqueta. Exemplo: o Assento Primafer dá R$ 69,58 de média, e PH cita R$ 69,90.
- Itens vendidos **por metro** (cabinho varejo, fio paralelo, mangueira, corda, lona, corrente) e **por unidade** (parafuso, bucha, prego, arruela) estão marcados com "(METRO)" ou "(UN)" no nome. O preço é dessa unidade.
- Os nomes foram transcritos das páginas do PDF (abreviações expandidas). O código de produto é o do sistema da loja.
- **Conferência:** soma do valor vendido = R$ 104.171,80, igual ao TOTAL GERAL do relatório. São 1.431 itens: A 1–337, B 338–749 e C 750–1431.
- O relatório é dos **últimos 30 dias**. Produto que não vendeu no período não aparece. Preço muda com o tempo, então em peça de venda vale confirmar a vigência com o cliente.

## ⚠️ Preço muda por unidade (achado de 2026-10-20)

O feed mostra o mesmo produto com preço diferente em cada loja: Maxi Ducha a R$ 89,90 em Maricá e R$ 79,90 em Saquarema; Prote Raio a R$ 49,90 em Maricá e R$ 46,90 em Saquarema. Os preços da tabela batem com Saquarema. Até o cliente confirmar ([OQ #17](../OPEN-QUESTIONS.md)), trate a tabela como **preço de Saquarema**.

## Conferir se já foi postado

Antes de sugerir produto, rodar `scripts/instagram/ja-postado.sh "bazarribeiro_marica bazarribeiro_saquarema" "termo1|termo2"`. O script lê os 12 posts mais recentes de cada perfil (≈ 1 mês), sem login, e também confere os posts da pasta `conteudo/`.

## Leitura rápida (pra pauta)

- **Mais vendidos em faturamento:** cabinho Cobrecom 10 mm e 4 mm (rolo 100 m), duchas Lorenzetti (Bella Ducha 4T, Maxi Ducha), protetor de raio PW pra geladeira, luminária portátil Kian, lâmpada Tramontina LED 9 W (1.989 unidades, a R$ 1,90).
- O mix confirma o que a PAUTA de 16/10 já dizia: o grosso é material elétrico e hidráulico, e utilidades de casa aparecem pouco.
