#!/usr/bin/env node

/**
 * Build Theme from Token Mapping
 * Reads TOKEN_MAPPING.md and light theme tokens.json
 * Generates Alloy.json based on the explicit mapping
 */

const fs = require("fs");
const path = require("path");

function getNestedValue(obj, path) {
  return path.split(".").reduce((cur, key) => cur?.[key], obj);
}

function parseMapping(markdownContent) {
  const mapping = {};
  const lines = markdownContent.split("\n");

  // Find the start of each section and parse tables
  let currentSection = null;
  for (const line of lines) {
    // Section headers like ## UI Colors
    if (line.startsWith("##") && !line.includes("Usage")) {
      currentSection = line.replace(/^#+\s*/, "").trim();
    }

    // Table rows: | VS Code Key | Token Path | Description |
    if (line.startsWith("|") && line.includes("|") && !line.includes("---")) {
      const parts = line
        .split("|")
        .map((p) => p.trim())
        .filter((p) => p);
      if (parts.length >= 2) {
        const styleKey = parts[0];
        const tokenPath = parts[1];
        // Skip header rows
        if (styleKey !== "VS Code Style Key" && tokenPath !== "Token Path") {
          mapping[styleKey] = tokenPath;
        }
      }
    }
  }

  return mapping;
}
{
}
function buildTheme() {
  const rootDir = path.join(__dirname, "..");
  const mappingPath = path.join(rootDir, "TOKEN_MAPPING.md");
  const lightTokensPath = path.join(rootDir, "light theme tokens.json");
  const darkTokensPath = path.join(rootDir, "dark theme tokens.json");

  console.log("🎨 Building Alloy theme(s) from TOKEN_MAPPING.md...\n");

  // Read mapping
  console.log(`📖 Reading mapping from: ${mappingPath}`);
  const mappingContent = fs.readFileSync(mappingPath, "utf-8");
  const styleToTokenMapping = parseMapping(mappingContent);

  // Helper to build a single theme from token file
  function buildFromTokens(tokensPath, outPath, themeName, themeType) {
    console.log(`📖 Reading tokens from: ${tokensPath}`);
    const tokens = JSON.parse(fs.readFileSync(tokensPath, "utf-8"));

    console.log("🔄 Resolving token values for each style key...");
    const colors = {};
    let resolvedCount = 0;
    let failedCount = 0;

    for (const [styleKey, tokenPath] of Object.entries(styleToTokenMapping)) {
      const tokenValue = getNestedValue(tokens, tokenPath);

      if (
        tokenValue &&
        typeof tokenValue === "object" &&
        "value" in tokenValue
      ) {
        const colorHex = tokenValue.value;
        colors[styleKey] = colorHex;
        resolvedCount++;
        console.log(`  ✓ ${styleKey} (${tokenPath}) → ${colorHex}`);
      } else {
        failedCount++;
        console.warn(`  ✗ ${styleKey}: token not found at ${tokenPath}`);
      }
    }

    // Build tokenColors from mapping
    // Map textmate scopes to token paths from the mapping
    const tokenColorMappings = {
      comment: {
        scopes: ["comment", "comment.block.documentation"],
        fontStyle: "italic",
      },
      "constant.numeric": { scopes: ["constant.numeric"] },
      "constant.language": { scopes: ["constant.language"] },
      "constant.character": { scopes: ["constant.character"] },
      "constant.other.symbol": { scopes: ["constant.other.symbol"] },
      string: { scopes: ["string"] },
      "string.quoted.single": { scopes: ["string.quoted.single"] },
      "string.quoted.double": { scopes: ["string.quoted.double"] },
      "string.quoted.triple": { scopes: ["string.quoted.triple"] },
      "string.regexp": { scopes: ["string.regexp"] },
      "string.interpolated": { scopes: ["string.interpolated"] },
      keyword: { scopes: ["keyword"] },
      "keyword.control": { scopes: ["keyword.control"] },
      "keyword.operator": { scopes: ["keyword.operator"] },
      storage: { scopes: ["storage"] },
      "storage.type": { scopes: ["storage.type"] },
      "storage.modifier": { scopes: ["storage.modifier"] },
      "entity.name.function": { scopes: ["entity.name.function"] },
      "entity.name.class": { scopes: ["entity.name.class"] },
      "entity.name.struct": { scopes: ["entity.name.struct"] },
      "entity.name.interface": { scopes: ["entity.name.interface"] },
      "entity.name.type": { scopes: ["entity.name.type"] },
      "entity.name.enum": { scopes: ["entity.name.enum"] },
      "entity.name.namespace": { scopes: ["entity.name.namespace"] },
      "entity.name.tag": { scopes: ["entity.name.tag"] },
      "entity.other.attribute-name": {
        scopes: ["entity.other.attribute-name"],
      },
      "entity.other.inherited-class": {
        scopes: ["entity.other.inherited-class"],
      },
      "support.function": { scopes: ["support.function"] },
      "support.class": { scopes: ["support.class"] },
      "support.type": { scopes: ["support.type"] },
      "support.constant": { scopes: ["support.constant"] },
      "support.other.variable": { scopes: ["support.other.variable"] },
      variable: { scopes: ["variable"] },
      "variable.other.readwrite": { scopes: ["variable.other.readwrite"] },
      "variable.other.constant": { scopes: ["variable.other.constant"] },
      "variable.parameter": { scopes: ["variable.parameter"] },
      "variable.language": { scopes: ["variable.language"] },
      punctuation: { scopes: ["punctuation"] },
      "punctuation.separator": { scopes: ["punctuation.separator"] },
      "punctuation.terminator": { scopes: ["punctuation.terminator"] },
      "punctuation.bracket": { scopes: ["punctuation.bracket"] },
      "punctuation.definition.string": {
        scopes: ["punctuation.definition.string"],
      },
      "markup.bold": { scopes: ["markup.bold", "strong"], fontStyle: "bold" },
      "markup.italic": {
        scopes: ["markup.italic", "emphasis"],
        fontStyle: "italic",
      },
      "markup.underline": {
        scopes: ["markup.underline"],
        fontStyle: "underline",
      },
      "markup.heading": { scopes: ["markup.heading"] },
      "markup.list": { scopes: ["markup.list"] },
      "markup.quote": { scopes: ["markup.quote"] },
      "markup.link": { scopes: ["markup.link"] },
      "markup.inline.raw": { scopes: ["markup.inline.raw"] },
      "markup.underline.link": { scopes: ["markup.underline.link"] },
      "meta.embedded": { scopes: ["meta.embedded"] },
      "meta.function-call": { scopes: ["meta.function-call"] },
      "meta.function.parameters": { scopes: ["meta.function.parameters"] },
      "meta.tag": { scopes: ["meta.tag"] },
      source: { scopes: ["source"] },
      invalid: { scopes: ["invalid"] },
      "invalid.illegal": { scopes: ["invalid.illegal"] },
      "invalid.deprecated": { scopes: ["invalid.deprecated"] },
    };

    const tokenColors = [];
    for (const [scopeKey, config] of Object.entries(tokenColorMappings)) {
      // Find the token path in the mapping
      const tokenPath = styleToTokenMapping[scopeKey];
      let foreground = null;

      if (tokenPath) {
        const tokenValue = getNestedValue(tokens, tokenPath);
        if (
          tokenValue &&
          typeof tokenValue === "object" &&
          "value" in tokenValue
        ) {
          foreground = tokenValue.value;
          console.log(
            `  ✓ tokenColor[${scopeKey}] (${tokenPath}) → ${foreground}`
          );
        } else {
          console.warn(
            `  ✗ tokenColor[${scopeKey}]: token not found at ${tokenPath}`
          );
        }
      }

      if (foreground) {
        const entry = {
          scope: config.scopes,
          settings: { foreground },
        };
        if (config.fontStyle) {
          entry.settings.fontStyle = config.fontStyle;
        }
        tokenColors.push(entry);
      }
    }

    // Build full theme JSON
    const theme = {
      $schema: "vscode://schemas/color-theme",
      name: themeName,
      type: themeType,
      colors,
      tokenColors,
    };

    console.log(`\n✍️  Writing theme to: ${outPath}`);
    fs.writeFileSync(outPath, JSON.stringify(theme, null, 2) + "\n");

    console.log(`\n✅ ${themeName} build complete!`);
    console.log(`   Resolved: ${resolvedCount} styles`);
    if (failedCount > 0) {
      console.log(`   ⚠️  Failed: ${failedCount} (see warnings above)`);
      // do not exit here; let caller decide. return failures.
    }

    return { resolved: resolvedCount, failed: failedCount };
  }

  const results = [];

  // Build light theme if tokens file exists
  if (fs.existsSync(lightTokensPath)) {
    const outLight = path.join(rootDir, "Alloy.json");
    const res = buildFromTokens(
      lightTokensPath,
      outLight,
      "Alloy (Light)",
      "light"
    );
    results.push({ file: outLight, ...res });
  } else {
    console.warn(`⚠️  Light tokens file not found: ${lightTokensPath}`);
  }

  // Build dark theme if tokens file exists
  if (fs.existsSync(darkTokensPath)) {
    const outDark = path.join(rootDir, "Alloy.dark.json");
    const res = buildFromTokens(
      darkTokensPath,
      outDark,
      "Alloy (Dark)",
      "dark"
    );
    results.push({ file: outDark, ...res });
  } else {
    console.log(
      `ℹ️  No dark tokens found at: ${darkTokensPath} — skipping dark theme generation.`
    );
  }

  // Summarize
  const totalResolved = results.reduce((s, r) => s + (r.resolved || 0), 0);
  const totalFailed = results.reduce((s, r) => s + (r.failed || 0), 0);

  console.log(
    `\n📦 Summary: Resolved total: ${totalResolved} styles across ${results.length} theme(s)`
  );
  if (totalFailed > 0) {
    console.log(`   ⚠️  Total failures: ${totalFailed}`);
    process.exit(1);
  }
  console.log("\nAll done.");
}

try {
  buildTheme();
} catch (error) {
  console.error("❌ Build failed:", error.message);
  process.exit(1);
}
