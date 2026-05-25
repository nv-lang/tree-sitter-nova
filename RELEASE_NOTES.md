# Release Notes — tree-sitter-nova

## v0.1.0 — Initial Release (2026-05-25)

First stable release of the Nova language tree-sitter grammar.

### Grammar Coverage

**Declarations**
- Module declarations (`module std.io`)
- Import declarations with aliases and selective imports
- Free functions and instance/static methods (`fn T @method`, `fn T .method`)
- Type declarations: record, sum (enum), alias
- Effect type declarations with method signatures
- Protocol type declarations with constraints
- Constants and top-level let bindings
- Test and lemma declarations

**Expressions** (full precedence tower)
- Logical: `&&`, `||`, `!`
- Bitwise: `&`, `|`, `^`, `<<`, `>>`
- Comparison: `==`, `!=`, `<`, `<=`, `>`, `>=`
- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Range: `..` (exclusive), `..=` (inclusive)
- Coalesce: `??`
- Unary: `-`, `!`, `not`
- Postfix: `?` (try), `!!` (bang unwrap)
- Cast: `as`, type check: `is`
- Field access, index, method calls (with trailing closure support)
- String interpolation (`"hello ${name}"`)
- Array literals, tuple expressions, record literals
- Block expressions, parenthesized expressions
- Closures (`fn(params) effects -> type body`)

**Control Flow**
- `if` / `else if` / `else`
- `match` with guards (`if` condition in match arms)
- `for` loop (with optional element type annotation)
- `while` and `while let`
- `loop` with `break`/`continue`
- `return`, `defer`, `errdefer`, `throw`

**Concurrency & Effects**
- `spawn`, `detach`, `blocking`, `parallel`, `supervised`
- `select` with optional `if` guards
- `with` effect handlers, `forbid`, `realtime`

**Type System**
- Named types with generic arguments (`Vec[T]`)
- Array types (`[T]`, `[T; N]`)
- Tuple types (`(A, B)`)
- Function types (`fn(A, B) -> C`)
- Protocol types (`#protocol`)
- Unit type `()`
- Effect annotations on function signatures

**Generics**
- Prefix generics on functions (`fn[T] id(x T) -> T`)
- Generic type parameters with protocol bounds
- Generic type declarations

**Patterns**
- Wildcard `_`
- Literal patterns (numbers, strings, booleans)
- Name patterns with destructuring (`Some(x)`, `Point { x, y }`)
- Tuple patterns
- Rest pattern `..`

### Query Files (5 files)

| File | Purpose |
|------|---------|
| `queries/highlights.scm` | Syntax highlighting (keywords, types, functions, variables, literals, operators) |
| `queries/locals.scm` | Symbol scopes, definitions, references (go-to-definition, rename) |
| `queries/folds.scm` | Code folding (blocks, type bodies, param lists) |
| `queries/indents.scm` | Indentation rules (Helix-compatible) |
| `queries/injections.scm` | Language injections (stub for V1) |

### Editor Integration

Integration snippets provided in `dist/`:
- `dist/helix/languages.toml` — Helix editor configuration
- `dist/zed/` — Zed extension scaffolding
- `dist/neovim/nova.lua` — nvim-treesitter parser registration

### Test Corpus

84 corpus fixtures across 5 files:
- `smoke.txt` (7) — basic declarations, functions, literals
- `declarations.txt` (13) — all declaration forms
- `expressions.txt` (20) — all expression types
- `control_flow.txt` (21) — control flow, concurrency, effects
- `edge_cases.txt` (23) — edge cases, operator precedence, type system

All 84 tests pass at 100%.

### Known Limitations

- Selective import syntax (`import std.io.{ File, Dir }`) may produce an ERROR node when the dotted path before `{` is ambiguous. Use `import std.io` and then `use` declarations as a workaround.
- LSP features (completion, hover) require a dedicated Nova language server (not part of this grammar).
