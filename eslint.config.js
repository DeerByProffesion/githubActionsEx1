import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import vitest from "eslint-plugin-vitest";
import * as espree from "espree";

export default [
  js.configs.recommended,

  {
    files: ["src/**/*.{js,jsx}"],

    languageOptions: {
      parser: espree,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },

      globals: {
        window: "readonly",
        document: "readonly",

        // vitest globals
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        vi: "readonly",
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      vitest,
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...vitest.configs.recommended.rules,

      "react/react-in-jsx-scope": "off", // for React 17+
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
