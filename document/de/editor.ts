import * as Type from "~d/type/descriptionType";
import { Markdown, Tree, expandList } from "~d/type/markdownType";

// quate

const typeTree = `
world
├── category
├── action
├── item
├── group
├── event
└── preset
`;

// miscellaneous

export const translation: Markdown = {
	title: "Übersetzung",
	summary: "Konfigurationen für die Übersetzung von Text im Spiel in andere Sprachen.",
	points: ["Legt den zu übersetzenden Text fest.", "Mehrsprachige Konfigurationen sind verfügbar, wenn die Übersetzungseinstellungen aktiviert sind.", "Wenn die Übersetzung deaktiviert ist, werden die während der Entwicklung beschriebenen Informationen so angezeigt, wie sie sind.", "Die Konfiguration der Übersetzung und die Umschaltung der Sprache sind während der Entwicklung vor der Veröffentlichung nicht möglich."],
	options: {
		label: "Übersetzung",
	},
	children: {
		flag: {
			title: "Aktivierung der Übersetzung",
			summary: "Aus/Einstellung der Übersetzungsfunktion.",
			points: ["Mehrsprachige Konfigurationen sind verfügbar, wenn die Übersetzungseinstellungen aktiviert sind.", "Die Übersetzung wird während der Entwicklung vor der Veröffentlichung nicht aktiviert. Die Umschaltung zwischen den Sprachen wird nach der Veröffentlichung aktiviert.", "Wenn die Übersetzung aktiviert ist, werden zehn verschiedene Sprachen unterstützt und die Übersetzungsdaten müssen für alle Sprachen verfügbar sein. Es ist nicht möglich, nur einige der Sprachen zu aktivieren.", "Wenn der Benutzer das Spiel startet, wird zunächst die bei der Entwicklung verwendete Sprache angezeigt. Die Sprache kann dann in eine beliebige Sprache geändert werden.", "Der Übersetzungsprozess ist mühsam, aber er ermöglicht es vielen Menschen, damit zu spielen."],
		},
		file: {
			title: "Sprachdatei",
			summary: "JSON-Datei mit den Übersetzungsdaten.",
			points: ["Wenn Spieldaten mit öffentlichen Konfigurationen ausgegeben werden, wird eine JSON-Datei für die Übersetzung in `translations/world` im Ausgabeordner erzeugt.", "Die JSON-Dateien für die Übersetzung in die einzelnen Sprachen befinden sich in diesem Ordner. Der Inhalt enthält nicht übersetzte Daten.", "Der Inhalt hat innerhalb jedes Typs eine ID. Darüber hinaus gibt es einen Namen und eine Beschreibung in ihm.", "Für alle Namen und Beschreibungen müssen Übersetzungen angefertigt und gespeichert werden."],
		},
		task: {
			title: "Übersetzungsaufgaben",
			summary: "Bearbeitung von Übersetzungsdaten",
			points: ["Alle Übersetzungsdateien enthalten Daten in der Sprache zum Zeitpunkt der Entwicklung.", "Für Dateien, die nicht in der Sprache, in der sie entwickelt wurden, vorliegen, ist eine Übersetzung notwendig."],
			children: {
				ai: {
					title: "AI",
					summary: "AI-basierte Übersetzung",
					points: ["Übersetzen Sie mit KI wie ChatGPT, Copilot und Claude.", "Es ist möglich, auf einmal und in einer bestimmten Qualität zu übersetzen.", "Die Übersetzung ist möglicherweise nicht perfekt, insbesondere bei Fachbegriffen und Eigennamen.", "Je nach Umfang der Übersetzungen kann der Einsatz von KI kostspielig sein.", "Wenn der Fortschritt der Übersetzung durch die KI mitten im Prozess unterbrochen wird, kann es möglich sein, der KI mitzuteilen, dass sie \"fortfahren\" soll, und sie schafft es vielleicht. (In manchen Fällen hilft das aber nichts.)"],
					children: {
						prompt: {
							title: "Beispielhafte Aufforderungen",
							summary: "Beispiele für Übersetzungsanweisungen an die KI",
							points: ["Beispielaufforderung: Übersetzen Sie die Werte `Name` und `Explanation` der hochgeladenen JSON-Daten vom Englischen ins Japanische. Ändern Sie die anderen Minuten der Daten nicht."],
						},
						gpt: {
							title: "Verwendung von GPT",
							summary: "Übersetzung mit ChatGPTs GPT.",
							points: ["Der JSON-Sprachübersetzer, der in der GPT-Bibliothek von ChatGPT enthalten ist, kann verwendet werden, um JSON mit Leichtigkeit zu übersetzen.", "Die JSON-Struktur wird bei der Übersetzung beibehalten.", "Ähnliche Funktionen können auch von anderen KI-Diensten als ChatGPT angeboten werden."],
						},
					},
				},
				online: {
					title: "Übersetzungsdienst",
					summary: "Nutzung von Übersetzungsdiensten",
					points: ["Übersetzen Sie mit Online-Diensten wie DeepL und Google Translate.", "Es können qualitativ hochwertigere Übersetzungen erwartet werden als bei der AI-Übersetzung, aber die Kosten richten sich nach dem Umfang der Übersetzung.", "JSON-Dateien können nicht direkt von Übersetzungsdiensten übersetzt werden, so dass ein Programm erstellt und verwendet werden muss.", "Gegen eine Gebühr gibt es einige Dienste, die JSON-Daten unverändert übersetzen. (z. B. doctranslator.com)"],
				},
				manual: {
					title: "Handbuch (Bedienung)",
					summary: "Manuelle Übersetzung",
					points: ["Öffnen Sie die Übersetzungsdatei in einem Texteditor und geben Sie den übersetzten Inhalt in jeder Sprache ein. Das ist sehr zeitaufwändig, aber es ist möglich, die Datei genau so zu übersetzen, wie Sie es wünschen."],
				},
			},
		},
		code: {
			title: "Sprachencode",
			summary: "Liste der unterstützten Sprachcodes",
			list: [
				["Sprachencode", "Sprache."],
				["en", "Englisch"],
				["zh", "Chinesisch (Sprache)"],
				["es", "Spanisch"],
				["ar", "Arabisch (Sprache)"],
				["pt", "Portugiesisch"],
				["Hallo", "Hindi"],
				["fr", "Französisch"],
				["ru", "Russisch"],
				["de", "Deutsch"],
				["DE", "Japanisch"],
			],
		},
	},
};

export const miscellaneous: Markdown = {
	title: "ergänzende Informationen",
	summary: "Sonstige ergänzende Informationen erklärt.",
	points: ["Referenzinformationen."],
	list: expandList("Ergänzung", [translation]),
	options: {
		label: "Verschiedenes",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "Eigenschaften",
	summary: "Konfiguration der Auswirkungen eines Gegenstands.",
	points: ["Dies ist ein Effekt, der für den Gegenstand konfiguriert werden kann.", "Gegenstände mit dem Typ `Notwendig` oder `Verbrauchbar` gelten nur, solange sie ausgerüstet sind. Bei `unnötigen` Gegenständen wird der Effekt nur angewendet, wenn sie im Besitz sind.", "Die Werte für beide Gegenstände werden als Anpassen an den Level-Unterschied zwischen dem Level des Spielers und dem Level der Aktion berechnet.", "Wenn der Wert für den Angriff beispielsweise 10 beträgt, wird der Angriff so berechnet, als ob das Level des Spielers 10 höher wäre als das Level der Aktion. Minus-Werte sind das Gegenteil.", "ANGRIFF, VERTEIDIGUNG, GENAUIGKEIT, BEWÄHRUNG und WIEDERHERSTELLUNG gelten nur für Aktionen vom Typ `Ausdauer`."],
	list: [
		["Eigenschaften", "Details zur Wirksamkeit."],
		["Geschwindigkeit", "Verringert die Zeit, die für eine Aktion benötigt wird. Die benötigte Zeit variiert umgekehrt mit dem Level-Unterschied."],
		["Chance", "Ändert die Erfolgswahrscheinlichkeit einer Aktion. Die Wahrscheinlichkeit steigt proportional zum Level-Unterschied."],
		["erleben", "Ändert die Erfahrung, die man erwirbt. Erhöht sich proportional zur Level-Differenz (die Berechnung ist umgekehrt: je höher die Level-Aktion, desto mehr gewinnt man)."],
		["angreifen", "Ändert den Ausdauerschaden, der dem Gegner zugefügt wird. (Nur Ausdauer-Aktion)."],
		["Verteidigung", "Verringert den von Gegnern erlittenen Ausdauerschaden. (nur Ausdauer-Aktion)."],
		["Genauigkeit", "Verringert die Fehlwurfquote von Angriffen. (nur Ausdauer-Aktion)."],
		["Ausweichen", "Ändert die Ausweichrate der gegnerischen Angriffe. (nur Ausdauer-Aktion)."],
		["wiederherstellen", "Ändert die Menge an Ausdauer, die am Ende einer Aktion wiederhergestellt wird. (nur für Ausdauer-Aktionen)."],
	],
	children: {
		category: {
			title: "Kategorie.",
			summary: "Angabe der Kategorie, für die die Eigenschaft gilt.",
			points: ["Konfiguration der ID der Kategorie, für die diese Eigenschaft gilt.", "Die Konfiguration \"*\" gilt für alle Kategorien.", "Ist sie leer, gilt sie für die Kategorie, zu der der Gegenstand gehört."],
		},
		attack: {
			title: "Wert des Angriffs [Level-Unterschied].",
			summary: "Korrektur des Ausdauerschadens, der dem Gegner zugefügt wird (gilt nur für Ausdauer-Aktionen).",
			points: ["Der Schaden des Angriffs wird unter der Annahme berechnet, dass der Level des Spielers so viel höher ist als der Level der Aktion."],
		},
		defence: {
			title: "Wert der Verteidigung [Level-Differenz].",
			summary: "Korrektur des von einem Gegner erhaltenen Ausdauerschadens (gilt nur für STAMINA-Aktionen).",
			points: ["Der erlittene Schaden wird so berechnet, als wäre das Level des Spielers um diesen Wert höher als das Level der Aktion. Je höher der Wert ist, desto weniger Schaden wird verursacht."],
		},
		accuracy: {
			title: "Wert der Genauigkeit [Level-Unterschied].",
			summary: "Korrektur der Fehlschussrate bei Angriffen (gilt nur für Ausdaueraktionen).",
			points: ["Die Fehlschussquote wird unter der Annahme berechnet, dass das Level des Spielers um diesen Wert höher ist als das Level der Aktion. Je höher der Wert ist, desto geringer ist die Fehlwurfquote."],
		},
		evasion: {
			title: "Wert des Ausweichens [Level-Unterschied].",
			summary: "Korrektur der Rate des Ausweichens bei gegnerischen Angriffen (gilt nur für Ausdaueraktionen).",
			points: ["Die Ausweichrate wird unter der Annahme berechnet, dass der Level des Spielers so viel höher ist als der Level der Aktion."],
		},
		restore: {
			title: "Wert des Wiederherstellens [Level-Differenz].",
			summary: "Korrektur des Wiederherstellens der Ausdauer (gilt nur für STAMINA-Aktionen).",
			points: ["Der Wert des Wiederherstellens der Ausdauer wird unter der Annahme berechnet, dass der Level des Spielers so viel höher ist als der Level der Aktion."],
		},
		speed: {
			title: "Schnelligkeit [Level-Unterschied].",
			summary: "Korrektur der Dauer der Aktion",
			points: ["Die benötigte Zeit wird unter der Annahme berechnet, dass der Level des Spielers um diesen Wert höher ist als der Level der Aktion. Je höher der Wert, desto kürzer ist die benötigte Zeit."],
		},
		chance: {
			title: "Wahrscheinlichkeit des Erfolgs [Level-Unterschied].",
			summary: "Korrektur der Erfolgswahrscheinlichkeit der Aktion.",
			points: ["Die Erfolgswahrscheinlichkeit der Aktion wird unter der Annahme berechnet, dass der Level des Spielers um diesen Wert höher ist als der Level der Aktion. Je höher der Wert, desto höher die Erfolgswahrscheinlichkeit."],
		},
		experience: {
			title: "Erfahrung [Level-Unterschied].",
			summary: "Korrekturen der Erfahrungen",
			points: ["Die Erfahrung wird so berechnet, als ob der Level des Spielers so viel niedriger wäre als der Level der Aktion (je höher der Level der Aktion, desto mehr Erfahrung wird gewonnen, da die Berechnung umgekehrt wird)."],
		},
	},
	options: {
		label: "Eigenschaft",
	},
};

export const combat: Type.Combat = {
	title: "Kampfwert",
	summary: "Korrekturwerte für Aktionen des Typs \"Ausdauer\".",
	points: ["Korrekturwerte gelten nur für Aktionen des Typs \"Ausdauer\".", "Jeder Wert wird als zusätzliche Korrektur des Level-Unterschieds zwischen dem Spieler und der Aktion berechnet.", "Wenn der Wert des Angriffs beispielsweise 10 beträgt, wird der Schaden des Angriffs so berechnet, als ob das Level des Spielers 10 höher wäre als das Level der Aktion. Ist er negativ, erfolgt die Korrektur in die entgegengesetzte Richtung.", "Wenn in der Konfiguration \"Allgemein\" der Wert \"DefaultCombat\" angegeben ist, wird er zum Standardkampfparameter für die gesamte Welt."],
	children: {
		attack: {
			title: "Wert des Angriffs [Level-Unterschied].",
			summary: "Level-Differenz-Korrektur des Ausdauer-Schadens, der dem Gegner zugefügt wird.",
			points: ["Je höher der Wert, desto mehr Schaden wird angerichtet."],
		},
		defence: {
			title: "Wert der Verteidigung [Level-Differenz].",
			summary: "Level-Differenz-Korrektur des von Gegnern erhaltenen Ausdauer-Schadens.",
			points: ["Je höher der Wert, desto stärker wird der Schaden reduziert."],
		},
		accuracy: {
			title: "Wert der Genauigkeit [Level-Unterschied].",
			summary: "Level-Differenz-Korrektur der Angriffs-Fehlschussrate.",
			points: ["Je höher der Wert ist, desto geringer ist die Fehlerquote."],
		},
		evasion: {
			title: "Wert des Ausweichens [Level-Unterschied].",
			summary: "Level-Differenz-Korrektur der Ausweichrate der gegnerischen Angriffe.",
			points: ["Je höher der Wert, desto leichter ist es, einem gegnerischen Angriff auszuweichen."],
		},
		restore: {
			title: "Wert des Wiederherstellens [Level-Differenz].",
			summary: "Level-Differenz-Korrektur beim Wiederherstellen der Ausdauer.",
			points: ["Je höher der Wert, desto mehr Ausdauer wird wiederhergestellt."],
		},
	},
	options: {
		label: "Kampf",
	},
};

export const acquisition: Type.Acquisition = {
	title: "Erwerbungen",
	summary: "Konfiguration der Erfassung auf Item- und Kategorie Level.",
	points: ["Konfigurieren Sie die Erwerbe.", "Sie können sowohl das Level der Kategorie als auch den Gegenstand und die Anzahl der durchgeführten Aktionen ändern.", "Die Wahrscheinlichkeit, das Produkt zu erhalten, kann konfiguriert werden."],
	list: [
		["Typ.", "Was Sie erwerben."],
		["Kategorie.", "Level"],
		["Aktion.", "Anzahl der Ausführungsvorgänge."],
		["Gegenstand", "Anzahl der Besitztümer"],
	],
	children: {
		type: {
			title: "Typ.",
			summary: "Art des zu erwerbenden Elements.",
			list: [
				["Typ.", "Was wird erworben."],
				["Kategorie.", "Level (Erfahrungsumrechnung hinzugefügt)"],
				["Aktion.", "Anzahl der Ausführungsvorgänge."],
				["Gegenstand", "Anzahl der Besitztümer"],
			],
		},
		id: {
			title: "ID des Elements",
			summary: "ID, die das zu erwerbende Element identifiziert.",
		},
		count: {
			title: "Wert",
			summary: "Zu ermittelnde numerische Werte",
			points: ["Minus-Werte verringern die Anzahl der Besitztümer, die Anzahl der Durchführungen und ihr Level. Er kann jedoch nicht kleiner als 0 sein.", "Wenn ein Gegenstand eine maximale Anzahl von Besitztümern hat (Maximum), wird die Anzahl der Besitztümer nicht über diesen Wert hinaus erhöht.", "Ist der Typ eine Kategorie, wird der eingestellte Wert direkt zum Level addiert (1 für 1 Level, 0,5 für 0,5 Level). Der übliche Weg, dies anzupassen, ist die Konfiguration des Erfahrungs-Wertes der Aktion. Diese Konfiguration ist nicht notwendig, es sei denn, es gibt einen besonderen Zweck."],
		},
		chance: {
			title: "Wahrscheinlichkeit [-1 bis 1]",
			summary: "Wahrscheinlichkeit eines Erfolgs beim Abruf (negative Werte werden nur bei einem Fehler ausgewertet)",
			points: ["Die Wahrscheinlichkeit, dass etwas erhalten wird, wird als Dezimalzahl zwischen -1 und 1 konfiguriert. Zur Bestimmung der Wahrscheinlichkeit wird der Wert herangezogen.", "Ist der Wert positiv, wird er nur bei Erfolg der Aktion ausgewertet: Bei `1` wird der Gegenstand garantiert erhalten, bei `0,5` mit einer Wahrscheinlichkeit von 50 %.", "Bei negativen Werten wird die Bewertung nur bei Fehlern der Aktion vorgenommen: Bei `-1` wird der Gegenstand garantiert erhalten, bei `-0,5` mit einer Wahrscheinlichkeit von 50 %.", "Bei `0` wird der Wert weder bei Erfolg noch bei Fehler zurückgegeben.", "Der Standardwert ist `1` (wird bei Erfolg immer abgerufen)."],
		},
	},
	links: { type: "Typ" },
	options: {
		label: "Erwerb",
	},
};

export const requirement: Type.Requirement = {
	title: "Bedingungen und Konditionen",
	summary: "Konfiguration der notwendigen Anforderungen für die Verwendung und Anzeige von Elementen.",
	points: ["Dies sind die Bedingungen, die für jedes Element nach Kategorie, Aktion und Gegenstand konfiguriert werden.", "Wenn nicht alle konfigurierten Bedingungen erfüllt sind, können die in der Tabelle aufgeführten Vorgänge nicht ausgeführt werden.", "Wenn die Sperrfunktion aktiviert ist, wird das Element selbst ausgeblendet, bis die Bedingung erfüllt ist."],
	list: [
		["Wo ist die Konfiguration vorzunehmen?", "Nichts kann nur getan werden, wenn die Bedingungen erfüllt sind."],
		["Kategorie.", "Ausführung aller Aktionen und Manipulation von Gegenständen in der Kategorie"],
		["Aktion.", "Durchführung der Aktionen"],
		["Gegenstand", "Manipulation von Gegenständen (z. B. Ausrüstung)"],
	],
	children: {
		type: {
			title: "Typ.",
			summary: "Art des Elements, auf das als Bedingung verwiesen wird.",
			list: [
				["Typ.", "Referenzierte Werte"],
				["Kategorie.", "Level der Kategorie."],
				["Aktion.", "Zählt, wie oft die Aktion durchgeführt wurde."],
				["Gegenstand", "Anzahl der gehaltenen Gegenstände."],
			],
		},
		id: {
			title: "ID des Elements",
			summary: "ID des Elements, auf das sich die Bedingung bezieht.",
		},
		count: {
			title: "Wert",
			summary: "Notwendige numerische Werte für Anforderungen.",
			points: ["Die Bedingung ist erfüllt, wenn der Wert größer als oder gleich dem angegebenen Wert ist."],
		},
		chance: {
			title: "Verbrauchswahrscheinlichkeit [0-1].",
			summary: "Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird (0-1, nur gültig, wenn der Typ Gegenstand ist).",
			points: ["Die Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird, wenn die Bedingung erfüllt ist und die Aktion durchgeführt wird.", "Verbrauch immer bei \"1\", 50 % Wahrscheinlichkeit des Verbrauchs bei \"0,5\" und kein Verbrauch bei \"0\".", "Der Standardwert ist \"1\" (immer verbraucht).", "Ungültig, wenn der Typ nicht der Gegenstand ist."],
		},
		equipment: {
			title: "Ausrüstung",
			summary: "Erfordert, dass sich der Gegenstand in Ausrüstung befindet (nur gültig, wenn der Typ Gegenstand ist) oder",
			points: ["Wenn er aktiviert ist, muss der Gegenstand sowohl ausgerüstet als auch besessen werden.", "Ungültig, wenn der Typ nicht der Gegenstand ist."],
		},
	},
	links: { type: "Typ" },
	options: {
		label: "Anforderung",
	},
};

export const information: Type.Information = {
	title: "Informationen",
	summary: "Konfiguration der grundlegenden Informationen über das Element (ID, Name, Symbol, Farbe usw.)",
	points: ["Grundlegende Informationsgegenstände, die jedem Element in der Welt gemeinsam sind (Kategorien, Aktionen, Gegenstände, Ereignisse, usw.).", "Jedes Element wird separat konfiguriert."],
	children: {
		id: {
			title: "ID",
			summary: "Eindeutige ID zur Identifizierung des Elements",
			points: ["ID zur eindeutigen Identifizierung jedes Elements.", "Im Editor ist dies eine Zeichenkette zur Identifizierung des Elements.", "Die ID gibt z. B. an, welcher Gegenstand bei Abschluss der Aktion erhalten wird."],
			important: "Wenn die ID einmal konfiguriert wurde, darf sie nach der Verteilung des Spiels nicht mehr geändert werden. Eine Änderung führt zu Inkonsistenzen mit den vorhandenen Spieldaten und das Spiel funktioniert nicht richtig.",
			children: {
				displayName: {
					title: "Angezeigter Name.",
					summary: "Automatisch aus der ID generierter Anzeigename",
					points: ["Die möglichen Zeichen sind eine Kombination aus Buchstaben, Bindestrichen und Ziffern.", "Wenn der Name noch nicht festgelegt ist, wird der erste Buchstabe jedes Wortes groß geschrieben und der Bindestrich durch ein Leerzeichen ersetzt, das automatisch in den Namen eingetragen wird.", "Für andere Sprachen als Englisch muss der Namenseintrag individuell konfiguriert werden."],
					children: {
						example: {
							title: "Beispiel.",
							summary: "Beispiele für die ID-Konvertierung aus der Praxis",
							points: ["Wenn die ID `stylish-strong-axe` ist, lautet der Name `Stylish Strong Axe`."],
						},
					},
				},
				noDuplicate: {
					title: "Keine Überschneidungen.",
					summary: "Verbot von doppelten IDs innerhalb desselben Typs.",
					points: ["Nichts innerhalb von Kategorien, Aktionen, Gegenständen, Ereignissen und voreingestellten Typen duplizieren, da diese zur Identifizierung von Elementen verwendet werden.", "Die gleiche ID für verschiedene Typen zu haben, ist kein Problem."],
					links: { type: "Typ" },
				},
			},
		},
		name: {
			title: "Name.",
			summary: "Name des Elements, wie er erscheint",
			points: ["Name des Elements, das im Spiel angezeigt wird.", "Es können auch andere Sprachen als Englisch eingegeben werden.", "Namen, die andere Elemente duplizieren, sind zulässig.", "Wenn sie zu lang ist, wird der überlaufende Teil beim Abspielen mit `...` aus der Anzeige ausgelassen."],
			children: {
				translateFromId: {
					title: "Automatische Umwandlung von ID",
					summary: "Automatische Namensgenerierung aus IDs",
					points: ["Wenn das Feld leer gelassen wird, werden die Informationen automatisch anhand der ID angezeigt. Weitere Informationen finden Sie im vorherigen Abschnitt."],
				},
			},
		},
		explanation: {
			title: "erläuternde Bemerkung",
			summary: "Detaillierte Beschreibung des Elements.",
			points: ["Eine Beschreibung der Elemente, die im Spiel angezeigt werden.", "Andere Sprachen als Englisch können eingegeben werden. Alle Texte, auch lange Texte, werden angezeigt.", "Wenn keine Erklärung gegeben wird, leer lassen."],
		},
		icon: {
			title: "Symbol",
			summary: "Konfiguration von Symbolen zur Darstellung von Elementen.",
			points: ["Die Icons können als Bilder, Iconify oder Emojis konfiguriert werden.", "Iconify ist ein Dienst, der eine breite Palette von Symbolen anbietet.", "Wenn mehr als eine dieser Konfigurationen gezählt wird, werden Bilder, Iconify und Piktogramme vorrangig und in dieser Reihenfolge angezeigt."],
			children: {
				image: {
					title: "Bild.",
					summary: "Beliebige Bilddatei verwenden",
					points: ["Bild, das das Element darstellt.", "Wenn die Datei sehr groß ist, wird sie automatisch verkleinert.", "Unnötig, wenn Iconify oder Piktogramme konfiguriert sind."],
					children: {
						"Dateityp": {
							title: "Dateityp.",
							summary: "Unterstützte Bilddateiformate.",
							points: ["Sie können die allgemeinen Typen verwenden, die im Browser angezeigt werden können.", "JPEG, PNG, GIF, WebP, SVG, usw."],
						},
					},
				},
				iconify: {
					title: "Iconify",
					summary: "Verwendung des Iconify-Symbolsets",
					points: ["Icons, die Elemente darstellen.", "Iconify ist ein Dienst, der eine breite Palette von Symbolen anbietet.", "Wenn ein Bild konfiguriert ist, hat es Vorrang."],
					children: {
						iconify: {
							title: "Iconify",
							summary: "So wählen Sie Symbole aus Iconify aus",
							points: ["Suchen Sie in \"Iconify\" nach Symbolen, die angezeigt werden können.", "Sie können die besten Icons schnell finden, indem Sie nach Icons suchen.", "Wählen Sie ein Symbol aus, um seinen Bezeichner zu sehen (Symbolsatztyp `:` Symbolname), wie z. B. `game-icons:sword-wound`, und fügen Sie es direkt in dieses Symbolfeld ein."],
							images: ["Iconify-Auswahl.png"],
							links: { iconify: "https://icon-sets.iconify.design" },
						},
					},
				},
				emoji: {
					title: "Piktogramm",
					summary: "Icon-Anzeige mit Piktogrammen",
					points: ["Piktogramme als Symbole anzeigen.", "Es kann von Text in Piktogramme umgewandelt und schnell konfiguriert werden.", "Bei Piktogrammen geben Sie die Unicode-Piktogramme so ein, wie sie sind.", "Da die in der Ausführungsumgebung eingeführten Piktogramme verwendet werden, werden sie für verschiedene Benutzer leicht unterschiedlich dargestellt.", "Mit Iconify können Sie Emojis konfigurieren, die nicht von jeder Umgebung abhängig sind", "Nicht-piktografische Zeichen können angezeigt werden, aber es ist möglich, dass die Anzeige verfälscht wird, wenn mehr als ein Zeichen vorhanden ist.", "Geben Sie Piktogramme ein, z. B. `🗡️` oder `⚔️`."],
				},
			},
		},
		color: {
			title: "Vielfalt",
			summary: "Konfiguration der Anzeigefarbe des Elements.",
			points: ["Als Elementfarbe wird sie auf das Symbol und die Hintergrundfarbe des Elements angewendet.", "Wählen Sie aus der Farbauswahl des Editors."],
			children: {
				"Erbe von den Eltern": {
					title: "Vererbung von übergeordneten Elementen",
					summary: "Übernahme der Farbkonfigurationen des übergeordneten Elements.",
					points: ["Wenn leer, wird die im übergeordneten Element konfigurierte Farbe übernommen.", "Die Hierarchie der Typen für die einzelnen Elemente sieht wie folgt aus", "Wenn eine Aktion beispielsweise eine individuelle Konfiguration hat, wird diese verwendet, wenn die Aktion keine individuelle Konfiguration hat, wird die Farbe der Kategorie oder der Welt verwendet."],
					quote: typeTree,
					links: { type: "Typ" },
				},
			},
		},
	},
	options: {
		label: "Informationen",
	},
};

export const component: Markdown = {
	title: "Komponente",
	summary: "Gemeinsame Teile",
	points: ["Gemeinsame Komponenten, die in jeder Konfiguration verwendet werden, werden extrahiert und bearbeitet.", "Die Komponenten, die in all diesen Bereichen verwendet werden, sind gleich, aber einige der Komponenten werden in einigen der Artikel nicht verwendet."],
	list: expandList("Komponente", [information, requirement, acquisition, combat, property]),
	options: {
		label: "Komponente",
		linkedList: true,
	},
};

// type

export const preset: Type.Information = {
	...information,
	title: "Voreinstellung",
	summary: "Anpassen der Anzeige von Systemelementen",
	points: ["Ersetzt UI-Text und -Symbole, die bereits in die Spiel-Engine (Spieler) integriert sind.", "Es werden nur diejenigen ersetzt, die mit einer vorhandenen Voreinstellung nach ID übereinstimmen.", "Nur die Elemente, die Sie konfigurieren, werden ersetzt. Wenn zum Beispiel nur das Symbol konfiguriert ist, werden die anderen Elemente wie Name und Farbe durch das Original ersetzt."],
	options: {
		label: "Voreinstellung",
	},
};

export const event: Type.Event = {
	title: "Ereignis",
	summary: "Nachrichten- und Belohnungssystem, das durch Bedingungen ausgelöst wird.",
	points: ["Sie wird ausgelöst, wenn die eingestellten Zeitpunkte/Bedingungen erfüllt sind, und es wird eine Meldung angezeigt.", "Sie kann beim ersten Start, nach dem Spiel vorbei, bei der Rückkehr aus dem Aus ausgelöst werden, oder wenn bestimmte Bedingungen erfüllt sind.", "Er kann das Level der Kategorie, die Anzahl der durchgeführten Aktionen und die Anzahl der Gegenstände, die er bei der Aktivierung besitzt, verändern."],
	children: {
		information: information,
		timing: {
			title: "Zeitmessung",
			summary: "Konfiguration des Zeitpunkts der Auslösung von Ereignissen.",
			list: [
				["Zeitmessung", "Aktivierungsbedingung", "wiederholen"],
				["übereinstimmen\".", "Wenn die in CONDITIONS festgelegten Bedingungen zum ersten Mal erfüllt sind.", "nur einmal"],
				["zurückgekommen\".", "Wenn eine Person für mehr als eine Sekunde aus dem Internet zurückkehrt und eine Aktion im Läuft ist.", "oft"],
				["`Gameovered`.", "Wenn die Ausdauer des Spielers im Kampf zu Ende geht.", "oft"],
				["abgeschlossen\".", "Wenn der max. Level aller Kategorien (maxCategoryLevels) erreicht ist.", "nur einmal"],
				["willkommen\".", "Als ich mit dieser Welt anfing.", "nur einmal"],
				["`obtained`", "Wenn eine Aktion einer bestimmten Art (z. B. Schatztruhe) abgeschlossen oder bestätigt wurde. Sofern die Voraussetzungen erfüllt sind, werden auch die Belohnungen des Ereignisses gutgeschrieben.", "oft"],
			],
		},
		unlocked: {
			title: "Anfangsanzeige",
			summary: "Standardanzeige des Ereignis-Symbols (die Auslösung hängt vom Zeitpunkt ab; bei dieser Konfiguration wird das Ereignis nicht ausgelöst)",
			points: ["Die Auslösebedingungen für das Ereignis werden durch den Zeitpunkt bestimmt; dieser Eintrag wirkt sich lediglich auf das Aussehen des Listen-Symbols aus.", "secreted: Wird erst dann in der Liste der Ereignisse angezeigt, wenn alle Anforderungen erfüllt sind (die Auslösung selbst erfolgt jedoch zum vorgesehenen Zeitpunkt).", "hidden・hinted: Das Symbol wird mit einem Schrägstrich versehen und als „noch nicht freigeschaltet“ angezeigt.", "Freigegeben: Die Durchstreichung verschwindet und der Eintrag wird als freigegeben angezeigt."],
		},
		requirements: {
			title: "Bedingungen und Konditionen",
			summary: "Bedingungen für die Auslösung von Ereignissen und die Gewährung von Belohnungen.",
			points: ["Bedingungen für die Auslösung von Ereignissen oder die Gewährung von Belohnungen.", "Bei „matched“ werden die Erwerbungen nur dann ausgezahlt, wenn diese Bedingung erfüllt ist.", "Außer bei „matched“ wird die Aktion ausgelöst, sobald die zeitlichen Bedingungen erfüllt sind. Anschließend erfolgt der Erwerb der Belohnung nur dann, wenn die Konfiguration der Bedingungen erfüllt ist."],
			children: requirement.children,
		},
		acquisitions: {
			title: "Belohnung",
			summary: "Konfiguration der Belohnung, wenn das Ereignis ausgelöst wird.",
			points: ["Dies ist die Belohnung, wenn das Ereignis ausgelöst wird.", "Bei „matched“ erhalten Sie eine Belohnung nur dann, wenn die Bedingungen erfüllt sind und die Aktion ausgelöst wird.", "Außer bei `matched` erfolgt der Erwerb nur dann, wenn die zeitlichen Bedingungen erfüllt sind und zudem die Bedingungen unter „conditions“ erfüllt sind.", "Sie können die Anzahl auf einen negativen Wert zählen. Wenn Sie z. B. die Anzahl der Gegenstände auf einen negativen Wert zählen, wenn Sie `gameovered` sind, verlieren Sie sie, wenn das Spiel vorbei ist."],
			children: acquisition.children,
		},
		group: {
			title: "Arbeitsgruppe",
			summary: "Gruppenkennung der Aufgabe (derzeit unbenutzt)",
			points: ["Dieses Element wird derzeit nicht verwendet. Er ist für zukünftige Erweiterungen reserviert."],
		},
	},
	options: {
		label: "Veranstaltung",
	},
};

export const group: Type.Information = {
	...information,
	title: "Gruppe (z.B. von Personen)",
	summary: "Definieren Sie Anzeigegruppen für Kategorien, Aktionen und Gegenstände",
	points: ["Definieren Sie Gruppen, um die Reihenfolge der Anzeige zu steuern.", "Sie können die hier definierten Gruppen für jede Kategorie, Aktion und jeden Gegenstand einrichten.", "Gruppen mit der gleichen Gruppe werden dicht nebeneinander angezeigt.", "Bleibt sie leer, wird keine Gruppierung vorgenommen."],
	options: {
		label: "Gruppe",
	},
};

export const item: Type.Item = {
	title: "Gegenstand",
	summary: "Güterelemente wie Ausrüstung und Verbrauchsgüter",
	points: ["Dieses Element bezieht sich auf den Besitz von Gegenständen wie Ausrüstung, Verbrauchsmaterial und Wertsachen.", "Innerhalb einer Kategorie kann nur eine Ausrüstung vorhanden sein, oder sie kann Nichts sein.", "Es gibt auch zahllose Möglichkeiten, sie zu verwenden."],
	children: {
		information: information,
		category: {
			title: "Kategorie.",
			summary: "ID der Kategorie, zu der der Gegenstand gehört",
			points: ["Geben Sie die ID der Kategorie an, zu der dieser Gegenstand gehört."],
		},
		group: {
			title: "Gruppe (z.B. von Personen)",
			summary: "Gruppenklassifizierung von Gegenständen anzeigen",
			points: ["Wenden Sie eine der in Basic konfigurierten Gruppen an.", "Es wird eine Liste der Gegenstände in der Reihenfolge der konfigurierten Gruppen angezeigt.", "Bleibt sie leer, wird keine Gruppierung vorgenommen."],
			links: { general: "allgemein" },
		},
		unlocked: {
			title: "Anfänglicher Freigabezustand",
			summary: "Anfänglicher Anzeige- und Freigabezustand des Elements (wechselt automatisch in den nächsthöheren Zustand, sobald die Auslösebedingungen erfüllt sind)",
			points: ["secreted: Wird in der Benutzeroberfläche erst angezeigt, wenn alle Anforderungen erfüllt sind (erscheint weder in den Hinweisen noch in der Liste der Anforderungen und Belohnungen).", "hidden: Solange kein Freischaltelement darauf verweist und die Voraussetzungen nicht erfüllt sind, bleibt es vollständig verborgen (der Name ist ausgegraut und es kann nicht bearbeitet werden).", "hinted (Standard): Es wird nur der Name angezeigt, aber der Eintrag kann erst bearbeitet werden, wenn er freigegeben ist.", "freigegeben: Unabhängig von den Bedingungen von Anfang an freigegeben und bedienbar (früher „Von Anfang an anzeigen“)."],
		},
		buyingValue: {
			title: "Wert [Münzen].",
			summary: "Konfiguration des Preises für das Kaufen von Gegenständen.",
			points: ["Sie können einen Gegenstand nicht kaufen, wenn Sie ihn noch nie besessen haben."],
			list: [
				["Wert", "Behandlung"],
				["0", "Nichts"],
				["Ein Wert größer als Null.", "Der Wert, den Sie kaufen können."],
				["Ein Wert kleiner als Null (z. B. -1)", "Kann nicht gekauft werden (wird als Null behandelt)."],
			],
		},
		sellingValue: {
			title: "Wert [Münzen].",
			summary: "Konfiguration des Verkaufspreises von Gegenständen.",
			points: ["Konfiguration des Preises, zu dem die Gegenstände verkauft werden."],
			list: [
				["Wert", "Behandlung"],
				["0", "Nichts"],
				["Ein Wert größer als Null.", "Verkaufen Sie zu diesem Wert."],
				["Ein Wert kleiner als Null (z. B. -1)", "Allgemeine Konfiguration Rabattsatz multipliziert mit dem Wert des Gebots (wenn der Wert Null ist, kann nicht verkauft werden)"],
			],
			links: { general: "allgemein" },
		},
		maximum: {
			title: "Maximal gezählte eigene [pcs].",
			summary: "Begrenzung der max. Anzahl der eigenen Gegenstände.",
			points: ["Wenn 0, gibt es keine Begrenzung der Anzahl, die man besitzen kann.", "Wenn Sie mehr als 1 besitzen, können Sie nur bis zu dieser Anzahl zählen. Wenn die Höchstgrenze erreicht ist, wird die Zahl der Eigenen durch weitere Erwerbe nicht erhöht."],
		},
		equipmentType: {
			title: "Typ der Ausrüstung",
			summary: "Typ-Einstellungen für Ausrüstung, Effekte und Verbrauch von Gegenständen.",
			points: ["Gegenstände, die ausgerüstet werden können, müssen zu der in der Kategorie `equipmentGroups` angegebenen Gruppe gehören.", "Innerhalb der gleichen Gruppe kann nur ein Gegenstand ausgerüstet werden."],
			list: [
				["Wert", "Ausrüstung", "Effektivität.", "Verbrauch", "Beispiel."],
				["notwendig\".", "Notwendig", "Ausrüstung", "Nichts", "Schwerter, Rüstungen und andere Ausrüstung."],
				["verbrauchbar\".", "Notwendig", "Ausrüstung", "Verbraucht bei der Durchführung von Aktionen", "Gegenstände, die verbraucht werden, um eine Wirkung zu erzielen, z. B. Tränke."],
				["Unnötig\".", "unnötig", "Zu jeder Zeit, während sie im Besitz sind.", "Nichts", "Passive Gegenstände, die allein dadurch wirksam sind, dass man sie hat."],
				["Unmöglich\".", "nicht erlaubt", "Nichts", "Nichts", "Nicht wirksame Gegenstände wie Materialien und Schutt."],
			],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Notwendige Anforderungen für die Verwendung des Gegenstandes." },
		properties: { ...property, options: { ...property.options, array: true }, summary: "Eigenschaften und Auswirkungen des Gegenstandes." },
		coinId: { title: "Währungs-ID für den Kauf und Verkauf", summary: "ID der Währung, die für den Kauf und Verkauf dieses Gegenstands verwendet wird", points: ["Geben Sie die ID der Währung (Coins) an, die sowohl für den Kauf- als auch für den Verkaufswert verwendet wird.", "Wenn das Feld leer ist, wird die Hauptwährung (die erste Währung in der Liste „coins“) verwendet."] },
	},
	options: {
		label: "Artikel",
	},
};

export const action: Type.Action = {
	title: "Aktion.",
	summary: "Elemente des Handelns wie Sammeln, Herstellen und Kämpfen.",
	points: ["Dies sind Elemente, die Handlungen wie Sammeln, Herstellen, Kaufen und Verkaufen sowie Kämpfen darstellen.", "Mit jeder Handlung, die du ausführst, gewinnst du Erfahrung und dein Level steigt.", "Sie können für jede Handlung Gegenstände einrichten, die verbraucht oder beschafft werden sollen.", "Es gibt ja verschiedene Arten von Handlungen."],
	children: {
		information: information,
		category: {
			title: "Kategorie.",
			summary: "ID der Kategorie, zu der die Aktion gehört",
			points: ["Geben Sie die ID der Kategorie an, zu der diese Aktion gehört."],
		},
		attribute: {
			title: "Attribut",
			summary: "Aktionsspezifische Kategorien von Attributen",
			points: ["Es können einzelne Attribute (Kategorien) konfiguriert werden.", "Bleibt sie leer, wird die Kategorie, zu der sie gehört, übernommen", "Wenn Sie zum Beispiel das Attribut Magie für eine Aktion der Kategorie Dämonenschloss individuell konfigurieren, werden das Level und die Eigenschaften der Kategorie Magie berechnet und auf die Zeit und den Schaden der Aktion angewendet."],
			links: { category: "Kategorie" },
		},
		group: {
			title: "Gruppe (z.B. von Personen)",
			summary: "Anzeige der Gruppeneinteilung der Aktionen",
			points: ["Wenden Sie eine der in Basic konfigurierten Gruppen an.", "Es wird eine Liste der Aktionen in der Reihenfolge der Konfiguration der Gruppen angezeigt."],
			links: { general: "allgemein" },
		},
		unlocked: {
			title: "Anfänglicher Freigabezustand",
			summary: "Anfänglicher Anzeige- und Freigabezustand des Elements (wechselt automatisch in den nächsthöheren Zustand, sobald die Auslösebedingungen erfüllt sind)",
			points: ["secreted: Wird in der Benutzeroberfläche erst angezeigt, wenn alle Anforderungen erfüllt sind (erscheint weder in den Hinweisen noch in der Liste der Anforderungen und Belohnungen).", "hidden: Solange kein Freischaltelement darauf verweist und die Voraussetzungen nicht erfüllt sind, bleibt es vollständig verborgen (der Name ist ausgegraut und es kann nicht bearbeitet werden).", "hinted (Standard): Es wird nur der Name angezeigt, aber der Eintrag kann erst bearbeitet werden, wenn er freigegeben ist.", "freigegeben: Unabhängig von den Bedingungen von Anfang an freigegeben und bedienbar (früher „Von Anfang an anzeigen“)."],
		},
		level: {
			title: "Level",
			summary: "Schwierigkeitsgrad der Aktion.",
			points: ["Der Schwierigkeitsgrad der Aktion wird durch das Level angegeben.", "Berechnen Sie jede Eigenschaft zur Laufzeit im Vergleich zum Level des Spielers.", "Wenn du zum Beispiel eine Aktion ausführst, die über deinem Level liegt, ist die Erfolgsrate geringer.", "Wenn die Bedingungen erfüllt sind, kann die Ausführung auch dann erfolgen, wenn das Level des Spielers unter diesem Wert liegt."],
			links: { property: "Eigenschaft" },
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Notwendige Anforderungen für die Durchführung der Aktion." },
		seconds: {
			title: "Zeit [s].",
			summary: "Typische Zeit für die Durchführung der Aktion",
			points: ["Die für die einmalige Durchführung einer Aktion notwendige Standardzeit (in Sekunden).", "Bei Typen mit \"Ausdauer\" ist dies die Zeitspanne für eine Runde (eine Verringerung der Ausdauer des jeweils anderen).", "Die tatsächliche Ausführung kann aufgrund der Berechnung der Eigenschaften variieren."],
			links: { property: "Eigenschaft" },
		},
		experience: {
			title: "Erfahrung [nächstes Level bei 100].",
			summary: "Erfahrungen aus erfolgreichen Aktionen",
			points: ["Die Standard-Erfahrung, die durch die einmalige und erfolgreiche Durchführung einer Aktion erworben wird; 100 Minuten entsprechen einem Level an Erfahrung.", "Im Falle eines Kampfes ist es ratsam, mehr zu konfigurieren, da es bei einem Sieg des Gegners zu Erwerbungen kommt.", "Die tatsächliche Ausführung kann aufgrund der Berechnung der Eigenschaften variieren."],
			links: { property: "Eigenschaft" },
		},
		chance: {
			title: "Wahrscheinlichkeit des Erfolgs [0-1].",
			summary: "Wahrscheinlichkeit des Erfolgs bei Abschluss der Aktion",
			points: ["Die Wahrscheinlichkeit des Erfolgs bei Abschluss der Aktion.", "Bei `1` immer erfolgreich, bei `0` immer fehlerhaft.", "Im Falle eines Fehlers werden verbrauchbare Gegenstände verbraucht, aber keine Belohnung oder Erfahrung gewonnen.", "Die tatsächliche Ausführung kann aufgrund der Berechnung der Eigenschaften variieren."],
		},
		maximum: {
			title: "Maximale Anzahl von Durchläufen [mal].",
			summary: "Maximale Anzahl von Malen, die eine Aktion durchgeführt werden kann.",
			points: ["Die maximale Anzahl von Malen, die eine Aktion erfolgreich abgeschlossen werden kann.", "Unbegrenzt für \"0\".", "Wenn die Obergrenze erreicht ist, ist die Aktion nicht mehr ausführbar."],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Belohnung für die erfolgreiche Durchführung einer Aktion." },
		progressType: {
			title: "Fortschritt Typ",
			summary: "Typ der Ausführung der Aktion",
			points: ["Es gibt vier Arten."],
			list: [
				["Typ.", "Vorgangsdetails", "Ausdauer", "Beispiel."],
				["beständig\".", "Es handelt sich dabei um eine Aktion, die ständig wiederholt wird; für jeden Abschluss erhalten Sie Erfahrung und Belohnungen.", "Keine Beziehung", "Holzeinschlag, Bergbau, Fischerei"],
				["Single\".", "Führen Sie eine Aktion nach der anderen durch. Bei einer Unterbrechung wird der Fortschritt gespeichert und kann beim nächsten Mal fortgesetzt werden. Nach Abschluss drückt der Benutzer die Aktion Bestätigen, um das Ergebnis zu erhalten.", "Keine Beziehung", "Schatztruhen öffnen, Fähigkeiten durch Lesen lernen"],
				["Schnapp\".", "Dieser Typ von Aktion wird sofort ausgeführt. Wird sofort und ohne Zeitverzögerung abgeschlossen.", "Keine Beziehung", "Handeln, Verwendung von Gegenständen."],
				["Ausdauer\".", "Mit jeder benötigten Zeit sinkt die Ausdauer des Spielers und des Gegners. Wenn die Ausdauer des Gegners erschöpft ist, erhält man Erfahrung und Belohnungen. Wenn die Ausdauer des Spielers zu Ende geht, ist das Spiel vorbei und alle laufenden Aktionen werden abgebrochen.", "Einschlägig.", "Kampfhandlungen, gefährliche Einsätze."],
			],
		},
		property: combat,
	},
	options: {
		label: "Aktion",
	},
};

export const category: Type.Category = {
	title: "Kategorie.",
	summary: "Allgemeiner Rahmen für die Klassifizierung von Aktionen und Gegenständen.",
	points: ["Stellt eine wichtige Minute dar.", "Zum Beispiel kann es in jeder beliebigen Konfiguration eingesetzt werden, wie z.B. Nahbereich, Fernbereich, Magie, Kerker, Schmiede, Manufakturen, usw.", "Aktionen und Gegenstände werden direkt ab der Welt platziert und sind mit einer Kategorie ID verbunden."],
	children: {
		information: information,
		group: {
			title: "Gruppe (z.B. von Personen)",
			summary: "Gruppeneinteilung der Kategorien anzeigen",
			points: ["Wenden Sie eine der in Basic konfigurierten Gruppen an.", "Es wird eine Liste der Kategorien in der Reihenfolge der Konfiguration der Gruppen angezeigt."],
			links: { general: "allgemein" },
		},
		unlocked: {
			title: "Anfänglicher Freigabezustand",
			summary: "Anfänglicher Anzeige- und Freigabezustand des Elements (wechselt automatisch in den nächsthöheren Zustand, sobald die Auslösebedingungen erfüllt sind)",
			points: ["secreted: Wird in der Benutzeroberfläche erst angezeigt, wenn alle Anforderungen erfüllt sind (erscheint weder in den Hinweisen noch in der Liste der Anforderungen und Belohnungen).", "hidden: Solange kein Freischaltelement darauf verweist und die Voraussetzungen nicht erfüllt sind, bleibt es vollständig verborgen (der Name ist ausgegraut und es kann nicht bearbeitet werden).", "hinted (Standard): Es wird nur der Name angezeigt, aber der Eintrag kann erst bearbeitet werden, wenn er freigegeben ist.", "freigegeben: Unabhängig von den Bedingungen von Anfang an freigegeben und bedienbar (früher „Von Anfang an anzeigen“)."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Notwendige Anforderungen für die Verwendung der Kategorie." },
		equipmentGroups: {
			title: "Ausrüstungsgruppe",
			summary: "Bezeichnung der Gegenstandsgruppen, die in dieser Kategorie ausgerüstet werden können.",
			points: ["Liste der Gruppennamen von Gegenständen, die in dieser Kategorie ausgerüstet werden können.", "Es können nur Gegenstände aus der Gruppe ausgerüstet werden, die dem hier angegebenen Gruppennamen entspricht.", "Wird eine leere Zeichenfolge angegeben, kommen Gegenstände mit einer nicht eingestellten Gruppe (leer) für die Ausrüstung in Frage.", "In der gleichen Gruppe kann nur ein Gegenstand ausgerüstet werden. Wenn Sie einen neuen Gegenstand ausrüsten, wird ein bereits vorhandener Gegenstand in derselben Gruppe automatisch abgelegt.", "Wenn die Liste leer ist (0 Stück), kann nichts ausgerüstet werden."],
			links: { general: "allgemein" },
		},
		numeric: {
			title: "Verfügbarkeit der Levels",
			summary: "Verfügbarkeit von Funktionen auf Kategorie Level",
			points: ["Dieses Kennzeichen gibt an, ob diese Kategorie ein Level hat oder nicht.", "Ist er an, hat er ein Level, ist er aus, hat er keins.", "Ein Beispiel ist das Einschalten von Kategorien, die auf Erfahrung basieren, wie Schwertkampf und Magie, und das Ausschalten von Kategorien, die auf dem Ort basieren, wie Verliese und Schmiede."],
		},
		standaloneProgress: {
			title: "gleichzeitiger Fortschritt",
			summary: "Konfiguration der parallelen Ausführung mit anderen Kategorien",
			points: ["Dieses Kennzeichen gibt an, ob Aktionen in dieser Kategorie parallel zu Aktionen in anderen Kategorien fortschreiten können.", "Wenn sie an sind, können sie gleichzeitig und unabhängig von anderen Kategorien von Aktionen Fortschritte machen.", "Ist sie ausgeschaltet, kann sie nicht gleichzeitig mit Aktionen in anderen Kategorien durchgeführt werden, die ebenfalls auf \"Aus\" gesetzt sind. Wenn Sie eine neue Aktion in dieser Kategorie starten, werden laufende Aktionen in anderen, nicht eigenständigen Kategorien automatisch abgebrochen."],
		},
		background: {
			title: "Hintergrund",
			summary: "Kategorie-spezifische Hintergrund-Einstellungen",
			points: ["Konfiguration des Hintergrunds für diese Kategorie.", "Wenn eine Kategorie ausgewählt wird, ändert sich das Hintergrundbild in Verbindung mit dieser Kategorie.", "Wenn nichts konfiguriert ist, wird die Welt-Hintergrundeinstellung so verwendet, wie sie ist."],
		},
	},
	options: {
		label: "Kategorie",
	},
};

export const type: Markdown = {
	title: "Typ.",
	summary: "Grundlegende Minuten-Klassifizierung der Welten",
	points: ["Es gibt sechs Arten von Welten.", "Alle Elemente befinden sich direkt ab der Welt.", "Aktionen und Gegenstände werden mit der ID der Kategorie, zu der sie gehören, verknüpft."],
	list: expandList("Typ.", [category, action, item, group, event, preset]),
	quote: typeTree,
	options: {
		label: "Typ",
		linkedList: true,
	},
};

// basic

export const development: Type.Development = {
	title: "Entwicklung",
	summary: "Hinweise und Fehlermanagement bei der Entwicklung der Welt",
	points: ["Während der Entwicklung der Welt verwendet.", "Sie betrifft die Entwicklung und Erprobung dieser Welt und hat keinen Einfluss auf den Inhalt des Spiels.", "Die Spieler überprüfen den Inhalt nicht auf seine Entwicklung."],
	children: {
		version: {
			title: "Version",
			summary: "Versionsnummer der Editor-Builds.",
			points: ["Die Versionsnummer der Konsole wird automatisch bei der Erstellung der Welt aufgezeichnet.", "Die Entwickler können diesen Inhalt nicht ändern."],
		},
		memo: {
			title: "Memo.",
			summary: "Memo-Datensätze für Entwickler",
			points: ["Es steht den Entwicklern frei, diese Informationen als Hinweis aufzunehmen.", "Nicht relevant für die Veröffentlichung der Spiele."],
		},
		errors: {
			title: "Fehler",
			summary: "Fehlerprotokollierung von Validierungsergebnissen.",
			points: ["Die Ergebnisse der Validierung der Welt werden hier automatisch gespeichert.", "Beispielsweise wird ein Fehler angezeigt, wenn ein Zeichentyp nicht eingegeben werden kann oder wenn ein numerischer Wert eingegeben wird, der den Grenzwert überschreitet.", "Die Entwickler können diesen Inhalt nicht ändern.", "Sie kann auf dem Server gespeichert werden, wenn hier keine Fehler gespeichert sind."],
		},
		timestamp: {
			title: "Zeitstempel",
			summary: "Aufzeichnungen über die Erstellung, Aufbewahrung und Veröffentlichung.",
			points: ["Der Zeitpunkt der Erstellung, Speicherung und Veröffentlichung von Welten wird automatisch erfasst.", "Die Entwickler können diesen Inhalt nicht ändern."],
			children: {
				created: {
					title: "Tage",
					summary: "Zeitpunkt der ersten Erschaffung der Welt",
					points: ["Das Datum und die Uhrzeit der Erschaffung der Welt."],
				},
				saved: {
					title: "Datum und Uhrzeit speichern",
					summary: "Zeitpunkt der letzten Speicherausführung",
					points: ["Das Datum und die Uhrzeit, zu der die Welt zuletzt gespeichert wurde."],
				},
				published: {
					title: "Datum und Uhrzeit der Veröffentlichung",
					summary: "Zeitpunkt der letzten öffentlichen Hinrichtung",
					points: ["Welt wurde zuletzt veröffentlicht am."],
				},
			},
		},
		autosaveing: {
			title: "automatisches Speichern",
			summary: "Aktivieren/Deaktivieren der automatischen Speicherfunktion.",
			points: ["Zeigt an, ob die automatische Speicherfunktion aktiviert ist.", "Die Entwickler können diesen Inhalt nicht ändern."],
		},
	},
	options: {
		label: "Entwicklung",
	},
};

export const design: Type.Design = {
	title: "Entwurf",
	summary: "Konfigurationen für das visuelle Erscheinungsbild, wie z. B. Farben und Schriftarten der Welt.",
	points: ["Konfigurationen für die Anzeige der Welten.", "Wenn es individuelle Konfigurationen für jedes Element gibt, haben diese Vorrang vor dem Gesamtdesign der Welt."],
	children: {
		mainColor: {
			title: "vorherrschende Farbe",
			summary: "Die wichtigsten Farben der Welt",
			points: ["Wird als Balkenfarbe verwendet.", "Die entgegengesetzte Farbe davon wird für die Balkenschatten verwendet."],
		},
		subColor: {
			title: "ergänzende Farbe",
			summary: "Hilfsfarben für Hintergrund und Text",
			points: ["Farbe, die als Hintergrund- und Textfarbe verwendet wird.", "Farbtöne, die der Hauptfarbe nahe kommen, mischen sich."],
		},
		background: {
			title: "Hintergrundbild",
			summary: "Hintergrundbild für das gesamte Spiel",
			points: ["Konfiguriert das Hintergrundbild des Spiels.", "Wird kein Bild konfiguriert, ist der Hintergrund ein Farbverlauf auf der Basis der Hilfsfarbe."],
		},
	},
	options: {
		label: "Entwurf",
	},
};

export const general: Type.General = {
	title: "Allgemein",
	summary: "Grundlegende Spieleinstellungen, einschließlich Sprache und Level-Einstellungen",
	children: {
		language: {
			title: "Sprache.",
			summary: "Sprache der Welt zur Zeit ihrer Entstehung.",
			points: ["Konfiguriert die Sprache, die in diesem Welt-Editor verwendet wird.", "Die erste Sprache, die angezeigt wird, wenn der Benutzer das Spiel startet."],
		},
		translations: {
			title: "Übersetzung",
			summary: "Vorbereiten von Übersetzungen in mehrere Sprachen oder",
			points: ["Wenn diese Funktion aktiviert ist, können die Nutzer in jeder Sprache spielen.", "Wenn diese Funktion deaktiviert ist, können Sie nur in der Sprache spielen, die Sie in den Konfigurationen ausgewählt haben.", "Wenn die Übersetzung aktiviert ist, müssen die übersetzten Daten für jede Sprache angegeben werden."],
			links: { translation: "Übersetzung" },
		},
		offlineMaxHours: {
			title: "Maximale Zeit aus offline [Stunden].",
			summary: "Zeitliche Begrenzung des Fortschritts aus dem Internet.",
			points: ["Konfiguration der maximalen Zeit des Fortschritts, wenn Sie aus sind.", "Wenn z. B. 6 Stunden eingestellt sind, wird der Vorgang der Rückkehr aus dem Netz bis zu 6 Stunden bearbeitet, aber wenn mehr Zeit für die Rückkehr aus dem Netz vorgesehen ist, wird die Zeit aus dem Netz als 6 Stunden behandelt.", "Wird 0 Zeit eingestellt, findet bei der Rückkehr aus dem Netz überhaupt keine Prozessverarbeitung statt.", "Der maximale Wert ist 24 Stunden."],
			links: { category: "Kategorie" },
		},
		maxCategoryLevels: {
			title: "Maximales Level der Kategorie",
			summary: "Level-Grenze für jede Kategorie.",
			points: ["Konfiguration des maximalen Levels für jede Kategorie.", "Werden über dieses Level hinausgehende Erfahrungen erworben, so wird bei der Berechnung der einzelnen Eigenschaften der hier eingestellte maximale Wert verwendet.", "Dieser Wert ist für Kategorien ohne Levels nicht relevant."],
			links: { category: "Kategorie" },
		},
		locking: {
			title: "Sperrfunktion",
			summary: "Artikel ausblenden, bis die Anforderungen erfüllt sind",
			points: ["Wenn diese Option aktiviert ist, wird der Gegenstand der Kategorie Aktion ausgeblendet, solange er nicht verwendet wurde oder nicht über ihn verfügt und die Anforderungen nicht erfüllt sind.", "Wenn diese Funktion deaktiviert ist, werden alle Elemente von Anfang an angezeigt, können aber erst ausgeführt oder ausgerüstet werden, wenn die Anforderungen erfüllt sind."],
			links: { category: "Kategorie", action: "Aktion", item: "Artikel" },
		},
		coins: {
			title: "Währung",
			summary: "Konfiguration für die im Spiel verwendete Währung (Münzen)",
			points: [
				"Hier wird die im Spiel verwendete Währung konfiguriert.",
				"Es können mehrere Währungen definiert werden, die jeweils mit Konfigurationen (ID, Name, Symbol, Farbe usw.) versehen werden.",
				"Die Währung wird für den Kauf und Verkauf von Gegenständen sowie für die Erweiterung des Inventars verwendet.",
				"Die erste Währung wird als Hauptwährung behandelt und kommt zum Einsatz, wenn für Gegenstände oder Kapazitäten keine Währungs-ID (`coinId`) angegeben ist.",
			],
			links: { information: "Informationen", item: "Artikel" },
		},
		capacity: {
			title: "Kapazität",
			summary: "Konfiguration der Inventarkapazität.",
			points: ["Steuert die maximale Anzahl an verschiedenen Arten von Gegenständen, die ein Spieler besitzen kann.", "Jeder Gegenstand wird durch die Anzahl der Arten von Gegenständen kontrolliert, die Sie haben, nicht durch die Anzahl der Gegenstände, die Sie besitzen.", "Die Einstellung von `initialCount` auf 0 bedeutet unbegrenzte Kapazität.", "Wenn Sie sich auf Kapazitätsgegenstände in Konditionen oder Belohnungen beziehen, verwenden Sie die hier eingestellte ID."],
			children: {
				information: information,
				initialCount: {
					title: "Standardwert [pcs].",
					summary: "Kapazität des Anfangsbestandes (Anzahl der verschiedenen Gegenstände, die gehalten werden können)",
					points: ["Anfangskapazität (Anzahl der verschiedenen Gegenstände, die besessen werden können) zu Beginn des Spiels.", "Wenn \"0\" eingestellt ist, ist die Kapazität unbegrenzt."],
				},
				initialCost: {
					title: "Grundpreis [Münzen].",
					summary: "Anfangspreis für eine zusätzliche Kapazität.",
					points: ["Grundpreis (in Münzen), um die Kapazität des Inventars um einen Slot zu erhöhen.", "Der tatsächliche Preis errechnet sich aus \"Grundpreis x prozentuale Erhöhung ^ Anzahl der Käufe\".", "Beispiel: Grundpreis 100, Steigerungssatz 1,2, erste 100 Münzen, zweite 120 Münzen, dritte 144 Münzen."],
				},
				increasingRate: {
					title: "Prozentualer Anstieg [mal].",
					summary: "Prozentualer Anstieg der Kosten für die Kapazitätserweiterung",
					points: ["Es handelt sich um einen Multiplikator, der angibt, wie stark die Kosten der Kapazitätserweiterung mit dem n-ten Kauf steigen.", "Für `1.0` ist der Preis immer gleich, für `1.2` ist er bei jedem Kauf 20% höher.", "Formel: Grundpreis x prozentuale Erhöhung ^ Anzahl der Käufe"],
					list: [
						["Steigerungsrate", "1. Zusatz.", "5. Erhöhung.", "10. Erhöhung.", "100. Erhöhung.", "1000ste Steigerung."],
						["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
						["1.05", "x1.00", "x1.22", "x1.63", "x131.50", "x1.7×10²⁰"],
						["1.10", "x1.00", "x1.61", "x2.59", "x1,4 x 10⁴", "x2.7×10⁴¹"],
						["1.20", "x1.00", "x2.49", "x6.19", "x8,3 x 10⁷", "x8.3×10⁷⁹"],
						["1.50", "x1.00", "x5.06", "x57.67", "x1.9×10¹⁷", "x7.0×10¹⁷⁶"],
					],
				},
				coinId: {
					title: "Währungs-ID",
					summary: "ID der Währung, die für die Kapazitätserweiterung verwendet wird",
					points: ["Geben Sie die ID der Währung (Coins) an, die für die Erweiterung der Kapazität des Inventars verwendet werden soll.", "Wenn das Feld leer ist, wird die Hauptwährung (die erste Währung in der Liste „coins“) verwendet."],
				},
				buyingLimit: {
					title: "Kauflimit [Anzahl]",
					summary: "Maximale Anzahl der Käufe zum Kaufen von Speicherplatz",
					points: ["Dies ist die maximale Anzahl an Käufen, die mit einer bestimmten Währung getätigt werden können.", "Wenn Sie den Wert auf `0` setzen, können Sie unbegrenzt kaufen.", "Wenn Sie den Wert auf `-1` setzen, können Sie den Artikel nicht mehr kaufen.", "Die durch Belohnungen erzielte Kapazitätserhöhung fällt nicht unter diese Obergrenze."],
				},
			},
			links: { item: "Artikel" },
		},
		queue: {
			title: "Warteschlange",
			summary: "Konfiguration der Anzahl der Felder für die fortlaufende Ausführung (Planung) von Aktionen",
			points: [
				"Verwaltet die Anzahl der Zeitfenster für die fortlaufende Ausführung (Planung) von Aktionen.",
				"Sowohl die Anzahl der Plätze als auch die Kapazität können mit Währung gekauft werden; außerdem lassen sich die Plätze in der Warteschlange durch die Auswahl bestimmter Gegenstände als Belohnung für Aktionen oder Ereignisse erhöhen.",
				"Wenn Sie in Bedingungen oder Vergütungen auf Gegenstände der Warteschlange verweisen möchten, verwenden Sie bitte die im Rahmen der Konfiguration festgelegte ID.",
			],
			children: {
				information: information,
				initialCount: {
					title: "Standardwert [pcs].",
					summary: "Anzahl der Felder für die fortlaufende Ausführung beim Start des Spiels",
					points: ["Die Anzahl der Reservierungsplätze zum Start des Spiels.", "Der Mindestwert ist `1` (es gibt keine Behandlung wie bei der Kapazität, bei der `0` = unbegrenzt bedeutet)."],
				},
				initialCost: {
					title: "Grundpreis [Münzen].",
					summary: "Anfangspreis für die Erweiterung um einen Platz",
					points: ["Dies ist der Grundpreis (in Münzen) für die Erweiterung des Rahmens für die fortlaufende Ausführung um einen Platz.", "Der tatsächliche Preis errechnet sich aus \"Grundpreis x prozentuale Erhöhung ^ Anzahl der Käufe\".", "Beispiel: Grundpreis 100, Steigerungssatz 1,2, erste 100 Münzen, zweite 120 Münzen, dritte 144 Münzen."],
				},
				increasingRate: {
					title: "Prozentualer Anstieg [mal].",
					summary: "Steigerungsrate der Kosten für die Erweiterung der Kapazität",
					points: ["Dies ist der Multiplikator, um den sich die Kosten für die Erweiterung des Kontingents beim n-ten Kaufen erhöhen.", "Für `1.0` ist der Preis immer gleich, für `1.2` ist er bei jedem Kauf 20% höher.", "Formel: Grundpreis x prozentuale Erhöhung ^ Anzahl der Käufe"],
				},
				coinId: {
					title: "Währungs-ID",
					summary: "ID der Währung, die für die Rahmenerweiterung verwendet wird",
					points: ["Geben Sie die ID der Währung (Coins) an, die für die Erweiterung des Rahmens für die fortlaufende Ausführung verwendet werden soll.", "Wenn das Feld leer ist, wird die Hauptwährung (die erste Währung in der Liste „coins“) verwendet."],
				},
				buyingLimit: {
					title: "Kauflimit [Anzahl]",
					summary: "Maximale Anzahl an Käufen",
					points: ["Dies ist die maximale Anzahl an Käufen, die mit Währung im Rahmen der Serienausführung getätigt werden können.", "Wenn Sie den Wert auf `0` setzen, können Sie unbegrenzt kaufen.", "Wenn Sie den Wert auf `-1` setzen, können Sie den Artikel nicht mehr kaufen.", "Die Erhöhung der Quote durch Vergütungen fällt nicht unter diese Obergrenze."],
				},
			},
			links: { item: "Artikel" },
		},
		levelCommonRatio: {
			title: "Rate des Anstiegs der Erfahrung [Zeiten].",
			summary: "Prozentualer Anstieg des Schwierigkeitsgrads beim Level-up.",
			points: ["Mit steigendem Level einer Kategorie steigt auch die für das Erreichen des nächsten Levels notwendige Erfahrung.", "Wenn Sie diesen Wert erhöhen, steigt der Schwierigkeitsgrad.", "Die für den Aufstieg auf das nächste Level notwendige Erfahrung entspricht (Erfahrung-Zuwachsrate)^(aktuelles Level - 1)."],
			list: [
				["Rate des Anstiegs der Erfahrung", "Lv.1", "Lv.2", "Lv.10", "Lv.50", "Lv.99."],
				["0", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
				["0.02", "x1.00", "x1.02", "x1.22", "x2.69", "x5.52"],
				["0.05", "x1.00", "x1.05", "x1.55", "x11.47", "x131.50"],
				["0.10", "x1.00", "x1.10", "x2.36", "x117.39", "x5.7×10⁴"],
				["0.20", "x1.00", "x1.20", "x6.19", "x3,3 x 10³", "x1,3 x 10¹¹"],
			],
			links: { category: "Kategorie" },
		},
		actionLevelLimit: {
			title: "Action Level Restriction",
			summary: "Fragt ab, wie oft das gleiche Attribut Aktion für die Ausführung einer Aktion gezählt wurde.",
			points: ["Wenn diese Option aktiviert ist, wird die Anzahl der Ausführungen einer Aktion mit denselben Attributen automatisch zu den Ausführungsbedingungen jeder Aktion hinzugefügt.", "Die Anzahl der notwendigen Male entspricht dem Level-Wert der Aktion.", "Wenn kein Attribut konfiguriert ist, wird die ID der Kategorie verwendet, zu der sie gehört."],
		},
		defaultCombat: { ...combat, summary: "Standard-Kampfparameter, die für alle Aktionen gelten.", points: ["Grundlegende Werte für Korrekturen im Kampf, die für alle Aktionen des Typs \"Ausdauer\" gemeinsam gelten.", "Der Kampfwert (Eigenschaft) der einzelnen Aktionen wird zu diesem Standardwert addiert."], links: { action: "Aktion" } },
	},
	options: {
		label: "allgemein",
	},
};

export const overview: Type.Overview = {
	title: "Übersicht.",
	summary: "Grundlegende Informationen über die Welt und ihre Autoren",
	points: ["In diesem Abschnitt wird der Inhalt der Welt beschrieben.", "Konfigurieren Sie es so, dass es für die Benutzer leicht zu verstehen ist, wenn sie eine Welt auswählen.", "Diese Konfigurationen haben keinen Einfluss auf den Betrieb der Welt."],
	children: {
		information: information,
		version: {
			title: "Version",
			summary: "Nummer der Version der Welt",
			points: ["Geben Sie einen beliebigen Wert (ganze Zahl oder Dezimalzahl) ein.", "Allgemein steht der ganzzahlige Teil für die Hauptversion und der Minutenteil für die Nebenversion."],
		},
		author: {
			title: "Name des Autors",
			summary: "Name des Welt-Autors",
			points: ["Geben Sie Ihren Benutzernamen oder Spitznamen ein."],
		},
		homepage: {
			title: "Startseite.",
			summary: "URL der Website des Autors",
			points: ["Wenn Sie eine eigene Startseite oder ein soziales Netzwerk haben, geben Sie deren URL ein.", "Spieler können diese URL über einen Link überprüfen.", "Falls nicht zutreffend, leer lassen."],
		},
		url: {
			title: "Uniform Resource Locator",
			summary: "URL des Spiels",
			points: ["Geben Sie die URL ein, unter der Sie das Spiel in dieser Welt platzieren möchten.", "Geben Sie die URL der ersten Seite ein, z. B. index.html, einschließlich der Domain.", "Wenn eine geeignete URL angegeben wird, wird sie als PWA betrieben.", "Eine PWA ist eine Funktion, die wie eine App funktioniert, die installiert und aus gespielt werden kann."],
		},
		estimatedPlayingTime: {
			title: "Geschätzte Spielzeit",
			summary: "Geschätzte Zeit bis zum Abschluss der Welt-Spiel.",
			points: ["Die geschätzte Zeit, die notwendig ist, um das Spiel in der Welt abzuschließen.", "Die Spieler können sich beim Spielen daran orientieren.", "Es handelt sich lediglich um eine Referenzzeit, und es gibt keine klare Definition dafür, was die Vollendung einer Welt ausmacht."],
			children: {
				value: {
					title: "Wert",
					summary: "Werte der Spielzeit",
				},
				unit: {
					title: "Einheit",
					summary: "Zeiteinheit (z. B. Stunden, Minuten)",
				},
			},
		},
	},
	options: {
		label: "Übersicht",
	},
};

export const basic: Type.Basic = {
	title: "Grundeinstellung",
	summary: "Grundlegende Konfigurationselemente für die Welt im Allgemeinen.",
	points: ["Konfiguration des Namens der Welt, der Beschreibung, des Hintergrunds, der Währung, der Kapazität, des maximalen Levels der Kategorien, der Rate des Erfahrungszuwachses, des Rabatts, der Standard-Kampfparameter, usw.", "Diese Konfigurationen wirken sich auf die gesamte Welt aus."],
	list: expandList("Name", [overview, general, design, development]),
	children: {
		overview: overview,
		general: general,
		design: design,
		development: development,
	},
	options: {
		label: "grundlegend",
		linkedList: true,
	},
};

// world


export const world: Type.World = {
	title: "Welt",
	summary: "Konfiguration der gesamten Spielwelt und Datenstruktur",
	points: ["Daten über Spiele, die auf Konsolen gespielt werden können.", "Mit den Konfigurationen können Sie ein Abbruchspiel nach Ihren Wünschen gestalten.", "Welten bestehen aus Kategorien, Aktionen, Gegenständen und Ereignissen."],
	children: {
		basic: basic,
		categories: { ...category, options: { ...category.options, array: true } },
		actions: { ...action, options: { ...action.options, array: true } },
		items: { ...item, options: { ...item.options, array: true } },
		groups: { ...group, options: { ...group.options, array: true } },
		events: { ...event, options: { ...event.options, array: true } },
		presets: { ...preset, options: { ...preset.options, array: true } },
	},
	options: {
		label: "Welt",
	},
};

// editor

export const editor: Markdown = {
	title: "Herausgeber",
	summary: "Erklärungen zur Verwendung des Editors und zum Aufbau der Welten.",
	list: expandList("Name", [world, basic, type, component, miscellaneous]),
	options: {
		label: "Herausgeber",
		linkedList: true,
		directory: "Herausgeber",
	},
};

// list

// prettier-ignore
export const tree: Tree = {
	title: editor,
	twig: [
		{ title: world }, 
		{ title: basic, twig: [overview, general, design, development] }, 
		{ title: type, twig: [category, action, item, group, event, preset] }, 
		{ title: component, twig: [information, requirement, acquisition, combat, property] }, 
		{ title: miscellaneous, twig: [translation] }
	],
};
