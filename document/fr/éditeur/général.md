
# général
Paramètres de base du jeu, y compris les paramètres de langue et de niveau
___

## Langue.
Langue du monde au moment de sa création.
- Configure la langue utilisée dans cet éditeur de monde.
- La première langue affichée lorsque l'utilisateur démarre le jeu.
___

## la traduction
Préparer des traductions multilingues ou
- Si cette option est activée, les utilisateurs peuvent jouer dans n'importe quelle langue.
- Si elle est désactivée, vous ne pouvez lire que dans la langue sélectionnée dans les configurations de langue.
- Si la traduction est activée, les données traduites pour chaque langue doivent être fournies.
- [_translation_](fr/éditeur/la traduction)
___

## Temps max. désactivé [heures].
Délais pour le progrès désactivé.
- Configuration du nombre max. d'heures de progrès lorsque l'appareil est désactivé.
- Par exemple, si 6 heures est défini, le processus de retour désactivé jusqu'à 6 heures sera traité, mais si plus de temps est accordé pour le retour désactivé, le temps de désactivation sera traité comme 6 heures.
- Si le nombre de temps est fixé à 0, aucun traitement n'a lieu lors du retour désactivé.
- La valeur max. est de 24 heures.
- [_category_](fr/éditeur/catégorie)
___

## Niveau max de la Catégorie
Niveau haut pour chaque Catégorie.
- Configurer le niveau max pour chaque Catégorie.
- Si l'expérience est acquise au-delà de ce niveau, le niveau max fixé ici est utilisé dans le calcul de chaque propriété.
- Cette valeur n'est pas relationnelle pour les catégories sans niveau.
- [_category_](fr/éditeur/catégorie)
___

## fonction verrouillée
Cacher des éléments jusqu'à ce que les exigences soient satisfaites
- Si cette option est activée, l'Objet de l'action de catégorie est masqué tant qu'il n'a jamais été utilisé ou possédé et que les conditions requises n'ont pas été remplies.
- S'il est désactivé, tous les éléments sont affichés dès le début, mais ne peuvent être exécutés ou équipés tant que les conditions requises ne sont pas remplies.
- [_category_](fr/éditeur/catégorie)
- [_action_](fr/éditeur/action)
- [_item_](fr/éditeur/article)
___

## monnaie
Configuration de la monnaie (pièces) utilisée dans le jeu
- Effectuez la configuration de la devise utilisée dans le jeu.
- Il est possible de définir plusieurs devises et de réaliser la configuration de chacune d'entre elles à l'aide d'informations (ID, nom, icône, couleur, etc.).
- La monnaie sert à acheter et vendre des objets, ainsi qu'à augmenter la capacité de l'inventaire.
- La devise indiquée en premier est considérée comme la devise principale et est utilisée lorsque l'ID de devise (`coinId`) n'est pas spécifié pour un objet ou une capacité.
- [_information_](fr/éditeur/l'information)
- [_item_](fr/éditeur/article)
___

## capacité
Configuration de la capacité d'inventaire.
- Compte le haut nombre de types d'objets différents qu'un joueur peut avoir.
- Chaque objet est contrôlé par le nombre de types d'objets que vous possédez, et non par le nombre d'objets que vous comptez.
- En fixant la valeur de `initialCount` à 0, on obtient une capacité illimitée.
- Lorsqu'il est fait référence aux objets de capacité dans les conditions ou les récompenses, il convient d'utiliser l'ID configuré ici.
- [_item_](fr/éditeur/article)
___

### [_l'information_](fr/éditeur/l'information)
___

### Valeur par défaut [pcs].
Capacité initiale de l'inventaire (nombre d'objets différents pouvant être conservés)
- Capacité initiale (nombre d'objets différents pouvant être possédés) au début du jeu.
- Si `0` est défini, la capacité est illimitée.
___

### Prix de base [pièces].
Prix initial pour une capacité supplémentaire.
- Prix de base (en pièces) pour augmenter la capacité de l'inventaire d'un emplacement.
- Le prix réel est calculé comme suit : "prix de base x pourcentage d'augmentation ^ nombre de fois compté".
- Exemple : prix de base 100, taux d'augmentation 1,2, première 100 pièces, deuxième 120 pièces, troisième 144 pièces.
___

### Pourcentage d'augmentation [fois].
Augmentation en pourcentage des coûts d'expansion de la capacité
- Il s'agit d'un multiplicateur qui indique de combien le coût de l'expansion des capacités augmente avec le nième achat.
- Pour `1.0` le prix est toujours le même, pour `1.2` le prix est 20% plus élevé à chaque fois qu'il est acheté.
- Formule : prix de base x pourcentage d'augmentation ^ nombre de fois achetées

|taux d'augmentation|1er ajout.|5ème augmentation.|10ème augmentation.|100e augmentation.|1000ème augmentation.|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.05|x1.00|x1.22|x1.63|x131.50|x1.7×10²⁰|
|1.10|x1.00|x1.61|x2.59|x1.4 x 10⁴|x2.7×10⁴¹|
|1.20|x1.00|x2.49|x6.19|x8.3 x 10⁷|x8.3×10⁷⁹|
|1.50|x1.00|x5.06|x57.67|x1.9×10¹⁷|x7.0×10¹⁷⁶|
___

### ID de la devise
ID de la devise utilisée pour l'extension de capacité
- Spécifiez l'ID de la devise (coins) utilisée pour le paiement de l'extension de l'inventaire.
- Si ce champ est laissé vide, la devise principale (la première devise dans la liste « coins ») sera utilisée.
___

### Limite d'achat [nombre de fois]
Nombre maximal d'achats de capacité
- Il s'agit du nombre maximal de fois où vous pouvez acheter de l'espace de stockage avec de la monnaie.
- Si vous réglez ce paramètre sur `0`, vous pourrez acheter un nombre illimité d'articles.
- Si vous le réglez sur `-1`, vous ne pourrez plus acheter.
- L'augmentation de capacité résultant des récompenses n'est pas soumise à cette limite.
___

## Queue
Configuration du nombre de créneaux pour l'exécution en série (programmation) des actions
- Permet de gérer le nombre de créneaux disponibles pour l'exécution en série (programmation) d'actions.
- Tout comme la capacité, le nombre d'emplacements peut être acheté avec de la monnaie, mais il est également possible d'augmenter le nombre d'objets dans la file d'attente en les sélectionnant comme récompenses d'actions ou d'événements.
- Lorsque vous faites référence à un objet de la file d'attente dans les conditions ou les récompenses, veuillez utiliser l'ID configuré ici.
- [_item_](fr/éditeur/article)
___

### [_l'information_](fr/éditeur/l'information)
___

### Valeur par défaut [pcs].
Nombre de cases d'exécution consécutives pour commencer la partie
- Il s'agit du nombre de créneaux de réservation disponibles au début de la partie qui commence.
- La valeur minimale est `1` (il n'y a pas de traitement de type `0` = illimité, comme pour la capacité).
___

### Prix de base [pièces].
Prix de départ pour ajouter un emplacement
- Il s'agit du prix de base (en pièces) pour ajouter un emplacement supplémentaire à la série d'exécutions.
- Le prix réel est calculé comme suit : "prix de base x pourcentage d'augmentation ^ nombre de fois compté".
- Exemple : prix de base 100, taux d'augmentation 1,2, première 100 pièces, deuxième 120 pièces, troisième 144 pièces.
___

### Pourcentage d'augmentation [fois].
Taux de croissance des coûts liés à l'extension des capacités
- Il s'agit du coefficient indiquant dans quelle mesure le coût de l'extension de l'espace augmente lors du n-ième achat.
- Pour `1.0` le prix est toujours le même, pour `1.2` le prix est 20% plus élevé à chaque fois qu'il est acheté.
- Formule : prix de base x pourcentage d'augmentation ^ nombre de fois achetées
___

### ID de la devise
ID de la devise utilisée pour l'extension de la limite
- Spécifiez l'ID de la devise (coins) à utiliser pour le prix de l'extension de la période d'exécution continue.
- Si ce champ est laissé vide, la devise principale (la première devise dans la liste « coins ») sera utilisée.
___

### Limite d'achat [nombre de fois]
Nombre maximal d'achats de créneaux horaires
- Il s'agit du nombre maximal de fois où vous pouvez acheter des créneaux d'exécution en série avec de la monnaie.
- Si vous réglez ce paramètre sur `0`, vous pourrez acheter un nombre illimité d'articles.
- Si vous le réglez sur `-1`, vous ne pourrez plus acheter.
- L'augmentation du quota liée aux récompenses n'est pas soumise à cette limite maximale.
___

## Taux de haut de l'expérience [fois].
Augmentation en pourcentage de la difficulté du niveau.
- Plus le niveau d'une catégorie est élevé, plus le taux d'augmentation de l'expérience requise pour atteindre le niveau suivant est élevé.
- En augmentant cette valeur, vous augmentez le niveau de difficulté.
- Le nombre de points d'expérience nécessaires pour passer au niveau suivant est égal à (taux d'augmentation des points d'expérience)^(niveau actuel - 1).

|Taux d'augmentation de l'expérience|Lv.1|Lv.2|Lv.10|Lv.50|Lv.99.|
|-|-|-|-|-|-|
|0|x1.00|x1.00|x1.00|x1.00|x1.00|
|0.02|x1.00|x1.02|x1.22|x2.69|x5.52|
|0.05|x1.00|x1.05|x1.55|x11.47|x131.50|
|0.10|x1.00|x1.10|x2.36|x117.39|x5.7×10⁴|
|0.20|x1.00|x1.20|x6.19|x3,3 x 10³|x1,3 x 10¹¹|
- [_category_](fr/éditeur/catégorie)
___

## restriction du niveau d'action
Demande le nombre de fois où la même action d'attribut a été exécutée pour l'exécution d'une action.
- Si cette option est activée, le nombre de fois qu'une action ayant les mêmes attributs a été exécutée est automatiquement ajouté aux conditions d'exécution de chaque action.
- Le nombre de fois compté est égal à la valeur du niveau de l'Action.
- Si aucun attribut n'est configuré, c'est l'ID de la catégorie à laquelle il appartient qui est utilisé.
___

## [_valeur de combat_](fr/éditeur/combat)