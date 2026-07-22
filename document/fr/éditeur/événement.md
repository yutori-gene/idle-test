
# Événement
Système de messages et de récompenses déclenché par des conditions.
- Il se déclenche lorsque les délais/conditions configurés sont remplis et qu'un message s'affiche.
- Il peut être déclenché au premier démarrage, lorsque le jeu est terminé, au retour d'un jeu désactivé ou lorsque certaines conditions sont remplies.
- Il peut modifier le niveau de la catégorie, le nombre d'actions effectuées et le nombre d'objets possédés lorsqu'il est activé.
___

## [_l'information_](fr/éditeur/l'information)
___

## timing
Configuration du moment de déclenchement des événements.

|timing|condition d'activation|répéter|
|-|-|-|
|`matched`.|Lorsque les conditions configurées dans CONDITIONS sont remplies pour la première fois.|une seule fois|
|`revenu`.|Lorsqu'une personne revient d'une situation désactivée pendant plus d'une seconde et qu'une action est en cours.|souvent|
|`gameovered`.|Lorsque l'endurance du joueur s'épuise au cours d'un combat.|souvent|
|`completed`.|Lorsque le niveau maximum de toutes les catégories (maxCategoryLevels) est atteint.|une seule fois|
|`accueillis`.|Quand j'ai commencé ce monde.|une seule fois|
|`obtained`|Lorsque vous terminez ou validez une action de type « single » (coffre au trésor, etc.). Si les conditions sont remplies, les récompenses de l'événement sont également ajoutées.|souvent|
___

## État d'affichage initial
État d'affichage initial de l'icône d'événement (le déclenchement dépend du moment choisi ; avec cette configuration, l'événement ne se déclenche pas)
- Les conditions de déclenchement de l'événement sont déterminées par le timing ; ce paramètre n'a d'incidence que sur l'apparence de l'icône de liste.
- secreted : ne s'affiche pas du tout dans la liste des événements tant que toutes les conditions ne sont pas remplies (le déclenchement lui-même se produit au moment prévu).
- hidden・hinted : l'icône est barrée et s'affiche comme non débloquée.
- « released » : la ligne oblique disparaît et l'élément s'affiche comme « libéré ».
___

## conditions générales
Conditions de déclenchement des événements et d'octroi des récompenses.
- Conditions de déclenchement d'événements ou d'octroi de récompenses.
- Avec « matched », vous ne déclenchez l'action et n'obtenez la récompense que lorsque cette condition est remplie.
- En dehors des moments « matched », l'événement se déclenche dès que les conditions de déclenchement sont remplies. Par la suite, la récompense est acquise uniquement lorsque les conditions de configuration définies ici sont remplies.
___

### Type
Type d'élément référencé comme condition.

|Type|Valeurs référencées|
|-|-|
|Catégorie.|Niveau de la Catégorie.|
|Action|Nombre de fois où l'action a été comptée.|
|Objet|Nombre d'objets détenus.|
___

### ID de l'élément
ID de l'élément désigné comme condition.
___

### valeur
Valeurs Nécessaires pour les exigences.
- La condition est remplie si la valeur est supérieure ou égale à la valeur spécifiée.
___

### Probabilité de consommation [0-1].
Probabilité qu'un objet soit consommé (0-1, valable uniquement si le Type est Objet).
- Probabilité qu'un Objet soit consommé lorsque la condition est remplie et que l'Action est réalisée.
- Toujours consommé à `1`, 50% de chance de consommation à `0.5` et pas de consommation à `0`.
- La valeur par défaut est `1` (toujours consommé).
- Invalide si le Type est différent de l'Objet.
___

### Équipement
L'objet doit être dans un état équipé (valable uniquement si le Type est Objet) ou
- Lorsqu'il est activé, l'Objet doit être équipé ainsi que possédé.
- Invalide si le Type est différent de l'Objet.
___

## récompense
Configuration des récompenses lorsque l'événement est déclenché.
- Il s'agit de la récompense lorsque l'événement est déclenché.
- Avec « matched », vous ne recevez une récompense que lorsque les conditions sont remplies et que l'action est déclenchée.
- En dehors de `matched`, vous ne recevez de récompense que lorsque la condition de timing est remplie et que les conditions définies dans `conditions` sont satisfaites.
- Il est possible de compter une valeur négative. Par exemple, si vous comptez une valeur négative pour la quantité d'objets lors d'un jeu terminé, vous les perdrez à la fin du jeu.
___

### Type
Type d'élément à acquérir.

|Type|Ce qui est acquis.|
|-|-|
|Catégorie.|Niveau (conversion de l'expérience ajoutée)|
|Action|Nombre de fois qu'il a été exécuté.|
|Objet|compter le nombre de possessions|
___

### ID de l'élément
ID identifiant l'élément à acquérir.
___

### valeur
Valeurs numériques à obtenir
- Les valeurs négatives réduisent le nombre de possessions, le nombre de fois qu'elles ont été effectuées et leur niveau. Toutefois, elle ne peut être bas que 0.
- Si un Objet a un nombre maximum de possessions (max), le nombre de possessions n'augmentera pas au-delà de cette valeur.
- Si le Type est la Catégorie, la valeur configurée est ajoutée directement au niveau (1 pour 1 niveau, 0,5 pour 0,5 niveau). La façon habituelle d'ajuster cela est de configurer la valeur d'expérience de l'Action. Cette configuration n'est pas Inutile, à moins qu'il n'y ait un but particulier.
___

### Probabilité [-1 à 1]
Probabilité de succès de l'acquisition (les valeurs négatives ne sont prises en compte qu'en cas d'échec)
- Configurez la probabilité d'obtention sous forme de nombre décimal compris entre -1 et 1. La valeur absolue est utilisée pour déterminer la probabilité.
- Lorsque la valeur est positive, elle n'est prise en compte qu'en cas de succès de l'action : la valeur `1` garantit l'obtention, tandis que la valeur `0,5` correspond à une probabilité de 50 % d'obtention.
- Lorsque la valeur est négative, elle n'est prise en compte qu'en cas d'échec de l'action : la valeur `-1` garantit l'obtention de l'objet, tandis que la valeur `-0,5` offre une probabilité de 50 % de l'obtenir.
- Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.
- La valeur par défaut est `1` (toujours récupérée en cas de succès).
___

## groupe de travail
Identifiant de groupe de la tâche (actuellement inutilisé)
- Cet élément n'est actuellement pas utilisé. Il est réservé pour des améliorations futures.