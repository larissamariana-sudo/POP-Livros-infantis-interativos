import { BookTranslation, Language } from '../../types';

export const storiesPart3: Record<string, Partial<Record<Language, BookTranslation>>> = {
  'mimi-bob-misterio-bola': {
    es: {
      title: 'Amigo Gato y Amigo Perro: La Pareja Inseparable',
      subtitle: 'Floco es un gato observador y Trovão un perro alegre: juntos resuelven el enigma del jardín',
      tagline: '¡El gato mira en las alturas, el perro olfatea en el suelo: son los mejores amigos del mundo!',
      characters: [
        { name: 'Floco', role: 'Gato siamés ágil que sube a los muros' },
        { name: 'Trovão', role: 'Golden retriever enérgico y gran rastreador' },
        { name: 'Tito', role: 'Canario cantarín amigo del vecindario' }
      ],
      scenes: {
        'cena-1-quintal-dupla': {
          title: 'El Misterio de la Cinta Amarilla',
          text: 'El patio estaba soleado y cubierto de dientes de león. Tito, el canario, estaba triste: su cinta amarilla de la suerte había volado con el viento y caído tras el cerco de hortensias. ¡Floco y Trovão chocaron las patitas decididos a encontrarla!',
          dialogue: '¡Tú olfateas entre la hierba baja y yo trepo al tejado para mirar desde arriba!',
          speaker: 'Floco',
          choices: {
            'escolha-faro-trovao': {
              text: 'Seguir el Rastro con el Fino Olfato de Trovão',
              description: 'Oler las huellas en la tierra suave cerca del viejo cobertizo de madera.'
            },
            'escolha-pulo-floco': {
              text: 'Subir con Floco al Tejado del Invernadero',
              description: 'Saltar sobre los muros de ladrillo y buscar destellos amarillos entre las ramas del sauce.'
            }
          }
        }
      }
    },
    en: {
      title: 'Cat Friend & Dog Friend: The Inseparable Duo',
      subtitle: 'Floco is a clever cat and Trovão is a joyful dog: together they crack the garden mystery',
      tagline: 'The cat climbs up high, the dog sniffs on the ground: proving cats and dogs are best friends forever!',
      characters: [
        { name: 'Floco', role: 'Agile Siamese cat leaping onto high walls' },
        { name: 'Trovão', role: 'Energetic golden retriever with a keen nose' },
        { name: 'Tito', role: 'Singing canary neighborhood friend' }
      ],
      scenes: {
        'cena-1-quintal-dupla': {
          title: 'The Mystery of the Yellow Ribbon',
          text: 'The backyard was bright and peppered with blooming dandelions. Tito the canary was heartbroken: his lucky yellow ribbon had caught a breeze and vanished behind the hydrangea bushes. Floco and Trovão bumped paws, determined to recover it!',
          dialogue: 'You sniff along the grass and roots, and I will scale the wall to scan from above!',
          speaker: 'Floco',
          choices: {
            'escolha-faro-trovao': {
              text: 'Follow the Scent with Trovão\'s Keen Nose',
              description: 'Track pawprints through soft soil near the rustic garden potting shed.'
            },
            'escolha-pulo-floco': {
              text: 'Climb with Floco onto the Greenhouse Roof',
              description: 'Leap across sun-warmed stone walls and spot yellow gleams among willow branches.'
            }
          }
        }
      }
    },
    it: {
      title: 'Amico Gatto e Amico Cane: La Coppia Inseparabile',
      subtitle: 'Floco è un gatto astuto e Trovão è un cane vivace: insieme risolvono il mistero del giardino',
      tagline: 'Il gatto scruta dall\'alto, il cane fiuta per terra: la più dolce amicizia di sempre!',
      characters: [
        { name: 'Floco', role: 'Gatto siamese agile che salta sui muretti' },
        { name: 'Trovão', role: 'Golden retriever allegro con un fiuto infallibile' },
        { name: 'Tito', role: 'Canarino canterino amico del quartiere' }
      ],
      scenes: {
        'cena-1-quintal-dupla': {
          title: 'Il Mistero del Nastro Giallo',
          text: 'Il giardino era baciato dal sole e pieno di soffioni. Tito, il canarino, era triste: il suo nastro giallo portafortuna era volato via col vento tra le ortensie. Floco e Trovão si batterono la zampetta, pronti a ritrovarlo!',
          dialogue: 'Tu fiuta tra l\'erba bassa e io salirò sul tetto per scrutare dall\'alto!',
          speaker: 'Floco',
          choices: {
            'escolha-faro-trovao': {
              text: 'Seguire la Traccia con l\'Olfatto di Trovão',
              description: 'Fiuta orme nella terra morbida vicino alla vecchia casetta degli attrezzi.'
            },
            'escolha-pulo-floco': {
              text: 'Salire con Floco sul Tetto della Serra',
              description: 'Salta sui muretti di mattoni e cerca riflessi dorati tra i rami del salice.'
            }
          }
        }
      }
    }
  },

  'zoologico-sonhos-alados': {
    es: {
      title: 'El Zoológico Mágico de los Sueños Alados',
      subtitle: 'Un santuario de la naturaleza donde los flamencos tocan arpas y las jirafas peinan nubes',
      tagline: '¡Alimenta elefantes con manzanas doradas, acaricia osos perezosos y vuela con tucanes!',
      characters: [
        { name: 'Luna', role: 'Joven veterinaria con estetoscopio de flores' },
        { name: 'Jambo', role: 'Elefantito que rocía agua con purpurina' },
        { name: 'Zuri', role: 'Jirafa dulce que acaricia copas de acacias' }
      ],
      scenes: {
        'cena-1-santuario-verde': {
          title: 'El Valle de los Flamencos Danzantes',
          text: 'El gran santuario ecológico Amanecer despierta bajo una suave brisa. Los estanques reflejan flores de loto gigantes y los flamencos rosados baten sus alas dibujando corazones en el aire.',
          dialogue: '¡Bienvenidos al santuario! Aquí cada animal vive libre y en perfecta armonía con la naturaleza.',
          speaker: 'Luna',
          choices: {
            'escolha-banho-elefante': {
              text: 'Dar un Baño Refrescante al Elefante Jambo',
              description: 'Jugar con agua tibia de manantial y ver chorros de arcoíris salir de su trompa.'
            },
            'escolha-copa-girafa': {
              text: 'Alimentar a la Jirafa Zuri en la Torre de Madera',
              description: 'Ofrecer ramitas tiernas de acacia y recibir una caricia dulce con su trompita suave.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Enchanted Sanctuary of Winged Dreams',
      subtitle: 'A nature haven where pink flamingos strum water harps and gentle giraffes brush clouds',
      tagline: 'Feed baby elephants crisp golden apples, pet gentle sloths, and sing with friendly toucans!',
      characters: [
        { name: 'Luna', role: 'Young wildlife veterinarian with a blossom stethoscope' },
        { name: 'Jambo', role: 'Baby elephant spraying glittering fountain arcs' },
        { name: 'Zuri', role: 'Gentle giraffe nibbling sweet acacia crowns' }
      ],
      scenes: {
        'cena-1-santuario-verde': {
          title: 'The Dancing Flamingo Lagoon',
          text: 'The grand Dawn Eco-Sanctuary awakened to birdsong. Pristine lagoons mirrored giant lotus blossoms while rose-tinted flamingos danced on slender legs, tracing heart ripples across the water.',
          dialogue: 'Welcome to our sanctuary! Here every creature thrives protected and cherished.',
          speaker: 'Luna',
          choices: {
            'escolha-banho-elefante': {
              text: 'Give Baby Elephant Jambo a Splashing Bath',
              description: 'Spray warm spring water and watch rainbow mists sparkle from his playful trunk.'
            },
            'escolha-copa-girafa': {
              text: 'Feed Giraffe Zuri from the Canopy Platform',
              description: 'Offer tender green leaves and enjoy a soft, nuzzling thank-you.'
            }
          }
        }
      }
    },
    it: {
      title: 'Lo Zoo Magico dei Sogni Alati',
      subtitle: 'Un santuario della natura dove i fenicotteri suonano arpe d\'acqua e le giraffe accarezzano nuvole',
      tagline: 'Nutri elefantini con mele dorate, accarezza bradipi gentili e vola con i tucani!',
      characters: [
        { name: 'Luna', role: 'Giovane veterinaria con stetoscopio di fiori' },
        { name: 'Jambo', role: 'Elefantino che spruzza fontanelle scintillanti' },
        { name: 'Zuri', role: 'Dolce giraffa che sfiora le cime delle acacie' }
      ],
      scenes: {
        'cena-1-santuario-verde': {
          title: 'La Laguna dei Fenicotteri Danzanti',
          text: 'Il grande santuario naturale Risveglio si animava al canto degli uccellini. Specchi d\'acqua riflettevano boccioli di loto giganti mentre fenicotteri rosa battevano le ali disegnando cerchi d\'acqua.',
          dialogue: 'Benvenuti nel santuario! Qui ogni animale vive libero e protetto in armonia con la natura.',
          speaker: 'Luna',
          choices: {
            'escolha-banho-elefante': {
              text: 'Fare il Bagno Rinfrescante all\'Elefantino Jambo',
              description: 'Gioca con acqua sorgiva tiepida e ammira gli arcobaleni spruzzati dalla sua proboscide.'
            },
            'escolha-copa-girafa': {
              text: 'Nutrire la Giraffa Zuri dalla Piattaforma',
              description: 'Offri rametti teneri di acacia e ricevi una dolce carezza con il suo musetto vellutato.'
            }
          }
        }
      }
    }
  },

  'fazenda-radiante-tio-bento': {
    es: {
      title: 'La Mañana Radiante en la Granja del Tío Bento',
      subtitle: 'El canto del gallo al amanecer, leche tibia, maíz para las gallinas y paseos en tractor',
      tagline: '¡Recoge huevos frescos en el nidal, alimenta terneritos y pasea en carreta de heno!',
      characters: [
        { name: 'Tío Bento', role: 'Granjero bondadoso con sombrero de paja' },
        { name: 'Clarinha', role: 'Sobrina alegre que adora a los terneros' },
        { name: 'Pipoca', role: 'Gallina clueca con plumas moteadas' }
      ],
      scenes: {
        'cena-1-amanhecer-curral': {
          title: 'El Canto del Gallo y el Aire Puro',
          text: '¡Quiquiriquí! El cielo comenzaba a teñirse de rosa y dorado sobre las colinas. En el corral, las vaquitas mugían suavemente esperando su desayuno de heno fresco y avena.',
          dialogue: '¡Buenos días! ¡Ponte las botas de campo, hoy tenemos terneritos nuevos para cuidar!',
          speaker: 'Tío Bento',
          choices: {
            'escolha-tratar-bezerros': {
              text: 'Alimentar a los Terneritos con Biberón Tibio',
              description: 'Acariciar el lomo suave de los terneros y ver cómo toman su leche con ganas.'
            },
            'escolha-colher-ovos': {
              text: 'Juntar Huevos Frescos en el Gallinero',
              description: 'Poner con cuidado los huevos en la cesta de mimbre de paja limpia.'
            }
          }
        }
      }
    },
    en: {
      title: 'Bright Morning at Uncle Bento\'s Farm',
      subtitle: 'Rooster calls at dawn, warm milk, feeding happy hens, and bumpy tractor wagon rides',
      tagline: 'Collect warm eggs from the coop, feed gentle calves, and ride upon sweet clover haystacks!',
      characters: [
        { name: 'Uncle Bento', role: 'Kind farmer in overalls and a straw hat' },
        { name: 'Clarinha', role: 'Cheerful niece who adores baby calves' },
        { name: 'Pipoca', role: 'Speckled mother hen watching over chicks' }
      ],
      scenes: {
        'cena-1-amanhecer-curral': {
          title: 'The Rooster\'s Call & Country Breeze',
          text: 'Cock-a-doodle-doo! The morning sky flushed with apricot and rose over rolling pasture hills. Inside the red timber barn, dairy cows lowed softly, greeting breakfast buckets of sweet clover.',
          dialogue: 'Good morning, little farmer! Pull on your boots; there are brand new calves waiting for breakfast!',
          speaker: 'Uncle Bento',
          choices: {
            'escolha-tratar-bezerros': {
              text: 'Bottle-Feed the Newborn Calves',
              description: 'Pet velvety coats while eager calves drink their nourishing warm breakfast.'
            },
            'escolha-colher-ovos': {
              text: 'Gather Fresh Eggs in the Henhouse',
              description: 'Carefully nestle clean farm eggs into the woven willow basket lined with clean straw.'
            }
          }
        }
      }
    },
    it: {
      title: 'Il Mattino Radioso alla Fattoria di Zio Bento',
      subtitle: 'Il canto del gallo all\'alba, latte tiepido, mais per le galline e giri sul trattore',
      tagline: 'Raccogli uova fresche nel pollaio, allatta i vitellini e fai un giro sul carro di fieno!',
      characters: [
        { name: 'Zio Bento', role: 'Fattore gentile con cappello di paglia' },
        { name: 'Clarinha', role: 'Nipotina allegra che adora i vitellini' },
        { name: 'Pipoca', role: 'Gallina premurosa dalle piume screziate' }
      ],
      scenes: {
        'cena-1-amanhecer-curral': {
          title: 'Il Canto del Gallo e l\'Aria di Campagna',
          text: 'Chicchirichì! Il cielo si colorava di rosa e pesca sopra le verdi colline. Nella stalla di legno rosso, le mucche muggivano dolcemente aspettando la colazione a base di fieno fresco.',
          dialogue: 'Buongiorno piccolo contadino! Infila gli stivaletti; ci sono vitellini appena nati da accudire!',
          speaker: 'Zio Bento',
          choices: {
            'escolha-tratar-bezerros': {
              text: 'Allattare i Vitellini col Biberon Tiepido',
              description: 'Accarezza il morbido mantello dei vitellini che bevono felici il loro latte.'
            },
            'escolha-colher-ovos': {
              text: 'Raccogliere le Uova Fresche nel Pollaio',
              description: 'Riponi con cura le uova nel cestino di vimini foderato di paglia pulita.'
            }
          }
        }
      }
    }
  },

  'primeiro-dia-colegio-descobertas': {
    es: {
      title: 'El Primer Día en el Colegio de los Descubrimientos',
      subtitle: 'Una mochila nueva, lápices de colores, hacer nuevos amigos y el recreo más divertido',
      tagline: '¡Acomoda tus cuadernos nuevos, saluda a la maestra y comparte tu merienda con amigos!',
      characters: [
        { name: 'Tomás', role: 'Niño curioso con mochila de cohete espacial' },
        { name: 'Profesora Marina', role: 'Maestra cariñosa de sonrisa acogedora' },
        { name: 'Bia', role: 'Compañerita nueva de trenzas y risa fácil' }
      ],
      scenes: {
        'cena-1-portao-escola': {
          title: 'El Sonido de la Campana y los Pasos en el Pasillo',
          text: 'El patio de la escuela estaba decorado con guirnaldas coloridas. Niños y niñas con mochilas brillantes charlaban emocionados. Tomás sintió mariposas en la pancita, pero la profesora Marina lo recibió con un abrazo cálido.',
          dialogue: '¡Bienvenidos a nuestra clase! ¡Aquí cada uno de ustedes descubrirá cosas maravillosas!',
          speaker: 'Profesora Marina',
          choices: {
            'escolha-mesa-pintura': {
              text: 'Dibujar tu Sueño Favorito en el Rincón de Arte',
              description: 'Pintar con témperas y crayones junto a tu nueva amiga Bia.'
            },
            'escolha-parque-recreio': {
              text: 'Jugar en los Columpios en la Hora del Recreo',
              description: 'Hacer una ronda de juegos y compartir rebanadas de sandía fresca.'
            }
          }
        }
      }
    },
    en: {
      title: 'First Day at Discovery Academy',
      subtitle: 'A brand-new backpack, colorful crayons, meeting new pals, and playground laughter',
      tagline: 'Pack crisp notebooks, greet your teacher with a smile, and share fruit snacks with friends!',
      characters: [
        { name: 'Tomás', role: 'Curious boy with a rocket ship backpack' },
        { name: 'Teacher Marina', role: 'Warmhearted educator with a welcoming smile' },
        { name: 'Bia', role: 'New classmate with playful braids and a giggle' }
      ],
      scenes: {
        'cena-1-portao-escola': {
          title: 'The School Bell & Welcoming Hallways',
          text: 'The school courtyard was strung with cheerful welcome banners. Children carrying bright new backpacks chatted with excitement. Tomás felt butterflies in his stomach, but Teacher Marina welcomed him with a warm smile.',
          dialogue: 'Welcome to our classroom! Here, every single day brings fascinating discoveries!',
          speaker: 'Teacher Marina',
          choices: {
            'escolha-mesa-pintura': {
              text: 'Paint Your Favorite Dream in the Art Corner',
              description: 'Dip brushes into watercolors and create art alongside your new desk buddy Bia.'
            },
            'escolha-parque-recreio': {
              text: 'Play on the Playground Swings at Recess',
              description: 'Join a joyful circle game and share sweet crisp watermelon slices.'
            }
          }
        }
      }
    },
    it: {
      title: 'Il Primo Giorno alla Scuola delle Scoperte',
      subtitle: 'Uno zainetto nuovo, matite colorate, nuovi amici e la ricreazione più bella',
      tagline: 'Prepara i quaderni nuovi, saluta la maestra e condividi la merenda con i tuoi compagni!',
      characters: [
        { name: 'Tomás', role: 'Bambino curioso con zainetto a forma di razzo' },
        { name: 'Maestra Marina', role: 'Insegnante dolce dal sorriso accogliente' },
        { name: 'Bia', role: 'Nuova compagna con le treccine e la risata pronta' }
      ],
      scenes: {
        'cena-1-portao-escola': {
          title: 'Il Suono della Campanella e i Primi Passi',
          text: 'Il cortile della scuola era decorato con bandierine colorate. Tanti bambini con zainetti sgargianti chiacchieravano emozionati. Tomás sentiva le farfalle nello stomaco, ma la maestra Marina lo accolse con un abbraccio premuroso.',
          dialogue: 'Benvenuti nella nostra classe! Qui ogni giorno impareremo cose meravigliose insieme!',
          speaker: 'Maestra Marina',
          choices: {
            'escolha-mesa-pintura': {
              text: 'Dipingere il Tuo Sogno Preferito nell\'Angolo dell\'Arte',
              description: 'Usa acquerelli e pastelli a cera insieme alla nuova amichetta Bia.'
            },
            'escolha-parque-recreio': {
              text: 'Giocare sulle Altalene durante la Ricreazione',
              description: 'Fai un bel girotondo nel prato e condividi fette fresche di anguria dolce.'
            }
          }
        }
      }
    }
  },

  'fontes-cristalinas-reino-nutrientes': {
    es: {
      title: 'La Ciudad de las Fuentes Cristalinas y el Reino de los Nutrientes',
      subtitle: 'La importancia del agua fresca, frutas jugosas y alimentos que dan superpoderes de energía',
      tagline: '¡Bebe agua fresquita del manantial, prepara ensaladas de frutas y gana energía para jugar!',
      characters: [
        { name: 'Leo', role: 'Joven deportista que adora correr y saltar' },
        { name: 'Gotita Clara', role: 'Hada del agua pura y mineral' },
        { name: 'Dra. Nutri', role: 'Científica de las vitaminas del arcoíris' }
      ],
      scenes: {
        'cena-1-fonte-ouro': {
          title: 'El Valle de los Manantiales Vivos',
          text: 'En el Reino de la Buena Salud, las fuentes burbujean agua pura y fresca que calma la sed y devuelve el brillo a los ojos. Leo sentía cansancio después de pedalear bajo el sol, cuando Gotita Clara le ofreció un vaso de cristal.',
          dialogue: '¡El agua es el combustible más mágico de tu cuerpo! ¡Un buen trago despierta todas tus células!',
          speaker: 'Gotita Clara',
          choices: {
            'escolha-beber-agua': {
              text: 'Beber un Gran Vaso de Agua Cristalina',
              description: 'Sentir cómo la energía vuelve al instante mientras te hidratas de la cabeza a los pies.'
            },
            'escolha-pomar-frutas': {
              text: 'Cosechar Frutas de Colores en el Huerto Mágico',
              description: 'Juntar fresas rojas, naranjas dulces y kiwis verdes llenos de vitaminas.'
            }
          }
        }
      }
    },
    en: {
      title: 'The City of Crystal Fountains & the Nutrient Kingdom',
      subtitle: 'The magic of crisp pure water, juicy fruits, and rainbow nutrients powering your adventures',
      tagline: 'Drink fresh spring water, assemble radiant fruit bowls, and power up your playtime!',
      characters: [
        { name: 'Leo', role: 'Active youngster who loves running and biking' },
        { name: 'Droplet Clara', role: 'Fairy of pure mineral spring waters' },
        { name: 'Dr. Nutri', role: 'Scientist of rainbow vitamins' }
      ],
      scenes: {
        'cena-1-fonte-ouro': {
          title: 'The Valley of Living Springs',
          text: 'In the Kingdom of Vital Health, natural springs bubbled with refreshing water that quenches thirst and brightens young eyes. Leo felt tired after cycling in the sun, when Droplet Clara offered him a glass of pure spring water.',
          dialogue: 'Water is the true superpower fuel for your body! A cool drink energizes every single cell!',
          speaker: 'Droplet Clara',
          choices: {
            'escolha-beber-agua': {
              text: 'Drink a Tall Glass of Pure Spring Water',
              description: 'Feel instant revitalization wash over your body from head to toe.'
            },
            'escolha-pomar-frutas': {
              text: 'Harvest Rainbow Fruits in the Sunlit Orchard',
              description: 'Pick ruby strawberries, sunny oranges, and sweet emerald kiwis loaded with vitamins.'
            }
          }
        }
      }
    },
    it: {
      title: 'La Città delle Fonti Cristalline e il Regno dei Nutrienti',
      subtitle: 'L\'importanza dell\'acqua fresca, frutta succosa e cibi sani che donano superpoteri di energia',
      tagline: 'Bevi acqua fresca di sorgente, prepara macedonie colorate e fai il pieno di energia!',
      characters: [
        { name: 'Leo', role: 'Bambino sportivo che ama correre e saltare' },
        { name: 'Gocciolina Chiara', role: 'Fatina dell\'acqua pura di sorgente' },
        { name: 'Dott.ssa Nutri', role: 'Scienziata delle vitamine dell\'arcobaleno' }
      ],
      scenes: {
        'cena-1-fonte-ouro': {
          title: 'La Valle delle Sorgenti Vive',
          text: 'Nel Regno della Salute, le fontane zampillano acqua purissima e fresca che disseta e dona vigore. Leo era stanco dopo una corsa in bicicletta, quando Gocciolina Chiara gli porse un bicchiere di sorgente.',
          dialogue: 'L\'acqua è il carburante più prezioso per il tuo corpo! Un bel sorso risveglia tutte le tue energie!',
          speaker: 'Gocciolina Chiara',
          choices: {
            'escolha-beber-agua': {
              text: 'Bere un Bel Bicchiere d\'Acqua di Sorgente',
              description: 'Senti la vitalità tornare all\'istante mentre ti idrati dalla testa ai piedi.'
            },
            'escolha-pomar-frutas': {
              text: 'Raccogliere Frutta Colorata nel Frutteto Magico',
              description: 'Raccogli fragole rosse, arance dolci e kiwi verdi ricchi di preziose vitamine.'
            }
          }
        }
      }
    }
  },

  'parque-maravilhas-giratorias': {
    es: {
      title: 'El Parque de las Maravillas Giratorias',
      subtitle: 'La gran rueda gigante iluminada, montañas rusas de cosquillas, tiovivo y manzanas acarameladas',
      tagline: '¡Gira en el carrusel de caballitos dorados, sube a la rueda gigante y come algodón de azúcar!',
      characters: [
        { name: 'Davi', role: 'Niño alegre con boleto dorado en la mano' },
        { name: 'Sr. Rueda', role: 'Operador simpático de bigotes rizados' },
        { name: 'Bebé Julia', role: 'Hermanita con globo de conejito' }
      ],
      scenes: {
        'cena-1-entrada-parque': {
          title: 'Luces, Música y Carritos de Palomitas',
          text: 'La noche caía sobre la feria y miles de bombillas de colores se encendieron al son de una alegre música de acordeón. El olor a palomitas y manzana dulce flotaba en el aire.',
          dialogue: '¡Pasen y vean! ¡Esta noche la rueda gigante toca las estrellas y el carrusel gira al compás del vals!',
          speaker: 'Sr. Rueda',
          choices: {
            'escolha-roda-gigante': {
              text: 'Subir a la Cabina Más Alta de la Rueda Gigante',
              description: 'Ver la feria iluminada como un mar de lucecitas de colores desde lo alto del cielo.'
            },
            'escolha-carrossel-cavalos': {
              text: 'Elegir el Caballito Alado en el Carrusel Dorado',
              description: 'Girar al son de la campanilla y agarrar la varita mágica del tiovivo.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Fairground of Whirling Wonders',
      subtitle: 'The glowing Ferris wheel, tummy-tickling coasters, carousel horses, and red candy apples',
      tagline: 'Spin on the golden carousel pony, rise high upon the Ferris wheel, and taste cotton candy!',
      characters: [
        { name: 'Davi', role: 'Joyful boy clutching a golden ride ticket' },
        { name: 'Mr. Wheel', role: 'Twirly-mustached fairground conductor' },
        { name: 'Baby Julia', role: 'Little sister with a bunny balloon' }
      ],
      scenes: {
        'cena-1-entrada-parque': {
          title: 'Carnival Lights, Melodies & Popcorn Carts',
          text: 'Dusk draped the fairground as thousands of colored light bulbs blossomed to the rhythm of brass music. Fragrant aromas of buttery popcorn and caramel apples swept through the festive breeze.',
          dialogue: 'Step right up! Tonight our grand observation wheel brushes the stars, and the carousel spins to waltzes!',
          speaker: 'Mr. Wheel',
          choices: {
            'escolha-roda-gigante': {
              text: 'Board the Highest Gondola of the Giant Wheel',
              description: 'Marvel at the dazzling carnival lights glowing like an ocean of jewels beneath the night.'
            },
            'escolha-carrossel-cavalos': {
              text: 'Choose the Pegasus Steed on the Golden Carousel',
              description: 'Gallop gently in waltz rhythm and tap the brass ring for an encore spin.'
            }
          }
        }
      }
    },
    it: {
      title: 'Il Parco delle Meraviglie Girevoli',
      subtitle: 'La grande ruota panoramica illuminata, montagne russe divertenti, giostre e mele caramellate',
      tagline: 'Fai un giro sul cavallino dorato della giostra, sali sulla ruota panoramica e mangia zucchero filato!',
      characters: [
        { name: 'Davi', role: 'Bambino allegro con biglietto d\'oro in mano' },
        { name: 'Sig. Ruota', role: 'Giostraio simpatico con baffi all\'insù' },
        { name: 'Piccola Julia', role: 'Sorellina con palloncino a coniglietto' }
      ],
      scenes: {
        'cena-1-entrada-parque': {
          title: 'Luci, Musica e Carretti di Popcorn',
          text: 'La sera scese sul luna park e migliaia di lampadine colorate si accesero a ritmo di musica festosa. L\'aroma dolce di popcorn croccanti e mele caramellate riempiva l\'aria.',
          dialogue: 'Venite avanti signori! Questa sera la ruota panoramica sfiora le stelle e la giostra danza a tempo di musica!',
          speaker: 'Sig. Ruota',
          choices: {
            'escolha-roda-gigante': {
              text: 'Salire sulla Gondola più Alta della Ruota Panoramica',
              description: 'Ammira il luna park scintillante come un mare di gemme colorate dall\'alto del cielo.'
            },
            'escolha-carrossel-cavalos': {
              text: 'Scegliere il Cavallino Alato sulla Giostra Dorata',
              description: 'Gira dolcemente a tempo di valzer stringendo le redini decorate.'
            }
          }
        }
      }
    }
  },

  'caca-tesouro-conchas-cantantes': {
    es: {
      title: 'La Búsqueda del Tesoro en la Isla de las Conchas Cantarinas',
      subtitle: 'Mapas de piratas bondadosos, brújulas de bronce, enigmas grabados en la arena y un cofre de perlas',
      tagline: '¡Sigue pistas con la brújula, decifra acertijos de gaviotas y encuentra el baúl encantado!',
      characters: [
        { name: 'Capitán Coral', role: 'Pirata ecológico protector de los arrecifes' },
        { name: 'Marina', role: 'Niña exploradora con catalejo de latón' },
        { name: 'Barnabé', role: 'Loro chistoso que repite rimas marinas' }
      ],
      scenes: {
        'cena-1-praia-mapa': {
          title: 'El Papiro Encontrado en la Botella de Cristal',
          text: 'En la orilla de la Isla de las Conchas, las olas depositaron una botella verde con un mapa adentro. El pergamino mostraba tres palmeras cruzadas y una gran roca con forma de delfín sonriente.',
          dialogue: '¡Arrr, compañeros! ¡El verdadero tesoro no es el oro, sino la aventura que compartimos!',
          speaker: 'Capitán Coral',
          choices: {
            'escolha-seguir-passos': {
              text: 'Contar Diez Pasos Hacia la Roca del Delfín',
              description: 'Usar la brújula de bronce para alinearse con la estrella polar y desenterrar la primera pista.'
            },
            'escolha-concha-musica': {
              text: 'Escuchar el Susurro de la Caracola Rosada Gigante',
              description: 'Acercar el oído a la concha para oír una melodía que señala la cueva oculta.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Treasure Hunt on Singing Shell Isle',
      subtitle: 'Gentle pirate charts, brass compasses, riddles etched upon sandy shores, and a chest of pearls',
      tagline: 'Follow navigation marks, solve seagull riddles, and discover the hidden sea chest!',
      characters: [
        { name: 'Captain Coral', role: 'Eco-pirate guarding sea reefs and dolphins' },
        { name: 'Marina', role: 'Young navigator with a brass telescope' },
        { name: 'Barnabé', role: 'Whimsical parrot repeating seafaring limericks' }
      ],
      scenes: {
        'cena-1-praia-mapa': {
          title: 'The Chart in the Sea-Glass Bottle',
          text: 'Upon the shoreline of Singing Shell Isle, foaming breakers washed ashore a green glass bottle with an ancient parchment inside. The chart depicted three crisscrossed palms and a boulder shaped like a leaping dolphin.',
          dialogue: 'Ahoy, explorers! The truest treasure of the seven seas is the friendship forged along the voyage!',
          speaker: 'Captain Coral',
          choices: {
            'escolha-seguir-passos': {
              text: 'Pace Ten Steps Toward Dolphin Rock',
              description: 'Align the brass compass needle toward the polar star to unearth the initial brass token.'
            },
            'escolha-concha-musica': {
              text: 'Listen to the Whispering Giant Pink Conch',
              description: 'Hold the shell to your ear to hear an acoustic tide tune revealing the sea cavern.'
            }
          }
        }
      }
    },
    it: {
      title: 'La Caccia al Tesoro sull\'Isola delle Conchiglie Canterine',
      subtitle: 'Mappe di pirati gentili, bussole d\'ottone, enigmi sulla sabbia e un forziere di perle',
      tagline: 'Segui gli indizi con la bussola, decifra enigmi e trova il baule incantato dei pirati!',
      characters: [
        { name: 'Capitan Corallo', role: 'Pirata ecologista guardiano delle scogliere' },
        { name: 'Marina', role: 'Bambina esploratrice con cannocchiale d\'ottone' },
        { name: 'Barnabé', role: 'Pappagallo simpatico che ripete rime marine' }
      ],
      scenes: {
        'cena-1-praia-mapa': {
          title: 'La Mappa nella Bottiglia di Vetro Verde',
          text: 'Sulla riva dell\'Isola delle Conchiglie, le onde portarono una bottiglia verde con una pergamena all\'interno. Il foglio mostrava tre palme incrociate e un masso a forma di delfino che salta.',
          dialogue: 'Corpo di mille balene! Il vero tesoro non è l\'oro, ma le scoperte che facciamo insieme!',
          speaker: 'Capitan Corallo',
          choices: {
            'escolha-seguir-passos': {
              text: 'Contare Dieci Passi verso la Roccia del Delfino',
              description: 'Usa la bussola d\'ottone per orientarti verso nord e dissotterrare il primo indizio.'
            },
            'escolha-concha-musica': {
              text: 'Ascoltare il Sussurro della Conchiglia Rosa Gigante',
              description: 'Accosta l\'orecchio alla conchiglia per ascoltare una melodia che indica la grotta nascosta.'
            }
          }
        }
      }
    }
  },

  'grande-taca-futebol-bairro': {
    es: {
      title: 'La Gran Copa del Barrio: Trabajo en Equipo y Pasión',
      subtitle: 'Pases precisos, respeto al rival, compañerismo y el festejo del gol con amigos',
      tagline: '¡Pasa el balón con precisión, dribla con alegría y festeja con tu equipo con un abrazo!',
      characters: [
        { name: 'Gabriel', role: 'Centrocampista veloz con botines de estrellas' },
        { name: 'Sara', role: 'Portera valiente con guantes acolchados' },
        { name: 'Profesor Zico', role: 'Entrenador paciente que enseña juego limpio' }
      ],
      scenes: {
        'cena-1-aquecimento-campo': {
          title: 'Cordones Atados y Árbitro Listo',
          text: 'La cancha de césped verde del barrio estaba rodeada de banderines y familias alentando con palmas. Gabriel y Sara se ajustaron las espinilleras, listos para jugar con deportividad.',
          dialogue: '¡Jueguen unidos, apoyen al compañero y diviértanse en cada jugada!',
          speaker: 'Profesor Zico',
          choices: {
            'escolha-tabelinha-ataque': {
              text: 'Hacer una Pared Rápida por la Banda Derecha',
              description: 'Tocar el balón de primera, desmarcarse y tirar un centro preciso al corazón del área.'
            },
            'escolha-defesa-sara': {
              text: 'Confiar en la Gran Atajada de Sara en la Portería',
              description: 'Aplaudir la valentía de la portera que vuela al ángulo para atajar con seguridad.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Neighborhood Cup: Teamwork & Heart',
      subtitle: 'Pinpoint passes, fair play, lifting teammates up, and cheering the winning goal together',
      tagline: 'Pass the soccer ball smoothly, dribble with joy, and celebrate every goal as a team!',
      characters: [
        { name: 'Gabriel', role: 'Speedy midfielder wearing star-studded cleats' },
        { name: 'Sara', role: 'Fearless goalkeeper with padded neon gloves' },
        { name: 'Coach Zico', role: 'Patient coach teaching respect and fair play' }
      ],
      scenes: {
        'cena-1-aquecimento-campo': {
          title: 'Laced Cleats & The Whistle Blow',
          text: 'The neighborhood grass pitch was festively lined with team pennants and cheering families. Gabriel and Sara fastened their shin guards, eager to display great teamwork.',
          dialogue: 'Play together, encourage each other, and celebrate every single effort on the field!',
          speaker: 'Coach Zico',
          choices: {
            'escolha-tabelinha-ataque': {
              text: 'Execute a Swift One-Two Pass Down the Wing',
              description: 'Pass the ball first-touch, sprint into space, and whip a curling cross into the box.'
            },
            'escolha-defesa-sara': {
              text: 'Trust Sara\'s Acrobatic Goalkeeping Save',
              description: 'Cheer as your keeper dives to tip a shot safely over the crossbar.'
            }
          }
        }
      }
    },
    it: {
      title: 'La Grande Coppa del Quartiere: Gioco di Squadra e Passione',
      subtitle: 'Passaggi precisi, rispetto per gli avversari, lealtà e la gioia del gol con gli amici',
      tagline: 'Passa il pallone con precisione, dribbla con gioia e festeggia la vittoria con un grande abbraccio!',
      characters: [
        { name: 'Gabriel', role: 'Centrocampista veloce con scarpini decorati a stelle' },
        { name: 'Sara', role: 'Portiere coraggioso con guanti imbottiti' },
        { name: 'Mister Zico', role: 'Allenatore paziente che insegna il fair play' }
      ],
      scenes: {
        'cena-1-aquecimento-campo': {
          title: 'Scarpini Allacciati e Fischio d\'Inizio',
          text: 'Il campo verde del quartiere era circondato da bandiere e famiglie pronte a fare il tifo con le mani. Gabriel e Sara si sistemarono i parastinchi, desiderosi di giocare lealmente.',
          dialogue: 'Giocate uniti, aiutatevi a vicenda e divertitevi su ogni pallone!',
          speaker: 'Mister Zico',
          choices: {
            'escolha-tabelinha-ataque': {
              text: 'Fare un Uno-Due Veloce sulla Fascia',
              description: 'Passa la palla di prima, scatta nello spazio e crossa teso al centro dell\'area.'
            },
            'escolha-defesa-sara': {
              text: 'Affidarsi alla Parata Spettacolare di Sara in Porta',
              description: 'Applaudi il coraggio del portiere che vola all\'incrocio per deviare in calcio d\'angolo.'
            }
          }
        }
      }
    }
  }
};
