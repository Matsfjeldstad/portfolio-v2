'use client';
import AboutMeSection from '@/components/AboutMeSection';
import ContactMeSection from '@/components/ContactMeSection';
import HeroBanner from '@/components/HeroBanner';
import PageLoadingAnimation from '@/components/PageLoadingAnimation';
import { useNavColorStore } from '@/components/ProjectSection/Store';
import WorkSection from '@/components/WorkSection';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const setPrevNavColor = useNavColorStore((state) => state.setPrevNavColor);
  const setNavColor = useNavColorStore((state) => state.setNavColor);
  useEffect(() => {
    setNavColor('gray-100');
    setPrevNavColor('gray-100');
  }, [setNavColor, setPrevNavColor]);
  return (

    <main className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div className="bg-none" key="loading">
            <PageLoadingAnimation setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <HeroBanner />
            <WorkSection />
            <AboutMeSection />
            <ContactMeSection />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
