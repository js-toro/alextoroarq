"use client";
import { useLayoutEffect } from "react";

import Hero from "./hero";
import Welcome from "./welcome";
import AboutUs from "./aboutUs";
import Projects from "./projects";
import useScroll from "@/application/client/useScroll";

export default function RootHome(): JSX.Element {
	const { setCurrentScroll } = useScroll();

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
		setCurrentScroll(0);
	}, [setCurrentScroll]);

	return (
		<main>
			<Hero />
			<Welcome />
			<AboutUs />
			<Projects />
		</main>
	);
}
