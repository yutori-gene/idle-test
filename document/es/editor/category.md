
# カテゴリ
Marco general para la clasificación de Acciones y Artículos.
- Representa una clasificación importante.
- Por ejemplo, se puede configurar en cualquier marco, como corto alcance, largo alcance, magia, mazmorras, herrerías, fábricas, etc.
- アクションやアイテムはワールド直下に配置され、カテゴリIDで関連付けられます。
___

## [_información_](es/editor/information)
___

## grupo (normalmente de personas)
カテゴリの表示グループ分類
- Aplique uno de los grupos configurados en Básico.
- 設定したグループ順にカテゴリ一覧が表示されます。
- [_general_](es/editor/general)
___

## Estado de desbloqueo inicial
Estado inicial de visualización y liberación del elemento (pasa automáticamente a un estado superior cuando se cumplen los requisitos de activación)
- secreted: No aparecerá en la interfaz de usuario hasta que se cumplan todos los requisitos (no aparecerá en las Pistas y permanecerá oculto en la lista de requisitos y recompensas).
- oculto: permanece completamente oculto (el nombre aparece en gris y no se puede modificar) mientras no sea referenciado por ningún elemento de liberación y no se cumplan los requisitos.
- hinted (por defecto): Solo se muestra el nombre como avance, pero no se puede modificar hasta que se libere.
- released: Se desbloquea y se puede manejar desde el principio, independientemente de las condiciones (antes «Mostrar desde el principio»).
___

## [_condiciones generales_](es/editor/requirement)
___

## Disponibilidad de niveles
カテゴリレベル機能の有無
- このカテゴリがレベルを持つかどうかのフラグです。
- Si está activado, tiene un nivel; si está desactivado, no.
- 例として、剣技や魔法といった経験に基づくカテゴリはオンにし、ダンジョンや鍛冶屋といった場所のカテゴリはオフにするなどの使い方があります。
___

## progresando simultáneamente
他カテゴリとの並行実行設定
- このカテゴリのアクションが、他のカテゴリのアクションと並行して進行できるかどうかのフラグです。
- オンの場合は、他のカテゴリのアクションとは独立して同時に進行できます。
- オフの場合は、同じくオフに設定された他のカテゴリのアクションと同時に実行できません。新たにこのカテゴリのアクションを開始すると、他の非スタンドアロンカテゴリで進行中のアクションは自動的に中止されます。
___

## fondo
カテゴリ固有の背景設定
- このカテゴリの背景を設定します。
- カテゴリを選択されたときに、連動して背景画像が変更されます。
- Si no se configura nada, la configuración del fondo del mundo se utiliza tal cual.