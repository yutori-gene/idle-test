
# Item
Elemen-elemen barang seperti peralatan dan bahan habis pakai
- Elemen ini sendiri berkaitan dengan kepemilikan benda-benda seperti peralatan, barang habis pakai, dan barang berharga.
- Hanya satu yang dapat dilengkapi dalam suatu kategori, atau dapat tidak ada.
- Ada juga cara hitung untuk menggunakannya.
___

## [_informasi_](id/editor/information)
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
- [_general_](id/editor/general)
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
- [_general_](id/editor/general)
___

## Jumlah maksimum yang dimiliki [pcs].
Batasan jumlah maksimum item yang dimiliki.
- Jika 0, tidak ada batasan jumlah yang dapat dimiliki.
- Jika lebih dari 1, Anda hanya dapat memiliki hingga jumlah tersebut. Jika batas maksimum telah tercapai, akuisisi lebih lanjut tidak akan menambah jumlah yang dimiliki.
___

## Tipe Peralatan
Konfigurasi tipe untuk peralatan, efek, dan konsumsi Item.
- Item yang dapat dikenakan harus termasuk dalam grup yang ditentukan pada `equipmentGroups` milik kategori.
- Hanya satu item yang dapat dilengkapi dalam grup yang sama.
- `unnecessary` tetap berefek terlepas dari dikenakan atau tidak, dan besar efeknya sebanding dengan jumlah yang dimiliki (tidak berefek pada 0, n kali lipat pada n).

|nilai|Peralatan|Efektivitas.|konsumsi|Contoh.|
|-|-|-|-|-|
|`necessary`|Diperlukan|Hanya saat melengkapi (1 buah)|tidak ada|Pedang, baju besi, dan peralatan lainnya.|
|`consumable`|Diperlukan|Hanya saat melengkapi (1 buah)|Dikonsumsi saat aksi dilakukan|Item yang dikonsumsi untuk mendapatkan efek, seperti ramuan.|
|`unnecessary`|Tidak perlu|Selama dibawa, selalu (berbanding lurus dengan jumlah yang dibawa)|tidak ada|Item pasif yang efektif hanya dengan memilikinya.|
|`impossible`|tidak diperbolehkan|tidak ada|tidak ada|Item-item yang tidak ada seperti material dan puing-puing.|
___

## [_syarat dan ketentuan_](id/editor/requirement)
___

## [_properti_](id/editor/property)
___

## ID Mata Uang yang Diperdagangkan
ID mata uang yang digunakan untuk jual beli Item ini
- Tentukan ID mata uang (koin) yang digunakan secara umum untuk nilai beli dan nilai jual.
- Jika kolom tersebut kosong, mata uang utama (yang tercantum di bagian awal daftar koin) akan digunakan.
___

## [_Skill_](id/editor/skill)