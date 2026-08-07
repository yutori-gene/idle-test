
# Task
Missions that are completed when certain conditions are met
- When the configured conditions are met, the goal is achieved, and a message appears at the top of the screen.
- It will appear in the list of player missions and the list of tasks by Category.
- Rewards are not awarded automatically. Players receive them when they open a task and tap the "Claim" button.
- Until you receive the reward, a ribbon will appear on the list bar to indicate that it is still unclaimed.
- By making acquisitions, you can change the category level, the number of times an action has been performed, and the number of Items you possess.
- For events you want to trigger at times other than those specified by conditions—such as when the game is first launched or when the gameovered state is reached—config them in the Basic Settings events.
- [_event_](en/editor/event)
___

## [_information_](en/editor/information)
___

## Category
The ID of the category to which the task belongs
- Specify the ID of the Category to which this task belongs.
- Once configured, a list of tasks will be added to the player's category screen, and they will also be grouped by category in the mission list.
- If left blank, the mission will not be assigned to any Category and will be grouped together and displayed at the top of the mission list.
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
___

### Type
Type of element referenced as a condition

|Type|Referenced value|
|-|-|
|Category|Category Level|
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

## reward
Configuring Rewards for Completed Tasks
- 達成したタスクを開き、獲得のバーを押した時に受け取れる報酬です。
- カテゴリーのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- 数量にマイナスを設定することもできます。
- 報酬を設定していないタスクは獲得のバーが出ず、達成した時点で完了になります。
- 持てるアイテムの種類が上限に達している時は受け取れません。整理してから受け取り直します。
___

### Type
Type of element to be acquired

|Type|What is Acquisitions|
|-|-|
|Category|Level (added in terms of experience value)|
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
- If the Type is Category, the value configured is added directly to the level (1 for 1 level, 0.5 for 0.5 level). The usual way to adjust this is to use the Action's experience value config. Unnecessary to configure this setting unless there is a special purpose.
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
- Items are displayed within categories, further organized into groups.
- If left blank, no minutes will be grouped.
- [_general_](en/editor/general)