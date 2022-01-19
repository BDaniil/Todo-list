
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: [
		'import',
		'svelte3',
		'@typescript-eslint',
		'prettier'],
	ignorePatterns: ['*.cjs','*.config.*'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript'),
		'svelte3/ignore-styles': () => true,
		'import/resolver':{
			"eslint-import-resolver-custom-alias":{
				"alias":{
					"@src":"./src",
					"@stores":"./src/stores",
					"@useSnapshot":"./src/useSnapshot"
				},
				extensions:[".js",".ts",".jsx",".svelte"],
				packages:["packages/*"]
			}
		}
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules:{
       //'prettier/prettier':"warn"
	   "prefer-const":'error',
	   "@typescript-eslint/no-unused-vars": [
		  	"error",
			{ "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
	   	],
		"@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-explicit-any": "warn",
		"no-debugger": "warn",
		"no-extra-boolean-cast": "warn",
		//not working need should be fixed later
		"import/no-unresolved":"error",
		 "import/order": [
            "warn",
            {
                "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
                "newlines-between": "always"
            }
        ]
	}
};
