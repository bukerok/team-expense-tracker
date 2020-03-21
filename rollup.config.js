import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: ['src/expense-tracker.js'],
  output: {
    file: 'dist/src/expense-tracker.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    babel(),
    terser(),
  ]
};