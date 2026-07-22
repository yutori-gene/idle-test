import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "开发废弃游戏的平台",
	summary: "废弃游戏开发平台概览及使用方法。",
	children: {
		feature: {
			title: "特点",
			summary: "平台的主要特点和功能",
			points: ["本节介绍被遗弃的游戏开发平台的特点。", "该平台提供简化游戏开发的工具和功能。"],
		},
	},
	options: {
		label: "阅读说明",
		readme: true,
	}
};


// tree

export const tree: Tree = {
	title: readme,
	twig: [editor, player]
}

// export const list:Markdown[] =  flattenTree(tree);