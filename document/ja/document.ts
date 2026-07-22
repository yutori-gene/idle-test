import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "放置系ゲーム開発プラットフォーム",
	summary: "放置系ゲーム開発プラットフォームの概要と使い方",
	children: {
		feature: {
			title: "特徴",
			summary: "プラットフォームの主要機能と特徴",
			points: ["放置系ゲーム開発プラットフォームの特徴を説明します。", "このプラットフォームは、ゲーム開発を効率化するためのツールや機能を提供します。"],
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