
# terms
Necessary requirements configured for the use and display of elements
- These are the conditions to be configured for each element by Category, Action, and Item.
- If all configured conditions are not met, the operations shown in the table cannot be performed.
- If the locked feature is enabled, the element itself will be hidden until the condition is met.

|Configuration|Nothing can be done without meeting the conditions.|
|-|-|
|Category|Execution of all Actions and manipulation of Items in a Category|
|Action.|Execution of Action|
|Item|Manipulation of Items (e.g., Equipment)|
- [_type_](en/editor/type)
___

## Type
Type of element referenced as a condition

|Type|Referenced value|
|-|-|
|Category|Category Level|
|Action.|Number of times the Action has been performed.|
|Item|Number of Items in your possession|
___

## ID of an element
ID of the element to be referenced as a condition
___

## value
Necessary values for requirements
- The condition is satisfied if the value is above the specified value.
___

## Consumption probability [0-1].
Probability of Item being consumed (0-1, valid only if Type is Item)
- The probability that an Item will be consumed when the condition is met and the Action is performed.
- Always consumed at `1`, 50% chance of consumption at `0.5`, and no consumption at `0`.
- The default value is `1` (always consumed).
- Invalid if Type is other than Item.
___

## Equipment
Requires that the Item be in the Equipment state (valid only if the Type is Item) or
- When enabled, the Necessary requirements are that the Item be equipped, not just possessed.
- Invalid if Type is other than Item.