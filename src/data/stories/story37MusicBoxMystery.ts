import { Book } from '../../types';

export const story37MusicBoxMystery: Book = {
  id: 'caso-caixa-musica-secreta',
  title: 'O Caso da Caixa de Música que Toca Sozinha',
  subtitle: 'Notas musicais coloridas flutuando no ar, uma caixinha antiga e pequenos musicistas escondidos',
  coverImage: 'music-box-mystery-cover',
  coverEmoji: '🎵🐿️',
  ageGroup: '3-6',
  themeCategory: 'mystery',
  themeColor: 'from-rose-500 via-pink-500 to-amber-400',
  tagline: 'Siga a melodia mágica pelas prateleiras de livros, abra a tampa dourada e descubra quem toca a música!',
  totalChapters: 3,
  initialSceneId: 'cena-1-cantinho-leitura',
  characters: [
    { name: 'Belinha', role: 'Menininha alegre com laço de fita que adora dançar descalça', avatar: '👧' },
    { name: 'Léo', role: 'Irmãozinho que sabe assobiar e segue todos os sons misteriosos', avatar: '👦' },
    { name: 'Maestro Pinhão', role: 'Esquilo elegante com fraque e violino feito de casca de noz', avatar: '🐿️' }
  ],
  translations: {
    es: {
      title: 'El Caso de la Cajita de Música que Suena Sola',
      subtitle: 'Notas musicales de colores flotando, una cajita antigua y diminutos músicos secretos',
      tagline: '¡Sigue la melodía entre los libros, abre la tapa dorada y conoce a la orquesta secreta!'
    },
    en: {
      title: 'The Mystery of the Self-Playing Music Box',
      subtitle: 'Colorful musical notes floating in the air, an antique box, and tiny hidden musicians',
      tagline: 'Follow the melody through library shelves, open the golden lid, and meet the secret orchestra!'
    },
    it: {
      title: 'Il Mistero del Carillon che Suona da Solo',
      subtitle: 'Note musicali colorate a mezz\'aria, una scatola antica e minuscoli musicisti nascosti',
      tagline: 'Segui la melodia tra gli scaffali dei libri, apri il coperchio dorato e scopri chi suona!'
    }
  },
  scenes: {
    'cena-1-cantinho-leitura': {
      id: 'cena-1-cantinho-leitura',
      chapterNumber: 1,
      title: 'A Melodia das Cinco da Tarde',
      text: 'No cantinho das almofadas da biblioteca, todo dia às cinco da tarde, um som doce de "Plim-plim-dlim!" ecoa no ar. Belinha e Léo olharam para cima e viram pequenas notas musicais brilhantes, cor-de-rosa e douradas, flutuando como bolhas de sabão! O som vinha do topo da estante dos contos de fadas. Mas quem estaria dando corda na caixinha?',
      sceneryType: 'magic-academy',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-nota-musical-rosa',
          name: 'Nota Musical Brilhante Flutuante',
          x: 35,
          y: 42,
          width: 20,
          height: 22,
          actionType: 'bell-ring',
          label: 'Tocar a Notinha Flutuante',
          hint: 'Dlim-dlim! Faz um som gostoso...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🎵',
          triggeredIcon: '🎶',
          eventResult: {
            narrativeNote: 'A notinha soltou um perfume de baunilha e guiou as crianças em direção à escadinha de madeira!'
          }
        },
        {
          id: 'elem-almofada-gatinho',
          name: 'Almofada Fofinha no Chão',
          x: 20,
          y: 72,
          width: 22,
          height: 22,
          actionType: 'animal-pet',
          label: 'Pular na Almofada Macia',
          hint: 'Boing! Para alcançar mais alto...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🧸',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: 'Boing! Belinha pulou e conseguiu enxergar o brilho da caixinha no alto!'
          }
        },
        {
          id: 'elem-livro-aberto-estante',
          name: 'Livro Ilustrado de Música',
          x: 75,
          y: 55,
          width: 22,
          height: 24,
          actionType: 'chest-open',
          label: 'Abrir a Página com Desenhos de Instrumentos',
          hint: 'Mostra pequenos violinos de brinquedo...',
          hasTriggered: false,
          sound: 'magic',
          icon: '📖',
          triggeredIcon: '🎻',
          eventResult: {
            narrativeNote: 'Uma trilha de farelinhos de noz estava espalhada na quina da página!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-subir-escada-livros',
          text: 'Subir os três degraus da escadinha da biblioteca',
          description: 'Ficar na ponta dos pés para espiar a prateleira superior.',
          icon: '🪜',
          targetSceneId: 'cena-2-tampa-caixinha'
        },
        {
          id: 'escolha-bater-palmas-ritmo',
          text: 'Bater palminhas no ritmo da valsa mágica',
          description: 'Talvez quem estiver tocando responda com alegria!',
          icon: '👏',
          targetSceneId: 'cena-2-tampa-caixinha'
        }
      ]
    },
    'cena-2-tampa-caixinha': {
      id: 'cena-2-tampa-caixinha',
      chapterNumber: 2,
      title: 'O Enigma da Chavezinha Dourada',
      text: 'Em cima da estante, repousava a caixinha de mogno esculpida com florzinhas de cerejeira. A manivela da corda estava paradinha, mas a música continuava a tocar bem lá dentro! Pela fechadura em formato de coração saía um fiapo de luz esmeralda. Léo encontrou uma chave pequenininha presa a uma fita de cetim azul.',
      sceneryType: 'grandparents-house',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-fechadura-coracao',
          name: 'Fechadura Dourada com Formato de Coração',
          x: 50,
          y: 45,
          width: 24,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Girar a Chavezinha com Cuidado',
          hint: 'Click-clack... a tampa vai se abrir!',
          hasTriggered: false,
          sound: 'magic',
          icon: '🗝️',
          triggeredIcon: '💖',
          eventResult: {
            narrativeNote: 'Clack! A tampa se levantou suavemente num arco de luz brilhante!'
          }
        },
        {
          id: 'elem-espelho-tampa',
          name: 'Mini Espelho Oval Dentro da Caixa',
          x: 25,
          y: 40,
          width: 20,
          height: 22,
          actionType: 'light-glow',
          label: 'Olhar o Reflexo no Espelhinho',
          hint: 'Reflete pequenas sombras dançantes...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🪞',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: 'No espelho, viram pequenos arquinhos de violino subindo e descendo com maestria!'
          }
        },
        {
          id: 'elem-avelas-doces',
          name: 'Avelãs Açucaradas em Miniatura',
          x: 75,
          y: 55,
          width: 20,
          height: 20,
          actionType: 'cookie-bite',
          label: 'Colocar uma Nozinha de Presente na Borda',
          hint: 'Um lanchinho para os pequenos artistas...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🌰',
          triggeredIcon: '🍪',
          eventResult: {
            narrativeNote: 'Uma mãozinha peludinha puxou a avelã para dentro com uma risadinha gostosa!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-espiar-dentro-caixa',
          text: 'Aproximar o rostinho e olhar o palco secreto',
          description: 'Descobrir quem são os artistas que moram na caixinha!',
          icon: '👀',
          targetSceneId: 'cena-3-orquestra-esquilos'
        },
        {
          id: 'escolha-pedir-bis',
          text: 'Fazer uma reverência e pedir: "Mais um, por favor!"',
          description: 'Aplaudi-los com todo o respeito do mundo.',
          icon: '✨',
          targetSceneId: 'cena-3-orquestra-esquilos'
        }
      ]
    },
    'cena-3-orquestra-esquilos': {
      id: 'cena-3-orquestra-esquilos',
      chapterNumber: 3,
      title: 'A Pequena Orquestra do Maestro Pinhão',
      text: 'Que surpresa encantadora! Dentro da caixa de música não havia engrenagens de ferro: havia um minúsculo tablado forrado de veludo onde o Maestro Pinhão e sua família de esquilinhos tocavam violoncelos de casca de noz e flautinhas de canudo de trigo! Eles contaram que aprenderam a tocar para dar soninhos gostosos em todas as crianças que visitam a biblioteca. Belinha e Léo dançaram uma valsa mágica e prometeram guardar o segredo com carinho!',
      sceneryType: 'toy-workshop',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-maestro-pinhao',
          name: 'Maestro Pinhão Regendo a Valsa',
          x: 50,
          y: 48,
          width: 25,
          height: 25,
          actionType: 'animal-pet',
          label: 'Cumprimentar o Maestro Pinhão',
          hint: 'Ele tira a cartolinha com elegância...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🐿️',
          triggeredIcon: '🎩',
          eventResult: {
            narrativeNote: 'O Maestro Pinhão agradeceu com uma mesura teatral e dedicou o próximo acorde a Belinha e Léo!'
          }
        },
        {
          id: 'elem-valsa-dos-pes',
          name: 'Dança dos Pezinhos Felizes',
          x: 25,
          y: 60,
          width: 22,
          height: 22,
          actionType: 'wave-jump',
          label: 'Girar e Dançar com Meias Coloridas',
          hint: 'Gira no tapete de veludo...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🩰',
          triggeredIcon: '💖',
          eventResult: {
            narrativeNote: 'As crianças rodopiaram felizes enquanto confetes dourados choviam da tampa da caixinha!'
          }
        },
        {
          id: 'elem-medalha-noz-dourada',
          name: 'Mini Broche de Noz de Ouro',
          x: 75,
          y: 55,
          width: 22,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Prender o Broche no Pijama',
          hint: 'Símbolo dos amigos da música...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🏅',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: 'Sempre que precisarem de uma canção feliz, bastará tocar no broche para ouvir a valsa mágica!'
          }
        }
      ],
      choices: []
    }
  }
};
