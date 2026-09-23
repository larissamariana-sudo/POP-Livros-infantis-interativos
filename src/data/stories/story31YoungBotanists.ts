import { Book } from '../../types';

export const story31YoungBotanists: Book = {
  id: 'jovens-botanicos-floresta-antiga',
  title: 'A Sociedade dos Jovens Botânicos e a Floresta Antiga',
  subtitle: 'A busca pela semente perdida do Ipê Dourado Ancestral e o herbário vivo da Mata Atlântica',
  coverImage: 'young-botanists-cover',
  coverEmoji: '🌿🔍',
  ageGroup: '7-10',
  themeCategory: 'nature',
  themeColor: 'from-emerald-700 via-green-600 to-amber-500',
  tagline: 'Colete sementes crioulas nativas, classifique orquídeas raras na lupa de campo e regenere o solo da mata!',
  totalChapters: 3,
  initialSceneId: 'cena-1-clareira-ipe',
  characters: [
    { name: 'Lia', role: 'Estudante de agronomia e catalogadora de sementes florestais', avatar: '🌿' },
    { name: 'Cauã', role: 'Especialista em micologia e redes subterrâneas de cogumelos', avatar: '🍄' },
    { name: 'Dona Benvinda', role: 'Rendeira e raizeira sábia que conhece cada folha medicinal da mata', avatar: '👵' }
  ],
  translations: {
    es: {
      title: 'La Sociedad de Jóvenes Botánicos y el Bosque Antiguo',
      subtitle: 'La búsqueda de semillas nativas y el herbario vivo para regenerar la selva',
      tagline: '¡Recolecta semillas ancestrales, clasifica orquídeas silvestres y regenera el bosque!'
    },
    en: {
      title: 'The Young Botanists Society & the Ancient Forest',
      subtitle: 'Searching for heirloom native seeds and creating a living rainforest seed bank',
      tagline: 'Harvest wild native seeds, classify rare orchids with field lenses, and rewild ancient soils!'
    },
    it: {
      title: 'La Società dei Giovani Botanici e l\'Antica Foresta',
      subtitle: 'La ricerca dei semi rari e la creazione di un vivaio per salvare la biodiversità',
      tagline: 'Raccogli semi autoctoni, classifica le piante con la lente e proteggi gli alberi secolari!'
    }
  },
  scenes: {
    'cena-1-clareira-ipe': {
      id: 'cena-1-clareira-ipe',
      chapterNumber: 1,
      title: 'O Sussurro do Tronco Centenário',
      text: 'No coração de uma reserva florestal preservada, Lia e Cauã caminhavam sob o dossel verde de árvores de quarenta metros de altura. O solo estava forrado por uma camada macia de folhas e musgos. À frente deles, erguia-se o "Avô da Mata", um jequitibá-rosa gigantesco cujo tronco precisava de oito pessoas de braços abertos para abraçar.',
      sceneryType: 'cherry-blossom',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-lupa-botanica',
          name: 'Lupa Botânica 10x Cromada',
          x: 48,
          y: 45,
          width: 22,
          height: 24,
          actionType: 'flower-bloom',
          label: 'Examinar Esporos e Nervuras',
          hint: 'Nervuras perfeitas da folha...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🔍',
          triggeredIcon: '🌿',
          eventResult: {
            narrativeNote: '🌿 As nervuras microscópicas transportam água e nutrientes por capilaridade com eficiência perfeita!',
          }
        },
        {
          id: 'elem-micelio-cogumelo',
          name: 'Rede Subterrânea de Micélio',
          x: 25,
          y: 65,
          width: 20,
          height: 22,
          actionType: 'secret-path',
          label: 'Descobrir a Internet das Árvores',
          hint: 'Fios brancos no solo...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🍄',
          triggeredIcon: '🕸️',
          eventResult: {
            narrativeNote: '🕸️ Micorrizas! A rede de fungos conecta as raízes de todas as árvores da floresta para trocarem nutrientes e avisos de perigo!',
          }
        },
        {
          id: 'elem-vagem-semente',
          name: 'Vagem de Sementes Aladas',
          x: 75,
          y: 35,
          width: 18,
          height: 20,
          actionType: 'fruit-fall',
          label: 'Colher a Semente Alada',
          hint: 'Gira no ar como helicóptero...',
          hasTriggered: false,
          sound: 'water',
          icon: '🌾',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Semente colhida com sucesso! Ela possui asinhas aerodinâmicas que voam centenas de metros levadas pelo vento!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-viveiro-germinaçao',
          text: 'Montar o Banco de Germinação e Tubetes de Compostagem Orgânica',
          description: 'Preparar substrato rico em húmus para produzir 500 mudas de árvores nativas.',
          icon: '🌱',
          targetSceneId: 'cena-2-viveiro-mudas'
        },
        {
          id: 'escolha-horto-medicinal',
          text: 'Aprender com Dona Benvinda os Segredos das Ervas Medicinais da Floresta',
          description: 'Identificar plantas que aliviam dores, curam picadas e fortalecem a imunidade.',
          icon: '🪴',
          targetSceneId: 'cena-2-horto-ervas'
        }
      ],
      characterDialogue: {
        speaker: 'Dona Benvinda',
        avatar: '👵',
        text: 'A floresta é a maior farmácia e o maior templo que existe. Quem aprende a escutar as plantas nunca se sente sozinho no mundo!'
      }
    },
    'cena-2-viveiro-mudas': {
      id: 'cena-2-viveiro-mudas',
      chapterNumber: 2,
      title: 'O Berçário das Futuras Florestas',
      text: 'Dentro da estufa com sombrite, Lia e Cauã organizaram centenas de tubetes com terra preta adubada. Ao depositarem com cuidado as sementes aladas e regarem com água da chuva coletada, pequenas folhinhas verdes começaram a despontar.',
      sceneryType: 'cozy-farm',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-regador-chuva',
          name: 'Regador de Água Pluvial',
          x: 45,
          y: 55,
          width: 22,
          height: 24,
          actionType: 'water-drink',
          label: 'Regar os Brotos em Chuva Fina',
          hint: 'Sem encharcar as raízes...',
          hasTriggered: false,
          sound: 'water',
          icon: '🪴',
          triggeredIcon: '💧',
          eventResult: {
            narrativeNote: '💧 Gotículas suaves umedeceram o solo! Em 7 dias, os brotos de jequitibá estarão fortes para o plantio definitivo!',
          }
        },
        {
          id: 'elem-etiqueta-identificacao',
          name: 'Placa de Madeira com Nome Científico',
          x: 75,
          y: 45,
          width: 20,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Catalogar a Espécie Nativa',
          hint: 'Cariniana legalis...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🏷️',
          triggeredIcon: '📜',
          eventResult: {
            narrativeNote: '📜 Catalogada no Herbário Digital Nacional! Cada muda tem agora sua certidão de nascimento!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-mutirao-plantio',
          text: 'Organizar o Mutirão da Comunidade para Reflorestar a Margem do Rio',
          description: 'Plantar as mudas na mata ciliar para proteger a água de nascentes contra o assoreamento.',
          icon: '🌳',
          targetSceneId: 'cena-final-botanica'
        }
      ],
      characterDialogue: {
        speaker: 'Lia',
        avatar: '🌿',
        text: 'Plantar uma árvore que viverá quinhentos anos é o presente mais bonito e generoso que podemos deixar para o futuro!'
      }
    },
    'cena-2-horto-ervas': {
      id: 'cena-2-horto-ervas',
      chapterNumber: 2,
      title: 'O Conhecimento Tradicional das Raízes',
      text: 'Dona Benvinda colheu folhas de capim-limão, guaco e boldo. Esfregando suavemente entre os dedos, o aroma cítrico e balsâmico inundou o alpendre da casa de taipa.',
      sceneryType: 'cozy-farm',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-pilao-pedra',
          name: 'Pilão de Pedra para Ervas',
          x: 48,
          y: 50,
          width: 22,
          height: 24,
          actionType: 'flower-bloom',
          label: 'Macerar Folhas de Guaco',
          hint: 'Xarope natural para tosse...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🥣',
          triggeredIcon: '🌿',
          eventResult: {
            narrativeNote: '🌿 O sumo verde exalou propriedades broncodilatadoras comprovadas pela farmacopeia popular e científica!',
          }
        },
        {
          id: 'elem-xicara-cha',
          name: 'Xícara Fumegante de Chá de Ervas',
          x: 25,
          y: 55,
          width: 18,
          height: 20,
          actionType: 'water-drink',
          label: 'Provar a Infusão Calmante',
          hint: 'Calor e bem-estar...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🍵',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '❤️ O chá acalma a mente e equilibra as energias do corpo com a doçura da natureza!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-mutirao-plantio-2',
          text: 'Unir a Ciência Botânica com o Saber Popular no Grande Plantio da Nascente',
          description: 'Criar uma floresta de alimentos e remédios naturais para toda a comunidade.',
          icon: '🌱',
          targetSceneId: 'cena-final-botanica'
        }
      ],
      characterDialogue: {
        speaker: 'Cauã',
        avatar: '🍄',
        text: 'Quando aliamos a pesquisa de laboratório à sabedoria dos mais velhos, encontramos as curas mais perfeitas!'
      }
    },
    'cena-final-botanica': {
      id: 'cena-final-botanica',
      chapterNumber: 3,
      title: 'A Nova Floresta que Florescerá pelos Séculos',
      text: 'Com as mãos cobertas pela terra preta e fértil, crianças, jovens e avós fincaram cinquenta estacas com mudas ao longo da margem do rio. As borboletas azuis já começaram a rodopiar entre as folhas novas. Aquela terra, antes degradada, agora respirava o recomeço da vida.',
      sceneryType: 'cherry-blossom',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-medalha-botanico',
          name: 'Comenda de Guardião da Biodiversidade',
          x: 48,
          y: 50,
          width: 24,
          height: 24,
          actionType: 'flower-bloom',
          label: 'Receber a Comenda da Floresta Viva',
          hint: 'Toque para consagrar...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🌳',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Conquista Notável: Mestres Botânicos e Reflorestadores! Você semeou esperança duradoura para o planeta!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-botanica',
          text: 'Entrar na floresta para coletar novas sementes raras!',
          description: 'Recomece a expedição botânica para classificar outras espécies da mata.',
          icon: '🔄',
          targetSceneId: 'cena-1-clareira-ipe'
        }
      ],
      characterDialogue: {
        speaker: 'Lia, Cauã e Benvinda',
        avatar: '🌿🍄',
        text: 'Quem planta árvores colhe sombra, água fresca e vida em abundância para as futuras gerações!'
      }
    }
  }
};
