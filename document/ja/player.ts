import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "言語",
	summary: "言語の切り替える",
	points: ["ゲーム中で表示される言語を切り替えます。", "制作者が翻訳を用意している場合のみに有効です。"],
	options: {
		preset: "language",
	},
};

export const event: Markdown = {
	title: "イベント",
	summary: "条件に応じて発生するシステム",
	points: ["条件に一致した時に発動します", "発動時にメッセージが表示、アイテムが付与又は削減などの効果があります。"],
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
	points: ["デバック時のみに表示されます。", "ゲームを公開して配布する際には表示されません。"],
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "設定",
	summary: "ゲームの設定変更",
	points: ["ゲームの表示、処理に関する設定をします。", "ゲームデータの入出力やリセットもできます。"],
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "統計",
	summary: "進行状況のまとめ",
	points: ["これまでのゲームの進行状況を確認できます。"],
	options: {
		preset: "statistics",
	},
};

export const general: Markdown = {
	title: "一般",
	summary: "ワールド固有の設定",
	points: ["このワールドの難易度や固有の設定を確認できます。"],
	options: {
		preset: "general",
	},
};

export const overview: Markdown = {
	title: "概要",
	summary: "このゲームについて",
	points: ["このゲームのワールド（世界観、設定）について確認できます。", "このゲームを動かしているコンソール（システム）についても確認できます。"],
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
	points: ["このカテゴリーの特定のプロパティの補正を確認できます。", "補正はアイテムの効果によるものです。そのアイテムの確認をできます。"],
	options: {
		preset: "correction",
	},
};

export const properties: Markdown = {
	title: "プロパティ",
	summary: "補正値の一覧",
	points: ["カテゴリーごとに設定されているプロパティの一覧です。", "プロパティととはアクションの実行に影響する要素のことです。", "アイテムの装備により効果が補正されます。（一部のアイテムは装備不要）"],
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "プロパティ",
	summary: "補正値の確認",
	points: ["プロパティととはアクションの実行に影響する要素のことです。", "割り当てられた初期値からカテゴリーのレベル、アクションの設定されたレベル、装備しているアイテムの補正を加味して最終的な数値が算出されます。"],
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
	title: "取引",
	summary: "通貨によりアイテムの購入又は売却",
	points: ["アイテムによっては購入又は売買できないものがあります。", "ロックされているアイテムの売買はできません。", "容量や予約枠（キュー）には購入回数の上限が設定されている場合があり、上限に達するとそれ以上購入できません。（報酬による増加は上限の対象外です）"],
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "アイテムズ",
	summary: "カテゴリー内のアイテムの一覧",
	points: ["長押しするとアイテムの装備を切り替えます。", "一覧のうち１つのアイテムのみ装備可能です。（カテゴリーとして装備できると設定されている場合）", "解放条件を満たしていないアイテムはロックされており、詳細を確認できません。"],
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "アイテム",
	summary: "アイテムの詳細",
	points: ["アイテムとは装備品、消費物、貴重品などの物の所有に関する要素です。", "カテゴリーのうち１つのアイテムのみ装備可能です。（カテゴリーとして装備できると設定されている場合）", "解放条件を満たしていないアイテムはロックされており、詳細を確認できません。"],
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
	points: ["アクションの開始又は停止をします。", "実行回数を指定することができます。リソースがなくなるまで実行する場合は0を入力してください。"],
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "アクションズ",
	summary: "カテゴリー内のアクションの一覧",
	points: ["長押しするとアクションの実行を切り替えます。", "カテゴリーのうち１つのアイテムのみ実行可能です。", "カテゴリーによっては、同時に複数のカテゴリーのアクションを進行できます。", "解放条件を満たしていないアクションはロックされており、詳細を確認できません。"],
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "アクション",
	summary: "採取、制作、戦闘などの行動要素",
	points: ["行動をするごとに経験値を得る場合があり、レベルが上がります。", "行動するごとにアイテムを消費または入手します。", "解放条件を満たしていないアクションはロックされており、詳細を確認できません。"],
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const category: Markdown = {
	title: "カテゴリー",
	summary: "様々な要素をまとめたもの",
	points: ["アクションやアイテムをまとめた要素です。"],
	options: {
		label: "category",
		preset: "category",
	},
};

// character
export const status: Markdown = {
	title: "ステータス",
	summary: "すべてのプロパティの一覧",
	points: ["アイテムによるカテゴリーの補正値のみの表示です。", "実行するアクションにより、さらに他の補正があります。"],
	options: {
		preset: "status",
	},
};

export const inventory: Markdown = {
	title: "インベントリ",
	summary: "すべてのアイテムの一覧",
	points: ["長押しするとアイテムの装備を切り替えます。"],
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "アクティビティ",
	summary: "すべてのアクションの一覧",
	points: ["長押しするとアクションの実行を切り替えます。"],
	options: {
		preset: "activity",
	},
};

export const character: Markdown = {
	title: "キャラクター",
	summary: "主人公の状況の確認と操作",
	points: ["この内容はカテゴリーを操作して表示される内容と同一です。"],
	children: { activity: activity, inventory: inventory, status: status },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "プレイヤー",
	summary: "ゲームをプレイで表示される各カラムごとに説明しています。",
	points: ["初期設定では各カラムの最下部に同じ説明がヒントとして表示されます。", "設定により、ヒントを非表示にできます。"],
	list: expandList("プレイヤー", [character, category, action, item, property, world, miscellaneous]),
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
