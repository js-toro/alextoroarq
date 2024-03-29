import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

import Styles from "./MobileNav.module.scss";

const MobileNav = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen((prev) => !prev);

	return (
		<div className={`${Styles.wrapper} ${open ? Styles.wrapper_active : ""}`}>
			<div className={`${Styles.ghostBackground}`} onClick={handleOpen} />

			<button className={`${Styles.button}`} onClick={handleOpen}>
				<HiMenu />
			</button>

			<nav className={`${Styles.nav}`}>
				<Link href="/nosotros" onClick={handleOpen}>
					La firma
				</Link>

				<Link href="/portafolio" onClick={handleOpen}>
					Portafolio
				</Link>

				<Link href="/contacto" onClick={handleOpen}>
					Contacto
				</Link>
			</nav>
		</div>
	);
};

export default MobileNav;
