import { SVGAttributes } from 'react'

export type IconName =
	| 'chevron-down'
	| 'arrow-left'
	| 'close'
	| 'hamburger'
	| 'search'
	| 'gym'
	| 'facebook'
	| 'instagram'
	| 'twitter'

export interface IIconProps extends SVGAttributes<SVGElement> {
	icon?: IconName
}

// export interface IconBaseProps extends SVGAttributes<SVGElement> {
// 	children?: ReactNode;
// 	size?: string | number;
// 	color?: string;
// 	title?: string;
// }
// export declare type IconType = (props: IconBaseProps) => JSX.Element;
