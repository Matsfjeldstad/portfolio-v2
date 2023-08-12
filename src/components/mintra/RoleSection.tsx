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
        className="relative z-0 flex min-h-[80vh] max-w-xl flex-col gap-8 p-6 text-gray-700"
      >
        <h2 className="text-2xl font-bold text-gray-950">My Role On the Project:</h2>
        <p>
          In the development of Mintra, I wore several hats, each offering its distinct set of challenges and learning
          curves. Primarily, I acted as the Frontend Developer and UI/UX Designer.
        </p>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-800">Frontend Development</h3>
          <p>
            As the Frontend Developer for Mintra, my task was to breathe life into its design and interface. My goal was
            to deliver an interactive and adaptive user experience. Leveraging the power of HTML, CSS (Tailwind), and
            JavaScript, compiled effectively with Vite, I crafted an interface that not only aesthetically appealed but
            also ensured smooth interaction with the shared backend powered by the API from Noroff School of Technology
            and Digital Media.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-800"> UI/UX Design </h3>
          <p>
            Stepping into the shoes of a UI/UX Designer, I aimed to ensure that Mintra was more than just a functional
            site - it needed to be intuitive, striking, and user-centric. For this, I utilized Figma to design the
            site&apos;s UI and UX, placing a keen emphasis on user-friendliness. Every design decision was made with the
            end-user in mind. However, design is an ever-evolving process. Currently, I am in the midst of refining the
            design elements of Mintra, following valuable insights and a design system proposed by Johnny Vo, a talented
            UX Design student at Noroff. Interested in seeing his take? Check out his case on the{' '}
            <a
              href="https://johnnyvo.no/work/design-system-for-mintra/"
              className="font-medium text-gray-950 underline"
            >
              design system for Mintra.
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
