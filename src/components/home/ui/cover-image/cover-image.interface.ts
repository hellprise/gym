type ImageFilters = 'grayscale' | 'blur' | 'brightness' | 'contrast' | 'invert' | 'opacity' | 'saturate' | 'sepia'

export interface ICoverImageProps {
	imageUrl: string
	alt: string
	width: number
	height: number
	priority?: boolean
	filter?: ImageFilters
}
