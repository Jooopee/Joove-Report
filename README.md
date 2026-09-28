# Jov Academic

Website statis berisi kumpulan tugas kuliah, dibuat dengan HTML dan CSS. Setiap tugas punya halaman detail sendiri, termasuk tugas prototipe produk yang memuat gambar prototipe dan penjelasan cara kerjanya.

**Demo:** https://Jooopee.github.io/Joove-Report/

## Halaman

| Halaman | File | Keterangan |
|---|---|---|
| Beranda | `index.html` | Pengantar dan tugas terbaru |
| Daftar Tugas | `tugas.html` | Daftar semua tugas beserta statusnya |
| Tentang | `tentang.html` | Profil, keahlian, dan kontak |
| Prototipe Produk | `tugas/prototipe-produk.html` | Galeri prototipe dan cara kerja produk |

## Struktur folder

```
jov-academic-website/
├── index.html
├── tugas.html
├── tentang.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── theme.js
├── images/
│   └── gambar-tugas.png
└── tugas/
    └── prototipe-produk.html
```

## Teknologi

- HTML5
- JavaScript
- CSS3 (variabel CSS untuk tema warna, Grid, dan Flexbox)
- Google Fonts: Bricolage Grotesque dan Instrument Sans

Tidak ada framework maupun proses build. Semua halaman memakai satu file `css/style.css`.

## Menjalankan di komputer

1. Unduh atau clone repository ini.
2. Buka `index.html` di browser (klik dua kali, atau klik kanan lalu *Open with* browser).

Koneksi internet dibutuhkan agar font Google Fonts termuat. Tanpa internet, website tetap tampil dengan font bawaan sistem.

## Kustomisasi

### Mengganti tema warna
Tema diatur lewat atribut `data-theme` pada tag `<html>` di setiap halaman. Pilihannya:

- `gading` — maroon dan gading (default)
- `malam` — maroon dan malam

Warna didefinisikan sebagai variabel di bagian atas `css/style.css`. Ubah nilainya di sana untuk menyesuaikan warna.

### Menambah gambar prototipe
1. Simpan file gambar ke folder `images/`.
2. Di `tugas/prototipe-produk.html`, salin satu blok `<figure class="shot">...</figure>`.
3. Ganti `src` (gunakan awalan `../images/`), `alt`, dan teks `figcaption`.

### Menambah tugas baru
1. Buat file HTML baru di folder `tugas/`, misalnya dengan menyalin `prototipe-produk.html` sebagai kerangka.
2. Tambahkan satu `<li>` baru di daftar pada `tugas.html`, dengan `href` menuju file tersebut.

## Status pengerjaan

- [x] Beranda
- [x] Daftar Tugas
- [x] Tentang
- [x] Prototipe Produk 
- [ ] Tugas Akhir Pemrograman WEB

## Kontak

Joove Mortimer Ssenyonga — [mortimerssenyonga06@gmail.com]
