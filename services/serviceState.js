import create from "zustand";

export const useServiceState = create(
    set => ({
        menuOpen: false,
        painSelected: [],

        setMenuOpen: () => set(state => ({
            menuOpen: !state.menuOpen
        })),
        setPainSelected: (newPain) => set(({
            painSelected: newPain
        })),
    })
);