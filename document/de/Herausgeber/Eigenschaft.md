
# Eigenschaften
Konfiguration der Auswirkungen eines Gegenstands.
- Dies ist ein Effekt, der für den Gegenstand konfiguriert werden kann.
- Gegenstände mit dem Typ `Notwendig` oder `Verbrauchbar` gelten nur, solange sie ausgerüstet sind. Bei `unnötigen` Gegenständen wird der Effekt nur angewendet, wenn sie im Besitz sind.
- Die Werte für beide Gegenstände werden als Anpassen an den Level-Unterschied zwischen dem Level des Spielers und dem Level der Aktion berechnet.
- Wenn der Wert für den Angriff beispielsweise 10 beträgt, wird der Angriff so berechnet, als ob das Level des Spielers 10 höher wäre als das Level der Aktion. Minus-Werte sind das Gegenteil.
- ANGRIFF, VERTEIDIGUNG, GENAUIGKEIT, BEWÄHRUNG und WIEDERHERSTELLUNG gelten nur für Aktionen vom Typ `Ausdauer`.

|Eigenschaften|Details zur Wirksamkeit.|
|-|-|
|Geschwindigkeit|Verringert die Zeit, die für eine Aktion benötigt wird. Die benötigte Zeit variiert umgekehrt mit dem Level-Unterschied.|
|Chance|Ändert die Erfolgswahrscheinlichkeit einer Aktion. Die Wahrscheinlichkeit steigt proportional zum Level-Unterschied.|
|erleben|Ändert die Erfahrung, die man erwirbt. Erhöht sich proportional zur Level-Differenz (die Berechnung ist umgekehrt: je höher die Level-Aktion, desto mehr gewinnt man).|
|angreifen|Ändert den Ausdauerschaden, der dem Gegner zugefügt wird. (Nur Ausdauer-Aktion).|
|Verteidigung|Verringert den von Gegnern erlittenen Ausdauerschaden. (nur Ausdauer-Aktion).|
|Genauigkeit|Verringert die Fehlwurfquote von Angriffen. (nur Ausdauer-Aktion).|
|Ausweichen|Ändert die Ausweichrate der gegnerischen Angriffe. (nur Ausdauer-Aktion).|
|wiederherstellen|Ändert die Menge an Ausdauer, die am Ende einer Aktion wiederhergestellt wird. (nur für Ausdauer-Aktionen).|
___

## Kategorie.
Angabe der Kategorie, für die die Eigenschaft gilt.
- Konfiguration der ID der Kategorie, für die diese Eigenschaft gilt.
- Die Konfiguration "*" gilt für alle Kategorien.
- Ist sie leer, gilt sie für die Kategorie, zu der der Gegenstand gehört.
___

## Wert des Angriffs [Level-Unterschied].
Korrektur des Ausdauerschadens, der dem Gegner zugefügt wird (gilt nur für Ausdauer-Aktionen).
- Der Schaden des Angriffs wird unter der Annahme berechnet, dass der Level des Spielers so viel höher ist als der Level der Aktion.
___

## Wert der Verteidigung [Level-Differenz].
Korrektur des von einem Gegner erhaltenen Ausdauerschadens (gilt nur für STAMINA-Aktionen).
- Der erlittene Schaden wird so berechnet, als wäre das Level des Spielers um diesen Wert höher als das Level der Aktion. Je höher der Wert ist, desto weniger Schaden wird verursacht.
___

## Wert der Genauigkeit [Level-Unterschied].
Korrektur der Fehlschussrate bei Angriffen (gilt nur für Ausdaueraktionen).
- Die Fehlschussquote wird unter der Annahme berechnet, dass das Level des Spielers um diesen Wert höher ist als das Level der Aktion. Je höher der Wert ist, desto geringer ist die Fehlwurfquote.
___

## Wert des Ausweichens [Level-Unterschied].
Korrektur der Rate des Ausweichens bei gegnerischen Angriffen (gilt nur für Ausdaueraktionen).
- Die Ausweichrate wird unter der Annahme berechnet, dass der Level des Spielers so viel höher ist als der Level der Aktion.
___

## Wert des Wiederherstellens [Level-Differenz].
Korrektur des Wiederherstellens der Ausdauer (gilt nur für STAMINA-Aktionen).
- Der Wert des Wiederherstellens der Ausdauer wird unter der Annahme berechnet, dass der Level des Spielers so viel höher ist als der Level der Aktion.
___

## Schnelligkeit [Level-Unterschied].
Korrektur der Dauer der Aktion
- Die benötigte Zeit wird unter der Annahme berechnet, dass der Level des Spielers um diesen Wert höher ist als der Level der Aktion. Je höher der Wert, desto kürzer ist die benötigte Zeit.
___

## Wahrscheinlichkeit des Erfolgs [Level-Unterschied].
Korrektur der Erfolgswahrscheinlichkeit der Aktion.
- Die Erfolgswahrscheinlichkeit der Aktion wird unter der Annahme berechnet, dass der Level des Spielers um diesen Wert höher ist als der Level der Aktion. Je höher der Wert, desto höher die Erfolgswahrscheinlichkeit.
___

## Erfahrung [Level-Unterschied].
Korrekturen der Erfahrungen
- Die Erfahrung wird so berechnet, als ob der Level des Spielers so viel niedriger wäre als der Level der Aktion (je höher der Level der Aktion, desto mehr Erfahrung wird gewonnen, da die Berechnung umgekehrt wird).