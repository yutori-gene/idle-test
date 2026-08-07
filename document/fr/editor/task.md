
# Tâche
Missions qui sont considérées comme accomplies lorsque les conditions sont remplies
- Lorsque la configuration définie est remplie, l'objectif est atteint et un message s'affiche en haut de l'écran.
- Elles s'affichent dans la liste des missions du joueur et dans la liste des tâches par catégorie.
- La récompense n'est pas attribuée automatiquement. Le joueur la reçoit lorsqu'il ouvre la tâche et appuie sur la barre d'acquisitions.
- Tant que la récompense n'a pas été perçue, un ruban apparaît sur la barre de la liste pour indiquer qu'elle n'a pas encore été perçue.
- Par les acquisitions, vous pouvez modifier le niveau de la catégorie, le nombre d'actions effectuées et le nombre d'objets en votre possession.
- Les éléments que vous souhaitez déclencher à des moments autres que ceux prévus (par exemple lors du premier démarrage ou en cas de jeu terminé) doivent faire l’objet d’une configuration dans les événements des paramètres de base.
- [_event_](fr/editor/event)
___

## [_l'information_](fr/editor/information)
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
- [_event_](fr/editor/event)
___

## État d'affichage initial
État d'affichage initial de l'icône de tâche (la réalisation dépend de certaines conditions ; avec cette configuration, la tâche n'est pas considérée comme réalisée)
- タスクの達成条件はrequirementsで決まり、この項目は一覧アイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでタスクの一覧に一切表示されません（達成自体は条件で起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
- 一度達成したタスクは一覧から消えず、その後に条件を満たさなくなっても達成のまま表示されます。
___

## conditions générales
Conditions de réussite de la tâche
- タスクを達成させる条件です。
- この条件を満たすと達成になり、報酬を受け取れるようになります。
- 一度達成すると、その後に条件を満たさなくなっても達成のままで、報酬もいつでも受け取れます。
- 条件を設定していないタスクは達成しません。
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
- Avec `1` la consommation est systématique, avec `0.5` elle a lieu avec une probabilité de 50 % et avec `0` il n'y a pas de consommation.
- La valeur par défaut est `1` (consommation systématique).
- Invalide si le Type est différent de l'Objet.
___

### Équipement
L'objet doit être dans un état équipé (valable uniquement si le Type est Objet) ou
- Lorsqu'il est activé, l'Objet doit être équipé ainsi que possédé.
- Invalide si le Type est différent de l'Objet.
___

## récompense
Configuration des récompenses à l'achèvement d'une tâche
- 達成したタスクを開き、獲得のバーを押した時に受け取れる報酬です。
- カテゴリーのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- 数量にマイナスを設定することもできます。
- 報酬を設定していないタスクは獲得のバーが出ず、達成した時点で完了になります。
- 持てるアイテムの種類が上限に達している時は受け取れません。整理してから受け取り直します。
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
- Lorsque la valeur est positive, elle n'est évaluée qu'en cas de réussite de l'action : avec `1` on l'obtient toujours et avec `0.5` on l'obtient avec une probabilité de 50 %.
- Lorsque la valeur est négative, elle n'est évaluée qu'en cas d'échec de l'action : avec `-1` on l'obtient toujours et avec `-0.5` on l'obtient avec une probabilité de 50 %.
- Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.
- La valeur par défaut est `1` (toujours récupérée en cas de succès).
___

## groupe de travail
Classification des tâches par groupe d'affichage
- Appliquer l'un des groupes configurés dans Basic.
- La liste des tâches s'affiche dans l'ordre des groupes de configuration que vous avez définis.
- Ils sont classés par catégorie, puis par groupe au sein de chaque catégorie.
- Si elle est laissée vide, aucun regroupement n'est effectué.
- [_general_](fr/editor/general)