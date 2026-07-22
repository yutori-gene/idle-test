import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Langue.",
	summary: "Changer de langue",
	points: ["Permet de changer la langue affichée dans le jeu.", "Valable uniquement si l'auteur a fourni une traduction."],
	options: {
		preset: "langue",
	},
};

export const event: Markdown = {
	title: "Événement",
	summary: "Systèmes basés sur l'état.",
	points: ["Déclenché lorsque les conditions sont remplies.", "Des messages s'affichent lorsqu'ils sont activés, des objets sont donnés ou réduits, etc."],
	options: {
		preset: "événement",
		label: "événement",
	},
};

export const miscellaneous: Markdown = {
	title: "informations complémentaires",
	summary: "Autres informations complémentaires expliquées.",
	children: { event: event, language: language },
	options: {
		preset: "divers",
		label: "divers",
	},
};

// world

export const debug: Markdown = {
	title: "déboguer",
	summary: "Opération pour les contrôles de débogage",
	points: ["Uniquement visible pendant le débogage.", "Il n'est pas affiché lorsque le jeu est publié et distribué."],
	options: {
		preset: "débogage",
	},
};

export const config: Markdown = {
	title: "configuration",
	summary: "Modifier les configurations du jeu",
	points: ["Permet de configurer les paramètres liés à l'affichage et au traitement des jeux.", "Les données de jeu peuvent également être entrées, sorties et réinitialisées."],
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "statistiques",
	summary: "Résumé des progrès accomplis",
	points: ["Vous pouvez consulter les progrès réalisés jusqu'à présent."],
	options: {
		preset: "statistiques",
	},
};

export const general: Markdown = {
	title: "général",
	summary: "Configurations spécifiques au monde",
	points: ["Vous pouvez vérifier le niveau de difficulté et les configurations spécifiques à ce monde."],
	options: {
		preset: "général",
	},
};

export const overview: Markdown = {
	title: "Aperçu.",
	summary: "A propos de ce jeu.",
	points: ["Découvrez le monde du jeu (vision du monde et configuration).", "Vous pouvez également obtenir des informations sur la console (système) sur laquelle tourne ce jeu."],
	options: {
		preset: "vue d'ensemble",
	},
};

export const world: Markdown = {
	title: "monde",
	summary: "Vous pouvez utiliser et vérifier les commandes et configurations générales du jeu,",
	children: { overview: overview, general: general, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "monde",
		label: "monde",
	},
};

// property

export const correction: Markdown = {
	title: "Corrections de propriétés.",
	summary: "Détails des corrections apportées aux propriétés.",
	points: ["Vous pouvez vérifier les corrections pour des propriétés spécifiques dans cette Catégorie.", "La correction est due à l'effet de l'Objet. Vous pouvez vérifier l'Objet."],
	options: {
		preset: "correction",
	},
};

export const properties: Markdown = {
	title: "propriétés",
	summary: "Liste des valeurs de correction",
	points: ["Liste des propriétés configurées pour chaque Catégorie.", "Les propriétés sont des éléments qui affectent l'exécution des actions.", "L'efficacité est corrigée par l'équipement de l'Objet. (Certains objets n'ont pas besoin d'être Inutiles)."],
	options: {
		preset: "propriétés",
	},
};

export const property: Markdown = {
	title: "propriétés",
	summary: "Vérification des valeurs de correction",
	points: ["Les propriétés sont des éléments qui affectent l'exécution des actions.", "Le chiffre final est calculé à partir de la valeur initiale attribuée, en tenant compte du niveau de la Catégorie, du niveau fixé pour l'Action et de la correction pour l'Objet équipé."],
	children: { properties: properties, correction: correction },
	list: expandList("propriété", [properties, correction]),
	links: {
		properties: "joueurs/propriétés.",
		correction: "joueur/correction",
	},
	options: {
		label: "propriété",
		preset: "propriété",
	},
};

// item

export const trade: Markdown = {
	title: "transactions",
	summary: "Acheter ou vendre des objets en monnaie.",
	points: ["Certains objets ne peuvent être ni achetés ni vendus.", "Les objets verrouillés ne peuvent être ni achetés ni vendus.", "Il arrive que la capacité ou le nombre de créneaux de réservation (file d'attente) soit soumis à une limite maximale d'achats ; une fois cette limite atteinte, il n'est plus possible d'effectuer d'autres achats. (Les augmentations obtenues grâce aux récompenses ne sont pas prises en compte dans cette limite.)"],
	options: {
		preset: "commerce",
	},
};

export const items: Markdown = {
	title: "Objet.",
	summary: "Liste des objets de la catégorie.",
	points: ["Maintenez cette touche enfoncée pour passer d'un objet d'équipement à l'autre.", "Un seul Objet de la liste peut être équipé. (s'il est configuré pour être équipé en tant que Catégorie).", "Les objets qui ne remplissent pas les conditions de libération sont verrouillés et ne peuvent pas être consultés en détail."],
	options: {
		preset: "articles",
	},
};

export const item: Markdown = {
	title: "Objet",
	summary: "Détails de l'objet.",
	points: ["Les objets sont des éléments liés à la propriété d'objets tels que les équipements, les consommables et les objets de valeur.", "Il n'est possible d'équiper qu'un seul Objet d'une Catégorie. (S'il est configuré pour être équipé en tant que catégorie)", "Les objets qui ne remplissent pas les conditions de libération sont verrouillés et ne peuvent pas être consultés en détail."],
	children: { items: items, trade: trade },
	options: {
		preset: "article",
		label: "article",
	},
};

// action

export const act: Markdown = {
	title: "Agir.",
	summary: "Contrôle des actions",
	points: ["Commencer ou arrêter l'action.", "Vous pouvez compter le nombre d'exécutions. Entrez 0 pour exécuter jusqu'à ce que la ressource soit épuisée."],
	options: {
		preset: "acte",
	},
};

export const actions: Markdown = {
	title: "Action.",
	summary: "Liste des actions dans la Catégorie",
	points: ["Une pression longue permet de basculer l'exécution de l'action.", "Un seul Objet d'une Catégorie peut être exécuté.", "Certaines catégories permettent de faire progresser simultanément des actions dans plusieurs catégories.", "Les actions qui ne remplissent pas les conditions de libération sont verrouillées et ne peuvent pas être consultées en détail."],
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Action",
	summary: "Des éléments d'action tels que la collecte, la fabrication et le combat.",
	points: ["Vous pouvez gagner de l'expérience pour chaque action, ce qui augmente votre niveau.", "Chaque action consomme ou obtient un Objet.", "Les actions qui ne remplissent pas les conditions de libération sont verrouillées et ne peuvent pas être consultées en détail."],
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const category: Markdown = {
	title: "Catégorie.",
	summary: "Une compilation de divers éléments.",
	points: ["Il s'agit d'un élément qui regroupe les actions et les objets."],
	options: {
		label: "catégorie",
		preset: "catégorie",
	},
};

// character
export const status: Markdown = {
	title: "Statut.",
	summary: "Liste de toutes les propriétés",
	points: ["Seules les valeurs de correction de catégorie par Objet sont affichées.", "En fonction de l'action à effectuer, d'autres corrections sont possibles."],
	options: {
		preset: "statut",
	},
};

export const inventory: Markdown = {
	title: "inventaire",
	summary: "Liste de tous les objets",
	points: ["Maintenez cette touche enfoncée pour passer d'un objet d'équipement à l'autre."],
	options: {
		preset: "inventaire",
	},
};

export const activity: Markdown = {
	title: "activité",
	summary: "Liste de toutes les actions",
	points: ["Une pression longue permet de basculer l'exécution de l'action."],
	options: {
		preset: "activité",
	},
};

export const character: Markdown = {
	title: "personnage",
	summary: "Identification et exploitation de la situation du protagoniste.",
	points: ["Ce contenu est identique à celui qui s'affiche en actionnant la Catégorie."],
	children: { activity: activity, inventory: inventory, status: status },
	options: {
		label: "caractère",
		preset: "caractère",
	},
};

export const player: Markdown = {
	title: "joueur",
	summary: "Le jeu est expliqué pour chaque colonne qui apparaît dans Jouer au jeu.",
	points: ["Par défaut, la même description apparaît sous forme d'indice au bas de chaque colonne.", "Les Indices peuvent être masqués par configuration."],
	list: expandList("joueur", [character, category, action, item, property, world, miscellaneous]),
	// children: { character: character, category: category, action: action, item: item, property: property, world: world, miscellaneous: miscellaneous },
	options: {
		preset: "joueur",
		label: "joueur",
		linkedList: true,
		directory: "joueur",
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
