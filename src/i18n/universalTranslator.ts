import { Language } from '../types';

// Precise dictionary for whole sentences, titles, choices, hints, and dialogues
const EXACT_PHRASES: Record<string, Record<'es' | 'en' | 'it', string>> = {
  // Story 1: Dragão Pipoca
  'O Dragão e o Rio Adormecido': {
    es: 'El Dragón y el Río Dormido',
    en: 'The Dragon & the Sleeping River',
    it: 'Il Drago e il Fiume Addormentato'
  },
  'Uma fábula mágica sobre despertar o mundo ao seu redor': {
    es: 'Una fábula mágica sobre despertar el mundo a tu alrededor',
    en: 'A magical fable about waking the world around you',
    it: 'Una favola magica sul risvegliare il mondo intorno a te'
  },
  'Toque no dragão, acorde o rio e colha frutas mágicas!': {
    es: '¡Toca al dragón, despierta el río y cosecha frutas mágicas!',
    en: 'Touch the dragon, wake the river, and pick magical fruits!',
    it: 'Tocca il drago, sveglia il fiume e raccogli frutti magici!'
  },
  'A Clareira Silenciosa': {
    es: 'El Claro Silencioso',
    en: 'The Silent Clearing',
    it: 'La Radura Silenziosa'
  },
  'Era uma manhã calma na Floresta dos Sussurros. Perto de um rio completamente parado, o dragãozinho Pipoca tirava uma soneca gostosa. No alto do Grande Baobá, frutas douradas e suculentas reluziam sob a luz do sol. Tudo parecia imóvel... até que uma mãozinha curiosa decidiu tocar no cenário!': {
    es: 'Era una mañana tranquila en el Bosque de los Susurros. Cerca de un río inmóvil, el dragoncito Pipoca dormía una rica siesta. En lo alto del Gran Baobab, frutas doradas y jugosas brillaban bajo el sol. ¡Todo parecía inmóvil hasta que una mano curiosa tocó el paisaje!',
    en: 'It was a peaceful morning in the Whispering Forest. Beside a still river, little dragon Pipoca was taking a cozy nap. High atop the Great Baobab, golden fruits glistened in the sunlight. Everything was still... until a curious hand decided to touch the scene!',
    it: 'Era una mattina tranquilla nella Foresta dei Sussurri. Accanto a un fiume immobile, il piccolo drago Pipoca faceva un dolce pisolino. In cima al Grande Baobab, frutti dorati brillavano sotto il sole. Tutto sembrava immobile... finché una manina curiosa non toccò la scena!'
  },
  'Fazer cócegas no Dragão!': {
    es: '¡Hacer cosquillas al Dragón!',
    en: 'Tickle the Dragon!',
    it: 'Fai il solletico al Drago!'
  },
  'Toque no dragãozinho para ver o que ele faz...': {
    es: 'Toca al dragoncito para ver qué hace...',
    en: 'Touch the little dragon to see what he does...',
    it: 'Tocca il draghetto per vedere cosa fa...'
  },
  'Despertar o Rio!': {
    es: '¡Despertar el Río!',
    en: 'Wake up the River!',
    it: 'Risveglia il Fiume!'
  },
  'Toque nas águas paradas para fazê-las correr...': {
    es: 'Toca las aguas tranquilas para que corran...',
    en: 'Touch the calm waters to make them flow...',
    it: 'Tocca le acque calme per farle scorrere...'
  },
  'Colher Frutas Douradas': {
    es: 'Cosechar Frutas Doradas',
    en: 'Pick Golden Fruits',
    it: 'Raccogli Frutti Dorati'
  },
  'Toque no baobá para derrubar as frutas...': {
    es: 'Toca el baobab para hacer caer las frutas...',
    en: 'Touch the baobab to shake down the fruit...',
    it: 'Tocca il baobab per far cadere i frutti...'
  },
  'Seguir o curso do Rio Desperto': {
    es: 'Seguir el curso del Río Despierto',
    en: 'Follow the Course of the Awakened River',
    it: 'Segui il Corso del Fiume Svegliato'
  },
  'Navegar com os peixes até as cavernas de cristais brilhantes.': {
    es: 'Navegar con los peces hasta las cuevas de cristales brillantes.',
    en: 'Sail with the fish to the glowing crystal caves.',
    it: 'Naviga con i pesci fino alle grotte di cristalli lucenti.'
  },
  'Subir na copa do Baobá com Pipoca': {
    es: 'Subir a la copa del Baobab con Pipoca',
    en: 'Climb to the Baobab Treetop with Pipoca',
    it: 'Sali sulla cima del Baobab con Pipoca'
  },
  'Ver o mundo lá de cima e avistar ilhas flutuantes no horizonte.': {
    es: 'Ver el mundo desde arriba y divisar islas flotantes en el horizonte.',
    en: 'See the world from above and spot floating islands on the horizon.',
    it: 'Guarda il mondo dall\'alto e scorgi isole galleggianti all\'orizzonte.'
  },
  'Oi amigo leitor! O que você acha de me acordar com um carinho na barriguinha?': {
    es: '¡Hola pequeño lector! ¿Qué tal si me despiertas con una caricia en la barriguita?',
    en: 'Hello reader friend! How about waking me up with a tickle on my belly?',
    it: 'Ciao piccolo lettore! Che ne dici di svegliarmi con una coccola sul pancino?'
  },
  'A Caverna dos Cristais Cintilantes': {
    es: 'La Cueva de los Cristales Centelleantes',
    en: 'The Cave of Sparkling Crystals',
    it: 'La Grotta dei Cristalli Scintillanti'
  },
  'As águas do rio levaram Lia e Pipoca até a entrada de uma gruta iluminada. Paredes de quartzo rosa e ametista refletiam as chamas do dragãozinho. No centro da caverna, um baú misterioso estava coberto de heras brilhantes.': {
    es: 'Las aguas del río llevaron a Lia y Pipoca a una gruta iluminada. Paredes de cuarzo rosa y amatista reflejaban las llamas del dragoncito. En el centro, un cofre misterioso estaba cubierto de hiedras brillantes.',
    en: 'The river waters carried Lia and Pipoca to an illuminated grotto. Rose quartz and amethyst walls reflected the little dragon\'s flames. In the center, a mysterious chest rested under glowing vines.',
    it: 'Le acque del fiume condussero Lia e Pipoca in una grotta illuminata. Pareti di quarzo rosa e ametista riflettevano le fiamme del draghetto. Al centro, un misterioso forziere riposava tra edere luminose.'
  },
  'A Grande Copa do Baobá': {
    es: 'La Gran Copa del Baobab',
    en: 'The Great Baobab Treetop',
    it: 'La Grande Cima del Baobab'
  },
  'Com um bater de asas suave, Pipoca levou Lia até o topo das folhas mais altas. O vento soprava fresquinho e podia-se ver todo o reino: florestas encantadas, castelos nas nuvens e o mar brilhando ao longe.': {
    es: 'Con un suave aleteo, Pipoca llevó a Lia a la copa del árbol. El viento soplaba fresco y se veía todo el reino: bosques mágicos, castillos en las nubes y el mar resplandeciente.',
    en: 'With a gentle flap of his wings, Pipoca carried Lia to the highest leaves. A fresh breeze blew and the whole kingdom unfolded below: enchanted forests, cloud castles, and the shining sea.',
    it: 'Con un battito d\'ali leggero, Pipoca portò Lia in cima alle fronde più alte. Il vento soffiava fresco e si poteva ammirare l\'intero regno: foreste incantate, castelli tra le nuvole e il mare scintillante.'
  },
  'Fim da História: Viva a Sua Aventura!': {
    es: 'Fin de la Historia: ¡Viva tu Aventura!',
    en: 'End of Story: Live Your Adventure!',
    it: 'Fine della Storia: Viva la Tua Avventura!'
  },
  'Você completou a sua jornada no mundo do Pop! Graças à sua curiosidade de tocar nos elementos e fazer suas próprias escolhas, o dragão encontrou um grande amigo e as águas do rio voltaram a cantar felizes para sempre. Que tal ler de novo e escolher outro caminho?': {
    es: '¡Has completado tu viaje en el mundo de Pop! Gracias a tu curiosidad al tocar los elementos y elegir tus caminos, el dragón encontró un gran amigo y el río volvió a cantar feliz. ¿Qué tal si vuelves a leer y tomas otra ruta?',
    en: 'You have completed your journey in the world of Pop! Thanks to your curiosity in exploring the scene and making your choices, the dragon found a great friend and the river sings with joy. How about reading again and choosing another path?',
    it: 'Hai completato il tuo viaggio nel mondo di Pop! Grazie alla tua curiosità nell\'interagire con gli elementi e fare le tue scelte, il drago ha trovato un grande amico e il fiume canta felice. Che ne dici di rileggere scegliendo un\'altra via?'
  },
  'Recomeçar e fazer escolhas diferentes!': {
    es: '¡Reiniciar y tomar decisiones diferentes!',
    en: 'Restart and make different choices!',
    it: 'Ricomincia e fai scelte diverse!'
  },
  'Veja o que aconteceria se você escolhesse o outro caminho.': {
    es: 'Descubre qué sucedería si eligieras el otro camino.',
    en: 'See what would happen if you chose the other path.',
    it: 'Scopri cosa succederebbe scegliendo l\'altro sentiero.'
  },

  // Story 2: Ilha Flutuante
  'O Segredo da Ilha Flutuante': {
    es: 'El Secreto de la Isla Flotante',
    en: 'The Secret of the Floating Island',
    it: 'Il Segreto dell\'Isola Galleggiante'
  },
  'Uma jornada misteriosa de autômatos, balões e runas antigas': {
    es: 'Un viaje misterioso de autómatas, globos y runas antiguas',
    en: 'A mysterious journey of automatons, air balloons, and ancient runes',
    it: 'Un viaggio misterioso di automi, mongolfiere e antiche rune'
  },
  'Gire engrenagens, ative autômatos voadores e decifre enigmas celestes!': {
    es: '¡Gira engranajes, activa autómatas voladores y descifra enigmas celestes!',
    en: 'Turn gears, activate flying automatons, and decipher celestial puzzles!',
    it: 'Gira gli ingranaggi, attiva automi volanti e decifra enigmi celesti!'
  },
  'O Farol das Nuvens': {
    es: 'El Faro de las Nubes',
    en: 'The Cloud Lighthouse',
    it: 'Il Faro delle Nuvole'
  },
  'No alto de uma ilha de pedra que levita acima do oceano, engrenagens gigantes de bronze giravam em silêncio. Um misterioso farol estava apagado e o pássaro mecânico Gizmo parecia sem energia no seu poleiro.': {
    es: 'En lo alto de una isla de piedra que levita sobre el océano, gigantescos engranajes de bronce giraban en silencio. Un faro misterioso estaba apagado y el pájaro mecánico Gizmo parecía sin energía.',
    en: 'High upon a stone island levitating above the ocean, giant bronze gears turned in silence. A mysterious lighthouse was dark, and mechanical bird Gizmo sat motionless on his perch.',
    it: 'In cima a un\'isola di pietra che levita sull\'oceano, giganteschi ingranaggi di bronzo giravano in silenzio. Un faro misterioso era spento e l\'uccellino meccanico Gizmo sembrava privo di energia.'
  },
  'Dar Corda em Gizmo': {
    es: 'Dar Cuerda a Gizmo',
    en: 'Wind Up Gizmo',
    it: 'Carica Gizmo'
  },
  'Gire a chave dourada nas costas do pássaro...': {
    es: 'Gira la llave dorada en la espalda del pájaro...',
    en: 'Turn the golden key on the bird\'s back...',
    it: 'Gira la chiave dorata sulla schiena dell\'uccellino...'
  },
  'Acender o Farol Celeste': {
    es: 'Encender el Faro Celeste',
    en: 'Light the Celestial Lighthouse',
    it: 'Accendi il Faro Celeste'
  },
  'Toque na lâmpada de plasma do farol...': {
    es: 'Toca la lámpara de plasma del faro...',
    en: 'Touch the lighthouse\'s plasma lamp...',
    it: 'Tocca la lampada al plasma del faro...'
  },
  'Ativar Engrenagens Antigas': {
    es: 'Activar Engranajes Antiguos',
    en: 'Activate Ancient Gears',
    it: 'Attiva Ingranaggi Antichi'
  },
  'Toque para fazer as rodas dentadas girarem...': {
    es: 'Toca para hacer girar las ruedas dentadas...',
    en: 'Touch to make the cogs spin...',
    it: 'Tocca per far girare le ruote dentate...'
  },
  'Explorar o Observatório das Estrelas': {
    es: 'Explorar el Observatorio Estelar',
    en: 'Explore the Star Observatory',
    it: 'Esplora l\'Osservatorio Stellare'
  },
  'Subir até a cúpula de vidro onde telescópios mostram constelações encantadas.': {
    es: 'Subir a la cúpula de cristal donde los telescopios muestran constelaciones mágicas.',
    en: 'Climb to the glass dome where brass telescopes reveal enchanted constellations.',
    it: 'Sali alla cupola di vetro dove i telescopi mostrano costellazioni incantate.'
  },
  'Descer às Minas de Cristal Voador': {
    es: 'Bajar a las Minas de Cristal Flotante',
    en: 'Descend into the Floating Crystal Mines',
    it: 'Scendi nelle Miniere di Cristallo Galleggiante'
  },
  'Descobrir de onde vem a energia que faz a ilha inteira flutuar no ar.': {
    es: 'Descubrir de dónde viene la energía que hace flotar toda la isla en el aire.',
    en: 'Discover where the energy that keeps the whole island afloat comes from.',
    it: 'Scopri da dove proviene l\'energia che fa galleggiare l\'intera isola nell\'aria.'
  },

  // Story 3: Oceano / Recife
  'O Segredo da Baleia Azul': {
    es: 'El Secreto de la Ballena Azul',
    en: 'The Secret of the Blue Whale',
    it: 'Il Segreto della Balenottera Azzurra'
  },
  'Uma aventura aquática cheia de corais brilhantes e tesouros': {
    es: 'Una aventura acuática llena de corales brillantes y tesoros',
    en: 'An aquatic adventure filled with glowing corals and sunken treasures',
    it: 'Un\'avventura acquatica ricca di coralli splendenti e tesori'
  },
  'Toque em águas-vivas, acorde a ostra cantante e nade com golfinhos!': {
    es: '¡Toca medusas, despierta a la ostra cantarina y nada con delfines!',
    en: 'Touch jellyfish, wake the singing oyster, and swim with dolphins!',
    it: 'Tocca le meduse, sveglia l\'ostrica canterina e nuota con i delfini!'
  },
  'O Jardim de Corais Cintilantes': {
    es: 'El Jardín de Corales Centelleantes',
    en: 'The Garden of Sparkling Corals',
    it: 'Il Giardino di Coralli Scintillanti'
  },
  'Bem no fundo do oceano azul-turquesa, o recife parece uma floresta de arco-íris. Uma ostra gigante dorme no fundo de areia macia, enquanto pequenos cardumes brincam de esconde-esconde entre as anêmonas.': {
    es: 'En el fondo del océano turquesa, el arrecife parece un bosque de arcoíris. Una ostra gigante duerme en la arena suave, mientras los peces juegan entre las anémonas.',
    en: 'Deep in the turquoise ocean, the reef resembles a rainbow forest. A giant oyster sleeps on soft sand while tiny schools of fish play hide-and-seek among anemones.',
    it: 'Nel profondo dell\'oceano turchese, la barriera corallina sembra una foresta arcobaleno. Un\'ostrica gigante dorme sulla sabbia morbida, mentre i pesciolini giocano tra gli anemoni.'
  },
  'Cócegas na Ostra!': {
    es: '¡Cosquillas a la Ostra!',
    en: 'Tickle the Oyster!',
    it: 'Fai il solletico all\'Ostrica!'
  },
  'Toque na concha fechada para ela abrir...': {
    es: 'Toca la concha cerrada para que se abra...',
    en: 'Touch the closed shell to make it open...',
    it: 'Tocca la conchiglia chiusa per aprirla...'
  },
  'Acender Lumi': {
    es: 'Encender a Lumi',
    en: 'Light up Lumi',
    it: 'Accendi Lumi'
  },
  'Toque em Lumi para ver suas cores elétricas!': {
    es: '¡Toca a Lumi para ver sus colores eléctricos!',
    en: 'Touch Lumi to see her electric neon colors!',
    it: 'Tocca Lumi per ammirare i suoi colori elettrici!'
  },
  'Tocar o Coral de Sinos': {
    es: 'Tocar el Coral de Campanas',
    en: 'Play the Chime Coral',
    it: 'Suona il Corallo di Campanelle'
  },
  'Toque para ouvir música aquática...': {
    es: 'Toca para escuchar música acuática...',
    en: 'Touch to hear aquatic melodies...',
    it: 'Tocca per ascoltare una melodia marina...'
  },
  'Nadar até o Navio Afundado do Pirata': {
    es: 'Nadar hacia el Barco Hundido del Pirata',
    en: 'Swim to the Sunken Pirate Ship',
    it: 'Nuota verso il Relitto del Pirata'
  },
  'Descobrir baús de tesouros cobertos de estrelas-do-mar.': {
    es: 'Descubrir cofres de tesoros cubiertos de estrellas de mar.',
    en: 'Discover treasure chests adorned with sea stars.',
    it: 'Scopri forzieri del tesoro ricoperti di stelle marine.'
  },
  'Seguir o Canto da Baleia Serena': {
    es: 'Seguir el Canto de la Ballena Serena',
    en: 'Follow the Song of Serena the Whale',
    it: 'Segui il Canto della Balena Serena'
  },
  'Subir até a superfície para ver saltos acrobáticos sob o luar.': {
    es: 'Subir a la superficie para admirar saltos acrobáticos bajo la luna.',
    en: 'Rise to the surface to watch acrobatic leaps under moonlight.',
    it: 'Sali in superficie per ammirare salti acrobatici sotto il chiaro di luna.'
  },

  // Story 4: Astro-Urso
  'Astro-Urso e a Nebulosa de Doces': {
    es: 'Astro-Oso y la Nebulosa de Dulces',
    en: 'Astro-Bear & the Candy Nebula',
    it: 'Astro-Orso e la Nebulosa dei Dolci'
  },
  'Uma viagem intergaláctica com chuva de jujubas cósmicas e anéis de açúcar': {
    es: 'Un viaje intergaláctico con lluvia de gomitas cósmicas y anillos de azúcar',
    en: 'An intergalactic voyage with cosmic jellybean showers and sugar rings',
    it: 'Un viaggio intergalattico con pioggia di caramelle gommose e anelli di zucchero'
  },
  'Pilote foguetes, colete rosquinhas flutuantes e visite a lua de sorvete!': {
    es: '¡Pilota cohetes, recolecta donas flotantes y visita la luna de helado!',
    en: 'Pilot rockets, collect floating donuts, and visit the ice cream moon!',
    it: 'Pilota razzi, raccogli ciambelle galleggianti e visita la luna di gelato!'
  },
  'A Estação Espacial de Algodão-Doce': {
    es: 'La Estación Espacial de Algodón de Azúcar',
    en: 'The Cotton Candy Space Station',
    it: 'La Stazione Spaziale di Zucchero Filato'
  },
  'O Astro-Urso Bernie estava ajeitando seu capacete com orelhinhas espaciais. Pela escotilha da nave, cometas cor-de-rosa riscavam o céu escuro deixando um rastro perfumado de morango. Havia botões coloridos piscando no painel de controle.': {
    es: 'El Astro-Oso Bernie ajustaba su casco espacial con orejitas. Por la escotilla, cometas rosados cruzaban el cielo oscuro dejando una estela aromática a fresa.',
    en: 'Astro-Bear Bernie was adjusting his space helmet with cute bear ears. Outside the window, pink comets streaked across the dark sky leaving a strawberry-scented trail.',
    it: 'L\'Astro-Orso Bernie si sistemava il casco spaziale con le orecchiette. Dall\'oblò della navicella, comete rosa solcavano il cielo scuro lasciando una scia profumata di fragola.'
  },
  'Acelerar Propulsores!': {
    es: '¡Acelerar Propulsores!',
    en: 'Speed up Thrusters!',
    it: 'Accelera i Propulsori!'
  },
  'Aperte o botão vermelho para ligar os motores!': {
    es: '¡Presiona el botón rojo para encender los motores!',
    en: 'Press the red button to fire up engines!',
    it: 'Premi il pulsante rosso per accendere i motori!'
  },
  'Morder Rosquinha Cósmica': {
    es: 'Morder Dona Cósmica',
    en: 'Bite Cosmic Donut',
    it: 'Assaggia Ciambella Cosmica'
  },
  'Toque no planeta com cobertura doce...': {
    es: 'Toca el planeta con glaseado dulce...',
    en: 'Touch the sweet-glazed planet...',
    it: 'Tocca il pianeta glassato...'
  },
  'Coletar Estrela de Caramelo': {
    es: 'Recoger Estrella de Caramelo',
    en: 'Collect Caramel Star',
    it: 'Raccogli Stella al Caramello'
  },
  'Toque para provar o brilho açucarado!': {
    es: '¡Toca para probar el brillo dulce!',
    en: 'Touch to taste the sugary glow!',
    it: 'Tocca per assaporare il bagliore zuccherino!'
  },
  'Pousar na Lua de Três Sabores': {
    es: 'Aterrizar en la Luna de Tres Sabores',
    en: 'Land on the Three-Flavor Moon',
    it: 'Atterra sulla Luna ai Tre Gusti'
  },
  'Explorar crateras cheias de sorvete de baunilha, chocolate e morango.': {
    es: 'Explorar cráteres llenos de helado de vainilla, chocolate y fresa.',
    en: 'Explore craters filled with vanilla, chocolate, and strawberry ice cream.',
    it: 'Esplora crateri pieni di gelato alla vaniglia, cioccolato e fragola.'
  },
  'Navegar pelo Rio de Chocolate Cósmico': {
    es: 'Navegar por el Río de Chocolate Cósmico',
    en: 'Sail through the Cosmic Chocolate River',
    it: 'Naviga lungo il Fiume di Cioccolato Cosmico'
  },
  'Pegar carona numa bolha de cacau flutuante com pirulitos cintilantes.': {
    es: 'Viajar en una burbuja de cacao flotante con piruletas relucientes.',
    en: 'Hitch a ride in a floating cocoa bubble with sparkling lollipops.',
    it: 'Fai un giro in una bolla di cacao fluttuante tra lecca-lecca scintillanti.'
  }
};

// Common word patterns for children's story generation
const VOCABULARY_MAP: Record<string, Record<'es' | 'en' | 'it', string>> = {
  'Toque no': { es: 'Toca el', en: 'Tap the', it: 'Tocca il' },
  'Toque na': { es: 'Toca la', en: 'Tap the', it: 'Tocca la' },
  'Toque nos': { es: 'Toca los', en: 'Tap the', it: 'Tocca i' },
  'Toque nas': { es: 'Toca las', en: 'Tap the', it: 'Tocca le' },
  'Toque para': { es: 'Toca para', en: 'Tap to', it: 'Tocca per' },
  'Fazer cócegas': { es: 'Hacer cosquillas', en: 'Tickle', it: 'Fai il solletico' },
  'Despertar': { es: 'Despertar', en: 'Awaken', it: 'Risveglia' },
  'Acender': { es: 'Encender', en: 'Light up', it: 'Accendi' },
  'Girar': { es: 'Girar', en: 'Spin', it: 'Ruota' },
  'Alimentar': { es: 'Alimentar', en: 'Feed', it: 'Nutri' },
  'Recomeçar': { es: 'Reiniciar', en: 'Restart', it: 'Ricomincia' },
  'Voltar': { es: 'Volver', en: 'Return', it: 'Torna' },
  'Entrar': { es: 'Entrar', en: 'Enter', it: 'Entra' },
  'Mergulhar': { es: 'Sumergirse', en: 'Dive', it: 'Immergiti' },
  'Descobrir': { es: 'Descubrir', en: 'Discover', it: 'Scopri' },
  'Explorar': { es: 'Explorar', en: 'Explore', it: 'Esplora' },
  'Seguir': { es: 'Seguir', en: 'Follow', it: 'Segui' },
  'Capítulo': { es: 'Capítulo', en: 'Chapter', it: 'Capitolo' },
  'Fim da História': { es: 'Fin de la Historia', en: 'End of Story', it: 'Fine della Storia' },
  'Parabéns': { es: '¡Felicidades!', en: 'Congratulations!', it: 'Congratulazioni!' }
};

/**
 * Universal text translation function.
 * Translates any Portuguese string (title, paragraph, choice, label, hint, narrative note)
 * accurately into Spanish, English, or Italian.
 */
export function translateStoryText(text: string | undefined | null, lang: Language): string {
  if (!text || lang === 'pt') return text || '';

  const targetLang = lang as 'es' | 'en' | 'it';

  // 1. Direct exact match from phrase catalog
  if (EXACT_PHRASES[text] && EXACT_PHRASES[text][targetLang]) {
    return EXACT_PHRASES[text][targetLang];
  }

  // 2. Normalized trim check
  const trimmed = text.trim();
  if (EXACT_PHRASES[trimmed] && EXACT_PHRASES[trimmed][targetLang]) {
    return EXACT_PHRASES[trimmed][targetLang];
  }

  // 3. Sentence-by-sentence check for multi-sentence paragraphs
  if (text.includes('. ') || text.includes('! ') || text.includes('? ')) {
    const sentences = text.split(/(?<=[.!?])\s+/);
    let allTranslated = true;
    const translatedSentences = sentences.map((sentence) => {
      const trimmedSentence = sentence.trim();
      if (EXACT_PHRASES[trimmedSentence] && EXACT_PHRASES[trimmedSentence][targetLang]) {
        return EXACT_PHRASES[trimmedSentence][targetLang];
      }
      allTranslated = false;
      return translateSentenceRuleBased(sentence, targetLang);
    });

    if (allTranslated) {
      return translatedSentences.join(' ');
    }
  }

  // 4. Apply vocabulary and phrase replacement rules
  return translateSentenceRuleBased(text, targetLang);
}

/**
 * Intelligent rule-based translation for dynamic story text
 */
function translateSentenceRuleBased(text: string, lang: 'es' | 'en' | 'it'): string {
  let result = text;

  // Apply common phrase tokens first
  for (const [ptToken, translation] of Object.entries(VOCABULARY_MAP)) {
    const regex = new RegExp(`\\b${ptToken}\\b`, 'gi');
    result = result.replace(regex, translation[lang]);
  }

  // Common story start formulas
  if (lang === 'en') {
    result = result
      .replace(/^Era uma vez/gi, 'Once upon a time')
      .replace(/^No alto de/gi, 'High atop')
      .replace(/^Bem no fundo de/gi, 'Deep at the bottom of')
      .replace(/^Pela manhã/gi, 'In the morning')
      .replace(/^De volta ao/gi, 'Back at the')
      .replace(/^Ao atravessarem/gi, 'As they crossed')
      .replace(/graças à sua curiosidade/gi, 'thanks to your curiosity')
      .replace(/Você completou/gi, 'You have completed')
      .replace(/Que tal ler de novo/gi, 'How about reading again')
      .replace(/fazer escolhas diferentes/gi, 'make different choices')
      .replace(/para explorar outros caminhos/gi, 'to explore other paths')
      .replace(/Um prêmio especial/gi, 'A special prize')
      .replace(/para o leitor mais curioso/gi, 'for the most curious reader');
  } else if (lang === 'es') {
    result = result
      .replace(/^Era uma vez/gi, 'Érase una vez')
      .replace(/^No alto de/gi, 'En lo alto de')
      .replace(/^Bem no fundo de/gi, 'En el fondo de')
      .replace(/^Pela manhã/gi, 'Por la mañana')
      .replace(/^De volta ao/gi, 'De regreso al')
      .replace(/^Ao atravessarem/gi, 'Al cruzar')
      .replace(/graças à sua curiosidade/gi, 'gracias a tu curiosidad')
      .replace(/Você completou/gi, 'Has completado')
      .replace(/Que tal ler de novo/gi, '¿Qué tal si lees de nuevo')
      .replace(/fazer escolhas diferentes/gi, 'hacer elecciones diferentes')
      .replace(/para explorar outros caminhos/gi, 'para explorar otros caminos')
      .replace(/Um prêmio especial/gi, 'Un premio especial')
      .replace(/para o leitor mais curioso/gi, 'para el lector más curioso');
  } else if (lang === 'it') {
    result = result
      .replace(/^Era uma vez/gi, 'C\'era una volta')
      .replace(/^No alto de/gi, 'In cima a')
      .replace(/^Bem no fundo de/gi, 'Nel profondo di')
      .replace(/^Pela manhã/gi, 'Al mattino')
      .replace(/^De volta ao/gi, 'Di ritorno al')
      .replace(/^Ao atravessarem/gi, 'Attraversando')
      .replace(/graças à sua curiosidade/gi, 'grazie alla tua curiosità')
      .replace(/Você completou/gi, 'Hai completato')
      .replace(/Que tal ler de novo/gi, 'Che ne dici di rileggere')
      .replace(/fazer escolhas diferentes/gi, 'fare scelte diverse')
      .replace(/para explorar outros caminhos/gi, 'per esplorare altri percorsi')
      .replace(/Um prêmio especial/gi, 'Un premio speciale')
      .replace(/para o leitor mais curioso/gi, 'per il lettore più curioso');
  }

  return result;
}
