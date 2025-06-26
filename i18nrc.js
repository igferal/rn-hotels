module.exports = {
  localesPaths: ['src/i18n/languages'],
  pathMatcher: '{locale}.ts',
  sourceLanguage: 'en',
  namespace: false,
  defaultNamespace: 'translation',
  keystyle: 'nested',
  parsers: ['ts'],
  frameworks: ['react', 'i18next'],
};
