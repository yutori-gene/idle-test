
# propiedades
Configuración de los efectos que tiene un Artículo.
- Este es un Artículo de efecto que puede ser configurado en el Artículo.
- Los Artículos con un Tipo de Equipamiento `necesario` o `consumible` sólo se aplican mientras están equipados. En el caso de los objetos "innecesarios", el efecto sólo se aplica mientras se poseen.
- Los valores de ambos elementos se calculan como un ajuste por la diferencia de nivel entre el nivel del jugador y el nivel de la Acción.
- Por ejemplo, si el valor de ataque es 10, el ataque se calcula como si el nivel del jugador fuera 10 superior al nivel de la Acción. Menos valores son lo contrario.
- ATAQUE, DEFENSA, PRECISIÓN, EVASIÓN y RESTAURACIÓN sólo son válidos para acciones de tipo "resistencia".

|propiedades|Detalles de la eficacia.|
|-|-|
|velocidad|Reduce el tiempo necesario para realizar una Acción. El tiempo necesario varía inversamente a la diferencia de nivel.|
|oportunidad|Modifica la probabilidad de éxito de una Acción. La probabilidad aumenta en proporción a la diferencia de nivel.|
|experiencia|Cambia la experiencia adquirida. Aumenta en proporción a la diferencia de nivel (el cálculo es inverso: cuanto mayor es el nivel de Acción, más ganas).|
|ataque|Cambia el daño de resistencia infligido al oponente. (Acción de resistencia solamente).|
|defensa|Reduce el daño de resistencia recibido de los oponentes. (sólo acción de resistencia).|
|precisión|Reduce el porcentaje de ataques fallidos. (sólo acción de resistencia).|
|evasión|Cambia el índice de evasión de los ataques del oponente. (Acción de resistencia solamente).|
|restaurar|Cambia la cantidad de resistencia restaurada al fin de una Acción. (sólo para acciones de resistencia).|
___

## Categoría.
Especificación de la Categoría a la que se aplica la propiedad.
- Configura el ID de la Categoría a la que se aplica esta propiedad.
- La configuración `*` se aplica a todas las Categorías.
- Si está en blanco, se aplica a la Categoría a la que pertenece el Artículo.
___

## Valor de ataque [diferencia de nivel].
Corrección del daño de resistencia infligido al oponente (sólo válido para acciones de resistencia).
- El daño del ataque se calcula suponiendo que el nivel del jugador es así de superior al nivel de la Acción.
___

## Valor de defensa [diferencia de nivel].
Corrección del daño de resistencia recibido de un oponente (sólo válido para acciones de ESTAMINA).
- El daño sufrido se calcula como si el nivel del jugador fuera este valor superior al nivel de la Acción. Cuanto mayor sea el valor, menor será el daño infligido.
___

## Valor de precisión [diferencia de nivel].
Corrección del porcentaje de ataques fallidos (sólo válido para acciones de resistencia).
- El porcentaje de fallos se calcula suponiendo que el nivel del jugador es este valor superior al nivel de la Acción. Cuanto mayor sea el valor, menor será el porcentaje de fallos.
___

## Valor de evasión [diferencia de nivel].
Corrección de la tasa de evasión de los ataques del adversario (sólo válida para acciones de resistencia).
- El índice de evasión se calcula suponiendo que el nivel del jugador es así de alto que el nivel de la Acción.
___

## Valor de restauración [diferencia de nivel].
Corrección para restaurar la resistencia (sólo válida para acciones de ESTAMINA).
- La cantidad de resistencia restaurada se calcula asumiendo que el nivel del jugador es así de alto que el nivel de la Acción.
___

## Rapidez [diferencia de nivel].
Corrección de la duración de la Acción
- El tiempo necesario se calcula suponiendo que el nivel del jugador es este valor superior al nivel de la Acción. Cuanto mayor sea el valor, menor será el tiempo necesario.
___

## Probabilidad de éxito [diferencia de nivel].
Corrección de la probabilidad de éxito de la Acción.
- La probabilidad de éxito de la Acción se calcula suponiendo que el nivel del jugador es este valor superior al nivel de la acción. Cuanto mayor sea el valor, mayor será la probabilidad de éxito.
___

## Experiencia [diferencia de nivel].
Correcciones a la experiencia adquirida
- La experiencia se calcula como si el nivel del jugador fuera tanto más bajo que el nivel de la Acción (cuanto más alto sea el nivel de la Acción, más experiencia se gana, ya que el cálculo se invierte).