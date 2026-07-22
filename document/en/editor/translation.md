
# translation
Configuration for translating in-game text into other languages
- Configure the text to be translated.
- Multilingual settings are available when the translation config is enabled.
- If the translation is disabled, the description will be displayed as it was during development.
- If the site is in development before it is published, it is not possible to configure translations or switch languages.
___

## Enable Translation
Configure the translation function on or off
- Multilingual settings are available when the translation config is enabled.
- Translation will not be activated during development before publication. You will be able to switch languages after publication.
- When translation is enabled, 10 different languages will be supported, and it is Necessary to have translation data for all languages. It is not possible to enable only some of the languages.
- When a user starts a game, the language used in the development is displayed first. After that, the language can be changed to any language.
- The translation process is tedious, but it will allow many people to play with it.
___

## language file
JSON file of translation data
- When the game data is output with the public configuration, a JSON file for translation is generated in `translations/world` in the output folder.
- JSON files for translation in each language are located in the folder. The contents contain nothing translated data.
- The content has an ID inside each Type. Inside each type is a name and a description.
- Necessary to translate and save all names and descriptions.
___

## Translation work
Editing of translation data
- All translation files contain data in the language at the time of development.
- Necessary to translate files in languages other than the language in which they were developed.
___

### AI
AI-based translation
- Translate using AI such as ChatGPT, Copilot, and Claude.
- It is Possible to translate at once and to a certain degree of quality.
- Necessary to note that the translation may not be perfect, especially for technical terms and proper nouns.
- Depending on the volume of translations, the use of AI may be costly.
- If the progress of the translation by the AI is interrupted in the middle of the translation, you may manage to tell the AI to "continue". (In some cases, there is nothing you can do.)
___

#### Example Prompts
Examples of translation instructions given to AI
- Example prompt: Translate the `name` and `explanation` values of the uploaded JSON data from English to Japanese. Do not change anything else.
___

#### Use of GPT
Translation using ChatGPT's GPT
- The JSON Language Translator provided in the GPT library provided by ChatGPT can be used to translate JSON with ease.
- The JSON structure is preserved in the translation
- AI services other than ChatGPT may offer similar functionality.
___

### Translation Services
Using Translation Services
- Translate using an online service such as DeepL or Google Translate.
- Higher quality translations can be expected than AI translation, but there is a fee depending on the volume of translation
- Necessary to create and use a program to translate JSON files, as they cannot be translated directly by a translation service.
- For a fee, there are some services that translate JSON data as is (e.g. doctranslator.com). (doctranslator.com, etc.)
___

### manual (operation)
Manual Translation
- Open the translation file in a text editor and type in the translated content in each language. It is very time-consuming, but it is Possible to translate the file as you wish.
___

## language code
List of supported language codes

|language code|Language|
|-|-|
|en|English|
|zh|Chinese (language)|
|es|Español|
|ar|Arabic (language)|
|pt|Português|
|hi|Hindi|
|fr|Français|
|ru|Русский|
|de|Deutsch|
|ja|日本語|