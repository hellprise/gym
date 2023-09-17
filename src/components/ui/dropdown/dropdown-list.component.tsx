'use client'

import { Menu, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'

import { IDropdownListProps, Icon } from '@/components/ui'

export const DropdownList: FC<IDropdownListProps> = ({ list, text, filter, onClick }) => {
	return (
		<div className='text-right'>
			<Menu as='div' className='relative inline-block text-left'>
				<Menu.Button className='group inline-flex w-full items-center justify-between gap-2 rounded-xl border-2 border-gray-1/50 px-3 py-2 text-secondary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
					<p>{text}</p>

					<Icon
						name='chevron-down'
						className='h-4 w-4 text-gray-1 transition-transform duration-300 group-hover:rotate-180'
						aria-hidden='true'
					/>
				</Menu.Button>

				<Transition
					as={Fragment}
					enter='transition ease-out duration-100'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
					leave='transition ease-in duration-75'
					leaveFrom='transform opacity-100 scale-100'
					leaveTo='transform opacity-0 scale-95'
				>
					<Menu.Items className='absolute right-0 z-[3] mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-xl border-2 border-gray-1/50 bg-primary'>
						<div className='flex flex-col gap-y-1 p-3'>
							{list.map(item => (
								<Menu.Item key={item.id}>
									<button
										onClick={() => onClick(filter, item)}
										className='rounded-md px-2 py-[6px] text-left text-secondary/80 transition-colors duration-200 hover:bg-gray-2'
									>
										{item.name}
									</button>
								</Menu.Item>
							))}
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	)
}
