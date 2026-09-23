import { Book } from '../../types';

export const story34BackwardClocks: Book = {
  id: 'enigma-relogios-para-tras',
  title: 'O Enigma dos Relógios que Andam para Trás',
  subtitle: 'Cem pêndulos mágicos, xícaras que flutuam no ar e o mistério da torre do tempo invertido',
  coverImage: 'backward-clocks-cover',
  coverEmoji: '🕰️✨',
  ageGroup: '7-10',
  themeCategory: 'mystery',
  themeColor: 'from-amber-700 via-amber-800 to-indigo-900',
  tagline: 'Decifre o código das engrenagens de latão, encontre a chave do pêndulo mestre e desvende o segredo das horas!',
  totalChapters: 3,
  initialSceneId: 'cena-1-sala-dos-pendulos',
  characters: [
    { name: 'Lucas', role: 'Jovem curioso apaixonado por engrenagens e códigos matemáticos', avatar: '⚙️' },
    { name: 'Sofia', role: 'Detetive mirim com caderno de pistas e lupa de joalheiro', avatar: '🔍' },
    { name: 'Mestre Horácio', role: 'Relojoeiro inventor que criou o lendário Cronômetro da Harmonia', avatar: '👴' }
  ],
  translations: {
    es: {
      title: 'El Enigma de los Relojes que Marchan Hacia Atrás',
      subtitle: 'Cien péndulos mágicos, tazas que flotan y el misterio de la torre del tiempo invertido',
      tagline: '¡Descifra el código de los engranajes, halla la llave maestra y viaja por el enigma del tiempo!'
    },
    en: {
      title: 'The Mystery of the Backward-Ticking Clocks',
      subtitle: 'A hundred magic pendulums, floating teacups, and the secret of the reverse-time tower',
      tagline: 'Crack the brass gear code, locate the master pendulum key, and unlock time\'s greatest secret!'
    },
    it: {
      title: 'L\'Enigma degli Orologi che Girano all\'Indietro',
      subtitle: 'Cento pendoli magici, tazze che fluttuano e il mistero della torre del tempo rovesciato',
      tagline: 'Decodifica gli ingranaggi di bronzo, trova la chiave maestra e svela il segreto dell\'orologiaio!'
    }
  },
  scenes: {
    'cena-1-sala-dos-pendulos': {
      id: 'cena-1-sala-dos-pendulos',
      chapterNumber: 1,
      title: 'O Fenômeno das Três da Tarde',
      text: 'O relógio de cuco da parede soou "Bong!" três vezes. Nesse exato instante, um arrepio correu pela sala: os ponteiros dos cem relógios da loja do Mestre Horácio começaram a girar no sentido anti-horário! Os jornais da mesa flutuaram três centímetros e a chaleira assobiou para dentro em vez de para fora. Lucas e Sofia sabiam que algo extraordinário acabara de despertar!',
      sceneryType: 'shadow-castle',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-relogio-cuco-invertido',
          name: 'Grande Relógio de Cuco com Ponteiros Dourados',
          x: 48,
          y: 40,
          width: 22,
          height: 25,
          actionType: 'bell-ring',
          label: 'Girar a Chave do Pêndulo Central',
          hint: 'Tic-tac no sentido contrário...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🕰️',
          triggeredIcon: '⏳',
          eventResult: {
            narrativeNote: 'Click! O cuco de madeira saiu da portinha com uma cartinha no bico contendo números romanos gravados em relevo!'
          }
        },
        {
          id: 'elem-xicara-flutuante',
          name: 'Xícara de Porcelana Flutuando',
          x: 75,
          y: 55,
          width: 18,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Alcançar a Xícara Levintante',
          hint: 'O chá desafia a gravidade...',
          hasTriggered: false,
          sound: 'magic',
          icon: '☕',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: 'Ao tocar na porcelana, o vapor desenhou no ar a palavra secreta: "S-Ó-T-Ã-O"!'
          }
        },
        {
          id: 'elem-livro-engrenagens',
          name: 'Manual Antigo de Horologia',
          x: 22,
          y: 65,
          width: 22,
          height: 22,
          actionType: 'chest-open',
          label: 'Folhear o Diário das Engrenagens',
          hint: 'Contém esquemas misteriosos...',
          hasTriggered: false,
          sound: 'pop',
          icon: '📖',
          triggeredIcon: '📜',
          eventResult: {
            narrativeNote: 'Lucas encontrou o desenho de uma engrenagem com três dentes de ametista escondida sob as tábuas do assoalho!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-subir-torre',
          text: 'Subir correndo pela escadaria espiral até a Torre do Sino',
          description: 'O som dos tique-taques mais fortes vem direto do topo do casarão.',
          icon: '🪜',
          targetSceneId: 'cena-2-mecanismo-secreto'
        },
        {
          id: 'escolha-investigar-lareira',
          text: 'Decodificar a fresta atrás do painel da lareira',
          description: 'Há um som de correntes de latão se movimentando na parede.',
          icon: '🧱',
          targetSceneId: 'cena-2-mecanismo-secreto'
        }
      ]
    },
    'cena-2-mecanismo-secreto': {
      id: 'cena-2-mecanismo-secreto',
      chapterNumber: 2,
      title: 'A Câmara das Engrenagens Acústicas',
      text: 'No topo da torre, iluminada por vitrais violeta, repousava uma máquina colossal de bronze com tubos de órgão, diapasões afinados e dezenas de rodas dentadas girando em sincronia perfeita. Não era magia sombria: era pura física musical! Cada nota afinada movia um pêndulo gravitacional que desacelerava o ar ao redor.',
      sceneryType: 'magic-academy',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-diapasao-mestre',
          name: 'Diapasão Gigante de Cristal',
          x: 50,
          y: 35,
          width: 24,
          height: 26,
          actionType: 'bell-ring',
          label: 'Tocar a Nota Dó Maior no Diapasão',
          hint: 'Emite uma onda pura e cristalina...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🔔',
          triggeredIcon: '🎵',
          eventResult: {
            narrativeNote: 'O som ressoou em harmonia com os pêndulos! Uma gaveta secreta se abriu revelando um carretel de música perfurado!'
          }
        },
        {
          id: 'elem-engrenagem-ametista',
          name: 'Roda Dentada de Pedra Roxa',
          x: 25,
          y: 50,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Encaixar a Engrenagem de Ametista',
          hint: 'Completa o circuito mecânico...',
          hasTriggered: false,
          sound: 'magic',
          icon: '⚙️',
          triggeredIcon: '💎',
          eventResult: {
            narrativeNote: 'Croc! Os ponteiros que giravam para trás começaram a desacelerar suavemente, criando uma chuva de fagulhas douradas!'
          }
        },
        {
          id: 'elem-tubo-acustico',
          name: 'Tubo de Vento da Torre',
          x: 75,
          y: 48,
          width: 20,
          height: 22,
          actionType: 'river-flow',
          label: 'Liberar a Válvula de Ar Suave',
          hint: 'Sopra uma brisa aquecida...',
          hasTriggered: false,
          sound: 'water',
          icon: '💨',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: 'A brisa espalhou o aroma doce de óleo de cedro e flores de laranjeira por todo o ambiente!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-alinhar-harmonia',
          text: 'Alinhar o ponteiro mestre com o sino do meio-dia',
          description: 'Ajustar o ciclo para reestabilizar o fluxo natural do tempo.',
          icon: '🎯',
          targetSceneId: 'cena-3-o-grande-revelacao'
        },
        {
          id: 'escolha-tocar-carretel',
          text: 'Acionar a valsa do carretel de música perfurado',
          description: 'Ouvir a canção original do Mestre Horácio.',
          icon: '🎶',
          targetSceneId: 'cena-3-o-grande-revelacao'
        }
      ]
    },
    'cena-3-o-grande-revelacao': {
      id: 'cena-3-o-grande-revelacao',
      chapterNumber: 3,
      title: 'A Memória do Relojoeiro e a Paz do Tempo',
      text: 'Uma surpresa maravilhosa iluminou a torre! O Mestre Horácio surgiu sorridente com uma salva de palmas. A máquina não era um perigo nem um feitiço: era sua maior invenção, criada para desacelerar o tempo durante 15 minutos ao dia para que as crianças pudessem brincar um pouquinho mais sem pressa de crescer! Com o enigma resolvido, todos ganharam pequenos medalhões de bronze que guardam um segundo extra de felicidade para os momentos difíceis!',
      sceneryType: 'cozy-farm',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-medalhao-tempo',
          name: 'Medalhão da Felicidade Eterna',
          x: 50,
          y: 50,
          width: 25,
          height: 25,
          actionType: 'star-sparkle',
          label: 'Segurar o Medalhão de Bronze',
          hint: 'Bate como um coração amigo...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🏅',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: 'O medalhão gravou os nomes de Sofia e Lucas na lista dos Grandes Guardiões do Tempo!'
          }
        },
        {
          id: 'elem-brinde-chas-estrelas',
          name: 'Chá de Ervas Aromáticas do Horácio',
          x: 25,
          y: 60,
          width: 22,
          height: 22,
          actionType: 'water-drink',
          label: 'Tomar o Chá Perfumado de Maçã',
          hint: 'Quentinho e reconfortante...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🍵',
          triggeredIcon: '🍯',
          eventResult: {
            narrativeNote: 'As xícaras pousaram suavemente na mesa com um tilintar melodioso e alegre!'
          }
        },
        {
          id: 'elem-diploma-detetive',
          name: 'Certificado de Detetive do Tempo',
          x: 75,
          y: 58,
          width: 22,
          height: 22,
          actionType: 'chest-open',
          label: 'Receber o Selo de Mestre Horológico',
          hint: 'Carimbado com cera dourada...',
          hasTriggered: false,
          sound: 'magic',
          icon: '📜',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: 'Mais um grande mistério solucionado com perspicácia, ciência e espírito de equipe!'
          }
        }
      ],
      choices: []
    }
  }
};
