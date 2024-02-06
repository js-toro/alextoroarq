import logoWhite from "/src/assets/icons/logo.png";
import logoFullColor from "/src/assets/icons/logo_full-color.jpg";

export const getLogo = (isHome: boolean) => (isHome ? logoWhite : logoFullColor)