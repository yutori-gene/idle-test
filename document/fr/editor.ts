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
	title: "la traduction",
	summary: "Configuration pour la traduction du texte du jeu dans d'autres langues.",
	points: ["Configure le texte à traduire.", "Les configurations multilingues sont disponibles lorsque les configurations de traduction sont activées.", "Si la traduction est désactivée, les informations décrites pendant le développement seront affichées telles quelles.", "Les configurations de traduction et le changement de langue ne sont pas possibles pendant le développement de la prépublication."],
	options: {
		label: "la traduction",
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
							points: ["Exemple d'invite : traduire les valeurs `name` et `explanation` des données JSON téléchargées de l'Anglais vers le Japonais. Ne modifiez pas les autres minutes des données."],
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
	list: expandList("supplément", [translation]),
	options: {
		label: "divers",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "propriétés",
	summary: "Configuration des effets d'un Objet.",
	points: ["Il s'agit d'un effet qui peut être configuré sur l'Objet.", "Les objets dont le type d'équipement est « `necessary` » ou « `consumable` » ne produisent leur effet que lors de l'équipement. Ceux de type « `unnecessary` » produisent leur effet simplement en étant en possession, et l'intensité de l'effet est proportionnelle au nombre d'objets possédés (si vous en possédez 2, l'effet est doublé).", "L'effet « `unnecessary` » se traduisant par un multiplicateur égal au nombre d'objets détenus, la valeur « `maximum` » (nombre maximal d'objets détenus) constitue la limite supérieure de cet effet. Veuillez effectuer la configuration de ce paramètre en fonction de la valeur « `maximum` » lorsque vous réglez l'équilibre du jeu.", "Les valeurs des deux éléments sont calculées comme un ajustement de la différence de niveau entre le niveau du joueur et le niveau de l'action.", "Par exemple, si la valeur d'attaque est de 10, l'attaque est calculée comme si le niveau du joueur était supérieur de 10 au niveau de l'Action. Les valeurs négatives sont l'inverse.", "ATTACK, DEFENCE, ACCURACY, EVASION et RESTORE ne sont valables que pour les actions de type `stamina`."],
	list: [
		["propriétés", "Détails de l'efficacité."],
		["vitesse", "Réduit le temps nécessaire à une action. Le temps nécessaire varie inversement à la différence de niveau."],
		["chance", "Modifie la probabilité de succès d'une action. La probabilité augmente proportionnellement à la différence de niveau."],
		["expérience", "Modifie l'expérience acquise. Augmente proportionnellement à la différence de niveau (le calcul est inversé : plus l'action de niveau est élevée, plus vous gagnez)."],
		["attaque", "Modifie les dégâts d'endurance infligés à l'adversaire. (Action Stamina uniquement)."],
		["défense", "Réduit les dégâts d'endurance subis par les adversaires. (Action stamina uniquement)."],
		["précision", "Bas le taux de ratage des attaques. (Action de résistance uniquement)."],
		["évasion", "Modifie le taux d'évasion des attaques de l'adversaire. (Action stamina uniquement)."],
		["restaurer", "Modifie la quantité d'endurance restaurée à la fin d'une action. (uniquement pour les actions d'endurance)."],
	],
	children: {
		category: {
			title: "Catégorie.",
			summary: "Spécification de la catégorie à laquelle les propriétés s'appliquent.",
			points: ["Configurer l'ID de la catégorie à laquelle s'applique cette propriété.", "La configuration `*` s'applique à toutes les Catégories.", "Si elle est vide, elle s'applique à la Catégorie à laquelle l'Objet appartient."],
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
		label: "propriété",
	},
};

export const combat: Type.Combat = {
	title: "valeur de combat",
	summary: "Valeurs de correction du combat pour les actions de type endurance.",
	points: ["Valeurs de correction valables uniquement pour les actions de type `stamina`.", "Chaque valeur est calculée comme une correction supplémentaire à la différence de niveau entre le joueur et l'Action.", "Par exemple, si la valeur d'attaque est de 10, les dégâts de l'attaque sont calculés comme si le niveau du joueur était supérieur de 10 au niveau de l'Action. Si elle est négative, la correction se fait dans le sens inverse.", "S'il est configuré à `defaultCombat` dans `General`, il devient le paramètre de combat par défaut pour le monde entier."],
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
			points: ["Plus la valeur est élevée, plus l'endurance est restaurée."],
		},
	},
	options: {
		label: "combat",
	},
};

export const acquisition: Type.Acquisition = {
	title: "acquisitions",
	summary: "Configuration de l'acquisition au niveau des objets et des catégories.",
	points: ["Configurer les acquisitions.", "Vous pouvez modifier le niveau de la Catégorie ainsi que l'Objet, et le nombre de fois que l'Action a été comptée.", "La probabilité d'obtenir le produit peut être configurée."],
	list: [
		["Type", "Ce que vous acquérez."],
		["Catégorie.", "niveau"],
		["Action", "Nombre de fois qu'il a été exécuté."],
		["Objet", "compter le nombre de possessions"],
	],
	children: {
		type: {
			title: "Type",
			summary: "Type d'élément à acquérir.",
			list: [
				["Type", "Ce qui est acquis."],
				["Catégorie.", "Niveau (conversion de l'expérience ajoutée)"],
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
			points: ["Les valeurs négatives réduisent le nombre de possessions, le nombre de fois qu'elles ont été effectuées et leur niveau. Toutefois, elle ne peut être bas que 0.", "Si un Objet a un nombre maximum de possessions (max), le nombre de possessions n'augmentera pas au-delà de cette valeur.", "Si le Type est la Catégorie, la valeur configurée est ajoutée directement au niveau (1 pour 1 niveau, 0,5 pour 0,5 niveau). La façon habituelle d'ajuster cela est de configurer la valeur d'expérience de l'Action. Cette configuration n'est pas Inutile, à moins qu'il n'y ait un but particulier."],
		},
		chance: {
			title: "Probabilité [-1 à 1]",
			summary: "Probabilité de succès de l'acquisition (les valeurs négatives ne sont prises en compte qu'en cas d'échec)",
			points: ["Configurez la probabilité d'obtention sous forme de nombre décimal compris entre -1 et 1. La valeur absolue est utilisée pour déterminer la probabilité.", "Lorsque la valeur est positive, elle n'est prise en compte qu'en cas de succès de l'action : la valeur `1` garantit l'obtention, tandis que la valeur `0,5` correspond à une probabilité de 50 % d'obtention.", "Lorsque la valeur est négative, elle n'est prise en compte qu'en cas d'échec de l'action : la valeur `-1` garantit l'obtention de l'objet, tandis que la valeur `-0,5` offre une probabilité de 50 % de l'obtenir.", "Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.", "La valeur par défaut est `1` (toujours récupérée en cas de succès)."],
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
	points: ["Il s'agit des configurations établies pour chaque élément par Catégorie, Action et Objet.", "Si toutes les configurations ne sont pas remplies, les opérations indiquées dans le tableau ne peuvent pas être effectuées.", "Si la fonction de verrouillage est activée, l'élément lui-même est masqué jusqu'à ce que la condition soit remplie."],
	list: [
		["Où se configurer ?", "Ce qui ne peut être fait que si les conditions sont réunies."],
		["Catégorie.", "Exécution de toutes les actions et manipulation des objets de la Catégorie"],
		["Action", "Exécution des actions"],
		["Objet", "Manipulation d'objets (par exemple, d'équipements)"],
	],
	children: {
		type: {
			title: "Type",
			summary: "Type d'élément référencé comme condition.",
			list: [
				["Type", "Valeurs référencées"],
				["Catégorie.", "Niveau de la Catégorie."],
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
			points: ["Probabilité qu'un Objet soit consommé lorsque la condition est remplie et que l'Action est réalisée.", "Toujours consommé à `1`, 50% de chance de consommation à `0.5` et pas de consommation à `0`.", "La valeur par défaut est `1` (toujours consommé).", "Invalide si le Type est différent de l'Objet."],
		},
		equipment: {
			title: "Équipement",
			summary: "L'objet doit être dans un état équipé (valable uniquement si le Type est Objet) ou",
			points: ["Lorsqu'il est activé, l'Objet doit être équipé ainsi que possédé.", "Invalide si le Type est différent de l'Objet."],
		},
	},
	links: { type: "type" },
	options: {
		label: "exigence",
	},
};

export const information: Type.Information = {
	title: "l'information",
	summary: "Configuration des informations de base sur l'élément (ID, nom, icône, couleur, etc.)",
	points: ["Éléments d'information de base communs à chaque élément du monde (catégories, actions, objets, événements, etc.).", "Chaque élément est configuré séparément."],
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
							points: ["Si l'ID est `stylish-strong-axe`, le nom est `Stylish Strong Axe`."],
						},
					},
				},
				noDuplicate: {
					title: "Pas de double emploi.",
					summary: "Interdiction de dupliquer les ID au sein d'un même Type.",
					points: ["Ne pas dupliquer dans les types de catégories, d'actions, d'objets, d'événements et de préréglages car ils sont utilisés pour identifier les éléments.", "Le fait d'avoir le même ID pour différents types ne pose pas de problème."],
					links: { type: "type" },
				},
			},
		},
		name: {
			title: "Nom.",
			summary: "Nom de l'élément tel qu'il apparaît",
			points: ["Nom de l'élément affiché dans le jeu.", "Des langues autres que l'Anglais peuvent également être saisies.", "Les noms qui reproduisent d'autres éléments sont acceptables.", "Si elle est trop longue, la partie débordante est omise de l'affichage pendant la lecture avec `...`."],
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
						"type de fichier": {
							title: "Type de fichier.",
							summary: "Formats de fichiers image pris en charge.",
							points: ["Vous pouvez utiliser les types généraux qui peuvent être affichés dans le navigateur.", "JPEG, PNG, GIF, WebP, SVG, etc."],
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
							points: ["Rechercher `Iconify` pour les icônes qui peuvent être affichées.", "Vous pouvez trouver rapidement les meilleures icônes en recherchant des icônes.", "Sélectionnez une icône pour voir son identifiant (type de jeu d'icônes `:` nom de l'icône), comme `game-icons:sword-wound`, et collez-la directement dans ce champ d'icône."],
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
			title: "variété",
			summary: "Configure la couleur d'affichage de l'élément.",
			points: ["En tant que couleur d'élément, elle est appliquée à l'icône et à la couleur d'arrière-plan de l'élément.", "Sélectionner dans le sélecteur de couleurs de l'éditeur."],
			children: {
				"héritage des parents": {
					title: "Héritage des éléments parents",
					summary: "Reprendre les configurations de couleur de l'élément parent.",
					points: ["Si elle est vide, la couleur configurée dans l'élément parent est reprise.", "La hiérarchie des types pour chaque élément est la suivante", "Par exemple, si une action dispose d'une configuration de couleurs individuelles, celle-ci sera utilisée, tandis que si l'action ne dispose pas d'une configuration de couleurs individuelles, la couleur de la catégorie ou du monde sera utilisée.", "Si un événement est également associé à une catégorie, il reprend la couleur de cette catégorie, tout comme les actions et les objets."],
					quote: typeTree,
					links: { type: "type" },
				},
			},
		},
	},
	options: {
		label: "l'information",
	},
};

export const component: Markdown = {
	title: "composante",
	summary: "Parties communes",
	points: ["Les composants communs utilisés dans chaque configuration sont extraits et manipulés.", "Les composants utilisés dans tous ces domaines sont communs, mais certains d'entre eux ne sont pas utilisés dans certains postes."],
	list: expandList("composante", [information, requirement, acquisition, combat, property]),
	options: {
		label: "composante",
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
		label: "préétabli",
	},
};

export const task: Type.Event = {
	title: "Tâche",
	summary: "Missions qui sont considérées comme accomplies lorsque les conditions sont remplies",
	points: ["Lorsque la configuration définie est remplie, l'objectif est atteint et un message s'affiche en haut de l'écran.", "Elles s'affichent dans la liste des missions du joueur et dans la liste des tâches par catégorie.", "La récompense n'est pas attribuée automatiquement. Le joueur la reçoit lorsqu'il ouvre la tâche et appuie sur la barre d'acquisitions.", "Tant que la récompense n'a pas été perçue, un ruban apparaît sur la barre de la liste pour indiquer qu'elle n'a pas encore été perçue.", "Par les acquisitions, vous pouvez modifier le niveau de la catégorie, le nombre d'actions effectuées et le nombre d'objets en votre possession.", "Les éléments que vous souhaitez déclencher à des moments autres que ceux prévus (par exemple lors du premier démarrage ou en cas de jeu terminé) doivent faire l’objet d’une configuration dans les événements des paramètres de base."],
	links: { event: "événement" },
	children: {
		information: information,
		category: {
			title: "Catégorie.",
			summary: "ID de la catégorie à laquelle appartient la tâche",
			points: ["Indiquez l'ID de la catégorie à laquelle cette tâche doit être rattachée.", "Une fois la configuration activée, une liste des tâches s'ajoute à l'écran des catégories du joueur, et celles-ci s'affichent également regroupées par catégorie dans la liste des missions.", "Si le champ est vide, la mission n'appartient à aucune catégorie et s'affiche en tête de la liste des missions."],
		},
		timing: {
			title: "timing",
			summary: "Moment du déclenchement de la tâche (fixé sur `matched`)",
			points: ["La tâche est verrouillée sur « `matched` » (lorsque la configuration définie est remplie) et ne peut pas être modifiée.", "La récompense ne peut être obtenue qu'une seule fois ; une fois reçue, le statut « Objectif atteint » reste inchangé.", "Pour les éléments que vous souhaitez déclencher à d'autres moments, effectuez la configuration dans les événements des paramètres par défaut."],
			links: { event: "événement" },
		},
		unlocked: {
			title: "État d'affichage initial",
			summary: "État d'affichage initial de l'icône de tâche (la réalisation dépend de certaines conditions ; avec cette configuration, la tâche n'est pas considérée comme réalisée)",
			points: ["タスクの達成条件はrequirementsで決まり、この項目は一覧アイコンの見た目のみに影響します。", "secreted: 全requirementsを満たすまでタスクの一覧に一切表示されません（達成自体は条件で起こります）。", "hidden・hinted: アイコンに斜線が付き未解放として表示されます。", "released: 斜線が消え解放済みとして表示されます。", "一度達成したタスクは一覧から消えず、その後に条件を満たさなくなっても達成のまま表示されます。"],
		},
		requirements: {
			title: "conditions générales",
			summary: "Conditions de réussite de la tâche",
			points: ["タスクを達成させる条件です。", "この条件を満たすと達成になり、報酬を受け取れるようになります。", "一度達成すると、その後に条件を満たさなくなっても達成のままで、報酬もいつでも受け取れます。", "条件を設定していないタスクは達成しません。"],
			children: requirement.children,
		},
		acquisitions: {
			title: "récompense",
			summary: "Configuration des récompenses à l'achèvement d'une tâche",
			points: ["達成したタスクを開き、獲得のバーを押した時に受け取れる報酬です。", "カテゴリーのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。", "数量にマイナスを設定することもできます。", "報酬を設定していないタスクは獲得のバーが出ず、達成した時点で完了になります。", "持てるアイテムの種類が上限に達している時は受け取れません。整理してから受け取り直します。"],
			children: acquisition.children,
		},
		group: {
			title: "groupe de travail",
			summary: "Classification des tâches par groupe d'affichage",
			points: ["Appliquer l'un des groupes configurés dans Basic.", "La liste des tâches s'affiche dans l'ordre des groupes de configuration que vous avez définis.", "Ils sont classés par catégorie, puis par groupe au sein de chaque catégorie.", "Si elle est laissée vide, aucun regroupement n'est effectué."],
			links: { general: "général" },
		},
	},
	options: {
		label: "tâche",
	},
};

export const group: Type.Information = {
	...information,
	title: "groupe (habituellement de personnes)",
	summary: "Définir des groupes d'affichage pour les catégories, les actions et les objets",
	points: ["Définir des groupes pour contrôler l'ordre d'affichage.", "Vous pouvez configurer les groupes définis ici pour chaque Catégorie, Action et Objet.", "Les groupes identiques sont affichés à proximité les uns des autres.", "Si elle est laissée vide, aucun regroupement n'est effectué."],
	options: {
		label: "groupe",
	},
};

export const item: Type.Item = {
	title: "Objet",
	summary: "Éléments de biens tels que les équipements et les consommables",
	points: ["Cet élément concerne la propriété d'objets tels que les équipements, les consommables et les objets de valeur.", "Une seule catégorie peut être équipée, ou bien elle peut être rien.", "Il existe également différentes manières de les utiliser."],
	children: {
		information: information,
		category: {
			title: "Catégorie.",
			summary: "ID de la Catégorie à laquelle l'Objet appartient",
			points: ["Indiquez l'ID de la catégorie à laquelle cet Objet appartient."],
		},
		group: {
			title: "groupe (habituellement de personnes)",
			summary: "Affichage du classement des objets par groupe",
			points: ["Appliquer l'un des groupes configurés dans Basic.", "Une liste d'objets s'affiche dans l'ordre des groupes configurés.", "Si elle est laissée vide, aucun regroupement n'est effectué."],
			links: { general: "général" },
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
			links: { general: "général" },
		},
		maximum: {
			title: "Nombre max. de pièces propres [pcs].",
			summary: "Limitation du nombre max. d'objets propres.",
			points: ["S'il est égal à 0, il n'y a pas de limite au nombre de personnes pouvant compter.", "S'il est supérieur à 1, vous ne pouvez être propre que jusqu'à ce nombre. Si le haut est atteint, les acquisitions ultérieures n'augmenteront pas le nombre de personnes comptées."],
		},
		equipmentType: {
			title: "Type d'équipement",
			summary: "Configuration Type pour l'équipement, les effets et la consommation des objets.",
			points: ["Les objets qui peuvent être équipés doivent appartenir au groupe spécifié dans la Catégorie `equipmentGroups`.", "Un seul Objet peut être équipé au sein d'un même groupe.", "L'effet « unnecessary » s'applique que l'équipement soit présent ou non, et son intensité est proportionnelle au nombre d'objets possédés (rien si l'on en possède 0, effet multiplié par n si l'on en possède n)."],
			list: [
				["valeur", "Équipement", "Efficacité.", "la consommation", "Exemple."],
				["`nécessaire`.", "Nécessaire", "Uniquement lors de l'équipement (1 unité)", "rien", "Épées, armures et autres équipements."],
				["`consommable`.", "Nécessaire", "Uniquement lors de l'équipement (1 unité)", "Consommé lors de l'exécution des actions", "Objets que l'on consomme pour obtenir un effet, comme les potions."],
				["`nécessaire`.", "Inutile", "Tant que vous les possédez, en permanence (proportionnellement au nombre que vous possédez)", "rien", "Les objets passifs qui sont efficaces du simple fait de les avoir."],
				["`impossible`.", "non autorisé", "rien", "rien", "Les objets inefficaces tels que les matériaux et les débris."],
			],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Conditions Nécessaires à l'utilisation de l'Objet." },
		properties: { ...property, options: { ...property.options, array: true }, summary: "Effets des propriétés de l'Objet." },
		coinId: { title: "ID de la paire de devises", summary: "ID de la devise utilisée pour l'achat et la vente de cet objet", points: ["Spécifiez l'ID de la devise (coins) utilisée à la fois pour la valeur d'achat et la valeur de vente.", "Si ce champ est laissé vide, la devise principale (la première devise dans la liste « coins ») sera utilisée."] },
	},
	options: {
		label: "article",
	},
};

export const action: Type.Action = {
	title: "Action",
	summary: "Des éléments d'action tels que la collecte, la fabrication et le combat.",
	points: ["Il s'agit d'éléments qui représentent des agissements tels que la collecte, la fabrication, l'achat et la vente et le combat.", "À chaque action que vous accomplissez, vous gagnez de l'expérience et votre niveau monte.", "Vous pouvez configurer des objets à consommer ou à obtenir pour chaque action.", "Il existe plusieurs types de modèles d'agissements."],
	children: {
		information: information,
		category: {
			title: "Catégorie.",
			summary: "ID de la catégorie à laquelle appartient l'Action",
			points: ["Indiquez l'ID de la catégorie à laquelle cette Action appartient."],
		},
		attribute: {
			title: "attribut",
			summary: "Catégories d'attributs propres à l'Action",
			points: ["Des attributs individuels (catégories) peuvent être configurés.", "Si elle n'est pas renseignée, la catégorie à laquelle elle appartient est reprise", "Par exemple, si vous configurez l'attribut Magie pour une action appartenant individuellement à la catégorie Château du démon, le niveau et les propriétés de la catégorie Magie seront calculés et appliqués au temps d'exécution et aux dégâts de l'action."],
			links: { category: "catégorie" },
		},
		group: {
			title: "groupe (habituellement de personnes)",
			summary: "Afficher la classification des actions par groupe",
			points: ["Appliquer l'un des groupes configurés dans Basic.", "Une liste d'actions s'affiche dans l'ordre des groupes configurés."],
			links: { general: "général" },
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
			links: { property: "propriété" },
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Conditions Nécessaires à l'exécution de l'Action." },
		seconds: {
			title: "Temps [secondes].",
			summary: "Temps typique nécessaire à la réalisation de l'Action",
			points: ["Le temps standard (en secondes) nécessaire pour effectuer une action une fois.", "Pour les types `stamina`, il s'agit de l'intervalle de temps pour un tour (une réduction de l'endurance de l'autre).", "L'exécution réelle variera en raison des calculs de propriétés."],
			links: { property: "propriété" },
		},
		experience: {
			title: "Expérience [niveau suivant à 100].",
			summary: "Expérience acquise dans le cadre d'actions réussies",
			points: ["Expérience standard acquise en effectuant une action une fois et avec succès ; 100 équivaut à un niveau d'expérience.", "En cas de combat, il est conseillé d'en configurer davantage, car il est acquis lorsque l'adversaire est gagné.", "L'exécution réelle variera en raison des calculs de propriétés."],
			links: { property: "propriété" },
		},
		chance: {
			title: "Probabilité de succès [0-1].",
			summary: "Probabilité de succès à l'issue de l'action",
			points: ["La probabilité de succès à l'issue de l'action.", "Réussit toujours si `1`, échoue toujours si `0`.", "En cas d'échec, des objets consommables sont consommés, mais aucune récompense ou expérience n'est acquise.", "L'exécution réelle variera en raison des calculs de propriétés."],
		},
		maximum: {
			title: "Nombre max. de passages [fois].",
			summary: "Nombre max. de fois qu'une action peut être réalisée.",
			points: ["Le nombre haut de fois qu'une action peut être comptée avec succès.", "Illimité pour `0`.", "Lorsque la limite haute est atteinte, l'Action n'est plus exécutable."],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Récompense pour l'acquisition d'une action réussie." },
		progressType: {
			title: "Type de progrès",
			summary: "Type d'exécution de l'action",
			points: ["Il en existe quatre types."],
			list: [
				["Type", "détails de l'opération", "endurance", "Exemple."],
				["`persistant`.", "Il s'agit d'un type d'action qui se répète continuellement ; vous gagnez de l'expérience et des valeurs pour chaque action accomplie.", "Aucune relation", "Exploitation forestière, mines, pêche"],
				["`single`.", "Effectuer une action à la fois. En cas d'interruption, le progrès est sauvegardé et peut être repris la prochaine fois. Une fois l'action terminée, l'utilisateur appuie sur l'Action de confirmation pour recevoir le résultat.", "Aucune relation", "Ouvrir des coffres au trésor, acquérir des compétences par la lecture"],
				["`snap`.", "Ce type d'action est réalisé instantanément. Réalisée immédiatement sans aucun temps mort.", "Aucune relation", "Échanger, utiliser des objets."],
				["`stamina`.", "Chaque temps requis diminue l'endurance respective du joueur et de l'adversaire. Lorsque l'endurance de l'adversaire est épuisée, le joueur gagne de l'expérience et des valeurs. Lorsque l'endurance du joueur est épuisée, le jeu est terminé et toutes les actions en cours sont interrompues.", "Pertinent.", "Combat, opérations dangereuses."],
			],
		},
		property: combat,
	},
	options: {
		label: "action",
	},
};

export const category: Type.Category = {
	title: "Catégorie.",
	summary: "Cadre général pour la classification des actions et des objets.",
	points: ["Représente un classement majeur.", "Par exemple, il peut être configuré dans n'importe quel état d'esprit, comme la courte portée, la longue portée, la magie, les donjons, les forges, les manufactures, etc.", "Les actions et les objets sont placés directement sous le monde et sont associés à un ID de catégorie."],
	children: {
		information: information,
		group: {
			title: "groupe (habituellement de personnes)",
			summary: "Classification des catégories par groupe d'affichage",
			points: ["Appliquer l'un des groupes configurés dans Basic.", "Une liste de catégories s'affiche dans l'ordre des groupes configurés."],
			links: { general: "général" },
		},
		unlocked: {
			title: "État de déblocage initial",
			summary: "État initial d'affichage et de libération de l'élément (passe automatiquement à l'état haut lorsque les conditions d'activation sont remplies)",
			points: ["secreted : Ne s'affiche en aucun cas dans l'interface utilisateur tant que toutes les conditions ne sont pas remplies (il n'apparaît pas dans les indices et est masqué dans la liste des conditions et des récompenses).", "hidden : Il est entièrement masqué tant qu'aucun élément de libération ne le référence et que les conditions requises ne sont pas remplies (son nom est grisé et il est inactif).", "hinted (par défaut) : seul le nom s'affiche en avant-première, mais il n'est pas possible d'interagir avec cet élément tant qu'il n'est pas disponible.", "released : Disponible et utilisable dès le début, quelles que soient les conditions (anciennement « Afficher dès le début »)."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Exigences pour l'utilisation de la Catégorie." },
		equipmentGroups: {
			title: "groupe d'équipement",
			summary: "Désignation des groupes d'objets qu'il est possible d'équiper dans cette Catégorie.",
			points: ["Liste des noms de groupes d'objets pouvant être équipés dans cette Catégorie.", "Seuls les objets du groupe correspondant au nom de groupe spécifié ici peuvent être équipés.", "Si une chaîne vide est spécifiée, les objets dont le groupe n'est pas configuré (vide) deviennent éligibles à l'équipement.", "Un seul objet peut être équipé dans le même groupe. Lorsque vous équipez un nouvel Objet, tout équipement existant dans le même groupe est automatiquement déséquipé.", "Si la liste est vide (0 pièce), rien ne peut être équipé."],
			links: { general: "général" },
		},
		numeric: {
			title: "Disponibilité des niveaux",
			summary: "Disponibilité des fonctions de niveau Catégorie",
			points: ["Il s'agit d'un indicateur permettant de savoir si cette catégorie a un niveau ou non.", "S'il est activé, il a un niveau ; s'il est désactivé, il n'en a pas.", "Par exemple, vous pouvez activer les catégories basées sur l'expérience, telles que l'épée et la magie, et désactiver les catégories basées sur l'emplacement, telles que les donjons et les forgerons."],
		},
		standaloneProgress: {
			title: "en progrès simultanés",
			summary: "Configuration de l'exécution en parallèle avec d'autres Catégories",
			points: ["Il s'agit d'un indicateur permettant de savoir si les actions de cette Catégorie peuvent progresser en parallèle avec des actions d'autres catégories.", "Si elle est activée, l'action peut progresser simultanément et indépendamment d'autres catégories d'actions.", "Si elle est désactivée, elle ne peut pas être exécutée simultanément avec des actions dans d'autres catégories qui sont également configurées sur désactivé. Lorsque vous commencez une nouvelle action dans cette Catégorie, les actions en cours dans d'autres catégories non autonomes sont automatiquement interrompues."],
		},
		background: {
			title: "arrière-plan",
			summary: "Configurations d'arrière-plan propres à chaque catégorie",
			points: ["Configure l'arrière-plan de cette Catégorie.", "Lorsqu'une catégorie est sélectionnée, l'image de fond change en même temps qu'elle.", "Si cette option n'est pas configurée, la configuration de l'arrière-plan du monde est utilisée telle quelle."],
		},
	},
	options: {
		label: "catégorie",
	},
};

export const type: Markdown = {
	title: "Type",
	summary: "Classification de base des mondes",
	points: ["Les mondes sont de six types.", "Tous les éléments sont placés directement sous le monde.", "Les actions et les objets sont associés à l'ID de la Catégorie à laquelle ils appartiennent."],
	list: expandList("Type", [category, action, item, group, task, preset]),
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
		label: "développement",
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
		label: "conception",
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
			links: { translation: "la traduction" },
		},
		offlineMaxHours: {
			title: "Temps max. désactivé [heures].",
			summary: "Délais pour le progrès désactivé.",
			points: ["Configuration du nombre max. d'heures de progrès lorsque l'appareil est désactivé.", "Par exemple, si 6 heures est défini, le processus de retour désactivé jusqu'à 6 heures sera traité, mais si plus de temps est accordé pour le retour désactivé, le temps de désactivation sera traité comme 6 heures.", "Si le nombre de temps est fixé à 0, aucun traitement n'a lieu lors du retour désactivé.", "La valeur max. est de 24 heures."],
			links: { category: "catégorie" },
		},
		maxCategoryLevels: {
			title: "Niveau max de la Catégorie",
			summary: "Niveau haut pour chaque Catégorie.",
			points: ["Configurer le niveau max pour chaque Catégorie.", "Si l'expérience est acquise au-delà de ce niveau, le niveau max fixé ici est utilisé dans le calcul de chaque propriété.", "Cette valeur n'est pas relationnelle pour les catégories sans niveau."],
			links: { category: "catégorie" },
		},
		locking: {
			title: "fonction verrouillée",
			summary: "Cacher des éléments jusqu'à ce que les exigences soient satisfaites",
			points: ["Si cette option est activée, l'Objet de l'action de catégorie est masqué tant qu'il n'a jamais été utilisé ou possédé et que les conditions requises n'ont pas été remplies.", "S'il est désactivé, tous les éléments sont affichés dès le début, mais ne peuvent être exécutés ou équipés tant que les conditions requises ne sont pas remplies."],
			links: { category: "catégorie", action: "action", item: "article" },
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
			links: { information: "l'information", item: "article" },
		},
		capacity: {
			title: "capacité",
			summary: "Configuration de la capacité d'inventaire.",
			points: ["Compte le haut nombre de types d'objets différents qu'un joueur peut avoir.", "Chaque objet est contrôlé par le nombre de types d'objets que vous possédez, et non par le nombre d'objets que vous comptez.", "En fixant la valeur de `initialCount` à 0, on obtient une capacité illimitée.", "Lorsqu'il est fait référence aux objets de capacité dans les conditions ou les récompenses, il convient d'utiliser l'ID configuré ici."],
			children: {
				information: information,
				initialCount: {
					title: "Valeur par défaut [pcs].",
					summary: "Capacité initiale de l'inventaire (nombre d'objets différents pouvant être conservés)",
					points: ["Capacité initiale (nombre d'objets différents pouvant être possédés) au début du jeu.", "Si `0` est défini, la capacité est illimitée."],
				},
				initialCost: {
					title: "Prix de base [pièces].",
					summary: "Prix initial pour une capacité supplémentaire.",
					points: ["Prix de base (en pièces) pour augmenter la capacité de l'inventaire d'un emplacement.", "Le prix réel est calculé comme suit : \"prix de base x pourcentage d'augmentation ^ nombre de fois compté\".", "Exemple : prix de base 100, taux d'augmentation 1,2, première 100 pièces, deuxième 120 pièces, troisième 144 pièces."],
				},
				increasingRate: {
					title: "Pourcentage d'augmentation [fois].",
					summary: "Augmentation en pourcentage des coûts d'expansion de la capacité",
					points: ["Il s'agit d'un multiplicateur qui indique de combien le coût de l'expansion des capacités augmente avec le nième achat.", "Pour `1.0` le prix est toujours le même, pour `1.2` le prix est 20% plus élevé à chaque fois qu'il est acheté.", "Formule : prix de base x pourcentage d'augmentation ^ nombre de fois achetées"],
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
			links: { item: "article" },
		},
		queue: {
			title: "Queue",
			summary: "Configuration du nombre de créneaux pour l'exécution en série (programmation) des actions",
			points: [
				"Permet de gérer le nombre de créneaux disponibles pour l'exécution en série (programmation) d'actions.",
				"Tout comme la capacité, le nombre d'emplacements peut être acheté avec de la monnaie, mais il est également possible d'augmenter le nombre d'objets dans la file d'attente en les sélectionnant comme récompenses d'actions ou d'événements.",
				"Lorsque vous faites référence à un objet de la file d'attente dans les conditions ou les récompenses, veuillez utiliser l'ID configuré ici.",
			],
			children: {
				information: information,
				initialCount: {
					title: "Valeur par défaut [pcs].",
					summary: "Nombre de cases d'exécution consécutives pour commencer la partie",
					points: ["Il s'agit du nombre de créneaux de réservation disponibles au début de la partie qui commence.", "La valeur minimale est `1` (il n'y a pas de traitement de type `0` = illimité, comme pour la capacité)."],
				},
				initialCost: {
					title: "Prix de base [pièces].",
					summary: "Prix de départ pour ajouter un emplacement",
					points: ["Il s'agit du prix de base (en pièces) pour ajouter un emplacement supplémentaire à la série d'exécutions.", "Le prix réel est calculé comme suit : \"prix de base x pourcentage d'augmentation ^ nombre de fois compté\".", "Exemple : prix de base 100, taux d'augmentation 1,2, première 100 pièces, deuxième 120 pièces, troisième 144 pièces."],
				},
				increasingRate: {
					title: "Pourcentage d'augmentation [fois].",
					summary: "Taux de croissance des coûts liés à l'extension des capacités",
					points: ["Il s'agit du coefficient indiquant dans quelle mesure le coût de l'extension de l'espace augmente lors du n-ième achat.", "Pour `1.0` le prix est toujours le même, pour `1.2` le prix est 20% plus élevé à chaque fois qu'il est acheté.", "Formule : prix de base x pourcentage d'augmentation ^ nombre de fois achetées"],
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
			links: { item: "article" },
		},
		levelCommonRatio: {
			title: "Taux de haut de l'expérience [fois].",
			summary: "Augmentation en pourcentage de la difficulté du niveau.",
			points: ["Plus le niveau d'une catégorie est élevé, plus le taux d'augmentation de l'expérience requise pour atteindre le niveau suivant est élevé.", "En augmentant cette valeur, vous augmentez le niveau de difficulté.", "Le nombre de points d'expérience nécessaires pour passer au niveau suivant est égal à (taux d'augmentation des points d'expérience)^(niveau actuel - 1)."],
			list: [
				["Taux d'augmentation de l'expérience", "Lv.1", "Lv.2", "Lv.10", "Lv.50", "Lv.99."],
				["0", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
				["0.02", "x1.00", "x1.02", "x1.22", "x2.69", "x5.52"],
				["0.05", "x1.00", "x1.05", "x1.55", "x11.47", "x131.50"],
				["0.10", "x1.00", "x1.10", "x2.36", "x117.39", "x5.7×10⁴"],
				["0.20", "x1.00", "x1.20", "x6.19", "x3,3 x 10³", "x1,3 x 10¹¹"],
			],
			links: { category: "catégorie" },
		},
		actionLevelLimit: {
			title: "restriction du niveau d'action",
			summary: "Demande le nombre de fois où la même action d'attribut a été exécutée pour l'exécution d'une action.",
			points: ["Si cette option est activée, le nombre de fois qu'une action ayant les mêmes attributs a été exécutée est automatiquement ajouté aux conditions d'exécution de chaque action.", "Le nombre de fois compté est égal à la valeur du niveau de l'Action.", "Si aucun attribut n'est configuré, c'est l'ID de la catégorie à laquelle il appartient qui est utilisé."],
		},
		defaultCombat: { ...combat, summary: "Paramètres de combat par défaut communs à toutes les Actions.", points: ["Valeurs de correction de base pour le combat qui s'appliquent à toutes les actions de type `stamina` en commun.", "La valeur de combat (propriété) de chaque Action est ajoutée à cette valeur par défaut."], links: { action: "action" } },
	},
	options: {
		label: "général",
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
		label: "vue d'ensemble",
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
			title: "Catégorie.",
			summary: "Nous ne l'utiliserons pas lors de l'événement",
			points: ["Comme cela n'apparaît pas dans la liste des missions et des tâches, je ne précise pas la catégorie à laquelle cela appartient.", "Dans l'éditeur, le champ de saisie n'apparaît pas."],
		},
		timing: {
			title: "timing",
			summary: "Moment où l'événement se déclenche (fixe)",
			points: timingPoints,
		},
		unlocked: {
			title: "État d'affichage initial",
			summary: "État d'affichage initial de l'icône d'événement (le déclenchement dépend du moment choisi ; avec cette configuration, l'événement ne se déclenche pas)",
			points: ["Les conditions de déclenchement de l'événement sont déterminées par le timing ; ce paramètre n'a d'incidence que sur l'apparence de l'icône.", "secreted : L'icône ne s'affiche pas tant que toutes les conditions ne sont pas remplies (le déclenchement lui-même se produit au moment prévu).", "hidden・hinted : l'icône est barrée et s'affiche comme non débloquée.", "« released » : la ligne oblique disparaît et l'élément s'affiche comme « libéré »."],
		},
		requirements: {
			title: "conditions générales",
			summary: "Conditions d'acquisition de la rémunération",
			points: ["Lorsque la condition est remplie, l'événement se déclenche et un écran dédié s'ouvre pour afficher son contenu.", "La récompense n'est acquise que si la configuration définie ici est remplie au moment du déclenchement.", "Si aucune configuration n'est définie, vous acquérez une récompense à chaque fois que l'effet se déclenche."],
			children: requirement.children,
		},
		acquisitions: {
			title: "récompense",
			summary: "Configuration des récompenses lorsque l'événement est déclenché.",
			points: ["Il s'agit d'une récompense obtenue lorsque le timing est respecté et que les conditions sont remplies.", "Contrairement aux tâches, il n'est pas nécessaire de les accepter : les acquisitions se font automatiquement dès leur déclenchement.", "Il est possible de définir une valeur moins pour la quantité. Par exemple, si vous attribuez une valeur moins à la quantité d'objets en cas de jeu terminé, vous les perdrez."],
			children: acquisition.children,
		},
		group: {
			title: "groupe de travail",
			summary: "Nous ne l'utiliserons pas lors de l'événement",
			points: ["Comme rien n'apparaît dans la liste des missions et des tâches, nous n'utilisons pas la désignation de groupe.", "Dans l'éditeur, le champ de saisie n'apparaît pas."],
		},
	},
});

export const event: Type.Events = {
	title: "Événement",
	summary: "Messages et récompenses déclenchés à des moments précis",
	points: ["Elle s'active à des moments précis, par exemple lorsque vous accédez à un monde pour la première fois ou lorsque vous terminez le jeu, et ouvre un écran dédié.", "Il y en a un par moment, et il n'est pas possible d'en ajouter ni d'en supprimer. Laissez le champ vide pour les moments où vous ne l'utilisez pas.", "Elles n'apparaissent pas dans la liste des missions ou des tâches. Les éléments qui sont considérés comme accomplis dès que les conditions sont remplies doivent être configurés en tant que tâches.", "La récompense est automatiquement acquise dès son déclenchement. Il n'y a ni opération de réception, ni ruban, comme c'est le cas pour les tâches.", "Il peut modifier le niveau de la catégorie, le nombre d'actions effectuées et le nombre d'objets possédés lorsqu'il est activé.", "Si vous ne renseignez pas les champs « Nom », « Description » et « Icône », le texte et l'icône par défaut intégrés au joueur seront utilisés."],
	list: [
		["timing", "condition d'activation", "répéter"],
		["`revenu`.", "Lorsqu'une personne revient d'une situation désactivée pendant plus d'une seconde et qu'une action est en cours.", "souvent"],
		["`gameovered`.", "Lorsque l'endurance du joueur s'épuise au cours d'un combat.", "souvent"],
		["`accueillis`.", "Quand j'ai commencé ce monde.", "une seule fois"],
		["`completed`.", "Lorsque le niveau maximum de toutes les catégories (maxCategoryLevels) est atteint.", "une seule fois"],
		["`obtained`", "lorsque vous avez terminé ou vérifié une action d'un type spécifique (coffre au trésor, etc.)", "souvent"],
	],
	links: { task: "tâche" },
	children: {
		comebacked: toFixedEvent("Au moment du retour", "Se déclenche lors du retour en ligne", ["Cette fonction se déclenche lorsque vous revenez en ligne après avoir été hors ligne pendant plus de deux secondes et qu'une action est en cours.", "Ces informations s'affichent en même temps que le récapitulatif des progrès réalisés pendant votre absence."], ["Il est défini sur « `comebacked` » et ne peut pas être modifié.", "Cette capacité se déclenche à chaque fois que vous revenez au combat, autant de fois que nécessaire."]),
		gameovered: toFixedEvent("En cas de jeu terminé", "Se déclenche lorsque l'endurance est épuisée au combat", ["Cette capacité se déclenche lorsque l'endurance du joueur est épuisée au cours d'un combat.", "En attribuant une valeur négative à la quantité de récompenses, vous pouvez faire en sorte que cela entraîne la fin du jeu."], ["La valeur est fixée à « gameovered » et ne peut pas être modifiée.", "Cette fonction se déclenche à chaque fois que le jeu est terminé, autant de fois que vous le souhaitez."]),
		welcomed: toFixedEvent("Au premier démarrage, commencez", "Se déclenche lors de la première ouverture du monde", ["Cette fonction s'active lors du premier démarrage de ce monde.", "Cela sert à expliquer l'univers du jeu et à remettre les objets de départ aux joueurs lorsqu'ils commencent la partie."], ["Il est défini sur « welcomed » et ne peut pas être modifié.", "Cette fonction ne s'active qu'une seule fois, lors du premier démarrage."]),
		completed: toFixedEvent("Une fois le jeu terminé", "Se déclenche lorsque toutes les catégories ont atteint leur niveau max", ["Cette fonction se déclenche lorsque le niveau de toutes les catégories atteint la valeur maximale (maxCategoryLevels).", "Les catégories qui ne sont pas de type « numeric » (numérique) sont exclues de l'évaluation."], ["Il est défini sur « completed » et ne peut pas être modifié.", "Elle ne se déclenche qu'une seule fois lorsque les conditions sont remplies."]),
		obtained: toFixedEvent("À la fin d'une action ponctuelle", "Se déclenche lorsque vous terminez une action ponctuelle, comme ouvrir un coffre au trésor", ["Elle se déclenche lorsque vous terminez ou vérifiez une action de type « single » (comme un coffre au trésor, etc.).", "En plus de la récompense liée à l'action elle-même, vous pouvez ajouter la récompense de configuration définie ici."], ["Il est fixé sur « obtained » et ne peut pas être modifié.", "Elle se déclenche autant de fois que vous le souhaitez à chaque fois que vous terminez une action ponctuelle."]),
	},
	options: {
		label: "événement",
	},
};

export const basic: Type.Basic = {
	title: "configuration de base",
	summary: "Éléments de configuration de base pour le monde en général.",
	points: ["Configurez le nom du monde, sa description, son arrière-plan, sa monnaie, sa capacité, le niveau max des catégories, le taux de montée en expérience, le taux de remise, les paramètres de combat standard, etc.", "Ces configurations affectent le monde entier."],
	list: expandList("nom", [overview, general, design, event, development]),
	children: {
		overview: overview,
		general: general,
		design: design,
		events: event,
		development: development,
	},
	options: {
		label: "de base",
		linkedList: true,
	},
};

// world


export const world: Type.World = {
	title: "monde",
	summary: "Configuration générale du monde du jeu et structure des données",
	points: ["Données sur les jeux pouvant être joués sur des consoles.", "Les configurations vous permettent de créer un jeu d'abandon comme vous le souhaitez.", "Les mondes englobent les catégories, les actions, les objets et les événements."],
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
		label: "monde",
	},
};

// editor

export const editor: Markdown = {
	title: "éditeur",
	summary: "Explications sur l'utilisation de l'éditeur et la structure des mondes.",
	list: expandList("nom", [world, basic, type, component, miscellaneous]),
	options: {
		label: "éditeur",
		linkedList: true,
		directory: "éditeur",
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
