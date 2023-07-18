import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navIsOpen: boolean;
};

export function HamburgerMenu({ setNavIsOpen, navIsOpen }: Props) {
  return (
    <motion.div onClick={() => setNavIsOpen(!navIsOpen)} className="z-50 flex flex-col gap-1">
      <motion.div
        {...(navIsOpen && { animate: { rotate: 45, margin: 0, y: 8 } })}
        className="h-1 w-7 rounded bg-gray-100"
      ></motion.div>
      <motion.div
        {...(navIsOpen && { animate: { rotate: -45, margin: 0 } })}
        className="h-1 w-7 rounded bg-gray-100"
      ></motion.div>
      <motion.div
        {...(navIsOpen && { animate: { rotate: -45, margin: 0, y: -8 } })}
        className="h-1 w-7 rounded bg-gray-100"
      ></motion.div>
    </motion.div>
  );
}

function NavLinks({ navIsOpen }: Props) {
  return (
    <motion.div
      initial={{ height: 0 }}
      {...(navIsOpen && { animate: { height: '100vh' } })}
      className={`absolute left-0 top-0 z-40 flex w-screen flex-col items-center justify-center gap-5 overflow-hidden bg-gray-950  text-5xl text-gray-100`}
    >
      <Link href="/about" className="">
        About
      </Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </motion.div>
  );
}

export default function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <div className="fixed z-10 w-screen px-6">
      <motion.header
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between p-4 font-bold"
      >
        <Link href="/" className="z-50 text-2xl font-black text-gray-100">
          fjeldstad.
        </Link>
        <HamburgerMenu setNavIsOpen={setNavIsOpen} navIsOpen={navIsOpen} />
        <NavLinks navIsOpen={navIsOpen} />
      </motion.header>
    </div>
  );
}
