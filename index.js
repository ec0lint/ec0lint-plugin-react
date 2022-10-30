'use strict';

const fromEntries = require('object.fromentries');
const entries = require('object.entries');

/* eslint-disable global-require */
const allRules = {
  // 'boolean-prop-naming': require('./lib/rules/boolean-prop-naming'),
};
/* eslint-enable */

function filterRules(rules, predicate) {
  return fromEntries(entries(rules).filter((entry) => predicate(entry[1])));
}

function configureAsError(rules) {
  return fromEntries(Object.keys(rules).map((key) => [`react/${key}`, 2]));
}

const activeRules = filterRules(allRules, (rule) => !rule.meta.deprecated);
const activeRulesConfig = configureAsError(activeRules);

const deprecatedRules = filterRules(allRules, (rule) => rule.meta.deprecated);

module.exports = {
  deprecatedRules,
  rules: allRules,
  configs: {
    recommended: {
      plugins: [
        'react',
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        // 'react/display-name': 2,
      },
    },
    all: {
      plugins: [
        'react',
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: activeRulesConfig,
    },
    'jsx-runtime': {
      plugins: [
        'react',
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        jsxPragma: null, // for @typescript/eslint-parser
      },
      rules: {
        // 'react/react-in-jsx-scope': 0,
      },
    },
  },
};
