'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

import React, { useRef } from 'react';
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
                <source src="/holidaze-map.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
            <motion.div style={{ opacity: imageOpacity2 }}>
              <MapBox className="absolute right-0 top-[50%] hidden w-80 fill-black p-4 md:block" />
            </motion.div>
          </div>
          <motion.div style={{ opacity: textOpacity }} className="absolute left-0 max-w-lg flex-col gap-4 p-4">
            <motion.div style={{ opacity: imageOpacity2 }}>
              <MapBox className="block h-20 w-40 fill-black md:hidden" />
            </motion.div>
            <div className="text-xl font-bold text-gray-950">Use Mapbox to find your next holiday destination</div>
            <div className="mt-4 text-gray-800">
              The map is powered by Mapbox and is using the Mapbox GL JS library. The map is interactive and you can
              click on the markers to get more information about the Venues. The map is also using the Mapbox Geocoding
              API to search for locations. Using PostGIS and Supabase we can store the locations in the database and
              then query the database to get the locations.
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
