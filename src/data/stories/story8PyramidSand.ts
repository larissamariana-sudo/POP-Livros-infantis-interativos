import { Book } from '../../types';

export const story8PyramidSand: Book = {
  id: 'enigma-areias-douradas',
  title: 'O Enigma das Areias Douradas',
  subtitle: 'Uma expedição arqueológica através de câmaras secretas e mecanismos ancestrais',
  coverImage: 'pyramid-cover',
  coverEmoji: '🏜️',
  ageGroup: '11-14',
  themeColor: 'from-amber-600 via-yellow-600 to-stone-700',
  tagline: 'Alinhe escaravelhos mecânicos, decifre relevos em hieróglifos e desvende a câmara do faraó!',
  totalChapters: 3,
  initialSceneId: 'cena-1-entrada-piramide',
  characters: [
    { name: 'Tariq', role: 'Jovem arqueólogo e decifrador de escritas', avatar: '🧭' },
    { name: 'Zuri', role: 'Especialista em mecânica e astronomia antiga', avatar: '🔍' }
  ],
  scenes: {
    'cena-1-entrada-piramide': {
      id: 'cena-1-entrada-piramide',
      chapterNumber: 1,
      title: 'O Portal do Sol Poente',
      text: 'Sob o calor escaldante do deserto de Al-Khem, os dois exploradores encontraram a entrada esquecida da Pirâmide das Três Constelações. Na enorme porta de calcário esculpido, um escaravelho de lápis-lazúli parecia travar a engrenagem principal.',
      sceneryType: 'desert-ruins',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-escaravelho-ouro',
          name: 'Escaravelho de Lápis-Lazúli',
          x: 48,
          y: 42,
          width: 22,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Girar o Escaravelho',
          hint: 'Alinhe as asas do artefato...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🪲',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ As engrenagens de pedra rangeram em harmonia e a pesada porta se abriu com um sopro de ar milenar!',
          }
        },
        {
          id: 'elem-tocha-petroleo',
          name: 'Braseiro Cerimonial',
          x: 20,
          y: 55,
          width: 18,
          height: 24,
          actionType: 'dragon-fire',
          label: 'Acender o Braseiro',
          hint: 'Toque para inflamar a chama guia...',
          hasTriggered: false,
          sound: 'fire',
          icon: '🔥',
          triggeredIcon: '🏮',
          eventResult: {
            narrativeNote: '🔥 Uma chama dourada revelou inscrições geométricas que apontam para o norte solar!',
          }
        },
        {
          id: 'elem-tabela-hieroglifo',
          name: 'Estela com Hieróglifos',
          x: 75,
          y: 50,
          width: 20,
          height: 25,
          actionType: 'flower-bloom',
          label: 'Decifrar Escrita',
          hint: 'Examine os símbolos gravados na rocha...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '📜',
          triggeredIcon: '👁️',
          eventResult: {
            narrativeNote: '👁️ "Aquele que busca o conhecimento das estrelas encontrará a água que não seca."',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-corredor-espelhos',
          text: 'Seguir pelo Corredor dos Espelhos de Bronze Polido',
          description: 'Usar a luz do sol refletida para clarear o caminho até o observatório interior.',
          icon: '🪞',
          targetSceneId: 'cena-2-espelhos'
        },
        {
          id: 'escolha-labirinto-pesos',
          text: 'Descer pela Escadaria das Balanças de Granito',
          description: 'Testar sua intuição lógica equilibrando contrapesos ancestrais.',
          icon: '⚖️',
          targetSceneId: 'cena-2-balancas'
        }
      ],
      characterDialogue: {
        speaker: 'Tariq',
        avatar: '🧭',
        text: 'A arquitetura deste lugar é matematicamente assombrosa. Cada pedra tem um propósito exato!'
      }
    },
    'cena-2-espelhos': {
      id: 'cena-2-espelhos',
      chapterNumber: 2,
      title: 'A Galeria dos Raios de Hórus',
      text: 'Espelhos gigantes de liga de bronze e ouro canalizavam um feixe puro de luz solar direta. No chão, sulcos esculpidos formavam um diagrama estelar de Órion.',
      sceneryType: 'desert-ruins',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-espelho-foco',
          name: 'Espelho Angular Principal',
          x: 35,
          y: 45,
          width: 22,
          height: 25,
          actionType: 'star-sparkle',
          label: 'Calibrar Ângulo do Espelho',
          hint: 'Toque para desviar o feixe de luz...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🪞',
          triggeredIcon: '⚡',
          eventResult: {
            narrativeNote: '⚡ O feixe iluminou a íris de cristal da Esfinge no fundo da galeria!',
          }
        },
        {
          id: 'elem-ampulheta-areia',
          name: 'Ampulheta de Areia Vermelha',
          x: 75,
          y: 60,
          width: 18,
          height: 22,
          actionType: 'fruit-fall',
          label: 'Inverter a Ampulheta',
          hint: 'Inicie a contagem mecânica...',
          hasTriggered: false,
          sound: 'water',
          icon: '⏳',
          triggeredIcon: '🔔',
          eventResult: {
            narrativeNote: '⏳ A areia fluiu destravando uma câmara secreta no piso!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-camara-farao',
          text: 'Entrar no Santuário do Sol Eterno',
          description: 'Onde o arquivo de pergaminhos perdidos e o cetro de sabedoria repousam.',
          icon: '👑',
          targetSceneId: 'cena-final-piramide'
        }
      ],
      characterDialogue: {
        speaker: 'Zuri',
        avatar: '🔍',
        text: 'O alinhamento solar está impecável! Os antigos dominavam a ótica com perfeição genial!'
      }
    },
    'cena-2-balancas': {
      id: 'cena-2-balancas',
      chapterNumber: 2,
      title: 'A Câmara do Julgamento de Maat',
      text: 'Uma balança colossal sustentada por correntes de bronze domina o salão. Dois pratos esperam pela medida precisa de pedras de quartzo para equilibrar a passagem.',
      sceneryType: 'desert-ruins',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-pena-maat',
          name: 'Pena Dourada da Verdade',
          x: 40,
          y: 50,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Depositar a Pena no Prato',
          hint: 'Equilibre com delicadeza...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🪶',
          triggeredIcon: '⚖️',
          eventResult: {
            narrativeNote: '⚖️ A balança estabilizou num nível milimetricamente exato!',
          }
        },
        {
          id: 'elem-disco-solar',
          name: 'Disco de Ouro Solar',
          x: 70,
          y: 35,
          width: 22,
          height: 22,
          actionType: 'bell-ring',
          label: 'Ressoar o Gongo de Ouro',
          hint: 'Toque no centro do disco...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🟡',
          triggeredIcon: '🎵',
          eventResult: {
            narrativeNote: '🎵 Uma vibração profunda abriu a arcada monumental de granito!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-camara-farao-2',
          text: 'Avançar para o Santuário da Sabedoria Antiga',
          description: 'Acessar o grande tesouro cultural resguardado pelos séculos.',
          icon: '🏛️',
          targetSceneId: 'cena-final-piramide'
        }
      ],
      characterDialogue: {
        speaker: 'Tariq',
        avatar: '🧭',
        text: 'Você decifrou o princípio da harmonia! O caminho dos mestres está livre para nós!'
      }
    },
    'cena-final-piramide': {
      id: 'cena-final-piramide',
      chapterNumber: 3,
      title: 'O Legado Revelado dos Antigos',
      text: 'Você e seus companheiros de expedição descobriram a biblioteca de pergaminhos perdidos e o mapa estelar completo da civilização das areias. Seu nome agora faz parte dos anais dos grandes arqueólogos da história!',
      sceneryType: 'desert-ruins',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-arqueologo',
          name: 'Amuleto do Olho de Hórus Dourado',
          x: 45,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Receber Relíquia da Sabedoria',
          hint: 'Toque para receber seu selo arqueológico!',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🧿',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Conquista Notável! Você decifrou o Enigma Maior das Areias com destreza e inteligência!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-piramide',
          text: 'Retornar ao deserto e examinar novos enigmas',
          description: 'Comece novamente para investigar as outras câmaras da pirâmide.',
          icon: '🔄',
          targetSceneId: 'cena-1-entrada-piramide'
        }
      ],
      characterDialogue: {
        speaker: 'Tariq e Zuri',
        avatar: '🧭',
        text: 'Uma expedição magistral! A verdadeira riqueza é o saber que sobrevive ao tempo!'
      }
    }
  }
};
