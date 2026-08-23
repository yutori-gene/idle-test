
# Task
Missions that are completed when certain conditions are met
- When the configured conditions are met, the goal is achieved, and a message appears at the top of the screen.
- プレイヤーのミッションの一覧と、カテゴリのタスクの一覧に表示されます。
- Rewards are not awarded automatically. Players receive them when they open a task and tap the "Claim" button.
- Until you receive the reward, a ribbon will appear on the list bar to indicate that it is still unclaimed.
- 獲得でカテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- For events you want to trigger at times other than those specified by conditions—such as when the game is first launched or when the gameovered state is reached—config them in the Basic Settings events.
- [_event_](en/editor/event)
___

## [_information_](en/editor/information)
___

## カテゴリ
タスクが所属するカテゴリのID
- このタスクを所属させるカテゴリのIDを指定します。
- 設定すると、プレイヤーのカテゴリの画面にタスクの一覧が追加され、ミッションの一覧でもカテゴリごとにまとめて表示されます。
- 空欄の場合はどのカテゴリにも属さず、ミッションの一覧の先頭にまとめて表示されます。
___

## timing
Task Trigger Timing (Fixed at `matched`)
- The task is locked at `matched` (when the configured conditions are met) and cannot be edited.
- You can receive the reward only once, and once you receive it, the achievement status will remain unchanged.
- For events you want to trigger at other times, configure them in the Basic Settings > Events section.
- [_event_](en/editor/event)
___

## Initial Display State
Initial display state of the task icon (whether it is marked as completed depends on certain conditions; with this config, it will not be marked as completed)
- タスクの達成条件はrequirementsで決まり、この項目は一覧アイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでタスクの一覧に一切表示されません（達成自体は条件で起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
- 一度達成したタスクは一覧から消えず、その後に条件を満たさなくなっても達成のまま表示されます。
___

## terms
Conditions for Completing a Task
- タスクを達成させる条件です。
- この条件を満たすと達成になり、報酬を受け取れるようになります。
- 一度達成すると、その後に条件を満たさなくなっても達成のままで、報酬もいつでも受け取れます。
- 条件を設定していないタスクは達成しません。
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

## Group Aggregation
Treat the condition's id as a group ID and judge by the total of its members
- When enabled, the id set in the condition (requirements) is treated as the ID of a group from the basic settings.
- A condition whose Type is Category is judged by the total Level of all Categories belonging to that group.
- A condition whose Type is Action is judged by the total number of times all Actions belonging to that group have been executed.
- A condition whose Type is Item is judged by the total number of all Items belonging to that group in your possession.
- Locked (non-released) elements are not included in the total.
- The Item's consumption probability (chance) and equipment condition (equipment) are ignored, and nothing is consumed. They are used for judgment only.
- When disabled, the id in the condition is treated as before, as the ID of an individual Category, Action, or Item.
___

## reward
Configuring Rewards for Completed Tasks
- 達成したタスクを開き、獲得のバーを押した時に受け取れる報酬です。
- カテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- 数量にマイナスを設定することもできます。
- 報酬を設定していないタスクは獲得のバーが出ず、達成した時点で完了になります。
- 持てるアイテムの種類が上限に達している時は受け取れません。整理してから受け取り直します。
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

## task group
Task Display Group Categories
- Apply one of the groups configured in Basic.
- The list of tasks is displayed in the order of the groups you have configured.
- カテゴリの中でさらにグループごとに分けて表示されます。
- If left blank, no minutes will be grouped.
- [_general_](en/editor/general)