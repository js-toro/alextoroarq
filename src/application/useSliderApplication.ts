"use client";
import { useEffect, useState } from "react";
import { sliderRepository } from "@/infrastructure/repositories/sliderRepository";
import { ISlider } from "@/domain/interfaces/ISlider";

export const useSliderApplication = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [images, setImages] = useState<string[]>([]);
	const [currentImage, setCurrentImage] = useState<number>(0);

	useEffect(() => {
		sliderRepository().then((response) => {
			setImages(response.images);
			setIsLoading(false);
		});
	}, []);

	const handlePrev = () => {
		if (currentImage === 0) {
			setCurrentImage(images.length - 1);
		} else {
			setCurrentImage(currentImage - 1);
		}
	};

	const handleNext = () => {
		if (currentImage === images.length - 1) {
			setCurrentImage(0);
		} else {
			setCurrentImage(currentImage + 1);
		}
	};

	return { isLoading, images, currentImage, handlePrev, handleNext };
};
