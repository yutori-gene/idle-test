import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Langue.",
	summary: "Changer de langue",
	options: {
		preset: "language",
	},
};

export const event: Markdown = {
	title: "Événement",
	summary: "Système se déclenchant à des moments prédéfinis",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "informations complémentaires",
	summary: "Autres informations complémentaires expliquées.",
	children: { event: event, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "déboguer",
	summary: "Opération pour les contrôles de débogage",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "configuration",
	summary: "Modifier les configurations du jeu",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "statistiques",
	summary: "Résumé des progrès accomplis",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "Aperçu.",
	summary: "A propos de ce jeu.",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "monde",
	summary: "Vous pouvez utiliser et vérifier les commandes et configurations générales du jeu,",
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const correction: Markdown = {
	title: "Détails de la propriété",
	summary: "Variation de valeur due à l'équipement ou aux objets",
	options: {
		preset: "property",
	},
};

export const properties: Markdown = {
	title: "propriétés",
	summary: "プロパティの一覧",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "propriétés",
	summary: "プロパティの確認",
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
	title: "transactions",
	summary: "Acheter ou vendre des objets en monnaie.",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "Objet.",
	summary: "カテゴリ内のアイテムの一覧",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "Objet",
	summary: "Détails de l'objet.",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "Agir.",
	summary: "Contrôle des actions",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "Action.",
	summary: "カテゴリ内のアクションの一覧",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Action",
	summary: "Des éléments d'action tels que la collecte, la fabrication et le combat.",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "Tâche",
	summary: "カテゴリ内のタスクの一覧",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "カテゴリ",
	summary: "Une compilation de divers éléments.",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character
export const status: Markdown = {
	title: "Statut.",
	summary: "Liste de toutes les propriétés",
	options: {
		preset: "status",
	},
};

export const inventory: Markdown = {
	title: "inventaire",
	summary: "Liste de tous les objets",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "activité",
	summary: "Liste de toutes les actions",
	options: {
		preset: "activity",
	},
};

export const missions: Markdown = {
	title: "Mission",
	summary: "Liste de toutes les tâches",
	options: {
		preset: "missions",
	},
};

export const character: Markdown = {
	title: "personnage",
	summary: "Identification et exploitation de la situation du protagoniste.",
	children: { activity: activity, inventory: inventory, status: status, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "joueur",
	summary: "Le jeu est expliqué pour chaque colonne qui apparaît dans Jouer au jeu.",
	points: ["Par défaut, la même description apparaît sous forme d'indice au bas de chaque colonne.", "Les Indices peuvent être masqués par configuration."],
	list: expandList("joueur", [character, category, action, item, property, world, miscellaneous], "Description"),
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
