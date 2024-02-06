import { NavLink } from "react-router-dom";
import { Colors } from "src/styles";
import styled from "styled-components";

export const Link = styled(NavLink)`
	padding: 8px;
	transition: color 0.3s ease-out;

	&::before {
		content: "";
		position: absolute;
		z-index: -1;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		width: 100%;
		height: 100%;
		border-radius: 2px;

		background-color: ${Colors.dark};
		transform: scaleX(0);
		transition: transform 0.3s ease-out;
	}

	&:hover {
		color: white;
	}

	&:hover::before {
		transform: scaleX(1);
	}
`;
