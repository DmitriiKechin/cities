import React, { FC } from 'react';
import { Card } from '@/ui/card';
import { Button } from '@/ui/button';
import { useGameStore } from '@/store/game/gameStore';

export const GameEnd: FC = () => {
  const cities = useGameStore((store) => store.cities);
  const startGame = useGameStore((state) => state.startGame);
  const isWinner = !!(cities.length % 2);
  return (
    <Card className="p-10 text-xl flex flex-col items-center gap-8 text-center">
      {isWinner ? (
        <p>
          Поздравляем тебя с победой!
          <br />
          Твой противник не вспомнил нужный город!
        </p>
      ) : (
        <p>
          К сожалению твое время вышло!
          <br /> Твой противник победил!
        </p>
      )}
      <p
        className={
          'font-medium text-3xl' +
          ' ' +
          (isWinner ? 'text-green-600' : 'text-red-600')
        }
      >
        00:00
      </p>
      <p>
        Всего было перечислено городов: {cities.length}
        <br /> Очень не плохой результат!
      </p>
      <div>
        <p className="mb-1.5">Последний город названный победителем</p>
        <p className="text-2xl">{cities[cities.length - 1]}</p>
      </div>
      <Button onClick={startGame}>Начать новую игру</Button>
    </Card>
  );
};
