
# Aufgabe
Missionen, die als abgeschlossen gelten, sobald die Bedingungen erfüllt sind
- Wenn die Konfiguration der Bedingungen erfüllt ist, gilt die Aufgabe als erledigt, und auf dem oberen Bildschirmrand wird eine Meldung angezeigt.
- Sie werden in der Liste der Spieler-Missionen und in der Liste der Aufgaben nach Kategorie angezeigt.
- Die Belohnung wird nicht automatisch ausgezahlt. Der Spieler erhält sie, wenn er die Aufgabe öffnet und auf den Button für Erwerbungen tippt.
- Bis zur Auszahlung der Vergütung wird die Liste mit einem Band gekennzeichnet, um anzuzeigen, dass sie noch nicht entgegengenommen wurde.
- Durch Erwerbungen kannst du das Level der Kategorie, die Anzahl der ausgeführten Aktionen und die Anzahl der besessenen Gegenstände verändern.
- Elemente, die zu anderen Zeitpunkten als den festgelegten Bedingungen – beispielsweise beim ersten Start oder beim Spiel vorbei – ausgelöst werden sollen, werden in der Konfiguration unter „Ereignisse“ konfiguriert.
- [_event_](de/Herausgeber/Veranstaltung)
___

## [_Informationen_](de/Herausgeber/Informationen)
___

## Kategorie.
ID der Kategorie, zu der die Aufgabe gehört
- Geben Sie die ID der Kategorie an, der diese Aufgabe zugeordnet werden soll.
- Wenn Sie diese Konfiguration vornehmen, wird auf dem Bildschirm „Kategorien der Spieler“ eine Liste der Aufgaben hinzugefügt, und auch in der Missionsliste werden diese nach Kategorien geordnet angezeigt.
- Wenn das Feld leer ist, gehört die Mission zu keiner Kategorie und wird am Anfang der Missionsliste zusammengefasst angezeigt.
___

## Zeitmessung
Zeitpunkt der Aufgabenauslösung (fest auf `matched` gesetzt)
- Die Aufgabe ist auf „`matched`“ (wenn die Konfiguration die festgelegten Bedingungen erfüllt) festgelegt und kann nicht bearbeitet werden.
- Die Belohnung kann nur einmal erhalten werden; sobald sie entgegengenommen wurde, bleibt der Status „erreicht“ unverändert.
- Alles, was zu einem anderen Zeitpunkt ausgelöst werden soll, wird in den Grundeinstellungen unter „Ereignisse“ konfiguriert.
- [_event_](de/Herausgeber/Veranstaltung)
___

## Anfangsanzeige
Anfangsstatus des Aufgaben-Symbols (ob die Aufgabe als erledigt gilt, hängt von bestimmten Bedingungen ab; bei dieser Konfiguration gilt sie als nicht erledigt)
- Die Bedingungen für die Erledigung einer Aufgabe werden unter „Anforderungen“ festgelegt; dieser Punkt wirkt sich lediglich auf das Aussehen des Listen-Symbols aus.
- secreted: Wird erst dann in der Aufgabenliste angezeigt, wenn alle Anforderungen erfüllt sind (die Erfüllung selbst erfolgt bedingt).
- hidden・hinted: Das Symbol wird mit einem Schrägstrich versehen und als „noch nicht freigeschaltet“ angezeigt.
- Freigegeben: Die Durchstreichung verschwindet und der Eintrag wird als freigegeben angezeigt.
- Einmal erledigte Aufgaben verschwinden nicht aus der Liste. Wenn eine Aufgabe zurückgesetzt wird, wird dies durch einen Strich auf dem Symbol angezeigt.
___

## Bedingungen und Konditionen
Bedingungen für den Abschluss der Aufgabe
- Dies sind die Voraussetzungen für die Erfüllung der Aufgabe.
- Wenn diese Bedingung erfüllt ist, gilt die Aufgabe als abgeschlossen, und Sie können die Belohnung erhalten.
- Wenn die Bedingungen vor Erhalt der Belohnung nicht mehr erfüllt sind, wird der Status auf „nicht erreicht“ zurückgesetzt und die Belohnung kann nicht mehr erhalten werden. Sobald die Bedingungen wieder erfüllt sind, kann die Belohnung erneut erhalten werden.
- Aufgaben, für die keine Konfiguration vorgenommen wurde, werden nicht erfüllt.
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
Konfiguration der Belohnung bei Erledigung einer Aufgabe
- Diese Belohnung erhältst du, wenn du eine abgeschlossene Aufgabe öffnest und auf den Balken für Erwerbungen tippst.
- Sie können das Level der Kategorie, die Anzahl der durchgeführten Aktionen und die Anzahl der besessenen Gegenstände ändern.
- Sie können für die Menge auch ein Minus festlegen.
- Bei Aufgaben, für die keine Belohnung konfiguriert wurde, wird kein Fortschrittsbalken angezeigt; sie gelten als abgeschlossen, sobald sie erledigt sind.
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
Anzeige, Gruppierung und Klassifizierung von Aufgaben
- Wenden Sie eine der in Basic konfigurierten Gruppen an.
- Die Aufgaben werden in der Reihenfolge der Konfigurationen angezeigt.
- Innerhalb der Kategorien werden die Einträge weiter in Gruppen unterteilt und angezeigt.
- Bleibt sie leer, wird keine Gruppierung vorgenommen.
- [_general_](de/Herausgeber/allgemein)