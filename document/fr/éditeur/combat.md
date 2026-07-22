
# valeur de combat
Valeurs de correction du combat pour les actions de type endurance.
- Valeurs de correction valables uniquement pour les actions de type `stamina`.
- Chaque valeur est calculée comme une correction supplémentaire à la différence de niveau entre le joueur et l'Action.
- Par exemple, si la valeur d'attaque est de 10, les dégâts de l'attaque sont calculés comme si le niveau du joueur était supérieur de 10 au niveau de l'Action. Si elle est négative, la correction se fait dans le sens inverse.
- S'il est configuré à `defaultCombat` dans `General`, il devient le paramètre de combat par défaut pour le monde entier.
___

## Valeur d'attaque [différence de niveau].
Correction de la différence de niveau aux dégâts d'endurance infligés aux adversaires.
- Plus la valeur est élevée, plus les dégâts sont importants.
___

## Valeur de défense [différence de niveau].
Correction de la différence de niveau aux dégâts d'endurance reçus des adversaires.
- Plus la valeur est élevée, plus les dégâts sont réduits.
___

## Valeur de précision [différence de niveau].
Correction de la différence de niveau pour le taux d'échec des attaques.
- Plus la valeur est élevée, plus le taux d'erreur est bas.
___

## Valeur d'évasion [différence de niveau].
Correction de la différence de niveau sur le taux d'évasion des attaques de l'adversaire.
- Plus la valeur est élevée, plus il est facile d'éviter une attaque de l'adversaire.
___

## Valeur de restauration [différence de niveau].
Correction de la différence de niveau pour restaurer l'endurance.
- Plus la valeur est élevée, plus l'endurance est restaurée.