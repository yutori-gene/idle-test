import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "Platform untuk pengembangan game yang ditinggalkan",
	summary: "Ringkasan platform pengembangan game yang ditinggalkan dan cara menggunakannya.",
	children: {
		feature: {
			title: "Fitur",
			summary: "Fitur dan fungsi utama platform",
			points: ["Bagian ini menjelaskan karakteristik platform pengembangan game yang ditinggalkan.", "Platform ini menyediakan alat dan fitur untuk merampingkan pengembangan game."],
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