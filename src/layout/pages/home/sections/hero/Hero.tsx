import { useEffect, useState } from "react";

import { hero } from "./utilities";
import { Slider, Splash } from "./components";
import { HeroContainer } from "./styles/Hero.styles";

export const Hero = () => {
	const maxTime = 5000;
	const [isSplashVisible, setIsSplashVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsSplashVisible(false);
		}, maxTime);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<HeroContainer>
			<img
				src={hero}
				alt="Hermosa vista del edifio Tibet, un proyecto de Alex Toro Arquitectos"
			/>

			{isSplashVisible && <Splash maxTime={maxTime} />}
			{!isSplashVisible && <Slider />}
		</HeroContainer>
	);
};
