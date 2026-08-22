
# Typ.
Grundlegende Minuten-Klassifizierung der Welten
- Es gibt sieben Arten von Welten.
- Alle Elemente befinden sich direkt ab der Welt.
- Aktionen und Gegenstände werden mit der ID der Kategorie, zu der sie gehören, verknüpft.

|Typ.|Beschreibung|
|-|-|
|[_category_](de/editor/category)|Allgemeiner Rahmen für die Klassifizierung von Aktionen und Gegenständen.|
|[_action_](de/editor/action)|Elemente des Handelns wie Sammeln, Herstellen und Kämpfen.|
|[_item_](de/editor/item)|Güterelemente wie Ausrüstung und Verbrauchsgüter|
|[_skill_](de/editor/skill)|Wird noch geschrieben|
|[_group_](de/editor/group)|Definieren Sie Anzeigegruppen für Kategorien, Aktionen und Gegenstände|
|[_task_](de/editor/task)|Missionen, die als abgeschlossen gelten, sobald die Bedingungen erfüllt sind|
|[_preset_](de/editor/preset)|Anpassen der Anzeige von Systemelementen|
```
world
├── category
├── action
├── item
├── skill
├── group
├── task
└── preset
```