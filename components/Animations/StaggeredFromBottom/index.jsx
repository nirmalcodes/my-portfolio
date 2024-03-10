'use client';
import { motion } from 'framer-motion';

export default function StaggeredFromBottom({
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
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  //   const fadeInAnimationVariants = {
  //     initial: {
  //       opacity: 0,
  //       y: 100,
  //     },
  //     animate: (index) => ({
  //       opacity: 1,
  //       y: 0,
  //       transition: {
  //         delay: delay * index,
  //       },
  //     }),
  //   };

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
      transition={{ delay: delay * index }}
    >
      {children}
    </MotionElement>
  );
}
