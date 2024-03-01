import type { Metadata } from 'next';

import { ThemeProvider } from '@/ui/theme/ThemeProvider';

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
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
