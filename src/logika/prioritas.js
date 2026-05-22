export function hitungSkorPrioritas(tugas) {
  let skor = 0

  if (tugas.deadline === "besok") skor += 40
  else if (tugas.deadline === "2 hari lagi") skor += 30
  else skor += 10

  if (tugas.kesulitan === "sulit") skor += 30
  else if (tugas.kesulitan === "sedang") skor += 20
  else skor += 10

  if (tugas.estimasi === "3 jam") skor += 20
  else if (tugas.estimasi === "2 jam") skor += 15
  else if (tugas.estimasi === "1 jam") skor += 10
  else skor += 5

  if (tugas.status === "belum mulai") skor += 10
  else if (tugas.status === "sedang dikerjakan") skor += 5

  return skor
}

export function ambilLevelPrioritas(skor) {
  if (skor >= 80) return "PRIORITAS TINGGI"
  if (skor >= 50) return "SEDANG"
  return "PRIORITAS RENDAH"
}

export function urutkanTugas(tugas) {
  return [...tugas].sort(
    (a, b) => hitungSkorPrioritas(b) - hitungSkorPrioritas(a)
  )
}

export function buatAlasanAI(tugas, mood, energi) {
  const skor = hitungSkorPrioritas(tugas)
  const level = ambilLevelPrioritas(skor)

  let alasan = `Fokus pada ${tugas.nama} karena `

  const poin = []

  if (tugas.deadline === "besok") {
    poin.push("deadline besok")
  }

  if (tugas.kesulitan === "sulit") {
    poin.push("tingkat kesulitannya tinggi")
  }

  if (tugas.estimasi === "3 jam" || tugas.estimasi === "2 jam") {
    poin.push("estimasi pengerjaannya cukup lama")
  }

  if (poin.length === 0) {
    poin.push("tugas ini tetap perlu diperhatikan")
  }

  alasan += poin.join(", ") + "."

  // eslint-disable-next-line no-useless-assignment
  let strategi = ""

  if (energi === "tinggi" || mood === "semangat") {
    strategi =
      "Karena energimu sedang bagus, kamu bisa mulai dari bagian tersulit terlebih dahulu."
  } else if (energi === "rendah" || mood === "capek" || mood === "stres") {
    strategi =
      "Karena kondisimu sedang kurang optimal, gunakan sesi pendek agar tidak cepat lelah."
  } else {
    strategi =
      "Gunakan sesi belajar normal dan beri jeda istirahat setelah satu sesi selesai."
  }

  return {
    skor,
    level,
    alasan,
    strategi,
  }
}