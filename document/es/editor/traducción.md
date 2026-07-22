
# traducción
Configuración para traducir el texto del juego a otros idiomas.
- Configura el texto que se va a traducir.
- La configuración multilingüe está disponible cuando la configuración de traducción está activada.
- Si la traducción está desactivada, la información descrita durante el desarrollo se mostrará tal cual.
- La configuración de la traducción y el cambio de idioma no son posibles durante el desarrollo previo a la publicación.
___

## Activación de la traducción
Configuración desactivada de la función de traducción.
- La configuración multilingüe está disponible cuando la configuración de traducción está activada.
- La traducción no se activa durante el desarrollo antes de la publicación. El cambio entre idiomas se activará después de la publicación.
- Si se activa la traducción, se admitirán diez idiomas diferentes y será necesario disponer de datos de traducción para todos los idiomas. No es posible activar sólo algunos de los idiomas.
- Cuando el usuario inicia el juego, se muestra primero el idioma utilizado en el desarrollo. A continuación, el idioma puede cambiarse a cualquier otro.
- El proceso de traducción es tedioso, pero permite que mucha gente juegue con él.
___

## archivo de idioma
Archivo JSON de los datos de traducción.
- Cuando los datos del juego salen con una configuración pública, se genera un archivo JSON para la traducción en `translations/world` en la carpeta de salida.
- En la carpeta se encuentran los archivos JSON para la traducción en cada idioma. El contenido contiene datos sin traducir.
- El contenido tiene un id dentro de cada Tipo. Además, en su interior hay un nombre y una descripción.
- Necesario traducir y guardar todos los nombres y descripciones.
___

## Tareas de traducción
Edición de datos de traducción
- Todos los archivos de traducción contienen datos en el idioma en el momento del desarrollo.
- Necesario traducir los archivos que no estén en el idioma en el que se crearon.
___

### AI
Traducción basada en IA
- Traduce utilizando IA como ChatGPT, Copilot y Claude.
- Posible traducir de una vez y con cierta calidad.
- Puede que no sea una traducción perfecta, sobre todo para los términos técnicos y los nombres propios.
- Dependiendo del volumen de traducciones, el uso de la IA puede resultar costoso.
- Si el progreso de la traducción por parte de la IA se interrumpe en mitad del proceso, es posible decirle a la IA que "continúe" y puede que lo consiga. (En algunos casos, puede que esto no sirva de nada).
___

#### Ejemplos de indicaciones
Ejemplos de instrucciones de traducción dadas a la IA
- Ejemplo: traduzca los valores `name` y `explanation` de los datos JSON cargados del Inglés al Japonés. No cambie nada de los otros minutos de los datos.
___

#### Uso de GPT
Traducción utilizando el GPT de ChatGPT.
- El Traductor de Lenguaje JSON proporcionado en la librería GPT proporcionada por ChatGPT puede ser utilizado para traducir JSON con facilidad.
- La estructura JSON se conserva en la traducción.
- Los servicios de IA distintos de ChatGPT pueden ofrecer funciones similares.
___

### servicio de traducción
Utilizar los servicios de traducción
- Traduce utilizando servicios en línea como DeepL y Google Translate.
- La calidad de las traducciones es superior a la de las traducciones automáticas, pero se cobra un suplemento en función del volumen de traducción.
- Los archivos JSON no pueden ser traducidos directamente por los servicios de traducción, por lo que es Necesario crear y utilizar un programa.
- Por una tarifa, hay algunos servicios que traducen los datos JSON tal cual. (por ejemplo, doctranslator.com)
___

### manual (funcionamiento)
Traducción manual
- Abra el archivo de traducción en un editor de texto e introduzca el contenido traducido en cada idioma. Esto lleva mucho tiempo, pero te permite traducir el archivo exactamente como quieres.
___

## código del idioma
Lista de códigos de idiomas admitidos

|código del idioma|Idioma.|
|-|-|
|en|Inglés|
|zh|Chino (lengua)|
|es|Español|
|ar|Árabe (lengua)|
|pt|Portugués|
|hola|Hindi|
|fr|Francés|
|ru|Ruso|
|de|Alemán|
|ES|Japonés|