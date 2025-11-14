# Pre-Launch Checklist

Use this checklist to ensure everything is ready before publishing to the marketplace.

## ✅ Local Development

- [x] Theme files created (`Alloy.json`, `Alloy.dark.json`)
- [x] Token files defined (`light theme tokens.json`, `dark theme tokens.json`)
- [x] Build script functional (`scripts/build.js`)
- [x] Theme tested locally in VS Code
- [x] Both light and dark variants work correctly

## ✅ Documentation

- [x] README.md written (marketplace description, features, installation)
- [x] CHANGELOG.md created (version 1.0.0 release notes)
- [x] LICENSE file present (MIT)
- [x] PUBLISHING.md guide created (step-by-step publishing instructions)
- [x] TOKEN_MAPPING.md complete (style-to-token mappings)
- [x] GIT_SETUP.md created (remote push instructions)

## ✅ Marketplace Metadata

- [x] `package.json` updated with:
  - [x] `name` (lowercase, unique: `alloy-light-theme`)
  - [x] `displayName` (user-friendly: `Alloy Theme`)
  - [x] `description` (marketplace listing)
  - [x] `publisher` (your publisher ID: `braxton-coats`)
  - [x] `version` (semantic: `1.0.0`)
  - [x] `license` (MIT)
  - [x] `author` (name and email)
  - [x] `repository` (GitHub URL)
  - [x] `bugs` (issue tracker URL)
  - [x] `homepage` (project page)
  - [x] `keywords` (theme, light, dark, design-tokens, etc.)
  - [x] `categories` (["Themes"])
  - [x] `icon` (icon.png reference)

## ✅ Extension Package

- [x] Icon created (128x128 PNG)
- [x] .gitignore configured
- [x] .vscodeignore configured
- [x] .vsix package created and tested
- [x] Package size reasonable (< 50 MB)

## ✅ Git Repository

- [x] Git initialized locally
- [x] All files committed
- [x] Initial commit with descriptive message
- [x] Ready to push to GitHub

## 📋 Before Publishing to Marketplace

### Step 1: Push to GitHub

```bash
# Create repo at https://github.com/new
git remote add origin https://github.com/YOUR-USERNAME/alloy-theme.git
git push -u origin main
```

### Step 2: Create Marketplace Publisher

- [ ] Go to https://marketplace.visualstudio.com/manage
- [ ] Sign in with Microsoft account
- [ ] Create publisher (if needed)
- [ ] Note your publisher ID

### Step 3: Generate Personal Access Token

- [ ] Go to https://dev.azure.com
- [ ] Create new Personal Access Token
- [ ] Scope: Marketplace > Manage
- [ ] Copy token (keep it secret!)

### Step 4: Verify package.json

- [ ] Publisher ID matches marketplace publisher
- [ ] Version is `1.0.0` (first publish)
- [ ] All required fields present

### Step 5: Publish to Marketplace

```bash
export VSCE_PAT="your-token-here"
npx @vscode/vsce publish
```

### Step 6: Verify on Marketplace

- [ ] Theme appears in marketplace
- [ ] Correct version (1.0.0)
- [ ] Correct publisher name
- [ ] Description and icon display correctly
- [ ] README rendered properly

## 📊 Update Checklist (For Future Versions)

When publishing version 1.0.1, 1.1.0, etc.:

- [ ] Bump version in `package.json`
- [ ] Update `CHANGELOG.md` with release notes
- [ ] Run `npm run build-theme` if token changes made
- [ ] Test locally
- [ ] Commit with message: `Release v1.0.1: Description`
- [ ] Tag commit: `git tag v1.0.1`
- [ ] Push: `git push origin main --tags`
- [ ] Publish: `npx @vscode/vsce publish`

## 🐛 Troubleshooting

### "Publisher not found"

- Verify publisher ID in marketplace.visualstudio.com/manage
- Ensure `package.json` uses correct publisher ID

### "Invalid Personal Access Token"

- Check token hasn't expired (valid for 1 year by default)
- Verify token has "Marketplace > Manage" scope
- Try creating a new token

### "Version already exists"

- Marketplace doesn't allow republishing same version
- Bump version and try again

### "Icon not found"

- Verify `icon.png` exists in root directory
- Icon must be exactly 128×128 pixels
- Ensure `package.json` references it: `"icon": "icon.png"`

### "README not rendering"

- Check file is named `README.md` (case-sensitive on some systems)
- Verify markdown syntax is valid
- Preview locally: `cat README.md | wc -l`

## 🎯 Success Criteria

Theme is successfully published when:

- ✅ Theme appears in VS Code Marketplace search
- ✅ Installation from Extensions panel works
- ✅ Both light and dark variants load correctly
- ✅ All 234 color mappings render properly
- ✅ Syntax highlighting works across all mapped scopes
- ✅ README and icon display in marketplace listing
- ✅ Users can rate and review the theme

---

**Need help?** See:

- `PUBLISHING.md` — Publishing guide
- `GIT_SETUP.md` — Git remote setup
- `README.md` — Theme documentation
