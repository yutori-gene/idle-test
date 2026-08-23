
# préétabli
Personnalisation de l'affichage des éléments du système
- Remplace le texte et les icônes de l'interface utilisateur pré-intégrés dans le moteur de jeu (joueur).
- Seuls ceux qui correspondent à un préréglage existant par ID seront remplacés.
- Seuls les éléments que vous avez configurés seront remplacés. Par exemple, si seule l'icône est configurée, les autres éléments tels que le nom et la couleur utiliseront l'original.
- Les remplacements apportés aux noms et aux descriptions ont priorité sur les traductions intégrées par les joueurs pour chaque langue. Les chaînes de caractères remplacées s'affichent telles quelles dans toutes les langues.
- Si vous souhaitez modifier le libellé pour chaque langue, activez la traduction et spécifiez-le dans le fichier de traduction `translations/world` généré. Ce fichier aura la priorité absolue.
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
- Si l'identifiant est `stylish-strong-axe`, le nom devient `Stylish Strong Axe`.
___

### Pas de double emploi.
Interdiction de dupliquer les ID au sein d'un même Type.
- 要素の判別に用いられるため、カテゴリ、アクション、アイテム、イベント、プリセットの各タイプ内で重複しないでください。
- Le fait d'avoir le même ID pour différents types ne pose pas de problème.
- [_type_](fr/editor/type)
___

## Nom.
Nom de l'élément tel qu'il apparaît
- Nom de l'élément affiché dans le jeu.
- Des langues autres que l'Anglais peuvent également être saisies.
- Les noms qui reproduisent d'autres éléments sont acceptables.
- S'il est trop long, la partie qui déborde est abrégée par `…` dans l'affichage pendant le jeu.
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

#### Type de fichier
Formats de fichier image pris en charge
- Les formats courants que les navigateurs peuvent afficher sont utilisables.
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
- Recherchez les icônes affichables sur `Iconify`.
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

## Couleur
Configure la couleur d'affichage de l'élément.
- En tant que couleur d'élément, elle est appliquée à l'icône et à la couleur d'arrière-plan de l'élément.
- Sélectionner dans le sélecteur de couleurs de l'éditeur.
___

### Héritage depuis l'élément parent
Reprise de la couleur configurée sur l'élément parent
- Si le champ est laissé vide, la couleur configurée sur l'élément parent est héritée.
- La hiérarchie des types de chaque élément est la suivante.
- 例えば、アクションに個別の色が設定されている場合はそれが利用されますが、アクションに個別の色が設定されていない場合はカテゴリ又はワールドの色が使用されます。
- イベントもカテゴリを設定している場合は、アクションやアイテムと同じようにそのカテゴリの色を引き継ぎます。
```
world
├── category
├── action
├── item
├── skill
├── group
├── task
└── preset
```
- [_type_](fr/editor/type)