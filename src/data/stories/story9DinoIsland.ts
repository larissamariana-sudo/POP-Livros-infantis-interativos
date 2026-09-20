import { Book } from '../../types';

export const story9DinoIsland: Book = {
  id: 'dino-ilha-risonha',
  title: 'Teco e o Vale dos Dinossauros Risonhos',
  subtitle: 'Brincadeiras jurássicas com vulcão de confetes e trampolins de samambaia',
  coverImage: 'dino-cover',
  coverEmoji: '🦕',
  ageGroup: '3-6',
  themeColor: 'from-lime-500 via-emerald-600 to-green-700',
  tagline: 'Faça cócegas no triceratops, acione o vulcão de pétalas e aposte corrida com velociraptors!',
  totalChapters: 3,
  initialSceneId: 'cena-1-vale-jurassico',
  characters: [
    { name: 'Teco', role: 'Bebê triceratops brincalhão e comilão', avatar: '🦕' },
    { name: 'Pipo', role: 'Pterodáctilo correio das nuvens', avatar: '🦖' }
  ],
  scenes: {
    'cena-1-vale-jurassico': {
      id: 'cena-1-vale-jurassico',
      chapterNumber: 1,
      title: 'A Clareira das Frutas Gigantes',
      text: 'No meio de samambaias do tamanho de casas, o pequeno dinossauro Teco corria atrás de uma borboleta azul do tamanho de um prato. Ao fundo, um vulcão simpático soltava anéis de fumaça perfumada com cheirinho de abacaxi!',
      sceneryType: 'dino-island',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-teco-dino',
          name: 'Teco, o Triceratops',
          x: 45,
          y: 55,
          width: 26,
          height: 28,
          actionType: 'animal-pet',
          label: 'Fazer Cócegas no Rabinho de Teco',
          hint: 'Toque no dinossaurinho verde...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🦕',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '🦕 Roaaar-fofo! Teco deu uma cambalhota na grama macia e soltou uma risada bem gostosa!',
          }
        },
        {
          id: 'elem-vulcao-confete',
          name: 'Vulcão de Flores',
          x: 75,
          y: 30,
          width: 22,
          height: 25,
          actionType: 'dragon-fire',
          label: 'Acordar o Vulcão Amigo',
          hint: 'Toque na cratera do vulcãozinho...',
          hasTriggered: false,
          sound: 'fire',
          icon: '🌋',
          triggeredIcon: '🌸',
          eventResult: {
            narrativeNote: '🌸 PUMBA! O vulcão espirrou uma chuva linda de pétalas amarelas e confetes biodegradáveis!',
          }
        },
        {
          id: 'elem-ovo-dino',
          name: 'Ovo de Dino Malhado',
          x: 18,
          y: 65,
          width: 18,
          height: 20,
          actionType: 'cookie-bite',
          label: 'Tocar no Ovinho',
          hint: 'Veja o que vai sair da casquinha...',
          hasTriggered: false,
          sound: 'plop',
          icon: '🥚',
          triggeredIcon: '🐣',
          eventResult: {
            narrativeNote: '🐣 CRAC! Uma cabecinha de dinossaurinho bebê apareceu e deu um gritinho de olá!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-toboga-lama',
          text: 'Escorregar no Tobogã Suave de Lama Amarela',
          description: 'Um escorregador natural macio que termina num lago de bolhas mornas.',
          icon: '🛝',
          targetSceneId: 'cena-2-lago-lama'
        },
        {
          id: 'escolha-voo-pipo',
          text: 'Pegar Carona nas Asas Suaves de Pipo',
          description: 'Sobrevoar as copas das florestas primitivas e avistar o oceano.',
          icon: '🪽',
          targetSceneId: 'cena-2-voo-pterodactilo'
        }
      ],
      characterDialogue: {
        speaker: 'Teco',
        avatar: '🦕',
        text: 'Nhac nhac! Vamos brincar de pique-esconde com os braquiossauros do outro lado do rio?'
      }
    },
    'cena-2-lago-lama': {
      id: 'cena-2-lago-lama',
      chapterNumber: 2,
      title: 'A Banheira Quentinha dos Dinossauros',
      text: 'O lago de lama morna era como um spa pré-histórico super divertido. Teco fazia esculturas de lama com o focinho enquanto pequenos estegossauros batiam as patinhas na água.',
      sceneryType: 'dino-island',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-bolha-lama',
          name: 'Grande Bolha Borbulhante',
          x: 35,
          y: 60,
          width: 22,
          height: 22,
          actionType: 'fruit-fall',
          label: 'Estourar a Bolha de Lama',
          hint: 'Toque na grande bolha...',
          hasTriggered: false,
          sound: 'plop',
          icon: '🫧',
          triggeredIcon: '💦',
          eventResult: {
            narrativeNote: '💦 SPLASH! A bolha estourou e virou uma coroa de lama engraçada na cabeça do Teco!',
          }
        },
        {
          id: 'elem-melancia-gigante',
          name: 'Melancia Pré-Histórica',
          x: 72,
          y: 50,
          width: 22,
          height: 22,
          actionType: 'cookie-bite',
          label: 'Dividir a Melancia',
          hint: 'Toque para fatiar o lanchinho...',
          hasTriggered: false,
          sound: 'plop',
          icon: '🍉',
          triggeredIcon: '😋',
          eventResult: {
            narrativeNote: '🍉 Nham! Fatias doces e refrescantes para todos os amigos famintos!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-festa-dinos',
          text: 'Fazer o Grande Baile dos Rugidos Fofos',
          description: 'Aprender o passo de dança oficial dos dinossauros que sacode a terra com alegria.',
          icon: '🎉',
          targetSceneId: 'cena-final-dino'
        }
      ],
      characterDialogue: {
        speaker: 'Teco',
        avatar: '🦕',
        text: 'Essa melancia é a mais suculenta de todo o período jurássico!'
      }
    },
    'cena-2-voo-pterodactilo': {
      id: 'cena-2-voo-pterodactilo',
      chapterNumber: 2,
      title: 'Planando Sobre as Copas das Sequoias',
      text: 'O vento batia refrescante nas asas largas de Pipo. Do alto, podiam-se ver rebanhos de dinossauros gigantes bebendo água em riachos cristalinos que brilhavam como fios de prata.',
      sceneryType: 'sky-islands',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-nuvem-formato',
          name: 'Nuvem em Formato de T-Rex',
          x: 35,
          y: 30,
          width: 24,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Moldar a Nuvem',
          hint: 'Toque para brincar com a nuvem...',
          hasTriggered: false,
          sound: 'magic',
          icon: '☁️',
          triggeredIcon: '🦖',
          eventResult: {
            narrativeNote: '🦖 A nuvem deu um sorriso fofo e se transformou num arco-íris jurássico!',
          }
        },
        {
          id: 'elem-pipo-asa',
          name: 'Pipo, o Pterodáctilo',
          x: 70,
          y: 45,
          width: 22,
          height: 22,
          actionType: 'creature-jump',
          label: 'Acelerar o Voo',
          hint: 'Toque para fazer um looping suave...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🪽',
          triggeredIcon: '💨',
          eventResult: {
            narrativeNote: '💨 Pipo fez uma curva acrobática deliciosa com gritos de comemoração!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-festa-dinos-2',
          text: 'Aterrissar na Clareira da Grande Amizade Jurássica',
          description: 'Juntar-se aos outros dinossaurinhos para a entrega da condecoração.',
          icon: '🏆',
          targetSceneId: 'cena-final-dino'
        }
      ],
      characterDialogue: {
        speaker: 'Pipo',
        avatar: '🦖',
        text: 'Viu só como o mundo fica pequeno lá de cima? Voar com você foi sensacional!'
      }
    },
    'cena-final-dino': {
      id: 'cena-final-dino',
      chapterNumber: 3,
      title: 'Melhor Amigo dos Dinossauros',
      text: 'Você agora é o guardião mais querido do Vale Jurássico! Teco, Pipo e todos os dinossauros deram um rugido sincronizado e carinhoso que ecoou por todo o horizonte!',
      sceneryType: 'dino-island',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-dino',
          name: 'Dente de Ouro de Herbívoro',
          x: 45,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Receber Troféu Jurássico',
          hint: 'Toque para segurar sua medalha de pedra!',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🦴',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Parabéns! Você recebeu o Colar de Pegadas Douradas da Tribo dos Dinos!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-dino',
          text: 'Voltar à Ilha para novas brincadeiras!',
          description: 'Explore outras diversões pré-históricas com Teco.',
          icon: '🔄',
          targetSceneId: 'cena-1-vale-jurassico'
        }
      ],
      characterDialogue: {
        speaker: 'Teco e Amigos',
        avatar: '🦕',
        text: 'Roaaar de abraço! A terra dos dinos sempre estará de braços abertos para você!'
      }
    }
  }
};
