import { BookTranslation, Language } from '../../types';

export const storiesPart1: Record<string, Partial<Record<Language, BookTranslation>>> = {
  'dragao-rio-magico': {
    es: {
      title: 'El Dragón y el Río Dormido',
      subtitle: 'Una fábula mágica sobre despertar el mundo a tu alrededor',
      tagline: '¡Toca al dragón, despierta el río y cosecha frutas mágicas!',
      characters: [
        { name: 'Pipoca', role: 'Dragoncito risueño y adorable' },
        { name: 'Lia', role: 'Aventurera curiosa' },
        { name: 'Pingo', role: 'Pecesito guardián del río' }
      ],
      scenes: {
        'cena-1-clareira': {
          title: 'El Claro Silencioso',
          text: 'Era una mañana tranquila en el Bosque de los Susurros. Cerca de un río completamente inmóvil, el dragoncito Pipoca dormía una agradable siesta. En lo alto del Gran Baobab, frutas doradas relucían bajo el sol. ¡Todo parecía inmóvil hasta que una mano curiosa decidió tocar el escenario!',
          dialogue: '¡Hola amigo lector! ¿Qué tal si me despiertas con unas cosquillitas en la barriguita?',
          speaker: 'Pipoca',
          choices: {
            'escolha-seguir-rio': {
              text: 'Seguir el curso del Río Despierto',
              description: 'Navegar con los peces hasta las cuevas de cristales brillantes.'
            },
            'escolha-subir-baoba': {
              text: 'Subir a la copa del Baobab con Pipoca',
              description: 'Ver el mundo desde arriba y divisar islas flotantes en el horizonte.'
            }
          }
        },
        'cena-2a-caverna': {
          title: 'La Cueva de los Cristales Centelleantes',
          text: 'Las aguas del río llevaron a Lia y Pipoca hasta la entrada de una gruta iluminada. Paredes de cuarzo rosa y amatista reflejaban las chamas del dragoncito. En el centro de la caverna, un cofre misterioso estaba cubierto de hiedras brillantes.',
          dialogue: '¡Mira cuántos destellos mágicos! ¡Siento que hay un gran tesoro esperando por nosotros!',
          speaker: 'Lia',
          choices: {
            'escolha-abrir-bau': {
              text: 'Abrir el Cofre Ancestral con la llave dorada',
              description: 'Descubrir qué secretos guardaron los antiguos sabios del río.'
            },
            'escolha-tocar-cristal': {
              text: 'Tocar el Cristal Gigante en el centro de la gruta',
              description: 'Escuchar el eco de una antigua melodía que calma a todos los animales.'
            }
          }
        },
        'cena-2b-copa': {
          title: 'La Gran Copa del Baobab',
          text: 'Con un suave aleteo, Pipoca llevó a Lia hasta las hojas más altas. El viento soplaba fresco y se podía divisar todo el reino: bosques encantados, castillos en las nubes y el mar resplandeciendo a lo lejos.',
          dialogue: '¡Mira allá arriba! ¡Las nubes parecen animales gigantes brincando!',
          speaker: 'Pipoca',
          choices: {
            'escolha-observar-passaros': {
              text: 'Cantar junto a las aves migratorias',
              description: 'Aprender el canto del viento que guía a los viajeros.'
            },
            'escolha-colher-fruta-topo': {
              text: 'Cosechar la Fruta de la Estrella Guía',
              description: 'Un fruto que brilla en la oscuridad y calienta el corazón de quien lo prueba.'
            }
          }
        },
        'cena-final': {
          title: 'Fin de la Historia: ¡Viva tu Aventura!',
          text: '¡Has completado tu viaje en el mundo de Pop! Gracias a tu curiosidad por tocar los elementos y tomar tus propias decisiones, el dragón encontró una gran amistad y el río volvió a cantar alegremente. ¿Qué tal si vuelves a leer y tomas otro camino?',
          dialogue: '¡Estuviste increíble! ¡Pop siempre estará aquí para jugar contigo cuando quieras!',
          speaker: 'Pipoca y Amigos',
          choices: {
            'escolha-reiniciar': {
              text: '¡Reiniciar y tomar decisiones diferentes!',
              description: 'Descubre qué pasaría si eligieras el otro camino.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Dragon & the Sleeping River',
      subtitle: 'A magical fable about awakening the world around you',
      tagline: 'Touch the dragon, awaken the river, and gather magic fruits!',
      characters: [
        { name: 'Pipoca', role: 'Cheerful and cuddly little dragon' },
        { name: 'Lia', role: 'Curious explorer' },
        { name: 'Pingo', role: 'Little fish guardian of the river' }
      ],
      scenes: {
        'cena-1-clareira': {
          title: 'The Silent Clearing',
          text: 'It was a peaceful morning in the Whispering Forest. Beside a completely still river, little dragon Pipoca was taking a cozy nap. High atop the Great Baobab, golden succulent fruits glistened under the sun. Everything was still... until a curious hand touched the scene!',
          dialogue: 'Hello reader friend! How about waking me up with a tickle on my belly?',
          speaker: 'Pipoca',
          choices: {
            'escolha-seguir-rio': {
              text: 'Follow the Course of the Awakened River',
              description: 'Sail with the fish to the glowing crystal caves.'
            },
            'escolha-subir-baoba': {
              text: 'Climb to the Baobab Treetop with Pipoca',
              description: 'See the world from high above and spot floating islands on the horizon.'
            }
          }
        },
        'cena-2a-caverna': {
          title: 'The Cave of Sparkling Crystals',
          text: 'The river waters carried Lia and Pipoca to the entrance of an illuminated cavern. Walls of rose quartz and amethyst reflected the little dragon\'s flames. In the center of the grotto, a mysterious chest rested under glowing vines.',
          dialogue: 'Look at all those sparkling gems! I feel like there\'s a grand treasure waiting for us!',
          speaker: 'Lia',
          choices: {
            'escolha-abrir-bau': {
              text: 'Open the Ancient Chest with the golden key',
              description: 'Discover the secrets stored by the wise sages of the river.'
            },
            'escolha-tocar-cristal': {
              text: 'Touch the Giant Crystal in the center of the cave',
              description: 'Hear the echo of an ancient melody that soothes every creature.'
            }
          }
        },
        'cena-2b-copa': {
          title: 'The Great Baobab Treetop',
          text: 'With a gentle flutter of his wings, Pipoca carried Lia to the highest leaves. A fresh breeze blew and the entire kingdom stretched below: enchanted forests, cloud castles, and the shining sea far away.',
          dialogue: 'Look up there! The clouds look like giant friendly animals leaping across the sky!',
          speaker: 'Pipoca',
          choices: {
            'escolha-observar-passaros': {
              text: 'Sing along with migratory birds',
              description: 'Learn the wind song that guides peaceful travelers.'
            },
            'escolha-colher-fruta-topo': {
              text: 'Harvest the Star Guide Fruit',
              description: 'A fruit that shines in the dark and warms the heart of whoever tastes it.'
            }
          }
        },
        'cena-final': {
          title: 'End of Story: Live Your Adventure!',
          text: 'You have completed your journey in the world of Pop! Thanks to your curiosity in touching elements and making your own choices, the dragon made a wonderful friend and the river sings with joy. How about reading again and taking another route?',
          dialogue: 'You were amazing! Pop will always be here to play with you whenever you wish!',
          speaker: 'Pipoca & Friends',
          choices: {
            'escolha-reiniciar': {
              text: 'Restart and make different choices!',
              description: 'See what would happen if you chose the other path.'
            }
          }
        }
      }
    },
    it: {
      title: 'Il Drago e il Fiume Addormentato',
      subtitle: 'Una favola magica sul risvegliare il mondo intorno a te',
      tagline: 'Tocca il drago, sveglia il fiume e raccogli frutti magici!',
      characters: [
        { name: 'Pipoca', role: 'Draghetto allegro e coccoloso' },
        { name: 'Lia', role: 'Avventuriera curiosa' },
        { name: 'Pingo', role: 'Pesciolino guardiano del fiume' }
      ],
      scenes: {
        'cena-1-clareira': {
          title: 'La Radura Silenziosa',
          text: 'Era una mattina tranquilla nella Foresta dei Sussurri. Accanto a un fiume immobile, il piccolo drago Pipoca faceva un pisolino delizioso. In cima al Grande Baobab, frutti dorati brillavano sotto la luce del sole. Tutto sembrava immobile... finché una manina curiosa non toccò la scena!',
          dialogue: 'Ciao piccolo lettore! Che ne dici di svegliarmi con un solletico sul pancino?',
          speaker: 'Pipoca',
          choices: {
            'escolha-seguir-rio': {
              text: 'Seguire il corso del Fiume Risvegliato',
              description: 'Naviga con i pesci verso le caverne di cristallo splendente.'
            },
            'escolha-subir-baoba': {
              text: 'Salire sulla cima del Baobab con Pipoca',
              description: 'Guarda il mondo dall\'alto e scorgi isole volanti all\'orizzonte.'
            }
          }
        },
        'cena-2a-caverna': {
          title: 'La Grotta dei Cristalli Scintillanti',
          text: 'Le acque del fiume condussero Lia e Pipoca all\'ingresso di una grotta illuminata. Pareti di quarzo rosa e ametista riflettevano le fiammelle del draghetto. Al centro della caverna, un misterioso forziere riposava coperto da edere luminose.',
          dialogue: 'Guarda quanti riflessi magici! Sento che c\'è un grande tesoro che ci aspetta!',
          speaker: 'Lia',
          choices: {
            'escolha-abrir-bau': {
              text: 'Aprire il Forziere Antico con la chiave dorata',
              description: 'Scopri quali segreti hanno custodito gli antichi saggi del fiume.'
            },
            'escolha-tocar-cristal': {
              text: 'Toccare il Cristallo Gigante al centro della grotta',
              description: 'Ascolta l\'eco di un\'antica melodia che rasserena ogni creatura.'
            }
          }
        },
        'cena-2b-copa': {
          title: 'La Grande Chioma del Baobab',
          text: 'Con un battito d\'ali leggero, Pipoca portò Lia sulle foglie più alte. Il vento soffiava fresco e si poteva ammirare l\'intero regno: boschi incantati, castelli tra le nuvole e il mare scintillante in lontananza.',
          dialogue: 'Guarda lassù! Le nuvole sembrano animali giganteschi che saltellano!',
          speaker: 'Pipoca',
          choices: {
            'escolha-observar-passaros': {
              text: 'Cantare con gli uccelli migratori',
              description: 'Impara il canto del vento che guida i viaggiatori sereni.'
            },
            'escolha-colher-fruta-topo': {
              text: 'Raccogliere il Frutto della Stella Guida',
              description: 'Un frutto che risplende nel buio e scalda il cuore di chi lo assaggia.'
            }
          }
        },
        'cena-final': {
          title: 'Fine della Storia: Viva la Tua Avventura!',
          text: 'Hai completato il tuo viaggio nel mondo di Pop! Grazie alla tua curiosità nel toccare gli elementi e compiere le tue scelte, il drago ha trovato una grande amica e il fiume canta felice. Che ne dici di rileggere scegliendo un\'altra via?',
          dialogue: 'Sei stato bravissimo! Pop sarà sempre qui per giocare con te quando vuoi!',
          speaker: 'Pipoca e Amici',
          choices: {
            'escolha-reiniciar': {
              text: 'Ricominciare e fare scelte diverse!',
              description: 'Scopri cosa succederebbe se scegliessi l\'altra strada.'
            }
          }
        }
      }
    }
  },

  'ilha-engrenagens-flutuantes': {
    es: {
      title: 'El Secreto de la Isla Flotante',
      subtitle: 'Un viaje misterioso de autómatas, globos y runas antiguas',
      tagline: '¡Gira engranajes, activa autómatas voladores y descifra enigmas celestes!',
      characters: [
        { name: 'Gizmo', role: 'Pájaro robótico a vapor' },
        { name: 'Theo', role: 'Joven inventor y explorador' }
      ],
      scenes: {
        'cena-1-ilha-ceu': {
          title: 'El Faro de las Nubes',
          text: 'En lo alto de una isla de piedra que levita sobre el océano, engranajes gigantescos de bronce giraban en silencio. Un faro misterioso estaba apagado y el pájaro mecánico Gizmo parecía sin energía en su percha.',
          dialogue: '¡Un poco de vapor y una vuelta de llave y estaré listo para volar contigo!',
          speaker: 'Gizmo',
          choices: {
            'escolha-observatorio': {
              text: 'Explorar el Observatorio Estelar',
              description: 'Subir a la cúpula de cristal donde los telescopios muestran constelaciones mágicas.'
            },
            'escolha-minas': {
              text: 'Bajar a las Minas de Cristal Flotante',
              description: 'Descubrir de dónde viene la energía que hace flotar toda la isla en el aire.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Secret of the Floating Island',
      subtitle: 'A mysterious journey of automatons, air balloons, and ancient runes',
      tagline: 'Turn gears, activate flying automatons, and decipher celestial puzzles!',
      characters: [
        { name: 'Gizmo', role: 'Steam-powered mechanical bird' },
        { name: 'Theo', role: 'Young inventor and explorer' }
      ],
      scenes: {
        'cena-1-ilha-ceu': {
          title: 'The Cloud Lighthouse',
          text: 'High upon a stone island levitating above the ocean, giant bronze gears turned in silence. A mysterious lighthouse was dark, and mechanical bird Gizmo sat motionless on his perch.',
          dialogue: 'A bit of steam and a turn of the key and I will be ready to soar with you!',
          speaker: 'Gizmo',
          choices: {
            'escolha-observatorio': {
              text: 'Explore the Star Observatory',
              description: 'Climb to the glass dome where brass telescopes reveal enchanted constellations.'
            },
            'escolha-minas': {
              text: 'Descend into the Floating Crystal Mines',
              description: 'Discover where the energy that keeps the whole island afloat comes from.'
            }
          }
        }
      }
    },
    it: {
      title: 'Il Segreto dell\'Isola Galleggiante',
      subtitle: 'Un viaggio misterioso di automi, mongolfiere e antiche rune',
      tagline: 'Gira gli ingranaggi, attiva automi volanti e decifra enigmi celesti!',
      characters: [
        { name: 'Gizmo', role: 'Uccellino robot a vapore' },
        { name: 'Theo', role: 'Giovane inventore ed esploratore' }
      ],
      scenes: {
        'cena-1-ilha-ceu': {
          title: 'Il Faro delle Nuvole',
          text: 'In cima a un\'isola di pietra che levita sull\'oceano, giganteschi ingranaggi di bronzo giravano in silenzio. Un faro misterioso era spento e l\'uccellino meccanico Gizmo sembrava privo di energia.',
          dialogue: 'Un soffio di vapore e un giro di chiave e sarò pronto a volare con te!',
          speaker: 'Gizmo',
          choices: {
            'escolha-observatorio': {
              text: 'Esplorare l\'Osservatorio Stellare',
              description: 'Sali alla cupola di vetro dove i telescopi mostrano costellazioni incantate.'
            },
            'escolha-minas': {
              text: 'Scendere nelle Miniere di Cristallo Galleggiante',
              description: 'Scopri da dove proviene l\'energia che fa galleggiare l\'intera isola nell\'aria.'
            }
          }
        }
      }
    }
  },

  'recife-das-maravilhas': {
    es: {
      title: 'El Secreto de la Ballena Azul',
      subtitle: 'Una aventura acuática llena de corales brillantes y tesoros',
      tagline: '¡Toca medusas, despierta a la ostra cantarina y nada con delfines!',
      characters: [
        { name: 'Tatty', role: 'Tortuguita veloz con gafas de buceo' },
        { name: 'Lumi', role: 'Medusa bioluminiscente' },
        { name: 'Serena', role: 'Dulce ballena cantarina' }
      ],
      scenes: {
        'cena-1-recife': {
          title: 'El Jardín de Corales Centelleantes',
          text: 'En el fondo del océano turquesa, el arrecife parece un bosque de arcoíris. Una ostra gigante duerme en la arena suave, mientras cardúmenes juegan entre las anémonas.',
          dialogue: '¡Ponte las gafas de buceo! ¡Hay perlas brillantes esperándonos en el fondo!',
          speaker: 'Tatty',
          choices: {
            'escolha-navio': {
              text: 'Nadar hacia el Barco Hundido del Pirata',
              description: 'Descubrir cofres de tesoros cubiertos de estrellas de mar.'
            },
            'escolha-baleia': {
              text: 'Seguir el Canto de la Ballena Serena',
              description: 'Subir a la superficie para admirar saltos acrobáticos bajo la luna.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Secret of the Blue Whale',
      subtitle: 'An aquatic adventure filled with glowing corals and sunken treasures',
      tagline: 'Touch jellyfish, wake the singing oyster, and swim with dolphins!',
      characters: [
        { name: 'Tatty', role: 'Speedy little turtle with dive goggles' },
        { name: 'Lumi', role: 'Bioluminescent glow jellyfish' },
        { name: 'Serena', role: 'Gentle singing whale' }
      ],
      scenes: {
        'cena-1-recife': {
          title: 'The Garden of Sparkling Corals',
          text: 'Deep in the turquoise ocean, the reef resembles a rainbow forest. A giant oyster sleeps on soft sand while schools of fish play hide-and-seek among anemones.',
          dialogue: 'Put on your swimming goggles! There are shining pearls waiting for us on the seafloor!',
          speaker: 'Tatty',
          choices: {
            'escolha-navio': {
              text: 'Swim to the Sunken Pirate Ship',
              description: 'Discover treasure chests adorned with colorful sea stars.'
            },
            'escolha-baleia': {
              text: 'Follow the Song of Serena the Whale',
              description: 'Rise to the surface to watch acrobatic leaps under moonlight.'
            }
          }
        }
      }
    },
    it: {
      title: 'Il Segreto della Balenottera Azzurra',
      subtitle: 'Un\'avventura acquatica ricca di coralli splendenti e tesori',
      tagline: 'Tocca le meduse, sveglia l\'ostrica canterina e nuota con i delfini!',
      characters: [
        { name: 'Tatty', role: 'Tartarughina veloce con occhialini da sub' },
        { name: 'Lumi', role: 'Medusa bioluminescente' },
        { name: 'Serena', role: 'Dolce balena canterina' }
      ],
      scenes: {
        'cena-1-recife': {
          title: 'Il Giardino di Coralli Scintillanti',
          text: 'Nel profondo dell\'oceano turchese, la barriera corallina sembra una foresta arcobaleno. Un\'ostrica gigante dorme sulla sabbia morbida, mentre i pesciolini giocano tra gli anemoni.',
          dialogue: 'Infila gli occhialini! Ci sono perle luminose che ci aspettano sul fondo del mare!',
          speaker: 'Tatty',
          choices: {
            'escolha-navio': {
              text: 'Nuotare verso il Relitto del Pirata',
              description: 'Scopri forzieri del tesoro ricoperti di stelle marine.'
            },
            'escolha-baleia': {
              text: 'Seguire il Canto della Balena Serena',
              description: 'Sali in superficie per ammirare salti acrobatici sotto il chiaro di luna.'
            }
          }
        }
      }
    }
  },

  'astro-urso-doces': {
    es: {
      title: 'Astro-Oso y la Nebulosa de Dulces',
      subtitle: 'Un viaje intergaláctico con lluvia de gomitas cósmicas y anillos de azúcar',
      tagline: '¡Pilota cohetes, recolecta donas flotantes y visita la luna de helado!',
      characters: [
        { name: 'Bernie', role: 'Astro-Oso piloto glotón' },
        { name: 'Pip', role: 'Robot satélite con antenas de piruleta' }
      ],
      scenes: {
        'cena-1-cabine-espacial': {
          title: 'La Estación Espacial de Algodón de Azúcar',
          text: 'El Astro-Oso Bernie ajustaba su casco espacial con orejitas. Por la escotilla, cometas rosados cruzaban el cielo oscuro dejando una estela aromática a fresa. ¡Había botones de colores titilando en la consola!',
          dialogue: '¡Motores a toda potencia! ¡La lluvia de gomitas estelares está por comenzar!',
          speaker: 'Bernie',
          choices: {
            'escolha-lua-sorvete': {
              text: 'Aterrizar en la Luna de Tres Sabores',
              description: 'Explorar cráteres llenos de helado de vainilla, chocolate y fresa.'
            },
            'escolha-rio-chocolate': {
              text: 'Navegar por el Río de Chocolate Cósmico',
              description: 'Viajar en una burbuja de cacao flotante con piruletas relucientes.'
            }
          }
        }
      }
    },
    en: {
      title: 'Astro-Bear & the Candy Nebula',
      subtitle: 'An intergalactic voyage with cosmic jellybean showers and sugar rings',
      tagline: 'Pilot rockets, collect floating donuts, and visit the ice cream moon!',
      characters: [
        { name: 'Bernie', role: 'Astro-Bear pilot and treat lover' },
        { name: 'Pip', role: 'Satellite robot with lollipop antennas' }
      ],
      scenes: {
        'cena-1-cabine-espacial': {
          title: 'The Cotton Candy Space Station',
          text: 'Astro-Bear Bernie was adjusting his space helmet with bear ears. Outside the window, pink comets streaked across the dark sky leaving a strawberry-scented trail. Colorful buttons glowed on the flight deck!',
          dialogue: 'Full thrusters ahead! The stellar jellybean shower is about to start!',
          speaker: 'Bernie',
          choices: {
            'escolha-lua-sorvete': {
              text: 'Land on the Three-Flavor Moon',
              description: 'Explore craters filled with creamy vanilla, chocolate, and strawberry ice cream.'
            },
            'escolha-rio-chocolate': {
              text: 'Sail through the Cosmic Chocolate River',
              description: 'Hitch a ride in a floating cocoa bubble among sparkling lollipops.'
            }
          }
        }
      }
    },
    it: {
      title: 'Astro-Orso e la Nebulosa dei Dolci',
      subtitle: 'Un viaggio intergalattico con pioggia di caramelle gommose e anelli di zucchero',
      tagline: 'Pilota razzi, raccogli ciambelle galleggianti e visita la luna di gelato!',
      characters: [
        { name: 'Bernie', role: 'Astro-Orso pilota golosone' },
        { name: 'Pip', role: 'Robot satellite con antenne a lecca-lecca' }
      ],
      scenes: {
        'cena-1-cabine-espacial': {
          title: 'La Stazione Spaziale di Zucchero Filato',
          text: 'L\'Astro-Orso Bernie si sistemava il casco spaziale con le orecchiette. Dall\'oblò della navicella, comete rosa solcavano il cielo scuro lasciando una scia profumata di fragola. Pulsanti colorati lampeggiavano sul cruscotto!',
          dialogue: 'Motori alla massima potenza! La pioggia di caramelle stellari sta per iniziare!',
          speaker: 'Bernie',
          choices: {
            'escolha-lua-sorvete': {
              text: 'Atterrare sulla Luna ai Tre Gusti',
              description: 'Esplora crateri pieni di delizioso gelato alla vaniglia, cioccolato e fragola.'
            },
            'escolha-rio-chocolate': {
              text: 'Navigare lungo il Fiume di Cioccolato Cosmico',
              description: 'Fai un giro in una bolla di cacao fluttuante tra lecca-lecca scintillanti.'
            }
          }
        }
      }
    }
  },

  'floresta-cogumelos-luminosos': {
    es: {
      title: 'El Secreto de las Setas Luminosas',
      subtitle: 'Un misterio nocturno donde la flora brilla en la oscuridad y susurra enigmas',
      tagline: '¡Toca las esporas fosforescentes, descifra runas del árbol anciano y libera luciérnagas!',
      characters: [
        { name: 'Lila', role: 'Zorrita curiosa con capa esmeralda' },
        { name: 'Gael', role: 'Búho sabio con catalejo' }
      ],
      scenes: {
        'cena-1-bosque-noturno': {
          title: 'El Claro de las Lunas Gemelas',
          text: 'El crepúsculo cayó sobre el Bosque Mansur. Poco a poco, los troncos de los árboles encendieron líneas de luz verde y azul. La zorrita Lila sostenía su mapa estelar al notar que las setas gigantes parecían teclas de un piano mágico.',
          dialogue: '¡Escucha atentamente! ¡Cada seta toca una nota musical cuando la tocas con cariño!',
          speaker: 'Lila',
          choices: {
            'escolha-labirinto-musgo': {
              text: 'Entrar en el Laberinto de Musgo Resplandeciente',
              description: 'Seguir los rastros de flores brillantes que guían hacia el gran árbol sagrado.'
            },
            'escolha-gruta-vagalumes': {
              text: 'Despertar a la Reina de las Luciérnagas',
              description: 'Subir a las ramas altas para encender miles de linternas voladoras en la noche.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Secret of the Glowing Mushrooms',
      subtitle: 'A nighttime mystery where woodland flora glows in the dark and whispers secrets',
      tagline: 'Touch phosphorescent spores, decipher ancient runes, and set fireflies free!',
      characters: [
        { name: 'Lila', role: 'Curious little fox in an emerald cape' },
        { name: 'Gael', role: 'Wise little owl with a brass telescope' }
      ],
      scenes: {
        'cena-1-bosque-noturno': {
          title: 'The Clearing of Twin Moons',
          text: 'Twilight descended upon the Mansur Forest. Trunk by trunk, ancient trees began lighting lines of soft teal and azure. Little fox Lila held her star map as giant mushrooms on the ground seemed like keys of a hidden piano.',
          dialogue: 'Listen closely! Each mushroom plays a gentle musical chord when you tap it!',
          speaker: 'Lila',
          choices: {
            'escolha-labirinto-musgo': {
              text: 'Enter the Glowing Moss Labyrinth',
              description: 'Follow illuminated blossoms leading toward the great elder tree.'
            },
            'escolha-gruta-vagalumes': {
              text: 'Awaken the Queen of Fireflies',
              description: 'Climb high canopy branches to light up thousands of flying night lanterns.'
            }
          }
        }
      }
    },
    it: {
      title: 'Il Segreto dei Funghi Luminosi',
      subtitle: 'Un mistero notturno in cui la flora brilla al buio e sussurra enigmi',
      tagline: 'Tocca le spore fosforescenti, decifra le rune dell\'antico albero e libera le lucciole!',
      characters: [
        { name: 'Lila', role: 'Volpina curiosa con mantello color smeraldo' },
        { name: 'Gael', role: 'Civetta saggia con cannocchiale' }
      ],
      scenes: {
        'cena-1-bosque-noturno': {
          title: 'La Radura delle Lune Gemelle',
          text: 'Il crepuscolo calò sul Bosco Mansur. A poco a poco, i tronchi degli alberi accesero linee di luce azzurra e verde. La volpina Lila osservava la mappa stellare quando notò che i funghi giganti sembravano i tasti di un pianoforte segreto.',
          dialogue: 'Ascolta con attenzione! Ogni funghetto suona una nota armoniosa quando lo sfiori!',
          speaker: 'Lila',
          choices: {
            'escolha-labirinto-musgo': {
              text: 'Entrare nel Labirinto di Muschio Splendente',
              description: 'Segui i fiori luminosi che guidano verso il grande albero guardiano.'
            },
            'escolha-gruta-vagalumes': {
              text: 'Svegliare la Regina delle Lucciole',
              description: 'Sali sui rami più alti per accendere migliaia di lanterne volanti nella notte.'
            }
          }
        }
      }
    }
  },

  'trem-magico-estacoes': {
    es: {
      title: 'El Expreso Mágico de las Cuatro Estaciones',
      subtitle: 'Un viaje sobre vías de arcoíris donde el clima cambia en un abrir y cerrar de ojos',
      tagline: '¡Toca el silbato del tren, haz caer hojas de otoño y derrite muñecos de nieve felices!',
      characters: [
        { name: 'Nino', role: 'Ardilla maquinista con gorra de cuadros' },
        { name: 'Pompom', role: 'Conejita inspectora saltarina' }
      ],
      scenes: {
        'cena-1-estacao-central': {
          title: 'El Andén de las Hojas Doradas',
          text: '¡Chu-chúú! La locomotora a vapor soltaba nubecitas con aroma a canela y manzana asada. La ardilla Nino revisaba la caldera mágica, mientras los árboles de la estación dejaban caer hojas color miel.',
          dialogue: '¡Todos a bordo! ¡Próxima parada: la colina de los cerezos en flor y la nieve de menta!',
          speaker: 'Nino',
          choices: {
            'escolha-primavera': {
              text: 'Girar hacia el Valle de los Cerezos en Flor',
              description: 'Ver florecer tulipanes gigantes y recibir lluvia de pétalos rosados.'
            },
            'escolha-inverno': {
              text: 'Acelerar hacia la Cumbre de la Nieve Danzante',
              description: 'Esquiar en trineos con pingüinos patinadores y tomar chocolate caliente.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Magical Four Seasons Express',
      subtitle: 'A rainbow track journey where seasons change in the blink of an eye',
      tagline: 'Blow the train whistle, shower autumn leaves, and make happy snowmen dance!',
      characters: [
        { name: 'Nino', role: 'Squirrel train conductor in a checkered cap' },
        { name: 'Pompom', role: 'Bouncy bunny ticket inspector' }
      ],
      scenes: {
        'cena-1-estacao-central': {
          title: 'The Golden Leaf Platform',
          text: 'Choo-choo! The steam locomotive released fragrant puffs smelling of cinnamon and baked apples. Conductor squirrel Nino hurried to check the enchanted boiler, while platform trees dropped honey-golden leaves.',
          dialogue: 'All aboard! Next stop: the hill of cherry blossoms and sweet minty snow!',
          speaker: 'Nino',
          choices: {
            'escolha-primavera': {
              text: 'Steer toward Cherry Blossom Valley',
              description: 'Watch giant tulips bloom and catch warm pink petal showers.'
            },
            'escolha-inverno': {
              text: 'Accelerate toward Dancing Snow Peak',
              description: 'Sled downhill with skating penguins and sip hot chocolate by the fire.'
            }
          }
        }
      }
    },
    it: {
      title: 'Il Treno Magico delle Quattro Stagioni',
      subtitle: 'Un viaggio su binari arcobaleno dove il tempo cambia in un batter d\'occhio',
      tagline: 'Fischia con il treno, fai cadere foglie autunnali e danza con allegri pupazzi di neve!',
      characters: [
        { name: 'Nino', role: 'Scoiattolo macchinista con berretto a quadri' },
        { name: 'Pompom', role: 'Coniglietta controllore saltellante' }
      ],
      scenes: {
        'cena-1-estacao-central': {
          title: 'Il Binario delle Foglie Dorate',
          text: 'Ciu-f-f! La locomotiva a vapore sbuffava nuvolette profumate di cannella e mele cotte. Lo scoiattolo Nino controllava la caldaia magica, mentre gli alberi della stazione lasciavano cadere foglie color miele.',
          dialogue: 'Tutti a bordo! Prossima fermata: la collina dei ciliegi in fiore e della neve alla menta!',
          speaker: 'Nino',
          choices: {
            'escolha-primavera': {
              text: 'Svoltare verso la Valle dei Ciliegi in Fiore',
              description: 'Ammira tulipani giganti e lasciati avvolgere da una pioggia di petali rosa.'
            },
            'escolha-inverno': {
              text: 'Accelerare verso la Vetta della Neve Danzante',
              description: 'Scia in slitta con pinguini pattinatori e gusta una cioccolata calda profumata.'
            }
          }
        }
      }
    }
  },

  'confeitaria-das-nuvens': {
    es: {
      title: 'La Fantástica Pastelería de las Nubes',
      subtitle: 'Recetas mágicas en lo alto del cielo donde llueve confite y huele a vainilla',
      tagline: '¡Hornea pastelitos esponjosos, endulza nubes grises y vuela en globos de chocolate!',
      characters: [
        { name: 'Pingo', role: 'Conejito repostero con delantal florido' },
        { name: 'Pipoca Doce', role: 'Palomita mensajera con batidora' }
      ],
      scenes: {
        'cena-1-cozinha-celeste': {
          title: 'La Cocina en la Cima del Cúmulo',
          text: 'En lo alto de una nube blanca y esponjosa como crema batida, el conejito Pingo preparaba la mayor hornada de galletas estelares del año. Cazuelas de cobre hervían caramelo dulce que burbujeaba alegremente.',
          dialogue: '¡Un toque de azúcar impalpable y estas nubes oscuras se convertirán en merengue de limón!',
          speaker: 'Pingo',
          choices: {
            'escolha-bolo-arcoiris': {
              text: 'Hornear la Tarta Gigante de Arcoíris',
              description: 'Combinar siete capas de cremas de frutas celestes y decorar con estrellas de azúcar.'
            },
            'escolha-chuva-gotas': {
              text: 'Crear una Tormenta Dulce de Gotas de Miel',
              description: 'Regar los jardines de la tierra con gotas suaves y tibias de néctar.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Fantastic Cloud Bakery',
      subtitle: 'Magical recipes high in the sky where sprinkles rain and vanilla breezes blow',
      tagline: 'Bake fluffy cupcakes, sweeten stormy clouds, and fly in chocolate balloons!',
      characters: [
        { name: 'Pingo', role: 'Bunny pastry chef in a floral apron' },
        { name: 'Pipoca Doce', role: 'Dove messenger with a mini whisk' }
      ],
      scenes: {
        'cena-1-cozinha-celeste': {
          title: 'The Kitchen Atop Cumulus Cloud',
          text: 'High upon a fluffy cloud as soft as whipped cream, little bunny Pingo was baking the grandest batch of star cookies of the year. Copper kettles simmered with sweet bubbling caramel.',
          dialogue: 'A pinch of powdered sugar and these gloomy clouds will turn into lemon meringue!',
          speaker: 'Pingo',
          choices: {
            'escolha-bolo-arcoiris': {
              text: 'Bake the Giant Rainbow Cake',
              description: 'Layer seven celestial berry creams and top with crystal sugar stars.'
            },
            'escolha-chuva-gotas': {
              text: 'Create a Sweet Honey Shower',
              description: 'Shower gardens down on earth with warm, comforting drops of clover nectar.'
            }
          }
        }
      }
    },
    it: {
      title: 'La Fantastica Pasticceria delle Nuvole',
      subtitle: 'Ricette magiche nel cielo dove piovono zuccherini e soffia profumo di vaniglia',
      tagline: 'Inforna dolcetti soffici, addolcisci le nuvole grigie e vola su palloncini di cioccolato!',
      characters: [
        { name: 'Pingo', role: 'Coniglietto pasticciere con grembiule fiorito' },
        { name: 'Pipoca Doce', role: 'Colombina messaggera con frusta da cucina' }
      ],
      scenes: {
        'cena-1-cozinha-celeste': {
          title: 'La Cucina in Cima al Cumulo',
          text: 'In cima a una nuvoletta soffice come panna montata, il coniglietto Pingo preparava la più grande infornata di biscotti stellari dell\'anno. Pentole di rame bollivano caramello dorato che borbottava allegramente.',
          dialogue: 'Un pizzico di zucchero a velo e queste nubi cupe si trasformeranno in meringa al limone!',
          speaker: 'Pingo',
          choices: {
            'escolha-bolo-arcoiris': {
              text: 'Infornare la Torta Arcobaleno Gigante',
              description: 'Unisci sette strati di creme ai frutti celesti e decora con stelle di zucchero.'
            },
            'escolha-chuva-gotas': {
              text: 'Creare una Pioggia Dolce di Gocce di Miele',
              description: 'Bagna i giardini della terra con gocce calde e profumate di nettare.'
            }
          }
        }
      }
    }
  },

  'enigma-areias-douradas': {
    es: {
      title: 'El Enigma de las Arenas Doradas',
      subtitle: 'Una expedición arqueológica a través de cámaras secretas y mecanismos ancestrales',
      tagline: '¡Alinea escarabajos mecánicos, descifra jeroglíficos y desvela la cámara del faraón!',
      characters: [
        { name: 'Tariq', role: 'Joven arqueólogo y descifrador de escrituras' },
        { name: 'Zuri', role: 'Especialista en mecánica y astronomía antigua' }
      ],
      scenes: {
        'cena-1-entrada-piramide': {
          title: 'El Portal del Sol Poniente',
          text: 'Bajo el calor del desierto de Al-Khem, los dos exploradores encontraron la entrada olvidada de la Pirámide de las Tres Constelaciones. En la enorme puerta de piedra, un escarabajo de lapislázuli parecía trabar el mecanismo.',
          dialogue: '¡Mira los grabados en la pared! Dicen que la luz del ocaso revelará la combinación correcta.',
          speaker: 'Tariq',
          choices: {
            'escolha-camara-espelhos': {
              text: 'Activar la Cámara de los Espejos Solares',
              description: 'Dirigir rayos de luz a través de prismas dorados para iluminar el corredor principal.'
            },
            'escolha-cripta-astronomica': {
              text: 'Descender a la Cripta de las Cartas Celestes',
              description: 'Alinear esferas planetarias de bronce para abrir la cámara secreta del faraón.'
            }
          }
        }
      }
    },
    en: {
      title: 'The Enigma of the Golden Sands',
      subtitle: 'An archaeological expedition through secret chambers and ancestral clockwork',
      tagline: 'Align mechanical scarabs, decipher hieroglyphs, and reveal the pharaoh\'s vault!',
      characters: [
        { name: 'Tariq', role: 'Young archaeologist and glyph translator' },
        { name: 'Zuri', role: 'Specialist in ancient mechanics and astronomy' }
      ],
      scenes: {
        'cena-1-entrada-piramide': {
          title: 'The Sunset Portal',
          text: 'Under the warmth of the Al-Khem desert, the two explorers found the forgotten entrance to the Pyramid of Three Constellations. On the carved limestone doorway, a lapis lazuli scarab held the main clockwork gears in place.',
          dialogue: 'Look at the wall inscriptions! They say the sunset rays will unlock the true combination.',
          speaker: 'Tariq',
          choices: {
            'escolha-camara-espelhos': {
              text: 'Activate the Solar Mirror Chamber',
              description: 'Guide beams of light through polished bronze prisms to illuminate the grand hall.'
            },
            'escolha-cripta-astronomica': {
              text: 'Descend to the Celestial Crypt',
              description: 'Align brass planetary spheres to unlock the pharaoh\'s hidden sanctum.'
            }
          }
        }
      }
    },
    it: {
      title: 'L\'Enigma delle Sabbie Dorate',
      subtitle: 'Una spedizione archeologica attraverso camere segrete e meccanismi ancestrali',
      tagline: 'Allinea scarabei meccanici, decifra geroglifici e svela la camera del faraone!',
      characters: [
        { name: 'Tariq', role: 'Giovane archeologo e decifratore di scritture' },
        { name: 'Zuri', role: 'Esperta in meccanica e astronomia antica' }
      ],
      scenes: {
        'cena-1-entrada-piramide': {
          title: 'Il Portale del Sole Calante',
          text: 'Sotto il calore del deserto di Al-Khem, i due esploratori trovarono l\'ingresso dimenticato della Piramide delle Tre Costellazioni. Sull\'enorme porta di pietra calcarea, uno scarabeo di lapislazzuli sembrava bloccare l\'ingranaggio principale.',
          dialogue: 'Guarda le incisioni sulla parete! Dicono che i raggi del tramonto sveleranno la giusta combinazione.',
          speaker: 'Tariq',
          choices: {
            'escolha-camara-espelhos': {
              text: 'Attivare la Camera degli Specchi Solari',
              description: 'Guida i fasci di luce attraverso prismi di bronzo per illuminare il corridoio principale.'
            },
            'escolha-cripta-astronomica': {
              text: 'Scendere nella Cripta delle Mappe Celesti',
              description: 'Allinea sfere planetarie di metallo per aprire la stanza segreta del faraone.'
            }
          }
        }
      }
    }
  }
};
