
# Ereignis
Nachrichten und Belohnungen, die zu festgelegten Zeitpunkten ausgelöst werden
- Zu bestimmten Zeitpunkten, beispielsweise beim ersten Öffnen einer Welt oder wenn das Spiel vorbei ist, wird diese Funktion ausgelöst und ein spezieller Bildschirm geöffnet.
- Für jeden Zeitpunkt ist jeweils ein Feld vorgesehen; es können weder weitere hinzugefügt noch entfernt werden. Felder für nicht verwendete Zeitpunkte bleiben leer.
- Sie werden nicht in der Liste der Missionen und Aufgaben angezeigt. Aufgaben, die als erledigt gelten, sobald bestimmte Bedingungen erfüllt sind, werden als Aufgaben in der Konfiguration festgelegt.
- Die Belohnung wird automatisch bei Aktivierung erworben. Es gibt weder einen Vorgang zum Abholen wie bei Aufgaben noch ein Band.
- Er kann das Level der Kategorie, die Anzahl der durchgeführten Aktionen und die Anzahl der Gegenstände, die er bei der Aktivierung besitzt, verändern.
- Wenn Sie die Felder „Name“, „Beschreibung“ und „Symbol“ leer lassen, werden die bei den Spielern integrierten Standardtexte und -symbole verwendet.

|Zeitmessung|Aktivierungsbedingung|wiederholen|
|-|-|-|
|`comebacked`|Wenn eine Person für mehr als eine Sekunde aus dem Internet zurückkehrt und eine Aktion im Läuft ist.|oft|
|`gameovered`|Wenn die Ausdauer des Spielers im Kampf zu Ende geht.|oft|
|`welcomed`|Als ich mit dieser Welt anfing.|nur einmal|
|`completed`|Wenn der max. Level aller Kategorien (maxCategoryLevels) erreicht ist.|nur einmal|
|`obtained`|Wenn eine bestimmte Aktion (z. B. eine Schatzkiste) abgeschlossen bzw. bestätigt wurde|oft|
- [_task_](de/editor/task)
___

## Bei Rückkehr
Wird bei der Rückkehr aus dem Offline-Zustand ausgelöst
- Wird ausgelöst, wenn du nach mindestens einer Sekunde offline zurückkehrst und eine Aktion im Gange war.
- Wird zusammen mit der Zusammenfassung des Fortschritts während deiner Abwesenheit angezeigt.
___

### [_Informationen_](de/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- Es ist auf `comebacked` festgelegt und kann nicht bearbeitet werden.
- Wird bei jeder Rückkehr ausgelöst, beliebig oft.
___

### 初期表示状態
イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）
- イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
___

### 条件
報酬を獲得する条件
- タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。
- 報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。
- 条件を設定していない場合は、発動するたびに報酬を獲得します。
___

#### Typ.
Art des Elements, auf das als Bedingung verwiesen wird.

|Typ.|Referenzierte Werte|
|-|-|
|Kategorie.|Level der Kategorie.|
|Aktion.|Zählt, wie oft die Aktion durchgeführt wurde.|
|Gegenstand|Anzahl der gehaltenen Gegenstände.|
___

#### ID des Elements
ID des Elements, auf das sich die Bedingung bezieht.
___

#### Wert
Notwendige numerische Werte für Anforderungen.
- Die Bedingung ist erfüllt, wenn der Wert größer als oder gleich dem angegebenen Wert ist.
___

#### Verbrauchswahrscheinlichkeit [0-1].
Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird (0-1, nur gültig, wenn der Typ Gegenstand ist).
- Die Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird, wenn die Bedingung erfüllt ist und die Aktion durchgeführt wird.
- Bei `1` wird immer verbraucht, bei `0.5` mit einer Wahrscheinlichkeit von 50 % und bei `0` gar nicht.
- Der Standardwert ist `1` (wird immer verbraucht).
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

#### Ausrüstung
Erfordert, dass sich der Gegenstand in Ausrüstung befindet (nur gültig, wenn der Typ Gegenstand ist) oder
- Wenn er aktiviert ist, muss der Gegenstand sowohl ausgerüstet als auch besessen werden.
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Typ.
Art des zu erwerbenden Elements.

|Typ.|Was wird erworben.|
|-|-|
|Kategorie.|Level (Erfahrungsumrechnung hinzugefügt)|
|Aktion.|Anzahl der Ausführungsvorgänge.|
|Gegenstand|Anzahl der Besitztümer|
___

#### ID des Elements
ID, die das zu erwerbende Element identifiziert.
___

#### Wert
Zu ermittelnde numerische Werte
- Minus-Werte verringern die Anzahl der Besitztümer, die Anzahl der Durchführungen und ihr Level. Er kann jedoch nicht kleiner als 0 sein.
- Wenn ein Gegenstand eine maximale Anzahl von Besitztümern hat (Maximum), wird die Anzahl der Besitztümer nicht über diesen Wert hinaus erhöht.
- Ist der Typ eine Kategorie, wird der eingestellte Wert direkt zum Level addiert (1 für 1 Level, 0,5 für 0,5 Level). Der übliche Weg, dies anzupassen, ist die Konfiguration des Erfahrungs-Wertes der Aktion. Diese Konfiguration ist nicht notwendig, es sei denn, es gibt einen besonderen Zweck.
___

#### Wahrscheinlichkeit [-1 bis 1]
Wahrscheinlichkeit eines Erfolgs beim Abruf (negative Werte werden nur bei einem Fehler ausgewertet)
- Die Wahrscheinlichkeit, dass etwas erhalten wird, wird als Dezimalzahl zwischen -1 und 1 konfiguriert. Zur Bestimmung der Wahrscheinlichkeit wird der Wert herangezogen.
- Bei positivem Wert wird nur bei Erfolg der Aktion geprüft: mit `1` erhält man es immer, mit `0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei negativem Wert wird nur bei Misserfolg der Aktion geprüft: mit `-1` erhält man es immer, mit `-0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei `0` wird der Wert weder bei Erfolg noch bei Fehler zurückgegeben.
- Der Standardwert ist `1` (wird bei Erfolg immer abgerufen).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## Bei Game Over
Wird ausgelöst, wenn im Kampf die Ausdauer aufgebraucht ist
- Wird ausgelöst, wenn die Ausdauer des Spielers im Kampf aufgebraucht ist.
- Mit einer negativen Belohnungsmenge lässt sich einem Game Over ein Preis zuordnen.
___

### [_Informationen_](de/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- Es ist auf `gameovered` festgelegt und kann nicht bearbeitet werden.
- Wird bei jedem Game Over ausgelöst, beliebig oft.
___

### 初期表示状態
イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）
- イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
___

### 条件
報酬を獲得する条件
- タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。
- 報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。
- 条件を設定していない場合は、発動するたびに報酬を獲得します。
___

#### Typ.
Art des Elements, auf das als Bedingung verwiesen wird.

|Typ.|Referenzierte Werte|
|-|-|
|Kategorie.|Level der Kategorie.|
|Aktion.|Zählt, wie oft die Aktion durchgeführt wurde.|
|Gegenstand|Anzahl der gehaltenen Gegenstände.|
___

#### ID des Elements
ID des Elements, auf das sich die Bedingung bezieht.
___

#### Wert
Notwendige numerische Werte für Anforderungen.
- Die Bedingung ist erfüllt, wenn der Wert größer als oder gleich dem angegebenen Wert ist.
___

#### Verbrauchswahrscheinlichkeit [0-1].
Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird (0-1, nur gültig, wenn der Typ Gegenstand ist).
- Die Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird, wenn die Bedingung erfüllt ist und die Aktion durchgeführt wird.
- Bei `1` wird immer verbraucht, bei `0.5` mit einer Wahrscheinlichkeit von 50 % und bei `0` gar nicht.
- Der Standardwert ist `1` (wird immer verbraucht).
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

#### Ausrüstung
Erfordert, dass sich der Gegenstand in Ausrüstung befindet (nur gültig, wenn der Typ Gegenstand ist) oder
- Wenn er aktiviert ist, muss der Gegenstand sowohl ausgerüstet als auch besessen werden.
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Typ.
Art des zu erwerbenden Elements.

|Typ.|Was wird erworben.|
|-|-|
|Kategorie.|Level (Erfahrungsumrechnung hinzugefügt)|
|Aktion.|Anzahl der Ausführungsvorgänge.|
|Gegenstand|Anzahl der Besitztümer|
___

#### ID des Elements
ID, die das zu erwerbende Element identifiziert.
___

#### Wert
Zu ermittelnde numerische Werte
- Minus-Werte verringern die Anzahl der Besitztümer, die Anzahl der Durchführungen und ihr Level. Er kann jedoch nicht kleiner als 0 sein.
- Wenn ein Gegenstand eine maximale Anzahl von Besitztümern hat (Maximum), wird die Anzahl der Besitztümer nicht über diesen Wert hinaus erhöht.
- Ist der Typ eine Kategorie, wird der eingestellte Wert direkt zum Level addiert (1 für 1 Level, 0,5 für 0,5 Level). Der übliche Weg, dies anzupassen, ist die Konfiguration des Erfahrungs-Wertes der Aktion. Diese Konfiguration ist nicht notwendig, es sei denn, es gibt einen besonderen Zweck.
___

#### Wahrscheinlichkeit [-1 bis 1]
Wahrscheinlichkeit eines Erfolgs beim Abruf (negative Werte werden nur bei einem Fehler ausgewertet)
- Die Wahrscheinlichkeit, dass etwas erhalten wird, wird als Dezimalzahl zwischen -1 und 1 konfiguriert. Zur Bestimmung der Wahrscheinlichkeit wird der Wert herangezogen.
- Bei positivem Wert wird nur bei Erfolg der Aktion geprüft: mit `1` erhält man es immer, mit `0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei negativem Wert wird nur bei Misserfolg der Aktion geprüft: mit `-1` erhält man es immer, mit `-0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei `0` wird der Wert weder bei Erfolg noch bei Fehler zurückgegeben.
- Der Standardwert ist `1` (wird bei Erfolg immer abgerufen).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## Beim ersten Start
Wird beim ersten Öffnen der Welt ausgelöst
- Wird ausgelöst, wenn diese Welt zum ersten Mal gestartet wird.
- Dient dazu, die Spielwelt vorzustellen oder die Startausrüstung zu übergeben.
___

### [_Informationen_](de/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- Es ist auf `welcomed` festgelegt und kann nicht bearbeitet werden.
- Wird nur einmal ausgelöst, beim ersten Start.
___

### 初期表示状態
イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）
- イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
___

### 条件
報酬を獲得する条件
- タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。
- 報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。
- 条件を設定していない場合は、発動するたびに報酬を獲得します。
___

#### Typ.
Art des Elements, auf das als Bedingung verwiesen wird.

|Typ.|Referenzierte Werte|
|-|-|
|Kategorie.|Level der Kategorie.|
|Aktion.|Zählt, wie oft die Aktion durchgeführt wurde.|
|Gegenstand|Anzahl der gehaltenen Gegenstände.|
___

#### ID des Elements
ID des Elements, auf das sich die Bedingung bezieht.
___

#### Wert
Notwendige numerische Werte für Anforderungen.
- Die Bedingung ist erfüllt, wenn der Wert größer als oder gleich dem angegebenen Wert ist.
___

#### Verbrauchswahrscheinlichkeit [0-1].
Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird (0-1, nur gültig, wenn der Typ Gegenstand ist).
- Die Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird, wenn die Bedingung erfüllt ist und die Aktion durchgeführt wird.
- Bei `1` wird immer verbraucht, bei `0.5` mit einer Wahrscheinlichkeit von 50 % und bei `0` gar nicht.
- Der Standardwert ist `1` (wird immer verbraucht).
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

#### Ausrüstung
Erfordert, dass sich der Gegenstand in Ausrüstung befindet (nur gültig, wenn der Typ Gegenstand ist) oder
- Wenn er aktiviert ist, muss der Gegenstand sowohl ausgerüstet als auch besessen werden.
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Typ.
Art des zu erwerbenden Elements.

|Typ.|Was wird erworben.|
|-|-|
|Kategorie.|Level (Erfahrungsumrechnung hinzugefügt)|
|Aktion.|Anzahl der Ausführungsvorgänge.|
|Gegenstand|Anzahl der Besitztümer|
___

#### ID des Elements
ID, die das zu erwerbende Element identifiziert.
___

#### Wert
Zu ermittelnde numerische Werte
- Minus-Werte verringern die Anzahl der Besitztümer, die Anzahl der Durchführungen und ihr Level. Er kann jedoch nicht kleiner als 0 sein.
- Wenn ein Gegenstand eine maximale Anzahl von Besitztümern hat (Maximum), wird die Anzahl der Besitztümer nicht über diesen Wert hinaus erhöht.
- Ist der Typ eine Kategorie, wird der eingestellte Wert direkt zum Level addiert (1 für 1 Level, 0,5 für 0,5 Level). Der übliche Weg, dies anzupassen, ist die Konfiguration des Erfahrungs-Wertes der Aktion. Diese Konfiguration ist nicht notwendig, es sei denn, es gibt einen besonderen Zweck.
___

#### Wahrscheinlichkeit [-1 bis 1]
Wahrscheinlichkeit eines Erfolgs beim Abruf (negative Werte werden nur bei einem Fehler ausgewertet)
- Die Wahrscheinlichkeit, dass etwas erhalten wird, wird als Dezimalzahl zwischen -1 und 1 konfiguriert. Zur Bestimmung der Wahrscheinlichkeit wird der Wert herangezogen.
- Bei positivem Wert wird nur bei Erfolg der Aktion geprüft: mit `1` erhält man es immer, mit `0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei negativem Wert wird nur bei Misserfolg der Aktion geprüft: mit `-1` erhält man es immer, mit `-0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei `0` wird der Wert weder bei Erfolg noch bei Fehler zurückgegeben.
- Der Standardwert ist `1` (wird bei Erfolg immer abgerufen).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## Beim Abschluss
Wird ausgelöst, wenn alle Kategorien ihr maximales Level erreichen
- Wird ausgelöst, wenn die Level aller Kategorien den Maximalwert (maxCategoryLevels) erreichen.
- Kategorien, die nicht numeric sind, werden von der Prüfung ausgenommen.
___

### [_Informationen_](de/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- Es ist auf `completed` festgelegt und kann nicht bearbeitet werden.
- Wird nur einmal ausgelöst, wenn die Bedingungen erfüllt sind.
___

### 初期表示状態
イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）
- イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
___

### 条件
報酬を獲得する条件
- タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。
- 報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。
- 条件を設定していない場合は、発動するたびに報酬を獲得します。
___

#### Typ.
Art des Elements, auf das als Bedingung verwiesen wird.

|Typ.|Referenzierte Werte|
|-|-|
|Kategorie.|Level der Kategorie.|
|Aktion.|Zählt, wie oft die Aktion durchgeführt wurde.|
|Gegenstand|Anzahl der gehaltenen Gegenstände.|
___

#### ID des Elements
ID des Elements, auf das sich die Bedingung bezieht.
___

#### Wert
Notwendige numerische Werte für Anforderungen.
- Die Bedingung ist erfüllt, wenn der Wert größer als oder gleich dem angegebenen Wert ist.
___

#### Verbrauchswahrscheinlichkeit [0-1].
Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird (0-1, nur gültig, wenn der Typ Gegenstand ist).
- Die Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird, wenn die Bedingung erfüllt ist und die Aktion durchgeführt wird.
- Bei `1` wird immer verbraucht, bei `0.5` mit einer Wahrscheinlichkeit von 50 % und bei `0` gar nicht.
- Der Standardwert ist `1` (wird immer verbraucht).
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

#### Ausrüstung
Erfordert, dass sich der Gegenstand in Ausrüstung befindet (nur gültig, wenn der Typ Gegenstand ist) oder
- Wenn er aktiviert ist, muss der Gegenstand sowohl ausgerüstet als auch besessen werden.
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Typ.
Art des zu erwerbenden Elements.

|Typ.|Was wird erworben.|
|-|-|
|Kategorie.|Level (Erfahrungsumrechnung hinzugefügt)|
|Aktion.|Anzahl der Ausführungsvorgänge.|
|Gegenstand|Anzahl der Besitztümer|
___

#### ID des Elements
ID, die das zu erwerbende Element identifiziert.
___

#### Wert
Zu ermittelnde numerische Werte
- Minus-Werte verringern die Anzahl der Besitztümer, die Anzahl der Durchführungen und ihr Level. Er kann jedoch nicht kleiner als 0 sein.
- Wenn ein Gegenstand eine maximale Anzahl von Besitztümern hat (Maximum), wird die Anzahl der Besitztümer nicht über diesen Wert hinaus erhöht.
- Ist der Typ eine Kategorie, wird der eingestellte Wert direkt zum Level addiert (1 für 1 Level, 0,5 für 0,5 Level). Der übliche Weg, dies anzupassen, ist die Konfiguration des Erfahrungs-Wertes der Aktion. Diese Konfiguration ist nicht notwendig, es sei denn, es gibt einen besonderen Zweck.
___

#### Wahrscheinlichkeit [-1 bis 1]
Wahrscheinlichkeit eines Erfolgs beim Abruf (negative Werte werden nur bei einem Fehler ausgewertet)
- Die Wahrscheinlichkeit, dass etwas erhalten wird, wird als Dezimalzahl zwischen -1 und 1 konfiguriert. Zur Bestimmung der Wahrscheinlichkeit wird der Wert herangezogen.
- Bei positivem Wert wird nur bei Erfolg der Aktion geprüft: mit `1` erhält man es immer, mit `0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei negativem Wert wird nur bei Misserfolg der Aktion geprüft: mit `-1` erhält man es immer, mit `-0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei `0` wird der Wert weder bei Erfolg noch bei Fehler zurückgegeben.
- Der Standardwert ist `1` (wird bei Erfolg immer abgerufen).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## Beim Abschluss einer Einzelaktion
Wird beim Abschluss einer Einzelaktion wie einer Schatztruhe ausgelöst
- Wird ausgelöst, wenn eine Aktion der Art single (etwa eine Schatztruhe) abgeschlossen und bestätigt wird.
- Zusätzlich zur eigenen Belohnung der Aktion lässt sich die hier eingestellte Belohnung obendrauf geben.
___

### [_Informationen_](de/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- Es ist auf `obtained` festgelegt und kann nicht bearbeitet werden.
- Wird bei jedem Abschluss einer Einzelaktion ausgelöst, beliebig oft.
___

### 初期表示状態
イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）
- イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
___

### 条件
報酬を獲得する条件
- タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。
- 報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。
- 条件を設定していない場合は、発動するたびに報酬を獲得します。
___

#### Typ.
Art des Elements, auf das als Bedingung verwiesen wird.

|Typ.|Referenzierte Werte|
|-|-|
|Kategorie.|Level der Kategorie.|
|Aktion.|Zählt, wie oft die Aktion durchgeführt wurde.|
|Gegenstand|Anzahl der gehaltenen Gegenstände.|
___

#### ID des Elements
ID des Elements, auf das sich die Bedingung bezieht.
___

#### Wert
Notwendige numerische Werte für Anforderungen.
- Die Bedingung ist erfüllt, wenn der Wert größer als oder gleich dem angegebenen Wert ist.
___

#### Verbrauchswahrscheinlichkeit [0-1].
Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird (0-1, nur gültig, wenn der Typ Gegenstand ist).
- Die Wahrscheinlichkeit, dass ein Gegenstand konsumiert wird, wenn die Bedingung erfüllt ist und die Aktion durchgeführt wird.
- Bei `1` wird immer verbraucht, bei `0.5` mit einer Wahrscheinlichkeit von 50 % und bei `0` gar nicht.
- Der Standardwert ist `1` (wird immer verbraucht).
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

#### Ausrüstung
Erfordert, dass sich der Gegenstand in Ausrüstung befindet (nur gültig, wenn der Typ Gegenstand ist) oder
- Wenn er aktiviert ist, muss der Gegenstand sowohl ausgerüstet als auch besessen werden.
- Ungültig, wenn der Typ nicht der Gegenstand ist.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Typ.
Art des zu erwerbenden Elements.

|Typ.|Was wird erworben.|
|-|-|
|Kategorie.|Level (Erfahrungsumrechnung hinzugefügt)|
|Aktion.|Anzahl der Ausführungsvorgänge.|
|Gegenstand|Anzahl der Besitztümer|
___

#### ID des Elements
ID, die das zu erwerbende Element identifiziert.
___

#### Wert
Zu ermittelnde numerische Werte
- Minus-Werte verringern die Anzahl der Besitztümer, die Anzahl der Durchführungen und ihr Level. Er kann jedoch nicht kleiner als 0 sein.
- Wenn ein Gegenstand eine maximale Anzahl von Besitztümern hat (Maximum), wird die Anzahl der Besitztümer nicht über diesen Wert hinaus erhöht.
- Ist der Typ eine Kategorie, wird der eingestellte Wert direkt zum Level addiert (1 für 1 Level, 0,5 für 0,5 Level). Der übliche Weg, dies anzupassen, ist die Konfiguration des Erfahrungs-Wertes der Aktion. Diese Konfiguration ist nicht notwendig, es sei denn, es gibt einen besonderen Zweck.
___

#### Wahrscheinlichkeit [-1 bis 1]
Wahrscheinlichkeit eines Erfolgs beim Abruf (negative Werte werden nur bei einem Fehler ausgewertet)
- Die Wahrscheinlichkeit, dass etwas erhalten wird, wird als Dezimalzahl zwischen -1 und 1 konfiguriert. Zur Bestimmung der Wahrscheinlichkeit wird der Wert herangezogen.
- Bei positivem Wert wird nur bei Erfolg der Aktion geprüft: mit `1` erhält man es immer, mit `0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei negativem Wert wird nur bei Misserfolg der Aktion geprüft: mit `-1` erhält man es immer, mit `-0.5` mit einer Wahrscheinlichkeit von 50 %.
- Bei `0` wird der Wert weder bei Erfolg noch bei Fehler zurückgegeben.
- Der Standardwert ist `1` (wird bei Erfolg immer abgerufen).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。