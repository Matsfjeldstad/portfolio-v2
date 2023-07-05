import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

type Props = {};

export default function AboutMeSection({}: Props) {
  const aboutMeRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: aboutMeRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

  const gradientOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 0.5]);

  const headingOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  const textOpacity2 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const imageX = useTransform(scrollYProgress, [0.38, 0.45], [50, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  return (
    <motion.section style={{ opacity }} ref={aboutMeRef} className="relative h-full min-h-[200vh] w-full  py-20">
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="pointer-events-none fixed inset-0 z-0 h-full w-full bg-[radial-gradient(circle_farthest-side_at_100px_300px,_#B12E82_0%,_transparent_40%)]"
      ></motion.div>
      <div className="mx-auto max-w-4xl p-4">
        <div className="h-[150vh]">
          <motion.h1
            style={{ opacity: headingOpacity }}
            className="sticky top-0 flex h-screen items-center text-center text-6xl font-bold uppercase text-gray-200"
          >
            So, who am I?
          </motion.h1>
        </div>
        <motion.div className="flex h-full w-full items-start gap-20">
          <motion.div className="w-full py-[50vh]">
            <motion.div style={{ opacity: textOpacity }} className="my-[80px] text-2xl font-bold text-gray-200">
              I&apos;m a 25 year old <span className="text-pink-500">front end developer</span> from Norway
            </motion.div>
            <motion.div style={{ opacity: textOpacity2 }} className="text mb-6 max-w-xl text-lg text-gray-200">
              I have more than 2 years of practical experience in <span className="font-bold">JavaScript</span>,{' '}
              <span className="font-bold">CSS</span>, and <span className="font-bold">HTML</span> under my belt, that I
              leverage these tools to bring web designs to life.
            </motion.div>
            <motion.div style={{ opacity: textOpacity2 }} className="text mb-6 max-w-xl text-lg text-gray-200">
              My capabilities are not just limited to coding. I am equally adept at design and prototyping, having honed
              my skills in tools like Photoshop, Figma, and Adobe XD. The combination of technical expertise with a keen
              understanding of creative design principles allows me to deliver the best UX outcomes.
            </motion.div>
            <motion.div style={{ opacity: textOpacity2 }} className="text mb-6 max-w-xl text-lg text-gray-200">
              My capabilities are not just limited to coding. I am equally adept at design and prototyping, having honed
              my skills in tools like Photoshop, Figma, and Adobe XD. The combination of technical expertise with a keen
              understanding of creative design principles allows me to deliver the best UX outcomes.
            </motion.div>
            <motion.div style={{ opacity: textOpacity2 }} className="text mb-6 max-w-xl text-lg text-gray-200">
              My capabilities are not just limited to coding. I am equally adept at design and prototyping, having honed
              my skills in tools like Photoshop, Figma, and Adobe XD. The combination of technical expertise with a keen
              understanding of creative design principles allows me to deliver the best UX outcomes.
            </motion.div>
            <motion.div style={{ opacity: textOpacity2 }} className="text mb-6 max-w-xl text-lg text-gray-200">
              I have more than 2 years of practical experience in <span className="font-bold">JavaScript</span>,{' '}
              <span className="font-bold">CSS</span>, and <span className="font-bold">HTML</span> under my belt, that I
              leverage these tools to bring web designs to life.
            </motion.div>
          </motion.div>
          <div className="sticky top-0 flex h-[100vh] w-full items-center">
            <motion.div
              style={{ opacity: imageOpacity, x: imageX }}
              className="relative aspect-square w-full rounded-md bg-gradient-to-r from-gray-700 to-gray-950 "
            >
              <Image src="/nisse-blank.png" width={500} height={500} alt="picture of me" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
