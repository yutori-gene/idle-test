
# Categoría.
Marco general para la clasificación de Acciones y Artículos.
- Representa una clasificación importante.
- Por ejemplo, se puede configurar en cualquier marco, como corto alcance, largo alcance, magia, mazmorras, herrerías, fábricas, etc.
- Las Acciones y Artículos se colocan directamente debajo del mundo y se asocian a un ID de Categoría.
___

## [_información_](es/editor/información)
___

## grupo (normalmente de personas)
Visualización de la clasificación por grupos de categorías
- Aplique uno de los grupos configurados en Básico.
- Aparece una lista de Categorías en el orden de los grupos configurados.
- [_general_](es/editor/general)
___

## Estado de desbloqueo inicial
Estado inicial de visualización y liberación del elemento (pasa automáticamente a un estado superior cuando se cumplen los requisitos de activación)
- secreted: No aparecerá en la interfaz de usuario hasta que se cumplan todos los requisitos (no aparecerá en las Pistas y permanecerá oculto en la lista de requisitos y recompensas).
- oculto: permanece completamente oculto (el nombre aparece en gris y no se puede modificar) mientras no sea referenciado por ningún elemento de liberación y no se cumplan los requisitos.
- hinted (por defecto): Solo se muestra el nombre como avance, pero no se puede modificar hasta que se libere.
- released: Se desbloquea y se puede manejar desde el principio, independientemente de las condiciones (antes «Mostrar desde el principio»).
___

## [_condiciones generales_](es/editor/requisito)
___

## grupo de equipamiento
Designación de los grupos de Artículos que pueden ser Equipados en esta Categoría.
- Lista de nombres de grupo de los Artículos que se pueden Equipar en esta Categoría.
- Sólo se pueden equipar los artículos del grupo que coincida con el nombre del grupo especificado aquí.
- Si se especifica una cadena vacía, los Artículos con un grupo no configurado (vacío) pasan a ser elegibles para Equipamiento.
- Sólo se puede equipar un objeto en el mismo grupo. Cuando equipas un nuevo Artículo, cualquier equipamiento existente en el mismo grupo se desactiva automáticamente.
- Si la lista está vacía (0 piezas), no se puede equipar nada.
- [_general_](es/editor/general)
___

## Disponibilidad de niveles
Disponibilidad de funciones a nivel de Categoría
- Es una bandera para indicar si esta Categoría tiene un nivel o no.
- Si está activado, tiene un nivel; si está desactivado, no.
- Un ejemplo es activar las categorías basadas en la experiencia, como espadachín y magia, y desactivar las categorías basadas en la ubicación, como mazmorras y herrerías.
___

## progresando simultáneamente
Configuraciones de ejecución paralela con otras Categorías
- Indicador que señala si las Acciones de esta Categoría pueden progresar en paralelo con Acciones de otras Categorías.
- Si está activada, la Acción puede progresar simultánea e independientemente de otras Categorías de acciones.
- Si está desactivada, no puede realizarse simultáneamente con acciones de otras Categorías que también estén desactivadas. Al comenzar una nueva Acción en esta Categoría, las Acciones en progreso en otras Categorías independientes se cancelan automáticamente.
___

## fondo
Configuraciones de fondo específicas para cada Categoría
- Configure el fondo de esta Categoría.
- Cuando se selecciona una Categoría, la imagen de fondo cambia junto con ella.
- Si no se configura nada, la configuración del fondo del mundo se utiliza tal cual.