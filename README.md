# tree-sitter-nova

Tree-sitter grammar for the [Nova programming language](https://github.com/nv-lang/nova).

**Status:** ✅ v0.1.0 — stable, 84 corpus fixtures (100% pass).

## Features

- Full grammar coverage: expressions, types, declarations, control flow, concurrency, effects, generics
- 5 query files: `highlights`, `locals`, `folds`, `indents`, `injections`
- 84 corpus test fixtures, 100% pass rate
- Editor integration snippets for Helix, Zed, and Neovim

## Install

### Requirements

- Node.js ≥18
- [tree-sitter-cli](https://github.com/tree-sitter/tree-sitter/tree/master/cli)

### Build from source

```bash
git clone https://github.com/nv-lang/tree-sitter-nova.git
cd tree-sitter-nova
npm install
npx tree-sitter generate
npx tree-sitter test
# → 84/84 passed (100%)
```

### Verify highlighting

```bash
npx tree-sitter highlight path/to/file.nv
```

## Editor integration

### Helix

Copy `dist/helix/languages.toml` contents to your `~/.config/helix/languages.toml`.

Then build the grammar:
```bash
hx --grammar build
```

### Neovim (nvim-treesitter)

Source or require `dist/neovim/nova.lua` in your Neovim config, then:
```
:TSInstall nova
```

### Zed

Use the scaffolding in `dist/zed/` as a starting point for a Zed extension.
See the [Zed extension docs](https://zed.dev/docs/extensions/languages) for packaging.

## Grammar overview

| Category | Constructs |
|----------|-----------|
| Declarations | `fn`, `type` (record/sum/alias), `effect`, `protocol`, `const`, `let`, `test`, `lemma` |
| Expressions | Full binary/unary precedence tower, `match`, `if`, loops, closures, `spawn`/`blocking`/`parallel` |
| Concurrency | `spawn`, `detach`, `blocking`, `parallel`, `supervised`, `select` |
| Effect system | `with`, `forbid`, `realtime`, effect annotations |
| Type system | Named, array, tuple, function, protocol, generics |
| Patterns | Wildcard, literal, name/destructure, tuple, rest |

## Release Notes

See [RELEASE_NOTES.md](RELEASE_NOTES.md) for the full v0.1.0 changelog.

## License

MIT — see [LICENSE](LICENSE).
