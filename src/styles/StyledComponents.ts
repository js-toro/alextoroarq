import styled from "styled-components";
import { Breakpoints, Colors, FontFamilies } from ".";

export const Button = styled.div`
	padding: 16px;
	border-radius: 4px;
	border: 2px solid ${Colors.white};

	background-color: #00000055;
	color: ${Colors.white};
	font-family: ${FontFamilies.body};
	font-weight: 700;
	font-size: clamp(1.6rem, 2.5vw, 2.4rem);
	text-align: center;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		padding: 16px 64px;
	}

	&::before,
	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;
		transform: scaleY(0);
		transition: transform 0.16s ease-in-out;
	}

	&::before {
		z-index: -1;

		background-color: ${Colors.black};
	}

	&::after {
		z-index: 1;

		background-color: ${Colors.white};
		mix-blend-mode: difference;
	}

	&:hover {
		cursor: pointer;

		&::before,
		&::after {
			transform: scaleY(1);
		}
	}
`;
