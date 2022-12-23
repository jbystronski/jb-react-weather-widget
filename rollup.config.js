import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import externals from "rollup-plugin-node-externals";
import babel from "@rollup/plugin-babel";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";
const packageJson = require("./package.json");
const dev = process.env.NODE_ENV === "development";
const extensions = [".js", ".jsx"];

export default [
  {
    external: ["react", "react-dom", "styled-components"],
    input: "src/index.js",
    output: [
      {
        file: packageJson.module,
        format: "es",
        sourcemap: dev,

        // exports: "named",
      },
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: dev,
      },
    ],
    plugins: [
      externals(),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      resolve({ extensions }),
      commonjs({
        ignoreGlobal: true,
        include: /\/node_modules\//,
      }),

      babel({
        extensions,
        exclude: /^(.+\/)?node_modules\/.+$/,
        babelrc: false,
        babelHelpers: "runtime",
        presets: ["@babel/preset-env", "@babel/preset-react"],
        babelHelpers: "runtime",
        plugins: [
          "@babel/plugin-transform-runtime",
          "@babel/plugin-syntax-dynamic-import",
        ],
      }),
      terser(),
    ],
  },
];
