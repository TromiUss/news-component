import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
  input: './src/main.tsx',
  output: {
    file: 'public/bundle.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    nodeResolve({
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
};
