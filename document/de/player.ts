import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Sprache.",
	summary: "Wechsel der Sprache",
	options: {
		preset: "language",
	},
};

export const event: Markdown = {
	title: "Ereignis",
	summary: "Ein System, das zu festgelegten Zeitpunkten ausgelöst wird",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "ergänzende Informationen",
	summary: "Sonstige ergänzende Informationen erklärt.",
	children: { event: event, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "Debug",
	summary: "Operation für Debugging-Checks",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "Konfiguration",
	summary: "Ändern der Konfiguration des Spiels",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "Statistiken",
	summary: "Zusammenfassung des Fortschritts",
	options: {
		preset: "statistics",
	},
};

export const general: Markdown = {
	title: "Allgemein",
	summary: "Weltspezifische Konfigurationen",
	options: {
		preset: "general",
	},
};

export const overview: Markdown = {
	title: "Übersicht.",
	summary: "Über dieses Spiel.",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "Welt",
	summary: "Sie können die allgemeinen Steuerelemente und Konfigurationen des Spiels bedienen und überprüfen,",
	children: { overview: overview, general: general, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const correction: Markdown = {
	title: "Korrekturen der Eigenschaften.",
	summary: "Einzelheiten zu den Korrekturen der Eigenschaften.",
	options: {
		preset: "correction",
	},
};

export const properties: Markdown = {
	title: "Eigenschaften",
	summary: "Liste der Korrekturwerte",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "Eigenschaften",
	summary: "Überprüfung der Korrekturwerte",
	// properties / correction は label を持たない同ページ内の節なので、
	// 一覧表・リンクは作らず children の見出しとして展開する（item・action と同じ形）
	children: { properties: properties, correction: correction },
	options: {
		label: "property",
		preset: "property",
	},
};

// item

export const trade: Markdown = {
	title: "Transaktionen",
	summary: "Kauf oder Verkauf von Gegenständen in Währung.",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "Gegenstand",
	summary: "Liste der Gegenstände in der Kategorie.",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "Gegenstand",
	summary: "Einzelheiten zum Gegenstand.",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "Handeln.",
	summary: "Kontrolle der Aktionen",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "AKTION.",
	summary: "Liste der Aktionen in der Kategorie",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Aktion.",
	summary: "Elemente des Handelns wie Sammeln, Herstellen und Kämpfen.",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "Aufgabe",
	summary: "Liste der Aufgaben in dieser Kategorie",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "Kategorie.",
	summary: "Eine Zusammenstellung von verschiedenen Elementen.",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character
export const status: Markdown = {
	title: "Status",
	summary: "Liste aller Eigenschaften",
	options: {
		preset: "status",
	},
};

export const inventory: Markdown = {
	title: "Inventar",
	summary: "Liste aller Gegenstände",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "Aktivität",
	summary: "Liste aller Aktionen",
	options: {
		preset: "activity",
	},
};

export const missions: Markdown = {
	title: "Mission",
	summary: "Liste aller Aufgaben",
	options: {
		preset: "missions",
	},
};

export const character: Markdown = {
	title: "Charakter",
	summary: "Identifizierung und Beeinflussung der Situation des Protagonisten.",
	children: { activity: activity, inventory: inventory, status: status, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "Spieler",
	summary: "Das Spiel wird für jede Spalte erklärt, die in Play the Game erscheint.",
	points: ["Standardmäßig erscheint die gleiche Beschreibung als Hinweis ab jeder Spalte.", "Hinweise können durch Konfiguration ausgeblendet werden."],
	list: expandList("Spieler", [character, category, action, item, property, world, miscellaneous], "Beschreibung"),
	// children: { character: character, category: category, action: action, item: item, property: property, world: world, miscellaneous: miscellaneous },
	options: {
		preset: "player",
		label: "player",
		linkedList: true,
		directory: "player",
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
