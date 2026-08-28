
# Erwerbungen
アイテムやカテゴリレベルの取得設定
- Konfigurieren Sie die Erwerbe.
- アイテムの他にカテゴリのレベル、アクションの実行した回数を変更できます。
- Die Wahrscheinlichkeit, das Produkt zu erhalten, kann konfiguriert werden.

|Typ.|Was Sie erwerben.|
|-|-|
|カテゴリ|Level|
|Aktion.|Anzahl der Ausführungsvorgänge.|
|Gegenstand|Anzahl der Besitztümer|
- [_type_](de/editor/type)
___

## Typ.
Art des zu erwerbenden Elements.

|Typ.|Was wird erworben.|
|-|-|
|カテゴリ|Level (Erfahrungsumrechnung hinzugefügt)|
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
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

## Wahrscheinlichkeit [-1 bis 1]
Wahrscheinlichkeit eines Erfolgs beim Abruf (negative Werte werden nur bei einem Fehler ausgewertet)
- Die Wahrscheinlichkeit, dass etwas erhalten wird, wird als Dezimalzahl zwischen -1 und 1 konfiguriert. Zur Bestimmung der Wahrscheinlichkeit wird der Wert herangezogen.
- Bei positivem Wert wird nur bei Erfolg der Aktion geprüft: mit `1` erhält man es immer, mit `0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei negativem Wert wird nur bei Misserfolg der Aktion geprüft: mit `-1` erhält man es immer, mit `-0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei `0` wird der Wert weder bei Erfolg noch bei Fehler zurückgegeben.
- Der Standardwert ist `1` (wird bei Erfolg immer abgerufen).