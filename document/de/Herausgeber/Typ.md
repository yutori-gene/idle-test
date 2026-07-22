
# Typ.
Grundlegende Minuten-Klassifizierung der Welten
- Es gibt sechs Arten von Welten.
- Alle Elemente befinden sich direkt ab der Welt.
- Aktionen und Gegenstände werden mit der ID der Kategorie, zu der sie gehören, verknüpft.

|Typ.|説明|
|-|-|
|[_Kategorie_](de/Herausgeber/Kategorie)|Allgemeiner Rahmen für die Klassifizierung von Aktionen und Gegenständen.|
|[_Aktion_](de/Herausgeber/Aktion)|Elemente des Handelns wie Sammeln, Herstellen und Kämpfen.|
|[_Artikel_](de/Herausgeber/Artikel)|Güterelemente wie Ausrüstung und Verbrauchsgüter|
|[_Gruppe_](de/Herausgeber/Gruppe)|Definieren Sie Anzeigegruppen für Kategorien, Aktionen und Gegenstände|
|[_Veranstaltung_](de/Herausgeber/Veranstaltung)|Nachrichten- und Belohnungssystem, das durch Bedingungen ausgelöst wird.|
|[_Voreinstellung_](de/Herausgeber/Voreinstellung)|Anpassen der Anzeige von Systemelementen|
```
world
├── category
├── action
├── item
├── group
├── event
└── preset
```