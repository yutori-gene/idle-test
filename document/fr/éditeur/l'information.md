
# l'information
Configuration des informations de base sur l'élément (ID, nom, icône, couleur, etc.)
- Éléments d'information de base communs à chaque élément du monde (catégories, actions, objets, événements, etc.).
- Chaque élément est configuré séparément.
___

## ID
ID unique pour identifier l'élément
- ID pour identifier de manière unique chaque élément.
- Dans l'éditeur, il s'agit d'une chaîne de caractères permettant d'identifier l'élément.
- Par exemple, l'ID spécifie l'objet obtenu lorsque l'action est terminée.

!> Une fois l'ID configuré, ne le modifiez pas après la distribution du jeu. Toute modification entraînera des incohérences avec les données de jeu existantes et le jeu ne fonctionnera pas correctement.
___

### Nom affiché.
Nom d'affichage généré automatiquement à partir de l'ID
- Les caractères pouvant être utilisés sont une combinaison de lettres, de traits d'union et de chiffres.
- Si le nom n'est pas encore configuré, la première lettre de chaque mot est mise en majuscule et le trait d'union est remplacé par un espace, qui est automatiquement configuré dans le nom.
- Pour les langues autres que l'Anglais, l'entrée du nom doit être configurée individuellement.
___

#### Exemple.
Exemples concrets de conversion d'ID
- Si l'ID est `stylish-strong-axe`, le nom est `Stylish Strong Axe`.
___

### Pas de double emploi.
Interdiction de dupliquer les ID au sein d'un même Type.
- Ne pas dupliquer dans les types de catégories, d'actions, d'objets, d'événements et de préréglages car ils sont utilisés pour identifier les éléments.
- Le fait d'avoir le même ID pour différents types ne pose pas de problème.
- [_type_](fr/éditeur/type)
___

## Nom.
Nom de l'élément tel qu'il apparaît
- Nom de l'élément affiché dans le jeu.
- Des langues autres que l'Anglais peuvent également être saisies.
- Les noms qui reproduisent d'autres éléments sont acceptables.
- Si elle est trop longue, la partie débordante est omise de l'affichage pendant la lecture avec `...`.
___

### Conversion automatique de l'ID
Génération automatique de noms à partir des ID
- Si le champ est laissé vide, les informations sont automatiquement affichées en fonction de l'ID. Pour plus d'informations, voir la section précédente.
___

## note explicative
Description détaillée de l'élément.
- Une description des éléments affichés dans le jeu.
- Il est possible de saisir des langues autres que l'Anglais. Tous les textes, même longs, sont affichés.
- Si aucune explication n'est donnée, laisser en blanc.
___

## icône
Configuration d'icônes pour représenter les éléments.
- Les icônes peuvent être configurées en tant qu'images, Iconify ou emojis.
- Iconify est un service proposant une large gamme d'icônes.
- Si plusieurs d'entre eux sont comptés dans la configuration, les images, Iconify et les pictogrammes sont prioritaires et affichés dans cet ordre.
___

### Image.
Utiliser n'importe quel fichier image
- Image représentant l'élément.
- Si le fichier est volumineux, il est automatiquement redimensionné.
- Inutile si Iconify ou les pictogrammes sont configurés.
___

#### Type de fichier.
Formats de fichiers image pris en charge.
- Vous pouvez utiliser les types généraux qui peuvent être affichés dans le navigateur.
- JPEG, PNG, GIF, WebP, SVG, etc.
___

### Iconifier
Utiliser le jeu d'icônes Iconify
- Icônes représentant des éléments.
- Iconify est un service proposant une large gamme d'icônes.
- Si une image est configurée, elle aura la priorité.
___

#### Iconifier
Comment sélectionner des icônes à partir d'Iconify
- Rechercher `Iconify` pour les icônes qui peuvent être affichées.
- Vous pouvez trouver rapidement les meilleures icônes en recherchant des icônes.
- Sélectionnez une icône pour voir son identifiant (type de jeu d'icônes `:` nom de l'icône), comme `game-icons:sword-wound`, et collez-la directement dans ce champ d'icône.
![iconify-selection.png](../../resources/iconify-selection.png)
- [_iconify_](https://icon-sets.iconify.design)
___

### pictogramme
Affichage d'icônes avec pictogrammes
- Afficher les pictogrammes sous forme d'icônes.
- Il peut être converti du texte aux pictogrammes et être configuré rapidement.
- Pour les pictogrammes, saisissez les pictogrammes Unicode tels quels.
- Comme les pictogrammes introduits dans l'environnement d'exécution sont utilisés, ils sont affichés légèrement différemment selon les utilisateurs.
- Iconify permet de configurer des emojis indépendants de chaque environnement
- Les caractères non pictographiques peuvent être affichés, mais l'affichage peut être altéré s'il compte plus d'un caractère.
- Entrez des pictogrammes, par exemple `🗡️` ou `⚔️`.
___

## variété
Configure la couleur d'affichage de l'élément.
- En tant que couleur d'élément, elle est appliquée à l'icône et à la couleur d'arrière-plan de l'élément.
- Sélectionner dans le sélecteur de couleurs de l'éditeur.
___

### Héritage des éléments parents
Reprendre les configurations de couleur de l'élément parent.
- Si elle est vide, la couleur configurée dans l'élément parent est reprise.
- La hiérarchie des types pour chaque élément est la suivante
- Par exemple, si une action dispose d'une configuration de couleurs individuelles, celle-ci sera utilisée, tandis que si l'action ne dispose pas d'une configuration de couleurs individuelles, la couleur de la catégorie ou du monde sera utilisée.
```
world
├── category
├── action
├── item
├── group
├── event
└── preset
```
- [_type_](fr/éditeur/type)