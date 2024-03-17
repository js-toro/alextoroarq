import Link from 'next/link';

import Styles from './DesktopNav.module.scss';

const DesktopNav = () => {
	return (
		<nav className={`${Styles.nav}`}>
			<Link href="/portafolio">Portafolio</Link>
			{/* <Link href="/servicios">Servicios</Link> */}
			<Link href="/nosotros">Nosotros</Link>
			<Link href="/contactanos">Contáctanos</Link>
		</nav>
	);
};

export default DesktopNav;
