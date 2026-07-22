
# Übersetzung
Konfigurationen für die Übersetzung von Text im Spiel in andere Sprachen.
- Legt den zu übersetzenden Text fest.
- Mehrsprachige Konfigurationen sind verfügbar, wenn die Übersetzungseinstellungen aktiviert sind.
- Wenn die Übersetzung deaktiviert ist, werden die während der Entwicklung beschriebenen Informationen so angezeigt, wie sie sind.
- Die Konfiguration der Übersetzung und die Umschaltung der Sprache sind während der Entwicklung vor der Veröffentlichung nicht möglich.
___

## Aktivierung der Übersetzung
Aus/Einstellung der Übersetzungsfunktion.
- Mehrsprachige Konfigurationen sind verfügbar, wenn die Übersetzungseinstellungen aktiviert sind.
- Die Übersetzung wird während der Entwicklung vor der Veröffentlichung nicht aktiviert. Die Umschaltung zwischen den Sprachen wird nach der Veröffentlichung aktiviert.
- Wenn die Übersetzung aktiviert ist, werden zehn verschiedene Sprachen unterstützt und die Übersetzungsdaten müssen für alle Sprachen verfügbar sein. Es ist nicht möglich, nur einige der Sprachen zu aktivieren.
- Wenn der Benutzer das Spiel startet, wird zunächst die bei der Entwicklung verwendete Sprache angezeigt. Die Sprache kann dann in eine beliebige Sprache geändert werden.
- Der Übersetzungsprozess ist mühsam, aber er ermöglicht es vielen Menschen, damit zu spielen.
___

## Sprachdatei
JSON-Datei mit den Übersetzungsdaten.
- Wenn Spieldaten mit öffentlichen Konfigurationen ausgegeben werden, wird eine JSON-Datei für die Übersetzung in `translations/world` im Ausgabeordner erzeugt.
- Die JSON-Dateien für die Übersetzung in die einzelnen Sprachen befinden sich in diesem Ordner. Der Inhalt enthält nicht übersetzte Daten.
- Der Inhalt hat innerhalb jedes Typs eine ID. Darüber hinaus gibt es einen Namen und eine Beschreibung in ihm.
- Für alle Namen und Beschreibungen müssen Übersetzungen angefertigt und gespeichert werden.
___

## Übersetzungsaufgaben
Bearbeitung von Übersetzungsdaten
- Alle Übersetzungsdateien enthalten Daten in der Sprache zum Zeitpunkt der Entwicklung.
- Für Dateien, die nicht in der Sprache, in der sie entwickelt wurden, vorliegen, ist eine Übersetzung notwendig.
___

### AI
AI-basierte Übersetzung
- Übersetzen Sie mit KI wie ChatGPT, Copilot und Claude.
- Es ist möglich, auf einmal und in einer bestimmten Qualität zu übersetzen.
- Die Übersetzung ist möglicherweise nicht perfekt, insbesondere bei Fachbegriffen und Eigennamen.
- Je nach Umfang der Übersetzungen kann der Einsatz von KI kostspielig sein.
- Wenn der Fortschritt der Übersetzung durch die KI mitten im Prozess unterbrochen wird, kann es möglich sein, der KI mitzuteilen, dass sie "fortfahren" soll, und sie schafft es vielleicht. (In manchen Fällen hilft das aber nichts.)
___

#### Beispielhafte Aufforderungen
Beispiele für Übersetzungsanweisungen an die KI
- Beispielaufforderung: Übersetzen Sie die Werte `Name` und `Explanation` der hochgeladenen JSON-Daten vom Englischen ins Japanische. Ändern Sie die anderen Minuten der Daten nicht.
___

#### Verwendung von GPT
Übersetzung mit ChatGPTs GPT.
- Der JSON-Sprachübersetzer, der in der GPT-Bibliothek von ChatGPT enthalten ist, kann verwendet werden, um JSON mit Leichtigkeit zu übersetzen.
- Die JSON-Struktur wird bei der Übersetzung beibehalten.
- Ähnliche Funktionen können auch von anderen KI-Diensten als ChatGPT angeboten werden.
___

### Übersetzungsdienst
Nutzung von Übersetzungsdiensten
- Übersetzen Sie mit Online-Diensten wie DeepL und Google Translate.
- Es können qualitativ hochwertigere Übersetzungen erwartet werden als bei der AI-Übersetzung, aber die Kosten richten sich nach dem Umfang der Übersetzung.
- JSON-Dateien können nicht direkt von Übersetzungsdiensten übersetzt werden, so dass ein Programm erstellt und verwendet werden muss.
- Gegen eine Gebühr gibt es einige Dienste, die JSON-Daten unverändert übersetzen. (z. B. doctranslator.com)
___

### Handbuch (Bedienung)
Manuelle Übersetzung
- Öffnen Sie die Übersetzungsdatei in einem Texteditor und geben Sie den übersetzten Inhalt in jeder Sprache ein. Das ist sehr zeitaufwändig, aber es ist möglich, die Datei genau so zu übersetzen, wie Sie es wünschen.
___

## Sprachencode
Liste der unterstützten Sprachcodes

|Sprachencode|Sprache.|
|-|-|
|en|Englisch|
|zh|Chinesisch (Sprache)|
|es|Spanisch|
|ar|Arabisch (Sprache)|
|pt|Portugiesisch|
|Hallo|Hindi|
|fr|Französisch|
|ru|Russisch|
|de|Deutsch|
|DE|Japanisch|