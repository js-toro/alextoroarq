import styled from "styled-components";

export const BackgroundImagesContainer = styled.div`
	position: absolute;

	width: 100%;
	height: 100dvh;
`;

export const Image = styled.img<{ $isActive: boolean }>`
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
