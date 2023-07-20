'use client';
import AboutMeSection from '@/components/AboutMeSection';
import ContactMeSection from '@/components/ContactMeSection';
import HeroBanner from '@/components/HeroBanner';
import WorkSection from '@/components/WorkSection';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative min-h-screen ">
      <HeroBanner />
      <WorkSection />
      <AboutMeSection />
      <ContactMeSection />
    </main>
  );
}
