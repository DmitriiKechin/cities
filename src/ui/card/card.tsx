import React, { FC } from 'react';
import { CardProps } from './card.types';

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={'bg-white max-w-xl w-full rounded-2xl' + ' ' + className}>
      {children}
    </div>
  );
};
