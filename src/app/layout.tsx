'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import PageLoadingAnimation from '../components/PageLoadingAnimation';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mats Fjeldstad',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full min-h-screen h-full bg-gradient-to-r from-gray-200 to-gray-400">
          <div className="h-full min-h-screen w-full bg-dotted-spacing-3 bg-dotted-gray-400/50">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div className="bg-none" key="loading">
                  <PageLoadingAnimation setLoading={setLoading} />
                </motion.div>
              ) : (
                <>
                  <Navbar />
                  <motion.div key="loaded">{children}</motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </body>
    </html>
  );
}