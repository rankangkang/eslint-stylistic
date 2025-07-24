import { fileURLToPath } from 'node:url'
import { createConfig } from '../../rollup.config.node14.mjs'

export default createConfig(fileURLToPath(new URL('.', import.meta.url)))
