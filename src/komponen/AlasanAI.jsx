import { MessageCircle } from "lucide-react"
import { buatAlasanAI } from "../logika/prioritas"

function AlasanAI({ tugasAktif, mood, energi }) {
  if (!tugasAktif) return null

  const hasil = buatAlasanAI(tugasAktif, mood, energi)

  return (
    <section className="rounded-2xl border border-violet-200 bg-white/70 p-5 shadow-sm backdrop-blur">
      <div className="mb-3 flex items-center gap-2">
        <MessageCircle size={17} className="text-violet-600" />

        <h3 className="text-lg font-extrabold leading-tight text-slate-900">
          Rekomendasi AI
        </h3>
      </div>

      <p className="text-[13px] leading-relaxed text-slate-600">
        “<span>{hasil.alasan}</span>”
      </p>

      <p className="mt-3 text-[12px] leading-relaxed text-slate-500">
        {hasil.strategi}
      </p>

      <button className="mt-6 w-full rounded-lg bg-violet-600 px-4 py-3 text-[12px] font-extrabold text-white shadow-md shadow-violet-200">
        Laksanakan -&gt;
      </button>
    </section>
  )
}

export default AlasanAI