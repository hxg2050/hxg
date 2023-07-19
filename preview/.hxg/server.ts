import { fileURLToPath } from 'url'
import { createServer } from 'vite'

import createIndex from './replace';

const __dirname = await createIndex(process.argv[3]);//fileURLToPath(new URL('.', import.meta.url))
console.log(__dirname);
;(async () => {
  const server = await createServer({
    // 任何合法的用户配置选项，加上 `mode` 和 `configFile`
    configFile: fileURLToPath(new URL('.', import.meta.url)) + 'vite.config.ts',
    root: __dirname,
    server: {
      port: 1337,
    },
  })
  await server.listen()

  server.printUrls()
  
})()
// src/sance/user