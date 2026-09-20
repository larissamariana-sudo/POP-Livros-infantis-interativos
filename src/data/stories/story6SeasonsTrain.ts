import { Book } from '../../types';

export const story6SeasonsTrain: Book = {
  id: 'trem-magico-estacoes',
  title: 'O Expresso Mágico das Quatro Estações',
  subtitle: 'Uma viagem sobre trilhos de arco-íris onde o clima muda num piscar de olhos',
  coverImage: 'train-cover',
  coverEmoji: '🚂',
  ageGroup: '3-6',
  themeColor: 'from-amber-500 via-orange-500 to-rose-600',
  tagline: 'Toque no apito do trem, faça cair folhas de outono e derreta bonecos de neve felizes!',
  totalChapters: 3,
  initialSceneId: 'cena-1-estacao-central',
  characters: [
    { name: 'Nino', role: 'Esquilo maquinista de quepe xadrez', avatar: '🐿️' },
    { name: 'Pompom', role: 'Coelhinha bilheteira saltitante', avatar: '🐰' }
  ],
  scenes: {
    'cena-1-estacao-central': {
      id: 'cena-1-estacao-central',
      chapterNumber: 1,
      title: 'A Plataforma das Folhas Douradas',
      text: 'Piu-uíí! A locomotiva a vapor soltava nuvenzinhas de fumaça que cheiravam a canela e maçã assada. O esquilo Nino corria de um lado para o outro checando a caldeira mágica, enquanto as árvores da estação deixavam cair folhas cor de mel.',
      sceneryType: 'autumn-park',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-apito-trem',
          name: 'Apito Dourado da Locomotiva',
          x: 68,
          y: 35,
          width: 22,
          height: 24,
          actionType: 'bell-ring',
          label: 'Puxar a Cordinha do Apito!',
          hint: 'Toque no apito para fazer o trem cantar...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🔔',
          triggeredIcon: '🚂',
          eventResult: {
            narrativeNote: '🚂 Piu-uííí! O apito tocou um acorde alegre e soltou estrelinhas de vapor dourado!',
          }
        },
        {
          id: 'elem-relogio-estacoes',
          name: 'Relógio das Estações',
          x: 25,
          y: 25,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Girar Ponteiro do Tempo',
          hint: 'Gire o relógio para mudar a estação...',
          hasTriggered: false,
          sound: 'magic',
          icon: '⏰',
          triggeredIcon: '🍁',
          eventResult: {
            narrativeNote: '🍁 Chuva de folhas secas perfumadas rodopiou como chuva de confetes!',
          }
        },
        {
          id: 'elem-esquilo-nino',
          name: 'Maquinista Nino',
          x: 48,
          y: 58,
          width: 20,
          height: 25,
          actionType: 'animal-pet',
          label: 'Cumprimentar Nino',
          hint: 'Dê um oi para o esquilo maquinista!',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐿️',
          triggeredIcon: '🌰',
          eventResult: {
            narrativeNote: '🐿️ Nino tirou o quepe com elegância e ofereceu nozes crocantes!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-rota-inverno',
          text: 'Seguir para a Estação Vale Nevado de Açúcar',
          description: 'Viajar pelos trilhos geladinhos onde flocos de neve cantam ao cair.',
          icon: '❄️',
          targetSceneId: 'cena-2-estacao-inverno'
        },
        {
          id: 'escolha-rota-primavera',
          text: 'Seguir para a Estação Jardim das Cerejeiras em Flor',
          description: 'Passar por túneis de flores cor-de-rosa e borboletas coloridas.',
          icon: '🌸',
          targetSceneId: 'cena-2-estacao-primavera'
        }
      ],
      characterDialogue: {
        speaker: 'Nino',
        avatar: '🐿️',
        text: 'Todos a bordo do Expresso Pop! Segurem seus bilhetes, nossa viagem vai começar!'
      }
    },
    'cena-2-estacao-inverno': {
      id: 'cena-2-estacao-inverno',
      chapterNumber: 2,
      title: 'O Vale dos Bonecos de Neve Cantores',
      text: 'Ao sair do túnel, o mundo ficou todo branquinho e fofinho! Bonecos de neve com cachecóis listrados dançavam na margem dos trilhos, batendo palmas com suas luvinhas de lã.',
      sceneryType: 'crystal-caves',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-boneco-neve',
          name: 'Boneco de Neve Risadinha',
          x: 35,
          y: 52,
          width: 24,
          height: 26,
          actionType: 'creature-jump',
          label: 'Apertar Nariz de Cenoura',
          hint: 'Toque na cenourinha do boneco...',
          hasTriggered: false,
          sound: 'creature',
          icon: '⛄',
          triggeredIcon: '🥕',
          eventResult: {
            narrativeNote: '⛄ Fom-fom! O nariz fez barulho de buzina e o boneco deu uma gargalhada gostosa!',
          }
        },
        {
          id: 'elem-floco-cristal',
          name: 'Super Floco de Neve',
          x: 75,
          y: 35,
          width: 20,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Tocar o Floco de Cristal',
          hint: 'Observe a geometria brilhante do floco...',
          hasTriggered: false,
          sound: 'magic',
          icon: '❄️',
          triggeredIcon: '💎',
          eventResult: {
            narrativeNote: '💎 O floco tocou uma melodia de caixinha de música suave!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-estacao-arcoiris',
          text: 'Acelerar até a Grande Ponte das Quatro Cores',
          description: 'Onde todas as estações do ano se abraçam numa festa linda.',
          icon: '🌈',
          targetSceneId: 'cena-final-trem'
        }
      ],
      characterDialogue: {
        speaker: 'Pompom',
        avatar: '🐰',
        text: 'Que delícia de friozinho! Todo mundo com bochechas coradas e coração quentinho!'
      }
    },
    'cena-2-estacao-primavera': {
      id: 'cena-2-estacao-primavera',
      chapterNumber: 2,
      title: 'O Bosque do Perfume Suave',
      text: 'O trem entrou num arco de flores de pessegueiro. Gotículas de orvalho reluziam como pequenos diamantes e passarinhos faziam revoada acompanhando as janelas dos vagões.',
      sceneryType: 'enchanted-forest',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-cerejeira-flor',
          name: 'Galho de Cerejeira Mágica',
          x: 30,
          y: 30,
          width: 24,
          height: 24,
          actionType: 'flower-bloom',
          label: 'Chacoalhar o Galho Florido',
          hint: 'Toque nas flores rosadas...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🌸',
          triggeredIcon: '🌺',
          eventResult: {
            narrativeNote: '🌸 Uma chuva macia de pétalas cor-de-rosa perfumou todo o trem!',
          }
        },
        {
          id: 'elem-passarinho-azul',
          name: 'Canarinho Cantor',
          x: 70,
          y: 40,
          width: 18,
          height: 20,
          actionType: 'creature-jump',
          label: 'Cantar com o Passarinho',
          hint: 'Toque para ouvir o assobio...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐦',
          triggeredIcon: '🎵',
          eventResult: {
            narrativeNote: '🎵 Piu-piu-li! O passarinho cantou uma valsa e acompanhou o ritmo do trem!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-estacao-arcoiris-2',
          text: 'Cruzar o Túnel Solar até o Fim da Linha Dourada',
          description: 'Onde o maquinista entrega o crachá de honra ao melhor passageiro.',
          icon: '☀️',
          targetSceneId: 'cena-final-trem'
        }
      ],
      characterDialogue: {
        speaker: 'Nino',
        avatar: '🐿️',
        text: 'A primavera nos enche de renovação e esperança! É hora de celebrar nossa viagem!'
      }
    },
    'cena-final-trem': {
      id: 'cena-final-trem',
      chapterNumber: 3,
      title: 'Chegada Triunfal ao Ponto Final',
      text: 'O Expresso completou o circuito de todas as quatro estações! As rodas pararam com suavidade na plataforma onde aplausos e balões coloridos aguardavam por você. Nino e Pompom agradecem pela sua companhia inesquecível!',
      sceneryType: 'autumn-park',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-maquinista',
          name: 'Apito de Ouro do Condutor Mirim',
          x: 45,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'bell-ring',
          label: 'Receber Apito de Ouro',
          hint: 'Toque para aceitar seu troféu ferroviário!',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🎫',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Parabéns! Você agora é Condutor(a) Honorário(a) do Expresso Mágico Pop!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-trem',
          text: 'Embarcar novamente para outra estação!',
          description: 'Suba a bordo mais uma vez para explorar a outra rota climática.',
          icon: '🔄',
          targetSceneId: 'cena-1-estacao-central'
        }
      ],
      characterDialogue: {
        speaker: 'Nino e Pompom',
        avatar: '🐿️',
        text: 'Nossos trilhos estarão sempre abertos para novas partidas e muitas risadas!'
      }
    }
  }
};
