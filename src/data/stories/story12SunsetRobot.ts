import { Book } from '../../types';

export const story12SunsetRobot: Book = {
  id: 'pixel-robo-pintor',
  title: 'Pixel, o Robô Pintor de Auroras',
  subtitle: 'A jornada de um pequeno autômato que sonhava em misturar as cores do entardecer',
  coverImage: 'robot-cover',
  coverEmoji: '🤖',
  ageGroup: '7-10',
  themeColor: 'from-amber-500 via-rose-500 to-indigo-600',
  tagline: 'Misture tintas de luz solar, calibre pincéis magnéticos e pinte o céu com arco-íris!',
  totalChapters: 3,
  initialSceneId: 'cena-1-oficina-colina',
  characters: [
    { name: 'Pixel', role: 'Robô pintor com antena de pincel luminoso', avatar: '🤖' },
    { name: 'Libélula', role: 'Drone libélula que traz pigmentos de flores', avatar: '🦗' }
  ],
  scenes: {
    'cena-1-oficina-colina': {
      id: 'cena-1-oficina-colina',
      chapterNumber: 1,
      title: 'A Colina das Cores Esquecidas',
      text: 'No alto da Colina das Tulipas Mecânicas, o robôzinho Pixel admirava o horizonte onde o sol começava a descer. Seus olhos digitais piscavam em tons de azul e amarelo. Sua paleta de tintas ainda estava vazia, mas a natureza ao redor transbordava de tons incríveis.',
      sceneryType: 'autumn-park',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-pixel-robo',
          name: 'Pixel, o Pintor',
          x: 48,
          y: 55,
          width: 22,
          height: 25,
          actionType: 'creature-jump',
          label: 'Ligar o Modo Artista de Pixel',
          hint: 'Toque no robôzinho...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🤖',
          triggeredIcon: '🎨',
          eventResult: {
            narrativeNote: '🎨 Bip-blip! A antena de Pixel acendeu uma luz dourada e começou a girar como um pincel!',
          }
        },
        {
          id: 'elem-tulipa-solar',
          name: 'Tulipa Coletora de Fótons',
          x: 20,
          y: 60,
          width: 20,
          height: 22,
          actionType: 'flower-bloom',
          label: 'Coletar Tinta Amarelo-Sol',
          hint: 'Toque na flor amarela brilhante...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🌻',
          triggeredIcon: '💛',
          eventResult: {
            narrativeNote: '💛 Um jato de tinta dourada e luminosa encheu o primeiro potinho da paleta!',
          }
        },
        {
          id: 'elem-libelula-drone',
          name: 'Drone Libélula',
          x: 75,
          y: 35,
          width: 18,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Acionar a Libélula',
          hint: 'Toque no drone veloz...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🦗',
          triggeredIcon: '🌈',
          eventResult: {
            narrativeNote: '🌈 A libélula voou em zigue-zague soltando purpurina cintilante pelos ares!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-mistura-aurora',
          text: 'Subir na Torre do Prisma para capturar o Rosa Magenta',
          description: 'Usar lentes de cristal para decompor a última luz do crepúsculo.',
          icon: '🗼',
          targetSceneId: 'cena-2-torre-prisma'
        },
        {
          id: 'escolha-lago-pigmentos',
          text: 'Ir à Margem do Lago das Águas Espelhadas',
          description: 'Coletar os reflexos azul-marinho e violeta das primeiras estrelas.',
          icon: '🌊',
          targetSceneId: 'cena-2-lago-pigmentos'
        }
      ],
      characterDialogue: {
        speaker: 'Pixel',
        avatar: '🤖',
        text: 'Bip! Minha memória de circuitos nunca viu cores tão vivas! Vamos pintar uma obra-prima!'
      }
    },
    'cena-2-torre-prisma': {
      id: 'cena-2-torre-prisma',
      chapterNumber: 2,
      title: 'A Dança das Lentes e dos Fótons',
      text: 'Na plataforma mais alta da torre, três grandes espelhos giratórios concentravam o calor do entardecer. As nuvens viravam tons de pêssego, morango e lavanda conforme Pixel ajustava os seletores.',
      sceneryType: 'sky-islands',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-seletor-cor',
          name: 'Seletor de Matizes',
          x: 35,
          y: 45,
          width: 22,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Misturar Magenta e Laranja',
          hint: 'Gire o botão giratório...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🎛️',
          triggeredIcon: '🧡',
          eventResult: {
            narrativeNote: '🧡 Uau! Um gradiente espetacular de fogo suave se espalhou pelo céu!',
          }
        },
        {
          id: 'elem-tela-vapor',
          name: 'Tela de Vapor Celestre',
          x: 70,
          y: 40,
          width: 24,
          height: 24,
          actionType: 'fruit-fall',
          label: 'Pintar na Nuvem',
          hint: 'Dê a primeira pincelada no céu...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🖌️',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ A pincelada desenhou uma asa luminosa que protegeu o vale da escuridão!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-ceu-noturno-final',
          text: 'Finalizar a Pintura da Aurora Boreal Noturna',
          description: 'Assinar a tela celeste com o brilho da estrela guia.',
          icon: '🌌',
          targetSceneId: 'cena-final-robo'
        }
      ],
      characterDialogue: {
        speaker: 'Pixel',
        avatar: '🤖',
        text: 'Circuito de criatividade a 100%! O céu inteiro virou nossa galeria de arte!'
      }
    },
    'cena-2-lago-pigmentos': {
      id: 'cena-2-lago-pigmentos',
      chapterNumber: 2,
      title: 'O Mergulho no Azul Anil',
      text: 'O lago refletia a transição da tarde para a noite. Conchas mecânicas abriam-se na beira da areia oferencendo gotas puras de índigo e turquesa.',
      sceneryType: 'starlit-river',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-concha-azul',
          name: 'Concha de Pigmento Safira',
          x: 30,
          y: 60,
          width: 22,
          height: 22,
          actionType: 'chest-open',
          label: 'Abrir Concha de Safira',
          hint: 'Toque para recolher a tinta pura...',
          hasTriggered: false,
          sound: 'water',
          icon: '🐚',
          triggeredIcon: '💙',
          eventResult: {
            narrativeNote: '💙 Uma gota intensa de azul profundo foi adicionada à paleta de Pixel!',
          }
        },
        {
          id: 'elem-peixe-luz',
          name: 'Peixinho de Neon',
          x: 72,
          y: 50,
          width: 20,
          height: 20,
          actionType: 'creature-jump',
          label: 'Pular com o Peixe',
          hint: 'Toque na ondinha luminosa...',
          hasTriggered: false,
          sound: 'water',
          icon: '🐟',
          triggeredIcon: '💫',
          eventResult: {
            narrativeNote: '💫 O peixe saltou desenhando um arco azul cintilante acima da água!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-ceu-noturno-final-2',
          text: 'Pintar o Manto de Constelações Sobre a Cidade',
          description: 'Cobrir a terra com um manto de cores suaves e tranquilas para a hora de dormir.',
          icon: '⭐',
          targetSceneId: 'cena-final-robo'
        }
      ],
      characterDialogue: {
        speaker: 'Libélula',
        avatar: '🦗',
        text: 'Zuum-zuum! Cada gota capturada trouxe paz e encanto para a noite que chega!'
      }
    },
    'cena-final-robo': {
      id: 'cena-final-robo',
      chapterNumber: 3,
      title: 'A Mais Bela Noite Pintada',
      text: 'O pôr do sol pintado por você e Pixel ficou gravado na memória do vale. Todas as luzes das casas acenderam-se sob o céu colorido e Pixel agora sorri com um coração desenhado em sua telinha!',
      sceneryType: 'starlit-river',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-artista',
          name: 'Paleta Dourada de Criatividade',
          x: 45,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Receber a Paleta de Ouro',
          hint: 'Toque para receber seu troféu artístico!',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🎨',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Parabéns! Você foi coroado(a) Grande Artista das Cores do Universo!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-robo',
          text: 'Pintar um novo horizonte colorido!',
          description: 'Recomece a viagem artística escolhendo novas paletas e caminhos.',
          icon: '🔄',
          targetSceneId: 'cena-1-oficina-colina'
        }
      ],
      characterDialogue: {
        speaker: 'Pixel e Libélula',
        avatar: '🤖',
        text: 'Bip de agradecimento! A verdadeira arte é aquela que faz o mundo sorrir junto!'
      }
    }
  }
};
