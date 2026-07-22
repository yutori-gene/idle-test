
# Item
Material elements such as Equipment and Consumables
- These are elements related to owning things such as Equipment, Consumables, and Valuables.
- Only one may be equipped in a Category, but it can also be made to be equipped with nothing.
- There are also ways to use it like a variable.
___

## [_information_](en/editor/information)
___

## Category
ID of the Category to which the Item belongs
- Specify the ID of the Category to which this Item belongs.
___

## group (usu. of people)
Item Display Group Classification
- Apply one of the groups configured in Basic.
- A list of Items will be displayed in the order of the configured groups.
- If left blank, no minutes will be grouped.
- [_general_](en/editor/general)
___

## Initial Unlocked State
Initial Display and Release States of Elements (Automatically advance to a higher state when activation conditions are met)
- secreted: Will not appear on the UI at all until all requirements are met (it will not appear in Hints, and will be hidden in the list of requirements and rewards).
- hidden: Remains completely hidden (with its name grayed out and unavailable for interaction) as long as it is not referenced by any unlocking elements and does not meet any requirements.
- hinted (default): Only the name is displayed as a preview, but you cannot interact with it until it is unlocked.
- released: The item is released and available for use from the start, regardless of conditions (formerly "Display from the Start").
___

## Purchase price [coins]
Configure the purchase price of the Item
- If you have never owned the Item, you cannot buy it.

|buying price|treatment|
|-|-|
|0|I can't afford it.|
|A value greater than 0|Affordable price|
|A value less than 0 (e.g., -1)|Cannot be bought (treated as 0)|
___

## Selling price [coins]
Configure the sale price of an Item
- Configure the price at which the Item will be sold.

|selling price|treatment|
|-|-|
|0|nothing sells (e.g. goods)|
|A value greater than 0|I can sell it for that value.|
|A value less than 0 (e.g., -1)|The discount rate of the general config multiplied by the bid price (if the bid price is 0, it cannot be sold)|
- [_general_](en/editor/general)
___

## Max. owned count [pcs].
Limit on max count of items owned
- If 0, there is no limit to the number that can be owned.
- If the number is 1 or more, you can only own up to that count. If you have reached the up limit, acquiring more will not increase your own count.
___

## Equipment Type
Type configurations for Equipment, Effects, and Consumption of Items
- Necessary for Possible Items to belong to the group specified in the category `equipmentGroups`.
- Only one Item may be Equipment within the same group.

|value|Equipment|Effectiveness|consumption|Example|
|-|-|-|-|-|
|`necessary`.|Necessary|Only while Equipping|nothing|Equipment such as swords and armor|
|`consumable`.|Necessary|Only while Equipping|Consumed when Action is executed|Items that are consumed for effect, such as potions|
|`unnecessary`.|Unnecessary|Always in possession|nothing|Passive Items that are effective just by having them.|
|`impossible`.|not allowed|nothing|nothing|Items that have no effect, such as materials and debris|
___

## [_terms_](en/editor/requirement)
___

## [_properties_](en/editor/property)
___

## Trading Currency ID
The ID of the currency used to buy and sell this item
- Specify the ID of the currency (coins) used for both buy and sell values.
- If left blank, the main currency (the first one listed under "coins") will be used.