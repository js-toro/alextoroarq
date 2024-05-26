"use client";
import { useLayoutEffect } from "react";

import Hero from "./hero";
import Welcome from "./welcome";
import AboutUs from "./aboutUs";
import Projects from "./projects";

const RootHome = () => {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main>
			<Hero />
			<Welcome />
			<AboutUs />
			<Projects />
		</main>
	);
};

export default RootHome;
