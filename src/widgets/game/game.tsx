import React, { FC, useState } from 'react';
import { Card } from '@/ui/card';
import { ProgressBar } from '@/ui/progressBar';
import { Messages } from '@/components/messages';
import { ROUND_TIME } from '@/constants/game';
import { MessageInput } from '@/components/messageInput';
import { getTime } from '@/helpers/getTime';
import { useGameStore } from '@/store/game/gameStore';

export const Game: FC = () => {
  const messages = useGameStore((state) => state.cities);
  const time = useGameStore((store) => store.time);
  const currentCity = useGameStore((store) => store.currentCity);
  const setCurrentCity = useGameStore((store) => store.setCurrentCity);
  const addCity = useGameStore((store) => store.addCityFromUser);
  const placeholder = useGameStore((state) => state.message);

  const isUser = !(messages.length % 2);
  const progress = (100 * time) / ROUND_TIME;

  return (
    <Card className="py-4">
      <h1 className="mb-3 mx-4 flex justify-between items-center">
        <span>
          {isUser ? 'Сейчас ваша очередь' : 'Сейчас очередь соперника'}
        </span>
        <span className="font-medium text-xl">{getTime(time)}</span>
      </h1>
      <ProgressBar
        className="[&>div]:duration-1000 [&>div]:ease-linear"
        progress={progress}
      />
      {messages.length ? (
        <Messages className="h-96 mx-4" messages={messages} />
      ) : (
        <p className="h-96 mx-4 flex justify-center items-center text-center">
          Первый участник вспоминает города...
        </p>
      )}
      <p className="text-gray-400 text-center mb-4 h-6">
        {messages.length > 5
          ? `Всего перечислено городов: ${messages.length}`
          : ' '}
      </p>
      <MessageInput
        placeholder={placeholder}
        className="mx-4"
        value={currentCity}
        setValue={setCurrentCity}
        messageSendHandler={addCity}
        disabled={!isUser}
      />
    </Card>
  );
};
