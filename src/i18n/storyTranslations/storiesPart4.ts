import { BookTranslation, Language } from '../../types';

export const storiesPart4: Record<string, Partial<Record<Language, BookTranslation>>> = {
  'menina-conversava-nuvens': {
    es: {
      title: 'Clara y la Danza de las Nubes y las Estaciones',
      subtitle: 'Un viaje en globo aerostático para comprender cómo el viento, la lluvia y el sol nutren la Tierra',
      tagline: '¡Aprende el ciclo del agua, descubre los secretos del clima y haz brillar el arcoíris!',
      characters: [
        { name: 'Clara', role: 'Joven meteoróloga con barómetro y catalejo' },
        { name: 'Ventito', role: 'Brisa juguetona que silba entre los árboles' },
        { name: 'Profesor Estrato', role: 'Sabio observador de las corrientes de aire' }
      ],
      scenes: {
        'cena-1-observatorio-tempo': {
          title: 'El Globo Meteorológico y el Viento Norte',
          text: 'En la Colina de las Cometas, la cesta del globo aerostático estaba lista para el despegue. Clara ajustó el barómetro y miró al cielo: nubes suaves en forma de corderitos viajaban veloces, anunciando una brisa templada ideal para los cultivos.',
          dialogue: '¡Las nubes son las mensajeras del cielo! ¡Cada forma nos cuenta una historia sobre el agua y la vida!',
          speaker: 'Clara',
          choices: {
            'escolha-subir-cumulus': {
              text: 'Ascender a las Nubes Cúmulos de Algodón',
              description: 'Volar entre corrientes térmicas ascendentes y recolectar gotas de vapor puro.'
            },
            'escolha-arcoiris-solar': {
              text: 'Desplegar el Prisma del Arcoíris bajo la Lluvia Ligera',
              description: 'Combinar rayos de sol con gotas de agua para pintar un arcoíris de siete colores.'
            }
          }
        }
      }
    },
    en: {
      title: 'Clara & the Dance of Clouds and Seasons',
      subtitle: 'A hot-air balloon voyage unraveling how wind, rain, and sunshine keep our Earth thriving',
      tagline: 'Explore cumulus and stratus clouds, discover the water cycle, and paint a glorious rainbow!',
      characters: [
        { name: 'Clara', role: 'Young meteorologist with a barometer and telescope' },
        { name: 'Ventito', role: 'Playful breeze whistling through the pines' },
        { name: 'Professor Strato', role: 'Wise scholar of atmospheric air currents' }
      ],
      scenes: {
        'cena-1-observatorio-tempo': {
          title: 'The Weather Balloon and the North Wind',
          text: 'High atop Kite Hill, the wicker basket of the meteorological balloon was prepared for ascent. Clara checked the antique barometer and looked skyward: soft cottony cumulus clouds drifted swiftly, bringing gentle moisture to the valley crops.',
          dialogue: 'Clouds are the sky\'s faithful messengers! Every shape tells a beautiful story about water and life on Earth!',
          speaker: 'Clara',
          choices: {
            'escolha-subir-cumulus': {
              text: 'Soar Up to the Towering Cumulus Clouds',
              description: 'Glide along thermal updrafts and gather samples of pure condensed moisture.'
            },
            'escolha-arcoiris-solar': {
              text: 'Deploy the Sunlight Rainbow Prism Across Gentle Rain',
              description: 'Blend golden sunbeams through mist droplets to cast a vibrant seven-color rainbow.'
            }
          }
        }
      }
    },
    it: {
      title: 'Clara e la Danza delle Nuvole e delle Stagioni',
      subtitle: 'Un viaggio in mongolfiera per capire come il vento, la pioggia e il sole nutrono la Terra',
      tagline: 'Scopri il ciclo dell\'acqua, impara i segreti del meteo e fai splendere l\'arcobaleno!',
      characters: [
        { name: 'Clara', role: 'Giovane meteorologa con barometro e cannocchiale' },
        { name: 'Ventito', role: 'Brezza giocherellona che fischia tra i pini' },
        { name: 'Professor Strato', role: 'Saggio studioso delle correnti atmosferiche' }
      ],
      scenes: {
        'cena-1-observatorio-tempo': {
          title: 'Il Pallone Meteorologico e il Vento del Nord',
          text: 'Sulla Collina degli Aquiloni, il cesto della mongolfiera era pronto per decollare. Clara controllò il barometro di rame e scrutò il cielo: soffici nuvole a pecorelle viaggiavano veloci, annunciando una brezza fresca benefica per i campi.',
          dialogue: 'Le nuvole sono i messaggeri del cielo! Ogni forma racconta una storia d\'acqua e di vita sulla Terra!',
          speaker: 'Clara',
          choices: {
            'escolha-subir-cumulus': {
              text: 'Salire verso i Grandi Cumuli di Panna',
              description: 'Vola sulle correnti ascensionali e raccogli gocce di puro vapore rinfrescante.'
            },
            'escolha-arcoiris-solar': {
              text: 'Spiegare il Prisma dell\'Arcobaleno sotto la Pioggerella',
              description: 'Unisci i raggi del sole alle goccioline di rugiada per dipingere un arcobaleno a sette colori.'
            }
          }
        }
      }
    }
  },

  'pescaria-barco-azul': {
    es: {
      title: 'La Aventura del Barco Azul y el Lago Silencioso',
      subtitle: 'Pesca deportiva sin anzuelo, limpieza de las orillas y el rescate de la nutria dorada',
      tagline: '¡Rema en el lago sereno, recoge hojas flotantes y libera a los peces con cariño!',
      characters: [
        { name: 'Pescador Zé', role: 'Marinero sonriente de gorra azul y remos de madera' },
        { name: 'Aninha', role: 'Niña observadora con binoculares para aves' },
        { name: 'Dourado', role: 'Pez brillante guardián del lago' }
      ],
      scenes: {
        'cena-1-lago-azul': {
          title: 'Aguas Calmas y el Reflejo de los Pinos',
          text: 'El Barco Azul se deslizaba suavemente sobre el lago como una pluma en el agua. La neblina matutina se disipaba revelando peces saltarines y libélulas esmeralda danzando entre los juncos.',
          dialogue: '¡En este barco cuidamos la vida del agua! Miramos, respetamos y cuidamos el hogar de los peces.',
          speaker: 'Pescador Zé',
          choices: {
            'escolha-limpar-margem': {
              text: 'Recoger Ramitas y Limpiar la Orilla del Arroyo',
              description: 'Dejar el agua cristalina para que las nutrias y los cisnes naden en paz.'
            },
            'escolha-fotografar-peixes': {
              text: 'Fotografiar los Peces Dorados Bajo la Quilla',
              description: 'Observar con una lupa acuática las escamas brillantes que relumbran como oro.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Blue Boat and the Whispering Lake',
      subtitle: 'Gentle catch-and-release, shoreline conservation, and the golden otter river sanctuary',
      tagline: 'Row gently across peaceful waters, clear floating twigs, and watch golden fish leap!',
      characters: [
        { name: 'Skipper Zé', role: 'Smiling sailor in a blue cap with cedar oars' },
        { name: 'Aninha', role: 'Watchful girl with birdwatching binoculars' },
        { name: 'Dourado', role: 'Gleaming golden fish lake guardian' }
      ],
      scenes: {
        'cena-1-lago-azul': {
          title: 'Mirror Waters Beneath Whispering Pines',
          text: 'The Little Blue Boat glided across the glassy lake as quietly as a fallen leaf. Morning mist lifted to reveal darting trout and emerald dragonflies hovering over water lilies.',
          dialogue: 'Aboard this boat we honor the living waters! We look, appreciate, and protect every fish\'s sanctuary.',
          speaker: 'Skipper Zé',
          choices: {
            'escolha-limpar-margem': {
              text: 'Clear Drifting Branches and Care for Shorelines',
              description: 'Keep waters crystal pure so otters and wild ducks swim in peace.'
            },
            'escolha-fotografar-peixes': {
              text: 'Photograph the Golden Fish Beneath the Keel',
              description: 'Observe with an underwater magnifying viewer scales that glisten like pure sunlight.'
            }
          }
        }
      }
    },
    it: {
      title: 'L\'Avventura della Barca Blu e del Lago Calmo',
      subtitle: 'Pesca ecologica senza ami, cura delle sponde e il salvataggio della lontra dorata',
      tagline: 'Voga sul lago sereno, raccogli foglie galleggianti e osserva i pesci guizzare!',
      characters: [
        { name: 'Marinaio Zé', role: 'Timoniere sorridente con berretto blu e remi di legno' },
        { name: 'Aninha', role: 'Bambina attenta con binocolo per l\'avvistamento uccelli' },
        { name: 'Dourado', role: 'Pesce lucente guardiano del lago' }
      ],
      scenes: {
        'cena-1-lago-azul': {
          title: 'Acque Limpide e il Riflesso dei Pini',
          text: 'La Barca Blu scivolava sull\'acqua quieta del lago come una foglia d\'autunno. La nebbia mattutina svaniva svelando pesciolini guizzanti e libellule smeraldo tra i canneti.',
          dialogue: 'Su questa barca proteggiamo la vita dell\'acqua! Osserviamo, rispettiamo e curiamo la casa dei pesci.',
          speaker: 'Marinaio Zé',
          choices: {
            'escolha-limpar-margem': {
              text: 'Raccogliere Rametti e Curare la Riva del Ruscello',
              description: 'Lascia l\'acqua limpida affinché le lontre e i cigni nuotino in totale tranquillità.'
            },
            'escolha-fotografar-peixes': {
              text: 'Fotografare i Pesci Dorati Sotto la Chiglia',
              description: 'Osserva con una lente subacquea le squame lucenti che brillano come oro al sole.'
            }
          }
        }
      }
    }
  },

  'amuleto-quatro-florestas': {
    es: {
      title: 'El Amuleto de los Cuatro Bosques Sagrados',
      subtitle: 'La prueba de los guardianes elementales: hojas de jade, cristales de río, fuego calmo y viento susurrante',
      tagline: '¡Encaja gemas elementales, habla con el ciervo blanco y protege el equilibrio de la naturaleza!',
      characters: [
        { name: 'Kaian', role: 'Joven arquero guardabosques con arco de sauce' },
        { name: 'Ayla', role: 'Aprendiz druida con bastón de ámbar' },
        { name: 'Silvano', role: 'Ciervo sagrado de astas de cristal lunar' }
      ],
      scenes: {
        'cena-1-clareira-guardiao': {
          title: 'El Altar de las Piedras de Jade',
          text: 'En el corazón de los Cuatro Bosques, un antiguo círculo de menhires rodeaba un altar de piedra musgosa. Cuatro orbes de cristal descansaban vacíos, esperando que los guardianes demostraran su sabiduría y compasión.',
          dialogue: 'La naturaleza no se domina: se escucha, se protege y se ama con humildad.',
          speaker: 'Ayla',
          choices: {
            'escolha-orbe-terra': {
              text: 'Ofrendar la Semilla de la Secuoya Milenaria',
              description: 'Despertar la raíz de jade y hacer brotar flores sanadoras en el suelo del bosque.'
            },
            'escolha-orbe-vento': {
              text: 'Cantar la Canción de la Brisa Nocturna',
              description: 'Alinear las hojas susurrantes para guiar a las criaturas perdidas hacia el santuario.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Amulet of the Four Sacred Groves',
      subtitle: 'The trial of elemental stewards: jade leaves, river quartz, gentle ember, and whispering wind',
      tagline: 'Fit elemental gems, converse with the white stag, and uphold the balance of nature!',
      characters: [
        { name: 'Kaian', role: 'Young forest ranger with a willow bow' },
        { name: 'Ayla', role: 'Druid apprentice with an amber wand' },
        { name: 'Silvano', role: 'Sacred white stag with moonstone antlers' }
      ],
      scenes: {
        'cena-1-clareira-guardiao': {
          title: 'The Altar of Jade Runestones',
          text: 'At the heart of the Four Groves, an ancient circle of standing stones surrounded a mossy stone altar. Four crystal pedestals stood waiting for seekers of natural wisdom and compassion.',
          dialogue: 'Nature is never to be conquered: it is listened to, protected, and cherished with humility.',
          speaker: 'Ayla',
          choices: {
            'escolha-orbe-terra': {
              text: 'Offer the Millennial Redwood Seed',
              description: 'Awaken the deep earth root and summon healing clover blossoms across the forest floor.'
            },
            'escolha-orbe-vento': {
              text: 'Sing the Melody of the Night Zephyr',
              description: 'Attune trembling canopy leaves to guide wandering forest creatures back to safety.'
            }
          }
        }
      }
    },
    it: {
      title: 'L\'Amuleto delle Quattro Foreste Sacre',
      subtitle: 'La prova dei guardiani elementali: foglie di giada, quarzi di fiume, fuoco mite e vento sussurrato',
      tagline: 'Incastona gemme elementali, parla con il cervo bianco e proteggi l\'armonia della natura!',
      characters: [
        { name: 'Kaian', role: 'Giovane guardiano dei boschi con arco di salice' },
        { name: 'Ayla', role: 'Apprendista druida con bastone d\'ambra' },
        { name: 'Silvano', role: 'Cervo sacro dalle corna di pietra di luna' }
      ],
      scenes: {
        'cena-1-clareira-guardiao': {
          title: 'L\'Altare delle Pietre di Giada',
          text: 'Nel cuore delle Quattro Foreste, un antico cerchio di menhir circondava un altare di pietra coperto di muschio. Quattro piedistalli di cristallo attendevano che i guardiani dimostrassero saggezza e rispetto.',
          dialogue: 'La natura non si domina: si ascolta, si protegge e si rispetta con umiltà.',
          speaker: 'Ayla',
          choices: {
            'escolha-orbe-terra': {
              text: 'Offrire il Seme della Sequoia Millenaria',
              description: 'Risveglia la radice profonda della terra e fai sbocciare trifogli curativi sul prato.'
            },
            'escolha-orbe-vento': {
              text: 'Cantare la Melodia della Brezza Notturna',
              description: 'Sintonizza le foglie degli alberi per guidare gli animali smarriti verso il rifugio.'
            }
          }
        }
      }
    }
  },

  'biblioteca-secreta-moinho-antigo': {
    es: {
      title: 'La Biblioteca Secreta del Viejo Molino de Viento',
      subtitle: 'Mapas celestes en vitelas doradas, libros que se abren con llaves musicales y sabiduría oculta',
      tagline: '¡Gira las aspas del molino, descifra códigos de tinta mágica y descubre manuscritos perdidos!',
      characters: [
        { name: 'Elias', role: 'Joven bibliotecario con guantes de seda' },
        { name: 'Sofia', role: 'Archivera curiosa de libros encantados' },
        { name: 'Arquímedes', role: 'Búho sabio que lee con anteojos redondos' }
      ],
      scenes: {
        'cena-1-moinho-engrenagens': {
          title: 'El Susurro de las Páginas Antiguas',
          text: 'En lo alto de la colina de los vientos, el viejo molino de piedra escondía un secreto: al girar sus aspas de madera, estantes giratorios de libros descendían del techo como una escalera caracol de enciclopedias.',
          dialogue: '¡Cada libro aquí es una puerta a un tiempo diferente! ¿Cuál época quieres explorar hoy?',
          speaker: 'Elias',
          choices: {
            'escolha-livro-astronomia': {
              text: 'Abrir el Gran Atlas de las Constelaciones',
              description: 'Ver planetas iluminados en miniatura flotando en tres dimensiones sobre las páginas.'
            },
            'escolha-passagem-roda': {
              text: 'Accionar la Palanca Tras el Estante de Poesía',
              description: 'Bajar a la sala abovedada donde se conservan manuscritos de los primeros navegantes.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Secret Library of the Old Windmill',
      subtitle: 'Gold-leaf celestial charts, musical lock tomes, and centuries of lost scholarly marvels',
      tagline: 'Spin windmill sails, decode glowing calligraphy, and discover legendary scrolls!',
      characters: [
        { name: 'Elias', role: 'Young archivist wearing white velvet gloves' },
        { name: 'Sofia', role: 'Curious researcher of living enchanted tomes' },
        { name: 'Archimedes', role: 'Spectacled barn owl scholar perching on bookshelves' }
      ],
      scenes: {
        'cena-1-moinho-engrenagens': {
          title: 'The Whispering Vellum Scrolls',
          text: 'High on the Windy Ridge, the ancient stone windmill harbored a wondrous secret: when its timber sails turned, circular bookshelves descended like a spiral staircase of leather-bound encyclopedias.',
          dialogue: 'Every volume here is a doorway across eras! Which wonder shall we unfold today?',
          speaker: 'Elias',
          choices: {
            'escolha-livro-astronomia': {
              text: 'Open the Grand Celestial Atlas',
              description: 'Watch miniature glowing planets orbit in three dimensions above the gilded vellum.'
            },
            'escolha-passagem-roda': {
              text: 'Turn the Gear Behind the Poetry Shelf',
              description: 'Descend into the vaulted crypt housing navigation logs from the first explorers.'
            }
          }
        }
      }
    },
    it: {
      title: 'La Biblioteca Segreta del Vecchio Mulino a Vento',
      subtitle: 'Mappe celesti in pergamena dorata, tomi che si aprono con chiavi musicali e saggezza perduta',
      tagline: 'Gira le pale del mulino, decifra codici d\'inchiostro magico e scopri manoscritti leggendari!',
      characters: [
        { name: 'Elias', role: 'Giovane bibliotecario con guanti di velluto' },
        { name: 'Sofia', role: 'Studiosa curiosa di tomi incantati' },
        { name: 'Archimede', role: 'Barbagianni saggio con occhialini tondi' }
      ],
      scenes: {
        'cena-1-moinho-engrenagens': {
          title: 'Il Sussurro delle Pagine Antiche',
          text: 'In cima alla Collina del Vento, l\'antico mulino di pietra celava un prodigio: quando le pale di legno giravano, scaffali circolari scendevano dal soffitto come una scala a chiocciola di volumi rilegati.',
          dialogue: 'Ogni libro qui è una porta aperta su un\'epoca diversa! Quale segreto vogliamo svelare oggi?',
          speaker: 'Elias',
          choices: {
            'escolha-livro-astronomia': {
              text: 'Aprire il Grande Atlante delle Costellazioni',
              description: 'Ammira pianeti luminosi in miniatura che orbitano a mezz\'aria sopra le pagine dorate.'
            },
            'escolha-passagem-roda': {
              text: 'Azionare la Leva dietro lo Scaffale di Poesia',
              description: 'Scendi nella sala a volta dove riposano i diari dei primi grandi navigatori.'
            }
          }
        }
      }
    }
  },

  'grande-campeonato-colina-azul': {
    es: {
      title: 'El Gran Campeonato de la Colina Azul',
      subtitle: 'Carreras de bicicletas de montaña, curvas seguras, casco ajustado y la superación en equipo',
      tagline: '¡Ajusta tu casco, revisa los frenos de tu bici y pedalea con valentía hasta la cima!',
      characters: [
        { name: 'Rodrigo', role: 'Ciclista veloz con bicicleta de suspensión roja' },
        { name: 'Camila', role: 'Especialista en senderos de tierra y curvas seguras' },
        { name: 'Mecánico André', role: 'Experto en neumáticos y cadenas engrasadas' }
      ],
      scenes: {
        'cena-1-largada-pista': {
          title: 'El Casco Abrochado y el Banderín de Salida',
          text: 'El sendero de la Colina Azul estaba delimitado con conos naranjas y pancartas de ánimo. El sol calentaba la tierra fresca mientras los ciclistas probaban los cambios de velocidad.',
          dialogue: '¡Recuerda siempre: el casco bien ajustado y la mirada adelante para frenar con suavidad!',
          speaker: 'Mecánico André',
          choices: {
            'escolha-trilha-bosque': {
              text: 'Tomar la Curva Suave por el Bosque de Pinos',
              description: 'Pedalear con cadencia constante entre la sombra fresca de los árboles.'
            },
            'escolha-rampa-madeira': {
              text: 'Subir la Rampa de Tablas de Madera con Impulso',
              description: 'Ponerse de pie en los pedales y superar la cuesta con fuerza y equilibrio.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Grand Championship of Blue Hill',
      subtitle: 'Mountain bike trials, banked turns, safety helmets, and uplifting encouragement along trails',
      tagline: 'Fasten your helmet snug, check your bicycle brakes, and pedal bravely to the hilltop!',
      characters: [
        { name: 'Rodrigo', role: 'Speedy cyclist on a cherry-red dual-suspension bike' },
        { name: 'Camila', role: 'Trail specialist mastering smooth banked dirt turns' },
        { name: 'Mechanic André', role: 'Bicycle technician with tire pumps and chain oil' }
      ],
      scenes: {
        'cena-1-largada-pista': {
          title: 'Buckled Helmets and the Checkered Flag',
          text: 'The Blue Hill single-track trail was cleanly marked with orange cones and encouraging pennants. Warm sunshine dried the morning dirt as young riders test-shifted gears on the flat gravel apron.',
          dialogue: 'Always remember: helmet snug, thumbs wrapped, and eyes scanning ahead for gentle braking!',
          speaker: 'Mechanic André',
          choices: {
            'escolha-trilha-bosque': {
              text: 'Take the Sweeping Pine Forest Line',
              description: 'Pedal with a steady, relaxed cadence under the cool pine scent canopy.'
            },
            'escolha-rampa-madeira': {
              text: 'Power Up the Timber Boardwalk Incline',
              description: 'Rise up off the saddle and conquer the wooden rise with balanced pedal power.'
            }
          }
        }
      }
    },
    it: {
      title: 'Il Grande Campionato della Collina Blu',
      subtitle: 'Gare in mountain bike, curve paraboliche, casco allacciato e spirito di squadra sui sentieri',
      tagline: 'Allaccia bene il casco, controlla i freni della bici e pedala con grinta fino alla vetta!',
      characters: [
        { name: 'Rodrigo', role: 'Ciclista scattante con bici ammortizzata rossa' },
        { name: 'Camila', role: 'Esperta di sentieri sterrati e curve in sicurezza' },
        { name: 'Meccanico André', role: 'Mago delle catene oliate e pressione delle ruote' }
      ],
      scenes: {
        'cena-1-largada-pista': {
          title: 'Casco Allacciato e Bandiera a Scacchi',
          text: 'Il sentiero della Collina Blu era delimitato con cura da birilli arancioni e striscioni festosi. Il sole tiepido scaldava il terreno mentre i ragazzi provavano il cambio delle marce prima del via.',
          dialogue: 'Ricordati: casco ben allacciato, sguardo avanti e frenate dolci con entrambe le mani!',
          speaker: 'Meccanico André',
          choices: {
            'escolha-trilha-bosque': {
              text: 'Scegliere la Curva Dolce tra i Pini',
              description: 'Pedala con ritmo costante all\'ombra profumata degli alberi secolari.'
            },
            'escolha-rampa-madeira': {
              text: 'Superare con Slancio la Rampa di Legno',
              description: 'Alzati sui pedali e affronta la salita con equilibrio e concentrazione.'
            }
          }
        }
      }
    }
  },

  'farol-solitario-baleia-serena': {
    es: {
      title: 'El Faro Solitario y el Canto de la Ballena Serena',
      subtitle: 'La guardia nocturna del farero, la gran lente de cristal giratoria y la amistad marina',
      tagline: '¡Pule la gran lente de Fresnel, enciende el haz de luz y canta con la ballena jorobada!',
      characters: [
        { name: 'Viejo Tomás', role: 'Farero bondadoso de barba blanca y pipa de burbujas' },
        { name: 'Sara', role: 'Nieta aprendiz con linterna de latón' },
        { name: 'Serena', role: 'Ballena madre que guía a los delfines en las noches de niebla' }
      ],
      scenes: {
        'cena-1-torre-farol': {
          title: 'El Escalón Ciento Veinte y la Lente de Cristal',
          text: 'En lo alto de los acantilados de granito negro, la torre blanca del faro se elevaba desafiando el viento oceánico. Tomás y Sara subían la escalera caracol hacia la cúpula donde una lente monumental aguardaba el ocaso.',
          dialogue: '¡El faro nunca duerme! Su luz es la mano que guía a los marineros sanos y salvos a su hogar.',
          speaker: 'Viejo Tomás',
          choices: {
            'escolha-girar-lente': {
              text: 'Hacer Girar el Mecanismo de Relojería del Faro',
              description: 'Dar cuerda al contrapeso de plomo para que el haz de luz blanca barra el mar en círculos.'
            },
            'escolha-canto-baleia': {
              text: 'Escuchar el Canto de Serena desde la Balconada',
              description: 'Acercarse a la barandilla con el megáfono de latón y responder con una suave melodía.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Solitary Lighthouse and the Whale\'s Lullaby',
      subtitle: 'Night watch in the granite tower, rotating Fresnel prism brass bells, and ocean companionship',
      tagline: 'Polish the grand crystal lens, sweep beams across stormy seas, and hum with the great whale!',
      characters: [
        { name: 'Old Thomas', role: 'Kind white-bearded keeper puffing bubble pipes' },
        { name: 'Sara', role: 'Keeper\'s granddaughter holding a brass lantern' },
        { name: 'Serena', role: 'Mother whale escorting pods safely through coastal fogs' }
      ],
      scenes: {
        'cena-1-torre-farol': {
          title: 'Step One Hundred and Twenty to the Crystal Lantern',
          text: 'Perched upon sheer black granite sea cliffs, the ivory lighthouse tower stood firm against salt gales. Thomas and Sara climbed the iron spiral stair toward the dome where a monumental faceted lens awaited nightfall.',
          dialogue: 'A true beacon never slumbers! Its sweeping beam is the guiding hand welcoming sailors home.',
          speaker: 'Old Thomas',
          choices: {
            'escolha-girar-lente': {
              text: 'Wind the Clockwork Rotator of the Fresnel Lens',
              description: 'Crank the heavy lead counterweight so luminous white beams sweep the ocean swells in circles.'
            },
            'escolha-canto-baleia': {
              text: 'Listen to Serena\'s Deep Melody from the Catwalk',
              description: 'Step onto the windy deck with a brass horn and send a warm acoustic reply across waves.'
            }
          }
        }
      }
    },
    it: {
      title: 'Il Faro Solitario e il Canto della Balena Serena',
      subtitle: 'La veglia notturna del guardiano, la grande lente girevole e una dolce amicizia marina',
      tagline: 'Lucida la grande lente di cristallo, accendi il fascio di luce e canta con la balena gentile!',
      characters: [
        { name: 'Vecchio Tomaso', role: 'Guardiano del faro dalla barba bianca e pipa a bolle' },
        { name: 'Sara', role: 'Nipotina custode con lanterna d\'ottone' },
        { name: 'Serena', role: 'Mamma balena che guida le creature nelle notti di tempesta' }
      ],
      scenes: {
        'cena-1-torre-farol': {
          title: 'Il Gradino Centoventi e la Cupola di Vetro',
          text: 'Sulle scogliere di granito scuro, la torre bianca del faro sfidava con fermezza il vento salmastro. Tomaso e Sara salivano la scala a chiocciola di ferro verso la grande lente di cristallo sfaccettato.',
          dialogue: 'Il faro non dorme mai! La sua luce è come una mano calda che guida i marinai verso casa.',
          speaker: 'Vecchio Tomaso',
          choices: {
            'escolha-girar-lente': {
              text: 'Caricare il Meccanismo a Pesi della Grande Lente',
              description: 'Gira la manovella in modo che il fascio di luce bianca spazzi il mare in cerchi regolari.'
            },
            'escolha-canto-baleia': {
              text: 'Ascoltare il Canto di Serena dal Balconcino del Faro',
              description: 'Affacciati al parapetto con il megafono d\'ottone e rispondi con una melodia rassicurante.'
            }
          }
        }
      }
    }
  },

  'jovens-botanicos-floresta-musgo': {
    es: {
      title: 'Los Jóvenes Botánicos del Bosque de Musgo',
      subtitle: 'Lupas de explorador, semillas voladoras, orquídeas fosforescentes y el gran herbario vivo',
      tagline: '¡Examina esporas con lupa, cataloga hojas raras y planta brotes para revivir el bosque!',
      characters: [
        { name: 'Maya', role: 'Niña botánica con cuaderno de bocetos y acuarelas' },
        { name: 'Davi', role: 'Joven jardinero con pala de madera y regadera de cobre' },
        { name: 'Profesor Brote', role: 'Árbol anciano parlante que enseña botánica' }
      ],
      scenes: {
        'cena-1-estufa-floresta': {
          title: 'El Cuaderno de Campo y la Lupa de Latón',
          text: 'Bajo la sombra de los helechos gigantes del Bosque de Musgo, los dos jóvenes científicos catalogaban las plantas medicinales. Una orquídea con pétalos de terciopelo azul goteaba néctar brillante en una hoja hueca.',
          dialogue: '¡Mira las venas de esta hoja bajo la lupa! ¡Transportan agua y minerales como pequeños ríos verdes!',
          speaker: 'Maya',
          choices: {
            'escolha-colher-sementes': {
              text: 'Recolectar Semillas Aladas en la Cesta de Mimbre',
              description: 'Esparcir semillas en la ladera deforestada para que nuevos árboles crezcan en primavera.'
            },
            'escolha-regar-orquidea': {
              text: 'Regar la Orquídea Azul con Agua de Rocío Puro',
              description: 'Ver cómo sus pétalos se abren desprendiendo una fragancia suave a lavanda silvestre.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Young Botanists of Mosswood Glen',
      subtitle: 'Field magnifying glasses, winged helicopter seeds, glowing orchid petals, and the living herbarium',
      tagline: 'Inspect moss spores, catalog rare medicinal leaves, and plant saplings to restore the woods!',
      characters: [
        { name: 'Maya', role: 'Young botanist sketching blossoms in watercolors' },
        { name: 'Davi', role: 'Field gardener with an ash trowel and copper can' },
        { name: 'Professor Sprout', role: 'Gentle elder treant mentoring green-thumb science' }
      ],
      scenes: {
        'cena-1-estufa-floresta': {
          title: 'The Field Notebook & The Brass Lens',
          text: 'Beneath the verdant canopy of giant ferns in Mosswood Glen, two budding naturalists documented rare woodland flora. A velvet blue orchid dripped luminescent nectar into a curled moss cradle.',
          dialogue: 'Look through the lens at the leaf veins! They channel water and minerals just like miniature green rivers!',
          speaker: 'Maya',
          choices: {
            'escolha-colher-sementes': {
              text: 'Harvest Winged Helicopter Seeds in the Wicker Tray',
              description: 'Scatter seeds across open sunny patches so a fresh canopy rises by spring.'
            },
            'escolha-regar-orquidea': {
              text: 'Nourish the Blue Orchid with Pure Morning Dew',
              description: 'Watch velvet petals unfold, releasing a soothing perfume of wild forest blossom.'
            }
          }
        }
      }
    },
    it: {
      title: 'I Giovani Botanici della Foresta di Muschio',
      subtitle: 'Lenti d\'ingrandimento, semi volanti, orchidee fluorescenti e il grande erbario vivente',
      tagline: 'Esamina spore con la lente, cataloga foglie rare e pianta germogli per rigenerare il bosco!',
      characters: [
        { name: 'Maya', role: 'Bambina botanica con taccuino e acquerelli' },
        { name: 'Davi', role: 'Giovane giardiniere con paletta di legno e annaffiatoio' },
        { name: 'Professor Germoglio', role: 'Albero saggio parlante che insegna i segreti delle piante' }
      ],
      scenes: {
        'cena-1-estufa-floresta': {
          title: 'Il Taccuino da Campo e la Lente d\'Ingrandimento',
          text: 'Sotto le fronde delle felci giganti nella Foresta di Muschio, i due giovani scienziati catalogavano piante rare. Un\'orchidea dai petali di velluto azzurro lasciava gocciolare nettare brillante su una foglia.',
          dialogue: 'Guarda le venature di questa foglia con la lente! Portano acqua e nutrimento proprio come fiumicelli verdi!',
          speaker: 'Maya',
          choices: {
            'escolha-colher-sementes': {
              text: 'Raccogliere Semi Alati nel Cestino di Vimini',
              description: 'Disperdi i semi nella radura soleggiata affinché nuovi alberi crescano rigogliosi.'
            },
            'escolha-regar-orquidea': {
              text: 'Innaffiare l\'Orchidea Azzurra con Rugiada Pura',
              description: 'Ammira i petali che si schiudono emanando una soave fragranza di lavanda selvatica.'
            }
          }
        }
      }
    }
  },

  'portal-sonhos-lentes-amanha': {
    es: {
      title: 'El Portal de los Sueños y los Lentes del Mañana',
      subtitle: 'El acelerador de bolsillo, futuros ecológicos y las decisiones que moldean la Tierra',
      tagline: '¡Alinea prismas cuánticos, viaja por posibles futuros y elige el camino de la armonía planetaria!',
      characters: [
        { name: 'Ícaro', role: 'Joven crononauta con reloj cuántico de arena solar' },
        { name: 'Dra. Selene', role: 'Física cuántica guardiana de las líneas temporales' },
        { name: 'Kronos', role: 'Autómata relojero que calibra lentes de realidad' }
      ],
      scenes: {
        'cena-1-camara-temporal': {
          title: 'El Acelerador de Luz y los Espejos del Tiempo',
          text: 'En el laboratorio subterráneo del Observatorio del Tiempo, tres aros gigantescos de bronce giraban alrededor de una esfera de luz blanca. Ícaro ajustó sus Lentes del Mañana: ante sus ojos, dos caminos futuros comenzaron a proyectarse.',
          dialogue: 'El futuro no está grabado en piedra: cada árbol que plantas hoy cambia el mundo de mañana.',
          speaker: 'Dra. Selene',
          choices: {
            'escolha-futuro-solar': {
              text: 'Calibrar la Lente hacia la Metrópolis Solar Flotante',
              description: 'Visitar una civilización que convive en perfecta armonía con bosques en los techos y energía limpia.'
            },
            'escolha-futuro-coral': {
              text: 'Sintonizar la Frecuencia del Océano Cristalino',
              description: 'Explorar ciudades submarinas biosintéticas donde el ser humano protege los arrecifes de coral.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Dream Portal & The Lenses of Tomorrow',
      subtitle: 'Pocket accelerators, regenerative ecological futures, and choices shaping our home planet',
      tagline: 'Align quantum prisms, journey through bright futures, and choose planetary harmony!',
      characters: [
        { name: 'Ícaro', role: 'Young chrononaut with a solar sand quantum watch' },
        { name: 'Dr. Selene', role: 'Quantum physicist guardian of timeline futures' },
        { name: 'Kronos', role: 'Clockmaker automaton calibrating reality focal lenses' }
      ],
      scenes: {
        'cena-1-camara-temporal': {
          title: 'The Light Accelerator & Mirrors of Time',
          text: 'In the deep vaulted hall of the Chronos Observatory, three concentric bronze rings spun around a core of pure white light. Ícaro fitted the Lenses of Tomorrow: right before his eyes, twin branches of possible futures emerged.',
          dialogue: 'The future is never set in stone: every single seed of kindness planted today blooms across tomorrow!',
          speaker: 'Dr. Selene',
          choices: {
            'escolha-futuro-solar': {
              text: 'Calibrate the Lenses to the Floating Solar Eco-City',
              description: 'Witness a thriving civilization powered by clean sunbeams, with forests flourishing upon every rooftop.'
            },
            'escolha-futuro-coral': {
              text: 'Tune Frequencies to the Crystalline Coral Sanctuary',
              description: 'Explore harmonious undersea biodomes engineered alongside dolphins to restore sea life.'
            }
          }
        }
      }
    },
    it: {
      title: 'Il Portale dei Sogni e le Lenti del Domani',
      subtitle: 'L\'acceleratore tascabile, futuri ecologici rigenerativi e le scelte che plasmano la Terra',
      tagline: 'Allinea prismi quantistici, viaggia in futuri possibili e scegli l\'armonia con il pianeta!',
      characters: [
        { name: 'Ícaro', role: 'Giovane crononauta con orologio quantico a sabbia solare' },
        { name: 'Dott.ssa Selene', role: 'Fisica quantistica guardiana delle linee temporali' },
        { name: 'Kronos', role: 'Automa orologiaio che calibra lenti della realtà' }
      ],
      scenes: {
        'cena-1-camara-temporal': {
          title: 'L\'Acceleratore di Luce e gli Specchi del Tempo',
          text: 'Nel grande laboratorio sotterraneo dell\'Osservatorio del Tempo, tre anelli di bronzo ruotavano attorno a una sfera di luce purissima. Ícaro indossò le Lenti del Domani: davanti ai suoi occhi presero forma due rami del futuro.',
          dialogue: 'Il futuro non è scritto nella pietra: ogni gesto gentile che compi oggi cambierà il mondo di domani!',
          speaker: 'Dott.ssa Selene',
          choices: {
            'escolha-futuro-solar': {
              text: 'Calibrare le Lenti verso la Città Solare Galleggiante',
              description: 'Ammira una civiltà che vive in perfetta armonia con tetti alberati ed energia pulita per tutti.'
            },
            'escolha-futuro-coral': {
              text: 'Sintonizzare la Frequenza dell\'Oceano Rigenerato',
              description: 'Esplora cupole marine sottomarine dove l\'uomo e i delfini collaborano a proteggere i coralli.'
            }
          }
        }
      }
    }
  }
};
