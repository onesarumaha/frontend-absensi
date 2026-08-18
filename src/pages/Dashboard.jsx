import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Data sementara
  // Nanti akan kita ambil dari API
  const employee = {
    name: "Budi Santoso",
    position: "Staff IT",
    employeeId: "EMP-001",
  };

  const [attendance, setAttendance] = useState({
    checkIn: null,
    checkOut: null,
  });

  // Jam berjalan
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Absen masuk sementara
  const handleCheckIn = () => {
    setAttendance({
      ...attendance,
      checkIn: new Date(),
    });
  };

  // Absen pulang sementara
  const handleCheckOut = () => {
    setAttendance({
      ...attendance,
      checkOut: new Date(),
    });
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* SIDEBAR */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* MAIN */}
      <main className="lg:ml-[250px]">
        {/* HEADER */}
        <Header setSidebarOpen={setSidebarOpen} />

        {/* CONTENT */}
        <div className="p-5 sm:p-8">
          {/* =========================
              WELCOME
          ========================== */}
          <div className="mb-7 rounded-2xl bg-gradient-to-r from-[#003b68] to-[#008fc5] p-6 text-white shadow-lg">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="mb-1 text-sm text-white/70">Selamat datang,</p>

                <h1 className="text-2xl font-semibold">{employee.name} 👋</h1>

                <p className="mt-2 text-sm text-white/70">
                  Jangan lupa melakukan absensi hari ini.
                </p>
              </div>

              <div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-white/10 sm:flex">
                <svg
                  className="h-9 w-9 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="9" />

                  <path strokeLinecap="round" d="M12 7v5l3 2" />
                </svg>
              </div>
            </div>
          </div>

          {/* =========================
              JAM & ABSENSI
          ========================== */}
          <div className="mb-7 grid gap-5 lg:grid-cols-[1fr_320px]">
            {/* ABSENSI */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Absensi Hari Ini
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    {formatDate(currentTime)}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-semibold ${
                    attendance.checkIn
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-amber-50 text-amber-600"
                  }`}
                >
                  {attendance.checkIn ? "Sudah Absen" : "Belum Absen"}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* ABSEN MASUK */}
                <div className="rounded-xl bg-slate-50 p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6l4 2"
                        />

                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Absen Masuk</p>

                      <p className="text-xl font-semibold text-slate-700">
                        {attendance.checkIn
                          ? formatTime(attendance.checkIn)
                          : "--:--:--"}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckIn}
                    disabled={!!attendance.checkIn}
                    className="w-full rounded-lg bg-emerald-500 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
                  >
                    {attendance.checkIn ? "Sudah Absen Masuk" : "Absen Masuk"}
                  </button>
                </div>

                {/* ABSEN PULANG */}
                <div className="rounded-xl bg-slate-50 p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6l4 2"
                        />

                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Absen Pulang</p>

                      <p className="text-xl font-semibold text-slate-700">
                        {attendance.checkOut
                          ? formatTime(attendance.checkOut)
                          : "--:--:--"}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckOut}
                    disabled={!attendance.checkIn || !!attendance.checkOut}
                    className="w-full rounded-lg bg-orange-500 py-2.5 text-xs font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
                  >
                    {attendance.checkOut
                      ? "Sudah Absen Pulang"
                      : "Absen Pulang"}
                  </button>
                </div>
              </div>
            </div>

            {/* DATA PEGAWAI */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-5 font-semibold text-slate-800">
                Data Pegawai
              </h3>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#008fc5] text-xl font-semibold text-white">
                  {employee.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    {employee.name}
                  </p>

                  <p className="text-xs text-slate-400">{employee.position}</p>
                </div>
              </div>

              <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                <div className="flex justify-between">
                  <span className="text-xs text-slate-400">ID Pegawai</span>

                  <span className="text-xs font-medium text-slate-700">
                    {employee.employeeId}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-xs text-slate-400">Status</span>

                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-600">
                    Aktif
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              RINGKASAN
          ========================== */}
          <div className="mb-7">
            <h3 className="mb-4 font-semibold text-slate-800">
              Ringkasan Kehadiran
            </h3>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <SummaryCard
                title="Hadir"
                value="18"
                subtitle="Hari"
                icon="✓"
                iconClass="bg-emerald-100 text-emerald-600"
              />

              <SummaryCard
                title="Terlambat"
                value="2"
                subtitle="Hari"
                icon="!"
                iconClass="bg-amber-100 text-amber-600"
              />

              <SummaryCard
                title="Izin"
                value="1"
                subtitle="Hari"
                icon="i"
                iconClass="bg-blue-100 text-blue-600"
              />

              <SummaryCard
                title="Tidak Hadir"
                value="0"
                subtitle="Hari"
                icon="−"
                iconClass="bg-red-100 text-red-600"
              />
            </div>
          </div>

          {/* =========================
              RIWAYAT ABSENSI
          ========================== */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Riwayat Absensi
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  Riwayat kehadiran terbaru
                </p>
              </div>

              <a
                href="/attendance"
                className="text-xs font-medium text-[#008fc5] hover:text-[#007ead]"
              >
                Lihat Semua
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/70">
                    <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Tanggal
                    </th>

                    <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Masuk
                    </th>

                    <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Pulang
                    </th>

                    <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <HistoryRow
                    date="18 Agustus 2026"
                    checkIn="08:01"
                    checkOut="17:02"
                    status="Hadir"
                  />

                  <HistoryRow
                    date="17 Agustus 2026"
                    checkIn="07:58"
                    checkOut="17:05"
                    status="Hadir"
                  />

                  <HistoryRow
                    date="14 Agustus 2026"
                    checkIn="08:15"
                    checkOut="17:00"
                    status="Terlambat"
                  />

                  <HistoryRow
                    date="13 Agustus 2026"
                    checkIn="07:55"
                    checkOut="17:03"
                    status="Hadir"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* =========================
   SUMMARY CARD
========================= */

function SummaryCard({ title, value, subtitle, icon, iconClass }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-slate-400">{title}</p>

          <div className="mt-2 flex items-end gap-1">
            <span className="text-2xl font-bold text-slate-800">{value}</span>

            <span className="mb-1 text-[10px] text-slate-400">{subtitle}</span>
          </div>
        </div>

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold ${iconClass}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

/* =========================
   HISTORY ROW
========================= */

function HistoryRow({ date, checkIn, checkOut, status }) {
  return (
    <tr className="border-b border-slate-50 last:border-0">
      <td className="px-6 py-4 text-xs font-medium text-slate-700">{date}</td>

      <td className="px-6 py-4 text-xs text-slate-500">{checkIn}</td>

      <td className="px-6 py-4 text-xs text-slate-500">{checkOut}</td>

      <td className="px-6 py-4">
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
            status === "Hadir"
              ? "bg-emerald-50 text-emerald-600"
              : "bg-amber-50 text-amber-600"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}

export default Dashboard;
