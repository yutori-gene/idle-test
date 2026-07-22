
# acquisitions
Configure acquisition of Item or Category level
- Configure the acquisition.
- You can change the level of the Category as well as the Item, and the number of times the Action has been performed.
- You can configure the probability of obtaining the product.

|Type|What you will acquire|
|-|-|
|Category|level|
|Action.|Number of times executed|
|Item|number possessed|
- [_type_](en/editor/type)
___

## Type
Type of element to be acquired

|Type|What is Acquisitions|
|-|-|
|Category|Level (added in terms of experience value)|
|Action.|Number of times executed|
|Item|number possessed|
___

## ID of an element
ID identifying the element to be acquired
___

## value
Value to be obtained
- Minus values configured will decrease the number of possessions, the number of times they have been performed, and their level. However, it will not go down to 0 or below.
- If an Item has a configured maximum ownership count (max), the number of possessions will not increase beyond that value.
- If the Type is Category, the value configured is added directly to the level (1 for 1 level, 0.5 for 0.5 level). The usual way to adjust this is to use the Action's experience value config. Unnecessary to configure this setting unless there is a special purpose.
___

## Probability [-1 to 1]
Probability of success in acquisition (negative values are evaluated only in the event of failure)
- Configure the drop probability as a decimal value between -1 and 1. The absolute value is used to determine the probability.
- When the value is positive, it is evaluated only when there is success with the action; a value of `1` guarantees a reward, while a value of `0.5` results in a 50% chance of receiving a reward.
- When the value is negative, it is evaluated only in cases of action failure; a value of `-1` guarantees a drop, while a value of `-0.5` results in a 50% chance of a drop.
- If the value is `0`, it is not obtained in either a success or a failure scenario.
- The default value is `1` (always obtained upon success).