import { Book } from '../../types';

export const story19CozyFarm: Book = {
  id: 'fazendinha-sol-nascente',
  title: 'A Fazendinha do Sol Nascente',
  subtitle: 'O canto do galo Carijó, ovelhinhas felpudas e a colheita de milho dourado no campo',
  coverImage: 'cozy-farm-cover',
  coverEmoji: '🐑',
  ageGroup: '3-6',
  themeCategory: 'nature',
  themeColor: 'from-amber-500 via-yellow-400 to-emerald-500',
  tagline: 'Acorde com o galo, dê feno para o cavalinho Trovão, colha ovos frescos e respire o ar puro do campo!',
  totalChapters: 3,
  initialSceneId: 'cena-1-amanhecer-fazenda',
  characters: [
    { name: 'Galo Carijó', role: 'O despertador mais pontual de toda a fazenda', avatar: '🐓' },
    { name: 'Laninha', role: 'Ovelhinha macia como nuvem que adora comer trevo', avatar: '🐑' },
    { name: 'Tio Tonho', role: 'Fazendeiro alegre de chapéu de palha e trator vermelho', avatar: '👨‍🌾' }
  ],
  translations: {
    es: {
      title: 'La Granja del Sol Naciente',
      subtitle: 'El canto del gallo, ovejitas tiernas y la cosecha de maíz dorado en el campo',
      tagline: '¡Despierta temprano, dale heno al caballito, junta huevos frescos y respira aire puro!'
    },
    en: {
      title: 'The Rising Sun Cozy Farm',
      subtitle: 'The rooster\'s dawn song, fluffy little sheep, and golden corn harvest in the fields',
      tagline: 'Wake up with the rooster, feed hay to the friendly pony, and breathe fresh country air!'
    },
    it: {
      title: 'La Fattoria del Sole Nascente',
      subtitle: 'Il canto del gallo, soffici pecorelle e il raccolto di mais dorato nei campi',
      tagline: 'Svegliati all\'alba, dai il fieno al cavallino e respira l\'aria fresca di campagna!'
    }
  },
  scenes: {
    'cena-1-amanhecer-fazenda': {
      id: 'cena-1-amanhecer-fazenda',
      chapterNumber: 1,
      title: 'O Despertar da Cerca Branca',
      text: 'O sol espreguiçou seus raios dourados por cima do celeiro vermelho. O Galo Carijó subiu na porteira de madeira e soltou seu cocoricó musical. Na colina verde, as vaquinhas malhadas e as ovelhas brancas começaram a pastar no orvalho da manhã.',
      sceneryType: 'cozy-farm',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-galo-carijo',
          name: 'Galo Carijó na Porteira',
          x: 22,
          y: 35,
          width: 22,
          height: 24,
          actionType: 'bell-ring',
          label: 'Fazer o Galo Cantar',
          hint: 'Cocoricó bem alto!...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🐓',
          triggeredIcon: '☀️',
          eventResult: {
            narrativeNote: '☀️ Co-co-ri-cóóó! O sol subiu brilhante e todos os animaizinhos acordaram alegres!',
          }
        },
        {
          id: 'elem-ovelha-laninha',
          name: 'Ovelhinha Laninha Felpuda',
          x: 75,
          y: 60,
          width: 22,
          height: 24,
          actionType: 'animal-pet',
          label: 'Fazer Cafuné na Laninha',
          hint: 'A lã mais macia da colina...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐑',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '❤️ Mééé! Laninha encostou sua carinha quentinha e deu um pulinho de felicidade no pasto!',
          }
        },
        {
          id: 'elem-espiga-milho',
          name: 'Milharal com Cabelinho de Ouro',
          x: 50,
          y: 50,
          width: 20,
          height: 22,
          actionType: 'fruit-fall',
          label: 'Descascar a Espiga Doce',
          hint: 'Puxe a palha verde...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🌽',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Grãos amarelos e brilhantes como pepitas de ouro! Milho perfeito para fazer bolo e pamonha!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-dar-feno-cavalinho',
          text: 'Levar Feno e Escovar a Crina do Cavalo Estrela',
          description: 'Aprender como cuidar com carinho dos animais de montaria.',
          icon: '🐴',
          targetSceneId: 'cena-2-estabulo-cavalo'
        },
        {
          id: 'escolha-horta-legumes',
          text: 'Ajudar Tio Tonho a Colher Cenouras e Abóboras na Horta',
          description: 'Puxar legumes fresquinhos da terra preta e fofa.',
          icon: '🥕',
          targetSceneId: 'cena-2-horta-fazenda'
        }
      ],
      characterDialogue: {
        speaker: 'Tio Tonho',
        avatar: '👨‍🌾',
        text: 'Bom dia, ajudante! Na fazenda, quem cuida da terra com carinho recebe comida gostosa e coração alegre!'
      }
    },
    'cena-2-estabulo-cavalo': {
      id: 'cena-2-estabulo-cavalo',
      chapterNumber: 2,
      title: 'O Trote Elegante de Estrela',
      text: 'O cavalo Estrela tinha pelos castanhos brilhantes e uma estrela branca desenhada na testa. Ao ver a escova e o feixe de feno fresquinho, ele relinchou de satisfação e bateu o casco suavemente no chão de serragem.',
      sceneryType: 'cozy-farm',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-escova-crina',
          name: 'Escova de Madeira Macia',
          x: 45,
          y: 45,
          width: 22,
          height: 22,
          actionType: 'pet-hug',
          label: 'Escovar a Crina de Estrela',
          hint: 'Movimentos suaves e carinhosos...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🐴',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ A crina de Estrela ficou sedosa e cheirosa como a brisa da serra!',
          }
        },
        {
          id: 'elem-maca-cavalo',
          name: 'Maçã Verde Suculenta',
          x: 70,
          y: 60,
          width: 18,
          height: 20,
          actionType: 'fruit-fall',
          label: 'Dar a Maçã na Palma da Mão',
          hint: 'Mãozinha aberta e plana...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🍏',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '❤️ Nhac nhac! Estrela comeu com delicadeza e deu um soprinho carinhoso no seu braço!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-merenda-celeiro',
          text: 'Ir para o Alpendre Comer Bolo de Fubá e Tomar Leite com Mel',
          description: 'Aproveitar os alimentos frescos produzidos com tanto carinho na fazenda.',
          icon: '🥧',
          targetSceneId: 'cena-final-fazenda'
        }
      ],
      characterDialogue: {
        speaker: 'Cavalo Estrela',
        avatar: '🐴',
        text: 'Iiiirrrriiii! Você tem as mãos mais carinhosas de todo o vale!'
      }
    },
    'cena-2-horta-fazenda': {
      id: 'cena-2-horta-fazenda',
      chapterNumber: 2,
      title: 'A Caça às Cenouras Gigantes',
      text: 'A horta cheirava a terra molhada e folhas de alecrim. Entre os canteiros, folhas rendadas indicavam onde as cenouras laranjas estavam escondidas embaixo da terra fértil.',
      sceneryType: 'cozy-farm',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-cenoura-terra',
          name: 'Cenoura Laranja Crocante',
          x: 40,
          y: 65,
          width: 20,
          height: 22,
          actionType: 'fruit-fall',
          label: 'Puxar a Cenoura da Terra',
          hint: 'Puxa... puxa... puxou!...',
          hasTriggered: false,
          sound: 'plop',
          icon: '🥕',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: '⭐ Plop! Uma cenoura enorme, doce e sem agrotóxicos, direto da horta para a salada!',
          }
        },
        {
          id: 'elem-joaninha-folha',
          name: 'Joaninha Vermelha com Pintinhas',
          x: 75,
          y: 50,
          width: 18,
          height: 18,
          actionType: 'creature-jump',
          label: 'Observar a Joaninha Protetora',
          hint: 'Ela protege as folhinhas...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🐞',
          triggeredIcon: '🌿',
          eventResult: {
            narrativeNote: '🌿 A joaninha é a melhor amiga do agricultor! Ela cuida das plantinhas com naturalidade!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-merenda-celeiro-2',
          text: 'Levar a Cesta de Legumes para a Cozinha da Fazenda',
          description: 'Ajudar a preparar uma sopa nutritiva e colorida para todos.',
          icon: '🍲',
          targetSceneId: 'cena-final-fazenda'
        }
      ],
      characterDialogue: {
        speaker: 'Tio Tonho',
        avatar: '👨‍🌾',
        text: 'Olha que maravilha de colheita! Comer alimentos naturais deixa nosso corpo forte e disposto para brincar!'
      }
    },
    'cena-final-fazenda': {
      id: 'cena-final-fazenda',
      chapterNumber: 3,
      title: 'O Pôr do Sol no Alpendre da Roça',
      text: 'Sentados no banco de madeira do alpendre, ouvindo os grilos começarem sua sinfonia noturna, a família saboreou fatias quentinhas de bolo de milho com queijo fresco. A vida no campo ensina a ter calma, gratidão e respeito pelas coisas simples da vida.',
      sceneryType: 'cozy-farm',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-chapeu-fazendeiro',
          name: 'Chapéu de Palha Honorário',
          x: 48,
          y: 45,
          width: 22,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Receber o Chapéu de Ouro',
          hint: 'Você é um fazendeiro mirim...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🤠',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Parabéns! Você vivenciou a paz da natureza e aprendeu de onde vem nossa comida!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-fazenda',
          text: 'Passar outro dia na Fazendinha!',
          description: 'Recomece para cuidar de outros animais e colher novas sementes.',
          icon: '🔄',
          targetSceneId: 'cena-1-amanhecer-fazenda'
        }
      ],
      characterDialogue: {
        speaker: 'Laninha & Estrela',
        avatar: '🐑',
        text: 'Mééé! Volte sempre para nos visitar! As portas da fazenda estão sempre abertas para você!'
      }
    }
  }
};
