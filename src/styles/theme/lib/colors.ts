export type Colors = {
	primary: string;
	dark: string;
	black: string;
	white: string;
	gray: string;
};

/**
 * Object that defines the colors used in the application.
 */
export const colors: Colors = {
	primary: '#0F31F2',
	dark: '#011140',
	black: '#090909',
	white: '#FDFDFD',
	gray: '#687179',
};

export type Gradient = {
	primary: string;
	secondary: string;
};

/**
 * Object that defines the gradients used in the application.
 */
export const gradient: Gradient = {
	primary: `radial-gradient(${colors.dark}, ${colors.primary})`,
	secondary: `radial-gradient(${colors.primary}, ${colors.dark})`,
};
