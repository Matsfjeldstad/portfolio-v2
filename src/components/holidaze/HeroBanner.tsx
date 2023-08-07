'use client';
import { ArrowDown } from '@/assets/Icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

type Props = {};

export default function HeroBanner({}: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'end start'] });

  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
  const gradientOpacity = useTransform(scrollYProgress, [0.5, 1], [0.3, 0]);
  const scale = useTransform(scrollYProgress, [0.5, 0.8], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? 'relative' : 'fixed';
  });

  return (
    <motion.section
      ref={ref}
      className="relative mx-auto mt-20 flex h-[70vh] max-w-[1400px] justify-center gap-4 px-6 text-center"
    >
      {/* <motion.div
        style={{ opacity: gradientOpacity }}
        className="pointer-events-none fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(at_bottom_left,_#FF004C_10%,_transparent_70%)] "
      /> */}
      <motion.div style={{ opacity, scale, position }} className="top-40 flex max-w-3xl flex-col items-center">
        <p className="text-gray-900"> case study into</p>
        <div className=" p-4 text-6xl font-black text-[#FF004C]">Holidaze.</div>
        <p className="capitalize text-gray-900"> Fictional booking site for holiday venues</p>
        <div className="relative mt-10">
          <motion.svg
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: 0 }}
            width="200"
            height="200"
            className="fill-gray-900"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path id="myCircle" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" />
              </marker>
            </defs>
            <text>
              <textPath href="#myCircle" startOffset="50%">
                Scroll down to learn more
              </textPath>
              <textPath href="#myCircle" startOffset="0%">
                Scroll down to learn more
              </textPath>
            </text>
          </motion.svg>
          <ArrowDown className=" absolute left-1/2 top-1/2 h-10 w-10 translate-x-[-50%] translate-y-[-50%] stroke-gray-900" />
        </div>
      </motion.div>
    </motion.section>
  );
}
