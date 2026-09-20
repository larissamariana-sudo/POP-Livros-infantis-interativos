import { Language } from '../types';

export interface UiTranslations {
  appSubtitle: string;
  tagline: string;
  interactiveBooks: string;
  chapterOf: (current: number, total: number) => string;
  chapter: string;
  restart: string;
  map: string;
  library: string;
  soundOn: string;
  soundOff: string;
  welcomeBannerBadge: string;
  welcomeTitle: string;
  welcomeDescription: string;
  bannerTag1: string;
  bannerTag2: string;
  bannerTag3: string;
  chooseAdventure: string;
  chooseSubtitle: string;
  allBooks: (count: number) => string;
  ageYears: (age: string) => string;
  allThemes: string;
  themeFamily: string;
  themePets: string;
  themeSports: string;
  themeMagic: string;
  themeSchool: string;
  charactersInStory: string;
  openBook: string;
  fontNormal: string;
  fontLarge: string;
  fontHuge: string;
  readAloud: string;
  pauseReading: string;
  magicTouches: (current: number, max: number) => string;
  whatNext: string;
  storyCompleted: string;
  congratulations: string;
  mapTitle: string;
  mapSubtitle: string;
  youAreHere: string;
  explored: string;
  closeMap: string;
  restartFromStart: string;
  selectLanguage: string;
  hintsOn: string;
  hintsOff: string;
  secretsFound: (current: number, total: number) => string;
  themeNature: string;
}

export const UI_TRANSLATIONS: Record<Language, UiTranslations> = {
  pt: {
    appSubtitle: 'Toque, sinta a mágica e escolha a história',
    tagline: 'Onde a história ganha vida com o seu toque!',
    interactiveBooks: 'Livros Interativos',
    chapterOf: (current, total) => `Capítulo ${current} de ${total}`,
    chapter: 'Capítulo',
    restart: 'Recomeçar',
    map: 'Mapa',
    library: 'Estante',
    soundOn: 'Ativar sons',
    soundOff: 'Desativar sons',
    welcomeBannerBadge: 'Bem-vindo ao Pop!',
    welcomeTitle: 'Onde a história ganha vida com o seu toque!',
    welcomeDescription: 'Toque nos personagens e cenários para ver reações mágicas, descubra segredos escondidos e decida o rumo de cada aventura!',
    bannerTag1: '🌊 Pular ondas na praia',
    bannerTag2: '🐾 Adoção de gatinhos e cãezinhos',
    bannerTag3: '✨ Mágica, esportes e família',
    chooseAdventure: 'Escolha sua Aventura',
    chooseSubtitle: 'Livros ilustrados e animados com escolhas interativas para todas as idades',
    allBooks: (count) => `Todos os Livros (${count})`,
    ageYears: (age) => `${age} anos`,
    allThemes: 'Todos os Temas',
    themeFamily: 'Família & Avós',
    themePets: 'Pets & Animais',
    themeSports: 'Esportes & Saúde',
    themeMagic: 'Mágica & Fantasia',
    themeSchool: 'Escola & Amigos',
    themeNature: 'Natureza & Clima',
    charactersInStory: 'Personagens nesta história:',
    openBook: 'Abrir Livro e Brincar!',
    fontNormal: 'Letra Normal',
    fontLarge: 'Letra Grande',
    fontHuge: 'Letra Gigante',
    readAloud: 'Ler para Mim 🔊',
    pauseReading: 'Pausar Leitura',
    magicTouches: (current, max) => `Toques Mágicos Descobertos: ${current}/${max}`,
    whatNext: 'O que o personagem fará em seguida?',
    storyCompleted: 'Aventura Concluída com Sucesso!',
    congratulations: 'Parabéns! Você descobriu os segredos deste livro com suas próprias escolhas!',
    mapTitle: 'Mapa da Aventura',
    mapSubtitle: 'Acompanhe suas escolhas e caminhos percorridos nesta história',
    youAreHere: 'Você está aqui',
    explored: 'Explorado',
    closeMap: 'Continuar Lendo',
    restartFromStart: 'Recomeçar do Início',
    selectLanguage: 'Idioma',
    hintsOn: 'Pistas: Ligadas',
    hintsOff: 'Pistas: Desligadas',
    secretsFound: (current, total) => `Segredos Tocados: ${current} / ${total}`,
  },
  es: {
    appSubtitle: 'Toca, siente la magia y elige la historia',
    tagline: '¡Donde la historia cobra vida con tu toque!',
    interactiveBooks: 'Libros Interactivos',
    chapterOf: (current, total) => `Capítulo ${current} de ${total}`,
    chapter: 'Capítulo',
    restart: 'Reiniciar',
    map: 'Mapa',
    library: 'Estantería',
    soundOn: 'Activar sonido',
    soundOff: 'Silenciar sonido',
    welcomeBannerBadge: '¡Bienvenidos a Pop!',
    welcomeTitle: '¡Donde la historia cobra vida con tu toque!',
    welcomeDescription: '¡Toca a los personajes y escenarios para ver reacciones mágicas, descubre secretos y decide el rumbo de cada aventura!',
    bannerTag1: '🌊 Saltar olas en la playa',
    bannerTag2: '🐾 Adopción de gatitos y perritos',
    bannerTag3: '✨ Magia, deportes y familia',
    chooseAdventure: 'Elige tu Aventura',
    chooseSubtitle: 'Libros ilustrados y animados con elecciones interactivas para todas las edades',
    allBooks: (count) => `Todos los Libros (${count})`,
    ageYears: (age) => `${age} años`,
    allThemes: 'Todos los Temas',
    themeFamily: 'Familia y Abuelos',
    themePets: 'Mascotas y Animales',
    themeSports: 'Deportes y Salud',
    themeMagic: 'Magia y Fantasía',
    themeSchool: 'Escuela y Amigos',
    themeNature: 'Naturaleza y Clima',
    charactersInStory: 'Personajes en esta historia:',
    openBook: '¡Abrir Libro y Jugar!',
    fontNormal: 'Letra Normal',
    fontLarge: 'Letra Grande',
    fontHuge: 'Letra Gigante',
    readAloud: 'Léeme en Voz Alta 🔊',
    pauseReading: 'Pausar Lectura',
    magicTouches: (current, max) => `Toques Mágicos Descubiertos: ${current}/${max}`,
    whatNext: '¿Qué hará el personaje a continuación?',
    storyCompleted: '¡Aventura Completada con Éxito!',
    congratulations: '¡Felicidades! ¡Descubriste los secretos de este libro con tus propias decisiones!',
    mapTitle: 'Mapa de la Aventura',
    mapSubtitle: 'Sigue tus elecciones y los caminos explorados en esta historia',
    youAreHere: 'Estás aquí',
    explored: 'Explorado',
    closeMap: 'Continuar Leyendo',
    restartFromStart: 'Reiniciar desde el Principio',
    selectLanguage: 'Idioma',
    hintsOn: 'Pistas: Activas',
    hintsOff: 'Pistas: Desactivadas',
    secretsFound: (current, total) => `Secretos Descubiertos: ${current} / ${total}`,
  },
  en: {
    appSubtitle: 'Tap, feel the magic, and choose the story path',
    tagline: 'Where stories come alive with your touch!',
    interactiveBooks: 'Interactive Books',
    chapterOf: (current, total) => `Chapter ${current} of ${total}`,
    chapter: 'Chapter',
    restart: 'Restart',
    map: 'Story Map',
    library: 'Bookshelf',
    soundOn: 'Enable sound',
    soundOff: 'Mute sound',
    welcomeBannerBadge: 'Welcome to Pop!',
    welcomeTitle: 'Where stories come alive with your touch!',
    welcomeDescription: 'Tap characters and scenery to trigger magical animations, discover hidden secrets, and decide the outcome of every adventure!',
    bannerTag1: '🌊 Jumping waves at the beach',
    bannerTag2: '🐾 Adopting kittens and puppies',
    bannerTag3: '✨ Magic, sports, and family',
    chooseAdventure: 'Choose Your Adventure',
    chooseSubtitle: 'Illustrated and animated storybooks with interactive choices for all ages',
    allBooks: (count) => `All Books (${count})`,
    ageYears: (age) => `${age} years`,
    allThemes: 'All Themes',
    themeFamily: 'Family & Grandparents',
    themePets: 'Pets & Animals',
    themeSports: 'Sports & Health',
    themeMagic: 'Magic & Fantasy',
    themeSchool: 'School & Friends',
    themeNature: 'Nature & Climate',
    charactersInStory: 'Characters in this story:',
    openBook: 'Open Book & Play!',
    fontNormal: 'Normal Font',
    fontLarge: 'Large Font',
    fontHuge: 'Huge Font',
    readAloud: 'Read to Me 🔊',
    pauseReading: 'Pause Reading',
    magicTouches: (current, max) => `Magic Touches Discovered: ${current}/${max}`,
    whatNext: 'What will the character do next?',
    storyCompleted: 'Adventure Successfully Completed!',
    congratulations: 'Congratulations! You unlocked the secrets of this book through your own choices!',
    mapTitle: 'Adventure Map',
    mapSubtitle: 'Track your choices and the paths you have explored in this story',
    youAreHere: 'You are here',
    explored: 'Explored',
    closeMap: 'Continue Reading',
    restartFromStart: 'Restart from Beginning',
    selectLanguage: 'Language',
    hintsOn: 'Hints: On',
    hintsOff: 'Hints: Off',
    secretsFound: (current, total) => `Secrets Found: ${current} / ${total}`,
  },
  it: {
    appSubtitle: 'Tocca, vivi la magia e scegli la storia',
    tagline: 'Dove le storie prendono vita con un tuo tocco!',
    interactiveBooks: 'Libri Interattivi',
    chapterOf: (current, total) => `Capitolo ${current} di ${total}`,
    chapter: 'Capitolo',
    restart: 'Ricomincia',
    map: 'Mappa',
    library: 'Libreria',
    soundOn: 'Attiva audio',
    soundOff: 'Disattiva audio',
    welcomeBannerBadge: 'Benvenuti su Pop!',
    welcomeTitle: 'Dove le storie prendono vita con un tuo tocco!',
    welcomeDescription: 'Tocca i personaggi e gli sfondi per vedere reazioni magiche, scoprire segreti nascosti e decidere il corso di ogni avventura!',
    bannerTag1: '🌊 Saltare le onde al mare',
    bannerTag2: '🐾 Adozione di cuccioli e gattini',
    bannerTag3: '✨ Magia, sport e famiglia',
    chooseAdventure: 'Scegli la tua Avventura',
    chooseSubtitle: 'Libri illustrati e animati con scelte interattive per tutte le età',
    allBooks: (count) => `Tutti i Libri (${count})`,
    ageYears: (age) => `${age} anni`,
    allThemes: 'Tutti i Temi',
    themeFamily: 'Famiglia e Nonni',
    themePets: 'Animali e Cuccioli',
    themeSports: 'Sport e Salute',
    themeMagic: 'Magia e Fantasia',
    themeSchool: 'Scuola e Amici',
    themeNature: 'Natura e Clima',
    charactersInStory: 'Personaggi in questa storia:',
    openBook: 'Apri il Libro e Gioca!',
    fontNormal: 'Carattere Normale',
    fontLarge: 'Carattere Grande',
    fontHuge: 'Carattere Gigante',
    readAloud: 'Leggi per Me 🔊',
    pauseReading: 'Metti in Pausa',
    magicTouches: (current, max) => `Tocchi Magici Scoperti: ${current}/${max}`,
    whatNext: 'Cosa farà il personaggio adesso?',
    storyCompleted: 'Avventura Completata con Successo!',
    congratulations: 'Congratulazioni! Hai scoperto i segreti di questo libro con le tue scelte!',
    mapTitle: 'Mappa dell\'Avventura',
    mapSubtitle: 'Segui le tue scelte e i percorsi esplorati in questa storia',
    youAreHere: 'Ti trovi qui',
    explored: 'Esplorato',
    closeMap: 'Continua a Leggere',
    restartFromStart: 'Ricomincia dall\'Inizio',
    selectLanguage: 'Lingua',
    hintsOn: 'Suggerimenti: Attivi',
    hintsOff: 'Suggerimenti: Disattivati',
    secretsFound: (current, total) => `Segreti Toccati: ${current} / ${total}`,
  }
};
