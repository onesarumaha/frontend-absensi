import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const employee = {
    name: "Budi Santoso",
    position: "Staff IT",
    employeeId: "EMP-001",
  };

  const [attendance, setAttendance] = useState({
    checkIn: null,
    checkOut: null,
  });

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

  const handleCheckIn = () => {
    setAttendance({
      ...attendance,
      checkIn: new Date(),
    });
  };

  const handleCheckOut = () => {
    setAttendance({
      ...attendance,
      checkOut: new Date(),
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f8fc]">
      {/* SIDEBAR */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* MAIN */}
      <main className="lg:ml-[250px]">
        <Header setSidebarOpen={setSidebarOpen} />

        <div className="p-4 sm:p-6 lg:p-7">
          {/* =========================
              TOP TITLE
          ========================== */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-xl font-semibold text-[#17345f]">
                Ringkasan Kehadiran
              </h1>

              <p className="mt-1 text-xs text-slate-400">
                Pantau kehadiran dan aktivitas absensi kamu.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
              <svg
                className="h-3.5 w-3.5 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path strokeLinecap="round" d="M8 2v4M16 2v4M3 10h18" />
              </svg>

              <span className="text-[11px] font-medium text-slate-600">
                {currentTime.toLocaleDateString("id-ID", {
                  month: "short",
                  year: "numeric",
                })}
              </span>

              <svg
                className="h-3 w-3 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </div>
          </div>

          {/* =========================
              STATISTICS
          ========================== */}
          <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <StatCard
              title="Hari Hadir"
              value="18"
              description="Bulan ini"
              type="person"
            />

            <StatCard
              title="Hadir Hari Ini"
              value={attendance.checkIn ? "1" : "0"}
              description={
                attendance.checkIn
                  ? formatTime(attendance.checkIn)
                  : "Belum absen"
              }
              type="clock"
            />

            <StatCard
              title="Terlambat"
              value="2"
              description="Bulan ini"
              type="late"
            />

            <StatCard
              title="Tidak Hadir"
              value="0"
              description="Bulan ini"
              type="absent"
            />
          </div>

          {/* =========================
              CHART AREA
          ========================== */}
          <div className="mb-5 grid gap-5 xl:grid-cols-[1.45fr_1fr]">
            {/* TREND */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <h2 className="text-xs font-semibold text-[#17345f]">
                    Tren Kehadiran
                  </h2>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Perbandingan kehadiran bulan ini
                  </p>
                </div>

                <div className="flex gap-4 text-[9px]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-slate-500">Hadir</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    <span className="text-slate-500">Terlambat</span>
                  </div>
                </div>
              </div>

              <AttendanceChart />
            </div>

            {/* DONUT */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4">
                <h2 className="text-xs font-semibold text-[#17345f]">
                  Persentase Kehadiran
                </h2>

                <p className="mt-1 text-[10px] text-slate-400">
                  Rekap kehadiran bulan ini
                </p>
              </div>

              <div className="flex items-center justify-center gap-7">
                <div
                  className="relative h-32 w-32 rounded-full"
                  style={{
                    background:
                      "conic-gradient(#1769e0 0deg 245deg, #f97316 245deg 310deg, #dbe5f2 310deg 360deg)",
                  }}
                >
                  <div className="absolute inset-[25px] flex items-center justify-center rounded-full bg-white">
                    <div className="text-center">
                      <p className="text-xl font-bold text-[#17345f]">82%</p>
                      <p className="text-[8px] text-slate-400">Kehadiran</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Legend color="bg-blue-600" title="Hadir" value="82%" />

                  <Legend color="bg-orange-500" title="Terlambat" value="12%" />

                  <Legend color="bg-slate-300" title="Tidak Hadir" value="6%" />
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              ABSENSI HARI INI
          ========================== */}
          <div className="mb-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xs font-semibold text-[#17345f]">
                  Absensi Hari Ini
                </h2>

                <p className="mt-1 text-[10px] text-slate-400">
                  {formatDate(currentTime)}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-[9px] text-slate-400">Waktu sekarang</p>

                <p className="text-lg font-semibold text-[#17345f]">
                  {formatTime(currentTime)}
                </p>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {/* MASUK */}
              <AttendanceAction
                title="Absen Masuk"
                time={
                  attendance.checkIn
                    ? formatTime(attendance.checkIn)
                    : "--:--:--"
                }
                description={
                  attendance.checkIn
                    ? "Absensi masuk berhasil dicatat"
                    : "Belum melakukan absensi masuk"
                }
                buttonText={
                  attendance.checkIn ? "Sudah Absen Masuk" : "Absen Masuk"
                }
                disabled={!!attendance.checkIn}
                onClick={handleCheckIn}
                type="blue"
              />

              {/* PULANG */}
              <AttendanceAction
                title="Absen Pulang"
                time={
                  attendance.checkOut
                    ? formatTime(attendance.checkOut)
                    : "--:--:--"
                }
                description={
                  attendance.checkOut
                    ? "Absensi pulang berhasil dicatat"
                    : "Belum melakukan absensi pulang"
                }
                buttonText={
                  attendance.checkOut ? "Sudah Absen Pulang" : "Absen Pulang"
                }
                disabled={!attendance.checkIn || !!attendance.checkOut}
                onClick={handleCheckOut}
                type="orange"
              />
            </div>
          </div>

          {/* =========================
              INFO PEGAWAI
          ========================== */}
          <div className="mb-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xs font-semibold text-[#17345f]">
                  Data Pegawai
                </h2>

                <p className="mt-1 text-[10px] text-slate-400">
                  Informasi akun dan unit kerja
                </p>
              </div>

              <a
                href="/profile"
                className="text-[10px] font-medium text-blue-600 hover:text-blue-700"
              >
                Lihat Profil →
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <EmployeeInfo label="Nama" value={employee.name} />

              <EmployeeInfo label="Jabatan" value={employee.position} />

              <EmployeeInfo label="ID Pegawai" value={employee.employeeId} />

              <EmployeeInfo label="Status" value="Aktif" active />
            </div>
          </div>

          {/* =========================
              RIWAYAT
          ========================== */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="text-xs font-semibold text-[#17345f]">
                  Riwayat Absensi
                </h2>

                <p className="mt-1 text-[10px] text-slate-400">
                  Data absensi terbaru
                </p>
              </div>

              <a
                href="/attendance"
                className="text-[10px] font-medium text-blue-600 hover:text-blue-700"
              >
                Lihat Semua →
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/60">
                    <th className="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-wide text-slate-400">
                      Tanggal
                    </th>

                    <th className="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-wide text-slate-400">
                      Masuk
                    </th>

                    <th className="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-wide text-slate-400">
                      Pulang
                    </th>

                    <th className="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-wide text-slate-400">
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

          <p className="mt-5 text-center text-[9px] text-slate-400">
            Data kehadiran diperbarui secara otomatis setiap hari.
          </p>
        </div>
      </main>
    </div>
  );
}

/* =====================================================
   STAT CARD
===================================================== */

function StatCard({ title, value, description, type }) {
  const icons = {
    person: (
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <circle cx="12" cy="8" r="3.5" />
        <path strokeLinecap="round" d="M5 20c.8-3.4 3.1-5 7-5s6.2 1.6 7 5" />
      </svg>
    ),

    clock: (
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path strokeLinecap="round" d="M12 7v5l3 2" />
      </svg>
    ),

    late: (
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m5 16 5-5 3 3 6-7"
        />
        <path strokeLinecap="round" d="M19 7h-4M19 7v4" />
      </svg>
    ),

    absent: (
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
      </svg>
    ),
  };

  const iconBackground = {
    person: "bg-blue-50 text-blue-600",
    clock: "bg-orange-50 text-orange-500",
    late: "bg-blue-50 text-blue-600",
    absent: "bg-orange-50 text-orange-500",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-medium text-slate-400">{title}</p>

          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-xl font-semibold text-[#17345f]">
              {value}
            </span>

            <span className="text-[9px] text-slate-400">{description}</span>
          </div>
        </div>

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBackground[type]}`}
        >
          {icons[type]}
        </div>
      </div>

      <div className="mt-3 h-1 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${
            type === "clock" || type === "absent"
              ? "w-1/3 bg-orange-300"
              : "w-2/3 bg-blue-300"
          }`}
        />
      </div>
    </div>
  );
}

/* =====================================================
   ATTENDANCE CHART
===================================================== */

function AttendanceChart() {
  return (
    <div className="relative h-[190px] w-full">
      {/* GRID */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {[80, 60, 40, 20, 0].map((number) => (
          <div key={number} className="flex items-center gap-3">
            <span className="w-5 text-[8px] text-slate-400">{number}</span>

            <div className="h-px flex-1 bg-slate-100" />
          </div>
        ))}
      </div>

      {/* SVG GRAPH */}
      <svg
        className="absolute left-7 right-0 top-0 h-[155px] w-[calc(100%-28px)] overflow-visible"
        viewBox="0 0 600 160"
        preserveAspectRatio="none"
      >
        {/* HADIR */}
        <polyline
          points="0,120 70,95 140,60 210,90 280,65 350,65 420,35 490,52 600,15"
          fill="none"
          stroke="#1769e0"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* TERLAMBAT */}
        <polyline
          points="0,145 70,130 140,112 210,130 280,135 350,118 420,110 490,125 600,105"
          fill="none"
          stroke="#f97316"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* DOT HADIR */}
        {[
          [0, 120],
          [70, 95],
          [140, 60],
          [210, 90],
          [280, 65],
          [350, 65],
          [420, 35],
          [490, 52],
          [600, 15],
        ].map(([cx, cy], index) => (
          <circle
            key={`blue-${index}`}
            cx={cx}
            cy={cy}
            r="4"
            fill="#1769e0"
            stroke="white"
            strokeWidth="2"
          />
        ))}

        {/* DOT TERLAMBAT */}
        {[
          [0, 145],
          [70, 130],
          [140, 112],
          [210, 130],
          [280, 135],
          [350, 118],
          [420, 110],
          [490, 125],
          [600, 105],
        ].map(([cx, cy], index) => (
          <circle
            key={`orange-${index}`}
            cx={cx}
            cy={cy}
            r="3"
            fill="#f97316"
          />
        ))}
      </svg>

      {/* MONTH */}
      <div className="absolute bottom-0 left-7 right-0 flex justify-between">
        {["Jan", "Feb", "Mar", "Apr", "Mei"].map((month) => (
          <span key={month} className="text-[8px] text-slate-400">
            {month}
          </span>
        ))}
      </div>
    </div>
  );
}

/* =====================================================
   LEGEND
===================================================== */

function Legend({ color, title, value }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${color}`} />

      <span className="w-14 text-[9px] text-slate-500">{title}</span>

      <span className="text-[9px] font-semibold text-slate-700">{value}</span>
    </div>
  );
}

/* =====================================================
   ATTENDANCE ACTION
===================================================== */

function AttendanceAction({
  title,
  time,
  description,
  buttonText,
  disabled,
  onClick,
  type,
}) {
  const blue = type === "blue";

  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${
              blue ? "bg-blue-50 text-blue-600" : "bg-orange-50 text-orange-500"
            }`}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="12" cy="12" r="8.5" />
              <path strokeLinecap="round" d="M12 7v5l3 2" />
            </svg>
          </div>

          <div>
            <p className="text-[10px] text-slate-400">{title}</p>

            <p className="text-xl font-semibold text-[#17345f]">{time}</p>
          </div>
        </div>

        <span
          className={`hidden rounded-full px-2.5 py-1 text-[9px] font-medium sm:block ${
            disabled && time !== "--:--:--"
              ? "bg-emerald-50 text-emerald-600"
              : "bg-slate-100 text-slate-400"
          }`}
        >
          {disabled && time !== "--:--:--" ? "Tercatat" : "Belum"}
        </span>
      </div>

      <p className="mt-3 text-[9px] text-slate-400">{description}</p>

      <button
        onClick={onClick}
        disabled={disabled}
        className={`mt-3 w-full rounded-lg py-2.5 text-[10px] font-semibold transition ${
          disabled
            ? "cursor-not-allowed bg-slate-200 text-slate-400"
            : blue
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-orange-500 text-white hover:bg-orange-600"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}

/* =====================================================
   EMPLOYEE INFO
===================================================== */

function EmployeeInfo({ label, value, active }) {
  return (
    <div className="rounded-lg border border-slate-100 bg-slate-50/70 px-4 py-3">
      <p className="text-[9px] text-slate-400">{label}</p>

      {active ? (
        <span className="mt-1 inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-medium text-emerald-600">
          {value}
        </span>
      ) : (
        <p className="mt-1 truncate text-[11px] font-medium text-slate-700">
          {value}
        </p>
      )}
    </div>
  );
}

/* =====================================================
   HISTORY ROW
===================================================== */

function HistoryRow({ date, checkIn, checkOut, status }) {
  return (
    <tr className="border-b border-slate-50 last:border-0">
      <td className="px-5 py-3 text-[10px] font-medium text-slate-700">
        {date}
      </td>

      <td className="px-5 py-3 text-[10px] text-slate-500">{checkIn}</td>

      <td className="px-5 py-3 text-[10px] text-slate-500">{checkOut}</td>

      <td className="px-5 py-3">
        <span
          className={`rounded-full px-2 py-1 text-[9px] font-medium ${
            status === "Hadir"
              ? "bg-emerald-50 text-emerald-600"
              : "bg-orange-50 text-orange-600"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}

export default Dashboard;
