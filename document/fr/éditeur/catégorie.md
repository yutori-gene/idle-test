
# Catégorie.
Cadre général pour la classification des actions et des objets.
- Représente un classement majeur.
- Par exemple, il peut être configuré dans n'importe quel état d'esprit, comme la courte portée, la longue portée, la magie, les donjons, les forges, les manufactures, etc.
- Les actions et les objets sont placés directement sous le monde et sont associés à un ID de catégorie.
___

## [_l'information_](fr/éditeur/l'information)
___

## groupe (habituellement de personnes)
Classification des catégories par groupe d'affichage
- Appliquer l'un des groupes configurés dans Basic.
- Une liste de catégories s'affiche dans l'ordre des groupes configurés.
- [_general_](fr/éditeur/général)
___

## État de déblocage initial
État initial d'affichage et de libération de l'élément (passe automatiquement à l'état haut lorsque les conditions d'activation sont remplies)
- secreted : Ne s'affiche en aucun cas dans l'interface utilisateur tant que toutes les conditions ne sont pas remplies (il n'apparaît pas dans les indices et est masqué dans la liste des conditions et des récompenses).
- hidden : Il est entièrement masqué tant qu'aucun élément de libération ne le référence et que les conditions requises ne sont pas remplies (son nom est grisé et il est inactif).
- hinted (par défaut) : seul le nom s'affiche en avant-première, mais il n'est pas possible d'interagir avec cet élément tant qu'il n'est pas disponible.
- released : Disponible et utilisable dès le début, quelles que soient les conditions (anciennement « Afficher dès le début »).
___

## [_conditions générales_](fr/éditeur/exigence)
___

## groupe d'équipement
Désignation des groupes d'objets qu'il est possible d'équiper dans cette Catégorie.
- Liste des noms de groupes d'objets pouvant être équipés dans cette Catégorie.
- Seuls les objets du groupe correspondant au nom de groupe spécifié ici peuvent être équipés.
- Si une chaîne vide est spécifiée, les objets dont le groupe n'est pas configuré (vide) deviennent éligibles à l'équipement.
- Un seul objet peut être équipé dans le même groupe. Lorsque vous équipez un nouvel Objet, tout équipement existant dans le même groupe est automatiquement déséquipé.
- Si la liste est vide (0 pièce), rien ne peut être équipé.
- [_general_](fr/éditeur/général)
___

## Disponibilité des niveaux
Disponibilité des fonctions de niveau Catégorie
- Il s'agit d'un indicateur permettant de savoir si cette catégorie a un niveau ou non.
- S'il est activé, il a un niveau ; s'il est désactivé, il n'en a pas.
- Par exemple, vous pouvez activer les catégories basées sur l'expérience, telles que l'épée et la magie, et désactiver les catégories basées sur l'emplacement, telles que les donjons et les forgerons.
___

## en progrès simultanés
Configuration de l'exécution en parallèle avec d'autres Catégories
- Il s'agit d'un indicateur permettant de savoir si les actions de cette Catégorie peuvent progresser en parallèle avec des actions d'autres catégories.
- Si elle est activée, l'action peut progresser simultanément et indépendamment d'autres catégories d'actions.
- Si elle est désactivée, elle ne peut pas être exécutée simultanément avec des actions dans d'autres catégories qui sont également configurées sur désactivé. Lorsque vous commencez une nouvelle action dans cette Catégorie, les actions en cours dans d'autres catégories non autonomes sont automatiquement interrompues.
___

## arrière-plan
Configurations d'arrière-plan propres à chaque catégorie
- Configure l'arrière-plan de cette Catégorie.
- Lorsqu'une catégorie est sélectionnée, l'image de fond change en même temps qu'elle.
- Si cette option n'est pas configurée, la configuration de l'arrière-plan du monde est utilisée telle quelle.