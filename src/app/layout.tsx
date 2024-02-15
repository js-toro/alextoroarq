import type { Metadata } from 'next';
import { StyledComponentsRegistry } from '@/lib';

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
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
