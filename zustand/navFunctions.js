// navFunctions.js


export const toogelSideBar = (set) => () => {
    set((state) => ({
        sidebar: !state.sidebar
    }))
}


export const changeSection = (set) => (newSection) => {
    
    set((state) => ({
        activeSection: newSection,
    }));
};

// export const setActiveTab = (set) => (avtiveTab) => {
//     set((state) => ({
//         activeSection: newSection,
//     }));
// };

