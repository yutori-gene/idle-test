
# 変化イベント
カテゴリ・アクション・アイテムの数量が一度に条件量以上増えた時に発動する内部処理用イベント
- アクションの完了、購入・売却、宝箱の開封など、数量が変化するあらゆるタイミングでチェックされます。
- 条件（requirements）は所持数などの絶対値ではなく、そのタイミング1回分の増加量で判定します。複数回に分けた小さな増加は合算されません。
- 複数の条件を設定した場合、その1回の変化ですべての条件を同時に満たす必要があります。
- 条件を満たすたびに報酬を受け取り、何度でも繰り返し発動します。タスクと違って一度きりではありません。
- プレイヤーの画面には一切表示されません。ミッションの一覧にも出ず、達成のメッセージも出ません。
- [_unique_](de/editor/unique)
___

## [_Informationen_](de/editor/information)
___

## カテゴリ
変化イベントが所属するカテゴリのID（画面に表示されないため分類のみに使われます）
- プレイヤーの画面には表示されないため、この設定は見た目に影響しません。
___

## タイミング
変化イベント発動のタイミング（`changed`固定）
- `changed`で固定されており、編集できません。
- 数量が変化するあらゆるタイミングでチェックされ、条件を満たすたびに繰り返し発動します。
___

## 初期表示状態
画面に表示されないため実質的に影響しません
- 変化イベントはプレイヤーの画面に表示されないため、この設定は使われません。
___

## 条件
変化イベント発動の条件（数量の増加量で判定）
- 設定した数だけ、そのタイミング1回で増えていれば条件を満たします。所持数などの絶対値は見ません。
- 例えばアイテムの条件を3に設定した場合、その1回でそのアイテムが3個以上増えていれば満たされます。
- 減少は増加条件には数えません。
- 複数の条件を設定した場合、その1回の変化ですべてを同時に満たす必要があります。
- 条件を設定していない変化イベントは発動しません。
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

### Typ.
Art des Elements, auf das als Bedingung verwiesen wird.

|Typ.|Referenzierte Werte|
|-|-|
|カテゴリ|カテゴリのレベル|
|Aktion.|Zählt, wie oft die Aktion durchgeführt wurde.|
|Gegenstand|Anzahl der gehaltenen Gegenstände.|
___

### ID des Elements
ID des Elements, auf das sich die Bedingung bezieht.
___

### Wert
Notwendige numerische Werte für Anforderungen.
- Die Bedingung ist erfüllt, wenn der Wert größer als oder gleich dem angegebenen Wert ist.
___

### Verbrauchswahrscheinlichkeit [0-1].
Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird (0-1, nur gültig, wenn der Typ Gegenstand ist).
- Die Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird, wenn die Bedingung erfüllt ist und die Aktion durchgeführt wird.
- Bei `1` wird immer verbraucht, bei `0.5` mit einer Wahrscheinlichkeit von 50 % und bei `0` gar nicht.
- Der Standardwert ist `1` (wird immer verbraucht).
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

### Ausrüstung
Erfordert, dass sich der Gegenstand in Ausrüstung befindet (nur gültig, wenn der Typ Gegenstand ist) oder
- Wenn er aktiviert ist, muss der Gegenstand sowohl ausgerüstet als auch besessen werden.
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

## グループ集計
条件のidをグループIDとして扱い、所属する要素の増加量の合計で判定する
- 有効にすると、条件（requirements）に設定したidは基本設定のグループのIDとして扱われます。
- そのグループに属する全カテゴリ・全アクション・全アイテムの増加量を合計して判定します。
- 無効の場合は今まで通り、条件のidは個別のカテゴリ・アクション・アイテムのIDとして扱われます。
___

## 報酬
変化イベント発動時の報酬設定
- 条件を満たすたびに自動で受け取ります。プレイヤーの操作は不要です。
- カテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- 数量にマイナスを設定することもできます。
___

### Typ.
Art des zu erwerbenden Elements.

|Typ.|Was wird erworben.|
|-|-|
|カテゴリ|Level (Erfahrungsumrechnung hinzugefügt)|
|Aktion.|Anzahl der Ausführungsvorgänge.|
|Gegenstand|Anzahl der Besitztümer|
___

### ID des Elements
ID, die das zu erwerbende Element identifiziert.
___

### Wert
Zu ermittelnde numerische Werte
- Minus-Werte verringern die Anzahl der Besitztümer, die Anzahl der Durchführungen und ihr Level. Er kann jedoch nicht kleiner als 0 sein.
- Wenn ein Gegenstand eine maximale Anzahl von Besitztümern hat (Maximum), wird die Anzahl der Besitztümer nicht über diesen Wert hinaus erhöht.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

### Wahrscheinlichkeit [-1 bis 1]
Wahrscheinlichkeit eines Erfolgs beim Abruf (negative Werte werden nur bei einem Fehler ausgewertet)
- Die Wahrscheinlichkeit, dass etwas erhalten wird, wird als Dezimalzahl zwischen -1 und 1 konfiguriert. Zur Bestimmung der Wahrscheinlichkeit wird der Wert herangezogen.
- Bei positivem Wert wird nur bei Erfolg der Aktion geprüft: mit `1` erhält man es immer, mit `0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei negativem Wert wird nur bei Misserfolg der Aktion geprüft: mit `-1` erhält man es immer, mit `-0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei `0` wird der Wert weder bei Erfolg noch bei Fehler zurückgegeben.
- Der Standardwert ist `1` (wird bei Erfolg immer abgerufen).
___

## 変化イベントグループ
内部管理用の表示グループ分類（画面に表示されないため実質未使用）
- 変化イベントはプレイヤーの画面に表示されないため、この設定は見た目に影響しません。