export type ColorsTypes = {
	primary: string;
	dark: string;
	black: string;
	white: string;
	gray: string;
};

/**
 * Object that defines the colors used in the application.
 */
export const Colors: ColorsTypes = {
	primary: "#0F31F2",
	dark: "#011140",
	black: "#090909",
	white: "#FDFDFD",
	gray: "#687179",
};

export type GradientTypes = {
	primary: string;
	secondary: string;
};

/**
 * Object that defines the gradients used in the application.
 */
export const Gradient = {
	primary: `radial-gradient(${Colors.dark}, ${Colors.primary})`,
	secondary: `radial-gradient(${Colors.primary}, ${Colors.dark})`,
};
