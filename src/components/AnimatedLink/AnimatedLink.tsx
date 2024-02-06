import React, { ReactNode } from "react";
import { Link } from "./styles";

type NavLinkProps = {
	to: string;
	onClick?: () => void;
	children: ReactNode;
};

/**
 * This component is a wrapper for the Link component from react-router-dom.
 */
export const AnimatedLink: React.FC<NavLinkProps> = ({
	to,
	onClick,
	children,
}) => {
	return (
		<Link to={to} onClick={onClick}>
			{children}
		</Link>
	);
};
