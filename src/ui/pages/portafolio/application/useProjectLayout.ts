"use client";
import { useEffect, useLayoutEffect, useState } from "react";

import { Category } from "@/domain/enums";

export default function useProjectLayout(
	currentScroll: number,
	activeCategory: Category
) {
	const [banner, setBanner] = useState<string>(
		"/assets/images/portafolio/portafolio-multifamiliar.jpg"
	);

	useLayoutEffect(() => {
		// set time out
		const timer = setTimeout(() => {
			window.scrollTo({
				top: currentScroll,
				behavior: "smooth",
			});
		}, 250);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		switch (activeCategory) {
			case Category.Multifamiliar:
				setBanner("/assets/images/portafolio/portafolio-multifamiliar.jpg");
				break;
			case Category.Unifamiliar:
				setBanner("/assets/images/portafolio/portafolio-unifamiliar.jpg");
				break;
			case Category.Otros:
				setBanner("/assets/images/portafolio/portafolio-otros.jpg");
				break;
			default:
				setBanner("/assets/images/portafolio/portafolio-todos.jpg");
				break;
		}
	}, [activeCategory]);

	return { banner };
}
