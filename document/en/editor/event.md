
# event
Message and reward system triggered by conditions
- It is triggered when the configured timing/conditions are met and displays a message.
- It can be triggered at first startup, when the game is gameovered, when returning from offline, or when certain conditions are met.
- When activated, it can change the level of the Category, the number of times the Action is performed, and the number of Items possessed.
___

## [_information_](en/editor/information)
___

## timing
Configure the timing of event activation

|timing|activation condition|repeat|
|-|-|-|
|`matched`.|The first time a condition configured in CONDITIONS is met|only once|
|`comebacked`.|When you return from offline for more than 1 second and there is an Action in progressing.|many times|
|`gameovered`.|When a player's stamina runs out in battle.|many times|
|`completed`.|When the maximum value (maxCategoryLevels) is reached for the level of all categories|only once|
|`welcomed`.|When I first started this world.|only once|
|`obtained`|When you complete or confirm a single-type action (such as a treasure chest). If you meet the requirements, event rewards will also be added.|many times|
___

## Initial Display State
Initial display state of the event icon (triggering depends on timing; with this config, it will not trigger)
- The conditions for triggering an event are determined by timing; this setting affects only the appearance of the list icon.
- secreted: It will not appear in the event list at all until all requirements are met (though the event itself will still fire at the appropriate time).
- hidden・hinted: The icon is displayed with a diagonal line through it to indicate that it is not unlocked.
- Released: The strikethrough disappears, and it is displayed as "Released."
___

## terms
Conditions for triggering events and granting rewards
- This is the condition for activating the event or granting the reward.
- With `matched`, the reward is earned only when this condition is met.
- Except for `matched`, this action triggers when the timing condition is met. After that, you will receive a reward only when the conditions configured here are met.
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
- Always consumed at `1`, 50% chance of consumption at `0.5`, and no consumption at `0`.
- The default value is `1` (always consumed).
- Invalid if Type is other than Item.
___

### Equipment
Requires that the Item be in the Equipment state (valid only if the Type is Item) or
- When enabled, the Necessary requirements are that the Item be equipped, not just possessed.
- Invalid if Type is other than Item.
___

## reward
Configure rewards when the event is triggered
- This is the reward when the event is triggered.
- With `matched`, you receive a reward only when the conditions are met and the action is triggered.
- Except for `matched`, you earn a reward only when the timing condition is met and the conditions specified in `conditions` are satisfied.
- You can configure the quantity to be minus. For example, if you set the quantity of items to minus in the case of `gameovered`, you will lose them when gameovered.
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
- When the value is positive, it is evaluated only when there is success with the action; a value of `1` guarantees a reward, while a value of `0.5` results in a 50% chance of receiving a reward.
- When the value is negative, it is evaluated only in cases of action failure; a value of `-1` guarantees a drop, while a value of `-0.5` results in a 50% chance of a drop.
- If the value is `0`, it is not obtained in either a success or a failure scenario.
- The default value is `1` (always obtained upon success).
___

## task group
Group identifier of the task (currently unused)
- This item is currently not in use. It is reserved for future enhancements.