import { Book } from '../../types';

export const story38FutureMirror: Book = {
  id: 'enigma-espelho-do-futuro',
  title: 'O Enigma do Espelho que Reflete o Futuro',
  subtitle: 'Um vidro de prata no sótão do museu que mostra os próximos dez minutos e o mistério da grande inventora',
  coverImage: 'future-mirror-cover',
  coverEmoji: '🪞🔮',
  ageGroup: '7-10',
  themeCategory: 'mystery',
  themeColor: 'from-purple-900 via-indigo-800 to-sky-700',
  tagline: 'Limpe o pó do vidro de prata, decifre as equações gravadas na moldura e antecipe os acontecimentos!',
  totalChapters: 3,
  initialSceneId: 'cena-1-sotao-museu',
  characters: [
    { name: 'Theo', role: 'Jovem cientista mirim com bloco de anotações e prisma de luz', avatar: '🔬' },
    { name: 'Mirela', role: 'Observadora atenta com memória fotográfica para detalhes visuais', avatar: '👁️' },
    { name: 'Dra. Celeste', role: 'A pioneira da física ótica cujas invenções protegiam a cidade', avatar: '👵' }
  ],
  translations: {
    es: {
      title: 'El Enigma del Espejo que Refleja el Futuro',
      subtitle: 'Un cristal de plata en el museo que muestra diez minutos adelante y el misterio de la inventora',
      tagline: '¡Limpia el polvo del cristal, descifra las fórmulas y anticipa los hechos más sorprendentes!'
    },
    en: {
      title: 'The Riddle of the Mirror that Reflects the Future',
      subtitle: 'A silver looking glass showing ten minutes into tomorrow and the secret of the pioneering inventor',
      tagline: 'Dust off the silver glass, decode the brass frame runes, and peer into the minutes ahead!'
    },
    it: {
      title: 'L\'Enigma dello Specchio che Riflette il Futuro',
      subtitle: 'Un vetro d\'argento nel museo che mostra dieci minuti avanti e il mistero della scienziata',
      tagline: 'Pulisci la polvere dal vetro, decifra i simboli di bronzo e scopri cosa accadrà tra poco!'
    }
  },
  scenes: {
    'cena-1-sotao-museu': {
      id: 'cena-1-sotao-museu',
      chapterNumber: 1,
      title: 'O Reflexo Impossível',
      text: 'Durante uma visita ao sótão do museu de invenções, Theo e Mirela retiraram o pano de veludo sobre um grande espelho oval com moldura de prata e engrenagens solares. Ao olharem para o vidro, não viram seus próprios rostos naquele instante: viram a si mesmos dez minutos no futuro, segurando um guarda-chuva amarelo e rindo de um passarinho que pousava na janela!',
      sceneryType: 'shadow-castle',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-espelho-prata',
          name: 'Superfície de Prata Líquida do Espelho',
          x: 50,
          y: 42,
          width: 25,
          height: 28,
          actionType: 'star-sparkle',
          label: 'Tocar a Borda Polida do Espelho',
          hint: 'O vidro ondula como água fria...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🪞',
          triggeredIcon: '🔮',
          eventResult: {
            narrativeNote: 'O reflexo ondulou e mostrou um ponteiro de luz marcando uma contagem regressiva: 09:59... 09:58!'
          }
        },
        {
          id: 'elem-prisma-sotao',
          name: 'Prisma de Cristal na Moldura',
          x: 25,
          y: 50,
          width: 20,
          height: 22,
          actionType: 'light-glow',
          label: 'Girar o Prisma para Decompor a Luz',
          hint: 'Projeta um feixe de arco-íris...',
          hasTriggered: false,
          sound: 'bell',
          icon: '💎',
          triggeredIcon: '🌈',
          eventResult: {
            narrativeNote: 'O raio revelou inscrições escondidas na madeira da moldura: "Projetor Ótico Crono-Harmônico - 1924"!'
          }
        },
        {
          id: 'elem-guarda-chuva-canto',
          name: 'Guarda-Chuva Amarelo no Suporte',
          x: 75,
          y: 65,
          width: 20,
          height: 22,
          actionType: 'chest-open',
          label: 'Pegar o Guarda-Chuva Amarelo',
          hint: 'Exatamente igual ao do reflexo!',
          hasTriggered: false,
          sound: 'pop',
          icon: '☂️',
          triggeredIcon: '🟡',
          eventResult: {
            narrativeNote: 'Dentro da haste do guarda-chuva havia um rolo de microfilme com mapas de correntes de ar da cidade!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-examinar-engrenagens-tras',
          text: 'Olhar a parte de trás do espelho para ver o mecanismo',
          description: 'Descobrir se há lentes, espelhos côncavos ou tubos de vácuo ocultos.',
          icon: '⚙️',
          targetSceneId: 'cena-2-laboratorio-luz'
        },
        {
          id: 'escolha-esperar-previsao',
          text: 'Ficar diante do espelho e esperar a contagem de 10 minutos',
          description: 'Verificar se o passarinho realmente pousará na claraboia.',
          icon: '⏳',
          targetSceneId: 'cena-2-laboratorio-luz'
        }
      ]
    },
    'cena-2-laboratorio-luz': {
      id: 'cena-2-laboratorio-luz',
      chapterNumber: 2,
      title: 'O Enigma das Lentes Preditivas',
      text: 'Atrás do espelho, revelou-se um painel de relógios estelares, pêndulos de mercúrio e doze lentes convexas de quartzo polido. Mirela percebeu que o espelho não lia misticamente o destino: ele calculava trajetórias físicas com precisão matemática em tempo real! Ele lia a pressão atmosférica, os ventos e os passos das pessoas com sensores óticos sensíveis.',
      sceneryType: 'magic-academy',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-painel-calculo',
          name: 'Disco de Cálculo de Quartzo',
          x: 48,
          y: 42,
          width: 24,
          height: 24,
          actionType: 'bell-ring',
          label: 'Alinhar as Lentes com a Constelação de Órion',
          hint: 'Sincroniza os cálculos astronômicos...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🎛️',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: 'As lentes focalizaram uma imagem na parede: o telhado da casa ao lado onde um filhote de gato amarelo miava com medo da chuva!'
          }
        },
        {
          id: 'elem-tubo-barometro',
          name: 'Barômetro de Mercúrio com Escala Dourada',
          x: 25,
          y: 55,
          width: 20,
          height: 22,
          actionType: 'water-drink',
          label: 'Checar a Queda de Pressão do Ar',
          hint: 'Anuncia uma pancada rápida de chuva...',
          hasTriggered: false,
          sound: 'water',
          icon: '🌡️',
          triggeredIcon: '🌧️',
          eventResult: {
            narrativeNote: 'Theo calculou: em três minutos começará a chover forte sobre o telhado do museu!'
          }
        },
        {
          id: 'elem-diario-celeste',
          name: 'Diário de Pesquisa da Dra. Celeste',
          x: 75,
          y: 50,
          width: 22,
          height: 22,
          actionType: 'chest-open',
          label: 'Ler a Última Página do Diário',
          hint: 'Contém a dedicatória da cientista...',
          hasTriggered: false,
          sound: 'pop',
          icon: '📓',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '"Criei este espelho para que os futuros jovens de nossa cidade usem a ciência para proteger quem precisa antes que o perigo chegue!"'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-agir-rapido-resgate',
          text: 'Pegar o guarda-chuva e correr para resgatar o gatinho no telhado',
          description: 'Cumprir a previsão e evitar que o animalzinho se molhe na chuva.',
          icon: '🏃',
          targetSceneId: 'cena-3-o-futuro-em-nossas-maos'
        },
        {
          id: 'escolha-chamar-bombeiros-mirins',
          text: 'Acionar o sino de aviso meteorológico do museu',
          description: 'Avisar a todos no pátio sobre a tempestade iminente.',
          icon: '🔔',
          targetSceneId: 'cena-3-o-futuro-em-nossas-maos'
        }
      ]
    },
    'cena-3-o-futuro-em-nossas-maos': {
      id: 'cena-3-o-futuro-em-nossas-maos',
      chapterNumber: 3,
      title: 'A Profecia Realizada com Amor e Ciência',
      text: 'Exatamente quando os dez minutos se completaram, a chuva desabou sobre os paralelepípedos e um canário azul pousou na janela para se abrigar! Theo e Mirela abriram o guarda-chuva amarelo e resgataram o gatinho do beiral antes do primeiro trovão. A diretoria do museu inaugurou o espelho como o grande Memorial da Ciência Preventiva, e Theo e Mirela receberam medalhas de Guardiões da Invenção!',
      sceneryType: 'cherry-blossom',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-gatinho-resgatado',
          name: 'Gatinho Amarelo nos Braços de Mirela',
          x: 50,
          y: 50,
          width: 25,
          height: 25,
          actionType: 'animal-pet',
          label: 'Acariciar o Gatinho Enrolado na Toalha',
          hint: 'Ele ronrona em segurança...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐱',
          triggeredIcon: '💖',
          eventResult: {
            narrativeNote: 'O gatinho ganhou o nome de Cronos e foi adotado como mascote oficial do laboratório de ciências!'
          }
        },
        {
          id: 'elem-canario-azul-claraboia',
          name: 'Canário Azul Cantando no Beiral',
          x: 25,
          y: 40,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Oferecer Sementes de Girassol',
          hint: 'Canta uma melodia doce...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🐦',
          triggeredIcon: '🌻',
          eventResult: {
            narrativeNote: 'O passarinho comeu as sementinhas na palma da mão de Theo, exatamente como previsto pelo espelho!'
          }
        },
        {
          id: 'elem-trofeu-ciencia',
          name: 'Medalha de Honra ao Mérito Científico',
          x: 75,
          y: 55,
          width: 22,
          height: 22,
          actionType: 'bell-ring',
          label: 'Celebrar a Força da Inteligência e do Cuidado',
          hint: 'O futuro é construído no presente!',
          hasTriggered: false,
          sound: 'magic',
          icon: '🥇',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: 'Theo e Mirela aprenderam que a maior mágica do mundo é usar o conhecimento para fazer o bem!'
          }
        }
      ],
      choices: []
    }
  }
};
