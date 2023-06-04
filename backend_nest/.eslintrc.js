const { rules: baseStyleRules } = require( 'eslint-config-airbnb-base/rules/style' );

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'import',
    '@typescript-eslint/eslint-plugin',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
    // 'prettier',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [ '.eslintrc.js', 'watch-assets.ts' ],
  rules: {
    'max-len': [ 'error', { code: 200 } ],
    
    // Игнорирование отступов элементов за декораторами
    indent: 'off',
    '@typescript-eslint/indent': [
      'error', 2, {
        ...baseStyleRules.indent[2],
        SwitchCase: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          ...baseStyleRules.indent[2].ignoredNodes,
          'PropertyDefinition[decorators]',
          'TSUnionType',
          'FunctionExpression[params]:has(Identifier[decorators])',
        ],
      },
    ],

    // Запрещают if'ы без блока кода
    // https://typescript-eslint.io/rules/brace-style
    'brace-style': [ 'off' ],
    '@typescript-eslint/brace-style': [ 'warn', '1tbs', { allowSingleLine: false } ],
    // https://eslint.org/docs/latest/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': [ 'warn', 'below' ],

    // Предпочтение interface вместо type, там где это возможно
    // https://typescript-eslint.io/rules/consistent-type-definitions
    '@typescript-eslint/consistent-type-definitions': [ 'error', 'interface' ],

    // Запрещает устаревший require('lib')
    // https://typescript-eslint.io/rules/no-require-imports
    '@typescript-eslint/no-require-imports': 'warn',

    // Отключение правил airbnb
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',
    // https://eslint.org/docs/latest/rules/class-methods-use-this
    'class-methods-use-this': 'off',
    // https://eslint.org/docs/latest/rules/no-await-in-loop
    'no-await-in-loop': 'off',
    // Отключение предупреждений о Unix или Windows окончаниях строк, т.к. их автоматически исправляет github
    // https://eslint.org/docs/latest/rules/linebreak-style
    'linebreak-style': 'off',
    'no-underscore-dangle': 'off',
  },
};
