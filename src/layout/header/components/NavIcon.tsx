import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type NavIconProps = {
	onClick: () => void;
	reference: React.RefObject<SVGSVGElement>;
};

export const NavIcon: React.FC<NavIconProps> = ({ onClick, reference }) => {
	return (
		<FontAwesomeIcon icon={faBarsStaggered} onClick={onClick} ref={reference} />
	);
};
