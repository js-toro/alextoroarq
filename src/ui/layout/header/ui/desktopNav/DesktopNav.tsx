import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

import Styles from "./DesktopNav.module.scss";

const DesktopNav = () => {
	return (
		<>
			<nav className={`${Styles.nav}`}>
				<Link href="/nosotros">Nosotros</Link>
				<Link href="/portafolio">Portafolio</Link>
				<Link href="/servicios">Servicios</Link>
				<Link href="/contacto">Contacto</Link>
			</nav>

			<nav className={`${Styles.socials}`}>
				<Link href="https://www.facebook.com/alextoro.arquitectos">
					<FaFacebook />
				</Link>

				<Link href="https://www.instagram.com">
					<FaInstagram />
				</Link>

				<Link href="https://www.youtube.com/channel/UCvQWsRrgbx2oR4UU2Z5Up1Q">
					<FaYoutube />
				</Link>

				<Link href="https://www.linkedin.com/in/alextoroarquitectos/">
					<FaLinkedin />
				</Link>
			</nav>
		</>
	);
};

export default DesktopNav;
