import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Sprache.",
	summary: "Wechsel der Sprache",
	points: ["Wechselt die Sprache, die im Spiel angezeigt wird.", "Nur gültig, wenn der Autor eine Übersetzung vorgelegt hat."],
	options: {
		preset: "Sprache",
	},
};

export const event: Markdown = {
	title: "Ereignis",
	summary: "Ein System, das zu festgelegten Zeitpunkten ausgelöst wird",
	points: ["Es wird zu festgelegten Zeitpunkten ausgelöst, beispielsweise bei der Rückkehr ins Spiel oder beim Spiel vorbei sein.", "Wenn die Funktion ausgelöst wird, öffnet sich dieser Bildschirm, und die Belohnung wird zusammen mit einer Meldung automatisch ausgezahlt.", "Eine Aufgabe ist etwas, das man erfüllt, wenn man die Bedingungen erfüllt, und die Belohnung erhält man selbst."],
	options: {
		preset: "Veranstaltung",
		label: "Veranstaltung",
	},
};

export const miscellaneous: Markdown = {
	title: "ergänzende Informationen",
	summary: "Sonstige ergänzende Informationen erklärt.",
	children: { event: event, language: language },
	options: {
		preset: "Verschiedenes",
		label: "Verschiedenes",
	},
};

// world

export const debug: Markdown = {
	title: "Debug",
	summary: "Operation für Debugging-Checks",
	points: ["Nur während der Fehlersuche sichtbar.", "Sie wird nicht angezeigt, wenn das Spiel veröffentlicht und verbreitet wird."],
	options: {
		preset: "Fehlersuche",
	},
};

export const config: Markdown = {
	title: "Konfiguration",
	summary: "Ändern der Konfiguration des Spiels",
	points: ["Konfigurieren Sie die Konfigurationen für die Anzeige und Verarbeitung von Spielen.", "Außerdem können Spieldaten eingegeben, ausgegeben und zurückgesetzt werden."],
	options: {
		preset: "Konfiguration",
	},
};

export const statistics: Markdown = {
	title: "Statistiken",
	summary: "Zusammenfassung des Fortschritts",
	points: ["Sie können die bisherige Situation des Spiels überprüfen."],
	options: {
		preset: "Statistik",
	},
};

export const general: Markdown = {
	title: "Allgemein",
	summary: "Weltspezifische Konfigurationen",
	points: ["Sie können den Schwierigkeitsgrad und die spezifischen Konfigurationen für diese Welt überprüfen."],
	options: {
		preset: "allgemein",
	},
};

export const overview: Markdown = {
	title: "Übersicht.",
	summary: "Über dieses Spiel.",
	points: ["Informieren Sie sich über die Welt des Spiels (Weltanschauung und Konfiguration).", "Sie können auch herausfinden, auf welcher Konsole (System) das Spiel läuft."],
	options: {
		preset: "Übersicht",
	},
};

export const world: Markdown = {
	title: "Welt",
	summary: "Sie können die allgemeinen Steuerelemente und Konfigurationen des Spiels bedienen und überprüfen,",
	children: { overview: overview, general: general, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "Welt",
		label: "Welt",
	},
};

// property

export const correction: Markdown = {
	title: "Korrekturen der Eigenschaften.",
	summary: "Einzelheiten zu den Korrekturen der Eigenschaften.",
	points: ["Sie können die Korrekturen für bestimmte Eigenschaften in dieser Kategorie überprüfen.", "Die Korrektur ist auf die Wirkung des Gegenstandes zurückzuführen. Sie können den Gegenstand überprüfen."],
	options: {
		preset: "Korrektur",
	},
};

export const properties: Markdown = {
	title: "Eigenschaften",
	summary: "Liste der Korrekturwerte",
	points: ["Liste der Eigenschaften, die für jede Kategorie konfiguriert wurden.", "Eigenschaften sind Elemente, die die Ausführung von Aktionen beeinflussen.", "Die Effektivität wird durch die Ausrüstung des Gegenstandes korrigiert. (Einige Gegenstände müssen nicht ausgerüstet werden)."],
	options: {
		preset: "Eigenschaften",
	},
};

export const property: Markdown = {
	title: "Eigenschaften",
	summary: "Überprüfung der Korrekturwerte",
	points: ["Eigenschaften sind Elemente, die die Ausführung von Aktionen beeinflussen.", "Der endgültige Wert errechnet sich aus dem zugewiesenen Ausgangswert unter Berücksichtigung des Levels der Kategorie, des für die Aktion festgelegten Levels und der Korrektur für den ausgerüsteten Gegenstand."],
	children: { properties: properties, correction: correction },
	list: expandList("Eigenschaft", [properties, correction]),
	links: {
		properties: "Spieler/Eigenschaften.",
		correction: "Spieler/Korrektur",
	},
	options: {
		label: "Eigenschaft",
		preset: "Eigenschaft",
	},
};

// item

export const trade: Markdown = {
	title: "Transaktionen",
	summary: "Kauf oder Verkauf von Gegenständen in Währung.",
	points: ["Einige Gegenstände können weder gekauft noch verkauft werden.", "Gesperrte Gegenstände können weder gekauft noch verkauft werden.", "Für die Kapazität und die Reservierungsplätze (Warteschlange) ist unter Umständen eine Obergrenze für die Anzahl der Käufe konfiguriert; sobald diese Obergrenze erreicht ist, sind keine weiteren Käufe mehr möglich. (Erhöhungen durch Belohnungen fallen nicht unter diese Obergrenze.)"],
	options: {
		preset: "Handel",
	},
};

export const items: Markdown = {
	title: "Gegenstand",
	summary: "Liste der Gegenstände in der Kategorie.",
	points: ["Halten Sie die Taste gedrückt, um zwischen den Ausrüstungsgegenständen zu wechseln.", "Es kann nur ein Gegenstand aus der Liste ausgerüstet werden. (wenn es als Kategorie ausrüstbar konfiguriert ist).", "Gegenstände, die die Freigabebedingungen nicht erfüllen, sind gesperrt und können nicht im Detail eingesehen werden."],
	options: {
		preset: "Artikel",
	},
};

export const item: Markdown = {
	title: "Gegenstand",
	summary: "Einzelheiten zum Gegenstand.",
	points: ["Gegenstände sind Elemente, die sich auf den Besitz von Objekten wie Ausrüstung, Verbrauchsmaterial und Wertsachen beziehen.", "Nur ein Gegenstand einer Kategorie kann ausgerüstet werden. (Wenn sie als Kategorie ausrüstbar konfiguriert ist)", "Gegenstände, die die Freigabebedingungen nicht erfüllen, sind gesperrt und können nicht im Detail eingesehen werden."],
	children: { items: items, trade: trade },
	options: {
		preset: "Artikel",
		label: "Artikel",
	},
};

// action

export const act: Markdown = {
	title: "Handeln.",
	summary: "Kontrolle der Aktionen",
	points: ["Startet oder stoppt die Aktion.", "Sie können die Anzahl der Durchläufe angeben. Geben Sie 0 ein, um so lange zu laufen, bis die Ressource erschöpft ist."],
	options: {
		preset: "handeln",
	},
};

export const actions: Markdown = {
	title: "AKTION.",
	summary: "Liste der Aktionen in der Kategorie",
	points: ["Ein langer Druck schaltet die Ausführung der Aktion um.", "Es kann nur ein Gegenstand aus einer Kategorie ausgeführt werden.", "In einigen Kategorien können Aktionen in mehr als einer Kategorie gleichzeitig Fortschritte machen.", "Aktionen, die die Freigabebedingungen nicht erfüllen, sind gesperrt und können nicht im Detail eingesehen werden."],
	options: {
		preset: "Aktionen",
	},
};

export const action: Markdown = {
	title: "Aktion.",
	summary: "Elemente des Handelns wie Sammeln, Herstellen und Kämpfen.",
	points: ["Für jedes Handeln erhältst du Erfahrung, die deinen Level aufsteigen lässt.", "Bei jedem Handeln wird ein Gegenstand verbraucht oder erlangt.", "Aktionen, die die Freigabebedingungen nicht erfüllen, sind gesperrt und können nicht im Detail eingesehen werden."],
	children: { actions: actions, act: act },
	options: {
		preset: "Aktion",
		label: "Aktion",
	},
};

// category

export const tasks: Markdown = {
	title: "Aufgabe",
	summary: "Liste der Aufgaben in dieser Kategorie",
	points: ["このカテゴリーに割り当てられたタスクの一覧です。", "タスクを選ぶと、達成条件と報酬を確認できます。", "報酬が未受け取りのタスクにはリボンが付きます。選んで獲得を押すと受け取れます。", "持てるアイテムの種類が上限に達している時は受け取れません。整理してから受け取り直します。", "カテゴリーにタスクが1つもない場合は表示されません。"],
	options: {
		preset: "Aufgaben",
	},
};

export const category: Markdown = {
	title: "Kategorie.",
	summary: "Eine Zusammenstellung von verschiedenen Elementen.",
	points: ["Dies ist ein Element, das Aktionen und Gegenstände zusammenführt."],
	children: { tasks: tasks },
	options: {
		label: "Kategorie",
		preset: "Kategorie",
	},
};

// character
export const status: Markdown = {
	title: "Status",
	summary: "Liste aller Eigenschaften",
	points: ["Es werden nur die Korrekturwerte der Kategorie pro Gegenstand angezeigt.", "Je nach der durchzuführenden Aktion gibt es noch weitere Korrekturen."],
	options: {
		preset: "Status",
	},
};

export const inventory: Markdown = {
	title: "Inventar",
	summary: "Liste aller Gegenstände",
	points: ["Halten Sie die Taste gedrückt, um zwischen den Ausrüstungsgegenständen zu wechseln."],
	options: {
		preset: "Inventar",
	},
};

export const activity: Markdown = {
	title: "Aktivität",
	summary: "Liste aller Aktionen",
	points: ["Ein langer Druck schaltet die Ausführung der Aktion um."],
	options: {
		preset: "Tätigkeit",
	},
};

export const missions: Markdown = {
	title: "Mission",
	summary: "Liste aller Aufgaben",
	points: ["カテゴリーごとにまとめて表示されます。", "カテゴリーが設定されていないタスクは先頭にまとめて表示されます。", "達成済みのタスクにはチェックの印が付きます。", "報酬が未受け取りのタスクにはリボンが付きます。選んで獲得を押すと受け取れます。", "一度達成したタスクは、その後に条件を満たさなくなっても達成のまま残ります。"],
	options: {
		preset: "Missionen",
	},
};

export const character: Markdown = {
	title: "Charakter",
	summary: "Identifizierung und Beeinflussung der Situation des Protagonisten.",
	points: ["Dieser Inhalt ist identisch mit dem, der bei der Bedienung der Kategorie angezeigt wird."],
	children: { activity: activity, inventory: inventory, status: status, missions: missions },
	options: {
		label: "Zeichen",
		preset: "Zeichen",
	},
};

export const player: Markdown = {
	title: "Spieler",
	summary: "Das Spiel wird für jede Spalte erklärt, die in Play the Game erscheint.",
	points: ["Standardmäßig erscheint die gleiche Beschreibung als Hinweis ab jeder Spalte.", "Hinweise können durch Konfiguration ausgeblendet werden."],
	list: expandList("Spieler", [character, category, action, item, property, world, miscellaneous]),
	// children: { character: character, category: category, action: action, item: item, property: property, world: world, miscellaneous: miscellaneous },
	options: {
		preset: "Spieler",
		label: "Spieler",
		linkedList: true,
		directory: "Spieler",
	},
};

// list

// prettier-ignore
export const tree: Tree = {
	title: player,
	twig: [
		character,
		category,
		action,
		item,
		property,
		world,
		miscellaneous
	],
};
