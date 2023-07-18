import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { EmailIcon } from '@/assets/Icons';
import { Github, LinkedIn } from '@/assets/Logos';

type Props = {};

export default function ContactMeSection({}: Props) {
  const contactMeRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contactMeRef,
    offset: ['start end', 'end start'],
  });

  const imageRotation = useTransform(scrollYProgress, [0.15, 0.6, 0.8, 0.95], [-60, 0, 0, 10]);
  const x = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 0.95], [-60, 0, 0, 10]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);

  return (
    <div ref={contactMeRef} className="mt-10 min-h-screen overflow-hidden p-4">
      <div className="h-[60vh]">
        <motion.div style={{ rotateZ: imageRotation, x, opacity }} className="w-full origin-bottom-right">
          <Image
            src="/close-up-hand-holding-cup.png"
            alt="hand holding cup"
            width={500}
            height={500}
            className="pointer-events-none absolute right-0 w-full md:w-1/2"
          />
        </motion.div>
        <div className="mt-20 flex h-full w-full justify-center">
          <h2 className="relative text-center text-4xl font-bold">Want to grab a cup of coffee?</h2>
        </div>
      </div>
      <div className="mx-auto flex h-screen w-full max-w-xl flex-col items-center justify-center gap-20 text-center">
        <div className="flex flex-col gap-2">
          <h4 className="relative text-3xl font-bold">Let's talk about your next project.</h4>
          <p className="text-gray-400">
            I would love to hear from you if you are intrested in a creative and design focused developer
          </p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="flex items-center gap-2 border-b">
            <EmailIcon fill="white" className="w-4" />
            <a className=" ">Send me an E-mail at mats.fjeldstad@outlook.com</a>
          </div>
          <p>or</p>
          <div className="flex items-center gap-2 border-b">
            <LinkedIn fill="white" className="h-4 w-4" />
            <a className=" ">Check me out on LinkedIn</a>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-start">
          <div className="flex items-center gap-2 border-b">
            <Github fill="white" className="w-4" />
            <a className=" ">If you want to check out my code, head over to my Github</a>
          </div>
        </div>
        <a className="w-fit" href="/CV-Mats-Fjeldstad.pdf" download>
          <button className="rounded border px-4 py-2 duration-150 hover:bg-white/10">Download CV</button>
        </a>
      </div>
    </div>
  );
}
