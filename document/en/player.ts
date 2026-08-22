import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Language",
	summary: "Switching languages",
	options: {
		preset: "language",
	},
};

export const event: Markdown = {
	title: "event",
	summary: "A system that runs at set intervals",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "supplementary information",
	summary: "Explanation of other supplementary information",
	children: { event: event, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "debug",
	summary: "Operation for debugging confirmation",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "config",
	summary: "Changing game configurations",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "statistics",
	summary: "Summary of progress",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "overview",
	summary: "About this game",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "world",
	summary: "You can operate and check the game's general controls and configurations,",
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const correction: Markdown = {
	title: "Property Details",
	summary: "Change in value from equipment or items",
	options: {
		preset: "property",
	},
};

export const properties: Markdown = {
	title: "properties",
	summary: "List of correction values",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "properties",
	summary: "Checking correction values",
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
	summary: "Buying or Selling Items with Currency",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "Items",
	summary: "List of Items in Category",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "Item",
	summary: "Item Details",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "act",
	summary: "Controlling Action",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "Actions.",
	summary: "List of Actions in Category",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Action.",
	summary: "Acting elements such as collecting, creating, and fighting",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "Task",
	summary: "List of tasks in this category",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "Category",
	summary: "A compilation of various elements",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character
export const status: Markdown = {
	title: "status",
	summary: "List of all properties",
	options: {
		preset: "status",
	},
};

export const inventory: Markdown = {
	title: "inventory",
	summary: "List of All Items",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "activity",
	summary: "List of All Actions",
	options: {
		preset: "activity",
	},
};

export const missions: Markdown = {
	title: "Mission",
	summary: "List of All Tasks",
	options: {
		preset: "missions",
	},
};

export const character: Markdown = {
	title: "character",
	summary: "Review and manipulation of the protagonist's situation",
	children: { activity: activity, inventory: inventory, status: status, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "player",
	summary: "Each column that appears in Play Games is described separately.",
	points: ["By default, the same description appears as a Hint at the bottom of each column.", "Hints can be hidden by configuration."],
	list: expandList("player", [character, category, action, item, property, world, miscellaneous], "Description"),
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
