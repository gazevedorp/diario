import create from "zustand";
import { persist } from 'zustand/middleware';

export const useUserState = create(
    persist(
        set => ({
            user: [],
            voucher: false,

            setUser: (newUser) => set(state => ({
                user: newUser
            })),

            setVoucher: (voucher) => set(state => ({
                voucher: voucher
            })),
        }),
        {
            name: 'diario@user',
            getStorage: () => localStorage,
        },
    )
);