'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

import React, { useRef } from 'react';
import { ChatGPT, MapBox } from '@/assets/Icons';

type Props = {};

export default function ImageSection({}: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const opacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const imageOpacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.4, 0.5], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0.4, 0.55], ['50%', '0%']);
  const scale = useTransform(scrollYProgress, [0.4, 0.55], [1.4, 1]);

  return (
    <motion.div style={{ opacity }} ref={ref} className="mt-40 flex justify-center">
      <div className="flex h-[350vh] w-screen justify-center overflow-x-clip">
        <div className="sticky inset-0 flex h-screen items-center justify-center p-4">
          <div className=" relative w-full rounded-md md:w-[80%]">
            <motion.div style={{ opacity: imageOpacity }} className="">
              <video
                autoPlay
                muted
                loop
                // controls
                // alt="extrahex.com"
                className="h-full w-full rounded-md object-cover object-left-top"
              >
                <source src="/kvikk.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
            <motion.div style={{ opacity: imageOpacity2 }}>
              <ChatGPT className="absolute right-0 top-[50%] hidden h-40 w-40 fill-gray-200 p-4 md:block" />
            </motion.div>
          </div>
          <motion.div style={{ opacity: textOpacity }} className="absolute left-0 max-w-lg flex-col gap-4 p-4">
            <motion.div style={{ opacity: imageOpacity2 }}>
              <ChatGPT className="block h-10 w-10 fill-gray-200  md:hidden" />
            </motion.div>
            <div className="text-xl font-bold text-gray-100">Powered by OpenAIs GPT model</div>
            <div className="mt-4 text-gray-400">
              The App is powered by OpenAIs GPT model, which is a powerful AI tool that can generate text based on a
              prompt. This is the same model that was used in the ChatGPT website.
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
