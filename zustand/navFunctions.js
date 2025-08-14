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

export const changeLocalSection = (set) => (newSection) => {
    set((state) => ({
        localSec: newSection,
    }));
};

