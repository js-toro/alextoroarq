import styled from "styled-components";

export const HeroContainer = styled.section`
	min-height: 100dvh;

	& > img {
		position: absolute;
		z-index: -10;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		object-fit: cover;
	}
`;
