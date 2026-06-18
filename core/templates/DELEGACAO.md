# DELEGACAO DE TAREFA

> Template padrao para delegacao de tarefas entre agentes
> Usado por: @theboss (delegador principal)

---

## Identificacao

- **Projeto:** {codigo do projeto}
- **De:** @{agente delegador}
- **Para:** @{agente executor}
- **Prioridade:** Alta / Media / Baixa
- **Prazo:** {data/hora}

## Tarefa

- **O que fazer:** {descricao clara e objetiva da entrega esperada}
- **Tipo de entrega:** {email / pagina / criativo / script / automacao / relatorio / etc}
- **Fase do funil:** {CAP / ANT / EVT / VND / DWS / PVD}

## Contexto

- **Briefing aprovado:** {sim — link} | {nao — BLOQUEAR}
- **Briefing de Copy:** {sim — link} | {nao — preencher antes se necessario}
- **Dependencias atendidas:** {listar inputs necessarios e se estao prontos}

## Inputs Fornecidos

> Tudo que o agente precisa para executar.

| Input | Status | Localizacao |
|-------|--------|-------------|
| {input 1 — ex: briefing estrategico} | Disponivel / Pendente | {path} |
| {input 2 — ex: pesquisa de mercado} | Disponivel / Pendente | {path} |
| {input 3 — ex: tom de voz} | Disponivel / Pendente | {path} |

## Output Esperado

- **Formato:** {.md / .json / descricao visual / etc}
- **Nomenclatura:** {seguir taxonomia — ex: BIZU_CAP_EML_CONVITE-BASE_V1.md}
- **Salvar em:** {path completo}
- **Quantidade:** {numero de pecas}

## Criterios de Aprovacao

```
☐ Alinhado com o briefing?
☐ Tom de voz do expert preservado?
☐ Seguiu o framework/template correto?
☐ Nomenclatura e local corretos?
☐ Completo (sem campos vazios)?
```

## Fluxo de Revisao

```
@{executor} produz → @theboss revisa → APROVADO → Anthony recebe
                                        → REJEITADO → @{executor} corrige (max 3 ciclos)
```

## Notas

- {instrucoes especificas, preferencias, cuidados}

---
*Template de Delegacao — Marketing Squad Extremo v1.0*
