import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

import Style from "./BaseFooter.module.scss";
import Utils from "@/ui/theme/application/utils/Utils.module.scss";

import ContactForm from "@/ui/pages/contactanos/ui/contactForm";
import useYear from "../application/useYear";

export default function BaseFooter(): JSX.Element {
	const year = useYear();

	return (
		<footer>
			<ContactForm />

			<div className={`${Style.footer} ${Utils.container}`}>
				<div>
					<p className={`${Utils.text_light}`}>Alex Toro Arquitectos S.A.S</p>
					<small>Todos los derechos reservados &copy; {year}</small>
				</div>

				<nav className={`${Style.socials}`}>
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
			</div>
		</footer>
	);
}
