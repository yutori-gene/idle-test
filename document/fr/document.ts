import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "Plate-forme pour le développement de jeux abandonnés",
	summary: "Aperçu des plateformes de développement de jeux abandonnés et de leur utilisation.",
	children: {
		feature: {
			title: "Caractéristiques",
			summary: "Principales caractéristiques et fonctions de la plate-forme",
			points: ["Cette section décrit les caractéristiques des plateformes de développement de jeux abandonnées.", "La plateforme fournit des outils et des fonctionnalités permettant de rationaliser le développement des jeux."],
		},
	},
	options: {
		label: "LISEZ-MOI",
		readme: true,
	}
};


// tree

export const tree: Tree = {
	title: readme,
	twig: [editor, player]
}

// export const list:Markdown[] =  flattenTree(tree);