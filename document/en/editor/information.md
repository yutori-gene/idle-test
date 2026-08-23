
# information
Configure basic information about the element (ID, name, icon, color, etc.)
- ワールド内の各要素（カテゴリ、アクション、アイテム、イベントなど）に共通する基本情報の項目です。
- Each element is configured separately.
___

## ID
unique ID to identify an element
- ID to uniquely identify each element.
- A string that identifies the element in the editor.
- For example, the ID specifies which Item is obtained when the Action is completed.

!> Once configured, do not change the ID once the game has been distributed. If you change it, it will be inconsistent with the existing game data and will not work properly.
___

### Displayed Name
Display name automatically generated from ID
- The characters that can be used are a combination of letters, hyphens, and counts.
- If the name is not configured, the first letter of each word is capitalized and the hyphen is replaced by a space, which is automatically configured in the name.
- Necessary to configure the name field separately for languages other than English.
___

#### Example
Examples of ID Conversion
- If the ID is `stylish-strong-axe`, the name becomes `Stylish Strong Axe`.
___

### Nothing to duplicate.
Prohibit duplicate IDs within the same Type
- 要素の判別に用いられるため、カテゴリ、アクション、アイテム、イベント、プリセットの各タイプ内で重複しないでください。
- There is no problem to have the same ID on different Types.
- [_type_](en/editor/type)
___

## Name
The name under which the element appears
- The name of the element displayed in the game.
- Languages other than English can also be entered.
- Names that duplicate other elements are acceptable.
- If it is too long, the overflowing part is omitted with `…` in the display during play.
___

### Automatic conversion from ID
Automatic name generation from ID
- If left blank, it will be automatically displayed based on the ID. See previous section for details.
___

## explanatory note
Detailed description of the element
- A description of the elements displayed in the game.
- Languages other than English can be entered. Even long sentences are all displayed.
- If there is nothing to explain, leave blank.
___

## icon
Configure icons to represent elements
- Icons can be configured as images, Iconify, or emoji.
- Iconify is a service that provides various types of icons.
- If more than one of these is configured, priority is given to images, Iconify, and pictograms, in that order.
___

### image
Use any image file
- An image representing an element.
- If the file size is large, it will be automatically resized.
- Unnecessary if Iconify or pictograms are configured.
___

#### File type
Supported image file formats
- Common formats that browsers can display are available.
- JPEG, PNG, GIF, WebP, SVG and so on.
___

### Iconify
Using the Iconify Icon Set
- An icon representing an element.
- Iconify is a service that provides various types of icons.
- If an image is configured, it will take precedence.
___

#### Iconify
How to select icons from Iconify
- Search `Iconify` for icons that can be displayed.
- You can quickly find the best icons by searching for icons.
- When you select an icon, you will see its identifier such as `game-icons:sword-wound` (type of icon set `:`name of icon), which you can paste directly into this icon's field.
![iconify-selection.png](../../resources/iconify-selection.png)
- [_iconify_](https://icon-sets.iconify.design)
___

### pictograph
Icon display with pictograms
- Display pictograms as icons.
- It can be converted from text to pictograms and configured quickly.
- For pictograms, enter Unicode pictograms as they are.
- Since the pictograms introduced in the execution environment are used, the display may differ slightly from user to user.
- Iconify allows you to configure emoji that are nothing specific to each environment
- It is possible to display characters other than pictograms, but it is Possible for the display to be corrupted if there is more than one character.
- For example, enter a pictogram such as `🗡️` or `⚔️`.
___

## Color
Configure the display color of the element
- As the element's color, it is applied to the element's icon and background color.
- Select from the editor's color picker.
___

### Inheritance from the parent element
Taking over the color configured on the parent element
- If left blank, the color configured on the parent element is inherited.
- The hierarchy of each element type is as follows.
- 例えば、アクションに個別の色が設定されている場合はそれが利用されますが、アクションに個別の色が設定されていない場合はカテゴリ又はワールドの色が使用されます。
- イベントもカテゴリを設定している場合は、アクションやアイテムと同じようにそのカテゴリの色を引き継ぎます。
```
world
├── category
├── action
├── item
├── skill
├── group
├── task
└── preset
```
- [_type_](en/editor/type)