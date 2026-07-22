
# aquisições
Configurações de aquisição em nível de Item e Categoria.
- Configure as aquisições.
- Você pode alterar o nível da Categoria, bem como o Item, e o número de vezes que a Ação foi executada.
- A probabilidade de obter o produto pode ser configurada.

|Tipo.|O que você adquire.|
|-|-|
|Categoria.|nível|
|Ação.|Número de vezes executado.|
|Item|número de posses|
- [_type_](pt/editor/tipo)
___

## Tipo.
Tipo de elemento a ser adquirido.

|Tipo.|O que é adquirido.|
|-|-|
|Categoria.|Nível (conversão de experiência adicionada)|
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
- Se o Tipo for Categoria, o valor configurado será adicionado diretamente ao nível (1 para 1 nível, 0,5 para 0,5 nível). A maneira usual de Ajustar isso é configurando o valor de experiência da Ação. Essa configuração não é necessária, a menos que haja um propósito especial.
___

## Probabilidade [-1 a 1]
Probabilidade de sucesso na obtenção (valores negativos são avaliados apenas em caso de fracasso)
- Defina a configuração da probabilidade de obtenção como um número decimal entre -1 e 1. O valor absoluto é usado para determinar a probabilidade.
- Quando o valor é positivo, a recompensa é concedida apenas se a Ação tiver sucesso; se for `1`, a recompensa é garantida, e se for `0,5`, há 50% de chance de obtê-la.
- Quando o valor é negativo, ele é avaliado apenas em caso de fracasso da Ação; com `-1`, o item é obtido com certeza, e com `-0,5`, há 50% de chance de obtê-lo.
- No caso de `0`, não é possível obtê-lo nem em caso de sucesso nem em caso de fracasso.
- O valor padrão é `1` (sempre obtido em caso de sucesso).