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
    <div ref={ref} className="relative mx-auto mt-80 flex h-[100vh] max-w-7xl p-4 text-center">
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="pointer-events-none fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(circle_at_center,_#a855f7_0%,_transparent_80%)]"
      />
      <motion.div
        style={{ opacity, x }}
        className="sticky top-0 z-0 flex h-screen w-screen  flex-col items-center justify-center gap-4 text-gray-400"
      >
        <div className="flex max-w-xl flex-col gap-4">
          <h2 className="text-4xl font-bold text-gray-100 [text-wrap:balance]">Test KVIKK AI Email Generator:</h2>
          <p>
            Powerd by OpenAI&apos;s GPT-3.5, this AI can generate a response to a email based on a prompt. The prompt
            can be a email you want a response to, the mood of the response, and a little contex, the AI will generate a
            response based on the prompt.
          </p>
          <div className="mx-auto mt-10 flex w-full items-center gap-4 overflow-hidden">
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex w-full flex-col gap-4"
            >
              <a
                href="https://kvikk.vercel.app/"
                target="_blank"
                className="flex w-full items-center justify-center gap-2 rounded-sm bg-gray-200 px-4 py-2 text-gray-900 duration-200 hover:scale-105 hover:bg-gray-300 active:scale-95 "
              >
                Live Demo
              </a>
            </motion.div>
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex w-full flex-col  gap-4"
            >
              <a
                href="https://github.com/Matsfjeldstad/KVIKK"
                target="_blank"
                className="flex w-full items-center justify-center gap-2 rounded-sm bg-gray-200 px-4 py-2 text-gray-900 duration-200 hover:scale-105 hover:bg-gray-300 active:scale-95 "
              >
                Github
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
