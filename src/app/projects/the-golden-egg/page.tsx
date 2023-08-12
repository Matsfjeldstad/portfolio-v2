'use client';
import React, { useEffect } from 'react';
import HeroBanner from '@/components/the-golden-egg/HeroBanner';
import ImageSection from '@/components/the-golden-egg/ImageSection';
import Introduction from '@/components/the-golden-egg/Introduction';
import MockupSection from '@/components/the-golden-egg/MockupSection';
import ProjectDescription from '@/components/the-golden-egg/ProjectDescripion';
import RoleSection from '@/components/the-golden-egg/RoleSection';
import GoldenEggHero from '@/assets/the-golden-egg-hero.webp';
import TechnologySection from '@/components/the-golden-egg/TechnologySection';
import Image from 'next/image';
import { useNavColorStore } from '@/components/ProjectSection/Store';

export default function Page() {
  const setPrevNavColor = useNavColorStore((state) => state.setPrevNavColor);
  const setNavColor = useNavColorStore((state) => state.setNavColor);
  useEffect(() => {
    setNavColor('gray-100');
    setPrevNavColor('gray-100');
  }, [setNavColor, setPrevNavColor]);
  return (
    <main className="min-h-screen bg-gray-900 py-20">
      <HeroBanner />
      <div className="">
        <div className="relative z-0 mx-auto flex h-[80vh] max-w-5xl justify-between overflow-hidden rounded-md">
          <Image
            src={GoldenEggHero}
            alt={'image of herobanner of thegoldenegg.no'}
            className="absolute left-0 top-0 object-cover"
          />
        </div>
      </div>
      <Introduction />
      {/* <MockupSection /> */}
      <RoleSection />
      <TechnologySection />
      <ImageSection />
      <ProjectDescription />
    </main>
  );
}
