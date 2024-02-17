import type { Metadata } from 'next';
import StylesProvider from '@/styles';

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
			<body>
				<StylesProvider>{children}</StylesProvider>
			</body>
		</html>
	);
}
