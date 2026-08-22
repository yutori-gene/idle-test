
# umum
Konfigurasi dasar game, termasuk konfigurasi bahasa dan level
___

## bahasa
Bahasa dunia pada saat penciptaannya.
- Konfigurasi bahasa yang digunakan dalam editor dunia ini.
- Bahasa pertama yang ditampilkan saat pengguna memulai permainan.
___

## terjemahan
Menyiapkan terjemahan bahasa atau
- Jika diaktifkan, pengguna dapat bermain dalam bahasa apa pun.
- Jika dinonaktifkan, Anda hanya dapat memutar dalam bahasa yang dipilih dalam konfigurasi bahasa.
- Jika terjemahan diaktifkan, data terjemahan untuk setiap bahasa diperlukan.
- [_translation_](id/editor/translation)
___

## Waktu offline maksimum [jam].
Batas waktu untuk kemajuan mati.
- Konfigurasi jumlah waktu maks kemajuan saat mati.
- Misalnya, jika 6 waktu ditetapkan, proses kembali mati hingga 6 waktu akan diproses, tetapi jika waktu atas itu diizinkan, waktu mati akan diperlakukan sebagai 6 waktu.
- Jika 0 waktu ditetapkan, tidak ada proses pemrosesan yang terjadi sama sekali saat kembali mati.
- Nilai maks adalah 24 waktu.
- [_category_](id/editor/category)
___

## Kategori maks
Batas level atas untuk kategori.
- Konfigurasi level maks untuk setiap kategori.
- Jika akuisisi pengalaman terjadi di luar level ini, level maks yang konfigurasi di sini digunakan dalam perhitungan properti.
- Nilai ini tidak memiliki hubungan untuk kategori tanpa level.
- [_category_](id/editor/category)
___

## fungsi terkunci
Menyembunyikan item sampai persyaratan terpenuhi
- Jika diaktifkan, item tindakan Kategori akan disembunyikan sementara item tersebut tidak ada yang pernah menggunakannya atau memilikinya dan persyaratannya belum terpenuhi.
- Jika dinonaktifkan, semua item akan ditampilkan dari awal, tetapi tidak dapat dijalankan atau dilengkapi dengan Peralatan hingga persyaratan terpenuhi.
- [_category_](id/editor/category)
- [_action_](id/editor/action)
- [_item_](id/editor/item)
___

## mata uang
Konfigurasi mata uang (koin) yang digunakan dalam game
- Konfigurasi mata uang yang digunakan dalam game.
- Anda dapat mendefinisikan beberapa mata uang, dan masing-masing dapat dikonfigurasi sebagai informasi (ID, nama, ikon, warna, dll.).
- Mata uang digunakan untuk membeli dan menjual item, serta untuk memperluas kapasitas inventaris.
- Mata uang yang berada di urutan pertama akan diperlakukan sebagai mata uang utama, dan akan digunakan jika ID mata uang (`coinId`) tidak ada untuk Item atau kapasitas.
- [_information_](id/editor/information)
- [_item_](id/editor/item)
___

## kapasitas
Konfigurasi kapasitas inventaris.
- Mengontrol jumlah maksimum berbagai jenis item yang dapat dimiliki pemain.
- Setiap item dikendalikan oleh jumlah jenis item yang Anda miliki, tidak ada jumlah item yang Anda miliki.
- Jika `initialCount` diatur ke 0, kapasitasnya menjadi tanpa batas.
- Ketika merujuk pada item kapasitas dalam kondisi atau hadiah, gunakan ID yang ditetapkan dalam konfigurasi di sini.
- [_item_](id/editor/item)
___

### [_informasi_](id/editor/information)
___

### Nilai default [pcs].
Kapasitas inventaris awal (jumlah item berbeda yang dapat disimpan)
- Kapasitas awal (jumlah item berbeda yang dapat dimiliki) mulai permainan.
- Jika diatur ke `0`, kapasitasnya menjadi tanpa batas.
___

### Harga dasar [koin].
Harga awal untuk satu kapasitas tambahan.
- Harga dasar (dalam koin) untuk meningkatkan kapasitas inventaris sebanyak satu slot.
- Harga aktual dihitung sebagai 'harga dasar x persentase kenaikan ^ hitung beli'
- Contoh: harga dasar 100, tingkat kenaikan 1,2, 100 koin pertama, 120 koin kedua, 144 koin ketiga.
___

### Persentase peningkatan [kali].
Persentase peningkatan biaya perluasan kapasitas
- Ini adalah pengganda untuk berapa banyak biaya ekspansi kapasitas meningkat dengan beli ke-n.
- Dengan `1.0` harganya selalu sama, dan dengan `1.2` harganya naik 20% setiap kali pembelian.
- Rumus: harga dasar x persentase kenaikan ^ jumlah kali beli

|tingkat kenaikan|Penambahan pertama.|Kenaikan ke-5.|Kenaikan ke-10.|Kenaikan ke-100.|Kenaikan ke-1000.|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.05|x1.00|x1.22|x1.63|x131.50|x1.7×10²⁰|
|1.10|x1.00|x1.61|x2.59|x1.4 x 10⁴|x2.7×10⁴¹|
|1.20|x1.00|x2.49|x6.19|x8.3 x 10⁷|x8.3×10⁷⁹|
|1.50|x1.00|x5.06|x57.67|x1.9×10¹⁷|x7.0×10¹⁷⁶|
___

### ID Mata Uang
ID mata uang yang digunakan untuk perluasan kapasitas
- Tentukan ID mata uang (koin) yang akan digunakan untuk harga perluasan kapasitas inventaris.
- Jika kolom tersebut kosong, mata uang utama (yang tercantum di bagian awal daftar koin) akan digunakan.
___

### Batas beli [kali]
Jumlah maksimum kali beli kuota
- Ini adalah batas maksimum jumlah kali yang bisa dibeli untuk membeli kapasitas menggunakan mata uang.
- Jika diatur ke `0`, Anda dapat beli tanpa batas.
- Jika diatur menjadi `-1`, Anda tidak akan bisa membeli.
- Peningkatan kapasitas yang berasal dari imbalan tidak termasuk dalam batas atas ini.
___

## Antrian
Konfigurasi jumlah slot antrian untuk eksekusi beruntun aksi
- Mengelola jumlah slot antrian untuk menjalankan aksi secara berurutan.
- Antrian mencakup aksi yang sedang berjalan, dan aksi di posisi terdepan adalah yang dijalankan. Jika slotnya `1`, hanya aksi yang sedang berjalan yang muat sehingga tidak ada yang bisa menunggu.
- Jumlah slot, sama seperti kapasitas, dapat dibeli menggunakan mata uang, dan Anda juga dapat menambahnya dengan memilih Item dari antrian sebagai hadiah dari Aksi atau acara.
- Jika Anda ingin merujuk item dalam antrian berdasarkan kondisi atau imbalan, gunakan ID yang telah dikonfigurasi di sini.
- [_item_](id/editor/item)
___

### [_informasi_](id/editor/information)
___

### Nilai default [pcs].
Jumlah slot eksekusi berurutan saat permainan mulai
- Ini adalah jumlah slot antrian saat permainan dimulai.
- Nilai minimumnya adalah `1` (aksi yang sedang berjalan memakai satu slot, dan tidak ada perlakuan seperti `0` = tak terbatas, seperti pada kapasitas).
___

### Harga dasar [koin].
Harga awal untuk menambah satu slot
- Ini adalah harga dasar (koin) untuk menambah satu slot eksekusi berurutan.
- Harga aktual dihitung sebagai 'harga dasar x persentase kenaikan ^ hitung beli'
- Contoh: harga dasar 100, tingkat kenaikan 1,2, 100 koin pertama, 120 koin kedua, 144 koin ketiga.
___

### Persentase peningkatan [kali].
Tingkat kenaikan biaya perluasan kapasitas
- Ini adalah faktor pengali yang menunjukkan seberapa besar kenaikan biaya perluasan kuota saat membeli ke-n kali.
- Dengan `1.0` harganya selalu sama, dan dengan `1.2` harganya naik 20% setiap kali pembelian.
- Rumus: harga dasar x persentase kenaikan ^ jumlah kali beli
___

### ID Mata Uang
ID mata uang yang digunakan untuk perluasan kuota
- Tentukan ID mata uang (koin) yang akan digunakan untuk harga perluasan batas eksekusi beruntun.
- Jika kolom tersebut kosong, mata uang utama (yang tercantum di bagian awal daftar koin) akan digunakan.
___

### Batas beli [kali]
Jumlah maksimum pembelian slot
- Ini adalah batas maksimum jumlah kali Anda dapat membeli slot eksekusi beruntun dengan mata uang.
- Jika diatur ke `0`, Anda dapat beli tanpa batas.
- Jika diatur menjadi `-1`, Anda tidak akan bisa membeli.
- Penambahan kuota berdasarkan imbalan tidak termasuk dalam batas maksimum ini.
___

## Tingkat peningkatan pengalaman [kali].
Persentase peningkatan tingkat kesulitan level.
- Seiring dengan meningkatnya level suatu kategori, maka semakin tinggi pula tingkat peningkatan pengalaman yang diperlukan untuk mencapai level berikutnya.
- Meningkatkan nilai ini akan meningkatkan tingkat kesulitan.
- Jumlah pengalaman yang diperlukan untuk naik ke level berikutnya adalah (tingkat kenaikan pengalaman)^(level saat ini - 1).

|Tingkat peningkatan pengalaman|Lv.1|Lv.2|Lv.10|Lv.50|Lv.99.|
|-|-|-|-|-|-|
|0|x1.00|x1.00|x1.00|x1.00|x1.00|
|0.02|x1.00|x1.02|x1.22|x2.69|x5.52|
|0.05|x1.00|x1.05|x1.55|x11.47|x131.50|
|0.10|x1.00|x1.10|x2.36|x117.39|x5.7×10⁴|
|0.20|x1.00|x1.20|x6.19|x3,3 x 10³|x1,3 x 10¹¹|
- [_category_](id/editor/category)
___

## pembatasan level Aksi
Meminta hitung berapa kali aksi atribut yang sama telah dieksekusi untuk eksekusi suatu aksi.
- Jika diaktifkan, hitung kali aksi dengan atribut yang sama telah dieksekusi secara otomatis ditambahkan ke kondisi eksekusi setiap tindakan.
- Jumlah hitung yang diperlukan sama dengan nilai level aksi.
- Jika tidak ada atribut yang ditetapkan, ID dari kategori yang digunakan akan digunakan.
___

## Rasio properti [kali]
Berapa kali properti berubah setiap 10 perbedaan level
- Mengatur berapa kali setiap properti berubah setiap kali perbedaan antara level kategori dan level aksi bertambah `10`.
- Rasio dihitung sebagai (rasio properti)^(perbedaan level÷10). Ketika perbedaan level adalah `0`, rasionya `1` dan nilai yang diatur pada aksi digunakan apa adanya.
- Serangan dan pengalaman bertambah sebesar rasio ini, sedangkan pertahanan (kerusakan yang diterima) dan kecepatan (waktu yang dibutuhkan) berkurang dengan rasio yang sama.
- Akurasi, penghindaran, probabilitas sukses, dan pemulihan adalah nilai yang berada dalam rentang `0` hingga `100`%, sehingga rasio dikenakan pada perbandingan antara sisi yang tercapai dan sisi yang tidak tercapai. `0`% dan `100`% tidak berubah, dan nilai di antaranya tidak pernah melebihi `100`%.
- Pertahanan, penghindaran, dan kecepatan hanya menerima setengah efek rasio (perbedaan level `20` setara dengan perbedaan level `10` pada properti lain). Pertahanan dan penghindaran bekerja ganda pada tingkat terkena serangan dan kerusakan yang diterima, sedangkan kecepatan bekerja pada semua properti lain sebagai jumlah pelaksanaan, sehingga efeknya dilemahkan agar tetap seimbang.
- Patokannya adalah (tingkat kenaikan pengalaman) pangkat `6.7`. Di atas itu, kenaikan level makin cepat seiring naiknya level; di bawah itu, level-level akhir memerlukan lebih banyak waktu.
- Jika diatur ke `1`, perbedaan level tidak lagi berpengaruh. Semakin besar nilainya, semakin tajam keuntungan dan kerugian dari perbedaan level.

|Rasio properti|Perbedaan level -20|Perbedaan level -10|Perbedaan level 0|Perbedaan level +10|Perbedaan level +20|
|-|-|-|-|-|-|
|`1`|`x1.00`|`x1.00`|`x1.00`|`x1.00`|`x1.00`|
|`1.5`|`x0.44`|`x0.67`|`x1.00`|`x1.50`|`x2.25`|
|`2`|`x0.25`|`x0.50`|`x1.00`|`x2.00`|`x4.00`|
|`3`|`x0.11`|`x0.33`|`x1.00`|`x3.00`|`x9.00`|
- [_action_](id/editor/action)
- [_property_](id/editor/property)
___

## [_nilai tempur_](id/editor/combat)