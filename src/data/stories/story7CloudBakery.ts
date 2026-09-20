import { Book } from '../../types';

export const story7CloudBakery: Book = {
  id: 'confeitaria-das-nuvens',
  title: 'A Fantástica Confeitaria das Nuvens',
  subtitle: 'Receitas mágicas no alto do céu onde chove confeito e venta cheiro de baunilha',
  coverImage: 'bakery-cover',
  coverEmoji: '🧁',
  ageGroup: '3-6',
  themeColor: 'from-pink-400 via-rose-400 to-amber-300',
  tagline: 'Asse bolinhos fofinhos, adoce nuvens cinzentas e voe em balões de brigadeiro!',
  totalChapters: 3,
  initialSceneId: 'cena-1-cozinha-celeste',
  characters: [
    { name: 'Pingo', role: 'Coelhinho confeiteiro de avental florido', avatar: '🐰' },
    { name: 'Pipoca Doce', role: 'Pombinha mensageira com batedeira', avatar: '🕊️' }
  ],
  scenes: {
    'cena-1-cozinha-celeste': {
      id: 'cena-1-cozinha-celeste',
      chapterNumber: 1,
      title: 'A Cozinha no Topo do Cumulus',
      text: 'No alto de uma nuvem branquinha e fofa como chantilly, o coelhinho Pingo preparava a maior fornada de biscoitos estelares do ano. Panelas de cobre ferviam calda de caramelo que borbulhava com som de risadinha de bebê.',
      sceneryType: 'sky-islands',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-forno-cupcake',
          name: 'Forno de Tijolo de Açúcar',
          x: 65,
          y: 50,
          width: 24,
          height: 26,
          actionType: 'cookie-bite',
          label: 'Abrir Forno de Bolinhos',
          hint: 'Toque na portinha do forno...',
          hasTriggered: false,
          sound: 'fire',
          icon: '🧁',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '🧁 O forno abriu soltando fumacinha de morango e uma dúzia de cupcakes douradinhos!',
          }
        },
        {
          id: 'elem-batedeira-nuvem',
          name: 'Batedeira de Nuvens',
          x: 25,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Bater o Chantilly Cósmico',
          hint: 'Gire a manivela da batedeira...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🥣',
          triggeredIcon: '🍥',
          eventResult: {
            narrativeNote: '🍥 Chuá-chuá! A massa cresceu tanto que quase virou um castelo de merengue!',
          }
        },
        {
          id: 'elem-pingo-coelho',
          name: 'Chef Pingo',
          x: 48,
          y: 60,
          width: 20,
          height: 24,
          actionType: 'animal-pet',
          label: 'Ajudar o Chef Pingo',
          hint: 'Dê um incentivo ao coelhinho!',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐰',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '🐰 Pingo bateu as patinhas de emoção e colocou um chapéu de mestre-cuca em você!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-chuva-caramelo',
          text: 'Fazer chover calda morna sobre a Colina dos Waffles',
          description: 'Apertar a válvula da nuvem doce para criar o café da manhã mais gostoso do mundo.',
          icon: '🧇',
          targetSceneId: 'cena-2-colina-waffles'
        },
        {
          id: 'escolha-ponte-pirulito',
          text: 'Montar a Ponte Suspensa de Marshmallow Colorido',
          description: 'Ligar a cozinha à Ilha das Tortas Geladas de Amora.',
          icon: '🍭',
          targetSceneId: 'cena-2-marshmallow'
        }
      ],
      characterDialogue: {
        speaker: 'Pingo',
        avatar: '🐰',
        text: 'Nham nham! Nossa receita precisa de uma pitadinha de magia! O que faremos agora?'
      }
    },
    'cena-2-colina-waffles': {
      id: 'cena-2-colina-waffles',
      chapterNumber: 2,
      title: 'O Banquete de Gotas Caramelizadas',
      text: 'A colina inteira era feita de waffles dourados e crocantes. A chuvinha doce caía devagar, enchendo os quadradinhos com mel de flores celestes.',
      sceneryType: 'sky-islands',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-cereja-topo',
          name: 'Cereja Gigante de Cristal',
          x: 45,
          y: 35,
          width: 22,
          height: 24,
          actionType: 'fruit-fall',
          label: 'Colocar a Cereja no Topo',
          hint: 'Toque para encaixar a cereja...',
          hasTriggered: false,
          sound: 'plop',
          icon: '🍒',
          triggeredIcon: '⭐',
          eventResult: {
            narrativeNote: '⭐ Plop! A cereja reluziu como um rubi e fez tocar uma musiquinha encantada!',
          }
        },
        {
          id: 'elem-fonte-chocolate',
          name: 'Mini Cascata de Chocolate Branco',
          x: 75,
          y: 55,
          width: 20,
          height: 22,
          actionType: 'river-flow',
          label: 'Fazer a Cascata Fluir',
          hint: 'Toque no riozinho cremoso...',
          hasTriggered: false,
          sound: 'water',
          icon: '🍫',
          triggeredIcon: '🌊',
          eventResult: {
            narrativeNote: '🌊 Tchibum doce! O riacho começou a escorrer macio espalhando cheirinho de coco!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-grande-salão-doces',
          text: 'Servir o Banquete Real aos Bichinhos Voadores',
          description: 'Chamar passarinhos, borboletas e pequenos dragões para a ceia.',
          icon: '🎉',
          targetSceneId: 'cena-final-confeitaria'
        }
      ],
      characterDialogue: {
        speaker: 'Pipoca Doce',
        avatar: '🕊️',
        text: 'Nunca vi sobremesa tão linda! Todos os convidados celestes já estão chegando!'
      }
    },
    'cena-2-marshmallow': {
      id: 'cena-2-marshmallow',
      chapterNumber: 2,
      title: 'A Passarela das Almofadas de Açúcar',
      text: 'Cada passo na ponte fofa dava a sensação de andar num trampolim macio. Ao redor, nuvenzinhas rosa-choque piscavam em ritmo de cantiga de ninar.',
      sceneryType: 'sky-islands',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-marshmallow-pulo',
          name: 'Marshmallow Pula-Pula',
          x: 35,
          y: 60,
          width: 22,
          height: 22,
          actionType: 'creature-jump',
          label: 'Pular Bem Alto',
          hint: 'Toque no marshmallow elástico!',
          hasTriggered: false,
          sound: 'creature',
          icon: '🍬',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Boooing! Você deu um salto até as nuvens de algodão e pegou uma estrelinha!',
          }
        },
        {
          id: 'elem-arco-donut',
          name: 'Portal de Donut Gigante',
          x: 70,
          y: 40,
          width: 22,
          height: 24,
          actionType: 'cookie-bite',
          label: 'Polvilhar Confeitos',
          hint: 'Toque para salpicar confeitos coloridos...',
          hasTriggered: false,
          sound: 'magic',
          icon: '🍩',
          triggeredIcon: '🌈',
          eventResult: {
            narrativeNote: '🌈 Confeitos em forma de corações e luas choveram com brilho!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-grande-salão-doces-2',
          text: 'Abrir as Portas da Grande Sala de Chá das Fadas',
          description: 'Reunir todas as fadinhas para a degustação dos doces mais fofos.',
          icon: '🧚',
          targetSceneId: 'cena-final-confeitaria'
        }
      ],
      characterDialogue: {
        speaker: 'Pingo',
        avatar: '🐰',
        text: 'Nossos passos deixam marcas de confeito! Essa ponte é a mais fofa que já construímos!'
      }
    },
    'cena-final-confeitaria': {
      id: 'cena-final-confeitaria',
      chapterNumber: 3,
      title: 'Mestre Confeiteiro das Alturas',
      text: 'A festa das nuvens foi um sucesso inesquecível! Todos os bichinhos provaram suas criações doces e agradeceram com canções afetuosas. O céu ganhou um tom dourado de alegria!',
      sceneryType: 'sky-islands',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-trofeu-confeiteiro',
          name: 'Batedeira Dourada de Diamantes',
          x: 45,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'star-sparkle',
          label: 'Receber Troféu de Mestre Cuca',
          hint: 'Toque para segurar seu troféu confeitado!',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '🎂',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Parabéns! Você recebeu o Avental de Ouro da Mais Doce Confeitaria do Mundo!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-confeitaria',
          text: 'Preparar uma nova fornada divertida!',
          description: 'Retorne à cozinha das nuvens para criar novas receitas.',
          icon: '🔄',
          targetSceneId: 'cena-1-cozinha-celeste'
        }
      ],
      characterDialogue: {
        speaker: 'Pingo e Pipoca Doce',
        avatar: '🐰',
        text: 'Foi um dia recheado de carinho e risadas! Volte sempre para cozinhar com a gente!'
      }
    }
  }
};
