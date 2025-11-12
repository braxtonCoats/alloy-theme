# Changelog

All notable changes to the Alloy Theme extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-12

### Added

- Initial release of Alloy Theme for VS Code
- Light theme variant (`Alloy (Light)`)
- Dark theme variant (`Alloy (Dark)`)
- Design-token-driven color system with TOKEN_MAPPING.md as single source of truth
- Comprehensive syntax highlighting for 59 textmate scopes:
  - Comments, strings, keywords, storage modifiers
  - Functions, classes, types, interfaces, enums, namespaces, tags
  - Variables (read/write, constants, parameters, language variables)
  - Punctuation (separators, terminators, brackets, string delimiters)
  - Markup (bold, italic, underline, headings, lists, quotes, links)
  - Meta (embedded code, function calls, tags)
  - Invalid/deprecated syntax
- 58 UI and editor color mappings:
  - Title bar, status bar, activity bar, sidebar
  - Editor background, gutter, line highlights, brackets
  - Selection, find match, hover highlights
  - Error, warning, info decorations
  - Terminal colors
- Automated build script (`npm run build-theme`) to regenerate themes from token definitions
- Support for both light and dark modes with intelligent token switching
