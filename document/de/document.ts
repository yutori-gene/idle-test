import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "Plattform für die Entwicklung von aufgegebenen Spielen",
	summary: "Übersicht über verlassene Spielentwicklungsplattformen und deren Verwendung.",
	children: {
		feature: {
			title: "Eigenschaften",
			summary: "Hauptmerkmale und Funktionen der Plattform",
			points: ["In diesem Abschnitt werden die Merkmale von aufgegebenen Spielentwicklungsplattformen beschrieben.", "Die Plattform bietet Tools und Funktionen zur Optimierung der Spieleentwicklung."],
		},
	},
	options: {
		label: "README",
		readme: true,
	}
};


// tree

export const tree: Tree = {
	title: readme,
	twig: [editor, player]
}

// export const list:Markdown[] =  flattenTree(tree);