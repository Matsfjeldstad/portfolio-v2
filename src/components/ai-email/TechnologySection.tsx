'use client';
import { TailwindCSS, Html, Css, JavaScript, ViteJs, ReactJs, ExpressJs, NextJs } from '@/assets/Icons';
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

  const iconClasses = 'h-8 w-8 fill-stone-900';

  const techStack: Tech[] = [
    {
      name: 'React',
      icon: <ReactJs className={iconClasses} />,
      href: 'https://reactjs.org/',
      description:
        'React, a JavaScript library known for its efficiency and flexibility, was the cornerstone of our application.',
    },
    {
      name: 'Next js',
      icon: <NextJs className={iconClasses} />,
      href: 'https://expressjs.com/',
      description:
        'Next.js is a React framework that allows for server-side rendering and static site generation. It also provides a file-based routing system and API routes, which were used to build the backend of our application.',
    },
    {
      name: 'Tailwind CSS',
      icon: <TailwindCSS className={iconClasses} />,
      href: 'https://tailwindcss.com/',
      description:
        'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. Using Tailwind CSS allowed me to quickly build a responsive and visually appealing user interface.',
    },

    {
      name: 'Shadcn/ui',
      icon: <TailwindCSS className={iconClasses} />,
      href: 'https://ui.shadcn.com/',
      description:
        'Shadcn/ui is re-usable components built using Radix UI and Tailwind CSS.This is NOT a component library. It is a collection of re-usable components that you can copy and paste into your apps and style to your liking using tailwind',
    },
  ];

  const opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0.1, 0.2], [-20, 0]);
  return (
    <div ref={ref} className="mx-auto mt-40 flex max-w-5xl justify-center ">
      <motion.div style={{ opacity, x }} className="relative z-0 flex max-w-xl flex-col gap-4 text-gray-300">
        <h2 className="text-2xl font-bold text-gray-100">Technologies Used On Mintra:</h2>
        <p>
          Mintra was built using the following technologies. Click on the icons to learn more about each technology.
        </p>
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
                className="flex w-fit items-center gap-2 rounded-sm bg-gray-100 px-4 py-2 text-gray-900 duration-200 hover:scale-105 hover:bg-gray-700 active:scale-95 "
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
