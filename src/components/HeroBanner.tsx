import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown } from '@/assets/Icons';
import { idText } from 'typescript';

type Props = {};

export default function HeroBanner({}: Props) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);

  const projectId = document.getElementById('projects');

  const scrollToProjects = () => {
    if (!projectId) return;
    projectId.scrollIntoView({ behavior: 'smooth' });
  };

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
      className="relative flex h-screen w-full flex-col items-center justify-center gap-3 bg-gray-950 before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--mouse-x,100px)_var(--mouse-y,100px),_#B12E82_0%,_transparent_100%)] before:opacity-50  "
    >
      <motion.div style={{ scale }} className="relative flex flex-col items-center gap-7 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-center text-lg font-bold text-gray-400"
        >
          Hello, I&apos;m
        </motion.div>
        <motion.h1
          className="bg-gradient-to-tr from-gray-600 to-gray-100 bg-clip-text p-2 text-center text-5xl font-black tracking-tight text-transparent sm:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Mats Fjeldstad
        </motion.h1>
        <motion.h2
          className="max-w-md text-center text-2xl lowercase text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          Converting Coffee into Code Since 2021
        </motion.h2>
        <div onClick={() => scrollToProjects()} className="mt-10 flex items-center justify-center gap-2">
          {/* <Link href="/#projects" className="flex items-center justify-center"> */}
          <div className="w-fit text-center text-lg font-bold text-gray-200">View my work</div>
          <ArrowDown className="h-5 w-5 fill-gray-200" />
          {/* </Link> */}
        </div>
      </motion.div>
    </motion.div>
  );
}
