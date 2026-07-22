
# general
Configuración básica del juego, incluidos los ajustes de idioma y nivel.
___

## Idioma.
Idioma del mundo en el momento de su creación.
- Configura el idioma utilizado en este editor de mundos.
- El primer idioma que se muestra cuando el usuario inicia el juego.
___

## traducción
Preparar traducciones multilingües o
- Si se activa, los usuarios pueden jugar en cualquier idioma.
- Si está desactivada, sólo podrás reproducir en el idioma seleccionado en la configuración de idioma.
- Si la traducción está activada, Necesario proporcionar los datos traducidos para cada idioma.
- [_translation_](es/editor/traducción)
___

## Tiempo máximo desactivado [horas].
Límites de tiempo para el progreso desactivado.
- Configure el número máx. de horas de progreso cuando esté desactivado.
- Por ejemplo, si se establecen 6 horas, se procesará el proceso de volver a estar desconectado hasta 6 horas, pero si se permite más tiempo para volver a estar desconectado, el tiempo de desconexión se tratará como 6 horas.
- Si se fijan 0 horas, no se produce ningún proceso al volver a estar desactivado.
- El valor máximo es de 24 horas.
- [_category_](es/editor/categoría)
___

## Nivel máx. de Categoría
Nivel límite para cada Categoría.
- Configura el nivel máx. para cada Categoría.
- Si se adquiere experiencia por encima de este nivel, en el cálculo de cada propiedad se utilizará el nivel máximo aquí configurado.
- Este valor no es relevante para las Categorías sin niveles.
- [_category_](es/editor/categoría)
___

## función de bloqueado
Ocultar elementos hasta que se cumplan los requisitos
- Si está activada, el Artículo de Acción de Categoría se oculta mientras no se haya utilizado o poseído nada y no se hayan cumplido los requisitos.
- Si se desactiva, todos los elementos se muestran desde el principio, pero no se pueden ejecutar ni equipar hasta que se cumplan los requisitos.
- [_category_](es/editor/categoría)
- [_action_](es/editor/acción)
- [_item_](es/editor/artículo)
___

## divisa
Configuración de la moneda (monedas) que se utiliza en el juego
- Realiza la configuración de la moneda que se utiliza en el juego.
- Se pueden definir varias monedas y realizar la configuración de cada una de ellas con sus datos (ID, nombre, icono, color, etc.).
- La moneda se utiliza para comprar y vender artículos, así como para ampliar la capacidad del inventario.
- La moneda que aparece en primer lugar se considera la moneda principal y se utiliza cuando no se especifica el ID de moneda (`coinId`) en los artículos o en la capacidad.
- [_information_](es/editor/información)
- [_item_](es/editor/artículo)
___

## capacidad
Configuración de la capacidad de inventario.
- Controla el número máximo de tipos diferentes de Artículos que puede tener un jugador.
- Cada Artículo se controla por el número de tipos de Artículos que tiene, no por el número de Artículos propios.
- Establecer `initialCount` a 0 significa capacidad ilimitada.
- Cuando se refiera a Artículos de capacidad en condiciones o recompensas, utilice el ID configurado aquí.
- [_item_](es/editor/artículo)
___

### [_información_](es/editor/información)
___

### Valor por defecto [pcs].
Capacidad inicial de inventario (número de Artículos diferentes que se pueden contar)
- Capacidad inicial (número de Artículos diferentes que se pueden poseer) al comenzar la partida.
- Si se establece `0`, la capacidad es ilimitada.
___

### Precio base [monedas].
Precio inicial para una capacidad adicional.
- Precio base (en monedas) para aumentar la capacidad del inventario en una ranura.
- El precio real se calcula como 'precio base x incremento porcentual ^ número de veces que se ha comprado'.
- Ejemplo: precio base 100, tasa de incremento 1,2, primero 100 monedas, segundo 120 monedas, tercero 144 monedas.
___

### Porcentaje de aumento [veces].
Incremento porcentual de los costes de ampliación de capacidad
- Es un multiplicador de cuánto aumenta el coste de la ampliación de capacidad con la enésima compra.
- Para `1.0` el precio es siempre el mismo, para `1.2` el precio es un 20% más alto cada vez que se compra.
- Fórmula: precio base x porcentaje de incremento ^ número de veces que se ha comprado

|tasa de aumento|1ª adición.|5º aumento.|10º aumento.|Aumento de 100.|Aumento 1000.|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.05|x1.00|x1.22|x1.63|x131.50|x1.7×10²⁰|
|1.10|x1.00|x1.61|x2.59|x1,4 x 10⁴|x2.7×10⁴¹|
|1.20|x1.00|x2.49|x6.19|x8,3 x 10⁷|x8.3×10⁷⁹|
|1.50|x1.00|x5.06|x57.67|x1.9×10¹⁷|x7.0×10¹⁷⁶|
___

### ID de la moneda
ID de la moneda que se utilizará para ampliar la capacidad
- Especifica el ID de la moneda (coins) que se utilizará para el precio de la ampliación de la capacidad del inventario.
- Si se deja en blanco, se utilizará la moneda principal (la primera de la lista «coins»).
___

### Límite máximo para comprar [veces]
Número máximo de veces que se puede comprar capacidad
- Es el límite máximo de veces que se puede comprar capacidad con dinero.
- Si lo pones en `0`, podrás comprar sin límite.
- Si lo pones en `-1`, no podrás comprarlo.
- El aumento de capacidad derivado de las recompensas no está sujeto a este límite máximo.
___

## Cue
Configuración del número de ranuras para la ejecución consecutiva (programada) de acciones
- Gestiona el número de espacios disponibles para la ejecución consecutiva (programada) de acciones.
- El número de casillas, al igual que la capacidad, se puede comprar con moneda, aunque también se puede aumentar seleccionando artículos de la cola como recompensa por Acciones o eventos.
- Cuando se haga referencia a artículos de la cola en condiciones o recompensas, utilice el ID de configuración aquí.
- [_item_](es/editor/artículo)
___

### [_información_](es/editor/información)
___

### Valor por defecto [pcs].
Número de casillas de ejecución consecutiva al comenzar el juego
- Es el número de plazas reservadas al comenzar el juego.
- El valor mínimo es `1` (no existe el valor `0`, que en otros casos significaría «ilimitado», como en el caso de la capacidad).
___

### Precio base [monedas].
Precio inicial para añadir una plaza
- Este es el precio básico (monedas) para aumentar en una unidad el número de ejecuciones consecutivas.
- El precio real se calcula como 'precio base x incremento porcentual ^ número de veces que se ha comprado'.
- Ejemplo: precio base 100, tasa de incremento 1,2, primero 100 monedas, segundo 120 monedas, tercero 144 monedas.
___

### Porcentaje de aumento [veces].
Tasa de crecimiento del coste de la ampliación de la capacidad
- Es el multiplicador que indica en qué medida aumenta el coste de la ampliación del cupo al comprar n veces.
- Para `1.0` el precio es siempre el mismo, para `1.2` el precio es un 20% más alto cada vez que se compra.
- Fórmula: precio base x porcentaje de incremento ^ número de veces que se ha comprado
___

### ID de la moneda
ID de la moneda que se utiliza para ampliar el marco
- Especifica el ID de la moneda (coins) que se utilizará para el precio de la ampliación del límite de ejecuciones consecutivas.
- Si se deja en blanco, se utilizará la moneda principal (la primera de la lista «coins»).
___

### Límite máximo para comprar [veces]
Número máximo de veces que se puede comprar un espacio
- Es el límite máximo de veces que se puede comprar el paquete de ejecuciones consecutivas con moneda.
- Si lo pones en `0`, podrás comprar sin límite.
- Si lo pones en `-1`, no podrás comprarlo.
- El aumento de la cuota derivado de las retribuciones no está sujeto a este límite máximo.
___

## Tasa de aumento de la experiencia [veces].
Porcentaje de aumento de la dificultad al subir de nivel.
- A medida que aumenta el nivel de una Categoría, aumenta la experiencia Necesaria para alcanzar el siguiente nivel.
- Al aumentar este valor, aumenta el nivel de dificultad.
- La experiencia necesaria para pasar al siguiente nivel es (tasa de aumento de experiencia)^(nivel actual - 1).

|Tasa de aumento de la experiencia|Lv.1|Lv.2|Lv.10|Lv.50|Lv.99.|
|-|-|-|-|-|-|
|0|x1.00|x1.00|x1.00|x1.00|x1.00|
|0.02|x1.00|x1.02|x1.22|x2.69|x5.52|
|0.05|x1.00|x1.05|x1.55|x11.47|x131.50|
|0.10|x1.00|x1.10|x2.36|x117.39|x5.7×10⁴|
|0.20|x1.00|x1.20|x6.19|x3,3 x 10³|x1,3 x 10¹¹|
- [_category_](es/editor/categoría)
___

## restricción del nivel de acción
Solicita el número de veces que se ha ejecutado la misma Acción de atributo para la ejecución de una acción.
- Si está activada, el número de veces que se ha ejecutado una acción con los mismos atributos se añade automáticamente a las condiciones de ejecución de cada acción.
- Necesario contar un número de veces igual al valor de nivel de la Acción.
- Si no se configura ningún atributo, se utiliza el ID de la Categoría a la que pertenece.
___

## [_valor de combate_](es/editor/combate)