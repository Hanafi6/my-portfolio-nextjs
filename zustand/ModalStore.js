// modalStore.js
import { create } from 'zustand'

// ModalStore.js
export const useProductModal = create((set, get) => ({
  isOpen: false,
  currentIndex: 0,

  open: (index = 0) => set({ isOpen: true, currentIndex: index }),
  close: () => set({ isOpen: false }),
  toggle: () => set({ isOpen: !get().isOpen }),

  // يقبل رقم أو دالة updater
  setCurrentIndex: (updater) =>
    set((state) => ({
      currentIndex:
        typeof updater === "function" ? updater(state.currentIndex) : updater,
    })),

  nextImage: (length) => {
    const current = get().currentIndex;
    set({ currentIndex: (current + 1) % length });
  },
  prevImage: (length) => {
    const current = get().currentIndex;
    set({ currentIndex: (current - 1 + length) % length });
  },
}));



export const useModalStore = create((set) => ({
  activeTab: 'Home',
  activeSkillsTab: 'siklls',
  setActiveSkillsTab: (tab) => set({ activeSkillsTab: tab }),
  setActiveTab: (tab) => set({ activeTab: tab }),
}))

export const useSideBar = create((set) => ({
  StateOfSideBar: false,
  ChangeStateOfSideBar: (state) => set({ StateOfSideBar: state }),
}))

export const useHoverTitle = create((set) => ({
  title: null,
  setTitle: (text) => set({ title: text }),
  clearTitle: () => set({ title: null }),
}));


export const useProjectStore = create((set) => ({
  activeProject: null,
  setActiveProject: (project) => set({ activeProject: project }),
}));

// export default useProductModal;
