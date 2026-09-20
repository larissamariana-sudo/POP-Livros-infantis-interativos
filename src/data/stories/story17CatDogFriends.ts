import { Book } from '../../types';

export const story17CatDogFriends: Book = {
  id: 'amigo-gato-amigo-cachorro',
  title: 'Amigo Gato e Amigo Cachorro: A Dupla Inseparável',
  subtitle: 'Floco é um gato perspicaz e Trovão é um cão brincalhão: juntos eles resolvem o enigma do quintal',
  coverImage: 'cat-dog-cover',
  coverEmoji: '🐱🐶',
  ageGroup: '3-6',
  themeCategory: 'pets',
  themeColor: 'from-amber-400 via-orange-400 to-rose-400',
  tagline: 'O gato enxerga nas alturas, o cachorro fareja no chão: quem disse que gato e cachorro não podem ser melhores amigos?',
  totalChapters: 3,
  initialSceneId: 'cena-1-quintal-dupla',
  characters: [
    { name: 'Floco', role: 'Gato ágil e observador que adora subir em muros', avatar: '🐱' },
    { name: 'Trovão', role: 'Labrador amigável que cava pequenos mistérios', avatar: '🐶' },
    { name: 'Passarinho Tito', role: 'O cantor das manhãs que perdeu sua fitinha amarela', avatar: '🐦' }
  ],
  translations: {
    es: {
      title: 'Amigo Gato y Amigo Perro: La Pareja Inseparable',
      subtitle: 'Floco es un gato observador y Trovão un perro alegre: juntos resuelven el enigma del jardín',
      tagline: '¡El gato mira en las alturas, el perro olfatea en el suelo: son los mejores amigos del mundo!'
    },
    en: {
      title: 'Cat Friend & Dog Friend: The Inseparable Duo',
      subtitle: 'Floco is a clever cat and Trovão is a joyful dog: together they crack the garden mystery',
      tagline: 'The cat climbs up high, the dog sniffs on the ground: proving cats and dogs are best friends forever!'
    },
    it: {
      title: 'Amico Gatto e Amico Cane: La Coppia Inseparabile',
      subtitle: 'Floco è un gatto astuto e Trovão è un cane vivace: insieme risolvono il mistero del giardino',
      tagline: 'Il gatto scruta dall\'alto, il cane fiuta per terra: la più dolce amicizia di sempre!'
    }
  },
  scenes: {
    'cena-1-quintal-dupla': {
      id: 'cena-1-quintal-dupla',
      chapterNumber: 1,
      title: 'O Mistério da Fita Amarela',
      text: 'O quintal estava ensolarado e cheio de dentes-de-leão. Tito, o passarinho canário, estava triste: sua fita amarela da sorte havia voado com o vento e caído em algum lugar além do canteiro de hortênsias. Floco e Trovão deram um toque de patas e prometeram encontrá-la!',
      sceneryType: 'autumn-park',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-trovao-focinho',
          name: 'Trovão Farejando a Grama',
          x: 30,
          y: 60,
          width: 22,
          height: 24,
          actionType: 'animal-pet',
          label: 'Fazer Cafuné em Trovão',
          hint: 'O melhor farejador da rua...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐶',
          triggeredIcon: '👃',
          eventResult: {
            narrativeNote: '👃 Snif snif snif! Trovão encontrou rastros de pétalas que levavam em direção à macieira!',
          }
        },
        {
          id: 'elem-floco-salto',
          name: 'Floco no Topo do Muro',
          x: 75,
          y: 40,
          width: 20,
          height: 22,
          actionType: 'creature-jump',
          label: 'Ver Floco se Equilibrar',
          hint: 'Equilíbrio felino perfeito...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🐱',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Floco andou como um acrobata no muro de tijolos sem fazer barulho algum!',
          }
        },
        {
          id: 'elem-passarinho-tito',
          name: 'Tito Pousado no Galho',
          x: 50,
          y: 25,
          width: 18,
          height: 20,
          actionType: 'flower-bloom',
          label: 'Ouvir o Canto de Tito',
          hint: 'Piu piu piu...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🐦',
          triggeredIcon: '🎵',
          eventResult: {
            narrativeNote: '🎵 Piu-ti-roli! Uma canção alegre ecoou animando os dois detetives de quatro patas!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-floco-sobe-arvore',
          text: 'Floco Sobe na Macieira para Olhar de Cima',
          description: 'Aproveitar a agilidade do gato para avistar o topo dos arbustos.',
          icon: '🌳',
          targetSceneId: 'cena-2-topo-arvore'
        },
        {
          id: 'escolha-trovao-fareja-toca',
          text: 'Trovão Fareja Perto da Cerca de Bambu',
          description: 'Seguir o faro canino afiado pelo labirinto de folhas secas.',
          icon: '🌾',
          targetSceneId: 'cena-2-perto-cerca'
        }
      ],
      characterDialogue: {
        speaker: 'Floco & Trovão',
        avatar: '🐱🐶',
        text: 'Nós somos diferentes, mas é por isso que juntos ninguém consegue nos parar!'
      }
    },
    'cena-2-topo-arvore': {
      id: 'cena-2-topo-arvore',
      chapterNumber: 2,
      title: 'A Vista dos Céus de Floco',
      text: 'Lá de cima da macieira, Floco viu algo amarelo brilhando entre os galhos altos da cerca. O vento estava forte, mas ele miou forte para Trovão avisando a localização exata.',
      sceneryType: 'cherry-blossom',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-maca-vermelha',
          name: 'Maçã Vermelha Perfumada',
          x: 45,
          y: 40,
          width: 18,
          height: 20,
          actionType: 'fruit-fall',
          label: 'Tocar a Maçã Madura',
          hint: 'Plop na relva...',
          hasTriggered: false,
          sound: 'plop',
          icon: '🍎',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ A maçã caiu rolando mansamente até os pés de Trovão!',
          }
        },
        {
          id: 'elem-fita-amarela',
          name: 'Fita Amarela nos Ramos',
          x: 65,
          y: 35,
          width: 20,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Alcançar a Fita com a Pata',
          hint: 'Puxa devagarinho...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🎗️',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: '⭐ Floco desenganchou a fita com suas unhas cuidadosas sem rasgar o tecido!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-devolver-tito',
          text: 'Entregar a Fita para Tito e Comemorar com Tigela de Petiscos',
          description: 'Reunir os amigos para a festa do quintal.',
          icon: '🎉',
          targetSceneId: 'cena-final-dupla'
        }
      ],
      characterDialogue: {
        speaker: 'Floco',
        avatar: '🐱',
        text: 'Achei! Trovão, fica aí embaixo preparado para pegar a fita se o vento soprar!'
      }
    },
    'cena-2-perto-cerca': {
      id: 'cena-2-perto-cerca',
      chapterNumber: 2,
      title: 'O Resgate pelo Chão de Trovão',
      text: 'Trovão colocou as patinhas dianteiras no tronco de madeira e deu um latidinho alegre. Ele empurrou suavemente os galhos baixos com o focinho, abrindo passagem segura para Floco descer.',
      sceneryType: 'autumn-park',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-galho-cerca',
          name: 'Ramo com Folhas Douradas',
          x: 50,
          y: 55,
          width: 22,
          height: 22,
          actionType: 'fruit-fall',
          label: 'Afastar o Galho Seco',
          hint: 'Abra o caminho...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🍂',
          triggeredIcon: '🌿',
          eventResult: {
            narrativeNote: '🌿 Caminho livre! A fita amarela desceu suave flutuando até as costas de Trovão!',
          }
        },
        {
          id: 'elem-latido-alegre',
          name: 'Comemoração de Trovão',
          x: 28,
          y: 65,
          width: 20,
          height: 20,
          actionType: 'creature-jump',
          label: 'Dar Pulinho de Vitória',
          hint: 'Au au de alegria...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐕',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '❤️ Trovão deu um giro de felicidade e abanou o rabinho como uma hélice!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-devolver-tito-2',
          text: 'Fazer o Baile da Amizade com Tito, Floco e Trovão',
          description: 'Cantar junto com os passarinhos no gramado.',
          icon: '🎶',
          targetSceneId: 'cena-final-dupla'
        }
      ],
      characterDialogue: {
        speaker: 'Trovão',
        avatar: '🐶',
        text: 'Au! Nós conseguimos, Floco! Você tem olhos de falcão e eu tenho patas de herói!'
      }
    },
    'cena-final-dupla': {
      id: 'cena-final-dupla',
      chapterNumber: 3,
      title: 'A Dança da Amizade Sem Fronteiras',
      text: 'Tito amarrou a fita no peitinho e voou em círculos dourados cantando a canção mais bela do bairro. Floco e Trovão deitaram juntos encostados na grama, comendo biscoitinhos e dividindo o mesmo pratinho de carinho.',
      sceneryType: 'autumn-park',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-dupla',
          name: 'Taça da Parceria Gato e Cachorro',
          x: 48,
          y: 50,
          width: 22,
          height: 24,
          actionType: 'pet-hug',
          label: 'Selar o Pacto de Amigos',
          hint: 'Celebre a diversidade...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🌟',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Parabéns! Você aprendeu que as diferenças nos tornam mais fortes e amigos para sempre!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-dupla',
          text: 'Brincar novamente com Floco e Trovão!',
          description: 'Recomece para ver outras peripécias dessa duplinha amada.',
          icon: '🔄',
          targetSceneId: 'cena-1-quintal-dupla'
        }
      ],
      characterDialogue: {
        speaker: 'Tito',
        avatar: '🐦',
        text: 'Piu piu! Obrigado amigos! Vocês provaram que a união faz a magia acontecer!'
      }
    }
  }
};
