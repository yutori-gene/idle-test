
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
- [_task_](en/editor/task)
___

## 復帰時
オフラインから復帰した時に発動
- オフラインから1秒以上経過して復帰し、かつ進行中のアクションがあった時に発動します。
- 離れているあいだの進行のまとめと一緒に表示されます。
___

### [_information_](en/editor/information)
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

#### Type
Type of element referenced as a condition

|Type|Referenced value|
|-|-|
|カテゴリ|カテゴリのレベル|
|Action.|Number of times the Action has been performed.|
|Item|Number of Items in your possession|
___

#### ID of an element
ID of the element to be referenced as a condition
___

#### value
Necessary values for requirements
- The condition is satisfied if the value is above the specified value.
___

#### Consumption probability [0-1].
Probability of Item being consumed (0-1, valid only if Type is Item)
- The probability that an Item will be consumed when the condition is met and the Action is performed.
- `1` always consumes, `0.5` consumes with a 50% probability, and `0` does not consume.
- The default value is `1` (always consumes).
- Invalid if Type is other than Item.
___

#### Equipment
Requires that the Item be in the Equipment state (valid only if the Type is Item) or
- When enabled, the Necessary requirements are that the Item be equipped, not just possessed.
- Invalid if Type is other than Item.
___

### Group Aggregation
Treat the condition's id as a group ID and judge by the total of its members
- When enabled, the id set in the condition (requirements) is treated as the ID of a group from the basic settings.
- A condition whose Type is Category is judged by the total Level of all Categories belonging to that group.
- A condition whose Type is Action is judged by the total number of times all Actions belonging to that group have been executed.
- A condition whose Type is Item is judged by the total number of all Items belonging to that group in your possession.
- Locked (non-released) elements are not included in the total.
- The Item's consumption probability (chance) and equipment condition (equipment) are ignored, and nothing is consumed. They are used for judgment only.
- When disabled, the id in the condition is treated as before, as the ID of an individual Category, Action, or Item.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Type
Type of element to be acquired

|Type|What is Acquisitions|
|-|-|
|カテゴリ|Level (added in terms of experience value)|
|Action.|Number of times executed|
|Item|number possessed|
___

#### ID of an element
ID identifying the element to be acquired
___

#### value
Value to be obtained
- Minus values configured will decrease the number of possessions, the number of times they have been performed, and their level. However, it will not go down to 0 or below.
- If an Item has a configured maximum ownership count (max), the number of possessions will not increase beyond that value.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probability [-1 to 1]
Probability of success in acquisition (negative values are evaluated only in the event of failure)
- Configure the drop probability as a decimal value between -1 and 1. The absolute value is used to determine the probability.
- When the value is positive it is evaluated only when the action succeeds: `1` always grants it, and `0.5` grants it with a 50% probability.
- When the value is negative it is evaluated only when the action fails: `-1` always grants it, and `-0.5` grants it with a 50% probability.
- If the value is `0`, it is not obtained in either a success or a failure scenario.
- The default value is `1` (always obtained upon success).
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

### [_information_](en/editor/information)
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

#### Type
Type of element referenced as a condition

|Type|Referenced value|
|-|-|
|カテゴリ|カテゴリのレベル|
|Action.|Number of times the Action has been performed.|
|Item|Number of Items in your possession|
___

#### ID of an element
ID of the element to be referenced as a condition
___

#### value
Necessary values for requirements
- The condition is satisfied if the value is above the specified value.
___

#### Consumption probability [0-1].
Probability of Item being consumed (0-1, valid only if Type is Item)
- The probability that an Item will be consumed when the condition is met and the Action is performed.
- `1` always consumes, `0.5` consumes with a 50% probability, and `0` does not consume.
- The default value is `1` (always consumes).
- Invalid if Type is other than Item.
___

#### Equipment
Requires that the Item be in the Equipment state (valid only if the Type is Item) or
- When enabled, the Necessary requirements are that the Item be equipped, not just possessed.
- Invalid if Type is other than Item.
___

### Group Aggregation
Treat the condition's id as a group ID and judge by the total of its members
- When enabled, the id set in the condition (requirements) is treated as the ID of a group from the basic settings.
- A condition whose Type is Category is judged by the total Level of all Categories belonging to that group.
- A condition whose Type is Action is judged by the total number of times all Actions belonging to that group have been executed.
- A condition whose Type is Item is judged by the total number of all Items belonging to that group in your possession.
- Locked (non-released) elements are not included in the total.
- The Item's consumption probability (chance) and equipment condition (equipment) are ignored, and nothing is consumed. They are used for judgment only.
- When disabled, the id in the condition is treated as before, as the ID of an individual Category, Action, or Item.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Type
Type of element to be acquired

|Type|What is Acquisitions|
|-|-|
|カテゴリ|Level (added in terms of experience value)|
|Action.|Number of times executed|
|Item|number possessed|
___

#### ID of an element
ID identifying the element to be acquired
___

#### value
Value to be obtained
- Minus values configured will decrease the number of possessions, the number of times they have been performed, and their level. However, it will not go down to 0 or below.
- If an Item has a configured maximum ownership count (max), the number of possessions will not increase beyond that value.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probability [-1 to 1]
Probability of success in acquisition (negative values are evaluated only in the event of failure)
- Configure the drop probability as a decimal value between -1 and 1. The absolute value is used to determine the probability.
- When the value is positive it is evaluated only when the action succeeds: `1` always grants it, and `0.5` grants it with a 50% probability.
- When the value is negative it is evaluated only when the action fails: `-1` always grants it, and `-0.5` grants it with a 50% probability.
- If the value is `0`, it is not obtained in either a success or a failure scenario.
- The default value is `1` (always obtained upon success).
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

### [_information_](en/editor/information)
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

#### Type
Type of element referenced as a condition

|Type|Referenced value|
|-|-|
|カテゴリ|カテゴリのレベル|
|Action.|Number of times the Action has been performed.|
|Item|Number of Items in your possession|
___

#### ID of an element
ID of the element to be referenced as a condition
___

#### value
Necessary values for requirements
- The condition is satisfied if the value is above the specified value.
___

#### Consumption probability [0-1].
Probability of Item being consumed (0-1, valid only if Type is Item)
- The probability that an Item will be consumed when the condition is met and the Action is performed.
- `1` always consumes, `0.5` consumes with a 50% probability, and `0` does not consume.
- The default value is `1` (always consumes).
- Invalid if Type is other than Item.
___

#### Equipment
Requires that the Item be in the Equipment state (valid only if the Type is Item) or
- When enabled, the Necessary requirements are that the Item be equipped, not just possessed.
- Invalid if Type is other than Item.
___

### Group Aggregation
Treat the condition's id as a group ID and judge by the total of its members
- When enabled, the id set in the condition (requirements) is treated as the ID of a group from the basic settings.
- A condition whose Type is Category is judged by the total Level of all Categories belonging to that group.
- A condition whose Type is Action is judged by the total number of times all Actions belonging to that group have been executed.
- A condition whose Type is Item is judged by the total number of all Items belonging to that group in your possession.
- Locked (non-released) elements are not included in the total.
- The Item's consumption probability (chance) and equipment condition (equipment) are ignored, and nothing is consumed. They are used for judgment only.
- When disabled, the id in the condition is treated as before, as the ID of an individual Category, Action, or Item.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Type
Type of element to be acquired

|Type|What is Acquisitions|
|-|-|
|カテゴリ|Level (added in terms of experience value)|
|Action.|Number of times executed|
|Item|number possessed|
___

#### ID of an element
ID identifying the element to be acquired
___

#### value
Value to be obtained
- Minus values configured will decrease the number of possessions, the number of times they have been performed, and their level. However, it will not go down to 0 or below.
- If an Item has a configured maximum ownership count (max), the number of possessions will not increase beyond that value.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probability [-1 to 1]
Probability of success in acquisition (negative values are evaluated only in the event of failure)
- Configure the drop probability as a decimal value between -1 and 1. The absolute value is used to determine the probability.
- When the value is positive it is evaluated only when the action succeeds: `1` always grants it, and `0.5` grants it with a 50% probability.
- When the value is negative it is evaluated only when the action fails: `-1` always grants it, and `-0.5` grants it with a 50% probability.
- If the value is `0`, it is not obtained in either a success or a failure scenario.
- The default value is `1` (always obtained upon success).
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

### [_information_](en/editor/information)
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

#### Type
Type of element referenced as a condition

|Type|Referenced value|
|-|-|
|カテゴリ|カテゴリのレベル|
|Action.|Number of times the Action has been performed.|
|Item|Number of Items in your possession|
___

#### ID of an element
ID of the element to be referenced as a condition
___

#### value
Necessary values for requirements
- The condition is satisfied if the value is above the specified value.
___

#### Consumption probability [0-1].
Probability of Item being consumed (0-1, valid only if Type is Item)
- The probability that an Item will be consumed when the condition is met and the Action is performed.
- `1` always consumes, `0.5` consumes with a 50% probability, and `0` does not consume.
- The default value is `1` (always consumes).
- Invalid if Type is other than Item.
___

#### Equipment
Requires that the Item be in the Equipment state (valid only if the Type is Item) or
- When enabled, the Necessary requirements are that the Item be equipped, not just possessed.
- Invalid if Type is other than Item.
___

### Group Aggregation
Treat the condition's id as a group ID and judge by the total of its members
- When enabled, the id set in the condition (requirements) is treated as the ID of a group from the basic settings.
- A condition whose Type is Category is judged by the total Level of all Categories belonging to that group.
- A condition whose Type is Action is judged by the total number of times all Actions belonging to that group have been executed.
- A condition whose Type is Item is judged by the total number of all Items belonging to that group in your possession.
- Locked (non-released) elements are not included in the total.
- The Item's consumption probability (chance) and equipment condition (equipment) are ignored, and nothing is consumed. They are used for judgment only.
- When disabled, the id in the condition is treated as before, as the ID of an individual Category, Action, or Item.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Type
Type of element to be acquired

|Type|What is Acquisitions|
|-|-|
|カテゴリ|Level (added in terms of experience value)|
|Action.|Number of times executed|
|Item|number possessed|
___

#### ID of an element
ID identifying the element to be acquired
___

#### value
Value to be obtained
- Minus values configured will decrease the number of possessions, the number of times they have been performed, and their level. However, it will not go down to 0 or below.
- If an Item has a configured maximum ownership count (max), the number of possessions will not increase beyond that value.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probability [-1 to 1]
Probability of success in acquisition (negative values are evaluated only in the event of failure)
- Configure the drop probability as a decimal value between -1 and 1. The absolute value is used to determine the probability.
- When the value is positive it is evaluated only when the action succeeds: `1` always grants it, and `0.5` grants it with a 50% probability.
- When the value is negative it is evaluated only when the action fails: `-1` always grants it, and `-0.5` grants it with a 50% probability.
- If the value is `0`, it is not obtained in either a success or a failure scenario.
- The default value is `1` (always obtained upon success).
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

### [_information_](en/editor/information)
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

#### Type
Type of element referenced as a condition

|Type|Referenced value|
|-|-|
|カテゴリ|カテゴリのレベル|
|Action.|Number of times the Action has been performed.|
|Item|Number of Items in your possession|
___

#### ID of an element
ID of the element to be referenced as a condition
___

#### value
Necessary values for requirements
- The condition is satisfied if the value is above the specified value.
___

#### Consumption probability [0-1].
Probability of Item being consumed (0-1, valid only if Type is Item)
- The probability that an Item will be consumed when the condition is met and the Action is performed.
- `1` always consumes, `0.5` consumes with a 50% probability, and `0` does not consume.
- The default value is `1` (always consumes).
- Invalid if Type is other than Item.
___

#### Equipment
Requires that the Item be in the Equipment state (valid only if the Type is Item) or
- When enabled, the Necessary requirements are that the Item be equipped, not just possessed.
- Invalid if Type is other than Item.
___

### Group Aggregation
Treat the condition's id as a group ID and judge by the total of its members
- When enabled, the id set in the condition (requirements) is treated as the ID of a group from the basic settings.
- A condition whose Type is Category is judged by the total Level of all Categories belonging to that group.
- A condition whose Type is Action is judged by the total number of times all Actions belonging to that group have been executed.
- A condition whose Type is Item is judged by the total number of all Items belonging to that group in your possession.
- Locked (non-released) elements are not included in the total.
- The Item's consumption probability (chance) and equipment condition (equipment) are ignored, and nothing is consumed. They are used for judgment only.
- When disabled, the id in the condition is treated as before, as the ID of an individual Category, Action, or Item.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Type
Type of element to be acquired

|Type|What is Acquisitions|
|-|-|
|カテゴリ|Level (added in terms of experience value)|
|Action.|Number of times executed|
|Item|number possessed|
___

#### ID of an element
ID identifying the element to be acquired
___

#### value
Value to be obtained
- Minus values configured will decrease the number of possessions, the number of times they have been performed, and their level. However, it will not go down to 0 or below.
- If an Item has a configured maximum ownership count (max), the number of possessions will not increase beyond that value.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probability [-1 to 1]
Probability of success in acquisition (negative values are evaluated only in the event of failure)
- Configure the drop probability as a decimal value between -1 and 1. The absolute value is used to determine the probability.
- When the value is positive it is evaluated only when the action succeeds: `1` always grants it, and `0.5` grants it with a 50% probability.
- When the value is negative it is evaluated only when the action fails: `-1` always grants it, and `-0.5` grants it with a 50% probability.
- If the value is `0`, it is not obtained in either a success or a failure scenario.
- The default value is `1` (always obtained upon success).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。