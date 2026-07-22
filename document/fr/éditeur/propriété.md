
# propriétés
Configuration des effets d'un Objet.
- Il s'agit d'un effet qui peut être configuré sur l'Objet.
- Les objets dont le type d'équipement est `nécessaire` ou `consommable` ne s'appliquent que lorsqu'ils sont équipés. Pour les objets `nécessaires`, l'effet ne s'applique que lorsqu'ils sont en possession de l'objet.
- Les valeurs des deux éléments sont calculées comme un ajustement de la différence de niveau entre le niveau du joueur et le niveau de l'action.
- Par exemple, si la valeur d'attaque est de 10, l'attaque est calculée comme si le niveau du joueur était supérieur de 10 au niveau de l'Action. Les valeurs négatives sont l'inverse.
- ATTACK, DEFENCE, ACCURACY, EVASION et RESTORE ne sont valables que pour les actions de type `stamina`.

|propriétés|Détails de l'efficacité.|
|-|-|
|vitesse|Réduit le temps nécessaire à une action. Le temps nécessaire varie inversement à la différence de niveau.|
|chance|Modifie la probabilité de succès d'une action. La probabilité augmente proportionnellement à la différence de niveau.|
|expérience|Modifie l'expérience acquise. Augmente proportionnellement à la différence de niveau (le calcul est inversé : plus l'action de niveau est élevée, plus vous gagnez).|
|attaque|Modifie les dégâts d'endurance infligés à l'adversaire. (Action Stamina uniquement).|
|défense|Réduit les dégâts d'endurance subis par les adversaires. (Action stamina uniquement).|
|précision|Bas le taux de ratage des attaques. (Action de résistance uniquement).|
|évasion|Modifie le taux d'évasion des attaques de l'adversaire. (Action stamina uniquement).|
|restaurer|Modifie la quantité d'endurance restaurée à la fin d'une action. (uniquement pour les actions d'endurance).|
___

## Catégorie.
Spécification de la catégorie à laquelle les propriétés s'appliquent.
- Configurer l'ID de la catégorie à laquelle s'applique cette propriété.
- La configuration `*` s'applique à toutes les Catégories.
- Si elle est vide, elle s'applique à la Catégorie à laquelle l'Objet appartient.
___

## Valeur d'attaque [différence de niveau].
Correction des dégâts d'endurance infligés à l'adversaire (valable uniquement pour les actions d'endurance).
- Les dégâts de l'attaque sont calculés en supposant que le niveau du joueur est supérieur d'autant au niveau de l'Action.
___

## Valeur de défense [différence de niveau].
Correction des dégâts d'endurance reçus d'un adversaire (valable uniquement pour les actions STAMINA).
- Les dégâts subis sont calculés comme si le niveau du joueur était supérieur de cette valeur au niveau de l'Action. Plus la valeur est élevée, moins les dégâts sont importants.
___

## Valeur de précision [différence de niveau].
Correction du taux de ratage des attaques (valable uniquement pour les actions d'endurance).
- Le taux de ratés est calculé en supposant que le niveau du joueur est supérieur de cette valeur au niveau de l'Action. Plus la valeur est élevée, plus le taux de réussite est bas.
___

## Valeur d'évasion [différence de niveau].
Correction du taux d'évasion des attaques de l'adversaire (valable uniquement pour les actions d'endurance).
- Le taux d'évasion est calculé en supposant que le niveau du joueur est supérieur d'autant au niveau de l'Action.
___

## Valeur de restauration [différence de niveau].
Correction de la restauration de l'endurance (valable uniquement pour les actions STAMINA).
- La quantité d'endurance restaurée est calculée en supposant que le niveau du joueur est d'autant plus élevé que le niveau de l'Action.
___

## Rapidité [différence de niveau].
Correction de la durée de l'action
- Le temps nécessaire est calculé en supposant que le niveau du joueur est supérieur de cette valeur au niveau de l'action. Plus la valeur est élevée, plus le temps nécessaire est court.
___

## Probabilité de succès [différence de niveau].
Correction de la probabilité de succès de l'action.
- La probabilité de succès de l'action est calculée en supposant que le niveau du joueur est supérieur de cette valeur au niveau de l'action. Plus la valeur est élevée, plus la probabilité de succès est importante.
___

## Expérience [différence de niveau].
Corrections de l'expérience acquise
- L'expérience est calculée comme si le niveau du joueur était inférieur d'autant au niveau de l'Action (plus le niveau de l'Action est élevé, plus l'expérience est acquise, car le calcul est inversé).