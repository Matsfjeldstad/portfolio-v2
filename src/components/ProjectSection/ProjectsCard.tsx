import classNames from 'classnames';
import { useProjectStore } from './Store';
import { ExtraHexLogo } from '@/assets/Logos';
import Image from 'next/image';
import { HouseIcon, SparkleIcon, EmailIcon } from '@/assets/Icons';

type Props = {
  children: React.ReactNode;
  gradient: string;
} & CardProps;

type CardProps = {
  id: string;
};

function ProjectsCard({ children, gradient, id }: Props) {
  const inViewProject = useProjectStore((state) => state.inviewProject);
  return (
    <div
      className={classNames(
        gradient,
        'absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-br p-4 transition-opacity before:absolute before:inset-0 before:h-full before:w-full before:bg-dotted-spacing-3 before:bg-dotted-gray-400/10',
        inViewProject === id ? 'opacity-100' : 'opacity-0',
      )}
    >
      {children}
    </div>
  );
}

export function ExtraHex({ id }: CardProps) {
  return (
    <ProjectsCard id={id} gradient="from-gray-800 to-black">
      <div className="flex flex-col items-center text-gray-400">
        <ExtraHexLogo fill="white" className="z-10" />
        <div>Alternative Hex Staking interface</div>
      </div>

      <button className="absolute bottom-4 right-4 rounded-sm  p-1 text-gray-400">view project</button>
    </ProjectsCard>
  );
}

export function EmailResponder({ id }: CardProps) {
  return (
    <ProjectsCard id={id} gradient="from-green-100 to-green-900">
      <div className="relative">
        <SparkleIcon className="absolute -left-5 -top-7" fill="white" />
        <EmailIcon className="h-10 w-10" fill="white" />
      </div>
      <button className="absolute bottom-4 right-4 rounded-sm  p-1 text-gray-100">view project</button>
    </ProjectsCard>
  );
}

export function Mintra({ id }: CardProps) {
  return (
    <ProjectsCard id={id} gradient="from-[#E1CC0B] to-yellow-500">
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl font-black uppercase text-gray-950">Mintra</div>
        <div className="text-sm font-medium text-gray-800">FIND YOUR NEXT TREASURE</div>
      </div>
      <button className="absolute bottom-4 right-4 rounded-sm  p-1 text-gray-900">view project</button>
    </ProjectsCard>
  );
}

export function Holidaze({ id }: CardProps) {
  return (
    <ProjectsCard id={id} gradient="from-gray-100 to-gray-300">
      <div className="flex flex-col gap-2 text-center">
        <div className=" text-4xl font-black text-[#FF004C]">Holidaze.</div>
        <div className="text-sm text-gray-950">Dream Locations For Your Next Holiday</div>
      </div>
      <div className="absolute -bottom-10 -left-10 flex h-36 w-36 items-center justify-center rounded-full bg-red-400/40 ">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF004C]">
          <HouseIcon fill="white" className="h-6 w-6" />
        </div>
      </div>
      <button className="absolute bottom-4 right-4 rounded-sm p-1 text-gray-800">view project</button>
    </ProjectsCard>
  );
}

export function TheGoldenEgg({ id }: CardProps) {
  return (
    <ProjectsCard id={id} gradient="from-[#1A1335] to-blue-900">
      <Image src="/Golden-Egg-Logo.png" alt="widget showing amout of staked hex" width={200} height={200} />
      <button className="absolute bottom-4 right-4 rounded-sm  p-1 text-gray-400">view project</button>
    </ProjectsCard>
  );
}
