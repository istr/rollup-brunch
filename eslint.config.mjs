import globals from "globals";

export default [{
    languageOptions: {
        globals: {
            ...globals.node,
        },
    },

    rules: {
        "block-spacing": [2, "always"],

        "brace-style": [2, "1tbs", {
            allowSingleLine: true,
        }],

        "comma-style": [2, "last"],
        "func-style": [2, "expression"],
        semi: [2, "always"],
        quotes: [2, "single", "avoid-escape"],

        indent: [2, 2, {
            SwitchCase: 1,
        }],

        "dot-location": [2, "property"],

        camelcase: [1, {
            properties: "always",
        }],

        "comma-spacing": [2, {
            before: false,
            after: true,
        }],

        "comma-dangle": [2, "never"],

        "semi-spacing": [2, {
            before: false,
            after: true,
        }],

        curly: [2, "multi-line", "consistent"],
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-ex-assign": 2,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-irregular-whitespace": 2,
        "no-sparse-arrays": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,

        "no-unused-vars": [2, {
            varsIgnorePattern: "ignored",
        }],

        "valid-typeof": 2,
        eqeqeq: [2, "allow-null"],
        "no-array-constructor": 2,
        "no-caller": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-fallthrough": 2,
        "no-labels": 2,
        "no-iterator": 2,

        "no-magic-numbers": [1, {
            ignore: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8],
        }],

        "no-multi-spaces": 2,
        "no-native-reassign": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-new": 2,
        "no-octal-escape": 2,
        "no-octal": 2,
        "no-redeclare": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-unused-expressions": 2,
        "no-useless-call": 2,

        "no-warning-comments": [1, {
            terms: ["todo", "fixme", "xxx"],
            location: "start",
        }],

        "no-with": 2,
        "new-parens": 2,
        "wrap-iife": [2, "inside"],
        "no-catch-shadow": 2,
        "no-delete-var": 2,
        "no-shadow-restricted-names": 2,
        "no-undef": 2,
        "callback-return": 2,
        "handle-callback-err": 2,
        "no-path-concat": 2,
        "array-bracket-spacing": 2,
        "eol-last": 2,

        "no-multiple-empty-lines": [2, {
            max: 2,
        }],

        "no-spaced-func": 2,
        "no-trailing-spaces": 2,
        "no-unneeded-ternary": 2,
        "keyword-spacing": 2,
        "space-before-blocks": 2,
        "space-before-function-paren": [2, "never"],
        "space-in-parens": 2,

        "space-unary-ops": [2, {
            words: true,
            nonwords: false,
        }],

        "arrow-spacing": [2, {
            before: true,
            after: true,
        }],

        "prefer-arrow-callback": 2,
        "prefer-template": 0,
        "prefer-const": 2,
    },
}];