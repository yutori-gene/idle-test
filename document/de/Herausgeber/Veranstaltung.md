
# Ereignis
Nachrichten- und Belohnungssystem, das durch Bedingungen ausgelöst wird.
- Sie wird ausgelöst, wenn die eingestellten Zeitpunkte/Bedingungen erfüllt sind, und es wird eine Meldung angezeigt.
- Sie kann beim ersten Start, nach dem Spiel vorbei, bei der Rückkehr aus dem Aus ausgelöst werden, oder wenn bestimmte Bedingungen erfüllt sind.
- Er kann das Level der Kategorie, die Anzahl der durchgeführten Aktionen und die Anzahl der Gegenstände, die er bei der Aktivierung besitzt, verändern.
___

## [_Informationen_](de/Herausgeber/Informationen)
___

## Zeitmessung
Konfiguration des Zeitpunkts der Auslösung von Ereignissen.

|Zeitmessung|Aktivierungsbedingung|wiederholen|
|-|-|-|
|übereinstimmen".|Wenn die in CONDITIONS festgelegten Bedingungen zum ersten Mal erfüllt sind.|nur einmal|
|zurückgekommen".|Wenn eine Person für mehr als eine Sekunde aus dem Internet zurückkehrt und eine Aktion im Läuft ist.|oft|
|`Gameovered`.|Wenn die Ausdauer des Spielers im Kampf zu Ende geht.|oft|
|abgeschlossen".|Wenn der max. Level aller Kategorien (maxCategoryLevels) erreicht ist.|nur einmal|
|willkommen".|Als ich mit dieser Welt anfing.|nur einmal|
|`obtained`|Wenn eine Aktion einer bestimmten Art (z. B. Schatztruhe) abgeschlossen oder bestätigt wurde. Sofern die Voraussetzungen erfüllt sind, werden auch die Belohnungen des Ereignisses gutgeschrieben.|oft|
___

## Anfangsanzeige
Standardanzeige des Ereignis-Symbols (die Auslösung hängt vom Zeitpunkt ab; bei dieser Konfiguration wird das Ereignis nicht ausgelöst)
- Die Auslösebedingungen für das Ereignis werden durch den Zeitpunkt bestimmt; dieser Eintrag wirkt sich lediglich auf das Aussehen des Listen-Symbols aus.
- secreted: Wird erst dann in der Liste der Ereignisse angezeigt, wenn alle Anforderungen erfüllt sind (die Auslösung selbst erfolgt jedoch zum vorgesehenen Zeitpunkt).
- hidden・hinted: Das Symbol wird mit einem Schrägstrich versehen und als „noch nicht freigeschaltet“ angezeigt.
- Freigegeben: Die Durchstreichung verschwindet und der Eintrag wird als freigegeben angezeigt.
___

## Bedingungen und Konditionen
Bedingungen für die Auslösung von Ereignissen und die Gewährung von Belohnungen.
- Bedingungen für die Auslösung von Ereignissen oder die Gewährung von Belohnungen.
- Bei „matched“ werden die Erwerbungen nur dann ausgezahlt, wenn diese Bedingung erfüllt ist.
- Außer bei „matched“ wird die Aktion ausgelöst, sobald die zeitlichen Bedingungen erfüllt sind. Anschließend erfolgt der Erwerb der Belohnung nur dann, wenn die Konfiguration der Bedingungen erfüllt ist.
___

### Typ.
Art des Elements, auf das als Bedingung verwiesen wird.

|Typ.|Referenzierte Werte|
|-|-|
|Kategorie.|Level der Kategorie.|
|Aktion.|Zählt, wie oft die Aktion durchgeführt wurde.|
|Gegenstand|Anzahl der gehaltenen Gegenstände.|
___

### ID des Elements
ID des Elements, auf das sich die Bedingung bezieht.
___

### Wert
Notwendige numerische Werte für Anforderungen.
- Die Bedingung ist erfüllt, wenn der Wert größer als oder gleich dem angegebenen Wert ist.
___

### Verbrauchswahrscheinlichkeit [0-1].
Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird (0-1, nur gültig, wenn der Typ Gegenstand ist).
- Die Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird, wenn die Bedingung erfüllt ist und die Aktion durchgeführt wird.
- Verbrauch immer bei "1", 50 % Wahrscheinlichkeit des Verbrauchs bei "0,5" und kein Verbrauch bei "0".
- Der Standardwert ist "1" (immer verbraucht).
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

### Ausrüstung
Erfordert, dass sich der Gegenstand in Ausrüstung befindet (nur gültig, wenn der Typ Gegenstand ist) oder
- Wenn er aktiviert ist, muss der Gegenstand sowohl ausgerüstet als auch besessen werden.
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

## Belohnung
Konfiguration der Belohnung, wenn das Ereignis ausgelöst wird.
- Dies ist die Belohnung, wenn das Ereignis ausgelöst wird.
- Bei „matched“ erhalten Sie eine Belohnung nur dann, wenn die Bedingungen erfüllt sind und die Aktion ausgelöst wird.
- Außer bei `matched` erfolgt der Erwerb nur dann, wenn die zeitlichen Bedingungen erfüllt sind und zudem die Bedingungen unter „conditions“ erfüllt sind.
- Sie können die Anzahl auf einen negativen Wert zählen. Wenn Sie z. B. die Anzahl der Gegenstände auf einen negativen Wert zählen, wenn Sie `gameovered` sind, verlieren Sie sie, wenn das Spiel vorbei ist.
___

### Typ.
Art des zu erwerbenden Elements.

|Typ.|Was wird erworben.|
|-|-|
|Kategorie.|Level (Erfahrungsumrechnung hinzugefügt)|
|Aktion.|Anzahl der Ausführungsvorgänge.|
|Gegenstand|Anzahl der Besitztümer|
___

### ID des Elements
ID, die das zu erwerbende Element identifiziert.
___

### Wert
Zu ermittelnde numerische Werte
- Minus-Werte verringern die Anzahl der Besitztümer, die Anzahl der Durchführungen und ihr Level. Er kann jedoch nicht kleiner als 0 sein.
- Wenn ein Gegenstand eine maximale Anzahl von Besitztümern hat (Maximum), wird die Anzahl der Besitztümer nicht über diesen Wert hinaus erhöht.
- Ist der Typ eine Kategorie, wird der eingestellte Wert direkt zum Level addiert (1 für 1 Level, 0,5 für 0,5 Level). Der übliche Weg, dies anzupassen, ist die Konfiguration des Erfahrungs-Wertes der Aktion. Diese Konfiguration ist nicht notwendig, es sei denn, es gibt einen besonderen Zweck.
___

### Wahrscheinlichkeit [-1 bis 1]
Wahrscheinlichkeit eines Erfolgs beim Abruf (negative Werte werden nur bei einem Fehler ausgewertet)
- Die Wahrscheinlichkeit, dass etwas erhalten wird, wird als Dezimalzahl zwischen -1 und 1 konfiguriert. Zur Bestimmung der Wahrscheinlichkeit wird der Wert herangezogen.
- Ist der Wert positiv, wird er nur bei Erfolg der Aktion ausgewertet: Bei `1` wird der Gegenstand garantiert erhalten, bei `0,5` mit einer Wahrscheinlichkeit von 50 %.
- Bei negativen Werten wird die Bewertung nur bei Fehlern der Aktion vorgenommen: Bei `-1` wird der Gegenstand garantiert erhalten, bei `-0,5` mit einer Wahrscheinlichkeit von 50 %.
- Bei `0` wird der Wert weder bei Erfolg noch bei Fehler zurückgegeben.
- Der Standardwert ist `1` (wird bei Erfolg immer abgerufen).
___

## Arbeitsgruppe
Gruppenkennung der Aufgabe (derzeit unbenutzt)
- Dieses Element wird derzeit nicht verwendet. Er ist für zukünftige Erweiterungen reserviert.