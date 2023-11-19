import React, { FC, useEffect, useRef } from 'react';
import { MessagesProps } from './messages.types';
import { Message } from '@/ui/message';

export const Messages: FC<MessagesProps> = React.memo(
  ({ messages, className }) => {
    const lastElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
      lastElement?.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
      <div
        className={
          'flex flex-col gap-2 overflow-auto no-scrollbar' + ' ' + className
        }
      >
        {messages.map((message, index) => {
          const isOdd = !!(index % 2);
          return (
            <Message
              className={isOdd ? 'self-start' : 'self-end'}
              key={message}
              text={message}
              isUser={!isOdd}
            />
          );
        })}
        <div ref={lastElement}></div>
      </div>
    );
  }
);

Messages.displayName = 'Messages';
