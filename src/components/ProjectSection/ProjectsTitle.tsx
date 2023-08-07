import classNames from 'classnames';
import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useProjectStore } from './Store';

type Props = {
  children: React.ReactNode;
  id: string;
};

export default function ProjectsTitle({ children, id }: Props) {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { margin: '-50% 0px -50% 0px' });
  const setinViewProject = useProjectStore((state) => state.setInviewProject);
  const inViewProject = useProjectStore((state) => state.inviewProject);

  useEffect(() => {
    if (isInView) setinViewProject(id);
    if (!isInView && inViewProject === id) setinViewProject(null);
  }, [isInView, id, setinViewProject, inViewProject]);
  return (
    <p
      ref={titleRef}
      className={classNames(
        'py-32 font-bold transition-colors sm:text-3xl md:text-5xl',
        isInView ? 'text-gray-100' : 'text-gray-800',
      )}
    >
      {children}
    </p>
  );
}
