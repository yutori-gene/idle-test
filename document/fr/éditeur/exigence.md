
# conditions générales
Configuration des exigences nécessaires à l'utilisation et à la présentation des éléments.
- Il s'agit des configurations établies pour chaque élément par Catégorie, Action et Objet.
- Si toutes les configurations ne sont pas remplies, les opérations indiquées dans le tableau ne peuvent pas être effectuées.
- Si la fonction de verrouillage est activée, l'élément lui-même est masqué jusqu'à ce que la condition soit remplie.

|Où se configurer ?|Ce qui ne peut être fait que si les conditions sont réunies.|
|-|-|
|Catégorie.|Exécution de toutes les actions et manipulation des objets de la Catégorie|
|Action|Exécution des actions|
|Objet|Manipulation d'objets (par exemple, d'équipements)|
- [_type_](fr/éditeur/type)
___

## Type
Type d'élément référencé comme condition.

|Type|Valeurs référencées|
|-|-|
|Catégorie.|Niveau de la Catégorie.|
|Action|Nombre de fois où l'action a été comptée.|
|Objet|Nombre d'objets détenus.|
___

## ID de l'élément
ID de l'élément désigné comme condition.
___

## valeur
Valeurs Nécessaires pour les exigences.
- La condition est remplie si la valeur est supérieure ou égale à la valeur spécifiée.
___

## Probabilité de consommation [0-1].
Probabilité qu'un objet soit consommé (0-1, valable uniquement si le Type est Objet).
- Probabilité qu'un Objet soit consommé lorsque la condition est remplie et que l'Action est réalisée.
- Toujours consommé à `1`, 50% de chance de consommation à `0.5` et pas de consommation à `0`.
- La valeur par défaut est `1` (toujours consommé).
- Invalide si le Type est différent de l'Objet.
___

## Équipement
L'objet doit être dans un état équipé (valable uniquement si le Type est Objet) ou
- Lorsqu'il est activé, l'Objet doit être équipé ainsi que possédé.
- Invalide si le Type est différent de l'Objet.