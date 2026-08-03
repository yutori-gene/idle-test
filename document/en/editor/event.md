
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
|`comebacked`.|When you return from offline for more than 1 second and there is an Action in progressing.|many times|
|`gameovered`.|When a player's stamina runs out in battle.|many times|
|`welcomed`.|When I first started this world.|only once|
|`completed`.|When the maximum value (maxCategoryLevels) is reached for the level of all categories|only once|
|`obtained`|When you complete or confirm a single-type action (such as a treasure chest)|many times|
- [_task_](en/editor/task)
___

## Upon Return
Triggers when you come back online
- This triggers when you return from offline status after more than 1 second has elapsed and there is an action that is progressing.
- It will be displayed along with a summary of the progress made while you were away.
___

### [_information_](en/editor/information)
___

### Category
We will not use it at the event.
- Since it will not appear in the list of missions or tasks, I will not specify a category for it.
- The input field does not appear in the editor.
___

### timing
When the event triggers (fixed)
- It is set to `comebacked` and cannot be edited.
- It activates every time you return, as many times as needed.
___

### Initial Display State
Initial display state of the event icon (triggering depends on timing; with this config, it will not trigger)
- The conditions for triggering an event are determined by timing; this setting affects only the icon's appearance.
- secreted: The icon will not be displayed until all requirements are met (though the event itself will occur at the appropriate time).
- hidden・hinted: The icon is displayed with a diagonal line through it to indicate that it is not unlocked.
- Released: The strikethrough disappears, and it is displayed as "Released."
___

### terms
Conditions for Earning Rewards
- When the condition is met, the event is triggered, and a dedicated screen opens to display the details.
- You will receive the reward only if the conditions configured here are met when the ability is activated.
- If nothing is configured, you'll receive a reward every time it triggers.
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
- Always consumed at `1`, 50% chance of consumption at `0.5`, and no consumption at `0`.
- The default value is `1` (always consumed).
- Invalid if Type is other than Item.
___

#### Equipment
Requires that the Item be in the Equipment state (valid only if the Type is Item) or
- When enabled, the Necessary requirements are that the Item be equipped, not just possessed.
- Invalid if Type is other than Item.
___

### reward
Configure rewards when the event is triggered
- This is a reward you receive when the timing is right and the conditions are met.
- Unlike tasks, you don't need to perform any action to receive it; you automatically obtain it as soon as it is triggered.
- You can configure a negative quantity. For example, if you configure the quantity of an item to a negative value when the gameover event occurs, you will lose those items.
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
- When the value is positive, it is evaluated only when there is success with the action; a value of `1` guarantees a reward, while a value of `0.5` results in a 50% chance of receiving a reward.
- When the value is negative, it is evaluated only in cases of action failure; a value of `-1` guarantees a drop, while a value of `-0.5` results in a 50% chance of a drop.
- If the value is `0`, it is not obtained in either a success or a failure scenario.
- The default value is `1` (always obtained upon success).
___

### task group
We will not use it at the event.
- Since it does not appear in the list of missions or tasks, we do not use group assignments.
- The input field does not appear in the editor.
___

## When the game is gameovered
Triggers when you run out of stamina during battle
- This ability activates when the player runs out of stamina during combat.
- If you configure the reward amount to a negative value, you can make it the penalty for gameoveredness.
___

### [_information_](en/editor/information)
___

### Category
We will not use it at the event.
- Since it will not appear in the list of missions or tasks, I will not specify a category for it.
- The input field does not appear in the editor.
___

### timing
When the event triggers (fixed)
- It is set to `gameovered` and cannot be edited.
- It triggers every time you become gameovered, as many times as necessary.
___

### Initial Display State
Initial display state of the event icon (triggering depends on timing; with this config, it will not trigger)
- The conditions for triggering an event are determined by timing; this setting affects only the icon's appearance.
- secreted: The icon will not be displayed until all requirements are met (though the event itself will occur at the appropriate time).
- hidden・hinted: The icon is displayed with a diagonal line through it to indicate that it is not unlocked.
- Released: The strikethrough disappears, and it is displayed as "Released."
___

### terms
Conditions for Earning Rewards
- When the condition is met, the event is triggered, and a dedicated screen opens to display the details.
- You will receive the reward only if the conditions configured here are met when the ability is activated.
- If nothing is configured, you'll receive a reward every time it triggers.
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
- Always consumed at `1`, 50% chance of consumption at `0.5`, and no consumption at `0`.
- The default value is `1` (always consumed).
- Invalid if Type is other than Item.
___

#### Equipment
Requires that the Item be in the Equipment state (valid only if the Type is Item) or
- When enabled, the Necessary requirements are that the Item be equipped, not just possessed.
- Invalid if Type is other than Item.
___

### reward
Configure rewards when the event is triggered
- This is a reward you receive when the timing is right and the conditions are met.
- Unlike tasks, you don't need to perform any action to receive it; you automatically obtain it as soon as it is triggered.
- You can configure a negative quantity. For example, if you configure the quantity of an item to a negative value when the gameover event occurs, you will lose those items.
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
- When the value is positive, it is evaluated only when there is success with the action; a value of `1` guarantees a reward, while a value of `0.5` results in a 50% chance of receiving a reward.
- When the value is negative, it is evaluated only in cases of action failure; a value of `-1` guarantees a drop, while a value of `-0.5` results in a 50% chance of a drop.
- If the value is `0`, it is not obtained in either a success or a failure scenario.
- The default value is `1` (always obtained upon success).
___

### task group
We will not use it at the event.
- Since it does not appear in the list of missions or tasks, we do not use group assignments.
- The input field does not appear in the editor.
___

## When starting for the first time
Triggers when you open the world for the first time
- This effect triggers the first time you launch this world.
- This is used to explain the game's world and to hand out the starter items as the game starts.
___

### [_information_](en/editor/information)
___

### Category
We will not use it at the event.
- Since it will not appear in the list of missions or tasks, I will not specify a category for it.
- The input field does not appear in the editor.
___

### timing
When the event triggers (fixed)
- It is set to `welcomed` and cannot be edited.
- This occurs only once, when the application is launched for the first time.
___

### Initial Display State
Initial display state of the event icon (triggering depends on timing; with this config, it will not trigger)
- The conditions for triggering an event are determined by timing; this setting affects only the icon's appearance.
- secreted: The icon will not be displayed until all requirements are met (though the event itself will occur at the appropriate time).
- hidden・hinted: The icon is displayed with a diagonal line through it to indicate that it is not unlocked.
- Released: The strikethrough disappears, and it is displayed as "Released."
___

### terms
Conditions for Earning Rewards
- When the condition is met, the event is triggered, and a dedicated screen opens to display the details.
- You will receive the reward only if the conditions configured here are met when the ability is activated.
- If nothing is configured, you'll receive a reward every time it triggers.
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
- Always consumed at `1`, 50% chance of consumption at `0.5`, and no consumption at `0`.
- The default value is `1` (always consumed).
- Invalid if Type is other than Item.
___

#### Equipment
Requires that the Item be in the Equipment state (valid only if the Type is Item) or
- When enabled, the Necessary requirements are that the Item be equipped, not just possessed.
- Invalid if Type is other than Item.
___

### reward
Configure rewards when the event is triggered
- This is a reward you receive when the timing is right and the conditions are met.
- Unlike tasks, you don't need to perform any action to receive it; you automatically obtain it as soon as it is triggered.
- You can configure a negative quantity. For example, if you configure the quantity of an item to a negative value when the gameover event occurs, you will lose those items.
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
- When the value is positive, it is evaluated only when there is success with the action; a value of `1` guarantees a reward, while a value of `0.5` results in a 50% chance of receiving a reward.
- When the value is negative, it is evaluated only in cases of action failure; a value of `-1` guarantees a drop, while a value of `-0.5` results in a 50% chance of a drop.
- If the value is `0`, it is not obtained in either a success or a failure scenario.
- The default value is `1` (always obtained upon success).
___

### task group
We will not use it at the event.
- Since it does not appear in the list of missions or tasks, we do not use group assignments.
- The input field does not appear in the editor.
___

## Upon completion
Triggers when all categories reach their max level
- This triggers when the level of all categories reaches the max value (maxCategoryLevels).
- Categories that are not numeric are excluded from the evaluation.
___

### [_information_](en/editor/information)
___

### Category
We will not use it at the event.
- Since it will not appear in the list of missions or tasks, I will not specify a category for it.
- The input field does not appear in the editor.
___

### timing
When the event triggers (fixed)
- It is set to `completed` and cannot be edited.
- It triggers only once when the conditions are met.
___

### Initial Display State
Initial display state of the event icon (triggering depends on timing; with this config, it will not trigger)
- The conditions for triggering an event are determined by timing; this setting affects only the icon's appearance.
- secreted: The icon will not be displayed until all requirements are met (though the event itself will occur at the appropriate time).
- hidden・hinted: The icon is displayed with a diagonal line through it to indicate that it is not unlocked.
- Released: The strikethrough disappears, and it is displayed as "Released."
___

### terms
Conditions for Earning Rewards
- When the condition is met, the event is triggered, and a dedicated screen opens to display the details.
- You will receive the reward only if the conditions configured here are met when the ability is activated.
- If nothing is configured, you'll receive a reward every time it triggers.
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
- Always consumed at `1`, 50% chance of consumption at `0.5`, and no consumption at `0`.
- The default value is `1` (always consumed).
- Invalid if Type is other than Item.
___

#### Equipment
Requires that the Item be in the Equipment state (valid only if the Type is Item) or
- When enabled, the Necessary requirements are that the Item be equipped, not just possessed.
- Invalid if Type is other than Item.
___

### reward
Configure rewards when the event is triggered
- This is a reward you receive when the timing is right and the conditions are met.
- Unlike tasks, you don't need to perform any action to receive it; you automatically obtain it as soon as it is triggered.
- You can configure a negative quantity. For example, if you configure the quantity of an item to a negative value when the gameover event occurs, you will lose those items.
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
- When the value is positive, it is evaluated only when there is success with the action; a value of `1` guarantees a reward, while a value of `0.5` results in a 50% chance of receiving a reward.
- When the value is negative, it is evaluated only in cases of action failure; a value of `-1` guarantees a drop, while a value of `-0.5` results in a 50% chance of a drop.
- If the value is `0`, it is not obtained in either a success or a failure scenario.
- The default value is `1` (always obtained upon success).
___

### task group
We will not use it at the event.
- Since it does not appear in the list of missions or tasks, we do not use group assignments.
- The input field does not appear in the editor.
___

## Upon completion of a single-step action
Triggered when you complete a one-time action, such as opening a treasure chest
- This effect triggers when you complete or confirm a single-type action (such as opening a treasure chest).
- In addition to the reward for the Action itself, you can add the reward configured here.
___

### [_information_](en/editor/information)
___

### Category
We will not use it at the event.
- Since it will not appear in the list of missions or tasks, I will not specify a category for it.
- The input field does not appear in the editor.
___

### timing
When the event triggers (fixed)
- It is set to `obtained` and cannot be edited.
- It triggers as many times as you like every time you complete a single-use action.
___

### Initial Display State
Initial display state of the event icon (triggering depends on timing; with this config, it will not trigger)
- The conditions for triggering an event are determined by timing; this setting affects only the icon's appearance.
- secreted: The icon will not be displayed until all requirements are met (though the event itself will occur at the appropriate time).
- hidden・hinted: The icon is displayed with a diagonal line through it to indicate that it is not unlocked.
- Released: The strikethrough disappears, and it is displayed as "Released."
___

### terms
Conditions for Earning Rewards
- When the condition is met, the event is triggered, and a dedicated screen opens to display the details.
- You will receive the reward only if the conditions configured here are met when the ability is activated.
- If nothing is configured, you'll receive a reward every time it triggers.
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
- Always consumed at `1`, 50% chance of consumption at `0.5`, and no consumption at `0`.
- The default value is `1` (always consumed).
- Invalid if Type is other than Item.
___

#### Equipment
Requires that the Item be in the Equipment state (valid only if the Type is Item) or
- When enabled, the Necessary requirements are that the Item be equipped, not just possessed.
- Invalid if Type is other than Item.
___

### reward
Configure rewards when the event is triggered
- This is a reward you receive when the timing is right and the conditions are met.
- Unlike tasks, you don't need to perform any action to receive it; you automatically obtain it as soon as it is triggered.
- You can configure a negative quantity. For example, if you configure the quantity of an item to a negative value when the gameover event occurs, you will lose those items.
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
- When the value is positive, it is evaluated only when there is success with the action; a value of `1` guarantees a reward, while a value of `0.5` results in a 50% chance of receiving a reward.
- When the value is negative, it is evaluated only in cases of action failure; a value of `-1` guarantees a drop, while a value of `-0.5` results in a 50% chance of a drop.
- If the value is `0`, it is not obtained in either a success or a failure scenario.
- The default value is `1` (always obtained upon success).
___

### task group
We will not use it at the event.
- Since it does not appear in the list of missions or tasks, we do not use group assignments.
- The input field does not appear in the editor.