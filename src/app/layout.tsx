import type { Metadata } from "next";

import StoreProvider from "./lib";
import ThemeProvider from "@/ui/theme";
import BaseHeader from "@/ui/layout/header";
import BaseFooter from "@/ui/layout/footer";

export const metadata: Metadata = {
	title:
		"Alex Toro Arquitectos | Especialisas en Vivienda Multifamiliar de Medellín",
	description:
		"Alex Toro Arquitectos es una firma que a lo largo de sus 20 años de experiencia se ha dedicado exclusivamente al diseño arquitectónico, especializándose en el campo de la Vivienda multifamiliar, sin desconocer la calidad en las otras categorías de diseño como servicios y vivienda unifamiliar en Medellín y su Área Metropolitana.",
	robots: "all",
	keywords: [
		"Arquitectura",
		"Arquitectos Medellín",
		"Diseños Multifamiliares",
		"Vivienda Multifamiliar",
		"Vivienda Unifamiliar",
		"Diseño Arquitectónico",
		"Modelado BIM",
		"Visualización Arquitectonica",
		"Alex Toro Arquitectos",
		"Arquitectura Sostenible",
		"Arquitectura Bioclimática",
	],
	openGraph: {
		title:
			"Alex Toro Arquitectos | Especialisas en Vivienda Multifamiliar de Medellín",
		description:
			"Alex Toro Arquitectos es una firma que a lo largo de sus 20 años de experiencia se ha dedicado exclusivamente al diseño arquitectónico, especializándose en el campo de la Vivienda multifamiliar, sin desconocer la calidad en las otras categorías de diseño como servicios y vivienda unifamiliar en Medellín y su Área Metropolitana.",
		type: "website",
		locale: "es_CO",
		url: "https://alextoroarquitectos.com",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<ThemeProvider>
				<StoreProvider>
					<BaseHeader />
					{children}
					<BaseFooter />
				</StoreProvider>
			</ThemeProvider>
		</html>
	);
}
