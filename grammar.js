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
  'fn', 'type', 'effect', 'alias',
  'let', 'const', 'mut', 'consume', 'readonly',
  'if', 'else', 'match', 'for', 'while', 'loop', 'in',
  'return', 'break', 'continue',
  'test',
  'true', 'false',
  'with', 'throw', 'as', 'is',
  'spawn', 'supervised', 'parallel', 'detach', 'blocking',
  'protocol', 'interrupt', 'forbid', 'realtime',
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

    // prec.right: prefer shifting '.' (greedy path), resolves shift-reduce conflict
    // with selective-import '.' prefix.
    dotted_path: $ => prec.right(sep1($.identifier, '.')),

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
      optional('external'),
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
      optional('consume'),      // consume qualifier
      optional('mut'),          // mutable qualifier
      field('name', $.identifier),
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

    type_declaration: $ => seq(
      optional('export'),
      optional('external'),
      'type',
      field('name', alias($.identifier, $.type_name)),
      optional(field('generics', $.generic_params)),
      optional('consume'),      // consume-type marker
      optional($._type_body),
    ),

    _type_body: $ => choice(
      $.record_type_body,
      $.sum_type_body,
      $.alias_type_body,
      $.effect_type_body,
      $.protocol_type_body,
      $.newtype_body,
    ),

    // Record type: { field Type, field Type }
    record_type_body: $ => seq(
      '{',
      repeat($.record_field),
      '}',
    ),

    record_field: $ => seq(
      optional(choice('mut', 'readonly', 'consume')),
      optional(seq('use', field('embed_alias', $.identifier))),
      field('name', $.identifier),
      field('type', $._type_expr),
      optional(','),
    ),

    // Sum type: | Variant | Variant(T) | Variant { fields }
    sum_type_body: $ => repeat1($.sum_variant),

    sum_variant: $ => seq(
      '|',
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
    ),

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
      $.record_literal,
      $.array_literal,
      $.tuple_expr,
      $.paren_expr,
      $.self_field_expr,    // @field РІР‚вЂќ must come before self_expr
      $.self_expr,          // @
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

    // Postfix: index expr[i]  (level 15)
    index_expr: $ => prec.left(PREC.postfix, seq(
      field('object', $._expression),
      '[',
      field('index', $._expression),
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
    block: $ => seq(
      '{',
      repeat($._statement),
      '}',
    ),

    // if expr { } [else { } | else if ...]
    if_expr: $ => prec.right(seq(
      'if',
      field('condition', $._expression),
      field('then', $.block),
      optional(field('else', choice(
        seq('else', $.block),
        seq('else', $.if_expr),
      ))),
    )),

    // match expr { arm => expr, ... }
    match_expr: $ => seq(
      'match',
      field('scrutinee', $._expression),
      '{',
      repeat($.match_arm),
      '}',
    ),

    // match arm: pattern => expr (block is a subtype of expression)
    match_arm: $ => seq(
      field('pattern', $._pattern),
      '=>',
      field('body', $._expression),
      optional(','),  // comma separator between arms; optional after last
    ),

    // Patterns (basic РІР‚вЂќ extended in Р В¤.3)
    _pattern: $ => choice(
      $.wildcard_pattern,       // _
      $.literal_pattern,        // 42, "str", true/false
      $.name_pattern,           // name (binding or variant РІР‚вЂќ type checker distinguishes)
      $.tuple_pattern,          // (p1, p2)
      $.rest_pattern,           // ..
    ),

    wildcard_pattern: _ => '_',

    literal_pattern: $ => choice(
      $.number_literal,
      $.string_literal,
      $.bool_literal,
    ),

    // Bare name OR name with destructuring: `x`, `None`, `Some(x)`, `Point { x }`.
    // The type checker distinguishes binding vs variant (PascalCase = variant by convention).
    name_pattern: $ => prec.right(seq(
      field('name', $.identifier),
      optional(choice(
        seq('(', sep1($._pattern, ','), optional(','), ')'),
        seq('{', repeat($.pattern_field), optional('..'), '}'),
      )),
    )),

    tuple_pattern: $ => seq(
      '(',
      sep1($._pattern, ','),
      optional(','),
      ')',
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
    // while let pattern = scrutinee { body }
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
        field('condition', $._expression),
        field('body', $.block),
      ),
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
    spawn_expr: $ => prec.right(seq(
      'spawn',
      field('body', $._expression),
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
    detach_expr: $ => seq(
      'detach',
      field('body', $.block),
    ),

    // blocking { body }
    blocking_expr: $ => seq(
      'blocking',
      field('body', $.block),
    ),

    // parallel { body }
    parallel_expr: $ => seq(
      'parallel',
      field('body', $.block),
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
    record_literal: $ => prec(-1, seq(
      field('type', alias($.identifier, $.type_name)),
      '{',
      sepTrail($.field_init, ','),
      '}',
    )),

    field_init: $ => choice(
      seq(field('name', $.identifier), ':', field('value', $._expression)),
      seq(field('name', $.identifier)),                // shorthand: same name as var
      seq('..', field('rest', $._expression)),          // struct update ..base
    ),

    // Array literal: [] or [1, 2, 3]
    array_literal: $ => seq(
      '[',
      sepTrail($._expression, ','),
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
      $.assignment_statement,
      $.return_statement,
      $.break_statement,
      $.continue_statement,
      $.throw_statement,
      $.defer_statement,
      $.errdefer_statement,
      $.expression_statement,
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
