
# カテゴリ
Allgemeiner Rahmen für die Klassifizierung von Aktionen und Gegenständen.
- Stellt eine wichtige Minute dar.
- Zum Beispiel kann es in jeder beliebigen Konfiguration eingesetzt werden, wie z.B. Nahbereich, Fernbereich, Magie, Kerker, Schmiede, Manufakturen, usw.
- アクションやアイテムはワールド直下に配置され、カテゴリIDで関連付けられます。
___

## [_Informationen_](de/editor/information)
___

## Gruppe (z.B. von Personen)
カテゴリの表示グループ分類
- Wenden Sie eine der in Basic konfigurierten Gruppen an.
- 設定したグループ順にカテゴリ一覧が表示されます。
- [_general_](de/editor/general)
___

## Anfänglicher Freigabezustand
Anfänglicher Anzeige- und Freigabezustand des Elements (wechselt automatisch in den nächsthöheren Zustand, sobald die Auslösebedingungen erfüllt sind)
- secreted: Wird in der Benutzeroberfläche erst angezeigt, wenn alle Anforderungen erfüllt sind (erscheint weder in den Hinweisen noch in der Liste der Anforderungen und Belohnungen).
- hidden: Solange kein Freischaltelement darauf verweist und die Voraussetzungen nicht erfüllt sind, bleibt es vollständig verborgen (der Name ist ausgegraut und es kann nicht bearbeitet werden).
- hinted (Standard): Es wird nur der Name angezeigt, aber der Eintrag kann erst bearbeitet werden, wenn er freigegeben ist.
- freigegeben: Unabhängig von den Bedingungen von Anfang an freigegeben und bedienbar (früher „Von Anfang an anzeigen“).
___

## [_Bedingungen und Konditionen_](de/editor/requirement)
___

## Ausrüstungsgruppe
このカテゴリで装備可能なアイテムグループの指定
- このカテゴリで装備できるアイテムのグループ名のリストです。
- Es können nur Gegenstände aus der Gruppe ausgerüstet werden, die dem hier angegebenen Gruppennamen entspricht.
- Wird eine leere Zeichenfolge angegeben, kommen Gegenstände mit einer nicht eingestellten Gruppe (leer) für die Ausrüstung in Frage.
- In der gleichen Gruppe kann nur ein Gegenstand ausgerüstet werden. Wenn Sie einen neuen Gegenstand ausrüsten, wird ein bereits vorhandener Gegenstand in derselben Gruppe automatisch abgelegt.
- Wenn die Liste leer ist (0 Stück), kann nichts ausgerüstet werden.
- [_general_](de/editor/general)
___

## Verfügbarkeit der Levels
カテゴリレベル機能の有無
- このカテゴリがレベルを持つかどうかのフラグです。
- Ist er an, hat er ein Level, ist er aus, hat er keins.
- 例として、剣技や魔法といった経験に基づくカテゴリはオンにし、ダンジョンや鍛冶屋といった場所のカテゴリはオフにするなどの使い方があります。
___

## gleichzeitiger Fortschritt
他カテゴリとの並行実行設定
- このカテゴリのアクションが、他のカテゴリのアクションと並行して進行できるかどうかのフラグです。
- オンの場合は、他のカテゴリのアクションとは独立して同時に進行できます。
- オフの場合は、同じくオフに設定された他のカテゴリのアクションと同時に実行できません。新たにこのカテゴリのアクションを開始すると、他の非スタンドアロンカテゴリで進行中のアクションは自動的に中止されます。
___

## Hintergrund
カテゴリ固有の背景設定
- このカテゴリの背景を設定します。
- カテゴリを選択されたときに、連動して背景画像が変更されます。
- Wenn nichts konfiguriert ist, wird die Welt-Hintergrundeinstellung so verwendet, wie sie ist.