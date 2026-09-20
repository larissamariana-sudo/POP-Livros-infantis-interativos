import { Book } from '../../types';

export const story21HealthHydration: Book = {
  id: 'saude-agua-pomar-arcoiris',
  title: 'A Magia da Água Fresca e o Pomar Arco-Íris',
  subtitle: 'A jornada mágica pelo Vale da Vitalidade para entender como a água e as frutas dão superenergia',
  coverImage: 'health-hydration-cover',
  coverEmoji: '💧🍎',
  ageGroup: '7-10',
  themeCategory: 'sports',
  themeColor: 'from-cyan-500 via-emerald-400 to-amber-400',
  tagline: 'Beba água cristalina, coma as cinco cores do arco-íris e ative a barra de energia do seu corpo!',
  totalChapters: 3,
  initialSceneId: 'cena-1-vale-vitalidade',
  characters: [
    { name: 'Bernardo', role: 'Jovem atleta cansado precisando de energia e água', avatar: '🏃' },
    { name: 'Dra. Gota', role: 'Fadinha protetora das nascentes de água pura', avatar: '🧚‍♀️' },
    { name: 'Mestre Frutoso', role: 'Guardião botânico dos pomares coloridos', avatar: '🧙‍♂️' }
  ],
  translations: {
    es: {
      title: 'La Magia del Agua Fresca y el Huerto Arcoíris',
      subtitle: 'Un viaje mágico para descubrir cómo el agua y las frutas nos dan superenergía diaria',
      tagline: '¡Bebe agua pura, come los colores del arcoíris y llena tu cuerpo de vitalidad y salud!'
    },
    en: {
      title: 'The Magic of Fresh Water and the Rainbow Orchard',
      subtitle: 'A vibrant journey into the Valley of Vitality to learn why hydration and fruits give superpowers',
      tagline: 'Drink pure water, eat the five colors of the rainbow, and supercharge your body!'
    },
    it: {
      title: 'La Magia dell\'Acqua Fresca e il Frutteto Arcobaleno',
      subtitle: 'Un viaggio incantato per scoprire come acqua e frutta fresca donano super energia',
      tagline: 'Bevi acqua limpida, mangia i cinque colori della salute e ricarica le tue forze!'
    }
  },
  scenes: {
    'cena-1-vale-vitalidade': {
      id: 'cena-1-vale-vitalidade',
      chapterNumber: 1,
      title: 'A Bateria Vermelha de Bernardo',
      text: 'Bernardo adorava correr e jogar bola, mas naquela tarde sentia o corpo pesado, a boca seca e a cabeça latejando de leve. Ele havia passado horas no sol sem beber um único gole de água. Foi quando uma brisa perfumada trouxe Dra. Gota, flutuando sobre uma bolha transparente.',
      sceneryType: 'starlit-river',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-garrafa-cristal',
          name: 'Garrafa de Água Mineral',
          x: 48,
          y: 50,
          width: 22,
          height: 24,
          actionType: 'water-drink',
          label: 'Beber um Grande Gole d\'Água',
          hint: 'Gole refrescante...',
          hasTriggered: false,
          sound: 'water',
          icon: '💧',
          triggeredIcon: '⚡',
          eventResult: {
            narrativeNote: '⚡ Glub glub glub! O corpo de Bernardo absorveu a água fresca e sua barra de energia pulou para 80% instantaneamente!',
          }
        },
        {
          id: 'elem-laranja-vitamina',
          name: 'Laranja Doce de Vitamina C',
          x: 25,
          y: 40,
          width: 18,
          height: 20,
          actionType: 'fruit-fall',
          label: 'Descascar a Laranja Suculenta',
          hint: 'Cheirinho cítrico revitalizante...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🍊',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Vitamina C pura fortalecendo as defesas naturais do corpo contra gripes e cansaço!',
          }
        },
        {
          id: 'elem-brilho-gota',
          name: 'Asas de Orvalho da Dra. Gota',
          x: 75,
          y: 30,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Ouvir o Segredo da Hidratação',
          hint: 'Quanto devemos beber?...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🧚‍♀️',
          triggeredIcon: '💡',
          eventResult: {
            narrativeNote: '💡 "Mais de 70% do nosso cérebro e músculos são feitos de água! Sem água fresca, o motor do corpo não funciona!"',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-trilha-arco-iris',
          text: 'Entrar no Pomar Arco-Íris para Aprender o Prato Colorido',
          description: 'Descobrir por que precisamos de alimentos vermelhos, verdes, roxos, laranjas e brancos.',
          icon: '🌈',
          targetSceneId: 'cena-2-pomar-cores'
        },
        {
          id: 'escolha-fonte-juventude',
          text: 'Subir até a Nascente das Pedras Cristalinas',
          description: 'Aprender como a água da chuva é filtrada pelas montanhas até virar a água mais pura.',
          icon: '🏞️',
          targetSceneId: 'cena-2-nascente-montanha'
        }
      ],
      characterDialogue: {
        speaker: 'Dra. Gota',
        avatar: '🧚‍♀️',
        text: 'Nunca espere sentir muita sede para beber água, Bernardo! A sede é o alarme de emergência do corpo!'
      }
    },
    'cena-2-pomar-cores': {
      id: 'cena-2-pomar-cores',
      chapterNumber: 2,
      title: 'O Desafio das Cinco Cores',
      text: 'Mestre Frutoso esperava no meio de fileiras de macieiras, amoreiras e pés de kiwi. Ele entregou a Bernardo um prato transparente e um desafio: escolher pelo menos três cores de frutas para criar a poção da superagilidade.',
      sceneryType: 'cherry-blossom',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-mirtilo-roxo',
          name: 'Mirtilos e Amoras Roxas',
          x: 35,
          y: 45,
          width: 20,
          height: 20,
          actionType: 'fruit-fall',
          label: 'Colher Mirtilos Roxos',
          hint: 'Poder para a memória...',
          hasTriggered: false,
          sound: 'plop',
          icon: '🫐',
          triggeredIcon: '🧠',
          eventResult: {
            narrativeNote: '🧠 Alimentos roxos protegem a memória e ajudam a raciocinar mais rápido na escola!',
          }
        },
        {
          id: 'elem-maca-vermelha-coracao',
          name: 'Maçã Vermelha Rubi',
          x: 65,
          y: 45,
          width: 20,
          height: 20,
          actionType: 'fruit-fall',
          label: 'Colher a Maçã Vermelha',
          hint: 'Poder para o coração...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🍎',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '❤️ Alimentos vermelhos cuidam do coração e dão fôlego para correr sem cansar!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-campeonato-final',
          text: 'Voltar ao Campo Cheio de Força e Explicar aos Amigos',
          description: 'Compartilhar garrafas de água geladinha e frutas na hora do jogo.',
          icon: '🏆',
          targetSceneId: 'cena-final-vitalidade'
        }
      ],
      characterDialogue: {
        speaker: 'Mestre Frutoso',
        avatar: '🧙‍♂️',
        text: 'Quanto mais colorido o seu prato, mais poderoso você se torna por dentro e por fora!'
      }
    },
    'cena-2-nascente-montanha': {
      id: 'cena-2-nascente-montanha',
      chapterNumber: 2,
      title: 'A Água que Brota da Rocha',
      text: 'No alto da montanha, a água brotava fresca e transparente entre pedras musgosas. O ar ali era tão puro que enchia os pulmões de vitalidade.',
      sceneryType: 'crystal-caves',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-fonte-pura',
          name: 'Nascente Cristalina Natural',
          x: 45,
          y: 55,
          width: 22,
          height: 24,
          actionType: 'river-flow',
          label: 'Encher o Cantil Prateado',
          hint: 'Água mineral da fonte...',
          hasTriggered: false,
          sound: 'water',
          icon: '💧',
          triggeredIcon: '💎',
          eventResult: {
            narrativeNote: '💎 O cantil ficou cheio de água fresca, rica em cálcio, magnésio e potássio natural!',
          }
        },
        {
          id: 'elem-cristal-cura',
          name: 'Cristal de Sal Mineral',
          x: 72,
          y: 40,
          width: 18,
          height: 20,
          actionType: 'light-glow',
          label: 'Tocar o Cristal de Rocha',
          hint: 'Equilíbrio eletrolítico...',
          hasTriggered: false,
          sound: 'magic',
          icon: '✨',
          triggeredIcon: '🌟',
          eventResult: {
            narrativeNote: '🌟 Os sais minerais da água ajudam o coração a bater no compasso certo!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-campeonato-final-2',
          text: 'Levar o Cantil da Saúde para a Equipe de Corrida',
          description: 'Ajudar os amigos a nunca mais sofrerem com desidratação e câimbras.',
          icon: '🏃',
          targetSceneId: 'cena-final-vitalidade'
        }
      ],
      characterDialogue: {
        speaker: 'Bernardo',
        avatar: '🏃',
        text: 'Minha dor de cabeça sumiu por completo! Eu me sinto leve, rápido e invencível!'
      }
    },
    'cena-final-vitalidade': {
      id: 'cena-final-vitalidade',
      chapterNumber: 3,
      title: 'O Campeão da Saúde Integral',
      text: 'De volta à quadra, Bernardo e seus colegas colocaram garrafinhas com nomes nas arquibancadas e fizeram uma pausa a cada vinte minutos para hidratar o corpo. Com energia de sobra e mentes afiadas, todos se divertiram sem exaustão. A saúde é a melhor vitória de qualquer atleta!',
      sceneryType: 'sports-field',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-vitalidade',
          name: 'Troféu do Campeão Hidratado',
          x: 48,
          y: 50,
          width: 22,
          height: 24,
          actionType: 'ball-kick',
          label: 'Erguer o Troféu da Saúde',
          hint: 'Toque para comemorar...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🏆',
          triggeredIcon: '🌟',
          eventResult: {
            narrativeNote: '🏆 Conquista: Hábito de Ouro! Você aprendeu o segredo diário da hidratação e nutrição consciente!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-vitalidade',
          text: 'Repetir o treino com a Dra. Gota e Mestre Frutoso!',
          description: 'Recomece para fixar os hábitos saudáveis que transformarão seus dias.',
          icon: '🔄',
          targetSceneId: 'cena-1-vale-vitalidade'
        }
      ],
      characterDialogue: {
        speaker: 'Bernardo e Amigos',
        avatar: '🏃',
        text: 'Água fresca e frutas deliciosas todos os dias! Esse é o nosso lema de saúde!'
      }
    }
  }
};
