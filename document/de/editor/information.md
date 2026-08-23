
# Informationen
Konfiguration der grundlegenden Informationen über das Element (ID, Name, Symbol, Farbe usw.)
- ワールド内の各要素（カテゴリ、アクション、アイテム、イベントなど）に共通する基本情報の項目です。
- Jedes Element wird separat konfiguriert.
___

## ID
Eindeutige ID zur Identifizierung des Elements
- ID zur eindeutigen Identifizierung jedes Elements.
- Im Editor ist dies eine Zeichenkette zur Identifizierung des Elements.
- Die ID gibt z. B. an, welcher Gegenstand bei Abschluss der Aktion erhalten wird.

!> Wenn die ID einmal konfiguriert wurde, darf sie nach der Verteilung des Spiels nicht mehr geändert werden. Eine Änderung führt zu Inkonsistenzen mit den vorhandenen Spieldaten und das Spiel funktioniert nicht richtig.
___

### Angezeigter Name.
Automatisch aus der ID generierter Anzeigename
- Die möglichen Zeichen sind eine Kombination aus Buchstaben, Bindestrichen und Ziffern.
- Wenn der Name noch nicht festgelegt ist, wird der erste Buchstabe jedes Wortes groß geschrieben und der Bindestrich durch ein Leerzeichen ersetzt, das automatisch in den Namen eingetragen wird.
- Für andere Sprachen als Englisch muss der Namenseintrag individuell konfiguriert werden.
___

#### Beispiel.
Beispiele für die ID-Konvertierung aus der Praxis
- Lautet die ID `stylish-strong-axe`, wird der Name zu `Stylish Strong Axe`.
___

### Keine Überschneidungen.
Verbot von doppelten IDs innerhalb desselben Typs.
- 要素の判別に用いられるため、カテゴリ、アクション、アイテム、イベント、プリセットの各タイプ内で重複しないでください。
- Die gleiche ID für verschiedene Typen zu haben, ist kein Problem.
- [_type_](de/editor/type)
___

## Name.
Name des Elements, wie er erscheint
- Name des Elements, das im Spiel angezeigt wird.
- Es können auch andere Sprachen als Englisch eingegeben werden.
- Namen, die andere Elemente duplizieren, sind zulässig.
- Ist er zu lang, wird der überstehende Teil in der Anzeige während des Spiels mit `…` abgekürzt.
___

### Automatische Umwandlung von ID
Automatische Namensgenerierung aus IDs
- Wenn das Feld leer gelassen wird, werden die Informationen automatisch anhand der ID angezeigt. Weitere Informationen finden Sie im vorherigen Abschnitt.
___

## erläuternde Bemerkung
Detaillierte Beschreibung des Elements.
- Eine Beschreibung der Elemente, die im Spiel angezeigt werden.
- Andere Sprachen als Englisch können eingegeben werden. Alle Texte, auch lange Texte, werden angezeigt.
- Wenn keine Erklärung gegeben wird, leer lassen.
___

## Symbol
Konfiguration von Symbolen zur Darstellung von Elementen.
- Die Icons können als Bilder, Iconify oder Emojis konfiguriert werden.
- Iconify ist ein Dienst, der eine breite Palette von Symbolen anbietet.
- Wenn mehr als eine dieser Konfigurationen gezählt wird, werden Bilder, Iconify und Piktogramme vorrangig und in dieser Reihenfolge angezeigt.
___

### Bild.
Beliebige Bilddatei verwenden
- Bild, das das Element darstellt.
- Wenn die Datei sehr groß ist, wird sie automatisch verkleinert.
- Unnötig, wenn Iconify oder Piktogramme konfiguriert sind.
___

#### Dateityp
Unterstützte Bilddateiformate
- Es lassen sich die gängigen Formate verwenden, die Browser darstellen können.
- JPEG, PNG, GIF, WebP, SVG und weitere.
___

### Iconify
Verwendung des Iconify-Symbolsets
- Icons, die Elemente darstellen.
- Iconify ist ein Dienst, der eine breite Palette von Symbolen anbietet.
- Wenn ein Bild konfiguriert ist, hat es Vorrang.
___

#### Iconify
So wählen Sie Symbole aus Iconify aus
- Suche die darstellbaren Symbole in `Iconify`.
- Sie können die besten Icons schnell finden, indem Sie nach Icons suchen.
- Wählen Sie ein Symbol aus, um seinen Bezeichner zu sehen (Symbolsatztyp `:` Symbolname), wie z. B. `game-icons:sword-wound`, und fügen Sie es direkt in dieses Symbolfeld ein.
![iconify-selection.png](../../resources/iconify-selection.png)
- [_iconify_](https://icon-sets.iconify.design)
___

### Piktogramm
Icon-Anzeige mit Piktogrammen
- Piktogramme als Symbole anzeigen.
- Es kann von Text in Piktogramme umgewandelt und schnell konfiguriert werden.
- Bei Piktogrammen geben Sie die Unicode-Piktogramme so ein, wie sie sind.
- Da die in der Ausführungsumgebung eingeführten Piktogramme verwendet werden, werden sie für verschiedene Benutzer leicht unterschiedlich dargestellt.
- Mit Iconify können Sie Emojis konfigurieren, die nicht von jeder Umgebung abhängig sind
- Nicht-piktografische Zeichen können angezeigt werden, aber es ist möglich, dass die Anzeige verfälscht wird, wenn mehr als ein Zeichen vorhanden ist.
- Geben Sie Piktogramme ein, z. B. `🗡️` oder `⚔️`.
___

## Farbe
Konfiguration der Anzeigefarbe des Elements.
- Als Elementfarbe wird sie auf das Symbol und die Hintergrundfarbe des Elements angewendet.
- Wählen Sie aus der Farbauswahl des Editors.
___

### Vererbung vom übergeordneten Element
Übernahme der am übergeordneten Element eingestellten Farbe
- Bleibt das Feld leer, wird die am übergeordneten Element eingestellte Farbe übernommen.
- Die Hierarchie der Typen der einzelnen Elemente sieht wie folgt aus.
- 例えば、アクションに個別の色が設定されている場合はそれが利用されますが、アクションに個別の色が設定されていない場合はカテゴリ又はワールドの色が使用されます。
- イベントもカテゴリを設定している場合は、アクションやアイテムと同じようにそのカテゴリの色を引き継ぎます。
```
world
├── category
├── action
├── item
├── skill
├── group
├── task
└── preset
```
- [_type_](de/editor/type)