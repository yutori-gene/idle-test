
# カテゴリ
Cadre général pour la classification des actions et des objets.
- Représente un classement majeur.
- Par exemple, il peut être configuré dans n'importe quel état d'esprit, comme la courte portée, la longue portée, la magie, les donjons, les forges, les manufactures, etc.
- アクションやアイテムはワールド直下に配置され、カテゴリIDで関連付けられます。
___

## [_l'information_](fr/editor/information)
___

## groupe (habituellement de personnes)
カテゴリの表示グループ分類
- Appliquer l'un des groupes configurés dans Basic.
- 設定したグループ順にカテゴリ一覧が表示されます。
- [_general_](fr/editor/general)
___

## État de déblocage initial
État initial d'affichage et de libération de l'élément (passe automatiquement à l'état haut lorsque les conditions d'activation sont remplies)
- secreted : Ne s'affiche en aucun cas dans l'interface utilisateur tant que toutes les conditions ne sont pas remplies (il n'apparaît pas dans les indices et est masqué dans la liste des conditions et des récompenses).
- hidden : Il est entièrement masqué tant qu'aucun élément de libération ne le référence et que les conditions requises ne sont pas remplies (son nom est grisé et il est inactif).
- hinted (par défaut) : seul le nom s'affiche en avant-première, mais il n'est pas possible d'interagir avec cet élément tant qu'il n'est pas disponible.
- released : Disponible et utilisable dès le début, quelles que soient les conditions (anciennement « Afficher dès le début »).
___

## [_conditions générales_](fr/editor/requirement)
___

## Disponibilité des niveaux
カテゴリレベル機能の有無
- このカテゴリがレベルを持つかどうかのフラグです。
- S'il est activé, il a un niveau ; s'il est désactivé, il n'en a pas.
- 例として、剣技や魔法といった経験に基づくカテゴリはオンにし、ダンジョンや鍛冶屋といった場所のカテゴリはオフにするなどの使い方があります。
___

## en progrès simultanés
他カテゴリとの並行実行設定
- このカテゴリのアクションが、他のカテゴリのアクションと並行して進行できるかどうかのフラグです。
- オンの場合は、他のカテゴリのアクションとは独立して同時に進行できます。
- オフの場合は、同じくオフに設定された他のカテゴリのアクションと同時に実行できません。新たにこのカテゴリのアクションを開始すると、他の非スタンドアロンカテゴリで進行中のアクションは自動的に中止されます。
___

## arrière-plan
カテゴリ固有の背景設定
- このカテゴリの背景を設定します。
- カテゴリを選択されたときに、連動して背景画像が変更されます。
- Si cette option n'est pas configurée, la configuration de l'arrière-plan du monde est utilisée telle quelle.