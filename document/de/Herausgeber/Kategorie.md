
# Kategorie.
Allgemeiner Rahmen für die Klassifizierung von Aktionen und Gegenständen.
- Stellt eine wichtige Minute dar.
- Zum Beispiel kann es in jeder beliebigen Konfiguration eingesetzt werden, wie z.B. Nahbereich, Fernbereich, Magie, Kerker, Schmiede, Manufakturen, usw.
- Aktionen und Gegenstände werden direkt ab der Welt platziert und sind mit einer Kategorie ID verbunden.
___

## [_Informationen_](de/Herausgeber/Informationen)
___

## Gruppe (z.B. von Personen)
Gruppeneinteilung der Kategorien anzeigen
- Wenden Sie eine der in Basic konfigurierten Gruppen an.
- Es wird eine Liste der Kategorien in der Reihenfolge der Konfiguration der Gruppen angezeigt.
- [_general_](de/Herausgeber/allgemein)
___

## Anfänglicher Freigabezustand
Anfänglicher Anzeige- und Freigabezustand des Elements (wechselt automatisch in den nächsthöheren Zustand, sobald die Auslösebedingungen erfüllt sind)
- secreted: Wird in der Benutzeroberfläche erst angezeigt, wenn alle Anforderungen erfüllt sind (erscheint weder in den Hinweisen noch in der Liste der Anforderungen und Belohnungen).
- hidden: Solange kein Freischaltelement darauf verweist und die Voraussetzungen nicht erfüllt sind, bleibt es vollständig verborgen (der Name ist ausgegraut und es kann nicht bearbeitet werden).
- hinted (Standard): Es wird nur der Name angezeigt, aber der Eintrag kann erst bearbeitet werden, wenn er freigegeben ist.
- freigegeben: Unabhängig von den Bedingungen von Anfang an freigegeben und bedienbar (früher „Von Anfang an anzeigen“).
___

## [_Bedingungen und Konditionen_](de/Herausgeber/Anforderung)
___

## Ausrüstungsgruppe
Bezeichnung der Gegenstandsgruppen, die in dieser Kategorie ausgerüstet werden können.
- Liste der Gruppennamen von Gegenständen, die in dieser Kategorie ausgerüstet werden können.
- Es können nur Gegenstände aus der Gruppe ausgerüstet werden, die dem hier angegebenen Gruppennamen entspricht.
- Wird eine leere Zeichenfolge angegeben, kommen Gegenstände mit einer nicht eingestellten Gruppe (leer) für die Ausrüstung in Frage.
- In der gleichen Gruppe kann nur ein Gegenstand ausgerüstet werden. Wenn Sie einen neuen Gegenstand ausrüsten, wird ein bereits vorhandener Gegenstand in derselben Gruppe automatisch abgelegt.
- Wenn die Liste leer ist (0 Stück), kann nichts ausgerüstet werden.
- [_general_](de/Herausgeber/allgemein)
___

## Verfügbarkeit der Levels
Verfügbarkeit von Funktionen auf Kategorie Level
- Dieses Kennzeichen gibt an, ob diese Kategorie ein Level hat oder nicht.
- Ist er an, hat er ein Level, ist er aus, hat er keins.
- Ein Beispiel ist das Einschalten von Kategorien, die auf Erfahrung basieren, wie Schwertkampf und Magie, und das Ausschalten von Kategorien, die auf dem Ort basieren, wie Verliese und Schmiede.
___

## gleichzeitiger Fortschritt
Konfiguration der parallelen Ausführung mit anderen Kategorien
- Dieses Kennzeichen gibt an, ob Aktionen in dieser Kategorie parallel zu Aktionen in anderen Kategorien fortschreiten können.
- Wenn sie an sind, können sie gleichzeitig und unabhängig von anderen Kategorien von Aktionen Fortschritte machen.
- Ist sie ausgeschaltet, kann sie nicht gleichzeitig mit Aktionen in anderen Kategorien durchgeführt werden, die ebenfalls auf "Aus" gesetzt sind. Wenn Sie eine neue Aktion in dieser Kategorie starten, werden laufende Aktionen in anderen, nicht eigenständigen Kategorien automatisch abgebrochen.
___

## Hintergrund
Kategorie-spezifische Hintergrund-Einstellungen
- Konfiguration des Hintergrunds für diese Kategorie.
- Wenn eine Kategorie ausgewählt wird, ändert sich das Hintergrundbild in Verbindung mit dieser Kategorie.
- Wenn nichts konfiguriert ist, wird die Welt-Hintergrundeinstellung so verwendet, wie sie ist.