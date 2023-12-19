import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  rules: {
    curly: ['error', 'all'],
  },
  typescript: true,
  vue: true,
  ignores: [],
})
