import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default defineConfig([{
    input: 'src/index.ts',
    output: [{
        dir: 'dist',
        // file: 'dist/index.cjs.js',
        entryFileNames: "[name].[format].js",
        format: 'cjs'
    }, {

        dir: 'dist',
        // file: 'dist/index.cjs.js',
        entryFileNames: "[name].[format].js",
        // file: 'dist/index.esm.js',
        format: 'esm'
    }],
    plugins: [resolve(), typescript()],
}, {
    input: 'src/jsx-runtime/index.ts',
    output: [{
        file: 'dist/jsx-runtime.cjs.js',
        format: 'cjs',
    }, {
        file: 'dist/jsx-runtime.esm.js',
        format: 'esm',
    }],
    plugins: [resolve(), typescript()],
    external: ['hxg']
},
]);