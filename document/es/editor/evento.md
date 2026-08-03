
# Evento
Mensajes y recompensas que se activan en momentos determinados
- Se activa en momentos concretos, como al abrir un mundo por primera vez o al terminar el juego, y abre una pantalla específica.
- Hay uno preparado para cada momento y no se pueden añadir ni eliminar. Los momentos en los que no se utilice deben dejarse en blanco.
- No aparecerá en la lista de misiones ni de tareas. Las acciones que se consideren completadas al cumplir una serie de condiciones deben tener una configuración de tarea.
- La recompensa se adquiere automáticamente en el momento en que se activa. No hay que realizar ninguna acción para recibirla, como en el caso de las tareas, ni aparece ninguna cinta.
- Puede cambiar el nivel de la Categoría, el número de Acciones realizadas y el Artículo que se posee cuando se activa.
- Si se dejan en blanco los campos «Nombre», «Descripción» e «Icono», se utilizarán el texto y el icono predeterminados que lleva incorporados el jugador.

|cronometraje|condición de activación|repita|
|-|-|-|
|`comebacked`.|Cuando una persona vuelve de estar desactivada durante más de un segundo y hay una Acción Progresando.|a menudo|
|`gameovered`.|Cuando la resistencia del jugador se agota en combate.|a menudo|
|`bienvenido`.|Cuando empecé en este mundo.|sólo una vez|
|`completed`.|Cuando se alcanza el nivel máximo de todas las Categorías (maxCategoryLevels).|sólo una vez|
|`obtained`|Al completar o confirmar una acción de un tipo concreto (como un cofre del tesoro, etc.)|a menudo|
- [_task_](es/editor/tarea)
___

## En el momento del regreso
Se activa al volver a la conexión
- Se activa cuando se vuelve a la conexión tras haber estado desconectado durante más de un segundo y hay alguna acción progresando.
- Se mostrará junto con un resumen del progreso realizado durante el tiempo que has estado ausente.
___

### [_información_](es/editor/información)
___

### Categoría.
No se utilizará en el evento
- Dado que no aparece en la lista de misiones ni de tareas, no se especifica la categoría a la que pertenece.
- En el editor no aparece el campo de entrada.
___

### cronometraje
Momento en que se activa el evento (fijo)
- Está fijado en «comebacked» y no se puede editar.
- Se activa tantas veces como sea necesario cada vez que vuelvas.
___

### Estado inicial de visualización
Estado inicial de visualización del icono del evento (la activación depende del momento y, con esta configuración, no se activa)
- Las condiciones de activación del evento vienen determinadas por el momento en que se produce, y este parámetro solo afecta al aspecto del icono.
- secreted: El icono no se muestra hasta que se cumplan todos los requisitos (aunque la activación en sí se produce en el momento oportuno).
- oculto・sugerido: El icono aparece con una línea diagonal y se muestra como «no desbloqueado».
- «released»: la línea diagonal desaparece y se muestra como «liberado».
___

### condiciones generales
Condiciones para obtener la recompensa
- Cuando se cumple la condición, se activa el evento y se abre una pantalla específica para mostrar el contenido.
- La recompensa solo se obtendrá si, en el momento de su activación, se cumplen las condiciones configuradas aquí.
- Si no se ha realizado la configuración, obtendrás una recompensa cada vez que se active.
___

#### Tipo.
Tipo de elemento referenciado como condición.

|Tipo.|Valores de referencia|
|-|-|
|Categoría.|Nivel de Categoría.|
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
- Siempre se consume a `1`, 50% de probabilidad de consumo a `0.5` y no se consume a `0`.
- El valor por defecto es `1` (siempre se consume).
- No válido si el Tipo es distinto de Artículo.
___

#### Equipamiento
Requiere que el Artículo esté en estado de Equipamiento (sólo válido si el Tipo es Artículo) o
- Cuando se activa, el Artículo Necesario debe estar Equipado y Poseído.
- No válido si el Tipo es distinto de Artículo.
___

### recompensa
Configuración de la recompensa cuando se activa el evento.
- Es la recompensa que se obtiene cuando se cumple el momento oportuno y se satisfacen las condiciones.
- A diferencia de las tareas, no es necesario realizar ninguna acción para recibirlo, ya que se realiza la adquisición automáticamente en el momento en que se activa.
- Se puede establecer un valor negativo para la cantidad. Por ejemplo, si al terminar el juego se establece un valor negativo para la cantidad de artículos, estos se perderán.
___

#### Tipo.
Tipo de elemento que se va a adquirir.

|Tipo.|Lo que se adquiere.|
|-|-|
|Categoría.|Nivel (conversión de experiencia añadida)|
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
- Si el Tipo es Categoría, el valor configurado se añade directamente al nivel (1 para 1 nivel, 0,5 para 0,5 nivel). La forma habitual de ajustar esto es configurando el valor de experiencia de la Acción. Esta configuración no es Innecesaria a menos que haya un propósito especial.
___

#### Probabilidad [-1 a 1]
Probabilidad de que la obtención alcance el éxito (los valores negativos solo se tienen en cuenta en caso de fracaso)
- Configuración de la probabilidad de obtención como un número decimal comprendido entre -1 y 1. Para calcular la probabilidad se utiliza el valor absoluto.
- Cuando el valor es positivo, solo se evalúa si la acción tiene éxito; con un valor de `1` se obtiene siempre, y con un valor de `0,5`, se obtiene con una probabilidad del 50 %.
- Cuando el valor es negativo, solo se evalúa en caso de fracaso de la Acción; con `-1` se obtiene siempre, y con `-0,5`, se obtiene con una probabilidad del 50 %.
- Si el valor es `0`, no se obtiene en ningún caso, ni en caso de éxito ni en caso de fracaso.
- El valor por defecto es `1` (se obtiene siempre cuando la operación tiene éxito).
___

### grupo de trabajo
No se utilizará en el evento
- No utilizamos la designación de grupos, ya que no aparecen en la lista de misiones y tareas.
- En el editor no aparece el campo de entrada.
___

## Cuando el juego termina
Se activa cuando te quedas sin resistencia en combate
- Se activa cuando el jugador se queda sin resistencia durante el combate.
- Si se configura un valor negativo en la cantidad de la recompensa, se puede hacer que haya un castigo por el juego terminado.
___

### [_información_](es/editor/información)
___

### Categoría.
No se utilizará en el evento
- Dado que no aparece en la lista de misiones ni de tareas, no se especifica la categoría a la que pertenece.
- En el editor no aparece el campo de entrada.
___

### cronometraje
Momento en que se activa el evento (fijo)
- Está fijado en «gameovered» y no se puede editar.
- Se activa tantas veces como sea necesario cada vez que se produce el juego terminado.
___

### Estado inicial de visualización
Estado inicial de visualización del icono del evento (la activación depende del momento y, con esta configuración, no se activa)
- Las condiciones de activación del evento vienen determinadas por el momento en que se produce, y este parámetro solo afecta al aspecto del icono.
- secreted: El icono no se muestra hasta que se cumplan todos los requisitos (aunque la activación en sí se produce en el momento oportuno).
- oculto・sugerido: El icono aparece con una línea diagonal y se muestra como «no desbloqueado».
- «released»: la línea diagonal desaparece y se muestra como «liberado».
___

### condiciones generales
Condiciones para obtener la recompensa
- Cuando se cumple la condición, se activa el evento y se abre una pantalla específica para mostrar el contenido.
- La recompensa solo se obtendrá si, en el momento de su activación, se cumplen las condiciones configuradas aquí.
- Si no se ha realizado la configuración, obtendrás una recompensa cada vez que se active.
___

#### Tipo.
Tipo de elemento referenciado como condición.

|Tipo.|Valores de referencia|
|-|-|
|Categoría.|Nivel de Categoría.|
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
- Siempre se consume a `1`, 50% de probabilidad de consumo a `0.5` y no se consume a `0`.
- El valor por defecto es `1` (siempre se consume).
- No válido si el Tipo es distinto de Artículo.
___

#### Equipamiento
Requiere que el Artículo esté en estado de Equipamiento (sólo válido si el Tipo es Artículo) o
- Cuando se activa, el Artículo Necesario debe estar Equipado y Poseído.
- No válido si el Tipo es distinto de Artículo.
___

### recompensa
Configuración de la recompensa cuando se activa el evento.
- Es la recompensa que se obtiene cuando se cumple el momento oportuno y se satisfacen las condiciones.
- A diferencia de las tareas, no es necesario realizar ninguna acción para recibirlo, ya que se realiza la adquisición automáticamente en el momento en que se activa.
- Se puede establecer un valor negativo para la cantidad. Por ejemplo, si al terminar el juego se establece un valor negativo para la cantidad de artículos, estos se perderán.
___

#### Tipo.
Tipo de elemento que se va a adquirir.

|Tipo.|Lo que se adquiere.|
|-|-|
|Categoría.|Nivel (conversión de experiencia añadida)|
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
- Si el Tipo es Categoría, el valor configurado se añade directamente al nivel (1 para 1 nivel, 0,5 para 0,5 nivel). La forma habitual de ajustar esto es configurando el valor de experiencia de la Acción. Esta configuración no es Innecesaria a menos que haya un propósito especial.
___

#### Probabilidad [-1 a 1]
Probabilidad de que la obtención alcance el éxito (los valores negativos solo se tienen en cuenta en caso de fracaso)
- Configuración de la probabilidad de obtención como un número decimal comprendido entre -1 y 1. Para calcular la probabilidad se utiliza el valor absoluto.
- Cuando el valor es positivo, solo se evalúa si la acción tiene éxito; con un valor de `1` se obtiene siempre, y con un valor de `0,5`, se obtiene con una probabilidad del 50 %.
- Cuando el valor es negativo, solo se evalúa en caso de fracaso de la Acción; con `-1` se obtiene siempre, y con `-0,5`, se obtiene con una probabilidad del 50 %.
- Si el valor es `0`, no se obtiene en ningún caso, ni en caso de éxito ni en caso de fracaso.
- El valor por defecto es `1` (se obtiene siempre cuando la operación tiene éxito).
___

### grupo de trabajo
No se utilizará en el evento
- No utilizamos la designación de grupos, ya que no aparecen en la lista de misiones y tareas.
- En el editor no aparece el campo de entrada.
___

## Al comenzar por primera vez
Se activa la primera vez que se abre el mundo
- Se activa la primera vez que se inicia este mundo.
- Se utiliza para explicar el universo de la historia y para entregar los objetos iniciales al comenzar el juego.
___

### [_información_](es/editor/información)
___

### Categoría.
No se utilizará en el evento
- Dado que no aparece en la lista de misiones ni de tareas, no se especifica la categoría a la que pertenece.
- En el editor no aparece el campo de entrada.
___

### cronometraje
Momento en que se activa el evento (fijo)
- Está fijado en «welcomed» y no se puede editar.
- Se activa una sola vez al iniciarlo por primera vez.
___

### Estado inicial de visualización
Estado inicial de visualización del icono del evento (la activación depende del momento y, con esta configuración, no se activa)
- Las condiciones de activación del evento vienen determinadas por el momento en que se produce, y este parámetro solo afecta al aspecto del icono.
- secreted: El icono no se muestra hasta que se cumplan todos los requisitos (aunque la activación en sí se produce en el momento oportuno).
- oculto・sugerido: El icono aparece con una línea diagonal y se muestra como «no desbloqueado».
- «released»: la línea diagonal desaparece y se muestra como «liberado».
___

### condiciones generales
Condiciones para obtener la recompensa
- Cuando se cumple la condición, se activa el evento y se abre una pantalla específica para mostrar el contenido.
- La recompensa solo se obtendrá si, en el momento de su activación, se cumplen las condiciones configuradas aquí.
- Si no se ha realizado la configuración, obtendrás una recompensa cada vez que se active.
___

#### Tipo.
Tipo de elemento referenciado como condición.

|Tipo.|Valores de referencia|
|-|-|
|Categoría.|Nivel de Categoría.|
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
- Siempre se consume a `1`, 50% de probabilidad de consumo a `0.5` y no se consume a `0`.
- El valor por defecto es `1` (siempre se consume).
- No válido si el Tipo es distinto de Artículo.
___

#### Equipamiento
Requiere que el Artículo esté en estado de Equipamiento (sólo válido si el Tipo es Artículo) o
- Cuando se activa, el Artículo Necesario debe estar Equipado y Poseído.
- No válido si el Tipo es distinto de Artículo.
___

### recompensa
Configuración de la recompensa cuando se activa el evento.
- Es la recompensa que se obtiene cuando se cumple el momento oportuno y se satisfacen las condiciones.
- A diferencia de las tareas, no es necesario realizar ninguna acción para recibirlo, ya que se realiza la adquisición automáticamente en el momento en que se activa.
- Se puede establecer un valor negativo para la cantidad. Por ejemplo, si al terminar el juego se establece un valor negativo para la cantidad de artículos, estos se perderán.
___

#### Tipo.
Tipo de elemento que se va a adquirir.

|Tipo.|Lo que se adquiere.|
|-|-|
|Categoría.|Nivel (conversión de experiencia añadida)|
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
- Si el Tipo es Categoría, el valor configurado se añade directamente al nivel (1 para 1 nivel, 0,5 para 0,5 nivel). La forma habitual de ajustar esto es configurando el valor de experiencia de la Acción. Esta configuración no es Innecesaria a menos que haya un propósito especial.
___

#### Probabilidad [-1 a 1]
Probabilidad de que la obtención alcance el éxito (los valores negativos solo se tienen en cuenta en caso de fracaso)
- Configuración de la probabilidad de obtención como un número decimal comprendido entre -1 y 1. Para calcular la probabilidad se utiliza el valor absoluto.
- Cuando el valor es positivo, solo se evalúa si la acción tiene éxito; con un valor de `1` se obtiene siempre, y con un valor de `0,5`, se obtiene con una probabilidad del 50 %.
- Cuando el valor es negativo, solo se evalúa en caso de fracaso de la Acción; con `-1` se obtiene siempre, y con `-0,5`, se obtiene con una probabilidad del 50 %.
- Si el valor es `0`, no se obtiene en ningún caso, ni en caso de éxito ni en caso de fracaso.
- El valor por defecto es `1` (se obtiene siempre cuando la operación tiene éxito).
___

### grupo de trabajo
No se utilizará en el evento
- No utilizamos la designación de grupos, ya que no aparecen en la lista de misiones y tareas.
- En el editor no aparece el campo de entrada.
___

## Al completar el juego
Se activa cuando todas las categorías alcanzan el nivel máximo
- Se activa cuando el nivel de todas las categorías alcanza el valor máximo (maxCategoryLevels).
- Las categorías que no sean numéricas se excluirán de la evaluación.
___

### [_información_](es/editor/información)
___

### Categoría.
No se utilizará en el evento
- Dado que no aparece en la lista de misiones ni de tareas, no se especifica la categoría a la que pertenece.
- En el editor no aparece el campo de entrada.
___

### cronometraje
Momento en que se activa el evento (fijo)
- Está fijado en «completed» y no se puede editar.
- Se activa una sola vez cuando se cumplen las condiciones.
___

### Estado inicial de visualización
Estado inicial de visualización del icono del evento (la activación depende del momento y, con esta configuración, no se activa)
- Las condiciones de activación del evento vienen determinadas por el momento en que se produce, y este parámetro solo afecta al aspecto del icono.
- secreted: El icono no se muestra hasta que se cumplan todos los requisitos (aunque la activación en sí se produce en el momento oportuno).
- oculto・sugerido: El icono aparece con una línea diagonal y se muestra como «no desbloqueado».
- «released»: la línea diagonal desaparece y se muestra como «liberado».
___

### condiciones generales
Condiciones para obtener la recompensa
- Cuando se cumple la condición, se activa el evento y se abre una pantalla específica para mostrar el contenido.
- La recompensa solo se obtendrá si, en el momento de su activación, se cumplen las condiciones configuradas aquí.
- Si no se ha realizado la configuración, obtendrás una recompensa cada vez que se active.
___

#### Tipo.
Tipo de elemento referenciado como condición.

|Tipo.|Valores de referencia|
|-|-|
|Categoría.|Nivel de Categoría.|
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
- Siempre se consume a `1`, 50% de probabilidad de consumo a `0.5` y no se consume a `0`.
- El valor por defecto es `1` (siempre se consume).
- No válido si el Tipo es distinto de Artículo.
___

#### Equipamiento
Requiere que el Artículo esté en estado de Equipamiento (sólo válido si el Tipo es Artículo) o
- Cuando se activa, el Artículo Necesario debe estar Equipado y Poseído.
- No válido si el Tipo es distinto de Artículo.
___

### recompensa
Configuración de la recompensa cuando se activa el evento.
- Es la recompensa que se obtiene cuando se cumple el momento oportuno y se satisfacen las condiciones.
- A diferencia de las tareas, no es necesario realizar ninguna acción para recibirlo, ya que se realiza la adquisición automáticamente en el momento en que se activa.
- Se puede establecer un valor negativo para la cantidad. Por ejemplo, si al terminar el juego se establece un valor negativo para la cantidad de artículos, estos se perderán.
___

#### Tipo.
Tipo de elemento que se va a adquirir.

|Tipo.|Lo que se adquiere.|
|-|-|
|Categoría.|Nivel (conversión de experiencia añadida)|
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
- Si el Tipo es Categoría, el valor configurado se añade directamente al nivel (1 para 1 nivel, 0,5 para 0,5 nivel). La forma habitual de ajustar esto es configurando el valor de experiencia de la Acción. Esta configuración no es Innecesaria a menos que haya un propósito especial.
___

#### Probabilidad [-1 a 1]
Probabilidad de que la obtención alcance el éxito (los valores negativos solo se tienen en cuenta en caso de fracaso)
- Configuración de la probabilidad de obtención como un número decimal comprendido entre -1 y 1. Para calcular la probabilidad se utiliza el valor absoluto.
- Cuando el valor es positivo, solo se evalúa si la acción tiene éxito; con un valor de `1` se obtiene siempre, y con un valor de `0,5`, se obtiene con una probabilidad del 50 %.
- Cuando el valor es negativo, solo se evalúa en caso de fracaso de la Acción; con `-1` se obtiene siempre, y con `-0,5`, se obtiene con una probabilidad del 50 %.
- Si el valor es `0`, no se obtiene en ningún caso, ni en caso de éxito ni en caso de fracaso.
- El valor por defecto es `1` (se obtiene siempre cuando la operación tiene éxito).
___

### grupo de trabajo
No se utilizará en el evento
- No utilizamos la designación de grupos, ya que no aparecen en la lista de misiones y tareas.
- En el editor no aparece el campo de entrada.
___

## Al finalizar una acción puntual
Se activa al completar una acción puntual, como abrir un cofre del tesoro
- Se activa al completar o confirmar una acción de tipo «single» (como un cofre del tesoro, etc.).
- Además de la recompensa de la Acción en sí, se puede añadir la recompensa configurada aquí.
___

### [_información_](es/editor/información)
___

### Categoría.
No se utilizará en el evento
- Dado que no aparece en la lista de misiones ni de tareas, no se especifica la categoría a la que pertenece.
- En el editor no aparece el campo de entrada.
___

### cronometraje
Momento en que se activa el evento (fijo)
- Está fijado en «obtained» y no se puede editar.
- Se activa tantas veces como sea necesario cada vez que se completa una acción puntual.
___

### Estado inicial de visualización
Estado inicial de visualización del icono del evento (la activación depende del momento y, con esta configuración, no se activa)
- Las condiciones de activación del evento vienen determinadas por el momento en que se produce, y este parámetro solo afecta al aspecto del icono.
- secreted: El icono no se muestra hasta que se cumplan todos los requisitos (aunque la activación en sí se produce en el momento oportuno).
- oculto・sugerido: El icono aparece con una línea diagonal y se muestra como «no desbloqueado».
- «released»: la línea diagonal desaparece y se muestra como «liberado».
___

### condiciones generales
Condiciones para obtener la recompensa
- Cuando se cumple la condición, se activa el evento y se abre una pantalla específica para mostrar el contenido.
- La recompensa solo se obtendrá si, en el momento de su activación, se cumplen las condiciones configuradas aquí.
- Si no se ha realizado la configuración, obtendrás una recompensa cada vez que se active.
___

#### Tipo.
Tipo de elemento referenciado como condición.

|Tipo.|Valores de referencia|
|-|-|
|Categoría.|Nivel de Categoría.|
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
- Siempre se consume a `1`, 50% de probabilidad de consumo a `0.5` y no se consume a `0`.
- El valor por defecto es `1` (siempre se consume).
- No válido si el Tipo es distinto de Artículo.
___

#### Equipamiento
Requiere que el Artículo esté en estado de Equipamiento (sólo válido si el Tipo es Artículo) o
- Cuando se activa, el Artículo Necesario debe estar Equipado y Poseído.
- No válido si el Tipo es distinto de Artículo.
___

### recompensa
Configuración de la recompensa cuando se activa el evento.
- Es la recompensa que se obtiene cuando se cumple el momento oportuno y se satisfacen las condiciones.
- A diferencia de las tareas, no es necesario realizar ninguna acción para recibirlo, ya que se realiza la adquisición automáticamente en el momento en que se activa.
- Se puede establecer un valor negativo para la cantidad. Por ejemplo, si al terminar el juego se establece un valor negativo para la cantidad de artículos, estos se perderán.
___

#### Tipo.
Tipo de elemento que se va a adquirir.

|Tipo.|Lo que se adquiere.|
|-|-|
|Categoría.|Nivel (conversión de experiencia añadida)|
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
- Si el Tipo es Categoría, el valor configurado se añade directamente al nivel (1 para 1 nivel, 0,5 para 0,5 nivel). La forma habitual de ajustar esto es configurando el valor de experiencia de la Acción. Esta configuración no es Innecesaria a menos que haya un propósito especial.
___

#### Probabilidad [-1 a 1]
Probabilidad de que la obtención alcance el éxito (los valores negativos solo se tienen en cuenta en caso de fracaso)
- Configuración de la probabilidad de obtención como un número decimal comprendido entre -1 y 1. Para calcular la probabilidad se utiliza el valor absoluto.
- Cuando el valor es positivo, solo se evalúa si la acción tiene éxito; con un valor de `1` se obtiene siempre, y con un valor de `0,5`, se obtiene con una probabilidad del 50 %.
- Cuando el valor es negativo, solo se evalúa en caso de fracaso de la Acción; con `-1` se obtiene siempre, y con `-0,5`, se obtiene con una probabilidad del 50 %.
- Si el valor es `0`, no se obtiene en ningún caso, ni en caso de éxito ni en caso de fracaso.
- El valor por defecto es `1` (se obtiene siempre cuando la operación tiene éxito).
___

### grupo de trabajo
No se utilizará en el evento
- No utilizamos la designación de grupos, ya que no aparecen en la lista de misiones y tareas.
- En el editor no aparece el campo de entrada.