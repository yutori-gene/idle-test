
# Bedingungen und Konditionen
Konfiguration der notwendigen Anforderungen für die Verwendung und Anzeige von Elementen.
- カテゴリ、アクション、アイテムごとの各要素に設定する条件です。
- Wenn nicht alle konfigurierten Bedingungen erfüllt sind, können die in der Tabelle aufgeführten Vorgänge nicht ausgeführt werden.
- Wenn die Sperrfunktion aktiviert ist, wird das Element selbst ausgeblendet, bis die Bedingung erfüllt ist.

|Wo ist die Konfiguration vorzunehmen?|Nichts kann nur getan werden, wenn die Bedingungen erfüllt sind.|
|-|-|
|カテゴリ|カテゴリ内の全てのアクションの実行とアイテムの操作|
|Aktion.|Durchführung der Aktionen|
|Gegenstand|Manipulation von Gegenständen (z. B. Ausrüstung)|
- [_type_](de/editor/type)
___

## Typ.
Art des Elements, auf das als Bedingung verwiesen wird.

|Typ.|Referenzierte Werte|
|-|-|
|カテゴリ|カテゴリのレベル|
|Aktion.|Zählt, wie oft die Aktion durchgeführt wurde.|
|Gegenstand|Anzahl der gehaltenen Gegenstände.|
___

## ID des Elements
ID des Elements, auf das sich die Bedingung bezieht.
___

## Wert
Notwendige numerische Werte für Anforderungen.
- Die Bedingung ist erfüllt, wenn der Wert größer als oder gleich dem angegebenen Wert ist.
___

## Verbrauchswahrscheinlichkeit [0-1].
Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird (0-1, nur gültig, wenn der Typ Gegenstand ist).
- Die Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird, wenn die Bedingung erfüllt ist und die Aktion durchgeführt wird.
- Bei `1` wird immer verbraucht, bei `0.5` mit einer Wahrscheinlichkeit von 50 % und bei `0` gar nicht.
- Der Standardwert ist `1` (wird immer verbraucht).
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

## Ausrüstung
Erfordert, dass sich der Gegenstand in Ausrüstung befindet (nur gültig, wenn der Typ Gegenstand ist) oder
- Wenn er aktiviert ist, muss der Gegenstand sowohl ausgerüstet als auch besessen werden.
- Ungültig, wenn der Typ nicht der Gegenstand ist.