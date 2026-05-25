; Nova tree-sitter code-folding queries.
; Editors fold from the opening delimiter to the closing delimiter.

; Function bodies
(fn_declaration body: (fn_body (block) @fold))

; Type body variants
(record_type_body) @fold
(sum_type_body) @fold
(effect_type_body) @fold
(protocol_type_body) @fold

; Generic block expressions
(block) @fold

; Control-flow
(if_expr) @fold
(match_expr) @fold
(for_expr body: (block) @fold)
(while_expr body: (block) @fold)
(loop_expr body: (block) @fold)

; Concurrency blocks
(supervised_expr body: (block) @fold)
(parallel_expr body: (block) @fold)
(detach_expr body: (block) @fold)
(blocking_expr body: (block) @fold)
(with_expr body: (block) @fold)
(forbid_expr body: (block) @fold)
(realtime_expr body: (block) @fold)

; Multiline import
(import_declaration) @fold
