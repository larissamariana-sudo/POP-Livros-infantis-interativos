import { Book } from '../../types';

export const story16PetAdoption: Book = {
  id: 'adocao-pipoca-mingau',
  title: 'Pipoca e Mingau: Um Lar Cheio de Amor',
  subtitle: 'A emocionante visita ao abrigo de animais e a decisão de adotar com carinho e responsabilidade',
  coverImage: 'pet-adoption-cover',
  coverEmoji: '🐶',
  ageGroup: '3-6',
  themeCategory: 'pets',
  themeColor: 'from-emerald-400 via-teal-500 to-amber-300',
  tagline: 'Visite o abrigo, dê carinho aos filhotinhos resgatados e descubra a beleza de adotar um novo membro da família!',
  totalChapters: 3,
  initialSceneId: 'cena-1-visita-abrigo',
  characters: [
    { name: 'Pipoca', role: 'Cachorrinho caramelo de orelhas caídas e rabo abanador', avatar: '🐕' },
    { name: 'Mingau', role: 'Gatinho rajado com patinhas brancas e miado dócil', avatar: '🐱' },
    { name: 'Dra. Luiza', role: 'Veterinária dedicada que cuida de animais com amor', avatar: '👩‍⚕️' }
  ],
  translations: {
    es: {
      title: 'Pipoca y Mingau: Un Hogar Lleno de Amor',
      subtitle: 'La emotiva visita al refugio de animales y la decisión de adoptar con responsabilidad',
      tagline: '¡Visita el refugio, da mimos a los perritos y gatitos y descubre el amor de adoptar!'
    },
    en: {
      title: 'Pipoca & Mingau: A Home Full of Love',
      subtitle: 'The heartwarming visit to the animal shelter and the choice to adopt with love and care',
      tagline: 'Visit the shelter, pet rescued puppies and kittens, and learn how wonderful adoption is!'
    },
    it: {
      title: 'Pipoca e Mingau: Una Casa Piena d\'Amore',
      subtitle: 'L\'emozionante visita al rifugio per animali e la scelta di adottare con affetto e cura',
      tagline: 'Visita il rifugio, accarezza cagnolini e gattini e scopri la bellezza dell\'adozione!'
    }
  },
  scenes: {
    'cena-1-visita-abrigo': {
      id: 'cena-1-visita-abrigo',
      chapterNumber: 1,
      title: 'O Abrigo das Quatro Patas',
      text: 'O abrigo Cantinho do Amor era espaçoso, limpo e cheio de grama verde. Ao passarem pelos portões, um coro alegre de latidinhos e miadinhos afetuosos recepcionou a família. Cada animalzinho ali sonhava em ganhar uma família para chamar de sua.',
      sceneryType: 'pet-shelter',
      discoveryCountMax: 3,
      interactiveElements: [
        {
          id: 'elem-pipoca-rabo',
          name: 'Pipoca Abanando o Rabinho',
          x: 25,
          y: 55,
          width: 22,
          height: 24,
          actionType: 'animal-pet',
          label: 'Acariciar Pipoca',
          hint: 'Ele quer ser seu amigo...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐕',
          triggeredIcon: '❤️',
          eventResult: {
            narrativeNote: '❤️ O Pipoca deu lambe-beijos nas mãos e rolou de barriguinha para cima pedindo cafuné!',
          }
        },
        {
          id: 'elem-mingau-arranhador',
          name: 'Mingau no Topo do Poste',
          x: 75,
          y: 45,
          width: 20,
          height: 22,
          actionType: 'creature-jump',
          label: 'Chamar o Gatinho Mingau',
          hint: 'Miau miau miau...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🐱',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Mingau desceu com passos de pluma e roçou o focinho quentinho no seu sapato!',
          }
        },
        {
          id: 'elem-pote-racao',
          name: 'Tigela de Ração Saudável',
          x: 50,
          y: 70,
          width: 20,
          height: 20,
          actionType: 'water-drink',
          label: 'Verificar Água Fresca e Ração',
          hint: 'Animais precisam de água limpa...',
          hasTriggered: false,
          sound: 'water',
          icon: '🥣',
          triggeredIcon: '💧',
          eventResult: {
            narrativeNote: '💧 Água fresca e filtrada! Cuidar da saúde dos animais é um ato de amor!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-adotar-pipoca',
          text: 'Adotar Pipoca e Ensiná-lo a Brincar no Quintal',
          description: 'Dar uma coleira macia, vacinas em dia e longos passeios pelo parque.',
          icon: '🐕',
          targetSceneId: 'cena-2-vida-com-pipoca'
        },
        {
          id: 'escolha-adotar-mingau',
          text: 'Adotar Mingau e Montar uma Cama de Sol na Janela',
          description: 'Acolher o gatinho com arranhador, brinquedo de pena e muito aconchego.',
          icon: '🐱',
          targetSceneId: 'cena-2-vida-com-mingau'
        }
      ],
      characterDialogue: {
        speaker: 'Dra. Luiza',
        avatar: '👩‍⚕️',
        text: 'Adotar não é comprar um brinquedo; é prometer amar, cuidar, alimentar e proteger por toda a vida!'
      }
    },
    'cena-2-vida-com-pipoca': {
      id: 'cena-2-vida-com-pipoca',
      chapterNumber: 2,
      title: 'O Primeiro Dia de Pipoca em Casa',
      text: 'Chegando em casa, Pipoca cheirou cada cantinho com curiosidade. Quando viu sua caminha macia ao lado do armário, deu três voltinhas e soltou um suspiro de alívio: agora ele tinha um lar de verdade!',
      sceneryType: 'pet-shelter',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-bola-tenis',
          name: 'Bolinha Amarela de Brinquedo',
          x: 40,
          y: 60,
          width: 20,
          height: 22,
          actionType: 'ball-kick',
          label: 'Jogar a Bolinha para Pipoca',
          hint: 'Vai buscar, amigão!...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🎾',
          triggeredIcon: '🐕',
          eventResult: {
            narrativeNote: '🐕 Pipoca pegou no ar e trouxe no rabo com olhos brilhando de felicidade pura!',
          }
        },
        {
          id: 'elem-coleira-identificacao',
          name: 'Medalha com Nome e Telefone',
          x: 70,
          y: 50,
          width: 18,
          height: 20,
          actionType: 'bell-ring',
          label: 'Colocar Medalha de Identificação',
          hint: 'Segurança em primeiro lugar...',
          hasTriggered: false,
          sound: 'bell',
          icon: '🏷️',
          triggeredIcon: '🛡️',
          eventResult: {
            narrativeNote: '🛡️ Plim! Agora Pipoca está sempre protegido e identificado com o amor da família!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-levar-mingau-tambem',
          text: 'Voltar ao Abrigo para Trazer Mingau Também: Amigos Inseparáveis!',
          description: 'Cachorros e gatos podem ser os melhores irmãos do mundo!',
          icon: '🐾',
          targetSceneId: 'cena-final-adocao'
        }
      ],
      characterDialogue: {
        speaker: 'Pipoca',
        avatar: '🐕',
        text: 'Au au! Obrigado por me escolher! Eu prometo abanar meu rabo para você todos os dias!'
      }
    },
    'cena-2-vida-com-mingau': {
      id: 'cena-2-vida-com-mingau',
      chapterNumber: 2,
      title: 'O Ronrom Acolhedor de Mingau',
      text: 'Mingau encontrou o ponto perfeito onde o raio de sol batia no tapete da sala. Com movimentos elegantes, lavou as bochechas com a patinha e depois encostou a cabecinha macia para pedir carinho na orelha.',
      sceneryType: 'grandparents-house',
      discoveryCountMax: 2,
      interactiveElements: [
        {
          id: 'elem-ratinho-corda',
          name: 'Ratinho de Pano com Peninha',
          x: 35,
          y: 65,
          width: 20,
          height: 20,
          actionType: 'creature-jump',
          label: 'Balançar a Peninha Colorida',
          hint: 'Veja o bote acrobático...',
          hasTriggered: false,
          sound: 'creature',
          icon: '🪶',
          triggeredIcon: '🐱',
          eventResult: {
            narrativeNote: '🐱 Salto triplo! Mingau deu um pulo gracioso e pegou a peninha com as almofadinhas das patas!',
          }
        },
        {
          id: 'elem-pratinho-leite-pet',
          name: 'Comedouro Especial',
          x: 68,
          y: 60,
          width: 18,
          height: 20,
          actionType: 'water-drink',
          label: 'Servir Refeição Nutritiva',
          hint: 'Alimentação adequada para felinos...',
          hasTriggered: false,
          sound: 'pop',
          icon: '🐟',
          triggeredIcon: '✨',
          eventResult: {
            narrativeNote: '✨ Refeição saborosa e balanceada para manter o pelo macio e a saúde de ferro!',
          }
        }
      ],
      choices: [
        {
          id: 'escolha-adotar-pipoca-junto',
          text: 'Trazer Pipoca para Brincar com Mingau no Quintal',
          description: 'Descobrir que amizade não tem raça nem espécie quando há carinho.',
          icon: '🐶',
          targetSceneId: 'cena-final-adocao'
        }
      ],
      characterDialogue: {
        speaker: 'Mingau',
        avatar: '🐱',
        text: 'Miau! Este lugar tem cheiro de paz. Eu vou dormir ronronando bem no pé da sua cama.'
      }
    },
    'cena-final-adocao': {
      id: 'cena-final-adocao',
      chapterNumber: 3,
      title: 'A Família dos Corações Conectados',
      text: 'No fim das contas, Pipoca e Mingau dividem o mesmo tapete, a mesma tigela de água fresca e o mesmo amor infinito da casa. Adotar transformou não apenas a vida dos dois bichinhos, mas encheu a casa de risadas, brincadeiras e ternura.',
      sceneryType: 'pet-shelter',
      discoveryCountMax: 1,
      interactiveElements: [
        {
          id: 'elem-diploma-adocao',
          name: 'Certificado Oficial de Adoção Responsável',
          x: 48,
          y: 50,
          width: 22,
          height: 24,
          actionType: 'pet-hug',
          label: 'Celebrar com Abraço Coletivo',
          hint: 'Toque para consagrar a família...',
          hasTriggered: false,
          sound: 'fanfare',
          icon: '📜',
          triggeredIcon: '🏆',
          eventResult: {
            narrativeNote: '🏆 Parabéns! Você é um Protetor dos Animais exemplar! Adotar é salvar uma vida com amor!',
          }
        }
      ],
      choices: [
        {
          id: 'recomecar-adocao',
          text: 'Visitar o abrigo e reviver essa história de amor!',
          description: 'Recomece a história para explorar outros cuidados e carinhos.',
          icon: '🔄',
          targetSceneId: 'cena-1-visita-abrigo'
        }
      ],
      characterDialogue: {
        speaker: 'Dra. Luiza',
        avatar: '👩‍⚕️',
        text: 'Quando você adota um bichinho, o mundo inteiro se torna um lugar mais gentil e luminoso!'
      }
    }
  }
};
