import { Book } from '../../types';

export const story1Dragon: Book = {
  id: 'dragao-rio-magico',
  title: 'O Dragão e o Rio Adormecido',
  subtitle: 'Uma fábula mágica sobre despertar o mundo ao seu redor',
  coverImage: 'dragon-cover',
  coverEmoji: '🐲',
  ageGroup: '3-6',
  themeColor: 'from-amber-400 via-emerald-500 to-teal-600',
  tagline: 'Toque no dragão, acorde o rio e colha frutas mágicas!',
  totalChapters: 4,
  initialSceneId: 'cena-1-clareira',
  characters: [
    { name: 'Pipoca', role: 'Dragãozinho risonho e fofo', avatar: '🐲' },
    { name: 'Lia', role: 'Aventureira curiosa', avatar: '👧' },
    { name: 'Pingo', role: 'Peixinho guardião do rio', avatar: '🐟' }
  ],
  scenes: {
    'cena-1-clareira': {
      id: 'cena-1-clareira',
      chapterNumber: 1,
      title: 'A Clareira Silenciosa',
      text: 'Era uma manhã calma na Floresta dos Sussurros. Perto de um rio completamente parado, o dragãozinho Pipoca tirava uma soneca gostosa. No alto do Grande Baobá, frutas douradas e suculentas reluziam sob a luz do sol. Tudo parecia imóvel... até que uma mãozinha curiosa decidiu tocar no cenário!',
      sceneryType: 'enchanted-forest',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-dragao',
          name: 'Dragão Pipoca',
          x: 65,
          y: 52,
          width: 26,
          height: 34,
          actionType: 'dragon-fire',
          label: 'Fazer cócegas no Dragão!',
          hint: 'Toque no dragãozinho para ver o que ele faz...',
          hasTriggered: false,
          sound: 'fire',
          icon: '🐲',
          triggeredIcon: '🔥',
          eventResult: {
            narrativeNote: '🔥 Pipoca deu um salto, espirrou de cócegas e cuspiu uma labareda de chamas douradas e faíscas brilhantes!',
          }
        },
        {
          id: 'elem-rio',
          name: 'Rio Parado',
          x: 10,
          y: 72,
          width: 80,
          height: 24,
          actionType: 'river-flow',
          label: 'Despertar o Rio!',
          hint: 'Toque nas águas paradas para fazê-las correr...',
          hasTriggered: false,
          sound: 'water',
          icon: '🌊',
          triggeredIcon: '🐟',
          eventResult: {
            narrativeNote: '🌊 Tchibum! O rio começou a borbulhar e correr ligeiro, cheio de ondinhas e peixes dourados saltitando!',
          }
        },
        {
          id: 'elem-fruta',
          name: 'Fruta Dourada na Árvore',
          x: 22,
          y: 25,
          width: 14,
          height: 18,
          actionType: 'fruit-fall',
          label: 'Balançar a Fruta!',
          hint: 'Toque na fruta madura pendurada no galho...',
          hasTriggered: false,
          sound: 'plop',
          icon: '🍎',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: '🍎 Ploque! A fruta dourada madurinha caiu suavemente sobre a grama macia!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-oferecer-fruta',
          text: 'Oferecer a fruta dourada a Pipoca',
          description: 'Aproximar-se do dragãozinho com o doce presente para se tornarem melhores amigos.',
          icon: '🍎',
          targetSceneId: 'cena-2-amigo-dragao'
        },
        {
          id: 'escolha-seguir-rio',
          text: 'Navegar pelas águas correntes do rio',
          description: 'Construir um pequeno barquinho de folhas mágicas e seguir o fluxo saltitante.',
          icon: '⛵',
          targetSceneId: 'cena-2-barco-rio'
        }
      ],
      characterDialogue: {
        speaker: 'Pipoca',
        avatar: '🐲',
        text: 'Nhaac... que soninho bom! Se você tocar em mim, talvez eu mostre meu espirro de fogo colorido!'
      }
    },
    'cena-2-amigo-dragao': {
      id: 'cena-2-amigo-dragao',
      chapterNumber: 2,
      title: 'Um Banquete de Chamas Douradas',
      text: 'Pipoca cheirou a fruta dourada e seus olhinhos brilharam de felicidade! Com um sopro delicado, ele assou a fruta até virar uma deliciosa tortinha caramelizada. "Você é o melhor amigo do mundo!", exclamou ele, batendo as asinhas coloridas.',
      sceneryType: 'enchanted-forest',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-flores-magicas',
          name: 'Jardim de Pétalas Dançantes',
          x: 30,
          y: 60,
          width: 20,
          height: 20,
          actionType: 'flower-bloom',
          label: 'Fazer as flores dançarem',
          hint: 'Toque nas flores para perfumar a clareira!',
          hasTriggered: false,
          sound: 'magic',
          icon: '🌸',
          triggeredIcon: '🌺',
          eventResult: {
            narrativeNote: '🌸 As flores abriram pétalas de arco-íris e soltaram um perfume doce de tutti-frutti!',
          }
        },
        {
          id: 'elem-cristal',
          name: 'Cristal Protetor',
          x: 75,
          y: 40,
          width: 15,
          height: 18,
          actionType: 'star-sparkle',
          label: 'Ativar Cristal',
          hint: 'Toque para liberar luzes protetoras!',
          hasTriggered: false,
          sound: 'magic',
          icon: '💎',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ O cristal cantou uma nota musical suave e iluminou o caminho!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-voar-costas',
          text: 'Voar nas costas de Pipoca até a Caverna das Estrelas',
          description: 'Subir aos céus e planar por cima das copas das árvores brilhantes.',
          icon: '✨',
          targetSceneId: 'cena-3-caverna-estrelas'
        },
        {
          id: 'escolha-dancar-bosque',
          text: 'Organizar uma grande festa musical com os animais do bosque',
          description: 'Chamar esquilos e pássaros para cantar e comer a tortinha mágica.',
          icon: '🎶',
          targetSceneId: 'cena-3-festa-bosque'
        }
      ],
      characterDialogue: {
        speaker: 'Pipoca',
        avatar: '🐲',
        text: 'Nham! Que delícia! Quer voar comigo por cima da floresta ou prefere fazer um piquenique festivo?'
      }
    },
    'cena-2-barco-rio': {
      id: 'cena-2-barco-rio',
      chapterNumber: 2,
      title: 'A Corrida pelas Águas Brilhantes',
      text: 'O barquinho deslizava veloz pelo rio que agora corria cantante! Pingo, o peixinho dourado, pulava de um lado para o outro fazendo malabarismos aquáticos. As margens do rio revelavam cogumelos gigantes que piscavam como lâmpadas festivas.',
      sceneryType: 'enchanted-forest',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-peixe-saltador',
          name: 'Pingo, o Peixe Veloz',
          x: 48,
          y: 65,
          width: 20,
          height: 20,
          actionType: 'creature-jump',
          label: 'Salto do Peixinho',
          hint: 'Toque no peixe para vê-lo saltar piruetas!',
          hasTriggered: false,
          sound: 'water',
          icon: '🐟',
          triggeredIcon: '🐬',
          eventResult: {
            narrativeNote: '🐬 Pingo deu um triplo salto mortal espirrando gotinhas brilhantes de água fresca!',
          }
        },
        {
          id: 'elem-bau',
          name: 'Baú Submerso',
          x: 20,
          y: 75,
          width: 18,
          height: 18,
          actionType: 'chest-open',
          label: 'Abrir Baú do Rio',
          hint: 'O que será que há dentro deste pequeno baú de conchas?',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '📦',
          triggeredIcon: '👑',
          eventResult: {
            narrativeNote: '💎 Você encontrou a Coroa de Gotas de Orvalho, o amuleto dos navegantes felizes!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-cascata',
          text: 'Descer o escorregador suave da cascata de arco-íris',
          description: 'Um tobogã natural de água suave e espumas coloridas.',
          icon: '🌈',
          targetSceneId: 'cena-3-festa-bosque'
        },
        {
          id: 'escolha-gruta',
          text: 'Entrar na gruta luminosa onde os cristais cantam',
          description: 'Um esconderijo secreto debaixo de uma cortina d\'água mágica.',
          icon: '🔮',
          targetSceneId: 'cena-3-caverna-estrelas'
        }
      ],
      characterDialogue: {
        speaker: 'Pingo',
        avatar: '🐟',
        text: 'Glub glub! O rio adora correr ligeiro! Segure firme no leme do seu barquinho!'
      }
    },
    'cena-3-caverna-estrelas': {
      id: 'cena-3-caverna-estrelas',
      chapterNumber: 3,
      title: 'O Santuário das Estrelas Vivas',
      text: 'O teto da caverna parecia o próprio céu da meia-noite, repleto de cristais que cintilavam como constelações. Pipoca pousou com cuidado e espirrou uma brisa morna que fez todas as estrelas de cristal tocarem uma sinfonia encantadora.',
      sceneryType: 'crystal-caves',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-arcoiris',
          name: 'Harpa de Luz',
          x: 50,
          y: 35,
          width: 25,
          height: 25,
          actionType: 'star-sparkle',
          label: 'Tocar a Harpa de Luz',
          hint: 'Toque para ouvir as estrelas cantarem!',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🌟',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '🎵 As constelações tocaram uma cantiga de ninar suave que encheu o coração de paz e alegria!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-finalizar-lenda',
          text: 'Celebrar com o Selo de Guardião da Floresta!',
          description: 'Você e Pipoca completaram a aventura e restauraram a magia de toda a terra.',
          icon: '👑',
          targetSceneId: 'cena-final'
        }
      ],
      characterDialogue: {
        speaker: 'Pipoca',
        avatar: '🐲',
        text: 'Nós conseguimos! Juntos acordamos o rio, fizemos novos amigos e iluminamos o mundo!'
      }
    },
    'cena-3-festa-bosque': {
      id: 'cena-3-festa-bosque',
      chapterNumber: 3,
      title: 'A Grande Festa dos Bichinhos',
      text: 'Todos os bichos da floresta se reuniram ao redor do Grande Baobá. Havia suco de amoras mágicas, bolo de sementes douradas e danças animadas sob a luz da lua.',
      sceneryType: 'enchanted-forest',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-cogumelo-tambor',
          name: 'Cogumelo Tamborim',
          x: 70,
          y: 65,
          width: 18,
          height: 18,
          actionType: 'creature-jump',
          label: 'Bater no Cogumelo',
          hint: 'Toque no cogumelo para fazer ritmo!',
          hasTriggered: false,
          sound: 'creature',
          icon: '🍄',
          triggeredIcon: '🥁',
          eventResult: {
            narrativeNote: '🥁 Tum-tum-pá! O cogumelo tocou um ritmo super dançante e todos começaram a pular de alegria!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-final-festa',
          text: 'Receber a Coroa dos Contadores de Histórias',
          description: 'Um prêmio especial para o leitor mais curioso e amigo de todos.',
          icon: '🏆',
          targetSceneId: 'cena-final'
        }
      ],
      characterDialogue: {
        speaker: 'Lia',
        avatar: '👧',
        text: 'Que aventura mágica! Cada toque seu trouxe mais vida para este lugar!'
      }
    },
    'cena-final': {
      id: 'cena-final',
      chapterNumber: 4,
      title: 'Fim da História: Viva a Sua Aventura!',
      text: 'Você completou a sua jornada no mundo do Pop! Graças à sua curiosidade de tocar nos elementos e fazer suas próprias escolhas, o dragão encontrou um grande amigo e as águas do rio voltaram a cantar felizes para sempre. Que tal ler de novo e escolher outro caminho?',
      sceneryType: 'enchanted-forest',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-estrela',
          name: 'Estrela Dourada do Leitor',
          x: 42,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Receber sua Estrela!',
          hint: 'Toque na sua estrela brilhante de comemoração!',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '⭐',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '⭐ PARABÉNS! Você ganhou o Selo de Super Leitor Interativo do Pop!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-reiniciar',
          text: 'Recomeçar e fazer escolhas diferentes!',
          description: 'Veja o que aconteceria se você escolhesse o outro caminho.',
          icon: '🔄',
          targetSceneId: 'cena-1-clareira'
        }
      ],
      characterDialogue: {
        speaker: 'Pipoca e Amigos',
        avatar: '🐲',
        text: 'Você foi incrível! O Pop! estará sempre aqui para brincar com você quando quiser!'
      }
    }
  }
};
