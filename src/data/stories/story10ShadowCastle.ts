import { Book } from '../../types';

export const story10ShadowCastle: Book = {
  id: 'castelo-sombras-luzes',
  title: 'O Castelo das Sombras e Luzes Dançantes',
  subtitle: 'Um enigma arcano numa fortaleza suspensa onde a escuridão guarda segredos cintilantes',
  coverImage: 'castle-cover',
  coverEmoji: '🏰',
  ageGroup: '7-10',
  themeColor: 'from-violet-900 via-indigo-900 to-slate-950',
  tagline: 'Desperte sinos de prata, ilumine prismas espectrais e una a magia da luz e da penumbra!',
  totalChapters: 3,
  initialSceneId: 'cena-1-ponte-obsidiana',
  characters: [
    { name: 'Kael', role: 'Jovem aprendiz de tecelagem de luz', avatar: '🧙‍♂️' },
    { name: 'Nyx', role: 'Lince espectral com olhos de ametista', avatar: '🐈‍⬛' }
  ],
  scenes: {
    'cena-1-ponte-obsidiana': {
      id: 'cena-1-ponte-obsidiana',
      chapterNumber: 1,
      title: 'Os Portões de Ébano Flutuante',
      text: 'O Castelo de Noctiluca pairava sobre um mar de bruma violeta. Suas muralhas de obsidiana polida refletiam auroras boreais silenciosas. Kael e a lince mística Nyx aproximaram-se do grande pórtico, onde três sinos de prata pendiam envoltos em runas frias.',
      sceneryType: 'shadow-castle',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-sino-prata',
          name: 'Sino Espectral da Meia-Noite',
          x: 65,
          y: 35,
          width: 22,
          height: 24,
          actionType: 'bell-ring',
          label: 'Tocar o Sino de Prata',
          hint: 'Toque para fazer ressoar a nota etérea...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🔔',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '🔔 Uma ressonância prateada dissipou a névoa ao redor dos arcos do castelo!',
          }
        },
        {
          id: 'elem-orbe-sombra',
          name: 'Orbe de Luz Negra',
          x: 25,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'light-glow',
          label: 'Alinhar Frequência do Orbe',
          hint: 'Canalize a energia no centro da esfera...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🔮',
          triggeredIcon: '💫',
          eventResult: {
            narrativeNote: '💫 Fios de luz violeta entrelaçaram-se revelando a ponte levadiça estelar!',
          }
        },
        {
          id: 'elem-lince-nyx',
          name: 'Nyx, a Lince Espectral',
          x: 45,
          y: 60,
          width: 20,
          height: 22,
          actionType: 'animal-pet',
          label: 'Sintonizar com Nyx',
          hint: 'Toque na guardiã mística...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐈‍⬛',
          triggeredIcon: '💜',
          eventResult: {
            narrativeNote: '💜 Os olhos de Nyx brilharam em ametista guiando para o salão das ilusões!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-torre-espelhos',
          text: 'Subir pela Escadaria Espiral até o Salão dos Espelhos Arcanos',
          description: 'Aprender a refratar sombras em arcos de luz dourada pura.',
          icon: '🪞',
          targetSceneId: 'cena-2-salao-espelhos'
        },
        {
          id: 'escolha-jardim-astros',
          text: 'Cruzar o Claustro das Orquídeas Lunares',
          description: 'Desvendar as flores que só se abrem sob o canto da brisa da meia-noite.',
          icon: '🌌',
          targetSceneId: 'cena-2-orquideas-lunares'
        }
      ],
      characterDialogue: {
        speaker: 'Kael',
        avatar: '🧙‍♂️',
        text: 'A escuridão aqui não é vazia; ela é uma tela onde cada faísca de luz ganha um valor inestimável.'
      }
    },
    'cena-2-salao-espelhos': {
      id: 'cena-2-salao-espelhos',
      chapterNumber: 2,
      title: 'A Refracção da Aurora Interior',
      text: 'O salão era circular e cercado por vidraças pontiagudas de quartzo fumê. No centro, uma lâmpada estelar flutuava aguardando que os prismas fossem girados no ângulo correto.',
      sceneryType: 'shadow-castle',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-prisma-quartzo',
          name: 'Prisma Central Giratório',
          x: 48,
          y: 45,
          width: 24,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Girar Prisma Triangular',
          hint: 'Toque para refratar o espectro...',
          hasTriggered: false,
          sound: 'magic',
          icon: '💎',
          triggeredIcon: '🌈',
          eventResult: {
            narrativeNote: '🌈 Um feixe de sete cores vívidas atravessou a penumbra desfazendo qualquer feitiço de confusão!',
          }
        },
        {
          id: 'elem-livro-grimoire',
          name: 'Grimório dos Tecelões',
          x: 20,
          y: 65,
          width: 20,
          height: 22,
          actionType: 'flower-bloom',
          label: 'Abrir Página Iluminada',
          hint: 'Consulte a fórmula milenar...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '📖',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ As palavras de tinta estelar se ergueram no ar formando um selo de sabedoria!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-trono-equilibrio',
          text: 'Ascender ao Trono do Equilíbrio Perfeito',
          description: 'Unir a luz e a escuridão numa única força criadora de mundos.',
          icon: '👑',
          targetSceneId: 'cena-final-castelo'
        }
      ],
      characterDialogue: {
        speaker: 'Nyx',
        avatar: '🐈‍⬛',
        text: 'A harmonia foi restabelecida no santuário! O castelo pulsa com vida viva!'
      }
    },
    'cena-2-orquideas-lunares': {
      id: 'cena-2-orquideas-lunares',
      chapterNumber: 2,
      title: 'O Jardim da Penumbra Prateada',
      text: 'Pétalas escuras com veios fosforescentes desabrochavam conforme os passos de Kael tocavam as lajes musgosas. Uma fonte de orvalho estelar gotejava notas musicais tranquilas.',
      sceneryType: 'shadow-castle',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-orquidea-lua',
          name: 'Orquídea da Lua Cheia',
          x: 35,
          y: 60,
          width: 22,
          height: 24,
          actionType: 'flower-bloom',
          label: 'Acariciar Pétalas Noturnas',
          hint: 'Toque na flor luminescente...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🪻',
          triggeredIcon: '🌙',
          eventResult: {
            narrativeNote: '🌙 A flor liberou um aroma doce de mistério e revelou um talismã de prata!',
          }
        },
        {
          id: 'elem-fonte-orvalho',
          name: 'Fonte de Mercúrio Astral',
          x: 70,
          y: 50,
          width: 20,
          height: 22,
          actionType: 'river-flow',
          label: 'Ondular a Água Prateada',
          hint: 'Toque na superfície da fonte...',
          hasTriggered: false,
          sound: 'water',
          icon: '⛲',
          triggeredIcon: '💎',
          eventResult: {
            narrativeNote: '💎 Ondas concêntricas iluminaram a constelação da Coruja Maior no teto!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-trono-equilibrio-2',
          text: 'Receber a Coroa dos Arcanos da Meia-Noite',
          description: 'Aceitar a responsabilidade de proteger o equilíbrio entre a noite e o dia.',
          icon: '✨',
          targetSceneId: 'cena-final-castelo'
        }
      ],
      characterDialogue: {
        speaker: 'Kael',
        avatar: '🧙‍♂️',
        text: 'Este silêncio é renovador. A beleza que floresce na calma da noite é inigualável.'
      }
    },
    'cena-final-castelo': {
      id: 'cena-final-castelo',
      chapterNumber: 3,
      title: 'O Mestre da Luz e da Sombra',
      text: 'A fortaleza de Noctiluca agora irradia uma aura de serenidade indescritível. As sombras não assustam mais; elas acolhem e protegem os sonhos de todos os habitantes do reino. Sua sabedoria triunfou!',
      sceneryType: 'shadow-castle',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-arcano',
          name: 'Cetro de Diamante Negro',
          x: 45,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Erguer o Cetro do Equilíbrio',
          hint: 'Toque para selar seu título arcano!',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🪄',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Título Supremo! Você é agora Guardião Eterno do Castelo de Luz e Sombra!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-castelo',
          text: 'Retornar aos portões para novas descobertas',
          description: 'Recomece a jornada pelos corredores enigmáticos da fortaleza.',
          icon: '🔄',
          targetSceneId: 'cena-1-ponte-obsidiana'
        }
      ],
      characterDialogue: {
        speaker: 'Kael e Nyx',
        avatar: '🧙‍♂️',
        text: 'O equilíbrio foi alcançado com honra e inteligência! Nossas portas sempre se abrirão para você!'
      }
    }
  }
};
