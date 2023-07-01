import { create } from 'zustand';

type ProjectStore = {
  inviewProject: string | null;
  setInviewProject: (project: string | null) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  inviewProject: null,
  setInviewProject: (project: string | null) => set({ inviewProject: project }),
}));
