module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
  ],
  parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true,
      },
  },
  plugins: ['simple-import-sort', 'import', '@typescript-eslint', 'unused-imports'],
  rules: {
      'react/display-name': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-empty-interface': [
          'error',
          {
              'allowSingleExtends': false,
          },
      ],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports-ts': 2,
      '@typescript-eslint/no-explicit-any': 'off',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'import/newline-after-import': ['warn', { 'count': 1 }],
  },

  settings: {
      react: {
          version: 'detect',
      },
  },
};
