import * as Type from "~d/type/descriptionType";
import { Markdown, Tree, expandList } from "~d/type/markdownType";

// quate

const typeTree = `
world
├── category
├── action
├── item
├── group
├── event
└── preset
`;

// miscellaneous

export const translation: Markdown = {
	title: "traducción",
	summary: "Configuración para traducir el texto del juego a otros idiomas.",
	points: ["Configura el texto que se va a traducir.", "La configuración multilingüe está disponible cuando la configuración de traducción está activada.", "Si la traducción está desactivada, la información descrita durante el desarrollo se mostrará tal cual.", "La configuración de la traducción y el cambio de idioma no son posibles durante el desarrollo previo a la publicación."],
	options: {
		label: "traducción",
	},
	children: {
		flag: {
			title: "Activación de la traducción",
			summary: "Configuración desactivada de la función de traducción.",
			points: ["La configuración multilingüe está disponible cuando la configuración de traducción está activada.", "La traducción no se activa durante el desarrollo antes de la publicación. El cambio entre idiomas se activará después de la publicación.", "Si se activa la traducción, se admitirán diez idiomas diferentes y será necesario disponer de datos de traducción para todos los idiomas. No es posible activar sólo algunos de los idiomas.", "Cuando el usuario inicia el juego, se muestra primero el idioma utilizado en el desarrollo. A continuación, el idioma puede cambiarse a cualquier otro.", "El proceso de traducción es tedioso, pero permite que mucha gente juegue con él."],
		},
		file: {
			title: "archivo de idioma",
			summary: "Archivo JSON de los datos de traducción.",
			points: ["Cuando los datos del juego salen con una configuración pública, se genera un archivo JSON para la traducción en `translations/world` en la carpeta de salida.", "En la carpeta se encuentran los archivos JSON para la traducción en cada idioma. El contenido contiene datos sin traducir.", "El contenido tiene un id dentro de cada Tipo. Además, en su interior hay un nombre y una descripción.", "Necesario traducir y guardar todos los nombres y descripciones."],
		},
		task: {
			title: "Tareas de traducción",
			summary: "Edición de datos de traducción",
			points: ["Todos los archivos de traducción contienen datos en el idioma en el momento del desarrollo.", "Necesario traducir los archivos que no estén en el idioma en el que se crearon."],
			children: {
				ai: {
					title: "AI",
					summary: "Traducción basada en IA",
					points: ["Traduce utilizando IA como ChatGPT, Copilot y Claude.", "Posible traducir de una vez y con cierta calidad.", "Puede que no sea una traducción perfecta, sobre todo para los términos técnicos y los nombres propios.", "Dependiendo del volumen de traducciones, el uso de la IA puede resultar costoso.", "Si el progreso de la traducción por parte de la IA se interrumpe en mitad del proceso, es posible decirle a la IA que \"continúe\" y puede que lo consiga. (En algunos casos, puede que esto no sirva de nada)."],
					children: {
						prompt: {
							title: "Ejemplos de indicaciones",
							summary: "Ejemplos de instrucciones de traducción dadas a la IA",
							points: ["Ejemplo: traduzca los valores `name` y `explanation` de los datos JSON cargados del Inglés al Japonés. No cambie nada de los otros minutos de los datos."],
						},
						gpt: {
							title: "Uso de GPT",
							summary: "Traducción utilizando el GPT de ChatGPT.",
							points: ["El Traductor de Lenguaje JSON proporcionado en la librería GPT proporcionada por ChatGPT puede ser utilizado para traducir JSON con facilidad.", "La estructura JSON se conserva en la traducción.", "Los servicios de IA distintos de ChatGPT pueden ofrecer funciones similares."],
						},
					},
				},
				online: {
					title: "servicio de traducción",
					summary: "Utilizar los servicios de traducción",
					points: ["Traduce utilizando servicios en línea como DeepL y Google Translate.", "La calidad de las traducciones es superior a la de las traducciones automáticas, pero se cobra un suplemento en función del volumen de traducción.", "Los archivos JSON no pueden ser traducidos directamente por los servicios de traducción, por lo que es Necesario crear y utilizar un programa.", "Por una tarifa, hay algunos servicios que traducen los datos JSON tal cual. (por ejemplo, doctranslator.com)"],
				},
				manual: {
					title: "manual (funcionamiento)",
					summary: "Traducción manual",
					points: ["Abra el archivo de traducción en un editor de texto e introduzca el contenido traducido en cada idioma. Esto lleva mucho tiempo, pero te permite traducir el archivo exactamente como quieres."],
				},
			},
		},
		code: {
			title: "código del idioma",
			summary: "Lista de códigos de idiomas admitidos",
			list: [
				["código del idioma", "Idioma."],
				["en", "Inglés"],
				["zh", "Chino (lengua)"],
				["es", "Español"],
				["ar", "Árabe (lengua)"],
				["pt", "Portugués"],
				["hola", "Hindi"],
				["fr", "Francés"],
				["ru", "Ruso"],
				["de", "Alemán"],
				["ES", "Japonés"],
			],
		},
	},
};

export const miscellaneous: Markdown = {
	title: "información complementaria",
	summary: "Otra información complementaria explicada.",
	points: ["Información de referencia."],
	list: expandList("suplemento", [translation]),
	options: {
		label: "varios",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "propiedades",
	summary: "Configuración de los efectos que tiene un Artículo.",
	points: ["Este es un Artículo de efecto que puede ser configurado en el Artículo.", "Los Artículos con un Tipo de Equipamiento `necesario` o `consumible` sólo se aplican mientras están equipados. En el caso de los objetos \"innecesarios\", el efecto sólo se aplica mientras se poseen.", "Los valores de ambos elementos se calculan como un ajuste por la diferencia de nivel entre el nivel del jugador y el nivel de la Acción.", "Por ejemplo, si el valor de ataque es 10, el ataque se calcula como si el nivel del jugador fuera 10 superior al nivel de la Acción. Menos valores son lo contrario.", "ATAQUE, DEFENSA, PRECISIÓN, EVASIÓN y RESTAURACIÓN sólo son válidos para acciones de tipo \"resistencia\"."],
	list: [
		["propiedades", "Detalles de la eficacia."],
		["velocidad", "Reduce el tiempo necesario para realizar una Acción. El tiempo necesario varía inversamente a la diferencia de nivel."],
		["oportunidad", "Modifica la probabilidad de éxito de una Acción. La probabilidad aumenta en proporción a la diferencia de nivel."],
		["experiencia", "Cambia la experiencia adquirida. Aumenta en proporción a la diferencia de nivel (el cálculo es inverso: cuanto mayor es el nivel de Acción, más ganas)."],
		["ataque", "Cambia el daño de resistencia infligido al oponente. (Acción de resistencia solamente)."],
		["defensa", "Reduce el daño de resistencia recibido de los oponentes. (sólo acción de resistencia)."],
		["precisión", "Reduce el porcentaje de ataques fallidos. (sólo acción de resistencia)."],
		["evasión", "Cambia el índice de evasión de los ataques del oponente. (Acción de resistencia solamente)."],
		["restaurar", "Cambia la cantidad de resistencia restaurada al fin de una Acción. (sólo para acciones de resistencia)."],
	],
	children: {
		category: {
			title: "Categoría.",
			summary: "Especificación de la Categoría a la que se aplica la propiedad.",
			points: ["Configura el ID de la Categoría a la que se aplica esta propiedad.", "La configuración `*` se aplica a todas las Categorías.", "Si está en blanco, se aplica a la Categoría a la que pertenece el Artículo."],
		},
		attack: {
			title: "Valor de ataque [diferencia de nivel].",
			summary: "Corrección del daño de resistencia infligido al oponente (sólo válido para acciones de resistencia).",
			points: ["El daño del ataque se calcula suponiendo que el nivel del jugador es así de superior al nivel de la Acción."],
		},
		defence: {
			title: "Valor de defensa [diferencia de nivel].",
			summary: "Corrección del daño de resistencia recibido de un oponente (sólo válido para acciones de ESTAMINA).",
			points: ["El daño sufrido se calcula como si el nivel del jugador fuera este valor superior al nivel de la Acción. Cuanto mayor sea el valor, menor será el daño infligido."],
		},
		accuracy: {
			title: "Valor de precisión [diferencia de nivel].",
			summary: "Corrección del porcentaje de ataques fallidos (sólo válido para acciones de resistencia).",
			points: ["El porcentaje de fallos se calcula suponiendo que el nivel del jugador es este valor superior al nivel de la Acción. Cuanto mayor sea el valor, menor será el porcentaje de fallos."],
		},
		evasion: {
			title: "Valor de evasión [diferencia de nivel].",
			summary: "Corrección de la tasa de evasión de los ataques del adversario (sólo válida para acciones de resistencia).",
			points: ["El índice de evasión se calcula suponiendo que el nivel del jugador es así de alto que el nivel de la Acción."],
		},
		restore: {
			title: "Valor de restauración [diferencia de nivel].",
			summary: "Corrección para restaurar la resistencia (sólo válida para acciones de ESTAMINA).",
			points: ["La cantidad de resistencia restaurada se calcula asumiendo que el nivel del jugador es así de alto que el nivel de la Acción."],
		},
		speed: {
			title: "Rapidez [diferencia de nivel].",
			summary: "Corrección de la duración de la Acción",
			points: ["El tiempo necesario se calcula suponiendo que el nivel del jugador es este valor superior al nivel de la Acción. Cuanto mayor sea el valor, menor será el tiempo necesario."],
		},
		chance: {
			title: "Probabilidad de éxito [diferencia de nivel].",
			summary: "Corrección de la probabilidad de éxito de la Acción.",
			points: ["La probabilidad de éxito de la Acción se calcula suponiendo que el nivel del jugador es este valor superior al nivel de la acción. Cuanto mayor sea el valor, mayor será la probabilidad de éxito."],
		},
		experience: {
			title: "Experiencia [diferencia de nivel].",
			summary: "Correcciones a la experiencia adquirida",
			points: ["La experiencia se calcula como si el nivel del jugador fuera tanto más bajo que el nivel de la Acción (cuanto más alto sea el nivel de la Acción, más experiencia se gana, ya que el cálculo se invierte)."],
		},
	},
	options: {
		label: "propiedad",
	},
};

export const combat: Type.Combat = {
	title: "valor de combate",
	summary: "Valores de corrección de combate para acciones de Tipo resistencia.",
	points: ["Valores de corrección válidos sólo para Acciones de Tipo `stamina`.", "Cada valor se calcula como una corrección adicional a la diferencia de nivel entre el jugador y la Acción.", "Por ejemplo, si el valor del ataque es 10, el daño del ataque se calcula como si el nivel del jugador fuera 10 superior al nivel de la Acción. Menos si es negativo, la corrección es en sentido contrario.", "Si se configura como `defaultCombat` en `General`, se convierte en el parámetro de combate por defecto para todo el mundo."],
	children: {
		attack: {
			title: "Valor de ataque [diferencia de nivel].",
			summary: "Corrección por diferencia de nivel del daño de resistencia infligido a los rivales.",
			points: ["Cuanto mayor sea el valor, mayor será el daño infligido."],
		},
		defence: {
			title: "Valor de defensa [diferencia de nivel].",
			summary: "Corrección por diferencia de nivel del daño de resistencia recibido de los rivales.",
			points: ["Cuanto mayor sea el valor, más se reduce el daño."],
		},
		accuracy: {
			title: "Valor de precisión [diferencia de nivel].",
			summary: "Corrección de la diferencia de nivel en el porcentaje de ataques fallidos.",
			points: ["Cuanto mayor sea el valor, menor será el porcentaje de errores."],
		},
		evasion: {
			title: "Valor de evasión [diferencia de nivel].",
			summary: "Corrección por diferencia de nivel del índice de evasión de los ataques del adversario.",
			points: ["Cuanto mayor sea el valor, más fácil será evadir el ataque del adversario."],
		},
		restore: {
			title: "Valor de restauración [diferencia de nivel].",
			summary: "Corrección de la diferencia de nivel para restaurar la resistencia.",
			points: ["Cuanto mayor sea el valor, más resistencia se restaurará."],
		},
	},
	options: {
		label: "combate",
	},
};

export const acquisition: Type.Acquisition = {
	title: "adquisiciones",
	summary: "Configuración de adquisición a nivel de Artículo y Categoría.",
	points: ["Configura las adquisiciones.", "Puede cambiar el nivel de la Categoría, así como el Artículo, y el número de veces que se ha realizado la Acción.", "Se puede configurar la probabilidad de obtener el producto."],
	list: [
		["Tipo.", "Adquisiciones."],
		["Categoría.", "nivel"],
		["Acción.", "Número de veces que se ha ejecutado."],
		["Artículo", "número de posesiones"],
	],
	children: {
		type: {
			title: "Tipo.",
			summary: "Tipo de elemento que se va a adquirir.",
			list: [
				["Tipo.", "Lo que se adquiere."],
				["Categoría.", "Nivel (conversión de experiencia añadida)"],
				["Acción.", "Número de veces que se ha ejecutado."],
				["Artículo", "número de posesiones"],
			],
		},
		id: {
			title: "ID del elemento",
			summary: "ID que identifica el elemento que se va a adquirir.",
		},
		count: {
			title: "valor",
			summary: "Valores numéricos que deben obtenerse",
			points: ["Menos configuraciones negativas reducen el número de posesiones, el número de veces que se han realizado y su nivel. Sin embargo, no puede ser inferior a 0.", "Si un Artículo tiene una configuración máx. de posesiones (máximo), el número de posesiones no aumentará más allá de ese valor.", "Si el Tipo es Categoría, el valor configurado se añade directamente al nivel (1 para 1 nivel, 0,5 para 0,5 nivel). La forma habitual de ajustar esto es configurando el valor de experiencia de la Acción. Esta configuración no es Innecesaria a menos que haya un propósito especial."],
		},
		chance: {
			title: "Probabilidad [-1 a 1]",
			summary: "Probabilidad de que la obtención alcance el éxito (los valores negativos solo se tienen en cuenta en caso de fracaso)",
			points: ["Configuración de la probabilidad de obtención como un número decimal comprendido entre -1 y 1. Para calcular la probabilidad se utiliza el valor absoluto.", "Cuando el valor es positivo, solo se evalúa si la acción tiene éxito; con un valor de `1` se obtiene siempre, y con un valor de `0,5`, se obtiene con una probabilidad del 50 %.", "Cuando el valor es negativo, solo se evalúa en caso de fracaso de la Acción; con `-1` se obtiene siempre, y con `-0,5`, se obtiene con una probabilidad del 50 %.", "Si el valor es `0`, no se obtiene en ningún caso, ni en caso de éxito ni en caso de fracaso.", "El valor por defecto es `1` (se obtiene siempre cuando la operación tiene éxito)."],
		},
	},
	links: { type: "tipo" },
	options: {
		label: "adquisición",
	},
};

export const requirement: Type.Requirement = {
	title: "condiciones generales",
	summary: "Configuración de los requisitos necesarios para el uso y la visualización de los elementos.",
	points: ["Estas son las condiciones configuradas para cada elemento por Categoría, Acción y Artículo.", "Si no se cumplen todas las condiciones de configuración, no se podrán realizar las operaciones indicadas en la tabla.", "Si la función de bloqueado está activada, el propio elemento se oculta hasta que se cumpla la condición."],
	list: [
		["Dónde configurarlo", "Lo que sólo puede hacerse si se cumplen las condiciones."],
		["Categoría.", "Ejecución de todas las Acciones y manipulación de Artículos de la Categoría"],
		["Acción.", "Ejecución de las Acciones"],
		["Artículo", "Manipulación de Artículos (por ejemplo, Equipamiento)"],
	],
	children: {
		type: {
			title: "Tipo.",
			summary: "Tipo de elemento referenciado como condición.",
			list: [
				["Tipo.", "Valores de referencia"],
				["Categoría.", "Nivel de Categoría."],
				["Acción.", "Número de veces que se ha realizado la Acción."],
				["Artículo", "Número de Artículos contados."],
			],
		},
		id: {
			title: "ID del elemento",
			summary: "ID del elemento al que se refiere la condición.",
		},
		count: {
			title: "valor",
			summary: "Valores numéricos Necesarios para los requisitos.",
			points: ["La condición se cumple si el valor es mayor o arriba del valor especificado."],
		},
		chance: {
			title: "Probabilidad de consumo [0-1].",
			summary: "Probabilidad de que se consuma un Artículo (0-1, válido sólo si el Tipo es Artículo).",
			points: ["Probabilidad de que se consuma un Artículo cuando se cumple la condición y se realiza la Acción.", "Siempre se consume a `1`, 50% de probabilidad de consumo a `0.5` y no se consume a `0`.", "El valor por defecto es `1` (siempre se consume).", "No válido si el Tipo es distinto de Artículo."],
		},
		equipment: {
			title: "Equipamiento",
			summary: "Requiere que el Artículo esté en estado de Equipamiento (sólo válido si el Tipo es Artículo) o",
			points: ["Cuando se activa, el Artículo Necesario debe estar Equipado y Poseído.", "No válido si el Tipo es distinto de Artículo."],
		},
	},
	links: { type: "tipo" },
	options: {
		label: "requisito",
	},
};

export const information: Type.Information = {
	title: "información",
	summary: "Configuración de la información básica sobre el elemento (ID, nombre, icono, color, etc.)",
	points: ["Artículos de información básica comunes a cada elemento del mundo (Categorías, Acciones, Artículos, Eventos, etc.).", "Cada elemento se configura por separado."],
	children: {
		id: {
			title: "ID",
			summary: "ID único para identificar el elemento",
			points: ["ID para identificar unívocamente cada elemento.", "En el editor, es una cadena para identificar el elemento.", "Por ejemplo, el ID especifica qué Artículo se obtiene cuando se completa la Acción."],
			important: "Una vez configurado el ID, no lo cambies una vez distribuido el juego. Cambiarlo provocará incoherencias con los datos existentes del juego y éste no funcionará correctamente.",
			children: {
				displayName: {
					title: "Nombre mostrado.",
					summary: "Nombre para mostrar generado automáticamente a partir del ID",
					points: ["Los caracteres que pueden utilizarse son una combinación de letras, guiones y números.", "Si el nombre aún no está configurado, la primera letra de cada palabra se escribe en mayúscula y el guión se sustituye por un espacio, que se configura automáticamente en el nombre.", "Para idiomas distintos del Inglés, la entrada del nombre debe configurarse individualmente."],
					children: {
						example: {
							title: "Ejemplo.",
							summary: "Ejemplos reales de conversión de ID",
							points: ["Si el ID es `stylish-strong-axe`, el nombre es `Stylish Strong Axe`."],
						},
					},
				},
				noDuplicate: {
					title: "Nada de duplicados.",
					summary: "Prohibición de ID duplicados dentro del mismo Tipo.",
					points: ["No duplique nada dentro de los tipos Categoría, Acción, Artículo, Evento y Preajuste, ya que se utilizan para identificar elementos.", "Tener el mismo ID para diferentes Tipos no es un problema."],
					links: { type: "tipo" },
				},
			},
		},
		name: {
			title: "Nombre.",
			summary: "Nombre del elemento tal y como aparece",
			points: ["Nombre del elemento mostrado en el juego.", "También se pueden introducir otros idiomas además del Inglés.", "Se aceptan nombres que dupliquen otros elementos.", "Si es demasiado largo, la parte que desborda se omite de la pantalla durante la reproducción con `...`."],
			children: {
				translateFromId: {
					title: "Conversión automática de ID",
					summary: "Generación automática de nombres a partir de ID",
					points: ["Si el campo se deja en blanco, la información se muestra automáticamente basándose en el ID. Para más información, consulte la sección anterior."],
				},
			},
		},
		explanation: {
			title: "nota explicativa",
			summary: "Descripción detallada del elemento.",
			points: ["Descripción de los elementos que aparecen en el juego.", "Se pueden introducir otros idiomas además del Inglés. Se muestran todos los textos, incluso los más largos.", "Si no se da ninguna explicación, déjelo en blanco."],
		},
		icon: {
			title: "icono",
			summary: "Configuración de iconos para representar elementos.",
			points: ["Los iconos se pueden configurar como imágenes, Iconify o emojis.", "Iconify es un servicio que ofrece una amplia gama de iconos.", "Si se cuenta con más de una configuración, las imágenes, Iconify y los pictogramas se priorizan y se muestran en ese orden."],
			children: {
				image: {
					title: "Imagen.",
					summary: "Utilice cualquier archivo de imagen",
					points: ["Imagen que representa el elemento.", "Si el tamaño del archivo es grande, se redimensiona automáticamente.", "Innecesario si se ha configurado Iconify o pictogramas."],
					children: {
						"tipo de archivo": {
							title: "Tipo de fichero.",
							summary: "Formatos de archivo de imagen compatibles.",
							points: ["Puede utilizar los tipos generales que pueden mostrarse en el navegador.", "JPEG, PNG, GIF, WebP, SVG, etc."],
						},
					},
				},
				iconify: {
					title: "Iconify",
					summary: "Utilizar el conjunto de iconos de Iconify",
					points: ["Iconos que representan elementos.", "Iconify es un servicio que ofrece una amplia gama de iconos.", "Si se configura una imagen, ésta tendrá prioridad."],
					children: {
						iconify: {
							title: "Iconify",
							summary: "Cómo seleccionar iconos de Iconify",
							points: ["Busca en `Iconify` los iconos que se pueden mostrar.", "Puedes encontrar rápidamente los mejores iconos buscando iconos.", "Selecciona un icono para ver su identificador (tipo de conjunto de iconos `:` nombre del icono), como `game-icons:sword-wound`, y pégalo directamente en este campo de iconos."],
							images: ["icono-selección.png"],
							links: { iconify: "https://icon-sets.iconify.design" },
						},
					},
				},
				emoji: {
					title: "pictograma",
					summary: "Visualización de iconos con pictogramas",
					points: ["Mostrar pictogramas como iconos.", "Puede convertirse de texto a pictogramas y configurarse rápidamente.", "Para los pictogramas, introduzca los pictogramas Unicode tal cual.", "Como se utilizan los pictogramas introducidos en el entorno de ejecución, se muestran de forma ligeramente diferente para los distintos usuarios.", "Iconify permite configurar emojis que son nada dependientes de cada entorno", "Se pueden mostrar caracteres no pictográficos, pero la visualización puede corromperse si hay más de un carácter.", "Introduzca pictogramas, por ejemplo, `🗡️` o `⚔️`."],
				},
			},
		},
		color: {
			title: "variedad",
			summary: "Configura el color de visualización del elemento.",
			points: ["Como color de elemento, se aplica al icono y al color de fondo del elemento.", "Seleccione en el selector de color del editor."],
			children: {
				"herencia de los padres": {
					title: "Herencia de elementos padre",
					summary: "Asumir la configuración de color del elemento padre.",
					points: ["Si está en blanco, se toma el color configurado en el elemento padre.", "La jerarquía de tipos de cada elemento es la siguiente", "Por ejemplo, si una Acción tiene una configuración de color individual, se utilizará, mientras que si la Acción no tiene una configuración de color individual, se utilizará el color de la Categoría o del Mundo."],
					quote: typeTree,
					links: { type: "tipo" },
				},
			},
		},
	},
	options: {
		label: "información",
	},
};

export const component: Markdown = {
	title: "componente",
	summary: "Piezas comunes",
	points: ["Se extraen y manejan los componentes comunes utilizados en cada configuración de ubicación.", "Los componentes utilizados en todas estas áreas son comunes, pero algunos de los componentes no se utilizan en algunos de los artículos."],
	list: expandList("componente", [information, requirement, acquisition, combat, property]),
	options: {
		label: "componente",
		linkedList: true,
	},
};

// type

export const preset: Type.Information = {
	...information,
	title: "preajustado",
	summary: "Personalización de la visualización de los elementos del sistema",
	points: ["Sustituye el texto y los iconos de la interfaz de usuario preintegrados en el motor del juego (jugador).", "Sólo se sustituirán los que coincidan por ID con un preajuste existente.", "Sólo se sustituirán los elementos que hayas configurado. Por ejemplo, si solo se configura el icono, los demás elementos, como el nombre y el color, utilizarán el original."],
	options: {
		label: "preajustado",
	},
};

export const event: Type.Event = {
	title: "Evento",
	summary: "Sistema de mensajes y recompensas activado por condiciones.",
	points: ["Se activa cuando se cumplen los tiempos/condiciones configurados y se muestra un mensaje.", "Puede activarse al iniciarse por primera vez, cuando el juego terminado, al volver de estar desactivado o cuando se cumplen determinadas condiciones.", "Puede cambiar el nivel de la Categoría, el número de Acciones realizadas y el Artículo que se posee cuando se activa."],
	children: {
		information: information,
		timing: {
			title: "cronometraje",
			summary: "Configuración del tiempo de activación de eventos.",
			list: [
				["cronometraje", "condición de activación", "repita"],
				["\"emparejado\".", "Cuando se cumplen por primera vez las condiciones configuradas en CONDICIONES.", "sólo una vez"],
				["`comebacked`.", "Cuando una persona vuelve de estar desactivada durante más de un segundo y hay una Acción Progresando.", "a menudo"],
				["`gameovered`.", "Cuando la resistencia del jugador se agota en combate.", "a menudo"],
				["`completed`.", "Cuando se alcanza el nivel máximo de todas las Categorías (maxCategoryLevels).", "sólo una vez"],
				["`bienvenido`.", "Cuando empecé en este mundo.", "sólo una vez"],
				["`obtained`", "Al completar o confirmar una acción de tipo «single» (como un cofre del tesoro, etc.). Si se cumplen los requisitos, también se sumarán las recompensas del evento.", "a menudo"],
			],
		},
		unlocked: {
			title: "Estado inicial de visualización",
			summary: "Estado inicial de visualización del icono del evento (la activación depende del momento y, con esta configuración, no se activa)",
			points: ["Las condiciones de activación del evento vienen determinadas por el momento en que se produce, y este parámetro solo afecta al aspecto del icono de la lista.", "secreted: No aparecerá en la lista de eventos hasta que se cumplan todos los requisitos (aunque la activación en sí se produce en el momento oportuno).", "oculto・sugerido: El icono aparece con una línea diagonal y se muestra como «no desbloqueado».", "«released»: la línea diagonal desaparece y se muestra como «liberado»."],
		},
		requirements: {
			title: "condiciones generales",
			summary: "Condiciones para desencadenar eventos y conceder recompensas.",
			points: ["Condiciones para desencadenar eventos o conceder recompensas.", "En «matched», solo se activa cuando se cumple esta condición y se obtiene la recompensa.", "Excepto en el caso de «matched», se activará cuando se cumplan las condiciones de tiempo. A continuación, solo se obtendrá la recompensa cuando se cumplan las configuraciones establecidas aquí."],
			children: requirement.children,
		},
		acquisitions: {
			title: "recompensa",
			summary: "Configuración de la recompensa cuando se activa el evento.",
			points: ["Es la recompensa cuando se activa el evento.", "En «matched», solo se obtiene una recompensa cuando se cumplen las condiciones y se activa.", "Salvo en el caso de `matched`, solo se obtiene una recompensa cuando se cumplen las condiciones de tiempo y las condiciones de `conditions`.", "Puedes contar la cantidad a un valor negativo. Menos, si cuentas la cantidad de Artículos al `gameovered`, los perderás cuando el juego terminado."],
			children: acquisition.children,
		},
		group: {
			title: "grupo de trabajo",
			summary: "Identificador de grupo de la tarea (actualmente no se utiliza)",
			points: ["Este elemento no está actualmente en uso. Está reservado para futuras mejoras."],
		},
	},
	options: {
		label: "evento",
	},
};

export const group: Type.Information = {
	...information,
	title: "grupo (normalmente de personas)",
	summary: "Definir grupos de visualización para Categorías, Acciones y Artículos",
	points: ["Defina grupos para controlar el orden de visualización.", "Puede configurar grupos definidos aquí para cada Categoría, Acción y Artículo.", "Los grupos con el mismo grupo se muestran muy juntos.", "Si se deja en blanco, no se realiza ninguna agrupación."],
	options: {
		label: "grupo",
	},
};

export const item: Type.Item = {
	title: "Artículo",
	summary: "Elementos como Equipamiento y consumibles",
	points: ["Este elemento se refiere a la propiedad de objetos como Equipamiento, consumibles y objetos de valor.", "Sólo se puede equipar uno dentro de una Categoría, o se puede desactivar.", "También existen formas variables de utilizarlos."],
	children: {
		information: information,
		category: {
			title: "Categoría.",
			summary: "ID de la Categoría a la que pertenece el Artículo",
			points: ["Especifique el ID de la Categoría a la que pertenece este Artículo."],
		},
		group: {
			title: "grupo (normalmente de personas)",
			summary: "Visualización de la clasificación por grupos de los Artículos",
			points: ["Aplique uno de los grupos configurados en Básico.", "Aparece una lista de Artículos en el orden de los grupos configurados.", "Si se deja en blanco, no se realiza ninguna agrupación."],
			links: { general: "general" },
		},
		unlocked: {
			title: "Estado de desbloqueo inicial",
			summary: "Estado inicial de visualización y liberación del elemento (pasa automáticamente a un estado superior cuando se cumplen los requisitos de activación)",
			points: ["secreted: No aparecerá en la interfaz de usuario hasta que se cumplan todos los requisitos (no aparecerá en las Pistas y permanecerá oculto en la lista de requisitos y recompensas).", "oculto: permanece completamente oculto (el nombre aparece en gris y no se puede modificar) mientras no sea referenciado por ningún elemento de liberación y no se cumplan los requisitos.", "hinted (por defecto): Solo se muestra el nombre como avance, pero no se puede modificar hasta que se libere.", "released: Se desbloquea y se puede manejar desde el principio, independientemente de las condiciones (antes «Mostrar desde el principio»)."],
		},
		buyingValue: {
			title: "Valor de compra [monedas].",
			summary: "Configuración del precio de compra de los Artículos.",
			points: ["No puede comprar un Artículo si nunca lo ha poseído."],
			list: [
				["valor", "tratamiento"],
				["0", "nada"],
				["Un valor superior a cero.", "El valor que se puede comprar."],
				["Un valor inferior a cero (por ejemplo, -1)", "No se puede comprar (se trata como cero)."],
			],
		},
		sellingValue: {
			title: "Precio de venta [monedas].",
			summary: "Configuración del precio de venta de los Artículos.",
			points: ["Configura el precio al que se venden los Artículos."],
			list: [
				["valor", "tratamiento"],
				["0", "nada"],
				["Un valor superior a cero.", "Vende a ese valor."],
				["Un valor inferior a cero (por ejemplo, -1)", "Tasa de descuento de configuración general multiplicada por el valor de la oferta (si el valor de la oferta es cero, no se puede vender)"],
			],
			links: { general: "general" },
		},
		maximum: {
			title: "Número máx propio [pcs].",
			summary: "Límite del número máx. de Artículos propios.",
			points: ["Si es 0, no hay límite al número que se puede contar como propio.", "Si es más de 1, sólo podrá contar hasta ese número. Si se ha alcanzado el límite máximo, las nuevas adquisiciones no aumentarán el número de propios."],
		},
		equipmentType: {
			title: "Tipo de Equipamiento",
			summary: "Tipo de configuración para el Equipamiento, efectos y consumo de Artículos.",
			points: ["Los Artículos Posibles de Equipamiento deben pertenecer al grupo especificado en la Categoría `equipmentGroups`.", "Sólo se puede equipar un objeto dentro del mismo grupo."],
			list: [
				["valor", "Equipamiento", "Eficacia.", "consumo", "Ejemplo."],
				["`necesario`.", "Necesario", "equipando", "nada", "Espadas, armaduras y otros Equipamientos."],
				["\"consumible\".", "Necesario", "equipando", "Se consume al realizar las Acciones", "Artículos que se consumen para obtener un efecto, como las pociones."],
				["\"innecesario\".", "Innecesario", "En todo momento mientras esté en posesión.", "nada", "Artículos pasivos que son efectivos por el mero hecho de tenerlos."],
				["\"imposible\".", "no autorizado", "nada", "nada", "Artículos inútiles como materiales y escombros."],
			],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Requisitos Necesarios para el uso del Artículo." },
		properties: { ...property, options: { ...property.options, array: true }, summary: "Efectos de las propiedades del Artículo." },
		coinId: { title: "ID de la pareja de divisas", summary: "ID de la moneda que se utiliza para comprar y vender este artículo", points: ["Especifica el ID de la moneda (coins) que se utiliza tanto para el valor de compra como para el de venta.", "Si se deja en blanco, se utilizará la moneda principal (la primera de la lista «coins»)."] },
	},
	options: {
		label: "artículo",
	},
};

export const action: Type.Action = {
	title: "Acción.",
	summary: "Elementos de acción como recoger, fabricar y luchar.",
	points: ["Son elementos que representan comportamientos como coleccionar, fabricar, comprar y vender y luchar.", "Con cada acción que realizas, ganas experiencia y tu nivel sube.", "Puedes configurar los Artículos a consumir u obtener para cada acción.", "Hay varios tipos de pautas de actuación."],
	children: {
		information: information,
		category: {
			title: "Categoría.",
			summary: "ID de la Categoría a la que pertenece la Acción",
			points: ["Especifique el ID de la Categoría a la que pertenece esta Acción."],
		},
		attribute: {
			title: "atributo",
			summary: "Categorías de atributos específicos de la Acción",
			points: ["Se pueden configurar atributos individuales (Categorías).", "Si se deja en blanco, se adopta la Categoría a la que pertenece", "Por ejemplo, si configuras el atributo Magia para una Acción que pertenece a la Categoría Castillo del Demonio de forma individual, el nivel y las propiedades de la categoría de magia se calcularán y se aplicarán al tiempo de finalización de la acción y al daño."],
			links: { category: "categoría" },
		},
		group: {
			title: "grupo (normalmente de personas)",
			summary: "Visualización de la clasificación por grupos de minutos de las Acciones",
			points: ["Aplique uno de los grupos configurados en Básico.", "Aparece una lista de Acciones en el orden de los grupos configurados."],
			links: { general: "general" },
		},
		unlocked: {
			title: "Estado de desbloqueo inicial",
			summary: "Estado inicial de visualización y liberación del elemento (pasa automáticamente a un estado superior cuando se cumplen los requisitos de activación)",
			points: ["secreted: No aparecerá en la interfaz de usuario hasta que se cumplan todos los requisitos (no aparecerá en las Pistas y permanecerá oculto en la lista de requisitos y recompensas).", "oculto: permanece completamente oculto (el nombre aparece en gris y no se puede modificar) mientras no sea referenciado por ningún elemento de liberación y no se cumplan los requisitos.", "hinted (por defecto): Solo se muestra el nombre como avance, pero no se puede modificar hasta que se libere.", "released: Se desbloquea y se puede manejar desde el principio, independientemente de las condiciones (antes «Mostrar desde el principio»)."],
		},
		level: {
			title: "nivel",
			summary: "Nivel de dificultad de la Acción.",
			points: ["El nivel de dificultad de la Acción viene indicado por el nivel.", "Calcula cada propiedad en tiempo de ejecución en comparación con el nivel del jugador.", "Por ejemplo, realizar una Acción por encima de tu nivel tendrá un porcentaje de éxito más bajo.", "Si se cumplen las condiciones, la ejecución puede llevarse a cabo aunque el nivel del jugador sea inferior a este valor."],
			links: { property: "propiedad" },
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Requisitos Necesarios para la ejecución de la Acción." },
		seconds: {
			title: "Tiempo [segundos].",
			summary: "Tiempo típico empleado en realizar la Acción",
			points: ["Tiempo estándar (en segundos) Necesario para realizar una Acción una vez.", "Para los Tipos \"resistencia\", este es el intervalo de tiempo para un turno (una reducción de la resistencia de cada uno).", "La ejecución real variará debido a los cálculos de las propiedades."],
			links: { property: "propiedad" },
		},
		experience: {
			title: "Experiencia [siguiente nivel a 100].",
			summary: "Experiencia adquirida con adquisiciones exitosas",
			points: ["La experiencia estándar que se adquiere al realizar una Acción una vez y con éxito; 100 equivale a un nivel de experiencia.", "En caso de combate, conviene configurar más, ya que se gana cuando el adversario sale victorioso.", "La ejecución real variará debido a los cálculos de las propiedades."],
			links: { property: "propiedad" },
		},
		chance: {
			title: "Probabilidad de éxito [0-1].",
			summary: "Probabilidad de éxito al finalizar la Acción",
			points: ["Probabilidad de éxito al finalizar la Acción.", "Siempre tiene éxito si `1`, siempre falla si `0`.", "En caso de fracaso, se consumen Artículos consumibles, pero no se obtiene recompensa ni experiencia.", "La ejecución real variará debido a los cálculos de las propiedades."],
		},
		maximum: {
			title: "Número máx. de ejecuciones [veces].",
			summary: "Máximo de veces que se puede contar una Acción.",
			points: ["El número máximo de veces que una Acción puede ser completada con éxito.", "Ilimitado para \"0\".", "Cuando se alcanza el límite superior, la Acción deja de ser ejecutable."],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Recompensa por el éxito en la adquisición de Acciones." },
		progressType: {
			title: "Tipo de progreso",
			summary: "Tipo de ejecución de la Acción",
			points: ["Hay cuatro tipos."],
			list: [
				["Tipo.", "detalles de la operación", "resistencia", "Ejemplo."],
				["\"persistente\".", "Tipo de Acción que se repite continuamente; ganas experiencia y recompensas por cada finalización.", "Nada que ver", "Explotación forestal, minería, pesca"],
				["`single`.", "Realice una Acción cada vez. Si se interrumpe, el progreso se guarda y puede reanudarse la próxima vez. Una vez finalizada, el usuario pulsa la acción de confirmación para recibir los resultados.", "Nada que ver", "Abrir cofres del tesoro, aprender habilidades a través de la lectura"],
				["`snap`.", "Este Tipo de Acción se realiza instantáneamente. Se completa de inmediato sin que transcurra nada de tiempo.", "Nada que ver", "Comerciar, uso de Artículos."],
				["`stamina`.", "Cada tiempo requerido disminuye la resistencia respectiva del jugador y del adversario. Cuando se agota la resistencia del adversario, se gana experiencia y recompensas. Cuando la resistencia del jugador se agota, el juego terminado y todas las Acciones en curso son abortadas.", "Relevante.", "Combate, operaciones peligrosas."],
			],
		},
		property: combat,
	},
	options: {
		label: "acción",
	},
};

export const category: Type.Category = {
	title: "Categoría.",
	summary: "Marco general para la clasificación de Acciones y Artículos.",
	points: ["Representa una clasificación importante.", "Por ejemplo, se puede configurar en cualquier marco, como corto alcance, largo alcance, magia, mazmorras, herrerías, fábricas, etc.", "Las Acciones y Artículos se colocan directamente debajo del mundo y se asocian a un ID de Categoría."],
	children: {
		information: information,
		group: {
			title: "grupo (normalmente de personas)",
			summary: "Visualización de la clasificación por grupos de categorías",
			points: ["Aplique uno de los grupos configurados en Básico.", "Aparece una lista de Categorías en el orden de los grupos configurados."],
			links: { general: "general" },
		},
		unlocked: {
			title: "Estado de desbloqueo inicial",
			summary: "Estado inicial de visualización y liberación del elemento (pasa automáticamente a un estado superior cuando se cumplen los requisitos de activación)",
			points: ["secreted: No aparecerá en la interfaz de usuario hasta que se cumplan todos los requisitos (no aparecerá en las Pistas y permanecerá oculto en la lista de requisitos y recompensas).", "oculto: permanece completamente oculto (el nombre aparece en gris y no se puede modificar) mientras no sea referenciado por ningún elemento de liberación y no se cumplan los requisitos.", "hinted (por defecto): Solo se muestra el nombre como avance, pero no se puede modificar hasta que se libere.", "released: Se desbloquea y se puede manejar desde el principio, independientemente de las condiciones (antes «Mostrar desde el principio»)."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Necesarios para el uso de la Categoría." },
		equipmentGroups: {
			title: "grupo de equipamiento",
			summary: "Designación de los grupos de Artículos que pueden ser Equipados en esta Categoría.",
			points: ["Lista de nombres de grupo de los Artículos que se pueden Equipar en esta Categoría.", "Sólo se pueden equipar los artículos del grupo que coincida con el nombre del grupo especificado aquí.", "Si se especifica una cadena vacía, los Artículos con un grupo no configurado (vacío) pasan a ser elegibles para Equipamiento.", "Sólo se puede equipar un objeto en el mismo grupo. Cuando equipas un nuevo Artículo, cualquier equipamiento existente en el mismo grupo se desactiva automáticamente.", "Si la lista está vacía (0 piezas), no se puede equipar nada."],
			links: { general: "general" },
		},
		numeric: {
			title: "Disponibilidad de niveles",
			summary: "Disponibilidad de funciones a nivel de Categoría",
			points: ["Es una bandera para indicar si esta Categoría tiene un nivel o no.", "Si está activado, tiene un nivel; si está desactivado, no.", "Un ejemplo es activar las categorías basadas en la experiencia, como espadachín y magia, y desactivar las categorías basadas en la ubicación, como mazmorras y herrerías."],
		},
		standaloneProgress: {
			title: "progresando simultáneamente",
			summary: "Configuraciones de ejecución paralela con otras Categorías",
			points: ["Indicador que señala si las Acciones de esta Categoría pueden progresar en paralelo con Acciones de otras Categorías.", "Si está activada, la Acción puede progresar simultánea e independientemente de otras Categorías de acciones.", "Si está desactivada, no puede realizarse simultáneamente con acciones de otras Categorías que también estén desactivadas. Al comenzar una nueva Acción en esta Categoría, las Acciones en progreso en otras Categorías independientes se cancelan automáticamente."],
		},
		background: {
			title: "fondo",
			summary: "Configuraciones de fondo específicas para cada Categoría",
			points: ["Configure el fondo de esta Categoría.", "Cuando se selecciona una Categoría, la imagen de fondo cambia junto con ella.", "Si no se configura nada, la configuración del fondo del mundo se utiliza tal cual."],
		},
	},
	options: {
		label: "categoría",
	},
};

export const type: Markdown = {
	title: "Tipo.",
	summary: "Clasificación básica de los mundos",
	points: ["Los mundos son de seis Tipos.", "Todos los elementos se colocan justo debajo del mundo.", "Acciones y Artículos se asocian con el ID de la Categoría a la que pertenecen."],
	list: expandList("Tipo.", [category, action, item, group, event, preset]),
	quote: typeTree,
	options: {
		label: "tipo",
		linkedList: true,
	},
};

// basic

export const development: Type.Development = {
	title: "desarrollo",
	summary: "Notas y gestión de errores durante el desarrollo del mundo",
	points: ["Se utiliza durante el desarrollo del mundo.", "Se refiere al desarrollo y las pruebas de este mundo y no afecta al contenido del juego.", "Los jugadores no comprueban el contenido relativo al desarrollo."],
	children: {
		version: {
			title: "versión",
			summary: "Número de versión del editor.",
			points: ["El número de versión de la consola se registra automáticamente en el momento de la creación del mundo.", "Los desarrolladores no pueden modificar este contenido."],
		},
		memo: {
			title: "Memo.",
			summary: "Registros de notas para promotores",
			points: ["Los desarrolladores pueden incluir esta información como nota.", "No es relevante para la publicación de los juegos."],
		},
		errors: {
			title: "error",
			summary: "Registro de errores en los resultados de la validación.",
			points: ["Aquí se almacenan automáticamente los resultados de la validación del mundo.", "Por ejemplo, se muestra un error si hay un tipo de carácter que no se puede introducir, o si se introduce un valor numérico que supera el límite.", "Los desarrolladores no pueden modificar este contenido.", "Posible en el servidor cuando no hay errores almacenados aquí."],
		},
		timestamp: {
			title: "sellado de tiempo",
			summary: "Registros de creación, conservación y publicación.",
			points: ["La hora de creación, almacenamiento y publicación de los mundos se registra automáticamente.", "Los desarrolladores no pueden modificar este contenido."],
			children: {
				created: {
					title: "días",
					summary: "Momento de la primera creación del mundo",
					points: ["Fecha y hora en que se creó el mundo."],
				},
				saved: {
					title: "guardar fecha y hora",
					summary: "Hora de la última ejecución de guardado",
					points: ["La fecha y hora en que se guardó el mundo por última vez."],
				},
				published: {
					title: "fecha y hora de publicación",
					summary: "Hora de la última ejecución pública",
					points: ["Mundo se publicó por última vez en."],
				},
			},
		},
		autosaveing: {
			title: "ahorro automático",
			summary: "Activa o desactiva la función de guardado automático.",
			points: ["Indica si la función de autoguardado está activada.", "Los desarrolladores no pueden modificar este contenido."],
		},
	},
	options: {
		label: "desarrollo",
	},
};

export const design: Type.Design = {
	title: "diseño",
	summary: "Configuración del aspecto visual, como los colores del mundo y los tipos de letra.",
	points: ["Configuración de la visualización de mundos.", "En cuanto al diseño global del mundo, si hay configuraciones individuales para cada elemento, tienen preferencia."],
	children: {
		mainColor: {
			title: "color predominante",
			summary: "Principales colores del mundo",
			points: ["Se utiliza como color de barra.", "El color opuesto se utiliza para las sombras de las barras."],
		},
		subColor: {
			title: "color suplementario",
			summary: "Colores auxiliares para el fondo y el texto",
			points: ["Color utilizado como fondo y color del texto.", "Los tonos próximos al color principal se difuminarán."],
		},
		background: {
			title: "imagen de fondo",
			summary: "Imagen de fondo para todo el juego",
			points: ["Configura la imagen de fondo del juego.", "Si no se configura ninguna imagen, el fondo es un degradado basado en el color auxiliar."],
		},
	},
	options: {
		label: "diseño",
	},
};

export const general: Type.General = {
	title: "general",
	summary: "Configuración básica del juego, incluidos los ajustes de idioma y nivel.",
	children: {
		language: {
			title: "Idioma.",
			summary: "Idioma del mundo en el momento de su creación.",
			points: ["Configura el idioma utilizado en este editor de mundos.", "El primer idioma que se muestra cuando el usuario inicia el juego."],
		},
		translations: {
			title: "traducción",
			summary: "Preparar traducciones multilingües o",
			points: ["Si se activa, los usuarios pueden jugar en cualquier idioma.", "Si está desactivada, sólo podrás reproducir en el idioma seleccionado en la configuración de idioma.", "Si la traducción está activada, Necesario proporcionar los datos traducidos para cada idioma."],
			links: { translation: "traducción" },
		},
		offlineMaxHours: {
			title: "Tiempo máximo desactivado [horas].",
			summary: "Límites de tiempo para el progreso desactivado.",
			points: ["Configure el número máx. de horas de progreso cuando esté desactivado.", "Por ejemplo, si se establecen 6 horas, se procesará el proceso de volver a estar desconectado hasta 6 horas, pero si se permite más tiempo para volver a estar desconectado, el tiempo de desconexión se tratará como 6 horas.", "Si se fijan 0 horas, no se produce ningún proceso al volver a estar desactivado.", "El valor máximo es de 24 horas."],
			links: { category: "categoría" },
		},
		maxCategoryLevels: {
			title: "Nivel máx. de Categoría",
			summary: "Nivel límite para cada Categoría.",
			points: ["Configura el nivel máx. para cada Categoría.", "Si se adquiere experiencia por encima de este nivel, en el cálculo de cada propiedad se utilizará el nivel máximo aquí configurado.", "Este valor no es relevante para las Categorías sin niveles."],
			links: { category: "categoría" },
		},
		locking: {
			title: "función de bloqueado",
			summary: "Ocultar elementos hasta que se cumplan los requisitos",
			points: ["Si está activada, el Artículo de Acción de Categoría se oculta mientras no se haya utilizado o poseído nada y no se hayan cumplido los requisitos.", "Si se desactiva, todos los elementos se muestran desde el principio, pero no se pueden ejecutar ni equipar hasta que se cumplan los requisitos."],
			links: { category: "categoría", action: "acción", item: "artículo" },
		},
		coins: {
			title: "divisa",
			summary: "Configuración de la moneda (monedas) que se utiliza en el juego",
			points: [
				"Realiza la configuración de la moneda que se utiliza en el juego.",
				"Se pueden definir varias monedas y realizar la configuración de cada una de ellas con sus datos (ID, nombre, icono, color, etc.).",
				"La moneda se utiliza para comprar y vender artículos, así como para ampliar la capacidad del inventario.",
				"La moneda que aparece en primer lugar se considera la moneda principal y se utiliza cuando no se especifica el ID de moneda (`coinId`) en los artículos o en la capacidad.",
			],
			links: { information: "información", item: "artículo" },
		},
		capacity: {
			title: "capacidad",
			summary: "Configuración de la capacidad de inventario.",
			points: ["Controla el número máximo de tipos diferentes de Artículos que puede tener un jugador.", "Cada Artículo se controla por el número de tipos de Artículos que tiene, no por el número de Artículos propios.", "Establecer `initialCount` a 0 significa capacidad ilimitada.", "Cuando se refiera a Artículos de capacidad en condiciones o recompensas, utilice el ID configurado aquí."],
			children: {
				information: information,
				initialCount: {
					title: "Valor por defecto [pcs].",
					summary: "Capacidad inicial de inventario (número de Artículos diferentes que se pueden contar)",
					points: ["Capacidad inicial (número de Artículos diferentes que se pueden poseer) al comenzar la partida.", "Si se establece `0`, la capacidad es ilimitada."],
				},
				initialCost: {
					title: "Precio base [monedas].",
					summary: "Precio inicial para una capacidad adicional.",
					points: ["Precio base (en monedas) para aumentar la capacidad del inventario en una ranura.", "El precio real se calcula como 'precio base x incremento porcentual ^ número de veces que se ha comprado'.", "Ejemplo: precio base 100, tasa de incremento 1,2, primero 100 monedas, segundo 120 monedas, tercero 144 monedas."],
				},
				increasingRate: {
					title: "Porcentaje de aumento [veces].",
					summary: "Incremento porcentual de los costes de ampliación de capacidad",
					points: ["Es un multiplicador de cuánto aumenta el coste de la ampliación de capacidad con la enésima compra.", "Para `1.0` el precio es siempre el mismo, para `1.2` el precio es un 20% más alto cada vez que se compra.", "Fórmula: precio base x porcentaje de incremento ^ número de veces que se ha comprado"],
					list: [
						["tasa de aumento", "1ª adición.", "5º aumento.", "10º aumento.", "Aumento de 100.", "Aumento 1000."],
						["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
						["1.05", "x1.00", "x1.22", "x1.63", "x131.50", "x1.7×10²⁰"],
						["1.10", "x1.00", "x1.61", "x2.59", "x1,4 x 10⁴", "x2.7×10⁴¹"],
						["1.20", "x1.00", "x2.49", "x6.19", "x8,3 x 10⁷", "x8.3×10⁷⁹"],
						["1.50", "x1.00", "x5.06", "x57.67", "x1.9×10¹⁷", "x7.0×10¹⁷⁶"],
					],
				},
				coinId: {
					title: "ID de la moneda",
					summary: "ID de la moneda que se utilizará para ampliar la capacidad",
					points: ["Especifica el ID de la moneda (coins) que se utilizará para el precio de la ampliación de la capacidad del inventario.", "Si se deja en blanco, se utilizará la moneda principal (la primera de la lista «coins»)."],
				},
				buyingLimit: {
					title: "Límite máximo para comprar [veces]",
					summary: "Número máximo de veces que se puede comprar capacidad",
					points: ["Es el límite máximo de veces que se puede comprar capacidad con dinero.", "Si lo pones en `0`, podrás comprar sin límite.", "Si lo pones en `-1`, no podrás comprarlo.", "El aumento de capacidad derivado de las recompensas no está sujeto a este límite máximo."],
				},
			},
			links: { item: "artículo" },
		},
		queue: {
			title: "Cue",
			summary: "Configuración del número de ranuras para la ejecución consecutiva (programada) de acciones",
			points: [
				"Gestiona el número de espacios disponibles para la ejecución consecutiva (programada) de acciones.",
				"El número de casillas, al igual que la capacidad, se puede comprar con moneda, aunque también se puede aumentar seleccionando artículos de la cola como recompensa por Acciones o eventos.",
				"Cuando se haga referencia a artículos de la cola en condiciones o recompensas, utilice el ID de configuración aquí.",
			],
			children: {
				information: information,
				initialCount: {
					title: "Valor por defecto [pcs].",
					summary: "Número de casillas de ejecución consecutiva al comenzar el juego",
					points: ["Es el número de plazas reservadas al comenzar el juego.", "El valor mínimo es `1` (no existe el valor `0`, que en otros casos significaría «ilimitado», como en el caso de la capacidad)."],
				},
				initialCost: {
					title: "Precio base [monedas].",
					summary: "Precio inicial para añadir una plaza",
					points: ["Este es el precio básico (monedas) para aumentar en una unidad el número de ejecuciones consecutivas.", "El precio real se calcula como 'precio base x incremento porcentual ^ número de veces que se ha comprado'.", "Ejemplo: precio base 100, tasa de incremento 1,2, primero 100 monedas, segundo 120 monedas, tercero 144 monedas."],
				},
				increasingRate: {
					title: "Porcentaje de aumento [veces].",
					summary: "Tasa de crecimiento del coste de la ampliación de la capacidad",
					points: ["Es el multiplicador que indica en qué medida aumenta el coste de la ampliación del cupo al comprar n veces.", "Para `1.0` el precio es siempre el mismo, para `1.2` el precio es un 20% más alto cada vez que se compra.", "Fórmula: precio base x porcentaje de incremento ^ número de veces que se ha comprado"],
				},
				coinId: {
					title: "ID de la moneda",
					summary: "ID de la moneda que se utiliza para ampliar el marco",
					points: ["Especifica el ID de la moneda (coins) que se utilizará para el precio de la ampliación del límite de ejecuciones consecutivas.", "Si se deja en blanco, se utilizará la moneda principal (la primera de la lista «coins»)."],
				},
				buyingLimit: {
					title: "Límite máximo para comprar [veces]",
					summary: "Número máximo de veces que se puede comprar un espacio",
					points: ["Es el límite máximo de veces que se puede comprar el paquete de ejecuciones consecutivas con moneda.", "Si lo pones en `0`, podrás comprar sin límite.", "Si lo pones en `-1`, no podrás comprarlo.", "El aumento de la cuota derivado de las retribuciones no está sujeto a este límite máximo."],
				},
			},
			links: { item: "artículo" },
		},
		levelCommonRatio: {
			title: "Tasa de aumento de la experiencia [veces].",
			summary: "Porcentaje de aumento de la dificultad al subir de nivel.",
			points: ["A medida que aumenta el nivel de una Categoría, aumenta la experiencia Necesaria para alcanzar el siguiente nivel.", "Al aumentar este valor, aumenta el nivel de dificultad.", "La experiencia necesaria para pasar al siguiente nivel es (tasa de aumento de experiencia)^(nivel actual - 1)."],
			list: [
				["Tasa de aumento de la experiencia", "Lv.1", "Lv.2", "Lv.10", "Lv.50", "Lv.99."],
				["0", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
				["0.02", "x1.00", "x1.02", "x1.22", "x2.69", "x5.52"],
				["0.05", "x1.00", "x1.05", "x1.55", "x11.47", "x131.50"],
				["0.10", "x1.00", "x1.10", "x2.36", "x117.39", "x5.7×10⁴"],
				["0.20", "x1.00", "x1.20", "x6.19", "x3,3 x 10³", "x1,3 x 10¹¹"],
			],
			links: { category: "categoría" },
		},
		actionLevelLimit: {
			title: "restricción del nivel de acción",
			summary: "Solicita el número de veces que se ha ejecutado la misma Acción de atributo para la ejecución de una acción.",
			points: ["Si está activada, el número de veces que se ha ejecutado una acción con los mismos atributos se añade automáticamente a las condiciones de ejecución de cada acción.", "Necesario contar un número de veces igual al valor de nivel de la Acción.", "Si no se configura ningún atributo, se utiliza el ID de la Categoría a la que pertenece."],
		},
		defaultCombat: { ...combat, summary: "Parámetros de combate por defecto comunes a todas las Acciones.", points: ["Valores básicos de corrección de combate que se aplican a todas las Acciones de tipo \"resistencia\" en común.", "El valor de combate (propiedad) de cada Acción se añade a este valor por defecto."], links: { action: "acción" } },
	},
	options: {
		label: "general",
	},
};

export const overview: Type.Overview = {
	title: "Resumen.",
	summary: "Información básica sobre el mundo y sus autores",
	points: ["Esta sección describe el contenido del mundo.", "Configúralo de forma que sea fácil de entender para los usuarios a la hora de elegir un mundo.", "Esta configuración no afecta al funcionamiento del mundo."],
	children: {
		information: information,
		version: {
			title: "versión",
			summary: "Número de versión del mundo",
			points: ["Introduzca cualquier valor (entero o decimal).", "En general, la parte entera representa la versión mayor y la parte minor la versión menor."],
		},
		author: {
			title: "Nombre del autor",
			summary: "Nombre del autor mundial",
			points: ["Introduce tu alias o apodo."],
		},
		homepage: {
			title: "Página de inicio.",
			summary: "URL del sitio web del autor",
			points: ["Si tienes tu propia página de inicio o una red social, introduce su URL.", "Los jugadores pueden consultar esta URL mediante un enlace.", "Si no procede, déjelo en blanco."],
		},
		url: {
			title: "localizador de recursos uniformes",
			summary: "URL del juego",
			points: ["Introduce la URL donde quieres situar el juego en este mundo.", "Introduzca la URL de la página Arriba, como index.html, incluyendo el dominio.", "Si se proporciona una URL adecuada, funcionará como una PWA.", "Una PWA es una función que funciona como una aplicación que puede instalarse y reproducirse desactivada."],
		},
		estimatedPlayingTime: {
			title: "Tiempo estimado de juego",
			summary: "Tiempo estimado para completar el mundo del juego.",
			points: ["Tiempo estimado Necesario para completar el juego por el mundo.", "Los jugadores pueden consultar esto como guía a la hora de jugar.", "Es sólo un tiempo de referencia y no existe una definición clara de lo que constituye la finalización de un mundo."],
			children: {
				value: {
					title: "valor",
					summary: "Valores del tiempo de juego",
				},
				unit: {
					title: "unidad",
					summary: "Unidad de tiempo (por ejemplo, horas, minutos)",
				},
			},
		},
	},
	options: {
		label: "visión general",
	},
};

export const basic: Type.Basic = {
	title: "configuración básica",
	summary: "Elementos básicos de configuración para el mundo en general.",
	points: ["Configura el nombre del mundo, la descripción, el fondo, la moneda, la capacidad, el nivel máx. de categorías, la tasa de aumento de experiencia, la tasa de descuento, los parámetros de combate estándar, etc.", "Estas configuraciones afectan a todo el mundo."],
	list: expandList("nombre", [overview, general, design, development]),
	children: {
		overview: overview,
		general: general,
		design: design,
		development: development,
	},
	options: {
		label: "básico",
		linkedList: true,
	},
};

// world


export const world: Type.World = {
	title: "mundo",
	summary: "Configuración general del mundo del juego y estructura de datos",
	points: ["Datos sobre juegos que pueden jugarse en consolas.", "La configuración te permite crear un juego de abandono a tu gusto.", "Los mundos abarcan Categorías, Acciones, Artículos y Eventos."],
	children: {
		basic: basic,
		categories: { ...category, options: { ...category.options, array: true } },
		actions: { ...action, options: { ...action.options, array: true } },
		items: { ...item, options: { ...item.options, array: true } },
		groups: { ...group, options: { ...group.options, array: true } },
		events: { ...event, options: { ...event.options, array: true } },
		presets: { ...preset, options: { ...preset.options, array: true } },
	},
	options: {
		label: "mundo",
	},
};

// editor

export const editor: Markdown = {
	title: "editor",
	summary: "Explicaciones sobre el uso del editor y la estructura de los mundos.",
	list: expandList("nombre", [world, basic, type, component, miscellaneous]),
	options: {
		label: "editor",
		linkedList: true,
		directory: "editor",
	},
};

// list

// prettier-ignore
export const tree: Tree = {
	title: editor,
	twig: [
		{ title: world }, 
		{ title: basic, twig: [overview, general, design, development] }, 
		{ title: type, twig: [category, action, item, group, event, preset] }, 
		{ title: component, twig: [information, requirement, acquisition, combat, property] }, 
		{ title: miscellaneous, twig: [translation] }
	],
};
