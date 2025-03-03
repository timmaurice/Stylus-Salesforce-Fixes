![Static Badge](https://img.shields.io/badge/v20.18.0-nodedotjs?style=flat&logo=nodedotjs&label=Node&color=%23339933)

# Stylus-Salesforce-Fixes

A **Stylus** CSS extension that improves the Salesforce UI by fixing various usability issues.

## Installation
- Add the chrome extension [Stylus](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) to your browser
- Install the overwrite theme via [UserStyles.world](https://userstyles.world/style/16934/salesforce-overwrite).

## Features

- **Copy Original Language in Translation Workbench** – Enables copying of the original text in the translation workbench.
- **Expanded Clickable Areas** – Makes the entire link area in the **Setup** menu clickable for easier navigation.
- **Customizable Menu Colors** – Change the Salesforce menu colors. _(Default: [DIA](https://dia-dg.com) green)_
- **Monospace Font for Formulas & Text Areas** – Enhances readability by displaying formulas and text fields in a monospace font. _(Default: true)_

## Customization
- To configure menu colors and disable monospace font for formulas and text areas, click the ⚙ icon in Stylus settings.

## Development & Build

| Command          | Description                                      |
| ---------------- | ------------------------------------------------ |
| `npm run format` | Formats the `.styl` file                         |
| `npm run build`  | Compiles the CSS and formats the `.styl` file    |
| `npm run watch`  | Watches for changes and auto-builds the CSS file |