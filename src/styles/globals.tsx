import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './globals.css';

const GlobalStyles = createGlobalStyle`
   body {
      background-color: black;
		font-size: 1.6rem;
		font-family: ${theme.typography.body.style.fontFamily};
   }
`;

export const GlobalStylesProvider = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};
