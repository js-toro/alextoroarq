import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatedLink } from "src/components";

import { NavIcon } from "./components";
import { useHome } from "./hooks";
import { getLogo } from "./utilities";
import {
	HeaderContainer,
	HeaderLogoContainer,
	NavContainer,
	MenuContainer,
} from "./styles";

export const Header = () => {
	const isHome = useHome();
	const logo = getLogo(isHome);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navIconRef = useRef<SVGSVGElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				navIconRef.current &&
				navIconRef.current.contains(event.target as Node)
			) {
				return;
			}

			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<HeaderContainer $home={isHome}>
			<HeaderLogoContainer>
				<NavLink to="/">
					<img src={logo} alt="Logo de Alex Toro Arquitectos" />
				</NavLink>
			</HeaderLogoContainer>

			<NavContainer $open={isMenuOpen} $home={isHome}>
				<NavIcon onClick={handleMenuClick} reference={navIconRef} />

				<MenuContainer $open={isMenuOpen} ref={menuRef}>
					<AnimatedLink to="portafolio" onClick={handleMenuClick}>
						Portafolio
					</AnimatedLink>

					<AnimatedLink to="servicios" onClick={handleMenuClick}>
						Servicios
					</AnimatedLink>

					<AnimatedLink to="nosotros" onClick={handleMenuClick}>
						Nosotros
					</AnimatedLink>

					<AnimatedLink to="contactanos" onClick={handleMenuClick}>
						Contáctanos
					</AnimatedLink>
				</MenuContainer>
			</NavContainer>
		</HeaderContainer>
	);
};
