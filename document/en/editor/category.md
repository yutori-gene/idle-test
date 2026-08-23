
# カテゴリ
A general framework for categorizing Actions and Items
- Represents a large classification.
- For example, it can be configured in any frame of mind, such as short range, long range, magic, dungeons, blacksmiths, and manufactories.
- アクションやアイテムはワールド直下に配置され、カテゴリIDで関連付けられます。
___

## [_information_](en/editor/information)
___

## group (usu. of people)
カテゴリの表示グループ分類
- Apply one of the groups configured in Basic.
- 設定したグループ順にカテゴリ一覧が表示されます。
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
このカテゴリで装備可能なアイテムグループの指定
- このカテゴリで装備できるアイテムのグループ名のリストです。
- You can only equip items from the group that matches the group name you specify here.
- If an empty string is specified, an item with an unconfigured (empty) group will be targeted for Equipment.
- Only one Item can be equipped in the same group. When you equip a new Item, any existing Equipment in the same group will automatically be unequipped.
- If you set the list to empty (0 pieces), you cannot equip anything.
- [_general_](en/editor/general)
___

## Level Availability
カテゴリレベル機能の有無
- このカテゴリがレベルを持つかどうかのフラグです。
- If on, it has a level; if off, it does not.
- 例として、剣技や魔法といった経験に基づくカテゴリはオンにし、ダンジョンや鍛冶屋といった場所のカテゴリはオフにするなどの使い方があります。
___

## simultaneous progress
他カテゴリとの並行実行設定
- このカテゴリのアクションが、他のカテゴリのアクションと並行して進行できるかどうかのフラグです。
- オンの場合は、他のカテゴリのアクションとは独立して同時に進行できます。
- オフの場合は、同じくオフに設定された他のカテゴリのアクションと同時に実行できません。新たにこのカテゴリのアクションを開始すると、他の非スタンドアロンカテゴリで進行中のアクションは自動的に中止されます。
___

## background
カテゴリ固有の背景設定
- このカテゴリの背景を設定します。
- カテゴリを選択されたときに、連動して背景画像が変更されます。
- If nothing is configured, the world background setting is used as is.