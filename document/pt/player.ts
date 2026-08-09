import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Idioma.",
	summary: "Mudança de idiomas",
	options: {
		preset: "language",
	},
};

export const event: Markdown = {
	title: "Evento",
	summary: "Sistema que é acionado em intervalos regulares",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "informações suplementares",
	summary: "Outras informações complementares explicadas.",
	children: { event: event, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "depurar",
	summary: "Operação para verificações de depuração",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "configuração",
	summary: "Alterar as configurações do jogo",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "estatísticas",
	summary: "Resumo do progresso",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "Visão geral.",
	summary: "Sobre este jogo.",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "mundo",
	summary: "Você pode operar e verificar os controles e as configurações gerais do jogo,",
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const correction: Markdown = {
	title: "Correções de propriedades.",
	summary: "Detalhes das correções das propriedades.",
	options: {
		preset: "correction",
	},
};

export const properties: Markdown = {
	title: "propriedades",
	summary: "Lista de valores de correção",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "propriedades",
	summary: "Verificação dos valores de correção",
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
	title: "transações",
	summary: "Comprar ou vender itens em moeda.",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "Item",
	summary: "Lista de itens da Categoria.",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "Item",
	summary: "Detalhes do item.",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "Agir.",
	summary: "Controle de ações",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "AÇÃO.",
	summary: "Lista de Ações na Categoria",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Ação.",
	summary: "Elementos de ação, como coletar, criar e lutar.",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "Tarefa",
	summary: "Lista de tarefas da categoria",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "Categoria.",
	summary: "Uma compilação de vários elementos.",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character
export const status: Markdown = {
	title: "Status.",
	summary: "Lista de todas as propriedades",
	options: {
		preset: "status",
	},
};

export const inventory: Markdown = {
	title: "inventário",
	summary: "Lista de todos os itens",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "atividade",
	summary: "Lista de todas as Ações",
	options: {
		preset: "activity",
	},
};

export const missions: Markdown = {
	title: "Missão",
	summary: "Lista de todas as tarefas",
	options: {
		preset: "missions",
	},
};

export const character: Markdown = {
	title: "personagem",
	summary: "Identificação e manipulação da situação do protagonista.",
	children: { activity: activity, inventory: inventory, status: status, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "jogador",
	summary: "O jogo é explicado para cada coluna que aparece em Play the Game.",
	points: ["Por padrão, a mesma descrição aparece como uma Dica na parte de baixo de cada coluna.", "As Dicas podem ser ocultadas por configuração."],
	list: expandList("jogador", [character, category, action, item, property, world, miscellaneous], "Descrição"),
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
