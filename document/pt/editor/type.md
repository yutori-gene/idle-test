
# Tipo.
Classificação básica dos mundos
- ワールドは6つのタイプで構成されます。
- Todos os elementos são colocados diretamente abaixo do mundo.
- アクションとアイテムは所属するカテゴリのIDで関連付けられます。

|Tipo.|Descrição|
|-|-|
|[_category_](pt/editor/category)|Estrutura geral para a classificação de ações e itens.|
|[_action_](pt/editor/action)|Elementos de ação, como coletar, criar e lutar.|
|[_item_](pt/editor/item)|Elementos de bens, como Equipamento e consumíveis|
|[_skill_](pt/editor/skill)|A ser escrito|
|[_group_](pt/editor/group)|カテゴリ、アクション、アイテムの表示グループを定義|
|[_preset_](pt/editor/preset)|Personalização da exibição dos elementos do sistema|
```
world
├── category
├── action
├── item
├── skill
├── group
└── preset
```