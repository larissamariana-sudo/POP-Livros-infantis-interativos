import { Book, Scene, Language, BookTranslation, InteractiveElement, StoryChoice } from '../types';
import { allStoryTranslations } from './storyTranslations';
import { translateStoryText } from './universalTranslator';

export function getLocalizedBook(book: Book, lang: Language): Book {
  if (lang === 'pt') {
    return book;
  }

  // 1. Merge explicit translations from allStoryTranslations and book.translations
  const catalogTrans: BookTranslation | undefined = allStoryTranslations[book.id]?.[lang];
  const embeddedTrans: BookTranslation | undefined = book.translations?.[lang];

  const trans: BookTranslation = {
    title: catalogTrans?.title || embeddedTrans?.title || translateStoryText(book.title, lang),
    subtitle: catalogTrans?.subtitle || embeddedTrans?.subtitle || translateStoryText(book.subtitle, lang),
    tagline: catalogTrans?.tagline || embeddedTrans?.tagline || translateStoryText(book.tagline, lang),
    characters: catalogTrans?.characters || embeddedTrans?.characters,
    scenes: {
      ...(embeddedTrans?.scenes || {}),
      ...(catalogTrans?.scenes || {})
    }
  };

  // 2. Localize characters
  const localizedCharacters = book.characters.map((char, index) => {
    const charTrans = trans.characters?.[index];
    return {
      ...char,
      name: charTrans?.name || char.name,
      role: charTrans?.role || translateStoryText(char.role, lang)
    };
  });

  // 3. Localize all scenes
  const localizedScenes: Record<string, Scene> = {};

  for (const [sceneId, scene] of Object.entries(book.scenes)) {
    const sceneTrans = trans.scenes?.[sceneId];

    // Localize choices
    const localizedChoices: StoryChoice[] = scene.choices.map((choice) => {
      const choiceTrans = sceneTrans?.choices?.[choice.id];
      return {
        ...choice,
        text: choiceTrans?.text || translateStoryText(choice.text, lang),
        description: choiceTrans?.description || (choice.description ? translateStoryText(choice.description, lang) : undefined),
        lockHint: choice.lockHint ? translateStoryText(choice.lockHint, lang) : undefined
      };
    });

    // Localize interactive elements
    const localizedElements: InteractiveElement[] = scene.interactiveElements.map((elem) => {
      const elemTrans = sceneTrans?.elements?.[elem.id];
      return {
        ...elem,
        name: elemTrans?.name || translateStoryText(elem.name, lang),
        label: elemTrans?.label || translateStoryText(elem.label, lang),
        hint: elemTrans?.hint || translateStoryText(elem.hint, lang),
        eventResult: elem.eventResult ? {
          ...elem.eventResult,
          narrativeNote: elemTrans?.narrativeNote || translateStoryText(elem.eventResult.narrativeNote, lang)
        } : undefined
      };
    });

    localizedScenes[sceneId] = {
      ...scene,
      title: sceneTrans?.title || translateStoryText(scene.title, lang),
      text: sceneTrans?.text || translateStoryText(scene.text, lang),
      characterDialogue: scene.characterDialogue ? {
        avatar: scene.characterDialogue.avatar,
        speaker: sceneTrans?.speaker || scene.characterDialogue.speaker,
        text: sceneTrans?.dialogue || translateStoryText(scene.characterDialogue.text, lang)
      } : undefined,
      choices: localizedChoices,
      interactiveElements: localizedElements
    };
  }

  return {
    ...book,
    title: trans.title,
    subtitle: trans.subtitle,
    tagline: trans.tagline,
    characters: localizedCharacters,
    scenes: localizedScenes
  };
}

export function getSpeechLangCode(lang: Language): string {
  switch (lang) {
    case 'en': return 'en-US';
    case 'es': return 'es-ES';
    case 'it': return 'it-IT';
    case 'pt':
    default: return 'pt-BR';
  }
}

