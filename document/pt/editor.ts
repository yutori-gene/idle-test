import * as Type from "~d/type/descriptionType";
import { Markdown, Tree, expandList } from "~d/type/markdownType";

// quate

const typeTree = `
world
├── category
├── action
├── item
├── group
├── task
└── preset
`;

// miscellaneous

export const translation: Markdown = {
	title: "tradução",
	summary: "Configurações para traduzir o texto do jogo para outros idiomas.",
	points: ["Configura o texto a ser traduzido.", "As configurações em vários idiomas estão disponíveis quando as configurações de tradução estão ativadas.", "Se a tradução estiver desativada, as informações descritas durante o desenvolvimento serão exibidas como estão.", "As configurações de tradução e a mudança de idioma não são possíveis durante o desenvolvimento da pré-publicação."],
	options: {
		label: "translation",
	},
	children: {
		flag: {
			title: "Ativação da tradução",
			summary: "Configuração desligada da função de tradução.",
			points: ["As configurações em vários idiomas estão disponíveis quando as configurações de tradução estão ativadas.", "A tradução não é ativada durante o desenvolvimento antes da publicação. A alternância entre idiomas será ativada após a publicação.", "Se a tradução estiver ativada, haverá suporte para dez idiomas diferentes e os dados de tradução deverão estar disponíveis para todos os idiomas. Não é possível ativar apenas alguns dos idiomas.", "Quando o usuário inicia o jogo, o idioma usado no desenvolvimento é exibido primeiro. O idioma pode então ser alterado para qualquer idioma.", "O processo de tradução é tedioso, mas permite que muitas pessoas brinquem com ele."],
		},
		file: {
			title: "arquivo de idioma",
			summary: "Arquivo JSON dos dados de tradução.",
			points: ["Quando os dados do jogo são gerados com configurações públicas, um arquivo JSON para tradução é gerado em `translations/world` na pasta de saída.", "Os arquivos JSON para tradução em cada idioma estão localizados na pasta. O conteúdo contém dados nada traduzidos.", "O conteúdo tem um id dentro de cada Tipo. Além disso, há um nome e uma descrição dentro dele.", "As traduções devem ser feitas e salvas para todos os nomes e descrições."],
		},
		task: {
			title: "Tarefas de tradução",
			summary: "Edição de dados de tradução",
			points: ["Todos os arquivos de tradução contêm dados no idioma no momento do desenvolvimento.", "É necessário trabalho de tradução para arquivos que não estejam no idioma em que foram desenvolvidos."],
			children: {
				ai: {
					title: "IA",
					summary: "Tradução baseada em IA",
					points: ["Traduza usando IA, como ChatGPT, Copilot e Claude.", "É Possível traduzir de uma só vez e com um certo grau de qualidade.", "Pode não ser uma tradução perfeita, especialmente no caso de termos técnicos e nomes próprios.", "Dependendo do volume de traduções, o uso da IA pode ser caro.", "Se o progresso da tradução pela IA for interrompido no meio do processo, talvez seja possível dizer à IA para \"continuar\" e ela conseguirá. (Em alguns casos, isso pode não ajudar)."],
					children: {
						prompt: {
							title: "Exemplos de prompts",
							summary: "Exemplos de instruções de tradução fornecidas à IA",
							points: ["Exemplo de prompt: traduza do inglês para o japonês os valores de `name` e `explanation` dos dados JSON enviados. Não altere nenhuma outra parte."],
						},
						gpt: {
							title: "Uso de GPT",
							summary: "Tradução usando o GPT do ChatGPT.",
							points: ["O JSON Language Translator fornecido na biblioteca GPT fornecida pelo ChatGPT pode ser usado para traduzir JSON com facilidade.", "A estrutura JSON é preservada na tradução.", "Funções semelhantes podem ser oferecidas por serviços de IA diferentes do ChatGPT."],
						},
					},
				},
				online: {
					title: "serviço de tradução",
					summary: "Uso de serviços de tradução",
					points: ["Traduza usando serviços ligados, como DeepL e Google Translate.", "Pode-se esperar traduções de maior qualidade do que a tradução por IA, mas há uma taxa dependendo do volume de tradução", "Os arquivos JSON nada podem ser traduzidos diretamente pelos serviços de tradução, portanto, é necessário criar e usar um programa.", "Por uma taxa, há alguns serviços que traduzem dados JSON como estão. (por exemplo, doctranslator.com)"],
				},
				manual: {
					title: "manual (operação)",
					summary: "Tradução manual",
					points: ["Abra o arquivo de tradução em um editor de texto e insira o conteúdo traduzido em cada idioma. Isso consome muito tempo, mas é possível traduzir o arquivo exatamente como você deseja."],
				},
			},
		},
		code: {
			title: "código do idioma",
			summary: "Lista de códigos de idiomas suportados",
			list: [
				["código do idioma", "Idioma."],
				["en", "Inglês"],
				["zh", "Chinês (idioma)"],
				["es", "Espanhol"],
				["ar", "Árabe (idioma)"],
				["pt", "Português"],
				["oi", "Hindi"],
				["fr", "Francês"],
				["ru", "Russo"],
				["de", "Alemão"],
				["PT", "Japonês"],
			],
		},
	},
};

export const miscellaneous: Markdown = {
	title: "informações suplementares",
	summary: "Outras informações complementares explicadas.",
	points: ["Informações de referência."],
	list: expandList("suplemento", [translation], "Descrição"),
	options: {
		label: "miscellaneous",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "propriedades",
	summary: "Configuração dos efeitos de um Item.",
	points: ["Esse é um item de efeito que pode ser configurado no Item.", "Itens cujo tipo de equipamento é `necessary` ou `consumable` só aplicam seu efeito enquanto equipados. `unnecessary` aplica o efeito apenas por estar em posse, e a intensidade do efeito é proporcional à quantidade possuída (o dobro se você possuir 2).", "Como o efeito de `unnecessary` é calculado com base no número de itens em posse, o `maximum` (número máximo de itens) representa o limite máximo desse efeito. Ao ajustar o equilíbrio, faça a configuração desse valor em conjunto com o `maximum`.", "Os valores de ambos os itens são calculados como um Ajustado para a diferença de nível entre o nível do jogador e o nível da Ação.", "Por exemplo, se o valor de ataque for 10, o ataque será calculado como se o nível do jogador fosse 10 mais alto do que o nível da Ação. Os valores Menos são o oposto.", "attack, defence, accuracy, evasion e restore só são eficazes para ações do tipo `stamina`."],
	list: [
		["propriedades", "Detalhes da eficácia."],
		["velocidade", "Reduz o tempo necessário para uma Ação. O tempo necessário varia inversamente com a diferença de nível."],
		["chance", "Altera a probabilidade de sucesso de uma Ação. A probabilidade aumenta na proporção da diferença de nível."],
		["experiência", "Altera a experiência adquirida. Aumenta proporcionalmente à diferença de nível (o cálculo é invertido: quanto maior a Ação de nível, mais você ganha)."],
		["ataque", "Altera o dano de resistência causado ao oponente. (Ação de resistência apenas)."],
		["defesa", "Reduz o dano de resistência recebido dos oponentes. (Ação de resistência apenas)."],
		["precisão", "Baixa a taxa de erros de ataque. (Ação de resistência apenas)."],
		["evasão", "Altera a taxa de evasão dos ataques do oponente. (Ação de resistência apenas)."],
		["restaurar", "Altera a quantidade de resistência restaurada no fim de uma ação. (somente para ações de resistência)."],
	],
	children: {
		category: {
			title: "Categoria.",
			summary: "Especificação da Categoria à qual as propriedades se aplicam.",
			points: ["Configure o ID da Categoria à qual essa propriedade se aplica.", "Ao configurar `*`, aplica-se a todas as categorias.", "Se estiver em branco, ele se aplica à Categoria à qual o Item pertence."],
		},
		attack: {
			title: "Valor do ataque [diferença de nível].",
			summary: "Correção do dano de resistência infligido ao oponente (válido apenas para ações de resistência).",
			points: ["O dano do ataque é calculado presumindo-se que o nível do jogador seja esse valor maior do que o nível da Ação."],
		},
		defence: {
			title: "Valor de defesa [diferença de nível].",
			summary: "Correção do dano de resistência recebido de um oponente (válido apenas para ações de STAMINA).",
			points: ["O dano sofrido é calculado como se o nível do jogador fosse esse valor maior do que o nível da Ação. Quanto mais alto for o valor, menos dano será infligido."],
		},
		accuracy: {
			title: "Valor da precisão [diferença de nível].",
			summary: "Correção da taxa de falha de ataque (válida apenas para ações de resistência).",
			points: ["A taxa de falha é calculada presumindo-se que o nível do jogador seja esse valor maior do que o nível da Ação. Quanto mais alto for o valor, mais baixa será a taxa de erros."],
		},
		evasion: {
			title: "Valor de evasão [diferença de nível].",
			summary: "Correção da taxa de evasão dos ataques do oponente (válida apenas para ações de resistência).",
			points: ["A taxa de esquiva é calculada considerando que o nível do jogador é exatamente esse valor acima do nível da Ação. Quanto maior for esse valor, mais fácil será esquivar os ataques do adversário."],
		},
		restore: {
			title: "Valor restaurado [diferença de nível].",
			summary: "Correção na restauração da resistência (válida apenas para ações de STAMINA).",
			points: ["A quantidade de resistência restaurada é calculada presumindo-se que o nível do jogador seja esse valor maior do que o nível da Ação."],
		},
		speed: {
			title: "Rapidez [diferença de nível].",
			summary: "Correção do tempo da ação",
			points: ["O tempo necessário é calculado presumindo-se que o nível do jogador seja esse valor maior do que o nível da Ação. Quanto maior o valor, menor o tempo necessário."],
		},
		chance: {
			title: "Probabilidade de sucesso [diferença de nível].",
			summary: "Correção da probabilidade de sucesso da Ação.",
			points: ["A probabilidade de sucesso da ação é calculada presumindo-se que o nível do jogador seja esse valor maior que o nível da ação. Quanto maior o valor, maior a probabilidade de sucesso."],
		},
		experience: {
			title: "Experiência [diferença de nível].",
			summary: "Correções na experiência adquirida",
			points: ["A experiência é calculada como se o nível do jogador fosse muito menor do que o nível da ação (quanto maior o nível da ação, mais experiência é obtida, pois o cálculo é invertido)."],
		},
	},
	options: {
		label: "property",
	},
};

export const combat: Type.Combat = {
	title: "valor de combate",
	summary: "Valores de correção de combate para ações do tipo resistência.",
	points: ["Estes valores de correção só são eficazes para ações do tipo `stamina`.", "Cada valor é calculado como uma correção adicional à diferença de nível entre o jogador e a Ação.", "Por exemplo, se o valor do ataque for 10, o dano do ataque será calculado como se o nível do jogador fosse 10 mais alto do que o nível da Ação. Se for Menos, a correção será feita na direção oposta.", "Se forem configurados em `defaultCombat` dentro de Geral, tornam-se os parâmetros de combate padrão de todo o mundo."],
	children: {
		attack: {
			title: "Valor do ataque [diferença de nível].",
			summary: "Correção da diferença de nível do dano de resistência infligido aos oponentes.",
			points: ["Quanto maior o valor, mais danos são infligidos."],
		},
		defence: {
			title: "Valor de defesa [diferença de nível].",
			summary: "Correção da diferença de nível do dano de resistência recebido dos oponentes.",
			points: ["Quanto maior for o valor, maior será a redução do dano."],
		},
		accuracy: {
			title: "Valor da precisão [diferença de nível].",
			summary: "Correção da diferença de nível para a taxa de erros de ataque.",
			points: ["Quanto maior o valor, menor a taxa de erro."],
		},
		evasion: {
			title: "Valor de evasão [diferença de nível].",
			summary: "Correção da diferença de nível na taxa de evasão dos ataques do oponente.",
			points: ["Quanto maior o valor, mais fácil será a evasão do ataque do oponente."],
		},
		restore: {
			title: "Valor restaurado [diferença de nível].",
			summary: "Correção da diferença de nível para restaurar a resistência.",
			points: ["Quanto maior o valor, mais resistência é restaurada."],
		},
	},
	options: {
		label: "combat",
	},
};

export const acquisition: Type.Acquisition = {
	title: "aquisições",
	summary: "Configurações de aquisição em nível de Item e Categoria.",
	points: ["Configure as aquisições.", "Você pode alterar o nível da Categoria, bem como o Item, e o número de vezes que a Ação foi executada.", "A probabilidade de obter o produto pode ser configurada."],
	list: [
		["Tipo.", "O que você adquire."],
		["Categoria.", "nível"],
		["Ação.", "Número de vezes executado."],
		["Item", "número de posses"],
	],
	children: {
		type: {
			title: "Tipo.",
			summary: "Tipo de elemento a ser adquirido.",
			list: [
				["Tipo.", "O que é adquirido."],
				["Categoria.", "Nível (conversão de experiência adicionada)"],
				["Ação.", "Número de vezes executado."],
				["Item", "número de posses"],
			],
		},
		id: {
			title: "ID do elemento",
			summary: "ID que identifica o elemento a ser adquirido.",
		},
		count: {
			title: "valor",
			summary: "Valores numéricos a serem obtidos",
			points: ["Configurações Menos reduzem o número de posses, o número de vezes que foram realizadas e seu nível. No entanto, ele não pode ser baixo, igual a 0.", "Se um Item tiver uma configuração de número máximo de posses (máximo), o número de posses não aumentará além desse valor.", "Se o Tipo for Categoria, o valor configurado será adicionado diretamente ao nível (1 para 1 nível, 0,5 para 0,5 nível). A maneira usual de Ajustar isso é configurando o valor de experiência da Ação. Essa configuração não é necessária, a menos que haja um propósito especial."],
		},
		chance: {
			title: "Probabilidade [-1 a 1]",
			summary: "Probabilidade de sucesso na obtenção (valores negativos são avaliados apenas em caso de fracasso)",
			points: ["Defina a configuração da probabilidade de obtenção como um número decimal entre -1 e 1. O valor absoluto é usado para determinar a probabilidade.", "Quando o valor é positivo, só é avaliado se a ação tiver sucesso: com `1` obtém-se sempre e com `0.5` obtém-se com 50% de probabilidade.", "Quando o valor é negativo, só é avaliado se a ação falhar: com `-1` obtém-se sempre e com `-0.5` obtém-se com 50% de probabilidade.", "No caso de `0`, não é possível obtê-lo nem em caso de sucesso nem em caso de fracasso.", "O valor padrão é `1` (sempre obtido em caso de sucesso)."],
		},
	},
	links: { type: "type" },
	options: {
		label: "acquisition",
	},
};

export const requirement: Type.Requirement = {
	title: "termos e condições",
	summary: "Configuração dos requisitos necessários para o uso e exibição de elementos.",
	points: ["Essas são as condições configuradas para cada elemento por Categoria, Ação e Item.", "Se todas as condições de configuração não forem atendidas, as operações mostradas na tabela não poderão ser realizadas.", "Se a função de bloqueio estiver ativada, o elemento em si ficará oculto até que a condição seja atendida."],
	list: [
		["Onde fazer a configuração", "O que nada pode ser feito se as condições forem atendidas."],
		["Categoria.", "Execução de todas as Ações e manipulação de Itens na Categoria"],
		["Ação.", "Execução de ações"],
		["Item", "Manipulação de itens (por exemplo, Equipamento)"],
	],
	children: {
		type: {
			title: "Tipo.",
			summary: "Tipo de elemento referenciado como uma condição.",
			list: [
				["Tipo.", "Valores referenciados"],
				["Categoria.", "Nível da Categoria."],
				["Ação.", "Número de vezes que a Ação foi executada."],
				["Item", "Número de itens mantidos."],
			],
		},
		id: {
			title: "ID do elemento",
			summary: "ID do elemento referido como a condição.",
		},
		count: {
			title: "valor",
			summary: "Valores numéricos necessários para os requisitos.",
			points: ["A condição será atendida se o valor for maior ou igual ao valor especificado."],
		},
		chance: {
			title: "Probabilidade de consumo [0-1].",
			summary: "Probabilidade de um item ser consumido (0-1, válido apenas se o Tipo for Item).",
			points: ["A probabilidade de um Item ser consumido quando a condição for atendida e a Ação for executada.", "Com `1` sempre consome, com `0.5` consome com 50% de probabilidade e com `0` não consome.", "O valor padrão é `1` (sempre consome).", "Inválido se o Tipo for diferente de Item."],
		},
		equipment: {
			title: "Equipamento",
			summary: "Requer que o Item esteja em um estado equipado (válido apenas se o Tipo for Item) ou",
			points: ["Quando ativado, o Item deve ser equipado e possuído.", "Inválido se o Tipo for diferente de Item."],
		},
	},
	links: { type: "type" },
	options: {
		label: "requirement",
	},
};

export const information: Type.Information = {
	title: "informações",
	summary: "Configuração de informações básicas sobre o elemento (ID, nome, ícone, cor, etc.)",
	points: ["Itens de informações básicas comuns a cada elemento do mundo (Categorias, Ações, Itens, Eventos, etc.).", "Cada elemento é configurado separadamente."],
	children: {
		id: {
			title: "ID",
			summary: "ID exclusivo para identificar o elemento",
			points: ["ID para identificar exclusivamente cada elemento.", "No editor, essa é uma string para identificar o elemento.", "Por exemplo, o ID especifica qual Item é obtido quando a Ação é concluída."],
			important: "Após a configuração do ID, nada deve ser alterado depois que o jogo tiver sido distribuído. Alterá-la resultará em inconsistências com os dados do jogo existentes e o jogo nada funcionará corretamente.",
			children: {
				displayName: {
					title: "Nome exibido.",
					summary: "Nome de exibição gerado automaticamente a partir do ID",
					points: ["Os caracteres que podem ser usados são uma combinação de letras, hífens e números.", "Se o nome ainda não estiver configurado, a primeira letra de cada palavra será maiúscula e o hífen será substituído por um espaço, que é automaticamente configurado no nome.", "Para idiomas diferentes do inglês, a entrada do nome deve ser configurada individualmente."],
					children: {
						example: {
							title: "Exemplo.",
							summary: "Exemplos reais de conversão de ID",
							points: ["Se o ID for `stylish-strong-axe`, o nome será `Stylish Strong Axe`."],
						},
					},
				},
				noDuplicate: {
					title: "Nada de duplicação.",
					summary: "Proibição de IDs duplicados dentro do mesmo Tipo.",
					points: ["Nada de duplicar nos tipos Categoria, Ação, Item, Evento e Predefinição, pois eles são usados para identificar elementos.", "Ter o mesmo ID para tipos diferentes não é um problema."],
					links: { type: "type" },
				},
			},
		},
		name: {
			title: "Nome.",
			summary: "Nome do elemento como ele aparece",
			points: ["Nome do elemento exibido no jogo.", "Outros idiomas além do inglês também podem ser inseridos.", "Nomes que duplicam outros elementos são aceitáveis.", "Se for longo demais, a parte que transborda é omitida com `…` na exibição durante o jogo."],
			children: {
				translateFromId: {
					title: "Conversão automática de ID",
					summary: "Geração automática de nomes a partir de IDs",
					points: ["Se o campo for deixado em branco, as informações serão exibidas automaticamente com base no ID. Para obter mais informações, consulte a seção anterior."],
				},
			},
		},
		explanation: {
			title: "Nota explicativa",
			summary: "Descrição detalhada do elemento.",
			points: ["Uma descrição dos elementos exibidos no jogo.", "Outros idiomas além do inglês podem ser inseridos. Todos os textos, mesmo os longos, são exibidos.", "Se nada for explicado, deixe em branco."],
		},
		icon: {
			title: "ícone",
			summary: "Configuração de ícones para representar elementos.",
			points: ["Os ícones podem ser configurados como imagens, Iconify ou emojis.", "O Iconify é um serviço que oferece uma ampla variedade de ícones.", "Se for contada mais de uma configuração, as imagens, o Iconify e os pictogramas serão priorizados e exibidos nessa ordem."],
			children: {
				image: {
					title: "Imagem.",
					summary: "Use qualquer arquivo de imagem",
					points: ["Imagem que representa o elemento.", "Se o tamanho do arquivo for grande, ele será redimensionado automaticamente.", "Desnecessário se o Iconify ou os pictogramas estiverem configurados."],
					children: {
						"file-type": {
							title: "Tipo de arquivo",
							summary: "Formatos de arquivo de imagem suportados",
							points: ["Podem ser usados os formatos comuns que os navegadores conseguem exibir.", "JPEG, PNG, GIF, WebP, SVG, entre outros."],
						},
					},
				},
				iconify: {
					title: "Iconificar",
					summary: "Usando o conjunto de ícones do Iconify",
					points: ["Ícones que representam elementos.", "O Iconify é um serviço que oferece uma ampla variedade de ícones.", "Se uma imagem for configurada, ela terá precedência."],
					children: {
						iconify: {
							title: "Iconificar",
							summary: "Como selecionar ícones do Iconify",
							points: ["Procure em `Iconify` os ícones que podem ser exibidos.", "Você pode encontrar rapidamente os melhores ícones pesquisando por ícones.", "Selecione um ícone para ver seu identificador (tipo de conjunto de ícones `:` nome do ícone), como `game-icons:sword-wound`, e cole-o diretamente nesse campo de ícone."],
							images: ["iconify-selection.png"],
							links: { iconify: "https://icon-sets.iconify.design" },
						},
					},
				},
				emoji: {
					title: "pictograma",
					summary: "Exibição de ícones com pictogramas",
					points: ["Exibir pictogramas como ícones.", "Ele pode ser convertido de texto para pictogramas e configurado rapidamente.", "Para pictogramas, insira os pictogramas Unicode como eles são.", "Como os pictogramas introduzidos no ambiente de execução são usados, eles são exibidos de forma ligeiramente diferente para diferentes usuários.", "O Iconify permite que você configure emojis que nada têm a ver com cada ambiente", "Caracteres não pictográficos podem ser exibidos, mas a exibição poderá ser corrompida se houver mais de um caractere.", "Digite pictogramas, por exemplo, `🗡️` ou `⚔️`."],
				},
			},
		},
		color: {
			title: "Cor",
			summary: "Configure a cor de exibição do elemento.",
			points: ["Como uma cor de elemento, ela é aplicada ao ícone e à cor de fundo do elemento.", "Selecione no seletor de cores do editor."],
			children: {
				"heritage-from-parent": {
					title: "Herança do elemento pai",
					summary: "Adoção da cor configurada no elemento pai",
					points: ["Se ficar em branco, a cor configurada no elemento pai é herdada.", "A hierarquia dos tipos de cada elemento é a seguinte.", "Por exemplo, se uma ação tiver uma cor própria configurada, ela é usada; se a ação não tiver uma cor própria, é usada a cor da categoria ou do mundo.", "Quando um evento também tem uma categoria configurada, ele herda a cor dessa categoria da mesma forma que as ações e os itens."],
					quote: typeTree,
					links: { type: "type" },
				},
			},
		},
	},
	options: {
		label: "information",
	},
};

export const component: Markdown = {
	title: "componente",
	summary: "Partes comuns",
	points: ["Os componentes comuns usados em cada configuração de local são extraídos e manipulados.", "Os componentes usados em todas essas áreas são comuns, mas nada é usado em alguns dos itens."],
	list: expandList("componente", [information, requirement, acquisition, combat, property], "Descrição"),
	options: {
		label: "component",
		linkedList: true,
	},
};

// type

export const preset: Type.Information = {
	...information,
	title: "predefinido",
	summary: "Personalização da exibição dos elementos do sistema",
	points: ["Substitui o texto e os ícones da interface do usuário pré-integrados ao mecanismo de jogo (jogador).", "Somente aqueles que correspondem a uma predefinição existente por ID serão substituídos.", "Somente os itens que você configurar serão substituídos. Por exemplo, se apenas o ícone estiver configurado, os outros itens, como nome e cor, usarão o original.", "A substituição de nomes e descrições tem prioridade sobre as traduções em cada idioma incorporado ao jogo para os jogadores. As sequências de caracteres substituídas serão exibidas exatamente como estão em todos os idiomas.", "Se desejar alterar o texto para cada idioma, ative a tradução e especifique-o no arquivo de tradução `translations/world` gerado. Esse arquivo terá prioridade máxima."],
	options: {
		label: "preset",
	},
};

export const task: Type.Event = {
	title: "Tarefa",
	summary: "Missões que são consideradas concluídas quando as condições são atendidas",
	points: ["Quando as configurações definidas forem atendidas, a meta será alcançada e uma mensagem será exibida na parte da cima da tela.", "Será exibido na lista de missões do jogador e na lista de tarefas da Categoria.", "A recompensa não é concedida automaticamente. O jogador a recebe ao abrir a tarefa e clicar na barra de aquisições.", "Até que a remuneração seja recebida, uma fita aparecerá na barra da lista, indicando que ela ainda não foi recebida.", "Ao realizar aquisições de itens, é possível alterar o nível da Categoria, o número de vezes que uma Ação foi executada e a quantidade de itens em posse.", "Os eventos que você deseja acionar em momentos que não sejam os previstos, como na primeira inicialização ou quando o jogo é terminado, devem ser configurados nos eventos das configurações básicas."],
	links: { event: "event" },
	children: {
		information: information,
		category: {
			title: "Categoria.",
			summary: "ID da categoria à qual a tarefa pertence",
			points: ["Especifique o ID da categoria à qual esta tarefa deve ser atribuída.", "Ao definir essa configuração, uma lista de tarefas será adicionada à tela de categorias do jogador, e ela também será exibida agrupada por categoria na lista de missões.", "Se o campo estiver em branco, a missão não pertencerá a nenhuma categoria e será exibida agrupada no início da lista de missões."],
		},
		timing: {
			title: "tempo",
			summary: "Momento de acionamento da tarefa (fixo em `matched`)",
			points: ["A tarefa está definida como `matched` (quando a configuração das condições for atendida) e não pode ser editada.", "A recompensa só pode ser recebida uma vez; depois de recebida, o status de “concluído” permanece inalterado.", "Aquilo que você deseja ativar em outros momentos deve ser configurado nos eventos das configurações básicas."],
			links: { event: "event" },
		},
		unlocked: {
			title: "Estado inicial de exibição",
			summary: "Estado inicial de exibição do ícone da tarefa (a conclusão depende de condições; com esta configuração, a tarefa não será considerada concluída)",
			points: ["タスクの達成条件はrequirementsで決まり、この項目は一覧アイコンの見た目のみに影響します。", "secreted: 全requirementsを満たすまでタスクの一覧に一切表示されません（達成自体は条件で起こります）。", "hidden・hinted: アイコンに斜線が付き未解放として表示されます。", "released: 斜線が消え解放済みとして表示されます。", "一度達成したタスクは一覧から消えず、その後に条件を満たさなくなっても達成のまま表示されます。"],
		},
		requirements: {
			title: "termos e condições",
			summary: "Condições para a conclusão da tarefa",
			points: ["タスクを達成させる条件です。", "この条件を満たすと達成になり、報酬を受け取れるようになります。", "一度達成すると、その後に条件を満たさなくなっても達成のままで、報酬もいつでも受け取れます。", "条件を設定していないタスクは達成しません。"],
			children: requirement.children,
		},
		acquisitions: {
			title: "prêmio",
			summary: "Configuração de recompensas ao concluir tarefas",
			points: ["達成したタスクを開き、獲得のバーを押した時に受け取れる報酬です。", "カテゴリーのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。", "数量にマイナスを設定することもできます。", "報酬を設定していないタスクは獲得のバーが出ず、達成した時点で完了になります。", "持てるアイテムの種類が上限に達している時は受け取れません。整理してから受け取り直します。"],
			children: acquisition.children,
		},
		group: {
			title: "grupo de trabalho",
			summary: "Classificação dos grupos de exibição de tarefas",
			points: ["Aplique um dos grupos configurados no Basic.", "A lista de tarefas é exibida na ordem da configuração dos grupos.", "Dentro da categoria, os itens são exibidos divididos em grupos.", "Se for deixado em branco, nenhum agrupamento será feito."],
			links: { general: "general" },
		},
	},
	options: {
		label: "task",
	},
};

export const group: Type.Information = {
	...information,
	title: "grupo (geralmente de pessoas)",
	summary: "Definir grupos de exibição para Categorias, Ações e Itens",
	points: ["Defina grupos para controlar a ordem de exibição.", "Você pode configurar grupos definidos aqui para cada Categoria, Ação e Item.", "Os grupos com o mesmo grupo são exibidos próximos uns dos outros.", "Se for deixado em branco, nenhum agrupamento será feito."],
	options: {
		label: "group",
	},
};

export const item: Type.Item = {
	title: "Item",
	summary: "Elementos de bens, como Equipamento e consumíveis",
	points: ["Esse elemento está relacionado ao próprio patrimônio de objetos, como Equipamento, consumíveis e objetos de valor.", "Apenas um pode ser Equipamento em uma Categoria, ou nada pode ser desativado.", "Há também maneiras contadas de usá-los."],
	children: {
		information: information,
		category: {
			title: "Categoria.",
			summary: "ID da Categoria à qual o Item pertence",
			points: ["Especifique o ID da Categoria à qual esse Item pertence."],
		},
		group: {
			title: "grupo (geralmente de pessoas)",
			summary: "Exibir grupo de classificação de itens",
			points: ["Aplique um dos grupos configurados no Basic.", "Uma lista de itens é exibida na ordem dos grupos configurados.", "Se for deixado em branco, nenhum agrupamento será feito."],
			links: { general: "general" },
		},
		unlocked: {
			title: "Estado de desbloqueio inicial",
			summary: "Estado inicial de exibição e liberação do elemento (passa automaticamente para o estado superior quando os requisitos de ativação forem atendidos)",
			points: ["secreted: Não será exibido na interface do usuário até que todos os requisitos sejam atendidos (não aparece nas Dicas e fica oculto na lista de requisitos/recompensas).", "hidden: Fica totalmente oculto enquanto não for referenciado por nenhum elemento de liberação e não atender aos requisitos (o nome fica desativado e não pode ser alterado).", "hinted (padrão): Apenas o nome é exibido como prévia, mas não é possível realizar nenhuma ação até que seja liberado.", "liberado: fica liberado e pronto para uso desde o início, independentemente das condições (antiga opção “Exibir desde o início”)."],
		},
		buyingValue: {
			title: "Valor de compra [moedas].",
			summary: "Configuração do preço de compra dos itens.",
			points: ["Não é possível comprar um Item sem nunca tê-lo possuído."],
			list: [
				["valor", "tratamento"],
				["0", "nada"],
				["Um valor maior que zero.", "O valor que você pode comprar."],
				["Um valor menor que zero (por exemplo, -1)", "Nada pode ser comprado (tratado como zero)."],
			],
		},
		sellingValue: {
			title: "Valor de venda [moedas].",
			summary: "Configuração do preço de venda dos itens.",
			points: ["Configura o preço pelo qual os Itens são vendidos."],
			list: [
				["valor", "tratamento"],
				["0", "nada"],
				["Um valor maior que zero.", "Venda por esse valor."],
				["Um valor menor que zero (por exemplo, -1)", "Taxa de desconto de configuração geral multiplicada pelo preço do lance (se o preço do lance for zero, nada poderá ser vendido)"],
			],
			links: { general: "general" },
		},
		maximum: {
			title: "Máx. número próprio [pçs].",
			summary: "Limite do número máximo de itens próprios.",
			points: ["Se for 0, não há limite para o número que pode ser próprio.", "Se estiver acima de 1, você só poderá contar com esse número. Se o limite máximo estiver em cima, outras aquisições não aumentarão o número de próprios."],
		},
		equipmentType: {
			title: "Tipo de Equipamento",
			summary: "Configurações de tipo para Equipamento, efeitos e consumo de itens.",
			points: ["Os itens equipáveis precisam pertencer a um grupo indicado em `equipmentGroups` da categoria.", "Somente um Item pode ser equipado em um mesmo grupo.", "`unnecessary` produz efeito independentemente de estar equipado, e a intensidade do efeito é proporcional à quantidade que você possui (sem efeito com 0, n vezes com n)."],
			list: [
				["valor", "Equipamento", "Eficácia.", "consumo", "Exemplo."],
				["`necessary`", "Necessário", "Apenas enquanto estiver equipando (1 unidade)", "nada", "Espadas, armaduras e outros equipamentos."],
				["`consumable`", "Necessário", "Apenas enquanto estiver equipando (1 unidade)", "Consumido quando as ações são realizadas", "Itens que são consumidos para obter um efeito, como poções."],
				["`unnecessary`", "Desnecessário", "Enquanto estiver em posse, sempre (proporcionalmente à quantidade em posse)", "nada", "Itens passivos que são eficazes pelo simples fato de tê-los."],
				["`impossible`", "não permitido", "nada", "nada", "Itens nada eficazes, como materiais e detritos."],
			],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Requisitos necessários para o uso do Item." },
		properties: { ...property, options: { ...property.options, array: true }, summary: "Efeitos das propriedades do Item." },
		coinId: { title: "ID da moeda de negociação", summary: "ID da moeda utilizada na compra e venda deste Item", points: ["Especifique o ID da moeda (coins) usada tanto para o valor de compra quanto para o valor de venda.", "Se o campo estiver em branco, será utilizada a moeda principal (a primeira da lista de moedas)."] },
	},
	options: {
		label: "item",
	},
};

export const action: Type.Action = {
	title: "Ação.",
	summary: "Elementos de ação, como coletar, criar e lutar.",
	points: ["São elementos que representam atos como colecionar, fazer, comprar e vender e lutar.", "A cada ação realizada, você ganha experiência e seu nível sobe.", "Você pode configurar os itens a serem consumidos ou obtidos para cada ação.", "Há sim vários tipos de padrões de agir."],
	children: {
		information: information,
		category: {
			title: "Categoria.",
			summary: "ID da Categoria à qual a Ação pertence",
			points: ["Especifique o ID da Categoria à qual essa Ação pertence."],
		},
		attribute: {
			title: "atributo",
			summary: "Categorias de atributo específicas da ação",
			points: ["Atributos individuais (Categorias) podem ser configurados.", "Se for deixado em branco, a Categoria à qual pertence será assumida", "Por exemplo, se você configurar o atributo Magia para uma ação que pertença à categoria Castelo do Demônio individualmente, o nível e as propriedades da Categoria Magia serão calculados e aplicados ao tempo de conclusão e ao dano da ação."],
			links: { category: "category" },
		},
		group: {
			title: "grupo (geralmente de pessoas)",
			summary: "Exibir a classificação de grupo de ações",
			points: ["Aplique um dos grupos configurados no Basic.", "Uma lista de Ações é exibida na ordem dos grupos configurados."],
			links: { general: "general" },
		},
		unlocked: {
			title: "Estado de desbloqueio inicial",
			summary: "Estado inicial de exibição e liberação do elemento (passa automaticamente para o estado superior quando os requisitos de ativação forem atendidos)",
			points: ["secreted: Não será exibido na interface do usuário até que todos os requisitos sejam atendidos (não aparece nas Dicas e fica oculto na lista de requisitos/recompensas).", "hidden: Fica totalmente oculto enquanto não for referenciado por nenhum elemento de liberação e não atender aos requisitos (o nome fica desativado e não pode ser alterado).", "hinted (padrão): Apenas o nome é exibido como prévia, mas não é possível realizar nenhuma ação até que seja liberado.", "liberado: fica liberado e pronto para uso desde o início, independentemente das condições (antiga opção “Exibir desde o início”)."],
		},
		level: {
			title: "nível",
			summary: "Nível de dificuldade da Ação.",
			points: ["O nível de dificuldade da Ação é indicado pelo nível.", "Calcule cada propriedade em tempo de execução em comparação com o nível do jogador.", "Por exemplo, a execução de uma Ação superior ao seu nível terá uma taxa de sucesso baixa.", "Se as condições forem atendidas, a execução poderá ser realizada mesmo que o nível do jogador seja inferior a esse valor."],
			links: { property: "property" },
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Requisitos necessários para a execução da Ação." },
		seconds: {
			title: "Tempo [segundos].",
			summary: "Tempo típico necessário para realizar a Ação",
			points: ["O tempo padrão (em segundos) Necessário para executar uma ação uma vez.", "Para o tipo `stamina`, este é o intervalo de tempo de um turno (a resistência de cada lado é reduzida uma vez).", "A execução real pode variar devido aos cálculos das propriedades."],
			links: { property: "property" },
		},
		experience: {
			title: "Experiência [próximo nível em 100].",
			summary: "Experiência adquirida com as ações de sucesso",
			points: ["A experiência padrão adquirida ao realizar uma Ação uma vez e com sucesso; 100 minutos equivalem a um nível de experiência.", "No caso de combate, é aconselhável configurar mais, pois as aquisições são feitas quando o oponente vence.", "A execução real pode variar devido aos cálculos das propriedades."],
			links: { property: "property" },
		},
		chance: {
			title: "Probabilidade de sucesso [0-1].",
			summary: "Probabilidade de sucesso na conclusão da Ação",
			points: ["A probabilidade de sucesso na conclusão da Ação.", "Com `1` sempre tem sucesso e com `0` sempre falha.", "Em caso de fracasso, os Itens consumíveis são consumidos, mas nenhuma recompensa ou experiência é obtida.", "A execução real pode variar devido aos cálculos das propriedades."],
		},
		maximum: {
			title: "Número máximo de execuções [vezes].",
			summary: "Número máximo de vezes que uma ação pode ser concluída.",
			points: ["O número máximo de vezes que uma Ação pode ser concluída com sucesso.", "Com `0` é ilimitado.", "Quando o limite superior é atingido, a Ação não é mais executável."],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Recompensa pela aquisição bem-sucedida da Ação." },
		progressType: {
			title: "Tipo de progresso",
			summary: "Tipo de execução da ação",
			points: ["Há quatro tipos."],
			list: [
				["Tipo.", "detalhes da operação", "resistência", "Exemplo."],
				["`persistent`", "Esse é um tipo de ação que se repete continuamente; você ganha experiência e valores a cada conclusão.", "Nada a ver", "Exploração madeireira, mineração, pesca"],
				["`single`", "Execute uma Ação de cada vez. Se interrompido, o progresso é salvo e pode ser retomado na próxima vez. Quando concluído, o usuário pressiona a Ação de confirmação para receber os resultados.", "Nada a ver", "Abrir baús de tesouro, aprender habilidades por meio da leitura"],
				["`snap`", "Esse Tipo de Ação é realizado instantaneamente. Concluída imediatamente, sem nada de tempo.", "Nada a ver", "Negociar, uso de itens."],
				["`stamina`", "Cada tempo necessário diminui a respectiva resistência do jogador e do oponente. Quando a resistência do oponente se esgota, ganha-se experiência e prêmios. Quando a resistência do jogador se esgota, o jogo termina e todas as ações em andamento são abortadas.", "Relevante.", "Combate, operações perigosas."],
			],
		},
		property: combat,
	},
	options: {
		label: "action",
	},
};

export const category: Type.Category = {
	title: "Categoria.",
	summary: "Estrutura geral para a classificação de ações e itens.",
	points: ["Representa uma classificação importante.", "Por exemplo, ele pode ser configurado em qualquer ambiente, como curto alcance, longo alcance, magia, masmorras, ferreiros, fábricas etc.", "As Ações e os Itens são colocados diretamente abaixo do mundo e são associados a uma ID de Categoria."],
	children: {
		information: information,
		group: {
			title: "grupo (geralmente de pessoas)",
			summary: "Exibir a classificação de grupos de categorias",
			points: ["Aplique um dos grupos configurados no Basic.", "Uma lista de Categorias é exibida na ordem dos grupos configurados."],
			links: { general: "general" },
		},
		unlocked: {
			title: "Estado de desbloqueio inicial",
			summary: "Estado inicial de exibição e liberação do elemento (passa automaticamente para o estado superior quando os requisitos de ativação forem atendidos)",
			points: ["secreted: Não será exibido na interface do usuário até que todos os requisitos sejam atendidos (não aparece nas Dicas e fica oculto na lista de requisitos/recompensas).", "hidden: Fica totalmente oculto enquanto não for referenciado por nenhum elemento de liberação e não atender aos requisitos (o nome fica desativado e não pode ser alterado).", "hinted (padrão): Apenas o nome é exibido como prévia, mas não é possível realizar nenhuma ação até que seja liberado.", "liberado: fica liberado e pronto para uso desde o início, independentemente das condições (antiga opção “Exibir desde o início”)."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Requisitos para uso da Categoria." },
		equipmentGroups: {
			title: "Grupo de equipamentos",
			summary: "Designação de grupos de itens que podem ser equipados nessa Categoria.",
			points: ["Lista de nomes de grupos de itens que podem ser equipados nessa Categoria.", "Somente os itens do grupo que correspondem ao nome do grupo especificado aqui podem ser equipados.", "Se uma string vazia for especificada, os itens com um grupo sem configuração (vazio) se tornarão elegíveis para Equipamento.", "Somente um Item pode ser equipado em um mesmo grupo. Quando você equipa um novo Item, qualquer equipamento existente no mesmo grupo é automaticamente desequipado.", "Se a lista estiver vazia (0 peças), nada poderá ser equipado."],
			links: { general: "general" },
		},
		numeric: {
			title: "Disponibilidade de níveis",
			summary: "Disponibilidade de funções em nível de Categoria",
			points: ["Esse é um sinalizador para indicar se essa Categoria tem um nível ou não.", "Se estiver ligado, ele tem um nível; se estiver desligado, não tem.", "Um exemplo é ativar as categorias com base na experiência, como espadachim e magia, e desligar as categorias com base no local, como masmorras e ferreiros."],
		},
		standaloneProgress: {
			title: "em progresso simultâneo",
			summary: "Configurações de execução paralela com outras categorias",
			points: ["Esse é um sinalizador que indica se as ações nessa Categoria podem progredir em paralelo com ações em outras Categorias.", "Se ligada, a Ação pode progredir simultaneamente e independentemente de outras Categorias de Ações.", "Se estiver desligada, ela não poderá ser executada simultaneamente com ações em outras Categorias que também estejam configuradas como desligadas. Quando você começa uma nova Ação nessa Categoria, as ações em progresso em outras Categorias não autônomas são automaticamente abortadas."],
		},
		background: {
			title: "fundo",
			summary: "Configurações de fundo específicas da Categoria",
			points: ["Configure o plano de fundo para essa Categoria.", "Quando uma Categoria é selecionada, a imagem de fundo muda em conjunto com ela.", "Se nada for configurado, a configuração do plano de fundo do mundo será usada como está."],
		},
	},
	options: {
		label: "category",
	},
};

export const type: Markdown = {
	title: "Tipo.",
	summary: "Classificação básica dos mundos",
	points: ["Os mundos consistem em seis tipos.", "Todos os elementos são colocados diretamente abaixo do mundo.", "As Ações e os Itens são associados ao ID da Categoria à qual pertencem."],
	list: expandList("Tipo.", [category, action, item, group, task, preset], "Descrição"),
	quote: typeTree,
	options: {
		label: "type",
		linkedList: true,
	},
};

// basic

export const development: Type.Development = {
	title: "desenvolvimento",
	summary: "Gerenciamento de notas e erros durante o desenvolvimento do mundo",
	points: ["Usado durante o desenvolvimento do mundo.", "Ela diz respeito ao desenvolvimento e aos testes desse mundo e não afeta o conteúdo do jogo.", "Os jogadores não verificam o conteúdo relacionado ao desenvolvimento."],
	children: {
		version: {
			title: "versão",
			summary: "Número da versão da compilação do editor.",
			points: ["O número da versão do console é registrado automaticamente no momento da criação do mundo.", "Os desenvolvedores não podem alterar esse conteúdo."],
		},
		memo: {
			title: "Memorando.",
			summary: "Registros de memorando para desenvolvedores",
			points: ["Os desenvolvedores podem incluir essas informações como uma observação.", "Não é relevante para a publicação dos jogos."],
		},
		errors: {
			title: "erro",
			summary: "Registro de erros de resultados de validação.",
			points: ["Os resultados da validação do mundo são armazenados automaticamente aqui.", "Por exemplo, será exibido um erro se houver um tipo de caractere que nada pode ser inserido ou se for inserido um valor numérico que esteja acima do limite.", "Os desenvolvedores não podem alterar esse conteúdo.", "Possível de ser armazenado no servidor quando nada de erros for armazenado aqui."],
		},
		timestamp: {
			title: "registro de data e hora",
			summary: "Registros de criação, preservação e publicação.",
			points: ["O tempo de criação, armazenamento e publicação de mundos é registrado automaticamente.", "Os desenvolvedores não podem alterar esse conteúdo."],
			children: {
				created: {
					title: "dias",
					summary: "Tempo da primeira criação do mundo",
					points: ["Os dias e a hora em que o mundo foi criado."],
				},
				saved: {
					title: "salvar dias e horas",
					summary: "Hora da última execução de salvamento",
					points: ["Os dias e a hora em que o mundo foi salvo pela última vez."],
				},
				published: {
					title: "dias e horários de publicação",
					summary: "Hora da última execução pública",
					points: ["O mundo foi publicado pela última vez em."],
				},
			},
		},
		autosaveing: {
			title: "economia automática",
			summary: "Ativar/desativar a função de salvamento automático.",
			points: ["Indica se a função de salvamento automático está ativada.", "Os desenvolvedores não podem alterar esse conteúdo."],
		},
	},
	options: {
		label: "development",
	},
};

export const design: Type.Design = {
	title: "design",
	summary: "Configurações de aparência visual, como cores e fontes do mundo.",
	points: ["Configurações sobre a exibição de mundos.", "Com relação ao design geral do mundo, se houver configurações individuais para cada elemento, elas terão precedência."],
	children: {
		barColor: {
			title: "Cor da barra",
			summary: "Cor de fundo da barra",
			points: ["É usado como cor de fundo da barra.", "Como essa cor serve de fundo baixo para toda a tela, a cor da linha selecionada e da barra de rolagem também é derivada dessa cor."],
		},
		textColor: {
			title: "Cor da fonte",
			summary: "Cor da fonte e do fundo",
			points: ["É usado como cor da fonte.", "Se você não realizar a configuração de uma imagem de fundo, será utilizado um gradiente baseado nessa cor como fundo.", "Se você aumentar bastante o contraste com a cor da barra, o texto fica mais fácil de ler."],
		},
		shadowColor: {
			title: "Cor da sombra",
			summary: "Cor da sombra da barra",
			points: ["É usada como cor da sombra projetada nas barras e nos cabeçalhos.", "Se você escolher uma cor mais escura do que a da barra, o efeito de sombra ficará mais natural."],
		},
		background: {
			title: "imagem de fundo",
			summary: "Imagem de fundo para todo o jogo",
			points: ["Configura a imagem de fundo do jogo.", "Caso não haja configuração de imagem, o fundo será um gradiente baseado na cor da fonte."],
		},
	},
	options: {
		label: "design",
	},
};

export const general: Type.General = {
	title: "Geral",
	summary: "Configurações básicas do jogo, incluindo configurações de idioma e nível",
	children: {
		language: {
			title: "Idioma.",
			summary: "Idioma do mundo na época de sua criação.",
			points: ["Configura o idioma usado nesse editor de mundos.", "O primeiro idioma exibido quando o usuário inicia o jogo."],
		},
		translations: {
			title: "tradução",
			summary: "Preparar traduções em vários idiomas ou",
			points: ["Se ativado, os usuários podem jogar em qualquer idioma.", "Se estiver desativado, você só poderá reproduzir no idioma selecionado nas configurações de idioma.", "Se a tradução estiver ativada, os dados traduzidos para cada idioma deverão ser fornecidos."],
			links: { translation: "translation" },
		},
		offlineMaxHours: {
			title: "Tempo máximo desligado [horas].",
			summary: "Limites de tempo para progresso desligado.",
			points: ["Configure o número máximo de tempos de progresso quando estiver desligado.", "Por exemplo, se 6 horas for definido, o processo de retorno off-line até 6 horas será processado, mas se for permitido ficar off-line por mais tempo, o tempo off-line será tratado como 6 horas.", "Se for definido 0 tempo, não ocorrerá nenhum processamento de processo ao retornar ao modo desligado.", "O valor máximo é de 24 horas."],
			links: { category: "category" },
		},
		maxCategoryLevels: {
			title: "Nível máximo da Categoria",
			summary: "Nível limite para cada Categoria.",
			points: ["Configure o nível máximo para cada Categoria.", "Se forem adquiridas experiências além desse nível, o nível máximo configurado aqui será usado no cálculo de cada propriedade.", "Esse valor não tem relações com Categorias sem níveis."],
			links: { category: "category" },
		},
		locking: {
			title: "função de bloqueio",
			summary: "Ocultar itens até que os requisitos sejam atendidos",
			points: ["Se ativado, o Item de Ação da Categoria ficará oculto enquanto nada tiver sido usado ou possuído e os requisitos não tiverem sido atendidos.", "Se estiver desativado, todos os itens serão exibidos desde o início, mas não poderão ser executados ou equipados até que os requisitos sejam atendidos."],
			links: { category: "category", action: "action", item: "item" },
		},
		coins: {
			title: "moeda",
			summary: "Configuração da moeda (moedas) utilizada no jogo",
			points: [
				"Realize a configuração da moeda utilizada no jogo.",
				"É possível definir várias moedas, com a configuração de cada uma delas com informações (ID, nome, ícone, cor etc.).",
				"A moeda é usada para comprar e vender itens e para ampliar a capacidade do inventário.",
				"A moeda que aparece em primeiro lugar é considerada a moeda principal e é utilizada quando o ID da moeda (`coinId`) não for especificado em Items ou na capacidade.",
			],
			links: { information: "information", item: "item" },
		},
		capacity: {
			title: "capacidade",
			summary: "Configurações de capacidade de inventário.",
			points: ["Controla o número máximo de tipos diferentes de Item que um jogador pode ter.", "Cada item é controlado pelo número de tipos de itens que você tem, nada a ver com o número de itens que você possui.", "Se `initialCount` for definido como 0, a capacidade passa a ser ilimitada.", "Ao se referir a itens de capacidade em condições ou prêmios, use a ID configurada aqui."],
			children: {
				information: information,
				initialCount: {
					title: "Valor padrão [pcs].",
					summary: "Capacidade de inventário inicial (número de itens diferentes que podem ser mantidos)",
					points: ["Capacidade inicial (número de itens diferentes que podem ser possuídos) no começo do jogo.", "Se for definido como `0`, a capacidade passa a ser ilimitada."],
				},
				initialCost: {
					title: "Preço base [moedas].",
					summary: "Preço inicial para uma capacidade adicional.",
					points: ["Preço base (em moedas) para aumentar a capacidade do inventário em um slot.", "O preço real é calculado como \"preço base x porcentagem de aumento ^ número de vezes comprado\".", "Exemplo: preço base 100, taxa de aumento 1,2, primeira 100 moedas, segunda 120 moedas, terceira 144 moedas."],
				},
				increasingRate: {
					title: "Aumento percentual [vezes].",
					summary: "Aumento percentual nos custos de expansão da capacidade",
					points: ["É um multiplicador de quanto o custo da expansão da capacidade aumenta com a enésima compra.", "Com `1.0` o preço é sempre o mesmo e com `1.2` sobe 20% a cada compra.", "Fórmula: preço base x porcentagem de aumento ^ número de vezes compradas"],
					list: [
						["taxa de aumento", "1ª adição.", "5º aumento.", "10º aumento.", "100º aumento.", "1000º aumento."],
						["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
						["1.05", "x1.00", "x1.22", "x1.63", "x131.50", "x1.7×10²⁰"],
						["1.10", "x1.00", "x1.61", "x2.59", "x1,4 x 10⁴", "x2.7×10⁴¹"],
						["1.20", "x1.00", "x2.49", "x6.19", "x8,3 x 10⁷", "x8.3×10⁷⁹"],
						["1.50", "x1.00", "x5.06", "x57.67", "x1.9×10¹⁷", "x7.0×10¹⁷⁶"],
					],
				},
				coinId: {
					title: "ID da moeda",
					summary: "ID da moeda utilizada para a expansão de capacidade",
					points: ["Especifique o ID da moeda (coins) a ser usada para pagar a expansão da capacidade do inventário.", "Se o campo estiver em branco, será utilizada a moeda principal (a primeira da lista de moedas)."],
				},
				buyingLimit: {
					title: "Limite máximo para comprar [vezes]",
					summary: "Número máximo de vezes que é possível comprar capacidade",
					points: ["É o limite máximo de vezes que você pode comprar capacidade com moeda.", "Se definir como `0`, você poderá comprar sem limites.", "Se você definir como `-1`, não será mais possível comprar.", "O aumento de capacidade decorrente de recompensas não está sujeito a esse limite máximo."],
				},
			},
			links: { item: "item" },
		},
		queue: {
			title: "Fila",
			summary: "Configuração do número de vagas da fila para a execução consecutiva de ações",
			points: [
				"Gerencia o número de vagas da fila para a execução consecutiva de ações.",
				"A fila inclui a ação em execução, e a ação que está no início é a que roda. Com `1` vaga, só cabe a ação em execução e nada pode aguardar.",
				"Além de poderem ser comprados com moeda, assim como a capacidade, os espaços também podem ser aumentados por meio de recompensas de ações ou eventos, indicando os itens da fila.",
				"Ao consultar itens da fila com base em condições ou recompensas, utilize o ID configurado aqui.",
			],
			children: {
				information: information,
				initialCount: {
					title: "Valor padrão [pcs].",
					summary: "Número de quadros de execução contínua ao começar o jogo",
					points: ["É o número de vagas da fila no início do jogo.", "O valor mínimo é `1` (a ação em execução ocupa uma vaga e não existe o tratamento de `0` = ilimitado, como no caso da capacidade)."],
				},
				initialCost: {
					title: "Preço base [moedas].",
					summary: "Preço inicial para adicionar um espaço",
					points: ["Este é o preço básico (em moedas) para aumentar em uma a cota de execuções consecutivas.", "O preço real é calculado como \"preço base x porcentagem de aumento ^ número de vezes comprado\".", "Exemplo: preço base 100, taxa de aumento 1,2, primeira 100 moedas, segunda 120 moedas, terceira 144 moedas."],
				},
				increasingRate: {
					title: "Aumento percentual [vezes].",
					summary: "Taxa de aumento do custo de expansão da capacidade",
					points: ["É o fator que indica em quanto o custo da expansão do espaço aumenta ao comprar n vezes.", "Com `1.0` o preço é sempre o mesmo e com `1.2` sobe 20% a cada compra.", "Fórmula: preço base x porcentagem de aumento ^ número de vezes compradas"],
				},
				coinId: {
					title: "ID da moeda",
					summary: "ID da moeda usada para ampliar o limite",
					points: ["Especifique o ID da moeda (coins) a ser usada no preço de expansão do intervalo de execução contínua.", "Se o campo estiver em branco, será utilizada a moeda principal (a primeira da lista de moedas)."],
				},
				buyingLimit: {
					title: "Limite máximo para comprar [vezes]",
					summary: "Número máximo de vezes que é possível comprar um espaço",
					points: ["É o limite máximo de vezes que é possível comprar pacotes de execução contínua com moeda.", "Se definir como `0`, você poderá comprar sem limites.", "Se você definir como `-1`, não será mais possível comprar.", "O aumento da cota decorrente de remuneração não está sujeito a esse limite máximo."],
				},
			},
			links: { item: "item" },
		},
		levelCommonRatio: {
			title: "Taxa de aumento da experiência [vezes].",
			summary: "Aumento percentual na dificuldade de nível.",
			points: ["À medida que o nível de uma Categoria aumenta, a taxa de aumento da experiência Necessária para alcançar o próximo nível.", "O aumento desse valor aumenta o nível de dificuldade.", "A quantidade de experiência necessária para subir de nível é igual a (taxa de aumento de experiência)^(nível atual - 1)."],
			list: [
				["Taxa de aumento da experiência", "Nível 1", "Nível 2", "Nível 10", "Nível 50", "Nível 99."],
				["0", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
				["0.02", "x1.00", "x1.02", "x1.22", "x2.69", "x5.52"],
				["0.05", "x1.00", "x1.05", "x1.55", "x11.47", "x131.50"],
				["0.10", "x1.00", "x1.10", "x2.36", "x117.39", "x5.7×10⁴"],
				["0.20", "x1.00", "x1.20", "x6.19", "x3,3 x 10³", "x1,3 x 10¹¹"],
			],
			links: { category: "category" },
		},
		actionLevelLimit: {
			title: "Restrição do nível de ação",
			summary: "Solicita o número de vezes que a ação do mesmo atributo foi executada para a execução de uma ação.",
			points: ["Se ativado, o número de vezes que uma ação com os mesmos atributos foi executada é automaticamente adicionado às condições de execução de cada ação.", "O número de vezes necessário é igual ao valor do nível da Ação.", "Se nada for configurado, será usado o ID da Categoria à qual ele pertence."],
		},
		propertyRatio: {
			title: "Taxa de propriedade [vezes]",
			summary: "Quantas vezes uma propriedade muda a cada 10 de diferença de nível",
			points: [
				"Configura quantas vezes cada propriedade muda sempre que a diferença entre o nível da categoria e o nível da ação aumenta em `10`.",
				"A taxa é calculada como (taxa de propriedade)^(diferença de nível÷10). Quando a diferença de nível é `0`, a taxa é `1` e o valor configurado na ação é usado como está.",
				"O ataque, a recuperação, a probabilidade de sucesso e a experiência aumentam segundo esta taxa, enquanto a defesa (dano recebido) e a rapidez (tempo necessário) diminuem na mesma proporção. Na precisão e na evasão, a taxa de erro e a taxa de golpes recebidos diminuem segundo esta taxa.",
				"Se definido como `1`, a diferença de nível deixa de influenciar. Quanto maior o valor, mais acentuada será a vantagem ou desvantagem provocada pela diferença de nível.",
			],
			list: [
				["Taxa de propriedade", "Diferença de nível -20", "Diferença de nível -10", "Diferença de nível 0", "Diferença de nível +10", "Diferença de nível +20"],
				["`1`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`"],
				["`1.5`", "`x0.44`", "`x0.67`", "`x1.00`", "`x1.50`", "`x2.25`"],
				["`2`", "`x0.25`", "`x0.50`", "`x1.00`", "`x2.00`", "`x4.00`"],
				["`3`", "`x0.11`", "`x0.33`", "`x1.00`", "`x3.00`", "`x9.00`"],
			],
			links: { action: "action", property: "property" },
		},
		defaultCombat: { ...combat, summary: "Parâmetros de combate padrão comuns a todas as Ações.", points: ["São os valores básicos de correção de combate aplicados em comum a todas as ações do tipo `stamina`.", "O valor de combate (propriedade) de cada Ação é adicionado a esse valor padrão."], links: { action: "action" } },
	},
	options: {
		label: "general",
	},
};

export const overview: Type.Overview = {
	title: "Visão geral.",
	summary: "Informações básicas sobre o mundo e seus autores",
	points: ["Esta seção descreve o conteúdo do mundo.", "Configure-o de modo que seja fácil para os usuários entenderem quando escolherem um mundo.", "Essas configurações não afetam a operação do mundo."],
	children: {
		information: information,
		version: {
			title: "versão",
			summary: "Número da versão do mundo",
			points: ["Digite qualquer valor (inteiro ou decimal).", "Em geral, a parte dos minutos representa a versão principal e a parte dos minutos representa a versão secundária."],
		},
		author: {
			title: "Nome do autor",
			summary: "Nome do autor mundial",
			points: ["Digite seu nome de usuário ou apelido."],
		},
		homepage: {
			title: "Página inicial.",
			summary: "URL do site do autor",
			points: ["Se tiver seu próprio site ou site de rede social, digite o URL.", "Os jogadores podem verificar esse URL por meio de um link.", "Se nada for aplicável, deixe em branco."],
		},
		url: {
			title: "localizador de recursos uniformes",
			summary: "URL do jogo",
			points: ["Digite a URL onde deseja colocar o jogo nesse mundo.", "Digite o URL da página Topo, como index.html, incluindo o domínio.", "Se for fornecido um URL adequado, ele funcionará como um PWA.", "Um PWA é um recurso que funciona como um aplicativo que pode ser instalado e jogado desligado."],
		},
		estimatedPlayingTime: {
			title: "Tempo estimado de jogo",
			summary: "Tempo estimado para concluir o mundo.",
			points: ["O tempo estimado de jogo Necessário para concluir o mundo de jogo.", "Os jogadores podem verificar isso como um guia ao jogar.", "É apenas um tempo de referência e não há uma definição clara do que constitui a conclusão de um mundo."],
			children: {
				value: {
					title: "valor",
					summary: "Valores do tempo de jogo",
				},
				unit: {
					title: "unidade",
					summary: "Unidade de tempo (por exemplo, horas, minutos)",
				},
			},
		},
	},
	options: {
		label: "overview",
	},
};

// タイミングごとの固定イベント。項目の説明はタスクと共通で、タイミング固有の説明だけ差し替える
const toFixedEvent = (title: string, summary: string, points: string[], timingPoints: string[]): Type.Event => ({
	title,
	summary,
	points,
	children: {
		...task.children,
		category: {
			title: "カテゴリ",
			summary: "イベントでは使用しません",
			points: ["ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。", "エディターでは入力欄が表示されません。"],
		},
		timing: {
			title: "タイミング",
			summary: "イベントが発動するタイミング（固定）",
			points: timingPoints,
		},
		unlocked: {
			title: "初期表示状態",
			summary: "イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）",
			points: ["イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。", "secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。", "hidden・hinted: アイコンに斜線が付き未解放として表示されます。", "released: 斜線が消え解放済みとして表示されます。"],
		},
		requirements: {
			title: "条件",
			summary: "報酬を獲得する条件",
			points: ["タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。", "報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。", "条件を設定していない場合は、発動するたびに報酬を獲得します。"],
			children: requirement.children,
		},
		acquisitions: {
			title: "報酬",
			summary: "イベント発動時の報酬設定",
			points: ["タイミングが成立し、かつ条件を満たしている時に得られる報酬です。", "タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。", "数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。"],
			children: acquisition.children,
		},
		group: {
			title: "タスクグループ",
			summary: "イベントでは使用しません",
			points: ["ミッションやタスクの一覧に表示されないため、グループの指定は使いません。", "エディターでは入力欄が表示されません。"],
		},
	},
});

export const event: Type.Events = {
	title: "Evento",
	summary: "Mensagens e recompensas que são ativadas em momentos específicos",
	points: ["Ele é acionado em momentos específicos, como ao abrir um mundo pela primeira vez ou ao terminar o jogo, e abre uma tela exclusiva.", "Há um campo para cada momento, e não é possível adicionar nem excluir campos. Nos momentos em que não for utilizado, deixe o campo em branco.", "Não será exibido na lista de missões ou tarefas. Aquilo que será considerado concluído ao atender às condições deve ser configurado como uma tarefa.", "A recompensa é adquirida automaticamente assim que for ativada. Não há nenhuma ação necessária para realizar as aquisições, como em uma tarefa, nem nenhuma faixa de notificação.", "Ele pode alterar o nível da Categoria, o número de Ações realizadas e o número de Itens possuídos quando ativado.", "Se você deixar os campos “Nome”, “Descrição” e “Ícone” em branco, serão utilizados o texto e o ícone padrão integrados ao jogador."],
	list: [
		["tempo", "condição de ativação", "repetir"],
		["`comebacked`", "Quando uma pessoa retorna do desligado por mais de um segundo e há uma Ação em progresso.", "frequentemente"],
		["`gameovered`", "Quando a resistência do jogador se esgota na batalha.", "frequentemente"],
		["`welcomed`", "Quando comecei neste mundo.", "apenas uma vez"],
		["`completed`", "Quando o nível máximo de todas as Categorias (maxCategoryLevels) for atingido.", "apenas uma vez"],
		["`obtained`", "Ao concluir ou confirmar uma Ação de um único tipo (como baús, etc.)", "frequentemente"],
	],
	links: { task: "task" },
	children: {
		comebacked: toFixedEvent("Ao retornar", "É acionado ao voltar do modo offline", ["É acionado quando você volta após um segundo ou mais offline e havia uma ação em andamento.", "É exibido junto com o resumo do progresso feito durante a sua ausência."], ["Está fixado em `comebacked` e não pode ser editado.", "É acionado toda vez que você retorna, sem limite de vezes."]),
		gameovered: toFixedEvent("Ao perder o jogo", "É acionado quando a resistência acaba em combate", ["É acionado quando a resistência do jogador acaba em combate.", "Definindo uma quantidade negativa de recompensa, você pode atribuir um custo à derrota."], ["Está fixado em `gameovered` e não pode ser editado.", "É acionado toda vez que você perde o jogo, sem limite de vezes."]),
		welcomed: toFixedEvent("No primeiro início", "É acionado ao abrir o mundo pela primeira vez", ["É acionado quando este mundo é iniciado pela primeira vez.", "Serve para explicar a ambientação ou entregar os preparativos iniciais."], ["Está fixado em `welcomed` e não pode ser editado.", "É acionado uma única vez, no primeiro início."]),
		completed: toFixedEvent("Ao concluir", "É acionado quando todas as categorias atingem o nível máximo", ["É acionado quando os níveis de todas as categorias atingem o valor máximo (maxCategoryLevels).", "Categorias que não são numeric ficam de fora da verificação."], ["Está fixado em `completed` e não pode ser editado.", "É acionado uma única vez, quando as condições são cumpridas."]),
		obtained: toFixedEvent("Ao concluir uma ação única", "É acionado ao concluir uma ação única, como um baú de tesouro", ["É acionado quando uma ação do tipo single (como um baú de tesouro) é concluída e confirmada.", "Além da recompensa da própria ação, você pode acrescentar a recompensa configurada aqui."], ["Está fixado em `obtained` e não pode ser editado.", "É acionado toda vez que você conclui uma ação única, sem limite de vezes."]),
	},
	options: {
		label: "event",
	},
};

export const basic: Type.Basic = {
	title: "Configuração básica",
	summary: "Itens básicos de configuração para o mundo em geral.",
	points: ["Configure o nome do mundo, a descrição, o plano de fundo, a moeda, a capacidade, o nível máximo de Categorias, a taxa de aumento de experiência, a taxa de desconto, os parâmetros de combate padrão, etc.", "Essas configurações afetam o mundo inteiro."],
	list: expandList("nome", [overview, general, design, event, development], "Descrição"),
	children: {
		overview: overview,
		general: general,
		design: design,
		events: event,
		development: development,
	},
	options: {
		label: "basic",
		linkedList: true,
	},
};

// world


export const world: Type.World = {
	title: "mundo",
	summary: "Configuração geral do mundo do jogo e estrutura de dados",
	points: ["Dados sobre jogos que podem ser jogados em consoles.", "As configurações permitem que você crie um jogo de abandono como desejar.", "Os mundos abrangem Categorias, Ações, Itens e Eventos."],
	children: {
		basic: basic,
		categories: { ...category, options: { ...category.options, array: true } },
		actions: { ...action, options: { ...action.options, array: true } },
		items: { ...item, options: { ...item.options, array: true } },
		groups: { ...group, options: { ...group.options, array: true } },
		tasks: { ...task, options: { ...task.options, array: true } },
		presets: { ...preset, options: { ...preset.options, array: true } },
	},
	options: {
		label: "world",
	},
};

// editor

export const editor: Markdown = {
	title: "editor",
	summary: "Explicações sobre como usar o editor e a estrutura dos mundos.",
	list: expandList("nome", [world, basic, type, component, miscellaneous], "Descrição"),
	options: {
		label: "editor",
		linkedList: true,
		directory: "editor",
	},
};

// list

// prettier-ignore
export const tree: Tree = {
	title: editor,
	twig: [
		{ title: world }, 
		{ title: basic, twig: [overview, general, design, event, development] },
		{ title: type, twig: [category, action, item, group, task, preset] },
		{ title: component, twig: [information, requirement, acquisition, combat, property] }, 
		{ title: miscellaneous, twig: [translation] }
	],
};
