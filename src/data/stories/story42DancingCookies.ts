import { Book } from '../../types';

export const story42DancingCookies: Book = {
  id: 'caso-biscoitos-dancantes',
  title: 'O Caso dos Biscoitos Dançantes da Confeitaria',
  subtitle: 'Estrelinhas crocantes que pulam da assadeira, cambalhotas na mesa de farinha e uma receita mágica',
  coverImage: 'dancing-cookies-cover',
  coverEmoji: '🍪🎶',
  ageGroup: '3-6',
  themeCategory: 'mystery',
  themeColor: 'from-amber-400 via-orange-400 to-rose-400',
  tagline: 'Siga os passos de açúcar na bancada, bata palmas no ritmo do sapateado e acalme os biscoitinhos!',
  totalChapters: 3,
  initialSceneId: 'cena-1-cozinha-da-vovo',
  characters: [
    { name: 'Tico', role: 'Menininho de avental branco com colher de pau na mão', avatar: '👦' },
    { name: 'Mel', role: 'Menininha com bochechas de farinha que adora provar confeitos', avatar: '👧' },
    { name: 'Vovó Zilda', role: 'Confeiteira sorridente e dona do livro de receitas secretas', avatar: '👵' }
  ],
  translations: {
    es: {
      title: 'El Caso de las Galletas Bailarinas de la Pastelería',
      subtitle: 'Estrellitas crujientes que saltan de la bandeja, volteretas de harina y una receta mágica',
      tagline: '¡Sigue los pasos de azúcar, aplaude con ritmo y calma a las galletitas cantarinas!'
    },
    en: {
      title: 'The Case of the Dancing Cookies at the Bakery',
      subtitle: 'Crispy stars hopping off baking sheets, floury somersaults, and an enchanted secret recipe',
      tagline: 'Follow sugar footprints across the kitchen counter, clap in rhythm, and quiet the giggly treats!'
    },
    it: {
      title: 'Il Caso dei Biscotti Ballerini della Pasticceria',
      subtitle: 'Stelline croccanti che saltano dalla teglia, capriole nella farina e una ricetta fatata',
      tagline: 'Segui i passettini di zucchero, batti le mani a ritmo e culla i biscottini saltatori!'
    }
  },
  scenes: {
    'cena-1-cozinha-da-vovo': {
      id: 'cena-1-cozinha-da-vovo',
      chapterNumber: 1,
      title: 'A Revoada de Estrelas Crocantes',
      text: 'O timer do forno antigo fez "TRIMMM!". Vovó Zilda calçou as luvas térmicas e tirou a assadeira fumegante cheia de biscoitinhos em formato de estrelas e luas. Mas quando colocou a bandeja sobre a mesa, inacreditável: os biscoitos deram um salto mortal, caíram em pé na bancada de mármore e começaram a dançar sapateado, fazendo "Tap-tap-plink!" sobre o pó de canela!',
      sceneryType: 'grandparents-house',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-biscoito-estrela-sapateador',
          name: 'Biscoitinho Estrela Sapateando',
          x: 48,
          y: 45,
          width: 22,
          height: 24,
          actionType: 'cookie-bite',
          label: 'Tocar a Pontinha do Biscoitinho',
          hint: 'Boing! Ele dá uma cambalhota...',
          hasTriggered: false,
          sound: 'pop',
          icon: '⭐',
          triggeredIcon: '🍪',
          eventResult: {
            narrativeNote: 'O biscoito deu um pulinho no ar, girou como pião e aterrissou em cima do pote de geleia rindo gostoso!'
          }
        },
        {
          id: 'elem-rolo-massa-dourada',
          name: 'Rolo de Madeira Polvilhado de Farinha',
          x: 25,
          y: 60,
          width: 22,
          height: 22,
          actionType: 'bell-ring',
          label: 'Bater o Rolo de Leve na Mesa',
          hint: 'Faz um ritmo de bateria alegre...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🥖',
          triggeredIcon: '🎵',
          eventResult: {
            narrativeNote: 'Os biscoitos responderam batendo os pezinhos de açúcar no mesmo compasso!'
          }
        },
        {
          id: 'elem-pote-confeitos-coloridos',
          name: 'Pote de Granulados de Arco-Íris',
          x: 75,
          y: 55,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Salpicar Granulados Coloridos',
          hint: 'Eles adoram chapéus de confete...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🍬',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: 'Cada biscoitinho pegou um confeito para usar como gravatinha borboleta!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-procurar-ingrediente-secreto',
          text: 'Investigar a prateleira de especiarias da Vovó Zilda',
          description: 'Descobrir qual vidrinho de tempero causou tanta energia dançante!',
          icon: '🧂',
          targetSceneId: 'cena-2-baunilha-encantada'
        },
        {
          id: 'escolha-montar-pista-danca',
          text: 'Estender um guardanapo de linho como pista de dança',
          description: 'Dar espaço para os biscoitos mostrarem suas coreografias!',
          icon: '💃',
          targetSceneId: 'cena-2-baunilha-encantada'
        }
      ]
    },
    'cena-2-baunilha-encantada': {
      id: 'cena-2-baunilha-encantada',
      chapterNumber: 2,
      title: 'O Mistério da Flor de Baunilha Musical',
      text: 'Vovó Zilda abriu o armário de temperos rindo muito: "Ai, minha nossa! Em vez de fermento comum de trigo, peguei o vidrinho com o extrato da Flor de Baunilha Musical da Colina Alegre!" Tico e Mel cheiraram o vidrinho: exalava um aroma tão doce que fazia o coração querer dançar na hora!',
      sceneryType: 'cozy-farm',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-frasco-baunilha',
          name: 'Frasquinho de Vidro com Flor Dourada',
          x: 48,
          y: 42,
          width: 22,
          height: 24,
          actionType: 'flower-bloom',
          label: 'Abrir a Rolha de Cortiça do Frasco',
          hint: 'Solta um perfume de sonho...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🧴',
          triggeredIcon: '🌼',
          eventResult: {
            narrativeNote: 'Do frasco saiu uma melodia suave que parecia o som de uma flauta de cana-de-açúcar!'
          }
        },
        {
          id: 'elem-cesta-pano-algodao',
          name: 'Cestinha Acolchoada com Pano Xadrez',
          x: 25,
          y: 58,
          width: 22,
          height: 22,
          actionType: 'animal-pet',
          label: 'Ajeitar o Ninho Macio na Cesta',
          hint: 'Onde os biscoitos podem descansar...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🧺',
          triggeredIcon: '🛏️',
          eventResult: {
            narrativeNote: 'A cestinha ficou tão fofa e convidativa quanto uma caminha quentinha de hotel!'
          }
        },
        {
          id: 'elem-copo-leite-fresco',
          name: 'Copo de Leite com Canela em Pó',
          x: 75,
          y: 50,
          width: 20,
          height: 22,
          actionType: 'water-drink',
          label: 'Mexer o Leite com Colherinha',
          hint: 'Faz plim-plim no vidro...',
          hasTriggered: false,
          sound: 'water',
          icon: '🥛',
          triggeredIcon: '🍯',
          eventResult: {
            narrativeNote: 'O aroma de canela fez os biscoitos pararem no ar e bocejarem de soninho!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-cantar-cantiga-roda',
          text: 'Cantar a cantiga da Colina Alegre batendo palminhas suaves',
          description: 'A música certa vai acalmar os biscoitinhos e deixá-los docemente adormecidos.',
          icon: '🎶',
          targetSceneId: 'cena-3-o-lanche-mais-doce'
        },
        {
          id: 'escolha-soprar-beijinho-carinho',
          text: 'Mandar um beijinho soprado para cada estrelinha',
          description: 'Mostrar carinho para as guloseimas mais travessas da cidade.',
          icon: '💋',
          targetSceneId: 'cena-3-o-lanche-mais-doce'
        }
      ]
    },
    'cena-3-o-lanche-mais-doce': {
      id: 'cena-3-o-lanche-mais-doce',
      chapterNumber: 3,
      title: 'A Cantiga da Soneca e o Chá Perfeito',
      text: 'Assim que Tico, Mel e Vovó Zilda começaram a cantar baixinho "Dorme, dorme estrelinha, que na cesta é seu lugar...", os biscoitos deram um último passinho tímido, bocejaram gotinhas de açúcar e deitaram confortavelmente na toalha felpuda da cesta! Estavam crocantes por fora, macios por dentro e com o sabor mais mágico e inesquecível da infância!',
      sceneryType: 'grandparents-house',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-degustacao-crocante',
          name: 'Biscoitinho Crocante e Perfeito',
          x: 50,
          y: 48,
          width: 25,
          height: 25,
          actionType: 'cookie-bite',
          label: 'Dar uma Mordidinha no Biscoito de Lua',
          hint: 'Croc! O gosto de baunilha explode na boca...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🌙',
          triggeredIcon: '😋',
          eventResult: {
            narrativeNote: 'Huuuuum! O biscoito derreteu na língua como nuvem de algodão-doce com canela!'
          }
        },
        {
          id: 'elem-vovo-zilda-sorrindo',
          name: 'Vovó Zilda com Livro de Receitas na Mão',
          x: 25,
          y: 55,
          width: 22,
          height: 22,
          actionType: 'animal-pet',
          label: 'Dar um Beijo Carinhoso na Bochecha da Vovó',
          hint: 'Ela tem cheirinho de amor...',
          hasTriggered: false,
          sound: 'creature',
          icon: '👵',
          triggeredIcon: '💖',
          eventResult: {
            narrativeNote: 'Vovó anotou no caderno: "Biscoitos Dançantes: receita para dias em que a casa precisa de risadas!"'
          }
        },
        {
          id: 'elem-caneca-chocolate-morno',
          name: 'Xícara de Chocolate Quente Cremoso',
          x: 75,
          y: 58,
          width: 22,
          height: 22,
          actionType: 'water-drink',
          label: 'Mergulhar a Pontinha da Estrela no Chocolate',
          hint: 'O casamento de sabores perfeito!',
          hasTriggered: false,
          sound: 'magic',
          icon: '☕',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: 'Com a barriguinha quentinha e o mistério resolvido, o dia terminou em pura felicidade e harmonia!'
          }
        }
      ],
      choices: []
    }
  }
};
