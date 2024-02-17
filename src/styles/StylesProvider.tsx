'use client';

import { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import './globals.css';
import { defaultTheme } from './theme';
import StyledComponentsRegistry from '@/lib/registry';

const GlobalStyles = createGlobalStyle`
	/* TODO - Resolver el problema de lectura indefinida. */
   body {
      background-color: ${defaultTheme.colors.white};
		font-family: ${defaultTheme.typography.body.style.fontFamily};
		font-size: 1.6rem;
		line-height: normal;
   }
`;

export default function StylesProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<StyledComponentsRegistry>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />

				{isMounted && children}
			</ThemeProvider>
		</StyledComponentsRegistry>
	);
}
