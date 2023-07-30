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
      <motion.div style={{ opacity, x }} className="relative z-0 flex h-[80vh] max-w-md flex-col gap-4 text-gray-400">
        <h2 className="text-2xl font-bold text-gray-100">My Role On the Project:</h2>
        <div className="text-gray-100">UI/UX and Front End Developer</div>
        <p>
          As the front-end developer and UI/UX designer at Extrahex.com, I was at the forefront of creating an
          intuitive, user-friendly platform to enhance the Hex experience. My responsibilities encompassed the full
          spectrum of front-end development, including coding and programming, but extended far beyond technical tasks.
        </p>
        <p>
          As a UI/UX designer, my focus was to ensure that the user journey through our platform was as smooth and
          enjoyable as possible. I achieved this by incorporating modern design principles, generating interactive
          visuals, and constantly refining the interface based on user feedback and data-driven insights.
        </p>
        <p>
          My role was not merely to recreate hex.com, but to improve upon it significantly, by developing a platform
          that is easier to navigate, more aesthetically pleasing, and ultimately more engaging for users. My work is a
          testament to the belief that a good design can significantly enhance a user&apos;s experience, making complex
          blockchain interactions feel effortless and intuitive.
        </p>
      </motion.div>
    </div>
  );
}
