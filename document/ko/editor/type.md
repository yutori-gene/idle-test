
# 타입
월드의 기본 분류
- ワールドは6つのタイプで構成されます。
- 모든 요소는 월드 바로 아래에 배치됩니다.
- アクションとアイテムは所属するカテゴリのIDで関連付けられます。

|타입|설명|
|-|-|
|[_category_](ko/editor/category)|액션과 아이템을 분류하는 큰 틀|
|[_action_](ko/editor/action)|채집, 제작, 전투 등의 행동 요소|
|[_item_](ko/editor/item)|장비 및 소비재 등의 물품 요소|
|[_skill_](ko/editor/skill)|작성 예정|
|[_group_](ko/editor/group)|カテゴリ、アクション、アイテムの表示グループを定義|
|[_preset_](ko/editor/preset)|시스템 요소 표시 사용자 정의하기|
```
world
├── category
├── action
├── item
├── skill
├── group
└── preset
```