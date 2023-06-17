import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

export function HamburgerMenu() {
  return (
    <div className="flex flex-col gap-1">
      <div className="w-7 h-1 rounded bg-gray-900"></div>
      <div className="w-7 h-1 rounded bg-gray-900"></div>
      <div className="w-7 h-1 rounded bg-gray-900"></div>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="fixed w-screen">
      <motion.header
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className="font-bold p-4 w-full mx-auto max-w-[1400px] items-center flex justify-between h-20px"
      >
        <Link href="/" className="font-black text-2xl text-gray-900">
          fjeldstad.
        </Link>
        <HamburgerMenu />
      </motion.header>
    </div>
  );
}
