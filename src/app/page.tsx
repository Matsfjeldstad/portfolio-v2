'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      <motion.div className="flex flex-col gap-3 h-screen items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-lg font-bold text-gray-700 text-center"
        >
          Hello, I&apos;m
        </motion.div>
        <motion.h1
          className="text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-tr from-gray-900 to-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Mats Fjeldstad
        </motion.h1>
        <motion.h2
          className="text-2xl font-bold text-center text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          I am a front-end developer
        </motion.h2>
      </motion.div>
      <div className="pt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } }}
          className="text-3xl ml-2 mx-auto max-w-[1400px] text-gray-800 font-bold pb-20 "
        >
          My Work
        </motion.h2>
        <div className="bg-gray-900 h-[500px] w-full p-4">
          <div className="font-bold text-3xl text-red-600">Holidaze</div>
        </div>
        <div className="bg-gray-900 h-[500px] w-full p-4">
          <div className="font-bold text-3xl text-red-600">Holidaze</div>
        </div>
        <div className="bg-gray-900 h-[500px] w-full p-4">
          <div className="font-bold text-3xl text-red-600">Holidaze</div>
        </div>
        <div className="bg-gray-900 h-[500px] w-full p-4">
          <div className="font-bold text-3xl text-red-600">Holidaze</div>
        </div>
      </div>
    </main>
  );
}
