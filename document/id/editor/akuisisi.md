
# akuisisi
Konfigurasi akuisisi level item dan kategori.
- Konfigurasi akuisisi.
- Anda dapat mengubah level kategori serta item, dan hitung Aksi telah dilakukan.
- Probabilitas untuk mendapatkan produk dapat dikonfigurasi.

|Tipe|Apa yang Anda akuisisi.|
|-|-|
|Kategori.|level|
|Aksi|Hitung dieksekusi.|
|Item|hitung jumlah harta benda|
- [_type_](id/editor/Jenis)
___

## Tipe
Jenis elemen yang akan diperoleh.

|Tipe|Apa yang diperoleh dalam akuisisi.|
|-|-|
|Kategori.|Level (konversi pengalaman ditambahkan)|
|Aksi|Hitung dieksekusi.|
|Item|hitung jumlah harta benda|
___

## ID elemen
ID yang mengidentifikasi elemen yang akan diakuisisi.
___

## nilai
Nilai yang akan diperoleh
- Konfigurasi minus mengurangi jumlah kepemilikan, berapa kali kepemilikan tersebut dilakukan, dan levelnya. Namun, tidak boleh dibawah 0.
- Jika sebuah item memiliki jumlah kepemilikan maksimum (maks), jumlah kepemilikan tidak akan bertambah melebihi nilai tersebut.
- Jika tipenya adalah Kategori, nilai yang ditetapkan ditambahkan langsung ke level (1 untuk 1 level, 0,5 untuk 0,5 level). Cara yang biasa digunakan untuk menyesuaikan hal ini adalah dengan melakukan konfigurasi untuk mengatur pengalaman dari aksi tersebut. Konfigurasi ini tidak perlu kecuali tidak ada tujuan khusus.
___

## Probabilitas [-1 hingga 1]
Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)
- Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.
- Jika nilaiya positif, penilaian hanya dilakukan saat Aksi sukses; nilai `1` berarti pasti diperoleh, sedangkan nilai `0.5` berarti diperoleh dengan probabilitas 50%.
- Jika nilainya negatif, penilaian hanya dilakukan saat Aksi gagal; nilai `-1` berarti pasti diperoleh, sedangkan nilai `-0,5` berarti diperoleh dengan probabilitas 50%.
- Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.
- Nilai defaultnya adalah `1` (pasti diperoleh jika sukses).