"use client";
import { useEffect, useState } from "react";

import sliderRepository from "../infrastructure/repositories/sliderRepository";

interface IUseSliderApplication {
	isLoading: boolean;
	images: string[];
	currentImage: number;
	handlePrev: () => void;
	handleNext: () => void;
}

export default (): IUseSliderApplication => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [images, setImages] = useState<string[]>([]);
	const [currentImage, setCurrentImage] = useState<number>(0);

	useEffect((): void => {
		sliderRepository().then((response) => {
			setImages(response.images);
			setIsLoading(false);
		});
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			if (images.length > 0) {
				handleNext();
			}
		}, 3000);

		return () => clearInterval(interval);
	}, [currentImage, images]);

	const handlePrev = (): void => {
		if (currentImage === 0) {
			setCurrentImage(images.length - 1);
		} else {
			setCurrentImage(currentImage - 1);
		}
	};

	const handleNext = (): void => {
		if (currentImage === images.length - 1) {
			setCurrentImage(0);
		} else {
			setCurrentImage(currentImage + 1);
		}
	};

	return { isLoading, images, currentImage, handlePrev, handleNext };
};
