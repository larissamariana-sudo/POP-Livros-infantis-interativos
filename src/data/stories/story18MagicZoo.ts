import { Book } from '../../types';

export const story18MagicZoo: Book = {
  id: 'zoologico-encantado',
  title: 'O Zoológico Encantado dos Animais Sorridentes',
  subtitle: 'Um passeio mágico por habitats verdes para aprender como vivem girafas, elefantes e pinguins',
  coverImage: 'magic-zoo-cover',
  coverEmoji: '🦒',
  ageGroup: '3-6',
  themeCategory: 'pets',
  themeColor: 'from-lime-400 via-emerald-500 to-amber-300',
  tagline: 'Alimente a girafa Gigi com folhas altas, veja o banho de tromba do elefante Dudu e respeite a vida selvagem!',
  totalChapters: 3,
  initialSceneId: 'cena-1-entrada-zoo',
  characters: [
    { name: 'Gigi', role: 'Girafa elegante de pescoço comprido que adora acácia', avatar: '🦒' },
    { name: 'Dudu', role: 'Bebê elefante brincalhão mestre em espirrar água', avatar: '🐘' },
    { name: 'Guarda Beto', role: 'Biólogo do zoológico que protege e alimenta os bichos', avatar: '👨‍🌾' }
  ],
  translations: {
    es: {
      title: 'El Zoológico Encantado de los Animales Sonrientes',
      subtitle: 'Un recorrido mágico para conocer y respetar a jirafas, elefantes y pingüinos',
      tagline: '¡Alimenta a la jirafa Gigi, disfruta del baño de trompa del elefante Dudu y cuida a los animales!'
    },
    en: {
      title: 'The Enchanted Zoo of Smiling Animals',
      subtitle: 'A magical journey through lush habitats to discover giraffes, elephants, and penguins',
      tagline: 'Feed Gigi the giraffe crunchy acacia leaves, watch baby Dudu the elephant splash water!'
    },
    it: {
      title: 'Lo Zoo Incantato degli Animali Sorridenti',
      subtitle: 'Un viaggio magico attraverso habitat verdeggianti per conoscere giraffe ed elefanti',
      tagline: 'Dai foglie fresche alla giraffa Gigi e guarda i giochi d\'acqua dell\'elefantino Dudu!'
    }
  },
  scenes: {
    'cena-1-entrada-zoo': {
      id: 'cena-1-entrada-zoo',
      chapterNumber: 1,
      title: 'A Savana das Girafas Elegantes',
      text: 'O portão de madeira esculpida abriu-se para uma planície ensolarada com árvores frondosas. Gigi, a girafa amarela com manchinhas de chocolate, caminhou com passadas suaves e esticou o pescoço comprido para espiar os visitantes mirins com seus olhos redondos e gentis.',
      sceneryType: 'zoo-safari',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-folha-acacia',
          name: 'Ramo de Acácia Fresca',
          x: 75,
          y: 35,
          width: 22,
          height: 24,
          actionType: 'fruit-fall',
          label: 'Oferecer Folhas para Gigi',
          hint: 'Erga o ramo bem alto...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🌿',
          triggeredIcon: '🦒',
          eventResult: {
            narrativeNote: '🦒 Nhoc! Com sua língua comprida e azulada, Gigi pegou as folhinhas e deu uma piscadinha!',
          }
        },
        {
          id: 'elem-passarinho-safari',
          name: 'Pica-boi Amigo no Dorso',
          x: 48,
          y: 40,
          width: 18,
          height: 20,
          actionType: 'creature-jump',
          label: 'Cumprimentar o Passarinho',
          hint: 'Ele ajuda a limpar as costas da girafa...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐦',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Esse passarinho é o melhor amigo da girafa! Eles vivem em harmonia na natureza!',
          }
        },
        {
          id: 'elem-bebedouro-savana',
          name: 'Lago de Água Cristalina',
          x: 35,
          y: 70,
          width: 24,
          height: 20,
          actionType: 'river-flow',
          label: 'Ver Gigi Beber Água',
          hint: 'Veja como ela abre as patinhas...',
          hasTriggered: false,
          sound: 'water',
          icon: '💧',
          triggeredIcon: '🌊',
          eventResult: {
            narrativeNote: '🌊 Gigi abriu as pernas dianteiras num espacate divertido para alcançar a água com elegância!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-ver-elefantes',
          text: 'Ir ao Vale dos Elefantes para Ver o Banho de Tromba',
          description: 'Descobrir como os elefantes se refrescam e cuidam de seus filhotes com carinho.',
          icon: '🐘',
          targetSceneId: 'cena-2-vale-elefantes'
        },
        {
          id: 'escolha-ilha-pinguins',
          text: 'Visitar a Piscina de Neve dos Pinguins Saltadores',
          description: 'Aprender como os pinguins deslizam de barriga no gelo e nadam super rápido.',
          icon: '🐧',
          targetSceneId: 'cena-2-piscina-pinguins'
        }
      ],
      characterDialogue: {
        speaker: 'Guarda Beto',
        avatar: '👨‍🌾',
        text: 'Bem-vindos ao santuário! Aqui nós cuidamos de cada animal com amor, boa alimentação e muito respeito!'
      }
    },
    'cena-2-vale-elefantes': {
      id: 'cena-2-vale-elefantes',
      chapterNumber: 2,
      title: 'O Chuveiro Divertido de Dudu',
      text: 'No vale dos elefantes, uma cachoeira suave enchia uma lagoa rasa. Dudu, o filhote de orelhas redondas, sugou água fresca com a tromba e espirrou para o alto, criando um arco-íris brilhante sob a luz do sol.',
      sceneryType: 'zoo-safari',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-tromba-chuveiro',
          name: 'Tromba Chafariz de Dudu',
          x: 42,
          y: 55,
          width: 24,
          height: 24,
          actionType: 'river-flow',
          label: 'Apertar o Chafariz da Tromba',
          hint: 'Tchuáááá!...',
          hasTriggered: false,
          sound: 'water',
          icon: '🐘',
          triggeredIcon: '🌈',
          eventResult: {
            narrativeNote: '🌈 Tchuááá! Um arco-íris cintilante se formou no ar com o espirro de água refrescante!',
          }
        },
        {
          id: 'elem-melancia-elefante',
          name: 'Melancia Inteira Suculenta',
          x: 70,
          y: 65,
          width: 20,
          height: 20,
          actionType: 'fruit-fall',
          label: 'Dar Melancia para Mamãe Elefanta',
          hint: 'Ela adora frutas doces...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🍉',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '❤️ Cranc! A mamãe elefanta comeu a fruta inteira com a maior alegria do mundo!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-diploma-guardiao',
          text: 'Receber a Estrela de Protetor da Vida Selvagem',
          description: 'Aprender as regras de ouro para proteger todos os animais do planeta Terra.',
          icon: '🌟',
          targetSceneId: 'cena-final-zoo'
        }
      ],
      characterDialogue: {
        speaker: 'Dudu',
        avatar: '🐘',
        text: 'Fuuuuf! Eu amo nadar e me refrescar com a minha família!'
      }
    },
    'cena-2-piscina-pinguins': {
      id: 'cena-2-piscina-pinguins',
      chapterNumber: 2,
      title: 'O Tobogã Gelado dos Pinguins',
      text: 'O espaço dos pinguins era fresquinho e cheio de pedras polidas. Quatro pinguins de fraque preto e branco subiram na rampa e escorregaram de barriguinha direto para a água cristalina, mergulhando como torpedinhos alegres.',
      sceneryType: 'snowy-aurora',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-escorrega-pinguim',
          name: 'Pinguim no Tobogã',
          x: 35,
          y: 50,
          width: 22,
          height: 22,
          actionType: 'creature-jump',
          label: 'Dar Impulso no Pinguim',
          hint: 'Uhuuuu no escorregador...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐧',
          triggeredIcon: '❄️',
          eventResult: {
            narrativeNote: '❄️ Shuusssh! O pinguinzinho desceu veloz e deu um mergulho nota dez na água gelada!',
          }
        },
        {
          id: 'elem-peixinho-prata',
          name: 'Petisco de Sardinha Fresca',
          x: 65,
          y: 60,
          width: 18,
          height: 20,
          actionType: 'fruit-fall',
          label: 'Jogar o Peixinho na Piscina',
          hint: 'Veja a velocidade da natação...',
          hasTriggered: false,
          sound: 'water',
          icon: '🐟',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: '⭐ Que nado rápido! O pinguim nadou mais veloz do que um foguete aquático!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-diploma-guardiao-2',
          text: 'Voltar ao Pátio Central para Ganhar o Crachá de Protetor Mirim',
          description: 'Comprometer-se a não poluir oceanos nem florestas.',
          icon: '🏅',
          targetSceneId: 'cena-final-zoo'
        }
      ],
      characterDialogue: {
        speaker: 'Pinguim Pingo',
        avatar: '🐧',
        text: 'Qua-qua! Nadar em água limpa é a coisa mais gostosa que existe!'
      }
    },
    'cena-final-zoo': {
      id: 'cena-final-zoo',
      chapterNumber: 3,
      title: 'Os Guardiões da Terra e dos Oceanos',
      text: 'Ao final do dia, todos os animais pareciam acenar suavemente: as girafas no alto das copas, os elefantes perto da cachoeira e os pinguins na ilha de pedra. Cada criança que visita o zoológico leva para casa a missão de amar e proteger todas as criaturas vivas.',
      sceneryType: 'zoo-safari',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-cracha-guardiao',
          name: 'Insígnia de Amigo dos Animais',
          x: 48,
          y: 50,
          width: 22,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Usar o Crachá de Ouro',
          hint: 'Toque para jurar proteção...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🛡️',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Parabéns! Você é agora um Guardião Oficial da Fauna e Flora do Planeta Terra!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-zoo',
          text: 'Fazer o passeio no zoológico novamente!',
          description: 'Recomece para visitar outros habitats e alimentar os animais.',
          icon: '🔄',
          targetSceneId: 'cena-1-entrada-zoo'
        }
      ],
      characterDialogue: {
        speaker: 'Guarda Beto',
        avatar: '👨‍🌾',
        text: 'Você foi o visitante mais atencioso e respeitoso de todos! A natureza agradece de coração!'
      }
    }
  }
};
