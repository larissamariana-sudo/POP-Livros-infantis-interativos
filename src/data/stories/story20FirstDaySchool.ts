import { Book } from '../../types';

export const story20FirstDaySchool: Book = {
  id: 'primeiro-dia-escola',
  title: 'O Primeiro Dia na Escola da Colina',
  subtitle: 'A mochila colorida, o abraço na entrada do portão e a alegria de fazer novos amigos de sala',
  coverImage: 'school-day-cover',
  coverEmoji: '🎒',
  ageGroup: '3-6',
  themeCategory: 'school',
  themeColor: 'from-amber-400 via-rose-400 to-indigo-500',
  tagline: 'Arrume o estojo de giz de cera, conheça a professora Marina e brinque no parquinho com os colegas!',
  totalChapters: 3,
  initialSceneId: 'cena-1-portao-escola',
  characters: [
    { name: 'Milo', role: 'Menino com mochila de dinossauro e um friozinho na barriga', avatar: '👦' },
    { name: 'Professora Marina', role: 'Educadora carinhosa que adora contar histórias e desenhar', avatar: '👩‍🏫' },
    { name: 'Aninha', role: 'Nova colega de carteira com caixa de lápis de cor de 24 cores', avatar: '👧' }
  ],
  translations: {
    es: {
      title: 'El Primer Día en la Escuela de la Colina',
      subtitle: 'La mochila de colores, la despedida en la puerta y la alegría de hacer nuevos amigos',
      tagline: '¡Prepara tus crayones, conoce a la maestra y juega en el patio con tus compañeros!'
    },
    en: {
      title: 'First Day at Hillside Elementary School',
      subtitle: 'The colorful backpack, a warm hug at the gate, and the fun of making new school friends',
      tagline: 'Pack your crayons, meet kind teacher Marina, and have fun playing in the schoolyard!'
    },
    it: {
      title: 'Il Primo Giorno alla Scuola della Collina',
      subtitle: 'Lo zainetto colorato, il saluto ai genitori e la meraviglia di nuovi compagni di banco',
      tagline: 'Prepara i pastelli a cera, incontra la maestra e divertiti nel cortile della scuola!'
    }
  },
  scenes: {
    'cena-1-portao-escola': {
      id: 'cena-1-portao-escola',
      chapterNumber: 1,
      title: 'A Mochila dos Sonhos e o Portão Amarelo',
      text: 'Milo segurava a mão do papai enquanto olhava o portão amarelo da Escola da Colina. As crianças riam no pátio, mas um friozinho tímido na barriga fazia Milo hesitar. O papai se abaixou, olhou em seus olhos e deu um beijinho de coragem na palma da mão.',
      sceneryType: 'school-classroom',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-beijo-coragem',
          name: 'Beijo Mágico de Coragem',
          x: 25,
          y: 50,
          width: 22,
          height: 24,
          actionType: 'pet-hug',
          label: 'Guardar o Beijo no Bolso',
          hint: 'Feche a mãozinha com carinho...',
          hasTriggered: false,
          sound: 'magic',
          icon: '❤️',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Um calorzinho bom encheu o peito de Milo! O amor dos pais sempre acompanha a gente em qualquer lugar!',
          }
        },
        {
          id: 'elem-mochila-dino',
          name: 'Mochila de Dinossauro Verde',
          x: 75,
          y: 60,
          width: 20,
          height: 22,
          actionType: 'chest-open',
          label: 'Abrir o Zíper da Mochila',
          hint: 'O que tem lá dentro?...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🎒',
          triggeredIcon: '🖍️',
          eventResult: {
            narrativeNote: '🖍️ Estojo cheio de lápis coloridos, maçã lavadinha e uma garrafinha d\'água brilhante!',
          }
        },
        {
          id: 'elem-sino-recreio',
          name: 'Sininho Musical da Escola',
          x: 50,
          y: 25,
          width: 20,
          height: 22,
          actionType: 'bell-ring',
          label: 'Tocar o Sino da Entrada',
          hint: 'Dim-dom alegre...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🔔',
          triggeredIcon: '🎵',
          eventResult: {
            narrativeNote: '🎵 Trim-trim-trim! A professora Marina abriu a porta com um largo sorriso de boas-vindas!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-roda-historias',
          text: 'Entrar na Sala e Sentar no Tapete da Roda de Histórias',
          description: 'Ouvir um conto sobre amizade e se apresentar para a turma.',
          icon: '📚',
          targetSceneId: 'cena-2-roda-sala'
        },
        {
          id: 'escolha-mesa-pintura',
          text: 'Ir Direto para a Mesa de Massinha e Pintura a Dedo',
          description: 'Criar esculturas de animais coloridos junto com Aninha.',
          icon: '🎨',
          targetSceneId: 'cena-2-mesa-massinha'
        }
      ],
      characterDialogue: {
        speaker: 'Professora Marina',
        avatar: '👩‍🏫',
        text: 'Bom dia, Milo! Nossa sala estava esperando justamente por você para ficar completa!'
      }
    },
    'cena-2-roda-sala': {
      id: 'cena-2-roda-sala',
      chapterNumber: 2,
      title: 'O Tapete das Histórias Encantadas',
      text: 'Sentados em almofadas redondas em formato de flor, cada colega falou o seu brinquedo favorito. Quando chegou a vez de Milo, ele mostrou seu dinossauro verde e todos acharam o máximo.',
      sceneryType: 'school-classroom',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-globo-terrestre',
          name: 'Globo do Mundo Giratório',
          x: 35,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'creature-jump',
          label: 'Girar o Globo Terrestre',
          hint: 'Gira gira o planeta...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🌍',
          triggeredIcon: '🌟',
          eventResult: {
            narrativeNote: '🌟 O mundo é tão grande e cheio de coisas fascinantes para aprender todos os dias!',
          }
        },
        {
          id: 'elem-livro-gigante',
          name: 'Grande Livro de Contos',
          x: 68,
          y: 55,
          width: 22,
          height: 22,
          actionType: 'chest-open',
          label: 'Abrir a Página das Fadas',
          hint: 'Veja a ilustração mágica...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '📖',
          triggeredIcon: '🧚',
          eventResult: {
            narrativeNote: '🧚 Uma fadinha de papel saltou das páginas de pop-up do livro!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-parquinho-recreio',
          text: 'Ir para o Pátio Brincar no Escorregador com os Novos Colegas',
          description: 'Aproveitar a hora do recreio para correr, rir e dividir a merenda.',
          icon: '🛝',
          targetSceneId: 'cena-final-escola'
        }
      ],
      characterDialogue: {
        speaker: 'Aninha',
        avatar: '👧',
        text: 'Milo, você quer sentar do meu lado no recreio? Minha mãe mandou uvas docinhas para a gente dividir!'
      }
    },
    'cena-2-mesa-massinha': {
      id: 'cena-2-mesa-massinha',
      chapterNumber: 2,
      title: 'A Fábrica de Dinossauros Coloridos',
      text: 'Milo e Aninha amassaram a massinha azul e amarela. Misturando as duas cores com as mãos, descobriram fascinados que nasceu uma linda massinha verde!',
      sceneryType: 'school-classroom',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-mistura-massinha',
          name: 'Massinha Mágica Bicolor',
          x: 45,
          y: 60,
          width: 22,
          height: 22,
          actionType: 'flower-bloom',
          label: 'Misturar Azul com Amarelo',
          hint: 'Aperta... aperta... vira verde!...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🟢',
          triggeredIcon: '🦕',
          eventResult: {
            narrativeNote: '🦕 Que legal! Eles moldaram um brontossauro verde com crista laranja!',
          }
        },
        {
          id: 'elem-caneca-lapis',
          name: 'Porta-Lápis Arco-Íris',
          x: 75,
          y: 50,
          width: 18,
          height: 20,
          actionType: 'fruit-fall',
          label: 'Escolher o Lápis Dourado',
          hint: 'Para desenhar um sol no papel...',
          hasTriggered: false,
          sound: 'pop',
          icon: '✏️',
          triggeredIcon: '☀️',
          eventResult: {
            narrativeNote: '☀️ Um sol reluzente com raios de amizade iluminou a folha de desenho de Milo!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-parquinho-recreio-2',
          text: 'Correr para o Recreio e Mostrar o Dinossauro para a Turma',
          description: 'A alegria de compartilhar o que criamos com o coração.',
          icon: '🎉',
          targetSceneId: 'cena-final-escola'
        }
      ],
      characterDialogue: {
        speaker: 'Milo',
        avatar: '👦',
        text: 'A escola é muito mais legal do que eu imaginava! Nem estou com saudades de ficar em casa sem fazer nada!'
      }
    },
    'cena-final-escola': {
      id: 'cena-final-escola',
      chapterNumber: 3,
      title: 'O Fim da Aula e o Orgulho no Peito',
      text: 'Na hora da saída, Milo correu ao encontro dos pais com os braços abertos e um desenho lindo nas mãos. O medo do primeiro dia tinha se transformado em entusiasmo puro: amanhã ele mal podia esperar para voltar!',
      sceneryType: 'school-classroom',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-estrelinha-ouro-aluno',
          name: 'Estrelinha Dourada da Professora',
          x: 48,
          y: 50,
          width: 22,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Receber a Estrela de Aluno Nota 10',
          hint: 'Coloque no caderno...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '⭐',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Parabéns! Você venceu a timidez e descobriu que a escola é um lugar de carinho e descobertas!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-escola',
          text: 'Viver o primeiro dia de aula de novo!',
          description: 'Recomece para desenhar e brincar com outros colegas.',
          icon: '🔄',
          targetSceneId: 'cena-1-portao-escola'
        }
      ],
      characterDialogue: {
        speaker: 'Milo e Pais',
        avatar: '👦',
        text: 'Papai, mamãe! Eu fiz amigos, desenhei um dinossauro e a professora é muito boazinha!'
      }
    }
  }
};
