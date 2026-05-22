import { Target, AlarmClock, Battery, Smile } from "lucide-react"

function KartuStatus({ icon: Icon, judul, nilai, warna, bg }) {
  return (
    <div className="flex min-h-[112px] flex-col items-center justify-center rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-violet-100/70">
      <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-full ${bg}`}>
        <Icon size={17} className={warna} />
      </div>

      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
        {judul}
      </p>

      <p className={`mt-1 text-lg font-extrabold ${warna}`}>{nilai}</p>
    </div>
  )
}

function CekMood({ mood, energi, setMood, setEnergi }) {
  return (
    <section>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <KartuStatus
          icon={Target}
          judul="SKOR FOKUS"
          nilai="85"
          warna="text-violet-600"
          bg="bg-violet-100"
        />
        <KartuStatus
          icon={AlarmClock}
          judul="TENGGAT WAKTU"
          nilai="2"
          warna="text-red-500"
          bg="bg-red-100"
        />
        <KartuStatus
          icon={Battery}
          judul="ENERGI"
          nilai={energi === "tinggi" ? "Tinggi" : energi === "cukup" ? "Cukup" : "Rendah"}
          warna="text-teal-500"
          bg="bg-teal-100"
        />
        <KartuStatus
          icon={Smile}
          judul="MOOD"
          nilai={mood === "semangat" ? "Senang" : mood}
          warna="text-violet-500"
          bg="bg-violet-100"
        />
      </div>

      <div className="mt-5 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-violet-100/70">
        <p className="text-sm font-bold text-slate-700">Check-In Cepat</p>

        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="rounded-xl border border-violet-100 bg-white px-4 py-3 text-sm outline-none"
          >
            <option value="semangat">Semangat</option>
            <option value="normal">Normal</option>
            <option value="biasa">Biasa</option>
            <option value="capek">Capek</option>
            <option value="stres">Stres</option>
          </select>

          <select
            value={energi}
            onChange={(e) => setEnergi(e.target.value)}
            className="rounded-xl border border-violet-100 bg-white px-4 py-3 text-sm outline-none"
          >
            <option value="rendah">Energi Rendah</option>
            <option value="cukup">Energi Cukup</option>
            <option value="tinggi">Energi Tinggi</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default CekMood