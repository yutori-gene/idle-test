
# Tipo.
Classificação básica dos mundos
- Os mundos consistem em seis tipos.
- Todos os elementos são colocados diretamente abaixo do mundo.
- As Ações e os Itens são associados ao ID da Categoria à qual pertencem.

|Tipo.|Descrição|
|-|-|
|[_category_](pt/editor/category)|Estrutura geral para a classificação de ações e itens.|
|[_action_](pt/editor/action)|Elementos de ação, como coletar, criar e lutar.|
|[_item_](pt/editor/item)|Elementos de bens, como Equipamento e consumíveis|
|[_group_](pt/editor/group)|Definir grupos de exibição para Categorias, Ações e Itens|
|[_task_](pt/editor/task)|Missões que são consideradas concluídas quando as condições são atendidas|
|[_preset_](pt/editor/preset)|Personalização da exibição dos elementos do sistema|
```
world
├── category
├── action
├── item
├── group
├── task
└── preset
```