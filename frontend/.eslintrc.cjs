module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  ignorePatterns: [
    '*.cjs',
    '*.js',
    '*.ts',
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
  ],
  root: true,
  rules: {
    'react/react-in-jsx-scope': ['off'],
    'react/button-has-type': ['off'],
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-key': 'error',
    'import/no-absolute-path': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    // 'semi': 'off',
    // '@typescript-eslint/semi': ['error', 'never'],
  },
}
