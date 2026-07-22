
# Allgemein
Grundlegende Spieleinstellungen, einschließlich Sprache und Level-Einstellungen
___

## Sprache.
Sprache der Welt zur Zeit ihrer Entstehung.
- Konfiguriert die Sprache, die in diesem Welt-Editor verwendet wird.
- Die erste Sprache, die angezeigt wird, wenn der Benutzer das Spiel startet.
___

## Übersetzung
Vorbereiten von Übersetzungen in mehrere Sprachen oder
- Wenn diese Funktion aktiviert ist, können die Nutzer in jeder Sprache spielen.
- Wenn diese Funktion deaktiviert ist, können Sie nur in der Sprache spielen, die Sie in den Konfigurationen ausgewählt haben.
- Wenn die Übersetzung aktiviert ist, müssen die übersetzten Daten für jede Sprache angegeben werden.
- [_translation_](de/Herausgeber/Übersetzung)
___

## Maximale Zeit aus offline [Stunden].
Zeitliche Begrenzung des Fortschritts aus dem Internet.
- Konfiguration der maximalen Zeit des Fortschritts, wenn Sie aus sind.
- Wenn z. B. 6 Stunden eingestellt sind, wird der Vorgang der Rückkehr aus dem Netz bis zu 6 Stunden bearbeitet, aber wenn mehr Zeit für die Rückkehr aus dem Netz vorgesehen ist, wird die Zeit aus dem Netz als 6 Stunden behandelt.
- Wird 0 Zeit eingestellt, findet bei der Rückkehr aus dem Netz überhaupt keine Prozessverarbeitung statt.
- Der maximale Wert ist 24 Stunden.
- [_category_](de/Herausgeber/Kategorie)
___

## Maximales Level der Kategorie
Level-Grenze für jede Kategorie.
- Konfiguration des maximalen Levels für jede Kategorie.
- Werden über dieses Level hinausgehende Erfahrungen erworben, so wird bei der Berechnung der einzelnen Eigenschaften der hier eingestellte maximale Wert verwendet.
- Dieser Wert ist für Kategorien ohne Levels nicht relevant.
- [_category_](de/Herausgeber/Kategorie)
___

## Sperrfunktion
Artikel ausblenden, bis die Anforderungen erfüllt sind
- Wenn diese Option aktiviert ist, wird der Gegenstand der Kategorie Aktion ausgeblendet, solange er nicht verwendet wurde oder nicht über ihn verfügt und die Anforderungen nicht erfüllt sind.
- Wenn diese Funktion deaktiviert ist, werden alle Elemente von Anfang an angezeigt, können aber erst ausgeführt oder ausgerüstet werden, wenn die Anforderungen erfüllt sind.
- [_category_](de/Herausgeber/Kategorie)
- [_action_](de/Herausgeber/Aktion)
- [_item_](de/Herausgeber/Artikel)
___

## Währung
Konfiguration für die im Spiel verwendete Währung (Münzen)
- Hier wird die im Spiel verwendete Währung konfiguriert.
- Es können mehrere Währungen definiert werden, die jeweils mit Konfigurationen (ID, Name, Symbol, Farbe usw.) versehen werden.
- Die Währung wird für den Kauf und Verkauf von Gegenständen sowie für die Erweiterung des Inventars verwendet.
- Die erste Währung wird als Hauptwährung behandelt und kommt zum Einsatz, wenn für Gegenstände oder Kapazitäten keine Währungs-ID (`coinId`) angegeben ist.
- [_information_](de/Herausgeber/Informationen)
- [_item_](de/Herausgeber/Artikel)
___

## Kapazität
Konfiguration der Inventarkapazität.
- Steuert die maximale Anzahl an verschiedenen Arten von Gegenständen, die ein Spieler besitzen kann.
- Jeder Gegenstand wird durch die Anzahl der Arten von Gegenständen kontrolliert, die Sie haben, nicht durch die Anzahl der Gegenstände, die Sie besitzen.
- Die Einstellung von `initialCount` auf 0 bedeutet unbegrenzte Kapazität.
- Wenn Sie sich auf Kapazitätsgegenstände in Konditionen oder Belohnungen beziehen, verwenden Sie die hier eingestellte ID.
- [_item_](de/Herausgeber/Artikel)
___

### [_Informationen_](de/Herausgeber/Informationen)
___

### Standardwert [pcs].
Kapazität des Anfangsbestandes (Anzahl der verschiedenen Gegenstände, die gehalten werden können)
- Anfangskapazität (Anzahl der verschiedenen Gegenstände, die besessen werden können) zu Beginn des Spiels.
- Wenn "0" eingestellt ist, ist die Kapazität unbegrenzt.
___

### Grundpreis [Münzen].
Anfangspreis für eine zusätzliche Kapazität.
- Grundpreis (in Münzen), um die Kapazität des Inventars um einen Slot zu erhöhen.
- Der tatsächliche Preis errechnet sich aus "Grundpreis x prozentuale Erhöhung ^ Anzahl der Käufe".
- Beispiel: Grundpreis 100, Steigerungssatz 1,2, erste 100 Münzen, zweite 120 Münzen, dritte 144 Münzen.
___

### Prozentualer Anstieg [mal].
Prozentualer Anstieg der Kosten für die Kapazitätserweiterung
- Es handelt sich um einen Multiplikator, der angibt, wie stark die Kosten der Kapazitätserweiterung mit dem n-ten Kauf steigen.
- Für `1.0` ist der Preis immer gleich, für `1.2` ist er bei jedem Kauf 20% höher.
- Formel: Grundpreis x prozentuale Erhöhung ^ Anzahl der Käufe

|Steigerungsrate|1. Zusatz.|5. Erhöhung.|10. Erhöhung.|100. Erhöhung.|1000ste Steigerung.|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.05|x1.00|x1.22|x1.63|x131.50|x1.7×10²⁰|
|1.10|x1.00|x1.61|x2.59|x1,4 x 10⁴|x2.7×10⁴¹|
|1.20|x1.00|x2.49|x6.19|x8,3 x 10⁷|x8.3×10⁷⁹|
|1.50|x1.00|x5.06|x57.67|x1.9×10¹⁷|x7.0×10¹⁷⁶|
___

### Währungs-ID
ID der Währung, die für die Kapazitätserweiterung verwendet wird
- Geben Sie die ID der Währung (Coins) an, die für die Erweiterung der Kapazität des Inventars verwendet werden soll.
- Wenn das Feld leer ist, wird die Hauptwährung (die erste Währung in der Liste „coins“) verwendet.
___

### Kauflimit [Anzahl]
Maximale Anzahl der Käufe zum Kaufen von Speicherplatz
- Dies ist die maximale Anzahl an Käufen, die mit einer bestimmten Währung getätigt werden können.
- Wenn Sie den Wert auf `0` setzen, können Sie unbegrenzt kaufen.
- Wenn Sie den Wert auf `-1` setzen, können Sie den Artikel nicht mehr kaufen.
- Die durch Belohnungen erzielte Kapazitätserhöhung fällt nicht unter diese Obergrenze.
___

## Warteschlange
Konfiguration der Anzahl der Felder für die fortlaufende Ausführung (Planung) von Aktionen
- Verwaltet die Anzahl der Zeitfenster für die fortlaufende Ausführung (Planung) von Aktionen.
- Sowohl die Anzahl der Plätze als auch die Kapazität können mit Währung gekauft werden; außerdem lassen sich die Plätze in der Warteschlange durch die Auswahl bestimmter Gegenstände als Belohnung für Aktionen oder Ereignisse erhöhen.
- Wenn Sie in Bedingungen oder Vergütungen auf Gegenstände der Warteschlange verweisen möchten, verwenden Sie bitte die im Rahmen der Konfiguration festgelegte ID.
- [_item_](de/Herausgeber/Artikel)
___

### [_Informationen_](de/Herausgeber/Informationen)
___

### Standardwert [pcs].
Anzahl der Felder für die fortlaufende Ausführung beim Start des Spiels
- Die Anzahl der Reservierungsplätze zum Start des Spiels.
- Der Mindestwert ist `1` (es gibt keine Behandlung wie bei der Kapazität, bei der `0` = unbegrenzt bedeutet).
___

### Grundpreis [Münzen].
Anfangspreis für die Erweiterung um einen Platz
- Dies ist der Grundpreis (in Münzen) für die Erweiterung des Rahmens für die fortlaufende Ausführung um einen Platz.
- Der tatsächliche Preis errechnet sich aus "Grundpreis x prozentuale Erhöhung ^ Anzahl der Käufe".
- Beispiel: Grundpreis 100, Steigerungssatz 1,2, erste 100 Münzen, zweite 120 Münzen, dritte 144 Münzen.
___

### Prozentualer Anstieg [mal].
Steigerungsrate der Kosten für die Erweiterung der Kapazität
- Dies ist der Multiplikator, um den sich die Kosten für die Erweiterung des Kontingents beim n-ten Kaufen erhöhen.
- Für `1.0` ist der Preis immer gleich, für `1.2` ist er bei jedem Kauf 20% höher.
- Formel: Grundpreis x prozentuale Erhöhung ^ Anzahl der Käufe
___

### Währungs-ID
ID der Währung, die für die Rahmenerweiterung verwendet wird
- Geben Sie die ID der Währung (Coins) an, die für die Erweiterung des Rahmens für die fortlaufende Ausführung verwendet werden soll.
- Wenn das Feld leer ist, wird die Hauptwährung (die erste Währung in der Liste „coins“) verwendet.
___

### Kauflimit [Anzahl]
Maximale Anzahl an Käufen
- Dies ist die maximale Anzahl an Käufen, die mit Währung im Rahmen der Serienausführung getätigt werden können.
- Wenn Sie den Wert auf `0` setzen, können Sie unbegrenzt kaufen.
- Wenn Sie den Wert auf `-1` setzen, können Sie den Artikel nicht mehr kaufen.
- Die Erhöhung der Quote durch Vergütungen fällt nicht unter diese Obergrenze.
___

## Rate des Anstiegs der Erfahrung [Zeiten].
Prozentualer Anstieg des Schwierigkeitsgrads beim Level-up.
- Mit steigendem Level einer Kategorie steigt auch die für das Erreichen des nächsten Levels notwendige Erfahrung.
- Wenn Sie diesen Wert erhöhen, steigt der Schwierigkeitsgrad.
- Die für den Aufstieg auf das nächste Level notwendige Erfahrung entspricht (Erfahrung-Zuwachsrate)^(aktuelles Level - 1).

|Rate des Anstiegs der Erfahrung|Lv.1|Lv.2|Lv.10|Lv.50|Lv.99.|
|-|-|-|-|-|-|
|0|x1.00|x1.00|x1.00|x1.00|x1.00|
|0.02|x1.00|x1.02|x1.22|x2.69|x5.52|
|0.05|x1.00|x1.05|x1.55|x11.47|x131.50|
|0.10|x1.00|x1.10|x2.36|x117.39|x5.7×10⁴|
|0.20|x1.00|x1.20|x6.19|x3,3 x 10³|x1,3 x 10¹¹|
- [_category_](de/Herausgeber/Kategorie)
___

## Action Level Restriction
Fragt ab, wie oft das gleiche Attribut Aktion für die Ausführung einer Aktion gezählt wurde.
- Wenn diese Option aktiviert ist, wird die Anzahl der Ausführungen einer Aktion mit denselben Attributen automatisch zu den Ausführungsbedingungen jeder Aktion hinzugefügt.
- Die Anzahl der notwendigen Male entspricht dem Level-Wert der Aktion.
- Wenn kein Attribut konfiguriert ist, wird die ID der Kategorie verwendet, zu der sie gehört.
___

## [_Kampfwert_](de/Herausgeber/Kampf)