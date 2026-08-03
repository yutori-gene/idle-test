
# Tugas
Misi yang akan dianggap berhasil jika syarat-syaratnya terpenuhi
- Jika memenuhi konfigurasi yang telah ditetapkan, maka target tercapai, dan pesan akan ditampilkan di bagian atas layar.
- Akan ditampilkan dalam daftar misi pemain dan daftar tugas berdasarkan Kategori.
- Hadiah tidak diberikan secara otomatis. Pemain akan menerimanya saat membuka tugas dan menekan tombol "Akuisisi".
- Sampai imbalan tersebut diterima, bilah pada daftar akan ditandai dengan pita untuk menunjukkan bahwa imbalan tersebut belum diterima.
- Dengan proses akuisisi, Anda dapat mengubah level Kategori, jumlah kali pelaksanaan Aksi, dan jumlah Item yang dimiliki.
- Untuk hal-hal yang ingin diaktifkan pada waktu-waktu di luar kondisi tertentu, seperti saat pertama kali dijalankan atau saat permainan berakhir, lakukan konfigurasi melalui acara di pengaturan dasar.
- [_event_](id/editor/acara)
___

## [_informasi_](id/editor/informasi)
___

## Kategori.
ID Kategori tempat tugas tersebut berada
- Tentukan ID Kategori tempat tugas ini akan dimasukkan.
- Setelah diatur dalam konfigurasi, daftar tugas akan ditambahkan ke layar kategori pemain, dan dalam daftar misi pun akan ditampilkan secara terkelompok berdasarkan kategori.
- Jika dibiarkan kosong, misi tersebut tidak akan termasuk dalam kategori mana pun dan akan ditampilkan secara terpisah di bagian atas daftar misi.
___

## waktu
Waktu pemicu tugas (tetap `matched`)
- Tugas dalam konfigurasi `matched` (ketika memenuhi kondisi yang telah dikonfigurasi) dan tidak dapat diedit.
- Hadiah hanya dapat diterima satu kali, dan setelah diterima, status pencapaiannya tidak akan berubah lagi.
- Untuk hal-hal yang ingin diaktifkan pada waktu lain, lakukan konfigurasi melalui acara di pengaturan dasar.
- [_event_](id/editor/acara)
___

## Tampilan awal
Status tampilan awal ikon tugas (penyelesaian ditentukan oleh kondisi, dan dengan konfigurasi ini, tugas tidak akan dianggap selesai)
- Syarat penyelesaian tugas ditentukan oleh bagian “requirements”, dan bagian ini hanya memengaruhi tampilan ikon daftar.
- secreted: Tidak akan ditampilkan sama sekali dalam daftar tugas sampai semua persyaratan terpenuhi (pencapaiannya sendiri terjadi berdasarkan kondisi).
- hidden・hinted: Ikon tersebut akan ditampilkan dengan garis miring sebagai tanda belum dibuka.
- dirilis: Garis miring akan hilang dan ditampilkan sebagai "telah dibebaskan".
- Tugas yang sudah diselesaikan tidak akan hilang dari daftar. Jika statusnya kembali menjadi belum diselesaikan, ikonnya akan ditandai dengan garis miring.
___

## syarat dan ketentuan
Syarat penyelesaian tugas
- Ini adalah syarat untuk menyelesaikan tugas.
- Jika syarat ini terpenuhi, maka Anda dianggap telah mencapai target dan berhak menerima hadiah.
- Jika Anda tidak lagi memenuhi syarat sebelum menerima hadiah, status Anda akan kembali ke "belum tercapai" dan Anda tidak akan bisa menerimanya. Anda dapat menerimanya kembali jika kembali memenuhi syarat.
- Tugas yang tidak ada konfigurasinya tidak akan diselesaikan.
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
Konfigurasi Hadiah Saat Tugas Selesai
- Ini adalah hadiah yang bisa Anda terima saat membuka tugas yang telah diselesaikan dan mengetuk bilah akuisisi.
- Anda dapat mengubah level Kategori, jumlah kali Aksi dilakukan, dan jumlah Item yang dimiliki.
- Anda juga dapat melakukan konfigurasi nilai negatif untuk jumlah.
- Tugas yang tidak memiliki konfigurasi imbalan akan tidak ada bilah akuisisi, dan akan dianggap selesai begitu tugas tersebut diselesaikan.
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
Klasifikasi kelompok tampilan tugas
- Terapkan salah satu grup yang konfigurasi di Basic.
- Daftar tugas akan ditampilkan sesuai urutan konfigurasi grup yang telah ditetapkan.
- Di dalam kategori tersebut, hasilnya akan ditampilkan berdasarkan kelompok-kelompoknya.
- Jika dibiarkan kosong, tidak ada pengelompokan yang dibuat.
- [_general_](id/editor/umum)