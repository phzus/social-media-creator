// Fonte única dos textos (doc do cliente + lote .md). Arte em artes.mjs.
// Copy de PH (plugin, 26/11, original em referencias/2026-11-26-copies-dezembro-versao-ph.md), com 3 ajustes:
// 26/11 (PH): 04/12 virou "ar-condicionado novo" (a limpeza vai pra janeiro) e 16/12 virou o vídeo de venda do verão (o depoimento vai pra janeiro).
// (1) WhatsApp no fim de toda legenda; (2) ressalva de chuveiro e ar nas peças 09 e 10 (PADROES §8); (3) motion como plano B de toda quarta (PH, 25/11).
const ZAP='WhatsApp (22) 98806-0342 · Araruama/RJ';
const TAGS='#ConteleSolar #EnergiaSolar #Araruama #CaboFrio #SãoPedroDaAldeia #Búzios #RegiãoDosLagos';
const RESSALVA='A estação segura o essencial. Chuveiro elétrico e ar-condicionado ficam de fora.';
export const T={
 '01':{sem:1,dia:'qua',papel:'Indicação',eq:'Indique e Ganhe',obj:'Quem já tem energia solar indica quem pergunta se vale a pena.',foto:'Gravação da equipe (ou motion com fotos de obras)',
  leg:`Uma boa experiência merece ser compartilhada.\n\nSe você conhece alguém que está pensando em instalar energia solar, apresente essa pessoa à Contele.\n\nSua indicação pode se transformar em uma comissão em dinheiro.\n\nEntre em contato e conheça as regras do Indique e Ganhe.\n\n${ZAP}`},
 '02':{sem:1,dia:'sex',papel:'Venda',eq:'Ar-condicionado novo',obj:'Quem comprou ar na Black Friday pede a simulação já contando o aparelho novo.',foto:'Cena por IA (designer): sala de uma casa da região com o split recém-instalado na parede e a caixa do aparelho ainda no chão. Sem marca de ar-condicionado à mostra',
  leg:`Comprou ar-condicionado na Black Friday? Ele vai aparecer nas próximas contas de luz, justo nos meses mais quentes do ano na Região dos Lagos.

O ar-condicionado pesa bastante na conta de luz, e no verão ele passa horas ligado todos os dias. Por isso, a simulação de energia solar precisa contar com ele.

Mande sua conta de luz no WhatsApp e diga quantos aparelhos de ar você tem, contando o novo. A equipe da Contele calcula o sistema pro consumo da sua casa no verão.

${ZAP}`},
 '03':{sem:2,dia:'seg',papel:'Prova',eq:'Projetos reais da região',obj:'Quem pensa em instalar vê casas da região que já têm o sistema.',foto:'Fotos das obras escolhidas, com cidade',
  leg:`Não existe uma casa exatamente igual à outra.\n\nPor isso, cada projeto de energia solar precisa considerar o imóvel, o consumo e as necessidades de quem vive nele.\n\nConheça alguns dos trabalhos realizados pela Contele na Região dos Lagos.\n\nO próximo projeto pode ser na sua casa.\n\nEnvie sua conta de luz para a nossa equipe.\n\n${ZAP}`},
 '04':{sem:2,dia:'qua',papel:'Bastidor',eq:'Bastidores de instalação',obj:'Mostrar quem faz o trabalho no telhado, do começo ao fim.',foto:'Gravação de um dia de instalação (ou motion com fotos das etapas)',
  leg:`Por trás de cada painel instalado, existe uma equipe responsável por transformar um projeto em realidade.\n\nHoje, mostramos um pouco desse trabalho.\n\nDa estrutura ao acabamento, conheça quem está por trás dos sistemas da Contele.\n\nConverse com nossa equipe sobre o seu projeto.\n\n${ZAP}`},
 '05':{sem:2,dia:'sex',papel:'Diferencial',eq:'Homologação',obj:'Mostrar que projeto e homologação na Enel ficam com a equipe da Contele.',foto:'Imagem por IA (designer): mesa com a planta elétrica de uma casa, documentos, capacete branco e celular. Sem logo da Enel e sem painel em close',
  leg:`Instalar os painéis é apenas uma das etapas de um projeto de energia solar.\n\nNa Contele, a equipe própria cuida destas etapas:\n\n• Visita técnica na sua casa\n• Projeto do sistema\n• Homologação junto à Enel\n• Instalação\n\nVocê não precisa ser especialista em energia solar para ter um sistema na sua casa.\n\nPrecisa escolher bem quem vai cuidar dele.\n\nQuer entender como ficaria o seu projeto? Chame a Contele no WhatsApp.\n\n${ZAP}`},
 '06':{sem:3,dia:'seg',papel:'Educativo',eq:'Viabilidade do telhado',obj:'Responder "minha casa serve?" e pedir a foto do telhado.',foto:'Telhado real com painéis',
  leg:`Antes de saber quantas placas você precisa, é importante entender as características da sua casa.\n\nAfinal, um projeto solar não começa pela escolha dos equipamentos.\n\nComeça pela avaliação do imóvel.\n\nTem dúvidas sobre a viabilidade do seu telhado?\n\nEnvie uma foto e informe sua cidade à equipe da Contele.\n\n${ZAP}`},
 '07':{sem:3,dia:'qua',papel:'Venda',eq:'Verão com o ar ligado',obj:'Quem vai passar o verão com o ar ligado pede a simulação antes da conta de janeiro.',foto:'Gravação da equipe num dia de sol forte (ou motion com fotos de casas da Contele)',
  leg:`De dezembro a março, o ar-condicionado fica ligado de tarde, pra aguentar o calor, e de noite, pra conseguir dormir. É quando a conta de luz costuma pesar mais na Região dos Lagos.

Na Contele, o projeto de energia solar é calculado com o consumo de verão da sua casa, com o ar-condicionado incluído. A visita técnica, o projeto, a homologação na Enel e a instalação ficam com a nossa equipe, aqui de Araruama. O sistema passa a gerar depois da instalação e da homologação.

Mande sua conta de luz no WhatsApp pra gente calcular o projeto pro consumo do seu verão.

${ZAP}`},
 '08':{sem:3,dia:'sex',papel:'Venda',eq:'Orçamento parado e verão',obj:'Quem pediu orçamento em 2026 e deixou pra depois refaz o cálculo com o ar-condicionado. Quem nunca pediu segue o mesmo caminho.',foto:'Imagem por IA (designer): casa térrea da região no fim da tarde, telhado ainda sem painéis, luz acesa na varanda',
  leg:`Pediu orçamento da Contele em 2026 e deixou pra depois? O verão começa na segunda (21/12), o ar-condicionado já está ligado, e dá pra refazer o cálculo do seu projeto com esse consumo.

Como funciona:

• Mande no WhatsApp sua conta de luz mais recente e o nome de quem atendeu você
• Diga quantos aparelhos de ar tem na casa, contando os novos
• Nossa equipe, aqui de Araruama, refaz o cálculo do projeto

Ainda não pediu orçamento? O caminho é o mesmo.

${ZAP}`},
 '09':{sem:4,dia:'seg',papel:'Descoberta',eq:'Estações de energia',obj:'Quem tem câmera e internet em casa descobre as estações EcoFlow e BLUETTI.',foto:'Cena por IA (designer): sala à noite, rua apagada, roteador e câmera ligados. As duas estações com a foto oficial de cada marca, no mesmo tamanho',
  leg:`Quando falta energia, não são apenas as lâmpadas que podem apagar.\n\nA internet pode cair. As câmeras podem parar de funcionar. Equipamentos importantes podem ficar desligados.\n\nAs estações de energia portáteis são uma alternativa para manter equipamentos compatíveis funcionando durante uma interrupção no fornecimento. ${RESSALVA}\n\nA Contele trabalha com EcoFlow e BLUETTI.\n\nGaranta a sua com a Contele.\n\nNossa equipe ajuda você a escolher o modelo certo para o que precisa ficar ligado.\n\n${ZAP}`},
 '10':{sem:4,dia:'qua',papel:'Demonstração',eq:'Estações de energia funcionando',obj:'Ver as duas estações segurando o essencial quando a luz da casa cai.',foto:'Gravação da demonstração (ou motion com as duas estações)',
  leg:`Algumas coisas da sua rotina não deveriam depender exclusivamente da disponibilidade de energia da rede elétrica.\n\nAs estações EcoFlow e BLUETTI oferecem alternativas de alimentação para equipamentos compatíveis. ${RESSALVA}\n\nA escolha do modelo depende do que você precisa manter ligado e por quanto tempo.\n\nConverse com nossa equipe e conheça as possibilidades.\n\n${ZAP}`},
 '11':{sem:4,dia:'sex',papel:'Marca',eq:'Natal',obj:'Presença da marca, sem venda.',foto:'Foto real da equipe',
  leg:`Que neste Natal não faltem bons encontros, conversas demoradas e motivos para agradecer.\n\nQue seja um tempo de presença, paz e alegria ao lado de quem você ama.\n\nUm feliz Natal a todas as famílias da nossa Região dos Lagos.\n\nCom carinho, equipe Contele.`,tags:'#ConteleSolar #FelizNatal #Araruama #RegiãoDosLagos'},
 '12':{sem:5,dia:'seg',papel:'Prova',eq:'Retrospectiva de obras',obj:'Obras de 2026 na região, pra quem planeja instalar em 2027.',foto:'Fotos das obras de 2026, com cidade',
  leg:`Ao longo de 2026, nossa equipe esteve em diferentes casas da Região dos Lagos.\n\nConhecemos famílias, avaliamos imóveis, desenvolvemos projetos e realizamos instalações.\n\nCada obra carrega uma decisão importante de quem confiou em nosso trabalho.\n\nA todos que fizeram parte dessa história, nosso agradecimento.\n\nE se energia solar está nos seus planos para 2027, queremos conversar com você.\n\n${ZAP}`},
};
for(const k in T) T[k].tags??=TAGS;
export const SEM={1:['Antes do calor','Indicação e ar-condicionado novo'],2:['Uma obra de verdade','Projetos, instalação e homologação'],3:['O verão com o ar ligado','Telhado, vídeo do verão e orçamento'],4:['Quando a luz cai','Estações EcoFlow e BLUETTI'],5:['2026 em telhados','Obras do ano']};
export const SLIDES={
 '03':['Você pode encontrar nosso trabalho nos telhados da Região dos Lagos.','[Cidade] · Uma casa com suas próprias necessidades. Um projeto pensado para atendê-las. Potência, conta anterior e conta atual confirmadas.','[Cidade] · Outro telhado, outra rotina de consumo, outra solução. Potência, conta anterior e conta atual confirmadas.','Mais de 700 sistemas instalados. Cada projeto começa entendendo a realidade de quem mora ali.','E quanto a sua casa poderia economizar? Envie sua conta de luz para a nossa equipe e descubra.'],
 '06':['Será que o seu telhado serve para energia solar?','Nem todo telhado recebe o mesmo projeto. A incidência de sol e as áreas de sombra influenciam o aproveitamento dos painéis.','A estrutura também importa. É preciso avaliar as condições do telhado, sua inclinação e o espaço disponível para a instalação.','E não é só o telhado. As condições elétricas do imóvel também fazem parte da avaliação.','Você não precisa descobrir tudo isso sozinho. Envie uma foto do seu telhado e informe sua cidade. Nossa equipe orienta você sobre os próximos passos.'],
 '12':['2026. Um ano de trabalho nos telhados da nossa região.','[Cidade e foto] · Cada casa, uma realidade.','[Cidade e foto] · Cada telhado, um novo projeto.','[Cidade e foto] · Cada instalação, uma responsabilidade assumida.','Mais de 700 sistemas instalados ao longo da nossa história. Energia solar feita por quem conhece a região.','Em 2027, queremos conhecer a sua casa. Contele — Energia Solar.'],
};
// Vídeo: roteiro de PH e o plano B em motion (PH, 25/11)
export const VIDEO={
 '01':{rot:['Depois que você instalou energia solar, quantas pessoas já perguntaram se realmente vale a pena?','Um vizinho, um amigo, alguém da família...','Na próxima vez que isso acontecer, lembre-se da Contele.','Com o nosso programa Indique e Ganhe, você pode receber uma comissão em dinheiro quando uma indicação sua se transforma em um projeto fechado.','Você faz a indicação. Nossa equipe cuida do restante.','Fale com a Contele e saiba como participar.'],
  brief:["Vídeo curto (até 30s), falado direto pra câmera por alguém da equipe.","Fala com quem já tem energia solar e vive ouvindo \"vale a pena?\" de vizinho e parente.","Apresenta o Indique e Ganhe: a indicação que vira projeto fechado rende comissão em dinheiro, e a equipe cuida do resto.","Fecha chamando pro WhatsApp."],
  motion:'Sem gravação: o mesmo texto animado sobre fotos de obras da Contele.'},
 '04':{rot:['Você conhece quem vai subir no telhado da sua casa?','Antes de um sistema de energia solar começar a gerar energia, existe um trabalho que pouca gente vê.','A avaliação do imóvel. A preparação da estrutura. A instalação dos painéis. As conexões e os testes.','Esse é o trabalho da nossa equipe na Região dos Lagos.','Porque escolher energia solar também é escolher quem vai cuidar da sua casa.','Contele. Energia solar feita por gente daqui.'],
  brief:["Bastidores de uma instalação real (30 a 40s), com cortes rápidos e narração.","Mostra a equipe da Contele na obra: avaliação do imóvel, estrutura, painéis, conexões e testes.","A mensagem é que quem sobe no telhado é equipe própria, daqui da região."],
  motion:'Sem gravação: as etapas da obra em sequência, com fotos reais de instalações da Contele.'},
 '07':{rot:['Gancho (0-3s), na tela: Quanto vai custar o seu verão com o ar ligado? Fala: O ar vai ficar ligado de tarde e de noite até março. E a conta de luz acompanha.','Problema: Na Região dos Lagos, é de dezembro a março que o calor aperta, e é quando a conta de luz costuma pesar mais.','Solução: Com energia solar, o projeto é calculado com o consumo de verão da sua casa, ar-condicionado incluído.','Benefícios: Você liga o ar sabendo que o sistema foi dimensionado pra esse consumo. E a visita técnica, o projeto, a homologação na Enel e a instalação ficam com a nossa equipe, aqui de Araruama.','CTA: Manda sua conta de luz no WhatsApp que a gente calcula o projeto pro consumo do seu verão. Na tela: WhatsApp (22) 98806-0342.'],
  brief:["Vídeo curto (até 30s), falado pra câmera por alguém da equipe, de preferência num dia de sol forte.","Fala com quem vai passar o verão com o ar ligado e já pensa na conta de luz.","Mostra que o projeto da Contele é calculado com o consumo de verão da casa, ar-condicionado incluído, e que a equipe da região cuida de tudo, da visita à instalação.","Fecha pedindo a conta de luz no WhatsApp pra calcular o projeto com o consumo de verão. Não promete o sistema pronto neste verão."],
  motion:'Sem gravação: o mesmo texto animado sobre fotos de casas com painel da Contele num dia de sol.'},
 '10':{rot:['Cena 1, casa com energia: O que acontece com a sua casa quando falta luz?','Cena 2, a luz cai: A internet cai. As luzes apagam. Equipamentos deixam de funcionar.','Cena 3, as estações EcoFlow e BLUETTI: Mas você pode se preparar para esse momento.','Cena 4, o que fica ligado: Com uma estação de energia adequada, você pode manter equipamentos essenciais funcionando mesmo durante uma queda de energia. Na tela: chuveiro e ar-condicionado ficam de fora.','Cena 5: Você não precisa esperar a próxima falta de luz para pensar nisso. Fale com a Contele e descubra qual estação atende às suas necessidades.'],
  brief:["Demonstração em casa (até 30s): a luz cai e a estação EcoFlow ou BLUETTI segura o essencial.","Aparecem câmera, roteador e luz funcionando. Fica claro que chuveiro e ar-condicionado ficam de fora.","Fecha chamando pra descobrir no WhatsApp qual estação atende a casa."],
  motion:'Sem gravação: a casa apaga e acendem só a câmera, o roteador e a luz, com as duas estações lado a lado.'},
};
// Arte: texto que vai na peça (do lote de PH)
export const ARTE={
 '02':['Comprou ar-condicionado na Black Friday? Ele vai aparecer na conta de janeiro.','Simule seu projeto solar já contando o ar novo.'],
 '05':['Sua preocupação deve ser a economia. Não a burocracia.','Do projeto à homologação junto à Enel, conte com a equipe da Contele.'],
 '08':['O orçamento ficou pra depois. O verão, não.','Já pediu orçamento em 2026? A gente refaz o cálculo com o ar-condicionado.'],
 '09':['Quando a luz acaba, o que não pode parar na sua casa?','Conheça as estações de energia EcoFlow e BLUETTI.'],
 '11':['A melhor parte da casa é quem está dentro dela.','Feliz Natal. Da equipe Contele para a sua família.'],
};
