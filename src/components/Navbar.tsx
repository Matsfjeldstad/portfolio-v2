'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useNavColorStore } from './ProjectSection/Store';
import classNames from 'classnames';

type Props = {
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navIsOpen: boolean;
  navColor?: string;
};

export function HamburgerMenu({ setNavIsOpen, navIsOpen, navColor }: Props) {
  return (
    <motion.div
      onClick={() => setNavIsOpen(!navIsOpen)}
      className="group relative z-50 flex cursor-pointer flex-col items-center justify-center gap-1 "
    >
      <div className=" absolute z-10 h-0 w-0 rounded-full bg-pink-500 duration-150 group-hover:h-12 group-hover:w-12" />
      <motion.div
        {...(navIsOpen && { animate: { rotate: 45, margin: 0, y: 8 } })}
        className={classNames('z-20 h-1 w-7 rounded', `bg-${navColor}`)}
      ></motion.div>
      <motion.div
        {...(navIsOpen && { animate: { rotate: -45, margin: 0 } })}
        className={classNames('z-20 h-1 w-7 rounded', `bg-${navColor}`)}
      ></motion.div>
      <motion.div
        {...(navIsOpen && { animate: { rotate: -45, margin: 0, y: -8 } })}
        className={classNames('z-20 h-1 w-7 rounded', `bg-${navColor}`)}
      ></motion.div>
    </motion.div>
  );
}

const navLinks = [
  { name: 'Home', href: '/#hero', scrollId: 'hero' },
  { name: 'Projects', href: '/#projects', scrollId: 'projects' },
  { name: 'About me', href: '/#about', scrollId: 'about' },
  { name: 'Contact me', href: '/#contact', scrollId: 'contact' },
];

const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth' });
};

function NavLinks({ navIsOpen, setNavIsOpen }: Props) {
  return (
    <motion.div
      initial={{ height: 0 }}
      {...(navIsOpen && { animate: { height: '100vh' } })}
      className={`absolute right-0 top-0 z-40 w-screen gap-5 overflow-hidden  text-center text-5xl text-gray-100 `}
    >
      <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-5 bg-slate-950 bg-dotted-spacing-3 bg-dotted-gray-500/20  ">
        {navLinks.map((link) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, scale: 0.7 }}
            {...(navIsOpen && {
              animate: {
                opacity: 1,
                scale: 1,
                transition: {
                  delay: (0.1 * navLinks.indexOf(link)) / 2,
                },
              },
            })}
            className="even:mr-10  md:even:mr-36"
          >
            <div
              onClick={() => {
                setNavIsOpen(!navIsOpen);
                scrollToId(link.scrollId);
              }}
              className="text-4xl font-black uppercase text-gray-200 duration-150 hover:scale-105 hover:text-pink-500 sm:text-6xl md:text-7xl"
            >
              {link.name}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const navColor = useNavColorStore((state) => state.navColor);
  const setNavColorBasedOnCondition = useNavColorStore((state) => state.setNavColorBasedOnCondition);

  useEffect(() => {
    setNavColorBasedOnCondition(navIsOpen);
    console.log(navColor);
  }, [navIsOpen, setNavColorBasedOnCondition, navColor]);

  return (
    <div className="fixed left-0 top-0 z-10 w-full ">
      <motion.header
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between p-6 font-bold"
      >
        <Link href="/" className={classNames('z-50 text-2xl font-black', `text-${navColor}`)}>
          fjeldstad.
        </Link>
        <HamburgerMenu setNavIsOpen={setNavIsOpen} navIsOpen={navIsOpen} navColor={navColor} />
        <NavLinks navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      </motion.header>
    </div>
  );
}
