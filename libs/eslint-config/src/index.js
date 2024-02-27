module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  ignorePatterns: [".turbo", "dist", "coverage", "node_modules", "build"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:json/recommended",
  ],
  plugins: ["jsx-a11y", "@typescript-eslint"],
  env: {
    browser: true,
  },
  rules: {
    "react/require-default-props": "off",
    "consistent-return": "off",
    "import/prefer-default-export": "off",
    "object-curly-spacing": ["error", "always"],
    "no-prototype-builtins": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        printWidth: 120,
        semi: true,
        useTabs: false,
        singleQuote: false,
        endOfLine: "auto",
        arrowParens: "always",
        trailingComma: "all",
      },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", "tsx"],
      },
    ],
    "react/jsx-props-no-spreading": [0],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-use-before-define": "off",
    "no-await-in-loop": "off",
    "no-plusplus": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "object-curly-newline": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
      },
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
