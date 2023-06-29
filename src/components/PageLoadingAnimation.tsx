'use clinet';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  setLoading: (loading: boolean) => void;
};

const parentObject = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 1,
      when: 'afterChildren',
      staggerChildren: 0.2,
    },
  },
};
const childObject = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      delay: 2,
    },
  },
};

export default function PageLoadingAnimation({ setLoading }: Props) {
  return (
    <motion.div
      className="relative flex items-center h-screen w-screen gap-2 before:absolute before:opacity-30 before:pointer-events-none before:inset-0 before:z-0  before:bg-[radial-gradient(circle_farthest-side_at_100px_100px,_#B12E82_0%,_transparent_100%)] justify-center top-0 left-0 "
      variants={parentObject}
      initial="hidden"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
      animate="visible"
    >
      <motion.h1 variants={childObject} className="text-5xl font-bold gap-2 ">
        Hello
      </motion.h1>
    </motion.div>
  );
}
