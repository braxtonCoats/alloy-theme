# Publishing Guide

This document explains how to publish the Alloy Theme extension to the VS Code Marketplace.

## Prerequisites

1. **VS Code Marketplace Account**

   - Create a Microsoft account at https://account.microsoft.com/
   - Go to https://marketplace.visualstudio.com/manage and sign in
   - Create a **Publisher** (if you don't have one)
   - Note your publisher ID (e.g., `braxton-coats`)

2. **Personal Access Token (PAT)**

   - Create a PAT at https://dev.azure.com
   - Scopes needed: **Marketplace > Manage**
   - Keep it secret and secure

3. **Install vsce**
   ```bash
   npm install -g @vscode/vsce
   # or use npx (no installation required)
   ```

## Step 1: Verify Your package.json

Ensure these fields are correct:

```json
{
  "name": "alloy-light-theme", // lowercase, unique under your publisher
  "displayName": "Alloy Theme", // user-friendly name
  "publisher": "braxton-coats", // your publisher ID
  "version": "1.0.0", // semantic versioning
  "license": "MIT",
  "icon": "icon.png" // 128x128 PNG image
}
```

## Step 2: Update Version (if republishing)

Marketplace requires a unique version for each publish. Edit `package.json`:

```json
"version": "1.0.1"  // Increment from previous version
```

Also update `CHANGELOG.md` with release notes.

## Step 3: Package the Extension

Create a `.vsix` file:

```bash
npx @vscode/vsce package
```

This generates `alloy-light-theme-1.0.0.vsix`.

## Step 4: Test Locally (Optional)

Install the packaged extension in VS Code before publishing:

```bash
code --install-extension alloy-light-theme-1.0.0.vsix
```

Test both light and dark themes:

1. Open VS Code
2. Open Color Theme picker (Ctrl+K Ctrl+T)
3. Select **Alloy (Light)** and **Alloy (Dark)**
4. Verify colors look correct

Uninstall when done testing:

```bash
code --uninstall-extension braxton-coats.alloy-light-theme
```

## Step 5: Publish to Marketplace

### Option A: Interactive Login (Recommended)

```bash
npx @vscode/vsce login braxton-coats
# Paste your PAT when prompted

npx @vscode/vsce publish
```

### Option B: Environment Variable

```bash
export VSCE_PAT="your-personal-access-token-here"
npx @vscode/vsce publish
```

Or for a one-time publish:

```bash
VSCE_PAT="your-token" npx @vscode/vsce publish
```

### Option C: Automatic Version Bump

Let vsce handle the version bump:

```bash
VSCE_PAT="your-token" npx @vscode/vsce publish patch
# or
VSCE_PAT="your-token" npx @vscode/vsce publish minor
VSCE_PAT="your-token" npx @vscode/vsce publish major
```

## Step 6: Verify Publishing

1. Visit https://marketplace.visualstudio.com/publishers/braxton-coats
2. Find "Alloy Theme" in your publisher's list
3. Check that the version matches your `package.json`
4. Install it via the marketplace to test

## Updating the Theme

To release a new version:

1. Make changes to tokens or mappings
2. Run `npm run build-theme` to regenerate theme files
3. Bump version in `package.json` and `CHANGELOG.md`
4. Commit and push to git (if using version control)
5. Run `npx @vscode/vsce publish patch` (or minor/major)

## Troubleshooting

### "Publisher not found"

- Verify you used the correct publisher ID (from marketplace.visualstudio.com/manage)
- Ensure you've created the publisher on the Marketplace

### "Invalid Personal Access Token"

- Check that the PAT is valid and has not expired
- Verify it has the "Marketplace > Manage" scope
- Try logging out and back in: `vsce logout; vsce login`

### "Version already exists"

- Marketplace doesn't allow republishing the same version
- Update version in `package.json` and try again

### "Icon not found"

- Ensure `icon.png` exists in the root directory
- Icon must be exactly 128×128 pixels
- Verify `package.json` references it correctly: `"icon": "icon.png"`

## Tips

- **Always test locally** before publishing to catch issues
- **Write clear release notes** in CHANGELOG.md
- **Keep semantic versioning**: patch (fixes), minor (features), major (breaking changes)
- **Monitor your extension** on the Marketplace after publishing for feedback
- **Link to GitHub** in README for users to report issues

## Resources

- [VS Code Extension Publishing Docs](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [vsce CLI Reference](https://github.com/microsoft/vscode-vsce)
- [Marketplace Terms](https://aka.ms/vscode-marketplace-tou)
