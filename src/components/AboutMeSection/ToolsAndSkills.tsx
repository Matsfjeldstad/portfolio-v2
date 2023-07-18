import {
  Icon,
  TailwindCSS,
  Html,
  Css,
  NextJs,
  ReactJs,
  Redux,
  Figma,
  Git,
  Photoshop,
  Wordpress,
  JavaScript,
  StyledComponents,
  Supabase,
} from '@/assets/Icons';
import classNames from 'classnames';
import { animate, motion } from 'framer-motion';
import React from 'react';

type Props = {
  className?: string;
};

export default function ToolsAndSkills({ className }: Props) {
  const toolsAndSkills = [
    { name: 'Javascript', icon: JavaScript },
    { name: 'TailwindCSS', icon: TailwindCSS },
    { name: 'Html', icon: Html },
    { name: 'Css', icon: Css },
    { name: 'NextJs', icon: NextJs },
    { name: 'ReactJs', icon: ReactJs },
    { name: 'Redux', icon: Redux },
    { name: 'Figma', icon: Figma },
    { name: 'Git', icon: Git },
    { name: 'Photoshop', icon: Photoshop },
    { name: 'Wordpress', icon: Wordpress },
    { name: 'StyledComponents', icon: StyledComponents },
    { name: 'Supabase', icon: Supabase },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="flex h-[90vh] flex-col gap-5 p-4"
    >
      <h4 className="text-2xl text-gray-200">Tools and Skills</h4>
      <div className="flex flex-wrap gap-10">
        <p>
          Here are some of the tools and skills I use to build websites and web applications. I am always learning new
          things and I am excited to see what I will learn next.
        </p>
        {toolsAndSkills.map((toolOrSkill, index) => (
          <span key={toolOrSkill.name} className="flex text-gray-100">
            {toolOrSkill.icon({ fill: 'white', className: ' h-6' })}
            {toolOrSkill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
