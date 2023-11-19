import { getLastLetter } from './getLastLetter';
import { getRandomInt } from './getRandomInt';
import { normalizeCity } from './normalizeCity';

export const getCity = async (
  usedCities: string[]
): Promise<string | undefined> => {
  const citiesDB = (await import('@/constants/citiesForAI.json')).default;
  const lastLetter = getLastLetter(usedCities[usedCities.length - 1]);

  const citiesWithCorrectLetter = citiesDB.filter(
    (city) => city[0].toLowerCase() === lastLetter
  );
  const normalizeUsedCities = usedCities.map((city) => normalizeCity(city));

  const unusedCities = citiesWithCorrectLetter.filter(
    (city) => !normalizeUsedCities.includes(normalizeCity(city))
  );

  //выдаем случайный город из подходящих
  // так игровая механика будет интереснее
  return unusedCities[getRandomInt(0, unusedCities.length)];
};
