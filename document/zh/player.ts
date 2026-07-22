import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "语言",
	summary: "切换语言",
	points: ["切换游戏中显示的语言。", "仅在作者提供了译文的情况下有效。"],
	options: {
		preset: "语言",
	},
};

export const event: Markdown = {
	title: "事件",
	summary: "基于状态的系统。",
	points: ["满足条件时触发。", "激活时会显示信息，物品会赠送或减少等。"],
	options: {
		preset: "事件",
		label: "事件",
	},
};

export const miscellaneous: Markdown = {
	title: "补充资料",
	summary: "其他补充信息说明。",
	children: { event: event, language: language },
	options: {
		preset: "杂项",
		label: "杂项",
	},
};

// world

export const debug: Markdown = {
	title: "调试",
	summary: "调试检查操作",
	points: ["仅在调试时可见。", "游戏出版发行时不会显示。"],
	options: {
		preset: "排错",
	},
};

export const config: Markdown = {
	title: "配置",
	summary: "更改游戏配置",
	points: ["配置与游戏显示和处理相关的设置。", "游戏数据还可以输入、输出和重置。"],
	options: {
		preset: "配置",
	},
};

export const statistics: Markdown = {
	title: "统计",
	summary: "进度概述",
	points: ["您可以查看目前的游戏进度情况。"],
	options: {
		preset: "统计",
	},
};

export const general: Markdown = {
	title: "一般",
	summary: "世界配置",
	points: ["您可以查看这个世界的难度级别和具体配置。"],
	options: {
		preset: "一般",
	},
};

export const overview: Markdown = {
	title: "概览",
	summary: "关于这个游戏",
	points: ["了解游戏的世界（世界观和配置）。", "您还可以了解运行该游戏的控制台（系统）。"],
	options: {
		preset: "概况",
	},
};

export const world: Markdown = {
	title: "世界",
	summary: "您可以操作和检查游戏的一般控制和配置、",
	children: { overview: overview, general: general, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "世界",
		label: "世界",
	},
};

// property

export const correction: Markdown = {
	title: "修正属性。",
	summary: "属性修正详情。",
	points: ["您可以检查该类别中特定属性的修正情况。", "修正是由于物品的影响。您可以检查物品。"],
	options: {
		preset: "更正",
	},
};

export const properties: Markdown = {
	title: "属性",
	summary: "修正值列表",
	points: ["为每个类别配置的属性列表。", "属性是影响动作执行的元素。", "效果通过装备物品来修正。(有些物品不需要装备）。"],
	options: {
		preset: "属性",
	},
};

export const property: Markdown = {
	title: "属性",
	summary: "检查修正值",
	points: ["属性是影响动作执行的元素。", "最终的计数是根据分配的初始值计算出来的，同时考虑到类别等级、为动作设置的等级以及装备物品的修正。"],
	children: { properties: properties, correction: correction },
	list: expandList("财产", [properties, correction]),
	links: {
		properties: "球员/属性",
		correction: "球员/校正",
	},
	options: {
		label: "财产",
		preset: "财产",
	},
};

// item

export const trade: Markdown = {
	title: "交易",
	summary: "购买或出售货币物品。",
	points: ["有些物品无法购买或出售。", "锁定物品不可买卖。", "容量或预约名额（队列）可能会配置购买次数上限，一旦达到上限，便无法继续购买。（通过奖励获得的增加量不计入上限。）"],
	options: {
		preset: "贸易",
	},
};

export const items: Markdown = {
	title: "物品。",
	summary: "类别中的物品清单。",
	points: ["长按可切换装备物品。", "只能装备列表中的一件物品。(如果配置为可装备类别）。", "不符合发布条件的物品会被锁定，无法详细查看。"],
	options: {
		preset: "项目",
	},
};

export const item: Markdown = {
	title: "物品",
	summary: "物品详情。",
	points: ["物品是与装备、消耗品和贵重物品等物品拥有权相关的元素。", "一个类别只能装备一件物品。(如果配置为可装备类别）。", "不符合发布条件的物品会被锁定，无法详细查看。"],
	children: { items: items, trade: trade },
	options: {
		preset: "项目",
		label: "项目",
	},
};

// action

export const act: Markdown = {
	title: "行动。",
	summary: "控制动作",
	points: ["开始或停止动作。", "可以指定运行计数。输入 0 表示运行直至资源耗尽。"],
	options: {
		preset: "行动",
	},
};

export const actions: Markdown = {
	title: "动作。",
	summary: "类别中的动作列表",
	points: ["长按可切换动作的执行。", "一个类别中可能只执行一个物品。", "某些类别允许同时进行多个类别中的动作。", "无满足发布条件的动作会被锁定，无法查看详情。"],
	options: {
		preset: "行动",
	},
};

export const action: Markdown = {
	title: "动作。",
	summary: "收集、制作和战斗等行动元素。",
	points: ["每次行动都可能获得经验，从而提高您的等级。", "每个行动都会消耗或获得一件物品。", "无满足发布条件的动作会被锁定，无法查看详情。"],
	children: { actions: actions, act: act },
	options: {
		preset: "行动",
		label: "行动",
	},
};

// category

export const category: Markdown = {
	title: "类别",
	summary: "各种元素的汇编。",
	points: ["这是一个汇集动作和物品的元素。"],
	options: {
		label: "类别",
		preset: "类别",
	},
};

// character
export const status: Markdown = {
	title: "状态。",
	summary: "所有属性列表",
	points: ["只显示按物品分列的类别修正值。", "根据要执行的动作，还可以进一步进行其他修正。"],
	options: {
		preset: "地位",
	},
};

export const inventory: Markdown = {
	title: "库存",
	summary: "所有物品清单",
	points: ["长按可切换装备物品。"],
	options: {
		preset: "清单",
	},
};

export const activity: Markdown = {
	title: "活动",
	summary: "所有动作清单",
	points: ["长按可切换动作的执行。"],
	options: {
		preset: "活动",
	},
};

export const character: Markdown = {
	title: "角色",
	summary: "确定和操作主人公的情况。",
	points: ["这些内容与操作类别所显示的内容相同。"],
	children: { activity: activity, inventory: inventory, status: status },
	options: {
		label: "性状",
		preset: "性状",
	},
};

export const player: Markdown = {
	title: "玩家",
	summary: "玩游戏》中出现的每个栏目都有游戏说明。",
	points: ["默认情况下，相同的说明会作为提示出现在每一列的底部。", "提示可以通过配置隐藏。"],
	list: expandList("玩家", [character, category, action, item, property, world, miscellaneous]),
	// children: { character: character, category: category, action: action, item: item, property: property, world: world, miscellaneous: miscellaneous },
	options: {
		preset: "选手",
		label: "选手",
		linkedList: true,
		directory: "选手",
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
