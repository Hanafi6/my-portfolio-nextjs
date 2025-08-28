// modalStore.js
import { create } from 'zustand'
import {projects} from '../data/projectsData'

const useProductModal = create((set) => ({
  isOpen: false,
}))

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
  projectes:null,
  activeImge:0,
  activeProject:0,
  setActiveImge:(id) => set({activeImge:id}),
  setActiveProject:(id) => set({activeProject:id})
}));

// export default useProductModal;
