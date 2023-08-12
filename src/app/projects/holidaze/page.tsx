'use client';
import React, { useEffect } from 'react';
import HeroBanner from '@/components/holidaze/HeroBanner';
import ImageSection from '@/components/holidaze/ImageSection';
import Introduction from '@/components/holidaze/Introduction';
import MockupSection from '@/components/holidaze/MockupSection';
import ProjectDescription from '@/components/holidaze/ProjectDescripion';
import RoleSection from '@/components/holidaze/RoleSection';
import TechnologySection from '@/components/holidaze/TechnologySection';
import holidazeHome from '@/assets/holidaze-home-long.png';
import Image from 'next/image';
import { useNavColorStore } from '@/components/ProjectSection/Store';
import type { Metadata } from 'next';


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
          <Image src={holidazeHome} className="absolute object-cover object-top" alt="Image of the website holidaze" />
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
