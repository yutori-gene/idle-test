
# event
Messages and Rewards Triggered at Specific Times
- It triggers at specific times—such as when you first open a world or when you get gameovered—and opens a dedicated screen.
- One is provided for each timing, and you cannot add or remove them. Leave the fields blank for timings you won't use.
- It will not appear in the list of missions or tasks. Tasks that are marked as completed once certain conditions are met should be configured as tasks.
- Rewards are automatically acquired as soon as they are triggered. There is no action required to claim them, such as completing a task, and no ribbon appears.
- When activated, it can change the level of the Category, the number of times the Action is performed, and the number of Items possessed.
- If you leave the Name, Description, and Icon fields blank, the player will use its built-in default text and icon.

|timing|activation condition|repeat|
|-|-|-|
|`comebacked`|When you return from offline for more than 1 second and there is an Action in progressing.|many times|
|`gameovered`|When a player's stamina runs out in battle.|many times|
|`welcomed`|When I first started this world.|only once|
|`completed`|When the maximum value (maxCategoryLevels) is reached for the level of all categories|only once|
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
___

#### Type
Type of element referenced as a condition

|Type|Referenced value|
|-|-|
|Category|Category Level|
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
|Category|Level (added in terms of experience value)|
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
- If the Type is Category, the value configured is added directly to the level (1 for 1 level, 0.5 for 0.5 level). The usual way to adjust this is to use the Action's experience value config. Unnecessary to configure this setting unless there is a special purpose.
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
___

#### Type
Type of element referenced as a condition

|Type|Referenced value|
|-|-|
|Category|Category Level|
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
|Category|Level (added in terms of experience value)|
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
- If the Type is Category, the value configured is added directly to the level (1 for 1 level, 0.5 for 0.5 level). The usual way to adjust this is to use the Action's experience value config. Unnecessary to configure this setting unless there is a special purpose.
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
___

#### Type
Type of element referenced as a condition

|Type|Referenced value|
|-|-|
|Category|Category Level|
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
|Category|Level (added in terms of experience value)|
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
- If the Type is Category, the value configured is added directly to the level (1 for 1 level, 0.5 for 0.5 level). The usual way to adjust this is to use the Action's experience value config. Unnecessary to configure this setting unless there is a special purpose.
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
Triggers when every category reaches its maximum level
- It triggers when the levels of all categories reach the maximum value (maxCategoryLevels).
- Categories that are not numeric are excluded from the check.
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
___

#### Type
Type of element referenced as a condition

|Type|Referenced value|
|-|-|
|Category|Category Level|
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
|Category|Level (added in terms of experience value)|
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
- If the Type is Category, the value configured is added directly to the level (1 for 1 level, 0.5 for 0.5 level). The usual way to adjust this is to use the Action's experience value config. Unnecessary to configure this setting unless there is a special purpose.
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
___

#### Type
Type of element referenced as a condition

|Type|Referenced value|
|-|-|
|Category|Category Level|
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
|Category|Level (added in terms of experience value)|
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
- If the Type is Category, the value configured is added directly to the level (1 for 1 level, 0.5 for 0.5 level). The usual way to adjust this is to use the Action's experience value config. Unnecessary to configure this setting unless there is a special purpose.
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