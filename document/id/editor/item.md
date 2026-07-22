
# Item
Elemen-elemen barang seperti peralatan dan bahan habis pakai
- Elemen ini sendiri berkaitan dengan kepemilikan benda-benda seperti peralatan, barang habis pakai, dan barang berharga.
- Hanya satu yang dapat dilengkapi dalam suatu kategori, atau dapat tidak ada.
- Ada juga cara hitung untuk menggunakannya.
___

## [_informasi_](id/editor/informasi)
___

## Kategori.
ID dari kategori yang dimiliki item tersebut
- Tentukan ID dari Kategori yang dimiliki Item ini.
___

## kelompok (usu. orang)
Menampilkan menit kelompok Item
- Terapkan salah satu grup yang konfigurasi di Basic.
- Daftar item ditampilkan menurut urutan kelompok yang konfigurasi.
- Jika dibiarkan kosong, tidak ada pengelompokan yang dibuat.
- [_general_](id/editor/umum)
___

## Keadaan pembebasan awal
Status tampilan awal dan status pembebasan elemen (akan secara otomatis beralih ke status yang lebih tinggi jika persyaratan aktivasi terpenuhi)
- secreted: Tidak akan ditampilkan sama sekali di antarmuka pengguna (UI) sampai semua persyaratan terpenuhi (tidak muncul di Petunjuk, dan disembunyikan dalam daftar persyaratan/hadiah).
- hidden: Akan tersembunyi sepenuhnya (namanya juga akan berwarna abu-abu dan tidak dapat dioperasikan) selama tidak dirujuk oleh elemen pelepasan mana pun dan persyaratannya belum terpenuhi.
- hinted (default): Hanya nama yang ditampilkan sebagai pratinjau, tetapi tidak dapat dioperasikan sampai dibuka.
- released: Dapat diakses dan dioperasikan sejak awal tanpa memandang kondisi apa pun (sebelumnya disebut “Tampilkan sejak awal”).
___

## Nilai pembelian [koin].
Konfigurasi harga beli Item.
- Anda tidak dapat membeli Item jika Anda belum pernah memilikinya.

|nilai|perawatan|
|-|-|
|0|tidak ada|
|Nilai yang lebih besar dari nol.|Nilai yang bisa Anda beli.|
|Nilai yang kurang dari nol (misalnya -1)|Tidak ada (dianggap nol).|
___

## Nilai [koin].
Konfigurasi harga jual Item.
- Konfigurasi harga jual Item.

|nilai|perawatan|
|-|-|
|0|tidak ada|
|Nilai yang lebih besar dari nol.|Jual dengan nilai tersebut.|
|Nilai yang kurang dari nol (misalnya -1)|Tingkat diskon konfigurasi umum dikalikan dengan nilai penawaran (jika nilai penawaran nol, maka tidak ada)|
- [_general_](id/editor/umum)
___

## Jumlah maksimum yang dimiliki [pcs].
Batasan jumlah maksimum item yang dimiliki.
- Jika 0, tidak ada batasan jumlah yang dapat dimiliki.
- Jika lebih dari 1, Anda hanya dapat memiliki hingga jumlah tersebut. Jika batas maksimum telah tercapai, akuisisi lebih lanjut tidak akan menambah jumlah yang dimiliki.
___

## Tipe Peralatan
Konfigurasi tipe untuk peralatan, efek, dan konsumsi Item.
- Item yang dapat dilengkapi diperlukan untuk termasuk dalam grup yang ditentukan dalam Kategori `equipmentGroups`.
- Hanya satu item yang dapat dilengkapi dalam grup yang sama.

|nilai|Peralatan|Efektivitas.|konsumsi|Contoh.|
|-|-|-|-|-|
|'perlu'.|Diperlukan|melengkapi|tidak ada|Pedang, baju besi, dan peralatan lainnya.|
|'habis pakai'.|Diperlukan|melengkapi|Dikonsumsi saat aksi dilakukan|Item yang dikonsumsi untuk mendapatkan efek, seperti ramuan.|
|'tidak perlu'.|Tidak perlu|Setiap saat saat memegang kamera.|tidak ada|Item pasif yang efektif hanya dengan memilikinya.|
|'tidak mungkin'.|tidak diperbolehkan|tidak ada|tidak ada|Item-item yang tidak ada seperti material dan puing-puing.|
___

## [_syarat dan ketentuan_](id/editor/persyaratan)
___

## [_properti_](id/editor/properti)
___

## ID Mata Uang yang Diperdagangkan
ID mata uang yang digunakan untuk jual beli Item ini
- Tentukan ID mata uang (koin) yang digunakan secara umum untuk nilai beli dan nilai jual.
- Jika kolom tersebut kosong, mata uang utama (yang tercantum di bagian awal daftar koin) akan digunakan.