import js from '@eslint/js'
import globals from 'globals'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

// Flat-config port of the previous .eslintrc. The .mjs extension is required:
// this package is "type": "module".
export default [
  {
    // Ported from the deleted .eslintignore: flat config replaces it entirely,
    // eslint >= 9 no longer reads that file.
    ignores: [
      '**/node_modules/**',
      'coverage/**',
      'dist/**',
      'public/**',
      'migrations/**',
      'theme/**',
      '.slidev/**'
    ]
  },
  js.configs.recommended,
  prettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021
      }
    }
  }
]
