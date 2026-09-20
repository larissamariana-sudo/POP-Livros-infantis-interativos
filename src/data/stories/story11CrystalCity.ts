import { Book } from '../../types';

export const story11CrystalCity: Book = {
  id: 'sinfonia-cavernas-cristal',
  title: 'A Sinfonia das Cavernas de Cristal',
  subtitle: 'Uma expedição subterrânea onde estalactites tocam notas musicais mágicas',
  coverImage: 'crystal-cover',
  coverEmoji: '💎',
  ageGroup: '7-10',
  themeColor: 'from-fuchsia-600 via-purple-700 to-indigo-800',
  tagline: 'Toque nas estalactites musicais, ative gêiseres de vapor sonoro e desperte o órgão de ametistas!',
  totalChapters: 3,
  initialSceneId: 'cena-1-gruta-ametista',
  characters: [
    { name: 'Melodia', role: 'Toupeirinha geóloga de capacete com lanterna', avatar: '🦔' },
    { name: 'Eco', role: 'Morceguinho maestro com batuta de quartzo', avatar: '🦇' }
  ],
  scenes: {
    'cena-1-gruta-ametista': {
      id: 'cena-1-gruta-ametista',
      chapterNumber: 1,
      title: 'A Gruta do Xilofone de Rocha',
      text: 'Nas profundezas da Terra, muito abaixo das raízes das árvores, existe uma catedral de cristais roxos e azuis. Gotas d’água caem no ritmo de uma valsa e a toupeirinha Melodia afina seu martelinho de borracha para tocar a primeira canção.',
      sceneryType: 'crystal-caves',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-cristal-dó',
          name: 'Estalactite Nota Dó',
          x: 25,
          y: 35,
          width: 20,
          height: 24,
          actionType: 'bell-ring',
          label: 'Tocar o Cristal Roxo',
          hint: 'Toque para ouvir a nota cristalina...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '💎',
          triggeredIcon: '🎵',
          eventResult: {
            narrativeNote: '🎵 Dóóó! Uma nota límpida e brilhante fez toda a caverna ressoar em tons lilases!',
          }
        },
        {
          id: 'elem-cristal-sol',
          name: 'Geodo de Quartzo Rosa',
          x: 75,
          y: 45,
          width: 22,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Fazer Vibrar o Geodo',
          hint: 'Toque no coração rosado do geodo...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🔮',
          triggeredIcon: '🎶',
          eventResult: {
            narrativeNote: '🎶 O geodo começou a girar suavemente emitindo luzes dançantes nas paredes de pedra!',
          }
        },
        {
          id: 'elem-toupeira-melodia',
          name: 'Melodia, a Geóloga',
          x: 48,
          y: 60,
          width: 22,
          height: 24,
          actionType: 'animal-pet',
          label: 'Ajudar Melodia',
          hint: 'Cumprimente a pequena musicista!',
          hasTriggered: false,
          sound: 'creature',
          icon: '🦔',
          triggeredIcon: '🎼',
          eventResult: {
            narrativeNote: '🎼 Melodia bateu palminhas com suas luvas acolchoadas e anotou a melodia na partitura!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-rio-termal',
          text: 'Navegar na jangada de pirita pelo Rio Geotérmico',
          description: 'Seguir o curso das águas mornas que passam por gêiseres flautistas.',
          icon: '🛶',
          targetSceneId: 'cena-2-rio-geotermico'
        },
        {
          id: 'escolha-orgao-ametista',
          text: 'Escalar até a Sacada do Grande Órgão Mineral',
          description: 'Onde cem tubos de pedra natural formam o maior instrumento musical do subsolo.',
          icon: '🎹',
          targetSceneId: 'cena-2-orgao-mineral'
        }
      ],
      characterDialogue: {
        speaker: 'Melodia',
        avatar: '🦔',
        text: 'Ouça como as pedras têm voz! Cada cristal tem uma nota afinadinha esperando por nós!'
      }
    },
    'cena-2-rio-geotermico': {
      id: 'cena-2-rio-geotermico',
      chapterNumber: 2,
      title: 'A Dança do Vapor Luminoso',
      text: 'Pequenos orifícios nas rochas liberavam jatos de vapor suave que sopravam como flautas doces. A jangada deslizava pelas águas esmeralda com o morceguinho Eco regendo os tempos.',
      sceneryType: 'starlit-river',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-geiser-vapor',
          name: 'Flauta Natural de Vapor',
          x: 35,
          y: 45,
          width: 22,
          height: 24,
          actionType: 'fruit-fall',
          label: 'Destampar o Gêiser Suave',
          hint: 'Toque para liberar o acorde de vento...',
          hasTriggered: false,
          sound: 'water',
          icon: '💨',
          triggeredIcon: '🎺',
          eventResult: {
            narrativeNote: '🎺 Fshhh-fiuuu! Uma melodia animada subiu com o vapor desenhando notas no teto!',
          }
        },
        {
          id: 'elem-morcego-eco',
          name: 'Maestro Eco',
          x: 70,
          y: 30,
          width: 20,
          height: 22,
          actionType: 'creature-jump',
          label: 'Reger com Eco',
          hint: 'Toque no morceguinho maestro...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🦇',
          triggeredIcon: '🪄',
          eventResult: {
            narrativeNote: '🪄 Eco ergueu sua batuta e todos os estalactites responderam em harmonia!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-grande-concerto',
          text: 'Apresentar a Sinfonia Final no Anfiteatro de Diamantes',
          description: 'Tocar a peça completa para todos os seres do mundo subterrâneo.',
          icon: '🎻',
          targetSceneId: 'cena-final-cristal'
        }
      ],
      characterDialogue: {
        speaker: 'Eco',
        avatar: '🦇',
        text: 'Magnífico crescendo! O ritmo deste rio é puramente contagiante!'
      }
    },
    'cena-2-orgao-mineral': {
      id: 'cena-2-orgao-mineral',
      chapterNumber: 2,
      title: 'O Teclado de Berilo e Safiras',
      text: 'O instrumento colossal foi moldado pela natureza ao longo de milhares de anos. Suas teclas transparentes acendiam quando tocadas, gerando vibrações que enchiam o coração de serenidade.',
      sceneryType: 'crystal-caves',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-tecla-berilo',
          name: 'Acorde Triplo de Safira',
          x: 45,
          y: 50,
          width: 24,
          height: 24,
          actionType: 'bell-ring',
          label: 'Pressionar as Teclas de Safira',
          hint: 'Toque para liberar um acorde mágico...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🎹',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Um som majestoso e quente preencheu a gruta, fazendo todos os cristais brilharem em sincronia!',
          }
        },
        {
          id: 'elem-gota-ritmo',
          name: 'Gotas de Orvalho Musical',
          x: 20,
          y: 35,
          width: 18,
          height: 20,
          actionType: 'flower-bloom',
          label: 'Acelerar o Gotejar',
          hint: 'Marque o andamento...',
          hasTriggered: false,
          sound: 'water',
          icon: '💧',
          triggeredIcon: '🥁',
          eventResult: {
            narrativeNote: '🥁 Ploc-ploc-ploc! O ritmo acelerou alegremente como passos de dança!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-grande-concerto-2',
          text: 'Consagrar o Coral do Coração da Terra',
          description: 'Gravar a canção eterna na partitura de ouro dos geólogos.',
          icon: '🏆',
          targetSceneId: 'cena-final-cristal'
        }
      ],
      characterDialogue: {
        speaker: 'Melodia',
        avatar: '🦔',
        text: 'Nós conseguimos afinar o instrumento ancestral da terra! Que sensação indescritível!'
      }
    },
    'cena-final-cristal': {
      id: 'cena-final-cristal',
      chapterNumber: 3,
      title: 'Maestro Supremo dos Cristais',
      text: 'A Caverna inteira vibra agora numa sinfonia de luz e som inesquecível. Viajantes de todos os cantos virão para ouvir o eco da melodia que você compôs com suas escolhas brilhantes!',
      sceneryType: 'crystal-caves',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-musical',
          name: 'Diapasão de Cristal Eterno',
          x: 45,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Receber Diapasão de Cristal',
          hint: 'Toque para recolher sua condecoração melódica!',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🪗',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Parabéns! Você recebeu o Título de Mestre Compositor(a) das Cavernas Vivas!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-cristal',
          text: 'Tocar novas notas na caverna!',
          description: 'Recomece a composição explorando novos timbres sonoros.',
          icon: '🔄',
          targetSceneId: 'cena-1-gruta-ametista'
        }
      ],
      characterDialogue: {
        speaker: 'Melodia e Eco',
        avatar: '🦔',
        text: 'Obrigado por trazer música para nossa casa de pedra! Nossos corações cantam com você!'
      }
    }
  }
};
