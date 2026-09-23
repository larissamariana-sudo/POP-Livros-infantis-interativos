import { Book } from '../../types';

export const story36VanishingIsland: Book = {
  id: 'segredo-ilha-sem-mapa',
  title: 'O Segredo da Ilha que Não Aparece nos Mapas',
  subtitle: 'Névoa prateada sobre o oceano, uma ilha que se move à noite e a criatura mais sábia dos mares',
  coverImage: 'vanishing-island-cover',
  coverEmoji: '🏝️🐢',
  ageGroup: '7-10',
  themeCategory: 'mystery',
  themeColor: 'from-teal-900 via-teal-700 to-cyan-600',
  tagline: 'Navegue sob o luar, decifre as correntes marítimas e descubra por que a ilha misteriosa muda de lugar!',
  totalChapters: 3,
  initialSceneId: 'cena-1-nevoa-maritima',
  characters: [
    { name: 'Maya', role: 'Jovem timoneira e mergulhadora com luneta de latão', avatar: '🧭' },
    { name: 'Caio', role: 'Oceanógrafo mirim fascinado por mapas celestes e conchas raras', avatar: '🐚' },
    { name: 'Têmis', role: 'A Tartaruga Ancestral dos Mares que carrega uma floresta viva no casco', avatar: '🐢' }
  ],
  translations: {
    es: {
      title: 'El Secreto de la Isla que No Aparece en los Mapas',
      subtitle: 'Niebla plateada sobre el mar, una isla que se mueve de noche y el ser más sabio del océano',
      tagline: '¡Navega bajo la luna, sigue las corrientes marinas y descubre por qué la isla cambia de sitio!'
    },
    en: {
      title: 'The Secret of the Mapless Wandering Island',
      subtitle: 'Silver fog on the ocean, an island moving under moonlight, and the wisest creature of the deep',
      tagline: 'Sail beneath the stars, follow warm currents, and discover why this mysterious island travels!'
    },
    it: {
      title: 'Il Segreto dell\'Isola che Non Compare sulle Mappe',
      subtitle: 'Nebbia d\'argento sul mare, un\'isola che si sposta di notte e la creatura più saggia degli abissi',
      tagline: 'Naviga al chiaro di luna, segui le correnti e svela perché l\'isola misteriosa cambia rotta!'
    }
  },
  scenes: {
    'cena-1-nevoa-maritima': {
      id: 'cena-1-nevoa-maritima',
      chapterNumber: 1,
      title: 'O Encontro com a Névoa Fluorescente',
      text: 'O barco a vela de Maya e Caio balançava mansamente sob um céu cravejado de estrelas. Nenhum mapa náutico indicava terra firme naquelas coordenadas, mas uma névoa espessa com cheiro de jasmim e musgo úmido cercava a proa. De repente, a agulha da bússola começou a girar sem parar: uma sombra gigantesca com contornos de colinas verdejantes emergia da água!',
      sceneryType: 'coral-reef',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-bussola-cristal',
          name: 'Bússola Náutica com Rosa dos Ventos',
          x: 25,
          y: 72,
          width: 22,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Calibrar a Bússola no Horizonte',
          hint: 'A agulha aponta para uma corrente quente...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🧭',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: 'A agulha parou apontando para uma rocha coberta por cracas de coral luminescente!'
          }
        },
        {
          id: 'elem-luneta-maritima',
          name: 'Luneta Retrátil de Três Estágios',
          x: 52,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'secret-path',
          label: 'Mirar a Luneta na Silhueta da Ilha',
          hint: 'Olhe atentamente para as margens...',
          hasTriggered: false,
          sound: 'water',
          icon: '🔭',
          triggeredIcon: '🏝️',
          eventResult: {
            narrativeNote: 'A praia de areia branca da ilha parecia subir e descer devagar... como se estivesse respirando!'
          }
        },
        {
          id: 'elem-concha-musical',
          name: 'Concha Espiral Apanhada na Água',
          x: 78,
          y: 65,
          width: 20,
          height: 20,
          actionType: 'bell-ring',
          label: 'Escutar a Concha no Ouvido',
          hint: 'Murmura um som de baleia distante...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🐚',
          triggeredIcon: '🎵',
          eventResult: {
            narrativeNote: 'O som da concha era uma canção de ninar ancestral em harmonia com o bater das ondas!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-atracar-praia',
          text: 'Desembarcar suavemente na enseada de areia branca',
          description: 'Aproximar o bote e pisar nas margens da ilha misteriosa.',
          icon: '🛶',
          targetSceneId: 'cena-2-coracao-ilha'
        },
        {
          id: 'escolha-mergulhar-base',
          text: 'Colocar máscara de mergulho para espiar as profundezas',
          description: 'Ver o que sustenta essa ilha mágica debaixo d\'água.',
          icon: '🤿',
          targetSceneId: 'cena-2-coracao-ilha'
        }
      ]
    },
    'cena-2-coracao-ilha': {
      id: 'cena-2-coracao-ilha',
      chapterNumber: 2,
      title: 'O Enigma do Solo que Respira',
      text: 'Ao pisarem na ilha, Caio notou algo fascinante: o solo não era de terra comum, mas sim de escamas musgosas gigantescas entrelaçadas por samambaias e orquídeas azuis. A cada dois minutos, uma brisa tépida e perfumada soprava do solo com um som grave de "Huuuuum...". Maya tocou uma das palmeiras e sentiu uma vibração acolhedora pulsar pelo caule.',
      sceneryType: 'starlit-river',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-orquidea-azul',
          name: 'Orquídea Noturna Cintilante',
          x: 28,
          y: 52,
          width: 22,
          height: 24,
          actionType: 'flower-bloom',
          label: 'Acariciar as Pétalas da Orquídea',
          hint: 'Exala néctar prateado...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🌺',
          triggeredIcon: '🌸',
          eventResult: {
            narrativeNote: 'As flores acenderam em sequência, formando uma trilha luminosa até a ponta norte da ilha!'
          }
        },
        {
          id: 'elem-lago-coral',
          name: 'Pequeno Lago de Água Cristalina',
          x: 50,
          y: 60,
          width: 24,
          height: 22,
          actionType: 'wave-jump',
          label: 'Mergulhar as Mãos no Lago',
          hint: 'Peixinhos coloridos vêm cumprimentar...',
          hasTriggered: false,
          sound: 'water',
          icon: '🫧',
          triggeredIcon: '🐠',
          eventResult: {
            narrativeNote: 'Peixes-palhaço rodopiavam em volta dos dedos como se conhecessem os visitantes!'
          }
        },
        {
          id: 'elem-pedra-olho',
          name: 'Grande Rocha Oval Polida',
          x: 75,
          y: 45,
          width: 22,
          height: 24,
          actionType: 'secret-path',
          label: 'Limpar as Folhas sobre a Rocha',
          hint: 'Parece haver uma pálpebra esculpida...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🪨',
          triggeredIcon: '👁️',
          eventResult: {
            narrativeNote: 'A rocha piscou suavemente! Era o olho carinhoso de um ser vivo colossal!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-fazer-reverencia',
          text: 'Fazer uma saudação respeitosa à criatura colossal',
          description: 'Apresentar-se como amigos e protetores da natureza marinha.',
          icon: '👋',
          targetSceneId: 'cena-3-revelacao-temis'
        },
        {
          id: 'escolha-alimentar-algas',
          text: 'Oferecer um buquê de algas doces do recife',
          description: 'Um presente saboroso para a guardiã dos mares.',
          icon: '🌿',
          targetSceneId: 'cena-3-revelacao-temis'
        }
      ]
    },
    'cena-3-revelacao-temis': {
      id: 'cena-3-revelacao-temis',
      chapterNumber: 3,
      title: 'A Benção de Têmis, a Ilha Viva',
      text: 'Que revelação assombrosa e bela! A ilha não era um pedaço de terra estático: era Têmis, a tartaruga marinha mais antiga do planeta, cujo casco abriga um ecossistema inteiro de plantas raras e corais protegidos contra tempestades. Ela sobe à superfície nas noites calmas para receber o carinho da brisa e contemplar as constelações. Têmis presenteou Maya e Caio com uma pérola luminosa que guiará sempre seus barcos com segurança!',
      sceneryType: 'coral-reef',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-perola-luar',
          name: 'A Pérola Luminosa de Têmis',
          x: 50,
          y: 48,
          width: 25,
          height: 25,
          actionType: 'star-sparkle',
          label: 'Receber a Pérola dos Oceanos',
          hint: 'Brilha com o calor do coração marinho...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🔮',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: 'A pérola iluminou o mar em volta com um halo esmeralda que espantava qualquer perigo!'
          }
        },
        {
          id: 'elem-carinho-cabeca',
          name: 'Carinho Suave na Cabeça de Têmis',
          x: 25,
          y: 55,
          width: 22,
          height: 22,
          actionType: 'animal-pet',
          label: 'Acariciar o Queixo da Tartaruga Gigante',
          hint: 'Ela sorri feliz...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐢',
          triggeredIcon: '💚',
          eventResult: {
            narrativeNote: 'Têmis soltou uma borrifada de água pelo focinho, criando um lindo arco-íris lunar!'
          }
        },
        {
          id: 'elem-despedida-estrelas',
          name: 'Despedida Amigável ao Amanhecer',
          x: 75,
          y: 60,
          width: 22,
          height: 22,
          actionType: 'river-flow',
          label: 'Acenar do Barco enquanto Ela Submerge Mansamente',
          hint: 'Até a próxima lua cheia...',
          hasTriggered: false,
          sound: 'water',
          icon: '⛵',
          triggeredIcon: '🌊',
          eventResult: {
            narrativeNote: 'Maya e Caio guardaram o maior segredo do oceano com amor e gratidão eterna!'
          }
        }
      ],
      choices: []
    }
  }
};
