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
      <motion.div style={{ opacity, x }} className="relative z-0 flex h-[80vh] max-w-md flex-col gap-4 text-gray-100">
        <h2 className="text-2xl font-bold [text-wrap:balance]">Email Generator - Powered by GPT 3.5 </h2>
        <p className="leading-7 text-gray-400">
          This is a case study into the OpenAI API, which is a powerful AI tool that can generate text based on a
          prompt. This case study will focus on the email generator, which can generate email response based on a prompt
          given. The prompt can be a email you want a response to, the mood of the response, and a little contex, the AI
          will generate a response based on the prompt.
        </p>
      </motion.div>
    </div>
  );
}
