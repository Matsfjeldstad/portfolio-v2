'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import mintraAutionPage from '@/assets/mintra-auction-long.png';

import React, { useRef } from 'react';

type Props = {};

export default function MockupSection({}: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const imgOpacity2 = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [0, 1, 1, 0]);
  const gradientOpacity2 = useTransform(scrollYProgress, [0.15, 0.17, 0.7, 0.9], [0, 0.4, 0.4, 0]);

  const ImageY = useTransform(scrollYProgress, [0.2, 1], [0, -600]);
  const rotate = useTransform(scrollYProgress, [0.1, 1], [0, -10]);

  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 || pos <= 0 ? 'relative' : 'fixed';
  });

  return (
    <div ref={ref} className="mx-auto mt-20 flex max-w-5xl justify-center text-gray-950">
      <div className="flex h-[500vh] justify-center">
        <div className="sticky top-0 flex h-screen w-fit items-center overflow-hidden">
          <motion.div
            style={{ opacity: gradientOpacity2 }}
            className="pointer-events-none fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(circle_at_center,_#00A3FF_0%,_transparent_50%)] "
          />
          <motion.div style={{ rotate }} className="relative">
            <Image
              height={1200}
              width={1200}
              src="/macbook-mokup.png"
              className="relative z-20"
              alt="Image of the website extrahex.com "
            />
            <motion.div
              style={{ opacity: imgOpacity2 }}
              className="absolute left-[19%] top-[25%] z-10 h-[65%] w-[62%] overflow-hidden"
            >
              <div className="h-[80%] overflow-hidden">
                <motion.div style={{ y: ImageY }}>
                  <Image
                    height={1000}
                    width={1000}
                    src={mintraAutionPage}
                    className="w-full object-top"
                    alt="Image of the website extrahex.com "
                  />
                </motion.div>
              </div>
            </motion.div>
            <motion.div className="absolute left-[17.5%] top-[22%] z-0 h-[55%] w-[65%] overflow-hidden bg-gray-950 " />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
