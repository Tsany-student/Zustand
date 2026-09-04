import { Link } from 'react-router-dom';
import { useProfileStore } from '../stores/useProfileStore';
import { useStatStore } from '../stores/useStatStore';
export default function Dashboard() {
  const { name, bio } = useProfileStore();
  const { totalProyek, tugasSelesai, poinAktivitas, statusAkun } = useStatStore();

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            Welcome Back
          </span>
          <h1 className="text-3xl font-black mt-3">
            Selamat Datang, <span className="text-emerald-400">{name}</span>
          </h1>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">{bio}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Proyek</p>
          <p className="text-4xl font-black text-slate-900 mt-2">{totalProyek}</p>
          <p className="text-xs text-slate-500 mt-2">Sedang berjalan</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tugas Selesai</p>
          <p className="text-4xl font-black text-emerald-600 mt-2">{tugasSelesai}</p>
          <p className="text-xs text-slate-500 mt-2">Pencapaian bulan ini</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Poin Aktivitas</p>
          <p className="text-4xl font-black text-indigo-600 mt-2">{poinAktivitas.toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-2">Akumulasi poin</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status Akun</p>
          <span
            className={`inline-block mt-3 px-3 py-1 text-sm font-extrabold rounded-full ${
              statusAkun === 'Aktif'
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-rose-100 text-rose-700'
            }`}
          >
            {statusAkun}
          </span>
          <p className="text-xs text-slate-500 mt-2">Kondisi sistem saat ini</p>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-200/60 p-6 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="font-extrabold text-slate-900">Manajemen Profil Real-time</h3>
          <p className="text-sm text-slate-600 mt-0.5">
            Setiap perubahan data profil dan statistik akan otomatis terhubung ke seluruh halaman secara instan.
          </p>
        </div>
        <Link
          to="/profile/edit"
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-6 py-3 rounded-2xl transition shadow-md"
        >
          Edit Profil
        </Link>
      </div>
    </div>
  );
}