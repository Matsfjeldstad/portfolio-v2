'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import goldeEggHero from '@/assets/the-golden-egg-hero.webp';
import Image from 'next/image';
import { MapBox } from '@/assets/Icons';

type Props = {};

export default function ImageSection({}: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const opacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const imageOpacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.4, 0.5], [0, 1, 1, 0]);

  return (
    <motion.div style={{ opacity }} ref={ref} className="mt-40 flex justify-center">
      <div className="flex h-[350vh] w-screen max-w-7xl justify-center overflow-x-clip">
        <div className="sticky inset-0 flex h-screen items-center justify-center">
          <div className=" relative w-full rounded-md md:h-[80vh] md:w-[80%]">
            <motion.div style={{ opacity: imageOpacity }} className="">
              <Image src={goldeEggHero} alt="extrahex.com" className="h-full w-full rounded-md object-cover" />
            </motion.div>
            <motion.div style={{ opacity: imageOpacity2 }}>
              <Image
                src="/Golden-Egg-Logo.png"
                width={800}
                height={800}
                alt="The Golden Egg logo"
                className="absolute right-0 top-[50%] hidden w-80 fill-black p-4 md:block"
              />
            </motion.div>
          </div>
          <motion.div style={{ opacity: textOpacity }} className="absolute left-0 flex max-w-lg flex-col gap-4">
            <motion.div style={{ opacity: imageOpacity2 }}>
              <Image
                src="/Golden-Egg-Logo.png"
                width={800}
                height={800}
                alt="The Golden Egg logo"
                className="w-[200px] md:hidden"
              />
            </motion.div>
            <div className="text-xl font-bold text-gray-100">Article on the project</div>
            <div className=" text-gray-400">
              Elisabeth Larsen wrote a article about the work on the project. You can read the article here:{' '}
              <a
                href="https://www.noroff.no/nyheter/nytt-fra-noroff/1795-studentene-har-laget-nettside-for-the-golden-egg-awards"
                target="_blank"
                className="text-blue-500"
              >
                https://www.noroff.no/nyheter/nytt-fra-noroff/1795-studentene-har-laget-nettside-for-the-golden-egg-awards
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
