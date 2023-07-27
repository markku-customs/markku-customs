module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  importOrder: [
    '^(react|react-dom/client)$',
    '<THIRD_PARTY_MODULES>',
    '^@/components/(.*)$',
    '^[./]',
    '.css$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
