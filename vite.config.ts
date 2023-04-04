import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy'
import alias from '@rollup/plugin-alias';
import { resolve } from 'path';

const publicDir = 'example-game1';
const outDir = 'dist-example';

export default defineConfig({
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        'jsx': 'automatic',
        'jsxImportSource': 'hxg',
        // jsxInject: `import  *  as a from '@/jsx/jsx-runtime.ts'`
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
    plugins: [
        alias({
            entries: [
                {
                    find: 'hxg/jsx-dev-runtime',
                    replacement: '@/jsx/jsx-runtime.ts'
                }
            ]
        })
    ],
    publicDir,
});