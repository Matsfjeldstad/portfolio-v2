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
      <motion.div style={{ opacity, x }} className="relative z-0 flex h-[80vh] max-w-md flex-col gap-4 text-gray-950">
        <h2 className="text-2xl font-bold">
          Find your next holiday destination with Holidaze - a fictous hotel booking website
        </h2>
        <p className="text-gray-800">
          Holidaze is a venue booking platform inspired by the success and efficiency of services like Airbnb. It is
          designed to cater to the specific needs of travelers and venue owners, allowing for a seamless process of
          booking or listing various venues. Be it a cozy apartment for a weekend getaway or an exquisite hall for a
          significant event, Holidaze aims to bridge the gap between venue seekers and providers. During my final exam
          at Noroff School of Technology and Digital Media, I had the opportunity to bring an innovative concept to life
          - Holidaze.
        </p>
      </motion.div>
    </div>
  );
}
