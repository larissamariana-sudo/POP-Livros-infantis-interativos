import { Book } from '../../types';

export const story41SchoolSecretChest: Book = {
  id: 'enigma-bau-subterraneo-escola',
  title: 'O Enigma do Baú Subterrâneo da Escola',
  subtitle: 'Uma pá bate no metal sob as raízes da horta: três enigmas trancados e uma viagem no tempo',
  coverImage: 'school-chest-cover',
  coverEmoji: '🏫🗝️',
  ageGroup: '7-10',
  themeCategory: 'mystery',
  themeColor: 'from-amber-800 via-orange-700 to-emerald-800',
  tagline: 'Decifre a charada matemática, alinhe as cores do cadeado de bronze e abra a cápsula do tempo histórica!',
  totalChapters: 3,
  initialSceneId: 'cena-1-horta-escolar',
  characters: [
    { name: 'Lia', role: 'Estudante perspicaz apaixonada por história e cartas antigas', avatar: '👧' },
    { name: 'Bento', role: 'Amigo curioso e inventor de ferramentas mirins para escavações', avatar: '👦' },
    { name: 'Professora Doralice', role: 'A lendária educadora que fundou a escola setenta anos atrás', avatar: '👵' }
  ],
  translations: {
    es: {
      title: 'El Enigma del Cofre Subterráneo de la Escuela',
      subtitle: 'Una pala choca con metal en el huerto: tres acertijos y un asombroso viaje en el tiempo',
      tagline: '¡Descifra el acertijo matemático, combina los colores y abre la cápsula del tiempo!'
    },
    en: {
      title: 'The Riddle of the School Yard Underground Chest',
      subtitle: 'A trowel strikes metal under the vegetable garden: three riddles and a journey through time',
      tagline: 'Solve the rhyming math riddle, align the bronze color dials, and unlock the historic time capsule!'
    },
    it: {
      title: 'L\'Enigma del Forziere Sotterraneo della Scuola',
      subtitle: 'Una paletta urta il metallo nell\'orto: tre indovinelli e un viaggio nel tempo',
      tagline: 'Risolvi l\'indovinello di matematica, allinea i quadranti di bronzo e apri la capsula del tempo!'
    }
  },
  scenes: {
    'cena-1-horta-escolar': {
      id: 'cena-1-horta-escolar',
      chapterNumber: 1,
      title: 'O Som Metálico sob a Terra',
      text: 'Durante o projeto de plantio de girassóis no pátio da escola, a pazinha de Lia bateu com um eco oco de "CLANG!". Ao cavarem com cuidado em volta das raízes, Bento e Lia desenterraram um baú de ferro maciço com rebites de bronze e três fechaduras numeradas com desenhos de uma ampulheta, uma coruja e um livro aberto.',
      sceneryType: 'school-classroom',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-bau-ferro-terra',
          name: 'Baú de Ferro com Brasão da Escola',
          x: 48,
          y: 50,
          width: 25,
          height: 25,
          actionType: 'chest-open',
          label: 'Limpar a Terra do Brasão',
          hint: 'Revela uma data gravada em relevo...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🧰',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: 'Sob o barro lia-se: "Classe de 1954 - Só abrir quando as sementes do carvalho tocarem o céu!"'
          }
        },
        {
          id: 'elem-disco-cores',
          name: 'Cadeado com Três Discos Giratórios de Cores',
          x: 25,
          y: 60,
          width: 22,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Girar os Anéis para Vermelho, Amarelo e Azul',
          hint: 'As cores primárias dos lápis de cor...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🎨',
          triggeredIcon: '🔓',
          eventResult: {
            narrativeNote: 'CLICK! O primeiro cadeado soltou uma mola dourada e se abriu com um estalo perfeito!'
          }
        },
        {
          id: 'elem-pergaminho-enigma',
          name: 'Tubo de Cobre com Poema Rimado',
          x: 75,
          y: 52,
          width: 20,
          height: 22,
          actionType: 'secret-path',
          label: 'Ler a Charada Matemática no Tubo',
          hint: '"Sou o dobro de sete somado com o número de patas de um cãozinho..."',
          hasTriggered: false,
          sound: 'magic',
          icon: '📜',
          triggeredIcon: '🔢',
          eventResult: {
            narrativeNote: 'Bento calculou na hora: 14 + 4 = 18! O código do segundo cadeado era 1-8!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-procurar-terceira-chave',
          text: 'Procurar a chave de madeira petrificada no oco do velho carvalho',
          description: 'A última pista do poema indica o tronco da árvore centenária.',
          icon: '🌳',
          targetSceneId: 'cena-2-arvore-centenaria'
        },
        {
          id: 'escolha-consultar-bibliotecario',
          text: 'Pedir ajuda ao professor de ciências no laboratório',
          description: 'Usar uma lupa e escovinhas arqueológicas de precisão.',
          icon: '🔬',
          targetSceneId: 'cena-2-arvore-centenaria'
        }
      ]
    },
    'cena-2-arvore-centenaria': {
      id: 'cena-2-arvore-centenaria',
      chapterNumber: 2,
      title: 'A Chave Guardada pelo Tempo',
      text: 'Debaixo da copa majestosa do carvalho plantado em 1954, uma pequena fenda na casca continha uma caixinha de fósforos de metal. Dentro dela repousava a terceira chave, talhada em madeira de pinho perfumada com essência de alecrim! Lia e Bento voltaram correndo até o baú com toda a turma reunida em volta em silêncio absoluto.',
      sceneryType: 'autumn-park',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-chave-pinho',
          name: 'Chave de Madeira de Pinho Antiga',
          x: 48,
          y: 45,
          width: 22,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Inserir a Chave na Última Fechadura',
          hint: 'Gira com suavidade...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🗝️',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: 'CLACK-BONG! A tampa pesada do baú de ferro se ergueu liberando um cheirinho gostoso de alfazema e papel guardado!'
          }
        },
        {
          id: 'elem-album-fotos-1954',
          name: 'Álbum de Fotos em Preto e Branco',
          x: 25,
          y: 55,
          width: 22,
          height: 22,
          actionType: 'chest-open',
          label: 'Abrir a Primeira Página do Álbum',
          hint: 'Crianças sorrindo de uniforme retrô...',
          hasTriggered: false,
          sound: 'pop',
          icon: '📷',
          triggeredIcon: '👥',
          eventResult: {
            narrativeNote: 'Lia deu um grito de emoção: no centro da foto da turma estava sua bisavó Doralice, quando tinha apenas 8 anos de idade!'
          }
        },
        {
          id: 'elem-brinquedos-epoca',
          name: 'Brinquedos da Turma de 1954',
          x: 75,
          y: 58,
          width: 22,
          height: 22,
          actionType: 'animal-pet',
          label: 'Tirar um Pião de Madeira e Bolinhas de Gude de Cristal',
          hint: 'Brinquedos intactos e reluzentes...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🎯',
          triggeredIcon: '🔮',
          eventResult: {
            narrativeNote: 'As bolinhas de gude tinham redemoinhos de arco-íris preservados pelo tempo!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-ler-carta-voz-alta',
          text: 'Ler a carta da bisavó Doralice em voz alta para a escola inteira',
          description: 'Compartilhar as palavras de esperança da turma do passado.',
          icon: '📢',
          targetSceneId: 'cena-3-festa-memoria-escolar'
        },
        {
          id: 'escolha-chamar-bisavo-celular',
          text: 'Ligar para a vovó Doralice para contar que o baú foi achado',
          description: 'Dar a ela a maior e mais linda surpresa de sua vida!',
          icon: '📞',
          targetSceneId: 'cena-3-festa-memoria-escolar'
        }
      ]
    },
    'cena-3-festa-memoria-escolar': {
      id: 'cena-3-festa-memoria-escolar',
      chapterNumber: 3,
      title: 'O Abraço de Gerações e a Nova Cápsula',
      text: 'Foi a tarde mais emocionante da história da escola! A bisavó Doralice, hoje com 78 anos, veio pessoalmente à escola acompanhada de aplausos emocionados. Ela chorou de felicidade ao reencontrar seu diário de infância e o desenho que fez do futuro: um jardim repleto de crianças felizes de mãos dadas! A escola inteira celebrou jogando pião no pátio e decidiu enterrar uma nova cápsula do tempo para as crianças dos próximos cem anos!',
      sceneryType: 'school-classroom',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-abraco-bisavo',
          name: 'Abraço Emocionado de Lia e Bisavó Doralice',
          x: 50,
          y: 48,
          width: 26,
          height: 26,
          actionType: 'animal-pet',
          label: 'Abraçar a Bisavó com Amor',
          hint: 'Lágrimas de pura alegria...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '👵',
          triggeredIcon: '💖',
          eventResult: {
            narrativeNote: 'Doralice colocou no pescoço de Lia seu broche da primeira turma da escola com orgulho sem fim!'
          }
        },
        {
          id: 'elem-nova-capsula-2026',
          name: 'Nova Cápsula do Tempo Selada pela Turma',
          x: 25,
          y: 58,
          width: 22,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Colocar Desenhos e Mensagens da Turma Atual',
          hint: 'Para as crianças do futuro...',
          hasTriggered: false,
          sound: 'magic',
          icon: '📦',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: 'Cada estudante colocou uma cartinha contando sobre suas brincadeiras e sonhos para o planeta!'
          }
        },
        {
          id: 'elem-brincadeira-piao',
          name: 'Campeonato de Pião no Pátio',
          x: 75,
          y: 55,
          width: 22,
          height: 22,
          actionType: 'ball-kick',
          label: 'Girar o Pião de Madeira na Roda de Amigos',
          hint: 'Zun, zun, zun! Rodopia sem parar...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🪵',
          triggeredIcon: '🎉',
          eventResult: {
            narrativeNote: 'O pátio vibrou de alegria: as brincadeiras simples nunca perdem sua magia!'
          }
        }
      ],
      choices: []
    }
  }
};
