
# información
Configuración de la información básica sobre el elemento (ID, nombre, icono, color, etc.)
- Artículos de información básica comunes a cada elemento del mundo (Categorías, Acciones, Artículos, Eventos, etc.).
- Cada elemento se configura por separado.
___

## ID
ID único para identificar el elemento
- ID para identificar unívocamente cada elemento.
- En el editor, es una cadena para identificar el elemento.
- Por ejemplo, el ID especifica qué Artículo se obtiene cuando se completa la Acción.

!> Una vez configurado el ID, no lo cambies una vez distribuido el juego. Cambiarlo provocará incoherencias con los datos existentes del juego y éste no funcionará correctamente.
___

### Nombre mostrado.
Nombre para mostrar generado automáticamente a partir del ID
- Los caracteres que pueden utilizarse son una combinación de letras, guiones y números.
- Si el nombre aún no está configurado, la primera letra de cada palabra se escribe en mayúscula y el guión se sustituye por un espacio, que se configura automáticamente en el nombre.
- Para idiomas distintos del Inglés, la entrada del nombre debe configurarse individualmente.
___

#### Ejemplo.
Ejemplos reales de conversión de ID
- Si el ID es `stylish-strong-axe`, el nombre será `Stylish Strong Axe`.
___

### Nada de duplicados.
Prohibición de ID duplicados dentro del mismo Tipo.
- No duplique nada dentro de los tipos Categoría, Acción, Artículo, Evento y Preajuste, ya que se utilizan para identificar elementos.
- Tener el mismo ID para diferentes Tipos no es un problema.
- [_type_](es/editor/type)
___

## Nombre.
Nombre del elemento tal y como aparece
- Nombre del elemento mostrado en el juego.
- También se pueden introducir otros idiomas además del Inglés.
- Se aceptan nombres que dupliquen otros elementos.
- Si es demasiado largo, la parte que se desborda se omite con `…` en la pantalla durante el juego.
___

### Conversión automática de ID
Generación automática de nombres a partir de ID
- Si el campo se deja en blanco, la información se muestra automáticamente basándose en el ID. Para más información, consulte la sección anterior.
___

## nota explicativa
Descripción detallada del elemento.
- Descripción de los elementos que aparecen en el juego.
- Se pueden introducir otros idiomas además del Inglés. Se muestran todos los textos, incluso los más largos.
- Si no se da ninguna explicación, déjelo en blanco.
___

## icono
Configuración de iconos para representar elementos.
- Los iconos se pueden configurar como imágenes, Iconify o emojis.
- Iconify es un servicio que ofrece una amplia gama de iconos.
- Si se cuenta con más de una configuración, las imágenes, Iconify y los pictogramas se priorizan y se muestran en ese orden.
___

### Imagen.
Utilice cualquier archivo de imagen
- Imagen que representa el elemento.
- Si el tamaño del archivo es grande, se redimensiona automáticamente.
- Innecesario si se ha configurado Iconify o pictogramas.
___

#### Tipo de archivo
Formatos de archivo de imagen compatibles
- Se pueden usar los formatos habituales que los navegadores pueden mostrar.
- JPEG, PNG, GIF, WebP, SVG, entre otros.
___

### Iconify
Utilizar el conjunto de iconos de Iconify
- Iconos que representan elementos.
- Iconify es un servicio que ofrece una amplia gama de iconos.
- Si se configura una imagen, ésta tendrá prioridad.
___

#### Iconify
Cómo seleccionar iconos de Iconify
- Busca en `Iconify` los iconos que se pueden mostrar.
- Puedes encontrar rápidamente los mejores iconos buscando iconos.
- Selecciona un icono para ver su identificador (tipo de conjunto de iconos `:` nombre del icono), como `game-icons:sword-wound`, y pégalo directamente en este campo de iconos.
![iconify-selection.png](../../resources/iconify-selection.png)
- [_iconify_](https://icon-sets.iconify.design)
___

### pictograma
Visualización de iconos con pictogramas
- Mostrar pictogramas como iconos.
- Puede convertirse de texto a pictogramas y configurarse rápidamente.
- Para los pictogramas, introduzca los pictogramas Unicode tal cual.
- Como se utilizan los pictogramas introducidos en el entorno de ejecución, se muestran de forma ligeramente diferente para los distintos usuarios.
- Iconify permite configurar emojis que son nada dependientes de cada entorno
- Se pueden mostrar caracteres no pictográficos, pero la visualización puede corromperse si hay más de un carácter.
- Introduzca pictogramas, por ejemplo, `🗡️` o `⚔️`.
___

## Color
Configura el color de visualización del elemento.
- Como color de elemento, se aplica al icono y al color de fondo del elemento.
- Seleccione en el selector de color del editor.
___

### Herencia del elemento padre
Adopción del color configurado en el elemento padre
- Si se deja en blanco, se hereda el color configurado en el elemento padre.
- La jerarquía de los tipos de cada elemento es la siguiente.
- Por ejemplo, si una acción tiene un color propio configurado, se usa ese; si la acción no tiene un color propio, se usa el color de la categoría o del mundo.
- Cuando un evento también tiene una categoría configurada, hereda el color de esa categoría igual que las acciones y los artículos.
```
world
├── category
├── action
├── item
├── group
├── task
└── preset
```
- [_type_](es/editor/type)