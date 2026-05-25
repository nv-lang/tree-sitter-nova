; Nova tree-sitter indentation queries.
; Follows the tree-sitter indentation format used by editors like Helix.

; ─── Indent after opening delimiters ────────────────────────────────────────

; Opening brace (block, type body)
[
  (block)
  (record_type_body)
  (effect_type_body)
  (protocol_type_body)
  (match_expr)
  (select_expr)
] @indent

; ─── Dedent before closing delimiters ───────────────────────────────────────

"}" @dedent

; ─── Continuation indent ─────────────────────────────────────────────────────

; Parameters / arguments
(param_list) @indent
")" @dedent

; Generic params
(generic_params) @indent
(generic_type_args) @indent

; ─── Expression continuation ─────────────────────────────────────────────────

; Arrow in function body (continuation)
"=>" @indent
