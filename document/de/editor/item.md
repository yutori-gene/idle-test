
# Gegenstand
Güterelemente wie Ausrüstung und Verbrauchsgüter
- Dieses Element bezieht sich auf den Besitz von Gegenständen wie Ausrüstung, Verbrauchsmaterial und Wertsachen.
- カテゴリ内で１つのみ装備することもできますが、装備できないようにもできます。
- Es gibt auch zahllose Möglichkeiten, sie zu verwenden.
___

## [_Informationen_](de/editor/information)
___

## カテゴリ
アイテムが所属するカテゴリのID
- このアイテムが所属するカテゴリのIDを指定します。
___

## Gruppe (z.B. von Personen)
Gruppenklassifizierung von Gegenständen anzeigen
- Wenden Sie eine der in Basic konfigurierten Gruppen an.
- Es wird eine Liste der Gegenstände in der Reihenfolge der konfigurierten Gruppen angezeigt.
- Bleibt sie leer, wird keine Gruppierung vorgenommen.
- [_general_](de/editor/general)
___

## Anfänglicher Freigabezustand
Anfänglicher Anzeige- und Freigabezustand des Elements (wechselt automatisch in den nächsthöheren Zustand, sobald die Auslösebedingungen erfüllt sind)
- secreted: Wird in der Benutzeroberfläche erst angezeigt, wenn alle Anforderungen erfüllt sind (erscheint weder in den Hinweisen noch in der Liste der Anforderungen und Belohnungen).
- hidden: Solange kein Freischaltelement darauf verweist und die Voraussetzungen nicht erfüllt sind, bleibt es vollständig verborgen (der Name ist ausgegraut und es kann nicht bearbeitet werden).
- hinted (Standard): Es wird nur der Name angezeigt, aber der Eintrag kann erst bearbeitet werden, wenn er freigegeben ist.
- freigegeben: Unabhängig von den Bedingungen von Anfang an freigegeben und bedienbar (früher „Von Anfang an anzeigen“).
___

## Wert [Münzen].
Konfiguration des Preises für das Kaufen von Gegenständen.
- Sie können einen Gegenstand nicht kaufen, wenn Sie ihn noch nie besessen haben.

|Wert|Behandlung|
|-|-|
|0|Nichts|
|Ein Wert größer als Null.|Der Wert, den Sie kaufen können.|
|Ein Wert kleiner als Null (z. B. -1)|Kann nicht gekauft werden (wird als Null behandelt).|
___

## Wert [Münzen].
Konfiguration des Verkaufspreises von Gegenständen.
- Konfiguration des Preises, zu dem die Gegenstände verkauft werden.

|Wert|Behandlung|
|-|-|
|0|Nichts|
|Ein Wert größer als Null.|Verkaufen Sie zu diesem Wert.|
|Ein Wert kleiner als Null (z. B. -1)|Allgemeine Konfiguration Rabattsatz multipliziert mit dem Wert des Gebots (wenn der Wert Null ist, kann nicht verkauft werden)|
- [_general_](de/editor/general)
___

## Maximal gezählte eigene [pcs].
Begrenzung der max. Anzahl der eigenen Gegenstände.
- Wenn 0, gibt es keine Begrenzung der Anzahl, die man besitzen kann.
- Wenn Sie mehr als 1 besitzen, können Sie nur bis zu dieser Anzahl zählen. Wenn die Höchstgrenze erreicht ist, wird die Zahl der Eigenen durch weitere Erwerbe nicht erhöht.
___

## Typ der Ausrüstung
Typ-Einstellungen für Ausrüstung, Effekte und Verbrauch von Gegenständen.
- `necessary`・`consumable`のアイテムは、そのグループが自動的にカテゴリの装備枠になります。
- 同じグループ内では1つのアイテムのみ装備できます。新しいアイテムを装備すると、同グループの既存装備は自動的に解除されます。
- 装備枠の並び順は、ワールドのグループ一覧の定義順に従います。
- `unnecessary`は装備の有無に関わらず効果が発揮され、効果量は所持数に比例します（0個で効果なし、n個でn倍）。

|Wert|Ausrüstung|Effektivität.|Verbrauch|Beispiel.|
|-|-|-|-|-|
|`necessary`|Notwendig|Nur während der Ausrüstung (1 Stück)|Nichts|Schwerter, Rüstungen und andere Ausrüstung.|
|`consumable`|Notwendig|Nur während der Ausrüstung (1 Stück)|Verbraucht bei der Durchführung von Aktionen|Gegenstände, die verbraucht werden, um eine Wirkung zu erzielen, z. B. Tränke.|
|`unnecessary`|unnötig|Solange man sie besitzt, immer (proportional zur Anzahl im Besitz)|Nichts|Passive Gegenstände, die allein dadurch wirksam sind, dass man sie hat.|
|`impossible`|nicht erlaubt|Nichts|Nichts|Nicht wirksame Gegenstände wie Materialien und Schutt.|
___

## [_Bedingungen und Konditionen_](de/editor/requirement)
___

## [_Eigenschaften_](de/editor/property)
___

## Währungs-ID für den Kauf und Verkauf
ID der Währung, die für den Kauf und Verkauf dieses Gegenstands verwendet wird
- Geben Sie die ID der Währung (Coins) an, die sowohl für den Kauf- als auch für den Verkaufswert verwendet wird.
- Wenn das Feld leer ist, wird die Hauptwährung (die erste Währung in der Liste „coins“) verwendet.
___

## [_Fähigkeit_](de/editor/skill)