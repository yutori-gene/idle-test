
# Tugas
Misi yang akan dianggap berhasil jika syarat-syaratnya terpenuhi
- Jika memenuhi konfigurasi yang telah ditetapkan, maka target tercapai, dan pesan akan ditampilkan di bagian atas layar.
- プレイヤーのミッションの一覧と、カテゴリのタスクの一覧に表示されます。
- Hadiah tidak diberikan secara otomatis. Pemain akan menerimanya saat membuka tugas dan menekan tombol "Akuisisi".
- Sampai imbalan tersebut diterima, bilah pada daftar akan ditandai dengan pita untuk menunjukkan bahwa imbalan tersebut belum diterima.
- 獲得でカテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- 初回起動時やゲームオーバー時など、条件以外のタイミングで発動させたいものは固定イベント（unique）で設定します。
- [_unique_](id/editor/unique)
___

## [_informasi_](id/editor/information)
___

## カテゴリ
タスクが所属するカテゴリのID
- このタスクを所属させるカテゴリのIDを指定します。
- 設定すると、プレイヤーのカテゴリの画面にタスクの一覧が追加され、ミッションの一覧でもカテゴリごとにまとめて表示されます。
- 空欄の場合はどのカテゴリにも属さず、ミッションの一覧の先頭にまとめて表示されます。
___

## waktu
タスク発動のタイミング（`tasked`固定）
- タスクは`tasked`（設定した条件を満たした時）で固定されており、編集できません。
- Hadiah hanya dapat diterima satu kali, dan setelah diterima, status pencapaiannya tidak akan berubah lagi.
- それ以外の決まったタイミングで発動させたいものは、固定イベント（unique）で設定します。
- [_unique_](id/editor/unique)
___

## Tampilan awal
Status tampilan awal ikon tugas (penyelesaian ditentukan oleh kondisi, dan dengan konfigurasi ini, tugas tidak akan dianggap selesai)
- タスクの達成条件はrequirementsで決まり、この項目は一覧アイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでタスクの一覧に一切表示されません（達成自体は条件で起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
- 一度達成したタスクは一覧から消えず、その後に条件を満たさなくなっても達成のまま表示されます。
___

## syarat dan ketentuan
Syarat penyelesaian tugas
- タスクを達成させる条件です。
- この条件を満たすと達成になり、報酬を受け取れるようになります。
- 一度達成すると、その後に条件を満たさなくなっても達成のままで、報酬もいつでも受け取れます。
- 条件を設定していないタスクは達成しません。
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|カテゴリ|カテゴリのレベル|
|Aksi|Hitung berapa kali aksi telah dilakukan.|
|Item|Jumlah item yang dimiliki.|
___

### ID elemen
ID elemen yang disebut sebagai kondisi.
___

### nilai
Nilai numerik persyaratan.
- Kondisi ini terpenuhi jika nilainya lebih besar atau sama dengan nilai yang ditentukan.
___

### Probabilitas konsumsi [0-1].
Probabilitas sebuah item dikonsumsi (0-1, hanya berlaku jika tipe-nya adalah item).
- Probabilitas bahwa sebuah item akan dikonsumsi ketika kondisi terpenuhi dan Aksi dilakukan.
- Dengan `1` selalu dikonsumsi, dengan `0.5` dikonsumsi dengan peluang 50%, dan dengan `0` tidak dikonsumsi.
- Nilai bawaannya adalah `1` (selalu dikonsumsi).
- Tidak valid jika tipenya selain Item.
___

### Peralatan
Memerlukan Item dalam keadaan Peralatan (hanya berlaku jika Tipe-nya adalah Item) atau
- Ketika diaktifkan, diperlukan untuk item dilengkapi serta dimiliki.
- Tidak valid jika tipenya selain Item.
___

## Agregasi grup
Memperlakukan id kondisi sebagai ID grup dan menilai berdasarkan total anggotanya
- Saat diaktifkan, id yang ditetapkan pada kondisi (requirements) diperlakukan sebagai ID grup dari pengaturan dasar.
- Kondisi dengan Type Kategori dinilai berdasarkan total Level semua Kategori yang termasuk dalam grup tersebut.
- Kondisi dengan Type Aksi dinilai berdasarkan total jumlah eksekusi semua Aksi yang termasuk dalam grup tersebut.
- Kondisi dengan Type Item dinilai berdasarkan total jumlah kepemilikan semua Item yang termasuk dalam grup tersebut.
- Elemen yang terkunci (selain released) tidak termasuk dalam total.
- Probabilitas konsumsi Item (chance) dan syarat peralatan (equipment) diabaikan, dan tidak ada yang dikonsumsi. Hanya digunakan untuk penilaian.
- Saat dinonaktifkan, id pada kondisi diperlakukan seperti sebelumnya, sebagai ID Kategori, Aksi, atau Item individual.
___

## hadiah
Konfigurasi Hadiah Saat Tugas Selesai
- 達成したタスクを開き、獲得のバーを押した時に受け取れる報酬です。
- カテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- 数量にマイナスを設定することもできます。
- 報酬を設定していないタスクは獲得のバーが出ず、達成した時点で完了になります。
- 持てるアイテムの種類が上限に達している時は受け取れません。整理してから受け取り直します。
___

### Tipe
Jenis elemen yang akan diperoleh.

|Tipe|Apa yang diperoleh dalam akuisisi.|
|-|-|
|カテゴリ|Level (konversi pengalaman ditambahkan)|
|Aksi|Hitung dieksekusi.|
|Item|hitung jumlah harta benda|
___

### ID elemen
ID yang mengidentifikasi elemen yang akan diakuisisi.
___

### nilai
Nilai yang akan diperoleh
- Konfigurasi minus mengurangi jumlah kepemilikan, berapa kali kepemilikan tersebut dilakukan, dan levelnya. Namun, tidak boleh dibawah 0.
- Jika sebuah item memiliki jumlah kepemilikan maksimum (maks), jumlah kepemilikan tidak akan bertambah melebihi nilai tersebut.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

### Probabilitas [-1 hingga 1]
Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)
- Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.
- Jika nilainya positif, penilaian hanya dilakukan saat aksi berhasil: dengan `1` pasti diperoleh, dan dengan `0.5` diperoleh dengan peluang 50%.
- Jika nilainya negatif, penilaian hanya dilakukan saat aksi gagal: dengan `-1` pasti diperoleh, dan dengan `-0.5` diperoleh dengan peluang 50%.
- Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.
- Nilai defaultnya adalah `1` (pasti diperoleh jika sukses).
___

## kelompok tugas
Klasifikasi kelompok tampilan tugas
- Terapkan salah satu grup yang konfigurasi di Basic.
- Daftar tugas akan ditampilkan sesuai urutan konfigurasi grup yang telah ditetapkan.
- カテゴリの中でさらにグループごとに分けて表示されます。
- Jika dibiarkan kosong, tidak ada pengelompokan yang dibuat.
- [_general_](id/editor/general)