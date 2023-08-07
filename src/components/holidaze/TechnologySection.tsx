'use client';
import { FramerMotion, MapBox, NextJs, ReactJs, Redux, Supabase, TailwindCSS, TypeScript } from '@/assets/Icons';
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

  const iconClasses = 'h-8 w-8 fill-gray-100';

  const techStack: Tech[] = [
    {
      name: 'React JS',
      icon: <ReactJs className={iconClasses} />,
      href: 'https://reactjs.org/',
      description:
        'React, a JavaScript library known for its efficiency and flexibility, was the cornerstone of our application.',
    },
    {
      name: 'Supabase',
      icon: <Supabase className={iconClasses} />,
      href: 'https://www.supabase.com/',
      description:
        'Supabase is an open-source Firebase alternative. It is a cloud-based service that provides a suite of tools for building applications. It is built on top of PostgreSQL and provides a variety of features, including authentication, database management, and real-time subscriptions. Supabase was used to store user and venue data and manage authentication on the platform.',
    },
    {
      name: 'Redux',
      icon: <Redux className={iconClasses} />,
      href: 'https://redux.js.org/',
      description:
        'Redux was used to manage the global states of the application aswell as using Redux Tool Kit Query to fetch and cache the data and validate auth from our supabase database',
    },
    {
      name: 'TailwindCSS',
      icon: <TailwindCSS className={iconClasses} />,
      href: 'https://tailwindcss.com/',
      description:
        'TailwindCSS, a utility-first CSS framework, was used to style the platform. It allowed me to quickly build a responsive and visually appealing user interface.',
    },
    {
      name: 'Framer Motion',
      icon: <FramerMotion className={iconClasses} />,
      href: 'https://www.framer.com/motion/',
      description:
        'To elevate the aesthetic appeal and user engagement of the platform, particularly on the landing page, Framer Motion was employed. This powerful and easy-to-use tool for animations and interactions enabled the creation of a visually stunning.',
    },
    {
      name: 'MapBox',
      icon: <MapBox className={iconClasses} />,
      href: 'https://mapbox.com/',
      description:
        'To display the venues on the map we used MapBox. MapBox is a mapping platform for developers. Our map was built using MapBox GL JS, a JavaScript library for interactive, customizable vector maps on the web. It allowed us to create a map that is fully customizable and responsive. This used with PostGIS data for the venues stored on our Supabase database, I made interactive map that fetch on map move. This way i could display Venues for the current map view and not all the venues at once. This was done to improve performance and reduce the amount of data fetched from the database',
    },
  ];

  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const x = useTransform(scrollYProgress, [0.1, 0.2], [-20, 0]);
  return (
    <div ref={ref} className="mx-auto mt-40 flex max-w-5xl justify-center ">
      <motion.div style={{ opacity, x }} className="relative z-0 flex max-w-md flex-col gap-4 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-950">Technologies Used On Holidaze:</h2>
        <p>
          The Holidaze project was built using the following technologies. Click on the icons to learn more about each
          technology.
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
                className="flex w-fit items-center gap-2 rounded-sm bg-gray-800 px-4 py-2 text-gray-100 duration-200 hover:scale-105 hover:bg-gray-700 active:scale-95 "
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
