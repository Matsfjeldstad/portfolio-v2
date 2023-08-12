'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

type Props = {};

export default function RoleSection({}: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const x = useTransform(scrollYProgress, [0.1, 0.4], [-60, 0]);
  return (
    <div ref={ref} className="mx-auto mt-40 flex max-w-5xl justify-center ">
      <motion.div
        style={{ opacity, x }}
        className="relative z-0 flex min-h-[80vh] max-w-xl flex-col gap-8 p-6 text-gray-300"
      >
        <h2 className="text-2xl font-bold text-gray-100">My Role On &quot;The Golden Egg&quot; Project:</h2>
        <p>
          As the Lead Developer for &quot;The Golden Egg&quot;, I took on significant responsibilities that spanned
          various aspects of the development process. My leadership position required me to oversee and guide a team of
          four front-end developers, ensuring that we collectively achieved our goals and maintained the project&apos;s
          high-quality standards.
        </p>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-200">Lead Developer and Team Management</h3>
          <p>
            I was entrusted with the role of strategizing and implementing sprints, as well as managing tasks to ensure
            timely and efficient completion. This involved regular communication with both the graphic design and UX
            teams. By acting as a bridge, I channeled vital information, feedback, and updates between these teams and
            my front-end developers, ensuring alignment and clarity across the board.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
