
# la traduction
Configuration pour la traduction du texte du jeu dans d'autres langues.
- Configure le texte à traduire.
- Les configurations multilingues sont disponibles lorsque les configurations de traduction sont activées.
- Si la traduction est désactivée, les informations décrites pendant le développement seront affichées telles quelles.
- Les configurations de traduction et le changement de langue ne sont pas possibles pendant le développement de la prépublication.
___

## Activation de la traduction
Configuration désactivée de la fonction de traduction.
- Les configurations multilingues sont disponibles lorsque les configurations de traduction sont activées.
- La traduction n'est pas activée pendant le développement avant la publication. Le passage d'une langue à l'autre sera activé après la publication.
- Si la traduction est activée, dix langues différentes seront prises en charge et les données de traduction doivent être disponibles pour toutes les langues. Il n'est pas possible de n'activer qu'une partie des langues.
- Lorsque l'utilisateur démarre le jeu, la langue utilisée dans le développement est affichée en premier. La langue peut ensuite être changée pour n'importe quelle langue.
- Le processus de traduction est fastidieux, mais il permet à un grand nombre de personnes de jouer avec.
___

## fichier de langue
Fichier JSON des données de traduction.
- Lorsque les données du jeu sont sorties avec des configurations publiques, un fichier JSON pour la traduction est généré dans `translations/world` dans le dossier de sortie.
- Les fichiers JSON pour la traduction dans chaque langue se trouvent dans le dossier. Le contenu contient des données non traduites.
- Le contenu a un identifiant dans chaque Type. En outre, il comporte un nom et une description.
- Des traductions doivent être effectuées et sauvegardées pour tous les noms et toutes les descriptions.
___

## Tâches de traduction
Édition des données de traduction
- Tous les fichiers de traduction contiennent des données dans la langue au moment du développement.
- Un travail de traduction est nécessaire pour les dossiers qui ne sont pas rédigés dans la langue dans laquelle ils ont été élaborés.
___

### AI
Traduction basée sur l'IA
- Traduire à l'aide de l'IA comme ChatGPT, Copilot et Claude.
- Il est possible de traduire en une seule fois et avec un certain degré de qualité.
- Il se peut que la traduction ne soit pas parfaite, en particulier pour les termes techniques et les noms propres.
- Selon le volume des traductions, l'utilisation de l'IA peut s'avérer coûteuse.
- Si le progrès de la traduction par l'IA est interrompu au milieu du processus, il peut être possible de dire à l'IA de "continuer" et elle peut y parvenir. (Dans certains cas, cela peut s'avérer inutile).
___

#### Exemples d'invites
Exemples d'instructions de traduction données à l'IA
- Exemple d'invite : traduire les valeurs `name` et `explanation` des données JSON téléchargées de l'Anglais vers le Japonais. Ne modifiez pas les autres minutes des données.
___

#### Utilisation de GPT
Traduction à l'aide du GPT de ChatGPT.
- Le JSON Language Translator fourni dans la bibliothèque GPT de ChatGPT peut être utilisé pour traduire JSON facilement.
- La structure JSON est conservée dans la traduction.
- Des fonctions similaires peuvent être offertes par des services d'IA autres que ChatGPT.
___

### service de traduction
Utiliser les services de traduction
- Traduisez en utilisant des services activés tels que DeepL et Google Translate.
- On peut s'attendre à des traductions de meilleure qualité que les traductions AI, mais il y a un coût qui dépend du volume de la traduction.
- Les fichiers JSON ne peuvent pas être traduits directement par les services de traduction, il faut donc créer et utiliser un programme.
- Il existe des services payants qui traduisent les données JSON telles quelles. (par exemple doctranslator.com)
___

### manuel (fonctionnement)
Traduction manuelle
- Ouvrez le fichier de traduction dans un éditeur de texte et saisissez le contenu traduit dans chaque langue. Cette opération prend beaucoup de temps, mais elle vous permet de traduire le fichier exactement comme vous le souhaitez.
___

## code langue
Liste des codes de langue pris en charge

|code langue|Langue.|
|-|-|
|fr|Anglais|
|zh|Chinois (langue)|
|es|Espagnol|
|ar|Arabe (langue)|
|pt|Portugais|
|Bonjour|Hindi|
|fr|Français|
|ru|Russe|
|de|Allemand|
|FR|Japonais|