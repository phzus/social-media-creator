# ESTRUTURA DE PROJETO — Template de Pastas (4 Niveis)

> Estrutura padrao de pastas para entregas, espelhando o Google Drive
> Responsavel: @theboss (criacao via task create-squad)
> Os diretorios sao criados automaticamente ao montar o squad

---

## Hierarquia de 4 Niveis

```
projects/{nome-do-expert}/
└── {tipo-de-funil}/           # Nivel 1: Tipo de Funil
    └── {fase-do-funil}/       # Nivel 2: Fase do Funil
        └── {tipo-de-arquivo}/ # Nivel 3: Tipo de Arquivo
            └── arquivo.md     # Nivel 4: Arquivo final
```

---

## Estruturas por Tipo de Funil

### Lancamento Pago (PLF)
```
{expert}/lancamento-pago/
├── captacao/
│   ├── emails/
│   ├── criativos/
│   ├── mensagens/
│   ├── anuncios/
│   ├── paginas/
│   └── pesquisas/
├── antecipacao/
│   ├── emails/
│   ├── criativos/
│   └── mensagens/
├── evento/
│   ├── cpls/
│   ├── emails/
│   └── mensagens/
├── vendas/
│   ├── emails/
│   ├── criativos/
│   ├── mensagens/
│   └── paginas/
├── downsell/
│   ├── emails/
│   └── mensagens/
└── pos-venda/
    ├── emails/
    └── automacoes/
```

### Lancamento Gratuito (PLF Organico)
```
{expert}/lancamento-gratuito/
├── antecipacao/
│   ├── emails/
│   └── mensagens/
├── evento/
│   ├── cpls/
│   ├── emails/
│   └── mensagens/
├── vendas/
│   ├── emails/
│   ├── mensagens/
│   └── paginas/
├── downsell/
│   ├── emails/
│   └── mensagens/
└── pos-venda/
    └── emails/
```

### Lancamento Semente (Seed Launch)
```
{expert}/lancamento-semente/
├── captacao/
│   ├── emails/
│   └── mensagens/
├── evento/
│   ├── emails/
│   └── mensagens/
├── vendas/
│   ├── emails/
│   └── mensagens/
└── pos-venda/
    └── emails/
```

### Lancamento Meteorico
```
{expert}/lancamento-meteorico/
├── captacao/
│   └── mensagens/
├── antecipacao/
│   └── mensagens/
├── vendas/
│   ├── mensagens/
│   └── paginas/
└── pos-venda/
    └── mensagens/
```

### Desafio (Challenge)
```
{expert}/desafio/
├── captacao/
│   ├── emails/
│   ├── criativos/
│   ├── anuncios/
│   ├── paginas/
│   └── mensagens/
├── antecipacao/
│   ├── emails/
│   └── mensagens/
├── evento/
│   ├── scripts/
│   ├── missoes/
│   ├── emails/
│   └── mensagens/
├── vendas/
│   ├── emails/
│   ├── mensagens/
│   └── paginas/
└── pos-venda/
    ├── emails/
    └── automacoes/
```

### Webinar (Perfect Webinar)
```
{expert}/webinar/
├── captacao/
│   ├── anuncios/
│   ├── paginas/
│   └── emails/
├── antecipacao/
│   └── emails/
├── evento/
│   ├── scripts/
│   ├── criativos/
│   └── emails/
├── vendas/
│   ├── emails/
│   ├── paginas/
│   └── mensagens/
├── upsell/
│   └── paginas/
├── downsell/
│   └── paginas/
└── pos-venda/
    └── emails/
```

### Low Ticket (Tripwire/SLO)
```
{expert}/low-ticket/
├── captacao/
│   ├── anuncios/
│   ├── paginas/
│   └── emails/
├── vendas/
│   ├── paginas/
│   └── checkout/
├── upsell/
│   └── paginas/
├── downsell/
│   └── paginas/
└── pos-venda/
    └── emails/
```

### High Ticket (Aplicacao + Call)
```
{expert}/high-ticket/
├── captacao/
│   ├── anuncios/
│   ├── paginas/
│   ├── emails/
│   └── automacoes/
├── qualificacao/
│   ├── scripts-venda/
│   └── automacoes/
├── vendas/
│   ├── scripts-venda/
│   ├── paginas/
│   └── emails/
└── pos-venda/
    ├── emails/
    └── automacoes/
```

### Evento Presencial
```
{expert}/evento-presencial/
├── captacao/
│   ├── emails/
│   ├── criativos/
│   ├── anuncios/
│   └── paginas/
├── antecipacao/
│   └── emails/
├── pre-evento/
│   └── emails/
├── evento/
│   ├── scripts/
│   ├── criativos/
│   └── roteiro-palco/
├── vendas/
│   ├── emails/
│   └── scripts-venda/
└── pos-venda/
    └── emails/
```

### Perpetuo (Evergreen)
```
{expert}/perpetuo/
├── captacao/
│   ├── anuncios/
│   ├── paginas/
│   └── emails/
├── vendas/
│   ├── paginas/
│   └── emails/
├── upsell/
│   └── paginas/
├── downsell/
│   └── paginas/
└── pos-venda/
    └── emails/
```

### Sala Secreta
```
{expert}/sala-secreta/
├── captacao/
│   ├── mensagens/
│   └── emails/
├── antecipacao/
│   └── mensagens/
├── evento/
│   ├── mensagens/
│   └── scripts/
├── vendas/
│   ├── mensagens/
│   └── scripts-venda/
└── pos-venda/
    └── mensagens/
```

### Campanha Rapida
```
{expert}/campanha-rapida/
├── captacao/
│   ├── criativos/
│   ├── anuncios/
│   └── paginas/
└── vendas/
    ├── emails/
    ├── mensagens/
    └── paginas/
```

---

## Regras

1. **Estrutura criada automaticamente** pela task `create-squad`
2. **Cada agente salva na pasta correta** do tipo de arquivo que produziu
3. **Nomenclatura segue a taxonomia** (ver TAXONOMIA.md)
4. **Espelhamento Google Drive** — estrutura local identica ao Drive
5. **Nao criar pastas extras** fora do padrao sem aprovacao do @theboss

---
*Template de Estrutura de Projeto — Marketing Squad Extremo v1.0*
