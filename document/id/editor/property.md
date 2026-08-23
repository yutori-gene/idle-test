
# properti
Konfigurasi efek yang dimiliki Item.
- Ini adalah item efek yang dapat dikonfigurasi pada item.
- Item dengan tipe peralatan `necessary` atau `consumable` hanya berefek selama dikenakan. `unnecessary` berefek cukup dengan dimiliki, dan besar efeknya sebanding dengan jumlah yang dimiliki (dua kali lipat jika memiliki 2).
- Karena efek `unnecessary` menggunakan jumlah yang dimiliki sebagai faktor pengganda, maka `maximum` (jumlah maksimum yang dimiliki) menjadi batas atas efek tersebut. Saat menyesuaikan keseimbangan, harap lakukan konfigurasi nilai ini bersamaan dengan `maximum`.
- Nilai untuk kedua item dihitung sebagai penyesuaian untuk perbedaan level antara level pemain dan level Aksi.
- Misalnya, jika nilai serangan adalah 10, serangan dihitung seolah-olah level pemain 10 lebih tinggi dari level Aksi. Nilai minus adalah kebalikannya.
- attack, defence, accuracy, evasion, dan restore hanya berlaku untuk aksi bertipe `stamina`.

|properti|Rincian efektivitas.|
|-|-|
|kecepatan|Mengurangi waktu yang diperlukan untuk suatu aksi. Waktu yang diperlukan bervariasi secara terbalik dengan perbedaan level (efek rasio hanya setengah).|
|kesempatan|Mengubah probabilitas sukses suatu aksi. Rasio dikenakan pada perbandingan antara sukses dan gagal, sehingga tidak pernah melebihi `100`%.|
|pengalaman|Mengubah pengalaman akuisisi. Meningkat secara proporsional dengan perbedaan level (perhitungannya terbalik: semakin tinggi Aksi level, semakin banyak yang Anda peroleh).|
|serangan|Mengubah kerusakan stamina yang diberikan kepada lawan. (Hanya Aksi Stamina).|
|pertahanan|Mengurangi kerusakan stamina yang diterima dari lawan (efek rasio hanya setengah). (hanya aksi stamina)|
|akurasi|Mengurangi tingkat serangan yang meleset. (hanya aksi stamina).|
|penghindaran|Mengubah tingkat penghindaran serangan lawan (efek rasio hanya setengah). (hanya aksi stamina)|
|mengembalikan|Mengubah jumlah stamina yang dipulihkan di akhir aksi. Semakin mendekati pemulihan penuh, semakin landai kenaikannya. (hanya untuk aksi stamina)|
___

## カテゴリ
プロパティを適用するカテゴリの指定
- このプロパティを適用するカテゴリのIDを設定します。
- `*`を設定すると全カテゴリに適用されます。
- 空欄の場合はアイテムが属するカテゴリに適用されます。
___

## Nilai serangan [perbedaan level].
Koreksi kerusakan stamina yang ditimbulkan pada lawan (hanya berlaku untuk aksi stamina).
- Kerusakan serangan dihitung dengan asumsi level pemain jauh lebih tinggi dari level Aksi.
___

## Nilai pertahanan [perbedaan level].
Koreksi kerusakan stamina yang diterima dari lawan (hanya berlaku untuk aksi STAMINA).
- Kerusakan yang diderita dihitung seolah-olah level pemain adalah nilai yang lebih tinggi dari level Aksi. Semakin tinggi nilaiya, semakin sedikit kerusakan yang ditimbulkan.
___

## Nilai akurasi [perbedaan level].
Koreksi untuk tingkat melesetnya serangan (hanya berlaku untuk aksi stamina).
- Tingkat meleset dihitung dengan asumsi bahwa level pemain adalah nilai ini lebih tinggi dari level Aksi. Semakin tinggi nilaiya, semakin bawah tingkat kesalahan.
___

## Nilai penghindaran [perbedaan level].
Koreksi tingkat penghindaran serangan lawan (hanya berlaku untuk aksi stamina).
- Level penghindaran dihitung dengan menganggap level pemain lebih tinggi dari level Aksi sebesar nilai ini. Semakin tinggi nilainya, semakin mudah untuk menghindari serangan lawan.
___

## Nilai pemulihan [perbedaan level].
Koreksi untuk pemulihan stamina (hanya berlaku untuk tindakan STAMINA).
- Jumlah pemulihan stamina dihitung dengan asumsi bahwa level pemain jauh lebih tinggi daripada level Aksi.
___

## Kecepatan [perbedaan level].
Koreksi terhadap waktu aksi
- Waktu yang dibutuhkan dihitung dengan asumsi bahwa level pemain adalah nilai ini lebih tinggi dari level Aksi. Semakin tinggi nilaiya, semakin pendek waktu yang dibutuhkan.
___

## Probabilitas sukses [perbedaan level].
Koreksi terhadap probabilitas keberhasilan aksi.
- Probabilitas sukses tindakan dihitung dengan asumsi bahwa level pemain adalah nilai ini lebih tinggi dari level aksi. Semakin tinggi nilainya, semakin tinggi probabilitas suksesnya.
___

## Pengalaman [perbedaan level].
Koreksi terhadap pengalaman akuisisi
- Pengalaman dihitung seolah-olah level pemain jauh lebih rendah daripada level Aksi (semakin tinggi level Aksi, semakin banyak pengalaman yang diperoleh, karena perhitungannya terbalik).