import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from './theme';

import './tailwind.css';

const GlobalStyles = createGlobalStyle`
	/* TODO - Resolver el problema de lectura indefinida. */
   body {
      background-color: ${defaultTheme.colors.white};
		font-family: ${defaultTheme.typography.body.style.fontFamily};
		font-size: 1rem;
		line-height: normal;
   }
`;

export default GlobalStyles;
