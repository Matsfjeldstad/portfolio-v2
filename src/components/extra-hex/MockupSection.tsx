'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

type Props = {};

export default function MockupSection({}: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.55], [0, 1, 1, 0]);
  const textOpacity2 = useTransform(scrollYProgress, [0.55, 0.6, 0.8, 0.85], [0, 1, 1, 0]);

  const gradientOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.6], [0, 0.7, 0.7, 0]);
  const gradientOpacity2 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [0, 0.3, 0.3, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.5, 0.6], [0, 1, 1, 0]);
  const imgOpacity2 = useTransform(scrollYProgress, [0.6, 0.7, 0.9, 1], [0, 1, 1, 0]);

  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 || pos <= 0 ? 'relative' : 'fixed';
  });

  return (
    <div ref={ref} className="mx-auto mt-20 flex max-w-5xl justify-center">
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="pointer-events-none fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(at_center,_#B12E82_0%,_transparent_60%)] "
      />
      <motion.div
        style={{ opacity: gradientOpacity2 }}
        className="pointer-events-none fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(at_center,_#00A3FF_10%,_transparent_60%)] "
      />
      <motion.div style={{ position }} className="top-20 z-0 flex w-screen justify-center">
        <motion.h2 style={{ opacity: textOpacity }} className="absolute text-2xl font-bold">
          From This
        </motion.h2>
        <motion.h2 style={{ opacity: textOpacity2 }} className="absolute text-2xl font-bold">
          To This
        </motion.h2>
      </motion.div>
      <div className="flex h-[300vh] justify-center">
        <div className="sticky top-0 flex h-screen w-fit items-center overflow-hidden">
          <div className="relative">
            <Image
              height={1200}
              width={1200}
              src="/macbook-mokup.png"
              className="relative z-20"
              alt="Image of the website extrahex.com "
            />
            <motion.div
              style={{ opacity: imgOpacity }}
              className="absolute left-[17.5%] top-[25%] z-10 h-[65%] w-[65%] overflow-hidden"
            >
              <div className="h-[78%] w-full overflow-hidden">
                <Image
                  height={1000}
                  width={1000}
                  src="/hex-original-page.png"
                  className="w-full object-contain object-top"
                  alt="Image of the website extrahex.com "
                />
              </div>
            </motion.div>
            <motion.div
              style={{ opacity: imgOpacity2 }}
              className="absolute left-[17.5%] top-[25%] z-10 h-[65%] w-[65%] overflow-hidden"
            >
              <div className="h-[78%] w-full overflow-hidden">
                <Image
                  height={1000}
                  width={1000}
                  src="/extrahex-home-dark.jpg"
                  className=" h-full w-full object-cover object-top"
                  alt="Image of the website extrahex.com "
                />
              </div>
            </motion.div>
            <motion.div className="absolute left-[17.5%] top-[20%] z-0 h-[65%] w-[65%] overflow-hidden bg-gray-950 " />
          </div>
        </div>
      </div>
    </div>
  );
}
