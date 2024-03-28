import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

import useYear from "../application/useYear";
import Style from "./BaseFooter.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";

const BaseFooter = () => {
	const year = useYear();

	return (
		<footer className={`${Style.footer} ${Utils.container}`}>
			<div>
				<p className={`${Utils.text_light}`}>Alex Toro Arquitectos S.A.S</p>
				<small>Todos los derechos reservados &copy; {year}</small>
			</div>

			<nav className={`${Style.socials}`}>
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
		</footer>
	);
};

export default BaseFooter;
