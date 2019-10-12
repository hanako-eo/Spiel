import resolve from "rollup-plugin-node-resolve"
import builtins from "rollup-plugin-node-builtins"
import commonjs from "rollup-plugin-commonjs"
import typescript from "rollup-plugin-typescript"
import babel from "rollup-plugin-babel"
import { terser } from "rollup-plugin-terser"

function builder(format, filename, filenamemin){
	return [
		{
			input: "src/app.ts",
			output: {
				exports: "named",
				name: "Spiel",
				file: "lib/" + filename,
				format
			},
			plugins: [
				resolve({preferBuiltins: true}),
				builtins(),
				typescript({module: "CommonJS", lib: ["es5", "es6", "dom"], target: "es5"}),
				commonjs({extensions: [".ts", ".js"]}),
			]
		},
		{
			input: "src/app.ts",
			output: {
				exports: "named",
				name: "Spiel",
				file: "lib/" + filenamemin,
				format: "cjs"
			},
			plugins: [
				resolve({preferBuiltins: true}),
				builtins(),
				typescript({module: "CommonJS", lib: ["es5", "es6", "dom"], target: "es5"}),
				commonjs({extensions: [".ts", ".js"]}),
				babel(),
				terser()
			]
		}
	]
}

export default [
	...builder("umd", "spiel.js", "spiel.min.js"),
	...builder("esm", "spiel.esm.js", "spiel.esm.min.js"),
	...builder("cjs", "spiel.cjs.js", "spiel.cjs.min.js"),
	...builder("iife", "spiel.iife.js", "spiel.iife.min.js")
];
