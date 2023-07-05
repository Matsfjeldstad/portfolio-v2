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

  const projects = [
    {
      title: 'ExtraHex.com',
      id: 'extrahex',
      card: ExtraHex,
    },
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
    {
      title: 'Ai Email Responder',
      id: 'ai-email-responder',
      card: EmailResponder,
    },
  ];

  return (
    <motion.section style={{ opacity }} ref={workSectionRef} className="mx-auto h-full max-w-4xl px-4">
      <motion.div className="mt-20 text-center text-4xl font-black uppercase">My Work</motion.div>
      <motion.div className="flex w-full items-start gap-20">
        <div className="w-full py-[50vh]">
          <motion.ul className=" text-gray-400">
            {projects.map((project) => (
              <motion.li key={project.id} className=" w-fit">
                <ProjectsTitle id={project.id}>{project.title}</ProjectsTitle>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-md bg-gray-900">
            {projects.map((project) => (
              <project.card id={project.id} key={project.id} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
