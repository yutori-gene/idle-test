import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "Plataforma para el desarrollo de juegos abandonados",
	summary: "Resumen de las plataformas de desarrollo de juegos abandonadas y cómo utilizarlas.",
	children: {
		feature: {
			title: "Características",
			summary: "Principales características y funciones de la plataforma",
			points: ["Esta sección describe las características de las plataformas de desarrollo de juegos abandonadas.", "La plataforma ofrece herramientas y funciones para agilizar el desarrollo de juegos."],
		},
	},
	options: {
		label: "LÉAME",
		readme: true,
	}
};


// tree

export const tree: Tree = {
	title: readme,
	twig: [editor, player]
}

// export const list:Markdown[] =  flattenTree(tree);