# setup-automations

Task de configuracao de automacoes de funil. Fluxos de email, WhatsApp, chatbots, integracoes e sequencias automatizadas.

```yaml
task:
  name: setup-automations
  description: "Configurar automacoes de funil (email, WhatsApp, chatbot, integracoes)"
  agent: salazar
  support: nerd, claudinho
  priority: medium

dependencies:
  requires:
    - define-funnel (funil definido)
    - write-copy (copy das automacoes pronta)
    - build-pages (paginas prontas — para integrar)
  optional:
    - plan-traffic (para tracking)
  templates:
    - TAXONOMIA.md

inputs:
  - funil (tipo, fases, canais)
  - copy aprovada (emails, mensagens)
  - paginas (URLs, formularios)
  - ferramentas disponiveis (n8n, Make, ManyChat, ActiveCampaign, etc.)

outputs:
  - Documentacao de fluxos automatizados
  - Nomenclatura: "{PROJ}_{FASE}_AUT_{DESCRICAO}_V1.md"

elicit: true
```

---

## Workflow

### Fase 1: Mapeamento de Automacoes

Listar todas as automacoes necessarias por fase:

#### Captacao
| Automacao | Trigger | Acao | Ferramenta |
|-----------|---------|------|-----------|
| Lead capturado | Formulario preenchido | Enviar email boas-vindas + tag | Email tool |
| Lead no WhatsApp | Opt-in API | Enviar mensagem boas-vindas | WhatsApp API |
| Tag de origem | UTM capturada | Taguear lead por canal | CRM |

#### Antecipacao
| Automacao | Trigger | Acao | Ferramenta |
|-----------|---------|------|-----------|
| Sequencia aquecimento | Lead captado + D+1 | Enviar emails 1-7 (1/dia) | Email tool |
| Lembrete evento | D-1 do evento | Email + WhatsApp lembrete | Email + WhatsApp |
| Engajamento grupo | Novo membro grupo | Mensagem boas-vindas + regras | ManyChat/n8n |

#### Evento
| Automacao | Trigger | Acao | Ferramenta |
|-----------|---------|------|-----------|
| Presenca | Assistiu CPL/live | Tag "presente CPL X" | Webhook + CRM |
| Pos-aula | Fim de cada aula | Email resumo + gancho prox | Email tool |
| Ausencia | Nao assistiu | Email/WhatsApp "voce perdeu" | Email + WhatsApp |

#### Vendas
| Automacao | Trigger | Acao | Ferramenta |
|-----------|---------|------|-----------|
| Carrinho aberto | Data/hora programada | Disparar sequencia vendas | Email + WhatsApp |
| Abandono checkout | Iniciou e nao completou | Email/WhatsApp recuperacao | Webhook + Email |
| Compra realizada | Pagamento confirmado | Tag "comprador" + boas-vindas | Webhook + CRM |
| Boleto gerado | Boleto criado, nao pago | Lembrete D+1, D+2, D+3 | Email + WhatsApp |

#### Pos-venda
| Automacao | Trigger | Acao | Ferramenta |
|-----------|---------|------|-----------|
| Onboarding | Compra confirmada | Sequencia onboarding (5-7 emails) | Email tool |
| Acesso liberado | Pagamento OK | Liberar area de membros | Webhook + plataforma |
| NPS | D+7 / D+30 | Enviar pesquisa NPS | Email tool |
| Depoimento | NPS >= 9 | Pedir depoimento | Email + WhatsApp |

### Fase 2: Desenhar Fluxos

Para cada automacao, documentar o fluxo completo:

```
TRIGGER: {evento que inicia}
    │
    ├─► CONDICAO: {filtro/segmentacao}
    │       │
    │       ├─ SIM ──► ACAO 1: {enviar email/mensagem}
    │       │              │
    │       │              ├─► DELAY: {tempo de espera}
    │       │              │
    │       │              └─► ACAO 2: {proximo passo}
    │       │
    │       └─ NAO ──► ACAO ALTERNATIVA: {outro caminho}
    │
    └─► FIM DO FLUXO
```

### Fase 3: Configurar Integracoes

| Integracao | De | Para | Metodo |
|------------|-----|------|--------|
| Pagina captura → Email | Landing page | ActiveCampaign/Mailchimp | Webhook/Zapier |
| Checkout → CRM | Hotmart/Kiwify | CRM | Webhook |
| Pagamento → WhatsApp | Gateway | WhatsApp API | n8n/Make |
| CRM → Plataforma curso | CRM | Hotmart/Thinkific | API |
| Formulario → Google Sheets | Typeform/Forms | Sheets | Zapier/n8n |

### Fase 4: Configurar Tracking

| Evento | Plataforma | Pixel/Tag |
|--------|-----------|-----------|
| PageView | Meta + Google | Automatico |
| Lead (inscricao) | Meta + Google | Evento customizado |
| InitiateCheckout | Meta + Google | Evento checkout |
| Purchase | Meta + Google | Evento compra |
| ViewContent | Meta | Evento pagina vendas |

### Fase 5: Testar Automacoes

Para cada fluxo, testar o ciclo completo:

```
☐ Trigger esta funcionando?
☐ Condicoes/filtros estao corretos?
☐ Emails/mensagens estao sendo enviados?
☐ Delays estao com tempo correto?
☐ Tags estao sendo aplicadas?
☐ Integracoes estao transmitindo dados?
☐ Pixels estao disparando eventos?
☐ Fallbacks estao funcionando (se erro)?
```

### Fase 6: Documentar

Para cada automacao, criar documento:

```markdown
## Automacao: {nome}

- **Trigger:** {evento}
- **Ferramenta:** {n8n / Make / ManyChat / nativa}
- **Frequencia:** {tempo real / agendado}
- **Status:** Ativo / Teste / Desativado

### Fluxo
{diagrama do fluxo}

### Variaveis
| Variavel | Valor | Origem |
|----------|-------|--------|
| {nome} | {valor} | {de onde vem} |

### Monitoramento
- Dashboard: {link}
- Alerta se: {condicao de erro}
```

Salvar como: `projects/{expert}/{fase}/automacoes/{PROJ}_{FASE}_AUT_{DESCRICAO}_V1.md`

---

## Stack de Ferramentas Recomendadas

| Categoria | Ferramenta | Uso |
|-----------|-----------|-----|
| Automacao geral | n8n / Make | Fluxos complexos, webhooks |
| Email marketing | ActiveCampaign / Mailchimp | Sequencias, tags, segmentacao |
| WhatsApp API | Z-API / Evolution API | Mensagens automatizadas |
| Chatbot | ManyChat | Instagram DM, WhatsApp |
| CRM | Kommo / HubSpot | Gestao de leads |
| Checkout | Hotmart / Kiwify | Pagamentos |
| Database | Supabase | Dados customizados |
| Clone digital | HeyGen + ElevenLabs | Video/audio I.A |

---
*Task: setup-automations — Marketing Squad Extremo v1.0*
