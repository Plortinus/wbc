/* eslint-disable prettier/prettier */
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
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
      file: 'dev/build/bundle.js',
      name: 'wbcstarter',
      format: 'umd'
    },
  ],
  plugins: [
    resolve({
      extensions: [".js", ".jsx"],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    postcss({
      extensions: [".css"],
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "dev"],
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dev/build" }),
    peerDepsExternal(),
    analyze(),
  ],
  external: ['react', 'react-dom'],
}
