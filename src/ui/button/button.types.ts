import React from 'react';

export interface ButtonProps {
  variant?: 'icon' | 'contained';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
