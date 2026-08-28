
# adquisiciones
アイテムやカテゴリレベルの取得設定
- Configura las adquisiciones.
- アイテムの他にカテゴリのレベル、アクションの実行した回数を変更できます。
- Se puede configurar la probabilidad de obtener el producto.

|Tipo.|Adquisiciones.|
|-|-|
|カテゴリ|nivel|
|Acción.|Número de veces que se ha ejecutado.|
|Artículo|número de posesiones|
- [_type_](es/editor/type)
___

## Tipo.
Tipo de elemento que se va a adquirir.

|Tipo.|Lo que se adquiere.|
|-|-|
|カテゴリ|Nivel (conversión de experiencia añadida)|
|Acción.|Número de veces que se ha ejecutado.|
|Artículo|número de posesiones|
___

## ID del elemento
ID que identifica el elemento que se va a adquirir.
___

## valor
Valores numéricos que deben obtenerse
- Menos configuraciones negativas reducen el número de posesiones, el número de veces que se han realizado y su nivel. Sin embargo, no puede ser inferior a 0.
- Si un Artículo tiene una configuración máx. de posesiones (máximo), el número de posesiones no aumentará más allá de ese valor.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

## Probabilidad [-1 a 1]
Probabilidad de que la obtención alcance el éxito (los valores negativos solo se tienen en cuenta en caso de fracaso)
- Configuración de la probabilidad de obtención como un número decimal comprendido entre -1 y 1. Para calcular la probabilidad se utiliza el valor absoluto.
- Cuando el valor es positivo solo se evalúa si la acción tiene éxito: con `1` se obtiene siempre y con `0.5` se obtiene con una probabilidad del 50%.
- Cuando el valor es negativo solo se evalúa si la acción falla: con `-1` se obtiene siempre y con `-0.5` se obtiene con una probabilidad del 50%.
- Si el valor es `0`, no se obtiene en ningún caso, ni en caso de éxito ni en caso de fracaso.
- El valor por defecto es `1` (se obtiene siempre cuando la operación tiene éxito).