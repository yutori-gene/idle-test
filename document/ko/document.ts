import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "방치형 게임 개발 플랫폼",
	summary: "방치형 게임 개발 플랫폼 개요와 사용법",
	children: {
		feature: {
			title: "특징",
			summary: "플랫폼의 주요 기능 및 특징",
			points: ["방치형 게임 개발 플랫폼의 특징을 설명합니다.", "이 플랫폼은 게임 개발의 효율화를 위한 도구와 기능을 제공한다."],
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