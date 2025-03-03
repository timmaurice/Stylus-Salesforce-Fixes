![Static Badge](https://img.shields.io/badge/v20.18.0-nodedotjs?style=flat&logo=nodedotjs&label=Node&color=%23339933)
![Static Badge](https://img.shields.io/badge/v.0.64.0-stylus?style=flat&logo=stylus&label=Stylus&color=%23333333)

# Stylus-Salesforce-Fixes

A **Stylus** CSS extension that improves the Salesforce UI by fixing various usability issues.

<!-- toc -->

- [Installation](#installation)
- [Features](#features)
- [Customization](#customization)
- [Development & Build](#development--build)
- [Changelog](#changelog)
  * [1.0.4 - 2025-03-03](#104---2025-03-03)
  * [1.0.3 - 2025-03-03](#103---2025-03-03)
  * [1.0.2 - 2025-01-23](#102---2025-01-23)
  * [1.0.1 - 2024-07-08](#101---2024-07-08)
  * [1.0.0 - 2024-06-28](#100---2024-06-28)
  * [Initial Release - 2024-06-24](#initial-release---2024-06-24)

<!-- tocstop -->

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

---

## Changelog

### 1.0.4 - 2025-03-03
- Added a static badge for Node.js + stylus version.
- Updated README.md with:
  - Installation instructions for the Chrome extension and overwrite theme.
  - Features including:
    - Copy Original Language in Translation Workbench
    - Expanded Clickable Areas in the Setup menu
    - Customizable Menu Colors
    - Monospace Font for Formulas & Text Areas
  - Customization instructions and development/build commands.
- Updated style.styl with:
  - Primary color and light variations.
  - Conditional monospace font for text areas.
  - Fixes for clickable areas and nowrap for specific pages.

### 1.0.3 - 2025-03-03
- Enhanced README.md with installation details, feature descriptions, and build commands.
- Updated package version to 1.0.3.

### 1.0.2 - 2025-01-23
- Added support for a new sandbox setup domain. _(Support for <img src="https://www.salesforce.com/c2/public/app/favicon.ico" width="15" height="15"> Spring `25)_

### 1.0.1 - 2024-07-08
- Fixed issues on the sandbox list page.

### 1.0.0 - 2024-06-28
- Styled data cells and added a stylus formatter.
- Initial setup and project description in README.md.

### Initial Release - 2024-06-24
- Basic setup and initial version.