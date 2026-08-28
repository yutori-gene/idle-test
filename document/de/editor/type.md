
# Typ.
Grundlegende Minuten-Klassifizierung der Welten
- ワールドは6つのタイプで構成されます。
- Alle Elemente befinden sich direkt ab der Welt.
- アクションとアイテムは所属するカテゴリのIDで関連付けられます。

|Typ.|Beschreibung|
|-|-|
|[_category_](de/editor/category)|Allgemeiner Rahmen für die Klassifizierung von Aktionen und Gegenständen.|
|[_action_](de/editor/action)|Elemente des Handelns wie Sammeln, Herstellen und Kämpfen.|
|[_item_](de/editor/item)|Güterelemente wie Ausrüstung und Verbrauchsgüter|
|[_skill_](de/editor/skill)|Wird noch geschrieben|
|[_group_](de/editor/group)|カテゴリ、アクション、アイテムの表示グループを定義|
|[_preset_](de/editor/preset)|Anpassen der Anzeige von Systemelementen|
```
world
├── category
├── action
├── item
├── skill
├── group
└── preset
```