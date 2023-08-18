import { NavItemWithChildren } from '@/types'

export type MenuConfig = {
	mainNav: NavItemWithChildren[]
}

export const menuConfig: MenuConfig = {
	mainNav: [
		{
			title: 'Contact',
			href: 'mailto:mail@renzeboerman.nl'
		}
	]
}
