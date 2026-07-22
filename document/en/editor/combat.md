
# combat value
Configure combat correction values for stamina type Actions
- Correction values valid only for `stamina` type Actions.
- Each value is calculated as an additional correction to the level difference between the player and the Action.
- For example, if the attack value is 10, the attack damage is calculated as if the player's level is 10 higher than the Action's level. If it is Minus, the correction is in the opposite direction.
- If configured to `defaultCombat` in `general`, it will be the default combat parameter for the entire world.
___

## Attack value [level difference].
Correction for level difference in stamina damage inflicted on the opponent.
- The higher the value, the more damage is done.
___

## Defence value [level difference].
Correction for level difference in stamina damage received from opponents.
- The higher the value, the less damage is taken.
___

## Accuracy [level difference].
Level difference correction to attack miss rate
- The higher the value, the lower the miss rate.
___

## Evasion value [level difference].
Level difference correction to the evasion rate of the opponent's attacks
- The higher the value, the easier it is to evade an opponent's attack.
___

## Restoration value [level difference].
Correction for level difference in stamina restoration
- The higher the value, the more stamina is restored.