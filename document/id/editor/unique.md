
# 固定イベント
決まったタイミングで発動するメッセージと報酬
- ワールドを初めて開いた時やゲームオーバーになった時など、決まったタイミングで発動して専用の画面を開きます。
- タイミングごとに1つずつ用意されており、追加も削除もできません。使わないタイミングは空欄のままにします。
- ミッションやタスクの一覧には表示されません。条件を満たすと達成になるものはタスクで設定します。
- 報酬は発動と同時に自動で獲得します。タスクのような受け取りの操作もリボンもありません。
- 発動時にカテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- 名前・説明・アイコンを空欄にすると、プレイヤーに内蔵されている既定の文言とアイコンが使われます。

|タイミング|発動条件|繰り返し|
|-|-|-|
|`comebacked`|オフラインから1秒以上経過して復帰し、かつ進行中のアクションがあった時|何度も|
|`gameovered`|戦闘でプレイヤーのスタミナがなくなった時|何度も|
|`welcomed`|このワールドを初めて起動した時|一度のみ|
|`completed`|全カテゴリのレベルが最大値（maxCategoryLevels）に達した時|一度のみ|
|`obtained`|single種別のアクション（宝箱など）を完了・確認した時|何度も|
- [_task_](id/editor/task)
___

## 復帰時
オフラインから復帰した時に発動
- オフラインから1秒以上経過して復帰し、かつ進行中のアクションがあった時に発動します。
- 離れているあいだの進行のまとめと一緒に表示されます。
___

### [_informasi_](id/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- `comebacked`で固定されており、編集できません。
- 復帰するたびに何度でも発動します。
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
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

#### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|カテゴリ|カテゴリのレベル|
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

### Agregasi grup
Memperlakukan id kondisi sebagai ID grup dan menilai berdasarkan total anggotanya
- Saat diaktifkan, id yang ditetapkan pada kondisi (requirements) diperlakukan sebagai ID grup dari pengaturan dasar.
- Kondisi dengan Type Kategori dinilai berdasarkan total Level semua Kategori yang termasuk dalam grup tersebut.
- Kondisi dengan Type Aksi dinilai berdasarkan total jumlah eksekusi semua Aksi yang termasuk dalam grup tersebut.
- Kondisi dengan Type Item dinilai berdasarkan total jumlah kepemilikan semua Item yang termasuk dalam grup tersebut.
- Elemen yang terkunci (selain released) tidak termasuk dalam total.
- Probabilitas konsumsi Item (chance) dan syarat peralatan (equipment) diabaikan, dan tidak ada yang dikonsumsi. Hanya digunakan untuk penilaian.
- Saat dinonaktifkan, id pada kondisi diperlakukan seperti sebelumnya, sebagai ID Kategori, Aksi, atau Item individual.
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
|カテゴリ|Level (konversi pengalaman ditambahkan)|
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
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
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

## ゲームオーバー時
戦闘でスタミナがなくなった時に発動
- 戦闘でプレイヤーのスタミナがなくなった時に発動します。
- 報酬の数量にマイナスを設定すれば、ゲームオーバーの代償を持たせることができます。
___

### [_informasi_](id/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- `gameovered`で固定されており、編集できません。
- ゲームオーバーになるたびに何度でも発動します。
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
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

#### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|カテゴリ|カテゴリのレベル|
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

### Agregasi grup
Memperlakukan id kondisi sebagai ID grup dan menilai berdasarkan total anggotanya
- Saat diaktifkan, id yang ditetapkan pada kondisi (requirements) diperlakukan sebagai ID grup dari pengaturan dasar.
- Kondisi dengan Type Kategori dinilai berdasarkan total Level semua Kategori yang termasuk dalam grup tersebut.
- Kondisi dengan Type Aksi dinilai berdasarkan total jumlah eksekusi semua Aksi yang termasuk dalam grup tersebut.
- Kondisi dengan Type Item dinilai berdasarkan total jumlah kepemilikan semua Item yang termasuk dalam grup tersebut.
- Elemen yang terkunci (selain released) tidak termasuk dalam total.
- Probabilitas konsumsi Item (chance) dan syarat peralatan (equipment) diabaikan, dan tidak ada yang dikonsumsi. Hanya digunakan untuk penilaian.
- Saat dinonaktifkan, id pada kondisi diperlakukan seperti sebelumnya, sebagai ID Kategori, Aksi, atau Item individual.
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
|カテゴリ|Level (konversi pengalaman ditambahkan)|
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
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
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

## 初回開始時
ワールドを初めて開いた時に発動
- このワールドを初めて起動した時に発動します。
- 世界観の説明や、開始時に渡す支度品の受け渡しに使います。
___

### [_informasi_](id/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- `welcomed`で固定されており、編集できません。
- 初回の起動時に一度だけ発動します。
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
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

#### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|カテゴリ|カテゴリのレベル|
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

### Agregasi grup
Memperlakukan id kondisi sebagai ID grup dan menilai berdasarkan total anggotanya
- Saat diaktifkan, id yang ditetapkan pada kondisi (requirements) diperlakukan sebagai ID grup dari pengaturan dasar.
- Kondisi dengan Type Kategori dinilai berdasarkan total Level semua Kategori yang termasuk dalam grup tersebut.
- Kondisi dengan Type Aksi dinilai berdasarkan total jumlah eksekusi semua Aksi yang termasuk dalam grup tersebut.
- Kondisi dengan Type Item dinilai berdasarkan total jumlah kepemilikan semua Item yang termasuk dalam grup tersebut.
- Elemen yang terkunci (selain released) tidak termasuk dalam total.
- Probabilitas konsumsi Item (chance) dan syarat peralatan (equipment) diabaikan, dan tidak ada yang dikonsumsi. Hanya digunakan untuk penilaian.
- Saat dinonaktifkan, id pada kondisi diperlakukan seperti sebelumnya, sebagai ID Kategori, Aksi, atau Item individual.
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
|カテゴリ|Level (konversi pengalaman ditambahkan)|
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
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
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

## クリア時
全カテゴリが最大レベルに達した時に発動
- 全カテゴリのレベルが最大値（maxCategoryLevels）に達した時に発動します。
- numeric（数値）でないカテゴリは判定から除かれます。
___

### [_informasi_](id/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- `completed`で固定されており、編集できません。
- 条件を満たした時に一度だけ発動します。
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
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

#### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|カテゴリ|カテゴリのレベル|
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

### Agregasi grup
Memperlakukan id kondisi sebagai ID grup dan menilai berdasarkan total anggotanya
- Saat diaktifkan, id yang ditetapkan pada kondisi (requirements) diperlakukan sebagai ID grup dari pengaturan dasar.
- Kondisi dengan Type Kategori dinilai berdasarkan total Level semua Kategori yang termasuk dalam grup tersebut.
- Kondisi dengan Type Aksi dinilai berdasarkan total jumlah eksekusi semua Aksi yang termasuk dalam grup tersebut.
- Kondisi dengan Type Item dinilai berdasarkan total jumlah kepemilikan semua Item yang termasuk dalam grup tersebut.
- Elemen yang terkunci (selain released) tidak termasuk dalam total.
- Probabilitas konsumsi Item (chance) dan syarat peralatan (equipment) diabaikan, dan tidak ada yang dikonsumsi. Hanya digunakan untuk penilaian.
- Saat dinonaktifkan, id pada kondisi diperlakukan seperti sebelumnya, sebagai ID Kategori, Aksi, atau Item individual.
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
|カテゴリ|Level (konversi pengalaman ditambahkan)|
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
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
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

## 単発アクション完了時
宝箱などの単発アクションを完了した時に発動
- single種別のアクション（宝箱など）を完了・確認した時に発動します。
- アクション自体の報酬とは別に、ここで設定した報酬を上乗せできます。
___

### [_informasi_](id/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- `obtained`で固定されており、編集できません。
- 単発アクションを完了するたびに何度でも発動します。
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
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

#### Tipe
Jenis elemen yang direferensikan sebagai kondisi.

|Tipe|Nilai yang direferensikan|
|-|-|
|カテゴリ|カテゴリのレベル|
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

### Agregasi grup
Memperlakukan id kondisi sebagai ID grup dan menilai berdasarkan total anggotanya
- Saat diaktifkan, id yang ditetapkan pada kondisi (requirements) diperlakukan sebagai ID grup dari pengaturan dasar.
- Kondisi dengan Type Kategori dinilai berdasarkan total Level semua Kategori yang termasuk dalam grup tersebut.
- Kondisi dengan Type Aksi dinilai berdasarkan total jumlah eksekusi semua Aksi yang termasuk dalam grup tersebut.
- Kondisi dengan Type Item dinilai berdasarkan total jumlah kepemilikan semua Item yang termasuk dalam grup tersebut.
- Elemen yang terkunci (selain released) tidak termasuk dalam total.
- Probabilitas konsumsi Item (chance) dan syarat peralatan (equipment) diabaikan, dan tidak ada yang dikonsumsi. Hanya digunakan untuk penilaian.
- Saat dinonaktifkan, id pada kondisi diperlakukan seperti sebelumnya, sebagai ID Kategori, Aksi, atau Item individual.
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
|カテゴリ|Level (konversi pengalaman ditambahkan)|
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
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
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