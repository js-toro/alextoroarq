'use client';
import { defaultTheme } from '@/styles/theme';
import styled, { keyframes } from 'styled-components';

const animateSplash = keyframes`
	0% {
		opacity: 0;
	}
	
	20% {
		opacity: 1;
	}
	
	80% {
		opacity: 1;
	}
	
	100% {
		opacity: 0;
	}
`;

export const SplashContainer = styled.div`
	animation: ${animateSplash} 5s ease-in-out;
	opacity: 0;
`;

export const Heading = styled.h1`
	color: ${defaultTheme.colors.white};
	font-family: ${defaultTheme.typography.heading.style.fontFamily};
	font-size: clamp(1.8rem, 3dvw, 4.8rem);
	font-weight: 200;

	strong {
		font-weight: 700;
		font-size: clamp(2.2rem, 5dvw, 9.6rem);
	}
`;

const animateSlider = keyframes`
	0% {
		opacity: 0;
	}
	
	80% {
		opacity: 0;
	}
	
	100% {
		opacity: 1;
	}
`;

export const SliderContainer = styled.div`
	animation: ${animateSlider} 5s ease-in-out;
`;

export const ProjectName = styled.span`
	color: ${defaultTheme.colors.white};
	font-family: ${defaultTheme.typography.heading.style.fontFamily};
	font-size: clamp(1.8rem, 3dvw, 4.8rem);
	font-weight: 700;
`;
