
# propriedades
Configuração dos efeitos de um Item.
- Esse é um item de efeito que pode ser configurado no Item.
- Itens cujo tipo de equipamento é `necessary` ou `consumable` só aplicam seu efeito enquanto equipados. `unnecessary` aplica o efeito apenas por estar em posse, e a intensidade do efeito é proporcional à quantidade possuída (o dobro se você possuir 2).
- Como o efeito de `unnecessary` é calculado com base no número de itens em posse, o `maximum` (número máximo de itens) representa o limite máximo desse efeito. Ao ajustar o equilíbrio, faça a configuração desse valor em conjunto com o `maximum`.
- Os valores de ambos os itens são calculados como um Ajustado para a diferença de nível entre o nível do jogador e o nível da Ação.
- Por exemplo, se o valor de ataque for 10, o ataque será calculado como se o nível do jogador fosse 10 mais alto do que o nível da Ação. Os valores Menos são o oposto.
- attack, defence, accuracy, evasion e restore só são eficazes para ações do tipo `stamina`.

|propriedades|Detalhes da eficácia.|
|-|-|
|velocidade|Reduz o tempo necessário para uma Ação. O tempo necessário varia inversamente com a diferença de nível.|
|chance|Altera a probabilidade de sucesso de uma Ação. A probabilidade aumenta na proporção da diferença de nível.|
|experiência|Altera a experiência adquirida. Aumenta proporcionalmente à diferença de nível (o cálculo é invertido: quanto maior a Ação de nível, mais você ganha).|
|ataque|Altera o dano de resistência causado ao oponente. (Ação de resistência apenas).|
|defesa|Reduz o dano de resistência recebido dos oponentes. (Ação de resistência apenas).|
|precisão|Baixa a taxa de erros de ataque. (Ação de resistência apenas).|
|evasão|Altera a taxa de evasão dos ataques do oponente. (Ação de resistência apenas).|
|restaurar|Altera a quantidade de resistência restaurada no fim de uma ação. (somente para ações de resistência).|
___

## Categoria.
Especificação da Categoria à qual as propriedades se aplicam.
- Configure o ID da Categoria à qual essa propriedade se aplica.
- Ao configurar `*`, aplica-se a todas as categorias.
- Se estiver em branco, ele se aplica à Categoria à qual o Item pertence.
___

## Valor do ataque [diferença de nível].
Correção do dano de resistência infligido ao oponente (válido apenas para ações de resistência).
- O dano do ataque é calculado presumindo-se que o nível do jogador seja esse valor maior do que o nível da Ação.
___

## Valor de defesa [diferença de nível].
Correção do dano de resistência recebido de um oponente (válido apenas para ações de STAMINA).
- O dano sofrido é calculado como se o nível do jogador fosse esse valor maior do que o nível da Ação. Quanto mais alto for o valor, menos dano será infligido.
___

## Valor da precisão [diferença de nível].
Correção da taxa de falha de ataque (válida apenas para ações de resistência).
- A taxa de falha é calculada presumindo-se que o nível do jogador seja esse valor maior do que o nível da Ação. Quanto mais alto for o valor, mais baixa será a taxa de erros.
___

## Valor de evasão [diferença de nível].
Correção da taxa de evasão dos ataques do oponente (válida apenas para ações de resistência).
- A taxa de esquiva é calculada considerando que o nível do jogador é exatamente esse valor acima do nível da Ação. Quanto maior for esse valor, mais fácil será esquivar os ataques do adversário.
___

## Valor restaurado [diferença de nível].
Correção na restauração da resistência (válida apenas para ações de STAMINA).
- A quantidade de resistência restaurada é calculada presumindo-se que o nível do jogador seja esse valor maior do que o nível da Ação.
___

## Rapidez [diferença de nível].
Correção do tempo da ação
- O tempo necessário é calculado presumindo-se que o nível do jogador seja esse valor maior do que o nível da Ação. Quanto maior o valor, menor o tempo necessário.
___

## Probabilidade de sucesso [diferença de nível].
Correção da probabilidade de sucesso da Ação.
- A probabilidade de sucesso da ação é calculada presumindo-se que o nível do jogador seja esse valor maior que o nível da ação. Quanto maior o valor, maior a probabilidade de sucesso.
___

## Experiência [diferença de nível].
Correções na experiência adquirida
- A experiência é calculada como se o nível do jogador fosse muito menor do que o nível da ação (quanto maior o nível da ação, mais experiência é obtida, pois o cálculo é invertido).