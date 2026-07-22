
# Gegenstand
Güterelemente wie Ausrüstung und Verbrauchsgüter
- Dieses Element bezieht sich auf den Besitz von Gegenständen wie Ausrüstung, Verbrauchsmaterial und Wertsachen.
- Innerhalb einer Kategorie kann nur eine Ausrüstung vorhanden sein, oder sie kann Nichts sein.
- Es gibt auch zahllose Möglichkeiten, sie zu verwenden.
___

## [_Informationen_](de/Herausgeber/Informationen)
___

## Kategorie.
ID der Kategorie, zu der der Gegenstand gehört
- Geben Sie die ID der Kategorie an, zu der dieser Gegenstand gehört.
___

## Gruppe (z.B. von Personen)
Gruppenklassifizierung von Gegenständen anzeigen
- Wenden Sie eine der in Basic konfigurierten Gruppen an.
- Es wird eine Liste der Gegenstände in der Reihenfolge der konfigurierten Gruppen angezeigt.
- Bleibt sie leer, wird keine Gruppierung vorgenommen.
- [_general_](de/Herausgeber/allgemein)
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
- [_general_](de/Herausgeber/allgemein)
___

## Maximal gezählte eigene [pcs].
Begrenzung der max. Anzahl der eigenen Gegenstände.
- Wenn 0, gibt es keine Begrenzung der Anzahl, die man besitzen kann.
- Wenn Sie mehr als 1 besitzen, können Sie nur bis zu dieser Anzahl zählen. Wenn die Höchstgrenze erreicht ist, wird die Zahl der Eigenen durch weitere Erwerbe nicht erhöht.
___

## Typ der Ausrüstung
Typ-Einstellungen für Ausrüstung, Effekte und Verbrauch von Gegenständen.
- Gegenstände, die ausgerüstet werden können, müssen zu der in der Kategorie `equipmentGroups` angegebenen Gruppe gehören.
- Innerhalb der gleichen Gruppe kann nur ein Gegenstand ausgerüstet werden.

|Wert|Ausrüstung|Effektivität.|Verbrauch|Beispiel.|
|-|-|-|-|-|
|notwendig".|Notwendig|Ausrüstung|Nichts|Schwerter, Rüstungen und andere Ausrüstung.|
|verbrauchbar".|Notwendig|Ausrüstung|Verbraucht bei der Durchführung von Aktionen|Gegenstände, die verbraucht werden, um eine Wirkung zu erzielen, z. B. Tränke.|
|Unnötig".|unnötig|Zu jeder Zeit, während sie im Besitz sind.|Nichts|Passive Gegenstände, die allein dadurch wirksam sind, dass man sie hat.|
|Unmöglich".|nicht erlaubt|Nichts|Nichts|Nicht wirksame Gegenstände wie Materialien und Schutt.|
___

## [_Bedingungen und Konditionen_](de/Herausgeber/Anforderung)
___

## [_Eigenschaften_](de/Herausgeber/Eigenschaft)
___

## Währungs-ID für den Kauf und Verkauf
ID der Währung, die für den Kauf und Verkauf dieses Gegenstands verwendet wird
- Geben Sie die ID der Währung (Coins) an, die sowohl für den Kauf- als auch für den Verkaufswert verwendet wird.
- Wenn das Feld leer ist, wird die Hauptwährung (die erste Währung in der Liste „coins“) verwendet.