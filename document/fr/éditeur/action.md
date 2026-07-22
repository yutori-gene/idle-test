
# Action
Des éléments d'action tels que la collecte, la fabrication et le combat.
- Il s'agit d'éléments qui représentent des agissements tels que la collecte, la fabrication, l'achat et la vente et le combat.
- À chaque action que vous accomplissez, vous gagnez de l'expérience et votre niveau monte.
- Vous pouvez configurer des objets à consommer ou à obtenir pour chaque action.
- Il existe plusieurs types de modèles d'agissements.
___

## [_l'information_](fr/éditeur/l'information)
___

## Catégorie.
ID de la catégorie à laquelle appartient l'Action
- Indiquez l'ID de la catégorie à laquelle cette Action appartient.
___

## attribut
Catégories d'attributs propres à l'Action
- Des attributs individuels (catégories) peuvent être configurés.
- Si elle n'est pas renseignée, la catégorie à laquelle elle appartient est reprise
- Par exemple, si vous configurez l'attribut Magie pour une action appartenant individuellement à la catégorie Château du démon, le niveau et les propriétés de la catégorie Magie seront calculés et appliqués au temps d'exécution et aux dégâts de l'action.
- [_category_](fr/éditeur/catégorie)
___

## groupe (habituellement de personnes)
Afficher la classification des actions par groupe
- Appliquer l'un des groupes configurés dans Basic.
- Une liste d'actions s'affiche dans l'ordre des groupes configurés.
- [_general_](fr/éditeur/général)
___

## État de déblocage initial
État initial d'affichage et de libération de l'élément (passe automatiquement à l'état haut lorsque les conditions d'activation sont remplies)
- secreted : Ne s'affiche en aucun cas dans l'interface utilisateur tant que toutes les conditions ne sont pas remplies (il n'apparaît pas dans les indices et est masqué dans la liste des conditions et des récompenses).
- hidden : Il est entièrement masqué tant qu'aucun élément de libération ne le référence et que les conditions requises ne sont pas remplies (son nom est grisé et il est inactif).
- hinted (par défaut) : seul le nom s'affiche en avant-première, mais il n'est pas possible d'interagir avec cet élément tant qu'il n'est pas disponible.
- released : Disponible et utilisable dès le début, quelles que soient les conditions (anciennement « Afficher dès le début »).
___

## niveau
Niveau de difficulté de l'Action.
- Le niveau de difficulté de l'action est indiqué par le niveau.
- Calculer chaque propriété au moment de l'exécution par rapport au niveau du joueur.
- Par exemple, l'exécution d'une Action d'un niveau supérieur au vôtre aura un taux de succès bas.
- Si les conditions sont remplies, l'exécution peut avoir lieu même si le niveau du joueur est inférieur à cette valeur.
- [_property_](fr/éditeur/propriété)
___

## [_conditions générales_](fr/éditeur/exigence)
___

## Temps [secondes].
Temps typique nécessaire à la réalisation de l'Action
- Le temps standard (en secondes) nécessaire pour effectuer une action une fois.
- Pour les types `stamina`, il s'agit de l'intervalle de temps pour un tour (une réduction de l'endurance de l'autre).
- L'exécution réelle variera en raison des calculs de propriétés.
- [_property_](fr/éditeur/propriété)
___

## Expérience [niveau suivant à 100].
Expérience acquise dans le cadre d'actions réussies
- Expérience standard acquise en effectuant une action une fois et avec succès ; 100 équivaut à un niveau d'expérience.
- En cas de combat, il est conseillé d'en configurer davantage, car il est acquis lorsque l'adversaire est gagné.
- L'exécution réelle variera en raison des calculs de propriétés.
- [_property_](fr/éditeur/propriété)
___

## Probabilité de succès [0-1].
Probabilité de succès à l'issue de l'action
- La probabilité de succès à l'issue de l'action.
- Réussit toujours si `1`, échoue toujours si `0`.
- En cas d'échec, des objets consommables sont consommés, mais aucune récompense ou expérience n'est acquise.
- L'exécution réelle variera en raison des calculs de propriétés.
___

## Nombre max. de passages [fois].
Nombre max. de fois qu'une action peut être réalisée.
- Le nombre haut de fois qu'une action peut être comptée avec succès.
- Illimité pour `0`.
- Lorsque la limite haute est atteinte, l'Action n'est plus exécutable.
___

## [_acquisitions_](fr/éditeur/acquisition)
___

## Type de progrès
Type d'exécution de l'action
- Il en existe quatre types.

|Type|détails de l'opération|endurance|Exemple.|
|-|-|-|-|
|`persistant`.|Il s'agit d'un type d'action qui se répète continuellement ; vous gagnez de l'expérience et des valeurs pour chaque action accomplie.|Aucune relation|Exploitation forestière, mines, pêche|
|`single`.|Effectuer une action à la fois. En cas d'interruption, le progrès est sauvegardé et peut être repris la prochaine fois. Une fois l'action terminée, l'utilisateur appuie sur l'Action de confirmation pour recevoir le résultat.|Aucune relation|Ouvrir des coffres au trésor, acquérir des compétences par la lecture|
|`snap`.|Ce type d'action est réalisé instantanément. Réalisée immédiatement sans aucun temps mort.|Aucune relation|Échanger, utiliser des objets.|
|`stamina`.|Chaque temps requis diminue l'endurance respective du joueur et de l'adversaire. Lorsque l'endurance de l'adversaire est épuisée, le joueur gagne de l'expérience et des valeurs. Lorsque l'endurance du joueur est épuisée, le jeu est terminé et toutes les actions en cours sont interrompues.|Pertinent.|Combat, opérations dangereuses.|
___

## [_valeur de combat_](fr/éditeur/combat)