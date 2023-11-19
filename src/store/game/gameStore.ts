import { create } from 'zustand';
import { GameStore } from './gameStore.types';
import { createStartGameSlice } from './slices/startGame';
import { createAddCityFromAISlice } from './slices/addCityFromAI';
import { createAddCityFromUserSlice } from './slices/addCityFromUser';

export const useGameStore = create<GameStore>()((set, get, ...a) => ({
  activeWindow: 'start',
  cities: [],
  timer: 0,
  currentCity: '',
  time: 0,
  message: 'Напишите любой город, например: Где вы живете?',

  setCurrentCity(value) {
    set({ currentCity: value });
  },
  finishGame() {
    set({ activeWindow: 'end' });
    clearInterval(get().timer);
    set({ time: 0 });
  },
  ...createStartGameSlice(set, get, ...a),
  ...createAddCityFromAISlice(set, get, ...a),
  ...createAddCityFromUserSlice(set, get, ...a),
}));
