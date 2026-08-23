
# acquisitions
アイテムやカテゴリレベルの取得設定
- Configure the acquisition.
- アイテムの他にカテゴリのレベル、アクションの実行した回数を変更できます。
- You can configure the probability of obtaining the product.

|Type|What you will acquire|
|-|-|
|カテゴリ|level|
|Action.|Number of times executed|
|Item|number possessed|
- [_type_](en/editor/type)
___

## Type
Type of element to be acquired

|Type|What is Acquisitions|
|-|-|
|カテゴリ|Level (added in terms of experience value)|
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
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

## Probability [-1 to 1]
Probability of success in acquisition (negative values are evaluated only in the event of failure)
- Configure the drop probability as a decimal value between -1 and 1. The absolute value is used to determine the probability.
- When the value is positive it is evaluated only when the action succeeds: `1` always grants it, and `0.5` grants it with a 50% probability.
- When the value is negative it is evaluated only when the action fails: `-1` always grants it, and `-0.5` grants it with a 50% probability.
- If the value is `0`, it is not obtained in either a success or a failure scenario.
- The default value is `1` (always obtained upon success).