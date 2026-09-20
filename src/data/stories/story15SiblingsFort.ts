import { Book } from '../../types';

export const story15SiblingsFort: Book = {
  id: 'irmaos-forte-almofadas',
  title: 'Irmãos em Missão: O Reino do Forte de Almofadas',
  subtitle: 'Quando a chuva cai lá fora, dois irmãos transformam a sala em um castelo secreto impenetrável',
  coverImage: 'siblings-fort-cover',
  coverEmoji: '🏰',
  ageGroup: '3-6',
  themeCategory: 'family',
  themeColor: 'from-indigo-500 via-purple-500 to-pink-400',
  tagline: 'Junte lençóis coloridos, acenda as luzinhas pisca-pisca e aprenda a dividir brinquedos!',
  totalChapters: 3,
  initialSceneId: 'cena-1-construcao-forte',
  characters: [
    { name: 'Theo', role: 'Irmão mais velho, arquiteto de cadeiras e prendedores', avatar: '👦' },
    { name: 'Alice', role: 'Irmãzinha caçula, guardiã dos ursinhos de pelúcia', avatar: '👧' },
    { name: 'Urso Pompom', role: 'O cavaleiro oficial do castelo de mantas', avatar: '🧸' }
  ],
  translations: {
    es: {
      title: 'Hermanos en Misión: El Reino del Fuerte de Almohadas',
      subtitle: 'Cuando llueve afuera, dos hermanos convierten la sala en un castillo secreto',
      tagline: '¡Une sábanas de colores, enciende lucecitas y aprende a compartir con tu hermano!'
    },
    en: {
      title: 'Siblings on a Mission: The Pillow Fort Kingdom',
      subtitle: 'When rain pours outside, two siblings turn the living room into a fortress of wonder',
      tagline: 'Gather colorful blankets, turn on fairy lights, and discover the joy of sharing!'
    },
    it: {
      title: 'Fratelli in Missione: Il Regno del Forte di Cuscini',
      subtitle: 'Quando fuori piove, due fratellini trasformano il salotto in un castello segreto',
      tagline: 'Unisci lenzuola colorate, accendi lucine fiabesche e impara la magia della condivisione!'
    }
  },
  scenes: {
    'cena-1-construcao-forte': {
      id: 'cena-1-construcao-forte',
      chapterNumber: 1,
      title: 'A Engenharia dos Cobertores',
      text: 'Gotas de chuva batiam na janela com um ritmo suave. Theo e Alice decidiram que a tarde seria histórica: usando as quatro cadeiras da mesa, dois lençóis floridos e uma pilha de almofadas gigantes, eles começaram a erguer o maior forte da casa.',
      sceneryType: 'pillow-fort',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-luz-pisca',
          name: 'Cordão de Luzinhas Mágicas',
          x: 50,
          y: 30,
          width: 26,
          height: 22,
          actionType: 'light-glow',
          label: 'Acender Luzinhas do Forte',
          hint: 'Toque no interruptor brilhante...',
          hasTriggered: false,
          sound: 'magic',
          icon: '💡',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Brilho estelar! As luzinhas coloridas transformaram o teto do forte em uma constelação aconchegante!',
          }
        },
        {
          id: 'elem-prendedor-lencol',
          name: 'Prendedor de Madeira Firme',
          x: 25,
          y: 25,
          width: 18,
          height: 20,
          actionType: 'chest-open',
          label: 'Prender o Teto com Cuidado',
          hint: 'Não deixe o teto cair...',
          hasTriggered: false,
          sound: 'pop',
          icon: '📎',
          triggeredIcon: '🎪',
          eventResult: {
            narrativeNote: '🎪 Estalinho perfeito! O teto ficou esticadinho como uma tenda real de exploradores!',
          }
        },
        {
          id: 'elem-almofada-azul',
          name: 'Almofada Nuvem Fofinha',
          x: 72,
          y: 65,
          width: 20,
          height: 22,
          actionType: 'creature-jump',
          label: 'Ajeitar o Colchão de Almofadas',
          hint: 'Deixe tudo bem macio...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🛋️',
          triggeredIcon: '☁️',
          eventResult: {
            narrativeNote: '☁️ Fump! As almofadas ficaram tão macias quanto deitar sobre uma nuvem de algodão doce!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-teatrinho-sombras',
          text: 'Brincar de Teatro de Sombras com a Lanterna',
          description: 'Usar as mãos para projetar coelhinhos, dragões e borboletas no lençol.',
          icon: '🔦',
          targetSceneId: 'cena-2-teatro-sombras'
        },
        {
          id: 'escolha-piquenique-ursinhos',
          text: 'Fazer o Banquete dos Brinquedos no Forte',
          description: 'Servir pipoca imaginária e dividir os melhores lugares com os bonecos.',
          icon: '🧸',
          targetSceneId: 'cena-2-banquete-brinquedos'
        }
      ],
      characterDialogue: {
        speaker: 'Theo',
        avatar: '👦',
        text: 'Alice, segura essa ponta do lençol com o prendedor! Juntos a gente constrói qualquer castelo!'
      }
    },
    'cena-2-teatro-sombras': {
      id: 'cena-2-teatro-sombras',
      chapterNumber: 2,
      title: 'Sombras Vivas na Parede de Pano',
      text: 'Com a lanterna acesa no chão, as sombras ganharam vida. Theo fez as orelhas compridas de um lobo brincalhão, e Alice respondeu com as asas rápidas de uma fada encantada que ensinava o lobo a dançar.',
      sceneryType: 'pillow-fort',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-sombra-lobo',
          name: 'Sombra do Lobo Brincalhão',
          x: 40,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'creature-jump',
          label: 'Fazer o Lobo Uivar Baixinho',
          hint: 'Auuuuu com carinho...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐺',
          triggeredIcon: '🐾',
          eventResult: {
            narrativeNote: '🐾 Auuuu! O lobinho das sombras dançou no lençol fazendo cócegas em todo mundo!',
          }
        },
        {
          id: 'elem-lanterna-ouro',
          name: 'Foco da Lanterna Dourada',
          x: 65,
          y: 50,
          width: 20,
          height: 22,
          actionType: 'light-glow',
          label: 'Focar na Borboleta de Alice',
          hint: 'Ilumine as asinhas...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🔦',
          triggeredIcon: '🦋',
          eventResult: {
            narrativeNote: '🦋 A borboleta de sombra voou até o topo do teto do forte encantando os dois!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-dividir-chocolate',
          text: 'Chamar a Mamãe para Ver o Forte e Tomar Chocolate Quente',
          description: 'Apresentar a obra-prima dos irmãos e selar a paz eterna entre eles.',
          icon: '☕',
          targetSceneId: 'cena-final-forte'
        }
      ],
      characterDialogue: {
        speaker: 'Alice',
        avatar: '👧',
        text: 'Theo, você é o melhor irmão do universo! Nem lembro por que a gente brigou pelo brinquedo ontem!'
      }
    },
    'cena-2-banquete-brinquedos': {
      id: 'cena-2-banquete-brinquedos',
      chapterNumber: 2,
      title: 'A Mesa Redonda dos Bichinhos',
      text: 'Urso Pompom, o Dinossauro Dino e a Boneca Nina foram convidados de honra. Alice dividiu os pratinhos de brinquedo e Theo ensinou como cada cavaleiro devia esperar a sua vez com gentileza.',
      sceneryType: 'pillow-fort',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-urso-pompom',
          name: 'Urso Pompom Condecorado',
          x: 35,
          y: 60,
          width: 20,
          height: 22,
          actionType: 'pet-hug',
          label: 'Abraçar o Urso Pompom',
          hint: 'Ele foi o convidado mais educado...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🧸',
          triggeredIcon: '👑',
          eventResult: {
            narrativeNote: '👑 Urso Pompom foi coroado o Protetor Oficial do Forte dos Irmãos Unidos!',
          }
        },
        {
          id: 'elem-pratinho-pipoca',
          name: 'Tigela de Pipoca Estourada',
          x: 60,
          y: 62,
          width: 20,
          height: 22,
          actionType: 'cookie-bite',
          label: 'Comer Pipoca Crocante',
          hint: 'Hummm, salgadinha e quentinha...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🍿',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: '⭐ Nham nham! Dividir a pipoca meio a meio fez tudo ficar duas vezes mais gostoso!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-chocolate-final-2',
          text: 'Descansar Aconchegados nas Almofadas ouvindo a Chuva',
          description: 'Deitar lado a lado e conversar sobre as próximas aventuras.',
          icon: '🌧️',
          targetSceneId: 'cena-final-forte'
        }
      ],
      characterDialogue: {
        speaker: 'Theo e Alice',
        avatar: '👦',
        text: 'Nossos brinquedos são melhores quando a gente brinca junto!'
      }
    },
    'cena-final-forte': {
      id: 'cena-final-forte',
      chapterNumber: 3,
      title: 'Dois Irmãos, Um Coração',
      text: 'A chuva parou e um arco-íris tímido surgiu no céu lá fora. Mas dentro do forte, os irmãos nem queriam sair. A cumplicidade, a paciência e a alegria de dividirem o mesmo espaço tinham transformado um dia cinzento no dia mais brilhante do ano.',
      sceneryType: 'pillow-fort',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-irmaos',
          name: 'Medalha da Amizade Entre Irmãos',
          x: 48,
          y: 55,
          width: 22,
          height: 24,
          actionType: 'pet-hug',
          label: 'Tocar a Medalha de Ouro',
          hint: 'Celebre o amor fraterno...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🏅',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Conquista Desbloqueada: Irmãos Inseparáveis! Cooperação, risadas e carinho sempre vencem!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-forte',
          text: 'Construir o forte de novo com novas histórias!',
          description: 'Recomece para explorar novas brincadeiras de sombra e teatro.',
          icon: '🔄',
          targetSceneId: 'cena-1-construcao-forte'
        }
      ],
      characterDialogue: {
        speaker: 'Mamãe',
        avatar: '👩',
        text: 'Ver vocês dois cuidando um do outro é o maior tesouro desta casa!'
      }
    }
  }
};
