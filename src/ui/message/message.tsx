import React, { FC } from 'react';
import { MessageProps } from './message.types';

export const Message: FC<MessageProps> = React.memo(
  ({ isUser, text, className }) => {
    return (
      <div
        className={
          'py-1.5 px-3 w-min whitespace-nowrap' +
          ' ' +
          (isUser
            ? 'bg-violet-500 rounded-t-xl rounded-l-xl'
            : 'bg-violet-50 rounded-t-xl rounded-r-xl') +
          ' ' +
          className
        }
      >
        {text}
      </div>
    );
  }
);

Message.displayName = 'Message';
