import { Book } from '../../types';

export const story33GlowingFootprints: Book = {
  id: 'misterio-pegadas-fosforescentes',
  title: 'O Mistério das Pegadas Fosforescentes no Jardim',
  subtitle: 'Pistas brilhantes na grama úmida, uma lanterna de brinquedo e a criatura mais fofa da noite',
  coverImage: 'glowing-footprints-cover',
  coverEmoji: '🐾✨',
  ageGroup: '3-6',
  themeCategory: 'mystery',
  themeColor: 'from-emerald-700 via-teal-600 to-cyan-500',
  tagline: 'Siga a trilha que brilha no escuro, ilumine as pistas com a lanterna e descubra quem passeou pelo quintal!',
  totalChapters: 3,
  initialSceneId: 'cena-1-pegadas-gramado',
  characters: [
    { name: 'Dudu', role: 'Pequeno detetive de pijama com sua lanterna amarela', avatar: '🔦' },
    { name: 'Nina', role: 'Sua irmãzinha curiosa com uma lupa de brinquedo', avatar: '🔍' },
    { name: 'Faísca', role: 'Filhote de Vaga-Lume Gigante carinhoso que adora orvalho', avatar: '🌟' }
  ],
  translations: {
    es: {
      title: 'El Misterio de las Huellas Fosforescentes en el Jardín',
      subtitle: 'Pistas brillantes en el césped, una linterna de juguete y la criatura más dulce de la noche',
      tagline: '¡Sigue el sendero luminoso, examina las huellas y descubre la sorpresa nocturna!'
    },
    en: {
      title: 'The Mystery of the Glowing Footprints in the Garden',
      subtitle: 'Sparkling trails on damp grass, a toy flashlight, and the sweetest nighttime creature',
      tagline: 'Follow the glow-in-the-dark trail, inspect clues, and uncover who visited the yard!'
    },
    it: {
      title: 'Il Mistero delle Orme Fosforescenti nel Giardino',
      subtitle: 'Tracce luminose sull\'erba, una torcia giocattolo e la creatura più dolce della notte',
      tagline: 'Segui le orme brillanti, esplora gli indizi e scopri la sorpresa notturna!'
    }
  },
  scenes: {
    'cena-1-pegadas-gramado': {
      id: 'cena-1-pegadas-gramado',
      chapterNumber: 1,
      title: 'A Descoberta das Pegadas Luminosas',
      text: 'Pouco antes de dormir, Dudu e Nina olharam pela janela do quarto e viram algo inacreditável: pequenas patinhas verdes brilhando no gramado do jardim! As pegadas cintilavam como vaga-lumes e seguiam em direção aos canteiros de margaridas. Os pequenos detetives calçaram suas pantufas e foram investigar!',
      sceneryType: 'enchanted-forest',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-lanterna-amarela',
          name: 'Lanterna de Brinquedo do Dudu',
          x: 25,
          y: 72,
          width: 22,
          height: 22,
          actionType: 'light-glow',
          label: 'Acender o Foco da Lanterna',
          hint: 'Ilumina o caminho no escuro...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🔦',
          triggeredIcon: '💡',
          eventResult: {
            narrativeNote: 'A luz amarela revelou que as patinhas tinham quatro dedinhos redondos e deixavam um rastro de glitter perfumado!'
          }
        },
        {
          id: 'elem-pegada-verde-brilhante',
          name: 'Pegada Fosforescente na Grama',
          x: 52,
          y: 65,
          width: 20,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Examinar a Pegada com a Lupa',
          hint: 'Brilha com luz esmeralda...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🐾',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: 'Plop! A pegada soltou uma nuvenzinha de pó brilhante e um cheirinho gostoso de hortelã fresca!'
          }
        },
        {
          id: 'elem-flor-margarida-noturna',
          name: 'Margarida com Gotas de Luz',
          x: 78,
          y: 68,
          width: 20,
          height: 22,
          actionType: 'flower-bloom',
          label: 'Cheirar a Flor Curiosa',
          hint: 'Tem pétalas com orvalho doce...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🌼',
          triggeredIcon: '🌸',
          eventResult: {
            narrativeNote: 'Perto da flor, ouviram um barulhinho suave: "Fzz-fzz-fzz!" Alguém estava comendo néctar bem pertinho!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-seguir-macieira',
          text: 'Seguir a trilha até a Grande Macieira Velha',
          description: 'As pegadas sobem pelo gramado alto em direção aos galhos baixos.',
          icon: '🌳',
          targetSceneId: 'cena-2-macieira-misteriosa'
        },
        {
          id: 'escolha-espiar-fonte',
          text: 'Investigar os barulhos perto do regador de água',
          description: 'Talvez a criaturinha misteriosa esteja com sede!',
          icon: '💧',
          targetSceneId: 'cena-2-macieira-misteriosa'
        }
      ]
    },
    'cena-2-macieira-misteriosa': {
      id: 'cena-2-macieira-misteriosa',
      chapterNumber: 2,
      title: 'O Enigma do Tronco Oco',
      text: 'Debaixo da macieira, a trilha brilhante não terminava na terra: ela subia em espiral pelo tronco! No oco de um galho largo, havia um brilho quentinho pulsando no ritmo de um coração feliz. Nina apontou a lupa e Dudu aproximou a lanterna devagarinho para não assustar quem estava ali dentro.',
      sceneryType: 'starlit-river',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-brilho-tronco',
          name: 'Luz Dourada no Oco da Árvore',
          x: 48,
          y: 42,
          width: 24,
          height: 24,
          actionType: 'secret-path',
          label: 'Aproximar e Olhar no Oco',
          hint: 'Algo muito fofinho pisca lá dentro...',
          hasTriggered: false,
          sound: 'magic',
          icon: '✨',
          triggeredIcon: '🌟',
          eventResult: {
            narrativeNote: 'Duas anteninhas com bolinhas de luz se levantaram! Um par de olhinhos meigos olhou para as crianças!'
          }
        },
        {
          id: 'elem-maca-vermelha',
          name: 'Maçãzinha Vermelha no Galho',
          x: 75,
          y: 35,
          width: 18,
          height: 20,
          actionType: 'fruit-fall',
          label: 'Oferecer um Pedaço de Fruta',
          hint: 'Croc! Bichinhos adoram doce...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🍎',
          triggeredIcon: '🍏',
          eventResult: {
            narrativeNote: 'A criaturinha deu uma mordidinha gulosa e fez "Nhac-nhac!" com alegria!'
          }
        },
        {
          id: 'elem-folha-orvalho',
          name: 'Gota de Orvalho Reluzente',
          x: 22,
          y: 55,
          width: 20,
          height: 20,
          actionType: 'water-drink',
          label: 'Tocar a Gota de Água Fresca',
          hint: 'Pura como um diamante...',
          hasTriggered: false,
          sound: 'water',
          icon: '💧',
          triggeredIcon: '🫧',
          eventResult: {
            narrativeNote: 'A gota refletiu o arco-íris das asinhas transparentes do novo amiguinho!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-chamar-com-carinho',
          text: 'Fazer um afago suave com a pontinha dos dedos',
          description: 'Mostrar para a criaturinha que eles são amigos gentis.',
          icon: '🤗',
          targetSceneId: 'cena-3-revelacao-faisca'
        },
        {
          id: 'escolha-cantar-canco-ninar',
          text: 'Cantar uma canção suave de boa noite',
          description: 'A música vai fazer o pequeno visitante se sentir seguro.',
          icon: '🎶',
          targetSceneId: 'cena-3-revelacao-faisca'
        }
      ]
    },
    'cena-3-revelacao-faisca': {
      id: 'cena-3-revelacao-faisca',
      chapterNumber: 3,
      title: 'A Grande Surpresa: O Bebê Faísca!',
      text: 'O mistério foi solucionado com a maior das surpresas! Não era nenhum monstro da noite: era Faísca, um bebê Vaga-Lume Gigante do tamanho de um ursinho de pelúcia! Ele havia descido das nuvens de orvalho para aprender a piscar e fazer novos amigos. Dudu e Nina deram um abraço quentinho nele e prometeram visitá-lo toda noite de lua cheia!',
      sceneryType: 'enchanted-forest',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-abraço-faisca',
          name: 'Abraço Quentinho no Faísca',
          x: 50,
          y: 50,
          width: 26,
          height: 26,
          actionType: 'animal-pet',
          label: 'Abraçar o Bebê Vaga-Lume',
          hint: 'Ele brilha em tons dourados...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🌟',
          triggeredIcon: '💛',
          eventResult: {
            narrativeNote: 'Faísca ronronou como um gatinho elétrico e encheu o quintal de confetes de luz estelar!'
          }
        },
        {
          id: 'elem-danca-das-luzes',
          name: 'Dança das Luzinhas Noturnas',
          x: 25,
          y: 40,
          width: 22,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Dançar em Volta das Macieiras',
          hint: 'Gira gira no jardim...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '✨',
          triggeredIcon: '🎇',
          eventResult: {
            narrativeNote: 'O jardim inteiro se iluminou num show de estrelas cadentes inesquecível!'
          }
        },
        {
          id: 'elem-caneca-leite-lua',
          name: 'Xícara de Néctar da Amizade',
          x: 75,
          y: 65,
          width: 20,
          height: 22,
          actionType: 'cookie-bite',
          label: 'Brindar com Leite Morno e Canela',
          hint: 'Hora de dormir bem quentinho...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🥛',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: 'Com a barriguinha cheia e o coração feliz, os pequenos detetives dormiram o sono mais doce do mundo!'
          }
        }
      ],
      choices: []
    }
  }
};
