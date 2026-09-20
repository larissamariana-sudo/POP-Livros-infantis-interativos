import { Book } from '../../types';

export const story28SecretLibrary: Book = {
  id: 'segredo-livros-biblioteca',
  title: 'O Segredo dos Livros Antigos da Grande Biblioteca',
  subtitle: 'Um mapa em código binário escondido na primeira edição de um clássico esquecido há duzentos anos',
  coverImage: 'secret-library-cover',
  coverEmoji: '📚🕯️',
  ageGroup: '11-14',
  themeCategory: 'school',
  themeColor: 'from-amber-800 via-stone-700 to-amber-500',
  tagline: 'Decifre cifras em latim antigo, acione alavancas em estantes centenárias e salve o acervo histórico!',
  totalChapters: 3,
  initialSceneId: 'cena-1-ala-proibida',
  characters: [
    { name: 'Maya', role: 'Estudante perspicaz e restauradora de manuscritos raros', avatar: '🕵️‍♀️' },
    { name: 'Kael', role: 'Amigo programador que vê padrões lógicos e quebra códigos criptográficos', avatar: '💻' },
    { name: 'Prof. Ambrósio', role: 'Guardião do acervo histórico da cidade', avatar: '👨‍🏫' }
  ],
  translations: {
    es: {
      title: 'El Secreto de los Libros Antiguos de la Gran Biblioteca',
      subtitle: 'Un mapa en código oculto en una primera edición olvidada de hace doscientos años',
      tagline: '¡Descifra enigmas en latín, mueve palancas ocultas en estanterías y protege los libros antiguos!'
    },
    en: {
      title: 'The Secret of Ancient Books in the Grand Library',
      subtitle: 'A hidden cipher inside a two-century-old first edition revealing lost historical archives',
      tagline: 'Crack historical ciphers, trigger hidden bookshelf mechanisms, and safeguard centuries of knowledge!'
    },
    it: {
      title: 'Il Segreto dei Libri Antichi della Grande Biblioteca',
      subtitle: 'Una mappa in codice nascosta in una prima edizione dimenticata di duecento anni fa',
      tagline: 'Decifra codici storici, attiva passaggi segreti tra gli scaffali e salva manoscritti rari!'
    }
  },
  scenes: {
    'cena-1-ala-proibida': {
      id: 'cena-1-ala-proibida',
      chapterNumber: 1,
      title: 'A Lombada Dourada do Tomo VII',
      text: 'O relógio de pêndulo da biblioteca ecoou meia-noite com doze badaladas graves. Maya e Kael observavam uma estante de carvalho maciço que ia do chão até o teto de oito metros de altura. Na mão de Maya, a cópia restaurada de um tratado astronômico de 1824 vibrou levemente quando uma inscrição oculta em tinta invisível foi iluminada pela lanterna ultravioleta.',
      sceneryType: 'magic-academy',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-luz-uv-livro',
          name: 'Lanterna Ultravioleta de Perito',
          x: 48,
          y: 45,
          width: 22,
          height: 24,
          actionType: 'light-glow',
          label: 'Revelar Tinta Invisível',
          hint: 'Brilho fosforescente...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🔦',
          triggeredIcon: '📜',
          eventResult: {
            narrativeNote: '📜 "Sub sole nihil novi sed sub terra veritas latet" — Uma frase em latim indicando uma cripta sob o piso de xisto!',
          }
        },
        {
          id: 'elem-livro-alavanca',
          name: 'Volume de Capa de Couro Vermelho',
          x: 25,
          y: 35,
          width: 20,
          height: 22,
          actionType: 'secret-path',
          label: 'Puxar o Livro Falso da Estante',
          hint: 'Mecanismo mecânico secreto...',
          hasTriggered: false,
          sound: 'pop',
          icon: '📕',
          triggeredIcon: '⚙️',
          eventResult: {
            narrativeNote: '⚙️ Trac-trac-clic! A fileira de prateleiras girou suavemente sobre trilhos de bronze embutidos!',
          }
        },
        {
          id: 'elem-relogio-astronomico',
          name: 'Astrolábio de Latão na Mesa',
          x: 75,
          y: 60,
          width: 18,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Ajustar as Coordenadas Astrais',
          hint: 'Alinhar as constelações...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🧭',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ As engrenagens do astrolábio destravaram uma portinhola secreta atrás do quadro a óleo!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-cripta-manuscritos',
          text: 'Descer a Escadaria em Espiral para a Cripta dos Manuscritos Esquecidos',
          description: 'Encontrar as primeiras cartas dos fundadores e o catálogo original da biblioteca.',
          icon: '🗝️',
          targetSceneId: 'cena-2-cripta-historica'
        },
        {
          id: 'escolha-sala-astronomia',
          text: 'Subir ao Mezanino para Decifrar a Carta Celeste do Teto Abobadado',
          description: 'Usar o telescópio antigo para projetar o código geométrico no mapa da cidade.',
          icon: '🔭',
          targetSceneId: 'cena-2-mezanino-estrelas'
        }
      ],
      characterDialogue: {
        speaker: 'Kael',
        avatar: '💻',
        text: 'A sequência dos livros na prateleira forma uma cifra de substituição clássica! Quem construiu este lugar era um gênio da matemática!'
      }
    },
    'cena-2-cripta-historica': {
      id: 'cena-2-cripta-historica',
      chapterNumber: 2,
      title: 'O Cofre de Mogno dos Fundadores',
      text: 'O ar na cripta era seco e controlado por antigos canais de ventilação de terracota. No centro da sala circular, descansava uma cápsula do tempo protegida por um cilindro mecânico de combinação numérica com alfabetos gregos e hebraicos.',
      sceneryType: 'shadow-castle',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-cilindro-criptex',
          name: 'Criptex com Anéis Giratórios',
          x: 45,
          y: 55,
          width: 24,
          height: 24,
          actionType: 'secret-path',
          label: 'Alinhar a Palavra-Chave "VERITAS"',
          hint: 'Gire as letras corretas...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🔐',
          triggeredIcon: '🔓',
          eventResult: {
            narrativeNote: '🔓 Clic! O criptex se abriu sem romper o frasco de vinagre protetor, revelando o mapa da biblioteca!',
          }
        },
        {
          id: 'elem-pergaminho-fundacao',
          name: 'Carta de Concessão de 1824',
          x: 75,
          y: 50,
          width: 20,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Desdobrar o Pergaminho Raro',
          hint: 'Com luvas de algodão...',
          hasTriggered: false,
          sound: 'pop',
          icon: '📜',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: '⭐ O documento comprova que a biblioteca pertence a todo o povo da cidade e jamais poderá ser vendida ou demolida!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-apresentar-conselho',
          text: 'Levar o Documento ao Conselho Histórico para Salvar a Biblioteca',
          description: 'Apresentar as provas irrefutáveis que garantem a proteção do patrimônio cultural.',
          icon: '🏛️',
          targetSceneId: 'cena-final-biblioteca'
        }
      ],
      characterDialogue: {
        speaker: 'Maya',
        avatar: '🕵️‍♀️',
        text: 'Nós salvamos duzentos anos de memória! Cada livro aqui tem a alma de quem sonhou com um mundo mais sábio!'
      }
    },
    'cena-2-mezanino-estrelas': {
      id: 'cena-2-mezanino-estrelas',
      chapterNumber: 2,
      title: 'A Projeção das Constelações Urbanas',
      text: 'Através da lente do telescópio vitoriano, a luz da lua cheia foi refletida numa mesa de latão. O padrão revelou que a biblioteca foi construída sobre o cruzamento exato das quatro nascentes de água pura que abastecem a região.',
      sceneryType: 'magic-academy',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-telescopio-vitoriano',
          name: 'Telescópio de Cobre com Prismas',
          x: 50,
          y: 40,
          width: 22,
          height: 24,
          actionType: 'light-glow',
          label: 'Ajustar o Foco na Lua',
          hint: 'Alinhamento lunar...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🔭',
          triggeredIcon: '🌕',
          eventResult: {
            narrativeNote: '🌕 O feixe prateado acionou os prismas projetando a chave mestra no pedestal central!',
          }
        },
        {
          id: 'elem-chave-mestra-bronze',
          name: 'Chave Mestra dos Arquivos Secretos',
          x: 28,
          y: 60,
          width: 20,
          height: 20,
          actionType: 'chest-open',
          label: 'Recolher a Chave do Acervo',
          hint: 'Garante acesso livre aos arquivos...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🗝️',
          triggeredIcon: '🛡️',
          eventResult: {
            narrativeNote: '🛡️ A chave abre o cofre onde estão guardadas as primeiras enciclopédias e obras de arte da cidade!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-apresentar-conselho-2',
          text: 'Descer com a Chave Mestra e o Tratado Histórico',
          description: 'Celebrar a vitória da cultura e do conhecimento livre para todos.',
          icon: '📚',
          targetSceneId: 'cena-final-biblioteca'
        }
      ],
      characterDialogue: {
        speaker: 'Prof. Ambrósio',
        avatar: '👨‍🏫',
        text: 'Vocês dois demonstraram que o verdadeiro valor dos livros está nos jovens que sabem ler além das aparências!'
      }
    },
    'cena-final-biblioteca': {
      id: 'cena-final-biblioteca',
      chapterNumber: 3,
      title: 'Os Novos Guardiões do Conhecimento',
      text: 'Na manhã seguinte, com o sol iluminando os vitrais coloridos da grande sala de leitura, o prefeito assinou o decreto tornando a biblioteca um monumento tombado perpétuo. Maya e Kael receberam crachás honorários de Curadores Mirins da Memória Histórica.',
      sceneryType: 'magic-academy',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-medalha-curador',
          name: 'Comenda de Ouro dos Guardiões da Leitura',
          x: 48,
          y: 50,
          width: 24,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Receber a Comenda da Biblioteca',
          hint: 'Toque para consagrar...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🎖️',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Conquista Notável: Protetores da Memória e da Literatura! Ler é o mais poderoso ato de liberdade e cidadania!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-biblioteca',
          text: 'Explorar outros mistérios nas estantes da biblioteca!',
          description: 'Recomece a história para investigar novas charadas bibliográficas.',
          icon: '🔄',
          targetSceneId: 'cena-1-ala-proibida'
        }
      ],
      characterDialogue: {
        speaker: 'Maya, Kael e Ambrósio',
        avatar: '🕵️‍♀️💻',
        text: 'Que as portas do conhecimento continuem abertas para todos os que têm sede de aprender!'
      }
    }
  }
};
