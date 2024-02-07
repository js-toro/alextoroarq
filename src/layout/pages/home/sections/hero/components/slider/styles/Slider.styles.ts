import { Breakpoints, Colors, FontFamilies } from "src/styles";
import styled, { keyframes } from "styled-components";

const animateSlider = keyframes`
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`;

export const SliderContainer = styled.div`
	width: 100%;
	height: 100dvh;
	padding: 3.2rem;

	display: grid;
	grid:
		". . ." 1fr
		"leftButton . rightButon" 1fr
		"projectName projectName projectName" 1fr
		/ 1fr 1fr 1fr;

	opacity: 1;

	animation-name: ${animateSlider};
	animation-duration: 1s;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		padding: 32px 96px;
	}
`;

export const LeftButtonContainer = styled.div`
	grid-area: leftButton;
	align-self: center;
`;

export const RightButtonContainer = styled.div`
	grid-area: rightButon;
	align-self: center;
	justify-self: flex-end;
`;

export const SliderButton = styled.img`
	width: 64px;

	@media (min-width: ${Breakpoints.tablet.large}) {
		width: 128px;
	}

	&:hover {
		cursor: pointer;
	}
`;

export const ProjectNameContainer = styled.div`
	grid-area: projectName;
	align-self: flex-end;

	span {
		color: ${Colors.white};
		font-family: ${FontFamilies.heading};
		font-weight: 700;
		font-size: clamp(3.2rem, 3.5vw, 4.8rem);
	}
`;
