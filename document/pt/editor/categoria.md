
# Categoria.
Estrutura geral para a classificação de ações e itens.
- Representa uma classificação importante.
- Por exemplo, ele pode ser configurado em qualquer ambiente, como curto alcance, longo alcance, magia, masmorras, ferreiros, fábricas etc.
- As Ações e os Itens são colocados diretamente abaixo do mundo e são associados a uma ID de Categoria.
___

## [_informações_](pt/editor/informações)
___

## grupo (geralmente de pessoas)
Exibir a classificação de grupos de categorias
- Aplique um dos grupos configurados no Basic.
- Uma lista de Categorias é exibida na ordem dos grupos configurados.
- [_general_](pt/editor/geral)
___

## Estado de desbloqueio inicial
Estado inicial de exibição e liberação do elemento (passa automaticamente para o estado superior quando os requisitos de ativação forem atendidos)
- secreted: Não será exibido na interface do usuário até que todos os requisitos sejam atendidos (não aparece nas Dicas e fica oculto na lista de requisitos/recompensas).
- hidden: Fica totalmente oculto enquanto não for referenciado por nenhum elemento de liberação e não atender aos requisitos (o nome fica desativado e não pode ser alterado).
- hinted (padrão): Apenas o nome é exibido como prévia, mas não é possível realizar nenhuma ação até que seja liberado.
- liberado: fica liberado e pronto para uso desde o início, independentemente das condições (antiga opção “Exibir desde o início”).
___

## [_termos e condições_](pt/editor/requisito)
___

## Grupo de equipamentos
Designação de grupos de itens que podem ser equipados nessa Categoria.
- Lista de nomes de grupos de itens que podem ser equipados nessa Categoria.
- Somente os itens do grupo que correspondem ao nome do grupo especificado aqui podem ser equipados.
- Se uma string vazia for especificada, os itens com um grupo sem configuração (vazio) se tornarão elegíveis para Equipamento.
- Somente um Item pode ser equipado em um mesmo grupo. Quando você equipa um novo Item, qualquer equipamento existente no mesmo grupo é automaticamente desequipado.
- Se a lista estiver vazia (0 peças), nada poderá ser equipado.
- [_general_](pt/editor/geral)
___

## Disponibilidade de níveis
Disponibilidade de funções em nível de Categoria
- Esse é um sinalizador para indicar se essa Categoria tem um nível ou não.
- Se estiver ligado, ele tem um nível; se estiver desligado, não tem.
- Um exemplo é ativar as categorias com base na experiência, como espadachim e magia, e desligar as categorias com base no local, como masmorras e ferreiros.
___

## em progresso simultâneo
Configurações de execução paralela com outras categorias
- Esse é um sinalizador que indica se as ações nessa Categoria podem progredir em paralelo com ações em outras Categorias.
- Se ligada, a Ação pode progredir simultaneamente e independentemente de outras Categorias de Ações.
- Se estiver desligada, ela não poderá ser executada simultaneamente com ações em outras Categorias que também estejam configuradas como desligadas. Quando você começa uma nova Ação nessa Categoria, as ações em progresso em outras Categorias não autônomas são automaticamente abortadas.
___

## fundo
Configurações de fundo específicas da Categoria
- Configure o plano de fundo para essa Categoria.
- Quando uma Categoria é selecionada, a imagem de fundo muda em conjunto com ela.
- Se nada for configurado, a configuração do plano de fundo do mundo será usada como está.