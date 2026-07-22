import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "Plataforma para o desenvolvimento de jogos abandonados",
	summary: "Visão geral das plataformas de desenvolvimento de jogos abandonadas e como usá-las.",
	children: {
		feature: {
			title: "Recursos",
			summary: "Principais recursos e funções da plataforma",
			points: ["Esta seção descreve as características das plataformas de desenvolvimento de jogos abandonadas.", "A plataforma oferece ferramentas e recursos para otimizar o desenvolvimento de jogos."],
		},
	},
	options: {
		label: "LEIAME",
		readme: true,
	}
};


// tree

export const tree: Tree = {
	title: readme,
	twig: [editor, player]
}

// export const list:Markdown[] =  flattenTree(tree);