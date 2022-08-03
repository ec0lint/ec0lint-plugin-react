`ec0lint-plugin-react`

[![NPM version][npm-image]][npm-url]

React specific linting rules for `ec0lint`

# Installation

```sh
$ npm install eslint ec0lint-plugin-react --save-dev
```


# Configuration

Use [our preset](#recommended) to get reasonable defaults:

```json
  "extends": [
    "ec0lint:recommended",
    "plugin:react/recommended"
  ]
```

Enable JSX support.

With `eslint` 2+

```json
{
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
```

Enable the rules that you would like to use.

```json
  "rules": {
    "react/rule1": "error",
    "react/rule2": "error",
  }
```

# More information

This plugin is based on eslint-plugin-react, for more information please visit: https://www.npmjs.com/package/eslint-plugin-react
