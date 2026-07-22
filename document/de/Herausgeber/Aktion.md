
# Aktion.
Elemente des Handelns wie Sammeln, Herstellen und Kämpfen.
- Dies sind Elemente, die Handlungen wie Sammeln, Herstellen, Kaufen und Verkaufen sowie Kämpfen darstellen.
- Mit jeder Handlung, die du ausführst, gewinnst du Erfahrung und dein Level steigt.
- Sie können für jede Handlung Gegenstände einrichten, die verbraucht oder beschafft werden sollen.
- Es gibt ja verschiedene Arten von Handlungen.
___

## [_Informationen_](de/Herausgeber/Informationen)
___

## Kategorie.
ID der Kategorie, zu der die Aktion gehört
- Geben Sie die ID der Kategorie an, zu der diese Aktion gehört.
___

## Attribut
Aktionsspezifische Kategorien von Attributen
- Es können einzelne Attribute (Kategorien) konfiguriert werden.
- Bleibt sie leer, wird die Kategorie, zu der sie gehört, übernommen
- Wenn Sie zum Beispiel das Attribut Magie für eine Aktion der Kategorie Dämonenschloss individuell konfigurieren, werden das Level und die Eigenschaften der Kategorie Magie berechnet und auf die Zeit und den Schaden der Aktion angewendet.
- [_category_](de/Herausgeber/Kategorie)
___

## Gruppe (z.B. von Personen)
Anzeige der Gruppeneinteilung der Aktionen
- Wenden Sie eine der in Basic konfigurierten Gruppen an.
- Es wird eine Liste der Aktionen in der Reihenfolge der Konfiguration der Gruppen angezeigt.
- [_general_](de/Herausgeber/allgemein)
___

## Anfänglicher Freigabezustand
Anfänglicher Anzeige- und Freigabezustand des Elements (wechselt automatisch in den nächsthöheren Zustand, sobald die Auslösebedingungen erfüllt sind)
- secreted: Wird in der Benutzeroberfläche erst angezeigt, wenn alle Anforderungen erfüllt sind (erscheint weder in den Hinweisen noch in der Liste der Anforderungen und Belohnungen).
- hidden: Solange kein Freischaltelement darauf verweist und die Voraussetzungen nicht erfüllt sind, bleibt es vollständig verborgen (der Name ist ausgegraut und es kann nicht bearbeitet werden).
- hinted (Standard): Es wird nur der Name angezeigt, aber der Eintrag kann erst bearbeitet werden, wenn er freigegeben ist.
- freigegeben: Unabhängig von den Bedingungen von Anfang an freigegeben und bedienbar (früher „Von Anfang an anzeigen“).
___

## Level
Schwierigkeitsgrad der Aktion.
- Der Schwierigkeitsgrad der Aktion wird durch das Level angegeben.
- Berechnen Sie jede Eigenschaft zur Laufzeit im Vergleich zum Level des Spielers.
- Wenn du zum Beispiel eine Aktion ausführst, die über deinem Level liegt, ist die Erfolgsrate geringer.
- Wenn die Bedingungen erfüllt sind, kann die Ausführung auch dann erfolgen, wenn das Level des Spielers unter diesem Wert liegt.
- [_property_](de/Herausgeber/Eigenschaft)
___

## [_Bedingungen und Konditionen_](de/Herausgeber/Anforderung)
___

## Zeit [s].
Typische Zeit für die Durchführung der Aktion
- Die für die einmalige Durchführung einer Aktion notwendige Standardzeit (in Sekunden).
- Bei Typen mit "Ausdauer" ist dies die Zeitspanne für eine Runde (eine Verringerung der Ausdauer des jeweils anderen).
- Die tatsächliche Ausführung kann aufgrund der Berechnung der Eigenschaften variieren.
- [_property_](de/Herausgeber/Eigenschaft)
___

## Erfahrung [nächstes Level bei 100].
Erfahrungen aus erfolgreichen Aktionen
- Die Standard-Erfahrung, die durch die einmalige und erfolgreiche Durchführung einer Aktion erworben wird; 100 Minuten entsprechen einem Level an Erfahrung.
- Im Falle eines Kampfes ist es ratsam, mehr zu konfigurieren, da es bei einem Sieg des Gegners zu Erwerbungen kommt.
- Die tatsächliche Ausführung kann aufgrund der Berechnung der Eigenschaften variieren.
- [_property_](de/Herausgeber/Eigenschaft)
___

## Wahrscheinlichkeit des Erfolgs [0-1].
Wahrscheinlichkeit des Erfolgs bei Abschluss der Aktion
- Die Wahrscheinlichkeit des Erfolgs bei Abschluss der Aktion.
- Bei `1` immer erfolgreich, bei `0` immer fehlerhaft.
- Im Falle eines Fehlers werden verbrauchbare Gegenstände verbraucht, aber keine Belohnung oder Erfahrung gewonnen.
- Die tatsächliche Ausführung kann aufgrund der Berechnung der Eigenschaften variieren.
___

## Maximale Anzahl von Durchläufen [mal].
Maximale Anzahl von Malen, die eine Aktion durchgeführt werden kann.
- Die maximale Anzahl von Malen, die eine Aktion erfolgreich abgeschlossen werden kann.
- Unbegrenzt für "0".
- Wenn die Obergrenze erreicht ist, ist die Aktion nicht mehr ausführbar.
___

## [_Erwerbungen_](de/Herausgeber/Erwerb)
___

## Fortschritt Typ
Typ der Ausführung der Aktion
- Es gibt vier Arten.

|Typ.|Vorgangsdetails|Ausdauer|Beispiel.|
|-|-|-|-|
|beständig".|Es handelt sich dabei um eine Aktion, die ständig wiederholt wird; für jeden Abschluss erhalten Sie Erfahrung und Belohnungen.|Keine Beziehung|Holzeinschlag, Bergbau, Fischerei|
|Single".|Führen Sie eine Aktion nach der anderen durch. Bei einer Unterbrechung wird der Fortschritt gespeichert und kann beim nächsten Mal fortgesetzt werden. Nach Abschluss drückt der Benutzer die Aktion Bestätigen, um das Ergebnis zu erhalten.|Keine Beziehung|Schatztruhen öffnen, Fähigkeiten durch Lesen lernen|
|Schnapp".|Dieser Typ von Aktion wird sofort ausgeführt. Wird sofort und ohne Zeitverzögerung abgeschlossen.|Keine Beziehung|Handeln, Verwendung von Gegenständen.|
|Ausdauer".|Mit jeder benötigten Zeit sinkt die Ausdauer des Spielers und des Gegners. Wenn die Ausdauer des Gegners erschöpft ist, erhält man Erfahrung und Belohnungen. Wenn die Ausdauer des Spielers zu Ende geht, ist das Spiel vorbei und alle laufenden Aktionen werden abgebrochen.|Einschlägig.|Kampfhandlungen, gefährliche Einsätze.|
___

## [_Kampfwert_](de/Herausgeber/Kampf)