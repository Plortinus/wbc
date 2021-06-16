/* eslint-disable prettier/prettier */
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import analyze from 'rollup-plugin-analyzer'
import replace from '@rollup/plugin-replace'
import postcss from 'rollup-plugin-postcss'

const packageJson = require('./package.json')

export default {
  input: 'src/index.js',
  output: [
    {
      exports: 'named',
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      exports: 'named',
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
    {
      name: 'wbcstarter',
      file: packageJson.unpkg,
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  plugins: [
    resolve({
      extensions: [".js", ".jsx"],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    postcss({
      extensions: [".css"],
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
    peerDepsExternal(),
    analyze(),
  ],
  external: ['react', 'react-dom'],
}
