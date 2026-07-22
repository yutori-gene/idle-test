
# tradução
Configurações para traduzir o texto do jogo para outros idiomas.
- Configura o texto a ser traduzido.
- As configurações em vários idiomas estão disponíveis quando as configurações de tradução estão ativadas.
- Se a tradução estiver desativada, as informações descritas durante o desenvolvimento serão exibidas como estão.
- As configurações de tradução e a mudança de idioma não são possíveis durante o desenvolvimento da pré-publicação.
___

## Ativação da tradução
Configuração desligada da função de tradução.
- As configurações em vários idiomas estão disponíveis quando as configurações de tradução estão ativadas.
- A tradução não é ativada durante o desenvolvimento antes da publicação. A alternância entre idiomas será ativada após a publicação.
- Se a tradução estiver ativada, haverá suporte para dez idiomas diferentes e os dados de tradução deverão estar disponíveis para todos os idiomas. Não é possível ativar apenas alguns dos idiomas.
- Quando o usuário inicia o jogo, o idioma usado no desenvolvimento é exibido primeiro. O idioma pode então ser alterado para qualquer idioma.
- O processo de tradução é tedioso, mas permite que muitas pessoas brinquem com ele.
___

## arquivo de idioma
Arquivo JSON dos dados de tradução.
- Quando os dados do jogo são gerados com configurações públicas, um arquivo JSON para tradução é gerado em `translations/world` na pasta de saída.
- Os arquivos JSON para tradução em cada idioma estão localizados na pasta. O conteúdo contém dados nada traduzidos.
- O conteúdo tem um id dentro de cada Tipo. Além disso, há um nome e uma descrição dentro dele.
- As traduções devem ser feitas e salvas para todos os nomes e descrições.
___

## Tarefas de tradução
Edição de dados de tradução
- Todos os arquivos de tradução contêm dados no idioma no momento do desenvolvimento.
- É necessário trabalho de tradução para arquivos que não estejam no idioma em que foram desenvolvidos.
___

### IA
Tradução baseada em IA
- Traduza usando IA, como ChatGPT, Copilot e Claude.
- É Possível traduzir de uma só vez e com um certo grau de qualidade.
- Pode não ser uma tradução perfeita, especialmente no caso de termos técnicos e nomes próprios.
- Dependendo do volume de traduções, o uso da IA pode ser caro.
- Se o progresso da tradução pela IA for interrompido no meio do processo, talvez seja possível dizer à IA para "continuar" e ela conseguirá. (Em alguns casos, isso pode não ajudar).
___

#### Exemplos de prompts
Exemplos de instruções de tradução fornecidas à IA
- Exemplo de prompt: traduza os valores `name` e `explanation` dos dados JSON carregados do Inglês para o Japonês. Nada altere os outros minutos dos dados.
___

#### Uso de GPT
Tradução usando o GPT do ChatGPT.
- O JSON Language Translator fornecido na biblioteca GPT fornecida pelo ChatGPT pode ser usado para traduzir JSON com facilidade.
- A estrutura JSON é preservada na tradução.
- Funções semelhantes podem ser oferecidas por serviços de IA diferentes do ChatGPT.
___

### serviço de tradução
Uso de serviços de tradução
- Traduza usando serviços ligados, como DeepL e Google Translate.
- Pode-se esperar traduções de maior qualidade do que a tradução por IA, mas há uma taxa dependendo do volume de tradução
- Os arquivos JSON nada podem ser traduzidos diretamente pelos serviços de tradução, portanto, é necessário criar e usar um programa.
- Por uma taxa, há alguns serviços que traduzem dados JSON como estão. (por exemplo, doctranslator.com)
___

### manual (operação)
Tradução manual
- Abra o arquivo de tradução em um editor de texto e insira o conteúdo traduzido em cada idioma. Isso consome muito tempo, mas é possível traduzir o arquivo exatamente como você deseja.
___

## código do idioma
Lista de códigos de idiomas suportados

|código do idioma|Idioma.|
|-|-|
|en|Inglês|
|zh|Chinês (idioma)|
|es|Espanhol|
|ar|Árabe (idioma)|
|pt|Português|
|oi|Hindi|
|fr|Francês|
|ru|Russo|
|de|Alemão|
|PT|Japonês|