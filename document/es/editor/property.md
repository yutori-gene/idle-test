
# propiedades
Configuración de los efectos que tiene un Artículo.
- Este es un Artículo de efecto que puede ser configurado en el Artículo.
- Los artículos cuyo tipo de equipamiento es `necessary` o `consumable` solo aplican su efecto mientras están equipados. `unnecessary` aplica su efecto con solo poseerlo, y la magnitud del efecto es proporcional a la cantidad que se posea (el doble si se poseen 2).
- Dado que el efecto de `unnecessary` se calcula multiplicando directamente el número de unidades que se tienen, `maximum` (el número máximo de unidades) constituye el límite máximo de dicho efecto. A la hora de equilibrar el juego, configúralo junto con `maximum`.
- Los valores de ambos elementos se calculan como un ajuste por la diferencia de nivel entre el nivel del jugador y el nivel de la Acción.
- Por ejemplo, si el valor de ataque es 10, el ataque se calcula como si el nivel del jugador fuera 10 superior al nivel de la Acción. Menos valores son lo contrario.
- attack, defence, accuracy, evasion y restore solo son efectivos para acciones del tipo `stamina`.

|propiedades|Detalles de la eficacia.|
|-|-|
|velocidad|Reduce el tiempo necesario para realizar una Acción. El tiempo necesario varía inversamente a la diferencia de nivel (el ratio surte la mitad de efecto).|
|oportunidad|Modifica la probabilidad de éxito de una Acción. El ratio se aplica a la proporción entre el éxito y el fracaso, por lo que nunca supera el `100`%.|
|experiencia|Cambia la experiencia adquirida. Aumenta en proporción a la diferencia de nivel (el cálculo es inverso: cuanto mayor es el nivel de Acción, más ganas).|
|ataque|Cambia el daño de resistencia infligido al oponente. (Acción de resistencia solamente).|
|defensa|Reduce el daño de resistencia recibido de los oponentes (el ratio surte la mitad de efecto). (sólo acción de resistencia)|
|precisión|Reduce el porcentaje de ataques fallidos. (sólo acción de resistencia).|
|evasión|Cambia el índice de evasión de los ataques del oponente (el ratio surte la mitad de efecto). (sólo acción de resistencia)|
|restaurar|Cambia la cantidad de resistencia restaurada al fin de una Acción. Cuanto más se acerca a la recuperación total, más gradual es el aumento. (sólo acción de resistencia)|
___

## Categoría.
Especificación de la Categoría a la que se aplica la propiedad.
- Configura el ID de la Categoría a la que se aplica esta propiedad.
- Al configurar `*` se aplica a todas las categorías.
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
- La tasa de evasión se calcula como si el nivel del jugador fuera superior al nivel de la acción en este valor. Cuanto mayor sea el valor, más fácil resultará evadir los ataques del rival.
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