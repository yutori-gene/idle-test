
# Tarea
Misiones que se completan al cumplir los requisitos
- Cuando se cumplan las condiciones de configuración, se considerará completada la tarea y aparecerá un mensaje arriba de la pantalla.
- プレイヤーのミッションの一覧と、カテゴリのタスクの一覧に表示されます。
- La recompensa no se entrega automáticamente. El jugador la recibe cuando abre la tarea y pulsa la barra de adquisiciones.
- Hasta que se reciba la recompensa, aparecerá una cinta en la barra de la lista que indica que aún no se ha recibido.
- 獲得でカテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- 初回起動時やゲームオーバー時など、条件以外のタイミングで発動させたいものは固定イベント（unique）で設定します。
- [_unique_](es/editor/unique)
___

## [_información_](es/editor/information)
___

## カテゴリ
タスクが所属するカテゴリのID
- このタスクを所属させるカテゴリのIDを指定します。
- 設定すると、プレイヤーのカテゴリの画面にタスクの一覧が追加され、ミッションの一覧でもカテゴリごとにまとめて表示されます。
- 空欄の場合はどのカテゴリにも属さず、ミッションの一覧の先頭にまとめて表示されます。
___

## cronometraje
タスク発動のタイミング（`tasked`固定）
- タスクは`tasked`（設定した条件を満たした時）で固定されており、編集できません。
- Solo se puede recibir la recompensa una vez; una vez recibida, el logro se mantiene sin cambios.
- それ以外の決まったタイミングで発動させたいものは、固定イベント（unique）で設定します。
- [_unique_](es/editor/unique)
___

## Estado inicial de visualización
Estado inicial del icono de la tarea (su finalización depende de ciertas condiciones; con esta configuración, no se da por finalizada)
- タスクの達成条件はrequirementsで決まり、この項目は一覧アイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでタスクの一覧に一切表示されません（達成自体は条件で起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
- 一度達成したタスクは一覧から消えず、その後に条件を満たさなくなっても達成のまま表示されます。
___

## condiciones generales
Condiciones para completar la tarea
- タスクを達成させる条件です。
- この条件を満たすと達成になり、報酬を受け取れるようになります。
- 一度達成すると、その後に条件を満たさなくなっても達成のままで、報酬もいつでも受け取れます。
- 条件を設定していないタスクは達成しません。
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

## Agregación de grupo
Trata el id de la condición como un ID de grupo y evalúa según el total de sus miembros
- Al activarse, el id establecido en la condición (requirements) se trata como el ID de un grupo de la configuración básica.
- Una condición cuyo Type sea Categoría se evalúa según la suma del Nivel de todas las Categorías que pertenecen a ese grupo.
- Una condición cuyo Type sea Acción se evalúa según la suma del número de veces que se han ejecutado todas las Acciones que pertenecen a ese grupo.
- Una condición cuyo Type sea Artículo se evalúa según la suma de la cantidad poseída de todos los Artículos que pertenecen a ese grupo.
- Los elementos bloqueados (no released) no se incluyen en el total.
- La probabilidad de consumo del Artículo (chance) y la condición de equipamiento (equipment) se ignoran, y no se consume nada. Solo se usan para la evaluación.
- Cuando está desactivado, el id de la condición se trata como antes, como el ID de una Categoría, Acción o Artículo individual.
___

## recompensa
Configuración de recompensas al completar tareas
- 達成したタスクを開き、獲得のバーを押した時に受け取れる報酬です。
- カテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- 数量にマイナスを設定することもできます。
- 報酬を設定していないタスクは獲得のバーが出ず、達成した時点で完了になります。
- 持てるアイテムの種類が上限に達している時は受け取れません。整理してから受け取り直します。
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

## grupo de trabajo
Clasificación de los grupos de visualización de tareas
- Aplique uno de los grupos configurados en Básico.
- La lista de tareas se muestra según el orden de la configuración de los grupos.
- カテゴリの中でさらにグループごとに分けて表示されます。
- Si se deja en blanco, no se realiza ninguna agrupación.
- [_general_](es/editor/general)