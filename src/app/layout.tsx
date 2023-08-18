import './globals.css'
import type { Metadata } from 'next'
import { MainHeader } from '@/components/layouts/main-header'

export const metadata: Metadata = {
	title: 'Renze Boerman',
	description:
		'Bekijk mijn portfolio als software developer met diverse projecten en vaardigheden. Ontdek mijn werk en expertise in software-oplossingen'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='h-screen flex flex-col'>
				<MainHeader />
				{children}
			</body>
		</html>
	)
}
