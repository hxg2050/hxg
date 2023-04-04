import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel'

export default defineConfig({
    input: 'src/index.ts',
    output: [{
        file: 'dist/index.cjs.js',
        format: 'cjs'
    }, {
        file: 'dist/index.esm.js',
        format: 'esm'
    }],
    plugins: [resolve(), typescript(), babel({ babelHelpers: 'bundled', extensions: ['ts', 'tsx'] })],
    external: ['moment']
});