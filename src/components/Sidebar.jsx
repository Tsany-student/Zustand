import { useState } from 'react';
import { useProfileStore } from '../stores/useProfileStore';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { name, role, avatar } = useProfileStore();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col justify-between p-6 h-screen fixed left-0 top-0 border-r border-slate-800 shadow-2xl z-20">
      <div>
        {/* Profile Card Header */}
        <div className="flex items-center gap-3 mb-8 bg-slate-800/60 p-3 rounded-2xl border border-slate-700/50">
          <img
            className="h-10 w-10 rounded-xl bg-slate-700 border border-slate-600 object-cover"
            src={avatar}
            alt="avatar"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-extrabold text-white truncate">{name}</p>
            <p className="text-xs text-emerald-400 font-medium truncate">{role}</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-3 rounded-2xl flex items-center gap-3 text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25'
                  : 'text-slate-400 hover:bg-slate-800/80 hover:text-white'
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `px-4 py-3 rounded-2xl flex items-center gap-3 text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25'
                  : 'text-slate-400 hover:bg-slate-800/80 hover:text-white'
              }`
            }
          >
            Profile
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `px-4 py-3 rounded-2xl flex items-center gap-3 text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25'
                  : 'text-slate-400 hover:bg-slate-800/80 hover:text-white'
              }`
            }
          >
            Statistik
          </NavLink>
        </nav>
      </div>

      {/* Footer Info */}
      <div className="text-center">
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
          ZustCore App
        </span>
      </div>
    </aside>
  );
}