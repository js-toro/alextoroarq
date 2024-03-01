'use client';
import styled, { css } from 'styled-components';
import { defaultTheme } from '@/styles/theme';
import { mobileMenuAnimation } from './HeaderLayout.animations';

export const DesktopMenu = styled.menu<{ $isRoot: boolean }>`
	color: ${({ $isRoot }) =>
		$isRoot ? `${defaultTheme.colors.white}` : `${defaultTheme.colors.black}`};
	font-weight: 500;
	font-size: 1.25rem;

	a {
		position: relative;

		&::before {
			content: '';
			position: absolute;
			right: 0;
			left: 0;
			bottom: -5px;
			display: block;
			width: 100%;
			height: 3px;
			background-color: ${({ $isRoot }) =>
				$isRoot
					? `${defaultTheme.colors.white}`
					: `${defaultTheme.colors.black}`};
			transition: width 0.3s;
			border-radius: 2px;
			transform-origin: right;
			transform: scaleX(0);
			transition: transform 0.3s;
		}

		&:hover::before {
			transform: scaleX(1);
		}
	}

	@media (max-width: ${defaultTheme.breakpoints.tablet.large}) {
		display: none;
	}
`;

export const MobileMenu = styled.div<{
	$isRoot: boolean;
	$isMenuOpen: boolean;
}>`
	color: ${({ $isRoot, $isMenuOpen }) =>
		$isRoot || $isMenuOpen
			? defaultTheme.colors.white
			: defaultTheme.colors.black};

	font-weight: 500;
	font-size: 1.25rem;
	position: relative;
	z-index: 0;

	button {
		font-size: 2rem;
	}

	menu {
		opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? 1 : 0)};
		transition: opacity 0.3s;

		${({ $isMenuOpen }) =>
			$isMenuOpen &&
			css`
				&::before {
					content: '';

					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: -1;
					transform: rotateZ(-45deg) scaleX(3) scaleY(10);
					animation: ${mobileMenuAnimation} 0.5s ease-in-out;
					background-color: ${defaultTheme.colors.dark};
					pointer-events: none;
				}
			`}
	}

	@media (min-width: ${defaultTheme.breakpoints.tablet.large}) {
		display: none;
	}
`;
