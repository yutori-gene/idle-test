
# kelompok (usu. orang)
Menetapkan grup tampilan untuk kategori, aksi, dan item
- Tentukan grup untuk mengontrol urutan tampilan.
- Anda dapat mengatur grup yang ditentukan di sini untuk setiap kategori, aksi, dan item.
- Grup dengan kelompok yang sama ditampilkan berdekatan.
- Jika dibiarkan kosong, tidak ada pengelompokan yang dibuat.
___

## ID
ID unik untuk mengidentifikasi elemen
- ID untuk mengidentifikasi setiap elemen secara unik.
- Di editor, ini adalah string untuk mengidentifikasi elemen.
- Misalnya, ID menentukan Item mana yang diperoleh ketika Aksi selesai.

!> Setelah ID dikonfigurasi, tidak ada yang mengubah ID tersebut setelah game didistribusikan. Mengubahnya akan mengakibatkan ketidakkonsistenan dengan data game yang ada dan game tidak akan berfungsi dengan baik.
___

### Nama yang ditampilkan.
Nama tampilan dibuat secara otomatis dari ID
- Karakter yang dapat digunakan adalah kombinasi huruf, tanda hubung dan hitung.
- Jika nama belum ditetapkan, huruf pertama dari setiap kata menggunakan huruf besar dan tanda hubung diganti dengan spasi, yang secara otomatis dikonfigurasi dalam nama.
- Untuk bahasa selain bahasa Inggris, konfigurasi entri nama diperlukan secara individual.
___

#### Contoh.
Contoh kehidupan nyata dari konversi ID
- Jika ID adalah `stylish-kapak-kuat`, maka namanya adalah `Kapak Kuat Bergaya`.
___

### Terdapat tidak ada duplikasi.
Larangan duplikasi ID dalam tipe yang sama.
- Tiada menduplikasi dalam kategori, aksi, item, acara, dan tipe preset karena digunakan untuk mengidentifikasi elemen.
- Memiliki ID yang sama untuk tipe yang berbeda tidak menjadi masalah.
- [_type_](id/editor/Jenis)
___

## Nama.
Nama elemen seperti yang terlihat
- Nama elemen yang ditampilkan dalam permainan.
- Bahasa selain Inggris juga dapat dimasukkan.
- Nama yang menduplikasi elemen lain dapat diterima.
- Jika terlalu panjang, bagian yang meluap akan dihilangkan dari tampilan selama pemutaran dengan `...`.
___

### Konversi otomatis dari ID
Pembuatan nama otomatis dari ID
- Jika bidang ini dibiarkan kosong, informasi akan ditampilkan secara otomatis berdasarkan ID. Untuk informasi lebih lanjut, lihat bagian sebelumnya.
___

## catatan penjelasan
Deskripsi elemen terperinci.
- Deskripsi elemen yang ditampilkan dalam permainan.
- Bahasa selain bahasa Inggris dapat dimasukkan. Semua teks, bahkan teks yang panjang sekalipun, akan ditampilkan.
- Jika tidak ada penjelasan yang diberikan, biarkan kosong.
___

## ikon
Menetapkan ikon untuk mewakili elemen.
- Ikon dapat dikonfigurasi sebagai gambar, Iconify atau emoji.
- Iconify adalah layanan yang menawarkan berbagai macam ikon.
- Jika lebih dari hitung yang dikonfigurasi, gambar, Ikonify, dan piktogram akan diprioritaskan dan ditampilkan dalam urutan tersebut.
___

### Gambar.
Gunakan file gambar apa saja
- Gambar yang mewakili elemen.
- Jika ukuran file besar, maka ukuran file akan diubah secara otomatis.
- Tidak perlu jika Iconify atau piktogram konfigurasi.
___

#### Jenis file.
Format file gambar yang didukung.
- Anda dapat menggunakan jenis umum yang dapat ditampilkan di browser.
- JPEG, PNG, GIF, WebP, SVG, dll.
___

### Iconify
Menggunakan set ikon Iconify
- Ikon yang mewakili elemen.
- Iconify adalah layanan yang menawarkan berbagai macam ikon.
- Jika gambar sudah dalam konfigurasi, maka gambar tersebut akan didahulukan.
___

#### Iconify
Cara memilih ikon dari Iconify
- Cari `Iconify` untuk ikon yang dapat ditampilkan.
- Anda dapat dengan cepat menemukan ikon terbaik dengan mencari ikon.
- Pilih ikon untuk melihat pengenalnya (set ikon ketik `:` nama ikon), seperti `game-icons:sword-wound`, dan tempelkan langsung ke dalam bidang ikon ini.
![iconify-selection.png](../../resources/iconify-selection.png)
- [_iconify_](https://icon-sets.iconify.design)
___

### piktograf
Tampilan ikon dengan piktogram
- Menampilkan piktogram sebagai ikon.
- Ini dapat dikonversi dari teks ke piktogram dan dikonfigurasi dengan cepat.
- Untuk piktogram, masukkan piktogram Unicode apa adanya.
- Karena piktogram yang diperkenalkan dalam lingkungan eksekusi digunakan, maka piktogram ini ditampilkan sedikit berbeda untuk pengguna yang berbeda.
- Iconify memungkinkan Anda untuk konfigurasi emoji yang tidak ada pada setiap lingkungan
- Karakter non-pikografi dapat ditampilkan, tetapi tampilan mungkin rusak jika ada hitung karakter.
- Masukkan piktogram, misalnya, `🗡️` atau `⚔️`.
___

## variasi
Konfigurasi warna tampilan elemen.
- Sebagai warna elemen, warna ini diterapkan ke ikon elemen dan warna latar belakang.
- Pilih dari pemilih warna editor.
___

### Pewarisan dari elemen induk
Mengambil alih konfigurasi warna elemen.
- Jika kosong, warna konfigurasi dalam elemen akan diambil alih.
- Hirarki tipe untuk elemen adalah sebagai berikut
- Sebagai contoh, jika sebuah aksi memiliki konfigurasi warna individual, maka warna tersebut akan digunakan, sedangkan jika aksi tidak ada konfigurasi warna individual, maka kategori atau warna dunia yang akan digunakan.
```
world
├── category
├── action
├── item
├── group
├── event
└── preset
```
- [_type_](id/editor/Jenis)