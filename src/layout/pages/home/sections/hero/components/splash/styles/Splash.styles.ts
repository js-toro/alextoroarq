import { Colors, FontFamilies } from "src/styles";
import styled, { keyframes } from "styled-components";

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

export const SplashContainer = styled.div<{ $animationTime: number }>`
	width: 100%;
	height: 100dvh;
	padding: 0 3.2rem;

	display: flex;
	align-items: center;
	justify-content: center;

	opacity: 0;

	animation-name: ${animateSplash};
	animation-duration: ${({ $animationTime }) => $animationTime}ms;
`;

export const Heading = styled.h1`
	color: ${Colors.white};
	font-family: ${FontFamilies.heading};
	font-size: clamp(4.2rem, 5dvw, 9.6rem);
	font-weight: 700;

	span {
		display: block;
		font-size: clamp(2.2rem, 3dvw, 4.8rem);
		font-weight: 200;
	}
`;
