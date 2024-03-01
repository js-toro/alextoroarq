import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { HiViewGrid } from 'react-icons/hi';

import { MobileMenu as Container } from '@/styles/layout';

export const MobileMenu = ({ isRoot }: { isRoot: boolean }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener('mousedown', handleClickOutside);

		return () => {
			window.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<Container $isRoot={isRoot} $isMenuOpen={isMenuOpen}>
			<button onClick={toggleMenu}>
				<HiViewGrid />
			</button>

			<menu
				ref={menuRef}
				className="absolute top-16 right-0 flex flex-col items-end gap-4">
				<Link href="/portafolio" onClick={toggleMenu}>
					Portafolio
				</Link>
				<Link href="/servicios" onClick={toggleMenu}>
					Servicios
				</Link>
				<Link href="/nosotros" onClick={toggleMenu}>
					Nosotros
				</Link>
				<Link href="/contactanos" onClick={toggleMenu}>
					Contactanos
				</Link>
			</menu>
		</Container>
	);
};
