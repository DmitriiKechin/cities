type ActiveWindow = 'start' | 'game' | 'end';

export type GameStore = {
  message: string;
  currentCity: string;
  setCurrentCity: (value: string) => void;
  cities: string[];
  addCityFromUser: () => void;
  addCityFromAI: () => void;
  time: number;
  timer: NodeJS.Timeout | number;
  activeWindow: ActiveWindow;
  startGame: () => void;
  finishGame: () => void;
};
