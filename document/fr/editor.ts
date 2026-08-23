import * as Type from "~d/type/descriptionType";
import { Markdown, Tree, expandList } from "~d/type/markdownType";

// quate

const typeTree = `
world
├── category
├── action
├── item
├── skill
├── group
├── task
└── preset
`;

// miscellaneous

export const translation: Markdown = {
	title: "la traduction",
	summary: "Configuration pour la traduction du texte du jeu dans d'autres langues.",
	points: ["Configure le texte à traduire.", "Les configurations multilingues sont disponibles lorsque les configurations de traduction sont activées.", "Si la traduction est désactivée, les informations décrites pendant le développement seront affichées telles quelles.", "Les configurations de traduction et le changement de langue ne sont pas possibles pendant le développement de la prépublication."],
	options: {
		label: "translation",
	},
	children: {
		flag: {
			title: "Activation de la traduction",
			summary: "Configuration désactivée de la fonction de traduction.",
			points: ["Les configurations multilingues sont disponibles lorsque les configurations de traduction sont activées.", "La traduction n'est pas activée pendant le développement avant la publication. Le passage d'une langue à l'autre sera activé après la publication.", "Si la traduction est activée, dix langues différentes seront prises en charge et les données de traduction doivent être disponibles pour toutes les langues. Il n'est pas possible de n'activer qu'une partie des langues.", "Lorsque l'utilisateur démarre le jeu, la langue utilisée dans le développement est affichée en premier. La langue peut ensuite être changée pour n'importe quelle langue.", "Le processus de traduction est fastidieux, mais il permet à un grand nombre de personnes de jouer avec."],
		},
		file: {
			title: "fichier de langue",
			summary: "Fichier JSON des données de traduction.",
			points: ["Lorsque les données du jeu sont sorties avec des configurations publiques, un fichier JSON pour la traduction est généré dans `translations/world` dans le dossier de sortie.", "Les fichiers JSON pour la traduction dans chaque langue se trouvent dans le dossier. Le contenu contient des données non traduites.", "Le contenu a un identifiant dans chaque Type. En outre, il comporte un nom et une description.", "Des traductions doivent être effectuées et sauvegardées pour tous les noms et toutes les descriptions."],
		},
		task: {
			title: "Tâches de traduction",
			summary: "Édition des données de traduction",
			points: ["Tous les fichiers de traduction contiennent des données dans la langue au moment du développement.", "Un travail de traduction est nécessaire pour les dossiers qui ne sont pas rédigés dans la langue dans laquelle ils ont été élaborés."],
			children: {
				ai: {
					title: "AI",
					summary: "Traduction basée sur l'IA",
					points: ["Traduire à l'aide de l'IA comme ChatGPT, Copilot et Claude.", "Il est possible de traduire en une seule fois et avec un certain degré de qualité.", "Il se peut que la traduction ne soit pas parfaite, en particulier pour les termes techniques et les noms propres.", "Selon le volume des traductions, l'utilisation de l'IA peut s'avérer coûteuse.", "Si le progrès de la traduction par l'IA est interrompu au milieu du processus, il peut être possible de dire à l'IA de \"continuer\" et elle peut y parvenir. (Dans certains cas, cela peut s'avérer inutile)."],
					children: {
						prompt: {
							title: "Exemples d'invites",
							summary: "Exemples d'instructions de traduction données à l'IA",
							points: ["Exemple d'instruction : traduisez de l'anglais vers le japonais les valeurs de `name` et `explanation` des données JSON téléversées. Ne modifiez aucune autre partie."],
						},
						gpt: {
							title: "Utilisation de GPT",
							summary: "Traduction à l'aide du GPT de ChatGPT.",
							points: ["Le JSON Language Translator fourni dans la bibliothèque GPT de ChatGPT peut être utilisé pour traduire JSON facilement.", "La structure JSON est conservée dans la traduction.", "Des fonctions similaires peuvent être offertes par des services d'IA autres que ChatGPT."],
						},
					},
				},
				online: {
					title: "service de traduction",
					summary: "Utiliser les services de traduction",
					points: ["Traduisez en utilisant des services activés tels que DeepL et Google Translate.", "On peut s'attendre à des traductions de meilleure qualité que les traductions AI, mais il y a un coût qui dépend du volume de la traduction.", "Les fichiers JSON ne peuvent pas être traduits directement par les services de traduction, il faut donc créer et utiliser un programme.", "Il existe des services payants qui traduisent les données JSON telles quelles. (par exemple doctranslator.com)"],
				},
				manual: {
					title: "manuel (fonctionnement)",
					summary: "Traduction manuelle",
					points: ["Ouvrez le fichier de traduction dans un éditeur de texte et saisissez le contenu traduit dans chaque langue. Cette opération prend beaucoup de temps, mais elle vous permet de traduire le fichier exactement comme vous le souhaitez."],
				},
			},
		},
		code: {
			title: "code langue",
			summary: "Liste des codes de langue pris en charge",
			list: [
				["code langue", "Langue."],
				["fr", "Anglais"],
				["zh", "Chinois (langue)"],
				["es", "Espagnol"],
				["ar", "Arabe (langue)"],
				["pt", "Portugais"],
				["Bonjour", "Hindi"],
				["fr", "Français"],
				["ru", "Russe"],
				["de", "Allemand"],
				["FR", "Japonais"],
			],
		},
	},
};

export const miscellaneous: Markdown = {
	title: "informations complémentaires",
	summary: "Autres informations complémentaires expliquées.",
	points: ["Informations de référence."],
	list: expandList("supplément", [translation], "Description"),
	options: {
		label: "miscellaneous",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "propriétés",
	summary: "Configuration des effets d'un Objet.",
	points: ["Il s'agit d'un effet qui peut être configuré sur l'Objet.", "Les objets dont le type d'équipement est `necessary` ou `consumable` n'appliquent leur effet que lorsqu'ils sont équipés. `unnecessary` applique son effet du simple fait de le posséder, et l'ampleur de l'effet est proportionnelle au nombre possédé (le double si vous en possédez 2).", "L'effet « `unnecessary` » se traduisant par un multiplicateur égal au nombre d'objets détenus, la valeur « `maximum` » (nombre maximal d'objets détenus) constitue la limite supérieure de cet effet. Veuillez effectuer la configuration de ce paramètre en fonction de la valeur « `maximum` » lorsque vous réglez l'équilibre du jeu.", "Les valeurs des deux éléments sont calculées comme un ajustement de la différence de niveau entre le niveau du joueur et le niveau de l'action.", "Par exemple, si la valeur d'attaque est de 10, l'attaque est calculée comme si le niveau du joueur était supérieur de 10 au niveau de l'Action. Les valeurs négatives sont l'inverse.", "attack, defence, accuracy, evasion et restore ne sont valables que pour les actions de type `stamina`."],
	list: [
		["propriétés", "Détails de l'efficacité."],
		["vitesse", "Réduit le temps nécessaire à une action. Le temps nécessaire varie inversement à la différence de niveau (le rapport n'agit qu'à moitié)."],
		["chance", "Modifie la probabilité de succès d'une action. Le rapport s'applique à la proportion entre la réussite et l'échec, si bien qu'elle ne dépasse jamais `100`%."],
		["expérience", "Modifie l'expérience acquise. Augmente proportionnellement à la différence de niveau (le calcul est inversé : plus l'action de niveau est élevée, plus vous gagnez)."],
		["attaque", "Modifie les dégâts d'endurance infligés à l'adversaire. (Action Stamina uniquement)."],
		["défense", "Réduit les dégâts d'endurance subis par les adversaires (le rapport n'agit qu'à moitié). (Action stamina uniquement)"],
		["précision", "Bas le taux de ratage des attaques. (Action de résistance uniquement)."],
		["évasion", "Modifie le taux d'évasion des attaques de l'adversaire (le rapport n'agit qu'à moitié). (Action stamina uniquement)"],
		["restaurer", "Modifie la quantité d'endurance restaurée à la fin d'une action. Plus on approche de la restauration complète, plus l'augmentation devient progressive. (uniquement pour les actions d'endurance)"],
	],
	children: {
		category: {
			title: "カテゴリ",
			summary: "プロパティを適用するカテゴリの指定",
			points: ["このプロパティを適用するカテゴリのIDを設定します。", "`*`を設定すると全カテゴリに適用されます。", "空欄の場合はアイテムが属するカテゴリに適用されます。"],
		},
		attack: {
			title: "Valeur d'attaque [différence de niveau].",
			summary: "Correction des dégâts d'endurance infligés à l'adversaire (valable uniquement pour les actions d'endurance).",
			points: ["Les dégâts de l'attaque sont calculés en supposant que le niveau du joueur est supérieur d'autant au niveau de l'Action."],
		},
		defence: {
			title: "Valeur de défense [différence de niveau].",
			summary: "Correction des dégâts d'endurance reçus d'un adversaire (valable uniquement pour les actions STAMINA).",
			points: ["Les dégâts subis sont calculés comme si le niveau du joueur était supérieur de cette valeur au niveau de l'Action. Plus la valeur est élevée, moins les dégâts sont importants."],
		},
		accuracy: {
			title: "Valeur de précision [différence de niveau].",
			summary: "Correction du taux de ratage des attaques (valable uniquement pour les actions d'endurance).",
			points: ["Le taux de ratés est calculé en supposant que le niveau du joueur est supérieur de cette valeur au niveau de l'Action. Plus la valeur est élevée, plus le taux de réussite est bas."],
		},
		evasion: {
			title: "Valeur d'évasion [différence de niveau].",
			summary: "Correction du taux d'évasion des attaques de l'adversaire (valable uniquement pour les actions d'endurance).",
			points: ["Le taux d'évasion est calculé en considérant que le niveau du joueur est supérieur de cette valeur à celui de l'action. Plus cette valeur est élevée, plus il est facile d'esquiver les attaques de l'adversaire."],
		},
		restore: {
			title: "Valeur de restauration [différence de niveau].",
			summary: "Correction de la restauration de l'endurance (valable uniquement pour les actions STAMINA).",
			points: ["La quantité d'endurance restaurée est calculée en supposant que le niveau du joueur est d'autant plus élevé que le niveau de l'Action."],
		},
		speed: {
			title: "Rapidité [différence de niveau].",
			summary: "Correction de la durée de l'action",
			points: ["Le temps nécessaire est calculé en supposant que le niveau du joueur est supérieur de cette valeur au niveau de l'action. Plus la valeur est élevée, plus le temps nécessaire est court."],
		},
		chance: {
			title: "Probabilité de succès [différence de niveau].",
			summary: "Correction de la probabilité de succès de l'action.",
			points: ["La probabilité de succès de l'action est calculée en supposant que le niveau du joueur est supérieur de cette valeur au niveau de l'action. Plus la valeur est élevée, plus la probabilité de succès est importante."],
		},
		experience: {
			title: "Expérience [différence de niveau].",
			summary: "Corrections de l'expérience acquise",
			points: ["L'expérience est calculée comme si le niveau du joueur était inférieur d'autant au niveau de l'Action (plus le niveau de l'Action est élevé, plus l'expérience est acquise, car le calcul est inversé)."],
		},
	},
	options: {
		label: "property",
	},
};

export const combat: Type.Combat = {
	title: "valeur de combat",
	summary: "Valeurs de correction du combat pour les actions de type endurance.",
	points: ["Ces valeurs de correction ne sont valables que pour les actions de type `stamina`.", "Chaque valeur est calculée comme une correction supplémentaire à la différence de niveau entre le joueur et l'Action.", "Par exemple, si la valeur d'attaque est de 10, les dégâts de l'attaque sont calculés comme si le niveau du joueur était supérieur de 10 au niveau de l'Action. Si elle est négative, la correction se fait dans le sens inverse.", "Si elles sont configurées dans `defaultCombat` sous Général, elles deviennent les paramètres de combat par défaut de l'ensemble du monde."],
	children: {
		attack: {
			title: "Valeur d'attaque [différence de niveau].",
			summary: "Correction de la différence de niveau aux dégâts d'endurance infligés aux adversaires.",
			points: ["Plus la valeur est élevée, plus les dégâts sont importants."],
		},
		defence: {
			title: "Valeur de défense [différence de niveau].",
			summary: "Correction de la différence de niveau aux dégâts d'endurance reçus des adversaires.",
			points: ["Plus la valeur est élevée, plus les dégâts sont réduits."],
		},
		accuracy: {
			title: "Valeur de précision [différence de niveau].",
			summary: "Correction de la différence de niveau pour le taux d'échec des attaques.",
			points: ["Plus la valeur est élevée, plus le taux d'erreur est bas."],
		},
		evasion: {
			title: "Valeur d'évasion [différence de niveau].",
			summary: "Correction de la différence de niveau sur le taux d'évasion des attaques de l'adversaire.",
			points: ["Plus la valeur est élevée, plus il est facile d'éviter une attaque de l'adversaire."],
		},
		restore: {
			title: "Valeur de restauration [différence de niveau].",
			summary: "Correction de la différence de niveau pour restaurer l'endurance.",
			points: ["Plus la valeur est élevée, plus l'endurance est restaurée.", "S'il est défini du côté de l'adversaire (la valeur de combat de l'Action et les compétences de l'adversaire), l'effet s'inverse et la quantité de restauration du joueur diminue de cette valeur."],
		},
	},
	options: {
		label: "combat",
	},
};

export const acquisition: Type.Acquisition = {
	title: "acquisitions",
	summary: "アイテムやカテゴリレベルの取得設定",
	points: ["Configurer les acquisitions.", "アイテムの他にカテゴリのレベル、アクションの実行した回数を変更できます。", "La probabilité d'obtenir le produit peut être configurée."],
	list: [
		["Type", "Ce que vous acquérez."],
		["カテゴリ", "niveau"],
		["Action", "Nombre de fois qu'il a été exécuté."],
		["Objet", "compter le nombre de possessions"],
	],
	children: {
		type: {
			title: "Type",
			summary: "Type d'élément à acquérir.",
			list: [
				["Type", "Ce qui est acquis."],
				["カテゴリ", "Niveau (conversion de l'expérience ajoutée)"],
				["Action", "Nombre de fois qu'il a été exécuté."],
				["Objet", "compter le nombre de possessions"],
			],
		},
		id: {
			title: "ID de l'élément",
			summary: "ID identifiant l'élément à acquérir.",
		},
		count: {
			title: "valeur",
			summary: "Valeurs numériques à obtenir",
			points: ["Les valeurs négatives réduisent le nombre de possessions, le nombre de fois qu'elles ont été effectuées et leur niveau. Toutefois, elle ne peut être bas que 0.", "Si un Objet a un nombre maximum de possessions (max), le nombre de possessions n'augmentera pas au-delà de cette valeur.", "タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。"],
		},
		chance: {
			title: "Probabilité [-1 à 1]",
			summary: "Probabilité de succès de l'acquisition (les valeurs négatives ne sont prises en compte qu'en cas d'échec)",
			points: ["Configurez la probabilité d'obtention sous forme de nombre décimal compris entre -1 et 1. La valeur absolue est utilisée pour déterminer la probabilité.", "Lorsque la valeur est positive, elle n'est évaluée qu'en cas de réussite de l'action : avec `1` on l'obtient toujours et avec `0.5` on l'obtient avec une probabilité de 50 %.", "Lorsque la valeur est négative, elle n'est évaluée qu'en cas d'échec de l'action : avec `-1` on l'obtient toujours et avec `-0.5` on l'obtient avec une probabilité de 50 %.", "Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.", "La valeur par défaut est `1` (toujours récupérée en cas de succès)."],
		},
	},
	links: { type: "type" },
	options: {
		label: "acquisition",
	},
};

export const requirement: Type.Requirement = {
	title: "conditions générales",
	summary: "Configuration des exigences nécessaires à l'utilisation et à la présentation des éléments.",
	points: ["カテゴリ、アクション、アイテムごとの各要素に設定する条件です。", "Si toutes les configurations ne sont pas remplies, les opérations indiquées dans le tableau ne peuvent pas être effectuées.", "Si la fonction de verrouillage est activée, l'élément lui-même est masqué jusqu'à ce que la condition soit remplie."],
	list: [
		["Où se configurer ?", "Ce qui ne peut être fait que si les conditions sont réunies."],
		["カテゴリ", "カテゴリ内の全てのアクションの実行とアイテムの操作"],
		["Action", "Exécution des actions"],
		["Objet", "Manipulation d'objets (par exemple, d'équipements)"],
	],
	children: {
		type: {
			title: "Type",
			summary: "Type d'élément référencé comme condition.",
			list: [
				["Type", "Valeurs référencées"],
				["カテゴリ", "カテゴリのレベル"],
				["Action", "Nombre de fois où l'action a été comptée."],
				["Objet", "Nombre d'objets détenus."],
			],
		},
		id: {
			title: "ID de l'élément",
			summary: "ID de l'élément désigné comme condition.",
		},
		count: {
			title: "valeur",
			summary: "Valeurs Nécessaires pour les exigences.",
			points: ["La condition est remplie si la valeur est supérieure ou égale à la valeur spécifiée."],
		},
		chance: {
			title: "Probabilité de consommation [0-1].",
			summary: "Probabilité qu'un objet soit consommé (0-1, valable uniquement si le Type est Objet).",
			points: ["Probabilité qu'un Objet soit consommé lorsque la condition est remplie et que l'Action est réalisée.", "Avec `1` la consommation est systématique, avec `0.5` elle a lieu avec une probabilité de 50 % et avec `0` il n'y a pas de consommation.", "La valeur par défaut est `1` (consommation systématique).", "Invalide si le Type est différent de l'Objet."],
		},
		equipment: {
			title: "Équipement",
			summary: "L'objet doit être dans un état équipé (valable uniquement si le Type est Objet) ou",
			points: ["Lorsqu'il est activé, l'Objet doit être équipé ainsi que possédé.", "Invalide si le Type est différent de l'Objet."],
		},
	},
	links: { type: "type" },
	options: {
		label: "requirement",
	},
};

export const information: Type.Information = {
	title: "l'information",
	summary: "Configuration des informations de base sur l'élément (ID, nom, icône, couleur, etc.)",
	points: ["ワールド内の各要素（カテゴリ、アクション、アイテム、イベントなど）に共通する基本情報の項目です。", "Chaque élément est configuré séparément."],
	children: {
		id: {
			title: "ID",
			summary: "ID unique pour identifier l'élément",
			points: ["ID pour identifier de manière unique chaque élément.", "Dans l'éditeur, il s'agit d'une chaîne de caractères permettant d'identifier l'élément.", "Par exemple, l'ID spécifie l'objet obtenu lorsque l'action est terminée."],
			important: "Une fois l'ID configuré, ne le modifiez pas après la distribution du jeu. Toute modification entraînera des incohérences avec les données de jeu existantes et le jeu ne fonctionnera pas correctement.",
			children: {
				displayName: {
					title: "Nom affiché.",
					summary: "Nom d'affichage généré automatiquement à partir de l'ID",
					points: ["Les caractères pouvant être utilisés sont une combinaison de lettres, de traits d'union et de chiffres.", "Si le nom n'est pas encore configuré, la première lettre de chaque mot est mise en majuscule et le trait d'union est remplacé par un espace, qui est automatiquement configuré dans le nom.", "Pour les langues autres que l'Anglais, l'entrée du nom doit être configurée individuellement."],
					children: {
						example: {
							title: "Exemple.",
							summary: "Exemples concrets de conversion d'ID",
							points: ["Si l'identifiant est `stylish-strong-axe`, le nom devient `Stylish Strong Axe`."],
						},
					},
				},
				noDuplicate: {
					title: "Pas de double emploi.",
					summary: "Interdiction de dupliquer les ID au sein d'un même Type.",
					points: ["要素の判別に用いられるため、カテゴリ、アクション、アイテム、イベント、プリセットの各タイプ内で重複しないでください。", "Le fait d'avoir le même ID pour différents types ne pose pas de problème."],
					links: { type: "type" },
				},
			},
		},
		name: {
			title: "Nom.",
			summary: "Nom de l'élément tel qu'il apparaît",
			points: ["Nom de l'élément affiché dans le jeu.", "Des langues autres que l'Anglais peuvent également être saisies.", "Les noms qui reproduisent d'autres éléments sont acceptables.", "S'il est trop long, la partie qui déborde est abrégée par `…` dans l'affichage pendant le jeu."],
			children: {
				translateFromId: {
					title: "Conversion automatique de l'ID",
					summary: "Génération automatique de noms à partir des ID",
					points: ["Si le champ est laissé vide, les informations sont automatiquement affichées en fonction de l'ID. Pour plus d'informations, voir la section précédente."],
				},
			},
		},
		explanation: {
			title: "note explicative",
			summary: "Description détaillée de l'élément.",
			points: ["Une description des éléments affichés dans le jeu.", "Il est possible de saisir des langues autres que l'Anglais. Tous les textes, même longs, sont affichés.", "Si aucune explication n'est donnée, laisser en blanc."],
		},
		icon: {
			title: "icône",
			summary: "Configuration d'icônes pour représenter les éléments.",
			points: ["Les icônes peuvent être configurées en tant qu'images, Iconify ou emojis.", "Iconify est un service proposant une large gamme d'icônes.", "Si plusieurs d'entre eux sont comptés dans la configuration, les images, Iconify et les pictogrammes sont prioritaires et affichés dans cet ordre."],
			children: {
				image: {
					title: "Image.",
					summary: "Utiliser n'importe quel fichier image",
					points: ["Image représentant l'élément.", "Si le fichier est volumineux, il est automatiquement redimensionné.", "Inutile si Iconify ou les pictogrammes sont configurés."],
					children: {
						"file-type": {
							title: "Type de fichier",
							summary: "Formats de fichier image pris en charge",
							points: ["Les formats courants que les navigateurs peuvent afficher sont utilisables.", "JPEG, PNG, GIF, WebP, SVG, etc."],
						},
					},
				},
				iconify: {
					title: "Iconifier",
					summary: "Utiliser le jeu d'icônes Iconify",
					points: ["Icônes représentant des éléments.", "Iconify est un service proposant une large gamme d'icônes.", "Si une image est configurée, elle aura la priorité."],
					children: {
						iconify: {
							title: "Iconifier",
							summary: "Comment sélectionner des icônes à partir d'Iconify",
							points: ["Recherchez les icônes affichables sur `Iconify`.", "Vous pouvez trouver rapidement les meilleures icônes en recherchant des icônes.", "Sélectionnez une icône pour voir son identifiant (type de jeu d'icônes `:` nom de l'icône), comme `game-icons:sword-wound`, et collez-la directement dans ce champ d'icône."],
							images: ["iconify-selection.png"],
							links: { iconify: "https://icon-sets.iconify.design" },
						},
					},
				},
				emoji: {
					title: "pictogramme",
					summary: "Affichage d'icônes avec pictogrammes",
					points: ["Afficher les pictogrammes sous forme d'icônes.", "Il peut être converti du texte aux pictogrammes et être configuré rapidement.", "Pour les pictogrammes, saisissez les pictogrammes Unicode tels quels.", "Comme les pictogrammes introduits dans l'environnement d'exécution sont utilisés, ils sont affichés légèrement différemment selon les utilisateurs.", "Iconify permet de configurer des emojis indépendants de chaque environnement", "Les caractères non pictographiques peuvent être affichés, mais l'affichage peut être altéré s'il compte plus d'un caractère.", "Entrez des pictogrammes, par exemple `🗡️` ou `⚔️`."],
				},
			},
		},
		color: {
			title: "Couleur",
			summary: "Configure la couleur d'affichage de l'élément.",
			points: ["En tant que couleur d'élément, elle est appliquée à l'icône et à la couleur d'arrière-plan de l'élément.", "Sélectionner dans le sélecteur de couleurs de l'éditeur."],
			children: {
				"heritage-from-parent": {
					title: "Héritage depuis l'élément parent",
					summary: "Reprise de la couleur configurée sur l'élément parent",
					points: ["Si le champ est laissé vide, la couleur configurée sur l'élément parent est héritée.", "La hiérarchie des types de chaque élément est la suivante.", "例えば、アクションに個別の色が設定されている場合はそれが利用されますが、アクションに個別の色が設定されていない場合はカテゴリ又はワールドの色が使用されます。", "イベントもカテゴリを設定している場合は、アクションやアイテムと同じようにそのカテゴリの色を引き継ぎます。"],
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
	title: "composante",
	summary: "Parties communes",
	points: ["Les composants communs utilisés dans chaque configuration sont extraits et manipulés.", "Les composants utilisés dans tous ces domaines sont communs, mais certains d'entre eux ne sont pas utilisés dans certains postes."],
	list: expandList("composante", [information, requirement, acquisition, combat, property], "Description"),
	options: {
		label: "component",
		linkedList: true,
	},
};

// type

export const preset: Type.Information = {
	...information,
	title: "préétabli",
	summary: "Personnalisation de l'affichage des éléments du système",
	points: ["Remplace le texte et les icônes de l'interface utilisateur pré-intégrés dans le moteur de jeu (joueur).", "Seuls ceux qui correspondent à un préréglage existant par ID seront remplacés.", "Seuls les éléments que vous avez configurés seront remplacés. Par exemple, si seule l'icône est configurée, les autres éléments tels que le nom et la couleur utiliseront l'original.", "Les remplacements apportés aux noms et aux descriptions ont priorité sur les traductions intégrées par les joueurs pour chaque langue. Les chaînes de caractères remplacées s'affichent telles quelles dans toutes les langues.", "Si vous souhaitez modifier le libellé pour chaque langue, activez la traduction et spécifiez-le dans le fichier de traduction `translations/world` généré. Ce fichier aura la priorité absolue."],
	options: {
		label: "preset",
	},
};

export const task: Type.Event = {
	title: "Tâche",
	summary: "Missions qui sont considérées comme accomplies lorsque les conditions sont remplies",
	points: ["Lorsque la configuration définie est remplie, l'objectif est atteint et un message s'affiche en haut de l'écran.", "プレイヤーのミッションの一覧と、カテゴリのタスクの一覧に表示されます。", "La récompense n'est pas attribuée automatiquement. Le joueur la reçoit lorsqu'il ouvre la tâche et appuie sur la barre d'acquisitions.", "Tant que la récompense n'a pas été perçue, un ruban apparaît sur la barre de la liste pour indiquer qu'elle n'a pas encore été perçue.", "獲得でカテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。", "Les éléments que vous souhaitez déclencher à des moments autres que ceux prévus (par exemple lors du premier démarrage ou en cas de jeu terminé) doivent faire l’objet d’une configuration dans les événements des paramètres de base."],
	links: { event: "event" },
	children: {
		information: information,
		category: {
			title: "カテゴリ",
			summary: "タスクが所属するカテゴリのID",
			points: ["このタスクを所属させるカテゴリのIDを指定します。", "設定すると、プレイヤーのカテゴリの画面にタスクの一覧が追加され、ミッションの一覧でもカテゴリごとにまとめて表示されます。", "空欄の場合はどのカテゴリにも属さず、ミッションの一覧の先頭にまとめて表示されます。"],
		},
		timing: {
			title: "timing",
			summary: "タスク発動のタイミング（`tasked`固定）",
			points: ["タスクは`tasked`（設定した条件を満たした時）で固定されており、編集できません。", "La récompense ne peut être obtenue qu'une seule fois ; une fois reçue, le statut « Objectif atteint » reste inchangé.", "Pour les éléments que vous souhaitez déclencher à d'autres moments, effectuez la configuration dans les événements des paramètres par défaut."],
			links: { event: "event" },
		},
		unlocked: {
			title: "État d'affichage initial",
			summary: "État d'affichage initial de l'icône de tâche (la réalisation dépend de certaines conditions ; avec cette configuration, la tâche n'est pas considérée comme réalisée)",
			points: ["タスクの達成条件はrequirementsで決まり、この項目は一覧アイコンの見た目のみに影響します。", "secreted: 全requirementsを満たすまでタスクの一覧に一切表示されません（達成自体は条件で起こります）。", "hidden・hinted: アイコンに斜線が付き未解放として表示されます。", "released: 斜線が消え解放済みとして表示されます。", "一度達成したタスクは一覧から消えず、その後に条件を満たさなくなっても達成のまま表示されます。"],
		},
		requirements: {
			title: "conditions générales",
			summary: "Conditions de réussite de la tâche",
			points: ["タスクを達成させる条件です。", "この条件を満たすと達成になり、報酬を受け取れるようになります。", "一度達成すると、その後に条件を満たさなくなっても達成のままで、報酬もいつでも受け取れます。", "条件を設定していないタスクは達成しません。", "requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。"],
			children: requirement.children,
		},
		requiringGroup: {
			title: "Agrégation de groupe",
			summary: "Traite l'id de la condition comme un ID de groupe et évalue selon le total de ses membres",
			points: ["Une fois activé, l'id défini dans la condition (requirements) est traité comme l'ID d'un groupe des paramètres de base.", "Une condition dont le Type est Catégorie est évaluée selon la somme du Niveau de toutes les Catégories appartenant à ce groupe.", "Une condition dont le Type est Action est évaluée selon la somme du nombre d'exécutions de toutes les Actions appartenant à ce groupe.", "Une condition dont le Type est Objet est évaluée selon la somme des quantités possédées de tous les Objets appartenant à ce groupe.", "Les éléments verrouillés (autres que released) ne sont pas inclus dans le total.", "La probabilité de consommation de l'Objet (chance) et la condition d'équipement (equipment) sont ignorées, et rien n'est consommé. Elles ne servent qu'à l'évaluation.", "Lorsqu'il est désactivé, l'id de la condition est traité comme avant, comme l'ID d'une Catégorie, Action ou Objet individuel."],
		},
		acquisitions: {
			title: "récompense",
			summary: "Configuration des récompenses à l'achèvement d'une tâche",
			points: ["達成したタスクを開き、獲得のバーを押した時に受け取れる報酬です。", "カテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。", "数量にマイナスを設定することもできます。", "報酬を設定していないタスクは獲得のバーが出ず、達成した時点で完了になります。", "持てるアイテムの種類が上限に達している時は受け取れません。整理してから受け取り直します。"],
			children: acquisition.children,
		},
		group: {
			title: "groupe de travail",
			summary: "Classification des tâches par groupe d'affichage",
			points: ["Appliquer l'un des groupes configurés dans Basic.", "La liste des tâches s'affiche dans l'ordre des groupes de configuration que vous avez définis.", "カテゴリの中でさらにグループごとに分けて表示されます。", "Si elle est laissée vide, aucun regroupement n'est effectué."],
			links: { general: "general" },
		},
	},
	options: {
		label: "task",
	},
};

export const group: Type.Information = {
	...information,
	title: "groupe (habituellement de personnes)",
	summary: "カテゴリ、アクション、アイテムの表示グループを定義",
	points: ["Définir des groupes pour contrôler l'ordre d'affichage.", "各カテゴリ、アクション、アイテムでここで定義したグループを設定できます。", "Les groupes identiques sont affichés à proximité les uns des autres.", "Si elle est laissée vide, aucun regroupement n'est effectué."],
	options: {
		label: "group",
	},
};

export const skill: Type.Skill = {
	title: "Compétence",
	summary: "À rédiger",
	points: ["À rédiger"],
	children: {
		information: information,
		chance: {
			title: "Probabilité d'activation [0-1]",
			summary: "À rédiger",
			points: ["À rédiger"],
		},
		property: {
			...combat,
			summary: "Valeur de combat ajoutée au tour d'activation",
			points: ["Seulement au tour où cette compétence se déclenche, cette valeur de combat s'ajoute comme correction de la différence de niveau.", "Les valeurs de restauration font exception : au lieu de s'appliquer à ce tour, elles sont cumulées et s'appliquent à la restauration après que le résultat est déterminé. Parmi les valeurs de restauration des compétences déclenchées pendant l'Action, la plus élevée est ajoutée à la quantité de restauration s'il s'agit d'une compétence du joueur, et soustraite s'il s'agit d'une compétence de l'adversaire."],
		},
		comment: {
			title: "Affichage de la note explicative",
			summary: "Afficher ou non la note explicative en notification toast lors du déclenchement",
			points: ["Indicateur déterminant si la note explicative s'affiche en notification toast lorsque cette compétence se déclenche.", "Si activé, elle s'affiche à chaque déclenchement avec une probabilité de (100% − probabilité de déclenchement) ÷ 2. Pour une probabilité de déclenchement de 40%, cela donne 30%.", "Si désactivé, elle ne s'affiche pas.", "Si la note explicative est vide, rien ne s'affiche même lorsque l'option est activée."],
		},
	},
	options: {
		label: "skill",
	},
};

export const item: Type.Item = {
	title: "Objet",
	summary: "Éléments de biens tels que les équipements et les consommables",
	points: ["Cet élément concerne la propriété d'objets tels que les équipements, les consommables et les objets de valeur.", "カテゴリ内で１つのみ装備することもできますが、装備できないようにもできます。", "Il existe également différentes manières de les utiliser."],
	children: {
		information: information,
		category: {
			title: "カテゴリ",
			summary: "アイテムが所属するカテゴリのID",
			points: ["このアイテムが所属するカテゴリのIDを指定します。"],
		},
		group: {
			title: "groupe (habituellement de personnes)",
			summary: "Affichage du classement des objets par groupe",
			points: ["Appliquer l'un des groupes configurés dans Basic.", "Une liste d'objets s'affiche dans l'ordre des groupes configurés.", "Si elle est laissée vide, aucun regroupement n'est effectué."],
			links: { general: "general" },
		},
		unlocked: {
			title: "État de déblocage initial",
			summary: "État initial d'affichage et de libération de l'élément (passe automatiquement à l'état haut lorsque les conditions d'activation sont remplies)",
			points: ["secreted : Ne s'affiche en aucun cas dans l'interface utilisateur tant que toutes les conditions ne sont pas remplies (il n'apparaît pas dans les indices et est masqué dans la liste des conditions et des récompenses).", "hidden : Il est entièrement masqué tant qu'aucun élément de libération ne le référence et que les conditions requises ne sont pas remplies (son nom est grisé et il est inactif).", "hinted (par défaut) : seul le nom s'affiche en avant-première, mais il n'est pas possible d'interagir avec cet élément tant qu'il n'est pas disponible.", "released : Disponible et utilisable dès le début, quelles que soient les conditions (anciennement « Afficher dès le début »)."],
		},
		buyingValue: {
			title: "Prix d'achat [pièces].",
			summary: "Configuration du prix d'achat des objets.",
			points: ["Vous ne pouvez pas acheter un Objet si vous ne l'avez jamais possédé."],
			list: [
				["valeur", "traitement"],
				["0", "rien"],
				["Une valeur supérieure à zéro.", "La valeur que vous pouvez acheter."],
				["Une valeur inférieure à zéro (par exemple -1)", "Ne peut être acheté (traité comme zéro)."],
			],
		},
		sellingValue: {
			title: "Valeur de vente [pièces].",
			summary: "Configuration du prix de vente des objets.",
			points: ["Configure le prix auquel les objets sont vendus."],
			list: [
				["valeur", "traitement"],
				["0", "rien"],
				["Une valeur supérieure à zéro.", "Vendre à cette valeur."],
				["Une valeur inférieure à zéro (par exemple -1)", "Taux d'actualisation de la configuration générale multiplié par la valeur de l'offre (si la valeur de l'offre est nulle, elle ne peut être vendue)."],
			],
			links: { general: "general" },
		},
		maximum: {
			title: "Nombre max. de pièces propres [pcs].",
			summary: "Limitation du nombre max. d'objets propres.",
			points: ["S'il est égal à 0, il n'y a pas de limite au nombre de personnes pouvant compter.", "S'il est supérieur à 1, vous ne pouvez être propre que jusqu'à ce nombre. Si le haut est atteint, les acquisitions ultérieures n'augmenteront pas le nombre de personnes comptées."],
		},
		equipmentType: {
			title: "Type d'équipement",
			summary: "Configuration Type pour l'équipement, les effets et la consommation des objets.",
			points: ["装備可能なアイテムは、カテゴリの`equipmentGroups`で指定されたグループに属している必要があります。", "Un seul Objet peut être équipé au sein d'un même groupe.", "`unnecessary` produit son effet que l'objet soit équipé ou non, et l'ampleur de l'effet est proportionnelle au nombre possédé (aucun effet avec 0, n fois avec n)."],
			list: [
				["valeur", "Équipement", "Efficacité.", "la consommation", "Exemple."],
				["`necessary`", "Nécessaire", "Uniquement lors de l'équipement (1 unité)", "rien", "Épées, armures et autres équipements."],
				["`consumable`", "Nécessaire", "Uniquement lors de l'équipement (1 unité)", "Consommé lors de l'exécution des actions", "Objets que l'on consomme pour obtenir un effet, comme les potions."],
				["`unnecessary`", "Inutile", "Tant que vous les possédez, en permanence (proportionnellement au nombre que vous possédez)", "rien", "Les objets passifs qui sont efficaces du simple fait de les avoir."],
				["`impossible`", "non autorisé", "rien", "rien", "Les objets inefficaces tels que les matériaux et les débris."],
			],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Conditions Nécessaires à l'utilisation de l'Objet." },
		properties: { ...property, options: { ...property.options, array: true }, summary: "Effets des propriétés de l'Objet." },
		coinId: { title: "ID de la paire de devises", summary: "ID de la devise utilisée pour l'achat et la vente de cet objet", points: ["Spécifiez l'ID de la devise (coins) utilisée à la fois pour la valeur d'achat et la valeur de vente.", "Si ce champ est laissé vide, la devise principale (la première devise dans la liste « coins ») sera utilisée."] },
		// スキルの実体ではなくワールド直下のskillsのID参照なので、スキル自身の項目は持たせない
		skill: { title: skill.title, summary: "À rédiger", points: ["À rédiger"], options: { label: "skill" } },
	},
	options: {
		label: "item",
	},
};

export const action: Type.Action = {
	title: "Action",
	summary: "Des éléments d'action tels que la collecte, la fabrication et le combat.",
	points: ["Il s'agit d'éléments qui représentent des agissements tels que la collecte, la fabrication, l'achat et la vente et le combat.", "À chaque action que vous accomplissez, vous gagnez de l'expérience et votre niveau monte.", "Vous pouvez configurer des objets à consommer ou à obtenir pour chaque action.", "Il existe plusieurs types de modèles d'agissements."],
	children: {
		information: information,
		category: {
			title: "カテゴリ",
			summary: "アクションが所属するカテゴリのID",
			points: ["このアクションが所属するカテゴリのIDを指定します。"],
		},
		attribute: {
			title: "attribut",
			summary: "アクション固有の属性カテゴリ",
			points: ["個別の属性(カテゴリ)を設定できます。", "空欄の場合は属するカテゴリを引き継ぎます", "例えば、魔王城というカテゴリに属するアクションに個別に魔法という属性を設定した場合、アクション完了時間やダメージには魔法のカテゴリのレベルやプロパティが計算され適応されます。"],
			links: { category: "category" },
		},
		group: {
			title: "groupe (habituellement de personnes)",
			summary: "Afficher la classification des actions par groupe",
			points: ["Appliquer l'un des groupes configurés dans Basic.", "Une liste d'actions s'affiche dans l'ordre des groupes configurés."],
			links: { general: "general" },
		},
		unlocked: {
			title: "État de déblocage initial",
			summary: "État initial d'affichage et de libération de l'élément (passe automatiquement à l'état haut lorsque les conditions d'activation sont remplies)",
			points: ["secreted : Ne s'affiche en aucun cas dans l'interface utilisateur tant que toutes les conditions ne sont pas remplies (il n'apparaît pas dans les indices et est masqué dans la liste des conditions et des récompenses).", "hidden : Il est entièrement masqué tant qu'aucun élément de libération ne le référence et que les conditions requises ne sont pas remplies (son nom est grisé et il est inactif).", "hinted (par défaut) : seul le nom s'affiche en avant-première, mais il n'est pas possible d'interagir avec cet élément tant qu'il n'est pas disponible.", "released : Disponible et utilisable dès le début, quelles que soient les conditions (anciennement « Afficher dès le début »)."],
		},
		level: {
			title: "niveau",
			summary: "Niveau de difficulté de l'Action.",
			points: ["Le niveau de difficulté de l'action est indiqué par le niveau.", "Calculer chaque propriété au moment de l'exécution par rapport au niveau du joueur.", "Par exemple, l'exécution d'une Action d'un niveau supérieur au vôtre aura un taux de succès bas.", "Si les conditions sont remplies, l'exécution peut avoir lieu même si le niveau du joueur est inférieur à cette valeur."],
			links: { property: "property" },
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Conditions Nécessaires à l'exécution de l'Action." },
		seconds: {
			title: "Temps [secondes].",
			summary: "Temps typique nécessaire à la réalisation de l'Action",
			points: ["Le temps standard (en secondes) nécessaire pour effectuer une action une fois.", "Pour le type `stamina`, il s'agit de l'intervalle de temps d'un tour (l'endurance de chaque partie est réduite une fois).", "L'exécution réelle variera en raison des calculs de propriétés."],
			links: { property: "property" },
		},
		experience: {
			title: "Expérience [niveau suivant à 100].",
			summary: "Expérience acquise dans le cadre d'actions réussies",
			points: ["Expérience standard acquise en effectuant une action une fois et avec succès ; 100 équivaut à un niveau d'expérience.", "En cas de combat, il est conseillé d'en configurer davantage, car il est acquis lorsque l'adversaire est gagné.", "L'exécution réelle variera en raison des calculs de propriétés."],
			links: { property: "property" },
		},
		chance: {
			title: "Probabilité de succès [0-1].",
			summary: "Probabilité de succès à l'issue de l'action",
			points: ["La probabilité de succès à l'issue de l'action.", "Avec `1` elle réussit toujours et avec `0` elle échoue toujours.", "En cas d'échec, des objets consommables sont consommés, mais aucune récompense ou expérience n'est acquise.", "L'exécution réelle variera en raison des calculs de propriétés."],
		},
		maximum: {
			title: "Nombre max. de passages [fois].",
			summary: "Nombre max. de fois qu'une action peut être réalisée.",
			points: ["Le nombre haut de fois qu'une action peut être comptée avec succès.", "Avec `0`, c'est illimité.", "Lorsque la limite haute est atteinte, l'Action n'est plus exécutable."],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Récompense pour l'acquisition d'une action réussie." },
		progressType: {
			title: "Type de progrès",
			summary: "Type d'exécution de l'action",
			points: ["Il en existe quatre types."],
			list: [
				["Type", "détails de l'opération", "endurance", "Exemple."],
				["`persistent`", "Il s'agit d'un type d'action qui se répète continuellement ; vous gagnez de l'expérience et des valeurs pour chaque action accomplie.", "Aucune relation", "Exploitation forestière, mines, pêche"],
				["`single`", "Effectuer une action à la fois. En cas d'interruption, le progrès est sauvegardé et peut être repris la prochaine fois. Une fois l'action terminée, l'utilisateur appuie sur l'Action de confirmation pour recevoir le résultat.", "Aucune relation", "Ouvrir des coffres au trésor, acquérir des compétences par la lecture"],
				["`snap`", "Ce type d'action est réalisé instantanément. Réalisée immédiatement sans aucun temps mort.", "Aucune relation", "Échanger, utiliser des objets."],
				["`stamina`", "Chaque temps requis diminue l'endurance respective du joueur et de l'adversaire. Lorsque l'endurance de l'adversaire est épuisée, le joueur gagne de l'expérience et des valeurs. Lorsque l'endurance du joueur est épuisée, le jeu est terminé et toutes les actions en cours sont interrompues.", "Pertinent.", "Combat, opérations dangereuses."],
			],
		},
		property: combat,
		// スキルの実体ではなくワールド直下のskillsのID参照の一覧
		skills: { title: skill.title, summary: "À rédiger", points: ["À rédiger"], options: { label: "skill", array: true } },
	},
	options: {
		label: "action",
	},
};

export const category: Type.Category = {
	title: "カテゴリ",
	summary: "Cadre général pour la classification des actions et des objets.",
	points: ["Représente un classement majeur.", "Par exemple, il peut être configuré dans n'importe quel état d'esprit, comme la courte portée, la longue portée, la magie, les donjons, les forges, les manufactures, etc.", "アクションやアイテムはワールド直下に配置され、カテゴリIDで関連付けられます。"],
	children: {
		information: information,
		group: {
			title: "groupe (habituellement de personnes)",
			summary: "カテゴリの表示グループ分類",
			points: ["Appliquer l'un des groupes configurés dans Basic.", "設定したグループ順にカテゴリ一覧が表示されます。"],
			links: { general: "general" },
		},
		unlocked: {
			title: "État de déblocage initial",
			summary: "État initial d'affichage et de libération de l'élément (passe automatiquement à l'état haut lorsque les conditions d'activation sont remplies)",
			points: ["secreted : Ne s'affiche en aucun cas dans l'interface utilisateur tant que toutes les conditions ne sont pas remplies (il n'apparaît pas dans les indices et est masqué dans la liste des conditions et des récompenses).", "hidden : Il est entièrement masqué tant qu'aucun élément de libération ne le référence et que les conditions requises ne sont pas remplies (son nom est grisé et il est inactif).", "hinted (par défaut) : seul le nom s'affiche en avant-première, mais il n'est pas possible d'interagir avec cet élément tant qu'il n'est pas disponible.", "released : Disponible et utilisable dès le début, quelles que soient les conditions (anciennement « Afficher dès le début »)."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "カテゴリ利用に必要な条件" },
		equipmentGroups: {
			title: "groupe d'équipement",
			summary: "このカテゴリで装備可能なアイテムグループの指定",
			points: ["このカテゴリで装備できるアイテムのグループ名のリストです。", "Seuls les objets du groupe correspondant au nom de groupe spécifié ici peuvent être équipés.", "Si une chaîne vide est spécifiée, les objets dont le groupe n'est pas configuré (vide) deviennent éligibles à l'équipement.", "Un seul objet peut être équipé dans le même groupe. Lorsque vous équipez un nouvel Objet, tout équipement existant dans le même groupe est automatiquement déséquipé.", "Si la liste est vide (0 pièce), rien ne peut être équipé."],
			links: { general: "general" },
		},
		numeric: {
			title: "Disponibilité des niveaux",
			summary: "カテゴリレベル機能の有無",
			points: ["このカテゴリがレベルを持つかどうかのフラグです。", "S'il est activé, il a un niveau ; s'il est désactivé, il n'en a pas.", "例として、剣技や魔法といった経験に基づくカテゴリはオンにし、ダンジョンや鍛冶屋といった場所のカテゴリはオフにするなどの使い方があります。"],
		},
		standaloneProgress: {
			title: "en progrès simultanés",
			summary: "他カテゴリとの並行実行設定",
			points: ["このカテゴリのアクションが、他のカテゴリのアクションと並行して進行できるかどうかのフラグです。", "オンの場合は、他のカテゴリのアクションとは独立して同時に進行できます。", "オフの場合は、同じくオフに設定された他のカテゴリのアクションと同時に実行できません。新たにこのカテゴリのアクションを開始すると、他の非スタンドアロンカテゴリで進行中のアクションは自動的に中止されます。"],
		},
		background: {
			title: "arrière-plan",
			summary: "カテゴリ固有の背景設定",
			points: ["このカテゴリの背景を設定します。", "カテゴリを選択されたときに、連動して背景画像が変更されます。", "Si cette option n'est pas configurée, la configuration de l'arrière-plan du monde est utilisée telle quelle."],
		},
	},
	options: {
		label: "category",
	},
};

export const type: Markdown = {
	title: "Type",
	summary: "Classification de base des mondes",
	points: ["Les mondes sont de sept types.", "Tous les éléments sont placés directement sous le monde.", "アクションとアイテムは所属するカテゴリのIDで関連付けられます。"],
	list: expandList("Type", [category, action, item, skill, group, task, preset], "Description"),
	quote: typeTree,
	options: {
		label: "type",
		linkedList: true,
	},
};

// basic

export const development: Type.Development = {
	title: "développement",
	summary: "Gestion des notes et des erreurs pendant le développement du monde",
	points: ["Utilisé lors du développement du monde.", "Il concerne le développement et les tests de ce monde et n'affecte pas le contenu du jeu.", "Les joueurs ne vérifient pas le contenu concernant le développement."],
	children: {
		version: {
			title: "version",
			summary: "Numéro de version de l'éditeur.",
			points: ["Le numéro de version de la console est automatiquement enregistré lors de la création du monde.", "Les développeurs ne peuvent pas modifier ce contenu."],
		},
		memo: {
			title: "Mémo.",
			summary: "Fiches mémos pour les développeurs",
			points: ["Les développeurs sont libres d'inclure cette information dans une note.", "Sans rapport avec la publication des jeux."],
		},
		errors: {
			title: "erreur",
			summary: "Enregistrement des erreurs dans les résultats de la validation.",
			points: ["Les résultats de la validation du monde sont automatiquement enregistrés ici.", "Par exemple, une erreur s'affiche si un type de caractère ne peut être saisi ou si une valeur numérique dépassant le haut est saisie.", "Les développeurs ne peuvent pas modifier ce contenu.", "Il est possible de le stocker sur le serveur lorsqu'il n'y a pas d'erreurs stockées ici."],
		},
		timestamp: {
			title: "horodatage",
			summary: "Registres de création, de conservation et de publication.",
			points: ["L'heure de création, de stockage et de publication des mondes est automatiquement enregistrée.", "Les développeurs ne peuvent pas modifier ce contenu."],
			children: {
				created: {
					title: "jours",
					summary: "Moment de la première création du monde",
					points: ["La date et l'heure de la création du monde."],
				},
				saved: {
					title: "enregistrer la date et l'heure",
					summary: "Heure de la dernière exécution de la sauvegarde",
					points: ["La date et l'heure de la dernière sauvegarde du monde."],
				},
				published: {
					title: "la date et l'heure de la publication",
					summary: "Date de la dernière exécution publique",
					points: ["Le monde a été publié pour la dernière fois le ."],
				},
			},
		},
		autosaveing: {
			title: "l'épargne automatique",
			summary: "Activer/désactiver la fonction d'enregistrement automatique.",
			points: ["Indique si la fonction de sauvegarde automatique est activée.", "Les développeurs ne peuvent pas modifier ce contenu."],
		},
	},
	options: {
		label: "development",
	},
};

export const design: Type.Design = {
	title: "conception",
	summary: "Les configurations de l'apparence visuelle, telles que les couleurs du monde et les polices de caractères.",
	points: ["Configuration de l'affichage des mondes.", "En ce qui concerne la conception globale du monde, s'il existe des configurations individuelles pour chaque élément, elles ont la priorité."],
	children: {
		barColor: {
			title: "Couleur de la barre",
			summary: "Couleur d'arrière-plan de la barre",
			points: ["Elle sert de couleur d'arrière-plan pour la barre.", "Comme il s'agit de la couleur de fond de l'ensemble de l'écran, la couleur de la ligne sélectionnée et celle de la barre de défilement sont également dérivées de cette couleur."],
		},
		textColor: {
			title: "Couleur du texte",
			summary: "Couleur du texte et de l'arrière-plan",
			points: ["Il est utilisé comme couleur de texte.", "Si rien n'est défini pour l'image d'arrière-plan, un dégradé basé sur cette couleur servira d'arrière-plan.", "En augmentant le contraste entre la couleur de la barre et celle du texte, celui-ci devient plus lisible."],
		},
		shadowColor: {
			title: "Couleur de l'ombre",
			summary: "Couleur de l'ombre de la barre",
			points: ["Elle est utilisée comme couleur pour les ombres projetées sur les barres et les en-têtes.", "En choisissant une couleur plus foncée que celle de la barre, vous obtiendrez une ombre plus naturelle."],
		},
		background: {
			title: "image de fond",
			summary: "Image de fond pour l'ensemble du jeu",
			points: ["Configure l'image d'arrière-plan du jeu.", "Si rien n'est configuré pour l'image, l'arrière-plan sera un dégradé basé sur la couleur du texte."],
		},
	},
	options: {
		label: "design",
	},
};

export const general: Type.General = {
	title: "général",
	summary: "Paramètres de base du jeu, y compris les paramètres de langue et de niveau",
	children: {
		language: {
			title: "Langue.",
			summary: "Langue du monde au moment de sa création.",
			points: ["Configure la langue utilisée dans cet éditeur de monde.", "La première langue affichée lorsque l'utilisateur démarre le jeu."],
		},
		translations: {
			title: "la traduction",
			summary: "Préparer des traductions multilingues ou",
			points: ["Si cette option est activée, les utilisateurs peuvent jouer dans n'importe quelle langue.", "Si elle est désactivée, vous ne pouvez lire que dans la langue sélectionnée dans les configurations de langue.", "Si la traduction est activée, les données traduites pour chaque langue doivent être fournies."],
			links: { translation: "translation" },
		},
		offlineMaxHours: {
			title: "Temps max. désactivé [heures].",
			summary: "Délais pour le progrès désactivé.",
			points: ["Configuration du nombre max. d'heures de progrès lorsque l'appareil est désactivé.", "Par exemple, si 6 heures est défini, le processus de retour désactivé jusqu'à 6 heures sera traité, mais si plus de temps est accordé pour le retour désactivé, le temps de désactivation sera traité comme 6 heures.", "Si le nombre de temps est fixé à 0, aucun traitement n'a lieu lors du retour désactivé.", "La valeur max. est de 24 heures."],
			links: { category: "category" },
		},
		maxCategoryLevels: {
			title: "カテゴリの最大レベル",
			summary: "各カテゴリのレベル上限",
			points: ["各カテゴリの最大レベルを設定します。", "Si l'expérience est acquise au-delà de ce niveau, le niveau max fixé ici est utilisé dans le calcul de chaque propriété.", "レベルのないカテゴリではこの値は関係ありません。"],
			links: { category: "category" },
		},
		locking: {
			title: "fonction verrouillée",
			summary: "Cacher des éléments jusqu'à ce que les exigences soient satisfaites",
			points: ["有効の場合、カテゴリ・アクション・アイテムは一度も使用・所持したことがなく、かつrequirementsを満たしていない間は非表示になります。", "S'il est désactivé, tous les éléments sont affichés dès le début, mais ne peuvent être exécutés ou équipés tant que les conditions requises ne sont pas remplies."],
			links: { category: "category", action: "action", item: "item" },
		},
		coins: {
			title: "monnaie",
			summary: "Configuration de la monnaie (pièces) utilisée dans le jeu",
			points: [
				"Effectuez la configuration de la devise utilisée dans le jeu.",
				"Il est possible de définir plusieurs devises et de réaliser la configuration de chacune d'entre elles à l'aide d'informations (ID, nom, icône, couleur, etc.).",
				"La monnaie sert à acheter et vendre des objets, ainsi qu'à augmenter la capacité de l'inventaire.",
				"La devise indiquée en premier est considérée comme la devise principale et est utilisée lorsque l'ID de devise (`coinId`) n'est pas spécifié pour un objet ou une capacité.",
			],
			links: { information: "information", item: "item" },
		},
		capacity: {
			title: "capacité",
			summary: "Configuration de la capacité d'inventaire.",
			points: ["Compte le haut nombre de types d'objets différents qu'un joueur peut avoir.", "Chaque objet est contrôlé par le nombre de types d'objets que vous possédez, et non par le nombre d'objets que vous comptez.", "En réglant `initialCount` sur 0, la capacité devient illimitée.", "Lorsqu'il est fait référence aux objets de capacité dans les conditions ou les récompenses, il convient d'utiliser l'ID configuré ici."],
			children: {
				information: information,
				initialCount: {
					title: "Valeur par défaut [pcs].",
					summary: "Capacité initiale de l'inventaire (nombre d'objets différents pouvant être conservés)",
					points: ["Capacité initiale (nombre d'objets différents pouvant être possédés) au début du jeu.", "En le réglant sur `0`, la capacité devient illimitée."],
				},
				initialCost: {
					title: "Prix de base [pièces].",
					summary: "Prix initial pour une capacité supplémentaire.",
					points: ["Prix de base (en pièces) pour augmenter la capacité de l'inventaire d'un emplacement.", "Le prix réel est calculé comme suit : \"prix de base x pourcentage d'augmentation ^ nombre de fois compté\".", "Exemple : prix de base 100, taux d'augmentation 1,2, première 100 pièces, deuxième 120 pièces, troisième 144 pièces."],
				},
				increasingRate: {
					title: "Pourcentage d'augmentation [fois].",
					summary: "Augmentation en pourcentage des coûts d'expansion de la capacité",
					points: ["Il s'agit d'un multiplicateur qui indique de combien le coût de l'expansion des capacités augmente avec le nième achat.", "Avec `1.0` le prix reste toujours le même et avec `1.2` il augmente de 20 % à chaque achat.", "Formule : prix de base x pourcentage d'augmentation ^ nombre de fois achetées"],
					list: [
						["taux d'augmentation", "1er ajout.", "5ème augmentation.", "10ème augmentation.", "100e augmentation.", "1000ème augmentation."],
						["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
						["1.05", "x1.00", "x1.22", "x1.63", "x131.50", "x1.7×10²⁰"],
						["1.10", "x1.00", "x1.61", "x2.59", "x1.4 x 10⁴", "x2.7×10⁴¹"],
						["1.20", "x1.00", "x2.49", "x6.19", "x8.3 x 10⁷", "x8.3×10⁷⁹"],
						["1.50", "x1.00", "x5.06", "x57.67", "x1.9×10¹⁷", "x7.0×10¹⁷⁶"],
					],
				},
				coinId: {
					title: "ID de la devise",
					summary: "ID de la devise utilisée pour l'extension de capacité",
					points: ["Spécifiez l'ID de la devise (coins) utilisée pour le paiement de l'extension de l'inventaire.", "Si ce champ est laissé vide, la devise principale (la première devise dans la liste « coins ») sera utilisée."],
				},
				buyingLimit: {
					title: "Limite d'achat [nombre de fois]",
					summary: "Nombre maximal d'achats de capacité",
					points: ["Il s'agit du nombre maximal de fois où vous pouvez acheter de l'espace de stockage avec de la monnaie.", "Si vous réglez ce paramètre sur `0`, vous pourrez acheter un nombre illimité d'articles.", "Si vous le réglez sur `-1`, vous ne pourrez plus acheter.", "L'augmentation de capacité résultant des récompenses n'est pas soumise à cette limite."],
				},
			},
			links: { item: "item" },
		},
		queue: {
			title: "Queue",
			summary: "Configuration du nombre de créneaux de la file d'attente pour l'exécution en série des actions",
			points: [
				"Permet de gérer le nombre de créneaux de la file d'attente pour l'exécution en série des actions.",
				"La file d'attente contient l'action en cours, et c'est l'action en tête qui est exécutée. Avec `1` créneau, seule l'action en cours tient et rien ne peut attendre.",
				"Tout comme la capacité, le nombre d'emplacements peut être acheté avec de la monnaie, mais il est également possible d'augmenter le nombre d'objets dans la file d'attente en les sélectionnant comme récompenses d'actions ou d'événements.",
				"Lorsque vous faites référence à un objet de la file d'attente dans les conditions ou les récompenses, veuillez utiliser l'ID configuré ici.",
			],
			children: {
				information: information,
				initialCount: {
					title: "Valeur par défaut [pcs].",
					summary: "Nombre de cases d'exécution consécutives pour commencer la partie",
					points: ["Il s'agit du nombre de créneaux de la file d'attente au début de la partie.", "La valeur minimale est `1` (l'action en cours occupe un créneau et il n'y a pas de traitement de type `0` = illimité, comme pour la capacité)."],
				},
				initialCost: {
					title: "Prix de base [pièces].",
					summary: "Prix de départ pour ajouter un emplacement",
					points: ["Il s'agit du prix de base (en pièces) pour ajouter un emplacement supplémentaire à la série d'exécutions.", "Le prix réel est calculé comme suit : \"prix de base x pourcentage d'augmentation ^ nombre de fois compté\".", "Exemple : prix de base 100, taux d'augmentation 1,2, première 100 pièces, deuxième 120 pièces, troisième 144 pièces."],
				},
				increasingRate: {
					title: "Pourcentage d'augmentation [fois].",
					summary: "Taux de croissance des coûts liés à l'extension des capacités",
					points: ["Il s'agit du coefficient indiquant dans quelle mesure le coût de l'extension de l'espace augmente lors du n-ième achat.", "Avec `1.0` le prix reste toujours le même et avec `1.2` il augmente de 20 % à chaque achat.", "Formule : prix de base x pourcentage d'augmentation ^ nombre de fois achetées"],
				},
				coinId: {
					title: "ID de la devise",
					summary: "ID de la devise utilisée pour l'extension de la limite",
					points: ["Spécifiez l'ID de la devise (coins) à utiliser pour le prix de l'extension de la période d'exécution continue.", "Si ce champ est laissé vide, la devise principale (la première devise dans la liste « coins ») sera utilisée."],
				},
				buyingLimit: {
					title: "Limite d'achat [nombre de fois]",
					summary: "Nombre maximal d'achats de créneaux horaires",
					points: ["Il s'agit du nombre maximal de fois où vous pouvez acheter des créneaux d'exécution en série avec de la monnaie.", "Si vous réglez ce paramètre sur `0`, vous pourrez acheter un nombre illimité d'articles.", "Si vous le réglez sur `-1`, vous ne pourrez plus acheter.", "L'augmentation du quota liée aux récompenses n'est pas soumise à cette limite maximale."],
				},
			},
			links: { item: "item" },
		},
		levelCommonRatio: {
			title: "Taux de haut de l'expérience [fois].",
			summary: "Augmentation en pourcentage de la difficulté du niveau.",
			points: ["カテゴリのレベルが上がるにつれて、次のレベルになるのに必要な経験値の上昇率です。", "En augmentant cette valeur, vous augmentez le niveau de difficulté.", "Le nombre de points d'expérience nécessaires pour passer au niveau suivant est égal à (taux d'augmentation des points d'expérience)^(niveau actuel - 1)."],
			list: [
				["Taux d'augmentation de l'expérience", "Lv.1", "Lv.2", "Lv.10", "Lv.50", "Lv.99."],
				["0", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
				["0.02", "x1.00", "x1.02", "x1.22", "x2.69", "x5.52"],
				["0.05", "x1.00", "x1.05", "x1.55", "x11.47", "x131.50"],
				["0.10", "x1.00", "x1.10", "x2.36", "x117.39", "x5.7×10⁴"],
				["0.20", "x1.00", "x1.20", "x6.19", "x3,3 x 10³", "x1,3 x 10¹¹"],
			],
			links: { category: "category" },
		},
		actionLevelLimit: {
			title: "restriction du niveau d'action",
			summary: "Demande le nombre de fois où la même action d'attribut a été exécutée pour l'exécution d'une action.",
			points: ["Si cette option est activée, le nombre de fois qu'une action ayant les mêmes attributs a été exécutée est automatiquement ajouté aux conditions d'exécution de chaque action.", "Le nombre de fois compté est égal à la valeur du niveau de l'Action.", "属性が設定されていない場合は、所属するカテゴリのIDが使用されます。"],
		},
		propertyRatio: {
			title: "Rapport de propriété [fois]",
			summary: "Combien de fois une propriété change par 10 de différence de niveau",
			points: [
				"Configure combien de fois chaque propriété change chaque fois que la différence entre le niveau de la catégorie et le niveau de l'action augmente de `10`.",
				"Le rapport est calculé par (rapport de propriété)^(différence de niveau÷10). Lorsque la différence de niveau est `0`, le rapport est de `1` et la valeur configurée dans l'action est utilisée telle quelle.",
				"L'attaque et l'expérience augmentent selon ce rapport, tandis que la défense (dégâts subis) et la rapidité (temps nécessaire) diminuent dans la même proportion.",
				"La précision, l'esquive, la probabilité de succès et la récupération sont des valeurs comprises entre `0` et `100`%, si bien que le rapport s'applique à la proportion entre ce qui se réalise et ce qui ne se réalise pas. `0`% et `100`% ne changent pas, et les valeurs intermédiaires ne dépassent jamais `100`%.",
				"La défense, l'esquive et la rapidité ne reçoivent que la moitié de l'effet du rapport (une différence de niveau de `20` équivaut à une différence de niveau de `10` pour les autres propriétés). La défense et l'esquive s'appliquent doublement, au taux de coups subis et aux dégâts subis, et la rapidité s'applique à toutes les autres propriétés en tant que nombre d'exécutions ; leur effet est donc affaibli pour maintenir l'équilibre.",
				"La référence est (taux d'augmentation de l'expérience) à la puissance `6.7`. Au-dessus, la montée en niveau s'accélère à mesure que le niveau augmente ; en dessous, les derniers niveaux demandent plus de temps.",
				"En le fixant à `1`, la différence de niveau n'a plus d'influence. Plus la valeur est élevée, plus l'avantage et le désavantage liés à la différence de niveau sont brutaux.",
			],
			list: [
				["Rapport de propriété", "Différence de niveau -20", "Différence de niveau -10", "Différence de niveau 0", "Différence de niveau +10", "Différence de niveau +20"],
				["`1`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`"],
				["`1.5`", "`x0.44`", "`x0.67`", "`x1.00`", "`x1.50`", "`x2.25`"],
				["`2`", "`x0.25`", "`x0.50`", "`x1.00`", "`x2.00`", "`x4.00`"],
				["`3`", "`x0.11`", "`x0.33`", "`x1.00`", "`x3.00`", "`x9.00`"],
			],
			links: { action: "action", property: "property" },
		},
		defaultCombat: { ...combat, summary: "Paramètres de combat par défaut communs à toutes les Actions.", points: ["Ce sont les valeurs de correction de combat de base appliquées en commun à toutes les actions de type `stamina`.", "La valeur de combat (propriété) de chaque Action est ajoutée à cette valeur par défaut."], links: { action: "action" } },
	},
	options: {
		label: "general",
	},
};

export const overview: Type.Overview = {
	title: "Aperçu.",
	summary: "Informations de base sur le monde et ses auteurs",
	points: ["Cette section décrit le contenu du monde.", "Configurez-le de manière à ce qu'il soit facile à comprendre pour les utilisateurs lorsqu'ils choisissent un monde.", "Ces configurations n'affectent pas le fonctionnement du monde."],
	children: {
		information: information,
		version: {
			title: "version",
			summary: "Numéro de version du monde",
			points: ["Saisissez une valeur quelconque (entière ou décimale).", "Généralement, la partie entière représente la version majeure et la partie comptée la version mineure."],
		},
		author: {
			title: "Nom de l'auteur",
			summary: "Nom de l'auteur mondial",
			points: ["Saisissez votre pseudonyme ou votre surnom."],
		},
		homepage: {
			title: "Page d'accueil.",
			summary: "URL du site web de l'auteur",
			points: ["Si vous avez votre propre page d'accueil ou un site de réseautage social, indiquez son URL.", "Les joueurs peuvent vérifier cette URL au moyen d'un lien.", "Si ce n'est pas le cas, laisser en blanc."],
		},
		url: {
			title: "localisateur de ressources uniformes",
			summary: "URL du jeu",
			points: ["Saisissez l'URL où vous souhaitez placer le jeu dans ce monde.", "Saisissez l'URL de la page Haut, par exemple index.html, y compris le domaine.", "Si une URL appropriée est fournie, elle fonctionnera comme une PWA.", "Une PWA est une fonctionnalité qui fonctionne comme une app qui peut être installée et jouée de manière désactivée."],
		},
		estimatedPlayingTime: {
			title: "Temps de jeu estimé",
			summary: "Estimation du temps nécessaire à la réalisation du monde.",
			points: ["Le temps de jeu estimé nécessaire pour terminer le jeu dans le monde.", "Les joueurs peuvent s'en inspirer pour jouer.", "Il ne s'agit que d'un temps de référence et il n'existe pas de définition claire de ce qui constitue l'achèvement d'un monde."],
			children: {
				value: {
					title: "valeur",
					summary: "Les valeurs du temps de jeu",
				},
				unit: {
					title: "unité",
					summary: "Unité de temps (par exemple, heures, minutes)",
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
			points: ["タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。", "報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。", "条件を設定していない場合は、発動するたびに報酬を獲得します。", "requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。"],
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
	title: "Événement",
	summary: "Messages et récompenses déclenchés à des moments précis",
	points: ["Elle s'active à des moments précis, par exemple lorsque vous accédez à un monde pour la première fois ou lorsque vous terminez le jeu, et ouvre un écran dédié.", "Il y en a un par moment, et il n'est pas possible d'en ajouter ni d'en supprimer. Laissez le champ vide pour les moments où vous ne l'utilisez pas.", "Elles n'apparaissent pas dans la liste des missions ou des tâches. Les éléments qui sont considérés comme accomplis dès que les conditions sont remplies doivent être configurés en tant que tâches.", "La récompense est automatiquement acquise dès son déclenchement. Il n'y a ni opération de réception, ni ruban, comme c'est le cas pour les tâches.", "発動時にカテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。", "Si vous ne renseignez pas les champs « Nom », « Description » et « Icône », le texte et l'icône par défaut intégrés au joueur seront utilisés."],
	list: [
		["timing", "condition d'activation", "répéter"],
		["`comebacked`", "Lorsqu'une personne revient d'une situation désactivée pendant plus d'une seconde et qu'une action est en cours.", "souvent"],
		["`gameovered`", "Lorsque l'endurance du joueur s'épuise au cours d'un combat.", "souvent"],
		["`welcomed`", "Quand j'ai commencé ce monde.", "une seule fois"],
		["`completed`", "全カテゴリのレベルが最大値（maxCategoryLevels）に達した時", "une seule fois"],
		["`obtained`", "lorsque vous avez terminé ou vérifié une action d'un type spécifique (coffre au trésor, etc.)", "souvent"],
	],
	links: { task: "task" },
	children: {
		comebacked: toFixedEvent("Au retour", "Se déclenche au retour après une absence hors ligne", ["Se déclenche lorsque vous revenez après une seconde ou plus hors ligne et qu'une action était en cours.", "S'affiche avec le récapitulatif de la progression réalisée pendant votre absence."], ["Fixé à `comebacked`, non modifiable.", "Se déclenche à chaque retour, autant de fois que nécessaire."]),
		gameovered: toFixedEvent("À la fin de partie", "Se déclenche lorsque l'endurance est épuisée en combat", ["Se déclenche lorsque l'endurance du joueur est épuisée en combat.", "En définissant une quantité de récompense négative, vous pouvez associer un coût à la fin de partie."], ["Fixé à `gameovered`, non modifiable.", "Se déclenche à chaque fin de partie, autant de fois que nécessaire."]),
		welcomed: toFixedEvent("Au premier démarrage", "Se déclenche à la première ouverture du monde", ["Se déclenche lorsque ce monde est lancé pour la première fois.", "Sert à présenter l'univers ou à remettre l'équipement de départ."], ["Fixé à `welcomed`, non modifiable.", "Se déclenche une seule fois, au premier démarrage."]),
		completed: toFixedEvent("À la fin du jeu", "全カテゴリが最大レベルに達した時に発動", ["全カテゴリのレベルが最大値（maxCategoryLevels）に達した時に発動します。", "numeric（数値）でないカテゴリは判定から除かれます。"], ["Fixé à `completed`, non modifiable.", "Se déclenche une seule fois, lorsque les conditions sont remplies."]),
		obtained: toFixedEvent("À l'achèvement d'une action unique", "Se déclenche à l'achèvement d'une action unique comme un coffre au trésor", ["Se déclenche lorsqu'une action de type single (comme un coffre au trésor) est terminée et confirmée.", "Indépendamment de la récompense propre à l'action, vous pouvez ajouter par-dessus la récompense configurée ici."], ["Fixé à `obtained`, non modifiable.", "Se déclenche à chaque achèvement d'une action unique, autant de fois que nécessaire."]),
	},
	options: {
		label: "event",
	},
};

export const basic: Type.Basic = {
	title: "configuration de base",
	summary: "Éléments de configuration de base pour le monde en général.",
	points: ["ワールドの名前、説明、背景、通貨、容量、カテゴリの最大レベル、経験値の上昇率、割引率、標準戦闘パラメータなどを設定します。", "Ces configurations affectent le monde entier."],
	list: expandList("nom", [overview, general, design, event, development], "Description"),
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
	title: "monde",
	summary: "Configuration générale du monde du jeu et structure des données",
	points: ["Données sur les jeux pouvant être joués sur des consoles.", "Les configurations vous permettent de créer un jeu d'abandon comme vous le souhaitez.", "ワールドはカテゴリ、アクション、アイテム、イベントなどの要素を内包します。"],
	children: {
		basic: basic,
		categories: { ...category, options: { ...category.options, array: true } },
		actions: { ...action, options: { ...action.options, array: true } },
		items: { ...item, options: { ...item.options, array: true } },
		skills: { ...skill, options: { ...skill.options, array: true } },
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
	title: "éditeur",
	summary: "Explications sur l'utilisation de l'éditeur et la structure des mondes.",
	list: expandList("nom", [world, basic, type, component, miscellaneous], "Description"),
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
		{ title: type, twig: [category, action, item, skill, group, task, preset] },
		{ title: component, twig: [information, requirement, acquisition, combat, property] }, 
		{ title: miscellaneous, twig: [translation] }
	],
};
