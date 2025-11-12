# Alloy Theme# Alloy Light Theme# Alloy Light Theme

A beautiful, design-token-driven VS Code theme with light and dark variants. All colors are sourced from a comprehensive token system for consistency and maintainability.A light VS Code theme built from a comprehensive design token system. Colors are defined once in `light theme tokens.json` and mapped to VS Code styles in `TOKEN_MAPPING.md`.A light VS Code theme built from a comprehensive design token system. This theme uses token-based color definitions for consistency and maintainability across the entire editor UI and syntax highlighting.

## Features## Installation## Features

- **Light & Dark Variants**: Optimized color palettes for both light and dark modes1. Clone or open this extension folder in VS Code.- **Token-Driven Design**: All colors are sourced from `light theme tokens.json`, ensuring consistency across the design system.

- **Token-Based Design**: All colors come from `light theme tokens.json` and `dark theme tokens.json`

- **Comprehensive Coverage**: 117 color mappings per theme (58 UI colors + 59 syntax token colors)2. Reload VS Code (⌘R on macOS, Ctrl+Shift+F5 on Windows/Linux).- **Light Color Palette**: Optimized for readability and reduced eye strain during extended coding sessions.

- **59 Syntax Scopes**: Complete syntax highlighting for comments, strings, keywords, functions, types, variables, punctuation, markup, and more

- **Maintainable**: Single source of truth via `TOKEN_MAPPING.md` — add or change mappings without touching hex values3. Open Color Theme picker: Command Palette → Preferences: Color Theme- **Comprehensive UI Coverage**: Colors defined for editor, sidebar, activity bar, status bar, terminal, and syntax highlighting.

- **Automated Build**: Run `npm run build-theme` to regenerate themes from tokens

4. Select **Alloy** from the list.- **Build System**: Automated build process resolves token references to hex color values.

## Installation

## How to Customize## Installation

### From VS Code Marketplace

1. Open VS CodeThe theme is controlled by two files:### For Development

2. Go to **Extensions** (Ctrl+Shift+X / Cmd+Shift+X)

3. Search for **"Alloy Theme"**### 1. `TOKEN_MAPPING.md` (Source of Truth)1. Clone or open this extension folder in VS Code.

4. Click Install

5. Open **Color Theme** picker (Ctrl+K Ctrl+T) and select **Alloy (Light)** or **Alloy (Dark)**Maps VS Code style keys to token paths. Example:2. Build the theme from the token-backed template (recommended workflow):

### For Development````

1. Clone or open this folder in VS Code

2. Run `npm run build-theme` to generate `Alloy.json` and `Alloy.dark.json` from tokens| VS Code Style Key | Token Path | Description |- If you maintain a variable-based template, edit `Alloy.template.json` (or `light theme tokens.json`).

3. Press F5 or reload VS Code to see changes

|---|---|---|- Run the build script to resolve token references and update `Alloy.json` (this file is what VS Code reads):

## Customizing the Theme

| editor.background | color.graphic.default | Main editor background |

The theme is controlled by three files:

| editorCursor.foreground | theme.primary.main | Cursor/caret color |```bash

### 1. `TOKEN_MAPPING.md` — Style-to-Token Mapping

Maps VS Code style keys (e.g., `editor.background`) to token paths (e.g., `theme.background.main`).```npm run build-theme

**To add a new color mapping:**````

1. Add a row to the appropriate section in `TOKEN_MAPPING.md`

2. Ensure the token path exists in `light theme tokens.json` (and `dark theme tokens.json` for dark mode)Edit this file to add new styles or change which token populates a style.

3. Run `npm run build-theme`

Notes:

### 2. `light theme tokens.json` & `dark theme tokens.json` — Color Values

Organized hierarchical token definitions:### 2. `light theme tokens.json` (Color Values)

- `theme.*` — Primary theme colors (primary, secondary, tertiary, error, warning, success, surface, background)

- `color.*` — Named color groups (text, background, border, graphic, destructive)Defines all actual color hex values organized hierarchically:- The build script reads `light theme tokens.json` and the source template and **overwrites** `Alloy.json` with resolved hex values. `package.json` points to `./Alloy.json`, so VS Code will load the overwritten file.

**To change a color:**```json- To (re)create the variable-based template from the generated `Alloy.json`, run:

1. Edit the hex value in `light theme tokens.json` (and/or `dark theme tokens.json`)

2. Run `npm run build-theme`{

3. Reload VS Code

"theme": {```bash

### 3. `Alloy.json` & `Alloy.dark.json` — Generated Themes

Generated from the mapping + tokens by `npm run build-theme`. Do not edit directly. "primary": {node scripts/create-template.js

## How It Works "main": { "value": "#076ea8", "type": "color" }```

``````}

┌──────────────────┐        ┌─────────────────────┐

│ TOKEN_MAPPING.md │  +     │ light/dark tokens   │},That will write `Alloy.template.json` containing `var(--...)` references derived from known tokens.

│  (Style Keys)    │        │  (Hex Values)       │

└──────────────────┘        └─────────────────────┘"color": {

         │                           │

         └───────────┬───────────────┘    "text": {3. Reload VS Code (⌘R on macOS, Ctrl+Shift+F5 on Windows/Linux) or press `F5` in the extension development window.

                     │

                     ▼      "on-primary": { "value": "#ffffff", "type": "color" }

             npm run build-theme

                     │    }4. Open the Color Theme picker:

                     ▼

         ┌─────────────────────┐}

         │ Alloy.json          │

         │ Alloy.dark.json     │} - **macOS**: Command Palette → Preferences: Color Theme

         │ (Generated Themes)  │

         └─────────────────────┘`````- **Windows/Linux**: Ctrl+K Ctrl+T

                     │

                     ▼

            VS Code Loads Theme

```Edit this file to change color values.5. Select **Alloy** from the list.



## Project Structure



```## Workflow### For Distribution

.

├── Alloy.json                      # Generated light theme (hex colors)

├── Alloy.dark.json                 # Generated dark theme (hex colors)

├── light theme tokens.json         # Design tokens for light mode1. **Edit colors**: Modify hex values in `light theme tokens.json`Package the extension with `vsce`:

├── dark theme tokens.json          # Design tokens for dark mode

├── TOKEN_MAPPING.md                # Mapping of style keys to token paths2. **Map styles** (optional): Update `TOKEN_MAPPING.md` to add/change style mappings

├── scripts/

│   └── build.js                    # Build script (mapping + tokens → theme)3. **Build**: `npm run build-theme````bash

├── package.json                    # Extension manifest

├── LICENSE                         # MIT License4. **Reload**: Reload VS Code to see changesnpm install -g @vscode/vsce

├── CHANGELOG.md                    # Version history

└── README.md                       # This filevsce package

``````

The build script reads `TOKEN_MAPPING.md` and `light theme tokens.json` and generates `Alloy.json` (the theme VS Code loads).```

## Color Categories

### UI Colors (58 mappings)

- **Title Bar**: Active window title bar background## Project FilesThen install the generated `.vsix` file in VS Code.

- **Status Bar**: Bottom status bar

- **Activity Bar**: Left navigation bar (with active/inactive states)

- **Sidebar**: File explorer and sidebar

- **Editor**: Main code editor (background, foreground, selections, highlights)- `TOKEN_MAPPING.md` — Maps VS Code style keys to token paths (edit this to customize)## Project Structure

- **Gutter**: Line numbers, git decorations, code lens

- **Terminal**: Built-in terminal colors- `light theme tokens.json` — Color values organized by semantic category (edit values here)

### Syntax Token Colors (59 mappings)- `Alloy.json` — Generated theme file (do not edit; created by `npm run build-theme`)```

- **Comments**: Italicized green

- **Strings**: All quoted and interpolated strings- `scripts/build.js` — Build script (reads mapping + tokens → generates theme).

- **Keywords**: Control flow, operators, storage modifiers

- **Functions/Classes**: Function calls, class/interface names- `package.json` — Extension manifest├── Alloy.json # Generated theme (hex colors) — what VS Code loads

- **Types**: Type and enum declarations

- **Variables**: Variables, parameters, constants├── Alloy.template.json # Optional variable-based template (var(--...)) — edit this or tokens

- **Punctuation**: Separators, terminators, brackets

- **Markup**: Bold, italic, underline, headings, links## Contributing├── light theme tokens.json # Design token definitions

- **Invalid**: Error and deprecated syntax

├── package.json # Extension manifest

## Switching Themes

To add a new style or change a mapping:├── scripts/

Both light and dark themes are included in this single extension:

- **Light**: `Alloy (Light)` (uiTheme: "vs")│ └── build-theme.js # Build script that resolves tokens

- **Dark**: `Alloy (Dark)` (uiTheme: "vs-dark")

1. Add a row to `TOKEN_MAPPING.md` with the VS Code style key and token path├── TOKEN_MAPPING.md # Token-to-CSS-variable mapping reference

VS Code will automatically use your preferred theme based on your system settings.

2. Ensure the token path exists in `light theme tokens.json`└── README.md # This file

## Contributing

3. Run `npm run build-theme````

1. Fork or clone the repository

1. Make changes to tokens or mappings4. Test in VS Code

1. Run `npm run build-theme` to regenerate themes

1. Test in VS Code## How It Works

1. Submit a pull request or issue

## License

## License

### Token System

MIT License — © 2025 Braxton Coats

© 2025 Braxton Coats. All rights reserved.

See `LICENSE` file for details.

All colors are defined in `light theme tokens.json` following a hierarchical structure:

## Questions?

- **`theme.*`**: Primary theme colors (primary, secondary, tertiary, error, warning, success, surface, background)

- Check `TOKEN_MAPPING.md` for a detailed mapping reference- **`color.*`**: Named color groups (text, background, border, graphic, destructive)

- Review `light theme tokens.json` and `dark theme tokens.json` for the full design system

- Explore `Alloy.json` and `Alloy.dark.json` to see generated theme structure### Build Process

1. **Source / Template**: Option A — edit `Alloy.template.json` (recommended) which contains CSS variable references (e.g., `var(--theme-primary-main)`). Option B — edit `light theme tokens.json` directly.
2. **Build**: `npm run build-theme` reads `light theme tokens.json` and resolves variables, writing hex values into `Alloy.json` (overwriting it).
3. **VS Code**: The extension loads `Alloy.json` as the active theme (see `package.json`).

### Modifying the Theme

To update colors:

1. **Edit token values** in `light theme tokens.json`, or edit `Alloy.template.json` if you prefer the variable-based source:

   ```json
   {
     "theme": {
       "primary": {
         "main": {
           "value": "#38aff1", // Change this hex value
           "type": "color"
         }
       }
     }
   }
   ```

````

2. **Rebuild** the theme (resolves template/tokens into `Alloy.json`):

```bash
npm run build-theme
```

3. **Reload** VS Code to see changes.

### Token-to-Variable Mapping

See `TOKEN_MAPPING.md` for a complete reference of:

- All CSS variables used in `Alloy.json`
- Their corresponding token paths in `light theme tokens.json`
- Token values and purposes

## Color Categories

### UI Colors

- **Activity Bar**: Primary brand colors for navigation and state indicators
- **Sidebar**: Light background with primary accent foreground
- **Title/Status Bar**: White backgrounds for contrast
- **Editor**: Light background (#e5e5e5) with dark text
- **Terminal**: Matches editor background and foreground

### Syntax Highlighting

- **Comments**: Green (`#028663`, italic)
- **Strings**: Warm brown (`#B54E33`)
- **Keywords**: Purple (`#8B50B1`)
- **Functions/Types**: Primary blue (`#38aff1`)
- **Constants**: Brown (`#816810`)
- **Invalid**: Red (`#c43837`)

## Theme Type

- **`uiTheme`**: `vs` (light theme)
- **Supported VS Code versions**: ^1.50.0

## Contributing

To contribute improvements:

1. Modify token values in `light theme tokens.json`
2. Update `Alloy.json` if adding new UI color keys
3. Run `npm run build-theme`
4. Test the generated theme in VS Code
5. Submit changes or create an issue with feedback

## License

© 2025 Braxton Coats. All rights reserved.

---

**Questions?** Check `TOKEN_MAPPING.md` for detailed token mappings or review `light theme tokens.json` for the full design system.
````
