
# informasi
Lakukan konfigurasi untuk menetapkan informasi dasar tentang elemen (ID, nama, ikon, warna, dll.)
- ワールド内の各要素（カテゴリ、アクション、アイテム、イベントなど）に共通する基本情報の項目です。
- Setiap elemen memiliki konfigurasi yang terpisah.
___

## ID
ID unik untuk mengidentifikasi elemen
- ID untuk mengidentifikasi setiap elemen secara unik.
- Di editor, ini adalah string untuk mengidentifikasi elemen.
- Misalnya, ID menentukan Item mana yang diperoleh ketika Aksi selesai.

!> Setelah ID dikonfigurasi, tidak ada yang mengubah ID tersebut setelah game didistribusikan. Mengubahnya akan mengakibatkan ketidakkonsistenan dengan data game yang ada dan game tidak akan berfungsi dengan baik.
___

### Nama yang ditampilkan.
Nama tampilan dibuat secara otomatis dari ID
- Karakter yang dapat digunakan adalah kombinasi huruf, tanda hubung dan hitung.
- Jika nama belum ditetapkan, huruf pertama dari setiap kata menggunakan huruf besar dan tanda hubung diganti dengan spasi, yang secara otomatis dikonfigurasi dalam nama.
- Untuk bahasa selain bahasa Inggris, konfigurasi entri nama diperlukan secara individual.
___

#### Contoh.
Contoh kehidupan nyata dari konversi ID
- Jika ID-nya `stylish-strong-axe`, maka namanya menjadi `Stylish Strong Axe`.
___

### Terdapat tidak ada duplikasi.
Larangan duplikasi ID dalam tipe yang sama.
- 要素の判別に用いられるため、カテゴリ、アクション、アイテム、イベント、プリセットの各タイプ内で重複しないでください。
- Memiliki ID yang sama untuk tipe yang berbeda tidak menjadi masalah.
- [_type_](id/editor/type)
___

## Nama.
Nama elemen seperti yang terlihat
- Nama elemen yang ditampilkan dalam permainan.
- Bahasa selain Inggris juga dapat dimasukkan.
- Nama yang menduplikasi elemen lain dapat diterima.
- Jika terlalu panjang, bagian yang meluap akan disingkat dengan `…` pada tampilan selama permainan.
___

### Konversi otomatis dari ID
Pembuatan nama otomatis dari ID
- Jika bidang ini dibiarkan kosong, informasi akan ditampilkan secara otomatis berdasarkan ID. Untuk informasi lebih lanjut, lihat bagian sebelumnya.
___

## catatan penjelasan
Deskripsi elemen terperinci.
- Deskripsi elemen yang ditampilkan dalam permainan.
- Bahasa selain bahasa Inggris dapat dimasukkan. Semua teks, bahkan teks yang panjang sekalipun, akan ditampilkan.
- Jika tidak ada penjelasan yang diberikan, biarkan kosong.
___

## ikon
Menetapkan ikon untuk mewakili elemen.
- Ikon dapat dikonfigurasi sebagai gambar, Iconify atau emoji.
- Iconify adalah layanan yang menawarkan berbagai macam ikon.
- Jika lebih dari hitung yang dikonfigurasi, gambar, Ikonify, dan piktogram akan diprioritaskan dan ditampilkan dalam urutan tersebut.
___

### Gambar.
Gunakan file gambar apa saja
- Gambar yang mewakili elemen.
- Jika ukuran file besar, maka ukuran file akan diubah secara otomatis.
- Tidak perlu jika Iconify atau piktogram konfigurasi.
___

#### Jenis berkas
Format berkas gambar yang didukung
- Format umum yang dapat ditampilkan peramban bisa digunakan.
- JPEG, PNG, GIF, WebP, SVG, dan lainnya.
___

### Iconify
Menggunakan set ikon Iconify
- Ikon yang mewakili elemen.
- Iconify adalah layanan yang menawarkan berbagai macam ikon.
- Jika gambar sudah dalam konfigurasi, maka gambar tersebut akan didahulukan.
___

#### Iconify
Cara memilih ikon dari Iconify
- Cari ikon yang dapat ditampilkan di `Iconify`.
- Anda dapat dengan cepat menemukan ikon terbaik dengan mencari ikon.
- Pilih ikon untuk melihat pengenalnya (set ikon ketik `:` nama ikon), seperti `game-icons:sword-wound`, dan tempelkan langsung ke dalam bidang ikon ini.
![iconify-selection.png](../../resources/iconify-selection.png)
- [_iconify_](https://icon-sets.iconify.design)
___

### piktograf
Tampilan ikon dengan piktogram
- Menampilkan piktogram sebagai ikon.
- Ini dapat dikonversi dari teks ke piktogram dan dikonfigurasi dengan cepat.
- Untuk piktogram, masukkan piktogram Unicode apa adanya.
- Karena piktogram yang diperkenalkan dalam lingkungan eksekusi digunakan, maka piktogram ini ditampilkan sedikit berbeda untuk pengguna yang berbeda.
- Iconify memungkinkan Anda untuk konfigurasi emoji yang tidak ada pada setiap lingkungan
- Karakter non-pikografi dapat ditampilkan, tetapi tampilan mungkin rusak jika ada hitung karakter.
- Masukkan piktogram, misalnya, `🗡️` atau `⚔️`.
___

## Warna
Konfigurasi warna tampilan elemen.
- Sebagai warna elemen, warna ini diterapkan ke ikon elemen dan warna latar belakang.
- Pilih dari pemilih warna editor.
___

### Pewarisan dari elemen induk
Mengikuti warna yang diatur pada elemen induk
- Jika dikosongkan, warna yang diatur pada elemen induk akan diwarisi.
- Hierarki tipe setiap elemen adalah sebagai berikut.
- 例えば、アクションに個別の色が設定されている場合はそれが利用されますが、アクションに個別の色が設定されていない場合はカテゴリ又はワールドの色が使用されます。
- イベントもカテゴリを設定している場合は、アクションやアイテムと同じようにそのカテゴリの色を引き継ぎます。
```
world
├── category
├── action
├── item
├── skill
├── group
├── task
└── preset
```
- [_type_](id/editor/type)