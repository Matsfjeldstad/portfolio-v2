'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

type Props = {};

export default function ProjectDescription({}: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const opacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const gradientOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 0.5]);
  const x = useTransform(scrollYProgress, [0.1, 0.4], [-60, 0]);
  return (
    <div
      ref={ref}
      className="relative mx-auto mt-80 flex h-[100vh] max-w-7xl items-center justify-center p-4 text-center"
    >
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="pointer-events-none fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(at_bottom_right,_#444_0%,_transparent_40%)]"
      />
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="pointer-events-none fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(circle_at_top_left,_#444_0%,_transparent_50%)]"
      />
      <motion.div style={{ opacity, x }} className="text-gray-00 sticky top-0 z-0 flex max-w-md flex-col gap-4">
        <h2 className="text-4xl font-bold text-gray-100 [text-wrap:balance]">Check out The Golden Egg:</h2>
        <p className="[text-wrap:balance]">thegoldenegg.no is the offical page for the gold egg award show.</p>
        <ul className="mx-auto mt-10 flex w-full items-center gap-4 overflow-hidden">
          <motion.li
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex w-full flex-col gap-4"
          >
            <a
              href="https://thegoldenegg.no/"
              target="_blank"
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-gray-300 px-4 py-2 text-gray-900 duration-200 hover:scale-105 hover:bg-gray-400 active:scale-95 "
            >
              Live Demo
            </a>
          </motion.li>
          <motion.li
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex w-full flex-col  gap-4"
          >
            <a
              href="https://www.noroff.no/nyheter/nytt-fra-noroff/1795-studentene-har-laget-nettside-for-the-golden-egg-awards"
              target="_blank"
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-gray-300 px-4 py-2 text-gray-900 duration-200 hover:scale-105 hover:bg-gray-400 active:scale-95 "
            >
              Link to interview
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
}
