function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-[250px] flex-col bg-[#003b68] text-white transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex h-[76px] items-center border-b border-white/10 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/80">
            <span className="text-sm font-bold">A</span>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-wider text-white/40">
            Menu Utama
          </p>

          {/* Dashboard */}
          <a
            href="/dashboard"
            className="mb-1 flex w-full items-center gap-3 rounded-lg bg-white/10 px-3 py-3 text-sm font-medium text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l9-9 9 9M5 10v10h14V10"
              />
            </svg>
            Dashboard
          </a>

          {/* Riwayat */}
          <a
            href="/attendance"
            className="mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <rect x="3" y="4" width="18" height="17" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Riwayat Absensi
          </a>

          {/* Profil */}
          <a
            href="/profile"
            className="mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="12" cy="8" r="4" />

              <path strokeLinecap="round" d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            Profil Saya
          </a>
        </nav>

        {/* User & Logout */}
        <div className="border-t border-white/10 p-4">
          <div className="mb-3 flex items-center gap-3 rounded-lg bg-white/5 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00a7ce] text-sm font-semibold">
              B
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">Budi Santoso</p>

              <p className="truncate text-[10px] text-white/50">Staff IT</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/60 transition hover:bg-red-500/10 hover:text-red-300"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H3m0 0l4-4m-4 4l4 4M14 5V3h7v18h-7v-2"
              />
            </svg>
            Keluar
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
