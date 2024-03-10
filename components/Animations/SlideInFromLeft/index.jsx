'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function SlideInFromLeft({
  as = 'div',
  children,
  width = 'fit-content',
  className = '',
  duration = 0.5,
  delay = 0,
  once = true,
}) {
  const MotionElement = motion[as];
  const wrapperRef = useRef(null);
  const isInView = useInView(wrapperRef, { once: once });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <>
      <div ref={wrapperRef} className={className ?? ''} style={{ width }}>
        <MotionElement
          variants={{
            hidden: { opacity: 0, x: -1000 },
            visible: { opacity: 1, x: 0 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ delay: delay, duration: duration, ease: 'easeInOut' }}
        >
          {children}
        </MotionElement>
      </div>
    </>
  );
}
