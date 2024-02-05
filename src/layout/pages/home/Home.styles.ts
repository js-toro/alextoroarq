import styled from 'styled-components';
import * as Base from '../../../styles';

export const Main = styled.main`
	position: relative;
	pointer-events: none;
`;

export const Banner = styled.div`
	position: absolute;
	z-index: -1;
	width: 100%;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
		filter: brightness(0.8);
	}
`;

export const Wrapper = styled(Base.Wrapper)<{ $hero: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Heading = styled.h1`
	color: ${Base.Colors.white};
	font-family: 'Inter', sans-serif;
	font-size: 9.6rem;
	font-weight: 700;

	span {
		display: block;

		font-family: 'Inter', sans-serif;
		font-size: 4.8rem;
		font-weight: 200;
	}
`;
