
# general
Basic game settings such as language, level settings, etc.
___

## Language
Language at the time of creation of the world
- Configure the language to be used in this world editor.
- This is the first language displayed when the user starts the game.
___

## translation
Do you have multilingual translations available?
- If enabled, users can play in any language.
- If disabled, you can play only in the language selected in the language config.
- Necessary to prepare translation data for each language if translation is to be enabled.
- [_translation_](en/editor/translation)
___

## Max. offline time [hours]
Time limits for offline progress
- Configure the max number of hours of progress when offline.
- For example, if 6 hours is set, the process of coming back offline up to 6 hours will be processed, but if more time is allowed to come back offline, the offline time will be treated as 6 hours.
- If the time is set to 0 hours, no process processing will be done at all when returning offline.
- The max value is 24 hours.
- [_category_](en/editor/category)
___

## Maximum level of Category
Levels up in each Category
- Configure the max level for each Category.
- If experience is acquired beyond this level, the max level configured here is used in the calculation of each property.
- This value has no relationships in categories with no levels.
- [_category_](en/editor/category)
___

## locked function
Hide items until requirements are met
- If enabled, the Category, Action, or Item will be hidden while it has never been used or possessed and the REQUIREMENTS are not met.
- If disabled, all items are displayed from the beginning, but cannot be executed or equipped until requirements are met.
- [_category_](en/editor/category)
- [_action_](en/editor/action)
- [_item_](en/editor/item)
___

## currency
Configuring the In-Game Currency (Coins)
- Configure the in-game currency.
- You can define multiple currencies and configure each one with its own information (ID, name, icon, color, etc.).
- Currency is used to buy and sell items and to expand inventory capacity.
- The first currency is treated as the primary currency and is used when there is nothing specified for the currency ID (`coinId`) for an Item or capacity.
- [_information_](en/editor/information)
- [_item_](en/editor/item)
___

## capacity
Configure inventory capacity
- Controls the maximum count of the types of Items a player can have.
- The number of each Item is controlled by the count of the type of Item you own, not by the number of Items you own.
- If `initialCount` is set to 0, the capacity is unlimited.
- Use the ID configured here when referring to capacity items in conditions or rewards.
- [_item_](en/editor/item)
___

### [_information_](en/editor/information)
___

### Default value [pcs].
Initial inventory capacity (the number of different types of Items you can have)
- This is the initial capacity (the number of different types of Items you can have) at the start of the game.
- If `0` is set, the capacity is unlimited.
___

### Base price [coins].
Initial price to increase capacity by one
- The base price (in coins) to increase inventory capacity by one slot.
- The actual price is calculated as "Base Price x Percentage Increase ^ Number of Purchases Already Made".
- Example: If the base price is 100 and the rate of increase is 1.2, the first coin will be 100 coins, the second 120 coins, and the third 144 coins.
___

### Percentage increase [times].
Percentage increase in capacity expansion costs
- It is a multiplier for how much the cost of capacity expansion increases with the nth buy.
- For `1.0` the price is always the same, for `1.2` the price is 20% higher each time you buy.
- Formula: Base Price × Percentage Increase ^ Number of Purchases

|rate of increase|1st addition|Fifth increase|Tenth increase|100th increase|1000th increase|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.05|x1.00|x1.22|x1.63|x131.50|x1.7×10²⁰|
|1.10|x1.00|x1.61|x2.59|x1.4×10⁴|x2.7×10⁴¹|
|1.20|x1.00|x2.49|x6.19|x8.3×10⁷|x8.3×10⁷⁹|
|1.50|x1.00|x5.06|x57.67|x1.9×10¹⁷|x7.0×10¹⁷⁶|
___

### Currency ID
ID of the currency used for capacity expansion
- Specify the ID of the currency (coins) to be used for inventory capacity expansion.
- If left blank, the main currency (the first one listed under "coins") will be used.
___

### Purchase Limit [Times]
Maximum number of times you can buy storage
- This is the maximum number of times you can buy storage capacity using currency.
- If you set it to `0`, you can buy unlimited things.
- If you set it to `-1`, you will no longer be able to buy.
- Capacity increases resulting from rewards are not subject to this limit.
___

## Queue
Configuring the Number of Slots for Consecutive Actions (Scheduling)
- Manages the count of slots available for executing actions in sequence (scheduling).
- In addition to buying slots with currency, just like storage capacity, you can also increase the number of slots by selecting specific Items from the queue as rewards for actions and events.
- When referencing items in the queue based on conditions or rewards, use the ID configured here.
- [_item_](en/editor/item)
___

### [_information_](en/editor/information)
___

### Default value [pcs].
Number of consecutive runs at the start of the game
- This is the number of reservation slots available at the start of the game.
- The minimum value is `1` (there is no `0` = unlimited option, as with capacity).
___

### Base price [coins].
Initial price to add one slot
- This is the base price (in coins) to add one slot for consecutive runs.
- The actual price is calculated as "Base Price x Percentage Increase ^ Number of Purchases Already Made".
- Example: If the base price is 100 and the rate of increase is 1.2, the first coin will be 100 coins, the second 120 coins, and the third 144 coins.
___

### Percentage increase [times].
Rate of increase in frame expansion costs
- This is the multiplier that indicates how much the cost of expanding the slot increases with the nth buy.
- For `1.0` the price is always the same, for `1.2` the price is 20% higher each time you buy.
- Formula: Base Price × Percentage Increase ^ Number of Purchases
___

### Currency ID
Currency ID used for expanding the limit
- Specify the ID of the currency (coins) to be used for the price of extending the continuous execution window.
- If left blank, the main currency (the first one listed under "coins") will be used.
___

### Purchase Limit [Times]
Maximum number of times you can buy a slot
- This is the maximum number of times you can buy a slot for consecutive runs using currency.
- If you set it to `0`, you can buy unlimited things.
- If you set it to `-1`, you will no longer be able to buy.
- Increases in the quota resulting from compensation are not subject to this cap.
___

## Rate of increase in experience [times].
Percentage increase in level difficulty
- As the level of a Category increases, the rate of increase in the Necessary experience value to get to the next level.
- Increasing this value increases the difficulty.
- The experience necessary to reach the next level is (experience point gain rate)^(current level - 1).

|Rate of increase in experience value|Lv.1|Lv.2|Lv.10|Lv.50|Lv.99|
|-|-|-|-|-|-|
|0|x1.00|x1.00|x1.00|x1.00|x1.00|
|0.02|x1.00|x1.02|x1.22|x2.69|x5.52|
|0.05|x1.00|x1.05|x1.55|x11.47|x131.50|
|0.10|x1.00|x1.10|x2.36|x117.39|x5.7×10⁴|
|0.20|x1.00|x1.20|x6.19|x3.3 x 10³|x1.3×10¹¹¹|
- [_category_](en/editor/category)
___

## Action Level Limits
Requests the number of times the same attribute action has been executed to execute the action
- If enabled, the number of times an action with the same attribute has been executed is automatically added to the execution condition of each Action.
- The Necessary count is equal to the level value of the Action.
- If the attribute is nothing configured, the ID of the category to which it belongs is used.
___

## [_combat value_](en/editor/combat)