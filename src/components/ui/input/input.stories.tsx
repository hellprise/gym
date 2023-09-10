import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input.component'

const meta: Meta<typeof Input> = {
	component: Input,
	title: 'UI/Input',
	args: {
		label: 'Email'
	},
	argTypes: {
		label: {
			control: { type: 'text' }
		},
		className: {
			control: { type: 'text' }
		}
	}
}

export default meta
type Story = StoryObj<typeof Input>

export const Basic: Story = {
	render: args => (
		<section className='max-w-lg p-5'>
			<Input {...args} />
		</section>
	)
}
