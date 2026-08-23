
# カテゴリ
Kerangka kerja umum untuk menit Aksi dan Item.
- Merupakan klasifikasi utama.
- Contohnya, ini bisa dikonfigurasi dalam kerangka berpikir apa pun, seperti jarak dekat, jarak jauh, sihir, ruang bawah tanah, pandai besi, pabrik, dll.
- アクションやアイテムはワールド直下に配置され、カテゴリIDで関連付けられます。
___

## [_informasi_](id/editor/information)
___

## kelompok (usu. orang)
カテゴリの表示グループ分類
- Terapkan salah satu grup yang dilakukan konfigurasi di Basic.
- 設定したグループ順にカテゴリ一覧が表示されます。
- [_general_](id/editor/general)
___

## Keadaan pembebasan awal
Status tampilan awal dan status pembebasan elemen (akan secara otomatis beralih ke status yang lebih tinggi jika persyaratan aktivasi terpenuhi)
- secreted: Tidak akan ditampilkan sama sekali di antarmuka pengguna (UI) sampai semua persyaratan terpenuhi (tidak muncul di Petunjuk, dan disembunyikan dalam daftar persyaratan/hadiah).
- hidden: Akan tersembunyi sepenuhnya (namanya juga akan berwarna abu-abu dan tidak dapat dioperasikan) selama tidak dirujuk oleh elemen pelepasan mana pun dan persyaratannya belum terpenuhi.
- hinted (default): Hanya nama yang ditampilkan sebagai pratinjau, tetapi tidak dapat dioperasikan sampai dibuka.
- released: Dapat diakses dan dioperasikan sejak awal tanpa memandang kondisi apa pun (sebelumnya disebut “Tampilkan sejak awal”).
___

## [_syarat dan ketentuan_](id/editor/requirement)
___

## kelompok Peralatan
このカテゴリで装備可能なアイテムグループの指定
- このカテゴリで装備できるアイテムのグループ名のリストです。
- Hanya item dari grup yang sesuai dengan nama grup yang ditentukan di sini yang dapat menjadi Peralatan.
- Jika string kosong ditentukan, item dengan konfigurasi grup yang tidak disetel (kosong) menjadi memenuhi syarat untuk Peralatan.
- Hanya satu item yang dapat digunakan sebagai Peralatan dalam grup yang sama. Saat Anda melengkapi item baru, peralatan yang ada dalam grup yang sama secara otomatis dilepas.
- Jika daftar kosong (0 buah), tidak ada peralatan yang dapat digunakan.
- [_general_](id/editor/general)
___

## Ketersediaan level
カテゴリレベル機能の有無
- このカテゴリがレベルを持つかどうかのフラグです。
- Jika nyala, berarti ada levelnya; jika mati, berarti tidak ada.
- 例として、剣技や魔法といった経験に基づくカテゴリはオンにし、ダンジョンや鍛冶屋といった場所のカテゴリはオフにするなどの使い方があります。
___

## kemajuan secara bersamaan
他カテゴリとの並行実行設定
- このカテゴリのアクションが、他のカテゴリのアクションと並行して進行できるかどうかのフラグです。
- オンの場合は、他のカテゴリのアクションとは独立して同時に進行できます。
- オフの場合は、同じくオフに設定された他のカテゴリのアクションと同時に実行できません。新たにこのカテゴリのアクションを開始すると、他の非スタンドアロンカテゴリで進行中のアクションは自動的に中止されます。
___

## latar belakang
カテゴリ固有の背景設定
- このカテゴリの背景を設定します。
- カテゴリを選択されたときに、連動して背景画像が変更されます。
- Jika tidak ada konfigurasi, pengaturan latar belakang dunia digunakan sebagaimana adanya.