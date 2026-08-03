
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
- The conditions for completing a task are defined in "Requirements"; this setting affects only the appearance of the list icon.
- secreted: It will not appear in the task list at all until all requirements are met (achievement itself occurs based on conditions).
- hidden・hinted: The icon is displayed with a diagonal line through it to indicate that it is not unlocked.
- Released: The strikethrough disappears, and it is displayed as "Released."
- Once a task has been completed, it will not disappear from the list. If it becomes uncompleted again, a diagonal line will appear on the icon to indicate this.
___

## terms
Conditions for Completing a Task
- These are the conditions for completing the task.
- Once you meet this condition, you'll have completed the objective and will be able to receive your reward.
- If you no longer meet the requirements before receiving your reward, your status will revert to "Not Achieved" and you will no longer be able to receive it. You can receive it again once you meet the requirements once more.
- I won't complete tasks for which I haven't configured conditions.
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
Configuring Rewards for Completed Tasks
- This is the reward you receive when you open a completed task and tap the "Claim" bar.
- You can change the category level, the number of times an action is performed, and the number of Items you have.
- You can also configure a negative quantity.
- Tasks without a reward configured will not display a progress bar and will be marked as complete once they are finished.
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
Task Display Group Categories
- Apply one of the groups configured in Basic.
- The list of tasks is displayed in the order of the groups you have configured.
- Items are displayed within categories, further organized into groups.
- If left blank, no minutes will be grouped.
- [_general_](en/editor/general)