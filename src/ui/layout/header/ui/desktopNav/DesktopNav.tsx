import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

import Styles from "./DesktopNav.module.scss";

export default function DesktopNav(): JSX.Element {
	return (
		<>
			<nav className={`${Styles.nav}`}>
				<Link href="/portafolio">Portafolio</Link>
				<Link href="/nosotros">Nosotros</Link>
				<Link href="/servicios">Servicios</Link>
				<Link href="/contacto">Contacto</Link>
			</nav>

			<nav className={`${Styles.socials}`}>
				<Link
					href="https://www.facebook.com/alextoro.arquitectos"
					target="_blank"
				>
					<FaFacebook />
				</Link>

				<Link
					href="https://www.instagram.com/alextoro_arquitectos"
					target="_blank"
				>
					<FaInstagram />
				</Link>

				<Link
					href="https://www.youtube.com/channel/UCvQWsRrgbx2oR4UU2Z5Up1Q"
					target="_blank"
				>
					<FaYoutube />
				</Link>

				<Link
					href="https://www.linkedin.com/company/alextoro-arquitectos/"
					target="_blank"
				>
					<FaLinkedin />
				</Link>
			</nav>
		</>
	);
}
