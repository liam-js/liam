module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	globals: {
		requirejs: true
	},
	parser: '@babel/eslint-parser',
	parserOptions: {
		requireConfigFile: false
	},
	extends: [
		'eslint:recommended',
		// 'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
		// 'plugin:import/recommended',
		// 'plugin:import/typescript'
	],
	rules: {
		'prettier/prettier': [
			'warn',
			{
				singleQuote: true,
			}
		]
	},
	ignorePatterns: [
		'node_modules/**/*.*',
		'umd/**/*.*',
		// '/test/**/*.*',
		// '!/test/*.js',
		// '!/test/*/*.js',
		// '/test/node_modules/*.*',
		// '!/test/*/samples/**/_config.js',
		// '!/test/*/samples/**/rollup.config.js'
	],

};