import { StateCreator } from 'zustand';

import { GameStore } from '../gameStore.types';
import { isCity } from '@/helpers/isCity';
import { getLastLetter } from '@/helpers/getLastLetter';

export const createAddCityFromUserSlice: StateCreator<
  GameStore,
  [],
  [],
  { addCityFromUser: () => void }
> = (set, get) => ({
  async addCityFromUser() {
    const { currentCity, cities } = get();
    const lastCity = cities[cities.length - 1];

    if (!(await isCity(currentCity))) {
      set({
        message: 'Такой город не существует',
        currentCity: '',
      });
      return;
    }

    if (
      cities.length &&
      currentCity[0].toLowerCase() !== getLastLetter(lastCity)
    ) {
      set({
        message: `Город должен начинаться на “${getLastLetter(
          lastCity
        ).toUpperCase()}”`,
        currentCity: '',
      });
      return;
    }

    if (cities.includes(currentCity)) {
      set({
        message: 'Этот город уже был',
        currentCity: '',
      });
      return;
    }

    set((state) => ({
      cities: [...state.cities, currentCity],
      time: 0,
      message: 'Ожидаем ответа соперника...',
      currentCity: '',
    }));

    get().addCityFromAI();
  },
});
