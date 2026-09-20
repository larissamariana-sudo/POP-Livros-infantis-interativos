import { Book } from '../../types';

export const story14GrandparentsHouse: Book = {
  id: 'casa-magica-avos',
  title: 'A Casa Mágica dos Avós e os Biscoitos de Canela',
  subtitle: 'O aconchego do fogão a lenha, histórias de antigamente e o amor sem tamanho de vovô e vovó',
  coverImage: 'grandparents-cover',
  coverEmoji: '👵',
  ageGroup: '3-6',
  themeCategory: 'family',
  themeColor: 'from-amber-600 via-orange-500 to-rose-400',
  tagline: 'Molde biscoitinhos com a vovó, regue violetas no jardim com o vovô e ouça causos divertidos!',
  totalChapters: 3,
  initialSceneId: 'cena-1-chegada-avos',
  characters: [
    { name: 'Vovó Clara', role: 'Mestre confeiteira de doces e abraços quentinhos', avatar: '👵' },
    { name: 'Vovô Bento', role: 'Contador de histórias e jardineiro de orquídeas', avatar: '👴' },
    { name: 'Gabriel', role: 'Netinho curioso com avental listrado', avatar: '🧒' }
  ],
  translations: {
    es: {
      title: 'La Casa Mágica de los Abuelos y las Galletas de Canela',
      subtitle: 'La calidez de la chimenea, cuentos de antes y el inmenso amor de los abuelos',
      tagline: '¡Moldea galletitas con la abuela, riega violetas con el abuelo y escucha historias lindas!'
    },
    en: {
      title: 'The Magical Grandparents\' House & Cinnamon Cookies',
      subtitle: 'The warmth of the hearth, bedtime tales of old, and endless grandparent love',
      tagline: 'Bake cookies with grandma, water flowers with grandpa, and listen to cozy tales!'
    },
    it: {
      title: 'La Casa Magica dei Nonni e i Biscotti alla Cannella',
      subtitle: 'Il calore del camino, vecchi racconti e l\'infinito affetto dei nonni',
      tagline: 'Prepara biscotti con la nonna, innaffia i fiori con il nonno e ascolta dolci storie!'
    }
  },
  scenes: {
    'cena-1-chegada-avos': {
      id: 'cena-1-chegada-avos',
      chapterNumber: 1,
      title: 'O Abraço com Cheiro de Bolo',
      text: 'A porta de madeira com sino de latão se abriu e a vovó Clara apareceu com seu sorriso mais doce. A casa tinha cheirinho de canela assada e flores de lavanda. O vovô Bento ajeitou os óculos e abriu os braços para um abraço apertado.',
      sceneryType: 'grandparents-house',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-relogio-cuco',
          name: 'Relógio Cuco de Madeira',
          x: 48,
          y: 35,
          width: 22,
          height: 24,
          actionType: 'bell-ring',
          label: 'Acionar o Pássaro Cuco',
          hint: 'Que horas são na casa da vovó?',
          hasTriggered: false,
          sound: 'bell',
          icon: '🕰️',
          triggeredIcon: '🐦',
          eventResult: {
            narrativeNote: '🐦 Cuco! Cuco! Um passarinho amarelo saiu da portinha e cantou três vezes!',
          }
        },
        {
          id: 'elem-xicara-cha',
          name: 'Chá de Camomila Quentinho',
          x: 20,
          y: 62,
          width: 18,
          height: 20,
          actionType: 'water-drink',
          label: 'Sentir o Aroma do Chá',
          hint: 'Inspire o cheirinho de camomila...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🍵',
          triggeredIcon: '🌼',
          eventResult: {
            narrativeNote: '🌼 Uma fumacinha doce em formato de coração subiu da xícara de porcelana!',
          }
        },
        {
          id: 'elem-gatinho-fofura',
          name: 'Fumaça, o Gato da Vovó',
          x: 75,
          y: 65,
          width: 20,
          height: 22,
          actionType: 'animal-pet',
          label: 'Acariciar o Gato Fumaça',
          hint: 'Ele está dormindo no tapete...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐱',
          triggeredIcon: '🐾',
          eventResult: {
            narrativeNote: '🐾 Ron-ron-ron! Fumaça espreguiçou as patinhas e deu uma lambidinha carinhosa na mão de Gabriel!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-cozinha-biscoitos',
          text: 'Ir com a Vovó para a Cozinha Cortar Biscoitinhos de Estrela',
          description: 'Enfarinhar as mãos, enrolar a massa doce e salpicar açúcar com canela.',
          icon: '🍪',
          targetSceneId: 'cena-2-cozinha-biscoitos'
        },
        {
          id: 'escolha-jardim-horta',
          text: 'Ajudar o Vovô a Colher Morangos Vermelhinhos na Horta',
          description: 'Cuidar das plantinhas com o regador verde e aprender como a semente cresce.',
          icon: '🍓',
          targetSceneId: 'cena-2-horta-vovo'
        }
      ],
      characterDialogue: {
        speaker: 'Vovó Clara',
        avatar: '👵',
        text: 'Meu coração estava com tantas saudades suas, meu docinho de coco! Venha entrar que a casa é toda sua!'
      }
    },
    'cena-2-cozinha-biscoitos': {
      id: 'cena-2-cozinha-biscoitos',
      chapterNumber: 2,
      title: 'A Fábrica Secreta de Biscoitos',
      text: 'A mesa de jacarandá estava coberta por uma nuvem fina de farinha de trigo. Gabriel usou forminhas em formato de coração, lua e estrelinhas para cortar a massa macia.',
      sceneryType: 'grandparents-house',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-forma-biscoito',
          name: 'Forminha Estrela de Ouro',
          x: 48,
          y: 55,
          width: 22,
          height: 22,
          actionType: 'cookie-bite',
          label: 'Cortar Biscoito de Estrela',
          hint: 'Pressione a forminha na massa...',
          hasTriggered: false,
          sound: 'pop',
          icon: '⭐',
          triggeredIcon: '🍪',
          eventResult: {
            narrativeNote: '🍪 Ploc! O biscoitinho de estrela pulou para a assadeira pronto para assar no forno quentinho!',
          }
        },
        {
          id: 'elem-pote-canela',
          name: 'Polvilhador de Canela',
          x: 25,
          y: 50,
          width: 18,
          height: 20,
          actionType: 'fruit-fall',
          label: 'Salpicar Canela Doce',
          hint: 'Dê uma pitadinha mágica...',
          hasTriggered: false,
          sound: 'magic',
          icon: '✨',
          triggeredIcon: '🥮',
          eventResult: {
            narrativeNote: '🥮 O aroma de canela perfumou cada cantinho da casa enchendo todos de paz!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-historias-lareira',
          text: 'Sentar Perto da Lareira para Ouvir a História do Vovô',
          description: 'Acomodar-se na poltrona macia com uma xícara de leite e biscoitos crocantes.',
          icon: '📖',
          targetSceneId: 'cena-final-avos'
        }
      ],
      characterDialogue: {
        speaker: 'Gabriel',
        avatar: '🧒',
        text: 'Vovó, seus biscoitos têm gosto de abraço quentinho de manhã!'
      }
    },
    'cena-2-horta-vovo': {
      id: 'cena-2-horta-vovo',
      chapterNumber: 2,
      title: 'O Tesouro Secreto da Terra',
      text: 'O vovô Bento mostrou a Gabriel como as abelhinhas beijavam as flores de tomateiro. Entre as folhas verdes, morangos vermelhos e brilhantes como rubis pediam para serem colhidos.',
      sceneryType: 'enchanted-forest',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-morango-colheita',
          name: 'Morango Doce no Cesto',
          x: 35,
          y: 60,
          width: 20,
          height: 22,
          actionType: 'fruit-fall',
          label: 'Colher o Morango Madurinho',
          hint: 'Puxe suavemente pelo cabinho...',
          hasTriggered: false,
          sound: 'plop',
          icon: '🍓',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '❤️ Plop! Um morango suculento e orgânico, o mais doce do jardim do vovô!',
          }
        },
        {
          id: 'elem-regador-horta',
          name: 'Regador Verde do Vovô',
          x: 70,
          y: 55,
          width: 20,
          height: 22,
          actionType: 'river-flow',
          label: 'Regar a Hortelã',
          hint: 'Dê uma chuvinha para as folhas...',
          hasTriggered: false,
          sound: 'water',
          icon: '🚿',
          triggeredIcon: '🌿',
          eventResult: {
            narrativeNote: '🌿 As folhinhas de hortelã balançaram felizes agradecendo as gotinhas refrescantes!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-historias-lareira-2',
          text: 'Levar os Morangos para Comer Junto dos Biscoitos da Vovó',
          description: 'Reunir toda a família na sala para ouvir as memórias do tempo do vovô.',
          icon: '👵',
          targetSceneId: 'cena-final-avos'
        }
      ],
      characterDialogue: {
        speaker: 'Vovô Bento',
        avatar: '👴',
        text: 'Quem planta com carinho, meu neto, sempre colhe doçura e alegria na vida.'
      }
    },
    'cena-final-avos': {
      id: 'cena-final-avos',
      chapterNumber: 3,
      title: 'O Livro Antigo e o Sono Aconchegante',
      text: 'Com os pratinhos vazios de biscoito e a barriguinha satisfeita, Gabriel deitou a cabeça no colo da vovó enquanto o vovô contava de quando navegou num rio com barquinhos de papel. O carinho dos avós é o cobertor mais seguro do mundo.',
      sceneryType: 'grandparents-house',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-afeto',
          name: 'Coração de Ouro dos Netinhos',
          x: 48,
          y: 50,
          width: 22,
          height: 24,
          actionType: 'pet-hug',
          label: 'Abençoar com Amor Eterno',
          hint: 'Dê um beijo de boa noite...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '💖',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Parabéns! Você vivenciou o amor incondicional que só a casa dos avós sabe dar!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-avos',
          text: 'Visitar os avós novamente!',
          description: 'Reviva as receitas e as brincadeiras acolhedoras com vovô e vovó.',
          icon: '🔄',
          targetSceneId: 'cena-1-chegada-avos'
        }
      ],
      characterDialogue: {
        speaker: 'Vovó e Vovô',
        avatar: '👵',
        text: 'Durma com os anjos, meu bem. Nós te amamos daqui até as estrelas mais distantes!'
      }
    }
  }
};
