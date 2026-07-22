
# Kategori.
Kerangka kerja umum untuk menit Aksi dan Item.
- Merupakan klasifikasi utama.
- Contohnya, ini bisa dikonfigurasi dalam kerangka berpikir apa pun, seperti jarak dekat, jarak jauh, sihir, ruang bawah tanah, pandai besi, pabrik, dll.
- Aksi dan Item ditempatkan langsung dibawah dunia dan dikaitkan dengan ID Kategori.
___

## [_informasi_](id/editor/informasi)
___

## kelompok (usu. orang)
Menampilkan klasifikasi kelompok kategori
- Terapkan salah satu grup yang dilakukan konfigurasi di Basic.
- Daftar kategori ditampilkan menurut urutan kelompok yang ditetapkan dalam konfigurasi.
- [_general_](id/editor/umum)
___

## Keadaan pembebasan awal
Status tampilan awal dan status pembebasan elemen (akan secara otomatis beralih ke status yang lebih tinggi jika persyaratan aktivasi terpenuhi)
- secreted: Tidak akan ditampilkan sama sekali di antarmuka pengguna (UI) sampai semua persyaratan terpenuhi (tidak muncul di Petunjuk, dan disembunyikan dalam daftar persyaratan/hadiah).
- hidden: Akan tersembunyi sepenuhnya (namanya juga akan berwarna abu-abu dan tidak dapat dioperasikan) selama tidak dirujuk oleh elemen pelepasan mana pun dan persyaratannya belum terpenuhi.
- hinted (default): Hanya nama yang ditampilkan sebagai pratinjau, tetapi tidak dapat dioperasikan sampai dibuka.
- released: Dapat diakses dan dioperasikan sejak awal tanpa memandang kondisi apa pun (sebelumnya disebut “Tampilkan sejak awal”).
___

## [_syarat dan ketentuan_](id/editor/persyaratan)
___

## kelompok Peralatan
Penunjukan kelompok item yang mungkin dilengkapi dalam kategori ini.
- Daftar nama kelompok item yang dapat dilengkapi dengan Peralatan dalam Kategori ini.
- Hanya item dari grup yang sesuai dengan nama grup yang ditentukan di sini yang dapat menjadi Peralatan.
- Jika string kosong ditentukan, item dengan konfigurasi grup yang tidak disetel (kosong) menjadi memenuhi syarat untuk Peralatan.
- Hanya satu item yang dapat digunakan sebagai Peralatan dalam grup yang sama. Saat Anda melengkapi item baru, peralatan yang ada dalam grup yang sama secara otomatis dilepas.
- Jika daftar kosong (0 buah), tidak ada peralatan yang dapat digunakan.
- [_general_](id/editor/umum)
___

## Ketersediaan level
Ketersediaan fungsi level kategori
- Ini adalah bendera untuk mengindikasikan apakah kategori ini memiliki level atau tidak.
- Jika nyala, berarti ada levelnya; jika mati, berarti tidak ada.
- Contohnya adalah mengaktifkan kategori berdasarkan pengalaman, seperti ilmu pedang dan sihir, dan mematikan kategori berdasarkan lokasi, seperti ruang bawah tanah dan pandai besi.
___

## kemajuan secara bersamaan
Konfigurasi eksekusi paralel dengan kategori
- Ini adalah bendera untuk menunjukkan apakah aksi dalam kategori ini dapat dilanjutkan secara paralel dengan aksi dalam kategori lain.
- Jika aktif, tindakan dapat dilanjutkan secara simultan dan independen dari kategori aksi lainnya.
- Jika mati, aksi ini tidak dapat dilakukan secara bersamaan dengan aksi dalam kategori lain yang juga memiliki konfigurasi mati. Ketika Anda mulai aksi baru dalam kategori ini, aksi yang sedang berlangsung dalam kategori lain yang mandiri secara otomatis dibatalkan.
___

## latar belakang
Konfigurasi latar belakang kategori
- Konfigurasi latar belakang untuk kategori ini.
- Apabila kategori dipilih, gambar latar belakang akan berubah sehubungan dengan kategori tersebut.
- Jika tidak ada konfigurasi, pengaturan latar belakang dunia digunakan sebagaimana adanya.