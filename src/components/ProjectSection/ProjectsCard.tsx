import classNames from 'classnames';
import { useProjectStore } from './Store';

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
        'absolute inset-0 h-full w-full bg-gradient-to-br p-4 transition-opacity',
        inViewProject === id ? 'opacity-100' : 'opacity-0',
      )}
    >
      {children}
    </div>
  );
}

export function ExtraHex({ id }: CardProps) {
  return (
    <ProjectsCard id={id} gradient="from-blue-100 to-blue-900">
      Extra hex
    </ProjectsCard>
  );
}

export function EmailResponder({ id }: CardProps) {
  return (
    <ProjectsCard id={id} gradient="from-green-100 to-green-900">
      Ai Email Responder
    </ProjectsCard>
  );
}

export function Mintra({ id }: CardProps) {
  return (
    <ProjectsCard id={id} gradient="from-yellow-100 to-yellow-500">
      Mintra
    </ProjectsCard>
  );
}

export function Holidaze({ id }: CardProps) {
  return (
    <ProjectsCard id={id} gradient="from-red-100 to-red-900">
      Holidaze
    </ProjectsCard>
  );
}

export function TheGoldenEgg({ id }: CardProps) {
  return (
    <ProjectsCard id={id} gradient="from-blue-100 to-blue-900">
      The Golden Egg
    </ProjectsCard>
  );
}
