"use client";
import { useEffect, useState } from "react";

import { Category } from "@/domain/enums";

export default function useProjectLayout() {
	const [activeCategory, setActiveCategory] = useState<Category>(
		Category.Untracked
	);
	const [banner, setBanner] = useState<string>(
		"/assets/images/portafolio/portafolio-multifamiliar.jpg"
	);

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

	const handleCategory = (category: Category) => {
		setActiveCategory(category);
	};

	return { banner, activeCategory, handleCategory };
}
