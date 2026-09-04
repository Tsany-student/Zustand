import { create } from 'zustand';

export const useStatStore = create((set) => ({
  totalProyek: 14,
  tugasSelesai: 89,
  poinAktivitas: 1250,
  statusAkun: 'Aktif',

  updateStats: (updatedData) => set((state) => ({ ...state, ...updatedData })),
}));