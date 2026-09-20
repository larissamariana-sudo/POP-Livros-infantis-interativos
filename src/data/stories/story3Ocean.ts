import { Book } from '../../types';

export const story3Ocean: Book = {
  id: 'recife-das-maravilhas',
  title: 'O Segredo da Baleia Azul',
  subtitle: 'Uma aventura aquática cheia de corais brilhantes e tesouros',
  coverImage: 'ocean-cover',
  coverEmoji: '🐋',
  ageGroup: '3-6',
  themeColor: 'from-cyan-400 via-blue-500 to-indigo-600',
  tagline: 'Toque em águas-vivas, acorde a ostra cantante e nade com golfinhos!',
  totalChapters: 3,
  initialSceneId: 'cena-1-recife',
  characters: [
    { name: 'Tatty', role: 'Tartaruguinha veloz com óculos de mergulho', avatar: '🐢' },
    { name: 'Lumi', role: 'Água-viva que brilha no escuro', avatar: '🪼' },
    { name: 'Serena', role: 'Doce baleia cantante', avatar: '🐋' }
  ],
  scenes: {
    'cena-1-recife': {
      id: 'cena-1-recife',
      chapterNumber: 1,
      title: 'O Jardim de Corais Cintilantes',
      text: 'Bem no fundo do oceano azul-turquesa, o recife parece uma floresta de arco-íris. Uma ostra gigante dorme no fundo de areia macia, enquanto pequenos cardumes brincam de esconde-esconde entre as anêmonas.',
      sceneryType: 'coral-reef',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-ostra',
          name: 'Ostra Gigante',
          x: 65,
          y: 68,
          width: 24,
          height: 22,
          actionType: 'chest-open',
          label: 'Cócegas na Ostra!',
          hint: 'Toque na concha fechada para ela abrir...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🦪',
          triggeredIcon: '💎',
          eventResult: {
            narrativeNote: '🦪 A ostra abriu com um sorriso, mostrando uma pérola lilás que canta baixinho!',
          }
        },
        {
          id: 'elem-aguaviva',
          name: 'Lumi, a Água-Viva',
          x: 25,
          y: 35,
          width: 20,
          height: 25,
          actionType: 'star-sparkle',
          label: 'Acender Lumi',
          hint: 'Toque em Lumi para ver suas cores elétricas!',
          hasTriggered: false,
          sound: 'magic',
          icon: '🪼',
          triggeredIcon: '💡',
          eventResult: {
            narrativeNote: '💡 BZZZ! Lumi acendeu luzes neon magenta e azul como uma lâmpada mágica!',
          }
        },
        {
          id: 'elem-bolhas-recife',
          name: 'Coral de Bolhas',
          x: 48,
          y: 50,
          width: 18,
          height: 22,
          actionType: 'fruit-fall',
          label: 'Estourar Bolhas',
          hint: 'Toque nas bolhas subindo...',
          hasTriggered: false,
          sound: 'plop',
          icon: '🫧',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '🫧 POP! POP! As bolhas estouraram liberando notas de sino cristalinas!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-caverna-submarina',
          text: 'Seguir Tatty pela Gruta das Tartarugas',
          description: 'Uma gruta secreta onde as tartarugas ensinam manobras na água.',
          icon: '🐢',
          targetSceneId: 'cena-2-gruta-tartaruga'
        },
        {
          id: 'escolha-baleia-canto',
          text: 'Subir à superfície ouvindo o Canto da Baleia',
          description: 'Nadar para o alto e ver os jatos de água que alcançam o sol!',
          icon: '🐋',
          targetSceneId: 'cena-2-baleia'
        }
      ],
      characterDialogue: {
        speaker: 'Tatty',
        avatar: '🐢',
        text: 'Ajuste seus óculos de mergulho! A água está quentinha e cheia de segredos para descobrirmos!'
      }
    },
    'cena-2-gruta-tartaruga': {
      id: 'cena-2-gruta-tartaruga',
      chapterNumber: 2,
      title: 'O Baile das Tartarugas Velozes',
      text: 'Na gruta, a correnteza é como uma pista de corrida! As tartarugas usam conchas aerodinâmicas e fazem curvas radicais que deixam rastros de brilho na água.',
      sceneryType: 'coral-reef',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-concha-turbo',
          name: 'Concha Turbo',
          x: 35,
          y: 55,
          width: 22,
          height: 20,
          actionType: 'creature-jump',
          label: 'Ligar o Turbo',
          hint: 'Toque para acelerar com bolhas!',
          hasTriggered: false,
          sound: 'water',
          icon: '🐚',
          triggeredIcon: '🚀',
          eventResult: {
            narrativeNote: '🚀 Vroooom! Um jato de bolhas empurrou todo mundo para frente com risadas!',
          }
        },
        {
          id: 'elem-estrela-mar',
          name: 'Estrela-do-Mar Estilosa',
          x: 75,
          y: 65,
          width: 18,
          height: 18,
          actionType: 'star-sparkle',
          label: 'Cumprimentar a Estrela',
          hint: 'Cumprimente a estrela-do-mar!',
          hasTriggered: false,
          sound: 'magic',
          icon: '⭐',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '⭐ Toca aqui! A estrela-do-mar bateu as cinco pontas e piscou com glitter!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-festa-mar',
          text: 'Celebrar a Grande Festa Submarina',
          description: 'Dançar com polvos, golfinhos e cavalos-marinhos no salão de conchas.',
          icon: '🎉',
          targetSceneId: 'cena-final-oceano'
        }
      ],
      characterDialogue: {
        speaker: 'Tatty',
        avatar: '🐢',
        text: 'Nossa manobra com as bolhas foi perfeita! Agora somos campeões de velocidade!'
      }
    },
    'cena-2-baleia': {
      id: 'cena-2-baleia',
      chapterNumber: 2,
      title: 'O Encontro com a Doce Baleia Serena',
      text: 'Na superfície dourada pelo entardecer, Serena, a baleia gigante mais gentil do mundo, soprava um jato tão alto que formava um arco-íris suspenso no ar.',
      sceneryType: 'starlit-river',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-jato-baleia',
          name: 'Jato de Água de Serena',
          x: 50,
          y: 35,
          width: 30,
          height: 35,
          actionType: 'river-flow',
          label: 'Aumentar o Jato d’Água',
          hint: 'Toque para fazer o jato subir ainda mais!',
          hasTriggered: false,
          sound: 'water',
          icon: '🌊',
          triggeredIcon: '🌈',
          eventResult: {
            narrativeNote: '🌊 O jato d’água subiu até as nuvens e transformou-se numa chuva de confetes brilhantes!',
          }
        },
        {
          id: 'elem-olho-baleia',
          name: 'Olhar Amigável de Serena',
          x: 25,
          y: 60,
          width: 20,
          height: 20,
          actionType: 'creature-jump',
          label: 'Acariciar Serena',
          hint: 'Faça um carinho na baleia...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐋',
          triggeredIcon: '💖',
          eventResult: {
            narrativeNote: '🐋 Serena cantou uma canção tão doce que acalmou todos os ventos!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-festa-mar-2',
          text: 'Pegar Carona com Serena até a Ilha do Pôr do Sol',
          description: 'Assistir ao sol se pôr nas costas quentinhas da baleia.',
          icon: '🌅',
          targetSceneId: 'cena-final-oceano'
        }
      ],
      characterDialogue: {
        speaker: 'Serena',
        avatar: '🐋',
        text: 'O mar é imenso, mas um amigo de coração bondoso como você é único em todo oceano!'
      }
    },
    'cena-final-oceano': {
      id: 'cena-final-oceano',
      chapterNumber: 3,
      title: 'Guardião dos Oceanos Encantados',
      text: 'O mar se tornou seu amigo para sempre! Você descobriu os mistérios dos corais, fez rir a ostra gigante e navegou ao lado de seres extraordinários. O mar bate palmas em ondinhas suaves para você!',
      sceneryType: 'coral-reef',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-concha-dourada-fim',
          name: 'Concha Real Dourada',
          x: 45,
          y: 48,
          width: 20,
          height: 20,
          actionType: 'chest-open',
          label: 'Abrir a Concha Real',
          hint: 'Toque para ver sua recompensa...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🐚',
          triggeredIcon: '👑',
          eventResult: {
            narrativeNote: '🐚 Você ganhou o Título de Protetor(a) dos Recifes Mágicos!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-oceano',
          text: 'Mergulhar de novo em novas escolhas!',
          description: 'Retorne ao recife e experimente o outro trajeto submarino.',
          icon: '🔄',
          targetSceneId: 'cena-1-recife'
        }
      ],
      characterDialogue: {
        speaker: 'Tatty e Serena',
        avatar: '🐢',
        text: 'Nossos corais estarão sempre cheios de luz esperando por você!'
      }
    }
  }
};
