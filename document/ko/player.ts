import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "언어",
	summary: "언어 전환하기",
	points: ["게임 내에서 표시되는 언어를 전환합니다.", "작가가 번역을 준비한 경우에만 유효합니다."],
	options: {
		preset: "언어",
	},
};

export const event: Markdown = {
	title: "이벤트",
	summary: "조건에 따라 발생하는 시스템",
	points: ["조건이 일치할 때 발동합니다.", "발동 시 메시지 표시, 아이템 부여 또는 감소 등의 효과가 있습니다."],
	options: {
		preset: "이벤트",
		label: "이벤트",
	},
};

export const miscellaneous: Markdown = {
	title: "보충 사항",
	summary: "기타 보충 사항 설명",
	children: { event: event, language: language },
	options: {
		preset: "기타",
		label: "기타",
	},
};

// world

export const debug: Markdown = {
	title: "디버그",
	summary: "디버깅 확인을 위한 조작",
	points: ["디버깅 시에만 표시됩니다.", "게임 공개 및 배포 시에는 표시되지 않습니다."],
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "설정",
	summary: "게임 설정 변경",
	points: ["게임 표시, 처리와 관련된 설정을 합니다.", "게임 데이터 입출력 및 리셋도 가능합니다."],
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "통계",
	summary: "진행 상황 정리",
	points: ["지금까지의 게임 진행 상황을 확인할 수 있습니다."],
	options: {
		preset: "통계",
	},
};

export const general: Markdown = {
	title: "일반",
	summary: "월드별 설정",
	points: ["이 월드의 난이도와 고유 설정을 확인할 수 있습니다."],
	options: {
		preset: "일반",
	},
};

export const overview: Markdown = {
	title: "개요",
	summary: "이 게임 소개",
	points: ["이 게임의 월드(세계관, 설정)에 대해 확인할 수 있습니다.", "이 게임을 구동하는 콘솔(시스템)에 대해서도 확인할 수 있습니다."],
	options: {
		preset: "개요",
	},
};

export const world: Markdown = {
	title: "월드",
	summary: "게임 전반의 제어 및 설정 조작과 확인이 가능합니다,",
	children: { overview: overview, general: general, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const correction: Markdown = {
	title: "속성 보정",
	summary: "속성 보정 세부 정보",
	points: ["이 카테고리의 특정 속성에 대한 보정을 확인할 수 있습니다.", "보정은 아이템의 효과에 따른 보정입니다. 해당 아이템을 확인할 수 있습니다."],
	options: {
		preset: "수정",
	},
};

export const properties: Markdown = {
	title: "속성",
	summary: "보정 값 목록",
	points: ["카테고리별로 설정된 속성 목록입니다.", "속성이란 액션의 실행에 영향을 미치는 요소를 말합니다.", "아이템 장비에 따라 효과가 보정됩니다. (일부 아이템은 장비 불필요)"],
	options: {
		preset: "속성",
	},
};

export const property: Markdown = {
	title: "속성",
	summary: "보정 값 확인",
	points: ["속성이란 액션의 실행에 영향을 미치는 요소를 말합니다.", "할당된 초기 값에서 카테고리의 레벨, 설정된 액션의 레벨, 장비하고 있는 아이템의 보정을 감안하여 최종 수치가 산출됩니다."],
	children: { properties: properties, correction: correction },
	list: expandList("property", [properties, correction]),
	links: {
		properties: "플레이어/프로퍼티",
		correction: "플레이어/수정",
	},
	options: {
		label: "property",
		preset: "property",
	},
};

// item

export const trade: Markdown = {
	title: "거래",
	summary: "통화에 따라 아이템 구매 또는 판매",
	points: ["아이템에 따라 구매 및 매매가 불가능한 아이템이 있을 수 있습니다.", "잠금 상태인 아이템은 매매가 불가능합니다.", "용량이나 예약 슬롯(큐)에는 구매 횟수 상한이 설정되어 있는 경우가 있으며, 상한에 도달하면 그 이상 구매할 수 없습니다. (보상으로 인한 증가는 상한 적용 대상에서 제외됩니다.)"],
	options: {
		preset: "무역",
	},
};

export const items: Markdown = {
	title: "아이템",
	summary: "카테고리 내 아이템 리스트",
	points: ["길게 누르면 아이템의 장비를 전환할 수 있습니다.", "목록 중 하나의 아이템만 장비가 가능합니다. (카테고리로 장비할 수 있도록 설정되어 있는 경우)", "해제 조건이 충족되지 않은 아이템은 잠금 상태이며, 세부 정보를 확인할 수 없습니다."],
	options: {
		preset: "아이템",
	},
};

export const item: Markdown = {
	title: "아이템",
	summary: "아이템 상세 정보",
	points: ["아이템은 장비, 소비재, 귀중품 등 물건의 소유와 관련된 요소입니다.", "카테고리 중 하나의 아이템만 장비 가능합니다. (카테고리로 장비할 수 있도록 설정되어 있는 경우)", "해제 조건이 충족되지 않은 아이템은 잠금 상태이며, 세부 정보를 확인할 수 없습니다."],
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
	points: ["액션의 시작 또는 정지를 합니다.", "실행 횟수를 지정할 수 있습니다. 리소스가 소진될 때까지 실행하려면 0을 입력하세요."],
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "액션",
	summary: "카테고리 내 액션 목록",
	points: ["길게 누르면 액션 실행을 전환합니다.", "카테고리 중 하나의 아이템만 실행이 가능합니다.", "카테고리에 따라 여러 카테고리의 액션을 동시에 진행할 수 있습니다.", "해제 조건이 충족되지 않은 액션은 잠금 상태이며, 자세한 내용을 확인할 수 없습니다."],
	options: {
		preset: "액션",
	},
};

export const action: Markdown = {
	title: "액션",
	summary: "채집, 제작, 전투 등의 행동 요소",
	points: ["행동을 할 때마다 경험치를 얻을 수 있고, 레벨이 올라갈 수 있습니다.", "행동할 때마다 아이템을 소비하거나 획득할 수 있습니다.", "해제 조건이 충족되지 않은 액션은 잠금 상태이며, 자세한 내용을 확인할 수 없습니다."],
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const category: Markdown = {
	title: "카테고리",
	summary: "다양한 요소들을 모아놓은 것",
	points: ["액션과 아이템을 정리한 요소입니다."],
	options: {
		label: "카테고리",
		preset: "카테고리",
	},
};

// character
export const status: Markdown = {
	title: "상태",
	summary: "모든 속성 목록",
	points: ["아이템별 카테고리의 보정 값만 표시합니다.", "실행하는 액션에 따라 또 다른 보정이 있습니다."],
	options: {
		preset: "현황",
	},
};

export const inventory: Markdown = {
	title: "인벤토리",
	summary: "모든 아이템 목록",
	points: ["길게 누르면 아이템의 장비를 전환할 수 있습니다."],
	options: {
		preset: "인벤토리",
	},
};

export const activity: Markdown = {
	title: "활동",
	summary: "모든 액션 목록",
	points: ["길게 누르면 액션 실행을 전환합니다."],
	options: {
		preset: "활동",
	},
};

export const character: Markdown = {
	title: "캐릭터",
	summary: "주인공의 상황 확인 및 조작",
	points: ["이 내용은 카테고리를 조작하여 표시되는 내용과 동일합니다."],
	children: { activity: activity, inventory: inventory, status: status },
	options: {
		label: "캐릭터",
		preset: "캐릭터",
	},
};

export const player: Markdown = {
	title: "플레이어",
	summary: "게임 플레이에서 표시되는 각 컬럼별로 설명되어 있습니다.",
	points: ["초기 설정에서는 각 열 아래쪽에 같은 설명이 힌트로 표시됩니다.", "설정에 따라 힌트를 숨길 수 있습니다."],
	list: expandList("플레이어", [character, category, action, item, property, world, miscellaneous]),
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
