import type { Metadata } from 'next';
import StylesProvider from '@/styles';

import HeaderLayout from '../layout/header/HeaderLayout';

export const metadata: Metadata = {
	title: 'Alex Toro Arquitectos | Especialistas en Vivienda Multifamiliar',
	description:
		'Alex Toro Arquitectos | Especialistas en Vivienda Multifamiliar',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className="overflow-hidden">
				<StylesProvider>
					<HeaderLayout />
					{children}
				</StylesProvider>
			</body>
		</html>
	);
}
