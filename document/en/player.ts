import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Language",
	summary: "Switching languages",
	points: ["Toggles the language displayed in the game.", "This is only valid if the author has prepared a translation."],
	options: {
		preset: "language",
	},
};

export const event: Markdown = {
	title: "event",
	summary: "System to occur according to conditions",
	points: ["Triggered when conditions are met.", "A message is displayed when it is activated, and items are given or reduced."],
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
	points: ["It is displayed only during debugging.", "It will not be displayed when the game is published and distributed."],
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "config",
	summary: "Changing game configurations",
	points: ["Configure settings related to game display and processing.", "Game data can be input/output and reset."],
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "statistics",
	summary: "Summary of progress",
	points: ["You can check the progress of the game so far."],
	options: {
		preset: "statistics",
	},
};

export const general: Markdown = {
	title: "general",
	summary: "World-specific config",
	points: ["You can check the difficulty level and unique configurations for this world."],
	options: {
		preset: "general",
	},
};

export const overview: Markdown = {
	title: "overview",
	summary: "About this game",
	points: ["You can check about the world (world view, config) of this game.", "You can also check the console (system) that is running this game."],
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "world",
	summary: "You can operate and check the game's general controls and configurations,",
	children: { overview: overview, general: general, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const correction: Markdown = {
	title: "Correction of properties",
	summary: "Details of property corrections",
	points: ["You can see corrections for specific properties in this Category.", "Correction is due to the effect of the Item. You can check the item."],
	options: {
		preset: "correction",
	},
};

export const properties: Markdown = {
	title: "properties",
	summary: "List of correction values",
	points: ["The following is a list of properties configured for each Category.", "A property is an element that affects the execution of an Action.", "The effect is corrected by Equipment of Item. (Some Items are Unnecessary)"],
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "properties",
	summary: "Checking correction values",
	points: ["A property is an element that affects the execution of an Action.", "The final value is calculated from the assigned initial value, taking into account the level of the Category, the configured level of the Action, and the correction for the Item being equipped."],
	children: { properties: properties, correction: correction },
	list: expandList("property", [properties, correction]),
	links: {
		properties: "player/properties",
		correction: "player/correction",
	},
	options: {
		label: "property",
		preset: "property",
	},
};

// item

export const trade: Markdown = {
	title: "transactions",
	summary: "Buying or Selling Items with Currency",
	points: ["Some Items cannot be bought or sold.", "Locked Items cannot be bought or sold.", "There may be a limit on the number of purchases you can make for a given capacity or reservation slot (queue), and once you reach that limit, you will not be able to make any further purchases. (Increases resulting from rewards are not subject to this limit.)"],
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "Items",
	summary: "List of Items in Category",
	points: ["Press and hold to toggle Equipment of Item.", "Only one Item in the list is Possible to equip. (If it is configured to be able to be equipped as a Category)", "Items that have not met the release requirements are locked and cannot be viewed in detail."],
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "Item",
	summary: "Item Details",
	points: ["Items are elements related to owning things such as Equipment, Consumables, and Valuables.", "Only one Item in a Category is Possible to be equipped. (If it is configured to be able to be equipped as a Category)", "Items that have not met the release requirements are locked and cannot be viewed in detail."],
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
	points: ["Start or stop an Action.", "You can specify the number of times to run the program. Enter 0 to run until the resource runs out."],
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "Actions.",
	summary: "List of Actions in Category",
	points: ["A long press toggles the execution of the Action.", "Only one Item in a Category is Possible.", "Some Categories allow you to progress actions in more than one Category at the same time.", "Actions that have not met the release conditions are locked and cannot be viewed in detail."],
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Action.",
	summary: "Acting elements such as collecting, creating, and fighting",
	points: ["Each act may gain experience value and will increase your level.", "Each act consumes or obtains an Item.", "Actions that have not met the release conditions are locked and cannot be viewed in detail."],
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const category: Markdown = {
	title: "Category",
	summary: "A compilation of various elements",
	points: ["This element is a compilation of Actions and Items."],
	options: {
		label: "category",
		preset: "category",
	},
};

// character
export const status: Markdown = {
	title: "status",
	summary: "List of all properties",
	points: ["Only the value of the correction of the Category by Item is shown.", "There are further other corrections depending on the Action to be performed."],
	options: {
		preset: "status",
	},
};

export const inventory: Markdown = {
	title: "inventory",
	summary: "List of All Items",
	points: ["Press and hold to toggle Equipment of Item."],
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "activity",
	summary: "List of All Actions",
	points: ["A long press toggles the execution of the Action."],
	options: {
		preset: "activity",
	},
};

export const character: Markdown = {
	title: "character",
	summary: "Review and manipulation of the protagonist's situation",
	points: ["This content is identical to what is displayed by manipulating the Category."],
	children: { activity: activity, inventory: inventory, status: status },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "player",
	summary: "Each column that appears in Play Games is described separately.",
	points: ["By default, the same description appears as a Hint at the bottom of each column.", "Hints can be hidden by configuration."],
	list: expandList("player", [character, category, action, item, property, world, miscellaneous]),
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
