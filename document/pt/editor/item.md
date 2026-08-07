
# Item
Elementos de bens, como Equipamento e consumíveis
- Esse elemento está relacionado ao próprio patrimônio de objetos, como Equipamento, consumíveis e objetos de valor.
- Apenas um pode ser Equipamento em uma Categoria, ou nada pode ser desativado.
- Há também maneiras contadas de usá-los.
___

## [_informações_](pt/editor/information)
___

## Categoria.
ID da Categoria à qual o Item pertence
- Especifique o ID da Categoria à qual esse Item pertence.
___

## grupo (geralmente de pessoas)
Exibir grupo de classificação de itens
- Aplique um dos grupos configurados no Basic.
- Uma lista de itens é exibida na ordem dos grupos configurados.
- Se for deixado em branco, nenhum agrupamento será feito.
- [_general_](pt/editor/general)
___

## Estado de desbloqueio inicial
Estado inicial de exibição e liberação do elemento (passa automaticamente para o estado superior quando os requisitos de ativação forem atendidos)
- secreted: Não será exibido na interface do usuário até que todos os requisitos sejam atendidos (não aparece nas Dicas e fica oculto na lista de requisitos/recompensas).
- hidden: Fica totalmente oculto enquanto não for referenciado por nenhum elemento de liberação e não atender aos requisitos (o nome fica desativado e não pode ser alterado).
- hinted (padrão): Apenas o nome é exibido como prévia, mas não é possível realizar nenhuma ação até que seja liberado.
- liberado: fica liberado e pronto para uso desde o início, independentemente das condições (antiga opção “Exibir desde o início”).
___

## Valor de compra [moedas].
Configuração do preço de compra dos itens.
- Não é possível comprar um Item sem nunca tê-lo possuído.

|valor|tratamento|
|-|-|
|0|nada|
|Um valor maior que zero.|O valor que você pode comprar.|
|Um valor menor que zero (por exemplo, -1)|Nada pode ser comprado (tratado como zero).|
___

## Valor de venda [moedas].
Configuração do preço de venda dos itens.
- Configura o preço pelo qual os Itens são vendidos.

|valor|tratamento|
|-|-|
|0|nada|
|Um valor maior que zero.|Venda por esse valor.|
|Um valor menor que zero (por exemplo, -1)|Taxa de desconto de configuração geral multiplicada pelo preço do lance (se o preço do lance for zero, nada poderá ser vendido)|
- [_general_](pt/editor/general)
___

## Máx. número próprio [pçs].
Limite do número máximo de itens próprios.
- Se for 0, não há limite para o número que pode ser próprio.
- Se estiver acima de 1, você só poderá contar com esse número. Se o limite máximo estiver em cima, outras aquisições não aumentarão o número de próprios.
___

## Tipo de Equipamento
Configurações de tipo para Equipamento, efeitos e consumo de itens.
- Os itens equipáveis precisam pertencer a um grupo indicado em `equipmentGroups` da categoria.
- Somente um Item pode ser equipado em um mesmo grupo.
- `unnecessary` produz efeito independentemente de estar equipado, e a intensidade do efeito é proporcional à quantidade que você possui (sem efeito com 0, n vezes com n).

|valor|Equipamento|Eficácia.|consumo|Exemplo.|
|-|-|-|-|-|
|`necessary`|Necessário|Apenas enquanto estiver equipando (1 unidade)|nada|Espadas, armaduras e outros equipamentos.|
|`consumable`|Necessário|Apenas enquanto estiver equipando (1 unidade)|Consumido quando as ações são realizadas|Itens que são consumidos para obter um efeito, como poções.|
|`unnecessary`|Desnecessário|Enquanto estiver em posse, sempre (proporcionalmente à quantidade em posse)|nada|Itens passivos que são eficazes pelo simples fato de tê-los.|
|`impossible`|não permitido|nada|nada|Itens nada eficazes, como materiais e detritos.|
___

## [_termos e condições_](pt/editor/requirement)
___

## [_propriedades_](pt/editor/property)
___

## ID da moeda de negociação
ID da moeda utilizada na compra e venda deste Item
- Especifique o ID da moeda (coins) usada tanto para o valor de compra quanto para o valor de venda.
- Se o campo estiver em branco, será utilizada a moeda principal (a primeira da lista de moedas).