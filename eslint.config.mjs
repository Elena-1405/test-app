import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginPrettier from 'eslint-plugin-prettier';
 

export default [
  tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  
    {
      plugins: {
        prettier: pluginPrettier,
      },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    }
  )
];
