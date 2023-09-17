export interface ICategoriesListProps {
	list: ICategory[]
}

export interface ICategory {
	id: number
	name: string
	slug: string
	// createdAt: string
	// updatedAt: string
}

export interface ICategoryFullest extends ICategory {
	description: string
}
