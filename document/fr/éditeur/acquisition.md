
# acquisitions
Configuration de l'acquisition au niveau des objets et des catégories.
- Configurer les acquisitions.
- Vous pouvez modifier le niveau de la Catégorie ainsi que l'Objet, et le nombre de fois que l'Action a été comptée.
- La probabilité d'obtenir le produit peut être configurée.

|Type|Ce que vous acquérez.|
|-|-|
|Catégorie.|niveau|
|Action|Nombre de fois qu'il a été exécuté.|
|Objet|compter le nombre de possessions|
- [_type_](fr/éditeur/type)
___

## Type
Type d'élément à acquérir.

|Type|Ce qui est acquis.|
|-|-|
|Catégorie.|Niveau (conversion de l'expérience ajoutée)|
|Action|Nombre de fois qu'il a été exécuté.|
|Objet|compter le nombre de possessions|
___

## ID de l'élément
ID identifiant l'élément à acquérir.
___

## valeur
Valeurs numériques à obtenir
- Les valeurs négatives réduisent le nombre de possessions, le nombre de fois qu'elles ont été effectuées et leur niveau. Toutefois, elle ne peut être bas que 0.
- Si un Objet a un nombre maximum de possessions (max), le nombre de possessions n'augmentera pas au-delà de cette valeur.
- Si le Type est la Catégorie, la valeur configurée est ajoutée directement au niveau (1 pour 1 niveau, 0,5 pour 0,5 niveau). La façon habituelle d'ajuster cela est de configurer la valeur d'expérience de l'Action. Cette configuration n'est pas Inutile, à moins qu'il n'y ait un but particulier.
___

## Probabilité [-1 à 1]
Probabilité de succès de l'acquisition (les valeurs négatives ne sont prises en compte qu'en cas d'échec)
- Configurez la probabilité d'obtention sous forme de nombre décimal compris entre -1 et 1. La valeur absolue est utilisée pour déterminer la probabilité.
- Lorsque la valeur est positive, elle n'est prise en compte qu'en cas de succès de l'action : la valeur `1` garantit l'obtention, tandis que la valeur `0,5` correspond à une probabilité de 50 % d'obtention.
- Lorsque la valeur est négative, elle n'est prise en compte qu'en cas d'échec de l'action : la valeur `-1` garantit l'obtention de l'objet, tandis que la valeur `-0,5` offre une probabilité de 50 % de l'obtenir.
- Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.
- La valeur par défaut est `1` (toujours récupérée en cas de succès).