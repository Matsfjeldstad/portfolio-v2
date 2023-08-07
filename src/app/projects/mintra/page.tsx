'use client';
import React, { useEffect } from 'react';
import HeroBanner from '@/components/mintra/HeroBanner';
import ImageSection from '@/components/mintra/ImageSection';
import Introduction from '@/components/mintra/Introduction';
import MockupSection from '@/components/mintra/MockupSection';
import ProjectDescription from '@/components/mintra/ProjectDescripion';
import RoleSection from '@/components/mintra/RoleSection';
import TechnologySection from '@/components/mintra/TechnologySection';
import { useNavColorStore } from '@/components/ProjectSection/Store';

export default function Page() {
  const setPrevNavColor = useNavColorStore((state) => state.setPrevNavColor);
  const setNavColor = useNavColorStore((state) => state.setNavColor);
  useEffect(() => {
    setNavColor('gray-900');
    setPrevNavColor('gray-900');
  }, [setNavColor, setPrevNavColor]);
  return (
    <main className="min-h-screen bg-gray-100 py-20">
      <HeroBanner />
      <div className="">
        <div className="relative z-0 mx-auto flex h-[80vh] max-w-5xl justify-between overflow-hidden rounded-md">
          <video muted autoPlay loop className="absolute h-full object-cover">
            <source src="/mintra.webm" type="video/webm" />
          </video>
        </div>
      </div>
      <Introduction />
      <MockupSection />
      <RoleSection />
      <TechnologySection />
      <ImageSection />
      <ProjectDescription />
    </main>
  );
}
