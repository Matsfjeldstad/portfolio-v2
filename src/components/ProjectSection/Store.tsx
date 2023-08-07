import { type } from 'os';
import { create } from 'zustand';

type ProjectStore = {
  inviewProject: string | null;
  setInviewProject: (project: string | null) => void;
};

type NavColorStore = {
  prevNavColor: string | null;
  navColor: string | null;
  setNavColor: (color: string) => void;
  setPrevNavColor: (color: string) => void;
  setNavColorBasedOnCondition: (condition: boolean) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  inviewProject: null,
  setInviewProject: (project: string | null) => set({ inviewProject: project }),
}));

export const useNavColorStore = create<NavColorStore>((set) => ({
  prevNavColor: 'default',
  navColor: 'default',
  setPrevNavColor: (color: string) => set({ prevNavColor: color }),
  setNavColor: (color) =>
    set((state) => ({
      navColor: color,
      prevNavColor: state.navColor,
    })),
  setNavColorBasedOnCondition: (condition) => {
    set((state) => ({
      navColor: condition ? 'gray-100' : state.prevNavColor,
    }));
  },
}));
