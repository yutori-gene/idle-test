
# Evento
Mensagens e recompensas que são ativadas em momentos específicos
- Ele é acionado em momentos específicos, como ao abrir um mundo pela primeira vez ou ao terminar o jogo, e abre uma tela exclusiva.
- Há um campo para cada momento, e não é possível adicionar nem excluir campos. Nos momentos em que não for utilizado, deixe o campo em branco.
- Não será exibido na lista de missões ou tarefas. Aquilo que será considerado concluído ao atender às condições deve ser configurado como uma tarefa.
- A recompensa é adquirida automaticamente assim que for ativada. Não há nenhuma ação necessária para realizar as aquisições, como em uma tarefa, nem nenhuma faixa de notificação.
- Ele pode alterar o nível da Categoria, o número de Ações realizadas e o número de Itens possuídos quando ativado.
- Se você deixar os campos “Nome”, “Descrição” e “Ícone” em branco, serão utilizados o texto e o ícone padrão integrados ao jogador.

|tempo|condição de ativação|repetir|
|-|-|-|
|`comebacked`|Quando uma pessoa retorna do desligado por mais de um segundo e há uma Ação em progresso.|frequentemente|
|`gameovered`|Quando a resistência do jogador se esgota na batalha.|frequentemente|
|`welcomed`|Quando comecei neste mundo.|apenas uma vez|
|`completed`|Quando o nível máximo de todas as Categorias (maxCategoryLevels) for atingido.|apenas uma vez|
|`obtained`|Ao concluir ou confirmar uma Ação de um único tipo (como baús, etc.)|frequentemente|
- [_task_](pt/editor/task)
___

## Ao retornar
É acionado ao voltar do modo offline
- É acionado quando você volta após um segundo ou mais offline e havia uma ação em andamento.
- É exibido junto com o resumo do progresso feito durante a sua ausência.
___

### [_informações_](pt/editor/information)
___

### カテゴリー
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリーは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- Está fixado em `comebacked` e não pode ser editado.
- É acionado toda vez que você retorna, sem limite de vezes.
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

#### Tipo.
Tipo de elemento referenciado como uma condição.

|Tipo.|Valores referenciados|
|-|-|
|Categoria.|Nível da Categoria.|
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
|Categoria.|Nível (conversão de experiência adicionada)|
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
- Se o Tipo for Categoria, o valor configurado será adicionado diretamente ao nível (1 para 1 nível, 0,5 para 0,5 nível). A maneira usual de Ajustar isso é configurando o valor de experiência da Ação. Essa configuração não é necessária, a menos que haja um propósito especial.
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

## Ao perder o jogo
É acionado quando a resistência acaba em combate
- É acionado quando a resistência do jogador acaba em combate.
- Definindo uma quantidade negativa de recompensa, você pode atribuir um custo à derrota.
___

### [_informações_](pt/editor/information)
___

### カテゴリー
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリーは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- Está fixado em `gameovered` e não pode ser editado.
- É acionado toda vez que você perde o jogo, sem limite de vezes.
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

#### Tipo.
Tipo de elemento referenciado como uma condição.

|Tipo.|Valores referenciados|
|-|-|
|Categoria.|Nível da Categoria.|
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
|Categoria.|Nível (conversão de experiência adicionada)|
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
- Se o Tipo for Categoria, o valor configurado será adicionado diretamente ao nível (1 para 1 nível, 0,5 para 0,5 nível). A maneira usual de Ajustar isso é configurando o valor de experiência da Ação. Essa configuração não é necessária, a menos que haja um propósito especial.
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

## No primeiro início
É acionado ao abrir o mundo pela primeira vez
- É acionado quando este mundo é iniciado pela primeira vez.
- Serve para explicar a ambientação ou entregar os preparativos iniciais.
___

### [_informações_](pt/editor/information)
___

### カテゴリー
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリーは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- Está fixado em `welcomed` e não pode ser editado.
- É acionado uma única vez, no primeiro início.
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

#### Tipo.
Tipo de elemento referenciado como uma condição.

|Tipo.|Valores referenciados|
|-|-|
|Categoria.|Nível da Categoria.|
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
|Categoria.|Nível (conversão de experiência adicionada)|
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
- Se o Tipo for Categoria, o valor configurado será adicionado diretamente ao nível (1 para 1 nível, 0,5 para 0,5 nível). A maneira usual de Ajustar isso é configurando o valor de experiência da Ação. Essa configuração não é necessária, a menos que haja um propósito especial.
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

## Ao concluir
É acionado quando todas as categorias atingem o nível máximo
- É acionado quando os níveis de todas as categorias atingem o valor máximo (maxCategoryLevels).
- Categorias que não são numeric ficam de fora da verificação.
___

### [_informações_](pt/editor/information)
___

### カテゴリー
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリーは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- Está fixado em `completed` e não pode ser editado.
- É acionado uma única vez, quando as condições são cumpridas.
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

#### Tipo.
Tipo de elemento referenciado como uma condição.

|Tipo.|Valores referenciados|
|-|-|
|Categoria.|Nível da Categoria.|
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
|Categoria.|Nível (conversão de experiência adicionada)|
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
- Se o Tipo for Categoria, o valor configurado será adicionado diretamente ao nível (1 para 1 nível, 0,5 para 0,5 nível). A maneira usual de Ajustar isso é configurando o valor de experiência da Ação. Essa configuração não é necessária, a menos que haja um propósito especial.
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

## Ao concluir uma ação única
É acionado ao concluir uma ação única, como um baú de tesouro
- É acionado quando uma ação do tipo single (como um baú de tesouro) é concluída e confirmada.
- Além da recompensa da própria ação, você pode acrescentar a recompensa configurada aqui.
___

### [_informações_](pt/editor/information)
___

### カテゴリー
イベントでは使用しません
- ミッションやタスクの一覧に表示されないため、所属するカテゴリーは指定しません。
- エディターでは入力欄が表示されません。
___

### タイミング
イベントが発動するタイミング（固定）
- Está fixado em `obtained` e não pode ser editado.
- É acionado toda vez que você conclui uma ação única, sem limite de vezes.
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

#### Tipo.
Tipo de elemento referenciado como uma condição.

|Tipo.|Valores referenciados|
|-|-|
|Categoria.|Nível da Categoria.|
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
|Categoria.|Nível (conversão de experiência adicionada)|
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
- Se o Tipo for Categoria, o valor configurado será adicionado diretamente ao nível (1 para 1 nível, 0,5 para 0,5 nível). A maneira usual de Ajustar isso é configurando o valor de experiência da Ação. Essa configuração não é necessária, a menos que haja um propósito especial.
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