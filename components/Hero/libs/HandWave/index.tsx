import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { FC, useEffect, useState } from 'react';

import { Props } from './props';

export const HandWave: FC<Props> = ({ className }: Props) => {
  const [toRotated, setToRotated] = useState(false);

  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];
    const timeout = setTimeout(() => {
      const baseDelay = 1000;

      timers = new Array(4).fill(0).map((_, i) => setTimeout(() => setToRotated(i % 2 === 0), baseDelay + i * 200));
    }, 6000);

    return () => {
      clearTimeout(timeout);
      timers.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <motion.span
      className={clsx('block ml-3', className)}
      aria-hidden="true"
      role="img"
      variants={{
        initial: {
          rotate: 0,
        },
        rotated: {
          rotate: 30,
        },
      }}
      transition={{
        type: 'spring',
        damping: 4,
        mass: 0.3,
      }}
      initial="initial"
      animate={toRotated ? 'rotated' : 'initial'}>
      👋
    </motion.span>
  );
};
