
# タイプ
ワールドの基本的な分類
- ワールドは6つのタイプで構成されます。
- すべての要素はワールド直下に配置されます。
- アクションとアイテムは所属するカテゴリーのIDで関連付けられます。

|タイプ|説明|
|-|-|
|[_category_](ja/editor/category)|アクションやアイテムを分類する大枠|
|[_action_](ja/editor/action)|採取、制作、戦闘などの行動要素|
|[_item_](ja/editor/item)|装備品や消費物などの物品要素|
|[_group_](ja/editor/group)|カテゴリー、アクション、アイテムの表示グループを定義|
|[_event_](ja/editor/event)|条件に応じて発動するメッセージと報酬システム|
|[_preset_](ja/editor/preset)|システム要素の表示カスタマイズ|
```
world
├── category
├── action
├── item
├── group
├── event
└── preset
```