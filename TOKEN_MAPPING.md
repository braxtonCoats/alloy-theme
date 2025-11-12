# Token Mapping

This file is the **source of truth** for mapping VS Code theme style keys to design tokens. Each row defines which token value populates which VS Code color setting.

**Format:** `VS Code Style Key | Token Path | Description`

## UI Colors

| VS Code Style Key               | Token Path            | Description                                |
| ------------------------------- | --------------------- | ------------------------------------------ |
| titleBar.activeBackground       | theme.primary.main    | Title bar background (white)               |
| statusBar.background            | theme.surface.main    | Status bar background (white)              |
| activityBar.background          | theme.surface.main    | Activity bar background (white)            |
| activityBar.activeBackground    | theme.primary.main    | Active activity bar icon/tab background    |
| activityBar.foreground          | color.text.on-primary | Activity bar foreground text               |
| activityBar.border              | theme.outline.main    | Activity bar border                        |
| activityBar.inactiveForeground  | theme.secondary.main  | Inactive activity bar foreground           |
| activityBarBadge.background     | theme.error.main      | Activity bar badge (notifications, counts) |
| sideBar.background              | theme.surface.main    | Sidebar background (white)                 |
| sideBar.foreground              | theme.primary.main    | Sidebar text/icon color                    |
| sideBar.border                  | theme.outline.main    | Sidebar border                             |
| sideBarSectionHeader.foreground | theme.primary.onMain  | Sidebar section header text                |
| sideBarSectionHeader.background | theme.primary.main    | Sidebar section header background          |
| sideBarTitle.background         | theme.surface.main    | Sidebar title background                   |
| sideBarActivityBarTop.border    | theme.outline.main    | Border between activity bar and sidebar    |

## Editor Colors

| VS Code Style Key                   | Token Path                       | Description                                                 |
| ----------------------------------- | -------------------------------- | ----------------------------------------------------------- |
| editor.background                   | theme.background.main            | Main editor canvas background                               |
| editor.foreground                   | theme.surface.onMain             | Default text color in editor                                |
| editor.lineHighlightBackground      | theme.primary.container          | Current line highlight background                           |
| editor.lineHighlightBorder          | theme.primary.containerVariant   | Current line highlight border                               |
| editorLineNumber.foreground         | theme.surface.onVariant          | Line number color in gutter                                 |
| editorCursor.foreground             | theme.primary.main               | Cursor/caret color                                          |
| editorWhitespace.foreground         | theme.outline.main               | Visible whitespace characters                               |
| editorIndentGuide.background1       | theme.outline.main               | Indent guide lines                                          |
| editor.selectionBackground          | theme.secondary.containerVariant | Selected text background                                    |
| editor.selectionHighlightBackground | theme.primary.containerVariant   | Highlighted selection background (50% opacity: append `66`) |
| editor.wordHighlightBackground      | theme.primary.containerVariant   | Word occurrence highlight (20% opacity: append `22`)        |

| editorCursor.background | theme.surface.variant | Background for the caret (when enabled) |
| editor.selectionForeground | theme.surface.onMain | Foreground for selected text |
| editor.inactiveSelectionBackground | theme.surface.variant | Background for inactive selections |
| editor.selectionHighlightBorder | theme.outline.main | Border for selection highlights |
| editor.findMatchBackground | theme.primary.containerVariant | Find match background |
| editor.findMatchHighlightBackground| theme.primary.container | Find match highlight |
| editor.findRangeHighlightBackground| theme.surface.variant | Find range highlight background |
| editor.hoverHighlightBackground | theme.surface.variant | Hover highlight background |
| editor.wordHighlightBorder | theme.outline.main | Border around word highlight |
| editor.wordHighlightStrongBackground| theme.primary.container | Strong word highlight background |
| editor.symbolHighlightBackground | theme.primary.containerVariant | Symbol highlight background |
| editorLineNumber.activeForeground | theme.primary.main | Active line number foreground |
| editorRuler.foreground | theme.outline.variant | Vertical ruler color |
| editorIndentGuide.activeBackground | theme.outline.primary | Active indent guide color |
| editorBracketMatch.background | theme.primary.containerVariant | Bracket match background |
| editorBracketMatch.border | theme.primary.main | Bracket match border |
| editorBracketHighlight.foreground | theme.primary.main | Bracket highlight (foreground) |
| editorOverviewRuler.border | theme.outline.variant | Border for the overview ruler |
| editorOverviewRuler.background | theme.surface.main | Background of the overview ruler area |
| editorError.foreground | theme.error.main | Color for editor error squiggles |
| editorWarning.foreground | theme.warning.main | Color for editor warning squiggles |
| editorInfo.foreground | theme.secondary.main | Color for editor info squiggles |
| editorGutter.background | theme.background.variant | Gutter area background |
| editorGutter.modifiedBackground | theme.primary.main | Modified line indicator (git) |
| editorGutter.addedBackground | theme.success.main | Added line indicator (git) |
| editorGutter.deletedBackground | theme.error.main | Deleted line indicator (git) |
| editorCodeLens.foreground | theme.primary.main | Code lens text color |
| editorGhostText.foreground | theme.surface.onVariant | Ghost text (inline suggestion) |
| editorLineHighlightForeground | theme.surface.onMain | Foreground for highlighted line text (if used) |
| editorSelectionBorder | theme.outline.main | Border around selection |
| editorCursor.background | theme.surface.variant | Cursor background (when enabled) |

## Gutter & Decorations

| VS Code Style Key               | Token Path               | Description                   |
| ------------------------------- | ------------------------ | ----------------------------- |
| editorGutter.background         | theme.background.variant | Gutter area background        |
| editorGutter.modifiedBackground | theme.primary.main       | Modified line indicator (git) |
| editorGutter.addedBackground    | theme.success.main       | Added line indicator (git)    |
| editorGutter.deletedBackground  | theme.error.main         | Deleted line indicator (git)  |
| editorCodeLens.foreground       | theme.primary.main       | Code lens text color          |

## Terminal Colors

| VS Code Style Key   | Token Path            | Description              |
| ------------------- | --------------------- | ------------------------ |
| terminal.background | theme.background.main | Terminal background      |
| terminal.foreground | theme.secondary.main  | Terminal foreground text |

## Syntax Token Colors

These mappings control the colors of code syntax elements (comments, strings, keywords, etc.) in the editor. Each scope maps to a token path for semantic coloring.

| Scope Name                    | Token Path              | Description                                 |
| ----------------------------- | ----------------------- | ------------------------------------------- |
| comment                       | theme.success.main      | Comments (italicized)                       |
| constant.numeric              | theme.tertiary.main     | Numeric literals                            |
| constant.language             | theme.tertiary.main     | Language constants (true, false, null, etc) |
| constant.character            | theme.error.onContainer | Character constants                         |
| constant.other.symbol         | theme.error.onContainer | Symbols and other constants                 |
| string                        | theme.error.main        | String literals                             |
| string.quoted.single          | theme.error.main        | Single-quoted strings                       |
| string.quoted.double          | theme.error.main        | Double-quoted strings                       |
| string.quoted.triple          | theme.error.main        | Triple-quoted strings                       |
| string.regexp                 | theme.warning.main      | Regular expressions                         |
| string.interpolated           | theme.error.main        | Interpolated strings                        |
| keyword                       | theme.tertiary.main     | Keywords                                    |
| keyword.control               | theme.tertiary.main     | Control keywords (if, for, while, etc)      |
| keyword.operator              | theme.tertiary.main     | Operator keywords                           |
| storage                       | theme.tertiary.main     | Storage keywords (var, let, const, etc)     |
| storage.type                  | theme.tertiary.main     | Storage type keywords (class, struct, etc)  |
| storage.modifier              | theme.tertiary.main     | Storage modifiers (public, private, static) |
| entity.name.function          | theme.primary.main      | Function names                              |
| entity.name.class             | theme.primary.main      | Class names                                 |
| entity.name.struct            | theme.primary.main      | Struct names                                |
| entity.name.interface         | theme.primary.main      | Interface names                             |
| entity.name.type              | theme.primary.main      | Type names                                  |
| entity.name.enum              | theme.primary.main      | Enum names                                  |
| entity.name.namespace         | theme.primary.main      | Namespace names                             |
| entity.name.tag               | theme.primary.main      | HTML/XML tag names                          |
| entity.other.attribute-name   | theme.secondary.main    | Attribute names                             |
| entity.other.inherited-class  | theme.primary.main      | Inherited class names                       |
| support.function              | theme.primary.main      | Built-in functions                          |
| support.class                 | theme.primary.main      | Built-in classes                            |
| support.type                  | theme.primary.main      | Built-in types                              |
| support.constant              | theme.tertiary.main     | Built-in constants                          |
| support.other.variable        | theme.secondary.main    | Built-in variables                          |
| variable                      | theme.surface.onMain    | Variables                                   |
| variable.other.readwrite      | theme.error.main        | Read/write variables                        |
| variable.other.constant       | theme.tertiary.main     | Constant variables                          |
| variable.parameter            | theme.surface.onMain    | Function parameters                         |
| variable.language             | theme.tertiary.main     | Language variables (this, self, etc)        |
| punctuation                   | theme.surface.onVariant | Punctuation                                 |
| punctuation.separator         | theme.surface.onVariant | Punctuation separators                      |
| punctuation.terminator        | theme.surface.onVariant | Punctuation terminators                     |
| punctuation.bracket           | theme.surface.onVariant | Brackets and braces                         |
| punctuation.definition.string | theme.surface.onVariant | String delimiters                           |
| markup.bold                   | theme.primary.main      | Bold markup (fontStyle: bold)               |
| markup.italic                 | theme.surface.onVariant | Italic markup (fontStyle: italic)           |
| markup.underline              | theme.primary.main      | Underlined markup (fontStyle: underline)    |
| markup.heading                | theme.primary.main      | Markdown headings                           |
| markup.list                   | theme.surface.onMain    | Markdown lists                              |
| markup.quote                  | theme.surface.onVariant | Markdown block quotes                       |
| markup.link                   | theme.primary.main      | Markdown links                              |
| markup.inline.raw             | theme.secondary.main    | Inline code                                 |
| markup.underline.link         | theme.primary.main      | Underlined links                            |
| meta.embedded                 | theme.warning.main      | Embedded languages                          |
| meta.function-call            | theme.primary.main      | Function calls                              |
| meta.function.parameters      | theme.surface.onMain    | Function parameters                         |
| meta.tag                      | theme.primary.main      | Tag metadata                                |
| source                        | theme.surface.onMain    | Source code                                 |
| invalid                       | theme.error.main        | Invalid/error tokens                        |
| invalid.illegal               | theme.error.main        | Illegal syntax                              |
| invalid.deprecated            | theme.warning.main      | Deprecated syntax                           |

## Usage

1. **Edit tokens**: Modify color values in `light theme tokens.json`.
2. **Map styles**: Update this file if adding new VS Code style keys or changing token assignments.
3. **Build**: Run `npm run build-theme` to generate `Alloy.json` from this mapping and `light theme tokens.json`.
4. **Test**: Reload VS Code to preview the generated theme.

The build script automatically:

- Reads this mapping file
- Looks up each token path in `light theme tokens.json`
- Resolves hex colors (with optional alpha suffix handling)
- Writes `Alloy.json` with the resolved theme
