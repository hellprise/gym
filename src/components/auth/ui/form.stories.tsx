import type { Meta, StoryObj } from '@storybook/react'

import { Form } from './form.component'

const meta: Meta<typeof Form> = {
	component: Form,
	title: 'Auth/UI/Form',
	args: {
		buttonColor: 'primary',
		buttonSize: 'md',
		className: ''
	},
	argTypes: {
		buttonColor: {
			options: ['primary', 'secondary', 'border-primary', 'border-secondary', 'transparent'],
			control: { type: 'select' }
		},
		buttonSize: {
			options: ['lg', 'md', 'sm'],
			control: { type: 'select' }
		},
		className: {
			control: { type: 'text' }
		}
	}
}

export default meta
type Story = StoryObj<typeof Form>

export const Basic: Story = {
	render: args => (
		<section className='max-w-lg'>
			<Form {...args} />
		</section>
	)
}
