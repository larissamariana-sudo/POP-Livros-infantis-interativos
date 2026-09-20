import { BookTranslation, Language } from '../../types';
import { storiesPart1 } from './storiesPart1';
import { storiesPart2 } from './storiesPart2';
import { storiesPart3 } from './storiesPart3';
import { storiesPart4 } from './storiesPart4';

export const allStoryTranslations: Record<string, Partial<Record<Language, BookTranslation>>> = {
  ...storiesPart1,
  ...storiesPart2,
  ...storiesPart3,
  ...storiesPart4
};

export function getStoryTranslation(bookId: string, lang: Language): BookTranslation | undefined {
  const bookTrans = allStoryTranslations[bookId];
  if (!bookTrans) return undefined;
  return bookTrans[lang];
}
