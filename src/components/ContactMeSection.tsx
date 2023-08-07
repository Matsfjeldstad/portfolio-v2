import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { EmailIcon } from '@/assets/Icons';
import { Github, LinkedIn } from '@/assets/Logos';

type Props = {};

export default function ContactMeSection({}: Props) {
  const contactMeRef = useRef(null);
  const linkSectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contactMeRef,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: linkYProgress } = useScroll({
    target: linkSectionRef,
    offset: ['start end', 'end start'],
  });

  const imageRotation = useTransform(scrollYProgress, [0.15, 0.5, 0.8, 0.95], [-40, 0, 5, 10]);
  const x = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 0.95], [60, 60, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);

  const opacity2 = useTransform(linkYProgress, [0.35, 0.5], [0, 0.5]);

  return (
    <div
      id="contact"
      ref={contactMeRef}
      className="mt-10 min-h-screen snap-start scroll-mt-[500px] overflow-hidden p-4"
    >
      <div className="relative h-[60vh]">
        <motion.div style={{ rotateZ: imageRotation, x }} className="w-full origin-bottom-right">
          <Image
            src="/close-up-hand-holding-cup.png"
            alt="hand holding cup"
            width={500}
            height={500}
            className="pointer-events-none absolute right-0 w-full md:w-1/2"
          />
        </motion.div>
        <motion.div style={{ opacity }} className="mt-20 flex h-full w-full flex-col items-center gap-6">
          <h2 className="relative max-w-4xl text-center text-4xl font-bold capitalize [text-warp:balance] md:text-4xl">
            Let&apos;s grab <br />a cup of coffee
          </h2>
          <h2 className="relative max-w-lg text-center text-xl capitalize md:text-gray-400">
            The Best Things in Life are Free, Like This Coffee for Our Meeting
          </h2>
        </motion.div>
      </div>
      <div
        ref={linkSectionRef}
        className="mx-auto flex h-screen w-full max-w-xl flex-col items-center justify-center gap-20 text-center"
      >
        <motion.div
          style={{ opacity: opacity2 }}
          className="pointer-events-none fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(at_top_left,_#B12E82_0%,_transparent_50%)]"
        />
        <motion.div
          style={{ opacity: opacity2 }}
          className="pointer-events-none fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(at_bottom_right,_#B12E82_0%,_transparent_50%)]"
        />
        <div className="flex flex-col gap-2">
          <h4 className="relative text-4xl font-bold">
            Let&apos;s talk about <br /> your next project.
          </h4>
          <p className="text-gray-400">
            I would love to hear from you if you are intrested in a creative and design focused developer
          </p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <a
            href="mailto: mats.fjeldstad@outlook.com?subject=Lets have a chat, Mats"
            className="flex items-center gap-2 border-b"
          >
            <EmailIcon fill="white" className="w-4" />
            <div className=" ">Send me an E-mail at mats.fjeldstad@outlook.com</div>
          </a>
          <p>or</p>
          <a
            href="https://www.linkedin.com/in/mats-fjeldstad-574817160/"
            target="_blank"
            className="flex items-center gap-2 border-b"
          >
            <LinkedIn fill="white" className="h-4 w-4" />
            <a className=" ">Check me out on LinkedIn</a>
          </a>
        </div>
        <div className=" flex flex-col items-center justify-start gap-6">
          <div className="flex items-center gap-2 border-b">
            <Github fill="white" className="h-4 w-4" />
            <a className=" "> Github</a>
          </div>
          {/* <a href="/CV-Mats-Fjeldstad.pdf" download>
            <button className=" cursor-pointer rounded border px-4 py-2 duration-150 hover:bg-white/10">
              Download CV
            </button>
          </a> */}
        </div>
      </div>
    </div>
  );
}
