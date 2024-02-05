import * as Styled from './Header.styles';
import { NavLink } from 'react-router-dom';

import useHome from '../../hooks/useHome';

import logoWhite from '../../assets/icons/logo.png';
import logoFullColor from '../../assets/icons/logo_full-color.jpg';

export const Header = () => {
	const isHome = useHome();

	return (
		<Styled.Wrapper $isHome={isHome}>
			<NavLink to="/">
				<Styled.Logo
					src={isHome ? logoWhite : logoFullColor}
					alt="Logo de Alex Toro Arquitectos"
				/>
			</NavLink>

			<Styled.Nav>
				<NavLink to="portafolio">Portafolio</NavLink>
				<NavLink to="servicios">Servicios</NavLink>
				<NavLink to="conocenos">Conócenos</NavLink>
				<NavLink to="contactanos">Contáctanos</NavLink>
			</Styled.Nav>
		</Styled.Wrapper>
	);
};
