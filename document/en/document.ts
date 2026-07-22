import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "Abandoned game development platform",
	summary: "Overview and usage of the abandonment game development platform",
	children: {
		feature: {
			title: "feature",
			summary: "Key features and functions of the platform",
			points: ["This section describes the characteristics of the abandonment game development platform.", "The platform provides tools and features to streamline game development."],
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