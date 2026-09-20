import { Book } from '../../types';

export const story23TreasureHunt: Book = {
  id: 'caca-ao-tesouro-ilha-farol',
  title: 'A Caça ao Tesouro da Ilha do Farol Misterioso',
  subtitle: 'Um pergaminho antigo encontrado no sótão, charadas marítimas e o verdadeiro baú dos navegadores',
  coverImage: 'treasure-hunt-cover',
  coverEmoji: '🗺️💎',
  ageGroup: '7-10',
  themeCategory: 'adventure',
  themeColor: 'from-amber-600 via-yellow-500 to-emerald-600',
  tagline: 'Siga as coordenadas da bússola dourada, decifre o enigma do caranguejo sábio e abra o baú!',
  totalChapters: 3,
  initialSceneId: 'cena-1-mapa-pergaminho',
  characters: [
    { name: 'Mateus', role: 'Jovem cartógrafo com luneta e caderno de anotações', avatar: '🧭' },
    { name: 'Helena', role: 'Especialista em enigmas antigos e decodificação de códigos', avatar: '🔍' },
    { name: 'Capitão Gaivota', role: 'Papagaio tagarela que conhece todas as pedras da ilha', avatar: '🦜' }
  ],
  translations: {
    es: {
      title: 'La Búsqueda del Tesoro de la Isla del Faro Misterioso',
      subtitle: 'Un mapa antiguo hallado en el desván, acertijos marinos y el verdadero cofre pirata',
      tagline: '¡Sigue las coordenadas de la brújula, descifra el enigma y descubre el gran tesoro!'
    },
    en: {
      title: 'The Mystery Lighthouse Treasure Hunt',
      subtitle: 'An ancient parchment from the attic, nautical riddles, and the true explorer\'s chest',
      tagline: 'Follow golden compass bearings, solve the wise riddles, and unlock the legendary chest!'
    },
    it: {
      title: 'La Caccia al Tesoro dell\'Isola del Faro Misterioso',
      subtitle: 'Una pergamena antica trovata in soffitta, enigmi marinareschi e il vero scrigno dei pirati',
      tagline: 'Segui la bussola d\'oro, decifra gli indizi e apri lo scrigno dell\'amicizia!'
    }
  },
  scenes: {
    'cena-1-mapa-pergaminho': {
      id: 'cena-1-mapa-pergaminho',
      chapterNumber: 1,
      title: 'O Enigma do X Esculpido na Pedra',
      text: 'Mateus e Helena desembarcaram na praia rochosa da Ilha do Farol com o velho mapa desdobrado. O pergaminho dizia: "Onde o sol beija a rocha do lagarto e a maré recua três palmos, a primeira chave cantará na fresta."',
      sceneryType: 'sunny-beach',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-bussola-dourada',
          name: 'Bússola Náutica de Bronze',
          x: 48,
          y: 55,
          width: 22,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Girar a Agulha Magnética',
          hint: 'Aponta para o Norte...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🧭',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ A agulha de bronze tremeu e apontou direto para uma gruta secreta sob a torre do farol!',
          }
        },
        {
          id: 'elem-papagaio-gaivota',
          name: 'Capitão Gaivota no Mastro',
          x: 78,
          y: 35,
          width: 20,
          height: 22,
          actionType: 'creature-jump',
          label: 'Ouvir a Pista do Papagaio',
          hint: 'Craaack! O que ele diz?...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🦜',
          triggeredIcon: '📜',
          eventResult: {
            narrativeNote: '📜 "Atenção exploradores! O tesouro não brilha em ouro amarelo, mas no coração de quem caminha junto!"',
          }
        },
        {
          id: 'elem-concha-chave',
          name: 'Concha com Entalhe de Chave',
          x: 25,
          y: 65,
          width: 18,
          height: 20,
          actionType: 'chest-open',
          label: 'Examinar a Concha Entalhada',
          hint: 'Tem algo desenhado nela...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🐚',
          triggeredIcon: '🔑',
          eventResult: {
            narrativeNote: '🔑 Uma chave antiga esculpida em madrepérola estava escondida dentro da concha!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-gruta-marinha',
          text: 'Entrar na Gruta das Águas Transparentes com Lanternas',
          description: 'Seguir o riacho subterrâneo onde as estalactites refletem pedras preciosas.',
          icon: '🔦',
          targetSceneId: 'cena-2-gruta-estalactites'
        },
        {
          id: 'escolha-trilha-farol-topo',
          text: 'Subir a Escadaria em Caracol até o Topo do Farol Abandonado',
          description: 'Olhar pelo prisma de vidro para ver o padrão desenhado na areia pela maré.',
          icon: '🗼',
          targetSceneId: 'cena-2-topo-farol-ilha'
        }
      ],
      characterDialogue: {
        speaker: 'Helena',
        avatar: '🔍',
        text: 'Mateus, veja as inscrições! O mapa só se revela quando combinamos a direção da bússola com a chave de madrepérola!'
      }
    },
    'cena-2-gruta-estalactites': {
      id: 'cena-2-gruta-estalactites',
      chapterNumber: 2,
      title: 'O Santuário de Cristal Subterrâneo',
      text: 'O interior da gruta ecoava com o gotejar ritmado da água fresca. Nas paredes de quartzo, símbolos matemáticos mostravam o mecanismo da fechadura de pedra que guardava a câmara final.',
      sceneryType: 'crystal-caves',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-pedra-runica',
          name: 'Disco de Pedra Giratório',
          x: 45,
          y: 50,
          width: 22,
          height: 22,
          actionType: 'secret-path',
          label: 'Alinhar os Três Círculos de Pedra',
          hint: 'Gire até clicar...',
          hasTriggered: false,
          sound: 'magic',
          icon: '⚙️',
          triggeredIcon: '🔓',
          eventResult: {
            narrativeNote: '🔓 Clic! A laje de pedra deslizou revelando um pedestal de ônix no centro da câmara!',
          }
        },
        {
          id: 'elem-cristal-verde',
          name: 'Geodo de Esmeralda Cintilante',
          x: 72,
          y: 40,
          width: 18,
          height: 20,
          actionType: 'light-glow',
          label: 'Iluminar o Geodo com a Lanterna',
          hint: 'Luz verde esmeralda...',
          hasTriggered: false,
          sound: 'pop',
          icon: '💎',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ O feixe verde projetou uma seta luminosa apontando direto para o baú!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-abrir-bau-lendario',
          text: 'Usar a Chave de Madrepérola para Abrir o Grande Baú',
          description: 'Descobrir o que os navegadores deixaram escondido há mais de cem anos.',
          icon: '👑',
          targetSceneId: 'cena-final-tesouro'
        }
      ],
      characterDialogue: {
        speaker: 'Mateus',
        avatar: '🧭',
        text: 'Nós conseguimos decifrar todo o código! Helena, você foi brilhante na lógica dos números!'
      }
    },
    'cena-2-topo-farol-ilha': {
      id: 'cena-2-topo-farol-ilha',
      chapterNumber: 2,
      title: 'A Lente Gigante dos Guardiões',
      text: 'Lá no topo dos 120 degraus de ferro, o prisma de vidro Fresnel capturava a luz poente. Olhando através da lente de cristal, as pedras na praia formavam a figura de uma âncora gigante apontando para a base da torre.',
      sceneryType: 'ancient-ruins',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-lente-farol',
          name: 'Prisma de Cristal Gigante',
          x: 50,
          y: 40,
          width: 24,
          height: 24,
          actionType: 'light-glow',
          label: 'Ajustar o Ângulo do Prisma',
          hint: 'Foque o feixe de luz...',
          hasTriggered: false,
          sound: 'magic',
          icon: '💡',
          triggeredIcon: '🔦',
          eventResult: {
            narrativeNote: '🔦 O raio de luz dourado desceu pela escadaria indicando um compartimento sob o assoalho de carvalho!',
          }
        },
        {
          id: 'elem-diario-navegador',
          name: 'Diário de Bordo em Couro',
          x: 25,
          y: 60,
          width: 20,
          height: 20,
          actionType: 'chest-open',
          label: 'Ler a Mensagem dos Guardiões',
          hint: 'Palavras de sabedoria...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '📖',
          triggeredIcon: '📜',
          eventResult: {
            narrativeNote: '📜 "A maior riqueza de um explorador é a curiosidade que nunca envelhece e os amigos leais que guardam suas costas."',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-abrir-bau-lendario-2',
          text: 'Descer até o Compartimento Secreto para Abrir o Baú',
          description: 'Revelar o conteúdo guardado pelos antigos faroleiros.',
          icon: '💎',
          targetSceneId: 'cena-final-tesouro'
        }
      ],
      characterDialogue: {
        speaker: 'Helena & Mateus',
        avatar: '🔍🧭',
        text: 'A resposta estava bem debaixo dos nossos narizes! O trabalho em equipe nos trouxe até aqui!'
      }
    },
    'cena-final-tesouro': {
      id: 'cena-final-tesouro',
      chapterNumber: 3,
      title: 'O Tesouro da Sabedoria e da Amizade',
      text: 'Com um giro suave da chave de madrepérola, o baú de cedro se abriu com um estalo melodioso. Dentro, além de moedas antigas de prata e um astrolábio de latão polido, havia uma luneta telescópica gravada: "Para os Jovens que Olham Para Além do Horizonte".',
      sceneryType: 'sunny-beach',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-bau-aberto-ouro',
          name: 'O Baú Lendário dos Navegantes',
          x: 48,
          y: 55,
          width: 24,
          height: 24,
          actionType: 'chest-open',
          label: 'Tocar a Luneta Dourada',
          hint: 'A recompensa dos justos...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🪙',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Conquista Máxima: Mestres Caçadores de Tesouros! Vocês provaram inteligência, respeito e cumplicidade!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-tesouro',
          text: 'Voltar a navegar em busca de novas ilhas secretas!',
          description: 'Recomece a expedição para decifrar novas charadas misteriosas.',
          icon: '🔄',
          targetSceneId: 'cena-1-mapa-pergaminho'
        }
      ],
      characterDialogue: {
        speaker: 'Capitão Gaivota',
        avatar: '🦜',
        text: 'Craaack! Vocês são os verdadeiros herdeiros do mar! Que vento favorável sempre empurre suas velas!'
      }
    }
  }
};
