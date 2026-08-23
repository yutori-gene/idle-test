
# Action.
Acting elements such as collecting, creating, and fighting
- These elements represent actions such as collecting, creating, buying and selling, and fighting.
- With each act, you gain experience value and your level goes up.
- You can configure each act to consume or obtain an Item.
- There are several types of patterns of behavior.
___

## [_information_](en/editor/information)
___

## カテゴリ
アクションが所属するカテゴリのID
- このアクションが所属するカテゴリのIDを指定します。
___

## attribute
アクション固有の属性カテゴリ
- 個別の属性(カテゴリ)を設定できます。
- 空欄の場合は属するカテゴリを引き継ぎます
- 例えば、魔王城というカテゴリに属するアクションに個別に魔法という属性を設定した場合、アクション完了時間やダメージには魔法のカテゴリのレベルやプロパティが計算され適応されます。
- [_category_](en/editor/category)
___

## group (usu. of people)
Display Group Classification of Actions
- Apply one of the groups configured in Basic.
- A list of Actions will be displayed in the order of the configured groups.
- [_general_](en/editor/general)
___

## Initial Unlocked State
Initial Display and Release States of Elements (Automatically advance to a higher state when activation conditions are met)
- secreted: Will not appear on the UI at all until all requirements are met (it will not appear in Hints, and will be hidden in the list of requirements and rewards).
- hidden: Remains completely hidden (with its name grayed out and unavailable for interaction) as long as it is not referenced by any unlocking elements and does not meet any requirements.
- hinted (default): Only the name is displayed as a preview, but you cannot interact with it until it is unlocked.
- released: The item is released and available for use from the start, regardless of conditions (formerly "Display from the Start").
___

## level
Difficulty level of Action
- The level of difficulty of the Action is indicated by the level.
- Calculate each property at run time compared to the player's level.
- For example, performing an Action that is higher than your level will have a downside effect on your success rate.
- If the conditions are met, the player's level can be less than this value.
- [_property_](en/editor/property)
___

## [_terms_](en/editor/requirement)
___

## Time required [seconds]
Typical time it takes to execute an Action
- Necessary standard time (in seconds) to perform an Action once.
- For the `stamina` type this is the time interval of one turn (each side's stamina is reduced once).
- Actual execution will vary due to property calculations.
- [_property_](en/editor/property)
___

## Experience [next level at 100].
Experience value acquired when an Action is successful
- This is the standard experience value you acquire when you perform an Action once and succeed. 100 is equivalent to one level of experience.
- In the case of combat, it is advisable to configure a larger number, since they are acquired when the opponent is victorious.
- Actual execution will vary due to property calculations.
- [_property_](en/editor/property)
___

## Probability of success [0-1].
Probability of Success on Action Completion
- The probability of success upon completion of the Action.
- With `1` it always succeeds, and with `0` it always fails.
- In the event of failure, consumable items are consumed, but no reward or experience value is gained.
- Actual execution will vary due to property calculations.
___

## Max. number of executions [times].
The maximum number of times an Action can be completed
- The maximum number of times an Action can be completed successfully.
- `0` means unlimited.
- When the limit is reached, the Action becomes unexecutable.
___

## [_acquisitions_](en/editor/acquisition)
___

## Progression Type
Action Execution Type
- There are four types.

|Type|What it does|stamina|Example|
|-|-|-|-|
|`persistent`|Type in which the Action is repeated continuously, earning experience and rewards for each completion.|Nothing.|Logging, mining, fishing|
|`single`|Perform one Action. If interrupted, the progress is saved and the user can resume the next time. When completed, the user presses the Confirm Action to receive the results.|Nothing.|Opening treasure chests, learning skills through reading|
|`snap`|Type in which the Action is performed instantly. It is completed immediately without any time lapse.|Nothing.|Bartering, Use of Items|
|`stamina`|Each required time decreases the respective stamina of the player and the opponent. When the opponent's stamina is depleted, the player gains experience and rewards. When the player's stamina is depleted, the game is gameovered and all ongoing actions are canceled.|Relevant.|Combat, hazardous operations|
___

## [_combat value_](en/editor/combat)
___

## [_Skill_](en/editor/skill)