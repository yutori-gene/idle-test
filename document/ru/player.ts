import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Язык.",
	summary: "Переключение языков",
	options: {
		preset: "language",
	},
};

export const event: Markdown = {
	title: "Событие",
	summary: "Система, запускающаяся в определённый момент времени",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "дополнительная информация",
	summary: "Другая дополнительная информация.",
	children: { event: event, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "отладка",
	summary: "Операция для отладочных проверок",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "конфигурация",
	summary: "Изменение конфигураций игры",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "статистика",
	summary: "Краткая информация о прогрессе",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "Обзор.",
	summary: "Об этой игре.",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "мир",
	summary: "Вы можете управлять и проверять общие элементы управления и конфигурации игры,",
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const correction: Markdown = {
	title: "Подробности о свойстве",
	summary: "Изменение значения из-за снаряжения или предметов",
	options: {
		preset: "property",
	},
};

export const properties: Markdown = {
	title: "свойства",
	summary: "Список значений коррекции",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "свойства",
	summary: "Проверка значений коррекции",
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
	title: "транзакции",
	summary: "Купить или продать предметы в валюте.",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "Предмет",
	summary: "Список предметов в категории.",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "предмет",
	summary: "Предметы.",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "Действовать.",
	summary: "Контроль действий",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "ДЕЙСТВИЕ.",
	summary: "Список действий в категории",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Действие.",
	summary: "Элементы действия, такие как сбор, изготовление и сражения.",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "Задача",
	summary: "Список задач в категории",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "Категория.",
	summary: "Компиляция из различных элементов.",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character
export const status: Markdown = {
	title: "Статус.",
	summary: "Список всех свойств",
	options: {
		preset: "status",
	},
};

export const inventory: Markdown = {
	title: "инвентарь",
	summary: "Список всех предметов",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "активность",
	summary: "Список всех действий",
	options: {
		preset: "activity",
	},
};

export const missions: Markdown = {
	title: "Миссия",
	summary: "Список всех задач",
	options: {
		preset: "missions",
	},
};

export const character: Markdown = {
	title: "персонаж",
	summary: "Идентификация и работа с ситуацией протагониста.",
	children: { activity: activity, inventory: inventory, status: status, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "игрок",
	summary: "Объяснение игры дается для каждого столбца, представленного в разделе \"Играй в игру\".",
	points: ["По умолчанию одно и то же описание отображается в виде подсказки внизу каждого столбца.", "Подсказки можно скрыть с помощью конфигурации."],
	list: expandList("игрок", [character, category, action, item, property, world, miscellaneous], "Описание"),
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
