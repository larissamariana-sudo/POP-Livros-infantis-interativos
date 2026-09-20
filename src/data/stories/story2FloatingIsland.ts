import { Book } from '../../types';

export const story2FloatingIsland: Book = {
  id: 'ilha-engrenagens-flutuantes',
  title: 'O Segredo da Ilha Flutuante',
  subtitle: 'Uma jornada misteriosa de autômatos, balões e runas antigas',
  coverImage: 'sky-cover',
  coverEmoji: '🦅',
  ageGroup: '7-10',
  themeColor: 'from-sky-500 via-indigo-600 to-purple-700',
  tagline: 'Gire engrenagens, ative autômatos voadores e decifre enigmas celestes!',
  totalChapters: 3,
  initialSceneId: 'cena-1-ilha-ceu',
  characters: [
    { name: 'Gizmo', role: 'Robô-pássaro movido a vapor', avatar: '🦅' },
    { name: 'Theo', role: 'Jovem inventor e explorador', avatar: '👦' }
  ],
  scenes: {
    'cena-1-ilha-ceu': {
      id: 'cena-1-ilha-ceu',
      chapterNumber: 1,
      title: 'O Farol das Nuvens',
      text: 'No alto de uma ilha de pedra que levita acima do oceano, engrenagens gigantes de bronze giravam em silêncio. Um misterioso farol estava apagado e o pássaro mecânico Gizmo parecia sem energia no seu poleiro.',
      sceneryType: 'sky-islands',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-gizmo-pau',
          name: 'Gizmo, o Pássaro Robô',
          x: 65,
          y: 35,
          width: 22,
          height: 25,
          actionType: 'creature-jump',
          label: 'Dar Corda em Gizmo',
          hint: 'Gire a chave dourada nas costas do pássaro...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🦅',
          triggeredIcon: '⚡',
          eventResult: {
            narrativeNote: '⚙️ Clac-clac! As engrenagens de Gizmo giraram velozes e seus olhinhos de safira acenderam!',
          }
        },
        {
          id: 'elem-engrenagem',
          name: 'Engrenagem Gigante',
          x: 25,
          y: 55,
          width: 24,
          height: 26,
          actionType: 'star-sparkle',
          label: 'Girar Engrenagem',
          hint: 'Toque para alinhar as peças mecânicas...',
          hasTriggered: false,
          sound: 'creature',
          icon: '⚙️',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '⚡ As engrenagens se conectaram com perfeição e acionaram um elevador de vento!',
          }
        },
        {
          id: 'elem-farol-luz',
          name: 'Lâmpada de Plasma',
          x: 80,
          y: 18,
          width: 16,
          height: 20,
          actionType: 'light-glow',
          label: 'Acender Farol',
          hint: 'Toque no cristal de energia do farol...',
          hasTriggered: false,
          sound: 'fire',
          icon: '💡',
          triggeredIcon: '🏮',
          eventResult: {
            narrativeNote: '💡 Uma luz azul cortou o nevoeiro revelando uma ponte suspensa!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-dirigivel',
          text: 'Embarcar no Dirigível a Vapor de Gizmo',
          description: 'Cruzar o mar de nuvens rumo à Cidadela de Bronze.',
          icon: '🎈',
          targetSceneId: 'cena-2-dirigivel'
        },
        {
          id: 'escolha-ponte-cristal',
          text: 'Atravessar a Ponte Suspensa Luminosa',
          description: 'Caminhar pelos degraus transparentes até o Coração do Farol.',
          icon: '🌉',
          targetSceneId: 'cena-2-farol'
        }
      ],
      characterDialogue: {
        speaker: 'Gizmo',
        avatar: '🦅',
        text: 'Piu-clic! Motores calibrados a 100%! O céu está limpo para a nossa decolagem!'
      }
    },
    'cena-2-dirigivel': {
      id: 'cena-2-dirigivel',
      chapterNumber: 2,
      title: 'Voo pelos Turbilhões Celestes',
      text: 'O dirigível cortava as correntes de vento com elegância. Havia manivelas douradas no convés e um telescópio que apontava para constelações vivas.',
      sceneryType: 'sky-islands',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-telescopio',
          name: 'Telescópio Celestial',
          x: 35,
          y: 50,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Olhar pelo Telescópio',
          hint: 'Observe as estrelas dançantes...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🔭',
          triggeredIcon: '🌌',
          eventResult: {
            narrativeNote: '🔭 Você avistou a lendária Baleia das Nuvens nadando no horizonte!',
          }
        },
        {
          id: 'elem-timao',
          name: 'Timão Dourado',
          x: 70,
          y: 45,
          width: 20,
          height: 24,
          actionType: 'creature-jump',
          label: 'Girar o Timão',
          hint: 'Ajuste a rota da aeronave!',
          hasTriggered: false,
          sound: 'creature',
          icon: '🧭',
          triggeredIcon: '💨',
          eventResult: {
            narrativeNote: '🧭 O navio fez uma curva suave desviando de uma nuvem eletrizada!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-pouso-sucesso',
          text: 'Pousar na Grande Praça dos Inventores',
          description: 'Compartilhar suas anotações e celebrar com os artesãos mecânicos.',
          icon: '🏆',
          targetSceneId: 'cena-final-inventor'
        }
      ],
      characterDialogue: {
        speaker: 'Theo',
        avatar: '👦',
        text: 'Que manobra espetacular! Nossos cálculos de aerodinâmica deram certinho!'
      }
    },
    'cena-2-farol': {
      id: 'cena-2-farol',
      chapterNumber: 2,
      title: 'O Coração de Safira',
      text: 'Dentro da torre, um cristal de safira pulsava como um coração vivo. Ele mantinha a gravidade da ilha estável. Ao redor dele, três enigmas musicais esperavam por uma mente brilhante.',
      sceneryType: 'sky-islands',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-safira',
          name: 'Safira Gravitacional',
          x: 45,
          y: 40,
          width: 22,
          height: 26,
          actionType: 'star-sparkle',
          label: 'Harmonizar a Safira',
          hint: 'Toque para sintonizar a frequência da pedra...',
          hasTriggered: false,
          sound: 'magic',
          icon: '💎',
          triggeredIcon: '💠',
          eventResult: {
            narrativeNote: '💎 A safira ressoou com calma, fazendo tudo flutuar suavemente como plumas!',
          }
        },
        {
          id: 'elem-diapasao',
          name: 'Diapasão Mágico',
          x: 20,
          y: 60,
          width: 16,
          height: 20,
          actionType: 'bell-ring',
          label: 'Tocar a Nota Si',
          hint: 'Toque para emitir uma nota pura...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🔔',
          triggeredIcon: '🎶',
          eventResult: {
            narrativeNote: '🎶 Um acorde perfeito abriu o portal estelar!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-guardiao-ceu',
          text: 'Aceitar a Chave Mestra dos Céus',
          description: 'Tornar-se o protetor oficial do equilíbrio das ilhas flutuantes.',
          icon: '🗝️',
          targetSceneId: 'cena-final-inventor'
        }
      ],
      characterDialogue: {
        speaker: 'Gizmo',
        avatar: '🦅',
        text: 'Freqüência perfeitamente calibrada! Você é um verdadeiro gênio da mecânica aérea!'
      }
    },
    'cena-final-inventor': {
      id: 'cena-final-inventor',
      chapterNumber: 3,
      title: 'Mestre da Gravidade e dos Céus',
      text: 'A ilha flutuante agora brilha com luz própria no firmamento. Gizmo pousa feliz no seu ombro e o céu se enche de fogos de artifício em sua homenagem. Uma aventura inesquecível construída pelas suas escolhas!',
      sceneryType: 'sky-islands',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-inventor',
          name: 'Medalha do Inventor Voador',
          x: 45,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Receber Medalha Dourada',
          hint: 'Toque para receber sua condecoração!',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🥇',
          triggeredIcon: '👑',
          eventResult: {
            narrativeNote: '🥇 Você conquistou o Distintivo de Mestre Inventor do Céu!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-inventor',
          text: 'Voltar ao Farol e explorar novos caminhos',
          description: 'Recomeçar a missão para descobrir outros segredos mecânicos.',
          icon: '🔄',
          targetSceneId: 'cena-1-ilha-ceu'
        }
      ],
      characterDialogue: {
        speaker: 'Theo e Gizmo',
        avatar: '🦅',
        text: 'Parabéns! Nossos céus estão em festa graças à sua coragem e engenho!'
      }
    }
  }
};
