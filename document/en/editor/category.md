
# Category
A general framework for categorizing Actions and Items
- Represents a large classification.
- For example, it can be configured in any frame of mind, such as short range, long range, magic, dungeons, blacksmiths, and manufactories.
- Actions and Items are placed directly down in the world and are associated with a Category ID.
___

## [_information_](en/editor/information)
___

## group (usu. of people)
Display Group Classification of Category
- Apply one of the groups configured in Basic.
- A list of categories will be displayed in the order of the configured groups.
- [_general_](en/editor/general)
___

## Initial Unlocked State
Initial Display and Release States of Elements (Automatically advance to a higher state when activation conditions are met)
- secreted: Will not appear on the UI at all until all requirements are met (it will not appear in Hints, and will be hidden in the list of requirements and rewards).
- hidden: Remains completely hidden (with its name grayed out and unavailable for interaction) as long as it is not referenced by any unlocking elements and does not meet any requirements.
- hinted (default): Only the name is displayed as a preview, but you cannot interact with it until it is unlocked.
- released: The item is released and available for use from the start, regardless of conditions (formerly "Display from the Start").
___

## [_terms_](en/editor/requirement)
___

## Equipment Groups
Designation of Possible Item Groups for Equipment in this Category
- A list of the group names of Items that can be equipped in this Category.
- You can only equip items from the group that matches the group name you specify here.
- If an empty string is specified, an item with an unconfigured (empty) group will be targeted for Equipment.
- Only one Item can be equipped in the same group. When you equip a new Item, any existing Equipment in the same group will automatically be unequipped.
- If you set the list to empty (0 pieces), you cannot equip anything.
- [_general_](en/editor/general)
___

## Level Availability
Availability of Category level function
- This is a flag to indicate whether or not this Category has a level.
- If on, it has a level; if off, it does not.
- An example would be to turn on categories based on experience, such as swordsmanship and magic, and turn off categories based on location, such as dungeons and blacksmith shops.
___

## simultaneous progress
Configure parallel execution with other categories
- This is a flag to indicate whether an Action in this Category can progress in parallel with an Action in another Category.
- If on, it can progress simultaneously and independently of actions in other Categories.
- If it is off, it cannot be performed at the same time as an Action in another Category that is also configured to be off. When you start a new Action in this Category, any other Progressing Actions in the Non-Standalone Category will be automatically aborted.
___

## background
Category-specific background config
- Configure the background for this Category.
- When a Category is selected, the background image changes in conjunction with it.
- If nothing is configured, the world background setting is used as is.