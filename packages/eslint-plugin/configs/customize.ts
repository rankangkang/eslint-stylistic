/* eslint perfectionist/sort-objects: "error" */

import type { Linter } from 'eslint'
import type { StylisticCustomizeOptions } from '../dts/options'
import type { RuleOptions } from '../dts/rule-options'
import plugin from '../src/plugin'

type Rules = Partial<{
  [K in keyof RuleOptions]: Linter.RuleSeverity | [Linter.RuleSeverity, ...RuleOptions[K]]
}>

/**
 * A factory function to customize the recommended config
 */
export function customize(options: StylisticCustomizeOptions<false>): Linter.BaseConfig
export function customize(options?: StylisticCustomizeOptions<true>): Linter.Config
export function customize(options: StylisticCustomizeOptions<boolean> = {}): Linter.Config | Linter.BaseConfig {
  const {
    arrowParens = false,
    blockSpacing = true,
    braceStyle = 'stroustrup',
    commaDangle = 'always-multiline',
    flat = true,
    indent = 2,
    jsx = true,
    pluginName = 'stylistic-compat',
    quoteProps = 'consistent-as-needed',
    quotes = 'single',
    semi = false,
  } = options

  let rules: Rules = {
    'stylistic-compat/array-bracket-spacing': ['error', 'never'],
    'stylistic-compat/arrow-parens': ['error', arrowParens ? 'always' : 'as-needed', { requireForBlockBody: true }],
    'stylistic-compat/arrow-spacing': ['error', { after: true, before: true }],
    'stylistic-compat/block-spacing': ['error', blockSpacing ? 'always' : 'never'],
    'stylistic-compat/brace-style': ['error', braceStyle, { allowSingleLine: true }],
    'stylistic-compat/comma-dangle': ['error', commaDangle],
    'stylistic-compat/comma-spacing': ['error', { after: true, before: false }],
    'stylistic-compat/comma-style': ['error', 'last'],
    'stylistic-compat/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
    'stylistic-compat/dot-location': ['error', 'property'],
    'stylistic-compat/eol-last': 'error',
    'stylistic-compat/indent': ['error', indent, {
      ArrayExpression: 1,
      CallExpression: { arguments: 1 },
      flatTernaryExpressions: false,
      FunctionDeclaration: { body: 1, parameters: 1 },
      FunctionExpression: { body: 1, parameters: 1 },
      ignoreComments: false,
      ignoredNodes: [
        'TSUnionType',
        'TSIntersectionType',
        'TSTypeParameterInstantiation',
        'FunctionExpression > .params[decorators.length > 0]',
        'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
      ],
      ImportDeclaration: 1,
      MemberExpression: 1,
      ObjectExpression: 1,
      offsetTernaryExpressions: true,
      outerIIFEBody: 1,
      SwitchCase: 1,
      tabLength: indent === 'tab' ? 4 : indent,
      VariableDeclarator: 1,
    }],
    'stylistic-compat/indent-binary-ops': ['error', indent],
    'stylistic-compat/key-spacing': ['error', { afterColon: true, beforeColon: false }],
    'stylistic-compat/keyword-spacing': ['error', { after: true, before: true }],
    'stylistic-compat/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'stylistic-compat/max-statements-per-line': ['error', { max: 1 }],
    'stylistic-compat/member-delimiter-style': ['error', {
      multiline: {
        delimiter: semi ? 'semi' : 'none',
        requireLast: semi,
      },
      multilineDetection: 'brackets',
      overrides: {
        interface: {
          multiline: {
            delimiter: semi ? 'semi' : 'none',
            requireLast: semi,
          },
        },
      },
      singleline: {
        delimiter: semi ? 'semi' : 'comma',
      },
    }],
    'stylistic-compat/multiline-ternary': ['error', 'always-multiline'],
    'stylistic-compat/new-parens': 'error',
    'stylistic-compat/no-extra-parens': ['error', 'functions'],
    'stylistic-compat/no-floating-decimal': 'error',
    'stylistic-compat/no-mixed-operators': ['error', {
      allowSamePrecedence: true,
      groups: [
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
    }],
    'stylistic-compat/no-mixed-spaces-and-tabs': 'error',
    'stylistic-compat/no-multi-spaces': 'error',
    'stylistic-compat/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'stylistic-compat/no-tabs': indent === 'tab' ? 'off' : 'error',
    'stylistic-compat/no-trailing-spaces': 'error',
    'stylistic-compat/no-whitespace-before-property': 'error',
    'stylistic-compat/object-curly-spacing': ['error', 'always'],
    'stylistic-compat/operator-linebreak': ['error', 'before'],
    'stylistic-compat/padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],
    'stylistic-compat/quote-props': ['error', quoteProps],
    'stylistic-compat/quotes': ['error', quotes, { allowTemplateLiterals: true, avoidEscape: false }],
    'stylistic-compat/rest-spread-spacing': ['error', 'never'],
    'stylistic-compat/semi': ['error', semi ? 'always' : 'never'],
    'stylistic-compat/semi-spacing': ['error', { after: true, before: false }],
    'stylistic-compat/space-before-blocks': ['error', 'always'],
    'stylistic-compat/space-before-function-paren': ['error', { anonymous: 'always', asyncArrow: 'always', named: 'never' }],
    'stylistic-compat/space-in-parens': ['error', 'never'],
    'stylistic-compat/space-infix-ops': 'error',
    'stylistic-compat/space-unary-ops': ['error', { nonwords: false, words: true }],
    'stylistic-compat/spaced-comment': ['error', 'always', {
      block: {
        balanced: true,
        exceptions: ['*'],
        markers: ['!'],
      },
      line: {
        exceptions: ['/', '#'],
        markers: ['/'],
      },
    }],
    'stylistic-compat/template-curly-spacing': 'error',
    'stylistic-compat/template-tag-spacing': ['error', 'never'],
    'stylistic-compat/type-annotation-spacing': ['error', {}],
    'stylistic-compat/type-generic-spacing': 'error',
    'stylistic-compat/type-named-tuple-spacing': 'error',
    'stylistic-compat/wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    'stylistic-compat/yield-star-spacing': ['error', 'both'],

    ...jsx
      ? {
          'stylistic-compat/jsx-closing-bracket-location': 'error',
          'stylistic-compat/jsx-closing-tag-location': 'error',
          'stylistic-compat/jsx-curly-brace-presence': ['error', { propElementValues: 'always' }],
          'stylistic-compat/jsx-curly-newline': 'error',
          'stylistic-compat/jsx-curly-spacing': ['error', 'never'],
          'stylistic-compat/jsx-equals-spacing': 'error',
          'stylistic-compat/jsx-first-prop-new-line': 'error',
          'stylistic-compat/jsx-function-call-newline': ['error', 'multiline'],
          'stylistic-compat/jsx-indent-props': ['error', indent],
          'stylistic-compat/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
          'stylistic-compat/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
          'stylistic-compat/jsx-quotes': 'error',
          'stylistic-compat/jsx-tag-spacing': [
            'error',
            {
              afterOpening: 'never',
              beforeClosing: 'never',
              beforeSelfClosing: 'always',
              closingSlash: 'never',
            },
          ],
          'stylistic-compat/jsx-wrap-multilines': [
            'error',
            {
              arrow: 'parens-new-line',
              assignment: 'parens-new-line',
              condition: 'parens-new-line',
              declaration: 'parens-new-line',
              logical: 'parens-new-line',
              prop: 'parens-new-line',
              propertyValue: 'parens-new-line',
              return: 'parens-new-line',
            },
          ],
        }
      : {},
  }

  if (pluginName !== 'stylistic-compat') {
    const regex = /^stylistic-compat\//
    rules = Object.fromEntries(
      Object.entries(rules!)
        .map(([ruleName, ruleConfig]) => [
          ruleName.replace(regex, `${pluginName}/`),
          ruleConfig,
        ]),
    )
  }

  if (flat) {
    return {
      plugins: {
        [pluginName]: plugin,
      },
      rules,
    } satisfies Linter.Config
  }
  else {
    if (pluginName !== 'stylistic-compat')
      throw new Error('PluginName in non-flat config can not be customized')

    return {
      plugins: ['stylistic-compat'],
      rules,
    } satisfies Linter.BaseConfig
  }
}
