module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'xo'],
	overrides: [
		{
			extends: ['xo-typescript', 'plugin:react/jsx-runtime', 'prettier'],
			files: ['*.ts', '*.tsx'],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'@typescript-eslint/no-floating-promises': 'off',
	},
};
