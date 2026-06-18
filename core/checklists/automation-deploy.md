# Checklist: Deploy de Automacao

> Verificacao antes de ativar qualquer automacao em producao
> Responsavel: @salazar (autor) + @theboss (revisao)
> Usar ANTES de ativar qualquer fluxo automatizado

---

## Configuracao do Fluxo

```
☐ Trigger (gatilho) configurado corretamente?
☐ Condicoes/filtros do trigger validados?
☐ Todas as acoes mapeadas e configuradas?
☐ Delays/timers com intervalos corretos?
☐ Condicoes de ramificacao (if/else) logicas?
☐ Acoes de erro/fallback configuradas?
☐ Nome do fluxo segue padrao de nomenclatura?
```

## Integracoes

```
☐ Conexoes com APIs externas autenticadas e ativas?
☐ Webhooks configurados e URL correta?
☐ CRM integrado e campos mapeados?
☐ Plataforma de email integrada?
☐ Plataforma de pagamento integrada (se aplicavel)?
☐ WhatsApp API conectada (se aplicavel)?
☐ Tokens/chaves de API com permissoes corretas?
```

## Dados & Tags

```
☐ Campos/variaveis personalizadas criados?
☐ Tags de segmentacao definidas e consistentes?
☐ Mapeamento de campos entre plataformas correto?
☐ Dados obrigatorios validados (email, nome, telefone)?
☐ Formato de dados compativel entre sistemas?
☐ Duplicatas tratadas (merge ou rejeicao)?
```

## Conteudo das Mensagens

```
☐ Textos de email/WhatsApp revisados e aprovados?
☐ Personalizacao (nome, campos dinamicos) funcionando?
☐ Links com UTM corretas?
☐ Links de pagamento/acesso corretos?
☐ Horario de envio adequado (fuso horario)?
☐ Resposta de fallback se personalizacao falhar?
```

## Teste (Obrigatorio)

```
☐ Teste com dados ficticio completo (lead → final do fluxo)?
☐ Trigger disparou corretamente?
☐ Cada acao executou na ordem certa?
☐ Delays respeitados (verificar logs)?
☐ Condicoes de ramificacao funcionaram?
☐ Email/WhatsApp de teste recebido e formatado?
☐ Tags aplicadas corretamente no CRM?
☐ Notificacoes para equipe dispararam?
```

## Performance & Limites

```
☐ Volume esperado estimado (leads/dia)?
☐ Limites de API respeitados (rate limits)?
☐ Limite de envio de email/dia respeitado?
☐ Limite de mensagens WhatsApp/dia respeitado?
☐ Plano de contingencia se volume exceder limite?
```

## Monitoramento

```
☐ Alertas de erro configurados?
☐ Dashboard de monitoramento acessivel?
☐ Responsavel por monitoramento definido?
☐ Rotina de verificacao diaria definida?
☐ Metrica de sucesso definida (ex: taxa de entrega > 95%)?
```

## Documentacao

```
☐ Fluxo documentado (diagrama + descricao)?
☐ Credenciais armazenadas com seguranca?
☐ Responsavel pela manutencao definido?
☐ Procedimento de rollback documentado?
```

## Validacao Final

```
☐ Teste completo de ponta a ponta aprovado?
☐ @theboss revisou e aprovou o fluxo?
☐ Fluxo ativado em modo de producao?
☐ Primeiro disparo real monitorado ao vivo?
```

---

**GATE: NUNCA ativar automacao em producao sem teste completo de ponta a ponta.**

> Automacoes com pagamento envolvido exigem DUPLA validacao (@salazar + @theboss).

---
*Checklist: Automation Deploy — Marketing Squad Extremo v1.0*
