
# acara
Sistem pesan dan penghargaan yang dipicu oleh kondisi.
- Hal ini dipicu ketika konfigurasi waktu/kondisi terpenuhi dan pesan ditampilkan.
- Hal ini dapat dipicu pada saat pertama kali memulai, ketika permainan berakhir, ketika kembali dari mati, atau ketika kondisi tertentu terpenuhi.
- Hal ini dapat mengubah level Kategori, jumlah aksi yang dilakukan dan jumlah Item yang dimiliki ketika diaktifkan.
___

## [_informasi_](id/editor/informasi)
___

## waktu
Konfigurasi waktu pemicuan acara.

|waktu|kondisi aktivasi|ulangi|
|-|-|-|
|'cocok'.|Ketika konfigurasi yang ditetapkan dalam KONDISI terpenuhi untuk pertama kalinya.|hanya sekali|
|'kembali lagi'.|Ketika seseorang kembali dari offline selama lebih dari satu detik dan ada aksi yang sedang berlangsung.|sering|
|`gameovered`.|Ketika stamina pemain habis dalam pertempuran.|sering|
|`selesai`.|Ketika level maksimum semua kategori (maxCategoryLevels) tercapai.|hanya sekali|
|"Selamat datang".|Ketika saya pertama kali memulai dunia ini.|hanya sekali|
|`obtained`|Saat menyelesaikan atau memverifikasi aksi jenis single (seperti peti harta karun, dll.). Jika persyaratan terpenuhi, hadiah acara juga akan ditambahkan|sering|
___

## Tampilan awal
Status tampilan awal ikon acara (pemicuan ditentukan oleh waktu, dan dengan konfigurasi ini, ikon tidak akan dipicu)
- Kondisi pemicu acara ditentukan oleh waktu, dan opsi ini hanya memengaruhi tampilan ikon daftar.
- secreted: Tidak akan ditampilkan sama sekali di daftar acara sampai semua persyaratan terpenuhi (meskipun pemicunya sendiri terjadi sesuai waktu yang ditentukan).
- hidden・hinted: Ikon tersebut akan ditampilkan dengan garis miring sebagai tanda belum dibuka.
- dirilis: Garis miring akan hilang dan ditampilkan sebagai "telah dibebaskan".
___

## syarat dan ketentuan
Ketentuan untuk memicu acara dan pemberian hadiah.
- Ketentuan untuk memicu acara atau pemberian hadiah.
- `matched` hanya akan aktif dan Anda akan mendapatkan hadiah jika kondisi ini terpenuhi.
- Selain pada saat `matched`, efek ini akan terpicu jika kondisi waktu terpenuhi. Setelah itu, akuisisi hadiah hanya akan terjadi jika memenuhi konfigurasi yang ditetapkan di sini.
___

### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|Kategori.|Level kategori.|
|Aksi|Hitung berapa kali aksi telah dilakukan.|
|Item|Jumlah item yang dimiliki.|
___

### ID elemen
ID elemen yang disebut sebagai kondisi.
___

### nilai
Nilai numerik persyaratan.
- Kondisi ini terpenuhi jika nilainya lebih besar atau sama dengan nilai yang ditentukan.
___

### Probabilitas konsumsi [0-1].
Probabilitas sebuah item dikonsumsi (0-1, hanya berlaku jika tipe-nya adalah item).
- Probabilitas bahwa sebuah item akan dikonsumsi ketika kondisi terpenuhi dan Aksi dilakukan.
- Selalu dikonsumsi pada tingkat `1`, 50% kemungkinan konsumsi pada tingkat `0,5` dan tidak ada konsumsi pada tingkat `0`.
- Nilai defaultnya adalah `1` (selalu dikonsumsi).
- Tidak valid jika tipenya selain Item.
___

### Peralatan
Memerlukan Item dalam keadaan Peralatan (hanya berlaku jika Tipe-nya adalah Item) atau
- Ketika diaktifkan, diperlukan untuk item dilengkapi serta dimiliki.
- Tidak valid jika tipenya selain Item.
___

## hadiah
Konfigurasi hadiah saat acara dipicu.
- Ini adalah hadiah ketika acara dipicu.
- Pada `matched`, Anda hanya akan mendapatkan hadiah jika kondisi terpenuhi dan fitur tersebut diaktifkan.
- Selain `matched`, akuisisi hadiah hanya akan terjadi jika kondisi waktu terpenuhi dan syarat-syarat dalam `conditions` juga terpenuhi.
- Anda dapat melakukan konfigurasi kuantitas ke nilai Minus. Misalnya, jika Anda mengatur jumlah Item ke nilai Minus saat `gameovered`, Anda akan kehilangan Item tersebut saat permainan berakhir.
___

### Tipe
Jenis elemen yang akan diperoleh.

|Tipe|Apa yang diperoleh dalam akuisisi.|
|-|-|
|Kategori.|Level (konversi pengalaman ditambahkan)|
|Aksi|Hitung dieksekusi.|
|Item|hitung jumlah harta benda|
___

### ID elemen
ID yang mengidentifikasi elemen yang akan diakuisisi.
___

### nilai
Nilai yang akan diperoleh
- Konfigurasi minus mengurangi jumlah kepemilikan, berapa kali kepemilikan tersebut dilakukan, dan levelnya. Namun, tidak boleh dibawah 0.
- Jika sebuah item memiliki jumlah kepemilikan maksimum (maks), jumlah kepemilikan tidak akan bertambah melebihi nilai tersebut.
- Jika tipenya adalah Kategori, nilai yang ditetapkan ditambahkan langsung ke level (1 untuk 1 level, 0,5 untuk 0,5 level). Cara yang biasa digunakan untuk menyesuaikan hal ini adalah dengan melakukan konfigurasi untuk mengatur pengalaman dari aksi tersebut. Konfigurasi ini tidak perlu kecuali tidak ada tujuan khusus.
___

### Probabilitas [-1 hingga 1]
Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)
- Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.
- Jika nilaiya positif, penilaian hanya dilakukan saat Aksi sukses; nilai `1` berarti pasti diperoleh, sedangkan nilai `0.5` berarti diperoleh dengan probabilitas 50%.
- Jika nilainya negatif, penilaian hanya dilakukan saat Aksi gagal; nilai `-1` berarti pasti diperoleh, sedangkan nilai `-0,5` berarti diperoleh dengan probabilitas 50%.
- Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.
- Nilai defaultnya adalah `1` (pasti diperoleh jika sukses).
___

## kelompok tugas
Pengidentifikasi grup tugas (saat ini tidak digunakan)
- Item ini saat ini tidak digunakan. Item ini dicadangkan untuk penyempurnaan di masa mendatang.