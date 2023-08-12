'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

type Props = {};

export default function Introduction({}: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const x = useTransform(scrollYProgress, [0.1, 0.4], [-60, 0]);
  return (
    <div ref={ref} className="mx-auto mt-40 flex max-w-5xl justify-center p-6">
      <motion.div style={{ opacity, x }} className="relative z-0 flex  max-w-xl flex-col gap-4 text-gray-100">
        <h2 className="text-2xl font-bold">Website for the golden egg awards, made by the students at Noroff</h2>
        <p className="text-gray-400">
          The Golden Egg Awards is a yearly award show held at Noroff to celebrate the students. The students are
          nominated by their peers and the winners are chosen by a jury. To book tickets and nominate the users would
          use our site. The website was created by the students at Noroff, and I was lead dev for the frontend
          development part of the project.
        </p>
      </motion.div>
    </div>
  );
}
