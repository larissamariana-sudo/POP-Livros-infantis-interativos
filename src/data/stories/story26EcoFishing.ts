import { Book } from '../../types';

export const story26EcoFishing: Book = {
  id: 'pescaria-ecologica-lago-trutas',
  title: 'A Pescaria Ecológica no Lago das Trutas Douradas',
  subtitle: 'A arte do pesque-e-solte, iscas artificiais de penas e o compromisso de manter os rios despoluídos',
  coverImage: 'eco-fishing-cover',
  coverEmoji: '🎣🐟',
  ageGroup: '7-10',
  themeCategory: 'nature',
  themeColor: 'from-sky-500 via-teal-600 to-emerald-700',
  tagline: 'Monte a isca de penas sem farpa, lance a linha no lago espelhado, sinta o peixe e devolva-o com carinho para a água!',
  totalChapters: 3,
  initialSceneId: 'cena-1-trapiche-lago',
  characters: [
    { name: 'Tiago', role: 'Menino que aprende a pescaria esportiva e o respeito à vida aquática', avatar: '🎣' },
    { name: 'Seu Vicente', role: 'Pescador experiente e guardião da limpeza das bacias hidrográficas', avatar: '👴' },
    { name: 'Truta Dourada', role: 'A rainha veloz das águas frias da montanha', avatar: '🐟' }
  ],
  translations: {
    es: {
      title: 'La Pesca Ecológica en el Lago de las Truchas Doradas',
      subtitle: 'El arte de captura y suelta, señuelos sin púas y el cuidado de los ríos limpios',
      tagline: '¡Lanza la caña con paciencia, admira los colores de la trucha y devuélvela con cuidado al agua!'
    },
    en: {
      title: 'Eco-Fishing at Golden Trout Lake',
      subtitle: 'The gentle art of catch-and-release, barbless flies, and protecting pristine mountain rivers',
      tagline: 'Cast your line across mirror waters, admire the wild trout, and release it gently back home!'
    },
    it: {
      title: 'La Pesca Ecologica nel Lago delle Trote Dorate',
      subtitle: 'La pesca no-kill, esche artificiali e il rispetto per i fiumi e gli ecosistemi acquatici',
      tagline: 'Lancia la canna da pesca con maestria, ammira la trota e rimettila in libertà con rispetto!'
    }
  },
  scenes: {
    'cena-1-trapiche-lago': {
      id: 'cena-1-trapiche-lago',
      chapterNumber: 1,
      title: 'A Névoa Matinal no Trapiche de Madeira',
      text: 'O Lago das Trutas Douradas parecia um espelho de prata refletindo as montanhas pontiagudas. Tiago e Seu Vicente sentaram na beira do trapiche de madeira com as varas de bambu. O silêncio era quebrado apenas pelo salto esporádico de peixinhos pegando mosquitinhos na superfície.',
      sceneryType: 'lake-fishing',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-anzol-sem-farpa',
          name: 'Isca Artificial de Penas sem Farpa',
          x: 48,
          y: 50,
          width: 22,
          height: 24,
          actionType: 'fruit-fall',
          label: 'Examinar o Anzol Ecológico',
          hint: 'Sem farpa não machuca o peixe...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🪶',
          triggeredIcon: '🛡️',
          eventResult: {
            narrativeNote: '🛡️ Anzol sem farpa! Ele permite soltar o peixe em segundos sem ferir sua boquinha!',
          }
        },
        {
          id: 'elem-agua-espelho',
          name: 'Superfície Espelhada do Lago',
          x: 25,
          y: 65,
          width: 22,
          height: 22,
          actionType: 'river-flow',
          label: 'Tocar a Água Geladinha da Montanha',
          hint: 'Ondinhas concêntricas...',
          hasTriggered: false,
          sound: 'water',
          icon: '💧',
          triggeredIcon: '🌊',
          eventResult: {
            narrativeNote: '🌊 Círculos perfeitos se espalharam pela água transparente onde se viam seixos coloridos no fundo!',
          }
        },
        {
          id: 'elem-libelula-azul',
          name: 'Libélula Azul Esmeralda',
          x: 75,
          y: 35,
          width: 18,
          height: 20,
          actionType: 'creature-jump',
          label: 'Observar o Pouso da Libélula',
          hint: 'Indicadora de água limpa...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🪰',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ As libélulas só vivem onde a água é puríssima! O lago é um ecossistema nota 10!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-arremesso-mosca',
          text: 'Fazer o Arremesso da Isca Fly na Zona dos Nenúfares',
          description: 'Balançar a linha no ar com ritmo suave até a isca pousar como uma pluma.',
          icon: '🎣',
          targetSceneId: 'cena-2-arremesso-preciso'
        },
        {
          id: 'escolha-limpeza-margem',
          text: 'Recolher Todo Lixo Deixado por Turistas na Margem Antes de Pescar',
          description: 'Garantir que nenhum plástico ou linha velha polua a casa dos peixes.',
          icon: '♻️',
          targetSceneId: 'cena-2-mutirao-limpeza'
        }
      ],
      characterDialogue: {
        speaker: 'Seu Vicente',
        avatar: '👴',
        text: 'Pescar de verdade não é tirar o peixe para comer por gula, mas sentir a força da natureza e respeitar a vida dele!'
      }
    },
    'cena-2-arremesso-preciso': {
      id: 'cena-2-arremesso-preciso',
      chapterNumber: 2,
      title: 'O Puxão Rápido da Rainha Dourada',
      text: 'A linha zuniu no ar com suavidade e a isca de penas tocou a água sem fazer barulho. De repente, uma sombra prateada com listras rosadas emergiu em um arco gracioso: a Truta Dourada havia mordido a isca!',
      sceneryType: 'lake-fishing',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-truta-salto',
          name: 'Salto Acrobático da Truta',
          x: 45,
          y: 55,
          width: 24,
          height: 24,
          actionType: 'creature-jump',
          label: 'Manter a Linha Tensionada com Delicadeza',
          hint: 'Não dê trancos fortes...',
          hasTriggered: false,
          sound: 'water',
          icon: '🐟',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: '⭐ Que peixe vigoroso e saudável! Suas escamas reluziam tons de arco-íris ao sol!',
          }
        },
        {
          id: 'elem-puça-borracha',
          name: 'Puçá com Rede de Borracha Suave',
          x: 70,
          y: 60,
          width: 20,
          height: 20,
          actionType: 'fruit-fall',
          label: 'Acolher a Truta no Puçá Aquático',
          hint: 'Mantenha dentro d\'água...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🥅',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '❤️ A rede de borracha não retira o muco protetor da pele da truta, garantindo sua saúde!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-soltura-emocionante',
          text: 'Fazer a Soltura Cuidadosa: Oxigenar e Vê-la Nadar Livre',
          description: 'Segurar suavemente o peixe contra a correnteza até ele recuperar o fôlego e partir.',
          icon: '🌊',
          targetSceneId: 'cena-final-pesca'
        }
      ],
      characterDialogue: {
        speaker: 'Tiago',
        avatar: '🎣',
        text: 'Olha que criatura magnífica! Seu Vicente, vamos soltá-la bem rápido para ela voltar para a família dela!'
      }
    },
    'cena-2-mutirao-limpeza': {
      id: 'cena-2-mutirao-limpeza',
      chapterNumber: 2,
      title: 'Os Faxineiros da Natureza',
      text: 'Tiago e Seu Vicente encheram duas sacolas com garrafas plásticas e tampinhas que encontraram na margem. Com a beira do lago limpa, até os patos selvagens voltaram a nadar tranquilos entre os juncos.',
      sceneryType: 'lake-fishing',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-sacola-reciclavel',
          name: 'Saco de Lixo Biodegradável',
          x: 35,
          y: 60,
          width: 20,
          height: 22,
          actionType: 'fruit-fall',
          label: 'Amarrar o Saco para Reciclagem',
          hint: 'Cada plástico retirado salva uma vida...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🗑️',
          triggeredIcon: '🌿',
          eventResult: {
            narrativeNote: '🌿 Margens despoluídas! A água do lago agradece o carinho e o respeito dos visitantes!',
          }
        },
        {
          id: 'elem-família-patos',
          name: 'Mamãe Pata com Filhotes',
          x: 68,
          y: 50,
          width: 22,
          height: 20,
          actionType: 'creature-jump',
          label: 'Ver os Patinhos Nadando',
          hint: 'Quá quá quá felizes...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🦆',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '❤️ Os patinhos mergulharam com segurança sem risco de prenderem as patinhas em linhas velhas!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-soltura-emocionante-2',
          text: 'Fazer o Lance Especial para Conhecer a Truta Dourada',
          description: 'A recompensa pelo cuidado com a natureza é um momento mágico de pesque-e-solte.',
          icon: '🐟',
          targetSceneId: 'cena-final-pesca'
        }
      ],
      characterDialogue: {
        speaker: 'Seu Vicente',
        avatar: '👴',
        text: 'Quem limpa o rio antes de pescar é um pescador de alma nobre!'
      }
    },
    'cena-final-pesca': {
      id: 'cena-final-pesca',
      chapterNumber: 3,
      title: 'A Despedida Livre nas Águas Fundas',
      text: 'Tiago colocou as mãos na água geladinha, segurando a truta pelo ventre com doçura. Sentindo a água passar pelas guelras, o peixe bateu a cauda com força prateada e mergulhou veloz rumo às profundezas misteriosas do lago. Ver a vida seguir livre é a maior emoção da pescaria ecológica.',
      sceneryType: 'lake-fishing',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-medalha-pescador-eco',
          name: 'Comenda do Guardião das Águas',
          x: 48,
          y: 50,
          width: 24,
          height: 24,
          actionType: 'river-flow',
          label: 'Receber a Medalha de Amigo dos Rios',
          hint: 'Toque para consagrar...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🏅',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Conquista Notável: Pescador Ecológico! Você pescou, admirou e soltou com respeito exemplar!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-pesca',
          text: 'Retornar ao trapiche para outra manhã serena no lago!',
          description: 'Recomece para aperfeiçoar sua técnica de arremesso e preservação.',
          icon: '🔄',
          targetSceneId: 'cena-1-trapiche-lago'
        }
      ],
      characterDialogue: {
        speaker: 'Tiago e Seu Vicente',
        avatar: '🎣👴',
        text: 'O peixe mais bonito é aquele que continua nadando livre no seu próprio lar!'
      }
    }
  }
};
