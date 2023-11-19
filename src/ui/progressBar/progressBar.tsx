import React, { FC, useEffect, useRef } from 'react';
import { ProgressBarProps } from './progressBar.types';

export const ProgressBar: FC<ProgressBarProps> = React.memo(
  ({ className, progress }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (ref.current) {
        ref.current.style.transform = `scaleX(${progress / 100})`;
      }
    }, [progress]);

    return (
      <div className={`h-[5px] bg-gray-100 relative ` + ' ' + className}>
        <div
          ref={ref}
          className="absolute after:top-0 left-0 h-full w-full bg-violet-300 origin-left scale-x-0"
        ></div>
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';
