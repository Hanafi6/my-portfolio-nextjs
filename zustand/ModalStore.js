// modalStore.js
import { create } from 'zustand'

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


// export default useProductModal;
