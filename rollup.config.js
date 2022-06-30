import resolve from "@rollup/plugin-node-resolve";

const D3_WARNING = /Circular dependency.*d3-interpolate/;

export default {
  input: "src/app.js",
  output: {
    file: "bundle.js",
    format: "cjs",
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      module: true,
    }),
  ],
  onwarn: function (message) {
    if (D3_WARNING.test(message)) {
      return;
    }
  },
};
