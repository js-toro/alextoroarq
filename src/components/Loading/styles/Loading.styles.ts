import { Colors, FontFamilies } from "src/styles";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

export const LoadingContainer = styled.div`
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 64px;

	background-color: ${Colors.dark};

	animation: ${fadeIn} 1s ease-in-out;

	span {
		color: ${Colors.white};
		font-family: ${FontFamilies.heading};
		font-size: clamp(4.2rem, 5dvw, 9.6rem);
		font-weight: 700;
	}

	img {
		// tamaños con clamp para que se vea bien en dispositivos móviles
		width: clamp(32px, 10vw, 128px);
		height: clamp(32px, 10vw, 128px);

		filter: invert(1) brightness(2); // TODO: Solucionar machete
	}
`;
