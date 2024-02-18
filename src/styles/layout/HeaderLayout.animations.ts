'use client';
import { keyframes } from 'styled-components';

export const mobileMenuAnimation = keyframes`
	0% {
		transform: rotateZ(-45deg) scaleX(0) scaleY(10);
	}
	100% {
		transform: rotateZ(-45deg) scaleX(3) scaleY(10);
	}
`;
