import Link from 'next/link';
import { useState } from 'react';
import { HiViewGrid } from 'react-icons/hi';

import Styles from './MobileNav.module.scss';

const MobileNav = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen((prev) => !prev);

	return (
		<div className={`${Styles.wrapper} ${open ? Styles.wrapper_active : ''}`}>
			<div className={`${Styles.ghostBackground}`} onClick={handleOpen} />

			<button className={`${Styles.button}`} onClick={handleOpen}>
				<HiViewGrid />
			</button>

			<nav className={`${Styles.nav}`}>
				<Link href="/portafolio" onClick={handleOpen}>
					Portafolio
				</Link>

				<Link href="/servicios" onClick={handleOpen}>
					Servicios
				</Link>

				<Link href="/nosotros" onClick={handleOpen}>
					Nosotros
				</Link>

				<Link href="/contactanos" onClick={handleOpen}>
					Contáctanos
				</Link>
			</nav>
		</div>
	);
};

export default MobileNav;
