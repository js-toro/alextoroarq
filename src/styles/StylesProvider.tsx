'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './theme';
import GlobalStyles from './gobals';
import StyledComponentsRegistry from '@/lib/registry';

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
