
# Erwerbungen
Konfiguration der Erfassung auf Item- und Kategorie Level.
- Konfigurieren Sie die Erwerbe.
- Sie können sowohl das Level der Kategorie als auch den Gegenstand und die Anzahl der durchgeführten Aktionen ändern.
- Die Wahrscheinlichkeit, das Produkt zu erhalten, kann konfiguriert werden.

|Typ.|Was Sie erwerben.|
|-|-|
|Kategorie.|Level|
|Aktion.|Anzahl der Ausführungsvorgänge.|
|Gegenstand|Anzahl der Besitztümer|
- [_type_](de/Herausgeber/Typ)
___

## Typ.
Art des zu erwerbenden Elements.

|Typ.|Was wird erworben.|
|-|-|
|Kategorie.|Level (Erfahrungsumrechnung hinzugefügt)|
|Aktion.|Anzahl der Ausführungsvorgänge.|
|Gegenstand|Anzahl der Besitztümer|
___

## ID des Elements
ID, die das zu erwerbende Element identifiziert.
___

## Wert
Zu ermittelnde numerische Werte
- Minus-Werte verringern die Anzahl der Besitztümer, die Anzahl der Durchführungen und ihr Level. Er kann jedoch nicht kleiner als 0 sein.
- Wenn ein Gegenstand eine maximale Anzahl von Besitztümern hat (Maximum), wird die Anzahl der Besitztümer nicht über diesen Wert hinaus erhöht.
- Ist der Typ eine Kategorie, wird der eingestellte Wert direkt zum Level addiert (1 für 1 Level, 0,5 für 0,5 Level). Der übliche Weg, dies anzupassen, ist die Konfiguration des Erfahrungs-Wertes der Aktion. Diese Konfiguration ist nicht notwendig, es sei denn, es gibt einen besonderen Zweck.
___

## Wahrscheinlichkeit [-1 bis 1]
Wahrscheinlichkeit eines Erfolgs beim Abruf (negative Werte werden nur bei einem Fehler ausgewertet)
- Die Wahrscheinlichkeit, dass etwas erhalten wird, wird als Dezimalzahl zwischen -1 und 1 konfiguriert. Zur Bestimmung der Wahrscheinlichkeit wird der Wert herangezogen.
- Ist der Wert positiv, wird er nur bei Erfolg der Aktion ausgewertet: Bei `1` wird der Gegenstand garantiert erhalten, bei `0,5` mit einer Wahrscheinlichkeit von 50 %.
- Bei negativen Werten wird die Bewertung nur bei Fehlern der Aktion vorgenommen: Bei `-1` wird der Gegenstand garantiert erhalten, bei `-0,5` mit einer Wahrscheinlichkeit von 50 %.
- Bei `0` wird der Wert weder bei Erfolg noch bei Fehler zurückgegeben.
- Der Standardwert ist `1` (wird bei Erfolg immer abgerufen).