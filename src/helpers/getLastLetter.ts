import { normalizeCity } from './normalizeCity';

export const getLastLetter = (word: string) => {
  const normalizeWord = normalizeCity(word);
  const length = normalizeWord.length;
  let lastLetter = normalizeWord[length - 1];

  if (lastLetter === 'ь' || lastLetter === 'ъ' || lastLetter === 'ы') {
    lastLetter = normalizeWord[length - 2];
  }
  return lastLetter;
};
