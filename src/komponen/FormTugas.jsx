import { useState } from "react"

function FormTugas({ tambahTugas }) {
  const [form, setForm] = useState({
    nama: "",
    mataKuliah: "",
    deadline: "besok",
    kesulitan: "sedang",
    estimasi: "1 jam",
    status: "belum mulai",
  })

  function ubahForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function kirimForm(e) {
    e.preventDefault()

    if (!form.nama.trim() || !form.mataKuliah.trim()) {
      alert("Nama tugas dan mata kuliah wajib diisi.")
      return
    }

    tambahTugas({
      id: Date.now(),
      ...form,
    })

    setForm({
      nama: "",
      mataKuliah: "",
      deadline: "besok",
      kesulitan: "sedang",
      estimasi: "1 jam",
      status: "belum mulai",
    })
  }

  return (
    <section className="rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-violet-100/70">
      <h3 className="text-[15px] font-extrabold text-slate-900">
        Tambah Tugas
      </h3>

      <form onSubmit={kirimForm} className="mt-4 grid gap-3">
        <div className="grid gap-3 md:grid-cols-2">
          <input
            name="nama"
            value={form.nama}
            onChange={ubahForm}
            placeholder="Nama tugas"
            className="rounded-xl border border-violet-100 px-4 py-3 text-sm outline-none"
          />

          <input
            name="mataKuliah"
            value={form.mataKuliah}
            onChange={ubahForm}
            placeholder="Mata kuliah"
            className="rounded-xl border border-violet-100 px-4 py-3 text-sm outline-none"
          />
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          <select name="deadline" value={form.deadline} onChange={ubahForm} className="rounded-xl border border-violet-100 px-3 py-3 text-sm">
            <option value="besok">Besok</option>
            <option value="2 hari lagi">2 hari lagi</option>
            <option value="minggu depan">Minggu depan</option>
          </select>

          <select name="kesulitan" value={form.kesulitan} onChange={ubahForm} className="rounded-xl border border-violet-100 px-3 py-3 text-sm">
            <option value="mudah">Mudah</option>
            <option value="sedang">Sedang</option>
            <option value="sulit">Sulit</option>
          </select>

          <select name="estimasi" value={form.estimasi} onChange={ubahForm} className="rounded-xl border border-violet-100 px-3 py-3 text-sm">
            <option value="30 menit">30 menit</option>
            <option value="1 jam">1 jam</option>
            <option value="2 jam">2 jam</option>
            <option value="3 jam">3 jam</option>
          </select>

          <select name="status" value={form.status} onChange={ubahForm} className="rounded-xl border border-violet-100 px-3 py-3 text-sm">
            <option value="belum mulai">Belum mulai</option>
            <option value="sedang dikerjakan">Sedang dikerjakan</option>
            <option value="hampir selesai">Hampir selesai</option>
          </select>
        </div>

        <button className="rounded-xl bg-violet-600 px-4 py-3 text-sm font-extrabold text-white">
          Tambah Tugas
        </button>
      </form>
    </section>
  )
}

export default FormTugas