'use client'

import { MainNav } from '@/components/layouts/main-nav'
import Link from 'next/link'

export function MainHeader() {
	return (
		<div className='border-b'>
			<div className='flex h-16 items-center px-4'>
				<Link href='/'>
					<h3 className='text-xl animate-bounce'>Renze Boerman</h3>
				</Link>
				<div className='ml-auto flex items-center space-x-4'>
					<MainNav className='mx-6' />
				</div>
			</div>
		</div>
	)
}
