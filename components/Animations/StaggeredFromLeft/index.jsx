'use client';
import { motion } from 'framer-motion';

export default function StaggeredFromLeft({
  children,
  delay = 0.05,
  index,
  once = true,
  className,
  as = 'div',
}) {
  const MotionElement = motion[as];

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <MotionElement
      key={index}
      variants={fadeInAnimationVariants}
      initial='initial'
      whileInView='animate'
      className={className ?? ''}
      viewport={{
        once: once,
      }}
      transition={{
        delay: delay * index,
        // duration: 0.1,
      }}
    >
      {children}
    </MotionElement>
  );
}
