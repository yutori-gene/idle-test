
# Type
Classification de base des mondes
- ワールドは6つのタイプで構成されます。
- Tous les éléments sont placés directement sous le monde.
- アクションとアイテムは所属するカテゴリのIDで関連付けられます。

|Type|Description|
|-|-|
|[_category_](fr/editor/category)|Cadre général pour la classification des actions et des objets.|
|[_action_](fr/editor/action)|Des éléments d'action tels que la collecte, la fabrication et le combat.|
|[_item_](fr/editor/item)|Éléments de biens tels que les équipements et les consommables|
|[_skill_](fr/editor/skill)|À rédiger|
|[_group_](fr/editor/group)|カテゴリ、アクション、アイテムの表示グループを定義|
|[_preset_](fr/editor/preset)|Personnalisation de l'affichage des éléments du système|
```
world
├── category
├── action
├── item
├── skill
├── group
└── preset
```