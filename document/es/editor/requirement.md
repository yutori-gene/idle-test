
# condiciones generales
Configuración de los requisitos necesarios para el uso y la visualización de los elementos.
- カテゴリ、アクション、アイテムごとの各要素に設定する条件です。
- Si no se cumplen todas las condiciones de configuración, no se podrán realizar las operaciones indicadas en la tabla.
- Si la función de bloqueado está activada, el propio elemento se oculta hasta que se cumpla la condición.

|Dónde configurarlo|Lo que sólo puede hacerse si se cumplen las condiciones.|
|-|-|
|カテゴリ|カテゴリ内の全てのアクションの実行とアイテムの操作|
|Acción.|Ejecución de las Acciones|
|Artículo|Manipulación de Artículos (por ejemplo, Equipamiento)|
- [_type_](es/editor/type)
___

## Tipo.
Tipo de elemento referenciado como condición.

|Tipo.|Valores de referencia|
|-|-|
|カテゴリ|カテゴリのレベル|
|Acción.|Número de veces que se ha realizado la Acción.|
|Artículo|Número de Artículos contados.|
___

## ID del elemento
ID del elemento al que se refiere la condición.
___

## valor
Valores numéricos Necesarios para los requisitos.
- La condición se cumple si el valor es mayor o arriba del valor especificado.
___

## Probabilidad de consumo [0-1].
Probabilidad de que se consuma un Artículo (0-1, válido sólo si el Tipo es Artículo).
- Probabilidad de que se consuma un Artículo cuando se cumple la condición y se realiza la Acción.
- Con `1` siempre se consume, con `0.5` se consume con una probabilidad del 50% y con `0` no se consume.
- El valor predeterminado es `1` (siempre se consume).
- No válido si el Tipo es distinto de Artículo.
___

## Equipamiento
Requiere que el Artículo esté en estado de Equipamiento (sólo válido si el Tipo es Artículo) o
- Cuando se activa, el Artículo Necesario debe estar Equipado y Poseído.
- No válido si el Tipo es distinto de Artículo.