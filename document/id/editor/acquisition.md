
# akuisisi
アイテムやカテゴリレベルの取得設定
- Konfigurasi akuisisi.
- アイテムの他にカテゴリのレベル、アクションの実行した回数を変更できます。
- Probabilitas untuk mendapatkan produk dapat dikonfigurasi.

|Tipe|Apa yang Anda akuisisi.|
|-|-|
|カテゴリ|level|
|Aksi|Hitung dieksekusi.|
|Item|hitung jumlah harta benda|
- [_type_](id/editor/type)
___

## Tipe
Jenis elemen yang akan diperoleh.

|Tipe|Apa yang diperoleh dalam akuisisi.|
|-|-|
|カテゴリ|Level (konversi pengalaman ditambahkan)|
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
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

## Probabilitas [-1 hingga 1]
Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)
- Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.
- Jika nilainya positif, penilaian hanya dilakukan saat aksi berhasil: dengan `1` pasti diperoleh, dan dengan `0.5` diperoleh dengan peluang 50%.
- Jika nilainya negatif, penilaian hanya dilakukan saat aksi gagal: dengan `-1` pasti diperoleh, dan dengan `-0.5` diperoleh dengan peluang 50%.
- Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.
- Nilai defaultnya adalah `1` (pasti diperoleh jika sukses).