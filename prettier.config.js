/** @type {import("prettier").Config} */
module.exports = {
	trailingComma: 'none',
	tabWidth: 2,
	printWidth: 120,
	useTabs: true,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	arrowParens: 'avoid',
	importOrder: [
		'<THIRD_PARTY_MODULES>',
		// "^@/components/(.*)$",
		'^@/components',
		'^@/core',
		'^@/providers',
		'^@/services',
		'^@/store',
		'^@/hooks',
		'^@/types',
		'^@/utils',
		'^../',
		'^./'
	],
	importOrderSeparation: true,
	plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss']
}
