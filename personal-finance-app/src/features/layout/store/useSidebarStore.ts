import { create } from "zustand";

type TSidebarStore = {
  isExpanded: boolean;
  toggle: () => void;
};

export const useSidebarStore = create<TSidebarStore>((set) => ({
  isExpanded: true,
  toggle: () =>
    set((state) => ({
      isExpanded: !state.isExpanded,
    })),
}));
