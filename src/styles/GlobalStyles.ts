import { createGlobalStyle } from "styled-components";
import { FontFamilies } from "./Typography";
import "./css/normalize.css";

export const GlobalStyles = createGlobalStyle`
	body {
		font-family: ${FontFamilies.body};
    font-size: 1.6rem;
		font-weight: 600;
	}

	h1,
	h2,
	h3,
	h4 {
		font-family: ${FontFamilies.heading};
	}

	a {
		color: inherit;
		font-family: ${FontFamilies.body};
	}
`;
