// navStore.js

import { create } from "zustand";
import { changeSection, toogelSideBar } from "./navFunctions";




const useNavStore = create((set) => ({
    sidebar: false,
    activeSection: "home", // الحالة الافتراضية
    changeSection: changeSection(set),
    toogelSideBar: toogelSideBar(set)
}));

export default useNavStore;
