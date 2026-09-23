import { Book } from '../../types';

export const story40StarryCodeMessage: Book = {
  id: 'mensagem-codigo-nas-estrelas',
  title: 'O Mistério da Mensagem em Código nas Estrelas',
  subtitle: 'Pulsos de luz rítmicos na constelação do Cisne, decodificadores óticos e o segredo nas nuvens altas',
  coverImage: 'starry-code-cover',
  coverEmoji: '🔭✨',
  ageGroup: '7-10',
  themeCategory: 'mystery',
  themeColor: 'from-blue-950 via-indigo-900 to-slate-900',
  tagline: 'Alinhe a lente do grande telescópio, traduza os pulsos de luz e decifre quem está chamando lá de cima!',
  totalChapters: 3,
  initialSceneId: 'cena-1-cupula-observatorio',
  characters: [
    { name: 'Gabriel', role: 'Jovem astrônomo mirim com carta celeste e decodificador Morse', avatar: '🔭' },
    { name: 'Íris', role: 'Especialista em rádio-frequência e lentes espectrométricas', avatar: '🛰️' },
    { name: 'Dra. Solange', role: 'Botânica da Estação Aerostática que cultiva flores de altitude', avatar: '👩‍🔬' }
  ],
  translations: {
    es: {
      title: 'El Misterio del Mensaje en Código en las Estrellas',
      subtitle: 'Destellos rítmicos en la constelación del Cisne, decodificadores y un enigma en las nubes altas',
      tagline: '¡Apunta el gran telescopio, traduce los pulsos de luz y descubre quién envía señales estelares!'
    },
    en: {
      title: 'The Mystery of the Star-Coded Message',
      subtitle: 'Rhythmic light pulses in the Cygnus constellation, decoders, and a secret high in the clouds',
      tagline: 'Align the observatory telescope, translate light pulses, and discover who is calling from above!'
    },
    it: {
      title: 'Il Mistero del Messaggio in Codice tra le Stelle',
      subtitle: 'Lampi ritmici nella costellazione del Cigno, decodificatori e un segreto tra le nuvole alte',
      tagline: 'Punta il grande telescopio, traduci i lampi di luce e scopri chi invia segnali dal cielo!'
    }
  },
  scenes: {
    'cena-1-cupula-observatorio': {
      id: 'cena-1-cupula-observatorio',
      chapterNumber: 1,
      title: 'O Piscar Misterioso no Céu Escuro',
      text: 'A cúpula de aço do observatório girou silenciosamente sob a brisa fresca da montanha. Enquanto examinava a constelação do Cisne, Gabriel notou algo anormal: uma pequena luz esmeralda piscava em ritmo constante. Três piscadas curtas, três longas, três curtas! "É S-O-S em código luminoso!", exclamou Íris enquanto conectava o gravador ótico.',
      sceneryType: 'starlit-river',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-telescopio-cupula',
          name: 'Telescópio Refrator com Lentes de Cristal',
          x: 48,
          y: 40,
          width: 24,
          height: 26,
          actionType: 'secret-path',
          label: 'Girar a Manivela de Foco Fino',
          hint: 'Aumenta o zoom 500 vezes...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🔭',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: 'A imagem ampliada revelou uma cúpula transparente arredondada flutuando na estratosfera sustentada por painéis solares!'
          }
        },
        {
          id: 'elem-aparelho-morse',
          name: 'Decodificador de Frequência Sonora',
          x: 22,
          y: 65,
          width: 22,
          height: 22,
          actionType: 'bell-ring',
          label: 'Traduzir os Tons Bip-Bip',
          hint: 'Converte luz em letras...',
          hasTriggered: false,
          sound: 'bell',
          icon: '📻',
          triggeredIcon: '🔤',
          eventResult: {
            narrativeNote: 'O papel perfurado imprimiu: "ESTAÇÃO NUVEM-7 // PRECISAMOS DE SEMENTES DE DENTE-DE-LEÃO // VENTANIA LEVOU NOSSO JARDIM!"'
          }
        },
        {
          id: 'elem-globo-celeste',
          name: 'Globo das Constelações com Eixo de Bronze',
          x: 75,
          y: 58,
          width: 22,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Girar o Globo até a Coordenada Exata',
          hint: 'Calcula a altitude e latitude...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🌐',
          triggeredIcon: '📍',
          eventResult: {
            narrativeNote: 'O cálculo mostrou que a estação estava a 3.000 metros de altitude, exatamente na rota dos ventos da montanha!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-enviar-sinal-lanterna',
          text: 'Responder pelo canhão de luz do observatório: "MENSAGEM RECEBIDA"',
          description: 'Avisar aos cientistas das nuvens que eles foram ouvidos.',
          icon: '💡',
          targetSceneId: 'cena-2-preparo-sonda'
        },
        {
          id: 'escolha-preparar-balao-resgate',
          text: 'Carregar a cápsula do balão meteorológico com sementes de flores',
          description: 'Agilizar o pacote de ajuda ecológica para enviar aos céus.',
          icon: '🎈',
          targetSceneId: 'cena-2-preparo-sonda'
        }
      ]
    },
    'cena-2-preparo-sonda': {
      id: 'cena-2-preparo-sonda',
      chapterNumber: 2,
      title: 'O Lançamento da Sonda Meteorológica',
      text: 'Gabriel e Íris desceram ao laboratório botânico do observatório e encheram tubos de vidro ecológicos com sementes de dente-de-leão, calêndula e girassóis anões. Prenderam os frascos a uma sonda leve impulsionada por um balão solar de ar quente com luz de navegação estroboscópica.',
      sceneryType: 'sky-islands',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-tubos-sementes',
          name: 'Frascos de Sementes com Paraquedas de Seda',
          x: 48,
          y: 48,
          width: 22,
          height: 24,
          actionType: 'flower-bloom',
          label: 'Acondicionar as Sementes com Proteção Térmica',
          hint: 'Protege contra o frio das altitudes...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🌱',
          triggeredIcon: '🌻',
          eventResult: {
            narrativeNote: 'As sementinhas foram seladas com cera vegetal e um bilhete afetuoso de boa sorte!'
          }
        },
        {
          id: 'elem-balao-helio',
          name: 'Balão Solar com Hélio Ecológico',
          x: 25,
          y: 35,
          width: 24,
          height: 26,
          actionType: 'rocket-launch',
          label: 'Cortar o Cabo de Amarração e Lançar',
          hint: 'Sobe rápido como um cometa prateado...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🎈',
          triggeredIcon: '🚀',
          eventResult: {
            narrativeNote: 'O balão subiu girando suavemente, riscando a noite escura com seu farol azul cintilante!'
          }
        },
        {
          id: 'elem-tela-radar',
          name: 'Monitor de Telemetria e GPS',
          x: 75,
          y: 60,
          width: 22,
          height: 22,
          actionType: 'light-glow',
          label: 'Acompanhar a Trajetória no Radar',
          hint: 'Altitude: 1000m... 2000m... 3000m!',
          hasTriggered: false,
          sound: 'bell',
          icon: '🖥️',
          triggeredIcon: '📡',
          eventResult: {
            narrativeNote: 'Bip! Acoplamento confirmado! A estação capturou a carga com seu braço magnético suave!'
          }
        }
      ],
      choices: [
        {
          id: 'escolha-estabelecer-videochamada',
          text: 'Sintonizar o canal de vídeo de alta altitude',
          description: 'Ver os rostos dos cientistas que enviaram o pedido de ajuda.',
          icon: '📹',
          targetSceneId: 'cena-3-revelacao-jardim-nuvens'
        },
        {
          id: 'escolha-comemorar-equipe',
          text: 'Registrar a descoberta no livro de ocorrências astronômicas',
          description: 'Documentar a primeira missão de resgate botânico espacial da história.',
          icon: '📝',
          targetSceneId: 'cena-3-revelacao-jardim-nuvens'
        }
      ]
    },
    'cena-3-revelacao-jardim-nuvens': {
      id: 'cena-3-revelacao-jardim-nuvens',
      chapterNumber: 3,
      title: 'O Jardim Flutuante Mais Lindo do Mundo',
      text: 'Uma transmissão de vídeo cristalina iluminou o monitor do observatório! Na tela, a Dra. Solange e sua equipe de biólogos sorriam com lágrimas de gratidão na estufa panorâmica da estação flutuante. Elas já estavam plantando as sementes que, graças à luz solar pura das nuvens, começaram a brotar instantaneamente em botões dourados! O céu noturno foi pintado por fogos de artifício ecológicos de luz verde para celebrar a amizade entre a Terra e as Estrelas!',
      sceneryType: 'snowy-aurora',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-dra-solange-video',
          name: 'Dra. Solange Mostrando os Primeiros Brotos',
          x: 50,
          y: 45,
          width: 26,
          height: 26,
          actionType: 'star-sparkle',
          label: 'Acenar para a Cientista no Monitor',
          hint: 'Ela manda beijos do espaço...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '👩‍🔬',
          triggeredIcon: '💐',
          eventResult: {
            narrativeNote: 'Dra. Solange batizou a nova flor cultivada de "Estrela de Gabriel e Íris"!'
          }
        },
        {
          id: 'elem-chuva-luz-aurora',
          name: 'Show de Luzes das Auroras Boreais',
          x: 25,
          y: 50,
          width: 22,
          height: 24,
          actionType: 'river-flow',
          label: 'Contemplar a Cascata de Cores no Céu',
          hint: 'Verde, azul e violeta...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🌌',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: 'A estação acendeu todos os seus refletores formando uma constelação em forma de coração no céu!'
          }
        },
        {
          id: 'elem-insignia-astronomo',
          name: 'Insignia de Navegadores Celestes',
          x: 75,
          y: 58,
          width: 22,
          height: 22,
          actionType: 'chest-open',
          label: 'Colocar o Emblema de Astrônomo Herói',
          hint: 'Prêmio por decifrar o enigma estelar...',
          hasTriggered: false,
          sound: 'bell',
          icon: '⭐',
          triggeredIcon: '🎖️',
          eventResult: {
            narrativeNote: 'Gabriel e Íris nunca mais olharam para as estrelas da mesma maneira: o universo estava cheio de amigos!'
          }
        }
      ],
      choices: []
    }
  }
};
