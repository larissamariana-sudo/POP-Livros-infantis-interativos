import { BookTranslation, Language } from '../../types';

export const storiesPart2: Record<string, Partial<Record<Language, BookTranslation>>> = {
  'dino-ilha-risonha': {
    es: {
      title: 'Teco y el Valle de los Dinosaurios Risueños',
      subtitle: 'Juegos jurásicos con volcanes de confeti y camas elásticas de helechos',
      tagline: '¡Haz cosquillas al triceratops, activa el volcán de pétalos y corre carreras con velociraptores!',
      characters: [
        { name: 'Teco', role: 'Bebé triceratops glotón y juguetón' },
        { name: 'Pipo', role: 'Pterodáctilo cartero de las nubes' }
      ],
      scenes: {
        'cena-1-vale-jurassico': {
          title: 'El Claro de las Frutas Gigantes',
          text: 'Entre helechos del tamaño de casas, el pequeño dinosaurio Teco perseguía mariposas azules. A lo lejos, un volcán amistoso soltaba anillos de humo con aroma a piña madura.',
          dialogue: '¡Mira esa sandía gigante colgando de la liana! ¿Me ayudas a hacerla caer?',
          speaker: 'Teco',
          choices: {
            'escolha-toboga-lama': {
              text: 'Deslizarse por el Tobogán de Barro Tibio',
              description: 'Resbalar con los estegosaurios y terminar con un divertido chapuzón.'
            },
            'escolha-ninho-pterodactilo': {
              text: 'Subir al Nido en la Copa de la Secuoya',
              description: 'Volar en la espalda de Pipo y observar el valle prehistórico desde las nubes.'
            }
          }
        }
      }
    },
    en: {
      title: 'Teco & the Valley of Laughing Dinosaurs',
      subtitle: 'Jurassic fun with petal-firing volcanoes and bouncy fern trampolines',
      tagline: 'Tickle the triceratops, trigger petal clouds, and race with cheerful velociraptors!',
      characters: [
        { name: 'Teco', role: 'Playful and hungry baby triceratops' },
        { name: 'Pipo', role: 'Pterodactyl cloud mail carrier' }
      ],
      scenes: {
        'cena-1-vale-jurassico': {
          title: 'The Giant Fruit Clearing',
          text: 'Amid ferns as tall as cottages, baby dino Teco chased radiant blue butterflies. In the distance, a friendly volcano puffed fragrant pineapple-scented smoke rings into the sunny sky!',
          dialogue: 'Look at that giant melon on the vine! Will you help me shake it loose?',
          speaker: 'Teco',
          choices: {
            'escolha-toboga-lama': {
              text: 'Slide Down the Warm Mud Slide',
              description: 'Slip and slide with gentle stegosaurs straight into a joyful puddle.'
            },
            'escolha-ninho-pterodactilo': {
              text: 'Climb to the High Redwood Nest',
              description: 'Soar on Pipo\'s back and view the colorful prehistoric world from the sky.'
            }
          }
        }
      }
    },
    it: {
      title: 'Teco e la Valle dei Dinosauri Ridenti',
      subtitle: 'Giochi giurassici con vulcani di coriandoli e trampolini di felce gigante',
      tagline: 'Fai il solletico al triceratopo, attiva il vulcano di petali e fai gare con i velociraptor!',
      characters: [
        { name: 'Teco', role: 'Cucciolo di triceratopo giocherellone e goloso' },
        { name: 'Pipo', role: 'Pterodattilo postino delle nuvole' }
      ],
      scenes: {
        'cena-1-vale-jurassico': {
          title: 'La Radura dei Frutti Giganti',
          text: 'Tra felci alte come casette, il piccolo dinosauro Teco inseguiva farfalle azzurre. In lontananza, un vulcano simpatico sbuffava anelli di fumo profumati all\'ananas maturo!',
          dialogue: 'Guarda quel melone gigante appeso alla liana! Mi aiuti a farlo cadere?',
          speaker: 'Teco',
          choices: {
            'escolha-toboga-lama': {
              text: 'Scivolare sul Toboga di Fango Tiepido',
              description: 'Scivola con gli stegosauri per un tuffo rinfrescante e pieno di risate.'
            },
            'escolha-ninho-pterodactilo': {
              text: 'Salire al Nido in Cima alla Sequoia',
              description: 'Vola sul dorso di Pipo e ammira la valle preistorica dalle nuvole.'
            }
          }
        }
      }
    }
  },

  'castelo-sombras-luzes': {
    es: {
      title: 'El Castillo de las Sombras y Luces Danzantes',
      subtitle: 'Un enigma arcano en una fortaleza suspendida donde la oscuridad guarda secretos brillantes',
      tagline: '¡Despierta campanas de plata, ilumina prismas espectrales y une luz y penumbra!',
      characters: [
        { name: 'Kael', role: 'Joven aprendiz de tejedor de luz' },
        { name: 'Nyx', role: 'Lince espectral con ojos de amatista' }
      ],
      scenes: {
        'cena-1-ponte-obsidiana': {
          title: 'Las Puertas de Ébano Flotante',
          text: 'El Castillo de Noctiluca flotaba sobre una neblina violeta. Sus murallas de obsidiana pulida reflejaban auroras boreales. Kael y el lince Nyx llegaron ante el pórtico donde tres campanas de plata colgaban silenciosas.',
          dialogue: 'La oscuridad no es temible: es solo un lienzo esperando que dibujemos con luz.',
          speaker: 'Kael',
          choices: {
            'escolha-galeria-espelhos': {
              text: 'Caminar por la Galería de los Espejos Místicos',
              description: 'Descubrir reflejos que muestran caminos ocultos a través de las torres.'
            },
            'escolha-jardim-penumbra': {
              text: 'Explorar el Jardín de las Rosas de Cristal Negro',
              description: 'Despertar pétalos de luna que florecen únicamente bajo la sombra protectora.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Castle of Shadows and Dancing Lights',
      subtitle: 'An arcane riddle in a floating citadel where darkness shields radiant wonders',
      tagline: 'Ring silver bells, illuminate spectral prisms, and weave harmony between light and shade!',
      characters: [
        { name: 'Kael', role: 'Young apprentice of light weaving' },
        { name: 'Nyx', role: 'Spectral lynx with glowing amethyst eyes' }
      ],
      scenes: {
        'cena-1-ponte-obsidiana': {
          title: 'The Floating Ebony Gates',
          text: 'Noctiluca Citadel hovered above a violet mist. Its polished obsidian ramparts mirrored silent polar auroras. Kael and mystic lynx Nyx approached the main archway where silver bells hung in quiet reverence.',
          dialogue: 'Darkness is never frightening: it is simply a blank canvas waiting for us to paint with light.',
          speaker: 'Kael',
          choices: {
            'escolha-galeria-espelhos': {
              text: 'Traverse the Gallery of Mystic Mirrors',
              description: 'Discover shimmering reflections unveiling hidden sky bridges between the towers.'
            },
            'escolha-jardim-penumbra': {
              text: 'Explore the Obsidian Rose Garden',
              description: 'Awaken moonlight petals that blossom only beneath protective shade.'
            }
          }
        }
      }
    },
    it: {
      title: 'Il Castello delle Ombre e delle Luci Danzanti',
      subtitle: 'Un enigma arcano in una fortezza sospesa dove l\'oscurità custodisce segreti luminosi',
      tagline: 'Sveglia campane d\'argento, illumina prismi spettrali e unisci luce e penombra!',
      characters: [
        { name: 'Kael', role: 'Giovane apprendista tessitore di luce' },
        { name: 'Nyx', role: 'Lince spettrale con occhi d\'ametista' }
      ],
      scenes: {
        'cena-1-ponte-obsidiana': {
          title: 'Le Porte d\'Ebano Galleggiante',
          text: 'Il Castello di Noctiluca aleggiava su una nebbia viola. Le sue mura di ossidiana levigata riflettevano aurore boreali silenziose. Kael e la lince Nyx giunsero all\'arcata dove tre campane d\'argento pendevano immobili.',
          dialogue: 'Il buio non deve far paura: è soltanto una tela che attende di essere dipinta di luce.',
          speaker: 'Kael',
          choices: {
            'escolha-galeria-espelhos': {
              text: 'Attraversare la Galleria degli Specchi Mistici',
              description: 'Scopri riflessi che svelano ponti segreti tra le torri del castello.'
            },
            'escolha-jardim-penumbra': {
              text: 'Esplorare il Giardino delle Rose d\'Ossidiana',
              description: 'Risveglia petali lunari che fioriscono soltanto sotto un\'ombra rassicurante.'
            }
          }
        }
      }
    }
  },

  'sinfonia-cavernas-cristal': {
    es: {
      title: 'La Sinfonía de las Cuevas de Cristal',
      subtitle: 'Una expedición subterránea donde las estalactitas tocan notas musicales mágicas',
      tagline: '¡Toca estalactitas musicales, activa géiseres sonoros y despierta el órgano de amatistas!',
      characters: [
        { name: 'Melodia', role: 'Topita geóloga con casco y linterna' },
        { name: 'Eco', role: 'Murcielaguito director de orquesta con batuta de cuarzo' }
      ],
      scenes: {
        'cena-1-gruta-ametista': {
          title: 'La Gruta del Xilófono de Roca',
          text: 'Bajo las raíces de los árboles antiguos, existe una catedral de cristales violetas y turquesas. Gotas de agua caen al compás de un vals y la topita Melodía afina su martillo de goma para tocar la primera melodía.',
          dialogue: '¡Toca los cristales de diferentes tamaños para componer una canción subterránea!',
          speaker: 'Melodia',
          choices: {
            'escolha-lago-ressonante': {
              text: 'Navegar en el Lago de Cristal Resonante',
              description: 'Tocar campanillas acuáticas mientras los peces de luz nadan en círculos.'
            },
            'escolha-orgao-estalactites': {
              text: 'Despertar el Gran Órgano de Estalactitas',
              description: 'Tocar una sinfonía monumental que hace vibrar toda la montaña de alegría.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Symphony of the Crystal Caves',
      subtitle: 'An underground quest where stalactites play enchanted musical notes',
      tagline: 'Tap musical stalactites, trigger sonic geysers, and awaken the grand amethyst organ!',
      characters: [
        { name: 'Melodia', role: 'Geologist mole with a headlamp helmet' },
        { name: 'Eco', role: 'Bat maestro with a quartz conductor wand' }
      ],
      scenes: {
        'cena-1-gruta-ametista': {
          title: 'The Rock Xylophone Grotto',
          text: 'Far beneath the roots of ancient trees lies an underground cathedral of purple and turquoise quartz. Water droplets fall in waltz rhythm, and little mole Melodia readies her rubber mallet for the opening chime.',
          dialogue: 'Tap the crystals of different sizes to compose our subterranean song!',
          speaker: 'Melodia',
          choices: {
            'escolha-lago-ressonante': {
              text: 'Paddle Across the Resonant Crystal Lake',
              description: 'Ring acoustic water bells while glowing subterranean fish swim in joyful loops.'
            },
            'escolha-orgao-estalactites': {
              text: 'Awaken the Grand Stalactite Organ',
              description: 'Perform a monumental harmony that makes the whole cavern hum with warmth.'
            }
          }
        }
      }
    },
    it: {
      title: 'La Sinfonia delle Caverne di Cristallo',
      subtitle: 'Una spedizione sotterranea in cui le stalattiti suonano note musicali magiche',
      tagline: 'Tocca le stalattiti musicali, attiva geyser sonori e risveglia l\'organo di ametiste!',
      characters: [
        { name: 'Melodia', role: 'Talpina geologa con casco e torcia' },
        { name: 'Eco', role: 'Pipistrellino direttore d\'orchestra con bacchetta di quarzo' }
      ],
      scenes: {
        'cena-1-gruta-ametista': {
          title: 'La Grotta dello Xilofono di Roccia',
          text: 'Sotto le radici degli alberi centenari si nasconde una cattedrale di quarzi viola e turchesi. Gocce d\'acqua cadono a tempo di valzer e la talpina Melodia prepara il suo martelletto per la prima nota.',
          dialogue: 'Tocca i cristalli di varie dimensioni per comporre la nostra canzone sotterranea!',
          speaker: 'Melodia',
          choices: {
            'escolha-lago-ressonante': {
              text: 'Navigare sul Lago di Cristallo Risonante',
              description: 'Suona campane d\'acqua mentre i pesci fluorescenti danzano in cerchio.'
            },
            'escolha-orgao-estalactites': {
              text: 'Risvegliare il Grande Organo di Stalattiti',
              description: 'Suona una sinfonia maestosa che fa vibrare la montagna di pura gioia.'
            }
          }
        }
      }
    }
  },

  'pixel-robo-pintor': {
    es: {
      title: 'Pixel, el Robot Pintor de Auroras',
      subtitle: 'El viaje de un pequeño autómata que soñaba con mezclar los colores del atardecer',
      tagline: '¡Mezcla tintas de luz solar, calibra pinceles magnéticos y pinta el cielo con arcoíris!',
      characters: [
        { name: 'Pixel', role: 'Robot pintor con antena de pincel luminoso' },
        { name: 'Libélula', role: 'Dron libélula que recolecta pigmentos florales' }
      ],
      scenes: {
        'cena-1-oficina-colina': {
          title: 'La Colina de los Colores Olvidados',
          text: 'En la Colina de los Tulipanes Mecánicos, el robotito Pixel contemplaba el sol poniente. Sus ojos digitales parpadeaban en destellos ámbar y violeta. ¡Su paleta estaba lista para llenarse de magia!',
          dialogue: '¡Si mezclamos el rocío de la tarde con rayos de sol, pintaremos el cielo entero!',
          speaker: 'Pixel',
          choices: {
            'escolha-misturar-cores': {
              text: 'Mezclar Pigmentos en la Paleta Solar',
              description: 'Crear tonos resplandecientes de naranja fuego y magenta crepuscular.'
            },
            'escolha-voar-balao': {
              text: 'Subir al Globo de Lienzo Gigante',
              description: 'Pintar auroras celestes directamente sobre el manto de la noche estrellada.'
            }
          }
        }
      }
    },
    en: {
      title: 'Pixel, the Sunset Painter Robot',
      subtitle: 'The quest of a little automaton who dreamed of blending the twilight skies',
      tagline: 'Blend solar light paints, tune magnetic brushes, and paint the sky in rainbows!',
      characters: [
        { name: 'Pixel', role: 'Artist robot with a glowing brush antenna' },
        { name: 'Libélula', role: 'Dragonfly drone collecting blossom pigments' }
      ],
      scenes: {
        'cena-1-oficina-colina': {
          title: 'The Hill of Forgotten Colors',
          text: 'Atop the Hill of Clockwork Tulips, little robot Pixel watched the sun sink low. His digital eyes blinked in vibrant amber and violet tones. His paint palette was eager for vibrant inspiration!',
          dialogue: 'If we blend afternoon dew with golden sunbeams, we will paint the whole twilight sky!',
          speaker: 'Pixel',
          choices: {
            'escolha-misturar-cores': {
              text: 'Mix Pigments on the Solar Palette',
              description: 'Create shimmering shades of fiery tangerine and twilight magenta.'
            },
            'escolha-voar-balao': {
              text: 'Ascend in the Giant Canvas Balloon',
              description: 'Paint sweeping celestial auroras directly onto the tapestry of the night.'
            }
          }
        }
      }
    },
    it: {
      title: 'Pixel, il Robot Pittore di Aurore',
      subtitle: 'Il viaggio di un piccolo automa che sognava di dipingere le sfumature del tramonto',
      tagline: 'Miscela colori di luce solare, calibra pennelli magnetici e dipingi il cielo di meraviglia!',
      characters: [
        { name: 'Pixel', role: 'Robot artista con antenna a pennello luminoso' },
        { name: 'Libélula', role: 'Drone libellula che raccoglie pigmenti di fiori' }
      ],
      scenes: {
        'cena-1-oficina-colina': {
          title: 'La Collina dei Colori Dimenticati',
          text: 'Sulla Collina dei Tulipani Meccanici, il robottino Pixel ammirava il sole calante. I suoi occhi digitali brillavano di sfumature ambrate e violette. La sua tavolozza era pronta a ricevere colori magici!',
          dialogue: 'Se mescoliamo la rugiada serale con i raggi del sole, dipingeremo l\'intero cielo!',
          speaker: 'Pixel',
          choices: {
            'escolha-misturar-cores': {
              text: 'Mescolare i Pigmenti sulla Tavolozza Solare',
              description: 'Crea riflessi scintillanti di mandarino dorato e magenta crepuscolare.'
            },
            'escolha-voar-balao': {
              text: 'Salire sulla Mongolfiera di Tela Gigante',
              description: 'Dipingi aurore celesti direttamente sul manto della notte stellata.'
            }
          }
        }
      }
    }
  },

  'praia-ondas-douradas-familia': {
    es: {
      title: 'El Día de Saltar Olas en la Playa con la Familia',
      subtitle: 'Un domingo soleado junto al mar con castillos de arena, baños seguros y muchas risas',
      tagline: '¡Salta olitas templadas con papá y mamá, junta conchas doradas y ponte protector solar!',
      characters: [
        { name: 'Lucas', role: 'Hermanito emocionado con flotador de patito' },
        { name: 'Sofia', role: 'Hermana mayor experta en castillos de arena' },
        { name: 'Papá y Mamá', role: 'Guardianes cariñosos con toallas y agua fresca' }
      ],
      scenes: {
        'cena-1-chegada-praia': {
          title: 'Pies en la Arena y Olor a Mar',
          text: 'El sol brillaba como una moneda de oro en el cielo azul. La brisa traía el sonido suave de las olas rompiendo en la orilla. Lucas y Sofía corrieron de la mano de mamá hacia el agua templada.',
          dialogue: '¡Primero el protector solar y luego a saltar olitas juntos!',
          speaker: 'Mamá',
          choices: {
            'escolha-pular-ondas': {
              text: 'Saltar Olas con Papá y Mamá',
              description: 'Tomarse de las manos y saltar juntos cada vez que llega una olita blanca espumosa.'
            },
            'escolha-castelo-areia': {
              text: 'Construir el Gran Castillo con Torres y Puentes',
              description: 'Moldear arena húmeda, hacer torres con baldes y decorar con conchitas.'
            }
          }
        }
      }
    },
    en: {
      title: 'Jumping Waves at the Beach with Family',
      subtitle: 'A sunny Sunday by the sea with sandcastles, safe splashes, and lots of laughter',
      tagline: 'Jump warm gentle waves with mom and dad, collect golden seashells, and wear sunscreen!',
      characters: [
        { name: 'Lucas', role: 'Excited little brother with a duck floatie' },
        { name: 'Sofia', role: 'Big sister sandcastle architect' },
        { name: 'Mom & Dad', role: 'Loving guardians with fluffy towels and cool water' }
      ],
      scenes: {
        'cena-1-chegada-praia': {
          title: 'Feet in the Sand and Salty Breeze',
          text: 'The sun shone like a golden coin in the blue sky. The ocean breeze brought the gentle murmur of waves washing ashore. Lucas and Sofia ran hand in hand with mom toward the warm shallows.',
          dialogue: 'First sunscreen on noses and shoulders, and then we jump waves together!',
          speaker: 'Mom',
          choices: {
            'escolha-pular-ondas': {
              text: 'Jump Waves with Mom and Dad',
              description: 'Hold hands tight and leap in rhythm as each gentle foamy crest rolls in.'
            },
            'escolha-castelo-areia': {
              text: 'Build the Grand Castle with Moats and Bridges',
              description: 'Pack firm damp sand, stack bucket towers, and adorn with shiny seashells.'
            }
          }
        }
      }
    },
    it: {
      title: 'Saltare le Onde al Mare con la Famiglia',
      subtitle: 'Una domenica di sole in riva al mare con castelli di sabbia, bagni sicuri e tante risate',
      tagline: 'Salta le dolci onde con mamma e papà, raccogli conchiglie dorate e metti la crema solare!',
      characters: [
        { name: 'Lucas', role: 'Fratellino entusiasta con salvagente a paperella' },
        { name: 'Sofia', role: 'Sorella maggiore maestra di castelli di sabbia' },
        { name: 'Mamma e Papà', role: 'Custodi premurosi con teli morbidi e acqua fresca' }
      ],
      scenes: {
        'cena-1-chegada-praia': {
          title: 'Piedi nella Sabbia e Profumo di Mare',
          text: 'Il sole splendeva come una moneta d\'oro nel cielo limpido. La brezza portava il fruscio dolce delle onde sulla battigia. Lucas e Sofia corsero tenendo per mano la mamma verso l\'acqua tiepida.',
          dialogue: 'Prima la crema solare sul nasino, poi corriamo a saltare le onde insieme!',
          speaker: 'Mamma',
          choices: {
            'escolha-pular-ondas': {
              text: 'Saltare le Onde con Mamma e Papà',
              description: 'Tenersi per mano e saltare all\'unisono a ogni crestina bianca di schiuma.'
            },
            'escolha-castelo-areia': {
              text: 'Costruire il Grande Castello con Torri e Ponti',
              description: 'Modella la sabbia umida, rovescia i secchielli e decora con conchiglie lucenti.'
            }
          }
        }
      }
    }
  },

  'cozinha-encantada-dos-vovos': {
    es: {
      title: 'La Cocina Encantada de los Abuelos',
      subtitle: 'Tardes de masa tibia, mermelada casera, cuentos del ático y abrazos inolvidables',
      tagline: '¡Amasa pan dulce con la abuela, gira el reloj de cuerda del abuelo y prueba delicias!',
      characters: [
        { name: 'Abuela Rosa', role: 'Maga de las galletitas y los abrazos tibios' },
        { name: 'Abuelo Mateo', role: 'Contador de historias legendarias y relojero' },
        { name: 'Clara', role: 'Nieta ayudante con delantal bordado' }
      ],
      scenes: {
        'cena-1-cozinha-aromas': {
          title: 'El Aroma de la Vainilla y la Canela',
          text: 'En la casa de los abuelos, la cocina siempre tenía la ventana abierta al jardín de jazmines. Sobre la mesa de madera rústica descansaba un tazón de harina y un tarro de miel fresca.',
          dialogue: '¡El secreto del buen pan es el amor y amasar con una gran sonrisa!',
          speaker: 'Abuela Rosa',
          choices: {
            'escolha-preparar-biscoitos': {
              text: 'Cortar Galletas con Moldes de Estrellas y Corazones',
              description: 'Espolvorear canela y poner la bandeja en el horno a leña.'
            },
            'escolha-historias-desvao': {
              text: 'Subir al Ático con el Abuelo Mateo',
              description: 'Abrir el baúl de fotos antiguas, brújulas de bronce y juguetes de madera.'
            }
          }
        }
      }
    },
    en: {
      title: 'Grandparents\' Enchanted Kitchen',
      subtitle: 'Warm afternoons of dough, berry jam, attic storybooks, and comforting embraces',
      tagline: 'Knead sweet rolls with grandma, wind grandpa\'s brass clock, and taste fresh treats!',
      characters: [
        { name: 'Grandma Rosa', role: 'Magician of warm cookies and cozy hugs' },
        { name: 'Grandpa Mateo', role: 'Master clockmaker and legend storyteller' },
        { name: 'Clara', role: 'Helpful granddaughter in an embroidered apron' }
      ],
      scenes: {
        'cena-1-cozinha-aromas': {
          title: 'The Scent of Vanilla & Sweet Cinnamon',
          text: 'At grandparents\' house, the kitchen window always opened to blooming jasmine bushes. Upon the rustic timber table rested a bowl of warm flour and a jar of clover honey.',
          dialogue: 'The secret ingredient in good baking is always patience and love!',
          speaker: 'Grandma Rosa',
          choices: {
            'escolha-preparar-biscoitos': {
              text: 'Cut Cookies with Star & Heart Cutters',
              description: 'Dust sweet cinnamon sugar and slide the tray into the warm oven.'
            },
            'escolha-historias-desvao': {
              text: 'Climb to the Attic with Grandpa Mateo',
              description: 'Unlock the chest of vintage photographs, brass compasses, and wooden toys.'
            }
          }
        }
      }
    },
    it: {
      title: 'La Cucina Incantata dei Nonni',
      subtitle: 'Pomeriggi di pasta soffice, marmellata fatta in casa, racconti in soffitta e abbracci caldi',
      tagline: 'Impasta dolci con la nonna, ricarica l\'orologio antico del nonno e assaggia bontà!',
      characters: [
        { name: 'Nonna Rosa', role: 'Maga dei biscotti e degli abbracci affettuosi' },
        { name: 'Nonno Matteo', role: 'Orologiaio e narratore di storie d\'altri tempi' },
        { name: 'Clara', role: 'Nipotina aiutante con grembiule ricamato' }
      ],
      scenes: {
        'cena-1-cozinha-aromas': {
          title: 'Il Profumo di Vaniglia e Cannella',
          text: 'A casa dei nonni, la cucina si affacciava sempre sul giardino di gelsomini in fiore. Sul tavolo di legno massiccio riposavano una ciotola di farina e un vasetto di miele fresco.',
          dialogue: 'Il segreto di ogni buon dolce sono l\'amore e un pizzico di allegria!',
          speaker: 'Nonna Rosa',
          choices: {
            'escolha-preparar-biscoitos': {
              text: 'Tagliare Biscotti a Forma di Stella e Cuore',
              description: 'Spolvera zucchero a velo e inforna la teglia nel profumato forno caldo.'
            },
            'escolha-historias-desvao': {
              text: 'Salire in Soffitta con Nonno Matteo',
              description: 'Apri il baule delle foto antiche, bussole d\'ottone e giocattoli di legno.'
            }
          }
        }
      }
    }
  },

  'casa-arvore-forte-irmaos': {
    es: {
      title: 'La Casa del Árbol y el Fuerte Secreto de los Hermanos',
      subtitle: 'Trabajo en equipo, puentes levadizos de cuerda, telescopios y contraseñas secretas',
      tagline: '¡Iza baldes con meriendas, defiende la fortaleza con globos y crea un club de hermanos!',
      characters: [
        { name: 'Tomás', role: 'Hermano mediano capitán de ingenieros' },
        { name: 'Helena', role: 'Hermana mayor vigía con binoculares' },
        { name: 'Benício', role: 'Hermanito menor mensajero con walkie-talkie' }
      ],
      scenes: {
        'cena-1-base-arvore': {
          title: 'El Cuartel General en el Roble Centenario',
          text: 'Entre las ramas robustas de un roble frondoso, los tres hermanos habían construido un refugio con tablas de madera y cortinas de sábanas. La escalera de cuerda conducía al puesto de mando.',
          dialogue: '¡Atención tripulación! ¿Cuál es la contraseña secreta para subir?',
          speaker: 'Helena',
          choices: {
            'escolha-icar-lanche': {
              text: 'Izar la Cesta de la Merienda con Polea',
              description: 'Subir bocadillos de plátano, manzanas crujientes y jugo de naranja fresco.'
            },
            'escolha-mapa-tesouro': {
              text: 'Trazar el Mapa de Exploración del Jardín',
              description: 'Marcar escondites secretos, el nido de pájaros carpinteros y la colina de tréboles.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Secret Treehouse and the Siblings\' Fort',
      subtitle: 'Teamwork, rope drawbridges, brass telescopes, and sibling clubhouse secret codes',
      tagline: 'Hoist snack buckets on pulleys, protect the fort, and create your sibling clubhouse!',
      characters: [
        { name: 'Tomás', role: 'Middle brother and chief treehouse architect' },
        { name: 'Helena', role: 'Big sister lookout with shiny binoculars' },
        { name: 'Benício', role: 'Little brother courier with a walkie-talkie' }
      ],
      scenes: {
        'cena-1-base-arvore': {
          title: 'The Headquarters in the Grand Oak',
          text: 'Among the sturdy branches of an ancient leafy oak, three siblings built their sanctuary with cedar planks and canvas curtains. A knotted rope ladder led up to the command deck.',
          dialogue: 'Halt, crew! Who remembers today\'s top-secret clubhouse password?',
          speaker: 'Helena',
          choices: {
            'escolha-icar-lanche': {
              text: 'Hoist the Snack Basket via Pulley',
              description: 'Haul up crisp apples, banana sandwiches, and cool freshly squeezed juice.'
            },
            'escolha-mapa-tesouro': {
              text: 'Chart the Backyard Exploration Map',
              description: 'Map secret hiding spots, the woodpecker nest, and the four-leaf clover lawn.'
            }
          }
        }
      }
    },
    it: {
      title: 'La Casa sull\'Albero e il Forte Segreto dei Fratelli',
      subtitle: 'Gioco di squadra, ponti levatoi di corda, cannocchiali e parole d\'ordine segrete',
      tagline: 'Solleva cestini di merende, difendi la fortezza e fonda il club segreto dei fratelli!',
      characters: [
        { name: 'Tomás', role: 'Fratello mezzano capitano degli ingegneri' },
        { name: 'Helena', role: 'Sorella maggiore sentinella con binocolo' },
        { name: 'Benício', role: 'Fratellino corriere con walkie-talkie' }
      ],
      scenes: {
        'cena-1-base-arvore': {
          title: 'Il Quartier Generale nella Grande Quercia',
          text: 'Tra i rami possenti di una quercia secolare, i tre fratelli avevano costruito un rifugio con assi di legno e tende colorate. Una scaletta di corda conduceva al ponte di comando.',
          dialogue: 'Altola equipaggio! Qual è la parola d\'ordine segreta per salire a bordo?',
          speaker: 'Helena',
          choices: {
            'escolha-icar-lanche': {
              text: 'Sollevare il Cestino della Merenda con la Carrucola',
              description: 'Tira su panini alla banana, mele croccanti e spremuta fresca d\'arancia.'
            },
            'escolha-mapa-tesouro': {
              text: 'Disegnare la Mappa del Giardino Segreto',
              description: 'Segna i nascondigli migliori, il nido del picchio e la collina dei quadrifogli.'
            }
          }
        }
      }
    }
  },

  'resgate-coracao-valente': {
    es: {
      title: 'El Rescate de Corazón Valiente',
      subtitle: 'Una emocionante visita al refugio de animales, una mirada tierna y un hogar para siempre',
      tagline: '¡Acaricia cachorritos en el refugio, elige juguetes blanditos y dale un hogar a un fiel amigo!',
      characters: [
        { name: 'Mateo', role: 'Niño amoroso con libreta de cuidados' },
        { name: 'Valiente', role: 'Perrito mestizo con orejita caída y ojos brillantes' },
        { name: 'Veterinaria Luiza', role: 'Cuidadora bondadosa del refugio' }
      ],
      scenes: {
        'cena-1-abrigo': {
          title: 'El Jardín de las Colitas Felices',
          text: 'El refugio Esperanza estaba lleno de sol y ladrillos de colores. En los patios verdes, perros y gatos rescatados jugaban con pelotas. Mateo caminaba de la mano de su mamá cuando dos ojitos castaños se asomaron tras una cerca.',
          dialogue: 'Cada animalito aquí tiene una historia de valentía y un corazón lleno de cariño para dar.',
          speaker: 'Veterinaria Luiza',
          choices: {
            'escolha-brincar-valente': {
              text: 'Jugar con Valiente en el Patio de Césped',
              description: 'Lanzar una pelotita amarilla y ver al perrito correr con la colita batiendo de felicidad.'
            },
            'escolha-documento-adocao': {
              text: 'Firmar el Certificado de Adopción Responsable',
              description: 'Prometer paseos diarios, vacunas, comida nutritiva y mucho amor todos los días.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Rescue of Braveheart',
      subtitle: 'A touching shelter visit, an unforgettable gaze, and a forever home filled with love',
      tagline: 'Pet joyful shelter pups, pick squeaky toys, and welcome a loyal friend to your family!',
      characters: [
        { name: 'Mateo', role: 'Gentle boy with a pet care checklist' },
        { name: 'Braveheart', role: 'Rescue pup with one floppy ear and eager eyes' },
        { name: 'Dr. Luiza', role: 'Kindhearted shelter veterinarian' }
      ],
      scenes: {
        'cena-1-abrigo': {
          title: 'The Garden of Wagging Tails',
          text: 'Hope Animal Shelter was bright and sunlit. In grassy yards, rescued puppies and kittens chased balls. Mateo walked hand-in-hand with his mother when two soulful brown eyes peered over a wooden gate.',
          dialogue: 'Every creature here has a brave story and a heart brimming with unconditional love.',
          speaker: 'Dr. Luiza',
          choices: {
            'escolha-brincar-valente': {
              text: 'Play with Braveheart on the Lawn',
              description: 'Toss a bouncy yellow ball and watch him dash back with his tail wagging.'
            },
            'escolha-documento-adocao': {
              text: 'Sign the Responsible Adoption Pledge',
              description: 'Promise daily walks, fresh water, veterinary care, and infinite cuddles.'
            }
          }
        }
      }
    },
    it: {
      title: 'Il Soccorso di Cuor di Leone',
      subtitle: 'Un\'emozionante visita al rifugio, uno sguardo indimenticabile e una casa per sempre',
      tagline: 'Accarezza cuccioli al rifugio, scegli giocattoli morbidi e dona una famiglia a un vero amico!',
      characters: [
        { name: 'Mateo', role: 'Bambino premuroso con il quaderno delle cure' },
        { name: 'Cuor di Leone', role: 'Cagnolino con un orecchio piegato e occhi dolci' },
        { name: 'Dott.ssa Luiza', role: 'Veterinaria gentile del rifugio' }
      ],
      scenes: {
        'cena-1-abrigo': {
          title: 'Il Giardino delle Codine Felici',
          text: 'Il rifugio Speranza era inondato di sole. Nei prati verdi, cuccioli e gattini salvati correvano dietro a palline colorate. Mateo camminava con la mamma quando due occhietti color nocciola sbucarono dal recinto.',
          dialogue: 'Ogni animaletto qui ha una storia di coraggio e un cuore colmo di amore da donare.',
          speaker: 'Dott.ssa Luiza',
          choices: {
            'escolha-brincar-valente': {
              text: 'Giocare con Cuor di Leone sul Prato',
              description: 'Lancia una pallina gialla e guardalo correre scodinzolando di pura felicità.'
            },
            'escolha-documento-adocao': {
              text: 'Firmare l\'Atto di Adozione Responsabile',
              description: 'Prometti passeggiate quotidiane, cure affettuose, cibo sano e coccole infinite.'
            }
          }
        }
      }
    }
  }
};
