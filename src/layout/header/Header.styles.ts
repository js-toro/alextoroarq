import styled from 'styled-components';
import { Colors } from '../../styles';

export const Wrapper = styled.header<{ $isHome: boolean }>`
	position: absolute;
	left: 0;
	right: 0;

	display: grid;
	grid-template-columns: 128px 1fr;

	margin: 32px auto;
	max-width: ${({ $isHome }) => ($isHome ? '90%' : '1200px')};

	a {
		color: ${({ $isHome }) => ($isHome ? Colors.white : Colors.black)};
		text-decoration: none;
	}
`;

export const Logo = styled.img`
	width: 128px;
`;

export const Nav = styled.nav`
	justify-self: flex-end;
	display: flex;
	align-items: center;
	gap: 48px;
`;
