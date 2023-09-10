import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from './icon.component'

const meta: Meta<typeof Icon> = {
	component: Icon,
	title: 'UI/Icon',
	argTypes: {
		className: {
			control: { type: 'text' }
		}
	}
}

export default meta
type Story = StoryObj<typeof Icon>

export const Basic: Story = {
	render: args => (
		<section className='bg-gray-200 p-5'>
			<Icon {...args} />
		</section>
	)
}
