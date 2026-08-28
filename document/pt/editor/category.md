
# カテゴリ
Estrutura geral para a classificação de ações e itens.
- Representa uma classificação importante.
- Por exemplo, ele pode ser configurado em qualquer ambiente, como curto alcance, longo alcance, magia, masmorras, ferreiros, fábricas etc.
- アクションやアイテムはワールド直下に配置され、カテゴリIDで関連付けられます。
___

## [_informações_](pt/editor/information)
___

## grupo (geralmente de pessoas)
カテゴリの表示グループ分類
- Aplique um dos grupos configurados no Basic.
- 設定したグループ順にカテゴリ一覧が表示されます。
- [_general_](pt/editor/general)
___

## Estado de desbloqueio inicial
Estado inicial de exibição e liberação do elemento (passa automaticamente para o estado superior quando os requisitos de ativação forem atendidos)
- secreted: Não será exibido na interface do usuário até que todos os requisitos sejam atendidos (não aparece nas Dicas e fica oculto na lista de requisitos/recompensas).
- hidden: Fica totalmente oculto enquanto não for referenciado por nenhum elemento de liberação e não atender aos requisitos (o nome fica desativado e não pode ser alterado).
- hinted (padrão): Apenas o nome é exibido como prévia, mas não é possível realizar nenhuma ação até que seja liberado.
- liberado: fica liberado e pronto para uso desde o início, independentemente das condições (antiga opção “Exibir desde o início”).
___

## [_termos e condições_](pt/editor/requirement)
___

## Disponibilidade de níveis
カテゴリレベル機能の有無
- このカテゴリがレベルを持つかどうかのフラグです。
- Se estiver ligado, ele tem um nível; se estiver desligado, não tem.
- 例として、剣技や魔法といった経験に基づくカテゴリはオンにし、ダンジョンや鍛冶屋といった場所のカテゴリはオフにするなどの使い方があります。
___

## em progresso simultâneo
他カテゴリとの並行実行設定
- このカテゴリのアクションが、他のカテゴリのアクションと並行して進行できるかどうかのフラグです。
- オンの場合は、他のカテゴリのアクションとは独立して同時に進行できます。
- オフの場合は、同じくオフに設定された他のカテゴリのアクションと同時に実行できません。新たにこのカテゴリのアクションを開始すると、他の非スタンドアロンカテゴリで進行中のアクションは自動的に中止されます。
___

## fundo
カテゴリ固有の背景設定
- このカテゴリの背景を設定します。
- カテゴリを選択されたときに、連動して背景画像が変更されます。
- Se nada for configurado, a configuração do plano de fundo do mundo será usada como está.