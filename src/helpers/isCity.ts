import { normalizeCity } from './normalizeCity';
//проверяем есть ли данный город в базе данных

export const isCity = async (city: string): Promise<boolean> => {
  const citiesDB = (await import('@/constants/citiesForSpellChecking.json'))
    .default;

  return citiesDB.includes(normalizeCity(city));
};
