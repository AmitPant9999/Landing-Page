import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      'no-unused-vars': 'off',
      'no-empty-function': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@next/next/no-page-custom-font': 'off',
      // Additional rules disabled
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'no-debugger': 'off',
      'no-alert': 'off',
      'no-shadow': 'off',
      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'no-use-before-define': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  }
];

export default eslintConfig;
