
# 固定イベント
決まったタイミングで発動するメッセージと報酬
- ワールドを初めて開いた時やゲームオーバーになった時など、決まったタイミングで発動して専用の画面を開きます。
- タイミングごとに1つずつ用意されており、追加も削除もできません。使わないタイミングは空欄のままにします。
- ミッションやタスクの一覧には表示されません。条件を満たすと達成になるものはタスクで設定します。
- 報酬は発動と同時に自動で獲得します。タスクのような受け取りの操作もリボンもありません。
- 発動時にカテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- 名前・説明・アイコンを空欄にすると、プレイヤーに内蔵されている既定の文言とアイコンが使われます。

|タイミング|発動条件|繰り返し|
|-|-|-|
|`comebacked`|オフラインから1秒以上経過して復帰し、かつ進行中のアクションがあった時|何度も|
|`gameovered`|戦闘でプレイヤーのスタミナがなくなった時|何度も|
|`welcomed`|このワールドを初めて起動した時|一度のみ|
|`completed`|全カテゴリのレベルが最大値（maxCategoryLevels）に達した時|一度のみ|
|`obtained`|single種別のアクション（宝箱など）を完了・確認した時|何度も|
- [_task_](fr/editor/task)
___

## 復帰時
オフラインから復帰した時に発動
- オフラインから1秒以上経過して復帰し、かつ進行中のアクションがあった時に発動します。
- 離れているあいだの進行のまとめと一緒に表示されます。
___

### [_l'information_](fr/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- `comebacked`で固定されており、編集できません。
- 復帰するたびに何度でも発動します。
___

### 初期表示状態
イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）
- イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
___

### 条件
報酬を獲得する条件
- タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。
- 報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。
- 条件を設定していない場合は、発動するたびに報酬を獲得します。
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

#### Type
Type d'élément référencé comme condition.

|Type|Valeurs référencées|
|-|-|
|カテゴリ|カテゴリのレベル|
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
- Avec `1` la consommation est systématique, avec `0.5` elle a lieu avec une probabilité de 50 % et avec `0` il n'y a pas de consommation.
- La valeur par défaut est `1` (consommation systématique).
- Invalide si le Type est différent de l'Objet.
___

#### Équipement
L'objet doit être dans un état équipé (valable uniquement si le Type est Objet) ou
- Lorsqu'il est activé, l'Objet doit être équipé ainsi que possédé.
- Invalide si le Type est différent de l'Objet.
___

### Agrégation de groupe
Traite l'id de la condition comme un ID de groupe et évalue selon le total de ses membres
- Une fois activé, l'id défini dans la condition (requirements) est traité comme l'ID d'un groupe des paramètres de base.
- Une condition dont le Type est Catégorie est évaluée selon la somme du Niveau de toutes les Catégories appartenant à ce groupe.
- Une condition dont le Type est Action est évaluée selon la somme du nombre d'exécutions de toutes les Actions appartenant à ce groupe.
- Une condition dont le Type est Objet est évaluée selon la somme des quantités possédées de tous les Objets appartenant à ce groupe.
- Les éléments verrouillés (autres que released) ne sont pas inclus dans le total.
- La probabilité de consommation de l'Objet (chance) et la condition d'équipement (equipment) sont ignorées, et rien n'est consommé. Elles ne servent qu'à l'évaluation.
- Lorsqu'il est désactivé, l'id de la condition est traité comme avant, comme l'ID d'une Catégorie, Action ou Objet individuel.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Type
Type d'élément à acquérir.

|Type|Ce qui est acquis.|
|-|-|
|カテゴリ|Niveau (conversion de l'expérience ajoutée)|
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
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probabilité [-1 à 1]
Probabilité de succès de l'acquisition (les valeurs négatives ne sont prises en compte qu'en cas d'échec)
- Configurez la probabilité d'obtention sous forme de nombre décimal compris entre -1 et 1. La valeur absolue est utilisée pour déterminer la probabilité.
- Lorsque la valeur est positive, elle n'est évaluée qu'en cas de réussite de l'action : avec `1` on l'obtient toujours et avec `0.5` on l'obtient avec une probabilité de 50 %.
- Lorsque la valeur est négative, elle n'est évaluée qu'en cas d'échec de l'action : avec `-1` on l'obtient toujours et avec `-0.5` on l'obtient avec une probabilité de 50 %.
- Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.
- La valeur par défaut est `1` (toujours récupérée en cas de succès).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## ゲームオーバー時
戦闘でスタミナがなくなった時に発動
- 戦闘でプレイヤーのスタミナがなくなった時に発動します。
- 報酬の数量にマイナスを設定すれば、ゲームオーバーの代償を持たせることができます。
___

### [_l'information_](fr/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- `gameovered`で固定されており、編集できません。
- ゲームオーバーになるたびに何度でも発動します。
___

### 初期表示状態
イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）
- イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
___

### 条件
報酬を獲得する条件
- タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。
- 報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。
- 条件を設定していない場合は、発動するたびに報酬を獲得します。
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

#### Type
Type d'élément référencé comme condition.

|Type|Valeurs référencées|
|-|-|
|カテゴリ|カテゴリのレベル|
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
- Avec `1` la consommation est systématique, avec `0.5` elle a lieu avec une probabilité de 50 % et avec `0` il n'y a pas de consommation.
- La valeur par défaut est `1` (consommation systématique).
- Invalide si le Type est différent de l'Objet.
___

#### Équipement
L'objet doit être dans un état équipé (valable uniquement si le Type est Objet) ou
- Lorsqu'il est activé, l'Objet doit être équipé ainsi que possédé.
- Invalide si le Type est différent de l'Objet.
___

### Agrégation de groupe
Traite l'id de la condition comme un ID de groupe et évalue selon le total de ses membres
- Une fois activé, l'id défini dans la condition (requirements) est traité comme l'ID d'un groupe des paramètres de base.
- Une condition dont le Type est Catégorie est évaluée selon la somme du Niveau de toutes les Catégories appartenant à ce groupe.
- Une condition dont le Type est Action est évaluée selon la somme du nombre d'exécutions de toutes les Actions appartenant à ce groupe.
- Une condition dont le Type est Objet est évaluée selon la somme des quantités possédées de tous les Objets appartenant à ce groupe.
- Les éléments verrouillés (autres que released) ne sont pas inclus dans le total.
- La probabilité de consommation de l'Objet (chance) et la condition d'équipement (equipment) sont ignorées, et rien n'est consommé. Elles ne servent qu'à l'évaluation.
- Lorsqu'il est désactivé, l'id de la condition est traité comme avant, comme l'ID d'une Catégorie, Action ou Objet individuel.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Type
Type d'élément à acquérir.

|Type|Ce qui est acquis.|
|-|-|
|カテゴリ|Niveau (conversion de l'expérience ajoutée)|
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
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probabilité [-1 à 1]
Probabilité de succès de l'acquisition (les valeurs négatives ne sont prises en compte qu'en cas d'échec)
- Configurez la probabilité d'obtention sous forme de nombre décimal compris entre -1 et 1. La valeur absolue est utilisée pour déterminer la probabilité.
- Lorsque la valeur est positive, elle n'est évaluée qu'en cas de réussite de l'action : avec `1` on l'obtient toujours et avec `0.5` on l'obtient avec une probabilité de 50 %.
- Lorsque la valeur est négative, elle n'est évaluée qu'en cas d'échec de l'action : avec `-1` on l'obtient toujours et avec `-0.5` on l'obtient avec une probabilité de 50 %.
- Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.
- La valeur par défaut est `1` (toujours récupérée en cas de succès).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## 初回開始時
ワールドを初めて開いた時に発動
- このワールドを初めて起動した時に発動します。
- 世界観の説明や、開始時に渡す支度品の受け渡しに使います。
___

### [_l'information_](fr/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- `welcomed`で固定されており、編集できません。
- 初回の起動時に一度だけ発動します。
___

### 初期表示状態
イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）
- イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
___

### 条件
報酬を獲得する条件
- タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。
- 報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。
- 条件を設定していない場合は、発動するたびに報酬を獲得します。
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

#### Type
Type d'élément référencé comme condition.

|Type|Valeurs référencées|
|-|-|
|カテゴリ|カテゴリのレベル|
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
- Avec `1` la consommation est systématique, avec `0.5` elle a lieu avec une probabilité de 50 % et avec `0` il n'y a pas de consommation.
- La valeur par défaut est `1` (consommation systématique).
- Invalide si le Type est différent de l'Objet.
___

#### Équipement
L'objet doit être dans un état équipé (valable uniquement si le Type est Objet) ou
- Lorsqu'il est activé, l'Objet doit être équipé ainsi que possédé.
- Invalide si le Type est différent de l'Objet.
___

### Agrégation de groupe
Traite l'id de la condition comme un ID de groupe et évalue selon le total de ses membres
- Une fois activé, l'id défini dans la condition (requirements) est traité comme l'ID d'un groupe des paramètres de base.
- Une condition dont le Type est Catégorie est évaluée selon la somme du Niveau de toutes les Catégories appartenant à ce groupe.
- Une condition dont le Type est Action est évaluée selon la somme du nombre d'exécutions de toutes les Actions appartenant à ce groupe.
- Une condition dont le Type est Objet est évaluée selon la somme des quantités possédées de tous les Objets appartenant à ce groupe.
- Les éléments verrouillés (autres que released) ne sont pas inclus dans le total.
- La probabilité de consommation de l'Objet (chance) et la condition d'équipement (equipment) sont ignorées, et rien n'est consommé. Elles ne servent qu'à l'évaluation.
- Lorsqu'il est désactivé, l'id de la condition est traité comme avant, comme l'ID d'une Catégorie, Action ou Objet individuel.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Type
Type d'élément à acquérir.

|Type|Ce qui est acquis.|
|-|-|
|カテゴリ|Niveau (conversion de l'expérience ajoutée)|
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
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probabilité [-1 à 1]
Probabilité de succès de l'acquisition (les valeurs négatives ne sont prises en compte qu'en cas d'échec)
- Configurez la probabilité d'obtention sous forme de nombre décimal compris entre -1 et 1. La valeur absolue est utilisée pour déterminer la probabilité.
- Lorsque la valeur est positive, elle n'est évaluée qu'en cas de réussite de l'action : avec `1` on l'obtient toujours et avec `0.5` on l'obtient avec une probabilité de 50 %.
- Lorsque la valeur est négative, elle n'est évaluée qu'en cas d'échec de l'action : avec `-1` on l'obtient toujours et avec `-0.5` on l'obtient avec une probabilité de 50 %.
- Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.
- La valeur par défaut est `1` (toujours récupérée en cas de succès).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## クリア時
全カテゴリが最大レベルに達した時に発動
- 全カテゴリのレベルが最大値（maxCategoryLevels）に達した時に発動します。
- numeric（数値）でないカテゴリは判定から除かれます。
___

### [_l'information_](fr/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- `completed`で固定されており、編集できません。
- 条件を満たした時に一度だけ発動します。
___

### 初期表示状態
イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）
- イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
___

### 条件
報酬を獲得する条件
- タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。
- 報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。
- 条件を設定していない場合は、発動するたびに報酬を獲得します。
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

#### Type
Type d'élément référencé comme condition.

|Type|Valeurs référencées|
|-|-|
|カテゴリ|カテゴリのレベル|
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
- Avec `1` la consommation est systématique, avec `0.5` elle a lieu avec une probabilité de 50 % et avec `0` il n'y a pas de consommation.
- La valeur par défaut est `1` (consommation systématique).
- Invalide si le Type est différent de l'Objet.
___

#### Équipement
L'objet doit être dans un état équipé (valable uniquement si le Type est Objet) ou
- Lorsqu'il est activé, l'Objet doit être équipé ainsi que possédé.
- Invalide si le Type est différent de l'Objet.
___

### Agrégation de groupe
Traite l'id de la condition comme un ID de groupe et évalue selon le total de ses membres
- Une fois activé, l'id défini dans la condition (requirements) est traité comme l'ID d'un groupe des paramètres de base.
- Une condition dont le Type est Catégorie est évaluée selon la somme du Niveau de toutes les Catégories appartenant à ce groupe.
- Une condition dont le Type est Action est évaluée selon la somme du nombre d'exécutions de toutes les Actions appartenant à ce groupe.
- Une condition dont le Type est Objet est évaluée selon la somme des quantités possédées de tous les Objets appartenant à ce groupe.
- Les éléments verrouillés (autres que released) ne sont pas inclus dans le total.
- La probabilité de consommation de l'Objet (chance) et la condition d'équipement (equipment) sont ignorées, et rien n'est consommé. Elles ne servent qu'à l'évaluation.
- Lorsqu'il est désactivé, l'id de la condition est traité comme avant, comme l'ID d'une Catégorie, Action ou Objet individuel.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Type
Type d'élément à acquérir.

|Type|Ce qui est acquis.|
|-|-|
|カテゴリ|Niveau (conversion de l'expérience ajoutée)|
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
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probabilité [-1 à 1]
Probabilité de succès de l'acquisition (les valeurs négatives ne sont prises en compte qu'en cas d'échec)
- Configurez la probabilité d'obtention sous forme de nombre décimal compris entre -1 et 1. La valeur absolue est utilisée pour déterminer la probabilité.
- Lorsque la valeur est positive, elle n'est évaluée qu'en cas de réussite de l'action : avec `1` on l'obtient toujours et avec `0.5` on l'obtient avec une probabilité de 50 %.
- Lorsque la valeur est négative, elle n'est évaluée qu'en cas d'échec de l'action : avec `-1` on l'obtient toujours et avec `-0.5` on l'obtient avec une probabilité de 50 %.
- Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.
- La valeur par défaut est `1` (toujours récupérée en cas de succès).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## 単発アクション完了時
宝箱などの単発アクションを完了した時に発動
- single種別のアクション（宝箱など）を完了・確認した時に発動します。
- アクション自体の報酬とは別に、ここで設定した報酬を上乗せできます。
___

### [_l'information_](fr/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- `obtained`で固定されており、編集できません。
- 単発アクションを完了するたびに何度でも発動します。
___

### 初期表示状態
イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）
- イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
___

### 条件
報酬を獲得する条件
- タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。
- 報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。
- 条件を設定していない場合は、発動するたびに報酬を獲得します。
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

#### Type
Type d'élément référencé comme condition.

|Type|Valeurs référencées|
|-|-|
|カテゴリ|カテゴリのレベル|
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
- Avec `1` la consommation est systématique, avec `0.5` elle a lieu avec une probabilité de 50 % et avec `0` il n'y a pas de consommation.
- La valeur par défaut est `1` (consommation systématique).
- Invalide si le Type est différent de l'Objet.
___

#### Équipement
L'objet doit être dans un état équipé (valable uniquement si le Type est Objet) ou
- Lorsqu'il est activé, l'Objet doit être équipé ainsi que possédé.
- Invalide si le Type est différent de l'Objet.
___

### Agrégation de groupe
Traite l'id de la condition comme un ID de groupe et évalue selon le total de ses membres
- Une fois activé, l'id défini dans la condition (requirements) est traité comme l'ID d'un groupe des paramètres de base.
- Une condition dont le Type est Catégorie est évaluée selon la somme du Niveau de toutes les Catégories appartenant à ce groupe.
- Une condition dont le Type est Action est évaluée selon la somme du nombre d'exécutions de toutes les Actions appartenant à ce groupe.
- Une condition dont le Type est Objet est évaluée selon la somme des quantités possédées de tous les Objets appartenant à ce groupe.
- Les éléments verrouillés (autres que released) ne sont pas inclus dans le total.
- La probabilité de consommation de l'Objet (chance) et la condition d'équipement (equipment) sont ignorées, et rien n'est consommé. Elles ne servent qu'à l'évaluation.
- Lorsqu'il est désactivé, l'id de la condition est traité comme avant, comme l'ID d'une Catégorie, Action ou Objet individuel.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Type
Type d'élément à acquérir.

|Type|Ce qui est acquis.|
|-|-|
|カテゴリ|Niveau (conversion de l'expérience ajoutée)|
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
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probabilité [-1 à 1]
Probabilité de succès de l'acquisition (les valeurs négatives ne sont prises en compte qu'en cas d'échec)
- Configurez la probabilité d'obtention sous forme de nombre décimal compris entre -1 et 1. La valeur absolue est utilisée pour déterminer la probabilité.
- Lorsque la valeur est positive, elle n'est évaluée qu'en cas de réussite de l'action : avec `1` on l'obtient toujours et avec `0.5` on l'obtient avec une probabilité de 50 %.
- Lorsque la valeur est négative, elle n'est évaluée qu'en cas d'échec de l'action : avec `-1` on l'obtient toujours et avec `-0.5` on l'obtient avec une probabilité de 50 %.
- Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.
- La valeur par défaut est `1` (toujours récupérée en cas de succès).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。