import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "言語",
	summary: "言語の切り替える",
	options: {
		preset: "language",
	},
};

export const event: Markdown = {
	title: "イベント",
	summary: "決まったタイミングで発生するシステム",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "補足事項",
	summary: "その他の補足事項を説明",
	children: { event: event, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "デバッグ",
	summary: "デバック確認用の操作",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "設定",
	summary: "ゲームの設定変更",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "統計",
	summary: "進行状況のまとめ",
	options: {
		preset: "statistics",
	},
};

export const general: Markdown = {
	title: "一般",
	summary: "ワールド固有の設定",
	options: {
		preset: "general",
	},
};

export const overview: Markdown = {
	title: "概要",
	summary: "このゲームについて",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "ワールド",
	summary: "ゲーム全般の制御や設定の操作と確認ができます、",
	children: { overview: overview, general: general, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const correction: Markdown = {
	title: "プロパティの補正",
	summary: "プロパティの補正の詳細",
	options: {
		preset: "correction",
	},
};

export const properties: Markdown = {
	title: "プロパティ一覧",
	summary: "補正値の一覧",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "プロパティ",
	summary: "補正値の確認",
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
	title: "取引",
	summary: "通貨によりアイテムの購入又は売却",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "アイテム一覧",
	summary: "カテゴリ内のアイテムの一覧",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "アイテム",
	summary: "アイテムの詳細",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "行動",
	summary: "アクションの制御",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "アクション一覧",
	summary: "カテゴリ内のアクションの一覧",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "アクション",
	summary: "採取、制作、戦闘などの行動要素",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "タスク",
	summary: "カテゴリ内のタスクの一覧",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "カテゴリ",
	summary: "様々な要素をまとめたもの",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character
export const status: Markdown = {
	title: "ステータス",
	summary: "すべてのプロパティの一覧",
	options: {
		preset: "status",
	},
};

export const inventory: Markdown = {
	title: "インベントリ",
	summary: "すべてのアイテムの一覧",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "アクティビティ",
	summary: "すべてのアクションの一覧",
	options: {
		preset: "activity",
	},
};

export const missions: Markdown = {
	title: "ミッション",
	summary: "すべてのタスクの一覧",
	options: {
		preset: "missions",
	},
};

export const character: Markdown = {
	title: "キャラクター",
	summary: "主人公の状況の確認と操作",
	children: { activity: activity, inventory: inventory, status: status, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "プレイヤー",
	summary: "ゲームをプレイで表示される各カラムごとに説明しています。",
	points: ["初期設定では各カラムの最下部に同じ説明がヒントとして表示されます。", "設定により、ヒントを非表示にできます。"],
	list: expandList("プレイヤー", [character, category, action, item, property, world, miscellaneous], "説明"),
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
