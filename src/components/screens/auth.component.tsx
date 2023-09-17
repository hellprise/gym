import { Form } from '@/components/auth'

export const Auth = () => {
	return (
		<section className='flex h-[94vh] w-full flex-col items-center justify-center'>
			<div className='w-full max-w-lg rounded-2xl px-10 pb-16 pt-8 shadow-2xl shadow-secondary/20'>
				<Form buttonColor='primary' buttonSize='lg' />
			</div>
		</section>
	)
}
