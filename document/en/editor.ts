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
	title: "translation",
	summary: "Configuration for translating in-game text into other languages",
	points: ["Configure the text to be translated.", "Multilingual settings are available when the translation config is enabled.", "If the translation is disabled, the description will be displayed as it was during development.", "If the site is in development before it is published, it is not possible to configure translations or switch languages."],
	options: {
		label: "translation",
	},
	children: {
		flag: {
			title: "Enable Translation",
			summary: "Configure the translation function on or off",
			points: ["Multilingual settings are available when the translation config is enabled.", "Translation will not be activated during development before publication. You will be able to switch languages after publication.", "When translation is enabled, 10 different languages will be supported, and it is Necessary to have translation data for all languages. It is not possible to enable only some of the languages.", "When a user starts a game, the language used in the development is displayed first. After that, the language can be changed to any language.", "The translation process is tedious, but it will allow many people to play with it."],
		},
		file: {
			title: "language file",
			summary: "JSON file of translation data",
			points: ["When the game data is output with the public configuration, a JSON file for translation is generated in `translations/world` in the output folder.", "JSON files for translation in each language are located in the folder. The contents contain nothing translated data.", "The content has an ID inside each Type. Inside each type is a name and a description.", "Necessary to translate and save all names and descriptions."],
		},
		task: {
			title: "Translation work",
			summary: "Editing of translation data",
			points: ["All translation files contain data in the language at the time of development.", "Necessary to translate files in languages other than the language in which they were developed."],
			children: {
				ai: {
					title: "AI",
					summary: "AI-based translation",
					points: ["Translate using AI such as ChatGPT, Copilot, and Claude.", "It is Possible to translate at once and to a certain degree of quality.", "Necessary to note that the translation may not be perfect, especially for technical terms and proper nouns.", "Depending on the volume of translations, the use of AI may be costly.", "If the progress of the translation by the AI is interrupted in the middle of the translation, you may manage to tell the AI to \"continue\". (In some cases, there is nothing you can do.)"],
					children: {
						prompt: {
							title: "Example Prompts",
							summary: "Examples of translation instructions given to AI",
							points: ["Example prompt: Translate the `name` and `explanation` values of the uploaded JSON data from English to Japanese. Do not change anything else."],
						},
						gpt: {
							title: "Use of GPT",
							summary: "Translation using ChatGPT's GPT",
							points: ["The JSON Language Translator provided in the GPT library provided by ChatGPT can be used to translate JSON with ease.", "The JSON structure is preserved in the translation", "AI services other than ChatGPT may offer similar functionality."],
						},
					},
				},
				online: {
					title: "Translation Services",
					summary: "Using Translation Services",
					points: ["Translate using an online service such as DeepL or Google Translate.", "Higher quality translations can be expected than AI translation, but there is a fee depending on the volume of translation", "Necessary to create and use a program to translate JSON files, as they cannot be translated directly by a translation service.", "For a fee, there are some services that translate JSON data as is (e.g. doctranslator.com). (doctranslator.com, etc.)"],
				},
				manual: {
					title: "manual (operation)",
					summary: "Manual Translation",
					points: ["Open the translation file in a text editor and type in the translated content in each language. It is very time-consuming, but it is Possible to translate the file as you wish."],
				},
			},
		},
		code: {
			title: "language code",
			summary: "List of supported language codes",
			list: [
				["language code", "Language"],
				["en", "English"],
				["zh", "Chinese (language)"],
				["es", "Español"],
				["ar", "Arabic (language)"],
				["pt", "Português"],
				["hi", "Hindi"],
				["fr", "Français"],
				["ru", "Русский"],
				["de", "Deutsch"],
				["ja", "日本語"],
			],
		},
	},
};

export const miscellaneous: Markdown = {
	title: "supplementary information",
	summary: "Explanation of other supplementary information",
	points: ["Reference information is provided."],
	list: expandList("supplement", [translation]),
	options: {
		label: "miscellaneous",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "properties",
	summary: "Configuring the Effects of an Item",
	points: ["This is an item of effects that can be configured for an Item.", "Items with an Equipment Type of `necessary` or `consumable` will only apply while equipping. For `unnecessary` items, the effect is applied only when you have the item in your possession.", "The value of any of these items is calculated as an Adjustment for the difference in level between the player's level and the Action's level.", "For example, if the attack value is 10, the attack is calculated as if the player's level is 10 higher than the Action's level. Minus values are the opposite.", "ATTACK, DEFENCE, ACCURACY, EVASION, and RESTORE are only valid for `stamina` Type Actions."],
	list: [
		["properties", "Details of Effects"],
		["speed", "Reduces the time required for an Action. The time required changes inversely proportional to the difference in level."],
		["chance", "Changes the probability of success of an Action. The probability increases in proportion to the level difference."],
		["experience", "Varies the experience value acquired. It increases in proportion to the difference in levels (the calculation is reversed: the higher the level Action, the more is gained)."],
		["attack", "Changes the stamina damage dealt to the opponent. (only for stamina actions)"],
		["defence", "Reduces stamina damage taken from opponents. (stamina Action only)"],
		["accuracy", "Decreases the miss rate of attacks. (stamina Action only)"],
		["evasion", "Changes the evasion rate of an opponent's attack. (stamina Action only)"],
		["restore", "Changes the amount of stamina restored at the end of an Action. (only for stamina actions)"],
	],
	children: {
		category: {
			title: "Category",
			summary: "Specify the Category to which the property is applied",
			points: ["Configure the ID of the Category to which this property applies.", "If ``*`` is configured, it will be applied to all categories.", "If left blank, it will be applied to the Category to which the Item belongs."],
		},
		attack: {
			title: "Attack value [level difference].",
			summary: "Correction to Stamina damage dealt to the opponent (only valid for stamina actions)",
			points: ["The attack damage is calculated as if the player's level were this value higher than the Action's level."],
		},
		defence: {
			title: "Defence value [level difference].",
			summary: "Correction to Stamina damage taken from an opponent (only valid for stamina Actions).",
			points: ["Damage is calculated as if the player's level were this value higher than the Action's level. The higher the value, the less the damage."],
		},
		accuracy: {
			title: "Accuracy [level difference].",
			summary: "Correction to attack miss rate (only valid for stamina Action)",
			points: ["The miss rate is calculated assuming that the player's level is this value higher than the Action's level. The higher the value, the lower the miss rate."],
		},
		evasion: {
			title: "Evasion value [level difference].",
			summary: "Correction to the evasion rate of the opponent's attacks (only valid for stamina Actions)",
			points: ["The evasion is calculated assuming that the player's level is this value higher than the Action's level."],
		},
		restore: {
			title: "Restoration value [level difference].",
			summary: "Correction to the amount of stamina restored (only valid for the stamina Action)",
			points: ["The amount of stamina restored is calculated assuming that the player's level is this value higher than the Action's level."],
		},
		speed: {
			title: "Quickness [level difference].",
			summary: "Correction to Action Duration",
			points: ["The time required is calculated assuming that the player's level is this value higher than the Action's level. The higher the value, the shorter the time required."],
		},
		chance: {
			title: "Probability of success [level difference].",
			summary: "Correction to Action Success Probability",
			points: ["The action success probability is calculated assuming that the player's level is this value higher than the Action's level. The higher the value, the higher the success probability."],
		},
		experience: {
			title: "Experience [difference in level].",
			summary: "Correction to acquired experience values",
			points: ["The experience is calculated as if the player's level were this value lower than the Action's level (the higher the Action's level, the more experience is gained, since the calculation is inverted)."],
		},
	},
	options: {
		label: "property",
	},
};

export const combat: Type.Combat = {
	title: "combat value",
	summary: "Configure combat correction values for stamina type Actions",
	points: ["Correction values valid only for `stamina` type Actions.", "Each value is calculated as an additional correction to the level difference between the player and the Action.", "For example, if the attack value is 10, the attack damage is calculated as if the player's level is 10 higher than the Action's level. If it is Minus, the correction is in the opposite direction.", "If configured to `defaultCombat` in `general`, it will be the default combat parameter for the entire world."],
	children: {
		attack: {
			title: "Attack value [level difference].",
			summary: "Correction for level difference in stamina damage inflicted on the opponent.",
			points: ["The higher the value, the more damage is done."],
		},
		defence: {
			title: "Defence value [level difference].",
			summary: "Correction for level difference in stamina damage received from opponents.",
			points: ["The higher the value, the less damage is taken."],
		},
		accuracy: {
			title: "Accuracy [level difference].",
			summary: "Level difference correction to attack miss rate",
			points: ["The higher the value, the lower the miss rate."],
		},
		evasion: {
			title: "Evasion value [level difference].",
			summary: "Level difference correction to the evasion rate of the opponent's attacks",
			points: ["The higher the value, the easier it is to evade an opponent's attack."],
		},
		restore: {
			title: "Restoration value [level difference].",
			summary: "Correction for level difference in stamina restoration",
			points: ["The higher the value, the more stamina is restored."],
		},
	},
	options: {
		label: "combat",
	},
};

export const acquisition: Type.Acquisition = {
	title: "acquisitions",
	summary: "Configure acquisition of Item or Category level",
	points: ["Configure the acquisition.", "You can change the level of the Category as well as the Item, and the number of times the Action has been performed.", "You can configure the probability of obtaining the product."],
	list: [
		["Type", "What you will acquire"],
		["Category", "level"],
		["Action.", "Number of times executed"],
		["Item", "number possessed"],
	],
	children: {
		type: {
			title: "Type",
			summary: "Type of element to be acquired",
			list: [
				["Type", "What is Acquisitions"],
				["Category", "Level (added in terms of experience value)"],
				["Action.", "Number of times executed"],
				["Item", "number possessed"],
			],
		},
		id: {
			title: "ID of an element",
			summary: "ID identifying the element to be acquired",
		},
		count: {
			title: "value",
			summary: "Value to be obtained",
			points: ["Minus values configured will decrease the number of possessions, the number of times they have been performed, and their level. However, it will not go down to 0 or below.", "If an Item has a configured maximum ownership count (max), the number of possessions will not increase beyond that value.", "If the Type is Category, the value configured is added directly to the level (1 for 1 level, 0.5 for 0.5 level). The usual way to adjust this is to use the Action's experience value config. Unnecessary to configure this setting unless there is a special purpose."],
		},
		chance: {
			title: "Probability [-1 to 1]",
			summary: "Probability of success in acquisition (negative values are evaluated only in the event of failure)",
			points: ["Configure the drop probability as a decimal value between -1 and 1. The absolute value is used to determine the probability.", "When the value is positive, it is evaluated only when there is success with the action; a value of `1` guarantees a reward, while a value of `0.5` results in a 50% chance of receiving a reward.", "When the value is negative, it is evaluated only in cases of action failure; a value of `-1` guarantees a drop, while a value of `-0.5` results in a 50% chance of a drop.", "If the value is `0`, it is not obtained in either a success or a failure scenario.", "The default value is `1` (always obtained upon success)."],
		},
	},
	links: { type: "type" },
	options: {
		label: "acquisition",
	},
};

export const requirement: Type.Requirement = {
	title: "terms",
	summary: "Necessary requirements configured for the use and display of elements",
	points: ["These are the conditions to be configured for each element by Category, Action, and Item.", "If all configured conditions are not met, the operations shown in the table cannot be performed.", "If the locked feature is enabled, the element itself will be hidden until the condition is met."],
	list: [
		["Configuration", "Nothing can be done without meeting the conditions."],
		["Category", "Execution of all Actions and manipulation of Items in a Category"],
		["Action.", "Execution of Action"],
		["Item", "Manipulation of Items (e.g., Equipment)"],
	],
	children: {
		type: {
			title: "Type",
			summary: "Type of element referenced as a condition",
			list: [
				["Type", "Referenced value"],
				["Category", "Category Level"],
				["Action.", "Number of times the Action has been performed."],
				["Item", "Number of Items in your possession"],
			],
		},
		id: {
			title: "ID of an element",
			summary: "ID of the element to be referenced as a condition",
		},
		count: {
			title: "value",
			summary: "Necessary values for requirements",
			points: ["The condition is satisfied if the value is above the specified value."],
		},
		chance: {
			title: "Consumption probability [0-1].",
			summary: "Probability of Item being consumed (0-1, valid only if Type is Item)",
			points: ["The probability that an Item will be consumed when the condition is met and the Action is performed.", "Always consumed at `1`, 50% chance of consumption at `0.5`, and no consumption at `0`.", "The default value is `1` (always consumed).", "Invalid if Type is other than Item."],
		},
		equipment: {
			title: "Equipment",
			summary: "Requires that the Item be in the Equipment state (valid only if the Type is Item) or",
			points: ["When enabled, the Necessary requirements are that the Item be equipped, not just possessed.", "Invalid if Type is other than Item."],
		},
	},
	links: { type: "type" },
	options: {
		label: "requirement",
	},
};

export const information: Type.Information = {
	title: "information",
	summary: "Configure basic information about the element (ID, name, icon, color, etc.)",
	points: ["This is an item of basic information common to each element in the world (Category, Action, Item, Event, etc.).", "Each element is configured separately."],
	children: {
		id: {
			title: "ID",
			summary: "unique ID to identify an element",
			points: ["ID to uniquely identify each element.", "A string that identifies the element in the editor.", "For example, the ID specifies which Item is obtained when the Action is completed."],
			important: "Once configured, do not change the ID once the game has been distributed. If you change it, it will be inconsistent with the existing game data and will not work properly.",
			children: {
				displayName: {
					title: "Displayed Name",
					summary: "Display name automatically generated from ID",
					points: ["The characters that can be used are a combination of letters, hyphens, and counts.", "If the name is not configured, the first letter of each word is capitalized and the hyphen is replaced by a space, which is automatically configured in the name.", "Necessary to configure the name field separately for languages other than English."],
					children: {
						example: {
							title: "Example",
							summary: "Examples of ID Conversion",
							points: ["If the ID is `stylish-strong-axe`, the name will be `Stylish Strong Axe`."],
						},
					},
				},
				noDuplicate: {
					title: "Nothing to duplicate.",
					summary: "Prohibit duplicate IDs within the same Type",
					points: ["Nothing should be duplicated within Category, Action, Item, Event, and Preset Types, as they are used to identify elements.", "There is no problem to have the same ID on different Types."],
					links: { type: "type" },
				},
			},
		},
		name: {
			title: "Name",
			summary: "The name under which the element appears",
			points: ["The name of the element displayed in the game.", "Languages other than English can also be entered.", "Names that duplicate other elements are acceptable.", "If it is too long, the overflowing part will be omitted by `...` in the display during play."],
			children: {
				translateFromId: {
					title: "Automatic conversion from ID",
					summary: "Automatic name generation from ID",
					points: ["If left blank, it will be automatically displayed based on the ID. See previous section for details."],
				},
			},
		},
		explanation: {
			title: "explanatory note",
			summary: "Detailed description of the element",
			points: ["A description of the elements displayed in the game.", "Languages other than English can be entered. Even long sentences are all displayed.", "If there is nothing to explain, leave blank."],
		},
		icon: {
			title: "icon",
			summary: "Configure icons to represent elements",
			points: ["Icons can be configured as images, Iconify, or emoji.", "Iconify is a service that provides various types of icons.", "If more than one of these is configured, priority is given to images, Iconify, and pictograms, in that order."],
			children: {
				image: {
					title: "image",
					summary: "Use any image file",
					points: ["An image representing an element.", "If the file size is large, it will be automatically resized.", "Unnecessary if Iconify or pictograms are configured."],
					children: {
						"file-type": {
							title: "File Type",
							summary: "Supported image file formats",
							points: ["You can use the general types that can be displayed in your browser.", "JPEG, PNG, GIF, WebP, SVG, etc."],
						},
					},
				},
				iconify: {
					title: "Iconify",
					summary: "Using the Iconify Icon Set",
					points: ["An icon representing an element.", "Iconify is a service that provides various types of icons.", "If an image is configured, it will take precedence."],
					children: {
						iconify: {
							title: "Iconify",
							summary: "How to select icons from Iconify",
							points: ["Please search `Iconify` for icons that can be displayed.", "You can quickly find the best icons by searching for icons.", "When you select an icon, you will see its identifier such as `game-icons:sword-wound` (type of icon set `:`name of icon), which you can paste directly into this icon's field."],
							images: ["iconify-selection.png"],
							links: { iconify: "https://icon-sets.iconify.design" },
						},
					},
				},
				emoji: {
					title: "pictograph",
					summary: "Icon display with pictograms",
					points: ["Display pictograms as icons.", "It can be converted from text to pictograms and configured quickly.", "For pictograms, enter Unicode pictograms as they are.", "Since the pictograms introduced in the execution environment are used, the display may differ slightly from user to user.", "Iconify allows you to configure emoji that are nothing specific to each environment", "It is possible to display characters other than pictograms, but it is Possible for the display to be corrupted if there is more than one character.", "For example, enter a pictogram such as `🗡️` or `⚔️`."],
				},
			},
		},
		color: {
			title: "variety",
			summary: "Configure the display color of the element",
			points: ["As the element's color, it is applied to the element's icon and background color.", "Select from the editor's color picker."],
			children: {
				"heritage-from-parent": {
					title: "inheriting from a parent element",
					summary: "Inherit the color config of the parent element",
					points: ["If left blank, the color configured on the parent element is taken over.", "The hierarchy of types for each element is as follows", "For example, if an Action has an individual color configured, it will be used, but if nothing is configured for the Action, the Category or World color will be used."],
					quote: typeTree,
					links: { type: "type" },
				},
			},
		},
	},
	options: {
		label: "information",
	},
};

export const component: Markdown = {
	title: "component",
	summary: "Common parts",
	points: ["Common components used in each location config are extracted and handled.", "The components used in all of these locations are common, but some of the components are nothing."],
	list: expandList("component", [information, requirement, acquisition, combat, property]),
	options: {
		label: "component",
		linkedList: true,
	},
};

// type

export const preset: Type.Information = {
	...information,
	title: "preset",
	summary: "Customize the display of system elements",
	points: ["Replaces UI text and icons that are pre-loaded into the game engine (player).", "Only those that match an existing preset by ID will be replaced.", "Only the configured items will be replaced. For example, if you configure only an icon, the other items, such as name and color, will be replaced with the original."],
	options: {
		label: "preset",
	},
};

export const event: Type.Event = {
	title: "event",
	summary: "Message and reward system triggered by conditions",
	points: ["It is triggered when the configured timing/conditions are met and displays a message.", "It can be triggered at first startup, when the game is gameovered, when returning from offline, or when certain conditions are met.", "When activated, it can change the level of the Category, the number of times the Action is performed, and the number of Items possessed."],
	children: {
		information: information,
		timing: {
			title: "timing",
			summary: "Configure the timing of event activation",
			list: [
				["timing", "activation condition", "repeat"],
				["`matched`.", "The first time a condition configured in CONDITIONS is met", "only once"],
				["`comebacked`.", "When you return from offline for more than 1 second and there is an Action in progressing.", "many times"],
				["`gameovered`.", "When a player's stamina runs out in battle.", "many times"],
				["`completed`.", "When the maximum value (maxCategoryLevels) is reached for the level of all categories", "only once"],
				["`welcomed`.", "When I first started this world.", "only once"],
				["`obtained`", "When you complete or confirm a single-type action (such as a treasure chest). If you meet the requirements, event rewards will also be added.", "many times"],
			],
		},
		unlocked: {
			title: "Initial Display State",
			summary: "Initial display state of the event icon (triggering depends on timing; with this config, it will not trigger)",
			points: ["The conditions for triggering an event are determined by timing; this setting affects only the appearance of the list icon.", "secreted: It will not appear in the event list at all until all requirements are met (though the event itself will still fire at the appropriate time).", "hidden・hinted: The icon is displayed with a diagonal line through it to indicate that it is not unlocked.", "Released: The strikethrough disappears, and it is displayed as \"Released.\""],
		},
		requirements: {
			title: "terms",
			summary: "Conditions for triggering events and granting rewards",
			points: ["This is the condition for activating the event or granting the reward.", "With `matched`, the reward is earned only when this condition is met.", "Except for `matched`, this action triggers when the timing condition is met. After that, you will receive a reward only when the conditions configured here are met."],
			children: requirement.children,
		},
		acquisitions: {
			title: "reward",
			summary: "Configure rewards when the event is triggered",
			points: ["This is the reward when the event is triggered.", "With `matched`, you receive a reward only when the conditions are met and the action is triggered.", "Except for `matched`, you earn a reward only when the timing condition is met and the conditions specified in `conditions` are satisfied.", "You can configure the quantity to be minus. For example, if you set the quantity of items to minus in the case of `gameovered`, you will lose them when gameovered."],
			children: acquisition.children,
		},
		group: {
			title: "task group",
			summary: "Group identifier of the task (currently unused)",
			points: ["This item is currently not in use. It is reserved for future enhancements."],
		},
	},
	options: {
		label: "event",
	},
};

export const group: Type.Information = {
	...information,
	title: "group (usu. of people)",
	summary: "Define Display Groups for Categories, Actions, and Items",
	points: ["Define groups to control the order of display.", "You can configure the groups defined here for each Category, Action, and Item.", "Groups that are the same are displayed close together.", "If left blank, no minutes will be grouped."],
	options: {
		label: "group",
	},
};

export const item: Type.Item = {
	title: "Item",
	summary: "Material elements such as Equipment and Consumables",
	points: ["These are elements related to owning things such as Equipment, Consumables, and Valuables.", "Only one may be equipped in a Category, but it can also be made to be equipped with nothing.", "There are also ways to use it like a variable."],
	children: {
		information: information,
		category: {
			title: "Category",
			summary: "ID of the Category to which the Item belongs",
			points: ["Specify the ID of the Category to which this Item belongs."],
		},
		group: {
			title: "group (usu. of people)",
			summary: "Item Display Group Classification",
			points: ["Apply one of the groups configured in Basic.", "A list of Items will be displayed in the order of the configured groups.", "If left blank, no minutes will be grouped."],
			links: { general: "general" },
		},
		unlocked: {
			title: "Initial Unlocked State",
			summary: "Initial Display and Release States of Elements (Automatically advance to a higher state when activation conditions are met)",
			points: ["secreted: Will not appear on the UI at all until all requirements are met (it will not appear in Hints, and will be hidden in the list of requirements and rewards).", "hidden: Remains completely hidden (with its name grayed out and unavailable for interaction) as long as it is not referenced by any unlocking elements and does not meet any requirements.", "hinted (default): Only the name is displayed as a preview, but you cannot interact with it until it is unlocked.", "released: The item is released and available for use from the start, regardless of conditions (formerly \"Display from the Start\")."],
		},
		buyingValue: {
			title: "Purchase price [coins]",
			summary: "Configure the purchase price of the Item",
			points: ["If you have never owned the Item, you cannot buy it."],
			list: [
				["buying price", "treatment"],
				["0", "I can't afford it."],
				["A value greater than 0", "Affordable price"],
				["A value less than 0 (e.g., -1)", "Cannot be bought (treated as 0)"],
			],
		},
		sellingValue: {
			title: "Selling price [coins]",
			summary: "Configure the sale price of an Item",
			points: ["Configure the price at which the Item will be sold."],
			list: [
				["selling price", "treatment"],
				["0", "nothing sells (e.g. goods)"],
				["A value greater than 0", "I can sell it for that value."],
				["A value less than 0 (e.g., -1)", "The discount rate of the general config multiplied by the bid price (if the bid price is 0, it cannot be sold)"],
			],
			links: { general: "general" },
		},
		maximum: {
			title: "Max. owned count [pcs].",
			summary: "Limit on max count of items owned",
			points: ["If 0, there is no limit to the number that can be owned.", "If the number is 1 or more, you can only own up to that count. If you have reached the up limit, acquiring more will not increase your own count."],
		},
		equipmentType: {
			title: "Equipment Type",
			summary: "Type configurations for Equipment, Effects, and Consumption of Items",
			points: ["Necessary for Possible Items to belong to the group specified in the category `equipmentGroups`.", "Only one Item may be Equipment within the same group."],
			list: [
				["value", "Equipment", "Effectiveness", "consumption", "Example"],
				["`necessary`.", "Necessary", "Only while Equipping", "nothing", "Equipment such as swords and armor"],
				["`consumable`.", "Necessary", "Only while Equipping", "Consumed when Action is executed", "Items that are consumed for effect, such as potions"],
				["`unnecessary`.", "Unnecessary", "Always in possession", "nothing", "Passive Items that are effective just by having them."],
				["`impossible`.", "not allowed", "nothing", "nothing", "Items that have no effect, such as materials and debris"],
			],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Necessary Requirements to Use Item" },
		properties: { ...property, options: { ...property.options, array: true }, summary: "Effects of Properties of Item" },
		coinId: { title: "Trading Currency ID", summary: "The ID of the currency used to buy and sell this item", points: ["Specify the ID of the currency (coins) used for both buy and sell values.", "If left blank, the main currency (the first one listed under \"coins\") will be used."] },
	},
	options: {
		label: "item",
	},
};

export const action: Type.Action = {
	title: "Action.",
	summary: "Acting elements such as collecting, creating, and fighting",
	points: ["These elements represent actions such as collecting, creating, buying and selling, and fighting.", "With each act, you gain experience value and your level goes up.", "You can configure each act to consume or obtain an Item.", "There are several types of patterns of behavior."],
	children: {
		information: information,
		category: {
			title: "Category",
			summary: "ID of the Category to which the Action belongs",
			points: ["Specify the ID of the Category to which this Action belongs."],
		},
		attribute: {
			title: "attribute",
			summary: "Action-specific attribute categories",
			points: ["Individual attributes (Categories) can be configured.", "If left blank, the category to which it belongs will be taken over.", "For example, if you configure an attribute called magic for an Action that belongs to the category of Demon's Castle individually, the level and properties of the magic category will be calculated and applied to the Action completion time and damage."],
			links: { category: "category" },
		},
		group: {
			title: "group (usu. of people)",
			summary: "Display Group Classification of Actions",
			points: ["Apply one of the groups configured in Basic.", "A list of Actions will be displayed in the order of the configured groups."],
			links: { general: "general" },
		},
		unlocked: {
			title: "Initial Unlocked State",
			summary: "Initial Display and Release States of Elements (Automatically advance to a higher state when activation conditions are met)",
			points: ["secreted: Will not appear on the UI at all until all requirements are met (it will not appear in Hints, and will be hidden in the list of requirements and rewards).", "hidden: Remains completely hidden (with its name grayed out and unavailable for interaction) as long as it is not referenced by any unlocking elements and does not meet any requirements.", "hinted (default): Only the name is displayed as a preview, but you cannot interact with it until it is unlocked.", "released: The item is released and available for use from the start, regardless of conditions (formerly \"Display from the Start\")."],
		},
		level: {
			title: "level",
			summary: "Difficulty level of Action",
			points: ["The level of difficulty of the Action is indicated by the level.", "Calculate each property at run time compared to the player's level.", "For example, performing an Action that is higher than your level will have a downside effect on your success rate.", "If the conditions are met, the player's level can be less than this value."],
			links: { property: "property" },
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Necessary Requirements for Action Execution" },
		seconds: {
			title: "Time required [seconds]",
			summary: "Typical time it takes to execute an Action",
			points: ["Necessary standard time (in seconds) to perform an Action once.", "For the `stamina` Type, this is the time interval for one turn (one reduction of each other's stamina).", "Actual execution will vary due to property calculations."],
			links: { property: "property" },
		},
		experience: {
			title: "Experience [next level at 100].",
			summary: "Experience value acquired when an Action is successful",
			points: ["This is the standard experience value you acquire when you perform an Action once and succeed. 100 is equivalent to one level of experience.", "In the case of combat, it is advisable to configure a larger number, since they are acquired when the opponent is victorious.", "Actual execution will vary due to property calculations."],
			links: { property: "property" },
		},
		chance: {
			title: "Probability of success [0-1].",
			summary: "Probability of Success on Action Completion",
			points: ["The probability of success upon completion of the Action.", "A value of `1` always indicates success, while a value of `0` always indicates failure.", "In the event of failure, consumable items are consumed, but no reward or experience value is gained.", "Actual execution will vary due to property calculations."],
		},
		maximum: {
			title: "Max. number of executions [times].",
			summary: "The maximum number of times an Action can be completed",
			points: ["The maximum number of times an Action can be completed successfully.", "Unlimited for ``0``.", "When the limit is reached, the Action becomes unexecutable."],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Reward for obtaining a successful Action" },
		progressType: {
			title: "Progression Type",
			summary: "Action Execution Type",
			points: ["There are four types."],
			list: [
				["Type", "What it does", "stamina", "Example"],
				["`persistent`.", "Type in which the Action is repeated continuously, earning experience and rewards for each completion.", "Nothing.", "Logging, mining, fishing"],
				["`single`.", "Perform one Action. If interrupted, the progress is saved and the user can resume the next time. When completed, the user presses the Confirm Action to receive the results.", "Nothing.", "Opening treasure chests, learning skills through reading"],
				["`snap`.", "Type in which the Action is performed instantly. It is completed immediately without any time lapse.", "Nothing.", "Bartering, Use of Items"],
				["`stamina`.", "Each required time decreases the respective stamina of the player and the opponent. When the opponent's stamina is depleted, the player gains experience and rewards. When the player's stamina is depleted, the game is gameovered and all ongoing actions are canceled.", "Relevant.", "Combat, hazardous operations"],
			],
		},
		property: combat,
	},
	options: {
		label: "action",
	},
};

export const category: Type.Category = {
	title: "Category",
	summary: "A general framework for categorizing Actions and Items",
	points: ["Represents a large classification.", "For example, it can be configured in any frame of mind, such as short range, long range, magic, dungeons, blacksmiths, and manufactories.", "Actions and Items are placed directly down in the world and are associated with a Category ID."],
	children: {
		information: information,
		group: {
			title: "group (usu. of people)",
			summary: "Display Group Classification of Category",
			points: ["Apply one of the groups configured in Basic.", "A list of categories will be displayed in the order of the configured groups."],
			links: { general: "general" },
		},
		unlocked: {
			title: "Initial Unlocked State",
			summary: "Initial Display and Release States of Elements (Automatically advance to a higher state when activation conditions are met)",
			points: ["secreted: Will not appear on the UI at all until all requirements are met (it will not appear in Hints, and will be hidden in the list of requirements and rewards).", "hidden: Remains completely hidden (with its name grayed out and unavailable for interaction) as long as it is not referenced by any unlocking elements and does not meet any requirements.", "hinted (default): Only the name is displayed as a preview, but you cannot interact with it until it is unlocked.", "released: The item is released and available for use from the start, regardless of conditions (formerly \"Display from the Start\")."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Necessary Requirements for Category Use" },
		equipmentGroups: {
			title: "Equipment Groups",
			summary: "Designation of Possible Item Groups for Equipment in this Category",
			points: ["A list of the group names of Items that can be equipped in this Category.", "You can only equip items from the group that matches the group name you specify here.", "If an empty string is specified, an item with an unconfigured (empty) group will be targeted for Equipment.", "Only one Item can be equipped in the same group. When you equip a new Item, any existing Equipment in the same group will automatically be unequipped.", "If you set the list to empty (0 pieces), you cannot equip anything."],
			links: { general: "general" },
		},
		numeric: {
			title: "Level Availability",
			summary: "Availability of Category level function",
			points: ["This is a flag to indicate whether or not this Category has a level.", "If on, it has a level; if off, it does not.", "An example would be to turn on categories based on experience, such as swordsmanship and magic, and turn off categories based on location, such as dungeons and blacksmith shops."],
		},
		standaloneProgress: {
			title: "simultaneous progress",
			summary: "Configure parallel execution with other categories",
			points: ["This is a flag to indicate whether an Action in this Category can progress in parallel with an Action in another Category.", "If on, it can progress simultaneously and independently of actions in other Categories.", "If it is off, it cannot be performed at the same time as an Action in another Category that is also configured to be off. When you start a new Action in this Category, any other Progressing Actions in the Non-Standalone Category will be automatically aborted."],
		},
		background: {
			title: "background",
			summary: "Category-specific background config",
			points: ["Configure the background for this Category.", "When a Category is selected, the background image changes in conjunction with it.", "If nothing is configured, the world background setting is used as is."],
		},
	},
	options: {
		label: "category",
	},
};

export const type: Markdown = {
	title: "Type",
	summary: "Basic Classification of Worlds",
	points: ["A world consists of six Types.", "All elements are placed directly down in world.", "Actions and Items are associated with the ID of the Category to which they belong."],
	list: expandList("Type", [category, action, item, group, event, preset]),
	quote: typeTree,
	options: {
		label: "type",
		linkedList: true,
	},
};

// basic

export const development: Type.Development = {
	title: "development",
	summary: "Notes and error management during world development",
	points: ["It is used in the development of worlds.", "It is related to the development and testing of this world and does not affect the content of the play.", "Players will not be asked to confirm any details about the development."],
	children: {
		version: {
			title: "version",
			summary: "Editor build version number",
			points: ["The console version number at the time of world creation is automatically recorded.", "The developer cannot change this content."],
		},
		memo: {
			title: "memo",
			summary: "Memo records for developers",
			points: ["Developers are free to include this information as a memo.", "It is not related to the publication of the game."],
		},
		errors: {
			title: "error",
			summary: "Error logging of validation results",
			points: ["The results of the world validation are automatically saved here.", "For example, an error will be displayed if there is a type of character that cannot be entered, or if a value is entered that exceeds the upper limit.", "The developer cannot change this content.", "Possible to store to the server when there are no errors stored here."],
		},
		timestamp: {
			title: "time-stamping",
			summary: "Creation, storage, and publication records",
			points: ["The time when a world is created, saved, and published is automatically recorded.", "The developer cannot change this content."],
			children: {
				created: {
					title: "creation-time",
					summary: "Time when the world was first created",
					points: ["The days when the world was first created."],
				},
				saved: {
					title: "Save date",
					summary: "Last save execution time",
					points: ["The date and time the world was last saved."],
				},
				published: {
					title: "Release date",
					summary: "Time of last public execution",
					points: ["World was last published days."],
				},
			},
		},
		autosaveing: {
			title: "automatic saving",
			summary: "Enable/Disable auto save function",
			points: ["Indicates whether the auto save function is enabled.", "The developer cannot change this content."],
		},
	},
	options: {
		label: "development",
	},
};

export const design: Type.Design = {
	title: "design",
	summary: "Configure the appearance of the world, including colors and fonts",
	points: ["This configures the display of worlds.", "Regarding the overall design of the world, if there are individual configurations for each element, they will take precedence."],
	children: {
		mainColor: {
			title: "predominant color",
			summary: "Major Colors of the World",
			points: ["Used as bar color.", "The opposite color of this is used for the bar shadows."],
		},
		subColor: {
			title: "supplementary color",
			summary: "Auxiliary background and text colors",
			points: ["These colors are used as the background and text colors.", "Shades close to the main color will blend in."],
		},
		background: {
			title: "background image",
			summary: "Background image for the entire game",
			points: ["Configure the game background image.", "If nothing is configured for the image, the background will be a gradient based on the auxiliary color."],
		},
	},
	options: {
		label: "design",
	},
};

export const general: Type.General = {
	title: "general",
	summary: "Basic game settings such as language, level settings, etc.",
	children: {
		language: {
			title: "Language",
			summary: "Language at the time of creation of the world",
			points: ["Configure the language to be used in this world editor.", "This is the first language displayed when the user starts the game."],
		},
		translations: {
			title: "translation",
			summary: "Do you have multilingual translations available?",
			points: ["If enabled, users can play in any language.", "If disabled, you can play only in the language selected in the language config.", "Necessary to prepare translation data for each language if translation is to be enabled."],
			links: { translation: "translation" },
		},
		offlineMaxHours: {
			title: "Max. offline time [hours]",
			summary: "Time limits for offline progress",
			points: ["Configure the max number of hours of progress when offline.", "For example, if 6 hours is set, the process of coming back offline up to 6 hours will be processed, but if more time is allowed to come back offline, the offline time will be treated as 6 hours.", "If the time is set to 0 hours, no process processing will be done at all when returning offline.", "The max value is 24 hours."],
			links: { category: "category" },
		},
		maxCategoryLevels: {
			title: "Maximum level of Category",
			summary: "Levels up in each Category",
			points: ["Configure the max level for each Category.", "If experience is acquired beyond this level, the max level configured here is used in the calculation of each property.", "This value has no relationships in categories with no levels."],
			links: { category: "category" },
		},
		locking: {
			title: "locked function",
			summary: "Hide items until requirements are met",
			points: ["If enabled, the Category, Action, or Item will be hidden while it has never been used or possessed and the REQUIREMENTS are not met.", "If disabled, all items are displayed from the beginning, but cannot be executed or equipped until requirements are met."],
			links: { category: "category", action: "action", item: "item" },
		},
		coins: {
			title: "currency",
			summary: "Configuring the In-Game Currency (Coins)",
			points: [
				"Configure the in-game currency.",
				"You can define multiple currencies and configure each one with its own information (ID, name, icon, color, etc.).",
				"Currency is used to buy and sell items and to expand inventory capacity.",
				"The first currency is treated as the primary currency and is used when there is nothing specified for the currency ID (`coinId`) for an Item or capacity.",
			],
			links: { information: "information", item: "item" },
		},
		capacity: {
			title: "capacity",
			summary: "Configure inventory capacity",
			points: ["Controls the maximum count of the types of Items a player can have.", "The number of each Item is controlled by the count of the type of Item you own, not by the number of Items you own.", "If `initialCount` is set to 0, the capacity is unlimited.", "Use the ID configured here when referring to capacity items in conditions or rewards."],
			children: {
				information: information,
				initialCount: {
					title: "Default value [pcs].",
					summary: "Initial inventory capacity (the number of different types of Items you can have)",
					points: ["This is the initial capacity (the number of different types of Items you can have) at the start of the game.", "If `0` is set, the capacity is unlimited."],
				},
				initialCost: {
					title: "Base price [coins].",
					summary: "Initial price to increase capacity by one",
					points: ["The base price (in coins) to increase inventory capacity by one slot.", "The actual price is calculated as \"Base Price x Percentage Increase ^ Number of Purchases Already Made\".", "Example: If the base price is 100 and the rate of increase is 1.2, the first coin will be 100 coins, the second 120 coins, and the third 144 coins."],
				},
				increasingRate: {
					title: "Percentage increase [times].",
					summary: "Percentage increase in capacity expansion costs",
					points: ["It is a multiplier for how much the cost of capacity expansion increases with the nth buy.", "For `1.0` the price is always the same, for `1.2` the price is 20% higher each time you buy.", "Formula: Base Price × Percentage Increase ^ Number of Purchases"],
					list: [
						["rate of increase", "1st addition", "Fifth increase", "Tenth increase", "100th increase", "1000th increase"],
						["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
						["1.05", "x1.00", "x1.22", "x1.63", "x131.50", "x1.7×10²⁰"],
						["1.10", "x1.00", "x1.61", "x2.59", "x1.4×10⁴", "x2.7×10⁴¹"],
						["1.20", "x1.00", "x2.49", "x6.19", "x8.3×10⁷", "x8.3×10⁷⁹"],
						["1.50", "x1.00", "x5.06", "x57.67", "x1.9×10¹⁷", "x7.0×10¹⁷⁶"],
					],
				},
				coinId: {
					title: "Currency ID",
					summary: "ID of the currency used for capacity expansion",
					points: ["Specify the ID of the currency (coins) to be used for inventory capacity expansion.", "If left blank, the main currency (the first one listed under \"coins\") will be used."],
				},
				buyingLimit: {
					title: "Purchase Limit [Times]",
					summary: "Maximum number of times you can buy storage",
					points: ["This is the maximum number of times you can buy storage capacity using currency.", "If you set it to `0`, you can buy unlimited things.", "If you set it to `-1`, you will no longer be able to buy.", "Capacity increases resulting from rewards are not subject to this limit."],
				},
			},
			links: { item: "item" },
		},
		queue: {
			title: "Queue",
			summary: "Configuring the Number of Slots for Consecutive Actions (Scheduling)",
			points: [
				"Manages the count of slots available for executing actions in sequence (scheduling).",
				"In addition to buying slots with currency, just like storage capacity, you can also increase the number of slots by selecting specific Items from the queue as rewards for actions and events.",
				"When referencing items in the queue based on conditions or rewards, use the ID configured here.",
			],
			children: {
				information: information,
				initialCount: {
					title: "Default value [pcs].",
					summary: "Number of consecutive runs at the start of the game",
					points: ["This is the number of reservation slots available at the start of the game.", "The minimum value is `1` (there is no `0` = unlimited option, as with capacity)."],
				},
				initialCost: {
					title: "Base price [coins].",
					summary: "Initial price to add one slot",
					points: ["This is the base price (in coins) to add one slot for consecutive runs.", "The actual price is calculated as \"Base Price x Percentage Increase ^ Number of Purchases Already Made\".", "Example: If the base price is 100 and the rate of increase is 1.2, the first coin will be 100 coins, the second 120 coins, and the third 144 coins."],
				},
				increasingRate: {
					title: "Percentage increase [times].",
					summary: "Rate of increase in frame expansion costs",
					points: ["This is the multiplier that indicates how much the cost of expanding the slot increases with the nth buy.", "For `1.0` the price is always the same, for `1.2` the price is 20% higher each time you buy.", "Formula: Base Price × Percentage Increase ^ Number of Purchases"],
				},
				coinId: {
					title: "Currency ID",
					summary: "Currency ID used for expanding the limit",
					points: ["Specify the ID of the currency (coins) to be used for the price of extending the continuous execution window.", "If left blank, the main currency (the first one listed under \"coins\") will be used."],
				},
				buyingLimit: {
					title: "Purchase Limit [Times]",
					summary: "Maximum number of times you can buy a slot",
					points: ["This is the maximum number of times you can buy a slot for consecutive runs using currency.", "If you set it to `0`, you can buy unlimited things.", "If you set it to `-1`, you will no longer be able to buy.", "Increases in the quota resulting from compensation are not subject to this cap."],
				},
			},
			links: { item: "item" },
		},
		levelCommonRatio: {
			title: "Rate of increase in experience [times].",
			summary: "Percentage increase in level difficulty",
			points: ["As the level of a Category increases, the rate of increase in the Necessary experience value to get to the next level.", "Increasing this value increases the difficulty.", "The experience necessary to reach the next level is (experience point gain rate)^(current level - 1)."],
			list: [
				["Rate of increase in experience value", "Lv.1", "Lv.2", "Lv.10", "Lv.50", "Lv.99"],
				["0", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
				["0.02", "x1.00", "x1.02", "x1.22", "x2.69", "x5.52"],
				["0.05", "x1.00", "x1.05", "x1.55", "x11.47", "x131.50"],
				["0.10", "x1.00", "x1.10", "x2.36", "x117.39", "x5.7×10⁴"],
				["0.20", "x1.00", "x1.20", "x6.19", "x3.3 x 10³", "x1.3×10¹¹¹"],
			],
			links: { category: "category" },
		},
		actionLevelLimit: {
			title: "Action Level Limits",
			summary: "Requests the number of times the same attribute action has been executed to execute the action",
			points: ["If enabled, the number of times an action with the same attribute has been executed is automatically added to the execution condition of each Action.", "The Necessary count is equal to the level value of the Action.", "If the attribute is nothing configured, the ID of the category to which it belongs is used."],
		},
		defaultCombat: { ...combat, summary: "Default combat parameters common to all Actions", points: ["The basic combat correction values that apply to all `stamina` type actions in common.", "The combat value (property) of each Action is added to this default value."], links: { action: "action" } },
	},
	options: {
		label: "general",
	},
};

export const overview: Type.Overview = {
	title: "overview",
	summary: "Basic information about the world and its author",
	points: ["This section describes the contents of the world.", "Please configure it so that it is easy for users to understand when selecting a world.", "These configurations do not affect the operation of the world."],
	children: {
		information: information,
		version: {
			title: "version",
			summary: "Version number of the world",
			points: ["Enter any number (integer or decimal).", "In general, the integer portion represents the major version and the minority portion the minor version."],
		},
		author: {
			title: "Author Name",
			summary: "World author's name",
			points: ["Please enter your handle or nickname."],
		},
		homepage: {
			title: "homepage",
			summary: "Author's website URL",
			points: ["If you have your own homepage or social networking site, please enter its URL.", "Players can check this URL by means of a link.", "If nothing applies, leave blank."],
		},
		url: {
			title: "uniform resouce locator",
			summary: "Game URL",
			points: ["Enter the URL where you would like to place the game for this world.", "Enter the URL of the Top page, such as index.html, including the domain.", "If the appropriate URL is provided, it will act as a PWA.", "A PWA is a feature that works like an app that can be installed and played offline."],
		},
		estimatedPlayingTime: {
			title: "Estimated playing time",
			summary: "Estimated time to complete world play",
			points: ["The estimated play time Necessary to complete the world play.", "Players can check it as a guide when playing.", "This is only a reference time and there is no clear definition of what constitutes the completion of a world."],
			children: {
				value: {
					title: "value",
					summary: "Play time counts",
				},
				unit: {
					title: "unit",
					summary: "Unit of time (hours, minutes, etc.)",
				},
			},
		},
	},
	options: {
		label: "overview",
	},
};

export const basic: Type.Basic = {
	title: "Basic Configuration",
	summary: "Basic configurations for the world in general",
	points: ["Configure the world's name, description, background, currency, capacity, max level of categories, experience increase rate, discount rate, standard combat parameters, etc.", "These configurations affect the entire world."],
	list: expandList("name", [overview, general, design, development]),
	children: {
		overview: overview,
		general: general,
		design: design,
		development: development,
	},
	options: {
		label: "basic",
		linkedList: true,
	},
};

// world


export const world: Type.World = {
	title: "world",
	summary: "Configuration and data structure of the entire game world",
	points: ["Data for games that can be played up on consoles.", "You can create an abandonment game as you wish by configuring it.", "Worlds encompass elements such as Categories, Actions, Items, and Events."],
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
		label: "world",
	},
};

// editor

export const editor: Markdown = {
	title: "editor",
	summary: "Explanation of how to use the editor and the structure of the world",
	list: expandList("name", [world, basic, type, component, miscellaneous]),
	options: {
		label: "editor",
		linkedList: true,
		directory: "editor",
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
