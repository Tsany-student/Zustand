import { create } from 'zustand';

export const useProfileStore = create((set) => ({
  name: 'Tsany Al Fachrizy', // <--- CUKUP UBAH DI SINI
  role: 'Senior Frontend Engineer',
  email: 'tsany.alfachrizy@example.com',
  bio: 'Passionate developer crafting clean code and modern web experiences.',
  avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Tsany',

  updateProfile: (updatedData) => set((state) => ({ ...state, ...updatedData })),
}));