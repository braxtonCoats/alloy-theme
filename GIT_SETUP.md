# Git Setup & Remote Push Guide

Your local git repository is initialized and ready. Follow these steps to push to GitHub (or another platform).

## Option 1: GitHub (Recommended)

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Enter repository name: `alloy-theme`
3. Description: `A beautiful, design-token-driven VS Code theme with light and dark variants`
4. Choose visibility: **Public** (so others can find and install it)
5. **Do NOT** initialize with README, .gitignore, or LICENSE (you already have these)
6. Click **Create repository**

### Step 2: Add Remote and Push

After creating the repo, GitHub will show you setup commands. Copy the HTTPS URL and run:

```bash
cd /Users/bcoats-mbp3/.vscode/extensions/braxton-coats.alloy-light-theme-1.0.0

# Add remote (replace with your actual repo URL)
git remote add origin https://github.com/braxton-coats/alloy-theme.git

# Verify remote was added
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Verify on GitHub

Visit your repo URL: https://github.com/braxton-coats/alloy-theme

You should see:

- All your files committed
- README.md displayed on the main page
- License badge (MIT)
- Project description

## Option 2: GitLab

If you prefer GitLab:

```bash
git remote add origin https://gitlab.com/braxton-coats/alloy-theme.git
git push -u origin main
```

## Option 3: Other Platforms

For Gitea, Codeberg, or self-hosted git:

```bash
git remote add origin https://your-git-server.com/braxton-coats/alloy-theme.git
git push -u origin main
```

## Current Git Status

```bash
# View commits
git log --oneline

# View remote
git remote -v

# View branches
git branch -a
```

## Future Commits

After making changes (e.g., updating tokens, fixing bugs):

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

## Publishing Updates to Marketplace

When ready to publish a new version:

1. Update `package.json` version (e.g., `1.0.1`)
2. Update `CHANGELOG.md` with release notes
3. Run `npm run build-theme` to regenerate themes
4. Commit changes:
   ```bash
   git add -A
   git commit -m "Release v1.0.1: Description of changes"
   git tag v1.0.1
   git push origin main
   git push origin v1.0.1
   ```
5. Publish to Marketplace:
   ```bash
   npx @vscode/vsce publish
   ```

## Automating Publishing with GitHub Actions (Optional)

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to Marketplace
on:
  push:
    tags:
      - "v*"
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm install -g @vscode/vsce
      - run: vsce package
      - run: vsce publish
        env:
          VSCE_PAT: ${{ secrets.VSCE_PAT }}
```

Then set your PAT as a GitHub Secret and just tag a release to auto-publish.

## Tips

- **Keep commits atomic** — one feature/fix per commit
- **Write clear commit messages** — future you will thank you
- **Use semantic versioning** — patch (fixes), minor (features), major (breaking)
- **Tag releases** — `git tag v1.0.0` for easy version tracking
- **Keep main branch stable** — only merge tested, working code

## Need Help?

- GitHub Docs: https://docs.github.com/en
- Git Basics: https://git-scm.com/doc
- Semantic Versioning: https://semver.org
