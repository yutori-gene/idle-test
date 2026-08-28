
# 変化イベント
カテゴリ・アクション・アイテムの数量が一度に条件量以上増えた時に発動する内部処理用イベント
- アクションの完了、購入・売却、宝箱の開封など、数量が変化するあらゆるタイミングでチェックされます。
- 条件（requirements）は所持数などの絶対値ではなく、そのタイミング1回分の増加量で判定します。複数回に分けた小さな増加は合算されません。
- 複数の条件を設定した場合、その1回の変化ですべての条件を同時に満たす必要があります。
- 条件を満たすたびに報酬を受け取り、何度でも繰り返し発動します。タスクと違って一度きりではありません。
- プレイヤーの画面には一切表示されません。ミッションの一覧にも出ず、達成のメッセージも出ません。
- [_unique_](es/editor/unique)
___

## [_información_](es/editor/information)
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

### Tipo.
Tipo de elemento referenciado como condición.

|Tipo.|Valores de referencia|
|-|-|
|カテゴリ|カテゴリのレベル|
|Acción.|Número de veces que se ha realizado la Acción.|
|Artículo|Número de Artículos contados.|
___

### ID del elemento
ID del elemento al que se refiere la condición.
___

### valor
Valores numéricos Necesarios para los requisitos.
- La condición se cumple si el valor es mayor o arriba del valor especificado.
___

### Probabilidad de consumo [0-1].
Probabilidad de que se consuma un Artículo (0-1, válido sólo si el Tipo es Artículo).
- Probabilidad de que se consuma un Artículo cuando se cumple la condición y se realiza la Acción.
- Con `1` siempre se consume, con `0.5` se consume con una probabilidad del 50% y con `0` no se consume.
- El valor predeterminado es `1` (siempre se consume).
- No válido si el Tipo es distinto de Artículo.
___

### Equipamiento
Requiere que el Artículo esté en estado de Equipamiento (sólo válido si el Tipo es Artículo) o
- Cuando se activa, el Artículo Necesario debe estar Equipado y Poseído.
- No válido si el Tipo es distinto de Artículo.
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

### Tipo.
Tipo de elemento que se va a adquirir.

|Tipo.|Lo que se adquiere.|
|-|-|
|カテゴリ|Nivel (conversión de experiencia añadida)|
|Acción.|Número de veces que se ha ejecutado.|
|Artículo|número de posesiones|
___

### ID del elemento
ID que identifica el elemento que se va a adquirir.
___

### valor
Valores numéricos que deben obtenerse
- Menos configuraciones negativas reducen el número de posesiones, el número de veces que se han realizado y su nivel. Sin embargo, no puede ser inferior a 0.
- Si un Artículo tiene una configuración máx. de posesiones (máximo), el número de posesiones no aumentará más allá de ese valor.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

### Probabilidad [-1 a 1]
Probabilidad de que la obtención alcance el éxito (los valores negativos solo se tienen en cuenta en caso de fracaso)
- Configuración de la probabilidad de obtención como un número decimal comprendido entre -1 y 1. Para calcular la probabilidad se utiliza el valor absoluto.
- Cuando el valor es positivo solo se evalúa si la acción tiene éxito: con `1` se obtiene siempre y con `0.5` se obtiene con una probabilidad del 50%.
- Cuando el valor es negativo solo se evalúa si la acción falla: con `-1` se obtiene siempre y con `-0.5` se obtiene con una probabilidad del 50%.
- Si el valor es `0`, no se obtiene en ningún caso, ni en caso de éxito ni en caso de fracaso.
- El valor por defecto es `1` (se obtiene siempre cuando la operación tiene éxito).
___

## 変化イベントグループ
内部管理用の表示グループ分類（画面に表示されないため実質未使用）
- 変化イベントはプレイヤーの画面に表示されないため、この設定は見た目に影響しません。