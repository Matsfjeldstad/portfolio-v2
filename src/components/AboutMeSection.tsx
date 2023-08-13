import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import ToolsAndSkills from './AboutMeSection/ToolsAndSkills';

type Props = {};

export default function AboutMeSection({}: Props) {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: aboutMeRef,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: textSectionProgress } = useScroll({
    target: textRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.25, 0.8, 0.95], [0, 1, 1, 0]);

  const gradientOpacity = useTransform(textSectionProgress, [0.35, 0.5], [0, 0.5]);

  const textOpacity = useTransform(textSectionProgress, [0.2, 0.24], [0, 1]);
  const textOpacity2 = useTransform(textSectionProgress, [0.28, 0.4, 0.8, 1], [0, 1, 1, 0]);
  const textX = useTransform(textSectionProgress, [0.2, 0.3, 0.8, 1], [-60, 0, 0, -60]);
  const textX2 = useTransform(textSectionProgress, [0.28, 0.4, 0.8, 1], [-60, 0, 0, -60]);
  const imageX = useTransform(textSectionProgress, [0.1, 0.2, 0.8, 0.95], [180, 0, 0, 180]);
  const imageRotation = useTransform(textSectionProgress, [0.1, 0.2, 0.8, 0.95], [10, 0, 0, 10]);
  const imageOpacity = useTransform(textSectionProgress, [0.1, 0.2, 0.8, 0.95], [0, 1, 1, 0]);

  return (
    <motion.section id="about" style={{ opacity }} ref={aboutMeRef} className="relative h-full w-full">
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="pointer-events-none fixed inset-0 z-0 h-full w-full bg-[radial-gradient(circle_farthest-side_at_100px_300px,_#B12E82_0%,_transparent_40%)]"
      />
      <div className="relative z-10 mx-auto max-w-4xl p-6">
        {/* <div className="h-[150vh]">
          <motion.h1
            style={{ opacity: headingOpacity }}
            className="sticky top-0 flex h-screen items-center text-center text-6xl font-bold uppercase text-gray-200"
          >
            So, who am I?
          </motion.h1>
        </div> */}
        <div className="sticky left-0 top-0 h-[150px] w-full items-center overflow-hidden sm:flex"></div>
        <motion.div ref={textRef} className="flex h-full w-full items-start gap-20">
          <motion.div className="w-full py-[20vh] md:py-[50vh]">
            <motion.div
              style={{ opacity: textOpacity, x: textX }}
              className="my-[80px] text-2xl font-bold text-gray-200"
            >
              I&apos;m a 25 year old <span className="text-pink-500">front end developer</span> from Norway
            </motion.div>
            <motion.div
              style={{ opacity: textOpacity2, x: textX2 }}
              className="text mb-6 max-w-xl text-lg text-gray-200"
            >
              I have more than 2 years of practical experience in <span className="font-bold">JavaScript</span>,{' '}
              <span className="font-bold">CSS</span>, and <span className="font-bold">HTML</span> under my belt, that I
              leverage these tools to bring web designs to life.
            </motion.div>
            <motion.div
              style={{ opacity: textOpacity2, x: textX2 }}
              className="text mb-6 max-w-xl text-lg text-gray-200"
            >
              My capabilities are not just limited to coding. I am equally adept at design and prototyping, having honed
              my skills in tools like Photoshop, Figma, and Adobe XD. The combination of technical expertise with a keen
              understanding of creative design principles allows me to deliver the best UX outcomes.
            </motion.div>
            <motion.div
              style={{ opacity: textOpacity2, x: textX2 }}
              className="text mb-6 max-w-xl text-lg text-gray-200"
            >
              I have more than 2 years of practical experience in <span className="font-bold">JavaScript</span>,{' '}
              <span className="font-bold">CSS</span>, and <span className="font-bold">HTML</span> under my belt, that I
              leverage these tools to bring web designs to life.
            </motion.div>
          </motion.div>
          <div className="sticky top-0 hidden w-full items-center overflow-hidden md:flex md:h-[100vh]">
            <motion.div
              style={{ opacity: imageOpacity, x: imageX, rotateZ: imageRotation }}
              className="absolute aspect-square w-full rounded-md bg-gradient-to-r from-gray-700 to-gray-950 "
            >
              <div className="pointer-events-none absolute inset-0 z-50 h-full w-full bg-noise opacity-50" />
              <Image src="/nisse-blank.png" width={500} height={500} alt="picture of me" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="relative z-10 mx-auto max-w-4xl">
        <ToolsAndSkills className="h-screen" />
      </div>
    </motion.section>
  );
}
