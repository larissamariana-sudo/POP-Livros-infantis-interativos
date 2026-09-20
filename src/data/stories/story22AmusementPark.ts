import { Book } from '../../types';

export const story22AmusementPark: Book = {
  id: 'parque-diversoes-estrelas',
  title: 'O Parque de Diversões das Estrelas',
  subtitle: 'Luzes cintilantes, a grande roda-gigante no pôr do sol e o teste de coragem na montanha-russa suave',
  coverImage: 'amusement-park-cover',
  coverEmoji: '🎡',
  ageGroup: '7-10',
  themeCategory: 'adventure',
  themeColor: 'from-purple-600 via-pink-500 to-amber-400',
  tagline: 'Compre o bilhete dourado, gire na roda-gigante iluminada, vença o medo e divida algodão-doce!',
  totalChapters: 3,
  initialSceneId: 'cena-1-entrada-parque',
  characters: [
    { name: 'Caio', role: 'Menino aventureiro que sonha em ver a cidade do topo da roda-gigante', avatar: '👦' },
    { name: 'Lara', role: 'Irmã corajosa que sabe como respirar fundo para vencer o medo', avatar: '👧' },
    { name: 'Sr. Pipoca', role: 'Operador simpático do carrossel com apito brilhante', avatar: '🎩' }
  ],
  translations: {
    es: {
      title: 'El Parque de Diversiones de las Estrellas',
      subtitle: 'Luces brillantes, la gran noria al atardecer y la superación del miedo en los juegos',
      tagline: '¡Sube a la rueda de la fortuna, gira en el carrusel iluminado y comparte risas!'
    },
    en: {
      title: 'The Starry Amusement Park',
      subtitle: 'Sparkling carnival lights, the giant Ferris wheel at sunset, and conquering thrilling rides',
      tagline: 'Ride the illuminated Ferris wheel, spin on the vintage carousel, and share cotton candy!'
    },
    it: {
      title: 'Il Parco Divertimenti delle Stelle',
      subtitle: 'Luci sfavillanti, la grande ruota panoramica al tramonto e il coraggio sulle giostre',
      tagline: 'Sali sulla ruota panoramica, gira sulla giostra dei cavalli e divertiti con gli amici!'
    }
  },
  scenes: {
    'cena-1-entrada-parque': {
      id: 'cena-1-entrada-parque',
      chapterNumber: 1,
      title: 'A Cidade das Luzes que Piscam',
      text: 'Assim que o crepúsculo caiu, milhares de lâmpadas coloridas se acenderam simultaneamente ao som de músicas alegres de realejo. O cheiro de pipoca quentinha e maçã do amor pairava no ar. A Roda-Gigante girava majesticamente contra o céu cor-de-rosa.',
      sceneryType: 'amusement-park',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-roda-gigante-luz',
          name: 'Roda-Gigante Iluminada',
          x: 26,
          y: 40,
          width: 24,
          height: 24,
          actionType: 'light-glow',
          label: 'Acender as Lâmpadas de Néon',
          hint: 'Gira a roda mágica...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🎡',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Todas as 16 gôndolas se iluminaram com arco-íris de luz girando suavemente no céu noturno!',
          }
        },
        {
          id: 'elem-algodao-doce',
          name: 'Nuvem de Algodão-Doce Rosa',
          x: 75,
          y: 60,
          width: 20,
          height: 20,
          actionType: 'cookie-bite',
          label: 'Provar o Algodão-Doce',
          hint: 'Derrete na boca...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🍭',
          triggeredIcon: '😋',
          eventResult: {
            narrativeNote: '😋 Puf! Um pedacinho doce de nuvem açucarada derreteu na ponta da língua!',
          }
        },
        {
          id: 'elem-apito-sr-pipoca',
          name: 'Apito de Latão do Sr. Pipoca',
          x: 52,
          y: 65,
          width: 18,
          height: 20,
          actionType: 'bell-ring',
          label: 'Tocar o Apito de Embarque',
          hint: 'Atenção passageiros!...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🎩',
          triggeredIcon: '🎟️',
          eventResult: {
            narrativeNote: '🎟️ Trim! "Próxima parada: a gôndola mais alta com vista para o mar de estrelas!"',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-roda-gigante-topo',
          text: 'Embarcar na Roda-Gigante para Tocar as Estrelas',
          description: 'Subir lentamente até onde a brisa sopra fresca e avistar a cidade inteira.',
          icon: '🎡',
          targetSceneId: 'cena-2-topo-roda'
        },
        {
          id: 'escolha-carrinhos-bate-bate',
          text: 'Entrar na Pista dos Carrinhos Bate-Bate Luminosos',
          description: 'Pilotar carrinhos com buzinas engraçadas e desviar dos obstáculos com reflexos rápidos.',
          icon: '🚗',
          targetSceneId: 'cena-2-bate-bate'
        }
      ],
      characterDialogue: {
        speaker: 'Lara',
        avatar: '👧',
        text: 'Respira fundo, Caio! Sentir um friozinho na barriga antes da roda-gigante faz parte da aventura!'
      }
    },
    'cena-2-topo-roda': {
      id: 'cena-2-topo-roda',
      chapterNumber: 2,
      title: 'A Vista do Topo do Mundo',
      text: 'A gôndola parou exatamente no ponto mais alto. A cidade brilhava como um tapete de vaga-lumes lá embaixo, e a lua cheia parecia estar tão perto que dava vontade de esticar o braço para tocá-la.',
      sceneryType: 'amusement-park',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-estrela-cadente-parque',
          name: 'Estrela Cadente no Horizonte',
          x: 45,
          y: 20,
          width: 20,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Fazer um Pedido na Estrela',
          hint: 'Ela cruzou o céu...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🌠',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: '⭐ Caio desejou que ele e a irmã sempre guardassem a coragem de sonhar alto!',
          }
        },
        {
          id: 'elem-binoculo-gondola',
          name: 'Luneta da Gôndola',
          x: 70,
          y: 40,
          width: 18,
          height: 20,
          actionType: 'chest-open',
          label: 'Espiar o Farol do Mar',
          hint: 'Lá longe nas ondas...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🔭',
          triggeredIcon: '🌊',
          eventResult: {
            narrativeNote: '🌊 O farol do mar piscava em código de luz avisando que a noite estava tranquila e segura!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-tiro-ao-alvo-urso',
          text: 'Descer e Tentar Ganhar o Grande Urso de Pelúcia na Barraca',
          description: 'Derrubar as três latinhas com a bola de beisebol com pontaria precisa.',
          icon: '🧸',
          targetSceneId: 'cena-final-parque'
        }
      ],
      characterDialogue: {
        speaker: 'Caio',
        avatar: '👦',
        text: 'Lara, que coisa mais linda! Eu estava com medo à toa, daqui de cima tudo parece mágico!'
      }
    },
    'cena-2-bate-bate': {
      id: 'cena-2-bate-bate',
      chapterNumber: 2,
      title: 'A Dança dos Volantes Elétricos',
      text: 'Chispas azuis brilhavam na rede metálica do teto. Caio no volante amarelo e Lara no volante vermelho giravam em círculos dando risadas sonoras a cada toque macio de borracha.',
      sceneryType: 'amusement-park',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-buzina-carrinho',
          name: 'Buzina Engraçada do Bate-Bate',
          x: 40,
          y: 60,
          width: 20,
          height: 20,
          actionType: 'bell-ring',
          label: 'Apertar a Buzina Fon-Fon',
          hint: 'Fon-fon bem alto!...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🚗',
          triggeredIcon: '🔊',
          eventResult: {
            narrativeNote: '🔊 Fon-fon! Uma buzina que soou como um pato de borracha fez toda a pista gargalhar!',
          }
        },
        {
          id: 'elem-volante-giro',
          name: 'Volante com Manobra Rápida',
          x: 65,
          y: 65,
          width: 20,
          height: 20,
          actionType: 'ball-kick',
          label: 'Fazer um Giro de 360 Graus',
          hint: 'Gira tudo no volante...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🛞',
          triggeredIcon: '🌀',
          eventResult: {
            narrativeNote: '🌀 Manobra perfeita! O carrinho rodopiou suave sem bater na borda da pista!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-tiro-ao-alvo-urso-2',
          text: 'Ir à Barraca de Tiro aos Patinhos para Ganhar o Urso Gigante',
          description: 'Testar a mira e a paciência para presentear a irmã.',
          icon: '🎯',
          targetSceneId: 'cena-final-parque'
        }
      ],
      characterDialogue: {
        speaker: 'Lara & Caio',
        avatar: '👧👦',
        text: 'Cuidado com a curva fechada! Somos a dupla de pilotos mais rápida da feira!'
      }
    },
    'cena-final-parque': {
      id: 'cena-final-parque',
      chapterNumber: 3,
      title: 'O Troféu de Algodão e Coragem',
      text: 'Com três arremessos certeiros, Caio e Lara conquistaram o grande urso felpudo e o batizaram de Cometa. Caminhando em direção à saída de mãos dadas, com balões de gás hélio balançando no céu, eles sabiam que superar o medo é o maior prêmio de qualquer parque.',
      sceneryType: 'amusement-park',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-balao-coracao',
          name: 'Balão de Luz Prateado',
          x: 48,
          y: 40,
          width: 22,
          height: 24,
          actionType: 'rocket-launch',
          label: 'Soltar um Balão para as Estrelas',
          hint: 'Deixe voar alto...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🎈',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Parabéns! Você vivenciou uma noite inesquecível de alegria, superação e diversão compartilhada!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-parque',
          text: 'Entrar no Parque de Diversões outra vez!',
          description: 'Recomece para passear nos outros brinquedos e saborear pipoca.',
          icon: '🔄',
          targetSceneId: 'cena-1-entrada-parque'
        }
      ],
      characterDialogue: {
        speaker: 'Sr. Pipoca',
        avatar: '🎩',
        text: 'Voltem sempre, crianças corajosas! A magia do nosso parque vive no sorriso de vocês!'
      }
    }
  }
};
