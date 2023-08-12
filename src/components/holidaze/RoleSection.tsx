'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

type Props = {};

export default function RoleSection({}: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const x = useTransform(scrollYProgress, [0.1, 0.2], [-60, 0]);
  return (
    <div ref={ref} className="mx-auto mt-40 flex max-w-5xl justify-center ">
      <motion.div
        style={{ opacity, x }}
        className="relative z-0 flex min-h-[80vh] max-w-md flex-col gap-8 text-gray-700"
      >
        <h2 className="text-2xl font-bold text-gray-950">My Role On the Project:</h2>
        <p>
          In the development of Holidaze, I embraced multiple roles, each presenting a unique set of challenges and
          opportunities for growth. My involvement was twofold: as the Frontend Developer and UI/UX Designer, and as the
          architect of the project&apos;s backend/database system.
        </p>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-800">Frontend Development</h3>
          <p>
            As the Frontend Developer, I was responsible for bringing the design and interface of Holidaze to life. I
            focused on ensuring an interactive and responsive experience for our users. Using technologies like HTML5,
            CSS3, and JavaScript, along with the React framework, I built an interface that seamlessly integrated with
            the backend services while providing a smooth and engaging user journey.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-800"> UI/UX Design </h3>
          <p>
            In the capacity of the UI/UX Designer, my role was to make certain that Holidaze was not just functional,
            but also intuitive and visually appealing. I created a user-friendly design that prioritizes usability and
            accessibility in Figma. The design elements and user journey were meticulously crafted to cater to the needs
            of both venue seekers and providers, encouraging user engagement and fostering trust in our platform.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-800">Backend and Database Management</h3>
          <p>
            To further enhance the robustness of Holidaze, I also undertook the task of setting up the backend/database
            using Supabase, a modern and scalable platform for rapid application development.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
