import { images } from "src/assets";

const logoWhite = images.Logo.LogoWhite;
const logoFullColor = images.Logo.LogoFullColor;

export const getLogo = (isHome: boolean) =>
	isHome ? logoWhite : logoFullColor;
