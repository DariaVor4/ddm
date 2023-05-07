module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  ignorePatterns: [
    '.eslintrc.js',
    'codegen.ts',
    'codegen-schema-loader.ts',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  plugins: [
    '@typescript-eslint',
    'react-refresh',
  ],
  root: true,
  rules: {
    'max-len': ['error', {code: 200}],
    'react/function-component-definition': ['off'],
    'react/jsx-no-useless-fragment': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'react/button-has-type': ['off'],
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-key': 'error',
    'import/no-absolute-path': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    // Отключение предупреждений о Unix или Windows окончаниях строк, т.к. их автоматически исправляет github
    // https://eslint.org/docs/latest/rules/linebreak-style
    'linebreak-style': 'off',
    'jsx-a11y/no-access-key': 'off',
    'no-nested-ternary': 'off',
    // 'semi': 'off',
    // '@typescript-eslint/semi': ['error', 'never'],
    "import/extensions": "off",
    'react/jsx-props-no-spreading': 'off',
    'no-void': 'off',
    'react/prop-types': 'off',
  },
}
