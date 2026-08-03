
# Événement
Messages et récompenses déclenchés à des moments précis
- Elle s'active à des moments précis, par exemple lorsque vous accédez à un monde pour la première fois ou lorsque vous terminez le jeu, et ouvre un écran dédié.
- Il y en a un par moment, et il n'est pas possible d'en ajouter ni d'en supprimer. Laissez le champ vide pour les moments où vous ne l'utilisez pas.
- Elles n'apparaissent pas dans la liste des missions ou des tâches. Les éléments qui sont considérés comme accomplis dès que les conditions sont remplies doivent être configurés en tant que tâches.
- La récompense est automatiquement acquise dès son déclenchement. Il n'y a ni opération de réception, ni ruban, comme c'est le cas pour les tâches.
- Il peut modifier le niveau de la catégorie, le nombre d'actions effectuées et le nombre d'objets possédés lorsqu'il est activé.
- Si vous ne renseignez pas les champs « Nom », « Description » et « Icône », le texte et l'icône par défaut intégrés au joueur seront utilisés.

|timing|condition d'activation|répéter|
|-|-|-|
|`revenu`.|Lorsqu'une personne revient d'une situation désactivée pendant plus d'une seconde et qu'une action est en cours.|souvent|
|`gameovered`.|Lorsque l'endurance du joueur s'épuise au cours d'un combat.|souvent|
|`accueillis`.|Quand j'ai commencé ce monde.|une seule fois|
|`completed`.|Lorsque le niveau maximum de toutes les catégories (maxCategoryLevels) est atteint.|une seule fois|
|`obtained`|lorsque vous avez terminé ou vérifié une action d'un type spécifique (coffre au trésor, etc.)|souvent|
- [_task_](fr/éditeur/tâche)
___

## Au moment du retour
Se déclenche lors du retour en ligne
- Cette fonction se déclenche lorsque vous revenez en ligne après avoir été hors ligne pendant plus de deux secondes et qu'une action est en cours.
- Ces informations s'affichent en même temps que le récapitulatif des progrès réalisés pendant votre absence.
___

### [_l'information_](fr/éditeur/l'information)
___

### Catégorie.
Nous ne l'utiliserons pas lors de l'événement
- Comme cela n'apparaît pas dans la liste des missions et des tâches, je ne précise pas la catégorie à laquelle cela appartient.
- Dans l'éditeur, le champ de saisie n'apparaît pas.
___

### timing
Moment où l'événement se déclenche (fixe)
- Il est défini sur « `comebacked` » et ne peut pas être modifié.
- Cette capacité se déclenche à chaque fois que vous revenez au combat, autant de fois que nécessaire.
___

### État d'affichage initial
État d'affichage initial de l'icône d'événement (le déclenchement dépend du moment choisi ; avec cette configuration, l'événement ne se déclenche pas)
- Les conditions de déclenchement de l'événement sont déterminées par le timing ; ce paramètre n'a d'incidence que sur l'apparence de l'icône.
- secreted : L'icône ne s'affiche pas tant que toutes les conditions ne sont pas remplies (le déclenchement lui-même se produit au moment prévu).
- hidden・hinted : l'icône est barrée et s'affiche comme non débloquée.
- « released » : la ligne oblique disparaît et l'élément s'affiche comme « libéré ».
___

### conditions générales
Conditions d'acquisition de la rémunération
- Lorsque la condition est remplie, l'événement se déclenche et un écran dédié s'ouvre pour afficher son contenu.
- La récompense n'est acquise que si la configuration définie ici est remplie au moment du déclenchement.
- Si aucune configuration n'est définie, vous acquérez une récompense à chaque fois que l'effet se déclenche.
___

#### Type
Type d'élément référencé comme condition.

|Type|Valeurs référencées|
|-|-|
|Catégorie.|Niveau de la Catégorie.|
|Action|Nombre de fois où l'action a été comptée.|
|Objet|Nombre d'objets détenus.|
___

#### ID de l'élément
ID de l'élément désigné comme condition.
___

#### valeur
Valeurs Nécessaires pour les exigences.
- La condition est remplie si la valeur est supérieure ou égale à la valeur spécifiée.
___

#### Probabilité de consommation [0-1].
Probabilité qu'un objet soit consommé (0-1, valable uniquement si le Type est Objet).
- Probabilité qu'un Objet soit consommé lorsque la condition est remplie et que l'Action est réalisée.
- Toujours consommé à `1`, 50% de chance de consommation à `0.5` et pas de consommation à `0`.
- La valeur par défaut est `1` (toujours consommé).
- Invalide si le Type est différent de l'Objet.
___

#### Équipement
L'objet doit être dans un état équipé (valable uniquement si le Type est Objet) ou
- Lorsqu'il est activé, l'Objet doit être équipé ainsi que possédé.
- Invalide si le Type est différent de l'Objet.
___

### récompense
Configuration des récompenses lorsque l'événement est déclenché.
- Il s'agit d'une récompense obtenue lorsque le timing est respecté et que les conditions sont remplies.
- Contrairement aux tâches, il n'est pas nécessaire de les accepter : les acquisitions se font automatiquement dès leur déclenchement.
- Il est possible de définir une valeur moins pour la quantité. Par exemple, si vous attribuez une valeur moins à la quantité d'objets en cas de jeu terminé, vous les perdrez.
___

#### Type
Type d'élément à acquérir.

|Type|Ce qui est acquis.|
|-|-|
|Catégorie.|Niveau (conversion de l'expérience ajoutée)|
|Action|Nombre de fois qu'il a été exécuté.|
|Objet|compter le nombre de possessions|
___

#### ID de l'élément
ID identifiant l'élément à acquérir.
___

#### valeur
Valeurs numériques à obtenir
- Les valeurs négatives réduisent le nombre de possessions, le nombre de fois qu'elles ont été effectuées et leur niveau. Toutefois, elle ne peut être bas que 0.
- Si un Objet a un nombre maximum de possessions (max), le nombre de possessions n'augmentera pas au-delà de cette valeur.
- Si le Type est la Catégorie, la valeur configurée est ajoutée directement au niveau (1 pour 1 niveau, 0,5 pour 0,5 niveau). La façon habituelle d'ajuster cela est de configurer la valeur d'expérience de l'Action. Cette configuration n'est pas Inutile, à moins qu'il n'y ait un but particulier.
___

#### Probabilité [-1 à 1]
Probabilité de succès de l'acquisition (les valeurs négatives ne sont prises en compte qu'en cas d'échec)
- Configurez la probabilité d'obtention sous forme de nombre décimal compris entre -1 et 1. La valeur absolue est utilisée pour déterminer la probabilité.
- Lorsque la valeur est positive, elle n'est prise en compte qu'en cas de succès de l'action : la valeur `1` garantit l'obtention, tandis que la valeur `0,5` correspond à une probabilité de 50 % d'obtention.
- Lorsque la valeur est négative, elle n'est prise en compte qu'en cas d'échec de l'action : la valeur `-1` garantit l'obtention de l'objet, tandis que la valeur `-0,5` offre une probabilité de 50 % de l'obtenir.
- Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.
- La valeur par défaut est `1` (toujours récupérée en cas de succès).
___

### groupe de travail
Nous ne l'utiliserons pas lors de l'événement
- Comme rien n'apparaît dans la liste des missions et des tâches, nous n'utilisons pas la désignation de groupe.
- Dans l'éditeur, le champ de saisie n'apparaît pas.
___

## En cas de jeu terminé
Se déclenche lorsque l'endurance est épuisée au combat
- Cette capacité se déclenche lorsque l'endurance du joueur est épuisée au cours d'un combat.
- En attribuant une valeur négative à la quantité de récompenses, vous pouvez faire en sorte que cela entraîne la fin du jeu.
___

### [_l'information_](fr/éditeur/l'information)
___

### Catégorie.
Nous ne l'utiliserons pas lors de l'événement
- Comme cela n'apparaît pas dans la liste des missions et des tâches, je ne précise pas la catégorie à laquelle cela appartient.
- Dans l'éditeur, le champ de saisie n'apparaît pas.
___

### timing
Moment où l'événement se déclenche (fixe)
- La valeur est fixée à « gameovered » et ne peut pas être modifiée.
- Cette fonction se déclenche à chaque fois que le jeu est terminé, autant de fois que vous le souhaitez.
___

### État d'affichage initial
État d'affichage initial de l'icône d'événement (le déclenchement dépend du moment choisi ; avec cette configuration, l'événement ne se déclenche pas)
- Les conditions de déclenchement de l'événement sont déterminées par le timing ; ce paramètre n'a d'incidence que sur l'apparence de l'icône.
- secreted : L'icône ne s'affiche pas tant que toutes les conditions ne sont pas remplies (le déclenchement lui-même se produit au moment prévu).
- hidden・hinted : l'icône est barrée et s'affiche comme non débloquée.
- « released » : la ligne oblique disparaît et l'élément s'affiche comme « libéré ».
___

### conditions générales
Conditions d'acquisition de la rémunération
- Lorsque la condition est remplie, l'événement se déclenche et un écran dédié s'ouvre pour afficher son contenu.
- La récompense n'est acquise que si la configuration définie ici est remplie au moment du déclenchement.
- Si aucune configuration n'est définie, vous acquérez une récompense à chaque fois que l'effet se déclenche.
___

#### Type
Type d'élément référencé comme condition.

|Type|Valeurs référencées|
|-|-|
|Catégorie.|Niveau de la Catégorie.|
|Action|Nombre de fois où l'action a été comptée.|
|Objet|Nombre d'objets détenus.|
___

#### ID de l'élément
ID de l'élément désigné comme condition.
___

#### valeur
Valeurs Nécessaires pour les exigences.
- La condition est remplie si la valeur est supérieure ou égale à la valeur spécifiée.
___

#### Probabilité de consommation [0-1].
Probabilité qu'un objet soit consommé (0-1, valable uniquement si le Type est Objet).
- Probabilité qu'un Objet soit consommé lorsque la condition est remplie et que l'Action est réalisée.
- Toujours consommé à `1`, 50% de chance de consommation à `0.5` et pas de consommation à `0`.
- La valeur par défaut est `1` (toujours consommé).
- Invalide si le Type est différent de l'Objet.
___

#### Équipement
L'objet doit être dans un état équipé (valable uniquement si le Type est Objet) ou
- Lorsqu'il est activé, l'Objet doit être équipé ainsi que possédé.
- Invalide si le Type est différent de l'Objet.
___

### récompense
Configuration des récompenses lorsque l'événement est déclenché.
- Il s'agit d'une récompense obtenue lorsque le timing est respecté et que les conditions sont remplies.
- Contrairement aux tâches, il n'est pas nécessaire de les accepter : les acquisitions se font automatiquement dès leur déclenchement.
- Il est possible de définir une valeur moins pour la quantité. Par exemple, si vous attribuez une valeur moins à la quantité d'objets en cas de jeu terminé, vous les perdrez.
___

#### Type
Type d'élément à acquérir.

|Type|Ce qui est acquis.|
|-|-|
|Catégorie.|Niveau (conversion de l'expérience ajoutée)|
|Action|Nombre de fois qu'il a été exécuté.|
|Objet|compter le nombre de possessions|
___

#### ID de l'élément
ID identifiant l'élément à acquérir.
___

#### valeur
Valeurs numériques à obtenir
- Les valeurs négatives réduisent le nombre de possessions, le nombre de fois qu'elles ont été effectuées et leur niveau. Toutefois, elle ne peut être bas que 0.
- Si un Objet a un nombre maximum de possessions (max), le nombre de possessions n'augmentera pas au-delà de cette valeur.
- Si le Type est la Catégorie, la valeur configurée est ajoutée directement au niveau (1 pour 1 niveau, 0,5 pour 0,5 niveau). La façon habituelle d'ajuster cela est de configurer la valeur d'expérience de l'Action. Cette configuration n'est pas Inutile, à moins qu'il n'y ait un but particulier.
___

#### Probabilité [-1 à 1]
Probabilité de succès de l'acquisition (les valeurs négatives ne sont prises en compte qu'en cas d'échec)
- Configurez la probabilité d'obtention sous forme de nombre décimal compris entre -1 et 1. La valeur absolue est utilisée pour déterminer la probabilité.
- Lorsque la valeur est positive, elle n'est prise en compte qu'en cas de succès de l'action : la valeur `1` garantit l'obtention, tandis que la valeur `0,5` correspond à une probabilité de 50 % d'obtention.
- Lorsque la valeur est négative, elle n'est prise en compte qu'en cas d'échec de l'action : la valeur `-1` garantit l'obtention de l'objet, tandis que la valeur `-0,5` offre une probabilité de 50 % de l'obtenir.
- Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.
- La valeur par défaut est `1` (toujours récupérée en cas de succès).
___

### groupe de travail
Nous ne l'utiliserons pas lors de l'événement
- Comme rien n'apparaît dans la liste des missions et des tâches, nous n'utilisons pas la désignation de groupe.
- Dans l'éditeur, le champ de saisie n'apparaît pas.
___

## Au premier démarrage, commencez
Se déclenche lors de la première ouverture du monde
- Cette fonction s'active lors du premier démarrage de ce monde.
- Cela sert à expliquer l'univers du jeu et à remettre les objets de départ aux joueurs lorsqu'ils commencent la partie.
___

### [_l'information_](fr/éditeur/l'information)
___

### Catégorie.
Nous ne l'utiliserons pas lors de l'événement
- Comme cela n'apparaît pas dans la liste des missions et des tâches, je ne précise pas la catégorie à laquelle cela appartient.
- Dans l'éditeur, le champ de saisie n'apparaît pas.
___

### timing
Moment où l'événement se déclenche (fixe)
- Il est défini sur « welcomed » et ne peut pas être modifié.
- Cette fonction ne s'active qu'une seule fois, lors du premier démarrage.
___

### État d'affichage initial
État d'affichage initial de l'icône d'événement (le déclenchement dépend du moment choisi ; avec cette configuration, l'événement ne se déclenche pas)
- Les conditions de déclenchement de l'événement sont déterminées par le timing ; ce paramètre n'a d'incidence que sur l'apparence de l'icône.
- secreted : L'icône ne s'affiche pas tant que toutes les conditions ne sont pas remplies (le déclenchement lui-même se produit au moment prévu).
- hidden・hinted : l'icône est barrée et s'affiche comme non débloquée.
- « released » : la ligne oblique disparaît et l'élément s'affiche comme « libéré ».
___

### conditions générales
Conditions d'acquisition de la rémunération
- Lorsque la condition est remplie, l'événement se déclenche et un écran dédié s'ouvre pour afficher son contenu.
- La récompense n'est acquise que si la configuration définie ici est remplie au moment du déclenchement.
- Si aucune configuration n'est définie, vous acquérez une récompense à chaque fois que l'effet se déclenche.
___

#### Type
Type d'élément référencé comme condition.

|Type|Valeurs référencées|
|-|-|
|Catégorie.|Niveau de la Catégorie.|
|Action|Nombre de fois où l'action a été comptée.|
|Objet|Nombre d'objets détenus.|
___

#### ID de l'élément
ID de l'élément désigné comme condition.
___

#### valeur
Valeurs Nécessaires pour les exigences.
- La condition est remplie si la valeur est supérieure ou égale à la valeur spécifiée.
___

#### Probabilité de consommation [0-1].
Probabilité qu'un objet soit consommé (0-1, valable uniquement si le Type est Objet).
- Probabilité qu'un Objet soit consommé lorsque la condition est remplie et que l'Action est réalisée.
- Toujours consommé à `1`, 50% de chance de consommation à `0.5` et pas de consommation à `0`.
- La valeur par défaut est `1` (toujours consommé).
- Invalide si le Type est différent de l'Objet.
___

#### Équipement
L'objet doit être dans un état équipé (valable uniquement si le Type est Objet) ou
- Lorsqu'il est activé, l'Objet doit être équipé ainsi que possédé.
- Invalide si le Type est différent de l'Objet.
___

### récompense
Configuration des récompenses lorsque l'événement est déclenché.
- Il s'agit d'une récompense obtenue lorsque le timing est respecté et que les conditions sont remplies.
- Contrairement aux tâches, il n'est pas nécessaire de les accepter : les acquisitions se font automatiquement dès leur déclenchement.
- Il est possible de définir une valeur moins pour la quantité. Par exemple, si vous attribuez une valeur moins à la quantité d'objets en cas de jeu terminé, vous les perdrez.
___

#### Type
Type d'élément à acquérir.

|Type|Ce qui est acquis.|
|-|-|
|Catégorie.|Niveau (conversion de l'expérience ajoutée)|
|Action|Nombre de fois qu'il a été exécuté.|
|Objet|compter le nombre de possessions|
___

#### ID de l'élément
ID identifiant l'élément à acquérir.
___

#### valeur
Valeurs numériques à obtenir
- Les valeurs négatives réduisent le nombre de possessions, le nombre de fois qu'elles ont été effectuées et leur niveau. Toutefois, elle ne peut être bas que 0.
- Si un Objet a un nombre maximum de possessions (max), le nombre de possessions n'augmentera pas au-delà de cette valeur.
- Si le Type est la Catégorie, la valeur configurée est ajoutée directement au niveau (1 pour 1 niveau, 0,5 pour 0,5 niveau). La façon habituelle d'ajuster cela est de configurer la valeur d'expérience de l'Action. Cette configuration n'est pas Inutile, à moins qu'il n'y ait un but particulier.
___

#### Probabilité [-1 à 1]
Probabilité de succès de l'acquisition (les valeurs négatives ne sont prises en compte qu'en cas d'échec)
- Configurez la probabilité d'obtention sous forme de nombre décimal compris entre -1 et 1. La valeur absolue est utilisée pour déterminer la probabilité.
- Lorsque la valeur est positive, elle n'est prise en compte qu'en cas de succès de l'action : la valeur `1` garantit l'obtention, tandis que la valeur `0,5` correspond à une probabilité de 50 % d'obtention.
- Lorsque la valeur est négative, elle n'est prise en compte qu'en cas d'échec de l'action : la valeur `-1` garantit l'obtention de l'objet, tandis que la valeur `-0,5` offre une probabilité de 50 % de l'obtenir.
- Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.
- La valeur par défaut est `1` (toujours récupérée en cas de succès).
___

### groupe de travail
Nous ne l'utiliserons pas lors de l'événement
- Comme rien n'apparaît dans la liste des missions et des tâches, nous n'utilisons pas la désignation de groupe.
- Dans l'éditeur, le champ de saisie n'apparaît pas.
___

## Une fois le jeu terminé
Se déclenche lorsque toutes les catégories ont atteint leur niveau max
- Cette fonction se déclenche lorsque le niveau de toutes les catégories atteint la valeur maximale (maxCategoryLevels).
- Les catégories qui ne sont pas de type « numeric » (numérique) sont exclues de l'évaluation.
___

### [_l'information_](fr/éditeur/l'information)
___

### Catégorie.
Nous ne l'utiliserons pas lors de l'événement
- Comme cela n'apparaît pas dans la liste des missions et des tâches, je ne précise pas la catégorie à laquelle cela appartient.
- Dans l'éditeur, le champ de saisie n'apparaît pas.
___

### timing
Moment où l'événement se déclenche (fixe)
- Il est défini sur « completed » et ne peut pas être modifié.
- Elle ne se déclenche qu'une seule fois lorsque les conditions sont remplies.
___

### État d'affichage initial
État d'affichage initial de l'icône d'événement (le déclenchement dépend du moment choisi ; avec cette configuration, l'événement ne se déclenche pas)
- Les conditions de déclenchement de l'événement sont déterminées par le timing ; ce paramètre n'a d'incidence que sur l'apparence de l'icône.
- secreted : L'icône ne s'affiche pas tant que toutes les conditions ne sont pas remplies (le déclenchement lui-même se produit au moment prévu).
- hidden・hinted : l'icône est barrée et s'affiche comme non débloquée.
- « released » : la ligne oblique disparaît et l'élément s'affiche comme « libéré ».
___

### conditions générales
Conditions d'acquisition de la rémunération
- Lorsque la condition est remplie, l'événement se déclenche et un écran dédié s'ouvre pour afficher son contenu.
- La récompense n'est acquise que si la configuration définie ici est remplie au moment du déclenchement.
- Si aucune configuration n'est définie, vous acquérez une récompense à chaque fois que l'effet se déclenche.
___

#### Type
Type d'élément référencé comme condition.

|Type|Valeurs référencées|
|-|-|
|Catégorie.|Niveau de la Catégorie.|
|Action|Nombre de fois où l'action a été comptée.|
|Objet|Nombre d'objets détenus.|
___

#### ID de l'élément
ID de l'élément désigné comme condition.
___

#### valeur
Valeurs Nécessaires pour les exigences.
- La condition est remplie si la valeur est supérieure ou égale à la valeur spécifiée.
___

#### Probabilité de consommation [0-1].
Probabilité qu'un objet soit consommé (0-1, valable uniquement si le Type est Objet).
- Probabilité qu'un Objet soit consommé lorsque la condition est remplie et que l'Action est réalisée.
- Toujours consommé à `1`, 50% de chance de consommation à `0.5` et pas de consommation à `0`.
- La valeur par défaut est `1` (toujours consommé).
- Invalide si le Type est différent de l'Objet.
___

#### Équipement
L'objet doit être dans un état équipé (valable uniquement si le Type est Objet) ou
- Lorsqu'il est activé, l'Objet doit être équipé ainsi que possédé.
- Invalide si le Type est différent de l'Objet.
___

### récompense
Configuration des récompenses lorsque l'événement est déclenché.
- Il s'agit d'une récompense obtenue lorsque le timing est respecté et que les conditions sont remplies.
- Contrairement aux tâches, il n'est pas nécessaire de les accepter : les acquisitions se font automatiquement dès leur déclenchement.
- Il est possible de définir une valeur moins pour la quantité. Par exemple, si vous attribuez une valeur moins à la quantité d'objets en cas de jeu terminé, vous les perdrez.
___

#### Type
Type d'élément à acquérir.

|Type|Ce qui est acquis.|
|-|-|
|Catégorie.|Niveau (conversion de l'expérience ajoutée)|
|Action|Nombre de fois qu'il a été exécuté.|
|Objet|compter le nombre de possessions|
___

#### ID de l'élément
ID identifiant l'élément à acquérir.
___

#### valeur
Valeurs numériques à obtenir
- Les valeurs négatives réduisent le nombre de possessions, le nombre de fois qu'elles ont été effectuées et leur niveau. Toutefois, elle ne peut être bas que 0.
- Si un Objet a un nombre maximum de possessions (max), le nombre de possessions n'augmentera pas au-delà de cette valeur.
- Si le Type est la Catégorie, la valeur configurée est ajoutée directement au niveau (1 pour 1 niveau, 0,5 pour 0,5 niveau). La façon habituelle d'ajuster cela est de configurer la valeur d'expérience de l'Action. Cette configuration n'est pas Inutile, à moins qu'il n'y ait un but particulier.
___

#### Probabilité [-1 à 1]
Probabilité de succès de l'acquisition (les valeurs négatives ne sont prises en compte qu'en cas d'échec)
- Configurez la probabilité d'obtention sous forme de nombre décimal compris entre -1 et 1. La valeur absolue est utilisée pour déterminer la probabilité.
- Lorsque la valeur est positive, elle n'est prise en compte qu'en cas de succès de l'action : la valeur `1` garantit l'obtention, tandis que la valeur `0,5` correspond à une probabilité de 50 % d'obtention.
- Lorsque la valeur est négative, elle n'est prise en compte qu'en cas d'échec de l'action : la valeur `-1` garantit l'obtention de l'objet, tandis que la valeur `-0,5` offre une probabilité de 50 % de l'obtenir.
- Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.
- La valeur par défaut est `1` (toujours récupérée en cas de succès).
___

### groupe de travail
Nous ne l'utiliserons pas lors de l'événement
- Comme rien n'apparaît dans la liste des missions et des tâches, nous n'utilisons pas la désignation de groupe.
- Dans l'éditeur, le champ de saisie n'apparaît pas.
___

## À la fin d'une action ponctuelle
Se déclenche lorsque vous terminez une action ponctuelle, comme ouvrir un coffre au trésor
- Elle se déclenche lorsque vous terminez ou vérifiez une action de type « single » (comme un coffre au trésor, etc.).
- En plus de la récompense liée à l'action elle-même, vous pouvez ajouter la récompense de configuration définie ici.
___

### [_l'information_](fr/éditeur/l'information)
___

### Catégorie.
Nous ne l'utiliserons pas lors de l'événement
- Comme cela n'apparaît pas dans la liste des missions et des tâches, je ne précise pas la catégorie à laquelle cela appartient.
- Dans l'éditeur, le champ de saisie n'apparaît pas.
___

### timing
Moment où l'événement se déclenche (fixe)
- Il est fixé sur « obtained » et ne peut pas être modifié.
- Elle se déclenche autant de fois que vous le souhaitez à chaque fois que vous terminez une action ponctuelle.
___

### État d'affichage initial
État d'affichage initial de l'icône d'événement (le déclenchement dépend du moment choisi ; avec cette configuration, l'événement ne se déclenche pas)
- Les conditions de déclenchement de l'événement sont déterminées par le timing ; ce paramètre n'a d'incidence que sur l'apparence de l'icône.
- secreted : L'icône ne s'affiche pas tant que toutes les conditions ne sont pas remplies (le déclenchement lui-même se produit au moment prévu).
- hidden・hinted : l'icône est barrée et s'affiche comme non débloquée.
- « released » : la ligne oblique disparaît et l'élément s'affiche comme « libéré ».
___

### conditions générales
Conditions d'acquisition de la rémunération
- Lorsque la condition est remplie, l'événement se déclenche et un écran dédié s'ouvre pour afficher son contenu.
- La récompense n'est acquise que si la configuration définie ici est remplie au moment du déclenchement.
- Si aucune configuration n'est définie, vous acquérez une récompense à chaque fois que l'effet se déclenche.
___

#### Type
Type d'élément référencé comme condition.

|Type|Valeurs référencées|
|-|-|
|Catégorie.|Niveau de la Catégorie.|
|Action|Nombre de fois où l'action a été comptée.|
|Objet|Nombre d'objets détenus.|
___

#### ID de l'élément
ID de l'élément désigné comme condition.
___

#### valeur
Valeurs Nécessaires pour les exigences.
- La condition est remplie si la valeur est supérieure ou égale à la valeur spécifiée.
___

#### Probabilité de consommation [0-1].
Probabilité qu'un objet soit consommé (0-1, valable uniquement si le Type est Objet).
- Probabilité qu'un Objet soit consommé lorsque la condition est remplie et que l'Action est réalisée.
- Toujours consommé à `1`, 50% de chance de consommation à `0.5` et pas de consommation à `0`.
- La valeur par défaut est `1` (toujours consommé).
- Invalide si le Type est différent de l'Objet.
___

#### Équipement
L'objet doit être dans un état équipé (valable uniquement si le Type est Objet) ou
- Lorsqu'il est activé, l'Objet doit être équipé ainsi que possédé.
- Invalide si le Type est différent de l'Objet.
___

### récompense
Configuration des récompenses lorsque l'événement est déclenché.
- Il s'agit d'une récompense obtenue lorsque le timing est respecté et que les conditions sont remplies.
- Contrairement aux tâches, il n'est pas nécessaire de les accepter : les acquisitions se font automatiquement dès leur déclenchement.
- Il est possible de définir une valeur moins pour la quantité. Par exemple, si vous attribuez une valeur moins à la quantité d'objets en cas de jeu terminé, vous les perdrez.
___

#### Type
Type d'élément à acquérir.

|Type|Ce qui est acquis.|
|-|-|
|Catégorie.|Niveau (conversion de l'expérience ajoutée)|
|Action|Nombre de fois qu'il a été exécuté.|
|Objet|compter le nombre de possessions|
___

#### ID de l'élément
ID identifiant l'élément à acquérir.
___

#### valeur
Valeurs numériques à obtenir
- Les valeurs négatives réduisent le nombre de possessions, le nombre de fois qu'elles ont été effectuées et leur niveau. Toutefois, elle ne peut être bas que 0.
- Si un Objet a un nombre maximum de possessions (max), le nombre de possessions n'augmentera pas au-delà de cette valeur.
- Si le Type est la Catégorie, la valeur configurée est ajoutée directement au niveau (1 pour 1 niveau, 0,5 pour 0,5 niveau). La façon habituelle d'ajuster cela est de configurer la valeur d'expérience de l'Action. Cette configuration n'est pas Inutile, à moins qu'il n'y ait un but particulier.
___

#### Probabilité [-1 à 1]
Probabilité de succès de l'acquisition (les valeurs négatives ne sont prises en compte qu'en cas d'échec)
- Configurez la probabilité d'obtention sous forme de nombre décimal compris entre -1 et 1. La valeur absolue est utilisée pour déterminer la probabilité.
- Lorsque la valeur est positive, elle n'est prise en compte qu'en cas de succès de l'action : la valeur `1` garantit l'obtention, tandis que la valeur `0,5` correspond à une probabilité de 50 % d'obtention.
- Lorsque la valeur est négative, elle n'est prise en compte qu'en cas d'échec de l'action : la valeur `-1` garantit l'obtention de l'objet, tandis que la valeur `-0,5` offre une probabilité de 50 % de l'obtenir.
- Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.
- La valeur par défaut est `1` (toujours récupérée en cas de succès).
___

### groupe de travail
Nous ne l'utiliserons pas lors de l'événement
- Comme rien n'apparaît dans la liste des missions et des tâches, nous n'utilisons pas la désignation de groupe.
- Dans l'éditeur, le champ de saisie n'apparaît pas.