import React, { FC } from 'react';
import { ButtonProps } from './button.types';

export const Button: FC<ButtonProps> = React.memo(
  ({ children, onClick, variant = 'contained', className, disabled, type }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={
          'whitespace-nowrap bg-violet-600 text-white rounded hover:bg-violet-700 transition disabled:bg-gray-400' +
          ' ' +
          (variant === 'icon' ? 'p-1.5' : 'px-4 py-2') +
          ' ' +
          className
        }
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
