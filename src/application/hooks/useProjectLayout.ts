"use client";
import { useState } from "react";

import { Category } from "@/domain/enums";

export default function useProjectLayout() {
	const [activeCategory, setActiveCategory] = useState<Category>(
		Category.Multifamiliar
	);

	const handleCategory = (category: Category) => {
		setActiveCategory(category);
	};

	return { activeCategory, handleCategory };
}
