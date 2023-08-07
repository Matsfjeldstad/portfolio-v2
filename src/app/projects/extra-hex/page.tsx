'use client';
import React, { useEffect } from 'react';
import { useNavColorStore } from '@/components/ProjectSection/Store';
import HeroBanner from '@/components/extra-hex/HeroBanner';
import ImageSection from '@/components/extra-hex/ImageSection';
import Introduction from '@/components/extra-hex/Introduction';
import MockupSection from '@/components/extra-hex/MockupSection';
import ProjectDescription from '@/components/extra-hex/ProjectDescripion';
import RoleSection from '@/components/extra-hex/RoleSection';
import TechnologySection from '@/components/extra-hex/TechnologySection';
import Image from 'next/image';

export default function Page() {
  const setPrevNavColor = useNavColorStore((state) => state.setPrevNavColor);
  const setNavColor = useNavColorStore((state) => state.setNavColor);
  useEffect(() => {
    setNavColor('gray-100');
    setPrevNavColor('gray-100');
  }, [setNavColor, setPrevNavColor]);
  return (
    <main className="min-h-screen bg-gray-950 py-20">
      <HeroBanner />
      <div className="">
        <div className="relative z-0 mx-auto flex h-[80vh] max-w-5xl justify-between overflow-hidden rounded-md bg-gray-300">
          <Image
            height={2000}
            width={2000}
            src="/extrahex-test.png"
            className="absolute h-full w-full object-cover object-top"
            alt="Image of the website extrahex.com"
          />
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
