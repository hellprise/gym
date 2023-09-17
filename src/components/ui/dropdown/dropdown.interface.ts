export interface IDropdownListProps {
	onClick: (filter: string, option: IListItem) => void
	list: IListItem[]
	text: string
	filter: string
}

export interface IListItem {
	id: number
	name: string
	key: string
}
