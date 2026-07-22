
# Type
Classification de base des mondes
- Les mondes sont de six types.
- Tous les éléments sont placés directement sous le monde.
- Les actions et les objets sont associés à l'ID de la Catégorie à laquelle ils appartiennent.

|Type|説明|
|-|-|
|[_catégorie_](fr/éditeur/catégorie)|Cadre général pour la classification des actions et des objets.|
|[_action_](fr/éditeur/action)|Des éléments d'action tels que la collecte, la fabrication et le combat.|
|[_article_](fr/éditeur/article)|Éléments de biens tels que les équipements et les consommables|
|[_groupe_](fr/éditeur/groupe)|Définir des groupes d'affichage pour les catégories, les actions et les objets|
|[_événement_](fr/éditeur/événement)|Système de messages et de récompenses déclenché par des conditions.|
|[_préétabli_](fr/éditeur/préétabli)|Personnalisation de l'affichage des éléments du système|
```
world
├── category
├── action
├── item
├── group
├── event
└── preset
```