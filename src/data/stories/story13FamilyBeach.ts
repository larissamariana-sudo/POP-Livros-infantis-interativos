import { Book } from '../../types';

export const story13FamilyBeach: Book = {
  id: 'praia-familia-ondas',
  title: 'O Dia de Pular Ondas na Praia com a Família',
  subtitle: 'Um domingo ensolarado à beira-mar com castelos de areia, mergulhos seguros e muita risada',
  coverImage: 'beach-family-cover',
  coverEmoji: '🏖️',
  ageGroup: '3-6',
  themeCategory: 'family',
  themeColor: 'from-sky-400 via-cyan-400 to-amber-300',
  tagline: 'Pule ondinhas mornas com o papai e a mamãe, molde conchas douradas e passe protetor solar!',
  totalChapters: 3,
  initialSceneId: 'cena-1-chegada-praia',
  characters: [
    { name: 'Lucas', role: 'Irmãozinho animado com boia de patinho', avatar: '👦' },
    { name: 'Sofia', role: 'Irmã mais velha mestre em castelos de areia', avatar: '👧' },
    { name: 'Papai & Mamãe', role: 'Guardiões cuidadosos com toalhas e água fresca', avatar: '👨‍👩‍👧‍👦' }
  ],
  translations: {
    es: {
      title: 'El Día de Saltar Olas en la Playa con la Familia',
      subtitle: 'Un domingo soleado junto al mar con castillos de arena, baños seguros y muchas risas',
      tagline: '¡Salta olitas templadas con papá y mamá, junta conchas doradas y ponte protector solar!'
    },
    en: {
      title: 'Jumping Waves at the Beach with Family',
      subtitle: 'A sunny Sunday by the sea with sandcastles, safe splashes, and lots of laughter',
      tagline: 'Jump warm gentle waves with mom and dad, collect golden seashells, and wear sunscreen!'
    },
    it: {
      title: 'Saltare le Onde al Mare con la Famiglia',
      subtitle: 'Una domenica di sole in riva al mare con castelli di sabbia, bagni sicuri e tante risate',
      tagline: 'Salta le dolci onde con mamma e papà, raccogli conchiglie dorate e metti la crema solare!'
    }
  },
  scenes: {
    'cena-1-chegada-praia': {
      id: 'cena-1-chegada-praia',
      chapterNumber: 1,
      title: 'Pés na Areia e Cheiro de Mar',
      text: 'O sol brilhava como uma moeda de ouro no céu azul. A brisa trazia o som suave das ondas quebrando na praia. Lucas e Sofia correram de mãos dadas com a mamãe até a beira da água, prontos para a diversão!',
      sceneryType: 'sunny-beach',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-onda-mar',
          name: 'Ondinha Espumante',
          x: 48,
          y: 48,
          width: 25,
          height: 25,
          actionType: 'wave-jump',
          label: 'Pular a Ondinha!',
          hint: 'Toque para dar um pulo refrescante...',
          hasTriggered: false,
          sound: 'water',
          icon: '🌊',
          triggeredIcon: '💦',
          eventResult: {
            narrativeNote: '💦 Tchupluft! A água fez cócegas nos pezinhos de Lucas e todos deram gargalhadas!',
          }
        },
        {
          id: 'elem-protetor-solar',
          name: 'Protetor Solar e Chapéu',
          x: 82,
          y: 65,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Passar Protetor no Nariz',
          hint: 'Cuidado e saúde sob o sol...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🧴',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Narizinho protegido com cheirinho gostoso de coco! Agora é seguro brincar!',
          }
        },
        {
          id: 'elem-concha-areia',
          name: 'Concha Espiral Colorida',
          x: 25,
          y: 68,
          width: 18,
          height: 20,
          actionType: 'chest-open',
          label: 'Apanhar Concha na Areia',
          hint: 'Toque na concha brilhante...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🐚',
          triggeredIcon: '💎',
          eventResult: {
            narrativeNote: '💎 Que linda! Uma concha perfeita para decorar o topo da torre do castelo!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-castelo-gigante',
          text: 'Construir a Fortaleza das Quatro Torres de Areia',
          description: 'Usar baldes coloridos e pás para esculpir o maior castelo da praia.',
          icon: '🏰',
          targetSceneId: 'cena-2-castelo-areia'
        },
        {
          id: 'escolha-mergulho-boia',
          text: 'Pular as Ondas de Mãos Dadas com o Papai',
          description: 'Aproveitar a maré calma para brincar de barquinho flutuante.',
          icon: '🏊‍♂️',
          targetSceneId: 'cena-2-pular-ondas'
        }
      ],
      characterDialogue: {
        speaker: 'Sofia',
        avatar: '👧',
        text: 'Olha aquela conchinha brilhando na areia molhada! Vamos guardá-la como nosso tesouro de família!'
      }
    },
    'cena-2-castelo-areia': {
      id: 'cena-2-castelo-areia',
      chapterNumber: 2,
      title: 'Os Arquitetos da Praia',
      text: 'Sofia fez as muralhas e Lucas encheu o balde com areia fofa e molhada. O papai ajudou a cavar um fosso protetor onde a água do mar entrava suavemente sem derrubar a construção.',
      sceneryType: 'sunny-beach',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-balde-castelo',
          name: 'Balde de Areia Molhada',
          x: 45,
          y: 60,
          width: 22,
          height: 24,
          actionType: 'fruit-fall',
          label: 'Virar o Balde com Cuidado',
          hint: 'Toque para erguer a torre...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🪣',
          triggeredIcon: '🏰',
          eventResult: {
            narrativeNote: '🏰 Pop! A torre ficou perfeita e retinha com a bandeirinha de folha no topo!',
          }
        },
        {
          id: 'elem-caranguejo-amigo',
          name: 'Caranguejinho Amigável',
          x: 20,
          y: 65,
          width: 18,
          height: 20,
          actionType: 'creature-jump',
          label: 'Cumprimentar o Caranguejo',
          hint: 'Ele veio ver o castelo!',
          hasTriggered: false,
          sound: 'creature',
          icon: '🦀',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '❤️ O caranguejinho andou de ladinho aplaudindo com suas patinhas o lindo castelo!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-piquenique-final',
          text: 'Fazer o Piquenique de Melancia na Sombra da Barraca',
          description: 'Comer frutas doces e geladinhas enquanto o sol se põe no horizonte.',
          icon: '🍉',
          targetSceneId: 'cena-final-praia'
        }
      ],
      characterDialogue: {
        speaker: 'Lucas',
        avatar: '👦',
        text: 'Ficou o castelo mais bonito do mundo inteiro! Ninguém faz castelos melhores que nós!'
      }
    },
    'cena-2-pular-ondas': {
      id: 'cena-2-pular-ondas',
      chapterNumber: 2,
      title: 'Um, Dois, Três e... Pula!',
      text: 'Com água na altura da cintura, o papai segurava forte nas mãos de Lucas e Sofia. Quando a ondinha redonda vinha chegando, todos contavam juntos e davam um pulo sincronizado para o alto!',
      sceneryType: 'sunny-beach',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-salto-onda',
          name: 'Super Pulo da Família',
          x: 50,
          y: 50,
          width: 24,
          height: 24,
          actionType: 'wave-jump',
          label: 'Pular Bem Alto!',
          hint: 'A onda está vindo...',
          hasTriggered: false,
          sound: 'water',
          icon: '🌊',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: '⭐ Que salto incrível! A água espirrou gotas prateadas como purpurina no ar!',
          }
        },
        {
          id: 'elem-estrela-mar',
          name: 'Estrela-do-Mar no Fundo',
          x: 30,
          y: 70,
          width: 18,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Observar a Estrela com Cuidado',
          hint: 'Veja sem tirar da água...',
          hasTriggered: false,
          sound: 'magic',
          icon: '⭐',
          triggeredIcon: '🌟',
          eventResult: {
            narrativeNote: '🌟 A estrela-do-mar cor-de-rosa acenou mansamente no fundo da água transparente!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-piquenique-final-2',
          text: 'Voltar para a Toalha e Tomar Água de Coco Bem Gelada',
          description: 'Hidratar o corpo e relaxar com o abraço quentinho da toalha macia.',
          icon: '🥥',
          targetSceneId: 'cena-final-praia'
        }
      ],
      characterDialogue: {
        speaker: 'Papai & Mamãe',
        avatar: '👨‍👩‍👧‍👦',
        text: 'Vocês são nossos pequenos peixinhos valentes! Estar aqui juntos é o nosso melhor momento!'
      }
    },
    'cena-final-praia': {
      id: 'cena-final-praia',
      chapterNumber: 3,
      title: 'O Pôr do Sol Dourado da Família',
      text: 'O céu pintou-se de pêssego e lilás. Enrolados em toalhas fofas, comendo fatias de melancia fresca e bebendo água de coco, a família assistiu às gaivotas voando para suas casas. O coração de todos estava cheio de amor e paz.',
      sceneryType: 'sunny-beach',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-abraco-familia',
          name: 'O Grande Abraço de Família',
          x: 48,
          y: 55,
          width: 22,
          height: 24,
          actionType: 'pet-hug',
          label: 'Dar um Abraço Coletivo',
          hint: 'Toque para espalhar amor...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '❤️',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Parabéns! Você completou um dia inesquecível de afeto, sol e proteção em família!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-praia',
          text: 'Reviver este dia ensolarado na praia!',
          description: 'Recomece a história para explorar novas conchas e brincadeiras.',
          icon: '🔄',
          targetSceneId: 'cena-1-chegada-praia'
        }
      ],
      characterDialogue: {
        speaker: 'Lucas e Sofia',
        avatar: '👧',
        text: 'Nós amamos a nossa família! O melhor lugar do mundo é onde estamos juntos!'
      }
    }
  }
};
