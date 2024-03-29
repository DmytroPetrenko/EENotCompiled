module.exports = {
  root: true,
  env: {
    node: true,
  },
  rules: {
    curly: ['error', 'all'],
    'require-await': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'prettier/prettier': 'error',
    'unused-imports/no-unused-imports': 2,
    'vue/no-v-html': 'off',
    'vue/valid-define-props': 'error',
    'vue/valid-define-emits': 'error',
    'vue/no-export-in-script-setup': 'error',
    'vue/script-setup-uses-vars': 'warn',
    'vue/valid-v-memo': 'error',
    'vue/require-default-prop': 'off',
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
    'vue/block-tag-newline': 'error',
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/no-empty-component-block': 'error',
    'vue/no-static-inline-styles': [
      'error',
      {
        allowBinding: true,
      },
    ],
    'vue/no-bare-strings-in-template': [
      'error',
      {
        allowlist: [
          '(',
          ')',
          ',',
          '.',
          '&',
          '+',
          '-',
          '=',
          '*',
          '/',
          '#',
          '%',
          '!',
          '?',
          ':',
          '[',
          ']',
          '{',
          '}',
          '<',
          '>',
          '@',
          'Qliq ID',
          'Android',
          'Windows',
          'Mac',
          'WCTP',
          'API',
          'URL',
          'Webhook',
          'Quincy',
          'IP',
          '•',
          'EMR',
          'Azure',
          'Docusign',
          '|',
        ],
        attributes: {
          '/.+/': [
            'title',
            'aria-label',
            'aria-placeholder',
            'aria-roledescription',
            'aria-valuetext',
          ],
          input: ['placeholder'],
        },
        directives: ['v-text'],
      },
    ],
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      1,
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'parent',
          'index',
          'object',
          'type',
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        pathGroups: [
          // if library starts from @ add in rules with external group
          {
            pattern: '@twilio/**',
            group: 'external',
          },
          {
            pattern: '@vue/**',
            group: 'external',
          },
          {
            pattern: '@pinia/**',
            group: 'external',
          },
          {
            pattern: '@shared/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@protots/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@**/**',
            group: 'internal',
            position: 'after',
          },
        ],
      },
    ],
  },
}
