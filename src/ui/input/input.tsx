import React, { FC } from 'react';
import { InputProps } from './input.types';
import styles from './input.styles.module.css';

export const Input: FC<InputProps> = React.memo(
  ({ value, setValue, className, disabled, placeholder }) => {
    return (
      <input
        disabled={disabled}
        placeholder={placeholder}
        className={styles.input + ' ' + className}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    );
  }
);

Input.displayName = 'Input';
