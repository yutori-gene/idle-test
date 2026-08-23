import * as Type from "~d/type/descriptionType";
import { Markdown, Tree, expandList } from "~d/type/markdownType";

// quate

const typeTree = `
world
├── category
├── action
├── item
├── skill
├── group
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
							points: ["Example prompt: Translate the values of `name` and `explanation` in the uploaded JSON data from English into Japanese. Do not change any other part."],
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
	list: expandList("supplement", [translation], "Description"),
	options: {
		label: "miscellaneous",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "properties",
	summary: "Configuring the Effects of an Item",
	points: ["This is an item of effects that can be configured for an Item.", "Items whose equipment type is `necessary` or `consumable` apply their effect only while equipped. `unnecessary` applies its effect just by being held, and the size of the effect is proportional to the number held (twice as much if you hold 2).", "Since the effect of `unnecessary` is based on the number of items you have—which directly determines the multiplier—`maximum` (the maximum number of items you can hold) serves as the upper limit for this effect. When balancing the game, please configure this setting in conjunction with `maximum`.", "The value of any of these items is calculated as an Adjustment for the difference in level between the player's level and the Action's level.", "For example, if the attack value is 10, the attack is calculated as if the player's level is 10 higher than the Action's level. Minus values are the opposite.", "attack, defence, accuracy, evasion and restore are effective only for actions of the `stamina` type."],
	list: [
		["properties", "Details of Effects"],
		["speed", "Reduces the time required for an Action. The time required changes inversely proportional to the level difference (the ratio takes half effect)."],
		["chance", "Changes the probability of success of an Action. The ratio applies to the proportion between success and failure, so it never exceeds `100`%."],
		["experience", "Varies the experience value acquired. It increases in proportion to the difference in levels (the calculation is reversed: the higher the level Action, the more is gained)."],
		["attack", "Changes the stamina damage dealt to the opponent. (only for stamina actions)"],
		["defence", "Reduces stamina damage taken from opponents (the ratio takes half effect). (stamina Action only)"],
		["accuracy", "Decreases the miss rate of attacks. (stamina Action only)"],
		["evasion", "Changes the evasion rate of an opponent's attack (the ratio takes half effect). (stamina Action only)"],
		["restore", "Changes the amount of stamina restored at the end of an Action. The closer it gets to a full recovery, the more gradual the increase becomes. (stamina Action only)"],
	],
	children: {
		category: {
			title: "カテゴリ",
			summary: "プロパティを適用するカテゴリの指定",
			points: ["このプロパティを適用するカテゴリのIDを設定します。", "`*`を設定すると全カテゴリに適用されます。", "空欄の場合はアイテムが属するカテゴリに適用されます。"],
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
			points: ["The evasion rate is calculated as if the player's level were this value higher than the Action's level. The higher this value, the easier it is to evade the opponent's attacks."],
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
	points: ["These correction values are effective only for actions of the `stamina` type.", "Each value is calculated as an additional correction to the level difference between the player and the Action.", "For example, if the attack value is 10, the attack damage is calculated as if the player's level is 10 higher than the Action's level. If it is Minus, the correction is in the opposite direction.", "When configured in `defaultCombat` under General, they become the default combat parameters for the whole world."],
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
			points: ["The higher the value, the more stamina is restored.", "When set on the opponent's side (the Action's combat value and the opponent's skills), it works in reverse, and the player's restoration amount decreases by that value instead."],
		},
	},
	options: {
		label: "combat",
	},
};

export const acquisition: Type.Acquisition = {
	title: "acquisitions",
	summary: "アイテムやカテゴリレベルの取得設定",
	points: ["Configure the acquisition.", "アイテムの他にカテゴリのレベル、アクションの実行した回数を変更できます。", "You can configure the probability of obtaining the product."],
	list: [
		["Type", "What you will acquire"],
		["カテゴリ", "level"],
		["Action.", "Number of times executed"],
		["Item", "number possessed"],
	],
	children: {
		type: {
			title: "Type",
			summary: "Type of element to be acquired",
			list: [
				["Type", "What is Acquisitions"],
				["カテゴリ", "Level (added in terms of experience value)"],
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
			points: ["Minus values configured will decrease the number of possessions, the number of times they have been performed, and their level. However, it will not go down to 0 or below.", "If an Item has a configured maximum ownership count (max), the number of possessions will not increase beyond that value.", "タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。"],
		},
		chance: {
			title: "Probability [-1 to 1]",
			summary: "Probability of success in acquisition (negative values are evaluated only in the event of failure)",
			points: ["Configure the drop probability as a decimal value between -1 and 1. The absolute value is used to determine the probability.", "When the value is positive it is evaluated only when the action succeeds: `1` always grants it, and `0.5` grants it with a 50% probability.", "When the value is negative it is evaluated only when the action fails: `-1` always grants it, and `-0.5` grants it with a 50% probability.", "If the value is `0`, it is not obtained in either a success or a failure scenario.", "The default value is `1` (always obtained upon success)."],
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
	points: ["カテゴリ、アクション、アイテムごとの各要素に設定する条件です。", "If all configured conditions are not met, the operations shown in the table cannot be performed.", "If the locked feature is enabled, the element itself will be hidden until the condition is met."],
	list: [
		["Configuration", "Nothing can be done without meeting the conditions."],
		["カテゴリ", "カテゴリ内の全てのアクションの実行とアイテムの操作"],
		["Action.", "Execution of Action"],
		["Item", "Manipulation of Items (e.g., Equipment)"],
	],
	children: {
		type: {
			title: "Type",
			summary: "Type of element referenced as a condition",
			list: [
				["Type", "Referenced value"],
				["カテゴリ", "カテゴリのレベル"],
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
			points: ["The probability that an Item will be consumed when the condition is met and the Action is performed.", "`1` always consumes, `0.5` consumes with a 50% probability, and `0` does not consume.", "The default value is `1` (always consumes).", "Invalid if Type is other than Item."],
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
	points: ["ワールド内の各要素（カテゴリ、アクション、アイテム、イベントなど）に共通する基本情報の項目です。", "Each element is configured separately."],
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
							points: ["If the ID is `stylish-strong-axe`, the name becomes `Stylish Strong Axe`."],
						},
					},
				},
				noDuplicate: {
					title: "Nothing to duplicate.",
					summary: "Prohibit duplicate IDs within the same Type",
					points: ["要素の判別に用いられるため、カテゴリ、アクション、アイテム、イベント、プリセットの各タイプ内で重複しないでください。", "There is no problem to have the same ID on different Types."],
					links: { type: "type" },
				},
			},
		},
		name: {
			title: "Name",
			summary: "The name under which the element appears",
			points: ["The name of the element displayed in the game.", "Languages other than English can also be entered.", "Names that duplicate other elements are acceptable.", "If it is too long, the overflowing part is omitted with `…` in the display during play."],
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
							title: "File type",
							summary: "Supported image file formats",
							points: ["Common formats that browsers can display are available.", "JPEG, PNG, GIF, WebP, SVG and so on."],
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
							points: ["Search `Iconify` for icons that can be displayed.", "You can quickly find the best icons by searching for icons.", "When you select an icon, you will see its identifier such as `game-icons:sword-wound` (type of icon set `:`name of icon), which you can paste directly into this icon's field."],
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
			title: "Color",
			summary: "Configure the display color of the element",
			points: ["As the element's color, it is applied to the element's icon and background color.", "Select from the editor's color picker."],
			children: {
				"heritage-from-parent": {
					title: "Inheritance from the parent element",
					summary: "Taking over the color configured on the parent element",
					points: ["If left blank, the color configured on the parent element is inherited.", "The hierarchy of each element type is as follows.", "例えば、アクションに個別の色が設定されている場合はそれが利用されますが、アクションに個別の色が設定されていない場合はカテゴリ又はワールドの色が使用されます。", "イベントもカテゴリを設定している場合は、アクションやアイテムと同じようにそのカテゴリの色を引き継ぎます。"],
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
	list: expandList("component", [information, requirement, acquisition, combat, property], "Description"),
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
	points: ["Replaces UI text and icons that are pre-loaded into the game engine (player).", "Only those that match an existing preset by ID will be replaced.", "Only the configured items will be replaced. For example, if you configure only an icon, the other items, such as name and color, will be replaced with the original.", "Overrides to names and descriptions take precedence over the translations for each language built into the player. The overridden strings will be displayed as-is in all languages.", "If you want to change the text for each language, enable translation and specify the text in the `translations/world` translation file that is generated. That file takes precedence over all others."],
	options: {
		label: "preset",
	},
};

export const task: Type.Event = {
	title: "Task",
	summary: "Missions that are completed when certain conditions are met",
	points: ["When the configured conditions are met, the goal is achieved, and a message appears at the top of the screen.", "プレイヤーのミッションの一覧と、カテゴリのタスクの一覧に表示されます。", "Rewards are not awarded automatically. Players receive them when they open a task and tap the \"Claim\" button.", "Until you receive the reward, a ribbon will appear on the list bar to indicate that it is still unclaimed.", "獲得でカテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。", "初回起動時やゲームオーバー時など、条件以外のタイミングで発動させたいものは固定イベント（unique）で設定します。"],
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "カテゴリ",
			summary: "タスクが所属するカテゴリのID",
			points: ["このタスクを所属させるカテゴリのIDを指定します。", "設定すると、プレイヤーのカテゴリの画面にタスクの一覧が追加され、ミッションの一覧でもカテゴリごとにまとめて表示されます。", "空欄の場合はどのカテゴリにも属さず、ミッションの一覧の先頭にまとめて表示されます。"],
		},
		timing: {
			title: "timing",
			summary: "タスク発動のタイミング（`tasked`固定）",
			points: ["タスクは`tasked`（設定した条件を満たした時）で固定されており、編集できません。", "You can receive the reward only once, and once you receive it, the achievement status will remain unchanged.", "それ以外の決まったタイミングで発動させたいものは、固定イベント（unique）で設定します。"],
			links: { unique: "unique" },
		},
		unlocked: {
			title: "Initial Display State",
			summary: "Initial display state of the task icon (whether it is marked as completed depends on certain conditions; with this config, it will not be marked as completed)",
			points: ["タスクの達成条件はrequirementsで決まり、この項目は一覧アイコンの見た目のみに影響します。", "secreted: 全requirementsを満たすまでタスクの一覧に一切表示されません（達成自体は条件で起こります）。", "hidden・hinted: アイコンに斜線が付き未解放として表示されます。", "released: 斜線が消え解放済みとして表示されます。", "一度達成したタスクは一覧から消えず、その後に条件を満たさなくなっても達成のまま表示されます。"],
		},
		requirements: {
			title: "terms",
			summary: "Conditions for Completing a Task",
			points: ["タスクを達成させる条件です。", "この条件を満たすと達成になり、報酬を受け取れるようになります。", "一度達成すると、その後に条件を満たさなくなっても達成のままで、報酬もいつでも受け取れます。", "条件を設定していないタスクは達成しません。", "requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。"],
			children: requirement.children,
		},
		requiringGroup: {
			title: "Group Aggregation",
			summary: "Treat the condition's id as a group ID and judge by the total of its members",
			points: ["When enabled, the id set in the condition (requirements) is treated as the ID of a group from the basic settings.", "A condition whose Type is Category is judged by the total Level of all Categories belonging to that group.", "A condition whose Type is Action is judged by the total number of times all Actions belonging to that group have been executed.", "A condition whose Type is Item is judged by the total number of all Items belonging to that group in your possession.", "Locked (non-released) elements are not included in the total.", "The Item's consumption probability (chance) and equipment condition (equipment) are ignored, and nothing is consumed. They are used for judgment only.", "When disabled, the id in the condition is treated as before, as the ID of an individual Category, Action, or Item."],
		},
		acquisitions: {
			title: "reward",
			summary: "Configuring Rewards for Completed Tasks",
			points: ["達成したタスクを開き、獲得のバーを押した時に受け取れる報酬です。", "カテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。", "数量にマイナスを設定することもできます。", "報酬を設定していないタスクは獲得のバーが出ず、達成した時点で完了になります。", "持てるアイテムの種類が上限に達している時は受け取れません。整理してから受け取り直します。"],
			children: acquisition.children,
		},
		group: {
			title: "task group",
			summary: "Task Display Group Categories",
			points: ["Apply one of the groups configured in Basic.", "The list of tasks is displayed in the order of the groups you have configured.", "カテゴリの中でさらにグループごとに分けて表示されます。", "If left blank, no minutes will be grouped."],
			links: { general: "general" },
		},
	},
	options: {
		label: "task",
	},
};

// 構造はtaskと同じで、timingだけchanged固定。プレイヤーの画面には一切表示されない内部処理用のイベント
export const changed: Type.Event = {
	title: "変化イベント",
	summary: "カテゴリ・アクション・アイテムの数量が一度に条件量以上増えた時に発動する内部処理用イベント",
	points: [
		"アクションの完了、購入・売却、宝箱の開封など、数量が変化するあらゆるタイミングでチェックされます。",
		"条件（requirements）は所持数などの絶対値ではなく、そのタイミング1回分の増加量で判定します。複数回に分けた小さな増加は合算されません。",
		"複数の条件を設定した場合、その1回の変化ですべての条件を同時に満たす必要があります。",
		"条件を満たすたびに報酬を受け取り、何度でも繰り返し発動します。タスクと違って一度きりではありません。",
		"プレイヤーの画面には一切表示されません。ミッションの一覧にも出ず、達成のメッセージも出ません。",
	],
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "カテゴリ",
			summary: "変化イベントが所属するカテゴリのID（画面に表示されないため分類のみに使われます）",
			points: ["プレイヤーの画面には表示されないため、この設定は見た目に影響しません。"],
		},
		timing: {
			title: "タイミング",
			summary: "変化イベント発動のタイミング（`changed`固定）",
			points: ["`changed`で固定されており、編集できません。", "数量が変化するあらゆるタイミングでチェックされ、条件を満たすたびに繰り返し発動します。"],
		},
		unlocked: {
			title: "初期表示状態",
			summary: "画面に表示されないため実質的に影響しません",
			points: ["変化イベントはプレイヤーの画面に表示されないため、この設定は使われません。"],
		},
		requirements: {
			title: "条件",
			summary: "変化イベント発動の条件（数量の増加量で判定）",
			points: [
				"設定した数だけ、そのタイミング1回で増えていれば条件を満たします。所持数などの絶対値は見ません。",
				"例えばアイテムの条件を3に設定した場合、その1回でそのアイテムが3個以上増えていれば満たされます。",
				"減少は増加条件には数えません。",
				"複数の条件を設定した場合、その1回の変化ですべてを同時に満たす必要があります。",
				"条件を設定していない変化イベントは発動しません。",
				"requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。",
			],
			children: requirement.children,
		},
		requiringGroup: {
			title: "グループ集計",
			summary: "条件のidをグループIDとして扱い、所属する要素の増加量の合計で判定する",
			points: ["有効にすると、条件（requirements）に設定したidは基本設定のグループのIDとして扱われます。", "そのグループに属する全カテゴリ・全アクション・全アイテムの増加量を合計して判定します。", "無効の場合は今まで通り、条件のidは個別のカテゴリ・アクション・アイテムのIDとして扱われます。"],
		},
		acquisitions: {
			title: "報酬",
			summary: "変化イベント発動時の報酬設定",
			points: ["条件を満たすたびに自動で受け取ります。プレイヤーの操作は不要です。", "カテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。", "数量にマイナスを設定することもできます。"],
			children: acquisition.children,
		},
		group: {
			title: "変化イベントグループ",
			summary: "内部管理用の表示グループ分類（画面に表示されないため実質未使用）",
			points: ["変化イベントはプレイヤーの画面に表示されないため、この設定は見た目に影響しません。"],
		},
	},
	options: {
		label: "changed",
	},
};

export const group: Type.Information = {
	...information,
	title: "group (usu. of people)",
	summary: "カテゴリ、アクション、アイテムの表示グループを定義",
	points: ["Define groups to control the order of display.", "各カテゴリ、アクション、アイテムでここで定義したグループを設定できます。", "Groups that are the same are displayed close together.", "If left blank, no minutes will be grouped."],
	options: {
		label: "group",
	},
};

export const skill: Type.Skill = {
	title: "Skill",
	summary: "To be written",
	points: ["To be written"],
	children: {
		information: information,
		chance: {
			title: "Activation probability [0-1]",
			summary: "To be written",
			points: ["To be written"],
		},
		property: {
			...combat,
			summary: "Combat value added on the turn it activates",
			points: ["Only on the turn this skill activates, this combat value is added as a correction for the level difference.", "Restoration values are an exception: instead of taking effect on that turn, they are combined and take effect in the restoration after the outcome is decided. Among the restoration values of skills that activated during the Action, the largest one is added to the restoration amount if it is the player's own skill, and subtracted from it if it is the opponent's skill."],
		},
		comment: {
			title: "Explanation display",
			summary: "Whether to show the explanatory note as a toast on activation",
			points: ["A flag for whether the explanatory note is shown as a toast when this skill activates.", "When on, it is shown each time the skill activates, with a probability of (100% − activation probability) ÷ 2. An activation probability of 40% gives 30%.", "When off, it is not shown.", "If the explanatory note is blank, nothing is shown even when this is on."],
		},
	},
	options: {
		label: "skill",
	},
};

export const item: Type.Item = {
	title: "Item",
	summary: "Material elements such as Equipment and Consumables",
	points: ["These are elements related to owning things such as Equipment, Consumables, and Valuables.", "カテゴリ内で１つのみ装備することもできますが、装備できないようにもできます。", "There are also ways to use it like a variable."],
	children: {
		information: information,
		category: {
			title: "カテゴリ",
			summary: "アイテムが所属するカテゴリのID",
			points: ["このアイテムが所属するカテゴリのIDを指定します。"],
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
			points: ["装備可能なアイテムは、カテゴリの`equipmentGroups`で指定されたグループに属している必要があります。", "Only one Item may be Equipment within the same group.", "`unnecessary` takes effect regardless of whether it is equipped, and the size of the effect is proportional to the number held (no effect with 0, n times with n)."],
			list: [
				["value", "Equipment", "Effectiveness", "consumption", "Example"],
				["`necessary`", "Necessary", "Only during equipping (1 unit)", "nothing", "Equipment such as swords and armor"],
				["`consumable`", "Necessary", "Only during equipping (1 unit)", "Consumed when Action is executed", "Items that are consumed for effect, such as potions"],
				["`unnecessary`", "Unnecessary", "While in your inventory, it is always active (proportional to the number you have)", "nothing", "Passive Items that are effective just by having them."],
				["`impossible`", "not allowed", "nothing", "nothing", "Items that have no effect, such as materials and debris"],
			],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Necessary Requirements to Use Item" },
		properties: { ...property, options: { ...property.options, array: true }, summary: "Effects of Properties of Item" },
		coinId: { title: "Trading Currency ID", summary: "The ID of the currency used to buy and sell this item", points: ["Specify the ID of the currency (coins) used for both buy and sell values.", "If left blank, the main currency (the first one listed under \"coins\") will be used."] },
		// スキルの実体ではなくワールド直下のskillsのID参照なので、スキル自身の項目は持たせない
		skill: { title: skill.title, summary: "To be written", points: ["To be written"], options: { label: "skill" } },
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
			title: "カテゴリ",
			summary: "アクションが所属するカテゴリのID",
			points: ["このアクションが所属するカテゴリのIDを指定します。"],
		},
		attribute: {
			title: "attribute",
			summary: "アクション固有の属性カテゴリ",
			points: ["個別の属性(カテゴリ)を設定できます。", "空欄の場合は属するカテゴリを引き継ぎます", "例えば、魔王城というカテゴリに属するアクションに個別に魔法という属性を設定した場合、アクション完了時間やダメージには魔法のカテゴリのレベルやプロパティが計算され適応されます。"],
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
			points: ["Necessary standard time (in seconds) to perform an Action once.", "For the `stamina` type this is the time interval of one turn (each side's stamina is reduced once).", "Actual execution will vary due to property calculations."],
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
			points: ["The probability of success upon completion of the Action.", "With `1` it always succeeds, and with `0` it always fails.", "In the event of failure, consumable items are consumed, but no reward or experience value is gained.", "Actual execution will vary due to property calculations."],
		},
		maximum: {
			title: "Max. number of executions [times].",
			summary: "The maximum number of times an Action can be completed",
			points: ["The maximum number of times an Action can be completed successfully.", "`0` means unlimited.", "When the limit is reached, the Action becomes unexecutable."],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Reward for obtaining a successful Action" },
		progressType: {
			title: "Progression Type",
			summary: "Action Execution Type",
			points: ["There are four types."],
			list: [
				["Type", "What it does", "stamina", "Example"],
				["`persistent`", "Type in which the Action is repeated continuously, earning experience and rewards for each completion.", "Nothing.", "Logging, mining, fishing"],
				["`single`", "Perform one Action. If interrupted, the progress is saved and the user can resume the next time. When completed, the user presses the Confirm Action to receive the results.", "Nothing.", "Opening treasure chests, learning skills through reading"],
				["`snap`", "Type in which the Action is performed instantly. It is completed immediately without any time lapse.", "Nothing.", "Bartering, Use of Items"],
				["`stamina`", "Each required time decreases the respective stamina of the player and the opponent. When the opponent's stamina is depleted, the player gains experience and rewards. When the player's stamina is depleted, the game is gameovered and all ongoing actions are canceled.", "Relevant.", "Combat, hazardous operations"],
			],
		},
		property: combat,
		// スキルの実体ではなくワールド直下のskillsのID参照の一覧
		skills: { title: skill.title, summary: "To be written", points: ["To be written"], options: { label: "skill", array: true } },
	},
	options: {
		label: "action",
	},
};

export const category: Type.Category = {
	title: "カテゴリ",
	summary: "A general framework for categorizing Actions and Items",
	points: ["Represents a large classification.", "For example, it can be configured in any frame of mind, such as short range, long range, magic, dungeons, blacksmiths, and manufactories.", "アクションやアイテムはワールド直下に配置され、カテゴリIDで関連付けられます。"],
	children: {
		information: information,
		group: {
			title: "group (usu. of people)",
			summary: "カテゴリの表示グループ分類",
			points: ["Apply one of the groups configured in Basic.", "設定したグループ順にカテゴリ一覧が表示されます。"],
			links: { general: "general" },
		},
		unlocked: {
			title: "Initial Unlocked State",
			summary: "Initial Display and Release States of Elements (Automatically advance to a higher state when activation conditions are met)",
			points: ["secreted: Will not appear on the UI at all until all requirements are met (it will not appear in Hints, and will be hidden in the list of requirements and rewards).", "hidden: Remains completely hidden (with its name grayed out and unavailable for interaction) as long as it is not referenced by any unlocking elements and does not meet any requirements.", "hinted (default): Only the name is displayed as a preview, but you cannot interact with it until it is unlocked.", "released: The item is released and available for use from the start, regardless of conditions (formerly \"Display from the Start\")."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "カテゴリ利用に必要な条件" },
		equipmentGroups: {
			title: "Equipment Groups",
			summary: "このカテゴリで装備可能なアイテムグループの指定",
			points: ["このカテゴリで装備できるアイテムのグループ名のリストです。", "You can only equip items from the group that matches the group name you specify here.", "If an empty string is specified, an item with an unconfigured (empty) group will be targeted for Equipment.", "Only one Item can be equipped in the same group. When you equip a new Item, any existing Equipment in the same group will automatically be unequipped.", "If you set the list to empty (0 pieces), you cannot equip anything."],
			links: { general: "general" },
		},
		numeric: {
			title: "Level Availability",
			summary: "カテゴリレベル機能の有無",
			points: ["このカテゴリがレベルを持つかどうかのフラグです。", "If on, it has a level; if off, it does not.", "例として、剣技や魔法といった経験に基づくカテゴリはオンにし、ダンジョンや鍛冶屋といった場所のカテゴリはオフにするなどの使い方があります。"],
		},
		standaloneProgress: {
			title: "simultaneous progress",
			summary: "他カテゴリとの並行実行設定",
			points: ["このカテゴリのアクションが、他のカテゴリのアクションと並行して進行できるかどうかのフラグです。", "オンの場合は、他のカテゴリのアクションとは独立して同時に進行できます。", "オフの場合は、同じくオフに設定された他のカテゴリのアクションと同時に実行できません。新たにこのカテゴリのアクションを開始すると、他の非スタンドアロンカテゴリで進行中のアクションは自動的に中止されます。"],
		},
		background: {
			title: "background",
			summary: "カテゴリ固有の背景設定",
			points: ["このカテゴリの背景を設定します。", "カテゴリを選択されたときに、連動して背景画像が変更されます。", "If nothing is configured, the world background setting is used as is."],
		},
	},
	options: {
		label: "category",
	},
};

export const type: Markdown = {
	title: "Type",
	summary: "Basic Classification of Worlds",
	points: ["ワールドは6つのタイプで構成されます。", "All elements are placed directly down in world.", "アクションとアイテムは所属するカテゴリのIDで関連付けられます。"],
	list: expandList("Type", [category, action, item, skill, group, preset], "Description"),
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
		barColor: {
			title: "Bar Color",
			summary: "The background color of the bar",
			points: ["It is used as the background color for the bar.", "Since this color serves as the background for the entire screen, the colors of the selected row and the scroll bar are also derived from it."],
		},
		textColor: {
			title: "Text Color",
			summary: "Text and Background Colors",
			points: ["It is used as the text color.", "If nothing is configured for a background image, a gradient based on this color will be used as the background.", "Making the contrast between the bar color and the background color more pronounced makes the text easier to read."],
		},
		shadowColor: {
			title: "Shadow Color",
			summary: "The Color of the Bar's Shadow",
			points: ["It is used as the color of the shadows cast on the bars and headers.", "If you choose a color darker than the bar color, it will create a natural shadow."],
		},
		background: {
			title: "background image",
			summary: "Background image for the entire game",
			points: ["Configure the game background image.", "If nothing is configured for an image, the background will be a gradient based on the text color."],
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
			title: "カテゴリの最大レベル",
			summary: "各カテゴリのレベル上限",
			points: ["各カテゴリの最大レベルを設定します。", "If experience is acquired beyond this level, the max level configured here is used in the calculation of each property.", "レベルのないカテゴリではこの値は関係ありません。"],
			links: { category: "category" },
		},
		locking: {
			title: "locked function",
			summary: "Hide items until requirements are met",
			points: ["有効の場合、カテゴリ・アクション・アイテムは一度も使用・所持したことがなく、かつrequirementsを満たしていない間は非表示になります。", "If disabled, all items are displayed from the beginning, but cannot be executed or equipped until requirements are met."],
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
			points: ["Controls the maximum count of the types of Items a player can have.", "The number of each Item is controlled by the count of the type of Item you own, not by the number of Items you own.", "Setting `initialCount` to 0 makes the capacity unlimited.", "Use the ID configured here when referring to capacity items in conditions or rewards."],
			children: {
				information: information,
				initialCount: {
					title: "Default value [pcs].",
					summary: "Initial inventory capacity (the number of different types of Items you can have)",
					points: ["This is the initial capacity (the number of different types of Items you can have) at the start of the game.", "Setting it to `0` makes the capacity unlimited."],
				},
				initialCost: {
					title: "Base price [coins].",
					summary: "Initial price to increase capacity by one",
					points: ["The base price (in coins) to increase inventory capacity by one slot.", "The actual price is calculated as \"Base Price x Percentage Increase ^ Number of Purchases Already Made\".", "Example: If the base price is 100 and the rate of increase is 1.2, the first coin will be 100 coins, the second 120 coins, and the third 144 coins."],
				},
				increasingRate: {
					title: "Percentage increase [times].",
					summary: "Percentage increase in capacity expansion costs",
					points: ["It is a multiplier for how much the cost of capacity expansion increases with the nth buy.", "With `1.0` the price always stays the same, and with `1.2` it rises by 20% with every purchase.", "Formula: Base Price × Percentage Increase ^ Number of Purchases"],
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
			summary: "Configuring the Number of Queue Slots for Consecutive Actions",
			points: [
				"Manages the number of queue slots for executing actions in sequence.",
				"The queue includes the running action, and the action at its head is the one being executed. When there is only `1` slot, only the running action fits and nothing can wait.",
				"In addition to buying slots with currency, just like storage capacity, you can also increase the number of slots by selecting specific Items from the queue as rewards for actions and events.",
				"When referencing items in the queue based on conditions or rewards, use the ID configured here.",
			],
			children: {
				information: information,
				initialCount: {
					title: "Default value [pcs].",
					summary: "Number of consecutive runs at the start of the game",
					points: ["This is the number of queue slots available at the start of the game.", "The minimum value is `1` (the running action uses one slot, and there is no `0` = unlimited option, as with capacity)."],
				},
				initialCost: {
					title: "Base price [coins].",
					summary: "Initial price to add one slot",
					points: ["This is the base price (in coins) to add one slot for consecutive runs.", "The actual price is calculated as \"Base Price x Percentage Increase ^ Number of Purchases Already Made\".", "Example: If the base price is 100 and the rate of increase is 1.2, the first coin will be 100 coins, the second 120 coins, and the third 144 coins."],
				},
				increasingRate: {
					title: "Percentage increase [times].",
					summary: "Rate of increase in frame expansion costs",
					points: ["This is the multiplier that indicates how much the cost of expanding the slot increases with the nth buy.", "With `1.0` the price always stays the same, and with `1.2` it rises by 20% with every purchase.", "Formula: Base Price × Percentage Increase ^ Number of Purchases"],
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
			points: ["カテゴリのレベルが上がるにつれて、次のレベルになるのに必要な経験値の上昇率です。", "Increasing this value increases the difficulty.", "The experience necessary to reach the next level is (experience point gain rate)^(current level - 1)."],
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
			points: ["If enabled, the number of times an action with the same attribute has been executed is automatically added to the execution condition of each Action.", "The Necessary count is equal to the level value of the Action.", "属性が設定されていない場合は、所属するカテゴリのIDが使用されます。"],
		},
		propertyRatio: {
			title: "Property ratio [times]",
			summary: "How many times a property changes per 10 of level difference",
			points: [
				"Configures how many times each property changes every time the difference between the level of the category and the level of the action widens by `10`.",
				"The ratio is calculated as (property ratio)^(level difference ÷ 10). When the level difference is `0` the ratio is `1`, and the value configured in the action is used as it is.",
				"Attack and experience increase by this ratio, while defence (damage taken) and quickness (required time) decrease by the same ratio.",
				"Accuracy, evasion, probability of success and restoration are values that stay within `0` to `100`%, so the ratio applies to the proportion between the side that succeeds and the side that does not. `0`% and `100`% never change, and the values in between never exceed `100`%.",
				"Defence, evasion and quickness take half the effect of the ratio (a level difference of `20` equals a level difference of `10` for the other properties). Defence and evasion apply twice, to the rate of being hit and to the damage taken, and quickness applies to every other property as the number of executions, so their effect is weakened to keep the balance.",
				"A good guideline is (experience increase rate) to the power of `6.7`. Above that, levelling up accelerates as the level rises; below that, the later levels take more time.",
				"Setting it to `1` removes the influence of the level difference. The larger the value, the steeper the advantage and disadvantage caused by the level difference.",
			],
			list: [
				["Property ratio", "Level difference -20", "Level difference -10", "Level difference 0", "Level difference +10", "Level difference +20"],
				["`1`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`"],
				["`1.5`", "`x0.44`", "`x0.67`", "`x1.00`", "`x1.50`", "`x2.25`"],
				["`2`", "`x0.25`", "`x0.50`", "`x1.00`", "`x2.00`", "`x4.00`"],
				["`3`", "`x0.11`", "`x0.33`", "`x1.00`", "`x3.00`", "`x9.00`"],
			],
			links: { action: "action", property: "property" },
		},
		defaultCombat: { ...combat, summary: "Default combat parameters common to all Actions", points: ["These are the basic combat correction values applied in common to all actions of the `stamina` type.", "The combat value (property) of each Action is added to this default value."], links: { action: "action" } },
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

// タイミングごとの固定イベント。項目の説明はタスクと共通で、タイミング固有の説明だけ差し替える
const toUniqueEvent = (title: string, summary: string, points: string[], timingPoints: string[]): Type.Event => ({
	title,
	summary,
	points,
	children: {
		...task.children,
		category: {
			title: "カテゴリ",
			summary: "イベントでは使用しません",
			points: ["ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。", "エディターでは入力欄が表示されません。"],
		},
		timing: {
			title: "タイミング",
			summary: "イベントが発動するタイミング（固定）",
			points: timingPoints,
		},
		unlocked: {
			title: "初期表示状態",
			summary: "イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）",
			points: ["イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。", "secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。", "hidden・hinted: アイコンに斜線が付き未解放として表示されます。", "released: 斜線が消え解放済みとして表示されます。"],
		},
		requirements: {
			title: "条件",
			summary: "報酬を獲得する条件",
			points: ["タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。", "報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。", "条件を設定していない場合は、発動するたびに報酬を獲得します。", "requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。"],
			children: requirement.children,
		},
		acquisitions: {
			title: "報酬",
			summary: "イベント発動時の報酬設定",
			points: ["タイミングが成立し、かつ条件を満たしている時に得られる報酬です。", "タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。", "数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。"],
			children: acquisition.children,
		},
		group: {
			title: "タスクグループ",
			summary: "イベントでは使用しません",
			points: ["ミッションやタスクの一覧に表示されないため、グループの指定は使いません。", "エディターでは入力欄が表示されません。"],
		},
	},
});

export const unique: Type.Unique = {
	title: "固定イベント",
	summary: "決まったタイミングで発動するメッセージと報酬",
	points: ["ワールドを初めて開いた時やゲームオーバーになった時など、決まったタイミングで発動して専用の画面を開きます。", "タイミングごとに1つずつ用意されており、追加も削除もできません。使わないタイミングは空欄のままにします。", "ミッションやタスクの一覧には表示されません。条件を満たすと達成になるものはタスクで設定します。", "報酬は発動と同時に自動で獲得します。タスクのような受け取りの操作もリボンもありません。", "発動時にカテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。", "名前・説明・アイコンを空欄にすると、プレイヤーに内蔵されている既定の文言とアイコンが使われます。"],
	list: [
		["タイミング", "発動条件", "繰り返し"],
		["`comebacked`", "オフラインから1秒以上経過して復帰し、かつ進行中のアクションがあった時", "何度も"],
		["`gameovered`", "戦闘でプレイヤーのスタミナがなくなった時", "何度も"],
		["`welcomed`", "このワールドを初めて起動した時", "一度のみ"],
		["`completed`", "全カテゴリのレベルが最大値（maxCategoryLevels）に達した時", "一度のみ"],
		["`obtained`", "single種別のアクション（宝箱など）を完了・確認した時", "何度も"],
	],
	links: { task: "task" },
	children: {
		comebacked: toUniqueEvent("復帰時", "オフラインから復帰した時に発動", ["オフラインから1秒以上経過して復帰し、かつ進行中のアクションがあった時に発動します。", "離れているあいだの進行のまとめと一緒に表示されます。"], ["`comebacked`で固定されており、編集できません。", "復帰するたびに何度でも発動します。"]),
		gameovered: toUniqueEvent("ゲームオーバー時", "戦闘でスタミナがなくなった時に発動", ["戦闘でプレイヤーのスタミナがなくなった時に発動します。", "報酬の数量にマイナスを設定すれば、ゲームオーバーの代償を持たせることができます。"], ["`gameovered`で固定されており、編集できません。", "ゲームオーバーになるたびに何度でも発動します。"]),
		welcomed: toUniqueEvent("初回開始時", "ワールドを初めて開いた時に発動", ["このワールドを初めて起動した時に発動します。", "世界観の説明や、開始時に渡す支度品の受け渡しに使います。"], ["`welcomed`で固定されており、編集できません。", "初回の起動時に一度だけ発動します。"]),
		completed: toUniqueEvent("クリア時", "全カテゴリが最大レベルに達した時に発動", ["全カテゴリのレベルが最大値（maxCategoryLevels）に達した時に発動します。", "numeric（数値）でないカテゴリは判定から除かれます。"], ["`completed`で固定されており、編集できません。", "条件を満たした時に一度だけ発動します。"]),
		obtained: toUniqueEvent("単発アクション完了時", "宝箱などの単発アクションを完了した時に発動", ["single種別のアクション（宝箱など）を完了・確認した時に発動します。", "アクション自体の報酬とは別に、ここで設定した報酬を上乗せできます。"], ["`obtained`で固定されており、編集できません。", "単発アクションを完了するたびに何度でも発動します。"]),
	},
	options: {
		label: "unique",
	},
};

// タスク・変化イベント・固定イベントをまとめたイベント全体
export const events: Type.Events = {
	title: "イベント",
	summary: "タスク・変化イベント・固定イベントをまとめた、ワールドのイベント全体",
	points: ["ワールドのイベントはタスク（tasks）・変化イベント（changed）・固定イベント（unique）の3種類で構成されます。", "タスクは条件を満たすと達成になるミッションです。", "変化イベントは数量の増加をきっかけに繰り返し発動する、画面に表示されない内部処理用のイベントです。", "固定イベントはタイミングごとに1つずつ用意される、追加・削除できない枠です。"],
	list: expandList("種類", [task, changed, unique], "説明"),
	children: {
		tasks: { ...task, options: { ...task.options, array: true } },
		changed: { ...changed, options: { ...changed.options, array: true } },
		unique: unique,
	},
	options: {
		label: "events",
		linkedList: true,
	},
};

export const basic: Type.Basic = {
	title: "Basic Configuration",
	summary: "Basic configurations for the world in general",
	points: ["ワールドの名前、説明、背景、通貨、容量、カテゴリの最大レベル、経験値の上昇率、割引率、標準戦闘パラメータなどを設定します。", "These configurations affect the entire world."],
	list: expandList("name", [overview, general, design, development], "Description"),
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
	points: ["Data for games that can be played up on consoles.", "You can create an abandonment game as you wish by configuring it.", "ワールドはカテゴリ、アクション、アイテム、イベントなどの要素を内包します。"],
	children: {
		basic: basic,
		categories: { ...category, options: { ...category.options, array: true } },
		actions: { ...action, options: { ...action.options, array: true } },
		items: { ...item, options: { ...item.options, array: true } },
		skills: { ...skill, options: { ...skill.options, array: true } },
		groups: { ...group, options: { ...group.options, array: true } },
		events: events,
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
	list: expandList("name", [world, basic, type, events, component, miscellaneous], "Description"),
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
		{ title: type, twig: [category, action, item, skill, group, preset] },
		{ title: events, twig: [task, changed, unique] },
		{ title: component, twig: [information, requirement, acquisition, combat, property] },
		{ title: miscellaneous, twig: [translation] }
	],
};
