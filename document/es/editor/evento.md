
# Evento
Sistema de mensajes y recompensas activado por condiciones.
- Se activa cuando se cumplen los tiempos/condiciones configurados y se muestra un mensaje.
- Puede activarse al iniciarse por primera vez, cuando el juego terminado, al volver de estar desactivado o cuando se cumplen determinadas condiciones.
- Puede cambiar el nivel de la Categoría, el número de Acciones realizadas y el Artículo que se posee cuando se activa.
___

## [_información_](es/editor/información)
___

## cronometraje
Configuración del tiempo de activación de eventos.

|cronometraje|condición de activación|repita|
|-|-|-|
|"emparejado".|Cuando se cumplen por primera vez las condiciones configuradas en CONDICIONES.|sólo una vez|
|`comebacked`.|Cuando una persona vuelve de estar desactivada durante más de un segundo y hay una Acción Progresando.|a menudo|
|`gameovered`.|Cuando la resistencia del jugador se agota en combate.|a menudo|
|`completed`.|Cuando se alcanza el nivel máximo de todas las Categorías (maxCategoryLevels).|sólo una vez|
|`bienvenido`.|Cuando empecé en este mundo.|sólo una vez|
|`obtained`|Al completar o confirmar una acción de tipo «single» (como un cofre del tesoro, etc.). Si se cumplen los requisitos, también se sumarán las recompensas del evento.|a menudo|
___

## Estado inicial de visualización
Estado inicial de visualización del icono del evento (la activación depende del momento y, con esta configuración, no se activa)
- Las condiciones de activación del evento vienen determinadas por el momento en que se produce, y este parámetro solo afecta al aspecto del icono de la lista.
- secreted: No aparecerá en la lista de eventos hasta que se cumplan todos los requisitos (aunque la activación en sí se produce en el momento oportuno).
- oculto・sugerido: El icono aparece con una línea diagonal y se muestra como «no desbloqueado».
- «released»: la línea diagonal desaparece y se muestra como «liberado».
___

## condiciones generales
Condiciones para desencadenar eventos y conceder recompensas.
- Condiciones para desencadenar eventos o conceder recompensas.
- En «matched», solo se activa cuando se cumple esta condición y se obtiene la recompensa.
- Excepto en el caso de «matched», se activará cuando se cumplan las condiciones de tiempo. A continuación, solo se obtendrá la recompensa cuando se cumplan las configuraciones establecidas aquí.
___

### Tipo.
Tipo de elemento referenciado como condición.

|Tipo.|Valores de referencia|
|-|-|
|Categoría.|Nivel de Categoría.|
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
- Siempre se consume a `1`, 50% de probabilidad de consumo a `0.5` y no se consume a `0`.
- El valor por defecto es `1` (siempre se consume).
- No válido si el Tipo es distinto de Artículo.
___

### Equipamiento
Requiere que el Artículo esté en estado de Equipamiento (sólo válido si el Tipo es Artículo) o
- Cuando se activa, el Artículo Necesario debe estar Equipado y Poseído.
- No válido si el Tipo es distinto de Artículo.
___

## recompensa
Configuración de la recompensa cuando se activa el evento.
- Es la recompensa cuando se activa el evento.
- En «matched», solo se obtiene una recompensa cuando se cumplen las condiciones y se activa.
- Salvo en el caso de `matched`, solo se obtiene una recompensa cuando se cumplen las condiciones de tiempo y las condiciones de `conditions`.
- Puedes contar la cantidad a un valor negativo. Menos, si cuentas la cantidad de Artículos al `gameovered`, los perderás cuando el juego terminado.
___

### Tipo.
Tipo de elemento que se va a adquirir.

|Tipo.|Lo que se adquiere.|
|-|-|
|Categoría.|Nivel (conversión de experiencia añadida)|
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
- Si el Tipo es Categoría, el valor configurado se añade directamente al nivel (1 para 1 nivel, 0,5 para 0,5 nivel). La forma habitual de ajustar esto es configurando el valor de experiencia de la Acción. Esta configuración no es Innecesaria a menos que haya un propósito especial.
___

### Probabilidad [-1 a 1]
Probabilidad de que la obtención alcance el éxito (los valores negativos solo se tienen en cuenta en caso de fracaso)
- Configuración de la probabilidad de obtención como un número decimal comprendido entre -1 y 1. Para calcular la probabilidad se utiliza el valor absoluto.
- Cuando el valor es positivo, solo se evalúa si la acción tiene éxito; con un valor de `1` se obtiene siempre, y con un valor de `0,5`, se obtiene con una probabilidad del 50 %.
- Cuando el valor es negativo, solo se evalúa en caso de fracaso de la Acción; con `-1` se obtiene siempre, y con `-0,5`, se obtiene con una probabilidad del 50 %.
- Si el valor es `0`, no se obtiene en ningún caso, ni en caso de éxito ni en caso de fracaso.
- El valor por defecto es `1` (se obtiene siempre cuando la operación tiene éxito).
___

## grupo de trabajo
Identificador de grupo de la tarea (actualmente no se utiliza)
- Este elemento no está actualmente en uso. Está reservado para futuras mejoras.