module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  processors: [
    [
      '@mapbox/stylelint-processor-arbitrary-tags',
      { fileFilterRegex: [/\.vue$/] },
    ],
  ],
  rules: {
    'selector-max-compound-selectors': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'for',
          'extend',
          'use',
          'include',
          'mixin',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'scss/dollar-variable-pattern': null,
    'selector-max-id': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'scss/selector-no-redundant-nesting-selector': null,
    'selector-class-pattern': null,
    'property-no-vendor-prefix': null,
    'max-nesting-depth': 3,
    'selector-no-vendor-prefix': null,
    'order/properties-alphabetical-order': null,
    'value-no-vendor-prefix': null,
    'selector-no-qualifying-type': null,
  },
}
