import { Book } from '../../types';

export const story35NightTrainWhistle: Book = {
  id: 'sumico-apito-ouro-trem',
  title: 'O Sumiço do Apito de Ouro do Trem Noturno',
  subtitle: 'A locomotiva a vapor não pode partir: pistas de carvão cintilante e o mistério nos vagões',
  coverImage: 'train-whistle-cover',
  coverEmoji: '🚂🏅',
  ageGroup: '7-10',
  themeCategory: 'mystery',
  themeColor: 'from-slate-800 via-indigo-800 to-amber-600',
  tagline: 'Siga a fumaça de lavanda, entreviste os passageiros e encontre o apito que faz os trilhos brilharem!',
  totalChapters: 3,
  initialSceneId: 'cena-1-plataforma-estacao',
  characters: [
    { name: 'Bernardo', role: 'Jovem investigador da linha férrea com prancheta de fiscal', avatar: '🕵️‍♂️' },
    { name: 'Clara', role: 'Especialista em enigmas sonoros e alavancas mecânicas', avatar: '🎧' },
    { name: 'Maquinista Teodoro', role: 'Condutor veterano que guia o trem através da névoa das montanhas', avatar: '🧢' }
  ],
  translations: {
    es: {
      title: 'La Desaparición del Silbato de Oro del Tren Nocturno',
      subtitle: 'La locomotora no puede partir: huellas de carbón brillante y un enigma en los vagones',
      tagline: '¡Sigue el humo perfumado, examina los vagones y halla el silbato de los rieles brillantes!'
    },
    en: {
      title: 'The Missing Golden Whistle of the Night Express',
      subtitle: 'The steam engine cannot depart: glittering soot tracks and clues in the parlor car',
      tagline: 'Follow lavender smoke trails, interview the crew, and retrieve the legendary steam whistle!'
    },
    it: {
      title: 'La Scomparsa del Fischietto d\'Oro del Treno Notturno',
      subtitle: 'La locomotiva non può partire: tracce di carbone brillante e un mistero tra i vagoni',
      tagline: 'Segui il fumo profumato, ispeziona i vagoni e ritrova il fischietto dei binari di cristallo!'
    }
  },
  scenes: {
    'cena-1-plataforma-estacao': {
      id: 'cena-1-plataforma-estacao',
      chapterNumber: 1,
      title: 'Alerta Vermelho na Estação da Neblina',
      text: 'Faltavam apenas 10 minutos para a meia-noite e a estação da Neblina estava cheia de lanternas acesas. O Maquinista Teodoro estava aflito: "Sem o Apito de Ouro, a locomotiva não consegue acionar a ponte de luz sobre o abismo das cachoeiras!" Bernardo e Clara examinaram a cabine do maquinista e encontraram pequenos grãos de carvão que reluziam como pedras de açúcar azul.',
      sceneryType: 'shadow-castle',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-painel-locomotiva',
          name: 'Painel com Medidores de Vapor de Bronze',
          x: 48,
          y: 45,
          width: 24,
          height: 24,
          actionType: 'bell-ring',
          label: 'Acionar a Válvula de Pressão',
          hint: 'Tssss... vapor aromatizado!',
          hasTriggered: false,
          sound: 'pop',
          icon: '🎛️',
          triggeredIcon: '💨',
          eventResult: {
            narrativeNote: 'O vapor revelou uma marquinha de patinha minúscula impressa no vidro do velocímetro!'
          }
        },
        {
          id: 'elem-trilha-carvao-azul',
          name: 'Pó de Carvão Azul no Assoalho',
          x: 25,
          y: 70,
          width: 22,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Examinar o Rastro com Lente de Aumento',
          hint: 'Leva em direção ao vagão de cargas...',
          hasTriggered: false,
          sound: 'magic',
          icon: '✨',
          triggeredIcon: '🐾',
          eventResult: {
            narrativeNote: 'Bernardo mediu as pegadas: eram redondinhas com garrinhas de borracha macia!'
          }
        },
        {
          id: 'elem-lanterna-ferroviaria',
          name: 'Lanterna Querosene de Bronze',
          x: 75,
          y: 50,
          width: 20,
          height: 22,
          actionType: 'light-glow',
          label: 'Girar a Lente para Luz Violeta',
          hint: 'Revela marcas invisíveis a olho nu...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🏮',
          triggeredIcon: '🔦',
          eventResult: {
            narrativeNote: 'A luz ultravioleta mostrou respingos de geleia de amora pingando até a porta do vagão restaurante!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-entrar-restaurante',
          text: 'Seguir os respingos de geleia até o Vagão Restaurante',
          description: 'Talvez quem pegou o apito estivesse fazendo um lanchinho noturno.',
          icon: '🍽️',
          targetSceneId: 'cena-2-vagao-restaurante'
        },
        {
          id: 'escolha-ir-carvao',
          text: 'Investigar o vagão de carvão e carga pesada',
          description: 'A fuligem azulada aponta para os sacos de carvão ecológico.',
          icon: '🚂',
          targetSceneId: 'cena-2-vagao-restaurante'
        }
      ]
    },
    'cena-2-vagao-restaurante': {
      id: 'cena-2-vagao-restaurante',
      chapterNumber: 2,
      title: 'O Enigma da Mesa Vazia e a Melodia Misteriosa',
      text: 'No elegante vagão restaurante com mesas atoalhadas de veludo bordô, um som abafado de "fuiiit... fuiiit..." ecoava perto do bufê de doces. Um pote de geleia de amora estava com a tampa aberta e uma colher de prata repousava misteriosamente equilibrada no bico de um bule!',
      sceneryType: 'grandparents-house',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-bule-prata',
          name: 'Bule de Chá Fumegante',
          x: 52,
          y: 48,
          width: 20,
          height: 22,
          actionType: 'water-drink',
          label: 'Destampar o Bule de Chá de Ervas',
          hint: 'Solta uma nota musical no ar...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🫖',
          triggeredIcon: '🎶',
          eventResult: {
            narrativeNote: 'Do bico do bule saiu uma bolha de sabão contendo uma fita de seda vermelha amarrada em nó duplo!'
          }
        },
        {
          id: 'elem-pote-geleia',
          name: 'Pote de Geleia com Marcas de Dedos',
          x: 28,
          y: 56,
          width: 20,
          height: 20,
          actionType: 'cookie-bite',
          label: 'Examinar o Pote Lambuzado',
          hint: 'Alguém comeu com muita pressa...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🍓',
          triggeredIcon: '🍯',
          eventResult: {
            narrativeNote: 'Havia fios de pelos cinzentos e listrados grudados no vidro! "Pelo de guaxinim!", exclamou Clara.'
          }
        },
        {
          id: 'elem-cortina-veludo',
          name: 'Cortina de Veludo que se Mexe Sozinha',
          x: 78,
          y: 42,
          width: 22,
          height: 26,
          actionType: 'secret-path',
          label: 'Afastar o Tecido da Cortina',
          hint: 'Algo respira suavemente atrás dela...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🎭',
          triggeredIcon: '👀',
          eventResult: {
            narrativeNote: 'Um barulho de "Snore... zzz... fiiiu!" veio de uma caixinha de madeira forrada com palha de trigo!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-abrir-caixinha-palha',
          text: 'Abrir devagarinho a caixinha acolchoada',
          description: 'Aproximar-se com cuidado para não acordar o passageiro clandestino.',
          icon: '📦',
          targetSceneId: 'cena-3-o-pequeno-maquinista'
        },
        {
          id: 'escolha-chamar-teodoro',
          text: 'Chamar o Maquinista Teodoro com um biscoitinho de mel',
          description: 'A guloseima atrai qualquer animalzinho faminto com segurança.',
          icon: '🍪',
          targetSceneId: 'cena-3-o-pequeno-maquinista'
        }
      ]
    },
    'cena-3-o-pequeno-maquinista': {
      id: 'cena-3-o-pequeno-maquinista',
      chapterNumber: 3,
      title: 'O Guaxinim Sonhador e a Viagem Sob as Estrelas',
      text: 'Que revelação emocionante e fofa! Dentro da cesta, enroladinho como uma bolinha de pelos, dormia o Pipoca, um filhote de guaxinim órfão que havia adotado o Apito de Ouro como sua chupeta de ninar favorita. Ele não queria roubar nada; só queria sentir o cheirinho de canela do latão polido. Teodoro sorriu comovido, deu a Pipoca uma chupeta de borracha macia e o nomeou o Mascote Oficial do Expresso Noturno!',
      sceneryType: 'cosmic-train',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-apito-ouro-polido',
          name: 'O Lendário Apito de Ouro',
          x: 50,
          y: 48,
          width: 24,
          height: 24,
          actionType: 'bell-ring',
          label: 'Soprar o Apito na Cabine',
          hint: 'Toca a nota que acende a serra!',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🏅',
          triggeredIcon: '🎺',
          eventResult: {
            narrativeNote: 'FOMMM-FOOOOM! Os trilhos nas montanhas brilharam num lindo azul turquesa refletido nas nuvens!'
          }
        },
        {
          id: 'elem-pipoca-chupeta',
          name: 'Filhote Pipoca com seu Novo Bonezinho',
          x: 25,
          y: 55,
          width: 22,
          height: 22,
          actionType: 'animal-pet',
          label: 'Fazer Cócegas na Barriguinha do Pipoca',
          hint: 'Ele boceja e dá um abraço...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🦝',
          triggeredIcon: '💖',
          eventResult: {
            narrativeNote: 'Pipoca estalou a linguinha e se aninhou no colo de Clara com um ronrom sonolento!'
          }
        },
        {
          id: 'elem-ponte-cristal-trilhos',
          name: 'Partida Triunfal do Trem Express',
          x: 75,
          y: 52,
          width: 24,
          height: 24,
          actionType: 'rocket-launch',
          label: 'Puxar a Alavanca de Partida do Trem',
          hint: 'Todos a bordo rumo ao horizonte!',
          hasTriggered: false,
          sound: 'magic',
          icon: '🚂',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: 'O trem partiu no horário exato, cruzando a noite cheia de estrelas e alegria!'
          }
        }
      ],
      choices: []
    }
  }
};
