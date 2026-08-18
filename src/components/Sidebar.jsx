function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      {/* =========================
          MOBILE OVERLAY
      ========================== */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-slate-900/30 backdrop-blur-[1px] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* =========================
          SIDEBAR
      ========================== */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-[230px] flex-col border-r border-slate-200 bg-white text-slate-600 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* =========================
            LOGO
        ========================== */}
        <div className="flex h-[72px] items-center px-5">
          <a href="/dashboard" className="flex items-center gap-3">
            {/* Logo */}
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1769e0] text-white shadow-sm">
              <span className="text-sm font-bold">A</span>
            </div>

            <div>
              <p className="text-sm font-bold tracking-tight text-[#17345f]">
                Absensiku
              </p>

              <p className="text-[8px] text-slate-400">Sistem Kehadiran</p>
            </div>
          </a>
        </div>

        {/* =========================
            MENU
        ========================== */}
        <nav className="flex-1 px-3 py-5">
          <p className="mb-3 px-3 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
            Menu
          </p>

          {/* Dashboard */}
          <SidebarItem
            href="/dashboard"
            label="Dashboard"
            active
            icon={
              <svg
                className="h-[17px] w-[17px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <rect x="4" y="4" width="6" height="6" rx="1" />

                <rect x="14" y="4" width="6" height="6" rx="1" />

                <rect x="4" y="14" width="6" height="6" rx="1" />

                <rect x="14" y="14" width="6" height="6" rx="1" />
              </svg>
            }
          />

          {/* Absensi */}
          <SidebarItem
            href="/attendance"
            label="Riwayat Absensi"
            icon={
              <svg
                className="h-[17px] w-[17px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <rect x="3" y="4" width="18" height="17" rx="2" />

                <path strokeLinecap="round" d="M8 2v4M16 2v4M3 10h18" />

                <path strokeLinecap="round" d="M8 14h3M8 17h6" />
              </svg>
            }
          />

          {/* Profil */}
          <SidebarItem
            href="/profile"
            label="Profil Saya"
            icon={
              <svg
                className="h-[17px] w-[17px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="12" cy="8" r="3.5" />

                <path
                  strokeLinecap="round"
                  d="M5 20c.8-3.5 3.1-5.5 7-5.5s6.2 2 7 5.5"
                />
              </svg>
            }
          />

          {/* Divider */}
          <div className="my-5 border-t border-slate-100" />

          <p className="mb-3 px-3 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
            Lainnya
          </p>

          {/* Bantuan */}
          <SidebarItem
            href="/help"
            label="Bantuan"
            icon={
              <svg
                className="h-[17px] w-[17px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="12" cy="12" r="9" />

                <path
                  strokeLinecap="round"
                  d="M9.5 9a2.5 2.5 0 1 1 4.1 1.9c-.9.7-1.6 1.1-1.6 2.3"
                />

                <path strokeLinecap="round" d="M12 17h.01" />
              </svg>
            }
          />
        </nav>

        {/* =========================
            USER
        ========================== */}
        <div className="border-t border-slate-100 p-3">
          <div className="mb-2 flex items-center gap-3 rounded-lg px-2 py-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-600">
              B
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold text-slate-700">
                Budi Santoso
              </p>

              <p className="truncate text-[9px] text-slate-400">Staff IT</p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[11px] text-slate-400 transition hover:bg-red-50 hover:text-red-500"
          >
            <svg
              className="h-[16px] w-[16px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H3m0 0 4-4m-4 4 4 4"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5V3h7v18h-7v-2"
              />
            </svg>
            Keluar
          </button>
        </div>
      </aside>
    </>
  );
}

/* =====================================================
   SIDEBAR ITEM
===================================================== */

function SidebarItem({ href, label, icon, active = false }) {
  return (
    <a
      href={href}
      className={`group mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition ${
        active
          ? "bg-blue-50 text-blue-600"
          : "text-slate-500 hover:bg-slate-50 hover:text-blue-600"
      }`}
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-md ${
          active
            ? "bg-blue-100 text-blue-600"
            : "text-slate-400 group-hover:text-blue-600"
        }`}
      >
        {icon}
      </span>

      <span
        className={`text-[11px] ${active ? "font-semibold" : "font-medium"}`}
      >
        {label}
      </span>
    </a>
  );
}

export default Sidebar;
