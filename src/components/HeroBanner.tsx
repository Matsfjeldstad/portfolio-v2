import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

type Props = {};

export default function HeroBanner({}: Props) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);

  useEffect(() => {
    const currentRef = heroRef.current;
    // gett postion of mouse
    const updateMouseMove = (e: MouseEvent) => {
      if (!currentRef) return;
      const { clientX, clientY } = e;
      currentRef.style.setProperty('--mouse-x', `${clientX}px`);
      currentRef.style.setProperty('--mouse-y', `${clientY}px`);
    };

    window.addEventListener('mousemove', updateMouseMove);

    return () => {
      // window.removeEventListener('mousemove', updateMouseMove);
      window.removeEventListener('mousemove', updateMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={heroRef}
      style={{ opacity }}
      className="flex w-full relative before:opacity-50 flex-col gap-3 bg-gray-950 h-screen items-center justify-center before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--mouse-x,100px)_var(--mouse-y,100px),_#B12E82_0%,_transparent_100%)]  "
    >
      <motion.div style={{ scale }} className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-lg font-bold text-gray-500 text-center"
        >
          Hello, I&apos;m
        </motion.div>
        <motion.h1
          className="text-6xl font-black text-center text-transparent p-2 bg-clip-text bg-gradient-to-tr from-gray-700 to-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Mats Fjeldstad
        </motion.h1>
        <motion.h2
          className="text-2xl font-bold text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          I am a front-end developer
        </motion.h2>
        <div className="mt-10">
          <div>
            <Link href={''}>
              <div className="text-lg font-bold text-gray-200 text-center">View my work</div>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
