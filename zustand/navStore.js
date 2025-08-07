import { create } from "zustand";
import { persist } from "zustand/middleware";
import { changeSection, toogelSideBar } from "./navFunctions";

const useNavStore = create(
  persist(
    (set, get) => ({
      sidebar: false,
      activeSection: "home",
      hasHydrated: false, // ← دي بتقول هل البيانات اتحملت من localStorage ولا لأ

      changeSection: changeSection(set),
      toogelSideBar: toogelSideBar(set),
    }),
    {
      name: "nav-storage",
      onRehydrateStorage: () => (state) => {
        state.hasHydrated = true; // ← لما يتم التحميل من localStorage نفعّل الفلاج ده
      },
      partialize: (state) => ({
        sidebar: state.sidebar,
        activeSection: state.activeSection,
      }),
      
    }
  )
);


export default useNavStore;
