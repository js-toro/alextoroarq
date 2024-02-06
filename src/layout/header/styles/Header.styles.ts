import styled from "styled-components";

import { Breakpoints, Colors } from "src/styles";

export const HeaderContainer = styled.header<{ $home: boolean }>`
	${(home) =>
		home.$home &&
		`position: absolute;
		left: 0;
		right: 0;
	`}

	z-index: 1000;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 32px;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		align-items: normal;
		padding: 32px 96px;
	}
`;

export const HeaderLogoContainer = styled.div`
	width: 128px;
`;

export const NavContainer = styled.nav<{ $open: boolean; $home: boolean }>`
	a {
		color: ${({ $home }) => ($home ? "white	" : Colors.dark)};
	}

	svg {
		visibility: hidden;

		@media (max-width: ${Breakpoints.tablet.medium}) {
			visibility: visible;
			position: relative;
			z-index: 10;

			width: 32px;
			height: 32px;

			filter: ${({ $open, $home }) =>
				$open || $home ? "invert(1)" : "invert(0)"};

			transition: filter 0.3s ease-in-out;
		}
	}
`;

export const MenuContainer = styled.menu<{ $open: boolean }>`
	display: flex;
	gap: 32px;

	@media (max-width: ${Breakpoints.tablet.medium}) {
		position: absolute;
		top: 80px;
		right: 0;

		visibility: ${({ $open }) => ($open ? "visible" : "hidden")};

		flex-direction: column;
		align-items: flex-end;
		gap: 16px;

		a {
			color: ${Colors.white};
			opacity: ${({ $open }) => ($open ? 1 : 0)};
			transition: opacity 0.5s ease-in-out;
		}

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;

			width: 100%;
			height: 100%;

			transform: rotate(-45deg) scale(${({ $open }) => ($open ? 4 : 0)}, 10);
			transition: transform 0.5s ease-in-out;

			background-color: ${Colors.dark};
		}
	}
`;
