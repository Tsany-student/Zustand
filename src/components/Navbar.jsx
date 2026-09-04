import { useProfileStore } from '../stores/useProfileStore';

export function Navbar() {
  const { name, role, avatar } = useProfileStore();

  return (
    <header className="h-20 bg-slate-900/40 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 ml-64 sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Live State Sync</span>
      </div>
      <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm">
        <div className="text-right">
          <p className="text-sm font-extrabold text-slate-900">{name}</p>
          <p className="text-xs font-semibold text-emerald-600">{role}</p>
        </div>
        <img
          src={avatar}
          alt="Avatar"
          className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200"
        />
      </div>
    </header>
  );
}