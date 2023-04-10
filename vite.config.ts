import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy'
import { resolve } from 'path';

const publicDir = 'example-game1';
const outDir = 'dist-example';

export default defineConfig({
    esbuild: {
        jsxFactory: 'jsx',
        jsxFragment: 'Fragment',
        jsx: 'transform',
        // jsxImportSource: 'hxg',
        jsxInject: `import { jsx, Fragment } from '/src/jsx-runtime'`
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
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