module.exports = {
  extends: ["airbnb", "prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    "import/no-cycle": [
      "error",
      {
        maxDepth: 10,
        ignoreExternal: true,
      },
    ],
    "react/function-component-definition": ["off"],
    "react/prop-types": ["warn"],
    "jsx-a11y/href-no-hash": ["off"],
    "prettier/prettier": ["off"],
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "no-shadow": "off",
    "react/jsx-no-bind": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "eslint-disable-next-line": "off",
    "no-unsafe-optional-chaining": "off",
    "no-param-reassign": "off",
    "default-param-last": "off",
    "react/no-unused-class-component-methods": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-plusplus": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          "@material-ui/*/*/*",
          "!@material-ui/core/test-utils/*",
          "@mui/*/*/*",
          "!@mui/material/test-utils/*",
        ],
      },
    ],
    "max-len": [
      "warn",
      {
        code: 120,
        tabWidth: 2,
        comments: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
