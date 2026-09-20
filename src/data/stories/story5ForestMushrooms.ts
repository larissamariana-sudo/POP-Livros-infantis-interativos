import { Book } from '../../types';

export const story5ForestMushrooms: Book = {
  id: 'floresta-cogumelos-luminosos',
  title: 'O Segredo dos Cogumelos Luminosos',
  subtitle: 'Um mistério no coração da mata onde a flora brilha à noite e sussurra enigmas',
  coverImage: 'mushrooms-cover',
  coverEmoji: '🍄',
  ageGroup: '7-10',
  themeColor: 'from-emerald-600 via-teal-700 to-indigo-800',
  tagline: 'Toque nos esporos fosforescentes, decifre runas da árvore anciã e liberte vaga-lumes!',
  totalChapters: 3,
  initialSceneId: 'cena-1-bosque-noturno',
  characters: [
    { name: 'Lila', role: 'Raposinha curiosa de capa esmeralda', avatar: '🦊' },
    { name: 'Gael', role: 'Corujinha sábia de luneta', avatar: '🦉' }
  ],
  scenes: {
    'cena-1-bosque-noturno': {
      id: 'cena-1-bosque-noturno',
      chapterNumber: 1,
      title: 'A Clareira das Luas Gêmeas',
      text: 'O crepúsculo caiu sobre a Floresta das Sombras Mansur. Pouco a pouco, os troncos das árvores começaram a acender pequenas linhas azuis e verdes. A raposa Lila segurava seu mapa estelar quando percebeu que os cogumelos gigantes no solo pareciam teclas de um piano secreto.',
      sceneryType: 'enchanted-forest',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-cogumelo-luz',
          name: 'Cogumelo Azul Neon',
          x: 25,
          y: 65,
          width: 22,
          height: 24,
          actionType: 'flower-bloom',
          label: 'Tocar o Chapéu Luminoso',
          hint: 'Toque para liberar pólen brilhante...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🍄',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '🍄 Uma nuvem cintilante de esporos subiu no ar iluminando pegadas misteriosas!',
          }
        },
        {
          id: 'elem-lanterna-vagalume',
          name: 'Lanterna de Vaga-Lumes',
          x: 75,
          y: 35,
          width: 18,
          height: 22,
          actionType: 'light-glow',
          label: 'Acender Lanterna',
          hint: 'Toque na jarra de cristal com vaga-lumes...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🏮',
          triggeredIcon: '🌟',
          eventResult: {
            narrativeNote: '🏮 Centenas de vaga-lumes dourados revoaram e formaram uma seta no ar!',
          }
        },
        {
          id: 'elem-raposa-lila',
          name: 'Lila, a Raposa',
          x: 48,
          y: 55,
          width: 20,
          height: 24,
          actionType: 'animal-pet',
          label: 'Acariciar Lila',
          hint: 'Dê um alô para a aventureira!',
          hasTriggered: false,
          sound: 'creature',
          icon: '🦊',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '🦊 Lila abanou a cauda felpuda e apontou o focinho para a trilha secreta!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-arvore-ancia',
          text: 'Seguir a trilha até o Salgueiro dos Mil Sussurros',
          description: 'Consultar a árvore mais velha da floresta que guarda a sabedoria da natureza.',
          icon: '🌳',
          targetSceneId: 'cena-2-arvore-ancia'
        },
        {
          id: 'escolha-lago-cristalino',
          text: 'Entrar no Túnel das Raízes que desce até o Lago Espelhado',
          description: 'Um caminho subterrâneo onde as águas refletem as constelações perdidas.',
          icon: '💧',
          targetSceneId: 'cena-2-lago-espelhado'
        }
      ],
      characterDialogue: {
        speaker: 'Lila',
        avatar: '🦊',
        text: 'Você viu como essa mata é viva? Cada passo revela um novo segredo se soubermos observar com calma!'
      }
    },
    'cena-2-arvore-ancia': {
      id: 'cena-2-arvore-ancia',
      chapterNumber: 2,
      title: 'O Enigma do Salgueiro Guardião',
      text: 'Os ramos dourados do Salgueiro tocavam o chão em arcos perfeitos. Seus olhos de casca de madeira se abriram com gentileza. "Para curar a raiz do mundo, é preciso harmonia entre a terra e a luz", ecoou a voz serena da árvore.',
      sceneryType: 'enchanted-forest',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-seiva-ouro',
          name: 'Gota de Seiva Solar',
          x: 45,
          y: 40,
          width: 20,
          height: 24,
          actionType: 'fruit-fall',
          label: 'Colher Seiva Solar',
          hint: 'Toque na gota brilhante suspensa no galho...',
          hasTriggered: false,
          sound: 'magic',
          icon: '💧',
          triggeredIcon: '☀️',
          eventResult: {
            narrativeNote: '☀️ A seiva brilhou como um pequeno sol e alimentou as mudinhas da floresta!',
          }
        },
        {
          id: 'elem-coruja-gael',
          name: 'Gael, a Coruja',
          x: 75,
          y: 25,
          width: 20,
          height: 22,
          actionType: 'creature-jump',
          label: 'Consultar Gael',
          hint: 'Toque na corujinha de luneta...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🦉',
          triggeredIcon: '📜',
          eventResult: {
            narrativeNote: '🦉 Hu-hu! Gael desenhou com o bico o mapa para o santuário da floresta!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-coracao-floresta',
          text: 'Restaurar o Altar da Floresta Viva',
          description: 'Unir a seiva solar e os esporos para acordar o coração verde da terra.',
          icon: '🌿',
          targetSceneId: 'cena-final-floresta'
        }
      ],
      characterDialogue: {
        speaker: 'Gael',
        avatar: '🦉',
        text: 'Decisão brilhante! As forças da floresta responderam ao seu respeito pela vida natural!'
      }
    },
    'cena-2-lago-espelhado': {
      id: 'cena-2-lago-espelhado',
      chapterNumber: 2,
      title: 'O Reflexo dos Sonhos Antigos',
      text: 'A superfície do lago subterrâneo era perfeitamente lisa como um espelho de prata líquida. Pequenas vitórias-régias bioluminescentes flutuavam emitindo fragrâncias de jasmim e hortelã.',
      sceneryType: 'starlit-river',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-vitoria-regia',
          name: 'Flor de Lótus Noturna',
          x: 35,
          y: 65,
          width: 24,
          height: 24,
          actionType: 'flower-bloom',
          label: 'Abrir Flor de Lótus',
          hint: 'Toque para desabrochar as pétalas...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🪷',
          triggeredIcon: '💎',
          eventResult: {
            narrativeNote: '💎 As pétalas se abriram revelando uma pérola de água pura que harmoniza as correntes!',
          }
        },
        {
          id: 'elem-pedra-runica',
          name: 'Runa Ancestral',
          x: 70,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Tocar a Runa Antiga',
          hint: 'Decifre o símbolo entalhado na pedra...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🪨',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ A runa brilhou em esmeralda revelando o juramento eterno dos protetores verdes!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-unir-fontes',
          text: 'Erguer o Amuleto de Esmeralda das Águas',
          description: 'Consagrar o lago como santuário perpétuo da vida selvagem.',
          icon: '🔮',
          targetSceneId: 'cena-final-floresta'
        }
      ],
      characterDialogue: {
        speaker: 'Lila',
        avatar: '🦊',
        text: 'Olhe só o reflexo das estrelas na água! Parece que estamos caminhando no céu!'
      }
    },
    'cena-final-floresta': {
      id: 'cena-final-floresta',
      chapterNumber: 3,
      title: 'Guardião do Coração da Floresta',
      text: 'Uma onda suave de luz verde e dourada percorreu todas as árvores e tocas de bichinhos. A floresta inteira agora brilha em harmonia, segura e cheia de vida, graças à sua inteligência e sensibilidade!',
      sceneryType: 'enchanted-forest',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-bosque',
          name: 'Emblema da Folha de Ouro',
          x: 45,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Receber Emblema Guardião',
          hint: 'Toque para aceitar o distintivo da natureza!',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🍃',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Honra concedida! Você agora é Irmão(ã) Honorário(a) de todos os seres do bosque!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-floresta',
          text: 'Retornar à clareira para novos caminhos',
          description: 'Explore outras rotas misteriosas entre as árvores.',
          icon: '🔄',
          targetSceneId: 'cena-1-bosque-noturno'
        }
      ],
      characterDialogue: {
        speaker: 'Lila e Gael',
        avatar: '🦊',
        text: 'Nossa floresta sempre guardará um lugar na relva macia para você descansar e sonhar!'
      }
    }
  }
};
