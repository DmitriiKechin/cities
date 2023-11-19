'use client';
import { useGameStore } from '@/store/game/gameStore';
import { Game } from '@/widgets/game';
import { GameEnd } from '@/widgets/gameEnd/gameEnd';
import { Hello } from '@/widgets/hello';

export default function Home() {
  const activeWindow = useGameStore((state) => state.activeWindow);

  switch (activeWindow) {
    case 'start':
      return <Hello />;

    case 'game':
      return <Game />;

    case 'end':
      return <GameEnd />;
  }
}
