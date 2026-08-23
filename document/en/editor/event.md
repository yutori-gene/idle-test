
# event
Messages and Rewards Triggered at Specific Times
- It triggers at specific times—such as when you first open a world or when you get gameovered—and opens a dedicated screen.
- One is provided for each timing, and you cannot add or remove them. Leave the fields blank for timings you won't use.
- It will not appear in the list of missions or tasks. Tasks that are marked as completed once certain conditions are met should be configured as tasks.
- Rewards are automatically acquired as soon as they are triggered. There is no action required to claim them, such as completing a task, and no ribbon appears.
- 発動時にカテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- If you leave the Name, Description, and Icon fields blank, the player will use its built-in default text and icon.

|timing|activation condition|repeat|
|-|-|-|
|`comebacked`|When you return from offline for more than 1 second and there is an Action in progressing.|many times|
|`gameovered`|When a player's stamina runs out in battle.|many times|
|`welcomed`|When I first started this world.|only once|
|`completed`|全カテゴリのレベルが最大値（maxCategoryLevels）に達した時|only once|
|`obtained`|When you complete or confirm a single-type action (such as a treasure chest)|many times|
- [_task_](en/editor/task)
___

## On return
Triggers when you come back from offline
- It triggers when you come back after one second or more offline and an action was in progress.
- It is shown together with the summary of the progress made while you were away.
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
- It is fixed to `comebacked` and cannot be edited.
- It triggers every time you come back, any number of times.
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

## On game over
Triggers when stamina runs out in combat
- It triggers when the player's stamina runs out in combat.
- By setting a negative reward quantity you can attach a penalty to a game over.
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
- It is fixed to `gameovered` and cannot be edited.
- It triggers every time you get a game over, any number of times.
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

## On first start
Triggers when the world is opened for the first time
- It triggers when this world is started for the first time.
- Use it to explain the setting or to hand over starting supplies.
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
- It is fixed to `welcomed` and cannot be edited.
- It triggers only once, at the first start.
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

## On clear
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
- It is fixed to `completed` and cannot be edited.
- It triggers only once, when the conditions are met.
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

## On single action completion
Triggers when a single action such as a treasure chest is completed
- It triggers when an action of the single type (such as a treasure chest) is completed and confirmed.
- Separately from the action's own reward, you can add the reward configured here on top.
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
- It is fixed to `obtained` and cannot be edited.
- It triggers every time you complete a single action, any number of times.
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