
# 変化イベント
カテゴリ・アクション・アイテムの数量が一度に条件量以上増えた時に発動する内部処理用イベント
- アクションの完了、購入・売却、宝箱の開封など、数量が変化するあらゆるタイミングでチェックされます。
- 条件（requirements）は所持数などの絶対値ではなく、そのタイミング1回分の増加量で判定します。複数回に分けた小さな増加は合算されません。
- 複数の条件を設定した場合、その1回の変化ですべての条件を同時に満たす必要があります。
- 条件を満たすたびに報酬を受け取り、何度でも繰り返し発動します。タスクと違って一度きりではありません。
- プレイヤーの画面には一切表示されません。ミッションの一覧にも出ず、達成のメッセージも出ません。
- [_unique_](fr/editor/unique)
___

## [_l'information_](fr/editor/information)
___

## カテゴリ
変化イベントが所属するカテゴリのID（画面に表示されないため分類のみに使われます）
- プレイヤーの画面には表示されないため、この設定は見た目に影響しません。
___

## タイミング
変化イベント発動のタイミング（`changed`固定）
- `changed`で固定されており、編集できません。
- 数量が変化するあらゆるタイミングでチェックされ、条件を満たすたびに繰り返し発動します。
___

## 初期表示状態
画面に表示されないため実質的に影響しません
- 変化イベントはプレイヤーの画面に表示されないため、この設定は使われません。
___

## 条件
変化イベント発動の条件（数量の増加量で判定）
- 設定した数だけ、そのタイミング1回で増えていれば条件を満たします。所持数などの絶対値は見ません。
- 例えばアイテムの条件を3に設定した場合、その1回でそのアイテムが3個以上増えていれば満たされます。
- 減少は増加条件には数えません。
- 複数の条件を設定した場合、その1回の変化ですべてを同時に満たす必要があります。
- 条件を設定していない変化イベントは発動しません。
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

### Type
Type d'élément référencé comme condition.

|Type|Valeurs référencées|
|-|-|
|カテゴリ|カテゴリのレベル|
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

## グループ集計
条件のidをグループIDとして扱い、所属する要素の増加量の合計で判定する
- 有効にすると、条件（requirements）に設定したidは基本設定のグループのIDとして扱われます。
- そのグループに属する全カテゴリ・全アクション・全アイテムの増加量を合計して判定します。
- 無効の場合は今まで通り、条件のidは個別のカテゴリ・アクション・アイテムのIDとして扱われます。
___

## 報酬
変化イベント発動時の報酬設定
- 条件を満たすたびに自動で受け取ります。プレイヤーの操作は不要です。
- カテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- 数量にマイナスを設定することもできます。
___

### Type
Type d'élément à acquérir.

|Type|Ce qui est acquis.|
|-|-|
|カテゴリ|Niveau (conversion de l'expérience ajoutée)|
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
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

### Probabilité [-1 à 1]
Probabilité de succès de l'acquisition (les valeurs négatives ne sont prises en compte qu'en cas d'échec)
- Configurez la probabilité d'obtention sous forme de nombre décimal compris entre -1 et 1. La valeur absolue est utilisée pour déterminer la probabilité.
- Lorsque la valeur est positive, elle n'est évaluée qu'en cas de réussite de l'action : avec `1` on l'obtient toujours et avec `0.5` on l'obtient avec une probabilité de 50 %.
- Lorsque la valeur est négative, elle n'est évaluée qu'en cas d'échec de l'action : avec `-1` on l'obtient toujours et avec `-0.5` on l'obtient avec une probabilité de 50 %.
- Avec la valeur `0`, on n'obtient rien en cas de succès ou d'échec.
- La valeur par défaut est `1` (toujours récupérée en cas de succès).
___

## 変化イベントグループ
内部管理用の表示グループ分類（画面に表示されないため実質未使用）
- 変化イベントはプレイヤーの画面に表示されないため、この設定は見た目に影響しません。