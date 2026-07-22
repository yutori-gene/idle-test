
# Ação.
Elementos de ação, como coletar, criar e lutar.
- São elementos que representam atos como colecionar, fazer, comprar e vender e lutar.
- A cada ação realizada, você ganha experiência e seu nível sobe.
- Você pode configurar os itens a serem consumidos ou obtidos para cada ação.
- Há sim vários tipos de padrões de agir.
___

## [_informações_](pt/editor/informações)
___

## Categoria.
ID da Categoria à qual a Ação pertence
- Especifique o ID da Categoria à qual essa Ação pertence.
___

## atributo
Categorias de atributo específicas da ação
- Atributos individuais (Categorias) podem ser configurados.
- Se for deixado em branco, a Categoria à qual pertence será assumida
- Por exemplo, se você configurar o atributo Magia para uma ação que pertença à categoria Castelo do Demônio individualmente, o nível e as propriedades da Categoria Magia serão calculados e aplicados ao tempo de conclusão e ao dano da ação.
- [_category_](pt/editor/categoria)
___

## grupo (geralmente de pessoas)
Exibir a classificação de grupo de ações
- Aplique um dos grupos configurados no Basic.
- Uma lista de Ações é exibida na ordem dos grupos configurados.
- [_general_](pt/editor/geral)
___

## Estado de desbloqueio inicial
Estado inicial de exibição e liberação do elemento (passa automaticamente para o estado superior quando os requisitos de ativação forem atendidos)
- secreted: Não será exibido na interface do usuário até que todos os requisitos sejam atendidos (não aparece nas Dicas e fica oculto na lista de requisitos/recompensas).
- hidden: Fica totalmente oculto enquanto não for referenciado por nenhum elemento de liberação e não atender aos requisitos (o nome fica desativado e não pode ser alterado).
- hinted (padrão): Apenas o nome é exibido como prévia, mas não é possível realizar nenhuma ação até que seja liberado.
- liberado: fica liberado e pronto para uso desde o início, independentemente das condições (antiga opção “Exibir desde o início”).
___

## nível
Nível de dificuldade da Ação.
- O nível de dificuldade da Ação é indicado pelo nível.
- Calcule cada propriedade em tempo de execução em comparação com o nível do jogador.
- Por exemplo, a execução de uma Ação superior ao seu nível terá uma taxa de sucesso baixa.
- Se as condições forem atendidas, a execução poderá ser realizada mesmo que o nível do jogador seja inferior a esse valor.
- [_property_](pt/editor/propriedade)
___

## [_termos e condições_](pt/editor/requisito)
___

## Tempo [segundos].
Tempo típico necessário para realizar a Ação
- O tempo padrão (em segundos) Necessário para executar uma ação uma vez.
- Para os tipos `stamina`, esse é o intervalo de tempo para um turno (uma redução na resistência do outro).
- A execução real pode variar devido aos cálculos das propriedades.
- [_property_](pt/editor/propriedade)
___

## Experiência [próximo nível em 100].
Experiência adquirida com as ações de sucesso
- A experiência padrão adquirida ao realizar uma Ação uma vez e com sucesso; 100 minutos equivalem a um nível de experiência.
- No caso de combate, é aconselhável configurar mais, pois as aquisições são feitas quando o oponente vence.
- A execução real pode variar devido aos cálculos das propriedades.
- [_property_](pt/editor/propriedade)
___

## Probabilidade de sucesso [0-1].
Probabilidade de sucesso na conclusão da Ação
- A probabilidade de sucesso na conclusão da Ação.
- Sempre tem sucesso se `1`, sempre fracassa se `0`.
- Em caso de fracasso, os Itens consumíveis são consumidos, mas nenhuma recompensa ou experiência é obtida.
- A execução real pode variar devido aos cálculos das propriedades.
___

## Número máximo de execuções [vezes].
Número máximo de vezes que uma ação pode ser concluída.
- O número máximo de vezes que uma Ação pode ser concluída com sucesso.
- Ilimitado para `0`.
- Quando o limite superior é atingido, a Ação não é mais executável.
___

## [_aquisições_](pt/editor/aquisição)
___

## Tipo de progresso
Tipo de execução da ação
- Há quatro tipos.

|Tipo.|detalhes da operação|resistência|Exemplo.|
|-|-|-|-|
|`persistente`.|Esse é um tipo de ação que se repete continuamente; você ganha experiência e valores a cada conclusão.|Nada a ver|Exploração madeireira, mineração, pesca|
|`single`.|Execute uma Ação de cada vez. Se interrompido, o progresso é salvo e pode ser retomado na próxima vez. Quando concluído, o usuário pressiona a Ação de confirmação para receber os resultados.|Nada a ver|Abrir baús de tesouro, aprender habilidades por meio da leitura|
|`snap`.|Esse Tipo de Ação é realizado instantaneamente. Concluída imediatamente, sem nada de tempo.|Nada a ver|Negociar, uso de itens.|
|`stamina`.|Cada tempo necessário diminui a respectiva resistência do jogador e do oponente. Quando a resistência do oponente se esgota, ganha-se experiência e prêmios. Quando a resistência do jogador se esgota, o jogo termina e todas as ações em andamento são abortadas.|Relevante.|Combate, operações perigosas.|
___

## [_valor de combate_](pt/editor/combate)