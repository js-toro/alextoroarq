import { colors, gradient, breakpoints, typography } from './lib';
import { Colors, Gradient, Breakpoints, Typography } from './lib';

export type Theme = {
	colors: Colors;
	gradient: Gradient;
	breakpoints: Breakpoints;
	typography: Typography;
};

export const defaultTheme: Theme = {
	colors,
	gradient,
	breakpoints,
	typography,
};

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
