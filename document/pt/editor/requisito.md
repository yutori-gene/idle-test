
# termos e condições
Configuração dos requisitos necessários para o uso e exibição de elementos.
- Essas são as condições configuradas para cada elemento por Categoria, Ação e Item.
- Se todas as condições de configuração não forem atendidas, as operações mostradas na tabela não poderão ser realizadas.
- Se a função de bloqueio estiver ativada, o elemento em si ficará oculto até que a condição seja atendida.

|Onde fazer a configuração|O que nada pode ser feito se as condições forem atendidas.|
|-|-|
|Categoria.|Execução de todas as Ações e manipulação de Itens na Categoria|
|Ação.|Execução de ações|
|Item|Manipulação de itens (por exemplo, Equipamento)|
- [_type_](pt/editor/tipo)
___

## Tipo.
Tipo de elemento referenciado como uma condição.

|Tipo.|Valores referenciados|
|-|-|
|Categoria.|Nível da Categoria.|
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
- Sempre consumido a `1`, 50% de chance de consumo a `0,5` e nenhum consumo a `0`.
- O valor padrão é `1` (sempre consumido).
- Inválido se o Tipo for diferente de Item.
___

## Equipamento
Requer que o Item esteja em um estado equipado (válido apenas se o Tipo for Item) ou
- Quando ativado, o Item deve ser equipado e possuído.
- Inválido se o Tipo for diferente de Item.