import eslint from '@eslint/js';
import tslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin'

export default tslint.config(
  eslint.configs.recommended,
  ...tslint.configs.recommendedTypeChecked,
  ...tslint.configs.stylisticTypeChecked,
  {
    files: ['eslint.config.js'],
    extends: [tslint.configs.disableTypeChecked],
  },
  {
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.eslint.json',
      },
    },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      'quotes': 'off',
      '@typescript-eslint/quotes': ['error', 'single'],
    }
  }
);
