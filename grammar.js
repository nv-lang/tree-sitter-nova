/**
 * @file Tree-sitter grammar for Nova
 * @author Evgeniy Golovin <unitcraft@nv-lang.org>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

// РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚
// Helpers
// РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚

/** one or more `rule` separated by `sep_tok`, NO trailing separator */
function sep1(rule, sep_tok) {
  return seq(rule, repeat(seq(sep_tok, rule)));
}

/** zero or more `rule` separated by `sep_tok` */
function sep(rule, sep_tok) {
  return optional(sep1(rule, sep_tok));
}

/** sep1 with optional trailing `sep_tok` */
function sep1Trail(rule, sep_tok) {
  return seq(sep1(rule, sep_tok), optional(sep_tok));
}

/** zero or more `rule` separated by `sep_tok`, optional trailing */
function sepTrail(rule, sep_tok) {
  return optional(sep1Trail(rule, sep_tok));
}

// РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚
// Keywords (source-of-truth: compiler-codegen/src/lexer/mod.rs:594-651)
// РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚

const KEYWORDS = [
  'module', 'import', 'use', 'export', 'external',
  'fn', 'type', 'effect', 'alias', 'enum', 'protocol',
  'let', 'const', 'ro', 'mut', 'consume', 'priv', 'pub',
  'if', 'else', 'match', 'for', 'while', 'loop', 'in',
  'return', 'break', 'continue',
  'test',
  'true', 'false',
  'with', 'throw', 'as', 'is',
  'spawn', 'supervised', 'parallel', 'detach', 'blocking',
  'interrupt', 'forbid', 'realtime',
  'defer', 'errdefer',
  'select', 'lemma',
];

// РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚
// Operator precedence (mirrors compiler-codegen parse_expr Pratt levels)
// РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚

const PREC = {
  implies:        1,   // ==>  <==>
  or:             2,   // ||  or
  and:            3,   // &&  and
  equality:       4,   // ==  !=
  comparison:     5,   // <  <=  >  >=
  bitor:          6,   // |
  bitxor:         7,   // ^
  bitand:         8,   // &
  shift:          9,   // <<  >>
  range:         10,   // ..  ..=
  additive:      11,   // +  -
  multiplicative:12,   // *  /  %
  unary:         13,   // -  !  not
  coalesce:      14,   // ??
  postfix:       15,   // .  []  ()  ?  !!  as  is
};

// РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚
// Grammar
// РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚РІвЂќР‚

module.exports = grammar({
  name: 'nova',

  extras: $ => [
    /\s/,
    $.doc_comment,
    $.line_comment,
    $.block_comment,
  ],

  word: $ => $.identifier,

  conflicts: $ => [
    // Record literal `TypeName { ... }` vs block `{ ... }` РІР‚вЂќ GLR resolves
    // by looking at field_init content (ident ':' vs statements).
    [$.block, $.record_literal],
    [$._expression, $.record_literal],
    [$.block, $.anon_record_literal],
    [$._expression, $.anon_record_literal],
    [$._expression, $.field_init],
    [$._expression, $.pattern_field, $.field_init],
    [$.block, $.record_destructure_pattern, $.anon_record_literal],
    [$.array_pattern, $.array_literal],
    [$.array_type, $.array_pattern],
    // `dotted_path`'s own reduce-vs-extend choice — needed to resolve
    // `import a.b.c.{d, e}` (the trailing `.{ ... }` needs `dotted_path` to
    // be able to reduce at `c` instead of always shifting the next `.`).
    [$.dotted_path],
    [$.named_type, $.name_pattern],
    [$.fixed_array_type, $.literal_pattern],
    [$.block, $.name_pattern],
    [$._expression, $.name_pattern, $.record_literal],
    [$.name_pattern, $.record_literal],
    // Free fn name with generics vs method receiver with generics.
    [$.fn_declaration],
    // `type_declaration` has optional body; `fn`/`type`/... could start body
    // (newtype_body = fn_type) or be the next top-level item.
    [$.type_declaration],
    // `named_type` optional `[T]` vs index_expr `[expr]`
    [$.named_type],
    // `protocol_type` (in type_expr) vs `protocol_type_body` (in type_decl body)
    [$.protocol_type, $.protocol_type_body],
    // `effect_type_body` vs `effect` expression
    [$.effect_type_body, $.named_type],
    // `effect_method` optional effects + optional return type
    [$.effect_method],
    // `fn_type` optional effects + optional return type
    [$.fn_type],
    // `generic_type_args` `[T]` vs `index_expr` `[expr]` in postfix position.
    [$.generic_type_args, $.index_expr],
    // Effect-list identifiers before `->` vs return type path.
    [$.effect_list, $.named_type],
    // `for_expr` optional elem_type between pattern and `in` keyword.
    [$.for_expr],
    // `while_expr` optional condition vs `while let` form.
    [$.while_expr],
    // `item_attribute` optional `(args)` — GLR resolves empty vs non-empty args.
    [$.item_attribute],
    // `array_type` used as expr-primary (`[]T.new()`) vs `array_literal` (`[]`)
    // — both start with `[]`.
    [$.array_type, $.array_literal],
    // `if_expr`/`while_expr` optional pattern-bind condition vs plain expr.
    [$.if_expr],
    // `if`/`while` pattern-bind condition (`if Pat = expr`) vs plain boolean
    // expr condition (`if call(x) { }`) — both can start `IDENT(...)`; GLR
    // forks and resolves once it sees `=` vs `{` after the parenthesized part.
    [$._expression, $.name_pattern],
    // `sum_variant` optional `= discriminant` vs an enclosing `= value` that
    // follows an inline `enum ...` type-expr (e.g. `ro x enum A | B = value`).
    [$.sum_variant],
    // `if`/`while` record-destructure cond-pattern `{ name }` vs a bare block
    // `{ name }` (identifier as expression-statement) — both start with `{`.
    [$.block, $.record_destructure_pattern],
    [$._expression, $.pattern_field],
    [$._expression, $.literal_pattern],
    [$._expression, $.tuple_pattern],
    // `for mut x in ...` — outer `for`-level `mut` vs name_pattern's own
    // leading `mut` (added for D34/D184 unification) — same token either way.
    [$.name_pattern],
    // `enum_type` — variant-list `|`-continuation vs discriminant `=` shift/reduce.
    [$.enum_type],
    // `if TypeName { field, ... } = expr` cond-pattern (constructor/record
    // destructure via name_pattern) vs `TypeName { field: v }` record_literal
    // used as a plain boolean condition — both start `IDENT '{' IDENT`.
    [$.field_init, $.pattern_field],
    // `spawn consume c { body }` — dedicated spawn_expr consume-alternative
    // vs the generic `spawn <expr>` fallback where <expr> = consume_scope_expr.
    [$.consume_scope_expr, $.spawn_expr],
    [$.consume_scope_expr, $.detach_expr],
    // `consume x = expr { body }` scope-block vs a raw `consume x = expr`
    // binding_statement immediately followed by an unrelated block statement
    // — D188 resolves greedily in favor of the scope-block (see prec.dynamic
    // on consume_scope_expr above).
    [$.consume_scope_expr, $.binding_statement],
  ],

  rules: {

    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’
    // Source file
    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’

    source_file: $ => seq(
      optional($.module_declaration),
      repeat(choice(
        $.import_declaration,
        $._item,
      )),
    ),

    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’
    // Module declaration
    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’

    module_declaration: $ => seq(
      'module',
      field('path', $.dotted_path),
    ),

    // Explicit right-recursion (not the `repeat()` primitive) so each step
    // is a genuine reduce-vs-extend CHOICE that GLR can fork on — needed to
    // resolve `import a.b.c.{d, e}`: after `c`, the parser must be able to
    // reduce `dotted_path` here (letting import_declaration's own trailing
    // `.{ ... }` claim the last `.`) as an alternative to shifting `.` to
    // extend the path further, which `repeat()`'s 1-token-lookahead loop
    // could not fork on (it saw `.` and always shifted, then dead-ended on
    // `{` instead of an identifier).
    dotted_path: $ => choice(
      $.identifier,
      seq($.identifier, '.', $.dotted_path),
    ),

    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’
    // Import / use
    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’

    import_declaration: $ => seq(
      optional('export'),
      choice('import', 'use'),
      optional(field('anchor', $.import_anchor)),
      field('path', $.dotted_path),
      optional(seq(
        '.',
        '{',
        sep1($.import_item, ','),
        optional(','),
        '}',
      )),
      optional(seq('as', field('alias', $.identifier))),
    ),

    import_anchor: $ => token(choice('./', '../', '../../', '../../../')),

    import_item: $ => seq(
      field('name', $.identifier),
      optional(seq('as', field('alias', $.identifier))),
    ),

    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’
    // Top-level items
    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’

    _item: $ => choice(
      $.fn_declaration,
      $.type_declaration,
      $.const_declaration,
      $.let_declaration,
      $.ro_declaration,
      $.test_declaration,
      $.lemma_declaration,
    ),

    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’
    // Function declaration
    // Covers: free fn, instance method (fn T @m), static method (fn T .m),
    //         with optional prefix-generics `fn[T]`, modifiers export/external,
    //         effects, return type, contracts (added Р В¤.3).
    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’

    fn_declaration: $ => seq(
      optional('export'),
      // `extern "ABI" fn` (D282/D353) is the dominant real form — confirmed
      // pervasively: std/src/fs/ffi.nv (`extern "C" fn ...`), std/src/prelude/
      // concurrency.nv (`export extern "nova" fn ...`). Bare `external` has
      // ~zero live hits but is kept for backward compat.
      optional(choice('external', seq('extern', field('abi', $.string_literal)))),
      optional($.item_attribute),        // #realtime / #pure / #verify / etc.
      'fn',
      optional(field('prefix_generics', $.generic_params)), // fn[T] prefix
      $._fn_signature_head,
      field('params', $.param_list),
      optional(field('effects', $.effect_list)),
      optional(seq('->', field('return_type', $._type_expr))),
      optional(field('body', $.fn_body)),
    ),

    // Head: either `name [generics]` (free fn) or `ReceiverType [generics]
    //              [mut|consume] (@|.) method_name [method_generics]` (method).
    _fn_signature_head: $ => choice(
      // Free function: name + optional generic decl params
      seq(
        field('name', $.identifier),
        optional(field('generics', $.generic_params)),
      ),
      // Method: receiver type + optional receiver generics + qualifier + @/. + name
      seq(
        field('receiver_type', alias($.identifier, $.type_name)),
        optional(field('receiver_generics', $.generic_params)),
        optional(field('receiver_qualifier', choice('mut', 'consume'))),
        field('method_kind', choice('@', '.')),
        field('name', $.identifier),
        optional(field('method_generics', $.generic_params)),
      ),
      // Slice receiver: []T @method (e.g. fn []T @push)
      seq(
        '[', ']',
        field('receiver_elem', $._type_expr),
        optional(field('receiver_qualifier', choice('mut', 'consume'))),
        field('method_kind', choice('@', '.')),
        field('name', $.identifier),
        optional(field('method_generics', $.generic_params)),
      ),
    ),

    // Generic declaration params: [T], [T Bound], [T A + B], [T = Default]
    generic_params: $ => seq(
      '[',
      sep1($.generic_param, ','),
      optional(','),
      ']',
    ),

    generic_param: $ => seq(
      field('name', $.identifier),
      optional(field('bounds', $.generic_bounds)),
      optional(seq('=', field('default', $._type_expr))),
    ),

    generic_bounds: $ => sep1($._type_expr, '+'),

    // Parameter list: (param, param, ...)
    param_list: $ => seq(
      '(',
      sepTrail($.param, ','),
      ')',
    ),

    param: $ => seq(
      optional('...'),          // variadic prefix
      // ownership: consume (D131/D133) XOR mutability: mut (D176) — mutually
      // exclusive on one binding (D209 receiver; neg_consume_scope_mut_binding.nv
      // for the analogous scope-binding). Bare `ro` alone on a param is redundant
      // (E_REDUNDANT_PARAM_RO, d246_redundant_param_ro_prefix_neg.nv) but the
      // combination `ro x mut T` (ro-binding + explicit mut content-view) is
      // legal and required (pos: spec_tests/conformance/d246_param_ro_mut_view.nv)
      // — the parser stays permissive here; redundancy is a checker-level call.
      optional(choice('consume', 'mut', 'ro')),
      field('name', $.identifier),
      optional(choice('ro', 'mut')),  // L2 content-modifier prefix on type (D246)
      field('type', $._type_expr),
      optional(seq('=', field('default', $._expression))),
    ),

    // Effects: unqualified type identifiers between `)` and `->`, e.g. `Io Error`
    // prec.right: prefer shifting identifiers (greedy) over reducing effect_list early
    effect_list: $ => prec.right(1, repeat1(
      alias($.identifier, $.effect_name),
    )),

    // Function body: `=> expr` or `{ block }`
    fn_body: $ => choice(
      seq('=>', field('expr', $._expression)),
      field('block', $.block),
    ),

    // Item attributes: #realtime, #pure, #verify, #unverified, #trusted, etc.
    item_attribute: $ => seq(
      '#',
      field('name', $.identifier),
      optional(seq(
        '(',
        field('args', sep($._expression, ',')),
        ')',
      )),
    ),

    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’
    // Type declaration
    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’

    // Canonical modifier order (D241/D52 amend Ф.2): `value` -> `consume` ->
    // `priv` (allocation -> ownership -> visibility). `value` is a real,
    // confirmed kind-token — stack-allocated value record (D228):
    // `export type ChanTx[T] value { priv ch Chan[T] }` (std/src/concurrency/nvchan.nv).
    type_declaration: $ => seq(
      optional('export'),
      optional('external'),
      'type',
      field('name', alias($.identifier, $.type_name)),
      optional(field('generics', $.generic_params)),
      optional('value'),         // D228 value-record marker (contextual in the
                                 // real compiler; reserved globally here — no
                                 // scanner to make it position-sensitive)
      optional('consume'),      // consume-type marker
      optional('priv'),         // type-level default-priv flip (D220/D281)
      optional($._type_body),
    ),

    // `enum_type` is not listed directly — it is a member of `_type_expr`,
    // so `type X enum A | B` already reaches it via `newtype_body` = `_type_expr`.
    _type_body: $ => choice(
      $.record_type_body,
      $.alias_type_body,
      $.effect_type_body,
      $.protocol_type_body,
      $.legacy_sum_type_body,
      $.newtype_body,
    ),

    // Pre-D406 sum-type form: leading `|`, no `enum` marker (D52, retracted
    // by D406 but real code isn't fully migrated yet — e.g.
    // examples/getting_started.nv:38 `type Discount \n | None_ | Flat(int) ...`,
    // examples/basics/match_demo.nv, examples/ffi/sqlite_mini.nv). Kept for
    // backward-compat parsing, same as `let`.
    legacy_sum_type_body: $ => repeat1(seq('|', $.sum_variant)),

    // Record type: { field Type, field Type }
    record_type_body: $ => seq(
      '{',
      repeat(choice($.record_field, $.record_const_field)),
      '}',
    ),

    record_field: $ => seq(
      optional(choice('priv', 'pub')),           // D220 per-field visibility
      optional(choice('mut', 'ro', 'consume')),   // D184: binding modifier (readonly retracted -> ro)
      optional(seq('use', field('embed_alias', $.identifier))),
      field('name', $.identifier),
      optional(choice('ro', 'mut')),  // L2 content-modifier prefix on type (D246)
      field('type', $._type_expr),
      optional(','),
    ),

    // Associated const inside record body: `const NAME T = expr` (D184 Ф.10)
    record_const_field: $ => seq(
      optional('export'),
      'const',
      field('name', $.identifier),
      field('type', $._type_expr),
      '=',
      field('value', $._expression),
    ),

    // Sum type: `enum` marker (D406) — `enum A | B | C` (inline, no leading |)
    // or `enum | A | B` (multiline, leading | on every variant incl. first).
    // Used both as `type X enum ...` body and standalone as a type-expr
    // (anonymous/inline enum, e.g. a param/return/field type) — same rule.
    enum_type: $ => seq(
      'enum',
      optional('|'),
      sep1($.sum_variant, '|'),
    ),

    // NOTE: no leading `|` here — `enum_type` owns all `|` placement (both
    // the inline form's separators and the multiline form's per-variant
    // leading `|`, including the first), so a bare variant name is enough.
    sum_variant: $ => seq(
      field('name', alias($.identifier, $.type_name)),
      optional(choice(
        seq('(', sep1($._type_expr, ','), ')'),   // tuple variant
        $.record_type_body,                       // record variant
      )),
      optional(seq('=', $.number_literal)),       // discriminant
    ),

    // Alias type: alias SomeType
    alias_type_body: $ => seq('alias', field('type', $._type_expr)),

    // Effect type: effect { method_sigs }
    effect_type_body: $ => seq(
      'effect',
      '{',
      repeat($.effect_method),
      '}',
    ),

    // Protocol type: protocol { method_sigs }
    protocol_type_body: $ => seq(
      'protocol',
      '{',
      repeat($.effect_method),
      '}',
    ),

    // Method signature inside effect/protocol body.
    // prec.right: prefer consuming effect identifiers greedily
    effect_method: $ => prec.right(seq(
      // Magic/operator protocol methods keep their `@` (mirrors instance-method
      // call form): `@display(mut f Fmt) -> ()`, `@eq(other Self) -> bool`
      // (std/prelude/protocols.nv). Plain effect/protocol methods stay bare:
      // `read_in(buf mut []u8) -> Result[int, IoError]` (std/src/io/console.nv).
      optional('@'),
      field('name', $.identifier),
      optional(field('generics', $.generic_params)),
      field('params', $.param_list),
      optional(field('effects', $.effect_list)),
      optional(seq('->', field('return_type', $._type_expr))),
    )),

    // Newtype: just a type expression (e.g. `type Meters int`)
    newtype_body: $ => prec(-1, $._type_expr),

    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’
    // Const declaration
    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’

    const_declaration: $ => seq(
      optional('export'),
      'const',
      field('name', $.identifier),
      field('type', $._type_expr),
      '=',
      field('value', $._expression),
    ),

    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’
    // Let declaration (top-level and local)
    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’

    let_declaration: $ => seq(
      'let',
      optional('mut'),
      field('name', $.identifier),
      optional(field('type', $._type_expr)),
      '=',
      field('value', $._expression),
    ),

    // ro NAME [Type] = expr — module-level binding (D184; replaces `let` host
    // for non-constexpr lazy-init). `mut`/`consume` are checker-rejected at
    // module level (E_MUT_AT_MODULE_LEVEL / E_CONSUME_AT_MODULE_LEVEL) —
    // only `ro` is a legal module-level binding keyword.
    ro_declaration: $ => seq(
      optional('export'),
      'ro',
      field('name', $.identifier),
      optional(field('type', $._type_expr)),
      '=',
      field('value', $._expression),
    ),

    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’
    // Test declaration
    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’

    test_declaration: $ => seq(
      'test',
      field('name', $.string_literal),
      field('body', $.block),
    ),

    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’
    // Lemma declaration (Plan 33.5)
    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’

    lemma_declaration: $ => seq(
      'lemma',
      field('name', $.identifier),
      field('params', $.param_list),
      field('body', $.block),
    ),

    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’
    // Type expressions
    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’

    _type_expr: $ => choice(
      $.array_type,
      $.fixed_array_type,
      $.unit_type,
      $.tuple_type,
      $.fn_type,
      $.named_type,
      $.protocol_type,
      $.enum_type,
      $.pointer_type,
      $.self_return_type,
    ),

    // `-> @` — fluent self-return type marker (D409): `fn T mut @m() -> @ { ... }`.
    self_return_type: _ => '@',

    // *T (ro pointee, canon) / *mut T / *uninit T — D246 L3 pointee-capability.
    pointer_type: $ => prec.right(seq(
      '*',
      optional(choice('mut', alias('uninit', $.keyword))),
      field('pointee', $._type_expr),
    )),

    // []T
    array_type: $ => seq('[', ']', field('elem', $._type_expr)),

    // [N]T
    fixed_array_type: $ => seq(
      '[', field('len', $.number_literal), ']', field('elem', $._type_expr),
    ),

    // ()
    unit_type: $ => seq('(', ')'),

    // (T1, T2, ...) РІР‚вЂќ requires at least 2 to distinguish from paren type
    tuple_type: $ => seq(
      '(',
      $._type_expr,
      ',',
      sep1($._type_expr, ','),
      optional(','),
      ')',
    ),

    // fn(T1, T2) Effects -> R
    // prec.right: greedily consume effect identifiers before `->`
    fn_type: $ => prec.right(seq(
      'fn',
      '(',
      sepTrail($._type_expr, ','),
      ')',
      optional(field('effects', $.effect_list)),
      optional(seq('->', field('return_type', $._type_expr))),
    )),

    // TypeName or TypeName[T, U] РІР‚вЂќ unqualified in V1
    // prec.right: prefer shifting '[' as type_args over reducing named_type
    named_type: $ => prec.right(seq(
      field('name', alias($.identifier, $.type_name)),
      optional(field('type_args', $.generic_type_args)),
    )),

    // [T, U] in type instantiation position
    generic_type_args: $ => seq(
      '[',
      sep1($._type_expr, ','),
      optional(','),
      ']',
    ),

    // protocol { method sigs } РІР‚вЂќ anonymous protocol type
    protocol_type: $ => seq(
      'protocol',
      '{',
      repeat($.effect_method),
      '}',
    ),

    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’
    // Expressions
    // Full Pratt hierarchy: implies РІвЂ вЂ™ or РІвЂ вЂ™ and РІвЂ вЂ™ eq РІвЂ вЂ™ cmp РІвЂ вЂ™ bitor РІвЂ вЂ™ bitxor
    //                      РІвЂ вЂ™ bitand РІвЂ вЂ™ shift РІвЂ вЂ™ range РІвЂ вЂ™ add РІвЂ вЂ™ mul РІвЂ вЂ™ unary
    //                      РІвЂ вЂ™ postfix РІвЂ вЂ™ primary
    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’

    _expression: $ => choice(
      // Binary operators (ordered by precedence levels via prec.left/right)
      $.implies_expr,
      $.binary_expr,
      $.range_expr,
      // Unary
      $.unary_expr,
      // Postfix operators (highest precedence, left-to-right)
      $.call_expr,
      $.method_call_expr,
      $.field_expr,
      $.index_expr,
      $.try_expr,
      $.bang_expr,
      $.coalesce_expr,
      $.as_expr,
      $.is_expr,
      // Primary expressions
      $.block,
      $.if_expr,
      $.match_expr,
      $.for_expr,
      $.while_expr,
      $.loop_expr,
      $.spawn_expr,
      $.supervised_expr,
      $.detach_expr,
      $.blocking_expr,
      $.parallel_expr,
      $.select_expr,
      $.with_expr,
      $.forbid_expr,
      $.realtime_expr,
      $.closure_expr,
      $.pipe_closure_expr,   // |x, y| expr  (D22 closure-light)
      $.handler_literal_expr, // effect EffectName { op(p) => expr } (D31/D61/D434)
      $.interrupt_expr,      // interrupt v  (D61 §1)
      $.consume_scope_expr,  // consume X = expr { body } / consume X { body } (D188)
      $.record_literal,
      $.anon_record_literal, // { ...alice, role: "admin" } / { id, name: "alice" } (D60/D52)
      $.array_literal,
      $.tuple_expr,
      $.paren_expr,
      $.unit_expr,           // () — the unit value (D-implicit; confirmed:
                              // examples/tour/consume_tour.nv:15 `fn ... -> () { () }`)
      $.self_field_expr,    // @field РІР‚вЂќ must come before self_expr
      $.self_expr,          // @
      $.array_type,          // []T.new(...) static ctor position (D38)
      $.identifier,          // identifier as expression
      $.number_literal,
      $.string_literal,
      $.char_literal,
      $.bool_literal,
    ),

    // ==>  (right-assoc, level 1)
    implies_expr: $ => prec.right(PREC.implies, seq(
      field('left', $._expression),
      field('op', choice('==>', '<==>')),
      field('right', $._expression),
    )),

    // All left-associative binary operators
    binary_expr: $ => choice(
      // Logical OR (level 2)
      prec.left(PREC.or, seq(
        field('left', $._expression),
        field('op', choice('||', 'or')),
        field('right', $._expression),
      )),
      // Logical AND (level 3)
      prec.left(PREC.and, seq(
        field('left', $._expression),
        field('op', choice('&&', 'and')),
        field('right', $._expression),
      )),
      // Equality (level 4)
      prec.left(PREC.equality, seq(
        field('left', $._expression),
        field('op', choice('==', '!=')),
        field('right', $._expression),
      )),
      // Comparison (level 5)
      prec.left(PREC.comparison, seq(
        field('left', $._expression),
        field('op', choice('<', '<=', '>', '>=')),
        field('right', $._expression),
      )),
      // Bitwise OR (level 6)
      prec.left(PREC.bitor, seq(
        field('left', $._expression),
        field('op', '|'),
        field('right', $._expression),
      )),
      // Bitwise XOR (level 7)
      prec.left(PREC.bitxor, seq(
        field('left', $._expression),
        field('op', '^'),
        field('right', $._expression),
      )),
      // Bitwise AND (level 8)
      prec.left(PREC.bitand, seq(
        field('left', $._expression),
        field('op', '&'),
        field('right', $._expression),
      )),
      // Shift (level 9)
      prec.left(PREC.shift, seq(
        field('left', $._expression),
        field('op', choice('<<', '>>')),
        field('right', $._expression),
      )),
      // Additive (level 11)
      prec.left(PREC.additive, seq(
        field('left', $._expression),
        field('op', choice('+', '-')),
        field('right', $._expression),
      )),
      // Multiplicative (level 12)
      prec.left(PREC.multiplicative, seq(
        field('left', $._expression),
        field('op', choice('*', '/', '%')),
        field('right', $._expression),
      )),
    ),

    // Range operators: ..  ..=  (level 10 РІР‚вЂќ between shift and additive)
    range_expr: $ => prec.right(PREC.range, choice(
      // a..b  a..=b
      seq(
        field('start', $._expression),
        field('op', choice('..', '..=')),
        optional(field('end', $._expression)),
      ),
      // ..b  ..=b  (open start)
      seq(
        field('op', choice('..', '..=')),
        field('end', $._expression),
      ),
    )),

    // Unary: - expr  ! expr  not expr  (level 13)
    unary_expr: $ => prec.right(PREC.unary, seq(
      field('op', choice('-', '!', 'not')),
      field('operand', $._expression),
    )),

    // Postfix: call  (level 15)
    call_expr: $ => prec.left(PREC.postfix, seq(
      field('func', $._expression),
      '(',
      field('args', sepTrail($.call_arg, ',')),
      ')',
      optional(field('trailing', $.fn_body)),  // trailing block/fn
    )),

    call_arg: $ => choice(
      seq('...', $._expression),             // spread: ...expr
      seq($.identifier, ':', $._expression), // named: name: expr
      $._expression,                          // positional
    ),

    // Postfix: method call expr.method(args)  (level 15)
    method_call_expr: $ => prec.left(PREC.postfix, seq(
      field('receiver', $._expression),
      '.',
      field('method', $.identifier),
      optional(field('type_args', $.generic_type_args)),
      '(',
      field('args', sepTrail($.call_arg, ',')),
      ')',
    )),

    // Postfix: field access expr.field  (level 15)
    field_expr: $ => prec.left(PREC.postfix, seq(
      field('object', $._expression),
      '.',
      field('field', choice($.identifier, $.number_literal)),  // positional tuple .0
    )),

    // Postfix: index expr[i]  (level 15). Also doubles as the turbofish
    // static-call base `IndexMap[str, int]` / `HashMap[K, V]` (D38) — the
    // index list accepts 2+ comma-separated exprs (bare identifiers like
    // `str`/`int` already parse as `_expression`, so no separate type-args
    // grammar is needed here). A DEDICATED sibling rule starting with the
    // same `identifier '['` prefix was tried first and spuriously broke
    // plain single-index `arr[0]` parsing (LALR state-merge artifact) —
    // extending this rule in place avoids that entirely.
    index_expr: $ => prec.left(PREC.postfix, seq(
      field('object', $._expression),
      '[',
      field('index', $._expression),
      repeat(seq(',', field('index', $._expression))),
      optional(','),
      ']',
    )),

    // Postfix: try  expr?  (level 15)
    try_expr: $ => prec.left(PREC.postfix, seq(
      field('operand', $._expression),
      '?',
    )),

    // Postfix: bang  expr!!  (level 15)
    bang_expr: $ => prec.left(PREC.postfix, seq(
      field('operand', $._expression),
      '!!',
    )),

    // Null coalesce: expr ?? fallback  (level 14)
    coalesce_expr: $ => prec.right(PREC.coalesce, seq(
      field('left', $._expression),
      '??',
      field('right', $._expression),
    )),

    // Cast: expr as Type  (level 15)
    as_expr: $ => prec.left(PREC.postfix, seq(
      field('operand', $._expression),
      'as',
      field('type', $._type_expr),
    )),

    // Type check: expr is Type  (level 15)
    is_expr: $ => prec.left(PREC.postfix, seq(
      field('operand', $._expression),
      'is',
      field('type', $._type_expr),
    )),

    // Block expression: { stmts* }
    // The tail / trailing expression is a semantic distinction (return value of block)
    // handled by type-checker; syntactically all items are statements.
    // `;` is an optional statement separator (D49) — needed only for 2+
    // statements on one line (`{ println("Write failed"); stream.close() }`,
    // examples/net/echo_client.nv:31); newline already separates without it.
    block: $ => seq(
      '{',
      repeat(seq($._statement, optional(';'))),
      '}',
    ),

    // if expr { } [else { } | else if ...]
    // if pattern = expr [&& guard] { } [else ...]  — unified pattern-bind (D34)
    if_expr: $ => prec.right(seq(
      'if',
      choice(
        field('condition', $._expression),
        seq(
          field('pattern', $._cond_pattern),
          '=',
          field('value', $._expression),
          optional(seq('&&', field('guard', $._expression))),
        ),
      ),
      field('then', $.block),
      optional(field('else', choice(
        seq('else', $.block),
        seq('else', $.if_expr),
      ))),
    )),

    // match expr { arm \n arm, arm ... }  — D452: arms are alternatives, "or".
    // Multiline separator is newline (no token — not scanner-tracked here, so
    // arms simply follow each other); same-line separator is `,`. NO trailing
    // comma after the last arm, NO `;` between arms (both retracted by D452).
    match_expr: $ => seq(
      'match',
      field('scrutinee', $._expression),
      '{',
      optional(seq(
        $.match_arm,
        repeat(seq(optional(','), $.match_arm)),
      )),
      '}',
    ),

    // match arm: pattern [if guard] => expr
    match_arm: $ => seq(
      field('pattern', $._pattern),
      optional(seq('if', field('guard', $._expression))),
      '=>',
      field('body', $._expression),
    ),

    // Patterns (basic РІР‚вЂќ extended in Р В¤.3)
    _pattern: $ => choice(
      $.wildcard_pattern,       // _
      $.literal_pattern,        // 42, "str", true/false
      $.name_pattern,           // name (binding or variant РІР‚вЂќ type checker distinguishes)
      $.tuple_pattern,          // (p1, p2)
      $.record_destructure_pattern, // { name, age } (bare, no leading type)
      $.array_pattern,          // [] / [x, ..] / [_, ..] (confirmed: examples/basics/demo.nv:28-29)
      $.rest_pattern,           // ..
    ),

    wildcard_pattern: _ => '_',

    literal_pattern: $ => choice(
      $.number_literal,
      $.string_literal,
      $.bool_literal,
    ),

    // Bare name OR name with destructuring: `x`, `None`, `Some(x)`, `Point { x }`.
    // Optional leading `ro`/`mut` — D34: identifier-pattern requires it in if/while
    // conditions (footgun protection); `mut` also marks sub-bindings inside
    // constructor patterns (`Some(mut x)`), unified with match-arm patterns (D184).
    // `consume` sub-binding (`Ok(consume stream)`) is match-arm-only — D34 forbids
    // it in if/while conditions (E_CONSUME_IN_CONDITION), but real match-arm
    // code uses it live: examples/net/echo_client.nv:27 `Ok(consume stream) => { ... }`.
    // The type checker distinguishes binding vs variant (PascalCase = variant by convention).
    name_pattern: $ => prec.right(seq(
      optional(field('binding_kind', choice('ro', 'mut', 'consume'))),
      field('name', $.identifier),
      optional(choice(
        seq('(', sep1($._pattern, ','), optional(','), ')'),
        seq('{', repeat($.pattern_field), optional('..'), '}'),
      )),
    )),

    // Bare record-destructure pattern (no leading type name): `{ name, age }`
    // used in `ro { name, age } = user` / `mut { name, age } = user` (D184)
    // and in if/while pattern-bind conditions (D34).
    record_destructure_pattern: $ => seq(
      '{', repeat($.pattern_field), optional('..'), '}',
    ),

    tuple_pattern: $ => seq(
      '(',
      sep1($._pattern, ','),
      optional(','),
      ')',
    ),

    // Array pattern: `[]`, `[x, ..]`, `[_, y]` — rest via existing rest_pattern.
    array_pattern: $ => seq(
      '[',
      sepTrail($._pattern, ','),
      ']',
    ),

    pattern_field: $ => choice(
      seq(field('name', $.identifier), ':', field('pattern', $._pattern), optional(',')),
      seq(field('name', $.identifier), optional(',')),  // shorthand
    ),

    rest_pattern: _ => '..',

    // Closure: fn(params) effects -> type body
    closure_expr: $ => seq(
      'fn',
      field('params', $.param_list),
      optional(field('effects', $.effect_list)),
      optional(seq('->', field('return_type', $._type_expr))),
      field('body', $.fn_body),
    ),

    // Handler-literal: `effect EffectName { op(p) => expr / op(p) { block } }`
    // (D31/D61/D434) — used as the RHS of `with Effect = effect EffectName { ... } { body }`
    // when the effect has 2+ operations. EffectName may carry generic args
    // (`effect Fail[Error] { ... }`). Confirmed live:
    // examples/getting_started.nv `with Audit = effect Audit { record(amount) -> () { ... } }`.
    handler_literal_expr: $ => seq(
      'effect',
      field('name', alias($.identifier, $.type_name)),
      optional(field('type_args', $.generic_type_args)),
      '{',
      repeat($.handler_method),
      '}',
    ),

    // Handler method: op(params) [-> Type] (=> expr | { block })  — same
    // two-mutually-exclusive-body-forms rule as `fn` (D40).
    handler_method: $ => seq(
      field('name', $.identifier),
      field('params', $.handler_param_list),
      optional(seq('->', field('return_type', $._type_expr))),
      field('body', $.fn_body),
    ),

    // Handler-method params mirror the effect operation's own declared
    // signature, so a type annotation here is redundant and usually omitted:
    // `record(amount) -> () { ... }` (examples/getting_started.nv:97).
    handler_param_list: $ => seq(
      '(',
      sepTrail($.handler_param, ','),
      ')',
    ),

    handler_param: $ => seq(
      optional('mut'),
      field('name', $.identifier),
      optional(field('type', $._type_expr)),
    ),

    // `interrupt v` — handler-literal / handler-lambda body: short-circuits
    // the enclosing `with`-block, which then evaluates to `v` (D61 §1).
    // Confirmed: std/prelude effect handlers, examples/getting_started.nv-style
    // handler bodies use it as an expression (pipe_closure_expr body).
    interrupt_expr: $ => prec.right(seq(
      'interrupt',
      field('value', $._expression),
    )),

    // Closure-light: |x, y| expr  /  || expr  (D22). Untyped, no effects/return-type.
    // `||` (no params) lexes as a single token — reuse it directly rather than
    // two adjacent `|` tokens, avoiding a clash with the logical-or operator.
    pipe_closure_expr: $ => choice(
      seq('||', field('body', $._expression)),
      seq(
        '|',
        field('params', sep1($.identifier, ',')),
        '|',
        field('body', $._expression),
      ),
    ),

    // consume X = expr { body }  — scope-block, binding form (D188). Parser
    // lookahead resolves in favor of THIS form whenever `{` immediately
    // follows EXPR (D188 §Syntax); dynamic precedence prefers shifting `{`
    // over reducing `consume X = expr` as a bare binding_statement.
    // consume X { body }         — re-consume, single binding
    // consume A, B, C { body }   — re-consume, multi-var (Plan 174 / №379)
    consume_scope_expr: $ => choice(
      prec.dynamic(1, seq(
        'consume',
        field('name', $.identifier),
        optional(field('type', $._type_expr)),
        '=',
        field('value', $._expression),
        field('body', $.block),
      )),
      seq(
        'consume',
        field('names', sep1($.identifier, ',')),
        field('body', $.block),
      ),
    ),

    // ══════════════════════════════════════════════════════════════════════
    // Control-flow expressions (Ф.3)
    // ══════════════════════════════════════════════════════════════════════

    // for [mut] pattern [ElemType] in iter { body }
    // Optional elem_type: declared between pattern and `in` keyword.
    // GLR resolves type-vs-`in` by trying both; `in` keyword forces resolution.
    for_expr: $ => seq(
      'for',
      optional('mut'),
      field('pattern', $._pattern),
      optional(field('elem_type', $._type_expr)),
      'in',
      field('iter', $._expression),
      field('body', $.block),
    ),

    // while condition { body }
    // while pattern = scrutinee [&& guard] { body }  — unified pattern-bind (D34)
    // while let pattern = scrutinee { body }  — legacy outer-`let` form, retracted
    // (E_IF_LET_RETRACTED at checker level) but kept parseable for old snippets.
    while_expr: $ => choice(
      seq(
        'while', 'let',
        field('pattern', $._pattern),
        '=',
        field('scrutinee', $._expression),
        field('body', $.block),
      ),
      seq(
        'while',
        field('pattern', $._cond_pattern),
        '=',
        field('scrutinee', $._expression),
        optional(seq('&&', field('guard', $._expression))),
        field('body', $.block),
      ),
      seq(
        'while',
        field('condition', $._expression),
        field('body', $.block),
      ),
    ),

    // Shared cond-pattern for if/while pattern-bind (D34): constructor/tuple/
    // record destructure (bare bindings default immutable, `mut` explicit
    // inside via name_pattern), or an identifier pattern requiring `ro`/`mut`.
    _cond_pattern: $ => choice(
      $.name_pattern,
      $.tuple_pattern,
      $.record_destructure_pattern,
    ),

    // loop { body }
    loop_expr: $ => seq(
      'loop',
      field('body', $.block),
    ),

    // ══════════════════════════════════════════════════════════════════════
    // Concurrency expressions (Ф.3)
    // ══════════════════════════════════════════════════════════════════════

    // spawn expr  — spawns a coroutine/fiber
    // spawn consume c = expr { body }   — bind + move into child (D415 §4)
    // spawn consume c { body }          — re-consume already-bound c
    // spawn consume a, b, ... { body }  — multi-var re-consume (№379)
    spawn_expr: $ => prec.right(choice(
      seq(
        'spawn', 'consume',
        field('name', $.identifier),
        '=',
        field('value', $._expression),
        field('body', $.block),
      ),
      seq(
        'spawn', 'consume',
        field('names', sep1($.identifier, ',')),
        field('body', $.block),
      ),
      seq(
        'spawn',
        field('body', $._expression),
      ),
    )),

    // supervised [(cancel: token)] { body }
    supervised_expr: $ => seq(
      'supervised',
      optional(seq(
        '(',
        alias($.identifier, $.keyword),  // 'cancel'
        ':',
        field('cancel', $._expression),
        ')',
      )),
      field('body', $.block),
    ),

    // detach { body }
    // detach consume c [= expr] { body } / detach consume a, b, ... { body }
    // — symmetric to spawn consume (D415 §4 amend, [M-detach-consume-escape-unchecked]).
    detach_expr: $ => choice(
      seq(
        'detach', 'consume',
        field('name', $.identifier),
        '=',
        field('value', $._expression),
        field('body', $.block),
      ),
      seq(
        'detach', 'consume',
        field('names', sep1($.identifier, ',')),
        field('body', $.block),
      ),
      seq(
        'detach',
        field('body', $.block),
      ),
    ),

    // blocking { body }
    blocking_expr: $ => seq(
      'blocking',
      field('body', $.block),
    ),

    // parallel { body }
    // `parallel { body }` — plain parallel block.
    // `parallel for pattern [Type] in iter { body }` — homogeneous fan-out,
    // waits for all, cancels the tail on error (06-concurrency.md:97).
    parallel_expr: $ => choice(
      seq(
        'parallel', 'for',
        optional('mut'),
        field('pattern', $._pattern),
        optional(field('elem_type', $._type_expr)),
        'in',
        field('iter', $._expression),
        field('body', $.block),
      ),
      seq(
        'parallel',
        field('body', $.block),
      ),
    ),

    // select { arm, arm, ... }
    select_expr: $ => seq(
      'select',
      '{',
      repeat($.select_arm),
      '}',
    ),

    // select arm: op_expr [if guard] => block [,]
    // op_expr covers: Some(x) = chan, _ = chan, _, chan.send(val)
    // Semantic layer distinguishes recv/send/default by shape of op_expr.
    select_arm: $ => prec.right(seq(
      field('op', $._expression),
      optional(seq('if', field('guard', $._expression))),
      '=>',
      field('body', $.block),
      optional(','),
    )),

    // ══════════════════════════════════════════════════════════════════════
    // Effect-handler expressions (Ф.3)
    // ══════════════════════════════════════════════════════════════════════

    // with [#attr] Effect = handler, ... { body }
    with_expr: $ => seq(
      'with',
      sep1($.with_binding, ','),
      field('body', $.block),
    ),

    with_binding: $ => seq(
      optional(field('attr', $.item_attribute)),
      field('effect', $._type_expr),
      '=',
      field('handler', $._expression),
    ),

    // forbid Effect1, Effect2, ... { body }
    forbid_expr: $ => seq(
      'forbid',
      sep1(field('effect', $._type_expr), ','),
      field('body', $.block),
    ),

    // realtime [nogc] { body }
    realtime_expr: $ => seq(
      'realtime',
      optional(alias($.identifier, $.keyword)),  // 'nogc'
      field('body', $.block),
    ),

    // Record literal: TypeName { field: expr, field, ... }
    // NOTE: no negative precedence here (unlike the original grammar). A
    // negative bias made record_literal correctly lose to `if cond { }`'s
    // then-block in the rare `if RecordName { }` shape, but it ALSO made it
    // lose to a following block-as-new-statement in the FAR more common
    // `ro x = Type { field: v }` binding RHS position (inside a function
    // body, `Type { ... }` was mis-split into `Type` + a separate erroring
    // block statement). The let-binding pattern vastly dominates real code
    // (record literals as RHS are everywhere); `if RecordName { }` bare
    // record-as-condition is exotic and not observed in std/examples.
    record_literal: $ => seq(
      field('type', alias($.identifier, $.type_name)),
      '{',
      sepTrail($.field_init, ','),
      '}',
    ),

    // Anonymous/typeless record literal — `{ ...alice, role: "admin" }` (D60),
    // `{ id, name: "alice" }` (D52 literal-coercion, type inferred from
    // context — no TypeName prefix). Confirmed live: examples/basics/demo.nv:17.
    anon_record_literal: $ => seq(
      '{',
      sepTrail($.field_init, ','),
      '}',
    ),

    field_init: $ => choice(
      seq(field('name', $.identifier), ':', field('value', $._expression)),
      seq(field('name', $.identifier)),                // shorthand: same name as var
      seq('...', field('rest', $._expression)),         // struct spread/update ...base (D60)
    ),

    // Array literal: [] or [1, 2, 3] or [0, ...a, ...b, 6] (D60 array spread)
    array_literal: $ => seq(
      '[',
      sepTrail(choice(
        seq('...', $._expression),   // spread
        $._expression,
      ), ','),
      ']',
    ),

    // Tuple expression: (1, 2) РІР‚вЂќ at least 2 elements
    tuple_expr: $ => seq(
      '(',
      $._expression,
      ',',
      sep1($._expression, ','),
      optional(','),
      ')',
    ),

    // Parenthesized expression: (expr)
    paren_expr: $ => seq('(', $._expression, ')'),

    // Unit value: () — distinct from paren_expr (non-empty) and unit_type
    // (type position). Used as an explicit body/tail value for `-> ()` fns.
    unit_expr: _ => seq('(', ')'),

    // Self field access: @field_name РІР‚вЂќ higher prec than self_expr to win when
    // identifier follows '@'.
    self_field_expr: $ => prec(1, seq(
      '@',
      field('field', $.identifier),
    )),

    // Self reference: @ (alone, lower priority than self_field_expr)
    self_expr: _ => prec(0, '@'),

    // Bool literals
    bool_literal: _ => choice('true', 'false'),

    // Char literal: 'a' '\n' '\u{1F600}'
    char_literal: $ => token(seq(
      "'",
      choice(
        /[^'\\]/,                    // any char except ' and \
        /\\[nrt\\'\"0]/,             // simple escapes
        /\\u\{[0-9a-fA-F]+\}/,       // unicode escape
      ),
      "'",
    )),

    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’
    // Statements
    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’

    _statement: $ => choice(
      $.let_statement,
      $.binding_statement,
      $.const_statement,
      $.assignment_statement,
      $.return_statement,
      $.break_statement,
      $.continue_statement,
      $.throw_statement,
      $.defer_statement,
      $.errdefer_statement,
      $.expression_statement,
    ),

    // ro NAME [Type] = expr           — immutable binding (D184)
    // mut NAME [Type] = expr          — mutable binding
    // consume NAME [Type] = expr      — owned binding, raw linear form (D180)
    // ro/mut/consume (a, b) = expr    — tuple destructure, uniform kind (D184)
    //   confirmed: std/src/concurrency/cancellation.nv:70 `ro (tx, rx) = Channel[T].new(2)`;
    //   examples/net/socks5_http_bridge/main.nv `consume (ar, aw) = a.into_split()`
    // ro/mut { name, age } = expr     — record destructure, uniform kind
    //   confirmed: std/src/encoding/json.nv:488 `ro {line, col, ..} = @`;
    //   examples/tour/concurrency.nv:10 `ro { tx, rx } = Channel[bool].new(1)`
    // `let` (kept below) is retracted by D184 but harmless to still accept.
    binding_statement: $ => seq(
      field('kind', choice('ro', 'mut', 'consume')),
      field('pattern', choice($.identifier, $.tuple_pattern, $.record_destructure_pattern)),
      optional(field('type', $._type_expr)),
      '=',
      field('value', $._expression),
    ),

    // const NAME [Type] = expr — scope-local const (D184 Ф.10, strict constexpr)
    const_statement: $ => seq(
      'const',
      field('name', $.identifier),
      optional(field('type', $._type_expr)),
      '=',
      field('value', $._expression),
    ),

    // let [mut] name [Type] = expr
    let_statement: $ => seq(
      'let',
      optional('mut'),
      field('name', $.identifier),
      optional(field('type', $._type_expr)),
      '=',
      field('value', $._expression),
    ),

    // target = expr / += -= *= /=
    assignment_statement: $ => seq(
      field('target', $._expression),
      field('op', choice('=', '+=', '-=', '*=', '/=')),
      field('value', $._expression),
    ),

    // return [expr] РІР‚вЂќ prec.right: greedily consume following expression
    return_statement: $ => prec.right(seq(
      'return',
      optional(field('value', $._expression)),
    )),

    // break
    break_statement: _ => 'break',

    // continue
    continue_statement: _ => 'continue',

    // throw expr
    throw_statement: $ => seq(
      'throw',
      field('value', $._expression),
    ),

    // defer expr
    defer_statement: $ => seq(
      'defer',
      field('body', $._expression),
    ),

    // errdefer expr
    errdefer_statement: $ => seq(
      'errdefer',
      field('body', $._expression),
    ),

    // expression as statement (call, method call, etc.)
    expression_statement: $ => $._expression,

    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’
    // Lexical rules (STABLE РІР‚вЂќ do not change in Р В¤.3+)
    // РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’РІвЂўС’

    identifier: _ => /[a-zA-Z_][a-zA-Z0-9_]*/,

    number_literal: _ => token(choice(
      /0x[0-9a-fA-F][0-9a-fA-F_]*/,         // hex
      /0b[01][01_]*/,                         // binary
      /0o[0-7][0-7_]*/,                       // octal
      /[0-9][0-9_]*\.[0-9][0-9_]*([eE][+-]?[0-9]+)?/, // float
      /[0-9][0-9_]*/,                         // decimal int
    )),

    string_literal: $ => seq(
      '"',
      repeat(choice(
        token.immediate(/[^"\\$]+/),              // plain chars
        token.immediate(/\\./),                   // escape sequence
        $.string_interpolation,                   // ${expr}
      )),
      '"',
    ),

    string_interpolation: $ => seq(
      token.immediate('${'),
      $._expression,
      '}',
    ),

    // line_comment must NOT match '///' РІР‚вЂќ guard with [^/\r\n] as first char
    line_comment: _ => token(seq('//', /([^/\r\n][^\r\n]*)?/)),
    doc_comment:  _ => token(seq('///', /[^\r\n]*/)),
    block_comment: _ => token(seq('/*', /[^*]*\*+([^/*][^*]*\*+)*/, '/')),
  },
});
