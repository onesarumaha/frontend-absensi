import { useState } from "react";
import api from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      console.log("Response:", response.data);

      const token = response.data.token;

      localStorage.setItem("token", token);

      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Response API:", err.response?.data);

      setError(
        err.response?.data?.message ||
          "Username atau password yang Anda masukkan salah.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-[#003b68]">
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left circle */}
        <div className="absolute -left-40 -top-44 h-[480px] w-[480px] rounded-full bg-[#075486] opacity-60" />

        {/* Right circle */}
        <div className="absolute -right-44 -top-28 h-[500px] w-[500px] rounded-full bg-[#005083] opacity-70" />

        {/* Bottom circle */}
        <div className="absolute -bottom-72 left-[15%] h-[550px] w-[550px] rounded-full bg-[#004879] opacity-60" />

        {/* Right rings */}
        <div className="absolute right-[8%] top-[14%] h-32 w-32 rounded-full border border-white/10" />

        <div className="absolute right-[11%] top-[11%] h-20 w-20 rounded-full border border-white/10" />

        {/* Dot pattern left */}
        <div className="absolute left-[4%] top-[17%] grid grid-cols-5 gap-2 opacity-30 sm:left-[6%] lg:left-[8%]">
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-white" />
          ))}
        </div>

        {/* Dot pattern right */}
        <div className="absolute bottom-[12%] right-[5%] grid grid-cols-5 gap-2 opacity-20 sm:right-[8%]">
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-white" />
          ))}
        </div>
      </div>

      {/* =========================
          MAIN
      ========================== */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        {/* CARD */}
        <div className="w-full max-w-[900px] overflow-hidden rounded-2xl bg-white shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
          <div className="grid min-h-[500px] lg:grid-cols-[1.08fr_0.92fr]">
            {/* =========================
                LEFT SIDE
            ========================== */}
            <div className="relative hidden overflow-hidden bg-gradient-to-br from-[#08a8ce] to-[#008bb6] p-8 lg:flex lg:flex-col lg:justify-center xl:p-10">
              {/* Decorative circle */}
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[35px] border-white/5" />

              <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-[40px] border-white/5" />

              <div className="relative z-10 max-w-[450px]">
                {/* LOGO */}
                <div className="mb-7 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-white/80 bg-white/10">
                    <svg
                      viewBox="0 0 64 64"
                      className="h-9 w-9 text-white"
                      fill="none"
                    >
                      <path
                        d="M32 7C20.4 7 11 16.4 11 28c0 8.4 5 15.7 12.3 19.1"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />

                      <path
                        d="M32 17c-6.1 0-11 4.9-11 11 0 4.1 2.3 7.7 5.8 9.5"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />

                      <path
                        d="M32 27v27"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />

                      <circle cx="32" cy="28" r="2" fill="currentColor" />
                    </svg>
                  </div>

                  <div className="text-white">
                    <h2 className="!m-0 text-2xl font-light tracking-wide">
                      absensiku
                    </h2>

                    <p className="text-[10px] tracking-[0.25em] text-white/80">
                      PROFESSIONAL
                    </p>
                  </div>
                </div>

                {/* TITLE */}
                <div className="mt-8">
                  <p className="mb-2 text-sm font-medium tracking-wide text-white/80">
                    Selamat datang di
                  </p>

                  <h1 className="!m-0 text-[42px] font-bold leading-[1.05] tracking-[-1.5px] text-white xl:text-[46px]">
                    Absensiku
                  </h1>

                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-[2px] w-8 bg-white/60" />

                    <span className="text-sm font-medium tracking-[0.3em] text-white/80">
                      PROFESSIONAL
                    </span>
                  </div>
                </div>
                {/* DESCRIPTION */}
                <p className="mt-5 max-w-[400px] text-[13px] leading-6 text-white/90">
                  Masuklah ke dalam sistem untuk mengakses berbagai fitur
                  pengelolaan kehadiran pegawai secara mudah, cepat, dan
                  terintegrasi.
                </p>

                {/* FEATURES */}
                <div className="mt-7 space-y-3.5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <span className="text-[13px] text-white">
                      Kelola kehadiran pegawai
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3"
                        />

                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </div>

                    <span className="text-[13px] text-white">
                      Pantau aktivitas secara real-time
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                RIGHT SIDE
            ========================== */}
            <div className="flex items-center justify-center bg-white px-6 py-8 sm:px-10 lg:px-8 xl:px-10">
              <div className="w-full max-w-[300px]">
                {/* LOGO */}
                <div className="mb-5 text-center">
                  <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#00a7ce]">
                    <svg
                      viewBox="0 0 64 64"
                      className="h-9 w-9 text-[#00a7ce]"
                      fill="none"
                    >
                      <path
                        d="M32 7C20.4 7 11 16.4 11 28c0 8.4 5 15.7 12.3 19.1"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />

                      <path
                        d="M32 17c-6.1 0-11 4.9-11 11 0 4.1 2.3 7.7 5.8 9.5"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />

                      <path
                        d="M32 27v27"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />

                      <circle cx="32" cy="28" r="2" fill="currentColor" />
                    </svg>
                  </div>

                  <h2 className="!m-0 text-xl font-light tracking-wide text-slate-700">
                    absensiku
                  </h2>

                  <p className="text-[8px] tracking-[0.25em] text-slate-400">
                    PROFESSIONAL
                  </p>
                </div>

                {/* TITLE */}
                <div className="mb-5 text-center">
                  <h1 className="!m-0 text-[30px] font-semibold tracking-tight text-slate-800">
                    Login
                  </h1>

                  <p className="mt-1 text-[11px] text-slate-400">
                    Silakan masukkan akun Anda
                  </p>
                </div>

                {/* ERROR */}
                {error && (
                  <div className="mb-3 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-[11px] leading-4 text-red-600">
                    {error}
                  </div>
                )}

                {/* FORM */}
                <form onSubmit={handleLogin} className="space-y-3.5">
                  {/* EMAIL */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-slate-500">
                      Username
                    </label>

                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Username"
                        required
                        className="h-[38px] w-full rounded-md border border-slate-200 bg-white px-3 pr-10 text-[11px] text-slate-700 outline-none transition placeholder:text-slate-300 focus:border-[#00a7ce] focus:ring-2 focus:ring-[#00a7ce]/10"
                      />

                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-300">
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
                            d="M15 19a3 3 0 00-6 0m9-8a6 6 0 11-12 0 6 6 0 0112 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-slate-500">
                      Password
                    </label>

                    <div className="relative">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="h-[38px] w-full rounded-md border border-slate-200 bg-white px-3 pr-10 text-[11px] text-slate-700 outline-none transition placeholder:text-slate-300 focus:border-[#00a7ce] focus:ring-2 focus:ring-[#00a7ce]/10"
                      />

                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-300">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        >
                          <rect x="5" y="10" width="14" height="10" rx="2" />

                          <path
                            strokeLinecap="round"
                            d="M8 10V7a4 4 0 018 0v3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* FORGOT PASSWORD */}
                  <div className="flex justify-end pt-0.5">
                    <button
                      type="button"
                      className="text-[10px] text-[#008fbe] transition hover:text-[#006f94]"
                    >
                      Lupa Password?
                    </button>
                  </div>

                  {/* LOGIN */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="h-[39px] w-full rounded-md bg-[#008fc5] text-[11px] font-semibold text-white shadow-md shadow-[#008fc5]/20 transition hover:bg-[#007ead] focus:outline-none focus:ring-4 focus:ring-[#008fc5]/20 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Memproses..." : "Login"}
                  </button>
                </form>

                {/* FOOTER */}
                <div className="mt-6 text-center">
                  <p className="text-[9px] text-slate-300">
                    © 2026 Absensiku Professional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
