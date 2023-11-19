import { Button } from '@/ui/button';
import { Card } from '@/ui/card';
import { ProgressBar } from '@/ui/progressBar';
import React, { FC } from 'react';
import styles from './hello.styles.module.css';
import { useGameStore } from '@/store/game/gameStore';

export const Hello: FC = ({}) => {
  const startGame = useGameStore((state) => state.startGame);
  return (
    <Card>
      <h1 className="text-base text-center py-[17px]">
        Игра в города на время
      </h1>
      <ProgressBar progress={0} />
      <div className="p-6 flex flex-col gap-6 text-sm">
        <p>Цель: Назвать как можно больше реальных городов.</p>
        <ul>
          <li className={styles.li}>Запрещается повторение городов.</li>
          <li className={styles.li}>
            Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого
            бы пропускаем эту букву и игрок должен назвать город на букву
            стоящую перед ъ или ь знаком.
          </li>
          <li className={styles.li}>
            Каждому игроку дается 2 минуты на размышления, если спустя это время
            игрок не вводит слово он считается проигравшим
          </li>
        </ul>
        <Button
          onClick={() => {
            startGame();
          }}
          className="w-min self-center"
        >
          Начать игру
        </Button>
      </div>
    </Card>
  );
};
