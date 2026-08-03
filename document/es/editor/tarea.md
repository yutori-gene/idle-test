
# Tarea
Misiones que se completan al cumplir los requisitos
- Cuando se cumplan las condiciones de configuración, se considerará completada la tarea y aparecerá un mensaje arriba de la pantalla.
- Aparecerá en la lista de misiones del jugador y en la lista de tareas de la Categoría.
- La recompensa no se entrega automáticamente. El jugador la recibe cuando abre la tarea y pulsa la barra de adquisiciones.
- Hasta que se reciba la recompensa, aparecerá una cinta en la barra de la lista que indica que aún no se ha recibido.
- Con las adquisiciones, puedes modificar el nivel de la categoría, el número de veces que se ejecuta una acción y la cantidad de artículos que posees.
- Los elementos que se deseen activar en momentos distintos a los establecidos, como al iniciar el juego por primera vez o al terminar el juego terminado, se configuran en los eventos de la configuración básica.
- [_event_](es/editor/evento)
___

## [_información_](es/editor/información)
___

## Categoría.
El ID de la categoría a la que pertenece la tarea
- Especifica el ID de la categoría a la que se asignará esta tarea.
- Una vez realizada la configuración, se añadirá una lista de tareas a la pantalla de categorías del jugador y, en la lista de misiones, estas se mostrarán agrupadas por categorías.
- Si se deja en blanco, no se incluirá en ninguna categoría y aparecerá agrupado al principio de la lista de misiones.
___

## cronometraje
Momento de activación de la tarea (fijado en `matched`)
- La tarea está fijada en «`matched`» (cuando se cumplen las configuraciones establecidas) y no se puede editar.
- Solo se puede recibir la recompensa una vez; una vez recibida, el logro se mantiene sin cambios.
- Aquello que se desee activar en cualquier otro momento se configura en los eventos de la configuración básica.
- [_event_](es/editor/evento)
___

## Estado inicial de visualización
Estado inicial del icono de la tarea (su finalización depende de ciertas condiciones; con esta configuración, no se da por finalizada)
- Los requisitos para completar una tarea se establecen en «requirements», y este campo solo afecta al aspecto del icono de la lista.
- secreted: No aparecerá en la lista de tareas hasta que se cumplan todos los requisitos (el cumplimiento en sí mismo se produce en función de las condiciones).
- oculto・sugerido: El icono aparece con una línea diagonal y se muestra como «no desbloqueado».
- «released»: la línea diagonal desaparece y se muestra como «liberado».
- Las tareas que ya se han completado no desaparecen de la lista. Si están en modo Atrás, se indican con una barra en el icono.
___

## condiciones generales
Condiciones para completar la tarea
- Estas son las condiciones para completar la tarea.
- Si cumples esta condición, se considerará que has completado el objetivo y podrás recibir la recompensa.
- Si dejas de cumplir los requisitos antes de recibir la recompensa, volverás al estado «sin cumplir» y ya no podrás recibirla. Podrás volver a recibirla si vuelves a cumplir los requisitos.
- No se completarán las tareas para las que no se haya realizado la configuración.
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
Configuración de recompensas al completar tareas
- Es la recompensa que se obtiene al abrir una tarea completada y pulsar la barra de adquisiciones.
- Se pueden modificar el nivel de la categoría, el número de veces que se realiza una acción y la cantidad de artículos que se tienen.
- También se puede configurar un valor menos en la cantidad.
- En las tareas para las que no se haya realizado ninguna configuración de recompensa no aparecerá la barra de progreso, y se darán por finalizadas en el momento en que se completen.
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
Clasificación de los grupos de visualización de tareas
- Aplique uno de los grupos configurados en Básico.
- La lista de tareas se muestra según el orden de la configuración de los grupos.
- Dentro de cada categoría, se muestran divididos en grupos.
- Si se deja en blanco, no se realiza ninguna agrupación.
- [_general_](es/editor/general)