import Link from 'next/link'
import { FC } from 'react'

import { ICategoriesListProps } from '@/components/ui'

export const CategoriesList: FC<ICategoriesListProps> = ({ list }) => {
	return (
		<section className='mb-3 flex gap-3'>
			{list.map(item => (
				<Link href={item.slug} key={item.id} className='block rounded-full bg-gray-3 px-5 py-2'>
					<p className='text-xs font-medium uppercase md:text-sm'>{item.name}</p>
				</Link>
			))}
		</section>
	)
}
