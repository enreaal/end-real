// ============================================================
//  UBAH FILE INI — hanya file ini yang perlu kamu ganti.
//
//  Untuk setiap rekan kerja:
//    id       kode unik singkat, dipakai di link QR mereka (tanpa spasi)
//    name     nama yang tampil di kartu dan di AR
//    target   foto yang dicetak di kartu — inilah yang dilacak kamera.
//             Pakai foto yang detail (orang, benda, tekstur). Gambar polos
//             atau terlalu sederhana sulit dilacak.
//    intro    (opsional) kalimat pembuka di halaman awal, mis.
//             "Tiga tahun satu tim." Kosongkan untuk kalimat umum:
//             "Sedikit kenang-kenangan sebelum aku pamit."
//    message  pesan pribadimu untuk mereka
//    photos   0–3 foto tambahan yang melayang di sekitar kartu di AR
//
//  Setiap kali mengganti foto `target` (atau menambah/menghapus rekan),
//  buka compile.html dan buat ulang assets/targets.mind.
// ============================================================

window.FAREWELL = {
  from: "Enrile",

  // Setelah deploy, isi alamat situsmu di sini (dipakai untuk kode QR),
  // mis. "https://farewell-gift.vercel.app". Biarkan "" untuk memakai alamat saat ini.
  baseUrl: "",

  colleagues: [
    {
      id: "rekan-1",
      name: "Rekan Satu",
      target: "assets/targets/colleague-1.jpg",
      message:
        "Makasih ya buat bantuannya selama ini, dari urusan kerjaan sampai makan siang bareng. Senang bisa kerja bareng kamu. Sukses terus!",
      photos: ["assets/photos/colleague-1-a.jpg"],
    },
    {
      id: "rekan-2",
      name: "Rekan Dua",
      target: "assets/targets/colleague-2.jpg",
      message:
        "Makasih udah sabar ngajarin dan bantuin tiap aku mentok. Banyak yang aku pelajari dari kamu. Sukses ya!",
      photos: ["assets/photos/colleague-2-a.jpg"],
    },
    {
      id: "rekan-3",
      name: "Rekan Tiga",
      target: "assets/targets/colleague-3.jpg",
      message:
        "Makasih buat kerja samanya selama ini. Seru bisa satu tim sama kamu. Sampai ketemu lagi!",
      photos: ["assets/photos/colleague-3-a.jpg"],
    },
  ],
};
