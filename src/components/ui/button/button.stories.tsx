import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button.component'

// const buttonColorOptions = ['primary', 'secondary', 'border-primary', 'border-secondary', 'transparent']
const iconVariants = ['none', 'chevron-down', 'arrow-left', 'close', 'search', 'hamburger']

const meta: Meta<typeof Button> = {
	component: Button,
	title: 'UI/Button',
	args: {
		children: 'Button'
	},
	argTypes: {
		children: {
			control: { type: 'text' }
		},
		className: {
			control: { type: 'text' }
		},
		icon: {
			options: iconVariants,
			control: { type: 'radio' }
		}
		// color: {
		//   options: buttonColorOptions,
		//   control: { type: 'radio' },
		// },
	}
}

export default meta
type Story = StoryObj<typeof Button>

export const Basic: Story = {
	render: args => (
		<section className='bg-gray-200 p-5'>
			<Button {...args} />
		</section>
	)
}
