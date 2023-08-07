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
        className="pointer-events-none fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(at_bottom_right,_#444_0%,_transparent_40%)]"
      />
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="pointer-events-none fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(at_top_left,_#444_0%,_transparent_30%)]"
      />
      <motion.div
        style={{ opacity, x }}
        className="sticky top-0 z-0 flex h-screen max-w-md flex-col gap-4 text-gray-800"
      >
        <h2 className="text-4xl font-bold text-gray-950">Check out Holidaze:</h2>
        <p>
          Holidaze is a fictous hotel booking website. It was created as a part of my final exam in the Front End
          Development course at Noroff. The project was created using React, TailwindCSS, Redux, Framer motion and
          supabase. The project was deployed to Vercel and database was hosted and powered by Supabase.
        </p>
        <ul className="mx-auto mt-10 flex w-full items-center gap-4 overflow-hidden">
          <motion.li
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex w-full flex-col gap-4"
          >
            <a
              href="https://project-exam-holidayz.vercel.app/"
              target="_blank"
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-gray-900 px-4 py-2 text-gray-200 duration-200 hover:scale-105 hover:bg-gray-800 active:scale-95 "
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
              href="https://github.com/Matsfjeldstad/project-exam-holidayz"
              target="_blank"
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-gray-900 px-4 py-2 text-gray-200 duration-200 hover:scale-105 hover:bg-gray-800 active:scale-95 "
            >
              Github
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
}
