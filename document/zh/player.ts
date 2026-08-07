import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "语言",
	summary: "切换语言",
	options: {
		preset: "language",
	},
};

export const event: Markdown = {
	title: "事件",
	summary: "在固定时间点触发的系统",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "补充资料",
	summary: "其他补充信息说明。",
	children: { event: event, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "调试",
	summary: "调试检查操作",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "配置",
	summary: "更改游戏配置",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "统计",
	summary: "进度概述",
	options: {
		preset: "statistics",
	},
};

export const general: Markdown = {
	title: "一般",
	summary: "世界配置",
	options: {
		preset: "general",
	},
};

export const overview: Markdown = {
	title: "概览",
	summary: "关于这个游戏",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "世界",
	summary: "您可以操作和检查游戏的一般控制和配置、",
	children: { overview: overview, general: general, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const correction: Markdown = {
	title: "修正属性。",
	summary: "属性修正详情。",
	options: {
		preset: "correction",
	},
};

export const properties: Markdown = {
	title: "属性",
	summary: "修正值列表",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "属性",
	summary: "检查修正值",
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
	title: "交易",
	summary: "购买或出售货币物品。",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "物品。",
	summary: "类别中的物品清单。",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "物品",
	summary: "物品详情。",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "行动。",
	summary: "控制动作",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "动作。",
	summary: "类别中的动作列表",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "动作。",
	summary: "收集、制作和战斗等行动元素。",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "任务",
	summary: "该类别中的任务列表",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "类别",
	summary: "各种元素的汇编。",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character
export const status: Markdown = {
	title: "状态。",
	summary: "所有属性列表",
	options: {
		preset: "status",
	},
};

export const inventory: Markdown = {
	title: "库存",
	summary: "所有物品清单",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "活动",
	summary: "所有动作清单",
	options: {
		preset: "activity",
	},
};

export const missions: Markdown = {
	title: "使命",
	summary: "所有任务列表",
	options: {
		preset: "missions",
	},
};

export const character: Markdown = {
	title: "角色",
	summary: "确定和操作主人公的情况。",
	children: { activity: activity, inventory: inventory, status: status, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "玩家",
	summary: "玩游戏》中出现的每个栏目都有游戏说明。",
	points: ["默认情况下，相同的说明会作为提示出现在每一列的底部。", "提示可以通过配置隐藏。"],
	list: expandList("玩家", [character, category, action, item, property, world, miscellaneous], "说明"),
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
