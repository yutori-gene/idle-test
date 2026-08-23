
# 固定イベント
決まったタイミングで発動するメッセージと報酬
- ワールドを初めて開いた時やゲームオーバーになった時など、決まったタイミングで発動して専用の画面を開きます。
- タイミングごとに1つずつ用意されており、追加も削除もできません。使わないタイミングは空欄のままにします。
- ミッションやタスクの一覧には表示されません。条件を満たすと達成になるものはタスクで設定します。
- 報酬は発動と同時に自動で獲得します。タスクのような受け取りの操作もリボンもありません。
- 発動時にカテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- 名前・説明・アイコンを空欄にすると、プレイヤーに内蔵されている既定の文言とアイコンが使われます。

|タイミング|発動条件|繰り返し|
|-|-|-|
|`comebacked`|オフラインから1秒以上経過して復帰し、かつ進行中のアクションがあった時|何度も|
|`gameovered`|戦闘でプレイヤーのスタミナがなくなった時|何度も|
|`welcomed`|このワールドを初めて起動した時|一度のみ|
|`completed`|全カテゴリのレベルが最大値（maxCategoryLevels）に達した時|一度のみ|
|`obtained`|single種別のアクション（宝箱など）を完了・確認した時|何度も|
- [_task_](pt/editor/task)
___

## 復帰時
オフラインから復帰した時に発動
- オフラインから1秒以上経過して復帰し、かつ進行中のアクションがあった時に発動します。
- 離れているあいだの進行のまとめと一緒に表示されます。
___

### [_informações_](pt/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- `comebacked`で固定されており、編集できません。
- 復帰するたびに何度でも発動します。
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
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

#### Tipo.
Tipo de elemento referenciado como uma condição.

|Tipo.|Valores referenciados|
|-|-|
|カテゴリ|カテゴリのレベル|
|Ação.|Número de vezes que a Ação foi executada.|
|Item|Número de itens mantidos.|
___

#### ID do elemento
ID do elemento referido como a condição.
___

#### valor
Valores numéricos necessários para os requisitos.
- A condição será atendida se o valor for maior ou igual ao valor especificado.
___

#### Probabilidade de consumo [0-1].
Probabilidade de um item ser consumido (0-1, válido apenas se o Tipo for Item).
- A probabilidade de um Item ser consumido quando a condição for atendida e a Ação for executada.
- Com `1` sempre consome, com `0.5` consome com 50% de probabilidade e com `0` não consome.
- O valor padrão é `1` (sempre consome).
- Inválido se o Tipo for diferente de Item.
___

#### Equipamento
Requer que o Item esteja em um estado equipado (válido apenas se o Tipo for Item) ou
- Quando ativado, o Item deve ser equipado e possuído.
- Inválido se o Tipo for diferente de Item.
___

### Agregação de grupo
Trata o id da condição como um ID de grupo e avalia pelo total dos membros
- Quando ativado, o id definido na condição (requirements) é tratado como o ID de um grupo das configurações básicas.
- Uma condição cujo Type seja Categoria é avaliada pela soma do Nível de todas as Categorias pertencentes a esse grupo.
- Uma condição cujo Type seja Ação é avaliada pela soma do número de vezes que todas as Ações pertencentes a esse grupo foram executadas.
- Uma condição cujo Type seja Item é avaliada pela soma da quantidade possuída de todos os Itens pertencentes a esse grupo.
- Elementos bloqueados (diferentes de released) não são incluídos no total.
- A probabilidade de consumo do Item (chance) e a condição de equipamento (equipment) são ignoradas, e nada é consumido. São usados apenas para avaliação.
- Quando desativado, o id da condição é tratado como antes, como o ID de uma Categoria, Ação ou Item individual.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Tipo.
Tipo de elemento a ser adquirido.

|Tipo.|O que é adquirido.|
|-|-|
|カテゴリ|Nível (conversão de experiência adicionada)|
|Ação.|Número de vezes executado.|
|Item|número de posses|
___

#### ID do elemento
ID que identifica o elemento a ser adquirido.
___

#### valor
Valores numéricos a serem obtidos
- Configurações Menos reduzem o número de posses, o número de vezes que foram realizadas e seu nível. No entanto, ele não pode ser baixo, igual a 0.
- Se um Item tiver uma configuração de número máximo de posses (máximo), o número de posses não aumentará além desse valor.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probabilidade [-1 a 1]
Probabilidade de sucesso na obtenção (valores negativos são avaliados apenas em caso de fracasso)
- Defina a configuração da probabilidade de obtenção como um número decimal entre -1 e 1. O valor absoluto é usado para determinar a probabilidade.
- Quando o valor é positivo, só é avaliado se a ação tiver sucesso: com `1` obtém-se sempre e com `0.5` obtém-se com 50% de probabilidade.
- Quando o valor é negativo, só é avaliado se a ação falhar: com `-1` obtém-se sempre e com `-0.5` obtém-se com 50% de probabilidade.
- No caso de `0`, não é possível obtê-lo nem em caso de sucesso nem em caso de fracasso.
- O valor padrão é `1` (sempre obtido em caso de sucesso).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## ゲームオーバー時
戦闘でスタミナがなくなった時に発動
- 戦闘でプレイヤーのスタミナがなくなった時に発動します。
- 報酬の数量にマイナスを設定すれば、ゲームオーバーの代償を持たせることができます。
___

### [_informações_](pt/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- `gameovered`で固定されており、編集できません。
- ゲームオーバーになるたびに何度でも発動します。
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
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

#### Tipo.
Tipo de elemento referenciado como uma condição.

|Tipo.|Valores referenciados|
|-|-|
|カテゴリ|カテゴリのレベル|
|Ação.|Número de vezes que a Ação foi executada.|
|Item|Número de itens mantidos.|
___

#### ID do elemento
ID do elemento referido como a condição.
___

#### valor
Valores numéricos necessários para os requisitos.
- A condição será atendida se o valor for maior ou igual ao valor especificado.
___

#### Probabilidade de consumo [0-1].
Probabilidade de um item ser consumido (0-1, válido apenas se o Tipo for Item).
- A probabilidade de um Item ser consumido quando a condição for atendida e a Ação for executada.
- Com `1` sempre consome, com `0.5` consome com 50% de probabilidade e com `0` não consome.
- O valor padrão é `1` (sempre consome).
- Inválido se o Tipo for diferente de Item.
___

#### Equipamento
Requer que o Item esteja em um estado equipado (válido apenas se o Tipo for Item) ou
- Quando ativado, o Item deve ser equipado e possuído.
- Inválido se o Tipo for diferente de Item.
___

### Agregação de grupo
Trata o id da condição como um ID de grupo e avalia pelo total dos membros
- Quando ativado, o id definido na condição (requirements) é tratado como o ID de um grupo das configurações básicas.
- Uma condição cujo Type seja Categoria é avaliada pela soma do Nível de todas as Categorias pertencentes a esse grupo.
- Uma condição cujo Type seja Ação é avaliada pela soma do número de vezes que todas as Ações pertencentes a esse grupo foram executadas.
- Uma condição cujo Type seja Item é avaliada pela soma da quantidade possuída de todos os Itens pertencentes a esse grupo.
- Elementos bloqueados (diferentes de released) não são incluídos no total.
- A probabilidade de consumo do Item (chance) e a condição de equipamento (equipment) são ignoradas, e nada é consumido. São usados apenas para avaliação.
- Quando desativado, o id da condição é tratado como antes, como o ID de uma Categoria, Ação ou Item individual.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Tipo.
Tipo de elemento a ser adquirido.

|Tipo.|O que é adquirido.|
|-|-|
|カテゴリ|Nível (conversão de experiência adicionada)|
|Ação.|Número de vezes executado.|
|Item|número de posses|
___

#### ID do elemento
ID que identifica o elemento a ser adquirido.
___

#### valor
Valores numéricos a serem obtidos
- Configurações Menos reduzem o número de posses, o número de vezes que foram realizadas e seu nível. No entanto, ele não pode ser baixo, igual a 0.
- Se um Item tiver uma configuração de número máximo de posses (máximo), o número de posses não aumentará além desse valor.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probabilidade [-1 a 1]
Probabilidade de sucesso na obtenção (valores negativos são avaliados apenas em caso de fracasso)
- Defina a configuração da probabilidade de obtenção como um número decimal entre -1 e 1. O valor absoluto é usado para determinar a probabilidade.
- Quando o valor é positivo, só é avaliado se a ação tiver sucesso: com `1` obtém-se sempre e com `0.5` obtém-se com 50% de probabilidade.
- Quando o valor é negativo, só é avaliado se a ação falhar: com `-1` obtém-se sempre e com `-0.5` obtém-se com 50% de probabilidade.
- No caso de `0`, não é possível obtê-lo nem em caso de sucesso nem em caso de fracasso.
- O valor padrão é `1` (sempre obtido em caso de sucesso).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## 初回開始時
ワールドを初めて開いた時に発動
- このワールドを初めて起動した時に発動します。
- 世界観の説明や、開始時に渡す支度品の受け渡しに使います。
___

### [_informações_](pt/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- `welcomed`で固定されており、編集できません。
- 初回の起動時に一度だけ発動します。
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
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

#### Tipo.
Tipo de elemento referenciado como uma condição.

|Tipo.|Valores referenciados|
|-|-|
|カテゴリ|カテゴリのレベル|
|Ação.|Número de vezes que a Ação foi executada.|
|Item|Número de itens mantidos.|
___

#### ID do elemento
ID do elemento referido como a condição.
___

#### valor
Valores numéricos necessários para os requisitos.
- A condição será atendida se o valor for maior ou igual ao valor especificado.
___

#### Probabilidade de consumo [0-1].
Probabilidade de um item ser consumido (0-1, válido apenas se o Tipo for Item).
- A probabilidade de um Item ser consumido quando a condição for atendida e a Ação for executada.
- Com `1` sempre consome, com `0.5` consome com 50% de probabilidade e com `0` não consome.
- O valor padrão é `1` (sempre consome).
- Inválido se o Tipo for diferente de Item.
___

#### Equipamento
Requer que o Item esteja em um estado equipado (válido apenas se o Tipo for Item) ou
- Quando ativado, o Item deve ser equipado e possuído.
- Inválido se o Tipo for diferente de Item.
___

### Agregação de grupo
Trata o id da condição como um ID de grupo e avalia pelo total dos membros
- Quando ativado, o id definido na condição (requirements) é tratado como o ID de um grupo das configurações básicas.
- Uma condição cujo Type seja Categoria é avaliada pela soma do Nível de todas as Categorias pertencentes a esse grupo.
- Uma condição cujo Type seja Ação é avaliada pela soma do número de vezes que todas as Ações pertencentes a esse grupo foram executadas.
- Uma condição cujo Type seja Item é avaliada pela soma da quantidade possuída de todos os Itens pertencentes a esse grupo.
- Elementos bloqueados (diferentes de released) não são incluídos no total.
- A probabilidade de consumo do Item (chance) e a condição de equipamento (equipment) são ignoradas, e nada é consumido. São usados apenas para avaliação.
- Quando desativado, o id da condição é tratado como antes, como o ID de uma Categoria, Ação ou Item individual.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Tipo.
Tipo de elemento a ser adquirido.

|Tipo.|O que é adquirido.|
|-|-|
|カテゴリ|Nível (conversão de experiência adicionada)|
|Ação.|Número de vezes executado.|
|Item|número de posses|
___

#### ID do elemento
ID que identifica o elemento a ser adquirido.
___

#### valor
Valores numéricos a serem obtidos
- Configurações Menos reduzem o número de posses, o número de vezes que foram realizadas e seu nível. No entanto, ele não pode ser baixo, igual a 0.
- Se um Item tiver uma configuração de número máximo de posses (máximo), o número de posses não aumentará além desse valor.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probabilidade [-1 a 1]
Probabilidade de sucesso na obtenção (valores negativos são avaliados apenas em caso de fracasso)
- Defina a configuração da probabilidade de obtenção como um número decimal entre -1 e 1. O valor absoluto é usado para determinar a probabilidade.
- Quando o valor é positivo, só é avaliado se a ação tiver sucesso: com `1` obtém-se sempre e com `0.5` obtém-se com 50% de probabilidade.
- Quando o valor é negativo, só é avaliado se a ação falhar: com `-1` obtém-se sempre e com `-0.5` obtém-se com 50% de probabilidade.
- No caso de `0`, não é possível obtê-lo nem em caso de sucesso nem em caso de fracasso.
- O valor padrão é `1` (sempre obtido em caso de sucesso).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## クリア時
全カテゴリが最大レベルに達した時に発動
- 全カテゴリのレベルが最大値（maxCategoryLevels）に達した時に発動します。
- numeric（数値）でないカテゴリは判定から除かれます。
___

### [_informações_](pt/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- `completed`で固定されており、編集できません。
- 条件を満たした時に一度だけ発動します。
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
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

#### Tipo.
Tipo de elemento referenciado como uma condição.

|Tipo.|Valores referenciados|
|-|-|
|カテゴリ|カテゴリのレベル|
|Ação.|Número de vezes que a Ação foi executada.|
|Item|Número de itens mantidos.|
___

#### ID do elemento
ID do elemento referido como a condição.
___

#### valor
Valores numéricos necessários para os requisitos.
- A condição será atendida se o valor for maior ou igual ao valor especificado.
___

#### Probabilidade de consumo [0-1].
Probabilidade de um item ser consumido (0-1, válido apenas se o Tipo for Item).
- A probabilidade de um Item ser consumido quando a condição for atendida e a Ação for executada.
- Com `1` sempre consome, com `0.5` consome com 50% de probabilidade e com `0` não consome.
- O valor padrão é `1` (sempre consome).
- Inválido se o Tipo for diferente de Item.
___

#### Equipamento
Requer que o Item esteja em um estado equipado (válido apenas se o Tipo for Item) ou
- Quando ativado, o Item deve ser equipado e possuído.
- Inválido se o Tipo for diferente de Item.
___

### Agregação de grupo
Trata o id da condição como um ID de grupo e avalia pelo total dos membros
- Quando ativado, o id definido na condição (requirements) é tratado como o ID de um grupo das configurações básicas.
- Uma condição cujo Type seja Categoria é avaliada pela soma do Nível de todas as Categorias pertencentes a esse grupo.
- Uma condição cujo Type seja Ação é avaliada pela soma do número de vezes que todas as Ações pertencentes a esse grupo foram executadas.
- Uma condição cujo Type seja Item é avaliada pela soma da quantidade possuída de todos os Itens pertencentes a esse grupo.
- Elementos bloqueados (diferentes de released) não são incluídos no total.
- A probabilidade de consumo do Item (chance) e a condição de equipamento (equipment) são ignoradas, e nada é consumido. São usados apenas para avaliação.
- Quando desativado, o id da condição é tratado como antes, como o ID de uma Categoria, Ação ou Item individual.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Tipo.
Tipo de elemento a ser adquirido.

|Tipo.|O que é adquirido.|
|-|-|
|カテゴリ|Nível (conversão de experiência adicionada)|
|Ação.|Número de vezes executado.|
|Item|número de posses|
___

#### ID do elemento
ID que identifica o elemento a ser adquirido.
___

#### valor
Valores numéricos a serem obtidos
- Configurações Menos reduzem o número de posses, o número de vezes que foram realizadas e seu nível. No entanto, ele não pode ser baixo, igual a 0.
- Se um Item tiver uma configuração de número máximo de posses (máximo), o número de posses não aumentará além desse valor.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probabilidade [-1 a 1]
Probabilidade de sucesso na obtenção (valores negativos são avaliados apenas em caso de fracasso)
- Defina a configuração da probabilidade de obtenção como um número decimal entre -1 e 1. O valor absoluto é usado para determinar a probabilidade.
- Quando o valor é positivo, só é avaliado se a ação tiver sucesso: com `1` obtém-se sempre e com `0.5` obtém-se com 50% de probabilidade.
- Quando o valor é negativo, só é avaliado se a ação falhar: com `-1` obtém-se sempre e com `-0.5` obtém-se com 50% de probabilidade.
- No caso de `0`, não é possível obtê-lo nem em caso de sucesso nem em caso de fracasso.
- O valor padrão é `1` (sempre obtido em caso de sucesso).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。
___

## 単発アクション完了時
宝箱などの単発アクションを完了した時に発動
- single種別のアクション（宝箱など）を完了・確認した時に発動します。
- アクション自体の報酬とは別に、ここで設定した報酬を上乗せできます。
___

### [_informações_](pt/editor/information)
___

### カテゴリ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- `obtained`で固定されており、編集できません。
- 単発アクションを完了するたびに何度でも発動します。
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
- requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。
___

#### Tipo.
Tipo de elemento referenciado como uma condição.

|Tipo.|Valores referenciados|
|-|-|
|カテゴリ|カテゴリのレベル|
|Ação.|Número de vezes que a Ação foi executada.|
|Item|Número de itens mantidos.|
___

#### ID do elemento
ID do elemento referido como a condição.
___

#### valor
Valores numéricos necessários para os requisitos.
- A condição será atendida se o valor for maior ou igual ao valor especificado.
___

#### Probabilidade de consumo [0-1].
Probabilidade de um item ser consumido (0-1, válido apenas se o Tipo for Item).
- A probabilidade de um Item ser consumido quando a condição for atendida e a Ação for executada.
- Com `1` sempre consome, com `0.5` consome com 50% de probabilidade e com `0` não consome.
- O valor padrão é `1` (sempre consome).
- Inválido se o Tipo for diferente de Item.
___

#### Equipamento
Requer que o Item esteja em um estado equipado (válido apenas se o Tipo for Item) ou
- Quando ativado, o Item deve ser equipado e possuído.
- Inválido se o Tipo for diferente de Item.
___

### Agregação de grupo
Trata o id da condição como um ID de grupo e avalia pelo total dos membros
- Quando ativado, o id definido na condição (requirements) é tratado como o ID de um grupo das configurações básicas.
- Uma condição cujo Type seja Categoria é avaliada pela soma do Nível de todas as Categorias pertencentes a esse grupo.
- Uma condição cujo Type seja Ação é avaliada pela soma do número de vezes que todas as Ações pertencentes a esse grupo foram executadas.
- Uma condição cujo Type seja Item é avaliada pela soma da quantidade possuída de todos os Itens pertencentes a esse grupo.
- Elementos bloqueados (diferentes de released) não são incluídos no total.
- A probabilidade de consumo do Item (chance) e a condição de equipamento (equipment) são ignoradas, e nada é consumido. São usados apenas para avaliação.
- Quando desativado, o id da condição é tratado como antes, como o ID de uma Categoria, Ação ou Item individual.
___

### 報酬
イベント発動時の報酬設定
- タイミングが成立し、かつ条件を満たしている時に得られる報酬です。
- タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。
- 数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。
___

#### Tipo.
Tipo de elemento a ser adquirido.

|Tipo.|O que é adquirido.|
|-|-|
|カテゴリ|Nível (conversão de experiência adicionada)|
|Ação.|Número de vezes executado.|
|Item|número de posses|
___

#### ID do elemento
ID que identifica o elemento a ser adquirido.
___

#### valor
Valores numéricos a serem obtidos
- Configurações Menos reduzem o número de posses, o número de vezes que foram realizadas e seu nível. No entanto, ele não pode ser baixo, igual a 0.
- Se um Item tiver uma configuração de número máximo de posses (máximo), o número de posses não aumentará além desse valor.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

#### Probabilidade [-1 a 1]
Probabilidade de sucesso na obtenção (valores negativos são avaliados apenas em caso de fracasso)
- Defina a configuração da probabilidade de obtenção como um número decimal entre -1 e 1. O valor absoluto é usado para determinar a probabilidade.
- Quando o valor é positivo, só é avaliado se a ação tiver sucesso: com `1` obtém-se sempre e com `0.5` obtém-se com 50% de probabilidade.
- Quando o valor é negativo, só é avaliado se a ação falhar: com `-1` obtém-se sempre e com `-0.5` obtém-se com 50% de probabilidade.
- No caso de `0`, não é possível obtê-lo nem em caso de sucesso nem em caso de fracasso.
- O valor padrão é `1` (sempre obtido em caso de sucesso).
___

### タスクグループ
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、グループの指定は使いません。
- エディターでは入力欄が表示されません。