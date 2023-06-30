'use client';
import HeroBanner from '@/components/HeroBanner';
import WorkSection from '@/components/WorkSection';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen relative ">
      <HeroBanner />
      <WorkSection />
    </main>
  );
}
