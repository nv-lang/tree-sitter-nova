; Nova tree-sitter locals — scope / symbol tracking.
; Used by editors for symbol resolution, rename, and go-to-definition.

; ─── Scopes ──────────────────────────────────────────────────────────────────

; Function declaration introduces a new scope
(fn_declaration) @local.scope

; Block expression introduces a new scope (for closures, if/match bodies, etc.)
(block) @local.scope

; for-loop body
(for_expr body: (block) @local.scope)

; ─── Definitions ─────────────────────────────────────────────────────────────

; Function name definition
(fn_declaration name: (identifier) @local.definition)

; Type name definition
(type_declaration name: (type_name) @local.definition)

; Generic type parameter definition
(generic_param name: (identifier) @local.definition)

; Const / top-level let / top-level ro
(const_declaration name: (identifier) @local.definition)
(let_declaration name: (identifier) @local.definition)
(ro_declaration name: (identifier) @local.definition)

; Local let binding / ro-mut-consume binding / scope-local const
(let_statement name: (identifier) @local.definition)
(binding_statement pattern: (identifier) @local.definition)
(const_statement name: (identifier) @local.definition)

; Function parameters
(param name: (identifier) @local.definition)

; For-loop binding
(for_expr pattern: (name_pattern name: (identifier) @local.definition))

; Imports: `import std.io as io` — alias becomes a local definition
(import_declaration alias: (identifier) @local.definition)

; ─── References ──────────────────────────────────────────────────────────────

; All bare identifiers are potential references
(identifier) @local.reference
