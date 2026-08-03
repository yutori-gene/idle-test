
# Tâche
Missions qui sont considérées comme accomplies lorsque les conditions sont remplies
- Lorsque la configuration définie est remplie, l'objectif est atteint et un message s'affiche en haut de l'écran.
- Elles s'affichent dans la liste des missions du joueur et dans la liste des tâches par catégorie.
- La récompense n'est pas attribuée automatiquement. Le joueur la reçoit lorsqu'il ouvre la tâche et appuie sur la barre d'acquisitions.
- Tant que la récompense n'a pas été perçue, un ruban apparaît sur la barre de la liste pour indiquer qu'elle n'a pas encore été perçue.
- Par les acquisitions, vous pouvez modifier le niveau de la catégorie, le nombre d'actions effectuées et le nombre d'objets en votre possession.
- Les éléments que vous souhaitez déclencher à des moments autres que ceux prévus (par exemple lors du premier démarrage ou en cas de jeu terminé) doivent faire l’objet d’une configuration dans les événements des paramètres de base.
- [_event_](fr/éditeur/événement)
___

## [_l'information_](fr/éditeur/l'information)
___

## Catégorie.
ID de la catégorie à laquelle appartient la tâche
- Indiquez l'ID de la catégorie à laquelle cette tâche doit être rattachée.
- Une fois la configuration activée, une liste des tâches s'ajoute à l'écran des catégories du joueur, et celles-ci s'affichent également regroupées par catégorie dans la liste des missions.
- Si le champ est vide, la mission n'appartient à aucune catégorie et s'affiche en tête de la liste des missions.
___

## timing
Moment du déclenchement de la tâche (fixé sur `matched`)
- La tâche est verrouillée sur « `matched` » (lorsque la configuration définie est remplie) et ne peut pas être modifiée.
- La récompense ne peut être obtenue qu'une seule fois ; une fois reçue, le statut « Objectif atteint » reste inchangé.
- Pour les éléments que vous souhaitez déclencher à d'autres moments, effectuez la configuration dans les événements des paramètres par défaut.
- [_event_](fr/éditeur/événement)
___

## État d'affichage initial
État d'affichage initial de l'icône de tâche (la réalisation dépend de certaines conditions ; avec cette configuration, la tâche n'est pas considérée comme réalisée)
- Les conditions de réalisation d'une tâche sont définies dans la section « requirements » ; cet élément n'a d'incidence que sur l'apparence de l'icône de liste.
- secreted : ne s'affiche pas du tout dans la liste des tâches tant que toutes les conditions ne sont pas remplies (la réalisation elle-même se produit en fonction des conditions).
- hidden・hinted : l'icône est barrée et s'affiche comme non débloquée.
- « released » : la ligne oblique disparaît et l'élément s'affiche comme « libéré ».
- Une fois qu'une tâche a été accomplie, elle ne disparaît pas de la liste. Si elle redevient en attente, cela est indiqué par une barre oblique sur l'icône.
___

## conditions générales
Conditions de réussite de la tâche
- Ce sont les conditions à remplir pour mener à bien cette tâche.
- Si vous remplissez cette condition, l'objectif sera atteint et vous pourrez recevoir votre récompense.
- Si vous ne remplissez plus les conditions avant d'avoir reçu la récompense, celle-ci sera réinitialisée et vous ne pourrez plus la recevoir. Vous pourrez la recevoir à nouveau dès que vous remplirez à nouveau les conditions.
- Les tâches pour lesquelles aucune configuration n'a été effectuée ne seront pas réalisées.
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
Configuration des récompenses à l'achèvement d'une tâche
- Il s'agit de la récompense acquise lorsque vous ouvrez une tâche accomplie et que vous appuyez sur la barre de récompense.
- Vous pouvez modifier le niveau de la catégorie, le nombre d'exécutions d'une action et le nombre d'objets en votre possession.
- Il est également possible de définir une valeur négative pour la quantité.
- Pour les tâches pour lesquelles rien n'a été défini en matière de récompense, la barre de progression n'apparaît pas et la tâche est considérée comme terminée dès qu'elle est accomplie.
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
Classification des tâches par groupe d'affichage
- Appliquer l'un des groupes configurés dans Basic.
- La liste des tâches s'affiche dans l'ordre des groupes de configuration que vous avez définis.
- Ils sont classés par catégorie, puis par groupe au sein de chaque catégorie.
- Si elle est laissée vide, aucun regroupement n'est effectué.
- [_general_](fr/éditeur/général)