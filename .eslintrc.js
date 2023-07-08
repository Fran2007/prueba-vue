module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended',
		'plugin:vue/recommended',
		'eslint:recommended'
	],
	plugins: ['vue'],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {}
};
