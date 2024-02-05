import styled, { createGlobalStyle } from 'styled-components';
import { Colors } from '.';

/**
 * High Order Component that define the global styles of the application
 */
export const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		position: relative;
		overflow: auto;
		width: 100%;
		min-height: 100%;
		font-size: 62.5%;
		line-height: 1.15;
		-webkit-text-size-adjust: 100%;

	}

	body {
		position: relative;
		overflow: hidden;
		width: 100%;
		min-height: 100%;
		scroll-behavior: smooth;
    scroll-behavior: smooth;
		font-family: 'Red Hat Display', sans-serif;
		background-color: ${Colors.white};
		color: ${Colors.black};
    font-size: 1.6rem;
		line-height: normal;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		font-weight: normal;
		text-rendering: optimizeLegibility;
	}

	img {
		max-width: 100%;
		border-style: none;
		display: block;
		object-fit: cover;
	}
`;

export const Wrapper = styled.section`
	width: 90%;
	margin: 0 auto;

	// temporal
	min-height: 100vh;
`;
