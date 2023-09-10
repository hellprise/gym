import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-styling',
			options: {}
		}
	],
	framework: {
		name: '@storybook/nextjs',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	// staticDirs: ["../public"], // This loads images at localhost:6006/next.svg e.t.c.
	async webpackFinal(config, { configType }) {
		if (config?.resolve?.alias) {
			config.resolve.alias = {
				...config.resolve.alias,
				// "@/src": path.resolve(__dirname, "../src"),
				'@/components': path.resolve(__dirname, '../src/components')
			}
		}
		return config
	}
}
export default config
