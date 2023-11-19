import { StateCreator } from 'zustand';

import { GameStore } from '../gameStore.types';
import { ROUND_TIME } from '@/constants/game';
import { getRandomInt } from '@/helpers/getRandomInt';
import { delay } from '@/helpers/delay';
import { getCity } from '@/helpers/getCity';
import { getLastLetter } from '@/helpers/getLastLetter';

export const createAddCityFromAISlice: StateCreator<
  GameStore,
  [],
  [],
  { addCityFromAI: () => void }
> = (set, get) => ({
  async addCityFromAI() {
    let delayFactor = get().cities.length / 37;
    delayFactor = delayFactor > 1 ? 1 : delayFactor;
    const delayTime = getRandomInt(
      1000,
      (1000 * delayFactor * ROUND_TIME) / 2.5
    );

    await delay(delayTime);
    const city = await getCity(get().cities);

    if (!city) {
      return;
    }

    set((state) => ({
      cities: [...state.cities, city],
      time: 0,
      message: `Знаете город на букву “${getLastLetter(city).toUpperCase()}”?`,
      currentCity: '',
    }));
  },
});
