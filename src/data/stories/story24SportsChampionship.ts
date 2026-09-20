import { Book } from '../../types';

export const story24SportsChampionship: Book = {
  id: 'torneio-campinho-verde',
  title: 'O Grande Torneio do Campinho Verde',
  subtitle: 'Chutes de trivela, corridas de revezamento e o verdadeiro significado de jogar limpo com respeito',
  coverImage: 'sports-tournament-cover',
  coverEmoji: '⚽🏃',
  ageGroup: '7-10',
  themeCategory: 'sports',
  themeColor: 'from-emerald-600 via-teal-500 to-sky-400',
  tagline: 'Amarre as chuteiras, passe a bola para o colega desmarcado, beba água fresca e celebre o espírito de equipe!',
  totalChapters: 3,
  initialSceneId: 'cena-1-aquecimento-campinho',
  characters: [
    { name: 'Gabriel', role: 'Camisa 10 veloz que aprendeu que passar a bola vale mais que fazer gol sozinho', avatar: '⚽' },
    { name: 'Samira', role: 'Goleira ágil de reflexos rápidos e luvas douradas', avatar: '🧤' },
    { name: 'Treinador Zé', role: 'Professor que ensina fair play, respeito e respiração', avatar: '🧑‍🏫' }
  ],
  translations: {
    es: {
      title: 'El Gran Torneo de la Cancha Verde',
      subtitle: 'Goles emocionantes, relevos de atletismo y el verdadero significado del juego limpio',
      tagline: '¡Ata tus zapatillas, comparte el balón, hidrátate bien y juega con respeto y alegría!'
    },
    en: {
      title: 'The Great Green Pitch Tournament',
      subtitle: 'Curling kicks, relay sprints, and discovering the true heart of fair play and teamwork',
      tagline: 'Lace up your boots, pass to the open teammate, drink fresh water, and celebrate team spirit!'
    },
    it: {
      title: 'Il Grande Torneo del Campetto Verde',
      subtitle: 'Tiri all\'incrocio, staffette veloci e il vero significato del gioco di squadra e del rispetto',
      tagline: 'Allaccia le scarpe da calcio, passa la palla al compagno smarcato e gioca con fair play!'
    }
  },
  scenes: {
    'cena-1-aquecimento-campinho': {
      id: 'cena-1-aquecimento-campinho',
      chapterNumber: 1,
      title: 'O Apito Inicial sob o Céu Azul',
      text: 'O gramado do campinho estava verde e bem cortado, com linhas brancas impecáveis. As bandeirinhas de escanteio balançavam ao vento. Os dois times davam corridinhas leves de aquecimento e alongamento muscular enquanto o Treinador Zé reunia a equipe em círculo.',
      sceneryType: 'sports-field',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-bola-futebol-oficial',
          name: 'Bola de Futebol Costurada à Mão',
          x: 48,
          y: 65,
          width: 22,
          height: 24,
          actionType: 'ball-kick',
          label: 'Dar Três Embaixadinhas',
          hint: 'Domínio de bola no peito do pé...',
          hasTriggered: false,
          sound: 'pop',
          icon: '⚽',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Um, dois, três! Gabriel controlou a bola com perfeição e passou rasteiro no pé de Samira!',
          }
        },
        {
          id: 'elem-apito-treinador',
          name: 'Apito Cromado do Juiz',
          x: 25,
          y: 40,
          width: 18,
          height: 20,
          actionType: 'bell-ring',
          label: 'Ouvir o Apito do Treinador',
          hint: 'Foco e atenção...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🧑‍🏫',
          triggeredIcon: '📢',
          eventResult: {
            narrativeNote: '📢 "Lembrem-se: o resultado no placar passa, mas o respeito pelo adversário e o jogo limpo duram para sempre!"',
          }
        },
        {
          id: 'elem-cantil-gelado',
          name: 'Caixa de Garrafinhas com Gelo',
          x: 75,
          y: 60,
          width: 20,
          height: 22,
          actionType: 'water-drink',
          label: 'Beber Água para Hidratar os Músculos',
          hint: 'Fundamental antes da partida...',
          hasTriggered: false,
          sound: 'water',
          icon: '🧊',
          triggeredIcon: '💧',
          eventResult: {
            narrativeNote: '💧 Músculos hidratados não têm câimbra! A equipe tomou água geladinha e sentiu as pernas prontas para correr!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-tática-toque-bola',
          text: 'Entrar em Campo com a Estratégia de Toques Rápidos e Coletivos',
          description: 'Valorizar a posse de bola e encontrar o colega livre na área.',
          icon: '🤝',
          targetSceneId: 'cena-2-jogada-coletiva'
        },
        {
          id: 'escolha-defesa-goleira',
          text: 'Confiar na Muralha de Samira e Jogar no Contra-Ataque Veloz',
          description: 'Defender com garra e puxar o contra-ataque pelas pontas com velocidade.',
          icon: '🧤',
          targetSceneId: 'cena-2-defesa-incrivel'
        }
      ],
      characterDialogue: {
        speaker: 'Treinador Zé',
        avatar: '🧑‍🏫',
        text: 'Ninguém vence sozinho em esporte nenhum! Se um colega cair, estendam a mão para levantá-lo imediatamente!'
      }
    },
    'cena-2-jogada-coletiva': {
      id: 'cena-2-jogada-coletiva',
      chapterNumber: 2,
      title: 'A Dança dos Passes Precisos',
      text: 'O jogo estava empatado em zero a zero nos minutos finais. Gabriel recebeu a bola no meio-campo, viu dois marcadores vindo em sua direção, mas em vez de tentar driblar os dois sozinho, ergueu a cabeça e avistou Léo entrando livre na pequena área.',
      sceneryType: 'sports-field',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-passe-magico',
          name: 'Passe de Trivela com Efeito',
          x: 45,
          y: 55,
          width: 22,
          height: 24,
          actionType: 'ball-kick',
          label: 'Lançar a Bola com Efeito',
          hint: 'Curva perfeita pelo alto...',
          hasTriggered: false,
          sound: 'pop',
          icon: '⚽',
          triggeredIcon: '🎯',
          eventResult: {
            narrativeNote: '🎯 A bola fez uma parábola milimétrica que passou por cima da zaga e caiu macia nos pés de Léo!',
          }
        },
        {
          id: 'elem-chute-rede',
          name: 'Finalização no Ângulo',
          x: 75,
          y: 40,
          width: 20,
          height: 20,
          actionType: 'fruit-fall',
          label: 'Chutar no Canto do Gol',
          hint: 'Gooooool!...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🥅',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: '⭐ Gooooool! Um golaço fruto da generosidade do passe de Gabriel!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-comemorar-respeito',
          text: 'Comemorar em Equipe e Cumprimentar o Time Adversário no Apito Final',
          description: 'Aplaudi-los pelo jogo difícil e disputado com honestidade.',
          icon: '🏆',
          targetSceneId: 'cena-final-esportes'
        }
      ],
      characterDialogue: {
        speaker: 'Gabriel',
        avatar: '⚽',
        text: 'A assistência é tão bonita quanto o gol! Esse gol é de todo mundo!'
      }
    },
    'cena-2-defesa-incrivel': {
      id: 'cena-2-defesa-incrivel',
      chapterNumber: 2,
      title: 'O Voo Espectacular de Samira',
      text: 'O atacante adversário soltou uma bomba rasteira em direção à trave esquerda. Samira flexionou os joelhos, leu a trajetória da bola e saltou no ar como uma pantera, espalmando para a linha de fundo.',
      sceneryType: 'sports-field',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-salto-goleira',
          name: 'Defesa de Mão Trocada',
          x: 48,
          y: 45,
          width: 24,
          height: 24,
          actionType: 'ball-kick',
          label: 'Espalmar para Escanteio',
          hint: 'Ponta dos dedos salvadores...',
          hasTriggered: false,
          sound: 'water',
          icon: '🧤',
          triggeredIcon: '🛡️',
          eventResult: {
            narrativeNote: '🛡️ Que defesa monumental! A torcida inteira de ambos os times aplaudiu de pé o reflexo de Samira!',
          }
        },
        {
          id: 'elem-abraco-zagueiro',
          name: 'Abraço dos Companheiros de Defesa',
          x: 25,
          y: 60,
          width: 20,
          height: 20,
          actionType: 'pet-hug',
          label: 'Agradecer a Goleira com um Toque de Mãos',
          hint: 'Valeu, Samira!...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🤝',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '❤️ "Você é um paredão, Samira! Obrigado por nos salvar!"',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-comemorar-respeito-2',
          text: 'Fazer a Roda de Amigos e Aplaudir Todos os Jogadores do Torneio',
          description: 'A verdadeira vitória é cultivar a amizade através do esporte.',
          icon: '🏅',
          targetSceneId: 'cena-final-esportes'
        }
      ],
      characterDialogue: {
        speaker: 'Samira',
        avatar: '🧤',
        text: 'Nossa defesa jogou junta! Eu só fiz a minha parte porque vocês correram até o último fôlego!'
      }
    },
    'cena-final-esportes': {
      id: 'cena-final-esportes',
      chapterNumber: 3,
      title: 'O Troféu do Jogo Limpo e da Amizade',
      text: 'No centro do gramado, capitães dos dois times ergueram juntos a Taça do Jogo Limpo. Não houve brigas nem ofensas: apenas abraços suados, fatias de laranja divididas e o sorriso de quem deu o seu melhor com dignidade.',
      sceneryType: 'sports-field',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-fairplay',
          name: 'Taça de Prata do Espírito Esportivo',
          x: 48,
          y: 50,
          width: 24,
          height: 24,
          actionType: 'ball-kick',
          label: 'Erguer a Taça Fair Play',
          hint: 'Toque para consagrar...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🏆',
          triggeredIcon: '🌟',
          eventResult: {
            narrativeNote: '🏆 Parabéns Campeão! Você demonstrou que o esporte de verdade educa o caráter e une os corações!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-torneio',
          text: 'Jogar outra partida emocionante no Campinho Verde!',
          description: 'Recomece para treinar novas jogadas e estratégias de equipe.',
          icon: '🔄',
          targetSceneId: 'cena-1-aquecimento-campinho'
        }
      ],
      characterDialogue: {
        speaker: 'Todos os Jogadores',
        avatar: '⚽',
        text: 'Um por todos e todos por um! Viva o esporte, a saúde e a amizade leal!'
      }
    }
  }
};
