import create from "zustand";

export const useServiceState = create(
    set => ({
        menuOpen: false,

        setMenuOpen: () => set(state => ({
            menuOpen: !state.menuOpen
        })),
    })
);