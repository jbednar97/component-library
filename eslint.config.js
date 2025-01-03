// @ts-check

import eslint from "@eslint/js";
import eslintTS from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import * as pluginImport from "eslint-plugin-import";
import pluginSSRFriendly from "eslint-plugin-ssr-friendly";
import pluginTypescript from "@typescript-eslint/eslint-plugin";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import configReactRecommended from "eslint-plugin-react/configs/recommended.js";
import configReactJSXRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import pluginReactHooks from "eslint-plugin-react-hooks";
import tailwindPlugin from "eslint-plugin-tailwindcss";

export default [
    eslint.configs.recommended,
    ...eslintTS.configs.recommended,
    ...eslintTS.configs.stylistic,
    ...tailwindPlugin.configs["flat/recommended"],
    configReactRecommended,
    configReactJSXRuntime,
    {
        files: ["**/*.{js,ts,tsx,cjs}"],
        linterOptions: {
            reportUnusedDisableDirectives: "error",
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { modules: true },
                ecmaVersion: "latest",
                project: "./tsconfig.linter.json",
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        plugins: {
            import: pluginImport,
            "@typescript-eslint": pluginTypescript,
            "react-refresh": pluginReactRefresh,
            "react-hooks": pluginReactHooks,
            "ssr-friendly": pluginSSRFriendly,
        },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
            ...pluginSSRFriendly.configs.recommended.rules,
            /**
             * Allow empty arrow functions `() => {}`, while keeping other empty functions restricted
             * @see https://eslint.org/docs/latest/rules/no-empty-function#allow-arrowfunctions
             */
            "@typescript-eslint/no-empty-function": ["error", { allow: ["arrowFunctions"] }],
            "@typescript-eslint/ban-ts-comment": 1,
            "no-const-assign": "error",
            /** Restrict imports from devDependencies since they are not included in library build. peerDependencies are ok */
            "import/no-extraneous-dependencies": [
                "error",
                {
                    devDependencies: false,
                    peerDependencies: true,
                },
            ],
            /**
             * Enforce import order with empty lines between import group
             * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
             */
            "import/order": [
                "error",
                {
                    groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],
                    pathGroups: [
                        {
                            pattern: "@/**",
                            group: "internal",
                        },
                    ],
                    "newlines-between": "always",
                },
            ],

            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                    args: "after-used",
                },
            ],
        },
    },
    /* Allow devDependencies imports for tests and config files */
    {
        files: [
            "**/*.spec.*",
            "**/testUtils/*.{js,jsx,ts,tsx}",
            "*/*.{js,jsx,ts,tsx}",
            "**/setupTests.ts",
            "**/*.stories.*",
            "*.config.{js,ts}",
        ],
        plugins: {
            import: pluginImport,
        },
        rules: {
            "import/no-extraneous-dependencies": [
                "error",
                {
                    devDependencies: true,
                    peerDependencies: true,
                },
            ],
        },
    },
    /* Disable `environment` directory imports for library files */
    {
        files: ["src/lib/**/*.{js,jsx,ts,tsx}"],
        rules: {
            "no-restricted-imports": [
                "error",
                {
                    patterns: [
                        {
                            group: ["**/environment/**"],
                            message: "Imports from environment directory are forbidden in the library files.",
                        },
                    ],
                },
            ],
        },
    },
    /* Disable `template` directory imports for all files */
    {
        files: ["src/**/*.{js,jsx,ts,tsx}"],
        rules: {
            "no-restricted-imports": [
                "error",
                {
                    patterns: [
                        {
                            group: ["**/templates/**"],
                            message: "Imports from templates directory are forbidden.",
                        },
                    ],
                },
            ],
        },
    },
    /**
     * Disable rules of hooks for story files in order to have better story code display.
     * @see TemplateName.stories.tsx
     */
    {
        files: ["**/*.stories.*"],
        rules: {
            "react-hooks/rules-of-hooks": "off",
        },
    },
    {
        ignores: ["**/*.snap"],
    },
];
