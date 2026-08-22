import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "언어",
	summary: "언어 전환하기",
	options: {
		preset: "language",
	},
};

export const event: Markdown = {
	title: "이벤트",
	summary: "정해진 시점에 작동하는 시스템",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "보충 사항",
	summary: "기타 보충 사항 설명",
	children: { event: event, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "디버그",
	summary: "디버깅 확인을 위한 조작",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "설정",
	summary: "게임 설정 변경",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "통계",
	summary: "진행 상황 정리",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "개요",
	summary: "이 게임 소개",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "월드",
	summary: "게임 전반의 제어 및 설정 조작과 확인이 가능합니다,",
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const correction: Markdown = {
	title: "속성 세부 정보",
	summary: "장비나 아이템에 의한 수치 변화",
	options: {
		preset: "property",
	},
};

export const properties: Markdown = {
	title: "속성",
	summary: "보정 값 목록",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "속성",
	summary: "보정 값 확인",
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
	title: "거래",
	summary: "통화에 따라 아이템 구매 또는 판매",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "아이템",
	summary: "카테고리 내 아이템 리스트",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "아이템",
	summary: "아이템 상세 정보",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "행동",
	summary: "액션 제어",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "액션",
	summary: "카테고리 내 액션 목록",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "액션",
	summary: "채집, 제작, 전투 등의 행동 요소",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "작업",
	summary: "카테고리 내 작업 목록",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "카테고리",
	summary: "다양한 요소들을 모아놓은 것",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character
export const status: Markdown = {
	title: "상태",
	summary: "모든 속성 목록",
	options: {
		preset: "status",
	},
};

export const inventory: Markdown = {
	title: "인벤토리",
	summary: "모든 아이템 목록",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "활동",
	summary: "모든 액션 목록",
	options: {
		preset: "activity",
	},
};

export const missions: Markdown = {
	title: "미션",
	summary: "모든 작업 목록",
	options: {
		preset: "missions",
	},
};

export const character: Markdown = {
	title: "캐릭터",
	summary: "주인공의 상황 확인 및 조작",
	children: { activity: activity, inventory: inventory, status: status, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "플레이어",
	summary: "게임 플레이에서 표시되는 각 컬럼별로 설명되어 있습니다.",
	points: ["초기 설정에서는 각 열 아래쪽에 같은 설명이 힌트로 표시됩니다.", "설정에 따라 힌트를 숨길 수 있습니다."],
	list: expandList("플레이어", [character, category, action, item, property, world, miscellaneous], "설명"),
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
