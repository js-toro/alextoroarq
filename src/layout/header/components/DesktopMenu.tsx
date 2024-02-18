import Link from 'next/link';
import { DesktopMenu as Container } from '@/styles/layout';

export const DesktopMenu = ({ isRoot }: { isRoot: boolean }) => {
	return (
		<Container
			$isRoot={isRoot}
			className="flex items-center justify-center gap-12">
			<Link href="/portafolio">Portafolio</Link>
			<Link href="/servicios">Servicios</Link>
			<Link href="/nosotros">Nosotros</Link>
			<Link href="/contactanos">Contactanos</Link>
		</Container>
	);
};
