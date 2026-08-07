
# acara
Pesan dan hadiah yang muncul pada waktu tertentu
- Fitur ini akan aktif pada waktu-waktu tertentu, seperti saat pertama kali membuka dunia atau saat permainan berakhir, dan akan membuka layar khusus.
- Tersedia satu per satu untuk setiap waktu, dan tidak dapat ditambahkan maupun dihapus. Untuk waktu yang tidak digunakan, biarkan kolomnya kosong.
- Tidak akan ditampilkan dalam daftar misi atau tugas. Hal-hal yang akan dianggap tercapai jika memenuhi syarat tertentu harus dikonfigurasi sebagai tugas.
- Akuisisi imbalan akan dilakukan secara otomatis begitu fitur tersebut diaktifkan. Tidak ada langkah pengambilan seperti pada tugas, dan tidak ada pita pemberitahuan.
- Hal ini dapat mengubah level Kategori, jumlah aksi yang dilakukan dan jumlah Item yang dimiliki ketika diaktifkan.
- Jika kolom nama, deskripsi, dan ikon dibiarkan kosong, teks dan ikon default yang sudah ada di dalam game akan digunakan oleh pemain.

|waktu|kondisi aktivasi|ulangi|
|-|-|-|
|`comebacked`|Ketika seseorang kembali dari offline selama lebih dari satu detik dan ada aksi yang sedang berlangsung.|sering|
|`gameovered`|Ketika stamina pemain habis dalam pertempuran.|sering|
|`welcomed`|Ketika saya pertama kali memulai dunia ini.|hanya sekali|
|`completed`|Ketika level maksimum semua kategori (maxCategoryLevels) tercapai.|hanya sekali|
|`obtained`|Saat menyelesaikan atau memeriksa Aksi jenis tunggal (seperti peti harta karun, dll.)|sering|
- [_task_](id/editor/task)
___

## Saat kembali
Terpicu saat kembali dari kondisi luring
- Terpicu saat kamu kembali setelah satu detik atau lebih luring dan ada aksi yang sedang berjalan.
- Ditampilkan bersama ringkasan kemajuan selama kamu pergi.
___

### [_informasi_](id/editor/information)
___

### カテゴリー
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリーは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- Nilainya tetap `comebacked` dan tidak dapat diubah.
- Terpicu setiap kali kamu kembali, tanpa batas jumlah.
___

### 初期表示状態
イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）
- イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
___

### 条件
報酬を獲得する条件
- タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。
- 報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。
- 条件を設定していない場合は、発動するたびに報酬を獲得します。
___

#### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|Kategori.|Level kategori.|
|Aksi|Hitung berapa kali aksi telah dilakukan.|
|Item|Jumlah item yang dimiliki.|
___

#### ID elemen
ID elemen yang disebut sebagai kondisi.
___

#### nilai
Nilai numerik persyaratan.
- Kondisi ini terpenuhi jika nilainya lebih besar atau sama dengan nilai yang ditentukan.
___

#### Probabilitas konsumsi [0-1].
Probabilitas sebuah item dikonsumsi (0-1, hanya berlaku jika tipe-nya adalah item).
- Probabilitas bahwa sebuah item akan dikonsumsi ketika kondisi terpenuhi dan Aksi dilakukan.
- Dengan `1` selalu dikonsumsi, dengan `0.5` dikonsumsi dengan peluang 50%, dan dengan `0` tidak dikonsumsi.
- Nilai bawaannya adalah `1` (selalu dikonsumsi).
- Tidak valid jika tipenya selain Item.
___

#### Peralatan
Memerlukan Item dalam keadaan Peralatan (hanya berlaku jika Tipe-nya adalah Item) atau
- Ketika diaktifkan, diperlukan untuk item dilengkapi serta dimiliki.
- Tidak valid jika tipenya selain Item.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Tipe
Jenis elemen yang akan diperoleh.

|Tipe|Apa yang diperoleh dalam akuisisi.|
|-|-|
|Kategori.|Level (konversi pengalaman ditambahkan)|
|Aksi|Hitung dieksekusi.|
|Item|hitung jumlah harta benda|
___

#### ID elemen
ID yang mengidentifikasi elemen yang akan diakuisisi.
___

#### nilai
Nilai yang akan diperoleh
- Konfigurasi minus mengurangi jumlah kepemilikan, berapa kali kepemilikan tersebut dilakukan, dan levelnya. Namun, tidak boleh dibawah 0.
- Jika sebuah item memiliki jumlah kepemilikan maksimum (maks), jumlah kepemilikan tidak akan bertambah melebihi nilai tersebut.
- Jika tipenya adalah Kategori, nilai yang ditetapkan ditambahkan langsung ke level (1 untuk 1 level, 0,5 untuk 0,5 level). Cara yang biasa digunakan untuk menyesuaikan hal ini adalah dengan melakukan konfigurasi untuk mengatur pengalaman dari aksi tersebut. Konfigurasi ini tidak perlu kecuali tidak ada tujuan khusus.
___

#### Probabilitas [-1 hingga 1]
Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)
- Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.
- Jika nilainya positif, penilaian hanya dilakukan saat aksi berhasil: dengan `1` pasti diperoleh, dan dengan `0.5` diperoleh dengan peluang 50%.
- Jika nilainya negatif, penilaian hanya dilakukan saat aksi gagal: dengan `-1` pasti diperoleh, dan dengan `-0.5` diperoleh dengan peluang 50%.
- Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.
- Nilai defaultnya adalah `1` (pasti diperoleh jika sukses).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## Saat permainan berakhir
Terpicu saat stamina habis dalam pertarungan
- Terpicu saat stamina pemain habis dalam pertarungan.
- Dengan mengatur jumlah hadiah menjadi negatif, kamu dapat memberi konsekuensi atas berakhirnya permainan.
___

### [_informasi_](id/editor/information)
___

### カテゴリー
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリーは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- Nilainya tetap `gameovered` dan tidak dapat diubah.
- Terpicu setiap kali permainan berakhir, tanpa batas jumlah.
___

### 初期表示状態
イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）
- イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
___

### 条件
報酬を獲得する条件
- タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。
- 報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。
- 条件を設定していない場合は、発動するたびに報酬を獲得します。
___

#### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|Kategori.|Level kategori.|
|Aksi|Hitung berapa kali aksi telah dilakukan.|
|Item|Jumlah item yang dimiliki.|
___

#### ID elemen
ID elemen yang disebut sebagai kondisi.
___

#### nilai
Nilai numerik persyaratan.
- Kondisi ini terpenuhi jika nilainya lebih besar atau sama dengan nilai yang ditentukan.
___

#### Probabilitas konsumsi [0-1].
Probabilitas sebuah item dikonsumsi (0-1, hanya berlaku jika tipe-nya adalah item).
- Probabilitas bahwa sebuah item akan dikonsumsi ketika kondisi terpenuhi dan Aksi dilakukan.
- Dengan `1` selalu dikonsumsi, dengan `0.5` dikonsumsi dengan peluang 50%, dan dengan `0` tidak dikonsumsi.
- Nilai bawaannya adalah `1` (selalu dikonsumsi).
- Tidak valid jika tipenya selain Item.
___

#### Peralatan
Memerlukan Item dalam keadaan Peralatan (hanya berlaku jika Tipe-nya adalah Item) atau
- Ketika diaktifkan, diperlukan untuk item dilengkapi serta dimiliki.
- Tidak valid jika tipenya selain Item.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Tipe
Jenis elemen yang akan diperoleh.

|Tipe|Apa yang diperoleh dalam akuisisi.|
|-|-|
|Kategori.|Level (konversi pengalaman ditambahkan)|
|Aksi|Hitung dieksekusi.|
|Item|hitung jumlah harta benda|
___

#### ID elemen
ID yang mengidentifikasi elemen yang akan diakuisisi.
___

#### nilai
Nilai yang akan diperoleh
- Konfigurasi minus mengurangi jumlah kepemilikan, berapa kali kepemilikan tersebut dilakukan, dan levelnya. Namun, tidak boleh dibawah 0.
- Jika sebuah item memiliki jumlah kepemilikan maksimum (maks), jumlah kepemilikan tidak akan bertambah melebihi nilai tersebut.
- Jika tipenya adalah Kategori, nilai yang ditetapkan ditambahkan langsung ke level (1 untuk 1 level, 0,5 untuk 0,5 level). Cara yang biasa digunakan untuk menyesuaikan hal ini adalah dengan melakukan konfigurasi untuk mengatur pengalaman dari aksi tersebut. Konfigurasi ini tidak perlu kecuali tidak ada tujuan khusus.
___

#### Probabilitas [-1 hingga 1]
Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)
- Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.
- Jika nilainya positif, penilaian hanya dilakukan saat aksi berhasil: dengan `1` pasti diperoleh, dan dengan `0.5` diperoleh dengan peluang 50%.
- Jika nilainya negatif, penilaian hanya dilakukan saat aksi gagal: dengan `-1` pasti diperoleh, dan dengan `-0.5` diperoleh dengan peluang 50%.
- Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.
- Nilai defaultnya adalah `1` (pasti diperoleh jika sukses).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## Saat pertama kali dimulai
Terpicu saat dunia dibuka untuk pertama kalinya
- Terpicu saat dunia ini dijalankan untuk pertama kalinya.
- Digunakan untuk menjelaskan latar dunia atau menyerahkan perbekalan awal.
___

### [_informasi_](id/editor/information)
___

### カテゴリー
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリーは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- Nilainya tetap `welcomed` dan tidak dapat diubah.
- Hanya terpicu sekali, saat pertama kali dijalankan.
___

### 初期表示状態
イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）
- イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
___

### 条件
報酬を獲得する条件
- タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。
- 報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。
- 条件を設定していない場合は、発動するたびに報酬を獲得します。
___

#### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|Kategori.|Level kategori.|
|Aksi|Hitung berapa kali aksi telah dilakukan.|
|Item|Jumlah item yang dimiliki.|
___

#### ID elemen
ID elemen yang disebut sebagai kondisi.
___

#### nilai
Nilai numerik persyaratan.
- Kondisi ini terpenuhi jika nilainya lebih besar atau sama dengan nilai yang ditentukan.
___

#### Probabilitas konsumsi [0-1].
Probabilitas sebuah item dikonsumsi (0-1, hanya berlaku jika tipe-nya adalah item).
- Probabilitas bahwa sebuah item akan dikonsumsi ketika kondisi terpenuhi dan Aksi dilakukan.
- Dengan `1` selalu dikonsumsi, dengan `0.5` dikonsumsi dengan peluang 50%, dan dengan `0` tidak dikonsumsi.
- Nilai bawaannya adalah `1` (selalu dikonsumsi).
- Tidak valid jika tipenya selain Item.
___

#### Peralatan
Memerlukan Item dalam keadaan Peralatan (hanya berlaku jika Tipe-nya adalah Item) atau
- Ketika diaktifkan, diperlukan untuk item dilengkapi serta dimiliki.
- Tidak valid jika tipenya selain Item.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Tipe
Jenis elemen yang akan diperoleh.

|Tipe|Apa yang diperoleh dalam akuisisi.|
|-|-|
|Kategori.|Level (konversi pengalaman ditambahkan)|
|Aksi|Hitung dieksekusi.|
|Item|hitung jumlah harta benda|
___

#### ID elemen
ID yang mengidentifikasi elemen yang akan diakuisisi.
___

#### nilai
Nilai yang akan diperoleh
- Konfigurasi minus mengurangi jumlah kepemilikan, berapa kali kepemilikan tersebut dilakukan, dan levelnya. Namun, tidak boleh dibawah 0.
- Jika sebuah item memiliki jumlah kepemilikan maksimum (maks), jumlah kepemilikan tidak akan bertambah melebihi nilai tersebut.
- Jika tipenya adalah Kategori, nilai yang ditetapkan ditambahkan langsung ke level (1 untuk 1 level, 0,5 untuk 0,5 level). Cara yang biasa digunakan untuk menyesuaikan hal ini adalah dengan melakukan konfigurasi untuk mengatur pengalaman dari aksi tersebut. Konfigurasi ini tidak perlu kecuali tidak ada tujuan khusus.
___

#### Probabilitas [-1 hingga 1]
Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)
- Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.
- Jika nilainya positif, penilaian hanya dilakukan saat aksi berhasil: dengan `1` pasti diperoleh, dan dengan `0.5` diperoleh dengan peluang 50%.
- Jika nilainya negatif, penilaian hanya dilakukan saat aksi gagal: dengan `-1` pasti diperoleh, dan dengan `-0.5` diperoleh dengan peluang 50%.
- Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.
- Nilai defaultnya adalah `1` (pasti diperoleh jika sukses).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## Saat tamat
Terpicu saat semua kategori mencapai level maksimum
- Terpicu saat level semua kategori mencapai nilai maksimum (maxCategoryLevels).
- Kategori yang bukan numeric dikecualikan dari penilaian.
___

### [_informasi_](id/editor/information)
___

### カテゴリー
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリーは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- Nilainya tetap `completed` dan tidak dapat diubah.
- Hanya terpicu sekali, saat kondisinya terpenuhi.
___

### 初期表示状態
イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）
- イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
___

### 条件
報酬を獲得する条件
- タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。
- 報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。
- 条件を設定していない場合は、発動するたびに報酬を獲得します。
___

#### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|Kategori.|Level kategori.|
|Aksi|Hitung berapa kali aksi telah dilakukan.|
|Item|Jumlah item yang dimiliki.|
___

#### ID elemen
ID elemen yang disebut sebagai kondisi.
___

#### nilai
Nilai numerik persyaratan.
- Kondisi ini terpenuhi jika nilainya lebih besar atau sama dengan nilai yang ditentukan.
___

#### Probabilitas konsumsi [0-1].
Probabilitas sebuah item dikonsumsi (0-1, hanya berlaku jika tipe-nya adalah item).
- Probabilitas bahwa sebuah item akan dikonsumsi ketika kondisi terpenuhi dan Aksi dilakukan.
- Dengan `1` selalu dikonsumsi, dengan `0.5` dikonsumsi dengan peluang 50%, dan dengan `0` tidak dikonsumsi.
- Nilai bawaannya adalah `1` (selalu dikonsumsi).
- Tidak valid jika tipenya selain Item.
___

#### Peralatan
Memerlukan Item dalam keadaan Peralatan (hanya berlaku jika Tipe-nya adalah Item) atau
- Ketika diaktifkan, diperlukan untuk item dilengkapi serta dimiliki.
- Tidak valid jika tipenya selain Item.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Tipe
Jenis elemen yang akan diperoleh.

|Tipe|Apa yang diperoleh dalam akuisisi.|
|-|-|
|Kategori.|Level (konversi pengalaman ditambahkan)|
|Aksi|Hitung dieksekusi.|
|Item|hitung jumlah harta benda|
___

#### ID elemen
ID yang mengidentifikasi elemen yang akan diakuisisi.
___

#### nilai
Nilai yang akan diperoleh
- Konfigurasi minus mengurangi jumlah kepemilikan, berapa kali kepemilikan tersebut dilakukan, dan levelnya. Namun, tidak boleh dibawah 0.
- Jika sebuah item memiliki jumlah kepemilikan maksimum (maks), jumlah kepemilikan tidak akan bertambah melebihi nilai tersebut.
- Jika tipenya adalah Kategori, nilai yang ditetapkan ditambahkan langsung ke level (1 untuk 1 level, 0,5 untuk 0,5 level). Cara yang biasa digunakan untuk menyesuaikan hal ini adalah dengan melakukan konfigurasi untuk mengatur pengalaman dari aksi tersebut. Konfigurasi ini tidak perlu kecuali tidak ada tujuan khusus.
___

#### Probabilitas [-1 hingga 1]
Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)
- Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.
- Jika nilainya positif, penilaian hanya dilakukan saat aksi berhasil: dengan `1` pasti diperoleh, dan dengan `0.5` diperoleh dengan peluang 50%.
- Jika nilainya negatif, penilaian hanya dilakukan saat aksi gagal: dengan `-1` pasti diperoleh, dan dengan `-0.5` diperoleh dengan peluang 50%.
- Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.
- Nilai defaultnya adalah `1` (pasti diperoleh jika sukses).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## Saat aksi sekali jalan selesai
Terpicu saat aksi sekali jalan seperti peti harta selesai
- Terpicu saat aksi berjenis single (seperti peti harta) diselesaikan dan dikonfirmasi.
- Terpisah dari hadiah aksi itu sendiri, kamu dapat menambahkan hadiah yang diatur di sini.
___

### [_informasi_](id/editor/information)
___

### カテゴリー
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリーは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- Nilainya tetap `obtained` dan tidak dapat diubah.
- Terpicu setiap kali aksi sekali jalan selesai, tanpa batas jumlah.
___

### 初期表示状態
イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）
- イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
___

### 条件
報酬を獲得する条件
- タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。
- 報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。
- 条件を設定していない場合は、発動するたびに報酬を獲得します。
___

#### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|Kategori.|Level kategori.|
|Aksi|Hitung berapa kali aksi telah dilakukan.|
|Item|Jumlah item yang dimiliki.|
___

#### ID elemen
ID elemen yang disebut sebagai kondisi.
___

#### nilai
Nilai numerik persyaratan.
- Kondisi ini terpenuhi jika nilainya lebih besar atau sama dengan nilai yang ditentukan.
___

#### Probabilitas konsumsi [0-1].
Probabilitas sebuah item dikonsumsi (0-1, hanya berlaku jika tipe-nya adalah item).
- Probabilitas bahwa sebuah item akan dikonsumsi ketika kondisi terpenuhi dan Aksi dilakukan.
- Dengan `1` selalu dikonsumsi, dengan `0.5` dikonsumsi dengan peluang 50%, dan dengan `0` tidak dikonsumsi.
- Nilai bawaannya adalah `1` (selalu dikonsumsi).
- Tidak valid jika tipenya selain Item.
___

#### Peralatan
Memerlukan Item dalam keadaan Peralatan (hanya berlaku jika Tipe-nya adalah Item) atau
- Ketika diaktifkan, diperlukan untuk item dilengkapi serta dimiliki.
- Tidak valid jika tipenya selain Item.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Tipe
Jenis elemen yang akan diperoleh.

|Tipe|Apa yang diperoleh dalam akuisisi.|
|-|-|
|Kategori.|Level (konversi pengalaman ditambahkan)|
|Aksi|Hitung dieksekusi.|
|Item|hitung jumlah harta benda|
___

#### ID elemen
ID yang mengidentifikasi elemen yang akan diakuisisi.
___

#### nilai
Nilai yang akan diperoleh
- Konfigurasi minus mengurangi jumlah kepemilikan, berapa kali kepemilikan tersebut dilakukan, dan levelnya. Namun, tidak boleh dibawah 0.
- Jika sebuah item memiliki jumlah kepemilikan maksimum (maks), jumlah kepemilikan tidak akan bertambah melebihi nilai tersebut.
- Jika tipenya adalah Kategori, nilai yang ditetapkan ditambahkan langsung ke level (1 untuk 1 level, 0,5 untuk 0,5 level). Cara yang biasa digunakan untuk menyesuaikan hal ini adalah dengan melakukan konfigurasi untuk mengatur pengalaman dari aksi tersebut. Konfigurasi ini tidak perlu kecuali tidak ada tujuan khusus.
___

#### Probabilitas [-1 hingga 1]
Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)
- Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.
- Jika nilainya positif, penilaian hanya dilakukan saat aksi berhasil: dengan `1` pasti diperoleh, dan dengan `0.5` diperoleh dengan peluang 50%.
- Jika nilainya negatif, penilaian hanya dilakukan saat aksi gagal: dengan `-1` pasti diperoleh, dan dengan `-0.5` diperoleh dengan peluang 50%.
- Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.
- Nilai defaultnya adalah `1` (pasti diperoleh jika sukses).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。