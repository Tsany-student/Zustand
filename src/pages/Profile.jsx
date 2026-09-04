import { useNavigate } from 'react-router-dom';
import { useProfileStore } from '../stores/useProfileStore';
import { useStatStore } from '../stores/useStatStore';

export default function Profile() {
  const navigate = useNavigate();
  const profile = useProfileStore();
  const stats = useStatStore();

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-6">
        <div className="flex items-center gap-5">
          <img
            src={profile.avatar}
            alt="Avatar"
            className="w-20 h-20 rounded-2xl border-2 border-emerald-500/20 bg-slate-50 p-1"
          />
          <div>
            <h2 className="text-2xl font-black text-slate-900">{profile.name}</h2>
            <p className="text-sm font-bold text-emerald-600 mt-0.5">{profile.role}</p>
          </div>
        </div>
        <span
          className={`px-4 py-1.5 text-xs font-extrabold rounded-full ${
            stats.statusAkun === 'Aktif'
              ? 'bg-emerald-100 text-emerald-800'
              : 'bg-rose-100 text-rose-800'
          }`}
        >
          {stats.statusAkun}
        </span>
      </div>

      <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</p>
          <p className="text-sm font-semibold text-slate-800 mt-0.5">{profile.email}</p>
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Bio</p>
          <p className="text-sm font-medium text-slate-700 mt-0.5 leading-relaxed">{profile.bio}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
          <p className="text-xs font-bold text-slate-400 uppercase">Proyek</p>
          <p className="text-xl font-black text-slate-900 mt-1">{stats.totalProyek}</p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
          <p className="text-xs font-bold text-slate-400 uppercase">Tugas</p>
          <p className="text-xl font-black text-slate-900 mt-1">{stats.tugasSelesai}</p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
          <p className="text-xs font-bold text-slate-400 uppercase">Poin</p>
          <p className="text-xl font-black text-slate-900 mt-1">{stats.poinAktivitas}</p>
        </div>
      </div>

      <button
        onClick={() => navigate('/profile/edit')}
        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-2xl transition shadow-lg shadow-slate-900/10"
      >
        Edit Profile
      </button>
    </div>
  );
}