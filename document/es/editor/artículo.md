
# Artículo
Elementos como Equipamiento y consumibles
- Este elemento se refiere a la propiedad de objetos como Equipamiento, consumibles y objetos de valor.
- Sólo se puede equipar uno dentro de una Categoría, o se puede desactivar.
- También existen formas variables de utilizarlos.
___

## [_información_](es/editor/información)
___

## Categoría.
ID de la Categoría a la que pertenece el Artículo
- Especifique el ID de la Categoría a la que pertenece este Artículo.
___

## grupo (normalmente de personas)
Visualización de la clasificación por grupos de los Artículos
- Aplique uno de los grupos configurados en Básico.
- Aparece una lista de Artículos en el orden de los grupos configurados.
- Si se deja en blanco, no se realiza ninguna agrupación.
- [_general_](es/editor/general)
___

## Estado de desbloqueo inicial
Estado inicial de visualización y liberación del elemento (pasa automáticamente a un estado superior cuando se cumplen los requisitos de activación)
- secreted: No aparecerá en la interfaz de usuario hasta que se cumplan todos los requisitos (no aparecerá en las Pistas y permanecerá oculto en la lista de requisitos y recompensas).
- oculto: permanece completamente oculto (el nombre aparece en gris y no se puede modificar) mientras no sea referenciado por ningún elemento de liberación y no se cumplan los requisitos.
- hinted (por defecto): Solo se muestra el nombre como avance, pero no se puede modificar hasta que se libere.
- released: Se desbloquea y se puede manejar desde el principio, independientemente de las condiciones (antes «Mostrar desde el principio»).
___

## Valor de compra [monedas].
Configuración del precio de compra de los Artículos.
- No puede comprar un Artículo si nunca lo ha poseído.

|valor|tratamiento|
|-|-|
|0|nada|
|Un valor superior a cero.|El valor que se puede comprar.|
|Un valor inferior a cero (por ejemplo, -1)|No se puede comprar (se trata como cero).|
___

## Precio de venta [monedas].
Configuración del precio de venta de los Artículos.
- Configura el precio al que se venden los Artículos.

|valor|tratamiento|
|-|-|
|0|nada|
|Un valor superior a cero.|Vende a ese valor.|
|Un valor inferior a cero (por ejemplo, -1)|Tasa de descuento de configuración general multiplicada por el valor de la oferta (si el valor de la oferta es cero, no se puede vender)|
- [_general_](es/editor/general)
___

## Número máx propio [pcs].
Límite del número máx. de Artículos propios.
- Si es 0, no hay límite al número que se puede contar como propio.
- Si es más de 1, sólo podrá contar hasta ese número. Si se ha alcanzado el límite máximo, las nuevas adquisiciones no aumentarán el número de propios.
___

## Tipo de Equipamiento
Tipo de configuración para el Equipamiento, efectos y consumo de Artículos.
- Los Artículos Posibles de Equipamiento deben pertenecer al grupo especificado en la Categoría `equipmentGroups`.
- Sólo se puede equipar un objeto dentro del mismo grupo.

|valor|Equipamiento|Eficacia.|consumo|Ejemplo.|
|-|-|-|-|-|
|`necesario`.|Necesario|equipando|nada|Espadas, armaduras y otros Equipamientos.|
|"consumible".|Necesario|equipando|Se consume al realizar las Acciones|Artículos que se consumen para obtener un efecto, como las pociones.|
|"innecesario".|Innecesario|En todo momento mientras esté en posesión.|nada|Artículos pasivos que son efectivos por el mero hecho de tenerlos.|
|"imposible".|no autorizado|nada|nada|Artículos inútiles como materiales y escombros.|
___

## [_condiciones generales_](es/editor/requisito)
___

## [_propiedades_](es/editor/propiedad)
___

## ID de la pareja de divisas
ID de la moneda que se utiliza para comprar y vender este artículo
- Especifica el ID de la moneda (coins) que se utiliza tanto para el valor de compra como para el de venta.
- Si se deja en blanco, se utilizará la moneda principal (la primera de la lista «coins»).