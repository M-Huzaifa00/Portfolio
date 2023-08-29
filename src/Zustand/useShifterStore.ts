import { create } from "zustand";

interface shifter {
  Home: boolean;
  Contact: boolean;
  Skill: boolean;
  Project: boolean;
  Link: boolean;
  setHome: (flag: boolean) => void;
  setContact: (flag: boolean) => void;
  setSkill: (flag: boolean) => void;
  setProject: (flag: boolean) => void;
  setLink: (flag: boolean) => void;
}

export const useShifterStore = create<shifter>((set) => ({
  Home: false,
  Contact: false,
  Skill: false,
  Project: false,
  Link: false,
  setHome: (flag) => set({ Home: flag }),
  setContact: (flag) => set({ Contact: flag }),
  setProject: (flag) => set({ Project: flag }),
  setSkill: (flag) => set({ Skill: flag }),
  setLink: (flag) => set({ Link: flag }),
}));
