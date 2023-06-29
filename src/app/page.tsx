'use client';
import HeroBanner from '@/components/HeroBanner';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen relative ">
      <HeroBanner />
      <div className="pt-20 h-[300vh]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } }}
          className="text-3xl ml-2 mx-auto max-w-[1400px] text-gray-100 font-bold pb-20 "
        >
          My Work
        </motion.h2>
      </div>
    </main>
  );
}
