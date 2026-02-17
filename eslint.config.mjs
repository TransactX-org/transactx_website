// @ts-check
import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-config/flat'

export default antfu(
  {
    vue: true,
    typescript: true,
    formatters: true,
  },
  unocss,
)
