
# Bedingungen und Konditionen
Konfiguration der notwendigen Anforderungen für die Verwendung und Anzeige von Elementen.
- Dies sind die Bedingungen, die für jedes Element nach Kategorie, Aktion und Gegenstand konfiguriert werden.
- Wenn nicht alle konfigurierten Bedingungen erfüllt sind, können die in der Tabelle aufgeführten Vorgänge nicht ausgeführt werden.
- Wenn die Sperrfunktion aktiviert ist, wird das Element selbst ausgeblendet, bis die Bedingung erfüllt ist.

|Wo ist die Konfiguration vorzunehmen?|Nichts kann nur getan werden, wenn die Bedingungen erfüllt sind.|
|-|-|
|Kategorie.|Ausführung aller Aktionen und Manipulation von Gegenständen in der Kategorie|
|Aktion.|Durchführung der Aktionen|
|Gegenstand|Manipulation von Gegenständen (z. B. Ausrüstung)|
- [_type_](de/Herausgeber/Typ)
___

## Typ.
Art des Elements, auf das als Bedingung verwiesen wird.

|Typ.|Referenzierte Werte|
|-|-|
|Kategorie.|Level der Kategorie.|
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
- Verbrauch immer bei "1", 50 % Wahrscheinlichkeit des Verbrauchs bei "0,5" und kein Verbrauch bei "0".
- Der Standardwert ist "1" (immer verbraucht).
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

## Ausrüstung
Erfordert, dass sich der Gegenstand in Ausrüstung befindet (nur gültig, wenn der Typ Gegenstand ist) oder
- Wenn er aktiviert ist, muss der Gegenstand sowohl ausgerüstet als auch besessen werden.
- Ungültig, wenn der Typ nicht der Gegenstand ist.