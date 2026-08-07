
# Tarefa
Missões que são consideradas concluídas quando as condições são atendidas
- Quando as configurações definidas forem atendidas, a meta será alcançada e uma mensagem será exibida na parte da cima da tela.
- Será exibido na lista de missões do jogador e na lista de tarefas da Categoria.
- A recompensa não é concedida automaticamente. O jogador a recebe ao abrir a tarefa e clicar na barra de aquisições.
- Até que a remuneração seja recebida, uma fita aparecerá na barra da lista, indicando que ela ainda não foi recebida.
- Ao realizar aquisições de itens, é possível alterar o nível da Categoria, o número de vezes que uma Ação foi executada e a quantidade de itens em posse.
- Os eventos que você deseja acionar em momentos que não sejam os previstos, como na primeira inicialização ou quando o jogo é terminado, devem ser configurados nos eventos das configurações básicas.
- [_event_](pt/editor/event)
___

## [_informações_](pt/editor/information)
___

## Categoria.
ID da categoria à qual a tarefa pertence
- Especifique o ID da categoria à qual esta tarefa deve ser atribuída.
- Ao definir essa configuração, uma lista de tarefas será adicionada à tela de categorias do jogador, e ela também será exibida agrupada por categoria na lista de missões.
- Se o campo estiver em branco, a missão não pertencerá a nenhuma categoria e será exibida agrupada no início da lista de missões.
___

## tempo
Momento de acionamento da tarefa (fixo em `matched`)
- A tarefa está definida como `matched` (quando a configuração das condições for atendida) e não pode ser editada.
- A recompensa só pode ser recebida uma vez; depois de recebida, o status de “concluído” permanece inalterado.
- Aquilo que você deseja ativar em outros momentos deve ser configurado nos eventos das configurações básicas.
- [_event_](pt/editor/event)
___

## Estado inicial de exibição
Estado inicial de exibição do ícone da tarefa (a conclusão depende de condições; com esta configuração, a tarefa não será considerada concluída)
- タスクの達成条件はrequirementsで決まり、この項目は一覧アイコンの見た目のみに影響します。
- secreted: 全requirementsを満たすまでタスクの一覧に一切表示されません（達成自体は条件で起こります）。
- hidden・hinted: アイコンに斜線が付き未解放として表示されます。
- released: 斜線が消え解放済みとして表示されます。
- 一度達成したタスクは一覧から消えず、その後に条件を満たさなくなっても達成のまま表示されます。
___

## termos e condições
Condições para a conclusão da tarefa
- タスクを達成させる条件です。
- この条件を満たすと達成になり、報酬を受け取れるようになります。
- 一度達成すると、その後に条件を満たさなくなっても達成のままで、報酬もいつでも受け取れます。
- 条件を設定していないタスクは達成しません。
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
- Com `1` sempre consome, com `0.5` consome com 50% de probabilidade e com `0` não consome.
- O valor padrão é `1` (sempre consome).
- Inválido se o Tipo for diferente de Item.
___

### Equipamento
Requer que o Item esteja em um estado equipado (válido apenas se o Tipo for Item) ou
- Quando ativado, o Item deve ser equipado e possuído.
- Inválido se o Tipo for diferente de Item.
___

## prêmio
Configuração de recompensas ao concluir tarefas
- 達成したタスクを開き、獲得のバーを押した時に受け取れる報酬です。
- カテゴリーのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。
- 数量にマイナスを設定することもできます。
- 報酬を設定していないタスクは獲得のバーが出ず、達成した時点で完了になります。
- 持てるアイテムの種類が上限に達している時は受け取れません。整理してから受け取り直します。
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
- Quando o valor é positivo, só é avaliado se a ação tiver sucesso: com `1` obtém-se sempre e com `0.5` obtém-se com 50% de probabilidade.
- Quando o valor é negativo, só é avaliado se a ação falhar: com `-1` obtém-se sempre e com `-0.5` obtém-se com 50% de probabilidade.
- No caso de `0`, não é possível obtê-lo nem em caso de sucesso nem em caso de fracasso.
- O valor padrão é `1` (sempre obtido em caso de sucesso).
___

## grupo de trabalho
Classificação dos grupos de exibição de tarefas
- Aplique um dos grupos configurados no Basic.
- A lista de tarefas é exibida na ordem da configuração dos grupos.
- Dentro da categoria, os itens são exibidos divididos em grupos.
- Se for deixado em branco, nenhum agrupamento será feito.
- [_general_](pt/editor/general)