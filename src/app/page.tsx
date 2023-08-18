import { Icons } from '@/components/icons'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='m-auto flex flex-col gap-10 items-center text-zinc-900'>
			<p className='text-4xl'>Renze Boerman</p>
			<div className='m-auto flex gap-10'>
				<Link
					href='https://github.com/RenzeBoerman'
					className='text-3xl'
				>
					<Icons.Github />
				</Link>
				<Link href='mailto:mail@renzeboerman.nl' className='text-3xl'>
					<Icons.Mail />
				</Link>
			</div>
		</div>
	)
}
