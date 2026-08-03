
# acara
Pesan dan hadiah yang muncul pada waktu tertentu
- Fitur ini akan aktif pada waktu-waktu tertentu, seperti saat pertama kali membuka dunia atau saat permainan berakhir, dan akan membuka layar khusus.
- Tersedia satu per satu untuk setiap waktu, dan tidak dapat ditambahkan maupun dihapus. Untuk waktu yang tidak digunakan, biarkan kolomnya kosong.
- Tidak akan ditampilkan dalam daftar misi atau tugas. Hal-hal yang akan dianggap tercapai jika memenuhi syarat tertentu harus dikonfigurasi sebagai tugas.
- Akuisisi imbalan akan dilakukan secara otomatis begitu fitur tersebut diaktifkan. Tidak ada langkah pengambilan seperti pada tugas, dan tidak ada pita pemberitahuan.
- Hal ini dapat mengubah level Kategori, jumlah aksi yang dilakukan dan jumlah Item yang dimiliki ketika diaktifkan.
- Jika kolom nama, deskripsi, dan ikon dibiarkan kosong, teks dan ikon default yang sudah ada di dalam game akan digunakan oleh pemain.

|waktu|kondisi aktivasi|ulangi|
|-|-|-|
|'kembali lagi'.|Ketika seseorang kembali dari offline selama lebih dari satu detik dan ada aksi yang sedang berlangsung.|sering|
|`gameovered`.|Ketika stamina pemain habis dalam pertempuran.|sering|
|"Selamat datang".|Ketika saya pertama kali memulai dunia ini.|hanya sekali|
|`selesai`.|Ketika level maksimum semua kategori (maxCategoryLevels) tercapai.|hanya sekali|
|`obtained`|Saat menyelesaikan atau memeriksa Aksi jenis tunggal (seperti peti harta karun, dll.)|sering|
- [_task_](id/editor/tugas)
___

## Saat kembali
Berlaku saat kembali dari mode offline
- Fitur ini akan aktif ketika perangkat kembali online setelah lebih dari 1 detik dalam keadaan offline, dan terdapat aksi yang sedang berlangsung.
- Akan ditampilkan bersamaan dengan ringkasan kemajuan selama periode terpisah tersebut.
___

### [_informasi_](id/editor/informasi)
___

### Kategori.
Tidak akan digunakan dalam acara tersebut
- Karena tidak ditampilkan dalam daftar misi atau tugas, kategori yang terkait tidak akan ditentukan.
- Di editor, kolom input tidak ditampilkan.
___

### waktu
Waktu pemicu acara (tetap)
- Telah ditetapkan sebagai `comebacked` dan tidak dapat diedit.
- Akan aktif berulang kali setiap kali Anda kembali.
___

### Tampilan awal
Status tampilan awal ikon acara (pemicuan ditentukan oleh waktu, dan dengan konfigurasi ini, ikon tidak akan dipicu)
- Kondisi pemicu acara ditentukan oleh waktu, dan opsi ini hanya memengaruhi tampilan ikon.
- secreted: Ikon tidak akan ditampilkan sampai semua persyaratan terpenuhi (meskipun pemicunya sendiri terjadi sesuai waktu yang ditentukan).
- hidden・hinted: Ikon tersebut akan ditampilkan dengan garis miring sebagai tanda belum dibuka.
- dirilis: Garis miring akan hilang dan ditampilkan sebagai "telah dibebaskan".
___

### syarat dan ketentuan
Syarat untuk mendapatkan imbalan dalam proses akuisisi
- Jika waktu yang tepat terpenuhi, acara tersebut akan terpicu, dan layar khusus akan terbuka untuk menampilkan isinya.
- Akuisisi imbalan hanya akan terjadi jika, pada saat diaktifkan, konfigurasi yang ditetapkan di sini terpenuhi.
- Jika tidak ada konfigurasi apa pun, Anda akan mendapatkan hadiah setiap kali fitur ini diaktifkan.
___

#### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|Kategori.|Level kategori.|
|Aksi|Hitung berapa kali aksi telah dilakukan.|
|Item|Jumlah item yang dimiliki.|
___

#### ID elemen
ID elemen yang disebut sebagai kondisi.
___

#### nilai
Nilai numerik persyaratan.
- Kondisi ini terpenuhi jika nilainya lebih besar atau sama dengan nilai yang ditentukan.
___

#### Probabilitas konsumsi [0-1].
Probabilitas sebuah item dikonsumsi (0-1, hanya berlaku jika tipe-nya adalah item).
- Probabilitas bahwa sebuah item akan dikonsumsi ketika kondisi terpenuhi dan Aksi dilakukan.
- Selalu dikonsumsi pada tingkat `1`, 50% kemungkinan konsumsi pada tingkat `0,5` dan tidak ada konsumsi pada tingkat `0`.
- Nilai defaultnya adalah `1` (selalu dikonsumsi).
- Tidak valid jika tipenya selain Item.
___

#### Peralatan
Memerlukan Item dalam keadaan Peralatan (hanya berlaku jika Tipe-nya adalah Item) atau
- Ketika diaktifkan, diperlukan untuk item dilengkapi serta dimiliki.
- Tidak valid jika tipenya selain Item.
___

### hadiah
Konfigurasi hadiah saat acara dipicu.
- Ini adalah imbalan yang diperoleh ketika waktu yang tepat terpenuhi dan syarat-syaratnya terpenuhi.
- Berbeda dengan tugas, Anda tidak perlu melakukan tindakan apa pun untuk menerimanya; akuisisi akan dilakukan secara otomatis begitu fitur tersebut diaktifkan.
- Anda dapat melakukan konfigurasi nilai negatif untuk jumlah. Misalnya, jika Anda melakukan konfigurasi untuk membuat jumlah item menjadi negatif saat permainan berakhir, Anda akan kehilangan item-item tersebut.
___

#### Tipe
Jenis elemen yang akan diperoleh.

|Tipe|Apa yang diperoleh dalam akuisisi.|
|-|-|
|Kategori.|Level (konversi pengalaman ditambahkan)|
|Aksi|Hitung dieksekusi.|
|Item|hitung jumlah harta benda|
___

#### ID elemen
ID yang mengidentifikasi elemen yang akan diakuisisi.
___

#### nilai
Nilai yang akan diperoleh
- Konfigurasi minus mengurangi jumlah kepemilikan, berapa kali kepemilikan tersebut dilakukan, dan levelnya. Namun, tidak boleh dibawah 0.
- Jika sebuah item memiliki jumlah kepemilikan maksimum (maks), jumlah kepemilikan tidak akan bertambah melebihi nilai tersebut.
- Jika tipenya adalah Kategori, nilai yang ditetapkan ditambahkan langsung ke level (1 untuk 1 level, 0,5 untuk 0,5 level). Cara yang biasa digunakan untuk menyesuaikan hal ini adalah dengan melakukan konfigurasi untuk mengatur pengalaman dari aksi tersebut. Konfigurasi ini tidak perlu kecuali tidak ada tujuan khusus.
___

#### Probabilitas [-1 hingga 1]
Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)
- Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.
- Jika nilaiya positif, penilaian hanya dilakukan saat Aksi sukses; nilai `1` berarti pasti diperoleh, sedangkan nilai `0.5` berarti diperoleh dengan probabilitas 50%.
- Jika nilainya negatif, penilaian hanya dilakukan saat Aksi gagal; nilai `-1` berarti pasti diperoleh, sedangkan nilai `-0,5` berarti diperoleh dengan probabilitas 50%.
- Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.
- Nilai defaultnya adalah `1` (pasti diperoleh jika sukses).
___

### kelompok tugas
Tidak akan digunakan dalam acara tersebut
- Karena tidak ada daftar misi atau tugas, kami tidak menggunakan penunjukan grup.
- Di editor, kolom input tidak ditampilkan.
___

## Saat permainan berakhir
Diaktifkan saat stamina habis dalam pertempuran
- Fitur ini akan aktif saat stamina pemain habis dalam pertempuran.
- Dengan melakukan konfigurasi nilai negatif pada jumlah hadiah, Anda dapat menetapkan konsekuensi saat permainan berakhir.
___

### [_informasi_](id/editor/informasi)
___

### Kategori.
Tidak akan digunakan dalam acara tersebut
- Karena tidak ditampilkan dalam daftar misi atau tugas, kategori yang terkait tidak akan ditentukan.
- Di editor, kolom input tidak ditampilkan.
___

### waktu
Waktu pemicu acara (tetap)
- Telah ditetapkan sebagai `gameovered` dan tidak dapat diedit.
- Fitur ini akan aktif berulang kali setiap kali permainan berakhir.
___

### Tampilan awal
Status tampilan awal ikon acara (pemicuan ditentukan oleh waktu, dan dengan konfigurasi ini, ikon tidak akan dipicu)
- Kondisi pemicu acara ditentukan oleh waktu, dan opsi ini hanya memengaruhi tampilan ikon.
- secreted: Ikon tidak akan ditampilkan sampai semua persyaratan terpenuhi (meskipun pemicunya sendiri terjadi sesuai waktu yang ditentukan).
- hidden・hinted: Ikon tersebut akan ditampilkan dengan garis miring sebagai tanda belum dibuka.
- dirilis: Garis miring akan hilang dan ditampilkan sebagai "telah dibebaskan".
___

### syarat dan ketentuan
Syarat untuk mendapatkan imbalan dalam proses akuisisi
- Jika waktu yang tepat terpenuhi, acara tersebut akan terpicu, dan layar khusus akan terbuka untuk menampilkan isinya.
- Akuisisi imbalan hanya akan terjadi jika, pada saat diaktifkan, konfigurasi yang ditetapkan di sini terpenuhi.
- Jika tidak ada konfigurasi apa pun, Anda akan mendapatkan hadiah setiap kali fitur ini diaktifkan.
___

#### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|Kategori.|Level kategori.|
|Aksi|Hitung berapa kali aksi telah dilakukan.|
|Item|Jumlah item yang dimiliki.|
___

#### ID elemen
ID elemen yang disebut sebagai kondisi.
___

#### nilai
Nilai numerik persyaratan.
- Kondisi ini terpenuhi jika nilainya lebih besar atau sama dengan nilai yang ditentukan.
___

#### Probabilitas konsumsi [0-1].
Probabilitas sebuah item dikonsumsi (0-1, hanya berlaku jika tipe-nya adalah item).
- Probabilitas bahwa sebuah item akan dikonsumsi ketika kondisi terpenuhi dan Aksi dilakukan.
- Selalu dikonsumsi pada tingkat `1`, 50% kemungkinan konsumsi pada tingkat `0,5` dan tidak ada konsumsi pada tingkat `0`.
- Nilai defaultnya adalah `1` (selalu dikonsumsi).
- Tidak valid jika tipenya selain Item.
___

#### Peralatan
Memerlukan Item dalam keadaan Peralatan (hanya berlaku jika Tipe-nya adalah Item) atau
- Ketika diaktifkan, diperlukan untuk item dilengkapi serta dimiliki.
- Tidak valid jika tipenya selain Item.
___

### hadiah
Konfigurasi hadiah saat acara dipicu.
- Ini adalah imbalan yang diperoleh ketika waktu yang tepat terpenuhi dan syarat-syaratnya terpenuhi.
- Berbeda dengan tugas, Anda tidak perlu melakukan tindakan apa pun untuk menerimanya; akuisisi akan dilakukan secara otomatis begitu fitur tersebut diaktifkan.
- Anda dapat melakukan konfigurasi nilai negatif untuk jumlah. Misalnya, jika Anda melakukan konfigurasi untuk membuat jumlah item menjadi negatif saat permainan berakhir, Anda akan kehilangan item-item tersebut.
___

#### Tipe
Jenis elemen yang akan diperoleh.

|Tipe|Apa yang diperoleh dalam akuisisi.|
|-|-|
|Kategori.|Level (konversi pengalaman ditambahkan)|
|Aksi|Hitung dieksekusi.|
|Item|hitung jumlah harta benda|
___

#### ID elemen
ID yang mengidentifikasi elemen yang akan diakuisisi.
___

#### nilai
Nilai yang akan diperoleh
- Konfigurasi minus mengurangi jumlah kepemilikan, berapa kali kepemilikan tersebut dilakukan, dan levelnya. Namun, tidak boleh dibawah 0.
- Jika sebuah item memiliki jumlah kepemilikan maksimum (maks), jumlah kepemilikan tidak akan bertambah melebihi nilai tersebut.
- Jika tipenya adalah Kategori, nilai yang ditetapkan ditambahkan langsung ke level (1 untuk 1 level, 0,5 untuk 0,5 level). Cara yang biasa digunakan untuk menyesuaikan hal ini adalah dengan melakukan konfigurasi untuk mengatur pengalaman dari aksi tersebut. Konfigurasi ini tidak perlu kecuali tidak ada tujuan khusus.
___

#### Probabilitas [-1 hingga 1]
Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)
- Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.
- Jika nilaiya positif, penilaian hanya dilakukan saat Aksi sukses; nilai `1` berarti pasti diperoleh, sedangkan nilai `0.5` berarti diperoleh dengan probabilitas 50%.
- Jika nilainya negatif, penilaian hanya dilakukan saat Aksi gagal; nilai `-1` berarti pasti diperoleh, sedangkan nilai `-0,5` berarti diperoleh dengan probabilitas 50%.
- Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.
- Nilai defaultnya adalah `1` (pasti diperoleh jika sukses).
___

### kelompok tugas
Tidak akan digunakan dalam acara tersebut
- Karena tidak ada daftar misi atau tugas, kami tidak menggunakan penunjukan grup.
- Di editor, kolom input tidak ditampilkan.
___

## Saat pertama kali mulai
Berlaku saat pertama kali membuka dunia
- Fitur ini akan aktif saat Anda menjalankan dunia ini untuk pertama kalinya.
- Ini digunakan untuk menjelaskan latar cerita serta menyerahkan perlengkapan yang diberikan saat mulai bermain.
___

### [_informasi_](id/editor/informasi)
___

### Kategori.
Tidak akan digunakan dalam acara tersebut
- Karena tidak ditampilkan dalam daftar misi atau tugas, kategori yang terkait tidak akan ditentukan.
- Di editor, kolom input tidak ditampilkan.
___

### waktu
Waktu pemicu acara (tetap)
- Telah ditetapkan sebagai `welcomed` dan tidak dapat diedit.
- Fitur ini hanya akan aktif sekali saat pertama kali dijalankan.
___

### Tampilan awal
Status tampilan awal ikon acara (pemicuan ditentukan oleh waktu, dan dengan konfigurasi ini, ikon tidak akan dipicu)
- Kondisi pemicu acara ditentukan oleh waktu, dan opsi ini hanya memengaruhi tampilan ikon.
- secreted: Ikon tidak akan ditampilkan sampai semua persyaratan terpenuhi (meskipun pemicunya sendiri terjadi sesuai waktu yang ditentukan).
- hidden・hinted: Ikon tersebut akan ditampilkan dengan garis miring sebagai tanda belum dibuka.
- dirilis: Garis miring akan hilang dan ditampilkan sebagai "telah dibebaskan".
___

### syarat dan ketentuan
Syarat untuk mendapatkan imbalan dalam proses akuisisi
- Jika waktu yang tepat terpenuhi, acara tersebut akan terpicu, dan layar khusus akan terbuka untuk menampilkan isinya.
- Akuisisi imbalan hanya akan terjadi jika, pada saat diaktifkan, konfigurasi yang ditetapkan di sini terpenuhi.
- Jika tidak ada konfigurasi apa pun, Anda akan mendapatkan hadiah setiap kali fitur ini diaktifkan.
___

#### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|Kategori.|Level kategori.|
|Aksi|Hitung berapa kali aksi telah dilakukan.|
|Item|Jumlah item yang dimiliki.|
___

#### ID elemen
ID elemen yang disebut sebagai kondisi.
___

#### nilai
Nilai numerik persyaratan.
- Kondisi ini terpenuhi jika nilainya lebih besar atau sama dengan nilai yang ditentukan.
___

#### Probabilitas konsumsi [0-1].
Probabilitas sebuah item dikonsumsi (0-1, hanya berlaku jika tipe-nya adalah item).
- Probabilitas bahwa sebuah item akan dikonsumsi ketika kondisi terpenuhi dan Aksi dilakukan.
- Selalu dikonsumsi pada tingkat `1`, 50% kemungkinan konsumsi pada tingkat `0,5` dan tidak ada konsumsi pada tingkat `0`.
- Nilai defaultnya adalah `1` (selalu dikonsumsi).
- Tidak valid jika tipenya selain Item.
___

#### Peralatan
Memerlukan Item dalam keadaan Peralatan (hanya berlaku jika Tipe-nya adalah Item) atau
- Ketika diaktifkan, diperlukan untuk item dilengkapi serta dimiliki.
- Tidak valid jika tipenya selain Item.
___

### hadiah
Konfigurasi hadiah saat acara dipicu.
- Ini adalah imbalan yang diperoleh ketika waktu yang tepat terpenuhi dan syarat-syaratnya terpenuhi.
- Berbeda dengan tugas, Anda tidak perlu melakukan tindakan apa pun untuk menerimanya; akuisisi akan dilakukan secara otomatis begitu fitur tersebut diaktifkan.
- Anda dapat melakukan konfigurasi nilai negatif untuk jumlah. Misalnya, jika Anda melakukan konfigurasi untuk membuat jumlah item menjadi negatif saat permainan berakhir, Anda akan kehilangan item-item tersebut.
___

#### Tipe
Jenis elemen yang akan diperoleh.

|Tipe|Apa yang diperoleh dalam akuisisi.|
|-|-|
|Kategori.|Level (konversi pengalaman ditambahkan)|
|Aksi|Hitung dieksekusi.|
|Item|hitung jumlah harta benda|
___

#### ID elemen
ID yang mengidentifikasi elemen yang akan diakuisisi.
___

#### nilai
Nilai yang akan diperoleh
- Konfigurasi minus mengurangi jumlah kepemilikan, berapa kali kepemilikan tersebut dilakukan, dan levelnya. Namun, tidak boleh dibawah 0.
- Jika sebuah item memiliki jumlah kepemilikan maksimum (maks), jumlah kepemilikan tidak akan bertambah melebihi nilai tersebut.
- Jika tipenya adalah Kategori, nilai yang ditetapkan ditambahkan langsung ke level (1 untuk 1 level, 0,5 untuk 0,5 level). Cara yang biasa digunakan untuk menyesuaikan hal ini adalah dengan melakukan konfigurasi untuk mengatur pengalaman dari aksi tersebut. Konfigurasi ini tidak perlu kecuali tidak ada tujuan khusus.
___

#### Probabilitas [-1 hingga 1]
Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)
- Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.
- Jika nilaiya positif, penilaian hanya dilakukan saat Aksi sukses; nilai `1` berarti pasti diperoleh, sedangkan nilai `0.5` berarti diperoleh dengan probabilitas 50%.
- Jika nilainya negatif, penilaian hanya dilakukan saat Aksi gagal; nilai `-1` berarti pasti diperoleh, sedangkan nilai `-0,5` berarti diperoleh dengan probabilitas 50%.
- Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.
- Nilai defaultnya adalah `1` (pasti diperoleh jika sukses).
___

### kelompok tugas
Tidak akan digunakan dalam acara tersebut
- Karena tidak ada daftar misi atau tugas, kami tidak menggunakan penunjukan grup.
- Di editor, kolom input tidak ditampilkan.
___

## Saat berhasil diselesaikan
Berlaku saat semua kategori telah mencapai level maks
- Fitur ini akan aktif ketika level semua kategori telah mencapai nilai maksimum (maxCategoryLevels).
- Kategori yang bukan numerik akan dikecualikan dari penilaian.
___

### [_informasi_](id/editor/informasi)
___

### Kategori.
Tidak akan digunakan dalam acara tersebut
- Karena tidak ditampilkan dalam daftar misi atau tugas, kategori yang terkait tidak akan ditentukan.
- Di editor, kolom input tidak ditampilkan.
___

### waktu
Waktu pemicu acara (tetap)
- Telah ditetapkan sebagai `completed` dan tidak dapat diedit.
- Fitur ini hanya akan aktif sekali saat syarat-syaratnya terpenuhi.
___

### Tampilan awal
Status tampilan awal ikon acara (pemicuan ditentukan oleh waktu, dan dengan konfigurasi ini, ikon tidak akan dipicu)
- Kondisi pemicu acara ditentukan oleh waktu, dan opsi ini hanya memengaruhi tampilan ikon.
- secreted: Ikon tidak akan ditampilkan sampai semua persyaratan terpenuhi (meskipun pemicunya sendiri terjadi sesuai waktu yang ditentukan).
- hidden・hinted: Ikon tersebut akan ditampilkan dengan garis miring sebagai tanda belum dibuka.
- dirilis: Garis miring akan hilang dan ditampilkan sebagai "telah dibebaskan".
___

### syarat dan ketentuan
Syarat untuk mendapatkan imbalan dalam proses akuisisi
- Jika waktu yang tepat terpenuhi, acara tersebut akan terpicu, dan layar khusus akan terbuka untuk menampilkan isinya.
- Akuisisi imbalan hanya akan terjadi jika, pada saat diaktifkan, konfigurasi yang ditetapkan di sini terpenuhi.
- Jika tidak ada konfigurasi apa pun, Anda akan mendapatkan hadiah setiap kali fitur ini diaktifkan.
___

#### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|Kategori.|Level kategori.|
|Aksi|Hitung berapa kali aksi telah dilakukan.|
|Item|Jumlah item yang dimiliki.|
___

#### ID elemen
ID elemen yang disebut sebagai kondisi.
___

#### nilai
Nilai numerik persyaratan.
- Kondisi ini terpenuhi jika nilainya lebih besar atau sama dengan nilai yang ditentukan.
___

#### Probabilitas konsumsi [0-1].
Probabilitas sebuah item dikonsumsi (0-1, hanya berlaku jika tipe-nya adalah item).
- Probabilitas bahwa sebuah item akan dikonsumsi ketika kondisi terpenuhi dan Aksi dilakukan.
- Selalu dikonsumsi pada tingkat `1`, 50% kemungkinan konsumsi pada tingkat `0,5` dan tidak ada konsumsi pada tingkat `0`.
- Nilai defaultnya adalah `1` (selalu dikonsumsi).
- Tidak valid jika tipenya selain Item.
___

#### Peralatan
Memerlukan Item dalam keadaan Peralatan (hanya berlaku jika Tipe-nya adalah Item) atau
- Ketika diaktifkan, diperlukan untuk item dilengkapi serta dimiliki.
- Tidak valid jika tipenya selain Item.
___

### hadiah
Konfigurasi hadiah saat acara dipicu.
- Ini adalah imbalan yang diperoleh ketika waktu yang tepat terpenuhi dan syarat-syaratnya terpenuhi.
- Berbeda dengan tugas, Anda tidak perlu melakukan tindakan apa pun untuk menerimanya; akuisisi akan dilakukan secara otomatis begitu fitur tersebut diaktifkan.
- Anda dapat melakukan konfigurasi nilai negatif untuk jumlah. Misalnya, jika Anda melakukan konfigurasi untuk membuat jumlah item menjadi negatif saat permainan berakhir, Anda akan kehilangan item-item tersebut.
___

#### Tipe
Jenis elemen yang akan diperoleh.

|Tipe|Apa yang diperoleh dalam akuisisi.|
|-|-|
|Kategori.|Level (konversi pengalaman ditambahkan)|
|Aksi|Hitung dieksekusi.|
|Item|hitung jumlah harta benda|
___

#### ID elemen
ID yang mengidentifikasi elemen yang akan diakuisisi.
___

#### nilai
Nilai yang akan diperoleh
- Konfigurasi minus mengurangi jumlah kepemilikan, berapa kali kepemilikan tersebut dilakukan, dan levelnya. Namun, tidak boleh dibawah 0.
- Jika sebuah item memiliki jumlah kepemilikan maksimum (maks), jumlah kepemilikan tidak akan bertambah melebihi nilai tersebut.
- Jika tipenya adalah Kategori, nilai yang ditetapkan ditambahkan langsung ke level (1 untuk 1 level, 0,5 untuk 0,5 level). Cara yang biasa digunakan untuk menyesuaikan hal ini adalah dengan melakukan konfigurasi untuk mengatur pengalaman dari aksi tersebut. Konfigurasi ini tidak perlu kecuali tidak ada tujuan khusus.
___

#### Probabilitas [-1 hingga 1]
Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)
- Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.
- Jika nilaiya positif, penilaian hanya dilakukan saat Aksi sukses; nilai `1` berarti pasti diperoleh, sedangkan nilai `0.5` berarti diperoleh dengan probabilitas 50%.
- Jika nilainya negatif, penilaian hanya dilakukan saat Aksi gagal; nilai `-1` berarti pasti diperoleh, sedangkan nilai `-0,5` berarti diperoleh dengan probabilitas 50%.
- Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.
- Nilai defaultnya adalah `1` (pasti diperoleh jika sukses).
___

### kelompok tugas
Tidak akan digunakan dalam acara tersebut
- Karena tidak ada daftar misi atau tugas, kami tidak menggunakan penunjukan grup.
- Di editor, kolom input tidak ditampilkan.
___

## Saat aksi tunggal selesai
Terpicu saat menyelesaikan aksi tunggal seperti membuka peti harta karun
- Aksi ini akan terpicu saat Anda menyelesaikan atau memeriksa aksi jenis tunggal (seperti peti harta karun, dll.).
- Selain imbalan dari Aksi itu sendiri, Anda dapat menambahkan imbalan yang dikonfigurasi di sini.
___

### [_informasi_](id/editor/informasi)
___

### Kategori.
Tidak akan digunakan dalam acara tersebut
- Karena tidak ditampilkan dalam daftar misi atau tugas, kategori yang terkait tidak akan ditentukan.
- Di editor, kolom input tidak ditampilkan.
___

### waktu
Waktu pemicu acara (tetap)
- `obtained` telah ditetapkan dan tidak dapat diedit.
- Akan terpicu berulang kali setiap kali aksi tunggal diselesaikan.
___

### Tampilan awal
Status tampilan awal ikon acara (pemicuan ditentukan oleh waktu, dan dengan konfigurasi ini, ikon tidak akan dipicu)
- Kondisi pemicu acara ditentukan oleh waktu, dan opsi ini hanya memengaruhi tampilan ikon.
- secreted: Ikon tidak akan ditampilkan sampai semua persyaratan terpenuhi (meskipun pemicunya sendiri terjadi sesuai waktu yang ditentukan).
- hidden・hinted: Ikon tersebut akan ditampilkan dengan garis miring sebagai tanda belum dibuka.
- dirilis: Garis miring akan hilang dan ditampilkan sebagai "telah dibebaskan".
___

### syarat dan ketentuan
Syarat untuk mendapatkan imbalan dalam proses akuisisi
- Jika waktu yang tepat terpenuhi, acara tersebut akan terpicu, dan layar khusus akan terbuka untuk menampilkan isinya.
- Akuisisi imbalan hanya akan terjadi jika, pada saat diaktifkan, konfigurasi yang ditetapkan di sini terpenuhi.
- Jika tidak ada konfigurasi apa pun, Anda akan mendapatkan hadiah setiap kali fitur ini diaktifkan.
___

#### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|Kategori.|Level kategori.|
|Aksi|Hitung berapa kali aksi telah dilakukan.|
|Item|Jumlah item yang dimiliki.|
___

#### ID elemen
ID elemen yang disebut sebagai kondisi.
___

#### nilai
Nilai numerik persyaratan.
- Kondisi ini terpenuhi jika nilainya lebih besar atau sama dengan nilai yang ditentukan.
___

#### Probabilitas konsumsi [0-1].
Probabilitas sebuah item dikonsumsi (0-1, hanya berlaku jika tipe-nya adalah item).
- Probabilitas bahwa sebuah item akan dikonsumsi ketika kondisi terpenuhi dan Aksi dilakukan.
- Selalu dikonsumsi pada tingkat `1`, 50% kemungkinan konsumsi pada tingkat `0,5` dan tidak ada konsumsi pada tingkat `0`.
- Nilai defaultnya adalah `1` (selalu dikonsumsi).
- Tidak valid jika tipenya selain Item.
___

#### Peralatan
Memerlukan Item dalam keadaan Peralatan (hanya berlaku jika Tipe-nya adalah Item) atau
- Ketika diaktifkan, diperlukan untuk item dilengkapi serta dimiliki.
- Tidak valid jika tipenya selain Item.
___

### hadiah
Konfigurasi hadiah saat acara dipicu.
- Ini adalah imbalan yang diperoleh ketika waktu yang tepat terpenuhi dan syarat-syaratnya terpenuhi.
- Berbeda dengan tugas, Anda tidak perlu melakukan tindakan apa pun untuk menerimanya; akuisisi akan dilakukan secara otomatis begitu fitur tersebut diaktifkan.
- Anda dapat melakukan konfigurasi nilai negatif untuk jumlah. Misalnya, jika Anda melakukan konfigurasi untuk membuat jumlah item menjadi negatif saat permainan berakhir, Anda akan kehilangan item-item tersebut.
___

#### Tipe
Jenis elemen yang akan diperoleh.

|Tipe|Apa yang diperoleh dalam akuisisi.|
|-|-|
|Kategori.|Level (konversi pengalaman ditambahkan)|
|Aksi|Hitung dieksekusi.|
|Item|hitung jumlah harta benda|
___

#### ID elemen
ID yang mengidentifikasi elemen yang akan diakuisisi.
___

#### nilai
Nilai yang akan diperoleh
- Konfigurasi minus mengurangi jumlah kepemilikan, berapa kali kepemilikan tersebut dilakukan, dan levelnya. Namun, tidak boleh dibawah 0.
- Jika sebuah item memiliki jumlah kepemilikan maksimum (maks), jumlah kepemilikan tidak akan bertambah melebihi nilai tersebut.
- Jika tipenya adalah Kategori, nilai yang ditetapkan ditambahkan langsung ke level (1 untuk 1 level, 0,5 untuk 0,5 level). Cara yang biasa digunakan untuk menyesuaikan hal ini adalah dengan melakukan konfigurasi untuk mengatur pengalaman dari aksi tersebut. Konfigurasi ini tidak perlu kecuali tidak ada tujuan khusus.
___

#### Probabilitas [-1 hingga 1]
Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)
- Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.
- Jika nilaiya positif, penilaian hanya dilakukan saat Aksi sukses; nilai `1` berarti pasti diperoleh, sedangkan nilai `0.5` berarti diperoleh dengan probabilitas 50%.
- Jika nilainya negatif, penilaian hanya dilakukan saat Aksi gagal; nilai `-1` berarti pasti diperoleh, sedangkan nilai `-0,5` berarti diperoleh dengan probabilitas 50%.
- Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.
- Nilai defaultnya adalah `1` (pasti diperoleh jika sukses).
___

### kelompok tugas
Tidak akan digunakan dalam acara tersebut
- Karena tidak ada daftar misi atau tugas, kami tidak menggunakan penunjukan grup.
- Di editor, kolom input tidak ditampilkan.