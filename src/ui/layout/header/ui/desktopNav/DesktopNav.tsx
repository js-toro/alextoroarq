import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

import Styles from './DesktopNav.module.scss';

const DesktopNav = () => {
	return (
		<>
			<nav className={`${Styles.nav}`}>
				<Link href="/nosotros">La Firma</Link>
				<Link href="/portafolio">Portafolio</Link>
				<Link href="/contacto">Contacto</Link>
			</nav>

			<nav className={`${Styles.socials}`}>
				<Link href="https://www.facebook.com">
					<FaFacebook />
				</Link>

				<Link href="https://www.facebook.com">
					<FaInstagram />
				</Link>

				<Link href="https://www.facebook.com">
					<FaYoutube />
				</Link>

				<Link href="https://www.facebook.com">
					<FaLinkedin />
				</Link>
			</nav>
		</>
	);
};

export default DesktopNav;
