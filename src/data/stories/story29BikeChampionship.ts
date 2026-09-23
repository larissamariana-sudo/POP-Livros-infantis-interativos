import { Book } from '../../types';

export const story29BikeChampionship: Book = {
  id: 'corrida-bicicleta-sete-vales',
  title: 'A Corrida de Bicicleta dos Sete Vales',
  subtitle: 'Pedais na terra batida, trocas de marcha na subida íngreme e o companheirismo na trilha mais desafiadora da serra',
  coverImage: 'bike-championship-cover',
  coverEmoji: '🚵‍♀️⛰️',
  ageGroup: '7-10',
  themeCategory: 'sports',
  themeColor: 'from-amber-600 via-orange-500 to-emerald-600',
  tagline: 'Ajuste o câmbio traseiro, mantenha a cadência de respiração e descubra que cruzar a linha de chegada é vitória coletiva!',
  totalChapters: 3,
  initialSceneId: 'cena-1-largada-serra',
  characters: [
    { name: 'Lucas', role: 'Ciclista dedicado com mountain bike de alumínio e capacete amarelo', avatar: '🚴' },
    { name: 'Bia', role: 'Ciclista técnica especialista em curvas fechadas e descidas técnicas', avatar: '🚵‍♀️' },
    { name: 'Mecânico Chico', role: 'Mestre das correntes, catracas e calibragem precisa de pneus', avatar: '🔧' }
  ],
  translations: {
    es: {
      title: 'La Carrera de Bicicletas de los Siete Valles',
      subtitle: 'Pedales en tierra, cambios de marcha en subidas empinadas y compañerismo en la montaña',
      tagline: '¡Ajusta tu bicicleta, mantén el ritmo de pedaleo y conquista la cima con espíritu deportivo!'
    },
    en: {
      title: 'The Seven Valleys Mountain Bike Challenge',
      subtitle: 'Dusty switchbacks, tactical gear shifting up steep inclines, and deep camaraderie on mountain trails',
      tagline: 'Calibrate your gears, find your breathing rhythm, and discover crossing the finish line is a team victory!'
    },
    it: {
      title: 'La Corsa in Bicicletta delle Sette Valli',
      subtitle: 'Pedalate su sentieri sterrati, cambi marcia su salite ripide e il valore della lealtà sportiva',
      tagline: 'Regola il cambio, mantieni il ritmo di pedalata e supera le sfide con determinazione!'
    }
  },
  scenes: {
    'cena-1-largada-serra': {
      id: 'cena-1-largada-serra',
      chapterNumber: 1,
      title: 'A Linha de Partida no Mirante da Neblina',
      text: 'O vento frio da manhã soprava forte no cume do Mirante da Neblina. Quarenta jovens ciclistas ajustavam seus capacetes e óculos de proteção. Lucas e Bia faziam o último check-up: freios a disco calibrados, pneus com 30 PSI e correntes lubrificadas.',
      sceneryType: 'sports-field',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-bomba-pneu',
          name: 'Bomba de Ar Portátil com Manômetro',
          x: 25,
          y: 60,
          width: 20,
          height: 22,
          actionType: 'bell-ring',
          label: 'Conferir Calibragem dos Pneus',
          hint: 'Pressão ideal para pedras...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🛞',
          triggeredIcon: '✔️',
          eventResult: {
            narrativeNote: '✔️ Pressão exata! Aderência total nas curvas escorregadias de terra batida!',
          }
        },
        {
          id: 'elem-cambio-bike',
          name: 'Alavanca do Câmbio Traseiro',
          x: 48,
          y: 50,
          width: 22,
          height: 24,
          actionType: 'ball-kick',
          label: 'Trocar para Marcha Leve',
          hint: 'Para encarar a subida da pedra...',
          hasTriggered: false,
          sound: 'magic',
          icon: '⚙️',
          triggeredIcon: '🚴',
          eventResult: {
            narrativeNote: '🚴 Trac-clic! Corrente na coroa maior! Pedalar fica suave e economiza a musculatura das coxas!',
          }
        },
        {
          id: 'elem-garrafa-eletrolitos',
          name: 'Caramanhola Térmica com Água Fresca',
          x: 75,
          y: 45,
          width: 18,
          height: 20,
          actionType: 'water-drink',
          label: 'Tomar um Gole Estratégico de Água',
          hint: 'Hidratação preventiva...',
          hasTriggered: false,
          sound: 'water',
          icon: '💧',
          triggeredIcon: '⚡',
          eventResult: {
            narrativeNote: '⚡ Hidratação em dia! Um gole a cada 15 minutos evita qualquer queda de rendimento físico!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-trilha-bosque-pinheiros',
          text: 'Seguir pela Trilha Técnica do Bosque de Pinheiros',
          description: 'Caminho com raízes e curvas sinuosas que exige equilíbrio e foco milimétrico.',
          icon: '🌲',
          targetSceneId: 'cena-2-bosque-tecnico'
        },
        {
          id: 'escolha-estrada-terreno-aberto',
          text: 'Pedalar pela Estrada Aberta de Cascalho com Subida Constante',
          description: 'Trecho com subida forte sob o sol onde a resistência cardiovascular dita o ritmo.',
          icon: '🚵‍♂️',
          targetSceneId: 'cena-2-subida-cascalho'
        }
      ],
      characterDialogue: {
        speaker: 'Bia',
        avatar: '🚵‍♀️',
        text: 'Não queime a largada, Lucas! A prova dos Sete Vales não é vencida nos primeiros cem metros, mas na constância do ritmo!'
      }
    },
    'cena-2-bosque-tecnico': {
      id: 'cena-2-bosque-tecnico',
      chapterNumber: 2,
      title: 'A Dança das Raízes e das Curvas Fechadas',
      text: 'No meio do bosque sombreado, raios de sol filtravam entre os troncos altos de pinheiros. Um competidor à frente teve a corrente caída e parou no acostamento. Lucas e Bia desaceleraram e ofereceram ajuda com o kit de ferramentas rápidas.',
      sceneryType: 'autumn-park',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-chave-corrente',
          name: 'Ferramenta Multiuso de Ciclista',
          x: 45,
          y: 55,
          width: 22,
          height: 24,
          actionType: 'secret-path',
          label: 'Ajudar a Recolocar a Corrente',
          hint: 'A solidariedade na trilha...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🔧',
          triggeredIcon: '🤝',
          eventResult: {
            narrativeNote: '🤝 Em menos de um minuto, o colega voltou a pedalar com gratidão e um grande sorriso!',
          }
        },
        {
          id: 'elem-curva-perfeita',
          name: 'Traçado da Curva Inclinada',
          x: 72,
          y: 40,
          width: 20,
          height: 20,
          actionType: 'ball-kick',
          label: 'Fazer a Curva sem Travar a Roda',
          hint: 'Incline o corpo...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🚲',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: '⭐ Curva executada com maestria! O peso apoiado no pedal de fora manteve a bicicleta colada ao chão!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-reta-chegada-serra',
          text: 'Acelerar em Conjunto na Reta Final Rumo ao Pórtico dos Sete Vales',
          description: 'Dar o sprint final em pelotão, incentivando uns aos outros até o último metro.',
          icon: '🏁',
          targetSceneId: 'cena-final-ciclismo'
        }
      ],
      characterDialogue: {
        speaker: 'Lucas',
        avatar: '🚴',
        text: 'Ninguém fica para trás! Ajudar um colega a consertar a bike vale mais do que qualquer medalha no peito!'
      }
    },
    'cena-2-subida-cascalho': {
      id: 'cena-2-subida-cascalho',
      chapterNumber: 2,
      title: 'A Escalada do Desfiladeiro do Sol',
      text: 'A inclinação chegou a 14%. O coração batia forte e ritmado. Em pé sobre os pedais, Lucas e Bia sincronizaram as pedaladas: puxa e empurra no ritmo constante da respiração pelo nariz.',
      sceneryType: 'sunny-beach',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-ritmo-respiracao',
          name: 'Respiração Sincronizada',
          x: 48,
          y: 45,
          width: 22,
          height: 24,
          actionType: 'water-drink',
          label: 'Controlar o Fôlego nas Subidas',
          hint: 'Inspira em 2, expira em 2...',
          hasTriggered: false,
          sound: 'water',
          icon: '🫁',
          triggeredIcon: '💪',
          eventResult: {
            narrativeNote: '💪 O ácido lático diminuiu e as pernas encontraram uma segunda onda de energia!',
          }
        },
        {
          id: 'elem-vista-cume',
          name: 'Placa do Topo do Desfiladeiro',
          x: 75,
          y: 35,
          width: 18,
          height: 20,
          actionType: 'star-sparkle',
          label: 'Avistar a Bandeira de Cume',
          hint: 'A subida acabou...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🚩',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Cume alcançado! Uma vista panorâmica de tirar o fôlego revelou os sete vales dourados lá embaixo!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-reta-chegada-serra-2',
          text: 'Descer com Prudência e Cruzar a Linha de Chegada de Mãos Dadas',
          description: 'Mostrar ao público que o espírito esportivo é a essência do ciclismo de montanha.',
          icon: '🏁',
          targetSceneId: 'cena-final-ciclismo'
        }
      ],
      characterDialogue: {
        speaker: 'Bia & Lucas',
        avatar: '🚵‍♀️🚴',
        text: 'Nós conseguimos vencer a subida mais dura da serra! Nossas mentes e corpos estão mais fortes do que nunca!'
      }
    },
    'cena-final-ciclismo': {
      id: 'cena-final-ciclismo',
      chapterNumber: 3,
      title: 'A Glória dos Pedais Coletivos',
      text: 'Sob aplausos entusiasmados dos moradores e das famílias na praça do vilarejo, Lucas, Bia e o colega que eles haviam ajudado cruzaram a linha de chegada lado a lado. Com rostos cobertos pela poeira da serra e sorrisos radiantes de orelha a orelha, celebraram a vitória da tenacidade e da irmandade.',
      sceneryType: 'sports-field',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-medalha-ciclismo-serra',
          name: 'Medalha dos Conquistadores dos Sete Vales',
          x: 48,
          y: 50,
          width: 24,
          height: 24,
          actionType: 'star-sparkle',
          label: 'Receber a Medalha de Mérito Esportivo',
          hint: 'Toque para consagrar...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🥇',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Conquista Notável: Mestres do Pedal e da Solidariedade! A força do caráter é o maior combustível de um atleta!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-ciclismo',
          text: 'Disputar outra etapa nas montanhas dos Sete Vales!',
          description: 'Recomece a prova para testar diferentes marchas e trajetos na montanha.',
          icon: '🔄',
          targetSceneId: 'cena-1-largada-serra'
        }
      ],
      characterDialogue: {
        speaker: 'Mecânico Chico',
        avatar: '🔧',
        text: 'Bicicleta limpa, mente focada e coração generoso: vocês são os verdadeiros embaixadores do esporte!'
      }
    }
  }
};
