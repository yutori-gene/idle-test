
# Objet
Éléments de biens tels que les équipements et les consommables
- Cet élément concerne la propriété d'objets tels que les équipements, les consommables et les objets de valeur.
- Une seule catégorie peut être équipée, ou bien elle peut être rien.
- Il existe également différentes manières de les utiliser.
___

## [_l'information_](fr/éditeur/l'information)
___

## Catégorie.
ID de la Catégorie à laquelle l'Objet appartient
- Indiquez l'ID de la catégorie à laquelle cet Objet appartient.
___

## groupe (habituellement de personnes)
Affichage du classement des objets par groupe
- Appliquer l'un des groupes configurés dans Basic.
- Une liste d'objets s'affiche dans l'ordre des groupes configurés.
- Si elle est laissée vide, aucun regroupement n'est effectué.
- [_general_](fr/éditeur/général)
___

## État de déblocage initial
État initial d'affichage et de libération de l'élément (passe automatiquement à l'état haut lorsque les conditions d'activation sont remplies)
- secreted : Ne s'affiche en aucun cas dans l'interface utilisateur tant que toutes les conditions ne sont pas remplies (il n'apparaît pas dans les indices et est masqué dans la liste des conditions et des récompenses).
- hidden : Il est entièrement masqué tant qu'aucun élément de libération ne le référence et que les conditions requises ne sont pas remplies (son nom est grisé et il est inactif).
- hinted (par défaut) : seul le nom s'affiche en avant-première, mais il n'est pas possible d'interagir avec cet élément tant qu'il n'est pas disponible.
- released : Disponible et utilisable dès le début, quelles que soient les conditions (anciennement « Afficher dès le début »).
___

## Prix d'achat [pièces].
Configuration du prix d'achat des objets.
- Vous ne pouvez pas acheter un Objet si vous ne l'avez jamais possédé.

|valeur|traitement|
|-|-|
|0|rien|
|Une valeur supérieure à zéro.|La valeur que vous pouvez acheter.|
|Une valeur inférieure à zéro (par exemple -1)|Ne peut être acheté (traité comme zéro).|
___

## Valeur de vente [pièces].
Configuration du prix de vente des objets.
- Configure le prix auquel les objets sont vendus.

|valeur|traitement|
|-|-|
|0|rien|
|Une valeur supérieure à zéro.|Vendre à cette valeur.|
|Une valeur inférieure à zéro (par exemple -1)|Taux d'actualisation de la configuration générale multiplié par la valeur de l'offre (si la valeur de l'offre est nulle, elle ne peut être vendue).|
- [_general_](fr/éditeur/général)
___

## Nombre max. de pièces propres [pcs].
Limitation du nombre max. d'objets propres.
- S'il est égal à 0, il n'y a pas de limite au nombre de personnes pouvant compter.
- S'il est supérieur à 1, vous ne pouvez être propre que jusqu'à ce nombre. Si le haut est atteint, les acquisitions ultérieures n'augmenteront pas le nombre de personnes comptées.
___

## Type d'équipement
Configuration Type pour l'équipement, les effets et la consommation des objets.
- Les objets qui peuvent être équipés doivent appartenir au groupe spécifié dans la Catégorie `equipmentGroups`.
- Un seul Objet peut être équipé au sein d'un même groupe.

|valeur|Équipement|Efficacité.|la consommation|Exemple.|
|-|-|-|-|-|
|`nécessaire`.|Nécessaire|équipement|rien|Épées, armures et autres équipements.|
|`consommable`.|Nécessaire|équipement|Consommé lors de l'exécution des actions|Objets que l'on consomme pour obtenir un effet, comme les potions.|
|`nécessaire`.|Inutile|À tout moment, pendant qu'il est en possession de l'appareil.|rien|Les objets passifs qui sont efficaces du simple fait de les avoir.|
|`impossible`.|non autorisé|rien|rien|Les objets inefficaces tels que les matériaux et les débris.|
___

## [_conditions générales_](fr/éditeur/exigence)
___

## [_propriétés_](fr/éditeur/propriété)
___

## ID de la paire de devises
ID de la devise utilisée pour l'achat et la vente de cet objet
- Spécifiez l'ID de la devise (coins) utilisée à la fois pour la valeur d'achat et la valeur de vente.
- Si ce champ est laissé vide, la devise principale (la première devise dans la liste « coins ») sera utilisée.