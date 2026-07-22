import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Idioma.",
	summary: "Cambiar de idioma",
	points: ["Cambia el idioma mostrado en el juego.", "Sólo es válido si el autor ha facilitado una traducción."],
	options: {
		preset: "idioma",
	},
};

export const event: Markdown = {
	title: "Evento",
	summary: "Sistemas basados en la condición.",
	points: ["Se activa cuando se cumplen las condiciones.", "Se muestran mensajes cuando se activa, se dan o reducen Artículos, etc."],
	options: {
		preset: "evento",
		label: "evento",
	},
};

export const miscellaneous: Markdown = {
	title: "información complementaria",
	summary: "Otra información complementaria explicada.",
	children: { event: event, language: language },
	options: {
		preset: "varios",
		label: "varios",
	},
};

// world

export const debug: Markdown = {
	title: "depurar",
	summary: "Operación de comprobación de depuración",
	points: ["Sólo visible durante la depuración.", "No se muestra cuando el juego se publica y distribuye."],
	options: {
		preset: "depurar",
	},
};

export const config: Markdown = {
	title: "configuración",
	summary: "Cambiar la configuración del juego",
	points: ["Configure los ajustes relacionados con la visualización y el procesamiento de los juegos.", "Los datos del juego también se pueden introducir, emitir y restablecer."],
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "estadísticas",
	summary: "Resumen de los progresos",
	points: ["Puedes consultar la situación del progreso del juego hasta el momento."],
	options: {
		preset: "estadísticas",
	},
};

export const general: Markdown = {
	title: "general",
	summary: "Configuraciones específicas para cada mundo",
	points: ["Puedes comprobar el nivel de dificultad y la configuración específica de este mundo."],
	options: {
		preset: "general",
	},
};

export const overview: Markdown = {
	title: "Resumen.",
	summary: "Sobre este juego.",
	points: ["Infórmate sobre el mundo del juego (visión del mundo y configuración).", "También puedes obtener información sobre la consola (sistema) que ejecuta este juego."],
	options: {
		preset: "visión general",
	},
};

export const world: Markdown = {
	title: "mundo",
	summary: "Puedes manejar y comprobar los controles generales y la configuración del juego,",
	children: { overview: overview, general: general, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "mundo",
		label: "mundo",
	},
};

// property

export const correction: Markdown = {
	title: "Correcciones de propiedades.",
	summary: "Detalles de las correcciones de propiedades.",
	points: ["Puede consultar las correcciones de propiedades concretas en esta Categoría.", "La corrección se debe al efecto del Artículo. Puede comprobar el Artículo."],
	options: {
		preset: "corrección",
	},
};

export const properties: Markdown = {
	title: "propiedades",
	summary: "Lista de valores de corrección",
	points: ["Lista de propiedades configuradas para cada Categoría.", "Las propiedades son elementos que afectan a la ejecución de las Acciones.", "La eficacia se corrige equipando el Artículo. (Algunos Artículos no necesitan Equipamiento)."],
	options: {
		preset: "propiedades",
	},
};

export const property: Markdown = {
	title: "propiedades",
	summary: "Comprobación de los valores de corrección",
	points: ["Las propiedades son elementos que afectan a la ejecución de las Acciones.", "La cifra final se calcula a partir del valor inicial asignado, teniendo en cuenta el nivel de Categoría, el nivel configurado para la Acción y la corrección para el Equipamiento."],
	children: { properties: properties, correction: correction },
	list: expandList("propiedad", [properties, correction]),
	links: {
		properties: "jugador/propiedades.",
		correction: "jugador/corrección",
	},
	options: {
		label: "propiedad",
		preset: "propiedad",
	},
};

// item

export const trade: Markdown = {
	title: "transacciones",
	summary: "Compra o venta de Artículos en divisa.",
	points: ["Algunos Artículos no se pueden comprar ni vender.", "Los Artículos bloqueados no se pueden comprar ni vender.", "Es posible que se haya establecido un límite máximo para comprar capacidad o plazas de reserva (cola); una vez alcanzado dicho límite, no se podrán comprar más cosas. (Los aumentos derivados de las recompensas no se tienen en cuenta a la hora de calcular este límite)."],
	options: {
		preset: "comercio",
	},
};

export const items: Markdown = {
	title: "Artículo",
	summary: "Lista de Artículos de la Categoría.",
	points: ["Mantén pulsado para cambiar entre los Artículos de Equipamiento.", "Posible Equipamiento de un solo Artículo de la lista. (si está configurado para ser Equipamiento como Categoría).", "Los Artículos que no cumplen las condiciones de publicación están bloqueados y no pueden verse en detalle."],
	options: {
		preset: "artículos",
	},
};

export const item: Markdown = {
	title: "Artículo",
	summary: "Detalles del Artículo.",
	points: ["Artículos son elementos relacionados con la propiedad de objetos como Equipamiento, consumibles y objetos de valor.", "Posible Equipamiento de un solo Artículo de una Categoría. (Si está configurado para ser Equipamiento de Categoría)", "Los Artículos que no cumplen las condiciones de publicación están bloqueados y no pueden verse en detalle."],
	children: { items: items, trade: trade },
	options: {
		preset: "artículo",
		label: "artículo",
	},
};

// action

export const act: Markdown = {
	title: "Actuar.",
	summary: "Control de las Acciones",
	points: ["Comenzar o detener la Acción.", "Puede especificar el número de ejecuciones. Introduzca 0 para ejecutar hasta que se agote el recurso."],
	options: {
		preset: "actuar",
	},
};

export const actions: Markdown = {
	title: "ACCIÓN.",
	summary: "Lista de Acciones de la Categoría",
	points: ["Una pulsación larga activa la ejecución de la Acción.", "Posible sólo un Artículo de una Categoría.", "Algunas Categorías permiten que las Acciones de más de una Categoría progresen simultáneamente.", "Las Acciones que no cumplen las condiciones de liberación están bloqueadas y no pueden verse en detalle."],
	options: {
		preset: "acciones",
	},
};

export const action: Markdown = {
	title: "Acción.",
	summary: "Elementos de acción como recoger, fabricar y luchar.",
	points: ["Puedes ganar experiencia por cada acción, lo que aumenta tu nivel.", "Cada acción consume u obtiene un Artículo.", "Las Acciones que no cumplen las condiciones de liberación están bloqueadas y no pueden verse en detalle."],
	children: { actions: actions, act: act },
	options: {
		preset: "acción",
		label: "acción",
	},
};

// category

export const category: Markdown = {
	title: "Categoría.",
	summary: "Una recopilación de varios elementos.",
	points: ["Es un elemento que reúne Acciones y Artículos."],
	options: {
		label: "categoría",
		preset: "categoría",
	},
};

// character
export const status: Markdown = {
	title: "Estado.",
	summary: "Lista de todas las propiedades",
	points: ["Sólo se muestran los valores de corrección por Categoría por Artículo.", "Dependiendo de la Acción a realizar, existen otras correcciones."],
	options: {
		preset: "estado",
	},
};

export const inventory: Markdown = {
	title: "inventario",
	summary: "Lista de todos los Artículos",
	points: ["Mantén pulsado para cambiar entre los Artículos de Equipamiento."],
	options: {
		preset: "inventario",
	},
};

export const activity: Markdown = {
	title: "actividad",
	summary: "Lista de todas las Acciones",
	points: ["Una pulsación larga activa la ejecución de la Acción."],
	options: {
		preset: "actividad",
	},
};

export const character: Markdown = {
	title: "personaje",
	summary: "Identificación y funcionamiento de la situación del protagonista.",
	points: ["Este contenido es idéntico al que se muestra al operar con la Categoría."],
	children: { activity: activity, inventory: inventory, status: status },
	options: {
		label: "carácter",
		preset: "carácter",
	},
};

export const player: Markdown = {
	title: "jugador",
	summary: "El juego se explica para cada columna que aparece en Juega.",
	points: ["Por defecto, la misma descripción aparece como pista en la parte inferior de cada columna.", "Pistas ocultables por configuración."],
	list: expandList("jugador", [character, category, action, item, property, world, miscellaneous]),
	// children: { character: character, category: category, action: action, item: item, property: property, world: world, miscellaneous: miscellaneous },
	options: {
		preset: "jugador",
		label: "jugador",
		linkedList: true,
		directory: "jugador",
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
