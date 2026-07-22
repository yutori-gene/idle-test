
# Aksi
Elemen bertindak seperti mengumpulkan, membuat, dan bertarung.
- Ini adalah elemen-elemen yang mewakili bertindak seperti mengumpulkan, membuat, membeli dan menjual, dan berkelahi.
- Dengan setiap bertindak yang Anda lakukan, Anda mendapatkan pengalaman dan level Anda meningkat.
- Anda dapat mengatur Item yang akan dikonsumsi atau diperoleh untuk setiap bertindak.
- Ada beberapa jenis pola bertindak.
___

## [_informasi_](id/editor/informasi)
___

## Kategori.
ID dari kategori yang termasuk dalam Aksi tersebut
- Tentukan ID dari Kategori yang menjadi bagian dari Aksi ini.
___

## atribut
Kategori atribut aksi
- Atribut (kategori) individual dapat dikonfigurasi.
- Jika dibiarkan kosong, kategori yang menjadi miliknya akan diambil alih
- Misalnya, jika Anda konfigurasi atribut Sihir untuk aksi yang termasuk dalam kategori Kastil Iblis satu per satu, level dan properti kategori sihir akan dihitung dan diterapkan pada waktu penyelesaian aksi dan kerusakan.
- [_category_](id/editor/kategori)
___

## kelompok (usu. orang)
Menampilkan menit kelompok aksi
- Terapkan salah satu grup yang konfigurasi di Basic.
- Daftar aksi ditampilkan menurut urutan kelompok yang konfigurasi.
- [_general_](id/editor/umum)
___

## Keadaan pembebasan awal
Status tampilan awal dan status pembebasan elemen (akan secara otomatis beralih ke status yang lebih tinggi jika persyaratan aktivasi terpenuhi)
- secreted: Tidak akan ditampilkan sama sekali di antarmuka pengguna (UI) sampai semua persyaratan terpenuhi (tidak muncul di Petunjuk, dan disembunyikan dalam daftar persyaratan/hadiah).
- hidden: Akan tersembunyi sepenuhnya (namanya juga akan berwarna abu-abu dan tidak dapat dioperasikan) selama tidak dirujuk oleh elemen pelepasan mana pun dan persyaratannya belum terpenuhi.
- hinted (default): Hanya nama yang ditampilkan sebagai pratinjau, tetapi tidak dapat dioperasikan sampai dibuka.
- released: Dapat diakses dan dioperasikan sejak awal tanpa memandang kondisi apa pun (sebelumnya disebut “Tampilkan sejak awal”).
___

## level
Level kesulitan Aksi.
- Tingkat kesulitan Aksi ditunjukkan oleh level.
- Hitung properti pada saat runtime dibandingkan dengan level pemain.
- Sebagai contoh, melakukan Aksi yang lebih tinggi dari level Anda akan memiliki tingkat sukses dibawah.
- Jika syarat-syarat tersebut terpenuhi, eksekusi dapat dilakukan meskipun level pemain lebih rendah dari nilai ini.
- [_property_](id/editor/properti)
___

## [_syarat dan ketentuan_](id/editor/persyaratan)
___

## Waktu [detik].
Waktu yang dibutuhkan untuk melakukan aksi
- Waktu standar (dalam detik) yang diperlukan untuk melakukan suatu aksi sekali.
- Untuk tipe `stamina`, ini adalah interval waktu untuk satu giliran (satu pengurangan stamina satu sama lain).
- Eksekusi aktual akan bervariasi karena perhitungan properti.
- [_property_](id/editor/properti)
___

## pengalaman [tingkat level berikutnya di 100]
Pengalaman yang diperoleh dari aksi yang sukses
- Pengalaman standar yang diperoleh dari melakukan suatu aksi satu kali dan sukses; 100 setara dengan satu level pengalaman.
- Dalam kasus pertempuran, disarankan untuk menetapkan lebih banyak, karena itu merupakan akuisisi ketika lawan menang.
- Eksekusi aktual akan bervariasi karena perhitungan properti.
- [_property_](id/editor/properti)
___

## Probabilitas sukses [0-1].
Probabilitas sukses pada penyelesaian aksi
- Probabilitas sukses pada saat penyelesaian Aksi.
- Selalu sukses jika `1`, selalu gagal jika `0`.
- Jika terjadi kegagalan, item yang dapat dikonsumsi akan habis, tetapi tidak ada hadiah atau pengalaman yang diperoleh.
- Eksekusi aktual akan bervariasi karena perhitungan properti.
___

## Jumlah maksimum lari [kali].
Jumlah maksimum aksi yang dapat diselesaikan.
- Jumlah maksimum aksi yang dapat diselesaikan dengan sukses.
- Tidak terbatas untuk `0`.
- Ketika batas atas tercapai, aksi tidak lagi dapat dieksekusi.
___

## [_akuisisi_](id/editor/akuisisi)
___

## Jenis Kemajuan
Tipe eksekusi aksi
- Ada empat jenis.

|Tipe|detail operasi|stamina|Contoh.|
|-|-|-|-|
|'gigih'.|Ini adalah tipe aksi yang terus menerus diulang; Anda mendapatkan pengalaman dan hadiah untuk setiap penyelesaian.|Tidak ada hubungan|Penebangan, pertambangan, penangkapan ikan|
|'single'.|Lakukan satu aksi dalam satu waktu. Jika terputus, kemajuan akan disimpan dan dapat dilanjutkan di lain waktu. Setelah selesai, pengguna menekan aksi konfirmasi untuk menerima hasilnya.|Tidak ada hubungan|Membuka peti harta karun, belajar keterampilan melalui membaca|
|"Jepret".|Tipe aksi ini dilakukan secara instan. Diselesaikan dengan segera tanpa ada jeda waktu.|Tidak ada hubungan|berdagang, penggunaan Item.|
|'stamina'.|Setiap waktu yang dibutuhkan akan mengurangi stamina pemain dan lawan. Ketika stamina lawan habis, pengalaman dan hadiah akan diperoleh. Ketika stamina pemain habis, permainan berakhir dan semua aksi yang sedang berlangsung dibatalkan.|Relevan.|Operasi tempur dan berbahaya.|
___

## [_nilai tempur_](id/editor/pertempuran)