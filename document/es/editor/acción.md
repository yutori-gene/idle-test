
# Acción.
Elementos de acción como recoger, fabricar y luchar.
- Son elementos que representan comportamientos como coleccionar, fabricar, comprar y vender y luchar.
- Con cada acción que realizas, ganas experiencia y tu nivel sube.
- Puedes configurar los Artículos a consumir u obtener para cada acción.
- Hay varios tipos de pautas de actuación.
___

## [_información_](es/editor/información)
___

## Categoría.
ID de la Categoría a la que pertenece la Acción
- Especifique el ID de la Categoría a la que pertenece esta Acción.
___

## atributo
Categorías de atributos específicos de la Acción
- Se pueden configurar atributos individuales (Categorías).
- Si se deja en blanco, se adopta la Categoría a la que pertenece
- Por ejemplo, si configuras el atributo Magia para una Acción que pertenece a la Categoría Castillo del Demonio de forma individual, el nivel y las propiedades de la categoría de magia se calcularán y se aplicarán al tiempo de finalización de la acción y al daño.
- [_category_](es/editor/categoría)
___

## grupo (normalmente de personas)
Visualización de la clasificación por grupos de minutos de las Acciones
- Aplique uno de los grupos configurados en Básico.
- Aparece una lista de Acciones en el orden de los grupos configurados.
- [_general_](es/editor/general)
___

## Estado de desbloqueo inicial
Estado inicial de visualización y liberación del elemento (pasa automáticamente a un estado superior cuando se cumplen los requisitos de activación)
- secreted: No aparecerá en la interfaz de usuario hasta que se cumplan todos los requisitos (no aparecerá en las Pistas y permanecerá oculto en la lista de requisitos y recompensas).
- oculto: permanece completamente oculto (el nombre aparece en gris y no se puede modificar) mientras no sea referenciado por ningún elemento de liberación y no se cumplan los requisitos.
- hinted (por defecto): Solo se muestra el nombre como avance, pero no se puede modificar hasta que se libere.
- released: Se desbloquea y se puede manejar desde el principio, independientemente de las condiciones (antes «Mostrar desde el principio»).
___

## nivel
Nivel de dificultad de la Acción.
- El nivel de dificultad de la Acción viene indicado por el nivel.
- Calcula cada propiedad en tiempo de ejecución en comparación con el nivel del jugador.
- Por ejemplo, realizar una Acción por encima de tu nivel tendrá un porcentaje de éxito más bajo.
- Si se cumplen las condiciones, la ejecución puede llevarse a cabo aunque el nivel del jugador sea inferior a este valor.
- [_property_](es/editor/propiedad)
___

## [_condiciones generales_](es/editor/requisito)
___

## Tiempo [segundos].
Tiempo típico empleado en realizar la Acción
- Tiempo estándar (en segundos) Necesario para realizar una Acción una vez.
- Para los Tipos "resistencia", este es el intervalo de tiempo para un turno (una reducción de la resistencia de cada uno).
- La ejecución real variará debido a los cálculos de las propiedades.
- [_property_](es/editor/propiedad)
___

## Experiencia [siguiente nivel a 100].
Experiencia adquirida con adquisiciones exitosas
- La experiencia estándar que se adquiere al realizar una Acción una vez y con éxito; 100 equivale a un nivel de experiencia.
- En caso de combate, conviene configurar más, ya que se gana cuando el adversario sale victorioso.
- La ejecución real variará debido a los cálculos de las propiedades.
- [_property_](es/editor/propiedad)
___

## Probabilidad de éxito [0-1].
Probabilidad de éxito al finalizar la Acción
- Probabilidad de éxito al finalizar la Acción.
- Siempre tiene éxito si `1`, siempre falla si `0`.
- En caso de fracaso, se consumen Artículos consumibles, pero no se obtiene recompensa ni experiencia.
- La ejecución real variará debido a los cálculos de las propiedades.
___

## Número máx. de ejecuciones [veces].
Máximo de veces que se puede contar una Acción.
- El número máximo de veces que una Acción puede ser completada con éxito.
- Ilimitado para "0".
- Cuando se alcanza el límite superior, la Acción deja de ser ejecutable.
___

## [_adquisiciones_](es/editor/adquisición)
___

## Tipo de progreso
Tipo de ejecución de la Acción
- Hay cuatro tipos.

|Tipo.|detalles de la operación|resistencia|Ejemplo.|
|-|-|-|-|
|"persistente".|Tipo de Acción que se repite continuamente; ganas experiencia y recompensas por cada finalización.|Nada que ver|Explotación forestal, minería, pesca|
|`single`.|Realice una Acción cada vez. Si se interrumpe, el progreso se guarda y puede reanudarse la próxima vez. Una vez finalizada, el usuario pulsa la acción de confirmación para recibir los resultados.|Nada que ver|Abrir cofres del tesoro, aprender habilidades a través de la lectura|
|`snap`.|Este Tipo de Acción se realiza instantáneamente. Se completa de inmediato sin que transcurra nada de tiempo.|Nada que ver|Comerciar, uso de Artículos.|
|`stamina`.|Cada tiempo requerido disminuye la resistencia respectiva del jugador y del adversario. Cuando se agota la resistencia del adversario, se gana experiencia y recompensas. Cuando la resistencia del jugador se agota, el juego terminado y todas las Acciones en curso son abortadas.|Relevante.|Combate, operaciones peligrosas.|
___

## [_valor de combate_](es/editor/combate)