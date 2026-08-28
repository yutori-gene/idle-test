
# 変化イベント
カテゴリ・アクション・アイテムの数量が一度に条件量以上増えた時に発動する内部処理用イベント
- アクションの完了、購入・売却、宝箱の開封など、数量が変化するあらゆるタイミングでチェックされます。
- 条件（requirements）は所持数などの絶対値ではなく、そのタイミング1回分の増加量で判定します。複数回に分けた小さな増加は合算されません。
- 複数の条件を設定した場合、その1回の変化ですべての条件を同時に満たす必要があります。
- 条件を満たすたびに報酬を受け取り、何度でも繰り返し発動します。タスクと違って一度きりではありません。
- プレイヤーの画面には一切表示されません。ミッションの一覧にも出ず、達成のメッセージも出ません。
- [_unique_](en/editor/unique)
___

## [_information_](en/editor/information)
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

### Type
Type of element referenced as a condition

|Type|Referenced value|
|-|-|
|カテゴリ|カテゴリのレベル|
|Action.|Number of times the Action has been performed.|
|Item|Number of Items in your possession|
___

### ID of an element
ID of the element to be referenced as a condition
___

### value
Necessary values for requirements
- The condition is satisfied if the value is above the specified value.
___

### Consumption probability [0-1].
Probability of Item being consumed (0-1, valid only if Type is Item)
- The probability that an Item will be consumed when the condition is met and the Action is performed.
- `1` always consumes, `0.5` consumes with a 50% probability, and `0` does not consume.
- The default value is `1` (always consumes).
- Invalid if Type is other than Item.
___

### Equipment
Requires that the Item be in the Equipment state (valid only if the Type is Item) or
- When enabled, the Necessary requirements are that the Item be equipped, not just possessed.
- Invalid if Type is other than Item.
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

### Type
Type of element to be acquired

|Type|What is Acquisitions|
|-|-|
|カテゴリ|Level (added in terms of experience value)|
|Action.|Number of times executed|
|Item|number possessed|
___

### ID of an element
ID identifying the element to be acquired
___

### value
Value to be obtained
- Minus values configured will decrease the number of possessions, the number of times they have been performed, and their level. However, it will not go down to 0 or below.
- If an Item has a configured maximum ownership count (max), the number of possessions will not increase beyond that value.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

### Probability [-1 to 1]
Probability of success in acquisition (negative values are evaluated only in the event of failure)
- Configure the drop probability as a decimal value between -1 and 1. The absolute value is used to determine the probability.
- When the value is positive it is evaluated only when the action succeeds: `1` always grants it, and `0.5` grants it with a 50% probability.
- When the value is negative it is evaluated only when the action fails: `-1` always grants it, and `-0.5` grants it with a 50% probability.
- If the value is `0`, it is not obtained in either a success or a failure scenario.
- The default value is `1` (always obtained upon success).
___

## 変化イベントグループ
内部管理用の表示グループ分類（画面に表示されないため実質未使用）
- 変化イベントはプレイヤーの画面に表示されないため、この設定は見た目に影響しません。