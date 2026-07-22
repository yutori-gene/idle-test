
# properties
Configuring the Effects of an Item
- This is an item of effects that can be configured for an Item.
- Items with an Equipment Type of `necessary` or `consumable` will only apply while equipping. For `unnecessary` items, the effect is applied only when you have the item in your possession.
- The value of any of these items is calculated as an Adjustment for the difference in level between the player's level and the Action's level.
- For example, if the attack value is 10, the attack is calculated as if the player's level is 10 higher than the Action's level. Minus values are the opposite.
- ATTACK, DEFENCE, ACCURACY, EVASION, and RESTORE are only valid for `stamina` Type Actions.

|properties|Details of Effects|
|-|-|
|speed|Reduces the time required for an Action. The time required changes inversely proportional to the difference in level.|
|chance|Changes the probability of success of an Action. The probability increases in proportion to the level difference.|
|experience|Varies the experience value acquired. It increases in proportion to the difference in levels (the calculation is reversed: the higher the level Action, the more is gained).|
|attack|Changes the stamina damage dealt to the opponent. (only for stamina actions)|
|defence|Reduces stamina damage taken from opponents. (stamina Action only)|
|accuracy|Decreases the miss rate of attacks. (stamina Action only)|
|evasion|Changes the evasion rate of an opponent's attack. (stamina Action only)|
|restore|Changes the amount of stamina restored at the end of an Action. (only for stamina actions)|
___

## Category
Specify the Category to which the property is applied
- Configure the ID of the Category to which this property applies.
- If ``*`` is configured, it will be applied to all categories.
- If left blank, it will be applied to the Category to which the Item belongs.
___

## Attack value [level difference].
Correction to Stamina damage dealt to the opponent (only valid for stamina actions)
- The attack damage is calculated as if the player's level were this value higher than the Action's level.
___

## Defence value [level difference].
Correction to Stamina damage taken from an opponent (only valid for stamina Actions).
- Damage is calculated as if the player's level were this value higher than the Action's level. The higher the value, the less the damage.
___

## Accuracy [level difference].
Correction to attack miss rate (only valid for stamina Action)
- The miss rate is calculated assuming that the player's level is this value higher than the Action's level. The higher the value, the lower the miss rate.
___

## Evasion value [level difference].
Correction to the evasion rate of the opponent's attacks (only valid for stamina Actions)
- The evasion is calculated assuming that the player's level is this value higher than the Action's level.
___

## Restoration value [level difference].
Correction to the amount of stamina restored (only valid for the stamina Action)
- The amount of stamina restored is calculated assuming that the player's level is this value higher than the Action's level.
___

## Quickness [level difference].
Correction to Action Duration
- The time required is calculated assuming that the player's level is this value higher than the Action's level. The higher the value, the shorter the time required.
___

## Probability of success [level difference].
Correction to Action Success Probability
- The action success probability is calculated assuming that the player's level is this value higher than the Action's level. The higher the value, the higher the success probability.
___

## Experience [difference in level].
Correction to acquired experience values
- The experience is calculated as if the player's level were this value lower than the Action's level (the higher the Action's level, the more experience is gained, since the calculation is inverted).