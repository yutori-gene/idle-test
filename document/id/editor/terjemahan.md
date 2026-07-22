
# terjemahan
Konfigurasi untuk menerjemahkan teks dalam game ke dalam bahasa lain.
- Mengatur teks yang akan diterjemahkan.
- Konfigurasi bahasa tersedia apabila konfigurasi terjemahan diaktifkan.
- Jika terjemahan dinonaktifkan, informasi yang dijelaskan selama pengembangan akan ditampilkan apa adanya.
- Konfigurasi terjemahan dan pengalihan bahasa tidak dapat dilakukan selama pengembangan pra-publikasi.
___

## Aktivasi terjemahan
Konfigurasi mati fungsi terjemahan.
- Konfigurasi bahasa tersedia apabila konfigurasi terjemahan diaktifkan.
- Terjemahan tidak diaktifkan selama pengembangan sebelum publikasi. Peralihan antar bahasa akan diaktifkan setelah publikasi.
- Jika terjemahan diaktifkan, sepuluh bahasa yang berbeda akan didukung dan data terjemahan diperlukan untuk semua bahasa. Tidak mungkin hanya mengaktifkan beberapa bahasa saja.
- Ketika pengguna memulai permainan, bahasa yang digunakan dalam pengembangan akan ditampilkan terlebih dahulu. Bahasa tersebut kemudian dapat diubah ke bahasa apa pun.
- Proses penerjemahan memang membosankan, tetapi memungkinkan banyak orang untuk memainkannya.
___

## file bahasa
File JSON dari data terjemahan.
- Ketika data game dikeluarkan dengan konfigurasi publik, sebuah file JSON untuk terjemahan dibuat di `translations/world` dalam folder keluaran.
- File JSON untuk terjemahan dalam setiap bahasa berada di dalam folder. Konten berisi data yang tidak ada terjemahannya.
- Konten memiliki id di dalam tipe. Selain itu, ada nama dan deskripsi di dalamnya.
- Terjemahan diperlukan untuk dibuat dan disimpan untuk semua nama dan deskripsi.
___

## Tugas penerjemahan
Mengedit data terjemahan
- Semua file terjemahan berisi data dalam bahasa pada saat pengembangan.
- Pekerjaan penerjemahan diperlukan untuk file yang tidak menggunakan bahasa yang digunakan untuk mengembangkannya.
___

### AI
Terjemahan berbasis AI
- Menerjemahkan menggunakan AI seperti ChatGPT, Copilot, dan Claude.
- Mungkin menerjemahkan sekaligus dan pada tingkat kualitas tertentu.
- Terjemahan ini mungkin tidak ada terjemahan yang sempurna, terutama untuk istilah teknis dan kata benda yang tepat.
- Tergantung pada volume terjemahan, penggunaan AI dapat menjadi mahal.
- Jika kemajuan terjemahan oleh AI terputus di tengah-tengah proses, Anda dapat memberi tahu AI untuk 'melanjutkan' dan AI dapat melanjutkannya. (Dalam beberapa kasus, hal ini mungkin tidak ada manfaatnya)
___

#### Contoh petunjuk
Contoh instruksi penerjemahan yang diberikan kepada AI
- Contoh perintah: terjemahkan nilai `nama` dan `penjelasan` dari data JSON yang diunggah dari Inggris ke Jepang. Jangan ubah bagian lain dari data.
___

#### Penggunaan GPT
Terjemahan menggunakan GPT ChatGPT.
- Penerjemah Bahasa JSON yang disediakan dalam pustaka GPT yang disediakan oleh ChatGPT dapat digunakan untuk menerjemahkan JSON dengan mudah.
- Struktur JSON dipertahankan dalam terjemahan.
- Fungsi serupa mungkin ditawarkan oleh layanan AI selain ChatGPT.
___

### layanan terjemahan
Menggunakan layanan terjemahan
- Menerjemahkan menggunakan layanan nyala seperti DeepL dan Google Translate.
- Kualitas terjemahan yang lebih tinggi dapat diharapkan daripada terjemahan AI, tetapi ada biaya yang dikenakan tergantung pada volume terjemahan
- File JSON tidak ada yang dapat diterjemahkan secara langsung oleh layanan penerjemahan, sehingga diperlukan sebuah program untuk dibuat dan digunakan.
- Dengan biaya tertentu, ada beberapa layanan yang menerjemahkan data JSON apa adanya. (misalnya doctranslator.com)
___

### manual (pengoperasian)
Terjemahan manual
- Buka file terjemahan di editor teks dan masukkan konten terjemahan dalam setiap bahasa. Hal ini sangat memakan waktu, tetapi mungkin bagi Anda untuk menerjemahkan file persis seperti yang Anda inginkan.
___

## kode bahasa
Daftar kode bahasa yang didukung

|kode bahasa|bahasa|
|-|-|
|en|Inggris|
|zh|Bahasa Mandarin (bahasa)|
|es|Spanyol|
|ar|Bahasa Arab (bahasa)|
|pt|Portugis|
|Hai.|Bahasa Hindi|
|fr|Prancis|
|ru|Rusia|
|de|Jerman|
|EN|Jepang|