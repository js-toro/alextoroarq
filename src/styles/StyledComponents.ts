import styled from "styled-components";
import { Breakpoints, Colors, FontFamilies } from ".";

export const Button = styled.div`
	padding: 16px;
	border-radius: 4px;
	border: 2px solid ${Colors.white};

	color: ${Colors.white};
	font-family: ${FontFamilies.body};
	font-weight: 700;
	font-size: clamp(1.6rem, 2.5vw, 2.4rem);
	text-align: center;

	@media (min-width: ${Breakpoints.tablet.medium}) {
		padding: 16px 64px;
	}

	&:hover {
		cursor: pointer;
	}
`;
