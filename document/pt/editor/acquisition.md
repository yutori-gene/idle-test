
# aquisições
アイテムやカテゴリレベルの取得設定
- Configure as aquisições.
- アイテムの他にカテゴリのレベル、アクションの実行した回数を変更できます。
- A probabilidade de obter o produto pode ser configurada.

|Tipo.|O que você adquire.|
|-|-|
|カテゴリ|nível|
|Ação.|Número de vezes executado.|
|Item|número de posses|
- [_type_](pt/editor/type)
___

## Tipo.
Tipo de elemento a ser adquirido.

|Tipo.|O que é adquirido.|
|-|-|
|カテゴリ|Nível (conversão de experiência adicionada)|
|Ação.|Número de vezes executado.|
|Item|número de posses|
___

## ID do elemento
ID que identifica o elemento a ser adquirido.
___

## valor
Valores numéricos a serem obtidos
- Configurações Menos reduzem o número de posses, o número de vezes que foram realizadas e seu nível. No entanto, ele não pode ser baixo, igual a 0.
- Se um Item tiver uma configuração de número máximo de posses (máximo), o número de posses não aumentará além desse valor.
- タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。
___

## Probabilidade [-1 a 1]
Probabilidade de sucesso na obtenção (valores negativos são avaliados apenas em caso de fracasso)
- Defina a configuração da probabilidade de obtenção como um número decimal entre -1 e 1. O valor absoluto é usado para determinar a probabilidade.
- Quando o valor é positivo, só é avaliado se a ação tiver sucesso: com `1` obtém-se sempre e com `0.5` obtém-se com 50% de probabilidade.
- Quando o valor é negativo, só é avaliado se a ação falhar: com `-1` obtém-se sempre e com `-0.5` obtém-se com 50% de probabilidade.
- No caso de `0`, não é possível obtê-lo nem em caso de sucesso nem em caso de fracasso.
- O valor padrão é `1` (sempre obtido em caso de sucesso).