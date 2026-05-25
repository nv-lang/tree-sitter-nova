# tree-sitter-nova

Tree-sitter grammar for the [Nova programming language](https://github.com/nv-lang/nova).

**Status:** 🟡 in development (Plan 104.7).

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
```

## Editor integration

After v0.1.0 release:

- **Helix** — see `dist/helix/` for `languages.toml` snippet + queries.
- **Zed** — see `dist/zed/` for extension config.
- **Neovim** — see `dist/nvim/` for `nvim-treesitter` config.

(Editor packaging follow-up in [nv-lang/nova Plan 104.8](https://github.com/nv-lang/nova/blob/main/docs/plans/104-ide-integration.md).)

## License

MIT — see [LICENSE](LICENSE).
