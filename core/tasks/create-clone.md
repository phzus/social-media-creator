# create-clone

Task de criacao de clone digital do expert usando I.A (HeyGen + ElevenLabs). Audio e video sinteticos para escalar conteudo.

```yaml
task:
  name: create-clone
  description: "Criar clone digital do expert (voz e video I.A)"
  agent: salazar
  support: picasso, claudinho
  priority: low

dependencies:
  requires:
    - onboarding-expert (briefing aprovado — com amostras de voz/video)
  optional:
    - write-copy (scripts para o clone)
  templates:
    - COMUNICACAO.md (tom de voz para validacao)
    - TAXONOMIA.md

inputs:
  - amostras de audio do expert (minimo 3 minutos)
  - amostras de video do expert (minimo 2 minutos, frontal)
  - scripts para gravar com o clone

outputs:
  - Clone de voz configurado (ElevenLabs)
  - Clone de video configurado (HeyGen)
  - Nomenclatura: "{PROJ}_{FASE}_CLN_{DESCRICAO}_V1.md"

elicit: true
```

---

## Workflow

### Fase 1: Coleta de Material do Expert

#### Para clone de voz (ElevenLabs)

| Requisito | Especificacao |
|-----------|---------------|
| Duracao minima | 3 minutos de audio limpo |
| Formato | WAV ou MP3, 44.1kHz, mono |
| Qualidade | Sem ruido de fundo, sem musica |
| Conteudo | Fala natural, variacao de tom |
| Quantidade ideal | 5-10 minutos para melhor qualidade |

**Instrucoes para o expert:**
```
Grave em um ambiente silencioso.
Fale naturalmente, como se estivesse explicando algo para um aluno.
Varie o tom: perguntas, exclamacoes, explicacoes calmas.
Inclua palavras e expressoes que voce usa frequentemente.
Evite: musica de fundo, eco, barulho de digitacao.
```

#### Para clone de video (HeyGen)

| Requisito | Especificacao |
|-----------|---------------|
| Duracao minima | 2 minutos de video |
| Resolucao | 1080p ou superior |
| Enquadramento | Busto, olhando para camera |
| Iluminacao | Frontal, sem sombras fortes |
| Fundo | Neutro ou profissional |
| Vestimenta | Profissional, sem estampas |
| Movimentacao | Natural, com gesticulacao |

**Instrucoes para o expert:**
```
Fique centralizado no quadro, do peito pra cima.
Olhe diretamente para a camera.
Iluminacao de frente (luz natural ou ring light).
Fundo limpo (parede neutra ou escritorio organizado).
Fale naturalmente, movimente-se normalmente.
Vista roupa lisa (sem listras ou padroes).
Grave pelo menos 2 minutos de fala continua.
```

### Fase 2: Configurar Clone de Voz

1. Criar conta/projeto no ElevenLabs
2. Upload das amostras de audio
3. Treinar o modelo de voz
4. Testar com frases de validacao:
   - Frase informal do expert
   - Frase tecnica do nicho
   - Frase emocional (depoimento style)
5. Ajustar parametros:
   - Estabilidade (consistencia vs. expressividade)
   - Clareza
   - Estilo

**Validacao da voz:**
```
☐ Tom geral e reconhecivel como o expert?
☐ Cadencia/ritmo esta natural?
☐ Pronuncia de termos tecnicos esta correta?
☐ Emocao e apropriada para o contexto?
☐ Expert aprovou a voz sintetica?
```

### Fase 3: Configurar Clone de Video

1. Criar projeto no HeyGen
2. Upload do video de treinamento
3. Criar avatar personalizado
4. Testar com script curto (30 segundos)
5. Verificar:
   - Sincronizacao labial
   - Naturalidade dos movimentos
   - Qualidade visual

**Validacao do video:**
```
☐ Movimentacao labial sincronizada?
☐ Expressoes faciais naturais?
☐ Qualidade visual aceitavel?
☐ Nao cai no "uncanny valley"?
☐ Expert aprovou o avatar?
```

### Fase 4: Producao de Conteudo com Clone

**Tipos de conteudo que o clone pode produzir:**

| Tipo | Uso | Qualidade Necessaria |
|------|-----|---------------------|
| Videos curtos (15-60s) | Stories, Reels, TikTok | Media-Alta |
| Mensagens de video | WhatsApp, DM | Media |
| Intro de aulas | Cursos online | Alta |
| Depoimentos narrados | Audio para ads | Alta |
| Audio de email | Email com player | Media |
| Respostas personalizadas | CS, onboarding | Media |
| VSL narrado | Video de vendas | Alta |

**Workflow de producao:**
```
@claudinho (escreve script)
    → @salazar (gera audio/video com clone)
        → @picasso (edita/finaliza visual)
            → @theboss (revisa qualidade)
                → Aprovado → Publicar
```

### Fase 5: Governanca e Etica

**Regras obrigatorias:**
1. **Transparencia**: O expert DEVE saber e aprovar o uso de I.A
2. **Disclosure**: Em contextos regulados, informar que e conteudo I.A
3. **Qualidade**: Nunca publicar conteudo com qualidade abaixo do aceitavel
4. **Controle**: Expert pode solicitar remocao a qualquer momento
5. **Limites**: Clone nao faz promessas que o expert nao faria

**O que o clone PODE fazer:**
- Narrar scripts aprovados pelo expert
- Gravar videos com conteudo pre-aprovado
- Responder perguntas frequentes (script definido)
- Criar conteudo educacional

**O que o clone NAO PODE fazer:**
- Inventar conteudo nao aprovado
- Fazer promessas de resultado
- Interagir em tempo real fingindo ser o expert
- Ser usado sem consentimento explicito

---

## Checklist de Validacao

```
☐ Amostras de audio coletadas (minimo 3 min)?
☐ Amostras de video coletadas (minimo 2 min)?
☐ Clone de voz treinado e testado?
☐ Clone de video treinado e testado?
☐ Expert aprovou ambos os clones?
☐ Regras de governanca definidas?
☐ Scripts prontos para producao?
☐ Workflow de producao documentado?
```

---
*Task: create-clone — Marketing Squad Extremo v1.0*
