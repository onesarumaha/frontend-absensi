function Header({ setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-slate-200 bg-white px-5 shadow-sm sm:px-8">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div>
          <h2 className="text-lg font-semibold text-slate-800">Dashboard</h2>

          <p className="hidden text-xs text-slate-400 sm:block">
            Selamat datang kembali di Absensiku
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold text-slate-700">Selamat datang</p>

          <p className="text-[10px] text-slate-400">Budi Santoso</p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#008fc5] text-sm font-semibold text-white">
          B
        </div>
      </div>
    </header>
  );
}

export default Header;
