import { Book } from '../../types';

export const story25WeatherClouds: Book = {
  id: 'clara-danca-nuvens-estacoes',
  title: 'Clara e a Dança das Nuvens e das Estações',
  subtitle: 'A viagem no balão meteorológico para desvendar como o vento, a chuva e o sol mantêm a Terra viva',
  coverImage: 'weather-clouds-cover',
  coverEmoji: '🌦️🌈',
  ageGroup: '7-10',
  themeCategory: 'nature',
  themeColor: 'from-sky-400 via-blue-500 to-indigo-600',
  tagline: 'Observe nuvens cúmulos e estratos, entenda o ciclo da água, brinque com o vento e pinte o arco-íris!',
  totalChapters: 3,
  initialSceneId: 'cena-1-observatorio-tempo',
  characters: [
    { name: 'Clara', role: 'Jovem cientista do clima com barômetro e termômetro', avatar: '👧' },
    { name: 'Vento Zéfiro', role: 'Espírito bondoso do ar fresco que sopra as nuvens de chuva', avatar: '💨' },
    { name: 'Dr. Trovão', role: 'Meteorologista sábio de capa impermeável amarela', avatar: '👨‍🔬' }
  ],
  translations: {
    es: {
      title: 'Clara y la Danza de las Nubes y las Estaciones',
      subtitle: 'Un viaje en globo para entender cómo el viento, la lluvia y el sol alimentan al planeta',
      tagline: '¡Descubre el ciclo del agua, clasifica tipos de nubes y dibuja el arcoíris en el cielo!'
    },
    en: {
      title: 'Clara & the Dance of Clouds and Seasons',
      subtitle: 'A hot-air balloon voyage unraveling how wind, rain, and sunshine keep our Earth thriving',
      tagline: 'Explore cumulus and stratus clouds, discover the water cycle, and paint a glorious rainbow!'
    },
    it: {
      title: 'Clara e la Danza delle Nuvole e delle Stagioni',
      subtitle: 'Un viaggio in mongolfiera per capire come il vento, la pioggia e il sole nutrono la Terra',
      tagline: 'Scopri il ciclo dell\'acqua, impara i segreti del meteo e fai splendere l\'arcobaleno!'
    }
  },
  scenes: {
    'cena-1-observatorio-tempo': {
      id: 'cena-1-observatorio-tempo',
      chapterNumber: 1,
      title: 'O Balão Meteorológico e o Vento Norte',
      text: 'No alto da Colina das Pipas, a cesta do balão meteorológico estava pronta para a decolagem. Clara ajustou o barômetro de mercúrio e olhou para o céu: nuvens macias em formato de carneirinhos viajavam velozes, anunciando uma frente fria benéfica para a agricultura.',
      sceneryType: 'sky-islands',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-biruta-vento',
          name: 'Biruta de Pano Listrada',
          x: 25,
          y: 35,
          width: 20,
          height: 22,
          actionType: 'river-flow',
          label: 'Ver a Direção do Vento',
          hint: 'Para onde sopra o ar?...',
          hasTriggered: false,
          sound: 'water',
          icon: '💨',
          triggeredIcon: '🧭',
          eventResult: {
            narrativeNote: '🧭 Vento Nordeste a 15 km/h! Condições perfeitas para subir entre as camadas de ar da atmosfera!',
          }
        },
        {
          id: 'elem-nuvem-cumulo',
          name: 'Nuvem Cúmulo de Algodão',
          x: 60,
          y: 25,
          width: 24,
          height: 22,
          actionType: 'creature-jump',
          label: 'Tocar a Nuvem de Chuva',
          hint: 'Vapor d\'água condensado...',
          hasTriggered: false,
          sound: 'magic',
          icon: '☁️',
          triggeredIcon: '💧',
          eventResult: {
            narrativeNote: '💧 As gotículas microscópicas de água colidem dentro da nuvem até ficarem pesadas e formarem a chuva que irriga as plantações!',
          }
        },
        {
          id: 'elem-queimador-balao',
          name: 'Queimador de Ar Quente',
          x: 48,
          y: 50,
          width: 20,
          height: 22,
          actionType: 'dragon-fire',
          label: 'Acionar o Ar Quente do Balão',
          hint: 'Ar quente sobe!...',
          hasTriggered: false,
          sound: 'fire',
          icon: '🔥',
          triggeredIcon: '🎈',
          eventResult: {
            narrativeNote: '🎈 Fuuuush! O ar dentro do balão aqueceu e a cesta flutuou suavemente rumo às nuvens douradas!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-entrar-cumulonimbus',
          text: 'Sobrevoar a Nuvem Cinzenta para Ver a Chuva Cair sobre a Floresta',
          description: 'Aprender como a chuva limpa o ar das cidades e enche os reservatórios de água.',
          icon: '🌧️',
          targetSceneId: 'cena-2-chuva-floresta'
        },
        {
          id: 'escolha-faixa-arco-iris',
          text: 'Buscar o Ponto Exato Onde o Sol Atravessa as Gotículas',
          description: 'Descobrir a refração da luz que cria as sete cores mágicas do arco-íris.',
          icon: '🌈',
          targetSceneId: 'cena-2-refletor-arco-iris'
        }
      ],
      characterDialogue: {
        speaker: 'Dr. Trovão',
        avatar: '👨‍🔬',
        text: 'O clima não é nosso inimigo, Clara! A chuva é a fonte de toda a comida que brota da terra!'
      }
    },
    'cena-2-chuva-floresta': {
      id: 'cena-2-chuva-floresta',
      chapterNumber: 2,
      title: 'O Ciclo Eterno da Gota d\'Água',
      text: 'Lá embaixo, a chuva caía em cortinas refrescantes sobre as copas das árvores. Clara observou como a água penetrava o solo, alimentava os lençóis freáticos e depois evaporava com o calor do sol para recomeçar o ciclo eterno.',
      sceneryType: 'starlit-river',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-raio-distante',
          name: 'Clarão de Trovão Seguro',
          x: 35,
          y: 30,
          width: 20,
          height: 22,
          actionType: 'light-glow',
          label: 'Cronometrar o Trovão',
          hint: 'A luz chega antes do som...',
          hasTriggered: false,
          sound: 'bell',
          icon: '⚡',
          triggeredIcon: '⏱️',
          eventResult: {
            narrativeNote: '⏱️ Cinco segundos entre o raio e o trovão significam que a tempestade está a 1,7 km de distância!',
          }
        },
        {
          id: 'elem-cheiro-terra-molhada',
          name: 'Petricor (Cheirinho de Terra)',
          x: 65,
          y: 55,
          width: 22,
          height: 22,
          actionType: 'flower-bloom',
          label: 'Sentir o Aroma de Petricor',
          hint: 'O perfume da chuva na terra...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🌱',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '❤️ As plantas liberam óleos aromáticos que perfumam a atmosfera com paz e frescor!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-abrir-sol-final',
          text: 'Esperar as Nuvens se Abrirem para Pintar o Arco-Íris Completo',
          description: 'A celebração do sol reaparecendo após a tempestade benfeitora.',
          icon: '☀️',
          targetSceneId: 'cena-final-clima'
        }
      ],
      characterDialogue: {
        speaker: 'Vento Zéfiro',
        avatar: '💨',
        text: 'Eu levo as nuvens para onde a terra está com sede! O equilíbrio do planeta depende do respeito à natureza!'
      }
    },
    'cena-2-refletor-arco-iris': {
      id: 'cena-2-refletor-arco-iris',
      chapterNumber: 2,
      title: 'A Fábrica das Sete Cores da Luz',
      text: 'O balão atravessou uma névoa fina no momento em que o sol despontava por trás de uma colina. Como milhões de microprismas, cada gotícula desdobrou a luz branca em faixas de vermelho, laranja, amarelo, verde, azul, anil e violeta.',
      sceneryType: 'sky-islands',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-arco-prisma',
          name: 'Arco de Luz Dourada',
          x: 50,
          y: 35,
          width: 25,
          height: 25,
          actionType: 'star-sparkle',
          label: 'Tocar a Faixa Violeta',
          hint: 'As sete cores do espectro...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🌈',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Do vermelho mais quente ao violeta mais sutil: a física da luz pintando o quadro mais lindo do mundo!',
          }
        },
        {
          id: 'elem-temperatura-sol',
          name: 'Termômetro Digital Solar',
          x: 25,
          y: 50,
          width: 18,
          height: 20,
          actionType: 'bell-ring',
          label: 'Medir a Temperatura Agradável',
          hint: '23 graus centígrados...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🌡️',
          triggeredIcon: '☀️',
          eventResult: {
            narrativeNote: '☀️ Temperatura perfeita de primavera! As flores começam a se abrir nos vales lá embaixo!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-abrir-sol-final-2',
          text: 'Pousar o Balão no Meio do Prado Florido',
          description: 'Anotar os dados climáticos no caderno de campo para ajudar os agricultores locais.',
          icon: '📝',
          targetSceneId: 'cena-final-clima'
        }
      ],
      characterDialogue: {
        speaker: 'Clara',
        avatar: '👧',
        text: 'A ciência do clima é poesia em movimento! Quando entendemos a chuva, aprendemos a amar todas as estações!'
      }
    },
    'cena-final-clima': {
      id: 'cena-final-clima',
      chapterNumber: 3,
      title: 'A harmonia das Quatro Estações',
      text: 'Com o balão em segurança na relva perfumada, Clara olhou para o horizonte onde o sol poente dourava as gotas nas folhas verdes. Ela sabia que cada estação — a primavera das flores, o verão do sol, o outono dos frutos e o inverno do descanso — tem seu papel vital na dança da vida.',
      sceneryType: 'autumn-park',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-medalha-climatologa',
          name: 'Medalha de Protetora do Clima',
          x: 48,
          y: 50,
          width: 24,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Receber a Medalha do Planeta Terra',
          hint: 'Toque para consagrar...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🌍',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Parabéns Jovem Cientista! Você compreendeu como a atmosfera, o vento e as chuvas garantem o futuro do nosso planeta!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-clima',
          text: 'Subir no balão meteorológico novamente!',
          description: 'Recomece para investigar novos ventos e fenômenos atmosféricos.',
          icon: '🔄',
          targetSceneId: 'cena-1-observatorio-tempo'
        }
      ],
      characterDialogue: {
        speaker: 'Dr. Trovão e Clara',
        avatar: '👨‍🔬👧',
        text: 'Cuidar do clima é cuidar de nós mesmos! Que a chuva e o sol continuem dançando em paz!'
      }
    }
  }
};
