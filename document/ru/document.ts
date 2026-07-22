import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "Платформа для разработки заброшенных игр",
	summary: "Обзор заброшенных платформ для разработки игр и способы их использования.",
	children: {
		feature: {
			title: "Характеристики",
			summary: "Ключевые особенности и функции платформы",
			points: ["В этом разделе описываются характеристики заброшенных платформ для разработки игр.", "Платформа предоставляет инструменты и функции для упрощения разработки игр."],
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