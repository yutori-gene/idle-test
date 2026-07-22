
# predefinido
Personalização da exibição dos elementos do sistema
- Substitui o texto e os ícones da interface do usuário pré-integrados ao mecanismo de jogo (jogador).
- Somente aqueles que correspondem a uma predefinição existente por ID serão substituídos.
- Somente os itens que você configurar serão substituídos. Por exemplo, se apenas o ícone estiver configurado, os outros itens, como nome e cor, usarão o original.
___

## ID
ID exclusivo para identificar o elemento
- ID para identificar exclusivamente cada elemento.
- No editor, essa é uma string para identificar o elemento.
- Por exemplo, o ID especifica qual Item é obtido quando a Ação é concluída.

!> Após a configuração do ID, nada deve ser alterado depois que o jogo tiver sido distribuído. Alterá-la resultará em inconsistências com os dados do jogo existentes e o jogo nada funcionará corretamente.
___

### Nome exibido.
Nome de exibição gerado automaticamente a partir do ID
- Os caracteres que podem ser usados são uma combinação de letras, hífens e números.
- Se o nome ainda não estiver configurado, a primeira letra de cada palavra será maiúscula e o hífen será substituído por um espaço, que é automaticamente configurado no nome.
- Para idiomas diferentes do inglês, a entrada do nome deve ser configurada individualmente.
___

#### Exemplo.
Exemplos reais de conversão de ID
- Se o ID for `stylish-strong-axe`, o nome será `Stylish Strong Axe`.
___

### Nada de duplicação.
Proibição de IDs duplicados dentro do mesmo Tipo.
- Nada de duplicar nos tipos Categoria, Ação, Item, Evento e Predefinição, pois eles são usados para identificar elementos.
- Ter o mesmo ID para tipos diferentes não é um problema.
- [_type_](pt/editor/tipo)
___

## Nome.
Nome do elemento como ele aparece
- Nome do elemento exibido no jogo.
- Outros idiomas além do inglês também podem ser inseridos.
- Nomes que duplicam outros elementos são aceitáveis.
- Se for muito longo, a parte que estiver transbordando será omitida do visor durante a reprodução com `...`.
___

### Conversão automática de ID
Geração automática de nomes a partir de IDs
- Se o campo for deixado em branco, as informações serão exibidas automaticamente com base no ID. Para obter mais informações, consulte a seção anterior.
___

## Nota explicativa
Descrição detalhada do elemento.
- Uma descrição dos elementos exibidos no jogo.
- Outros idiomas além do inglês podem ser inseridos. Todos os textos, mesmo os longos, são exibidos.
- Se nada for explicado, deixe em branco.
___

## ícone
Configuração de ícones para representar elementos.
- Os ícones podem ser configurados como imagens, Iconify ou emojis.
- O Iconify é um serviço que oferece uma ampla variedade de ícones.
- Se for contada mais de uma configuração, as imagens, o Iconify e os pictogramas serão priorizados e exibidos nessa ordem.
___

### Imagem.
Use qualquer arquivo de imagem
- Imagem que representa o elemento.
- Se o tamanho do arquivo for grande, ele será redimensionado automaticamente.
- Desnecessário se o Iconify ou os pictogramas estiverem configurados.
___

#### Tipo de arquivo.
Formatos de arquivo de imagem compatíveis.
- Você pode usar os tipos gerais que podem ser exibidos no navegador.
- JPEG, PNG, GIF, WebP, SVG, etc.
___

### Iconificar
Usando o conjunto de ícones do Iconify
- Ícones que representam elementos.
- O Iconify é um serviço que oferece uma ampla variedade de ícones.
- Se uma imagem for configurada, ela terá precedência.
___

#### Iconificar
Como selecionar ícones do Iconify
- Pesquise `Iconify` para ver os ícones que podem ser exibidos.
- Você pode encontrar rapidamente os melhores ícones pesquisando por ícones.
- Selecione um ícone para ver seu identificador (tipo de conjunto de ícones `:` nome do ícone), como `game-icons:sword-wound`, e cole-o diretamente nesse campo de ícone.
![iconify-selection.png](../../resources/iconify-selection.png)
- [_iconify_](https://icon-sets.iconify.design)
___

### pictograma
Exibição de ícones com pictogramas
- Exibir pictogramas como ícones.
- Ele pode ser convertido de texto para pictogramas e configurado rapidamente.
- Para pictogramas, insira os pictogramas Unicode como eles são.
- Como os pictogramas introduzidos no ambiente de execução são usados, eles são exibidos de forma ligeiramente diferente para diferentes usuários.
- O Iconify permite que você configure emojis que nada têm a ver com cada ambiente
- Caracteres não pictográficos podem ser exibidos, mas a exibição poderá ser corrompida se houver mais de um caractere.
- Digite pictogramas, por exemplo, `🗡️` ou `⚔️`.
___

## variedade
Configure a cor de exibição do elemento.
- Como uma cor de elemento, ela é aplicada ao ícone e à cor de fundo do elemento.
- Selecione no seletor de cores do editor.
___

### Herança de elementos pai
Assumir as configurações de cor do elemento pai.
- Se estiver em branco, a cor configurada no elemento pai será assumida.
- A hierarquia de tipos para cada elemento é a seguinte
- Por exemplo, se uma ação tiver uma configuração de cor individual, ela será usada, ao passo que se a ação não tiver uma configuração de cor individual, será usada a Categoria ou a cor do mundo.
```
world
├── category
├── action
├── item
├── group
├── event
└── preset
```
- [_type_](pt/editor/tipo)