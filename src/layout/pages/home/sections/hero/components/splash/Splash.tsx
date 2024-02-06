import React from "react";
import { Heading, SplashContainer } from "./styles";

type SplashProps = {
	maxTime: number;
};

export const Splash: React.FC<SplashProps> = ({ maxTime }) => {
	return (
		<SplashContainer $animationTime={maxTime}>
			<Heading>
				<span>Especialistas en</span> Vivienda Multifamiliar
			</Heading>
		</SplashContainer>
	);
};
