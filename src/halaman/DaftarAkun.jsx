import { Link } from "react-router-dom"
import { Brain, Lock, Mail, User } from "lucide-react"

export default function DaftarAkun() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#eee9ff] via-[#fbf8ff] to-[#dff8ff] px-4 py-10 text-slate-900">
      {/* Lingkaran dekorasi kiri */}
      <div className="absolute left-[8%] top-[40%] hidden h-40 w-40 -translate-y-1/2 rounded-full border border-violet-300/40 md:block" />
      <div className="absolute left-[5%] top-[40%] hidden h-56 w-56 -translate-y-1/2 rounded-full border border-dashed border-violet-300/50 md:block" />

      {/* Blob kanan bawah */}
      <div className="absolute bottom-[-120px] right-[-70px] h-96 w-96 rounded-full bg-cyan-300/60 blur-3xl" />
      <div className="absolute right-[22%] top-[12%] h-60 w-60 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white/90 p-8 shadow-xl shadow-violet-100/70 ring-1 ring-violet-100 backdrop-blur">
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-200">
            <Brain size={18} />
          </div>
          <span className="text-lg font-black text-violet-700">MindMate</span>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-black tracking-tight text-slate-950">
            Daftar Akun Baru
          </h1>
          <p className="mx-auto mt-2 max-w-xs text-sm leading-5 text-slate-500">
            Mulai perjalanan belajarmu yang lebih terarah dengan MindMate AI.
          </p>
        </div>

        <form className="mt-7 grid gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-bold text-slate-700">
              Nama Lengkap
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-violet-100 bg-[#f6f3ff] px-3 py-3 ring-1 ring-transparent transition focus-within:border-violet-400 focus-within:ring-violet-100">
              <User size={16} className="text-slate-400" />
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold text-slate-700">
              Alamat Email
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-violet-100 bg-[#f6f3ff] px-3 py-3 ring-1 ring-transparent transition focus-within:border-violet-400 focus-within:ring-violet-100">
              <Mail size={16} className="text-slate-400" />
              <input
                type="email"
                placeholder="nama@email.com"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-700">
                Kata Sandi
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-violet-100 bg-[#f6f3ff] px-3 py-3 ring-1 ring-transparent transition focus-within:border-violet-400 focus-within:ring-violet-100">
                <Lock size={16} className="text-slate-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-700">
                Konfirmasi Kata Sandi
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-violet-100 bg-[#f6f3ff] px-3 py-3 ring-1 ring-transparent transition focus-within:border-violet-400 focus-within:ring-violet-100">
                <Lock size={16} className="text-slate-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="mt-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700"
          >
            Daftar Sekarang
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Sudah punya akun?{" "}
          <span className="font-bold text-violet-600">Masuk di sini</span>
        </p>
      </div>
    </div>
  )
}