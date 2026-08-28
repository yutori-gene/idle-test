
# 変化イベント
カテゴリ・アクション・アイテムの数量が一度に条件量以上増えた時に発動する内部処理用イベント
- アクションの完了、購入・売却、宝箱の開封など、数量が変化するあらゆるタイミングでチェックされます。
- 条件（requirements）は所持数などの絶対値ではなく、そのタイミング1回分の増加量で判定します。複数回に分けた小さな増加は合算されません。
- 複数の条件を設定した場合、その1回の変化ですべての条件を同時に満たす必要があります。
- 条件を満たすたびに報酬を受け取り、何度でも繰り返し発動します。タスクと違って一度きりではありません。
- プレイヤーの画面には一切表示されません。ミッションの一覧にも出ず、達成のメッセージも出ません。
- [_unique_](id/editor/unique)
___

## [_informasi_](id/editor/information)
___

## カテゴリ
変化イベントが所属するカテゴリのID（画面に表示されないため分類のみに使われます）
- プレイヤーの画面には表示されないため、この設定は見た目に影響しません。
___

## タイミング
変化イベント発動のタイミング（`changed`固定）
- `changed`で固定されており、編集できません。
- 数量が変化するあらゆるタイミングでチェックされ、条件を満たすたびに繰り返し発動します。
___

## 初期表示状態
画面に表示されないため実質的に影響しません
- 変化イベントはプレイヤーの画面に表示されないため、この設定は使われません。
___

## 条件
変化イベント発動の条件（数量の増加量で判定）
- 設定した数だけ、そのタイミング1回で増えていれば条件を満たします。所持数などの絶対値は見ません。
- 例えばアイテムの条件を3に設定した場合、その1回でそのアイテムが3個以上増えていれば満たされます。
- 減少は増加条件には数えません。
- 複数の条件を設定した場合、その1回の変化ですべてを同時に満たす必要があります。
- 条件を設定していない変化イベントは発動しません。
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

## グループ集計
条件のidをグループIDとして扱い、所属する要素の増加量の合計で判定する
- 有効にすると、条件（requirements）に設定したidは基本設定のグループのIDとして扱われます。
- そのグループに属する全カテゴリ・全アクション・全アイテムの増加量を合計して判定します。
- 無効の場合は今まで通り、条件のidは個別のカテゴリ・アクション・アイテムのIDとして扱われます。
___

## 報酬
変化イベント発動時の報酬設定
- 条件を満たすたびに自動で受け取ります。プレイヤーの操作は不要です。
- カテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- 数量にマイナスを設定することもできます。
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

## 変化イベントグループ
内部管理用の表示グループ分類（画面に表示されないため実質未使用）
- 変化イベントはプレイヤーの画面に表示されないため、この設定は見た目に影響しません。