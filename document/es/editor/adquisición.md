
# adquisiciones
Configuración de adquisición a nivel de Artículo y Categoría.
- Configura las adquisiciones.
- Puede cambiar el nivel de la Categoría, así como el Artículo, y el número de veces que se ha realizado la Acción.
- Se puede configurar la probabilidad de obtener el producto.

|Tipo.|Adquisiciones.|
|-|-|
|Categoría.|nivel|
|Acción.|Número de veces que se ha ejecutado.|
|Artículo|número de posesiones|
- [_type_](es/editor/tipo)
___

## Tipo.
Tipo de elemento que se va a adquirir.

|Tipo.|Lo que se adquiere.|
|-|-|
|Categoría.|Nivel (conversión de experiencia añadida)|
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
- Si el Tipo es Categoría, el valor configurado se añade directamente al nivel (1 para 1 nivel, 0,5 para 0,5 nivel). La forma habitual de ajustar esto es configurando el valor de experiencia de la Acción. Esta configuración no es Innecesaria a menos que haya un propósito especial.
___

## Probabilidad [-1 a 1]
Probabilidad de que la obtención alcance el éxito (los valores negativos solo se tienen en cuenta en caso de fracaso)
- Configuración de la probabilidad de obtención como un número decimal comprendido entre -1 y 1. Para calcular la probabilidad se utiliza el valor absoluto.
- Cuando el valor es positivo, solo se evalúa si la acción tiene éxito; con un valor de `1` se obtiene siempre, y con un valor de `0,5`, se obtiene con una probabilidad del 50 %.
- Cuando el valor es negativo, solo se evalúa en caso de fracaso de la Acción; con `-1` se obtiene siempre, y con `-0,5`, se obtiene con una probabilidad del 50 %.
- Si el valor es `0`, no se obtiene en ningún caso, ni en caso de éxito ni en caso de fracaso.
- El valor por defecto es `1` (se obtiene siempre cuando la operación tiene éxito).