
# termos e condições
Configuração dos requisitos necessários para o uso e exibição de elementos.
- カテゴリ、アクション、アイテムごとの各要素に設定する条件です。
- Se todas as condições de configuração não forem atendidas, as operações mostradas na tabela não poderão ser realizadas.
- Se a função de bloqueio estiver ativada, o elemento em si ficará oculto até que a condição seja atendida.

|Onde fazer a configuração|O que nada pode ser feito se as condições forem atendidas.|
|-|-|
|カテゴリ|カテゴリ内の全てのアクションの実行とアイテムの操作|
|Ação.|Execução de ações|
|Item|Manipulação de itens (por exemplo, Equipamento)|
- [_type_](pt/editor/type)
___

## Tipo.
Tipo de elemento referenciado como uma condição.

|Tipo.|Valores referenciados|
|-|-|
|カテゴリ|カテゴリのレベル|
|Ação.|Número de vezes que a Ação foi executada.|
|Item|Número de itens mantidos.|
___

## ID do elemento
ID do elemento referido como a condição.
___

## valor
Valores numéricos necessários para os requisitos.
- A condição será atendida se o valor for maior ou igual ao valor especificado.
___

## Probabilidade de consumo [0-1].
Probabilidade de um item ser consumido (0-1, válido apenas se o Tipo for Item).
- A probabilidade de um Item ser consumido quando a condição for atendida e a Ação for executada.
- Com `1` sempre consome, com `0.5` consome com 50% de probabilidade e com `0` não consome.
- O valor padrão é `1` (sempre consome).
- Inválido se o Tipo for diferente de Item.
___

## Equipamento
Requer que o Item esteja em um estado equipado (válido apenas se o Tipo for Item) ou
- Quando ativado, o Item deve ser equipado e possuído.
- Inválido se o Tipo for diferente de Item.