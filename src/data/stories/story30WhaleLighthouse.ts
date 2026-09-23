import { Book } from '../../types';

export const story30WhaleLighthouse: Book = {
  id: 'velho-farol-canto-baleias',
  title: 'O Velho Farol e o Canto das Baleias Azuis',
  subtitle: 'O caderno do avô faroleiro, hidrofones submarinos e a passagem das maiores criaturas do planeta',
  coverImage: 'whale-lighthouse-cover',
  coverEmoji: '🐋🌊',
  ageGroup: '7-10',
  themeCategory: 'nature',
  themeColor: 'from-blue-900 via-sky-800 to-teal-500',
  tagline: 'Conecte o microfone aquático, escute o canto milenar das baleias azuis e proteja as rotas oceânicas!',
  totalChapters: 3,
  initialSceneId: 'cena-1-sacada-farol-mar',
  characters: [
    { name: 'Ísis', role: 'Neta do faroleiro e estudante de biologia marinha acústica', avatar: '🔬' },
    { name: 'Vô Teodoro', role: 'Guardião aposentado do farol com 50 anos de história no mar', avatar: '👴' },
    { name: 'Azulão', role: 'Macho líder da família de baleias azuis migratórias', avatar: '🐋' }
  ],
  translations: {
    es: {
      title: 'El Viejo Faro y el Canto de las Ballenas Azules',
      subtitle: 'El cuaderno del abuelo, micrófonos submarinos y el paso de los gigantes del océano',
      tagline: '¡Conecta el hidrófono, escucha el canto ancestral y protege la ruta de las ballenas!'
    },
    en: {
      title: 'The Old Lighthouse & the Song of Blue Whales',
      subtitle: 'Grandfather\'s maritime journal, underwater hydrophones, and the migration of oceanic giants',
      tagline: 'Deploy acoustic hydrophones, listen to ancient whale frequencies, and safeguard marine corridors!'
    },
    it: {
      title: 'Il Vecchio Faro e il Canto delle Balene Blu',
      subtitle: 'Il diario del nonno guardiano del faro, idrofoni e il passaggio dei giganti dell\'oceano',
      tagline: 'Collega il microfono sottomarino, ascolta i canti delle balene e proteggi il mare!'
    }
  },
  scenes: {
    'cena-1-sacada-farol-mar': {
      id: 'cena-1-sacada-farol-mar',
      chapterNumber: 1,
      title: 'O Horizonte de Prata e o Respiro Gigante',
      text: 'Do alto da varanda de ferro batido do Farol da Ponta da Gaivota, o oceano parecia infinito sob a névoa lilás do entardecer. Ísis e Vô Teodoro ajustavam um hidrofone submarino mergulhado a trinta metros na água. De repente, um gêiser de vapor de dez metros de altura explodiu no horizonte com um sopro colossal.',
      sceneryType: 'sunny-beach',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-hidrofone-cabo',
          name: 'Microfone Subaquático de Precisão',
          x: 48,
          y: 60,
          width: 22,
          height: 24,
          actionType: 'river-flow',
          label: 'Sintonizar a Frequência Aquática',
          hint: '18 Hertz de frequência...',
          hasTriggered: false,
          sound: 'water',
          icon: '🎧',
          triggeredIcon: '🐋',
          eventResult: {
            narrativeNote: '🐋 Woooooom... Um som profundo e ressonante que atravessa milhares de quilômetros pelo oceano fez a cabine do farol vibrar de emoção!',
          }
        },
        {
          id: 'elem-binoculo-marinho',
          name: 'Binóculo Marítimo 20x80',
          x: 25,
          y: 40,
          width: 20,
          height: 22,
          actionType: 'chest-open',
          label: 'Focar na Nadadeira Caudal',
          hint: 'O gigante dos mares...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🔭',
          triggeredIcon: '🌊',
          eventResult: {
            narrativeNote: '🌊 Uma cauda azul-acinzentada de seis metros de envergadura bateu suave na água saudando a costa!',
          }
        },
        {
          id: 'elem-diario-teodoro',
          name: 'Caderno de Migrações de 1974',
          x: 75,
          y: 45,
          width: 18,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Conferir os Registros Históricos',
          hint: 'Cinco décadas de anotações...',
          hasTriggered: false,
          sound: 'pop',
          icon: '📖',
          triggeredIcon: '📜',
          eventResult: {
            narrativeNote: '📜 "Nesta mesma semana de setembro, as baleias passam pelo nosso litoral para ter seus filhotes em águas mornas!"',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-sinalizar-navios',
          text: 'Acionar o Rádio Costeiro para Avisar os Navios de Carga e Reduzir Velocidades',
          description: 'Evitar colisões noturnas com os animais gigantes na rota migratória.',
          icon: '📻',
          targetSceneId: 'cena-2-alerta-radio-costeiro'
        },
        {
          id: 'escolha-gravar-cantos-baleia',
          text: 'Gravar o Padrão do Canto para o Banco de Dados Internacional de Bioacústica',
          description: 'Identificar a assinatura acústica de Azulão e mapear a saúde do grupo.',
          icon: '📊',
          targetSceneId: 'cena-2-bioacustica-marinha'
        }
      ],
      characterDialogue: {
        speaker: 'Vô Teodoro',
        avatar: '👴',
        text: 'O coração da baleia azul é do tamanho de um automóvel e bate apenas seis vezes por minuto. Elas são a alma do oceano, minha neta!'
      }
    },
    'cena-2-alerta-radio-costeiro': {
      id: 'cena-2-alerta-radio-costeiro',
      chapterNumber: 2,
      title: 'O Corredor de Proteção Oceânica',
      text: 'Ísis pegou o transmissor de rádio marítimo canal 16: "Aqui é a Estação do Farol da Gaivota. Grupo de baleias azuis em trânsito nas coordenadas sul. Solicitamos redução da velocidade das embarcações para 10 nós." Um a um, os capitães dos cargueiros responderam confirmando a desaceleração.',
      sceneryType: 'lake-fishing',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-radio-vhf',
          name: 'Transmissor Náutico VHF',
          x: 45,
          y: 50,
          width: 22,
          height: 24,
          actionType: 'bell-ring',
          label: 'Emitir o Sinal de Alerta aos Navios',
          hint: 'Chamada de segurança...',
          hasTriggered: false,
          sound: 'bell',
          icon: '📻',
          triggeredIcon: '🚢',
          eventResult: {
            narrativeNote: '🚢 "Entendido Farol da Gaivota! Navio Atlântico reduzindo para 9 nós e desviando 5 milhas a leste!"',
          }
        },
        {
          id: 'elem-luz-farol-giro',
          name: 'Luz do Farol Giratória',
          x: 75,
          y: 35,
          width: 20,
          height: 22,
          actionType: 'light-glow',
          label: 'Iluminar o Canal Seguro',
          hint: 'Guia os marinheiros...',
          hasTriggered: false,
          sound: 'magic',
          icon: '💡',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ O feixe dourado cortou as ondas orientando os navios para a rota profunda longe dos animais!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-celebrar-baleias-salvas',
          text: 'Acompanhar a Passagem Serena da Mãe Baleia e do Filhote',
          description: 'A vitória da conservação unindo a sabedoria dos mais velhos e a ciência moderna.',
          icon: '🐋',
          targetSceneId: 'cena-final-baleias'
        }
      ],
      characterDialogue: {
        speaker: 'Ísis',
        avatar: '🔬',
        text: 'Nós conseguimos criar um santuário seguro com um simples chamado de rádio! A comunicação salva vidas marinhas!'
      }
    },
    'cena-2-bioacustica-marinha': {
      id: 'cena-2-bioacustica-marinha',
      chapterNumber: 2,
      title: 'A Sinfonia Submarina das Frequências Baixas',
      text: 'Na tela do computador de Ísis, as ondas sonoras se desenhavam como uma pintura fluida de montanhas douradas. O canto de Azulão tinha notas harmônicas que indicavam a presença de um filhote recém-nascido nadando rente ao seu flanco.',
      sceneryType: 'starlit-river',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-espectrograma-som',
          name: 'Espectrograma de Áudio Marinho',
          x: 48,
          y: 45,
          width: 22,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Analisar as Frequências de Comunicação',
          hint: 'Harmônicos de baixa frequência...',
          hasTriggered: false,
          sound: 'magic',
          icon: '📈',
          triggeredIcon: '🎵',
          eventResult: {
            narrativeNote: '🎵 Padrão identificado: canção de acalanto materna! Um filhote nasceu saudável nas águas calmas da baía!',
          }
        },
        {
          id: 'elem-filhote-salto',
          name: 'Salto Brincalhão do Bebê Baleia',
          x: 25,
          y: 55,
          width: 20,
          height: 22,
          actionType: 'creature-jump',
          label: 'Observar o Salto do Filhote',
          hint: 'Tchuááá refrescante...',
          hasTriggered: false,
          sound: 'water',
          icon: '🐳',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '❤️ O filhotinho de sete metros saltou na água como um golfinho brincalhão sob a lua prateada!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-celebrar-baleias-salvas-2',
          text: 'Subir ao Ponto Mais Alto do Farol para a Saudação Final',
          description: 'Agradecer a honra de testemunhar o milagre da vida marinha em família.',
          icon: '🌊',
          targetSceneId: 'cena-final-baleias'
        }
      ],
      characterDialogue: {
        speaker: 'Vô Teodoro',
        avatar: '👴',
        text: 'Em cinquenta anos cuidando desta luz, poucas vezes vi uma sinfonia tão bela na minha vida!'
      }
    },
    'cena-final-baleias': {
      id: 'cena-final-baleias',
      chapterNumber: 3,
      title: 'O Legado Eterno entre as Estrelas e o Mar',
      text: 'A lua cheia espelhou uma trilha de prata na água por onde a família de baleias seguiu viagem rumo ao sul. Vô Teodoro colocou o antigo chapéu de capitão na cabeça da neta. A tocha da preservação marinha estava agora nas mãos de uma nova geração apaixonada e dedicada.',
      sceneryType: 'sunny-beach',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-medalha-guardiao-mar',
          name: 'Comenda do Guardião dos Oceanos',
          x: 48,
          y: 50,
          width: 24,
          height: 24,
          actionType: 'river-flow',
          label: 'Receber a Comenda do Oceano Azul',
          hint: 'Toque para consagrar...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🐋',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Conquista Notável: Protetora dos Gigantes do Mar! Você uniu amor à família, ciência e compaixão pela vida marinha!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-baleias',
          text: 'Vigiar o horizonte do farol mais uma noite!',
          description: 'Recomece a vigília para ouvir novos cantos oceânicos fascinantes.',
          icon: '🔄',
          targetSceneId: 'cena-1-sacada-farol-mar'
        }
      ],
      characterDialogue: {
        speaker: 'Ísis e Teodoro',
        avatar: '🔬👴',
        text: 'Enquanto houver luz no farol e amor no coração dos jovens, as baleias cantarão em paz pelos mares!'
      }
    }
  }
};
