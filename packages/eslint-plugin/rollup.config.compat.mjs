import { fileURLToPath } from 'node:url'
import { createConfig } from '../../rollup.config.compat.mjs'

export default createConfig(fileURLToPath(new URL('.', import.meta.url)))
