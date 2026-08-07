
# Aufgabe
Missionen, die als abgeschlossen gelten, sobald die Bedingungen erfüllt sind
- Wenn die Konfiguration der Bedingungen erfüllt ist, gilt die Aufgabe als erledigt, und auf dem oberen Bildschirmrand wird eine Meldung angezeigt.
- Sie werden in der Liste der Spieler-Missionen und in der Liste der Aufgaben nach Kategorie angezeigt.
- Die Belohnung wird nicht automatisch ausgezahlt. Der Spieler erhält sie, wenn er die Aufgabe öffnet und auf den Button für Erwerbungen tippt.
- Bis zur Auszahlung der Vergütung wird die Liste mit einem Band gekennzeichnet, um anzuzeigen, dass sie noch nicht entgegengenommen wurde.
- Durch Erwerbungen kannst du das Level der Kategorie, die Anzahl der ausgeführten Aktionen und die Anzahl der besessenen Gegenstände verändern.
- Elemente, die zu anderen Zeitpunkten als den festgelegten Bedingungen – beispielsweise beim ersten Start oder beim Spiel vorbei – ausgelöst werden sollen, werden in der Konfiguration unter „Ereignisse“ konfiguriert.
- [_event_](de/editor/event)
___

## [_Informationen_](de/editor/information)
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
- [_event_](de/editor/event)
___

## Anfangsanzeige
Anfangsstatus des Aufgaben-Symbols (ob die Aufgabe als erledigt gilt, hängt von bestimmten Bedingungen ab; bei dieser Konfiguration gilt sie als nicht erledigt)
- タスクの達成条件はrequirementsで決まり、この項目は一覧アイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでタスクの一覧に一切表示されません（達成自体は条件で起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
- 一度達成したタスクは一覧から消えず、その後に条件を満たさなくなっても達成のまま表示されます。
___

## Bedingungen und Konditionen
Bedingungen für den Abschluss der Aufgabe
- タスクを達成させる条件です。
- この条件を満たすと達成になり、報酬を受け取れるようになります。
- 一度達成すると、その後に条件を満たさなくなっても達成のままで、報酬もいつでも受け取れます。
- 条件を設定していないタスクは達成しません。
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
- Bei `1` wird immer verbraucht, bei `0.5` mit einer Wahrscheinlichkeit von 50 % und bei `0` gar nicht.
- Der Standardwert ist `1` (wird immer verbraucht).
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

### Ausrüstung
Erfordert, dass sich der Gegenstand in Ausrüstung befindet (nur gültig, wenn der Typ Gegenstand ist) oder
- Wenn er aktiviert ist, muss der Gegenstand sowohl ausgerüstet als auch besessen werden.
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

## Belohnung
Konfiguration der Belohnung bei Erledigung einer Aufgabe
- 達成したタスクを開き、獲得のバーを押した時に受け取れる報酬です。
- カテゴリーのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- 数量にマイナスを設定することもできます。
- 報酬を設定していないタスクは獲得のバーが出ず、達成した時点で完了になります。
- 持てるアイテムの種類が上限に達している時は受け取れません。整理してから受け取り直します。
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
- Bei positivem Wert wird nur bei Erfolg der Aktion geprüft: mit `1` erhält man es immer, mit `0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei negativem Wert wird nur bei Misserfolg der Aktion geprüft: mit `-1` erhält man es immer, mit `-0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei `0` wird der Wert weder bei Erfolg noch bei Fehler zurückgegeben.
- Der Standardwert ist `1` (wird bei Erfolg immer abgerufen).
___

## Arbeitsgruppe
Anzeige, Gruppierung und Klassifizierung von Aufgaben
- Wenden Sie eine der in Basic konfigurierten Gruppen an.
- Die Aufgaben werden in der Reihenfolge der Konfigurationen angezeigt.
- Innerhalb der Kategorien werden die Einträge weiter in Gruppen unterteilt und angezeigt.
- Bleibt sie leer, wird keine Gruppierung vorgenommen.
- [_general_](de/editor/general)