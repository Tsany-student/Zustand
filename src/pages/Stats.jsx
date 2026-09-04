import { useState } from 'react';
import { useStatStore } from '../stores/useStatStore';

export default function Stats() {
  const stats = useStatStore();

  const [formData, setFormData] = useState({
    totalProyek: stats.totalProyek,
    tugasSelesai: stats.tugasSelesai,
    poinAktivitas: stats.poinAktivitas,
    statusAkun: stats.statusAkun,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    stats.updateStats(formData);
    alert('Statistik berhasil diperbarui!');
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
      <h2 className="text-xl font-extrabold text-slate-900 mb-6">Ubah Statistik & Status</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Total Proyek</label>
          <input
            type="number"
            name="totalProyek"
            value={formData.totalProyek}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Tugas Selesai</label>
          <input
            type="number"
            name="tugasSelesai"
            value={formData.tugasSelesai}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Poin Aktivitas</label>
          <input
            type="number"
            name="poinAktivitas"
            value={formData.poinAktivitas}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Status Akun</label>
          <div className="flex gap-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-800 cursor-pointer">
              <input
                type="radio"
                name="statusAkun"
                value="Aktif"
                checked={formData.statusAkun === 'Aktif'}
                onChange={handleChange}
                className="accent-emerald-500"
              />
              Aktif
            </label>
            <label className="flex items-center gap-2 text-sm font-bold text-slate-800 cursor-pointer">
              <input
                type="radio"
                name="statusAkun"
                value="Nonaktif"
                checked={formData.statusAkun === 'Nonaktif'}
                onChange={handleChange}
                className="accent-emerald-500"
              />
              Nonaktif
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3 rounded-2xl transition shadow-lg shadow-slate-900/10"
        >
          Update Statistik
        </button>
      </form>
    </div>
  );
}