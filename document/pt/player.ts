import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Idioma.",
	summary: "Mudança de idiomas",
	points: ["Alterna o idioma exibido no jogo.", "Válido apenas se o autor tiver fornecido uma tradução."],
	options: {
		preset: "idioma",
	},
};

export const event: Markdown = {
	title: "Evento",
	summary: "Sistemas baseados em condições.",
	points: ["Acionado quando as condições são atendidas.", "As mensagens são exibidas quando ativadas, os itens são dados ou reduzidos, etc."],
	options: {
		preset: "evento",
		label: "evento",
	},
};

export const miscellaneous: Markdown = {
	title: "informações suplementares",
	summary: "Outras informações complementares explicadas.",
	children: { event: event, language: language },
	options: {
		preset: "Diversos",
		label: "Diversos",
	},
};

// world

export const debug: Markdown = {
	title: "depurar",
	summary: "Operação para verificações de depuração",
	points: ["Visível apenas durante a depuração.", "Ele não é exibido quando o jogo é publicado e distribuído."],
	options: {
		preset: "depurar",
	},
};

export const config: Markdown = {
	title: "configuração",
	summary: "Alterar as configurações do jogo",
	points: ["Configure as definições relacionadas à exibição e ao processamento de jogos.", "Os dados do jogo também podem ser inseridos, enviados e redefinidos."],
	options: {
		preset: "configuração",
	},
};

export const statistics: Markdown = {
	title: "estatísticas",
	summary: "Resumo do progresso",
	points: ["Você pode verificar o progresso do jogo até o momento."],
	options: {
		preset: "estatísticas",
	},
};

export const general: Markdown = {
	title: "Geral",
	summary: "Configurações específicas do mundo",
	points: ["Você pode verificar o nível de dificuldade e as configurações específicas para esse mundo."],
	options: {
		preset: "geral",
	},
};

export const overview: Markdown = {
	title: "Visão geral.",
	summary: "Sobre este jogo.",
	points: ["Saiba mais sobre o mundo do jogo (visão de mundo e configuração).", "Também é possível saber mais sobre o console (sistema) que executa esse jogo."],
	options: {
		preset: "visão geral",
	},
};

export const world: Markdown = {
	title: "mundo",
	summary: "Você pode operar e verificar os controles e as configurações gerais do jogo,",
	children: { overview: overview, general: general, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "mundo",
		label: "mundo",
	},
};

// property

export const correction: Markdown = {
	title: "Correções de propriedades.",
	summary: "Detalhes das correções das propriedades.",
	points: ["Você pode verificar as correções de propriedades específicas nessa Categoria.", "A correção se deve ao efeito do Item. Você pode verificar o Item."],
	options: {
		preset: "correção",
	},
};

export const properties: Markdown = {
	title: "propriedades",
	summary: "Lista de valores de correção",
	points: ["Lista de propriedades configuradas para cada Categoria.", "As propriedades são elementos que afetam a execução das ações.", "A eficácia é corrigida ao equipar o Item. (Alguns Itens não precisam ser equipados)."],
	options: {
		preset: "propriedades",
	},
};

export const property: Markdown = {
	title: "propriedades",
	summary: "Verificação dos valores de correção",
	points: ["As propriedades são elementos que afetam a execução das ações.", "O valor final é calculado a partir do valor inicial atribuído, levando em conta o nível da Categoria, o nível configurado para a Ação e a correção para o Item equipado."],
	children: { properties: properties, correction: correction },
	list: expandList("propriedade", [properties, correction]),
	links: {
		properties: "jogador/propriedades.",
		correction: "jogador/correção",
	},
	options: {
		label: "propriedade",
		preset: "propriedade",
	},
};

// item

export const trade: Markdown = {
	title: "transações",
	summary: "Comprar ou vender itens em moeda.",
	points: ["Alguns itens não podem ser comprados ou vendidos.", "Itens bloqueados não podem ser comprados ou vendidos.", "Às capacidades e às vagas de reserva (fila) pode haver um limite máximo de compras definido; quando esse limite for atingido, não será mais possível comprar. (O aumento decorrente de recompensas não está sujeito a esse limite.)"],
	options: {
		preset: "comércio",
	},
};

export const items: Markdown = {
	title: "Item",
	summary: "Lista de itens da Categoria.",
	points: ["Pressione e mantenha pressionado para alternar entre os Itens de Equipamento.", "Possível equipar apenas um Item da lista. (se estiver configurado para ser equipado como uma Categoria).", "Os itens que não atendem às condições de liberação são bloqueados e não podem ser visualizados em detalhes."],
	options: {
		preset: "itens",
	},
};

export const item: Markdown = {
	title: "Item",
	summary: "Detalhes do item.",
	points: ["Itens são elementos relacionados ao próprio patrimônio de objetos, como Equipamento, consumíveis e valores.", "Possível equipar apenas um Item de uma Categoria. (Se estiver configurado para ser equipado como uma Categoria)", "Os itens que não atendem às condições de liberação são bloqueados e não podem ser visualizados em detalhes."],
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "Agir.",
	summary: "Controle de ações",
	points: ["Começar ou parar a Ação.", "Você pode especificar o número de execuções. Digite 0 para executar até que o recurso se esgote."],
	options: {
		preset: "ato",
	},
};

export const actions: Markdown = {
	title: "AÇÃO.",
	summary: "Lista de Ações na Categoria",
	points: ["Um toque longo alterna a execução da ação.", "Possível executar apenas um Item de uma Categoria.", "Algumas Categorias permitem o progresso simultâneo de Ações em mais de uma Categoria.", "As Ações que não atendem às condições de liberação são bloqueadas e não podem ser visualizadas em detalhes."],
	options: {
		preset: "ações",
	},
};

export const action: Markdown = {
	title: "Ação.",
	summary: "Elementos de ação, como coletar, criar e lutar.",
	points: ["Você pode ganhar experiência a cada ação, o que aumenta seu nível.", "Cada ação consome ou obtém um Item.", "As Ações que não atendem às condições de liberação são bloqueadas e não podem ser visualizadas em detalhes."],
	children: { actions: actions, act: act },
	options: {
		preset: "ação",
		label: "ação",
	},
};

// category

export const category: Markdown = {
	title: "Categoria.",
	summary: "Uma compilação de vários elementos.",
	points: ["Esse é um elemento que reúne Ações e Itens."],
	options: {
		label: "categoria",
		preset: "categoria",
	},
};

// character
export const status: Markdown = {
	title: "Status.",
	summary: "Lista de todas as propriedades",
	points: ["São mostrados apenas os valores de correção da Categoria por Item.", "Dependendo da Ação a ser realizada, há outras correções."],
	options: {
		preset: "status",
	},
};

export const inventory: Markdown = {
	title: "inventário",
	summary: "Lista de todos os itens",
	points: ["Pressione e mantenha pressionado para alternar entre os Itens de Equipamento."],
	options: {
		preset: "inventário",
	},
};

export const activity: Markdown = {
	title: "atividade",
	summary: "Lista de todas as Ações",
	points: ["Um toque longo alterna a execução da ação."],
	options: {
		preset: "atividade",
	},
};

export const character: Markdown = {
	title: "personagem",
	summary: "Identificação e manipulação da situação do protagonista.",
	points: ["Esse conteúdo é idêntico ao que é exibido ao operar a Categoria."],
	children: { activity: activity, inventory: inventory, status: status },
	options: {
		label: "caráter",
		preset: "caráter",
	},
};

export const player: Markdown = {
	title: "jogador",
	summary: "O jogo é explicado para cada coluna que aparece em Play the Game.",
	points: ["Por padrão, a mesma descrição aparece como uma Dica na parte de baixo de cada coluna.", "As Dicas podem ser ocultadas por configuração."],
	list: expandList("jogador", [character, category, action, item, property, world, miscellaneous]),
	// children: { character: character, category: category, action: action, item: item, property: property, world: world, miscellaneous: miscellaneous },
	options: {
		preset: "jogador",
		label: "jogador",
		linkedList: true,
		directory: "jogador",
	},
};

// list

// prettier-ignore
export const tree: Tree = {
	title: player,
	twig: [
		character,
		category,
		action,
		item,
		property,
		world,
		miscellaneous
	],
};
