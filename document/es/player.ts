import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Idioma.",
	summary: "Cambiar de idioma",
	options: {
		preset: "language",
	},
};

export const event: Markdown = {
	title: "Evento",
	summary: "Sistema que se activa en un momento determinado",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "información complementaria",
	summary: "Otra información complementaria explicada.",
	children: { event: event, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "depurar",
	summary: "Operación de comprobación de depuración",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "configuración",
	summary: "Cambiar la configuración del juego",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "estadísticas",
	summary: "Resumen de los progresos",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "Resumen.",
	summary: "Sobre este juego.",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "mundo",
	summary: "Puedes manejar y comprobar los controles generales y la configuración del juego,",
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const correction: Markdown = {
	title: "Detalles de la propiedad",
	summary: "Cambio de valor por equipamiento o artículos",
	options: {
		preset: "property",
	},
};

export const properties: Markdown = {
	title: "propiedades",
	summary: "Lista de valores de corrección",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "propiedades",
	summary: "Comprobación de los valores de corrección",
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
	title: "transacciones",
	summary: "Compra o venta de Artículos en divisa.",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "Artículo",
	summary: "Lista de Artículos de la Categoría.",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "Artículo",
	summary: "Detalles del Artículo.",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "Actuar.",
	summary: "Control de las Acciones",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "ACCIÓN.",
	summary: "Lista de Acciones de la Categoría",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Acción.",
	summary: "Elementos de acción como recoger, fabricar y luchar.",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "Tarea",
	summary: "Lista de tareas de la categoría",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "Categoría.",
	summary: "Una recopilación de varios elementos.",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character
export const status: Markdown = {
	title: "Estado.",
	summary: "Lista de todas las propiedades",
	options: {
		preset: "status",
	},
};

export const inventory: Markdown = {
	title: "inventario",
	summary: "Lista de todos los Artículos",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "actividad",
	summary: "Lista de todas las Acciones",
	options: {
		preset: "activity",
	},
};

export const missions: Markdown = {
	title: "Misión",
	summary: "Lista de todas las tareas",
	options: {
		preset: "missions",
	},
};

export const character: Markdown = {
	title: "personaje",
	summary: "Identificación y funcionamiento de la situación del protagonista.",
	children: { activity: activity, inventory: inventory, status: status, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "jugador",
	summary: "El juego se explica para cada columna que aparece en Juega.",
	points: ["Por defecto, la misma descripción aparece como pista en la parte inferior de cada columna.", "Pistas ocultables por configuración."],
	list: expandList("jugador", [character, category, action, item, property, world, miscellaneous], "Descripción"),
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
