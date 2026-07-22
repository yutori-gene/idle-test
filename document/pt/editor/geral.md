
# Geral
Configurações básicas do jogo, incluindo configurações de idioma e nível
___

## Idioma.
Idioma do mundo na época de sua criação.
- Configura o idioma usado nesse editor de mundos.
- O primeiro idioma exibido quando o usuário inicia o jogo.
___

## tradução
Preparar traduções em vários idiomas ou
- Se ativado, os usuários podem jogar em qualquer idioma.
- Se estiver desativado, você só poderá reproduzir no idioma selecionado nas configurações de idioma.
- Se a tradução estiver ativada, os dados traduzidos para cada idioma deverão ser fornecidos.
- [_translation_](pt/editor/tradução)
___

## Tempo máximo desligado [horas].
Limites de tempo para progresso desligado.
- Configure o número máximo de tempos de progresso quando estiver desligado.
- Por exemplo, se 6 horas for definido, o processo de retorno off-line até 6 horas será processado, mas se for permitido ficar off-line por mais tempo, o tempo off-line será tratado como 6 horas.
- Se for definido 0 tempo, não ocorrerá nenhum processamento de processo ao retornar ao modo desligado.
- O valor máximo é de 24 horas.
- [_category_](pt/editor/categoria)
___

## Nível máximo da Categoria
Nível limite para cada Categoria.
- Configure o nível máximo para cada Categoria.
- Se forem adquiridas experiências além desse nível, o nível máximo configurado aqui será usado no cálculo de cada propriedade.
- Esse valor não tem relações com Categorias sem níveis.
- [_category_](pt/editor/categoria)
___

## função de bloqueio
Ocultar itens até que os requisitos sejam atendidos
- Se ativado, o Item de Ação da Categoria ficará oculto enquanto nada tiver sido usado ou possuído e os requisitos não tiverem sido atendidos.
- Se estiver desativado, todos os itens serão exibidos desde o início, mas não poderão ser executados ou equipados até que os requisitos sejam atendidos.
- [_category_](pt/editor/categoria)
- [_action_](pt/editor/ação)
- [_item_](pt/editor/item)
___

## moeda
Configuração da moeda (moedas) utilizada no jogo
- Realize a configuração da moeda utilizada no jogo.
- É possível definir várias moedas, com a configuração de cada uma delas com informações (ID, nome, ícone, cor etc.).
- A moeda é usada para comprar e vender itens e para ampliar a capacidade do inventário.
- A moeda que aparece em primeiro lugar é considerada a moeda principal e é utilizada quando o ID da moeda (`coinId`) não for especificado em Items ou na capacidade.
- [_information_](pt/editor/informações)
- [_item_](pt/editor/item)
___

## capacidade
Configurações de capacidade de inventário.
- Controla o número máximo de tipos diferentes de Item que um jogador pode ter.
- Cada item é controlado pelo número de tipos de itens que você tem, nada a ver com o número de itens que você possui.
- Definir `initialCount` como 0 significa capacidade ilimitada.
- Ao se referir a itens de capacidade em condições ou prêmios, use a ID configurada aqui.
- [_item_](pt/editor/item)
___

### [_informações_](pt/editor/informações)
___

### Valor padrão [pcs].
Capacidade de inventário inicial (número de itens diferentes que podem ser mantidos)
- Capacidade inicial (número de itens diferentes que podem ser possuídos) no começo do jogo.
- Se `0` for definido, a capacidade será ilimitada.
___

### Preço base [moedas].
Preço inicial para uma capacidade adicional.
- Preço base (em moedas) para aumentar a capacidade do inventário em um slot.
- O preço real é calculado como "preço base x porcentagem de aumento ^ número de vezes comprado".
- Exemplo: preço base 100, taxa de aumento 1,2, primeira 100 moedas, segunda 120 moedas, terceira 144 moedas.
___

### Aumento percentual [vezes].
Aumento percentual nos custos de expansão da capacidade
- É um multiplicador de quanto o custo da expansão da capacidade aumenta com a enésima compra.
- Para `1.0`, o preço é sempre o mesmo; para `1.2`, o preço é 20% mais alto a cada vez que é comprado.
- Fórmula: preço base x porcentagem de aumento ^ número de vezes compradas

|taxa de aumento|1ª adição.|5º aumento.|10º aumento.|100º aumento.|1000º aumento.|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.05|x1.00|x1.22|x1.63|x131.50|x1.7×10²⁰|
|1.10|x1.00|x1.61|x2.59|x1,4 x 10⁴|x2.7×10⁴¹|
|1.20|x1.00|x2.49|x6.19|x8,3 x 10⁷|x8.3×10⁷⁹|
|1.50|x1.00|x5.06|x57.67|x1.9×10¹⁷|x7.0×10¹⁷⁶|
___

### ID da moeda
ID da moeda utilizada para a expansão de capacidade
- Especifique o ID da moeda (coins) a ser usada para pagar a expansão da capacidade do inventário.
- Se o campo estiver em branco, será utilizada a moeda principal (a primeira da lista de moedas).
___

### Limite máximo para comprar [vezes]
Número máximo de vezes que é possível comprar capacidade
- É o limite máximo de vezes que você pode comprar capacidade com moeda.
- Se definir como `0`, você poderá comprar sem limites.
- Se você definir como `-1`, não será mais possível comprar.
- O aumento de capacidade decorrente de recompensas não está sujeito a esse limite máximo.
___

## Fila
Configuração do número de intervalos para a execução consecutiva (programada) de ações
- Gerencia ou número de slots para a execução contínua (programação) de ações.
- Além de poderem ser comprados com moeda, assim como a capacidade, os espaços também podem ser aumentados por meio de recompensas de ações ou eventos, indicando os itens da fila.
- Ao consultar itens da fila com base em condições ou recompensas, utilize o ID configurado aqui.
- [_item_](pt/editor/item)
___

### [_informações_](pt/editor/informações)
___

### Valor padrão [pcs].
Número de quadros de execução contínua ao começar o jogo
- É o número de vagas disponíveis quando o jogo começa.
- O valor mínimo é `1` (não existe o tratamento de `0` = ilimitado, como no caso da capacidade).
___

### Preço base [moedas].
Preço inicial para adicionar um espaço
- Este é o preço básico (em moedas) para aumentar em uma a cota de execuções consecutivas.
- O preço real é calculado como "preço base x porcentagem de aumento ^ número de vezes comprado".
- Exemplo: preço base 100, taxa de aumento 1,2, primeira 100 moedas, segunda 120 moedas, terceira 144 moedas.
___

### Aumento percentual [vezes].
Taxa de aumento do custo de expansão da capacidade
- É o fator que indica em quanto o custo da expansão do espaço aumenta ao comprar n vezes.
- Para `1.0`, o preço é sempre o mesmo; para `1.2`, o preço é 20% mais alto a cada vez que é comprado.
- Fórmula: preço base x porcentagem de aumento ^ número de vezes compradas
___

### ID da moeda
ID da moeda usada para ampliar o limite
- Especifique o ID da moeda (coins) a ser usada no preço de expansão do intervalo de execução contínua.
- Se o campo estiver em branco, será utilizada a moeda principal (a primeira da lista de moedas).
___

### Limite máximo para comprar [vezes]
Número máximo de vezes que é possível comprar um espaço
- É o limite máximo de vezes que é possível comprar pacotes de execução contínua com moeda.
- Se definir como `0`, você poderá comprar sem limites.
- Se você definir como `-1`, não será mais possível comprar.
- O aumento da cota decorrente de remuneração não está sujeito a esse limite máximo.
___

## Taxa de aumento da experiência [vezes].
Aumento percentual na dificuldade de nível.
- À medida que o nível de uma Categoria aumenta, a taxa de aumento da experiência Necessária para alcançar o próximo nível.
- O aumento desse valor aumenta o nível de dificuldade.
- A quantidade de experiência necessária para subir de nível é igual a (taxa de aumento de experiência)^(nível atual - 1).

|Taxa de aumento da experiência|Nível 1|Nível 2|Nível 10|Nível 50|Nível 99.|
|-|-|-|-|-|-|
|0|x1.00|x1.00|x1.00|x1.00|x1.00|
|0.02|x1.00|x1.02|x1.22|x2.69|x5.52|
|0.05|x1.00|x1.05|x1.55|x11.47|x131.50|
|0.10|x1.00|x1.10|x2.36|x117.39|x5.7×10⁴|
|0.20|x1.00|x1.20|x6.19|x3,3 x 10³|x1,3 x 10¹¹|
- [_category_](pt/editor/categoria)
___

## Restrição do nível de ação
Solicita o número de vezes que a ação do mesmo atributo foi executada para a execução de uma ação.
- Se ativado, o número de vezes que uma ação com os mesmos atributos foi executada é automaticamente adicionado às condições de execução de cada ação.
- O número de vezes necessário é igual ao valor do nível da Ação.
- Se nada for configurado, será usado o ID da Categoria à qual ele pertence.
___

## [_valor de combate_](pt/editor/combate)