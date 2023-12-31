import React, { FC } from 'react';
import { MessageInputProps } from './messageInput.types';
import { Input } from '@/ui/input';
import { Button } from '@/ui/button';

export const MessageInput: FC<MessageInputProps> = React.memo(
  ({
    messageSendHandler,
    setValue,
    value,
    className,
    disabled,
    placeholder,
  }) => {
    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      messageSendHandler();
    };
    return (
      <form
        onSubmit={submitHandler}
        className={
          'flex p-2 pl-3 bg-gray-100 gap-4 rounded-md' + ' ' + className
        }
      >
        <Input
          className="flex-auto"
          disabled={disabled}
          value={value}
          setValue={setValue}
          placeholder={placeholder}
        />
        <Button disabled={disabled} variant="icon" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 21"
            fill="none"
          >
            <g clipPath="url(#clip0_7618_677)">
              <path
                d="M8.3335 12.1667L17.5002 3"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.4998 3L12.0831 18C12.0466 18.0798 11.9879 18.1474 11.914 18.1948C11.8402 18.2422 11.7542 18.2674 11.6665 18.2674C11.5787 18.2674 11.4928 18.2422 11.4189 18.1948C11.3451 18.1474 11.2864 18.0798 11.2498 18L8.33315 12.1667L2.49981 9.25C2.42003 9.21344 2.35242 9.15474 2.30502 9.08088C2.25762 9.00701 2.23242 8.9211 2.23242 8.83333C2.23242 8.74557 2.25762 8.65965 2.30502 8.58579C2.35242 8.51193 2.42003 8.45323 2.49981 8.41667L17.4998 3Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_7618_677">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </form>
    );
  }
);

MessageInput.displayName = 'MessageInput';
