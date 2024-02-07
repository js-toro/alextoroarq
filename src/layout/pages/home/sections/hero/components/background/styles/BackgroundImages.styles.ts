import { LazyLoadImage } from "react-lazy-load-image-component";
import { Colors } from "src/styles";
import styled from "styled-components";

export const BackgroundImagesContainer = styled.div`
	position: absolute;
	z-index: -1;

	width: 100%;
	height: 100dvh;

	background-color: ${Colors.dark};
`;

export const Image = styled(LazyLoadImage)<{ $isActive: boolean }>`
	position: absolute;
	z-index: -10;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;

	object-fit: cover;

	opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
	transition: opacity 2s ease;
`;
