
# syarat dan ketentuan
Konfigurasi syarat untuk penggunaan dan tampilan elemen.
- Ini adalah konfigurasi kondisi untuk setiap elemen berdasarkan kategori, aksi, dan item.
- Jika semua konfigurasi tidak ada, operasi yang ditunjukkan dalam tabel tidak dapat dilakukan.
- Jika fungsi kunci terkunci, elemen itu sendiri akan disembunyikan sampai kondisi terpenuhi.

|Di mana harus melakukan konfigurasi|Apa yang tidak ada kecuali jika syarat-syaratnya terpenuhi.|
|-|-|
|Kategori.|Eksekusi semua aksi dan manipulasi Item dalam Kategori|
|Aksi|Pelaksanaan aksi|
|Item|Manipulasi item (misalnya Peralatan)|
- [_type_](id/editor/Jenis)
___

## Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|Kategori.|Level kategori.|
|Aksi|Hitung berapa kali aksi telah dilakukan.|
|Item|Jumlah item yang dimiliki.|
___

## ID elemen
ID elemen yang disebut sebagai kondisi.
___

## nilai
Nilai numerik persyaratan.
- Kondisi ini terpenuhi jika nilainya lebih besar atau sama dengan nilai yang ditentukan.
___

## Probabilitas konsumsi [0-1].
Probabilitas sebuah item dikonsumsi (0-1, hanya berlaku jika tipe-nya adalah item).
- Probabilitas bahwa sebuah item akan dikonsumsi ketika kondisi terpenuhi dan Aksi dilakukan.
- Selalu dikonsumsi pada tingkat `1`, 50% kemungkinan konsumsi pada tingkat `0,5` dan tidak ada konsumsi pada tingkat `0`.
- Nilai defaultnya adalah `1` (selalu dikonsumsi).
- Tidak valid jika tipenya selain Item.
___

## Peralatan
Memerlukan Item dalam keadaan Peralatan (hanya berlaku jika Tipe-nya adalah Item) atau
- Ketika diaktifkan, diperlukan untuk item dilengkapi serta dimiliki.
- Tidak valid jika tipenya selain Item.