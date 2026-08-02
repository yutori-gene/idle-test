
# Evento
Sistema de mensagens e recompensas acionado por condições.
- Ele é acionado quando as condições/tempo configurados são atendidos e uma mensagem é exibida.
- Ele pode ser acionado na primeira inicialização, quando o jogo termina, ao retornar de um jogo desligado ou quando determinadas condições são atendidas.
- Ele pode alterar o nível da Categoria, o número de Ações realizadas e o número de Itens possuídos quando ativado.
___

## [_informações_](pt/editor/informações)
___

## Categoria.
ID da categoria à qual a tarefa pertence
- Especifique o ID da categoria à qual este evento será atribuído como tarefa.
- Ao definir essa configuração, uma lista de tarefas será adicionada à tela de categorias do jogador, e ela também será exibida agrupada por categoria na lista de missões.
- Se o campo estiver em branco, a missão não pertencerá a nenhuma categoria e será exibida agrupada no início da lista de missões.
- Apenas os eventos com o tempo `matched` são utilizados para exibição. Em outros momentos, mesmo com configuração, não afetam a exibição.
___

## tempo
Configuração do tempo de acionamento do evento.

|tempo|condição de ativação|repetir|
|-|-|-|
|`matched`.|Quando as condições configuradas em CONDIÇÕES são atendidas pela primeira vez.|apenas uma vez|
|`comebacked`.|Quando uma pessoa retorna do desligado por mais de um segundo e há uma Ação em progresso.|frequentemente|
|`gameovered`.|Quando a resistência do jogador se esgota na batalha.|frequentemente|
|`completed`.|Quando o nível máximo de todas as Categorias (maxCategoryLevels) for atingido.|apenas uma vez|
|`welcomed`.|Quando comecei neste mundo.|apenas uma vez|
|`obtained`|Ao concluir ou confirmar uma Ação de um único tipo (como baús, etc.). Se os requisitos forem atendidos, as recompensas do evento também serão adicionadas.|frequentemente|
___

## Estado inicial de exibição
Estado inicial de exibição do ícone do evento (a ativação depende do momento certo; com essa configuração, ele não é ativado)
- As condições de acionamento do evento são determinadas pelo momento, e este item afeta apenas a aparência do ícone da lista.
- secreted: Não será exibido na lista de eventos até que todos os requisitos sejam atendidos (embora o evento em si seja acionado no momento certo).
- oculto/sugerido: o ícone aparece com uma barra e é exibido como não desbloqueado.
- liberado: a barra é removida e o item é exibido como liberado.
___

## termos e condições
Condições para acionar eventos e conceder recompensas.
- Condições para acionar eventos ou conceder recompensas.
- No `matched`, a ação é acionada e a recompensa é obtida somente quando essa condição for atendida.
- Exceto no momento `matched`, a ação é acionada quando a condição de tempo for satisfeita. Depois disso, a recompensa será obtida somente quando as configurações definidas aqui forem atendidas.
___

### Tipo.
Tipo de elemento referenciado como uma condição.

|Tipo.|Valores referenciados|
|-|-|
|Categoria.|Nível da Categoria.|
|Ação.|Número de vezes que a Ação foi executada.|
|Item|Número de itens mantidos.|
___

### ID do elemento
ID do elemento referido como a condição.
___

### valor
Valores numéricos necessários para os requisitos.
- A condição será atendida se o valor for maior ou igual ao valor especificado.
___

### Probabilidade de consumo [0-1].
Probabilidade de um item ser consumido (0-1, válido apenas se o Tipo for Item).
- A probabilidade de um Item ser consumido quando a condição for atendida e a Ação for executada.
- Sempre consumido a `1`, 50% de chance de consumo a `0,5` e nenhum consumo a `0`.
- O valor padrão é `1` (sempre consumido).
- Inválido se o Tipo for diferente de Item.
___

### Equipamento
Requer que o Item esteja em um estado equipado (válido apenas se o Tipo for Item) ou
- Quando ativado, o Item deve ser equipado e possuído.
- Inválido se o Tipo for diferente de Item.
___

## prêmio
Configurações de recompensa quando o evento é acionado.
- Essa é a recompensa quando o evento é acionado.
- No `matched`, você recebe a recompensa somente quando as condições são atendidas e a ação é acionada.
- Exceto no caso de `matched`, a recompensa só será obtida quando a condição de tempo for satisfeita e as condições definidas em `conditions` forem atendidas.
- Você pode configurar a quantidade com um valor Menos. Por exemplo, se você contar a quantidade de Itens com um valor Menos quando `gameovered`, você os perderá quando o jogo terminado.
___

### Tipo.
Tipo de elemento a ser adquirido.

|Tipo.|O que é adquirido.|
|-|-|
|Categoria.|Nível (conversão de experiência adicionada)|
|Ação.|Número de vezes executado.|
|Item|número de posses|
___

### ID do elemento
ID que identifica o elemento a ser adquirido.
___

### valor
Valores numéricos a serem obtidos
- Configurações Menos reduzem o número de posses, o número de vezes que foram realizadas e seu nível. No entanto, ele não pode ser baixo, igual a 0.
- Se um Item tiver uma configuração de número máximo de posses (máximo), o número de posses não aumentará além desse valor.
- Se o Tipo for Categoria, o valor configurado será adicionado diretamente ao nível (1 para 1 nível, 0,5 para 0,5 nível). A maneira usual de Ajustar isso é configurando o valor de experiência da Ação. Essa configuração não é necessária, a menos que haja um propósito especial.
___

### Probabilidade [-1 a 1]
Probabilidade de sucesso na obtenção (valores negativos são avaliados apenas em caso de fracasso)
- Defina a configuração da probabilidade de obtenção como um número decimal entre -1 e 1. O valor absoluto é usado para determinar a probabilidade.
- Quando o valor é positivo, a recompensa é concedida apenas se a Ação tiver sucesso; se for `1`, a recompensa é garantida, e se for `0,5`, há 50% de chance de obtê-la.
- Quando o valor é negativo, ele é avaliado apenas em caso de fracasso da Ação; com `-1`, o item é obtido com certeza, e com `-0,5`, há 50% de chance de obtê-lo.
- No caso de `0`, não é possível obtê-lo nem em caso de sucesso nem em caso de fracasso.
- O valor padrão é `1` (sempre obtido em caso de sucesso).
___

## grupo de trabalho
Classificação dos grupos de exibição de tarefas
- Aplique um dos grupos configurados no Basic.
- A lista de tarefas é exibida na ordem da configuração dos grupos.
- Dentro da categoria, os itens são exibidos divididos em grupos.
- Se for deixado em branco, nenhum agrupamento será feito.
- [_general_](pt/editor/geral)