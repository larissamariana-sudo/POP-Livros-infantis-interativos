import { Book } from '../../types';

export const story32TimePortals: Book = {
  id: 'portal-sonhos-lentes-amanha',
  title: 'O Portal dos Sonhos e as Lentes do Amanhã',
  subtitle: 'O acelerador quântico de bolso, projeções do futuro ecológico e as escolhas que moldam o destino da Terra',
  coverImage: 'time-portals-cover',
  coverEmoji: '⏳🌌',
  ageGroup: '11-14',
  themeCategory: 'fantasy',
  themeColor: 'from-cyan-600 via-indigo-700 to-purple-800',
  tagline: 'Gire os prismas de refração temporal, visualize cidades verdes do futuro e faça a escolha que salva o planeta!',
  totalChapters: 3,
  initialSceneId: 'cena-1-laboratorio-temporal',
  characters: [
    { name: 'Nico', role: 'Jovem inventor de circuitos quânticos e sonhador incorrigível', avatar: '🔬' },
    { name: 'Zara', role: 'Engenheira de inteligência ecológica e piloto de drones solares', avatar: '🛰️' },
    { name: 'Oráculo Chronos', role: 'Entidade de luz holográfica que guarda as linhas temporais', avatar: '✨' }
  ],
  translations: {
    es: {
      title: 'El Portal de los Sueños y los Lentes del Mañana',
      subtitle: 'El acelerador de bolsillo, futuros ecológicos y las decisiones que moldean la Tierra',
      tagline: '¡Alinea prismas cuánticos, viaja por posibles futuros y elige el camino de la armonía planetaria!'
    },
    en: {
      title: 'The Dream Portal & the Lenses of Tomorrow',
      subtitle: 'Pocket quantum refractor, utopian ecological futures, and the ethical choices shaping Earth',
      tagline: 'Align quantum prisms, peer through future timelines, and make choices that regenerate the world!'
    },
    it: {
      title: 'Il Portale dei Sogni e le Lenti del Domani',
      subtitle: 'Il dispositivo quantistico, città solari del futuro e le scelte etiche per salvare la Terra',
      tagline: 'Attiva i prismi temporali, esplora futuri sostenibili e proteggi il destino del nostro pianeta!'
    }
  },
  scenes: {
    'cena-1-laboratorio-temporal': {
      id: 'cena-1-laboratorio-temporal',
      chapterNumber: 1,
      title: 'A Lente Holográfica de 2085',
      text: 'No laboratório suspenso no alto do observatório, Nico e Zara conectaram os cristais de silício óptico ao Cronolente. Um domo de luz azul cobalto cobriu a sala. No centro do portal, três feixes de luz mostravam diferentes futuros possíveis para a Terra, dependendo das escolhas de consumo, energia e preservação feitas hoje.',
      sceneryType: 'crystal-caves',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-prisma-cronico',
          name: 'Prisma Quântico Hexagonal',
          x: 48,
          y: 45,
          width: 22,
          height: 24,
          actionType: 'light-glow',
          label: 'Calibrar o Feixe de Luz Temporal',
          hint: 'Alinhar as linhas de tempo...',
          hasTriggered: false,
          sound: 'magic',
          icon: '💎',
          triggeredIcon: '🌀',
          eventResult: {
            narrativeNote: '🌀 As partículas subatômicas sincronizaram em 432 Hertz abrindo a janela para o século XXII!',
          }
        },
        {
          id: 'elem-drone-solar-zara',
          name: 'Drone de Fotossíntese Sintética',
          x: 25,
          y: 35,
          width: 20,
          height: 22,
          actionType: 'rocket-launch',
          label: 'Ativar Propulsão Magnética do Drone',
          hint: 'Voo sem emissão de carbono...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🛸',
          triggeredIcon: '☀️',
          eventResult: {
            narrativeNote: '☀️ O drone pairou emitindo oxigênio purificado e carregando baterias com luz ambiente!',
          }
        },
        {
          id: 'elem-relogio-areia-inversa',
          name: 'Ampulheta de Areia Gravitacional',
          x: 75,
          y: 55,
          width: 18,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Inverter a Gravidade da Areia',
          hint: 'Os grãos sobem em vez de descer...',
          hasTriggered: false,
          sound: 'water',
          icon: '⏳',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ "O futuro não está gravado em pedra; ele é desenhado a cada respiração e atitude do presente!"',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-futuro-solarpunk',
          text: 'Entrar na Linha Temporal da Metrópole Solar e Jardins Verticais',
          description: 'Descobrir cidades onde edifícios produzem comida e energia limpa para todos.',
          icon: '🏙️',
          targetSceneId: 'cena-2-futuro-solarpunk'
        },
        {
          id: 'escolha-futuro-oceanico',
          text: 'Mergulhar na Cidade de Coral Flutuante dos Oceanos Regenerados',
          description: 'Explorar estações marinhas onde a poluição plástica foi transformada em recifes vivos.',
          icon: '🌊',
          targetSceneId: 'cena-2-futuro-oceanico'
        }
      ],
      characterDialogue: {
        speaker: 'Oráculo Chronos',
        avatar: '✨',
        text: 'Bem-vindos, viajantes do tempo! Lembrem-se: a maior tecnologia humana não é a máquina, mas a capacidade de sentir empatia!'
      }
    },
    'cena-2-futuro-solarpunk': {
      id: 'cena-2-futuro-solarpunk',
      chapterNumber: 2,
      title: 'A Cidade Onde os Prédios Respiram',
      text: 'Ao atravessarem o portal, Nico e Zara pisaram em calçadas feitas de biomateriais flexíveis que geravam eletricidade a cada passo. Torres envidraçadas eram cobertas por florestas verticais que acolhiam pássaros nativos. O silêncio dos trens de levitação magnética dava lugar ao canto alegre das aves.',
      sceneryType: 'sky-islands',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-painel-biossolar',
          name: 'Painel de Energia Algal',
          x: 45,
          y: 50,
          width: 22,
          height: 24,
          actionType: 'flower-bloom',
          label: 'Tocar a Parede de Microalgas',
          hint: 'Gera oxigênio e luz...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🟢',
          triggeredIcon: '💡',
          eventResult: {
            narrativeNote: '💡 As microalgas absorvem dióxido de carbono três vezes mais rápido do que árvores maduras!',
          }
        },
        {
          id: 'elem-trem-levitacao',
          name: 'Maglev Solar Silencioso',
          x: 75,
          y: 40,
          width: 20,
          height: 20,
          actionType: 'ball-kick',
          label: 'Ver a Passagem do Trem Flutuante',
          hint: '400 km/h sem atrito...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🚅',
          triggeredIcon: '⚡',
          eventResult: {
            narrativeNote: '⚡ Transporte coletivo gratuito, seguro e movido 100% a hidrogênio verde!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-selar-pacto-futuro',
          text: 'Voltar ao Presente com os Projetos de Engenharia Sustentável',
          description: 'Começar hoje mesmo a aplicar as tecnologias na feira de ciências da escola.',
          icon: '📜',
          targetSceneId: 'cena-final-portais'
        }
      ],
      characterDialogue: {
        speaker: 'Zara',
        avatar: '🛰️',
        text: 'Olha este ar puro! Este futuro não é um sonho distante: nós temos a ciência e os meios para construí-lo agora!'
      }
    },
    'cena-2-futuro-oceanico': {
      id: 'cena-2-futuro-oceanico',
      chapterNumber: 2,
      title: 'Os Santuários Aquáticos de 2100',
      text: 'O portal abriu sobre uma plataforma marinha translúcida no meio do Atlântico Sul. Centenas de baleias e cardumes cintilantes nadavam pacificamente ao redor de florestas de algas gigantes cultivadas para absorver o calor excessivo dos mares.',
      sceneryType: 'starlit-river',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-biorrecife-coral',
          name: 'Coral de Carbonato Regenerado',
          x: 48,
          y: 55,
          width: 22,
          height: 24,
          actionType: 'river-flow',
          label: 'Alimentar os Corais com Minerais',
          hint: 'Reconstrução de recifes...',
          hasTriggered: false,
          sound: 'water',
          icon: '🪸',
          triggeredIcon: '🐠',
          eventResult: {
            narrativeNote: '🐠 Cardumes multicoloridos voltaram a desovar onde antes havia apenas água vazia!',
          }
        },
        {
          id: 'elem-escafandro-luz',
          name: 'Lente de Observação Subaquática',
          x: 25,
          y: 45,
          width: 20,
          height: 20,
          actionType: 'light-glow',
          label: 'Iluminar o Vale dos Golfinhos',
          hint: 'Comunicação por cliques...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🐬',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Três golfinhos-rotadores passaram em acrobacia sincronizada com o pôr do sol!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-selar-pacto-futuro-2',
          text: 'Retornar ao Nosso Tempo para Criar o Clube de Preservação Oceânica',
          description: 'Inspirar milhares de jovens a proteger as praias e banir plásticos descartáveis.',
          icon: '🌊',
          targetSceneId: 'cena-final-portais'
        }
      ],
      characterDialogue: {
        speaker: 'Nico',
        avatar: '🔬',
        text: 'Nós vimos o amanhã com nossos próprios olhos. Agora temos o dever e a honra de transformar esse amanhã em realidade!'
      }
    },
    'cena-final-portais': {
      id: 'cena-final-portais',
      chapterNumber: 3,
      title: 'Os Arquitetos do Amanhã',
      text: 'De volta ao laboratório de hoje, o domo temporal se recolheu suavemente no prisma de quartzo. Nico e Zara guardaram os cadernos de anotações cheios de esquemas de bioenergia, plantio comunitário e filtros oceânicos. O futuro não é algo que esperamos sentados; o futuro é algo que construímos com cada escolha de hoje.',
      sceneryType: 'sky-islands',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-medalha-arquiteto-tempo',
          name: 'Comenda Suprema dos Arquitetos do Futuro',
          x: 48,
          y: 50,
          width: 24,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Receber a Chave do Amanhã',
          hint: 'Toque para consagrar...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🌌',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Conquista Suprema: Arquitetos do Futuro Planetário! O poder de transformar o mundo está nas suas mãos hoje e sempre!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-portais',
          text: 'Reativar o Cronolente para explorar outros horizontes!',
          description: 'Recomece a jornada temporal para investigar novos caminhos e ideias transformadoras.',
          icon: '🔄',
          targetSceneId: 'cena-1-laboratorio-temporal'
        }
      ],
      characterDialogue: {
        speaker: 'Nico, Zara e Chronos',
        avatar: '🔬🛰️✨',
        text: 'Abrace a curiosidade, cuide do planeta e faça valer cada segundo: o futuro começa agora!'
      }
    }
  }
};
