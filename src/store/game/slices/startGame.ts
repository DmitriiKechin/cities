import { StateCreator } from 'zustand';

import { GameStore } from '../gameStore.types';
import { ROUND_TIME } from '@/constants/game';

export const createStartGameSlice: StateCreator<
  GameStore,
  [],
  [],
  { startGame: () => void }
> = (set, get) => ({
  startGame() {
    const timer = setInterval(() => {
      set((state) => ({
        time: state.time + 1,
      }));
      if (get().time > ROUND_TIME) {
        get().finishGame();
      }
    }, 1000);

    set({ activeWindow: 'game', timer, cities: [] });
  },
});
