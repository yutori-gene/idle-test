
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
|`comebacked`.|Quando uma pessoa retorna do desligado por mais de um segundo e há uma Ação em progresso.|frequentemente|
|`gameovered`.|Quando a resistência do jogador se esgota na batalha.|frequentemente|
|`welcomed`.|Quando comecei neste mundo.|apenas uma vez|
|`completed`.|Quando o nível máximo de todas as Categorias (maxCategoryLevels) for atingido.|apenas uma vez|
|`obtained`|Ao concluir ou confirmar uma Ação de um único tipo (como baús, etc.)|frequentemente|
- [_task_](pt/editor/tarefa)
___

## No momento do retorno
É acionado ao retornar do modo desligado
- É acionado quando o usuário retorna ao modo online após mais de 1 segundo desligado e há uma Ação em andamento.
- Será exibido juntamente com um resumo do progresso durante o período em que esteve ausente.
___

### [_informações_](pt/editor/informações)
___

### Categoria.
Não será utilizado no evento
- Como não aparece na lista de missões e tarefas, não vou especificar a categoria à qual pertence.
- No editor, o campo de entrada não é exibido.
___

### tempo
Momento em que o evento é acionado (fixo)
- Está definido como `comebacked` e não pode ser editado.
- É ativado quantas vezes forem necessárias sempre que você retornar.
___

### Estado inicial de exibição
Estado inicial de exibição do ícone do evento (a ativação depende do momento certo; com essa configuração, ele não é ativado)
- As condições de acionamento do evento são determinadas pelo momento, e este item afeta apenas a aparência do ícone.
- secreted: O ícone não será exibido até que todos os requisitos sejam atendidos (embora a ativação em si ocorra no momento certo).
- oculto/sugerido: o ícone aparece com uma barra e é exibido como não desbloqueado.
- liberado: a barra é removida e o item é exibido como liberado.
___

### termos e condições
Condições para receber a remuneração
- Quando a condição for atendida, o evento será acionado e uma tela específica será aberta para exibir o conteúdo.
- A recompensa só será adquirida se, no momento da ativação, as configurações definidas aqui forem atendidas.
- Caso não tenha feito nenhuma configuração, você receberá uma recompensa sempre que ela for ativada.
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
- Sempre consumido a `1`, 50% de chance de consumo a `0,5` e nenhum consumo a `0`.
- O valor padrão é `1` (sempre consumido).
- Inválido se o Tipo for diferente de Item.
___

#### Equipamento
Requer que o Item esteja em um estado equipado (válido apenas se o Tipo for Item) ou
- Quando ativado, o Item deve ser equipado e possuído.
- Inválido se o Tipo for diferente de Item.
___

### prêmio
Configurações de recompensa quando o evento é acionado.
- É a recompensa obtida quando o momento certo se dá e as condições são atendidas.
- Ao contrário das tarefas, não é necessário realizar nenhuma ação para recebê-lo; ele é adquirido automaticamente assim que é ativado.
- É possível definir valores negativos para a quantidade. Por exemplo, se você definir a quantidade de Itens como negativa quando o jogo terminar, você os perderá.
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
- Quando o valor é positivo, a recompensa é concedida apenas se a Ação tiver sucesso; se for `1`, a recompensa é garantida, e se for `0,5`, há 50% de chance de obtê-la.
- Quando o valor é negativo, ele é avaliado apenas em caso de fracasso da Ação; com `-1`, o item é obtido com certeza, e com `-0,5`, há 50% de chance de obtê-lo.
- No caso de `0`, não é possível obtê-lo nem em caso de sucesso nem em caso de fracasso.
- O valor padrão é `1` (sempre obtido em caso de sucesso).
___

### grupo de trabalho
Não será utilizado no evento
- Como não aparece na lista de missões e tarefas, não utilizamos a designação de grupo.
- No editor, o campo de entrada não é exibido.
___

## Quando o jogo termina
É ativado quando a resistência se esgota durante o combate
- É ativado quando a resistência do jogador se esgota durante o combate.
- Se você definir uma configuração com um valor negativo para a quantidade de recompensa, poderá estabelecer uma penalidade em caso de jogo terminado.
___

### [_informações_](pt/editor/informações)
___

### Categoria.
Não será utilizado no evento
- Como não aparece na lista de missões e tarefas, não vou especificar a categoria à qual pertence.
- No editor, o campo de entrada não é exibido.
___

### tempo
Momento em que o evento é acionado (fixo)
- Está definido como `gameovered` e não pode ser editado.
- É ativado quantas vezes forem necessárias sempre que o jogo terminado.
___

### Estado inicial de exibição
Estado inicial de exibição do ícone do evento (a ativação depende do momento certo; com essa configuração, ele não é ativado)
- As condições de acionamento do evento são determinadas pelo momento, e este item afeta apenas a aparência do ícone.
- secreted: O ícone não será exibido até que todos os requisitos sejam atendidos (embora a ativação em si ocorra no momento certo).
- oculto/sugerido: o ícone aparece com uma barra e é exibido como não desbloqueado.
- liberado: a barra é removida e o item é exibido como liberado.
___

### termos e condições
Condições para receber a remuneração
- Quando a condição for atendida, o evento será acionado e uma tela específica será aberta para exibir o conteúdo.
- A recompensa só será adquirida se, no momento da ativação, as configurações definidas aqui forem atendidas.
- Caso não tenha feito nenhuma configuração, você receberá uma recompensa sempre que ela for ativada.
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
- Sempre consumido a `1`, 50% de chance de consumo a `0,5` e nenhum consumo a `0`.
- O valor padrão é `1` (sempre consumido).
- Inválido se o Tipo for diferente de Item.
___

#### Equipamento
Requer que o Item esteja em um estado equipado (válido apenas se o Tipo for Item) ou
- Quando ativado, o Item deve ser equipado e possuído.
- Inválido se o Tipo for diferente de Item.
___

### prêmio
Configurações de recompensa quando o evento é acionado.
- É a recompensa obtida quando o momento certo se dá e as condições são atendidas.
- Ao contrário das tarefas, não é necessário realizar nenhuma ação para recebê-lo; ele é adquirido automaticamente assim que é ativado.
- É possível definir valores negativos para a quantidade. Por exemplo, se você definir a quantidade de Itens como negativa quando o jogo terminar, você os perderá.
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
- Quando o valor é positivo, a recompensa é concedida apenas se a Ação tiver sucesso; se for `1`, a recompensa é garantida, e se for `0,5`, há 50% de chance de obtê-la.
- Quando o valor é negativo, ele é avaliado apenas em caso de fracasso da Ação; com `-1`, o item é obtido com certeza, e com `-0,5`, há 50% de chance de obtê-lo.
- No caso de `0`, não é possível obtê-lo nem em caso de sucesso nem em caso de fracasso.
- O valor padrão é `1` (sempre obtido em caso de sucesso).
___

### grupo de trabalho
Não será utilizado no evento
- Como não aparece na lista de missões e tarefas, não utilizamos a designação de grupo.
- No editor, o campo de entrada não é exibido.
___

## Na primeira vez que começar
É ativado ao abrir o mundo pela primeira vez
- Isso é acionado na primeira vez que você inicia este mundo.
- É usado para explicar o universo da história e para entregar os itens iniciais aos jogadores ao começar o jogo.
___

### [_informações_](pt/editor/informações)
___

### Categoria.
Não será utilizado no evento
- Como não aparece na lista de missões e tarefas, não vou especificar a categoria à qual pertence.
- No editor, o campo de entrada não é exibido.
___

### tempo
Momento em que o evento é acionado (fixo)
- Está definido como `welcomed` e não pode ser editado.
- É acionado apenas uma vez, na primeira inicialização.
___

### Estado inicial de exibição
Estado inicial de exibição do ícone do evento (a ativação depende do momento certo; com essa configuração, ele não é ativado)
- As condições de acionamento do evento são determinadas pelo momento, e este item afeta apenas a aparência do ícone.
- secreted: O ícone não será exibido até que todos os requisitos sejam atendidos (embora a ativação em si ocorra no momento certo).
- oculto/sugerido: o ícone aparece com uma barra e é exibido como não desbloqueado.
- liberado: a barra é removida e o item é exibido como liberado.
___

### termos e condições
Condições para receber a remuneração
- Quando a condição for atendida, o evento será acionado e uma tela específica será aberta para exibir o conteúdo.
- A recompensa só será adquirida se, no momento da ativação, as configurações definidas aqui forem atendidas.
- Caso não tenha feito nenhuma configuração, você receberá uma recompensa sempre que ela for ativada.
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
- Sempre consumido a `1`, 50% de chance de consumo a `0,5` e nenhum consumo a `0`.
- O valor padrão é `1` (sempre consumido).
- Inválido se o Tipo for diferente de Item.
___

#### Equipamento
Requer que o Item esteja em um estado equipado (válido apenas se o Tipo for Item) ou
- Quando ativado, o Item deve ser equipado e possuído.
- Inválido se o Tipo for diferente de Item.
___

### prêmio
Configurações de recompensa quando o evento é acionado.
- É a recompensa obtida quando o momento certo se dá e as condições são atendidas.
- Ao contrário das tarefas, não é necessário realizar nenhuma ação para recebê-lo; ele é adquirido automaticamente assim que é ativado.
- É possível definir valores negativos para a quantidade. Por exemplo, se você definir a quantidade de Itens como negativa quando o jogo terminar, você os perderá.
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
- Quando o valor é positivo, a recompensa é concedida apenas se a Ação tiver sucesso; se for `1`, a recompensa é garantida, e se for `0,5`, há 50% de chance de obtê-la.
- Quando o valor é negativo, ele é avaliado apenas em caso de fracasso da Ação; com `-1`, o item é obtido com certeza, e com `-0,5`, há 50% de chance de obtê-lo.
- No caso de `0`, não é possível obtê-lo nem em caso de sucesso nem em caso de fracasso.
- O valor padrão é `1` (sempre obtido em caso de sucesso).
___

### grupo de trabalho
Não será utilizado no evento
- Como não aparece na lista de missões e tarefas, não utilizamos a designação de grupo.
- No editor, o campo de entrada não é exibido.
___

## Ao concluir o jogo
É ativado quando todas as categorias atingirem o nível máximo
- É acionado quando o nível de todas as categorias atinge o valor máximo (maxCategoryLevels).
- As categorias que não forem numéricas serão excluídas da avaliação.
___

### [_informações_](pt/editor/informações)
___

### Categoria.
Não será utilizado no evento
- Como não aparece na lista de missões e tarefas, não vou especificar a categoria à qual pertence.
- No editor, o campo de entrada não é exibido.
___

### tempo
Momento em que o evento é acionado (fixo)
- Está definido como `completed` e não pode ser editado.
- É acionado apenas uma vez quando as condições forem atendidas.
___

### Estado inicial de exibição
Estado inicial de exibição do ícone do evento (a ativação depende do momento certo; com essa configuração, ele não é ativado)
- As condições de acionamento do evento são determinadas pelo momento, e este item afeta apenas a aparência do ícone.
- secreted: O ícone não será exibido até que todos os requisitos sejam atendidos (embora a ativação em si ocorra no momento certo).
- oculto/sugerido: o ícone aparece com uma barra e é exibido como não desbloqueado.
- liberado: a barra é removida e o item é exibido como liberado.
___

### termos e condições
Condições para receber a remuneração
- Quando a condição for atendida, o evento será acionado e uma tela específica será aberta para exibir o conteúdo.
- A recompensa só será adquirida se, no momento da ativação, as configurações definidas aqui forem atendidas.
- Caso não tenha feito nenhuma configuração, você receberá uma recompensa sempre que ela for ativada.
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
- Sempre consumido a `1`, 50% de chance de consumo a `0,5` e nenhum consumo a `0`.
- O valor padrão é `1` (sempre consumido).
- Inválido se o Tipo for diferente de Item.
___

#### Equipamento
Requer que o Item esteja em um estado equipado (válido apenas se o Tipo for Item) ou
- Quando ativado, o Item deve ser equipado e possuído.
- Inválido se o Tipo for diferente de Item.
___

### prêmio
Configurações de recompensa quando o evento é acionado.
- É a recompensa obtida quando o momento certo se dá e as condições são atendidas.
- Ao contrário das tarefas, não é necessário realizar nenhuma ação para recebê-lo; ele é adquirido automaticamente assim que é ativado.
- É possível definir valores negativos para a quantidade. Por exemplo, se você definir a quantidade de Itens como negativa quando o jogo terminar, você os perderá.
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
- Quando o valor é positivo, a recompensa é concedida apenas se a Ação tiver sucesso; se for `1`, a recompensa é garantida, e se for `0,5`, há 50% de chance de obtê-la.
- Quando o valor é negativo, ele é avaliado apenas em caso de fracasso da Ação; com `-1`, o item é obtido com certeza, e com `-0,5`, há 50% de chance de obtê-lo.
- No caso de `0`, não é possível obtê-lo nem em caso de sucesso nem em caso de fracasso.
- O valor padrão é `1` (sempre obtido em caso de sucesso).
___

### grupo de trabalho
Não será utilizado no evento
- Como não aparece na lista de missões e tarefas, não utilizamos a designação de grupo.
- No editor, o campo de entrada não é exibido.
___

## Ao concluir uma Ação pontual
É ativado ao concluir uma ação pontual, como abrir um baú
- É acionado quando você conclui ou confirma uma Ação de um único tipo (como um baú, por exemplo).
- Além da recompensa pela Ação em si, é possível adicionar a recompensa da configuração aqui.
___

### [_informações_](pt/editor/informações)
___

### Categoria.
Não será utilizado no evento
- Como não aparece na lista de missões e tarefas, não vou especificar a categoria à qual pertence.
- No editor, o campo de entrada não é exibido.
___

### tempo
Momento em que o evento é acionado (fixo)
- Está definido como `obtained` e não pode ser editado.
- É ativado quantas vezes forem necessárias sempre que uma Ação pontual for concluída.
___

### Estado inicial de exibição
Estado inicial de exibição do ícone do evento (a ativação depende do momento certo; com essa configuração, ele não é ativado)
- As condições de acionamento do evento são determinadas pelo momento, e este item afeta apenas a aparência do ícone.
- secreted: O ícone não será exibido até que todos os requisitos sejam atendidos (embora a ativação em si ocorra no momento certo).
- oculto/sugerido: o ícone aparece com uma barra e é exibido como não desbloqueado.
- liberado: a barra é removida e o item é exibido como liberado.
___

### termos e condições
Condições para receber a remuneração
- Quando a condição for atendida, o evento será acionado e uma tela específica será aberta para exibir o conteúdo.
- A recompensa só será adquirida se, no momento da ativação, as configurações definidas aqui forem atendidas.
- Caso não tenha feito nenhuma configuração, você receberá uma recompensa sempre que ela for ativada.
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
- Sempre consumido a `1`, 50% de chance de consumo a `0,5` e nenhum consumo a `0`.
- O valor padrão é `1` (sempre consumido).
- Inválido se o Tipo for diferente de Item.
___

#### Equipamento
Requer que o Item esteja em um estado equipado (válido apenas se o Tipo for Item) ou
- Quando ativado, o Item deve ser equipado e possuído.
- Inválido se o Tipo for diferente de Item.
___

### prêmio
Configurações de recompensa quando o evento é acionado.
- É a recompensa obtida quando o momento certo se dá e as condições são atendidas.
- Ao contrário das tarefas, não é necessário realizar nenhuma ação para recebê-lo; ele é adquirido automaticamente assim que é ativado.
- É possível definir valores negativos para a quantidade. Por exemplo, se você definir a quantidade de Itens como negativa quando o jogo terminar, você os perderá.
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
- Quando o valor é positivo, a recompensa é concedida apenas se a Ação tiver sucesso; se for `1`, a recompensa é garantida, e se for `0,5`, há 50% de chance de obtê-la.
- Quando o valor é negativo, ele é avaliado apenas em caso de fracasso da Ação; com `-1`, o item é obtido com certeza, e com `-0,5`, há 50% de chance de obtê-lo.
- No caso de `0`, não é possível obtê-lo nem em caso de sucesso nem em caso de fracasso.
- O valor padrão é `1` (sempre obtido em caso de sucesso).
___

### grupo de trabalho
Não será utilizado no evento
- Como não aparece na lista de missões e tarefas, não utilizamos a designação de grupo.
- No editor, o campo de entrada não é exibido.