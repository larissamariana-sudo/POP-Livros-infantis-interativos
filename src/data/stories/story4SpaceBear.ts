import { Book } from '../../types';

export const story4SpaceBear: Book = {
  id: 'astro-urso-doces',
  title: 'Astro-Urso e a Nebulosa de Doces',
  subtitle: 'Uma viagem intergaláctica com chuva de jujubas cósmicas e anéis de açúcar',
  coverImage: 'space-cover',
  coverEmoji: '🐻‍❄️',
  ageGroup: '3-6',
  themeColor: 'from-indigo-600 via-purple-600 to-pink-500',
  tagline: 'Pilote foguetes, colete rosquinhas flutuantes e visite a lua de sorvete!',
  totalChapters: 3,
  initialSceneId: 'cena-1-cabine-espacial',
  characters: [
    { name: 'Bernie', role: 'Astro-Urso piloto e comilão', avatar: '🐻‍❄️' },
    { name: 'Pip', role: 'Robô-satélite com antenas de pirulito', avatar: '🤖' }
  ],
  scenes: {
    'cena-1-cabine-espacial': {
      id: 'cena-1-cabine-espacial',
      chapterNumber: 1,
      title: 'A Estação Espacial de Algodão-Doce',
      text: 'O Astro-Urso Bernie estava ajeitando seu capacete com orelhinhas espaciais. Pela escotilha da nave, cometas cor-de-rosa riscavam o céu escuro deixando um rastro perfumado de morango. Havia botões coloridos piscando no painel de controle.',
      sceneryType: 'space-galaxy',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-botao-foguete',
          name: 'Botão de Hiper-Velocidade',
          x: 50,
          y: 60,
          width: 20,
          height: 22,
          actionType: 'rocket-launch',
          label: 'Acelerar Propulsores!',
          hint: 'Aperte o botão vermelho para ligar os motores!',
          hasTriggered: false,
          sound: 'fire',
          icon: '🚀',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '🚀 VUUUSH! Os motores soltaram fagulhas de confete estelar e a nave voou veloz como um raio!',
          }
        },
        {
          id: 'elem-planeta-donut',
          name: 'Planeta Rosquinha',
          x: 20,
          y: 28,
          width: 22,
          height: 22,
          actionType: 'cookie-bite',
          label: 'Morder Rosquinha Cósmica',
          hint: 'Toque no planeta com cobertura doce...',
          hasTriggered: false,
          sound: 'plop',
          icon: '🍩',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: '🍩 Crocante e gostoso! O anel de granulado do planeta tocou sininhos musicais!',
          }
        },
        {
          id: 'elem-estrela-cadente',
          name: 'Cometa de Tutti-Frutti',
          x: 75,
          y: 25,
          width: 20,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Tocar no Cometa',
          hint: 'Toque na cauda brilhante do cometa!',
          hasTriggered: false,
          sound: 'magic',
          icon: '💫',
          triggeredIcon: '🌟',
          eventResult: {
            narrativeNote: '💫 O cometa deu uma pirueta e deixou uma trilha cintilante pelo universo!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-saturno-acucar',
          text: 'Surfar nos anéis brilhantes de cristal açucarado',
          description: 'Colocar a prancha espacial e deslizar pelas curvas de poeira cósmica.',
          icon: '🪐',
          targetSceneId: 'cena-2-aneis-saturno'
        },
        {
          id: 'escolha-lua-sorvete',
          text: 'Pousar na cratera da Lua de Sorvete Napolitano',
          description: 'Caminhar sobre montanhas de creme geladinho e baunilha estelar.',
          icon: '🍨',
          targetSceneId: 'cena-2-lua-sorvete'
        }
      ],
      characterDialogue: {
        speaker: 'Bernie',
        avatar: '🐻‍❄️',
        text: 'Uhul! Gravidade zero é tão divertida! Vamos escolher para onde nossa nave deve apontar a proa!'
      }
    },
    'cena-2-aneis-saturno': {
      id: 'cena-2-aneis-saturno',
      chapterNumber: 2,
      title: 'O Grande Surfe Interestelar',
      text: 'Bernie colocou seus óculos espaciais e deslizou como um campeão pelos anéis dourados. Poeira de estrelas espirrava para todos os lados como flocos brilhantes de neve.',
      sceneryType: 'space-galaxy',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-alien-fofo',
          name: 'Ziggy, o Alien Gelatinoso',
          x: 40,
          y: 45,
          width: 22,
          height: 22,
          actionType: 'creature-jump',
          label: 'Fazer Cócegas em Ziggy',
          hint: 'Toque no amiguinho verde gelatinoso!',
          hasTriggered: false,
          sound: 'creature',
          icon: '👾',
          triggeredIcon: '💚',
          eventResult: {
            narrativeNote: '👾 Boing! Ziggy quicou de alegria e soltou coraçõezinhos luminosos!',
          }
        },
        {
          id: 'elem-satelite-pip',
          name: 'Robô Pip',
          x: 75,
          y: 50,
          width: 18,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Ligar Luzes do Robô',
          hint: 'Toque nas antenas de Pip...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🤖',
          triggeredIcon: '📡',
          eventResult: {
            narrativeNote: '📡 Bip-bop! Pip começou a tocar uma música espacial super animada!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-festa-galatica',
          text: 'Organizar um Piquenique na Constelação do Urso Maior',
          description: 'Juntar todos os viajantes do espaço para celebrar a amizade.',
          icon: '✨',
          targetSceneId: 'cena-final-espaco'
        }
      ],
      characterDialogue: {
        speaker: 'Pip',
        avatar: '🤖',
        text: 'Bip-bip! Leituras de alegria registrando nível máximo! Que passeio estelar incrível!'
      }
    },
    'cena-2-lua-sorvete': {
      id: 'cena-2-lua-sorvete',
      chapterNumber: 2,
      title: 'O Vale dos Três Sabores',
      text: 'A superfície da lua era fofinha como merengue. Bernie deu pulos gigantes em câmera lenta enquanto pegava colheradas de nuvens sabor morango.',
      sceneryType: 'space-galaxy',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-vulcão-calda',
          name: 'Gêiser de Chocolate Quente',
          x: 30,
          y: 65,
          width: 24,
          height: 24,
          actionType: 'fruit-fall',
          label: 'Disparar Gêiser de Chocolate',
          hint: 'Toque no topo da pequena montanha...',
          hasTriggered: false,
          sound: 'water',
          icon: '🍫',
          triggeredIcon: '🌋',
          eventResult: {
            narrativeNote: '🌋 Tchuff! Uma fonte borbulhante de calda de chocolate subiu suavemente!',
          }
        },
        {
          id: 'elem-bandeira-espacial',
          name: 'Bandeira dos Amigos das Estrelas',
          x: 70,
          y: 40,
          width: 18,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Finque a Bandeira',
          hint: 'Deixe sua marca na lua doce!',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🚩',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: '🚩 A bandeira reluziu com o símbolo do Pop!, confirmando a nossa grande conquista!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-festa-galatica-2',
          text: 'Brindar com Leite das Galáxias sob a Luz da Terra',
          description: 'Sentar na beirada da cratera e ver nosso planeta azulzinho ao longe.',
          icon: '🌍',
          targetSceneId: 'cena-final-espaco'
        }
      ],
      characterDialogue: {
        speaker: 'Bernie',
        avatar: '🐻‍❄️',
        text: 'Isso aqui é o paraíso dos ursos espaciais! Cada pedaço é uma delícia!'
      }
    },
    'cena-final-espaco': {
      id: 'cena-final-espaco',
      chapterNumber: 3,
      title: 'Explorador Cósmico Supremo',
      text: 'O universo é um lugar repleto de magia quando você tem coragem de explorar e imaginação para sonhar! Bernie manda um grande abraço espacial de urso para você!',
      sceneryType: 'space-galaxy',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-astronauta',
          name: 'Medalha do Astronauta Mirim',
          x: 45,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Receber Capacete de Ouro',
          hint: 'Toque para receber sua honraria estelar!',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🧑‍🚀',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Parabéns! Você recebeu as Asas Douradas da Frota Estelar!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-espaco',
          text: 'Fazer uma nova decolagem espacial!',
          description: 'Ajuste os parâmetros de voo e descubra novos planetas.',
          icon: '🔄',
          targetSceneId: 'cena-1-cabine-espacial'
        }
      ],
      characterDialogue: {
        speaker: 'Bernie e Pip',
        avatar: '🐻‍❄️',
        text: 'Até logo, companheiro(a) de bordo! Nossas coordenadas estarão sempre prontas para você!'
      }
    }
  }
};
