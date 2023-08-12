'use client';
import { TailwindCSS, ViteJs, ReactJs } from '@/assets/Icons';
import { Github } from '@/assets/Logos';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

type Props = {};

type Tech = {
  name: string;
  icon: JSX.Element;
  href: `https://${string}`;
  description: string;
};

export default function TechnologySection({}: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const iconClasses = 'h-8 w-8 fill-gray-800';

  const techStack: Tech[] = [
    {
      name: 'React',
      icon: <ReactJs className={iconClasses} />,
      href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      description:
        'React, a JavaScript library known for its efficiency and flexibility, was the cornerstone of our application.',
    },
    {
      name: 'Github',
      icon: <Github className={iconClasses} />,
      href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      description: 'Using github was a curial part of our devoploment team work.',
    },
    {
      name: 'Vite',
      icon: <ViteJs className={iconClasses} />,
      href: 'https://vitejs.dev/',
      description:
        'Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts: a dev server that serves your source files over native ES modules, and a build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.',
    },

    {
      name: 'Tailwind CSS',
      icon: <TailwindCSS className={iconClasses} />,
      href: 'https://tailwindcss.com/',
      description:
        'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. Using Tailwind CSS allowed me to quickly build a responsive and visually appealing user interface.',
    },
  ];

  const opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0.1, 0.2], [-20, 0]);
  return (
    <div ref={ref} className="mx-auto mt-40 flex max-w-5xl justify-center ">
      <motion.div style={{ opacity, x }} className="relative z-0 flex max-w-xl flex-col gap-4 p-6 text-gray-200">
        <h2 className="text-2xl font-bold text-gray-100">Technologies Used On The Golden Egg:</h2>
        <p>The golden egg was built using these technologies:</p>
        <ul className="mt-10 flex flex-col gap-10 overflow-hidden">
          {techStack.map((tech) => (
            <motion.li
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              key={tech.name}
              className="flex flex-col gap-4"
            >
              <a
                href={tech.href}
                target="_blank"
                className="flex w-fit items-center gap-2 rounded-sm bg-gray-100 px-4 py-2 text-gray-800 duration-200 hover:scale-105 hover:bg-gray-200 active:scale-95 "
              >
                {tech.icon}
                {tech.name}
              </a>
              <p>{tech.description}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
