import { RefObject, useEffect, useState } from 'react'

export const useScrollPercent = (currentRef: RefObject<HTMLElement>) => {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			if (currentRef.current) {
				const elementTop = currentRef.current.getBoundingClientRect().top // визначає відстань від верху екрану до елементу
				const elementHeight = currentRef.current.offsetHeight // визначає висоту елементу
				const windowHeight = window.innerHeight // визначає висоту доступної для перегляду частини сайту
				const scrollPosition = window.scrollY // визначає кількість пікселів, на яку прокручено документ по вертикалі

				if (elementTop <= windowHeight && elementTop + elementHeight >= 0) {
					const newProgress = ((windowHeight - elementTop) / elementHeight) * 100
					setProgress(newProgress)
				} else {
					setProgress(0)
				}
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return progress
}
