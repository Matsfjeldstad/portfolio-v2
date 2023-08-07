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
    <div ref={ref} className="relative mx-auto mt-40 flex h-[100vh] max-w-7xl justify-center p-4 text-center">
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="pointer-events-none fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(at_bottom_right,_#B12E82_0%,_transparent_50%)]"
      />
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="pointer-events-none fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(at_top_left,_#B12E82_0%,_transparent_50%)]"
      />
      <motion.div
        style={{ opacity, x }}
        className="sticky top-0 z-0 flex h-screen max-w-md flex-col gap-4 text-gray-400"
      >
        <h2 className="text-4xl font-bold text-gray-100">Check out extrahex.com:</h2>
        <p>
          Extrahex.com is a dApp that allows users to stake their HEX tokens and earn interest. It is built on top of
          the Ethereum and Pulsechain blockchains. The development and design of Extrahex.com was achieved through the
          use of cutting-edge technologies and modern frameworks, selected for their robust capabilities and to provide
          an optimized user experience.
        </p>
        <ul className="mx-auto mt-10 flex w-full items-center gap-4 overflow-hidden">
          <motion.li
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex w-full flex-col gap-4"
          >
            <a
              href="https://extrahex.com/"
              target="_blank"
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-gray-200 px-4 py-2 text-gray-900 duration-200 hover:scale-105 hover:bg-gray-300 active:scale-95 "
            >
              extrahex.com
            </a>
          </motion.li>
          <motion.li
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex w-full flex-col  gap-4"
          >
            <a
              href="https://github.com/matsfjeldstad/extrahex"
              target="_blank"
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-gray-200 px-4 py-2 text-gray-900 duration-200 hover:scale-105 hover:bg-gray-300 active:scale-95 "
            >
              Github
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
}
