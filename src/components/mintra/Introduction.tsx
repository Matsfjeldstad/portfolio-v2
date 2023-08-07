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
        <h2 className="text-2xl font-bold">Welcome to Mintra - Your Ultimate Auction Platform</h2>
        <p className="text-gray-800">
          Mintra stands out as a premier auction website crafted with meticulous care using Tailwind CSS, HTML, and
          JavaScript, all efficiently compiled with Vite. It&apos;s a collaboration with the Noroff School of Technology
          and Digital Media, which provides us with a unique API. What&apos;s fascinating is that every student works
          with the same backend. Hence, if a student posts an item on their auction site, it instantly becomes visible
          on Mintra too! Dive in to discover an array of auctions, manage them effortlessly through our admin dashboard,
          and enjoy a seamless authentication process. Experience auctioning redefined with Mintra.
        </p>
      </motion.div>
    </div>
  );
}
