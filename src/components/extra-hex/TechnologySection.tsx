'use client';
import { FramerMotion, NextJs, TailwindCSS, TypeScript } from '@/assets/Icons';
import { Viem, Wagmi } from '@/assets/Logos';
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

  const techStack: Tech[] = [
    {
      name: 'Next.js',
      icon: <NextJs className="h-6 w-6 fill-gray-900" />,
      href: 'https://nextjs.org/',
      description:
        'React, a JavaScript library known for its efficiency and flexibility, was the cornerstone of our application. We coupled it with Next.js, a powerful React framework, which enabled server-side rendering and generated static websites for better performance and SEO.',
    },
    {
      name: 'TypeScript',
      icon: <TypeScript className="h-6 w-6 fill-gray-900" />,
      href: 'https://www.typescriptlang.org/',
      description:
        'Recognizing the importance of type safety in reducing errors and enhancing code quality, TypeScript was used in the development of the platform. TypeScript, a superset of JavaScript, allows static types to be added to our code, enabling the detection of potential problems during the coding phase rather than during runtime. This greatly increases the reliability and maintainability of the codebase.',
    },
    {
      name: 'Viem',
      icon: <Viem className="h-6 w-6 fill-gray-900" />,
      href: 'https://viem.sh/',
      description:
        'Viem is a lightweight, composable, and type-safe library that provides modules for interfacing with Ethereum. Comparable to ethers or web3js, Viem streamlines the process of integrating Ethereum blockchain functionalities into applications. Its key features include compatibility with modern JavaScript libraries and frameworks, robust type safety offered through TypeScript, and a modular structure that allows developers to pick and choose the specific functionalities they need. This makes Viem an excellent choice for developers looking for a versatile, efficient, and reliable way to work with Ethereum in their projects.',
    },
    {
      name: 'Wagmi',
      icon: <Wagmi className="h-6 w-6 fill-gray-900" />,
      href: 'https://wagmi.sh/',
      description:
        'Wagmi was another key component in the tech stack. It is a collection of React Hooks specifically designed for Ethereum development. Built on top of Viem, Wagmi provides lightweight, composable, and type-safe modules that interface with Ethereum and Pulsechain. It simplified the interaction with Ethereum and Pulsechain and ensured our dApp’s seamless functionality.',
    },
    {
      name: 'Framer Motion',
      icon: <FramerMotion className="h-6 w-6 fill-gray-900" />,
      href: 'https://www.framer.com/motion/',
      description:
        'To elevate the aesthetic appeal and user engagement of the platform, particularly on the landing page, Framer Motion was employed. This powerful and easy-to-use tool for animations and interactions enabled the creation of a visually stunning and dynamic landing page.',
    },
    {
      name: 'TailwindCSS',
      icon: <TailwindCSS className="h-6 w-6 fill-gray-900" />,
      href: 'https://tailwindcss.com/',
      description:
        'TailwindCSS, a utility-first CSS framework, was used to style the platform. It allowed me to quickly build a responsive and visually appealing user interface.',
    },
  ];

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const x = useTransform(scrollYProgress, [0.1, 0.4], [-60, 0]);
  return (
    <div ref={ref} className="mx-auto mt-40 flex max-w-5xl justify-center ">
      <motion.div style={{ opacity, x }} className="relative z-0 flex max-w-md flex-col gap-4 text-gray-400">
        <h2 className="text-2xl font-bold text-gray-100">Technologies Used On Extrahex.com:</h2>
        <p>
          The development and design of Extrahex.com was achieved through the use of cutting-edge technologies and
          modern frameworks, selected for their robust capabilities and to provide an optimized user experience.
        </p>
        <ul className="mt-10 flex flex-col items-center gap-10 overflow-hidden">
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
                className="flex w-fit items-center gap-2 rounded-sm bg-gray-200 px-4 py-2 text-gray-900 duration-200 hover:scale-105 hover:bg-gray-300 active:scale-95 "
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
