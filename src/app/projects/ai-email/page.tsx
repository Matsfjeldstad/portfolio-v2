'use client';
import React, { useEffect } from 'react';
import HeroBanner from '@/components/ai-email/HeroBanner';
import ImageSection from '@/components/ai-email/ImageSection';
import Introduction from '@/components/ai-email/Introduction';
import MockupSection from '@/components/ai-email/MockupSection';
import ProjectDescription from '@/components/ai-email/ProjectDescripion';
import RoleSection from '@/components/ai-email/RoleSection';
import TechnologySection from '@/components/ai-email/TechnologySection';
import kvikkDemo from '@/assets/kvikk-demo.png';
import { useNavColorStore } from '@/components/ProjectSection/Store';
import Image from 'next/image';

export default function Page() {
  const setPrevNavColor = useNavColorStore((state) => state.setPrevNavColor);
  const setNavColor = useNavColorStore((state) => state.setNavColor);
  useEffect(() => {
    setNavColor('gray-100');
    setPrevNavColor('gray-100');
  }, [setNavColor, setPrevNavColor]);
  return (
    <main className="min-h-screen bg-stone-950 py-20">
      <HeroBanner />
      <div className="h-[80vh]"></div>
      <Introduction />
      {/* <MockupSection /> */}
      <RoleSection />
      <TechnologySection />
      <ImageSection />
      <ProjectDescription />
    </main>
  );
}
