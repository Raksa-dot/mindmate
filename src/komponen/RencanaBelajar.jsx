import { dataGrafikMingguan } from "../data/dataTugas"
import { ExternalLink } from "lucide-react"

function RencanaBelajar({ tugasAktif }) {
  return (
    <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
      <div className="rounded-2xl bg-white/85 p-5 shadow-sm ring-1 ring-violet-100/70">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-[15px] font-extrabold text-slate-900">
            Progres Mingguan
          </h3>

          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            <span className="h-2 w-2 rounded-full bg-violet-700" />
          </div>
        </div>

        <div className="flex h-[135px] items-end gap-3">
          {dataGrafikMingguan.map((item, index) => (
            <div key={index} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-[105px] w-full items-end">
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-violet-300 to-violet-700"
                  style={{ height: item.tinggi }}
                />
              </div>

              <span className="text-[10px] font-bold text-slate-400">
                {item.hari}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-violet-100/70">
        <h3 className="mb-5 text-[15px] font-extrabold text-slate-900">
          Lini Masa Hari Ini
        </h3>

        <div className="space-y-4">
          <div>
            <p className="text-[11px] font-bold text-violet-700">
              09:00 - 10:30
            </p>
            <p className="text-[13px] font-bold text-slate-800">
              Fokus Mendalam: {tugasAktif?.nama || "Laporan Fisika"}
            </p>
            <p className="text-[11px] text-slate-400">
              Laporan Lab Energi Kinetik
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold text-slate-400">
              11:00 - 12:00
            </p>
            <p className="text-[13px] font-bold text-slate-800">
              Tinjauan: Kuis Matematika
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold text-slate-400">
              14:00 - 15:00
            </p>
            <p className="text-[13px] font-bold text-slate-800">
              Pusat Komunitas: Grup Belajar
            </p>
          </div>
        </div>
      </div>

      <div className="relative min-h-[150px] overflow-hidden rounded-2xl bg-slate-900 p-5 shadow-sm lg:col-span-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.45),transparent_28%),radial-gradient(circle_at_35%_55%,rgba(20,184,166,0.38),transparent_32%),linear-gradient(135deg,#111827,#312e81_60%,#0f172a)]" />

        <div className="relative z-10 flex min-h-[110px] items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
              Tampilan
            </p>
            <p className="mt-1 text-lg font-extrabold text-white">
              Tema Saya
            </p>
          </div>

          <button className="flex items-center gap-1 rounded-full bg-white/20 px-4 py-2 text-[11px] font-bold text-white backdrop-blur">
            Personalisasi
            <ExternalLink size={12} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default RencanaBelajar