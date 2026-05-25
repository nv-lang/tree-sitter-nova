/**
 * @file Tree-sitter grammar for Nova
 * @author Evgeniy Golovin <unitcraft@nv-lang.org>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

const KEYWORDS = [
  // Source-of-truth: nv-lang/nova compiler-codegen/src/lexer/mod.rs:594-651
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

module.exports = grammar({
  name: 'nova',

  extras: $ => [
    /\s/,
    $.doc_comment,    // doc_comment FIRST so /// wins over // on same-length match
    $.line_comment,
    $.block_comment,
  ],

  word: $ => $.identifier,

  rules: {
    // Top level — placeholder, expand в Ф.2
    source_file: $ => repeat($._top_level),

    _top_level: $ => choice(
      $._declaration_placeholder,
      $.number_literal,
      $.string_literal,
    ),

    _declaration_placeholder: $ => seq(
      choice(...KEYWORDS.map(k => alias(k, $.keyword))),
      optional($.identifier),
    ),

    // Lexical primitives — STABLE через Ф.2/Ф.3
    identifier: $ => /[a-zA-Z_][a-zA-Z0-9_]*/,

    number_literal: $ => token(choice(
      // Hex
      /0x[0-9a-fA-F][0-9a-fA-F_]*/,
      // Binary
      /0b[01][01_]*/,
      // Octal
      /0o[0-7][0-7_]*/,
      // Float
      /[0-9][0-9_]*\.[0-9][0-9_]*([eE][+-]?[0-9]+)?/,
      // Decimal int
      /[0-9][0-9_]*/,
    )),

    string_literal: $ => choice(
      seq('"', repeat(choice(
        /[^"\\$]/,
        /\\./,
        // Interpolation $...$  — refined в Ф.2 для nested expr
        seq('${', /[^}]*/, '}'),
      )), '"'),
    ),

    // line_comment must NOT match '///' — use [^/\r\n] as first char guard
    // so for '///doc', the optional group fails and only '//' is consumed (2 chars),
    // while doc_comment consumes the full '///doc' (longer → wins).
    line_comment: $ => token(seq('//', /([^/\r\n][^\r\n]*)?/)),
    doc_comment: $ => token(seq('///', /[^\r\n]*/)),
    block_comment: $ => token(seq('/*', /[^*]*\*+([^/*][^*]*\*+)*/, '/')),
  },
});
