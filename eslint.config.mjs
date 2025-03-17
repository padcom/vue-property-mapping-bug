import vueEslintPlugin from 'eslint-plugin-vue'
import vueTypescriptEslintConfig from '@vue/eslint-config-typescript'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...vueEslintPlugin.configs['flat/essential'],
  ...vueTypescriptEslintConfig({ extends: ['recommendedTypeChecked'] }),
  {
    name: 'test',
    files: ['**/*.vue'],
    rules: {
      'vue/attribute-hyphenation': ['error', 'always'],
    },
  },
]
