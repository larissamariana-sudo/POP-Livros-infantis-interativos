import { Book } from '../../types';

export const story39InvisiblePicnic: Book = {
  id: 'misterio-piquenique-invisivel',
  title: 'O Mistério do Piquenique Invisível no Parque',
  subtitle: 'Frutas que flutuam no ar com mordidinhas barulhentas, farinha mágica e a turminha mais disfarçada',
  coverImage: 'invisible-picnic-cover',
  coverEmoji: '🧺🦎',
  ageGroup: '3-6',
  themeCategory: 'mystery',
  themeColor: 'from-amber-500 via-emerald-500 to-lime-600',
  tagline: 'Espalhe farinha de confeiteiro, escute as risadinhas no ar e descubra quem está comendo o lanchinho!',
  totalChapters: 3,
  initialSceneId: 'cena-1-toalha-xadrez',
  characters: [
    { name: 'Paulinho', role: 'Menino com boné virado para trás que adora pão de queijo', avatar: '👦' },
    { name: 'Aninha', role: 'Menina com trancinhas e cesta cheia de guloseimas do piquenique', avatar: '👧' },
    { name: 'Zeca e Juju', role: 'Gêmeos camaleõezinhos brincalhões mestres do disfarce', avatar: '🦎' }
  ],
  translations: {
    es: {
      title: 'El Misterio del Pícnic Invisible en el Parque',
      subtitle: 'Frutas que flotan en el aire, mordiscos traviesos y la pandilla más camuflada de la hierba',
      tagline: '¡Esparce harina dulce, escucha las risitas y descubre quién se come la merienda!'
    },
    en: {
      title: 'The Mystery of the Invisible Picnic in the Park',
      subtitle: 'Fruits floating mid-air with loud crunches, magic flour, and the cleverest disguised critters',
      tagline: 'Sprinkle confectioner sugar, listen for giggles, and discover who is nibbling the snacks!'
    },
    it: {
      title: 'Il Mistero del Pic-Nic Invisibile nel Parco',
      subtitle: 'Frutti che fluttuano a mezz\'aria, morsi rumorosi e i cuccioli più mimetizzati del prato',
      tagline: 'Spargi farina dolce, ascolta le risatine e scopri chi sta mangiando la merenda!'
    }
  },
  scenes: {
    'cena-1-toalha-xadrez': {
      id: 'cena-1-toalha-xadrez',
      chapterNumber: 1,
      title: 'A Maçã que Flutuou no Ar',
      text: 'Paulinho e Aninha estenderam a toalha xadrez vermelha e branca debaixo da sombra gostosa de um salgueiro. Mas assim que abriram a cesta de vime, algo muito esquisito aconteceu: uma maçãzinha vermelha subiu sozinha no ar, parou na altura do nariz de Paulinho e... "CROC!" Um pedaço sumiu num piscar de olhos, seguido por um sonzinho fofo de mastigação!',
      sceneryType: 'autumn-park',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-maca-mordida-ar',
          name: 'Maçã Flutuando com Marca de Dentinhos',
          x: 48,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'fruit-fall',
          label: 'Tocar a Maçã que Levita',
          hint: 'Alguém está segurando ela...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🍎',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: 'Ao tocar na maçã, sentiram dedinhos minúsculos e macios que fizeram cócegas na palma da mão!'
          }
        },
        {
          id: 'elem-garrafa-suco-mexendo',
          name: 'Garrafinha de Suco de Uva',
          x: 25,
          y: 60,
          width: 20,
          height: 22,
          actionType: 'water-drink',
          label: 'Olhar o Canudo se Mexendo Sozinho',
          hint: 'Gulp, gulp! O suco está descendo...',
          hasTriggered: false,
          sound: 'water',
          icon: '🧃',
          triggeredIcon: '🥤',
          eventResult: {
            narrativeNote: 'O canudinho fez "Slurp!" e uma bolha de uva estourou no ar com cheirinho doce!'
          }
        },
        {
          id: 'elem-cesta-vime-aberta',
          name: 'Cesta de Piquenique com Pães de Queijo',
          x: 75,
          y: 55,
          width: 22,
          height: 24,
          actionType: 'cookie-bite',
          label: 'Contar os Pãezinhos de Queijo',
          hint: 'Eram cinco... agora são quatro!',
          hasTriggered: false,
          sound: 'creature',
          icon: '🧺',
          triggeredIcon: '🧀',
          eventResult: {
            narrativeNote: 'Um farelinho de queijo caiu na toalha e desenhou um sorrisinho de ponta cabeça!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-jogar-farinha-doce',
          text: 'Salpicar farinha de confeiteiro no ar suavemente',
          description: 'A nuvem branca de pó vai grudar nos visitantes invisíveis!',
          icon: '✨',
          targetSceneId: 'cena-2-farol-farinha'
        },
        {
          id: 'escolha-fazer-cocegas-toalha',
          text: 'Passar uma peninha macia na toalha xadrez',
          description: 'Quem estiver escondido não vai aguentar e vai dar risada!',
          icon: '🪶',
          targetSceneId: 'cena-2-farol-farinha'
        }
      ]
    },
    'cena-2-farol-farinha': {
      id: 'cena-2-farol-farinha',
      chapterNumber: 2,
      title: 'A Nuvem Mágica de Farinha Colorida',
      text: 'Aninha pegou o potinho de açúcar de confeiteiro e soprou uma nuvem fina e perfumada sobre a toalha. Pluff! O pó branco flutuou no ar e grudou em duas silhuetas rechonchudinhas com rabos espirais enroladinhos e olhinhos redondos que giravam um para cada lado! "Ihihihi!", soltaram os serezinhos que não conseguiram mais segurar a gargalhada!',
      sceneryType: 'cherry-blossom',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-silhueta-camaleao',
          name: 'Silhueta Polvilhada de Branco',
          x: 45,
          y: 48,
          width: 24,
          height: 24,
          actionType: 'animal-pet',
          label: 'Fazer Carinho no Rabinho Enrolado',
          hint: 'Muda de cor instantaneamente!',
          hasTriggered: false,
          sound: 'creature',
          icon: '🦎',
          triggeredIcon: '🌈',
          eventResult: {
            narrativeNote: 'Puff! A cor branca da farinha se transformou num verde limão vibrante com bolinhas azuis!'
          }
        },
        {
          id: 'elem-chapeuzinho-festa',
          name: 'Mini Chapeuzinho de Aniversário',
          x: 25,
          y: 42,
          width: 18,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Ajustar o Elástico do Chapeuzinho',
          hint: 'Tem estampa de confetes dourados...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🥳',
          triggeredIcon: '🎉',
          eventResult: {
            narrativeNote: 'O camaleãozinho piscou o olho esquerdo e tirou uma língua comprida cor-de-rosa para pegar uma uva!'
          }
        },
        {
          id: 'elem-bolo-cenoura',
          name: 'Bolo de Cenoura com Calda de Chocolate',
          x: 75,
          y: 62,
          width: 22,
          height: 22,
          actionType: 'cookie-bite',
          label: 'Cortar uma Fatia Fofinha para os Novos Amigos',
          hint: 'Cheirinho tentador de chocolate...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🍰',
          triggeredIcon: '🍫',
          eventResult: {
            narrativeNote: 'Os pequenos bateram palminhas com as patinhas dianteiras de pura felicidade!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-convidar-festa',
          text: 'Convidar a dupla para se sentar à mesa do piquenique',
          description: 'Colocar guardanapinhos e dividir todas as delícias.',
          icon: '🪑',
          targetSceneId: 'cena-3-festa-camaleoes'
        },
        {
          id: 'escolha-brincar-esconde',
          text: 'Brincar de pique-esconde com troca de cores',
          description: 'Aprender como eles mudam de tom na casca das árvores.',
          icon: '🙈',
          targetSceneId: 'cena-3-festa-camaleoes'
        }
      ]
    },
    'cena-3-festa-camaleoes': {
      id: 'cena-3-festa-camaleoes',
      chapterNumber: 3,
      title: 'O Piquenique Arco-Íris Mais Feliz do Parque',
      text: 'O mistério foi solucionado com uma chuva de gargalhadas e carinho! Os visitantes invisíveis eram Zeca e Juju, filhotinhos de camaleão do bosque do parque que estavam comemorando seu primeiro mês de vida e queriam uma festa cheia de doces e amigos! Paulinho e Aninha dividiram todo o lanche, aprenderam a imitar o estalo de língua dos camaleões e ganharam o melhor piquenique de todos os tempos!',
      sceneryType: 'autumn-park',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-zeca-juju-brinde',
          name: 'Zeca e Juju Coloridos e Sorridentes',
          x: 50,
          y: 48,
          width: 26,
          height: 26,
          actionType: 'animal-pet',
          label: 'Fazer Cócegas na Papada dos Camaleõezinhos',
          hint: 'Eles ficam cor-de-rosa de amor...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🦎',
          triggeredIcon: '💖',
          eventResult: {
            narrativeNote: 'Zeca e Juju mudaram de cor juntos, formando as cores do arco-íris em seus corpinhos!'
          }
        },
        {
          id: 'elem-confetes-folhas',
          name: 'Chuva de Folhas Douradas e Confetes',
          x: 25,
          y: 55,
          width: 22,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Jogar Folhas Secas para o Alto',
          hint: 'Croc-croc! Dança no vento...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🍂',
          triggeredIcon: '🍁',
          eventResult: {
            narrativeNote: 'O vento espalhou o aroma das árvores e dos docinhos por todo o parque ensolarado!'
          }
        },
        {
          id: 'elem-foto-polaroid',
          name: 'Foto Instantânea da Turminha do Piquenique',
          x: 75,
          y: 58,
          width: 22,
          height: 22,
          actionType: 'secret-path',
          label: 'Guardar a Fotinho no Bolso do Casaco',
          hint: 'Uma lembrança inesquecível...',
          hasTriggered: false,
          sound: 'magic',
          icon: '📸',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: 'Na foto, os dois camaleõezinhos aparecem mandando beijinhos com as mãozinhas pro ar!'
          }
        }
      ],
      choices: []
    }
  }
};
