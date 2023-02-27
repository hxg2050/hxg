import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy'

const publicDir = 'example-game1';
const outDir = 'dist-example';

export default defineConfig({
    build: {
        outDir: outDir,
        assetsDir: 'script',
        copyPublicDir: false,
        manifest: true,
        rollupOptions: {
            plugins: [
                copy({
                    targets: [
                        {
                            src: `${publicDir}/assets/*`,
                            dest: `${outDir}/assets`
                        }
                    ],
                    hook: 'writeBundle',
                    verbose: true
                })
            ]
        }
    },
    publicDir,
});