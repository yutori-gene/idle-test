
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
- [_task_](es/editor/task)
___

## 復帰時
オフラインから復帰した時に発動
- オフラインから1秒以上経過して復帰し、かつ進行中のアクションがあった時に発動します。
- 離れているあいだの進行のまとめと一緒に表示されます。
___

### [_información_](es/editor/information)
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

#### Tipo.
Tipo de elemento referenciado como condición.

|Tipo.|Valores de referencia|
|-|-|
|カテゴリ|カテゴリのレベル|
|Acción.|Número de veces que se ha realizado la Acción.|
|Artículo|Número de Artículos contados.|
___

#### ID del elemento
ID del elemento al que se refiere la condición.
___

#### valor
Valores numéricos Necesarios para los requisitos.
- La condición se cumple si el valor es mayor o arriba del valor especificado.
___

#### Probabilidad de consumo [0-1].
Probabilidad de que se consuma un Artículo (0-1, válido sólo si el Tipo es Artículo).
- Probabilidad de que se consuma un Artículo cuando se cumple la condición y se realiza la Acción.
- Con `1` siempre se consume, con `0.5` se consume con una probabilidad del 50% y con `0` no se consume.
- El valor predeterminado es `1` (siempre se consume).
- No válido si el Tipo es distinto de Artículo.
___

#### Equipamiento
Requiere que el Artículo esté en estado de Equipamiento (sólo válido si el Tipo es Artículo) o
- Cuando se activa, el Artículo Necesario debe estar Equipado y Poseído.
- No válido si el Tipo es distinto de Artículo.
___

### Agregación de grupo
Trata el id de la condición como un ID de grupo y evalúa según el total de sus miembros
- Al activarse, el id establecido en la condición (requirements) se trata como el ID de un grupo de la configuración básica.
- Una condición cuyo Type sea Categoría se evalúa según la suma del Nivel de todas las Categorías que pertenecen a ese grupo.
- Una condición cuyo Type sea Acción se evalúa según la suma del número de veces que se han ejecutado todas las Acciones que pertenecen a ese grupo.
- Una condición cuyo Type sea Artículo se evalúa según la suma de la cantidad poseída de todos los Artículos que pertenecen a ese grupo.
- Los elementos bloqueados (no released) no se incluyen en el total.
- La probabilidad de consumo del Artículo (chance) y la condición de equipamiento (equipment) se ignoran, y no se consume nada. Solo se usan para la evaluación.
- Cuando está desactivado, el id de la condición se trata como antes, como el ID de una Categoría, Acción o Artículo individual.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Tipo.
Tipo de elemento que se va a adquirir.

|Tipo.|Lo que se adquiere.|
|-|-|
|カテゴリ|Nivel (conversión de experiencia añadida)|
|Acción.|Número de veces que se ha ejecutado.|
|Artículo|número de posesiones|
___

#### ID del elemento
ID que identifica el elemento que se va a adquirir.
___

#### valor
Valores numéricos que deben obtenerse
- Menos configuraciones negativas reducen el número de posesiones, el número de veces que se han realizado y su nivel. Sin embargo, no puede ser inferior a 0.
- Si un Artículo tiene una configuración máx. de posesiones (máximo), el número de posesiones no aumentará más allá de ese valor.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probabilidad [-1 a 1]
Probabilidad de que la obtención alcance el éxito (los valores negativos solo se tienen en cuenta en caso de fracaso)
- Configuración de la probabilidad de obtención como un número decimal comprendido entre -1 y 1. Para calcular la probabilidad se utiliza el valor absoluto.
- Cuando el valor es positivo solo se evalúa si la acción tiene éxito: con `1` se obtiene siempre y con `0.5` se obtiene con una probabilidad del 50%.
- Cuando el valor es negativo solo se evalúa si la acción falla: con `-1` se obtiene siempre y con `-0.5` se obtiene con una probabilidad del 50%.
- Si el valor es `0`, no se obtiene en ningún caso, ni en caso de éxito ni en caso de fracaso.
- El valor por defecto es `1` (se obtiene siempre cuando la operación tiene éxito).
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

### [_información_](es/editor/information)
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

#### Tipo.
Tipo de elemento referenciado como condición.

|Tipo.|Valores de referencia|
|-|-|
|カテゴリ|カテゴリのレベル|
|Acción.|Número de veces que se ha realizado la Acción.|
|Artículo|Número de Artículos contados.|
___

#### ID del elemento
ID del elemento al que se refiere la condición.
___

#### valor
Valores numéricos Necesarios para los requisitos.
- La condición se cumple si el valor es mayor o arriba del valor especificado.
___

#### Probabilidad de consumo [0-1].
Probabilidad de que se consuma un Artículo (0-1, válido sólo si el Tipo es Artículo).
- Probabilidad de que se consuma un Artículo cuando se cumple la condición y se realiza la Acción.
- Con `1` siempre se consume, con `0.5` se consume con una probabilidad del 50% y con `0` no se consume.
- El valor predeterminado es `1` (siempre se consume).
- No válido si el Tipo es distinto de Artículo.
___

#### Equipamiento
Requiere que el Artículo esté en estado de Equipamiento (sólo válido si el Tipo es Artículo) o
- Cuando se activa, el Artículo Necesario debe estar Equipado y Poseído.
- No válido si el Tipo es distinto de Artículo.
___

### Agregación de grupo
Trata el id de la condición como un ID de grupo y evalúa según el total de sus miembros
- Al activarse, el id establecido en la condición (requirements) se trata como el ID de un grupo de la configuración básica.
- Una condición cuyo Type sea Categoría se evalúa según la suma del Nivel de todas las Categorías que pertenecen a ese grupo.
- Una condición cuyo Type sea Acción se evalúa según la suma del número de veces que se han ejecutado todas las Acciones que pertenecen a ese grupo.
- Una condición cuyo Type sea Artículo se evalúa según la suma de la cantidad poseída de todos los Artículos que pertenecen a ese grupo.
- Los elementos bloqueados (no released) no se incluyen en el total.
- La probabilidad de consumo del Artículo (chance) y la condición de equipamiento (equipment) se ignoran, y no se consume nada. Solo se usan para la evaluación.
- Cuando está desactivado, el id de la condición se trata como antes, como el ID de una Categoría, Acción o Artículo individual.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Tipo.
Tipo de elemento que se va a adquirir.

|Tipo.|Lo que se adquiere.|
|-|-|
|カテゴリ|Nivel (conversión de experiencia añadida)|
|Acción.|Número de veces que se ha ejecutado.|
|Artículo|número de posesiones|
___

#### ID del elemento
ID que identifica el elemento que se va a adquirir.
___

#### valor
Valores numéricos que deben obtenerse
- Menos configuraciones negativas reducen el número de posesiones, el número de veces que se han realizado y su nivel. Sin embargo, no puede ser inferior a 0.
- Si un Artículo tiene una configuración máx. de posesiones (máximo), el número de posesiones no aumentará más allá de ese valor.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probabilidad [-1 a 1]
Probabilidad de que la obtención alcance el éxito (los valores negativos solo se tienen en cuenta en caso de fracaso)
- Configuración de la probabilidad de obtención como un número decimal comprendido entre -1 y 1. Para calcular la probabilidad se utiliza el valor absoluto.
- Cuando el valor es positivo solo se evalúa si la acción tiene éxito: con `1` se obtiene siempre y con `0.5` se obtiene con una probabilidad del 50%.
- Cuando el valor es negativo solo se evalúa si la acción falla: con `-1` se obtiene siempre y con `-0.5` se obtiene con una probabilidad del 50%.
- Si el valor es `0`, no se obtiene en ningún caso, ni en caso de éxito ni en caso de fracaso.
- El valor por defecto es `1` (se obtiene siempre cuando la operación tiene éxito).
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

### [_información_](es/editor/information)
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

#### Tipo.
Tipo de elemento referenciado como condición.

|Tipo.|Valores de referencia|
|-|-|
|カテゴリ|カテゴリのレベル|
|Acción.|Número de veces que se ha realizado la Acción.|
|Artículo|Número de Artículos contados.|
___

#### ID del elemento
ID del elemento al que se refiere la condición.
___

#### valor
Valores numéricos Necesarios para los requisitos.
- La condición se cumple si el valor es mayor o arriba del valor especificado.
___

#### Probabilidad de consumo [0-1].
Probabilidad de que se consuma un Artículo (0-1, válido sólo si el Tipo es Artículo).
- Probabilidad de que se consuma un Artículo cuando se cumple la condición y se realiza la Acción.
- Con `1` siempre se consume, con `0.5` se consume con una probabilidad del 50% y con `0` no se consume.
- El valor predeterminado es `1` (siempre se consume).
- No válido si el Tipo es distinto de Artículo.
___

#### Equipamiento
Requiere que el Artículo esté en estado de Equipamiento (sólo válido si el Tipo es Artículo) o
- Cuando se activa, el Artículo Necesario debe estar Equipado y Poseído.
- No válido si el Tipo es distinto de Artículo.
___

### Agregación de grupo
Trata el id de la condición como un ID de grupo y evalúa según el total de sus miembros
- Al activarse, el id establecido en la condición (requirements) se trata como el ID de un grupo de la configuración básica.
- Una condición cuyo Type sea Categoría se evalúa según la suma del Nivel de todas las Categorías que pertenecen a ese grupo.
- Una condición cuyo Type sea Acción se evalúa según la suma del número de veces que se han ejecutado todas las Acciones que pertenecen a ese grupo.
- Una condición cuyo Type sea Artículo se evalúa según la suma de la cantidad poseída de todos los Artículos que pertenecen a ese grupo.
- Los elementos bloqueados (no released) no se incluyen en el total.
- La probabilidad de consumo del Artículo (chance) y la condición de equipamiento (equipment) se ignoran, y no se consume nada. Solo se usan para la evaluación.
- Cuando está desactivado, el id de la condición se trata como antes, como el ID de una Categoría, Acción o Artículo individual.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Tipo.
Tipo de elemento que se va a adquirir.

|Tipo.|Lo que se adquiere.|
|-|-|
|カテゴリ|Nivel (conversión de experiencia añadida)|
|Acción.|Número de veces que se ha ejecutado.|
|Artículo|número de posesiones|
___

#### ID del elemento
ID que identifica el elemento que se va a adquirir.
___

#### valor
Valores numéricos que deben obtenerse
- Menos configuraciones negativas reducen el número de posesiones, el número de veces que se han realizado y su nivel. Sin embargo, no puede ser inferior a 0.
- Si un Artículo tiene una configuración máx. de posesiones (máximo), el número de posesiones no aumentará más allá de ese valor.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probabilidad [-1 a 1]
Probabilidad de que la obtención alcance el éxito (los valores negativos solo se tienen en cuenta en caso de fracaso)
- Configuración de la probabilidad de obtención como un número decimal comprendido entre -1 y 1. Para calcular la probabilidad se utiliza el valor absoluto.
- Cuando el valor es positivo solo se evalúa si la acción tiene éxito: con `1` se obtiene siempre y con `0.5` se obtiene con una probabilidad del 50%.
- Cuando el valor es negativo solo se evalúa si la acción falla: con `-1` se obtiene siempre y con `-0.5` se obtiene con una probabilidad del 50%.
- Si el valor es `0`, no se obtiene en ningún caso, ni en caso de éxito ni en caso de fracaso.
- El valor por defecto es `1` (se obtiene siempre cuando la operación tiene éxito).
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

### [_información_](es/editor/information)
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

#### Tipo.
Tipo de elemento referenciado como condición.

|Tipo.|Valores de referencia|
|-|-|
|カテゴリ|カテゴリのレベル|
|Acción.|Número de veces que se ha realizado la Acción.|
|Artículo|Número de Artículos contados.|
___

#### ID del elemento
ID del elemento al que se refiere la condición.
___

#### valor
Valores numéricos Necesarios para los requisitos.
- La condición se cumple si el valor es mayor o arriba del valor especificado.
___

#### Probabilidad de consumo [0-1].
Probabilidad de que se consuma un Artículo (0-1, válido sólo si el Tipo es Artículo).
- Probabilidad de que se consuma un Artículo cuando se cumple la condición y se realiza la Acción.
- Con `1` siempre se consume, con `0.5` se consume con una probabilidad del 50% y con `0` no se consume.
- El valor predeterminado es `1` (siempre se consume).
- No válido si el Tipo es distinto de Artículo.
___

#### Equipamiento
Requiere que el Artículo esté en estado de Equipamiento (sólo válido si el Tipo es Artículo) o
- Cuando se activa, el Artículo Necesario debe estar Equipado y Poseído.
- No válido si el Tipo es distinto de Artículo.
___

### Agregación de grupo
Trata el id de la condición como un ID de grupo y evalúa según el total de sus miembros
- Al activarse, el id establecido en la condición (requirements) se trata como el ID de un grupo de la configuración básica.
- Una condición cuyo Type sea Categoría se evalúa según la suma del Nivel de todas las Categorías que pertenecen a ese grupo.
- Una condición cuyo Type sea Acción se evalúa según la suma del número de veces que se han ejecutado todas las Acciones que pertenecen a ese grupo.
- Una condición cuyo Type sea Artículo se evalúa según la suma de la cantidad poseída de todos los Artículos que pertenecen a ese grupo.
- Los elementos bloqueados (no released) no se incluyen en el total.
- La probabilidad de consumo del Artículo (chance) y la condición de equipamiento (equipment) se ignoran, y no se consume nada. Solo se usan para la evaluación.
- Cuando está desactivado, el id de la condición se trata como antes, como el ID de una Categoría, Acción o Artículo individual.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Tipo.
Tipo de elemento que se va a adquirir.

|Tipo.|Lo que se adquiere.|
|-|-|
|カテゴリ|Nivel (conversión de experiencia añadida)|
|Acción.|Número de veces que se ha ejecutado.|
|Artículo|número de posesiones|
___

#### ID del elemento
ID que identifica el elemento que se va a adquirir.
___

#### valor
Valores numéricos que deben obtenerse
- Menos configuraciones negativas reducen el número de posesiones, el número de veces que se han realizado y su nivel. Sin embargo, no puede ser inferior a 0.
- Si un Artículo tiene una configuración máx. de posesiones (máximo), el número de posesiones no aumentará más allá de ese valor.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probabilidad [-1 a 1]
Probabilidad de que la obtención alcance el éxito (los valores negativos solo se tienen en cuenta en caso de fracaso)
- Configuración de la probabilidad de obtención como un número decimal comprendido entre -1 y 1. Para calcular la probabilidad se utiliza el valor absoluto.
- Cuando el valor es positivo solo se evalúa si la acción tiene éxito: con `1` se obtiene siempre y con `0.5` se obtiene con una probabilidad del 50%.
- Cuando el valor es negativo solo se evalúa si la acción falla: con `-1` se obtiene siempre y con `-0.5` se obtiene con una probabilidad del 50%.
- Si el valor es `0`, no se obtiene en ningún caso, ni en caso de éxito ni en caso de fracaso.
- El valor por defecto es `1` (se obtiene siempre cuando la operación tiene éxito).
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

### [_información_](es/editor/information)
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

#### Tipo.
Tipo de elemento referenciado como condición.

|Tipo.|Valores de referencia|
|-|-|
|カテゴリ|カテゴリのレベル|
|Acción.|Número de veces que se ha realizado la Acción.|
|Artículo|Número de Artículos contados.|
___

#### ID del elemento
ID del elemento al que se refiere la condición.
___

#### valor
Valores numéricos Necesarios para los requisitos.
- La condición se cumple si el valor es mayor o arriba del valor especificado.
___

#### Probabilidad de consumo [0-1].
Probabilidad de que se consuma un Artículo (0-1, válido sólo si el Tipo es Artículo).
- Probabilidad de que se consuma un Artículo cuando se cumple la condición y se realiza la Acción.
- Con `1` siempre se consume, con `0.5` se consume con una probabilidad del 50% y con `0` no se consume.
- El valor predeterminado es `1` (siempre se consume).
- No válido si el Tipo es distinto de Artículo.
___

#### Equipamiento
Requiere que el Artículo esté en estado de Equipamiento (sólo válido si el Tipo es Artículo) o
- Cuando se activa, el Artículo Necesario debe estar Equipado y Poseído.
- No válido si el Tipo es distinto de Artículo.
___

### Agregación de grupo
Trata el id de la condición como un ID de grupo y evalúa según el total de sus miembros
- Al activarse, el id establecido en la condición (requirements) se trata como el ID de un grupo de la configuración básica.
- Una condición cuyo Type sea Categoría se evalúa según la suma del Nivel de todas las Categorías que pertenecen a ese grupo.
- Una condición cuyo Type sea Acción se evalúa según la suma del número de veces que se han ejecutado todas las Acciones que pertenecen a ese grupo.
- Una condición cuyo Type sea Artículo se evalúa según la suma de la cantidad poseída de todos los Artículos que pertenecen a ese grupo.
- Los elementos bloqueados (no released) no se incluyen en el total.
- La probabilidad de consumo del Artículo (chance) y la condición de equipamiento (equipment) se ignoran, y no se consume nada. Solo se usan para la evaluación.
- Cuando está desactivado, el id de la condición se trata como antes, como el ID de una Categoría, Acción o Artículo individual.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Tipo.
Tipo de elemento que se va a adquirir.

|Tipo.|Lo que se adquiere.|
|-|-|
|カテゴリ|Nivel (conversión de experiencia añadida)|
|Acción.|Número de veces que se ha ejecutado.|
|Artículo|número de posesiones|
___

#### ID del elemento
ID que identifica el elemento que se va a adquirir.
___

#### valor
Valores numéricos que deben obtenerse
- Menos configuraciones negativas reducen el número de posesiones, el número de veces que se han realizado y su nivel. Sin embargo, no puede ser inferior a 0.
- Si un Artículo tiene una configuración máx. de posesiones (máximo), el número de posesiones no aumentará más allá de ese valor.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probabilidad [-1 a 1]
Probabilidad de que la obtención alcance el éxito (los valores negativos solo se tienen en cuenta en caso de fracaso)
- Configuración de la probabilidad de obtención como un número decimal comprendido entre -1 y 1. Para calcular la probabilidad se utiliza el valor absoluto.
- Cuando el valor es positivo solo se evalúa si la acción tiene éxito: con `1` se obtiene siempre y con `0.5` se obtiene con una probabilidad del 50%.
- Cuando el valor es negativo solo se evalúa si la acción falla: con `-1` se obtiene siempre y con `-0.5` se obtiene con una probabilidad del 50%.
- Si el valor es `0`, no se obtiene en ningún caso, ni en caso de éxito ni en caso de fracaso.
- El valor por defecto es `1` (se obtiene siempre cuando la operación tiene éxito).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。