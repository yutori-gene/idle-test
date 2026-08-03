
# Tipo.
Classificação básica dos mundos
- Os mundos consistem em seis tipos.
- Todos os elementos são colocados diretamente abaixo do mundo.
- As Ações e os Itens são associados ao ID da Categoria à qual pertencem.

|Tipo.|説明|
|-|-|
|[_categoria_](pt/editor/categoria)|Estrutura geral para a classificação de ações e itens.|
|[_ação_](pt/editor/ação)|Elementos de ação, como coletar, criar e lutar.|
|[_item_](pt/editor/item)|Elementos de bens, como Equipamento e consumíveis|
|[_grupo_](pt/editor/grupo)|Definir grupos de exibição para Categorias, Ações e Itens|
|[_tarefa_](pt/editor/tarefa)|Missões que são consideradas concluídas quando as condições são atendidas|
|[_predefinido_](pt/editor/predefinido)|Personalização da exibição dos elementos do sistema|
```
world
├── category
├── action
├── item
├── group
├── task
└── preset
```