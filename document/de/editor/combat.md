
# Kampfwert
Korrekturwerte für Aktionen des Typs "Ausdauer".
- Diese Korrekturwerte gelten nur für Aktionen vom Typ `stamina`.
- Jeder Wert wird als zusätzliche Korrektur des Level-Unterschieds zwischen dem Spieler und der Aktion berechnet.
- Wenn der Wert des Angriffs beispielsweise 10 beträgt, wird der Schaden des Angriffs so berechnet, als ob das Level des Spielers 10 höher wäre als das Level der Aktion. Ist er negativ, erfolgt die Korrektur in die entgegengesetzte Richtung.
- Werden sie unter Allgemein in `defaultCombat` eingestellt, werden sie zu den Standard-Kampfparametern der gesamten Welt.
___

## Wert des Angriffs [Level-Unterschied].
Level-Differenz-Korrektur des Ausdauer-Schadens, der dem Gegner zugefügt wird.
- Je höher der Wert, desto mehr Schaden wird angerichtet.
___

## Wert der Verteidigung [Level-Differenz].
Level-Differenz-Korrektur des von Gegnern erhaltenen Ausdauer-Schadens.
- Je höher der Wert, desto stärker wird der Schaden reduziert.
___

## Wert der Genauigkeit [Level-Unterschied].
Level-Differenz-Korrektur der Angriffs-Fehlschussrate.
- Je höher der Wert ist, desto geringer ist die Fehlerquote.
___

## Wert des Ausweichens [Level-Unterschied].
Level-Differenz-Korrektur der Ausweichrate der gegnerischen Angriffe.
- Je höher der Wert, desto leichter ist es, einem gegnerischen Angriff auszuweichen.
___

## Wert des Wiederherstellens [Level-Differenz].
Level-Differenz-Korrektur beim Wiederherstellen der Ausdauer.
- Je höher der Wert, desto mehr Ausdauer wird wiederhergestellt.
- Wenn auf der Seite des Gegners eingestellt (der Kampfwert der Aktion und die Fähigkeiten des Gegners), kehrt sich die Wirkung um, und die Wiederherstellungsmenge des Spielers verringert sich um diesen Wert.