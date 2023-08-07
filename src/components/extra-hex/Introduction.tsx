'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

type Props = {};

export default function Introduction({}: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const x = useTransform(scrollYProgress, [0.1, 0.4], [-60, 0]);
  return (
    <div ref={ref} className="mx-auto mt-40 flex max-w-5xl justify-center ">
      <motion.div style={{ opacity, x }} className="relative z-0 flex h-[80vh] w-1/2 max-w-md flex-col gap-4">
        <h2 className="text-2xl font-bold">Better UI/UX for the Hex Community</h2>
        <p>
          Extrahex.com is a user-centric alternative front end to hex.com, born out of a desire for enhanced user
          interface (UI) and user experience (UX).
        </p>
        <p>
          This platform serves as a superior one-stop solution for all your Hex-related needs, featuring two main
          components. The first is an exhaustive information hub, detailing everything you need to know about Hex, from
          basics to advanced insights. The second is a decentralized app (dApp) front end, facilitating direct
          interaction with the Hex contract on both Ethereum and Pulsechain. With its intuitive design and easy-to-use
          features, Extrahex.com makes engaging with Hex a seamless, enjoyable experience.
        </p>
      </motion.div>
    </div>
  );
}
