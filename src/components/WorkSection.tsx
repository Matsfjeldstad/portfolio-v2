import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectsTitle from './ProjectSection/ProjectsTitle';
import { EmailResponder, ExtraHex, Holidaze, Mintra, TheGoldenEgg } from './ProjectSection/ProjectsCard';

type Props = {};

export default function WorkSection({}: Props) {
  const workSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: workSectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 0.85], [0, 1, 1, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0.25, 0.3], [0, 1]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 || pos <= 0 ? 'relative' : 'fixed';
  });

  const projects = [
    {
      title: 'Ai Email Generator',
      id: 'ai-email-responder',
      card: EmailResponder,
    },
    // {
    //   title: 'ExtraHex.com',
    //   id: 'extrahex',
    //   card: ExtraHex,
    // },
    {
      title: 'Holidaze',
      id: 'holidaze',
      card: Holidaze,
    },
    {
      title: 'The Golden Egg',
      id: 'golden-egg',
      card: TheGoldenEgg,
    },
    {
      title: 'Mintra',
      id: 'mintra',
      card: Mintra,
    },
  ];

  return (
    <motion.section style={{ opacity }} ref={workSectionRef} className="mx-auto h-full max-w-4xl text-gray-100">
      <motion.div className="mt-20 text-center text-4xl font-black uppercase">My Work</motion.div>
      <motion.div id="projects" className="flex w-full items-start gap-20 sm:p-4">
        <div className="invisible w-full py-[50vh] sm:visible">
          <motion.ul className=" text-gray-400">
            {projects.map((project) => (
              <motion.li key={project.id} className=" w-fit">
                <ProjectsTitle id={project.id}>{project.title}</ProjectsTitle>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.div
          style={{ opacity: cardOpacity }}
          className="sticky top-0 hidden h-screen w-full items-center p-4 sm:flex md:p-0"
        >
          <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-md bg-gray-900 sm:w-full">
            {projects.map((project) => (
              <project.card id={project.id} key={project.id} />
            ))}
          </div>
        </motion.div>
        <motion.div
          style={{ opacity: cardOpacity, position }}
          className="top-0 flex h-screen w-full items-center p-10 sm:hidden sm:p-0"
        >
          <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-md bg-gray-900 sm:w-full">
            {projects.map((project) => (
              <project.card id={project.id} key={project.id} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
