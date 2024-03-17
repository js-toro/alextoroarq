import type { Metadata } from 'next';
import ThemeProvider from '@/ui/theme';
import BaseHeader from '@/ui/layout/header';
import BaseFooter from '@/ui/layout/footer';

export const metadata: Metadata = {
	title: 'Alex Toro Arquitectos | Especialistas en Vivienda Multifamiliar',
	description: 'Alex Toro Arquitectos | Especialistas en Vivienda Multifamiliar',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<ThemeProvider>
				<BaseHeader />
				{children}
				<BaseFooter />
			</ThemeProvider>
		</html>
	);
}
