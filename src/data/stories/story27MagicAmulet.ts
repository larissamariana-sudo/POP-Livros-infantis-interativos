import { Book } from '../../types';

export const story27MagicAmulet: Book = {
  id: 'amuleto-quatro-elementos',
  title: 'O Amuleto dos Quatro Elementos',
  subtitle: 'O despertar dos poderes ancestrais da Terra, Água, Fogo e Ar na Academia Arcana',
  coverImage: 'magic-amulet-cover',
  coverEmoji: '🔮✨',
  ageGroup: '7-10',
  themeCategory: 'fantasy',
  themeColor: 'from-violet-600 via-purple-700 to-amber-400',
  tagline: 'Gire as quatro pedras elementares, invoque o escudo de cristal e aprenda que o maior poder é proteger quem precisa!',
  totalChapters: 3,
  initialSceneId: 'cena-1-biblioteca-arcana',
  characters: [
    { name: 'Yuri', role: 'Aprendiz de mago que descobre ter sintonia com as forças da natureza', avatar: '🧙' },
    { name: 'Mestra Selene', role: 'Feiticeira das estrelas que ensina sabedoria antes do feitiço', avatar: '🧙‍♀️' },
    { name: 'Faísca', role: 'Corujinha mágica feita de luz estelar', avatar: '🦉' }
  ],
  translations: {
    es: {
      title: 'El Amuleto de los Cuatro Elementos',
      subtitle: 'El despertar de los poderes de la Tierra, Agua, Fuego y Aire en la Academia Arcana',
      tagline: '¡Gira las cuatro gemas elementales, conjura el escudo de luz y protege a los indefensos!'
    },
    en: {
      title: 'The Amulet of the Four Elements',
      subtitle: 'Awakening the ancient powers of Earth, Water, Fire, and Air at the Arcane Academy',
      tagline: 'Rotate the four elemental crystals, summon shields of light, and discover magic serves kindness!'
    },
    it: {
      title: 'L\'Amuleto dei Quattro Elementi',
      subtitle: 'Il risveglio dei poteri magici di Terra, Acqua, Fuoco e Aria nell\'Accademia Arcana',
      tagline: 'Attiva le quattro gemme elementari, lancia incantesimi luminosi e proteggi il regno!'
    }
  },
  scenes: {
    'cena-1-biblioteca-arcana': {
      id: 'cena-1-biblioteca-arcana',
      chapterNumber: 1,
      title: 'O Despertar do Pingente de Safira',
      text: 'No alto da torre da Academia Arcana, pergaminhos e livros flutuavam no ar em órbitas harmoniosas. Yuri colocou as mãos sobre o Amuleto dos Quatro Elementos: quatro gemas — rubi, safira, esmeralda e topázio — começaram a girar em sintonia com o bater do seu coração.',
      sceneryType: 'magic-academy',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-livro-flutuante',
          name: 'Grimório das Quatro Forças',
          x: 48,
          y: 35,
          width: 22,
          height: 24,
          actionType: 'secret-path',
          label: 'Abrir as Páginas Encantadas',
          hint: 'Letras de luz azulada...',
          hasTriggered: false,
          sound: 'magic',
          icon: '📖',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ As runas antigas se reorganizaram na página revelando o feitiço do Escudo de Safira!',
          }
        },
        {
          id: 'elem-amuleto-pingente',
          name: 'O Amuleto dos Elementos',
          x: 25,
          y: 55,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Tocar a Gema de Fogo e Água',
          hint: 'Calor e frescor em harmonia...',
          hasTriggered: false,
          sound: 'fire',
          icon: '🔮',
          triggeredIcon: '💎',
          eventResult: {
            narrativeNote: '💎 Faíscas douradas e gotas de orvalho dançaram ao redor dos dedos de Yuri em perfeita paz!',
          }
        },
        {
          id: 'elem-coruja-faisca',
          name: 'Corujinha Estelar Faísca',
          x: 75,
          y: 45,
          width: 18,
          height: 20,
          actionType: 'creature-jump',
          label: 'Fazer Cafuné na Coruja de Luz',
          hint: 'Uh-uh sonoro...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🦉',
          triggeredIcon: '🌟',
          eventResult: {
            narrativeNote: '🌟 Faísca abriu as asinhas prateadas iluminando o mapa estelar no teto abobadado!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-dominio-agua-terra',
          text: 'Dominar o Elemento da Terra para Fazer Brotar Plantas Medicinais',
          description: 'Usar o poder verde para regenerar florestas e curar ferimentos.',
          icon: '🌱',
          targetSceneId: 'cena-2-magia-terra'
        },
        {
          id: 'escolha-dominio-vento-ar',
          text: 'Dominar o Elemento do Vento para Aprender o Passo Flutuante',
          description: 'Caminhar pelo ar e criar redemoinhos protetores sem peso algum.',
          icon: '🌪️',
          targetSceneId: 'cena-2-magia-vento'
        }
      ],
      characterDialogue: {
        speaker: 'Mestra Selene',
        avatar: '🧙‍♀️',
        text: 'O poder sem gentileza é apenas vento passageiro. Mas o poder guiado pelo amor pode curar o mundo inteiro!'
      }
    },
    'cena-2-magia-terra': {
      id: 'cena-2-magia-terra',
      chapterNumber: 2,
      title: 'A Dança das Raízes de Esmeralda',
      text: 'No pátio de pedra, Yuri apontou a gema esmeralda do amuleto para o solo ressecado. Em segundos, videiras carregadas de flores luminosas subiram pelas colunas de mármore, perfumando toda a torre com aroma de jasmim silvestre.',
      sceneryType: 'magic-academy',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-flor-luminescente',
          name: 'Flor da Vida de Jade',
          x: 40,
          y: 60,
          width: 22,
          height: 22,
          actionType: 'flower-bloom',
          label: 'Fazer a Flor Desabrochar',
          hint: 'Poder de cura vegetal...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🌸',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Pétalas brilhantes emanaram ondas de calma e restabeleceram a saúde da terra cansada!',
          }
        },
        {
          id: 'elem-escudo-terra',
          name: 'Barreira de Cristais de Rocha',
          x: 70,
          y: 50,
          width: 20,
          height: 20,
          actionType: 'light-glow',
          label: 'Erguer a Barreira Protetora',
          hint: 'Proteção impenetrável...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🛡️',
          triggeredIcon: '🟢',
          eventResult: {
            narrativeNote: '🟢 Cristais verdes ergueram-se como muralhas gentis para acolher quem busca refúgio!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-sagracao-guardiao',
          text: 'Concluir a Prova Final e Tornar-se o Guardião dos Elementos',
          description: 'Selar o pacto de usar a magia apenas para a paz e o bem comum.',
          icon: '🔮',
          targetSceneId: 'cena-final-amuleto'
        }
      ],
      characterDialogue: {
        speaker: 'Yuri',
        avatar: '🧙',
        text: 'A terra não é dura nem fria; ela está cheia de sementes esperando uma faísca de carinho para florescer!'
      }
    },
    'cena-2-magia-vento': {
      id: 'cena-2-magia-vento',
      chapterNumber: 2,
      title: 'O Voo nas Asas do Topázio',
      text: 'Yuri ativou a gema amarela do amuleto e sentiu seus pés perderem a gravidade. Apoiado por redemoinhos de ar morno, ele deu passos seguros no ar, dançando entre os vitrais da academia como um pássaro livre.',
      sceneryType: 'sky-islands',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-brisa-vento',
          name: 'Corrente de Ar Ascendente',
          x: 45,
          y: 40,
          width: 24,
          height: 22,
          actionType: 'river-flow',
          label: 'Planar no Vento Suave',
          hint: 'Leveza pura...',
          hasTriggered: false,
          sound: 'water',
          icon: '💨',
          triggeredIcon: '🪶',
          eventResult: {
            narrativeNote: '🪶 Flutuação impecável! Yuri desceu em uma espiral de folhas douradas sem tocar no chão!',
          }
        },
        {
          id: 'elem-orbe-luz-ar',
          name: 'Orbe Eólico Reluzente',
          x: 72,
          y: 35,
          width: 18,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Concentrar a Brisa Cristalina',
          hint: 'Limpa a fumaça e as nuvens...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🔮',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: '⭐ O orbe limpou toda a poeira trazendo ar puro e refrescante para os quatro cantos do vale!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-sagracao-guardiao-2',
          text: 'Pousar no Altar das Estrelas para Receber o Brasão Mágico',
          description: 'A prova de que a coragem e a pureza de intenção são as chaves da sabedoria.',
          icon: '✨',
          targetSceneId: 'cena-final-amuleto'
        }
      ],
      characterDialogue: {
        speaker: 'Mestra Selene',
        avatar: '🧙‍♀️',
        text: 'Você compreendeu o maior segredo da magia: o mago sábio não domina os elementos, ele se torna amigo deles!'
      }
    },
    'cena-final-amuleto': {
      id: 'cena-final-amuleto',
      chapterNumber: 3,
      title: 'O Novo Guardião da Harmonia',
      text: 'O Amuleto brilhou com as quatro cores unidas em um único halo de luz estelar dourada. Yuri foi condecorado como o Guardião da Harmonia, prometendo cuidar das florestas, rios, ventos e fogueiras de toda a região com justiça e afeto sem fim.',
      sceneryType: 'magic-academy',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-cetro-guardiao',
          name: 'Cetro de Cristal dos Quatro Elementos',
          x: 48,
          y: 50,
          width: 24,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Empunhar o Cetro da Paz Arcana',
          hint: 'Toque para consagrar...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🪄',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Conquista Suprema: Mestre dos Quatro Elementos! A verdadeira magia está em fazer o bem a tudo que respira!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-amuleto',
          text: 'Iniciar uma nova jornada na Academia de Magia!',
          description: 'Recomece para treinar novos feitiços e explorar salas secretas.',
          icon: '🔄',
          targetSceneId: 'cena-1-biblioteca-arcana'
        }
      ],
      characterDialogue: {
        speaker: 'Yuri e Selene',
        avatar: '🧙🧙‍♀️',
        text: 'Que a luz dos quatro elementos sempre ilumine os seus passos na terra e nos céus!'
      }
    }
  }
};
