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
	title: "译文",
	summary: "将游戏内文本翻译成其他语言的配置。",
	points: ["配置要翻译的文本。", "启用翻译设置后，即可使用多语言配置。", "如果禁用翻译功能，开发过程中描述的信息将按原样显示。", "在出版前的开发过程中，无法进行翻译配置和语言切换。"],
	options: {
		label: "译文",
	},
	children: {
		flag: {
			title: "翻译激活",
			summary: "关/开平移功能的配置。",
			points: ["启用翻译设置后，即可使用多语言配置。", "在发布前的开发过程中，翻译不会被激活。出版后将启用语言之间的切换。", "如果启用翻译功能，将支持十种不同的语言，并且必须提供所有语言的翻译数据。不可能只启用部分语言。", "用户启动游戏时，首先会显示开发时使用的语言。然后可以将语言更改为任何语言。", "翻译过程虽然繁琐，但却能让很多人玩得转。"],
		},
		file: {
			title: "语言文件",
			summary: "翻译数据的 JSON 文件。",
			points: ["使用公共配置输出游戏数据时，会在输出文件夹中的 `translations/world` 中生成一个用于翻译的 JSON 文件。", "文件夹中包含用于翻译每种语言的 JSON 文件。内容包含无翻译的数据。", "在每个类型中，内容都有一个 id。此外，里面还有名称和描述。", "所有名称和描述都必须进行翻译并保存。"],
		},
		task: {
			title: "翻译任务",
			summary: "编辑翻译数据",
			points: ["所有翻译文件都包含开发时的语言数据。", "对于非开发语言的文件，必须进行翻译工作。"],
			children: {
				ai: {
					title: "人工智能",
					summary: "基于人工智能的翻译",
					points: ["使用 ChatGPT、Copilot 和 Claude 等人工智能进行翻译。", "翻译可能一气呵成，也可能达到一定的质量。", "它可能不是一个完美的翻译，尤其是对于专业术语和专有名词。", "根据翻译量的大小，使用人工智能的成本可能会很高。", "如果人工智能的翻译进度在中途被打断，可以告诉人工智能 \"继续\"，它可能会处理好。(在某些情况下，这可能无济于事）。"],
					children: {
						prompt: {
							title: "提示示例",
							summary: "向人工智能发出的翻译指令示例",
							points: ["示例提示：将上传的 JSON 数据中的 `name` 和 `explanation` 值从英语翻译成日语。无须更改数据的其他分钟。"],
						},
						gpt: {
							title: "使用 GPT",
							summary: "使用 ChatGPT 的 GPT 进行翻译。",
							points: ["ChatGPT 提供的 GPT 库中的 JSON 语言翻译器可用于轻松翻译 JSON。", "翻译时保留 JSON 结构。", "ChatGPT 以外的人工智能服务也可提供类似功能。"],
						},
					},
				},
				online: {
					title: "翻译服务",
					summary: "使用翻译服务",
					points: ["使用 DeepL 和 Google Translate 等在线服务进行翻译。", "与人工智能翻译相比，可望获得更高质量的翻译，但需根据翻译量收取费用", "JSON 文件无 法通过翻译服务直接翻译，因此必须创建并使用一个程序。", "有些服务可以原样翻译 JSON 数据，但需要付费。(例如 doctranslator.com）"],
				},
				manual: {
					title: "手动",
					summary: "手动翻译",
					points: ["用文本编辑器打开翻译文件，输入每种语言的翻译内容。这样做非常耗时，但可能让您完全按照自己的要求翻译文件。"],
				},
			},
		},
		code: {
			title: "语言代码",
			summary: "支持的语言代码列表",
			list: [
				["语言代码", "语言"],
				["EN", "英语"],
				["zh", "中文"],
				["es", "西班牙语"],
				["氩气", "阿拉伯语"],
				["pt", "葡萄牙语"],
				["嗨", "北印度语"],
				["fr", "法语"],
				["墟", "俄语"],
				["de", "德语"],
				["EN", "日语"],
			],
		},
	},
};

export const miscellaneous: Markdown = {
	title: "补充资料",
	summary: "其他补充信息说明。",
	points: ["参考信息。"],
	list: expandList("补贴", [translation]),
	options: {
		label: "杂项",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "属性",
	summary: "配置物品所具有的效果。",
	points: ["这是可以在物品上配置的效果项。", "装备类型为 \"必需 \"或 \"可消耗 \"的物品只在装备中生效。对于 \"必需 \"物品，只有在持有时才会产生效果。", "这两项的值都是根据玩家等级与动作等级之间的等级差来计算调整的。", "例如，如果攻击值为 10，则攻击的计算方法是玩家的等级比动作的等级高 10。减值则相反。", "攻击\"、\"防御\"、\"准确\"、\"影响 \"和 \"恢复 \"仅对 \"体力 \"类型的动作有效。"],
	list: [
		["属性", "有效性详情。"],
		["速度", "缩短动作所需的时间。所需时间与等级差异成反比。"],
		["机会", "改变动作的成功概率。概率与等级差异成比例增加。"],
		["经历", "改变获取的经验值。与等级差距成比例增加（计算方法相反：等级动作越高，获得的经验越多）。"],
		["袭击", "改变对对手造成的耐力伤害。(仅限蓄力动作）。"],
		["国防", "减少对手造成的耐力伤害。(仅限体力动作）。"],
		["精确度", "下攻击失误率。(仅限体力动作）。"],
		["逃避", "改变对手攻击的闪避率。(仅限体力动作）。"],
		["修复", "改变动作结束时恢复的耐力值。(仅适用于体力动作）。"],
	],
	children: {
		category: {
			title: "类别",
			summary: "指定属性适用的类别。",
			points: ["配置该属性所适用类别的 ID。", "配置 `*` 适用于所有类别。", "如果为空，则适用于物品所属的类别。"],
		},
		attack: {
			title: "攻击值 [等级差]。",
			summary: "修正对对手造成的耐力伤害（仅对耐力动作有效）。",
			points: ["攻击伤害的计算是假设玩家的等级比动作的等级高出这么多。"],
		},
		defence: {
			title: "防御值 [等级差]。",
			summary: "修正从对手处收到的耐力伤害（仅对 STAMINA 动作有效）。",
			points: ["所受伤害的计算方法是，玩家的等级比动作的等级高这个值。值越高，造成的伤害越小。"],
		},
		accuracy: {
			title: "命中值 [等级差]。",
			summary: "修正攻击未命中率（仅对体力动作有效）。",
			points: ["计算失误率时，假定玩家的等级比动作的等级高这个值。值越高，失误率越低。"],
		},
		evasion: {
			title: "闪避值 [等级差异]。",
			summary: "修正对手攻击的闪避率（仅对蓄力动作有效）。",
			points: ["闪避率的计算是假设玩家的等级比动作的等级高出这么多。"],
		},
		restore: {
			title: "恢复值 [等级差]。",
			summary: "修正耐力恢复（仅对 STAMINA 动作有效）。",
			points: ["计算耐力恢复量时，假设玩家的等级比动作的等级高出这么多。"],
		},
		speed: {
			title: "快速 [等级差异]。",
			summary: "对动作时间的修正",
			points: ["计算所需时间时，假定玩家的等级比动作的等级高这个值。值越高，所需时间越短。"],
		},
		chance: {
			title: "成功概率 [等级差异]。",
			summary: "修正动作成功概率。",
			points: ["计算动作成功概率时，假定玩家的等级比动作的等级高这个值。值越高，成功概率越大。"],
		},
		experience: {
			title: "经验 [等级差异]。",
			summary: "获取经验的修正",
			points: ["经验的计算方法是，玩家的等级比动作的等级低这么多（动作的等级越高，获得的经验就越多，因为计算方法是倒过来的）。"],
		},
	},
	options: {
		label: "财产",
	},
};

export const combat: Type.Combat = {
	title: "战斗值",
	summary: "体力类型动作的战斗修正值。",
	points: ["修正值仅对 \"体力 \"类型的动作有效。", "每个值的计算都是对玩家与动作之间等级差异的额外修正。", "例如，如果攻击值为 10，则在计算攻击伤害时，玩家的等级要比动作的等级高 10。如果是减，则修正方向相反。", "如果在 `General` 中将其配置为 `defaultCombat`，它就会成为整个世界的默认战斗参数。"],
	children: {
		attack: {
			title: "攻击值 [等级差]。",
			summary: "对对手造成的耐力伤害进行等级差异修正。",
			points: ["值越高，造成的伤害越大。"],
		},
		defence: {
			title: "防御值 [等级差]。",
			summary: "等级差异修正从对手处收到的耐力伤害。",
			points: ["值越高，减少的伤害越多。"],
		},
		accuracy: {
			title: "命中值 [等级差]。",
			summary: "等级差异修正攻击失误率。",
			points: ["值越高，错误率越低。"],
		},
		evasion: {
			title: "闪避值 [等级差异]。",
			summary: "等级差异修正对方攻击的闪避率。",
			points: ["值越高，越容易闪避对手的攻击。"],
		},
		restore: {
			title: "恢复值 [等级差]。",
			summary: "等级差异修正为耐力恢复。",
			points: ["值越高，恢复的耐力越多。"],
		},
	},
	options: {
		label: "打击",
	},
};

export const acquisition: Type.Acquisition = {
	title: "获取",
	summary: "物品和类别等级的获取配置。",
	points: ["配置收购。", "您可以更改类别以及物品的等级，还可以更改动作的计数次数。", "可以配置获得产品的概率。"],
	list: [
		["类型。", "获取什么？"],
		["类别", "等级"],
		["动作。", "执行计数的次数。"],
		["物品", "财产计数"],
	],
	children: {
		type: {
			title: "类型。",
			summary: "要获取的元素类型。",
			list: [
				["类型。", "获取了什么。"],
				["类别", "等级（经验换算附加值）"],
				["动作。", "执行计数的次数。"],
				["物品", "财产计数"],
			],
		},
		id: {
			title: "元素的 ID",
			summary: "标识要获取元素的 ID。",
		},
		count: {
			title: "值",
			summary: "要获得的数值",
			points: ["负值会减小附魔次数、附魔次数及其等级。但不能小于 0。", "如果物品拥有最大计数（maximum），则超出该值后，物品数量将不会增加。", "如果类型是类别，则设定值会直接加到等级上（1 表示 1 级，0.5 表示 0.5 级）。通常的调整方式是配置动作的经验值。除非有特殊用途，否则这种配置是不必要的。"],
		},
		chance: {
			title: "概率[-1～1]",
			summary: "获取成功的概率（负值仅在失败时计算）",
			points: ["将获得概率配置为-1到1之间的一个小数。概率的判定使用绝对值。", "当值正时，仅在动作成功时才会进行评估：值为`1`时必定获得，值为`0.5`时有50%的概率获得。", "当值是负数时，仅在动作失败时进行判定：值是`-1`时必定获得，值是`-0.5`时有50%的概率获得。", "当值为`0`时，无论成功还是失败，都不会获得该物品。", "默认值是`1`（成功时必定获得）。"],
		},
	},
	links: { type: "类型" },
	options: {
		label: "收购",
	},
};

export const requirement: Type.Requirement = {
	title: "条款和条件",
	summary: "配置使用和展示元素的必要条件。",
	points: ["这些是按类别、动作和物品为每个元素配置的条件。", "若无满足所有配置条件，则无法执行表中所示操作。", "如果启用了锁定功能，元素本身就会被隐藏，直到满足条件为止。"],
	list: [
		["配置地点", "只有满足条件才能做的事。"],
		["类别", "执行所有动作和操作类别中的物品"],
		["动作。", "执行动作"],
		["物品", "操纵物品（如装备）"],
	],
	children: {
		type: {
			title: "类型。",
			summary: "作为条件引用的元素类型。",
			list: [
				["类型。", "参考值"],
				["类别", "类别等级。"],
				["动作。", "执行该动作的计数。"],
				["物品", "持有物品的计数。"],
			],
		},
		id: {
			title: "元素的 ID",
			summary: "作为条件的元素的 ID。",
		},
		count: {
			title: "值",
			summary: "条件要求的数值。",
			points: ["如果值大于或等于指定值，则满足条件。"],
		},
		chance: {
			title: "消费概率 [0-1]。",
			summary: "物品被消费的概率（0-1，仅在类型为物品时有效）。",
			points: ["满足条件并执行动作时，物品被消耗的概率。", "1 \"时始终消耗，\"0.5 \"时消耗的几率为 50%，\"0 \"时不消耗。", "默认值为 `1`（始终消耗）。", "如果类型不是物品，则无效。"],
		},
		equipment: {
			title: "装备",
			summary: "要求物品处于装备状态（仅在类型为物品时有效）或",
			points: ["启用后，物品必须装备无。", "如果类型不是物品，则无效。"],
		},
	},
	links: { type: "类型" },
	options: {
		label: "要求",
	},
};

export const information: Type.Information = {
	title: "信息",
	summary: "配置元素的基本信息（ID、名称、图标、颜色等）",
	points: ["世界中每个元素共有的基本信息项目（类别、动作、物品、事件等）。", "每个元素都是单独配置的。"],
	children: {
		id: {
			title: "ID",
			summary: "标识元素的唯一 ID",
			points: ["ID 来唯一标识每个元素。", "在编辑器中，这是一个用于标识元素的字符串。", "例如，ID 指定了动作完成后获得的物品。"],
			important: "一旦配置了 ID，游戏发布后就无须更改。更改它将导致与现有游戏数据不一致，游戏将无法正常运行。",
			children: {
				displayName: {
					title: "显示名称。",
					summary: "根据 ID 自动生成的显示名称",
					points: ["可使用的字符是字母、连字符和计数的组合。", "如果尚未配置名称，则每个单词的第一个字母大写，连字符用空格代替，并自动配置在名称中。", "对于英语以外的语言，必须单独配置名称条目。"],
					children: {
						example: {
							title: "例如",
							summary: "ID 转换的真实案例",
							points: ["如果 ID 是 \"stylish-strong-axe\"，则名称为 \"Stylish Strong Axe\"。"],
						},
					},
				},
				noDuplicate: {
					title: "无重复。",
					summary: "禁止在同一类型中重复 ID。",
					points: ["无须在类别、动作、物品、事件和预设类型中重复，因为它们用于标识元素。", "不同类型使用相同的 ID 并不是问题。"],
					links: { type: "类型" },
				},
			},
		},
		name: {
			title: "名称：",
			summary: "出现的元素名称",
			points: ["游戏中显示的元素名称。", "也可输入英语以外的语言。", "可以接受与其他元素重复的名称。", "如果时间过长，则在使用\"...... \"播放时，溢出部分将从显示屏上省略。"],
			children: {
				translateFromId: {
					title: "从 ID 自动转换",
					summary: "根据 ID 自动生成名称",
					points: ["如果该字段留空，则会根据 ID 自动显示信息。有关详细信息，请参阅上一节。"],
				},
			},
		},
		explanation: {
			title: "注释",
			summary: "详细元素说明。",
			points: ["游戏中显示的元素说明。", "可输入英语以外的语言。可显示所有文本，即使是长文本。", "如无解释，则留空。"],
		},
		icon: {
			title: "图标",
			summary: "配置代表元素的图标。",
			points: ["图标可配置为图像、Iconify 或表情符号。", "Iconify 是一项提供各种图标的服务。", "如果配置了一个以上，则依次优先使用图像、Iconify 和象形图。"],
			children: {
				image: {
					title: "图片",
					summary: "使用任何图像文件",
					points: ["代表元素的图像。", "如果文件大小较大，则会自动调整大小。", "如果配置了 Iconify 或象形图，则不必要。"],
					children: {
						"文件类型": {
							title: "文件类型",
							summary: "支持的图像文件格式",
							points: ["您可以使用可在浏览器中显示的一般类型。", "JPEG、PNG、GIF、WebP、SVG 等。"],
						},
					},
				},
				iconify: {
					title: "图示化",
					summary: "使用 Iconify 图标集",
					points: ["代表元素的图标。", "Iconify 是一项提供各种图标的服务。", "如果已配置图像，则优先使用该图像。"],
					children: {
						iconify: {
							title: "图示化",
							summary: "如何从 Iconify 选择图标",
							points: ["搜索 `Iconify` 可显示的图标。", "通过搜索图标，您可以快速找到最佳图标。", "选择一个图标，查看其标识符（图标集类型`:`图标名称），如`game-icons:sword-wound`，然后直接粘贴到此图标字段中。"],
							images: ["图标选择.png"],
							links: { iconify: "https://icon-sets.iconify.design" },
						},
					},
				},
				emoji: {
					title: "象形文字",
					summary: "带象形图的图标显示",
					points: ["将象形图显示为图标。", "它可以从文本转换为象形图，并快速进行配置。", "对于象形图，请按原样输入 Unicode 象形图。", "由于使用的是在执行环境中引入的象形图，因此对于不同的用户，它们的显示方式略有不同。", "通过 Iconify，您可以配置与每个环境无关联的表情符号", "可以显示非图形字符，但如果有多个字符，显示可能会损坏。", "输入象形图，例如 `🗡️` 或 `⚔️`。"],
				},
			},
		},
		color: {
			title: "品种",
			summary: "配置元素的显示颜色。",
			points: ["作为元素颜色，它适用于元素的图标和背景颜色。", "从编辑器的颜色选择器中选择。"],
			children: {
				"父母传承": {
					title: "从父元素继承",
					summary: "接管父元素的颜色配置。",
					points: ["如果为空，则使用父元素中配置的颜色。", "每个元素的类型层次结构如下", "例如，如果某个动作有单独的颜色配置，则会使用该颜色；而如果该动作无单独的颜色配置，则会使用类别或世界颜色。"],
					quote: typeTree,
					links: { type: "类型" },
				},
			},
		},
	},
	options: {
		label: "信息",
	},
};

export const component: Markdown = {
	title: "组成部分",
	summary: "常用部件",
	points: ["提取并处理每个位置配置中使用的常用组件。", "所有这些领域使用的组件都是通用的，但有些组件在某些项目中是无用的。"],
	list: expandList("组成部分", [information, requirement, acquisition, combat, property]),
	options: {
		label: "组成部分",
		linkedList: true,
	},
};

// type

export const preset: Type.Information = {
	...information,
	title: "预置",
	summary: "自定义显示系统元素",
	points: ["替换预先集成到游戏引擎（玩家）中的用户界面文本和图标。", "只有通过 ID 与现有预设匹配的预设才会被替换。", "只有您配置的项目才会被替换。例如，如果只配置了图标，名称和颜色等其他项目将使用原来的。"],
	options: {
		label: "预置",
	},
};

export const event: Type.Event = {
	title: "事件",
	summary: "由条件触发的信息和奖励系统。",
	points: ["当满足配置的时间/条件时就会触发，并显示一条信息。", "它可以在首次启动、游戏结束、关机返回或满足特定条件时触发。", "它可以改变类别的等级、执行动作的次数以及激活时拥有的物品计数。"],
	children: {
		information: information,
		timing: {
			title: "时间安排",
			summary: "配置事件触发的时间。",
			list: [
				["时间安排", "激活条件", "复"],
				["匹配", "首次满足 CONDITIONS（条件）中配置的条件时。", "只一次"],
				["`comebacked`。", "当一个人从关机状态返回超过一秒，且有动作正在进行中时。", "时常"],
				["游戏结束了", "玩家在战斗中耐力耗尽时。", "时常"],
				["`已完成`。", "当达到所有类别的最大等级（maxCategoryLevels）时。", "只一次"],
				["欢迎`.", "当我刚刚开始这个世界的时候。", "只一次"],
				["`obtained`", "完成或确认单个类型的动作（如宝箱等）时。若满足条件，还将获得事件奖励", "时常"],
			],
		},
		unlocked: {
			title: "初始显示状态",
			summary: "事件图标的初始显示状态（触发与否取决于时机，在此配置下不会触发）",
			points: ["事件的触发条件由时间决定，此选项仅影响列表图标的外观。", "secreted：在满足所有要求之前，该事件绝不会显示在事件列表中（但事件本身仍会按既定时间触发）。", "hidden・hinted：图标上会显示斜线，表示该内容尚未解锁。", "已发布：斜线消失，显示为“已发布”。"],
		},
		requirements: {
			title: "条款和条件",
			summary: "触发事件和给予奖励的条件。",
			points: ["触发事件或给予奖励的条件。", "在`matched`中，只有满足该条件时才会触发，并获取奖励。", "除`matched`以外的时机，当时机条件成立时，该效果将触发。此后，仅当满足在此处配置的条件时，才能获取奖励。"],
			children: requirement.children,
		},
		acquisitions: {
			title: "报酬",
			summary: "触发事件时的奖励配置。",
			points: ["这是事件触发时的奖励。", "在`matched`中，只有在满足条件并触发时，才能获得奖励。", "除`matched`之外，只有在满足时机条件且符合conditions的条件时，才能获取奖励。", "您可以将计数配置为负值。例如，如果您在 \"游戏结束 \"时将物品的计数设为负值，那么游戏结束时您将失去这些物品。"],
			children: acquisition.children,
		},
		group: {
			title: "工作组",
			summary: "任务的组标识符（目前未使用）",
			points: ["此项目目前尚未使用。它将保留用于未来的改进。"],
		},
	},
	options: {
		label: "事件",
	},
};

export const group: Type.Information = {
	...information,
	title: "群",
	summary: "为类别、动作和物品定义显示组",
	points: ["定义组来控制显示顺序。", "您可以为每个类别、动作和物品配置在此定义的组。", "具有相同组别的组会显示在一起。", "如果留空，则不进行分组。"],
	options: {
		label: "组",
	},
};

export const item: Type.Item = {
	title: "物品",
	summary: "装备和消耗品等货物元素",
	points: ["这一元素与装备、消耗品和贵重物品等物品的拥有权有关。", "一个类别内只能装备一个，也可以无装备。", "使用方法也有计数可变。"],
	children: {
		information: information,
		category: {
			title: "类别",
			summary: "物品所属类别的 ID",
			points: ["指定该物品所属类别的 ID。"],
		},
		group: {
			title: "群",
			summary: "显示物品的组分类",
			points: ["应用在 Basic 中配置的其中一个组。", "物品列表会按照配置组的顺序显示。", "如果留空，则不进行分组。"],
			links: { general: "一般" },
		},
		unlocked: {
			title: "初始解锁状态",
			summary: "元素的初始显示与释放状态（满足触发条件后会自动进入更高阶状态）",
			points: ["secreted：在满足所有要求之前，UI上将完全不会显示（提示中也不会出现，在要求/奖励列表中也会被隐藏）。", "hidden：在未被任何解锁元素引用且未满足条件的情况下，该内容将被完全隐藏（名称呈灰色且无法操作）。", "hinted（默认）：仅显示名称作为预告，但在解锁前无法进行操作。", "已释放：无论条件如何，从一开始即可释放并可能进行操作（原“从一开始显示”）。"],
		},
		buyingValue: {
			title: "购买值 [硬币]。",
			summary: "配置物品购买价格。",
			points: ["若从未拥有过物品，则无法购买。"],
			list: [
				["值", "待遇"],
				["0", "无"],
				["大于零的值。", "你能买到的值"],
				["小于零的值（例如-1）", "无购买（视为零）。"],
			],
		},
		sellingValue: {
			title: "售价 [硬币]。",
			summary: "配置物品的出售价格。",
			points: ["配置物品出售的价格。"],
			list: [
				["值", "待遇"],
				["0", "无"],
				["大于零的值。", "以这个值出售。"],
				["小于零的值（例如-1）", "一般配置折扣率乘以出价（如果出价为零，则无法出售）"],
			],
			links: { general: "一般" },
		},
		maximum: {
			title: "最大拥有计数 [个]。",
			summary: "拥有物品的最大计数限制。",
			points: ["如果为 0，则不限制拥有的计数。", "如果多于 1 个，则最多只能拥有该计数。如果已达到上限值，再收购也不会增加拥有的计数。"],
		},
		equipmentType: {
			title: "装备类型",
			summary: "装备、效果和物品消耗的类型配置。",
			points: ["可能装备的物品必须属于`装备组`类别中指定的组。", "同一组内只能装备一件物品。"],
			list: [
				["值", "装备", "有效性。", "消费量", "例如"],
				["必要的", "必要", "装备中", "无", "剑、盔甲和其他装备。"],
				["可消耗`.", "必要", "装备中", "执行动作时消耗", "为获得效果而消耗的物品，如药水。"],
				["`不必要`。", "不必要", "在拥有时的任何时候。", "无", "只要拥有就能发挥功效的被动物品。"],
				["`不可能`。", "不允许", "无", "无", "材料和杂物等无 效物品。"],
			],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "物品使用的必要条件。" },
		properties: { ...property, options: { ...property.options, array: true }, summary: "物品的属性效果。" },
		coinId: { title: "交易货币ID", summary: "用于买卖该物品的货币ID", points: ["指定买入值和卖出值中共同使用的货币（coins）的ID。", "如果留空，则使用主币种（coins列表的首个币种）。"] },
	},
	options: {
		label: "项目",
	},
};

export const action: Type.Action = {
	title: "动作。",
	summary: "收集、制作和战斗等行动元素。",
	points: ["这些元素代表着收集、制作、买卖和战斗等行为。", "每执行一次行动，您就会获得经验，等级也会随之上 升。", "您可以为每个行动配置消耗或获取的物品。", "行为模式是有几种类型的。"],
	children: {
		information: information,
		category: {
			title: "类别",
			summary: "动作所属类别的 ID",
			points: ["指定该动作所属类别的 ID。"],
		},
		attribute: {
			title: "属性",
			summary: "动作属性类别",
			points: ["可配置个别属性（类别）。", "如果留空，则取其所属类别", "例如，如果您为属于恶魔城堡类别的动作单独配置了魔法属性，那么魔法类别的等级和属性将被计算并应用到动作完成时间和伤害上。"],
			links: { category: "类别" },
		},
		group: {
			title: "群",
			summary: "显示动作的组分类",
			points: ["应用在 Basic 中配置的其中一个组。", "按组别配置顺序显示动作列表。"],
			links: { general: "一般" },
		},
		unlocked: {
			title: "初始解锁状态",
			summary: "元素的初始显示与释放状态（满足触发条件后会自动进入更高阶状态）",
			points: ["secreted：在满足所有要求之前，UI上将完全不会显示（提示中也不会出现，在要求/奖励列表中也会被隐藏）。", "hidden：在未被任何解锁元素引用且未满足条件的情况下，该内容将被完全隐藏（名称呈灰色且无法操作）。", "hinted（默认）：仅显示名称作为预告，但在解锁前无法进行操作。", "已释放：无论条件如何，从一开始即可释放并可能进行操作（原“从一开始显示”）。"],
		},
		level: {
			title: "等级",
			summary: "动作的难度等级。",
			points: ["动作的难易程度由等级表示。", "在运行时对照玩家的等级计算每种属性。", "例如，执行高于您等级的动作会降低成功率。", "如果条件满足，即使玩家的等级低于这个值，也可以执行。"],
			links: { property: "财产" },
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "执行动作所要求的条件。" },
		seconds: {
			title: "时间 [秒]。",
			summary: "执行动作所需的典型时间",
			points: ["执行一次动作所需的标准时间（秒）。", "对于 \"耐力 \"类型，这是一个回合的时间间隔（彼此的耐力减少一次）。", "实际执行情况会因属性计算而有所不同。"],
			links: { property: "财产" },
		},
		experience: {
			title: "经验 [下一等级为 100]。",
			summary: "从成功动作中获取经验",
			points: ["成功执行一次动作所获取的标准经验；100 值相当于一级经验。", "在战斗的情况下，建议多配置一些，因为这是对手胜利时获取的。", "实际执行情况会因属性计算而有所不同。"],
			links: { property: "财产" },
		},
		chance: {
			title: "成功概率 [0-1]。",
			summary: "完成动作时的成功概率",
			points: ["动作完成时的成功概率。", "如果为 \"1 \"则总是成功，如果为 \"0 \"则总是失败。", "失败时，消耗物品会被消耗，但不会获得奖励或经验。", "实际执行情况会因属性计算而有所不同。"],
		},
		maximum: {
			title: "最大运行计数 [次]。",
			summary: "一个动作可完成的最大计数次数。",
			points: ["一个动作成功完成的最大计数次数。", "0 \"为无限制。", "达到上限值后，动作将不再可执行。"],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "奖励成功获取动作。" },
		progressType: {
			title: "进度类型",
			summary: "动作执行类型",
			points: ["共有四种类型。"],
			list: [
				["类型。", "运行细节", "耐力", "例如"],
				["`persistent`.", "这是一种不断重复的动作类型；每完成一次都会获得经验和奖励。", "无关系", "伐木、采矿、捕鱼"],
				["单", "一次执行一个动作。如果中断，进度会被保存，下次可以继续。完成后，用户按确认动作即可收到结果。", "无关系", "打开百宝箱，通过阅读学习技能"],
				["`snap`......。", "这种类型的动作是即时执行的。立即完成，无时间间隔。", "无关系", "以物易物，使用物品。"],
				["\"耐力\"。", "每次所需时间都会减少玩家和对手各自的耐力。当对手的耐力耗尽时，会获得经验和奖励。当玩家的耐力耗尽时，游戏结束，所有正在进行的动作都会中止。", "相关。", "战斗、危险行动。"],
			],
		},
		property: combat,
	},
	options: {
		label: "行动",
	},
};

export const category: Type.Category = {
	title: "类别",
	summary: "对动作和物品进行分类的一般框架。",
	points: ["代表一个大分类。", "例如，它可以在短程、远程、魔法、地下城、铁匠、制造厂等任何框架下进行配置。", "动作和物品直接置于世界之下，并与类别 ID 关联。"],
	children: {
		information: information,
		group: {
			title: "群",
			summary: "显示类别的组分类",
			points: ["应用在 Basic 中配置的其中一个组。", "类别列表会按照配置组的顺序显示。"],
			links: { general: "一般" },
		},
		unlocked: {
			title: "初始解锁状态",
			summary: "元素的初始显示与释放状态（满足触发条件后会自动进入更高阶状态）",
			points: ["secreted：在满足所有要求之前，UI上将完全不会显示（提示中也不会出现，在要求/奖励列表中也会被隐藏）。", "hidden：在未被任何解锁元素引用且未满足条件的情况下，该内容将被完全隐藏（名称呈灰色且无法操作）。", "hinted（默认）：仅显示名称作为预告，但在解锁前无法进行操作。", "已释放：无论条件如何，从一开始即可释放并可能进行操作（原“从一开始显示”）。"],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "类别使用要求。" },
		equipmentGroups: {
			title: "装备组",
			summary: "指定可能装备该类别的物品组。",
			points: ["该类别中可装备物品的组名列表。", "只有与此处指定的组名称相匹配的组中的物品才能装备。", "如果指定的是空字符串，那么未配置组（空）的物品就有资格装备。", "同一组中只能装备一件物品。装备新物品时，同组中的任何现有装备都会自动卸下。", "如果列表为空（0 件），则无法装备任何物品。"],
			links: { general: "一般" },
		},
		numeric: {
			title: "等级的可用性",
			summary: "类别等级功能的可用性",
			points: ["这是一个标志，表示该类别是否有等级。", "如果开，则有等级；如果关，则没有。", "一个例子是开根据经验划分的类别，如剑术和魔法，关根据地点划分的类别，如地下城和铁匠。"],
		},
		standaloneProgress: {
			title: "同时进行的进度",
			summary: "与其他类别并行执行的配置",
			points: ["这是一个标志，表示该类别中的动作是否可以与其他类别中的动作同时进行。", "如果开，则动作可以同时进行，且不受其他类别动作的影响。", "如果是关，则不能与其他类别中也配置为关的动作同时执行。在此类别中开始新动作时，其他非独立类别中正在进行的动作会自动中止。"],
		},
		background: {
			title: "背景",
			summary: "类别特定的背景配置",
			points: ["配置该类别的背景。", "选择类别时，背景图片会随之改变。", "如无配置，则按原样使用世界背景设置。"],
		},
	},
	options: {
		label: "类别",
	},
};

export const type: Markdown = {
	title: "类型。",
	summary: "世界的基本分类",
	points: ["世界由六种类型组成。", "所有元素都放在世界的正下方。", "动作和物品与所属类别的 ID 关联。"],
	list: expandList("类型。", [category, action, item, group, event, preset]),
	quote: typeTree,
	options: {
		label: "类型",
		linkedList: true,
	},
};

// basic

export const development: Type.Development = {
	title: "发展",
	summary: "世界开发过程中的注意事项和错误管理",
	points: ["在世界发展过程中使用。", "它涉及这个世界的开发和测试，不影响游戏内容。", "玩家不检查有关开发的内容。"],
	children: {
		version: {
			title: "版本",
			summary: "编辑器版本号。",
			points: ["控制台版本号会在创建世界时自动记录。", "开发人员不能更改这些内容。"],
		},
		memo: {
			title: "备忘录",
			summary: "开发人员备忘录记录",
			points: ["开发人员可以自由地将这些信息作为注释。", "与游戏出版无关。"],
		},
		errors: {
			title: "错误",
			summary: "验证结果的错误日志。",
			points: ["世界验证的结果会自动存储在这里。", "例如，如果有无法输入的字符类型，或输入了超过限制的数值，就会显示错误。", "开发人员不能更改这些内容。", "当这里无错误存储时，它可能被存储在服务器上。"],
		},
		timestamp: {
			title: "时间戳",
			summary: "创建、保存和出版记录。",
			points: ["自动记录世界的创建、存储和发布时间。", "开发人员不能更改这些内容。"],
			children: {
				created: {
					title: "天",
					summary: "初创世界的时间",
					points: ["世界诞生的日期和时间。"],
				},
				saved: {
					title: "保存日期和时间",
					summary: "最后一次执行保存的时间",
					points: ["上次保存世界的日期和时间。"],
				},
				published: {
					title: "出版日期和时间",
					summary: "最后一次公开处决的时间",
					points: ["世界》最后发表于。"],
				},
			},
		},
		autosaveing: {
			title: "自动保存",
			summary: "启用/禁用自动保存功能。",
			points: ["表示是否启用了自动保存功能。", "开发人员不能更改这些内容。"],
		},
	},
	options: {
		label: "发展",
	},
};

export const design: Type.Design = {
	title: "设计",
	summary: "视觉外观配置，如世界颜色和字体。",
	points: ["有关世界显示的配置。", "关于整个世界的设计，如果每个元素都有单独的配置，则以这些配置为准。"],
	children: {
		mainColor: {
			title: "主色调",
			summary: "世界主要颜色",
			points: ["用作条形色。", "条形阴影则使用与之相反的颜色。"],
		},
		subColor: {
			title: "辅色",
			summary: "背景和文字的辅助颜色",
			points: ["用作背景和文本颜色的颜色。", "与主色调相近的色调会融为一体。"],
		},
		background: {
			title: "背景图片",
			summary: "整个游戏的背景图片",
			points: ["配置游戏背景图片。", "如果无配置图像，背景则为基于辅助颜色的渐变色。"],
		},
	},
	options: {
		label: "设计",
	},
};

export const general: Type.General = {
	title: "一般",
	summary: "基本游戏配置，包括语言和等级配置",
	children: {
		language: {
			title: "语言",
			summary: "世界诞生时的语言。",
			points: ["配置该世界编辑器使用的语言。", "用户启动游戏时显示的第一种语言。"],
		},
		translations: {
			title: "译文",
			summary: "准备多语言翻译或",
			points: ["如果启用，用户可以用任何语言播放。", "如果禁用，则只能以语言配置中选择的语言播放。", "如果启用了翻译功能，则必须提供每种语言的翻译数据。"],
			links: { translation: "译文" },
		},
		offlineMaxHours: {
			title: "最大关机时间 [小时]。",
			summary: "关进度的时间限制。",
			points: ["配置关机时的最大进度时间。", "例如，如果设置为 6 小时，则最多处理 6 小时的离线返回过程，但如果允许更多时间上离线返回，则离线时间将按 6 小时处理。", "如果设置为 0 时间，则在返回关机状态时根本不会进行任何流程处理。", "最大值为 24 小时。"],
			links: { category: "类别" },
		},
		maxCategoryLevels: {
			title: "类别的最大等级",
			summary: "每个类别的等级上 限。",
			points: ["为每个类别配置最大等级。", "如果获取的经验超过了这个等级，则在计算每种属性时会使用此处配置的最大等级。", "该值与无等级的类别无关。"],
			links: { category: "类别" },
		},
		locking: {
			title: "锁定功能",
			summary: "隐藏项目，直至满足要求",
			points: ["如果启用，类别动作物品在无使用或拥有且未满足要求时将被隐藏。", "如果禁用，所有项目都会从头开始显示，但在满足要求之前无法执行或装备。"],
			links: { category: "类别", action: "行动", item: "项目" },
		},
		coins: {
			title: "货币",
			summary: "游戏内货币（硬币）的配置",
			points: [
				"配置游戏内使用的货币。",
				"可以定义多种货币，并将每种货币的信息（ID、名称、图标、颜色等）配置。",
				"货币用于买卖物品以及扩充库存容量。",
				"首位货币将被视为主要货币，并在物品或容量中未指定货币ID（`coinId`）时使用。",
			],
			links: { information: "信息", item: "项目" },
		},
		capacity: {
			title: "能力",
			summary: "库存容量配置。",
			points: ["控制玩家可拥有的不同类型物品的最大计数。", "每件物品受您拥有的物品类型数量控制，而不是受您拥有的物品计数控制。", "将 `initialCount` 设置为 0 意味着容量不受限制。", "在条件或奖励中提及容量物品时，请使用此处配置的 ID。"],
			children: {
				information: information,
				initialCount: {
					title: "默认值 [个]。",
					summary: "初始库存容量（可容纳的不同物品计数）",
					points: ["游戏开始时的初始容量（可拥有的不同物品计数）。", "如果设置为 \"0\"，则容量不受限制。"],
				},
				initialCost: {
					title: "基本价格 [硬币]。",
					summary: "增加一个容量的初始价格。",
					points: ["增加一个库存槽容量的基本价格（以硬币为单位）。", "实际价格的计算公式为 \"基本价格 x 增长百分比 ^ 购买计数\"。", "例如：底价 100，增加率 1.2，第一次 100 个硬币，第二次 120 个硬币，第三次 144 个硬币。"],
				},
				increasingRate: {
					title: "增加百分比[倍]。",
					summary: "产能扩张成本增加的百分比",
					points: ["它是一个乘数，表示随着第 n 次购买，扩大产能的成本增加了多少。", "1.0 \"的价格始终不变，\"1.2 \"的价格每次购买都会提高 20%。", "计算公式：基本价格 x 增长百分比 ^ 购买计数次数"],
					list: [
						["增长率", "第一次增补。", "第 5 次增加。", "第 10 次增加。", "第 100 次增长。", "第 1000 次增长。"],
						["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
						["1.05", "x1.00", "x1.22", "x1.63", "x131.50", "x1.7×10²⁰"],
						["1.10", "x1.00", "x1.61", "x2.59", "x1.4 x 10⁴", "x2.7×10⁴¹"],
						["1.20", "x1.00", "x2.49", "x6.19", "x8.3 x 10⁷", "x8.3×10⁷⁹"],
						["1.50", "x1.00", "x5.06", "x57.67", "x1.9×10¹⁷", "x7.0×10¹⁷⁶"],
					],
				},
				coinId: {
					title: "货币ID",
					summary: "用于容量扩容的货币ID",
					points: ["指定用于支付扩展库存容量费用的货币（coins）的ID。", "如果留空，则使用主币种（coins列表的首个币种）。"],
				},
				buyingLimit: {
					title: "购买上限[次数]",
					summary: "可购买容量的最大次数",
					points: ["这是使用货币购买容量的次数上限。", "将数值设为`0`即可无限次购买。", "如果设置为`-1`，将无法购买。", "通过奖励获得的容量增加不计入该上限。"],
				},
			},
			links: { item: "项目" },
		},
		queue: {
			title: "Cue",
			summary: "连续执行（预设）动作的框数配置",
			points: [
				"用于管理用于连续执行（预定）动作的槽位数量。",
				"除了可以像容量一样使用货币购买槽位外，还可以通过完成任务或参与事件，指定队列中的物品作为奖励来增加槽位。",
				"在根据条件或奖励查询队列中的物品时，请使用此处配置的ID。",
			],
			children: {
				information: information,
				initialCount: {
					title: "默认值 [个]。",
					summary: "游戏开始时连续执行的格数",
					points: ["这是游戏开始时的预订名额数量。", "最小值是`1`（不采用类似容量的`0`=无限制的处理方式）。"],
				},
				initialCost: {
					title: "基本价格 [硬币]。",
					summary: "增加一个槽位的起始价格",
					points: ["这是增加一个连续执行槽位所需的基本价格（硬币）。", "实际价格的计算公式为 \"基本价格 x 增长百分比 ^ 购买计数\"。", "例如：底价 100，增加率 1.2，第一次 100 个硬币，第二次 120 个硬币，第三次 144 个硬币。"],
				},
				increasingRate: {
					title: "增加百分比[倍]。",
					summary: "帧扩展成本的增长率",
					points: ["这是指在第n次购买时，扩展槽位的成本增加倍数。", "1.0 \"的价格始终不变，\"1.2 \"的价格每次购买都会提高 20%。", "计算公式：基本价格 x 增长百分比 ^ 购买计数次数"],
				},
				coinId: {
					title: "货币ID",
					summary: "用于扩展框架的货币ID",
					points: ["指定用于连续执行扩展价格的货币（coins）的ID。", "如果留空，则使用主币种（coins列表的首个币种）。"],
				},
				buyingLimit: {
					title: "购买上限[次数]",
					summary: "可购买的框的最大次数",
					points: ["这是使用货币购买连续执行次数的上限。", "将数值设为`0`即可无限次购买。", "如果设置为`-1`，将无法购买。", "通过奖励获得的名额增加不计入该上限。"],
				},
			},
			links: { item: "项目" },
		},
		levelCommonRatio: {
			title: "经验上的增长率[倍]。",
			summary: "等级提升难度增加的百分比。",
			points: ["随着类别等级的提高，达到下一等级所需的经验值增加率也随之提高。", "上调该值可增加难度。", "升级所需的经验等于（经验值增长率）^(当前等级-1)。"],
			list: [
				["经验上的增长率", "Lv.1", "二级", "Lv.10", "Lv.50", "Lv.99."],
				["0", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
				["0.02", "x1.00", "x1.02", "x1.22", "x2.69", "x5.52"],
				["0.05", "x1.00", "x1.05", "x1.55", "x11.47", "x131.50"],
				["0.10", "x1.00", "x1.10", "x2.36", "x117.39", "x5.7×10⁴"],
				["0.20", "x1.00", "x1.20", "x6.19", "x3.3 x 10³", "x1.3 x 10¹¹"],
			],
			links: { category: "类别" },
		},
		actionLevelLimit: {
			title: "行动等级限制",
			summary: "请求为执行一个动作而执行同一属性动作的计数次数。",
			points: ["如果启用，具有相同属性的动作的执行次数会自动添加到每个动作的执行条件中。", "必要计数次数等于动作的等级值。", "若无属性配置，则使用所属类别的 ID。"],
		},
		defaultCombat: { ...combat, summary: "所有动作通用的默认战斗参数。", points: ["适用于所有 \"体力 \"类型动作的通用基本战斗修正值。", "每个动作的战斗值（属性）都会添加到这个默认值中。"], links: { action: "行动" } },
	},
	options: {
		label: "一般",
	},
};

export const overview: Type.Overview = {
	title: "概览",
	summary: "世界及其作者的基本信息",
	points: ["本节介绍世界的内容。", "配置时要让用户在选择世界时容易理解。", "这些配置不会影响世界的运行。"],
	children: {
		information: information,
		version: {
			title: "版本",
			summary: "世界版本号",
			points: ["输入任意值（整数或计数）。", "一般来说，整数部分代表主要版本，计数部分代表次要版本。"],
		},
		author: {
			title: "作者姓名",
			summary: "世界作者姓名",
			points: ["输入您的用户名或昵称。"],
		},
		homepage: {
			title: "主页。",
			summary: "作者网站 URL",
			points: ["如果您有自己的主页或社交网站，请输入其 URL。", "玩家可以通过链接查看该 URL。", "若无，则留空。"],
		},
		url: {
			title: "统一资源定位器",
			summary: "游戏网址",
			points: ["输入您要在此世界中放置游戏的 URL。", "输入顶部页面的 URL，如 index.html，包括域名。", "如果提供了合适的 URL，它将作为 PWA 运行。", "PWA 是一种工作方式类似于应用程序的功能，可以安装和关机播放。"],
		},
		estimatedPlayingTime: {
			title: "预计比赛时间",
			summary: "完成世界游戏的预计时间。",
			points: ["完成世界游戏所需的预计游戏时间。", "玩家可以在游戏时查看，以此作为指导。", "这只是一个参考时间，并没有明确定义什么是一个世界的完成。"],
			children: {
				value: {
					title: "值",
					summary: "游戏时间值",
				},
				unit: {
					title: "单位",
					summary: "时间单位（如小时、分钟）",
				},
			},
		},
	},
	options: {
		label: "概况",
	},
};

export const basic: Type.Basic = {
	title: "基本配置",
	summary: "一般世界的基本配置项目。",
	points: ["配置世界的名称、描述、背景、货币、容量、类别的最大等级、经验增加率、折扣率、标准战斗参数等。", "这些配置会影响整个世界。"],
	list: expandList("名字", [overview, general, design, development]),
	children: {
		overview: overview,
		general: general,
		design: design,
		development: development,
	},
	options: {
		label: "基本的",
		linkedList: true,
	},
};

// world


export const world: Type.World = {
	title: "世界",
	summary: "整体游戏世界配置和数据结构",
	points: ["可在控制台上玩的游戏数据。", "通过配置，您可以随心所欲地创建一个放弃游戏。", "世界包含类别、动作、物品和事件。"],
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
		label: "世界",
	},
};

// editor

export const editor: Markdown = {
	title: "编辑",
	summary: "关于如何使用编辑器和世界结构的说明。",
	list: expandList("名字", [world, basic, type, component, miscellaneous]),
	options: {
		label: "编辑",
		linkedList: true,
		directory: "编辑",
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
